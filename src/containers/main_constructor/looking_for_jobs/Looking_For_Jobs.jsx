import React from 'react'
import { useEffect, useState } from 'react';
import '../vacance_style.css';
import location_icon from '../../../assets/location.svg';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Looking_For_Jobs = () => {

  const [vacancies, setVacancies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
        .then(response => {
          setVacancies([...vacancies, ...response.data]);
          setCurrentPage(prevState => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
      console.log('remove event listener');
    };
  }, [])


  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 250) {
      console.log('scroll');
      setFetching(true);
    }

    // console.log('scrollHeight', e.target.documentElement.scrollHeight);
    // console.log('scrollTop', e.target.documentElement.scrollTop);
    // console.log('Height', window.innerHeight);
  }


  const { setUFocus } = useAuth();
  useEffect(() => {
    setUFocus("Шукаю роботу");
  }, []);


  return (
    <section className='main__constructor-container'>

      {vacancies.map(vacance =>
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
          <input type='button' value='Подати заявку' className='__vacance_btn' />
        </div>
      )}


    </section>
  )
}

export default Looking_For_Jobs