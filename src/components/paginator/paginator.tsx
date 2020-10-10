import React from "react";
import ReactPaginate from "react-paginate";
import "./styles.css"

interface PaginatorProps {
  fetchData: any,
  count: number
}

const Paginator = (props: PaginatorProps) => {
  return (
    <ReactPaginate
      onPageChange={(data) => { props.fetchData(data.selected + 1); window.scrollTo(0,0) }}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(props.count / 15)}
      pageRangeDisplayed={2}
      containerClassName={"pagination"}
    />
  )
}

export default Paginator;