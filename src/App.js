import React, { useState } from 'react';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [totalPages, setTotalPages] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(2);

  const pageChange = (page) => {
    if(page > 0 && page <= totalPages) {
      setCurrentPage(page);
      if(page === 1){
        setPreviousPage(null);
      } else if(page === totalPages) {
        setNextPage(null)
      } else {
        setPreviousPage(page -1);
        setNextPage(page+1)
      }
    }

    // console.log(page)
    
  }

  return (
    <div className="App">
        <Pagination
          previous={previousPage}
          next={nextPage}
          total_page={totalPages}
          current_page={currentPage}
          pageChange={pageChange}
        />
    </div>
  );
}

export default App;
