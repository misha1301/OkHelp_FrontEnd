import React from 'react'
import { useEffect, useState } from 'react';
import './employee_request.css';
import useAuth from '../../hooks/useAuth';
import location_icon from '../../../assets/location.svg';
import axios from 'axios';

const Employee_Request = () => {

  const [savedVacancies, setSavedVacancies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
        .then(response => {
          setSavedVacancies([...savedVacancies, ...response.data]);
          setCurrentPage(prevState => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, []);

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Подані заявки");
  },[]);

  return (
    <section className='main__constructor-container'>
     {savedVacancies.map(vacance =>
        <div className='vacance__data-container' key={vacance.id}>
          <div className='vacance__title-container'>
            <h2 className='vacance__title'>{vacance.title}</h2>
            <input type='checkbox' />
          </div>
          <div className='vacance__payment-container'>
            <p className='vacance__payment-data'>{vacance.id} UAH -</p>
            <p className='vacance__date-data'>- Виставлено {vacance.userId}</p>
          </div>
          <h3 className='vacance__subtitle'>{vacance.body}</h3>
          <p className='vacance__requests-data'>Подано заявок <p>{vacance.userId}</p></p>
          <p className='vacance__requests-deadline'>Актуальне до: <p>1{vacance.id}.11.2022 р.</p></p>
          <div className='vacance__location-container'>
            <img src={location_icon} alt="" height='13px' />
            <p className='vacance__location'>Тернопіль</p>
          </div>
          <input type='button' value='Скасувати' className='__vacance_btn-cansle' />
        </div>
      )}
    </section>
  )
}

export default Employee_Request