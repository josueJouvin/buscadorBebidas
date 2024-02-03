import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({ bebida }) => {
  const { handleModal, handleBebidaId } = useBebidas()
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          src={bebida.strDrinkThumb}
          alt='Imagen-Bebida'
          variant='top'
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleModal()
              handleBebidaId(bebida.idDrink)
            }}
            variant='warning'
            className='w-100 text-uppercase mt-2'
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida
