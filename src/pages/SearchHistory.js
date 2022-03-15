import React, { useEffect, useState } from 'react'
import Helmets from '../components/Helmets'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import hazelnut from '../assets/images/hazelnut.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import CardMenu from '../components/CardMenu'
import { connect } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import http from '../helpers/http'
import ModalDelete from '../components/ModalDelete';

const Search = () => {
    const [history, setHistory] = useState([])
    const [page, setPage] = useState({})
    // const dataa = Array.from(product)
    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        getProductSearch(`/transaction?limit=12`)
    }, [])

    const getProductSearch = async (url) => {
        const token = window.localStorage.getItem('token')
        const { data } = await http(token).get(url)
        console.log(data)
        setHistory(data?.result)
        setPage(data?.pageinfo)
    }

    const getNextData = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const token = window.localStorage.getItem('token')
            const { data } = await http(token).get(url)
            if (replace) {
                if (!Array.isArray(data.result)) {
                    data.result = [data.result]
                }
                setHistory(data?.result)
            } else {
                setHistory([
                    ...data.result
                ])
            }
            setPage(data.pageinfo)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setHistory([])
                setPage({
                    next: null
                })
            }
        }
    }
    const onSearch = async (event) => {
        event.preventDefault();
        const url = () => `/transaction?productSearch=${productSearch}&userSearch=${userSearch}&limit=6`
        const productSearch = event.target.elements["productSearch"].value
        const userSearch = event.target.elements["userSearch"].value
        // console.log(minPrice)
        setSearchParams()
        await getNextData(url(productSearch, userSearch), true)
    }
    const goToDetail = (id) => {
        navigate(`/history/${id}`)
    }
    return (
        <>
            <Helmets children={"Search"} />
            <NavbarHome />
            <section>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <header>
                                <div className="row">
                                    <div className="col-xl-12 d-flex for-margin-search ">
                                        <form id='search' onSubmit={onSearch} className="border-brown input-group mb-3 rounded mx-auto button-type-name ">
                                            <input name="productSearch" type="text" className="btn-search-type form-control bg-transparent col-12 col-lg-3"
                                                placeholder="Search By Product" />
                                            <input name="userSearch" type="text" className="btn-search-type form-control bg-transparent col-12 col-lg-3"
                                                placeholder="Search By Name" />
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
                                        {errorMsg &&
                                            <div className="alert alert-warning fade show" role="alert">
                                                <strong>{errorMsg}</strong>
                                            </div>
                                        }
                                        <Col sm={12} className=' d-flex justify-content-end'>
                                            <div >
                                                {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                                {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p>View Next <FaChevronRight /></p></button>}
                                            </div>
                                        </Col>
                                        {history?.map((data, idx) => {
                                            return (
                                                <Col key={idx} sm={12} md={6} lg={4} onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} className="my-2">
                                                    <ModalDelete variant="bg-pallet-4" id={data.id} img={data.image} userName={data.first_name} product={data.product_name} price={data.total_price} status={data.status}></ModalDelete>
                                                </Col>
                                            )
                                        })}
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

export default connect(mapStateToProps)(Search)