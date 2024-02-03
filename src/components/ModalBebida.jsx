import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {
  const { modal, handleModal, receta, cargando } = useBebidas()

  const Ingredientes = () => {
    let ingredientes = []

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
          </li>
        )
      }
    }
    return ingredientes
  }

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModal}>
        <Image
          src={receta.strDrinkThumb}
          alt={`Imagen receta ${receta.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
            <h2>Intrucciones</h2>
            {receta.strInstructions}
            <h2>Ingredientes y cantidades</h2>
            {Ingredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebida
