import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket, removeFromBasket } from '../http/deviceAPI';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';


const Basket = observer(() => {
    const { device } = useContext(Context);



    useEffect(() => {
        getBasket().then(data => device.setBaskets(data));
    }, [device]);

    const remove = (id) => {
        console.log(id)
        removeFromBasket(id)
            .then(data => {
                alert(`Товар был удален из корзины!`);
                // Обновляем состояние после успешного удаления
            getBasket().then(data => device.setBaskets(data));
        })
            .catch(error => 
                alert('Произошла ошибка при удалении из корзины'));
        };

    let prices = 0;
    device.basket.forEach(price =>
        prices += Number(price.device.price)
    );

    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Корзина</h1>

            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h1 className="pr-2">Итого:</h1>
                <h3 className="pl-2">{prices}<span className="font-weight-light pl-2">рублей</span></h3>
            </Card>

            {device.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.device.img} width={50} alt={product.device.name} />
                                <h1 className="pl-3">{product.device.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.device.price} рублей</h2>
                            </div>
                        </Col>
                        <Col md={1}>
                            <Button
                                onClick={() => remove(product.id)}
                                variant={'outline-danger'}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    );
});

export default Basket;
