import 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/login'>How it works</Link>
            <Link to='/dashboard'>Testimonials</Link>
            <Link to='/dashboard'>Careers</Link>
            <Link to='/dashboard'>Investors</Link>
            <Link to='/dashboard'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/dashboard'>Contact</Link>
            <Link to='/dashboard'>Support</Link>
            <Link to='/dashboard'>Destinations</Link>
            <Link to='/dashboard'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/dashboard'>Submit Video</Link>
            <Link to='/dashboard'>Ambassadors</Link>
            <Link to='/dashboard'>Agency</Link>
            <Link to='/dashboard'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/dashboard'>Instagram</Link>
            <Link to='/dashboard'>Facebook</Link>
            <Link to='/dashboard'>Youtube</Link>
            <Link to='/dashboard'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRAVEL PLANNER <i className="fab fa-gripfire"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
