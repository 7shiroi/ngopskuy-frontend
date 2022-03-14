import React, { useEffect, useState } from 'react'
import Helmets from '../components/Helmets'
import { default as axios } from 'axios'
import { Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import hazelnut from '../assets/images/hazelnut.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'
import { getProductAll } from '../redux/actions/productall'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import PromoCard from '../components/PromoCard'
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
const { REACT_APP_BACKEND_URL } = process.env


const Search = ({ getProductAll }) => {
    const [product, setProduct] = useState([])
    const [page, setPage] = useState({})
    const dataa = Array.from(product)
    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        getProductSearch()
    }, [])

    const getProductSearch = async () => {
        const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/product?limit=6`)
        setProduct(data?.result)
        setPage(data?.pageinfo)
    }

    const getNextData = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await axios.get(url)
            if (replace) {
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
    const onSearch = async (event) => {
        event.preventDefault();
        const url = () => `http://localhost:5000/product?name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}&limit=6`
        const name = event.target.elements["name"].value
        const minPrice = event.target.elements["minPrice"].value
        const maxPrice = event.target.elements["maxPrice"].value
        // console.log(minPrice)
        setSearchParams()
        await getNextData(url(name, minPrice, maxPrice), true)
    }
    const goToDetail = (id) => {
        navigate(`/product-admin/${id}`)
    }

    const goToNewProduct = () => {
        navigate('/new-product')
    }
    return (
        <>
            <Helmets children={"Product Admin"} />
            <NavbarHome />
            <section>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <header>
                                <div className="row">
                                    <div className="col-xl-12 d-flex for-margin-search ">
                                        <form id='search' onSubmit={onSearch} className="border-brown input-group mb-3 rounded mx-auto button-type-name ">
                                            <input name="name" type="text" className="btn-search-type form-control bg-transparent col-12 col-lg-3"
                                                placeholder="Search Name" />
                                            <input name="minPrice" type="text" className="btn-search-type form-control bg-transparent col-12 col-lg-3"
                                                placeholder="input Min Price" />
                                            <input name="maxPrice" type="text" className="btn-search-type form-control bg-transparent col-12 col-lg-3"
                                                placeholder="Input Max Price" />
                                            <button className="btn " type="submit" id="button-addon2"><FaSearch /></button>
                                        </form>
                                    </div>
                                </div>
                            </header>
                        </Col>
                        <Col sm={12} className="border-start border-end">
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3 bg-white text-pallet-1"
                                rounded
                            >
                                <Tab eventKey="home" title="Search">
                                    <Row class className="">
                                        <Col sm={12} className=' d-flex justify-content-end'>
                                            <div >
                                                {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                                {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
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
                            </Tabs>
                            <div>
                                *the price has been cutted by discount appears
                            </div>
                            <div className='mb-5'>
                                <Button onClick={() => goToNewProduct()} block variant='pallet-1 py-3 my-3 mb-5  radius' version={'input-normal'}> Add New Product </Button>
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

const mapDispatchToProps = { getProductAll }

export default connect(mapStateToProps, mapDispatchToProps)(Search)