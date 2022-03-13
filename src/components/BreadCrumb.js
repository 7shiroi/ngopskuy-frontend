import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({data}) => {
  const [pageList, setPageList] = useState([])
  useEffect(() => {
    const items = data.map((item, idx) => (item.active) ? 
      <li key={idx} className="breadcrumb-item active" aria-current="page">{item.name}</li>
      :
      <li key={idx} className="breadcrumb-item"><Link to={item.href}>{item.name}</Link></li>
    )
    setPageList(items)
  }, [])
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pageList}
      </ol>
    </nav>
  )
}

export default BreadCrumb