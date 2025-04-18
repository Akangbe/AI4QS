import { ArrowRight, Award, BarChart2, CheckCircle, ChevronRight, Globe, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Michael Chen",
      position: "Founder & CEO",
      bio: "Former professor of Computer Science with expertise in machine learning and AI applications in construction.",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operating Officer",
      bio: "Chartered quantity surveyor with over 15 years of experience in major infrastructure projects.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "David Rodriguez",
      position: "Chief Technology Officer",
      bio: "AI researcher and engineer with background in computer vision and predictive analytics.",
      image: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      name: "Emma Williams",
      position: "Head of Customer Success",
      bio: "Dedicated to ensuring clients achieve maximum value through AI4QS solutions.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering excellence in every aspect of our work, from customer service to technical innovation."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We operate with transparency and honesty, ensuring our AI solutions are explainable and trustworthy."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration between humans and AI, and between our team and our clients."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We're committed to developing solutions that contribute to more efficient, sustainable construction practices."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Story
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            About AI4QS
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming quantity surveying through artificial intelligence
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1469&auto=format&fit=crop"
              alt="AI in Quantity Surveying" 
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">A new era in quantity surveying</h2>
            <p className="text-lg text-gray-600">
              AI4QS was founded in 2020 by a team of quantity surveyors, data scientists, and construction technologists 
              who recognized the transformative potential of artificial intelligence in the construction industry.
            </p>
            <p className="text-lg text-gray-600">
              We've grown from a small startup to an industry leader, serving clients across the UK, Europe, and North America. 
              Our AI-powered solutions have helped hundreds of quantity surveying professionals modernize their practices and 
              deliver more accurate, efficient services to their clients.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link to="/case-studies" className="inline-flex items-center">
                  See Our Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-primary/5 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute h-32 w-32 rounded-full bg-primary/10 -top-10 -right-10 blur-xl"></div>
            <div className="relative">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To empower quantity surveyors with cutting-edge AI technology that enhances accuracy, 
                efficiency, and decision-making capabilities.
              </p>
              <p className="text-gray-700">
                We aim to transform traditional QS practices through intelligent automation, 
                predictive analytics, and data-driven insights, enabling professionals to focus on 
                high-value activities while reducing routine tasks.
              </p>
              <ul className="mt-6 space-y-2">
                {["Automate routine QS tasks", "Improve estimation accuracy", "Reduce project risks", "Enhance decision making"].map((item) => (
                  <li key={item} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute h-32 w-32 rounded-full bg-primary/10 -bottom-10 -left-10 blur-xl"></div>
            <div className="relative">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To be the global leader in AI-powered quantity surveying solutions, setting new 
                standards for accuracy, efficiency, and innovation in construction cost management.
              </p>
              <p className="text-gray-700">
                We envision a future where AI and human expertise work seamlessly together, where 
                data-driven insights reduce waste and optimize resources, and where construction 
                projects are delivered on time and within budget.
              </p>
              <ul className="mt-6 space-y-2">
                {["Lead industry innovation", "Set new accuracy standards", "Global accessibility", "Sustainable practices"].map((item) => (
                  <li key={item} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What Guides Us
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that define our company culture and guide our approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our People
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The experts behind AI4QS innovation and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary/5 py-12 px-8 rounded-2xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The difference we've made in the quantity surveying industry
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">500+</span>
                <BarChart2 className="h-5 w-5 text-primary ml-1" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">98%</span>
                <BarChart2 className="h-5 w-5 text-primary ml-1" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">£75M</span>
                <BarChart2 className="h-5 w-5 text-primary ml-1" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Client Savings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">40%</span>
                <BarChart2 className="h-5 w-5 text-primary ml-1" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Efficiency Improvement</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary bg-gradient-to-br from-primary to-primary-deep rounded-2xl p-12 relative overflow-hidden">
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
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Us in Shaping the Future of Quantity Surveying
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Experience the power of AI in transforming your quantity surveying practices
            </p>
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 