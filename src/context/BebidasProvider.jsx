import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [receta, setReceta] = useState({})

  useEffect(() => {
    const obtenerReceta = async () => {
      setCargando(true)
      if (!bebidaId) return

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const { data } = await axios(url)
        setReceta(data.drinks[0])
      } catch (error) {
        console.log(error)
      } finally {
        setCargando(false)
      }
    }
    obtenerReceta()
  }, [bebidaId])

  const consultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
      const { data } = await axios(url)
      setBebidas(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  const handleModal = () => {
    setModal(!modal)
  }

  const handleBebidaId = (id) => {
    setBebidaId(id)
  }
  return (
    <BebidasContext.Provider
      value={{
        consultarBebida,
        bebidas,
        modal,
        handleModal,
        handleBebidaId,
        receta,
        cargando,
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}
export { BebidasProvider }
export default BebidasContext
