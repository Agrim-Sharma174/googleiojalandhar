import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-content">
     <a href="">I/O Extended Jalandhar</a>
        <section className='d-flex'>
            <h5>Follow Us : </h5>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-linkedin'></i>
        </section>
        <hr />

        <section className='d-flex'>

        <a href="">Google I/O 2023</a>
        <a className='footer-links' href="">About GDG Program</a>
        <a className='footer-links' href="">About WTM Program</a>
        <a className='footer-links' href="">Community Guidlines</a>


        </section>
     </div>
    </div>
  )
}

export default Footer