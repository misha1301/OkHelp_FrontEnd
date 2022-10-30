import React from 'react'
import { useEffect, useState } from 'react';
import './post_jobs_constructor.css';
import useAuth from '../../hooks/useAuth';

const Post_Jobs_Constructor = () => {

  const [deadlineCheck, setDeadlineCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(true);
  const [socialCheck, setSocialCheck] = useState(false);
  const [locationCheck, setLocationCheck] = useState(false);

  const { setUFocus } = useAuth();
  useEffect(() => {
    setUFocus("Пропоную роботу");
  }, []);

  return (
    <section className='main__constructor-container'>
      <div>
        <form className='user__post_job-form'>
          <section className='data__post_job-section'>
            <section className='main__post_job-section'>
              <label><h3>Що ви пропонуєте?*</h3></label>
              <input
                className='input__field-post-job_title __input__fields'
                type='text'
                placeholder='Нариклад:  Помити машину Wolgswagen golf 4'
                autoComplete="off"
              />
              <label><h3>Детальніший опис</h3></label>
              <input
                className='input__field-post-job_subtitle __input__fields'
                type='text'
                placeholder='Нариклад: Надаю всі миючі засоби та матеріали'
                autoComplete="off"
              />
              <label><h3>Адреса*</h3></label>
              <input
                className='input__field-post-job_address __input__fields'
                type='text'
                placeholder='Наприклад: Тернопіль, вул. Сагайдачного 4'
                autoComplete="off"
              />
              <div className='paiment__data-container'>
                <div className='paiment__option-container'>
                  <label><h3>Формат оплати*</h3></label>
                  <select className='input__field-post-job_paiment-option __input__fields'>
                    <option>Фіксована</option>
                    <option>Погодинна</option>
                  </select>
                </div>
                <div className='paiment__size-container'>
                  <label><h3>Сума оплати*</h3></label>
                  <input
                    className='input__field-post-job_paiment-size __input__fields'
                    type='text'
                    placeholder='Введіть суму  ГРН'
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </section>
            <section className='additional__post-section'>
              <label>
                <input
                  type='checkbox'
                  className='checkbox'
                  id='deadline__view-checkbox'
                  cheked={deadlineCheck}
                  onChange={() => setDeadlineCheck(!deadlineCheck)}
                />
                <p>Встановити дату актуальності вакансії</p>
              </label>
              <input
                disabled={!deadlineCheck ? true : false}
                className='input__field-post-job_deadline __input__fields __disabled'
                type='date'
                placeholder='Натисніть тут аби обрати дату '
                autoComplete="off"
              />
              <label>
                <input
                  type='checkbox'
                  className='checkbox'
                  id='number__view-checkbox'
                  cheked={numberCheck}
                  defaultChecked={numberCheck}
                  onChange={() => setNumberCheck(!numberCheck)}
                />
                <p>Відображати номер тільки після затвердження вакансії з працівником  </p>
              </label>
              <input
                disabled={!numberCheck ? true : false}
                className='input__field-post-job_number-view __input__fields '
                type='number'
                placeholder='Ваш номер мобільного'
                autoComplete="off"
              />
              <label>
                <input
                  type='checkbox'
                  className='checkbox'
                  id='social__view-checkbox'
                  cheked={socialCheck}
                  onChange={() => setSocialCheck(!socialCheck)}
                />
                <p>Вказати додаткові засоби комунікації для працівників  </p>
              </label>
              <input
                disabled={!socialCheck ? true : false}
                className='input__field-post-job_social __input__fields __disabled'
                type='text'
                placeholder='Наприклад: https://t.me/mi_oliinyk'
                autoComplete="off"
              />
              <label>
                <input
                  type='checkbox'
                  className='checkbox'
                  id='location__view-checkbox'
                  cheked={locationCheck}
                  onChange={() => setLocationCheck(!locationCheck)}
                />
                <p>Ввести google локацію</p>
              </label>
              <input
                disabled={!locationCheck ? true : false}
                className='input__field-post-job_location __input__fields __disabled'
                type='text'
                placeholder='Наприклад : 49.588099,25.579214'
              />
            </section>
          </section>

          <input
            className='input__btn-post_job __btn'
            type='submit'
            value='Розмістити вакансію'

          />
        </form>
      </div>
    </section>
  )
}

export default Post_Jobs_Constructor