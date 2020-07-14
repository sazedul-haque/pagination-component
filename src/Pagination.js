import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const totalPages = props.total_page;
    const currentPage = props.current_page;
    const pages = [];
    if (totalPages < 6) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else if (currentPage < 3) {
        for (let i = 1; i <= 5; i++) {
            pages.push(i);
        }
    } else if ((totalPages - currentPage) < 2) {
        for (let i = currentPage - (4 - (totalPages - currentPage)); i <= currentPage + (totalPages - currentPage); i++) {
            pages.push(i);
        }
    } else if (currentPage > 2 && totalPages > 5) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pages.push(i);
        }
    }
    
    return (
        <ul className="pagination">
            <li onClick={props.pageChange.bind(this, props.previous)} className={props.previous ? 'page-item' : 'page-item disabled'}>
                <span className="page-link">Previous</span>
            </li>
            {
                pages.map(i => 
                    <li
                        key={i}
                        onClick={props.pageChange.bind(this, i)}
                        className={props.current_page === i ? 'page-item active' : 'page-item'}>
                        <span className="page-link">{i}</span>
                    </li>    
                )
            }
            <li onClick={props.pageChange.bind(this, props.next)} className={props.next ? 'page-item' : 'page-item disabled'}>
                <span className="page-link">Next</span>
            </li>
        </ul>
    )
}
export default Pagination;