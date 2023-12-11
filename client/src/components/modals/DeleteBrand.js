import React, { useContext, useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { Modal, Form } from 'react-bootstrap'
import { deleteBrand } from '../../http/deviceAPI'
import { Context } from '../../index'


function DeleteType({show, onHide}) {
  const {device} = useContext(Context)

  const removeBrand = () => {
      deleteBrand(device.selectedBrand.id).then(data => {
        onHide()
      })
  }


  return (
    <div>
    <Modal
        show={show}
        onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Удалить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Dropdown className='mt-2 mb-2'>
                <Dropdown.Toggle> {device.selectedBrand.name || "Выберите бренд"} </Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand =>
                    <Dropdown.Item 
                        onClick={() => device.setSelectedBrand(brand)} 
                        key={brand.id}
                    >
                        {brand.name}
                    </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={removeBrand}>Удалить</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default DeleteType