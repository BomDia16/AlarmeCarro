import AsyncStorage from "@react-native-async-storage/async-storage";

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
            carros.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(carros))
            
        } catch (error) {
            console.log('Erro ao salvar', error)
        }
    }

    // deletar item no storage
    const removeItem = async (key, item) => {
        try {
            let carros = await getItem(key);
            let myCarros = carros.filter( (carro) => {
                return (carro !== item)
            })
            await AsyncStorage.setItem(key, JSON.stringify(myCarros))
            return myCarros;
            
        } catch (error) {
            console.log('Erro ao remover', error)
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;