import React, { useEffect } from 'react'
import Helmets from '../components/Helmets'
import { Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import hazelnut from '../assets/images/hazelnut.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'
import { getProduct } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import PromoCard from '../components/PromoCard'


export const ProductAdmin = (props) => {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth.userData)
    const product = useSelector(state => state.product?.product)
    const dataa = Array.from(product)
    const token = useSelector(state => state.auth)
    console.log(dataa)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(token))
    }, [])
    return (
        <>
            <Helmets children={"Product Admin"} />
            <NavbarHome />
            <section className='bg-pallet-4'>
                <Container>
                    <Row>
                        <Col sm={12} md={4} className="my-5">
                            <Card.Text as="h3" className='text-center'>
                                Promo for you
                            </Card.Text>
                            <div className="my-5">
                                Coupons will be updated every weeks. Check them out!
                            </div>
                            <PromoCard />
                            <div className='my-3'>Terms and Condition</div>
                            <ol>
                                <li>
                                    You can only apply 1 coupon per day
                                </li>
                                <li>
                                    It only for dine in
                                </li>
                                <li>
                                    Buy 1 get 1 only for new user
                                </li>
                                <li>
                                    Should make member card to apply coupon
                                </li>
                            </ol>
                            <Button block variant='pallet-1 py-3 my-3 mb-5  radius' version={'input-normal'}> Apply Coupon </Button>
                            <Button block variant='pallet-3 py-3 my-3 mb-5  radius' version={'input-normal'}> Add New Promo </Button>
                        </Col>
                        <Col sm={12} md={8} className="border-start border-end">

                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3 bg-pallet-4 text-pallet-1"
                                rounded
                            >
                                <Tab eventKey="home" title="Favorite And Promo">
                                    <Row class className="">
                                        {dataa?.map((data, idx) => (
                                            <Col key={idx} sm={12} md={4}>
                                                <CardMenu key={idx} newClass={"mx-5 my-5"}
                                                    cardName={data?.name}
                                                    cardPrice={data?.price}
                                                    cardImage={data?.image || hazelnut}
                                                    cardDiscount={"10%"} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab>
                                <Tab eventKey="coffee" title="Coffeee">
                                    <Row class className="">
                                        {dataa?.map((data, idx) => (
                                            <Col key={idx} sm={12} md={4}>
                                                <CardMenu key={idx} newClass={"mx-5 my-5"}
                                                    cardName={data?.name}
                                                    cardPrice={data?.price}
                                                    cardImage={data?.image || hazelnut}
                                                    cardDiscount={"10%"} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab>
                                <Tab eventKey="noncoffee" title="Non Coffee">
                                    <Row class className="">
                                        {dataa?.map((data, idx) => (
                                            <Col key={idx} sm={12} md={4}>
                                                <CardMenu key={idx} newClass={"mx-5 my-5"}
                                                    cardName={data?.name}
                                                    cardPrice={data?.price}
                                                    cardImage={data?.image || hazelnut}
                                                    cardDiscount={"10%"} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab>
                                <Tab eventKey="foods" title="Foods">
                                    <Row class className="">
                                        {dataa?.map((data, idx) => (
                                            <Col key={idx} sm={12} md={4}>
                                                <CardMenu key={idx} newClass={"mx-5 my-5"}
                                                    cardName={data?.name}
                                                    cardPrice={data?.price}
                                                    cardImage={data?.image || hazelnut}
                                                    cardDiscount={"10%"} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab>
                                <Tab eventKey="addon" title="Add-On">
                                    <Row class className="">
                                        {dataa?.map((data, idx) => (
                                            <Col key={idx} sm={12} md={4}>
                                                <CardMenu key={idx} newClass={"mx-5 my-5"}
                                                    cardName={data?.name}
                                                    cardPrice={data?.price}
                                                    cardImage={data?.image || hazelnut}
                                                    cardDiscount={"10%"} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab>
                            </Tabs>
                            <div>
                                *the price has been cutted by discount appears
                            </div>
                            <div className='mb-5'>
                                <Button block variant='pallet-1 py-3 my-3 mb-5  radius' version={'input-normal'}> Add New Product </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}
