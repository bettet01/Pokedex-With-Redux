import React from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";

interface PaginatorProps {
  fetchData: any;
  count: number;
}

const Paginator = (props: PaginatorProps) => {
  const pageChange = (data: number) => {
    props.fetchData(data + 1);
    window.scrollTo(0, 0);
  };
  return (
    <ReactPaginate
      onPageChange={(data) => {
        pageChange(data.selected);
      }}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(props.count / 15)}
      pageRangeDisplayed={2}
      containerClassName={"pagination"}
    />
  );
};

export default Paginator;
