import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row } from 'react-bootstrap';

const TypeBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <Row className='mt-3'>
      <h2>Тип устройства</h2>
    <ListGroup>
        {device.types.map(type =>
            <ListGroup.Item 
                
                style={{cursor: "pointer"}}
                active={type.id === device.selectedType.id}
                className="p-3"
                onClick={() => device.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
        )}
      </ListGroup>
      </Row>
  )
});

export default TypeBar