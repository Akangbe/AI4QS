import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import companyLogo from '@/Assets/images/PHOTO-2025-04-15-14-38-52-removebg-preview.png';
const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ai4qs', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ai4qs', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/ai4qs', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ai4qs/?viewAsMember=true', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay updated with AI4QS</h3>
              <p className="text-gray-600 max-w-md">
                Get the latest updates on AI technologies in quantity surveying and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <Button className="shrink-0" size="lg">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
            <div className="">
     <img src={companyLogo} alt="AI4QS Logo" className="w-auto rounded-md shadow-sm" />
   </div>
            </Link>
            <p className="text-gray-600">
            Driving Innovation in Quantity Surveying practice and education with Artificial Intelligence            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <p className="text-sm">Room M148, 35 Marylebone Road, London NW1 5LS</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm">+44 (0)20 7123 4567</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm">info@ai4qs.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-300 group-hover:bg-primary group-hover:w-2 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-300 group-hover:bg-primary group-hover:w-2 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-900">Latest Articles</h3>
            <div className="space-y-4">
              {[
                "How AI is Revolutionizing Quantity Surveying",
                "The Future of BIM and AI Integration",
                "Increasing Accuracy with Machine Learning Models"
              ].map((title, index) => (
                <a key={index} href="#" className="block group">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(Date.now() - index * 604800000).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </a>
              ))}

              <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                View All Articles <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} AI4QS. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>UK Registered Company: 12345678</span>
              <span>VAT Number: GB123456789</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
