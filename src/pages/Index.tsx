import { ArrowRight, Bot, Building2, ChartBar, Code2, ExternalLink, MessageSquare, ShieldCheck, UploadCloud, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
// import AI4QS from '../Assets/images/AI4QSIMG.png';
import AI4QS from '../Assets/images/AI4QSIMG.png';

const Index = () => {
  const features = [
    {
      title: "AI-Powered Estimations",
      description: "Leverage machine learning algorithms for accurate cost estimations and quantity takeoffs, reducing error margins by up to 40%.",
      icon: Bot,
    },
    {
      title: "Data Analytics",
      description: "Transform construction data into actionable insights with advanced analytics dashboards and predictive modeling.",
      icon: ChartBar,
    },
    {
      title: "Automation Tools",
      description: "Streamline repetitive tasks and improve efficiency with intelligent workflow automation and document processing.",
      icon: Code2,
    },
    {
      title: "Collaboration Platform",
      description: "Connect teams and share insights seamlessly across your organization with real-time collaboration features.",
      icon: Users,
    },
  ];


  const processSteps = [
    {
      number: "01",
      title: "Upload Plans",
      description: "Simply upload your construction plans or BIM models to get started.",
      icon: UploadCloud,
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI engine analyzes your plans and generates detailed quantity takeoffs.",
      icon: Bot,
    },
    {
      number: "03",
      title: "Review & Refine",
      description: "Review the results and make adjustments as needed with our intuitive tools.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Generate Reports",
      description: "Export professional reports and insights in multiple formats.",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary"></span>
                  Next-Gen Quantity Surveying
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                  Transform Quantity Surveying
                  <span className="block text-primary mt-2">With Artificial Intelligence</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
              Driving Innovation in Quantity Surveying practice and education with Artificial Intelligence              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-lg group">
                  <Link to="/services" className="flex items-center gap-2">
                    Explore Solutions 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="border-gray-300">
                  <Link to="/contact">Book a Demo</Link>
                </Button> */}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                {/* <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`} 
                        alt="User" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-72 w-72 bg-primary/10 rounded-lg"></div>
                <div className="absolute -right-4 -bottom-4 h-72 w-72 bg-violet-500/10 rounded-lg"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border">
                  <img 
                    src={AI4QS}
                    alt="AI-powered quantity surveying" 
                    className="w-full h-96 object-cover"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="relative py-12 border-y border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">40%</div>
              <div className="text-sm text-gray-600 mt-1">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600 mt-1">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">25K+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Revolutionize Your Practice
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover how AI can transform your quantity surveying workflow and bring unprecedented efficiency to your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="overflow-hidden group hover:shadow-lg transition-all border-gray-200">
                <CardContent className="p-6">
                  <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our streamlined process makes it easy to implement AI in your quantity surveying workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: 'calc(100% - 3rem)' }}></div>
                )}
                <div className="bg-white rounded-lg p-6 border border-gray-200 relative z-10">
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="pt-4">
                    <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Don't just take our word for it - hear from the professionals who use AI4QS daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Companies */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-10">Trusted by leading construction and surveying firms</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 flex items-center">
                <Building2 className="h-6 w-20 text-gray-400" />
                <span className="text-gray-500 font-medium ml-2">Company {i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to transform your quantity surveying practice and education?            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Join the hundreds of professionals already leveraging AI to streamline their workflows and improve accuracy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary shadow-lg">
                <Link to="/services">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule a Demo <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
