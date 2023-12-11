import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'
import DeleteType from '../components/modals/DeleteType'
import DeleteBrand from '../components/modals/DeleteBrand'

function Admin() {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  const [typeDeleteVisible, setTypeDeleteVisible] = useState(false)
  const [brandDeleteVisible, setBrandDeleteVisible] = useState(false)
  

  return (
    <Container className='d-flex flex-column'>
      <Button 
      variant={'outline-dark'} 
      className='mt-4 p-2 fs-4'
      onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button 
      variant={'outline-dark'} 
      className='mt-4 p-2 fs-4'
      onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button 
      variant={'outline-dark'} 
      className='mt-4 p-2 fs-4'
      onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <DeleteType show={typeDeleteVisible} onHide={() => setTypeDeleteVisible(false)}/>
      <DeleteBrand show={brandDeleteVisible} onHide={() => setBrandDeleteVisible(false)}/>

      <Button 
      variant={'outline-dark'} 
      className='mt-5 p-2 text-danger fs-4'
      onClick={() => setTypeDeleteVisible(true)}
      >
        Удалить тип
      </Button>

      <Button 
      variant={'outline-dark'} 
      className='mt-4 p-2 text-danger fs-4'
      onClick={() => setBrandDeleteVisible(true)}
      >
        Удалить бренд
      </Button>

      
    </Container>
  )
}

export default Admin