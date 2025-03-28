
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading property selling platform, connecting buyers and sellers with ease and trust.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
    
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
            
              <li>
                <a href="mailto:info@EststeAgent.com" className="text-white">
                  <i className="bi bi-envelope-fill"></i> info@EstateAgent.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-geo-alt-fill"></i> 123, Colombo, Sri Lanka
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2025 Estate Agent. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

