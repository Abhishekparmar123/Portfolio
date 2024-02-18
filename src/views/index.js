import React, { useEffect } from 'react'
import homeImage from "../assets/home/home-image.jpg"
import TextAnimation from '../components/home/textAnimation'
import Navbar from '../components/navbar/Navbar'
import { Link} from 'react-router-dom'
import {StyleRoot} from 'radium';
import styles from '../animation'

function Index() {
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'http://localhost:8080/ords/product_managment/all_markets_api/';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  
  return (
    <StyleRoot>
      <div className='home-main'>
        <Navbar/>
        <div className='container p-3'>
          <div className='columns mt-6'>
            <div className='column is-flex is-justify-content-center is-align-items-center' style={styles.fadeInLeft}>
              <div>
                <h4 className='text-1' style={styles.bounce}>Hello, my name is</h4>
                <h2 className='text-2'>Abhishek Parmar</h2>
                <h3 className='is-size-3 has-text-white has-text-weight-medium'>And I'm a <TextAnimation list = {["Web Developer ", 2000,"Java Developer ", 2000, "MERN Developer ", 2000 ]}/></h3>
                <Link to={"/contact"}>
                  <button className="button is-danger mt-3">
                    <span className='is-size-5 is-family-secondary has-text-weight-500'>Hire Me</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='column py-0' style={styles.bounceInRight}>
              <figure className="image is-square">
                <img src={homeImage} alt='error'/>
              </figure>
            </div>
          </div>
        </div>  
      </div>
    </StyleRoot>
  )
}

export default Index