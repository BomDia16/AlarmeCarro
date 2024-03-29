import AsyncStorage from "@react-native-async-storage/async-storage";

const generateUniqueId = () => {
    return new Date().getTime().toString();
};

const useStorage = () => {
    // buscar itens salvos
    const getItem = async (key) => {
        try {
            const carros = await AsyncStorage.getItem(key);
            return JSON.parse(carros) || [];

        } catch (error) {
            console.log('Erro ao buscar', error)
            return [];
        }
    }

    // salvar item no storage
    const saveItem = async (key, value) => {
        try {
            let carros = await getItem(key);
      
            // Atribui uma ID única ao carro usando a função generateUniqueId
            const carroComId = { ...value, id: generateUniqueId() };
      
            carros.push(carroComId);
            await AsyncStorage.setItem(key, JSON.stringify(carros));
        } catch (error) {
            console.log('Erro ao salvar', error);
        }
    }

    // deletar item no storage
    const removeItem = async (key, item) => {
        try {
            let carros = await getItem(key);
            let myCarros = carros.filter(carro => carro.id !== item.id);
            await AsyncStorage.setItem(key, JSON.stringify(myCarros));
            return myCarros;
        } catch (error) {
            console.log('Erro ao remover', error);
        }
    }

    // editar item no storage
    const updateItem = async (key, updatedItem) => {
        try {
            let carros = await getItem(key);
            let index = carros.findIndex(carro => carro.id === updatedItem.id);

            console.log(carros)

            if (index !== -1) {
                // Atualiza o item no array
                carros[index] = updatedItem;

                // Salva o array atualizado de volta no AsyncStorage
                await AsyncStorage.setItem(key, JSON.stringify(carros));
            }
        } catch (error) {
            console.log('Erro ao fazer o update', error);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
        updateItem
    }
}

export default useStorage;