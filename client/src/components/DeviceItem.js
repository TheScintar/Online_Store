import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

function DeviceItem({device}) {
    const history = useNavigate()
    console.log(history)
  return (
    <Col md={3} className={"mt-3 d-flex text-left "} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
        <Card className={"shadow-sm mb-5 bg-white rounded"} style={{width: 150, cursor: 'pointer'}} border={"light"}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
            <div className='mt-1'>
                <div>
                    <div className={"pl-2 fs-5"}>
                        {device.price} Рублей
                    </div>
                </div>
                
            </div>
            <div className={" fs-6"}>
                {device.name}
            </div>
        </Card>
    </Col>
  )
}

export default DeviceItem