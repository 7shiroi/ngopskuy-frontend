import React from 'react'
import { Col, Container, Form, Row, Image, Card } from 'react-bootstrap'

export const HistoryCard = ({ cardName, cardPrice, cardStatus, cardImage }) => {
    return (
        <>
            <Card body className='d-inline-block rounded mx-1 my-1'>
                <Row>
                    <Col sm={4}>
                        <Image width={150} roundedCircle className='' src={cardImage}></Image>
                    </Col>
                    <Col sm={8} className="ps-5 d-flex text-align-center flex-column">
                        <h2>{cardName}</h2>
                        <h4>{cardPrice}</h4>
                        <h4>{cardStatus}</h4>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default HistoryCard