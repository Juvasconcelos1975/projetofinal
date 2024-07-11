import './Contact.css';
import React, { useEffect, useRef } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  const contactContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (contactContainerRef.current) {
      observer.observe(contactContainerRef.current);
    }

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (contactContainerRef.current) {
        observer.unobserve(contactContainerRef.current);
      }
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
		<section id='contact'>
			<div className='contact-heading'>
				<h2>Contact Me</h2>
			</div>

			<div ref={contactContainerRef} className='contact-container'>
				<div className='contact-info'>
					<div className='info-top-row'>
						<div className='info-address'>
							<div className='contact-icon'>
								<LocationOnIcon />
							</div>
							<h3>Our Address</h3>
							<p>123, XYZ Street, ABC City, 12345</p>
						</div>
					</div>
					<div className='info-bottom-row'>
						<div className='info-email'>
							<div className='contact-icon'>
								<EmailIcon />
							</div>
							<h3>Email Us</h3>
							<div className='emails'>
								<p>info@example.com</p>
								<p>contact@example.com</p>
							</div>
						</div>
						<div className='info-phone'>
							<div className='contact-icon'>
								<PhoneIcon />
							</div>
							<h3>Call Us</h3>
							<div className='phones'>
								<p>123456789</p>
								<p>987654321</p>
							</div>
						</div>
					</div>
				</div>

				<div className='contact-form'>
					<form action='https://formcarry.com/s/UM_qfY8GBO6' method='POST' className='formcarry-form'>
						<div className='name-email'>
							<input type='text' id='name' name='fullName' placeholder='Your Name' required />
							<input type='email' id='email' name='email' placeholder='Your Email' required />
						</div>

						<div className='subject'>
							<input type='text' placeholder='Subject' required />
						</div>

						<div className='message'>
							<textarea name='message' id='message' placeholder='Message' required></textarea>
						</div>
						<button type='submit'>Send Message</button>
					</form>
				</div>
			</div>

			<div ref={mapRef} className='map'>
				<h2>Find Us Here</h2>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.854534601905!2d-9.15088062419711!3d38.74410017175725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339ff3d2e003%3A0x30801d02c31fc003!2sFLAG%20LISBOA!5e0!3m2!1spt-PT!2spt!4v1720646854672!5m2!1spt-PT!2spt'
					width='600'
					height='450'
					loading='lazy'
					title='Google Maps'
				></iframe>
			</div>
		</section>
	);
}

export default Contact;
