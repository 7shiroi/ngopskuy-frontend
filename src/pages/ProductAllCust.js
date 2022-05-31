import React, { useEffect, useState } from 'react'
import http from '../helpers/http'
import Helmets from '../components/Helmets'
import { Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import hazelnut from '../assets/images/hazelnut.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'
import { connect, useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import PromoCard from '../components/PromoCard'
import { useNavigate } from 'react-router-dom'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'


const ProductAllCust = () => {
    const [product, setProduct] = useState([])
    const [page, setPage] = useState({})
    const [productCoffee, setProductCoffee] = useState([])
    const [pageCoffee, setPageCoffee] = useState({})
    const [productNonCoffee, setProductNonCoffee] = useState([])
    const [pageNonCoffee, setPageNonCoffee] = useState({})
    const [productFood, setProductFood] = useState([])
    const [pageFood, setPageFood] = useState({})
    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        getProductSearch(`/product?limit=6`)
        getProductCoffee('/product?id_category=1&limit=6')
        getProductNonCoffee('/product?id_category=2&limit=6')
        getProductFood('/product?id_category=3&limit=6')
    }, [])

    const getProductSearch = async (url) => {
        const { data } = await http().get(url)
        setProduct(data?.result)
        setPage(data?.pageinfo)
    }
    const getProductCoffee = async (url) => {
        const { data } = await http().get(url)
        console.log(data)
        setProductCoffee(data?.result)
        setPageCoffee(data?.pageinfo)
    }
    const getProductNonCoffee = async (url) => {
        const { data } = await http().get(url)
        setProductNonCoffee(data?.result)
        setPageNonCoffee(data?.pageinfo)
    }
    const getProductFood = async (url) => {
        const { data } = await http().get(url)
        setProductFood(data?.result)
        setPageFood(data?.pageinfo)
    }
    const getNextDataFood = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await http().get(url)
            if (replace) {
                if (!Array.isArray(data.result)) {
                    data.result = [data.result]
                }
                setProductFood(data?.result)
            } else {
                setProductFood([
                    ...data.result
                ])
            }
            setPageFood(data.pageinfo)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setProductFood([])
                setPageFood({
                    next: null
                })
            }
        }
    }
    const getNextDataNonCoffee = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await http().get(url)
            if (replace) {
                if (!Array.isArray(data.result)) {
                    data.result = [data.result]
                }
                setProductNonCoffee(data?.result)
            } else {
                setProductNonCoffee([
                    ...data.result
                ])
            }
            setPageNonCoffee(data.pageinfo)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setProductNonCoffee([])
                setPageNonCoffee({
                    next: null
                })
            }
        }
    }
    const getNextDataCoffee = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await http().get(url)
            if (replace) {
                if (!Array.isArray(data.result)) {
                    data.result = [data.result]
                }
                setProductCoffee(data?.result)
            } else {
                setProductCoffee([
                    ...data.result
                ])
            }
            setPageCoffee(data.pageinfo)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setProductCoffee([])
                setPageCoffee({
                    next: null
                })
            }
        }
    }
    const getNextData = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await http().get(url)
            if (replace) {
                if (!Array.isArray(data.result)) {
                    data.result = [data.result]
                }
                setProduct(data?.result)
            } else {
                setProduct([
                    ...data.result
                ])
            }
            setPage(data.pageinfo)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setProduct([])
                setPage({
                    next: null
                })
            }
        }
    }


    const goToDetail = (id) => {
        navigate(`/product-customer/${id}`)
    }

    return (
        <>
            <Helmets children={"Product Customer"} />
            <NavbarHome />
            <section>
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
                        </Col>
                        <Col sm={12} md={8} className="border-start border-end">

                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3 bg-white text-pallet-1"
                            >
                                <Tab eventKey="home" title="Favorite And Promo">
                                    <Row class className="">
                                        <Col sm={12} className=' d-flex justify-content-end'>
                                            <div >
                                                {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                                {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p>View Next <FaChevronRight /></p></button>}
                                            </div>
                                        </Col>
                                        {product?.map((data, idx) => {
                                            return (
                                                <Col key={String(data.id)} sm={12} md={4} onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }}>
                                                    <CardMenu key={idx} newClass={"mx-5 my-5"}
                                                        cardName={data?.name}
                                                        cardPrice={data?.price}
                                                        cardImage={data?.image || hazelnut}
                                                        cardDiscount={"10%"} />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </Tab>
                                <Tab eventKey="coffee" title="Coffeee">
                                    <Row class className="">
                                        <Col sm={12} className=' d-flex justify-content-end'>
                                            <div >
                                                {pageCoffee.prev !== null && <button onClick={() => getNextDataCoffee(pageCoffee.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                                {pageCoffee.next !== null && <button onClick={() => getNextDataCoffee(pageCoffee.next)} className='btn '><p>View Next <FaChevronRight /></p></button>}
                                            </div>
                                        </Col>
                                        {productCoffee?.map((data, idx) => (
                                            <Col key={String(data.id)} sm={12} md={4} onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }}>
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
                                        <Col sm={12} className=' d-flex justify-content-end'>
                                            <div >
                                                {pageNonCoffee.prev !== null && <button onClick={() => getNextDataNonCoffee(pageNonCoffee.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                                {pageNonCoffee.next !== null && <button onClick={() => getNextDataNonCoffee(pageNonCoffee.next)} className='btn '><p>View Next <FaChevronRight /></p></button>}
                                            </div>
                                        </Col>
                                        {productNonCoffee?.map((data, idx) => (
                                            <Col key={String(data.id)} sm={12} md={4} onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }}>
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
                                        <Col sm={12} className=' d-flex justify-content-end'>
                                            <div >
                                                {pageFood.prev !== null && <button onClick={() => getNextDataFood(pageFood.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                                {pageFood.next !== null && <button onClick={() => getNextDataFood(pageFood.next)} className='btn '><p>View Next <FaChevronRight /></p></button>}
                                            </div>
                                        </Col>
                                        {productFood?.map((data, idx) => (
                                            <Col key={String(data.id)} sm={12} md={4} onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }}>
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
                                        {product?.map((data, idx) => (
                                            <Col key={String(data.id)} sm={12} md={4} onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }}>
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
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

const mapStateToProps = state => ({ productall: state.productall })


export default connect(mapStateToProps)(ProductAllCust)