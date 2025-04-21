import { Building, Calendar, Clock, Mail, MapPin, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: 'email',
    industry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      subject: '', 
      message: '', 
      contactPreference: 'email', 
      industry: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, contactPreference: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, industry: value }));
  };

  const officeLocations = [
    {
      city: "London",
      address: "Room M148, 35 Marylebone Road",
      postal: "London NW1 5LS",
      phone: "+44 (0)20 7123 4567",
      email: "contact@ai4qs.com",
      hours: "Mon-Fri: 9:00 AM - 5:30 PM"
    },
   
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-96 w-96 -top-48 -right-48 rounded-full bg-primary/5 blur-3xl opacity-50"></div>
          <div className="absolute h-96 w-96 -bottom-48 -left-48 rounded-full bg-purple-500/5 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
            Have questions about AI4QS? We're here to support your journey into AI 
            implementation for Quantity Surveying Practice and Education.            </p>
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600 mt-1">info@ai4qs.com</p>
                        <p className="text-gray-600">contact@ai4qs.com</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600 mt-1">+44 (0)20 7123 4567</p>
                        <p className="text-gray-600">+44 (0)20 7123 4568</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Hours</h3>
                        <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 5:30 PM</p>
                        <p className="text-gray-600">Weekend: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
                    <div className="flex space-x-3">
                      {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                        <a 
                          key={social} 
                          href="https://www.linkedin.com/company/ai4qs/?viewAsMember=true" 
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Office Locations */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
                  
                  <div className="space-y-8">
                    {officeLocations.map((office) => (
                      <div key={office.city} className="flex">
                        <Building className="w-5 h-5 text-primary shrink-0 mt-1 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">{office.city} Office</h3>
                          <p className="text-gray-600 mt-1">{office.address}</p>
                          <p className="text-gray-600">{office.postal}</p>
                          <p className="text-gray-600 mt-2">{office.phone}</p>
                          <p className="text-gray-600">{office.email}</p>
                          <p className="text-gray-600 mt-2">{office.hours}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-1">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="industry" className="text-sm font-medium text-gray-700 mb-1">
                        Industry
                      </Label>
                      <Select onValueChange={handleSelectChange} value={formData.industry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="architecture">Architecture</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Preferred Contact Method
                      </Label>
                      <RadioGroup 
                        value={formData.contactPreference} 
                        onValueChange={handleRadioChange}
                        className="flex space-x-8"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-radio" />
                          <Label htmlFor="email-radio">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-radio" />
                          <Label htmlFor="phone-radio">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>
                      </label>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
  
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about AI4QS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What is AI4QS and who is it for?",
                answer: "AI4QS is an initiative dedicated to advancing AI integration in Quantity Surveying practice and education. It is designed for QS professionals, educators, students, and organisations seeking to future-proof their skills and services in the digital age."
              },
              {
                question: "Can AI4QS help universities or training providers with curriculum development?",
                answer: "Yes! AI4QS supports universities and training providers by offering insights, frameworks, and guidance for embedding AI competencies into QS programmes through short courses, CPD modules, and tailored training support."
              },
              {
                question: "What services does AI4QS offer to companies and practitioners?",
                answer: "We offer research insights, training recommendations, CPD programmes, and advisory services to help companies, professionals, and project teams adopt AI solutions for cost management, project controls, risk analysis, and data-driven decision-making."
              },
              {
                question: "How can I get involved with AI4QS?",
                answer: "You can join our knowledge exchange events, access our toolkits and research findings, attend AI4QS workshops, or collaborate with us on pilot projects aimed at AI adoption in QS practice and education. Simply contact us to learn more!"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600">
              Have more questions? <a href="#" className="text-primary font-medium hover:underline">Visit our FAQ page</a> or <a href="#" className="text-primary font-medium hover:underline">contact our support team</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Book a Demo Section */}
      <section className="py-20 bg-primary bg-gradient-to-br from-primary to-primary-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for your AI Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
Get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
    

              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary">
              

                <Calendar className="h-5 w-5 mr-2"  /> Get in touch

       
              </Button>
     
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
