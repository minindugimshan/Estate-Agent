
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   Divider,
//   Button,
//   TextField
// } from '@/components/ui/card';
// import { Facebook, Twitter, Instagram, LinkedIn, Phone, Mail, MapPin } from 'lucide-react';

// const Footer = () => {
//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     // Handle newsletter subscription
//     console.log('Newsletter subscription submitted');
//   };

//   return (
//     <Box className="bg-gray-900 text-gray-200 pt-12 pb-6">
//       <Container className="max-w-7xl mx-auto">
//         <Grid className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <Typography className="text-xl font-bold mb-4">PropertyFinder</Typography>
//             <Typography className="text-gray-400">
//               Your trusted partner in finding the perfect home. With years of experience and thousands of satisfied customers.
//             </Typography>
//             <div className="flex space-x-4">
//               <IconButton className="text-gray-400 hover:text-white">
//                 <Facebook className="h-5 w-5" />
//               </IconButton>
//               <IconButton className="text-gray-400 hover:text-white">
//                 <Twitter className="h-5 w-5" />
//               </IconButton>
//               <IconButton className="text-gray-400 hover:text-white">
//                 <Instagram className="h-5 w-5" />
//               </IconButton>
//               <IconButton className="text-gray-400 hover:text-white">
//                 <LinkedIn className="h-5 w-5" />
//               </IconButton>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <Typography className="text-lg font-semibold mb-4">Quick Links</Typography>
//             <div className="flex flex-col space-y-2">
//               <Link href="/search" className="text-gray-400 hover:text-white">Properties</Link>
//               <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
//               <Link href="/agents" className="text-gray-400 hover:text-white">Our Agents</Link>
//               <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
//               <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <Typography className="text-lg font-semibold mb-4">Contact Us</Typography>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-5 w-5 text-gray-400" />
//                 <Typography className="text-gray-400">+44 (0) 123 456 7890</Typography>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-5 w-5 text-gray-400" />
//                 <Typography className="text-gray-400">info@propertyfinder.com</Typography>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="h-5 w-5 text-gray-400" />
//                 <Typography className="text-gray-400">123 Property Street, London, UK</Typography>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div className="space-y-4">
//             <Typography className="text-lg font-semibold mb-4">Newsletter</Typography>
//             <Typography className="text-gray-400">
//               Subscribe to our newsletter for the latest property updates and offers.
//             </Typography>
//             <form onSubmit={handleSubscribe} className="space-y-2">
//               <TextField 
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-gray-800 text-white rounded p-2"
//                 required
//               />
//               <Button 
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//               >
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         </Grid>

//         <Divider className="border-gray-700 my-6" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <Typography className="text-gray-400 text-sm">
//             © {new Date().getFullYear()} PropertyFinder. All rights reserved.
//           </Typography>
//           <div className="flex space-x-4">
//             <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
//               Terms of Service
//             </Link>
//             <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
//               Cookie Policy
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


// import { Facebook, Twitter, Instagram, LinkedIn, Phone, Mail, MapPin } from 'lucide-react';

// const Footer = () => {
//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     // Handle newsletter subscription logic here
//     console.log('Newsletter subscription submitted');
//   };

//   return (
//     <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* About Company */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">DreamHome Realty</h3>
//             <p className="text-gray-400">
//               Your trusted partner for buying and selling properties. With our expertise and dedication, finding your dream home is easier than ever.
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <LinkedIn className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/properties" className="text-gray-400 hover:text-white">
//                   Properties
//                 </a>
//               </li>
//               <li>
//                 <a href="/about-us" className="text-gray-400 hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/agents" className="text-gray-400 hover:text-white">
//                   Our Agents
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-gray-400 hover:text-white">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="/faq" className="text-gray-400 hover:text-white">
//                   FAQs
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center space-x-3">
//                 <Phone className="text-gray-400 w-5 h-5" />
//                 <span className="text-gray-400">+44 123 456 7890</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail className="text-gray-400 w-5 h-5" />
//                 <span className="text-gray-400">info@dreamhome.com</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <MapPin className="text-gray-400 w-5 h-5" />
//                 <span className="text-gray-400">
//                   123 Realty Street, London, UK
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter to get the latest updates and offers.
//             </p>
//             <form onSubmit={handleSubscribe} className="space-y-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-gray-800 text-white p-2 rounded"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 my-6"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//           <p>© {new Date().getFullYear()} DreamHome Realty. All rights reserved.</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="/privacy-policy" className="hover:text-white">
//               Privacy Policy
//             </a>
//             <a href="/terms" className="hover:text-white">
//               Terms of Service
//             </a>
//             <a href="/cookies" className="hover:text-white">
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
              {/* <li><a href="#" className="text-white">Properties</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              {/* <li>
                <a href="tel:+1234567890" className="text-white">
                  <i className="bi bi-telephone-fill"></i> +123 456 7890
                </a>
              </li> */}
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

