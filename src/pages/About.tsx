import { ArrowRight, Award, BarChart2, CheckCircle, ChevronRight, Globe, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Drsaka from '../assets/images/Dr-saka.jpg';
import DrKudirat from '../assets/images/Dr-Kudirat.jpg';
import DrAfolabi from '../assets/images/Dr-Afolabi.jpg';
import DrKaren from '../assets/images/Dr-Karen.jpg';
import Olayinka from '../assets/images/Olayinka.jpg';
import DrSitsofe from '../assets/images/Dr-sitsofe.jpg';
import DrAravinda from '../assets/images/Dr-Aravinda.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Dr Abdullahi Saka",
      position: "Reader",
      bio: "Researcher in sustainable digital construction and digital enterprise with expertise QS in applied AI and system development. His research philosophy is to improve the status quo and provide practical solutions to the problems of productivity, safety, and sustainability in the construction sector and beyond",
      image: Drsaka
    },
    { 
      name: "Dr Kudirat Ayinla",
      position: "Lecturer",
      bio: "Programme Lead for BSc (Hons) in Commercial Management and Quantity Surveying (Loughborough University). Her research mission is to promote process efficiency and performance in the industry through sustainable means and the use of digital technology for a better-built environment.",
      image: DrKudirat
    },
    {
      name: "Dr Afolabi Dania",
      position: "Senior Lecturer",
      bio: "Researcher in sustainability in the built environment, construction in emerging economies and innovation in the built environment. With expertise in module and programme development & enhancement, engaging with PSRBs and industry practitioners to develop modules and programmes.",
      image: DrAfolabi
    },
    {
      name: "Dr Karen Blay",
      position: "Senior Lecturer",
      bio: "Her research seeks to advance Information Resilience and Digital Inclusion across the Digital Built Environment (DBE). Research Lead for the virtual Centre for Information Resilience and Digital Inclusion (CIRDI), Loughborough University.",
      image: DrKaren
    },
    {
      name: "Olayinka Omoboye",
      position: "Senior Lecturer",
      bio: "Course Leader for Quantity Surveying and Commercial Management (University of Westminster). With expertise in quantity surveying and construction management, his research aims to advance development in the built environment.",
      image: Olayinka
    },
    {
      name: "Dr Sitsofe Yevu",
      position: "Lecturer",
      bio: "His research cover applying digital technologies such as building information modelling (BIM), digital twins, and artificial intelligence to advance sustainable construction processes, construction circular economy, low-carbon buildings, and off-site construction.",
      image: DrSitsofe
    },
    {
      name: "Dr Aravinda Adikari",
      position: "Senior Lecturer",
      bio: "Quantity Surveying Apprentice Course Leader (University of Westminster) with research expertise in BIM, digital construction and construction management.",
      image: DrAravinda
    }
    
  ];

  const values = [
    {
      icon: Award,
      title: "Innovation",
      description: "We are committed to pioneering new ways of thinking, working, and learning by embracing the transformative potential of Artificial Intelligence in Quantity Surveying and the built environment."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We uphold the highest standards of ethics, transparency, and trust as we integrate AI into professional practice and education, ensuring that technology serves people and the public good."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe progress happens through partnerships, between academia, industry, professional bodies, and future generations, working together to shape an AI-enabled, human-centred future for Quantity Surveying."
    },
    {
      icon: Globe,
      title: "Future-Readiness",
      description: "We are dedicated to preparing Quantity Surveying professionals and graduates to thrive in an increasingly digital, data-driven world, fostering lifelong learning, adaptability, and critical leadership"}
  ];

  const objectives = [
    {
      title: "Innovation in Practice",
      description: "Champion the use of AI technologies to enhance QS workflows, decision-making, and project outcomes - redefining the way cost, risk, and value are managed."
    },
    {
      title: "Transformation in Education",
      description: "Embed AI awareness, tools, and competencies into QS curricula to prepare future-ready professionals equipped for a digital-first industry."
    },
    {
      title: "Collaboration & Knowledge Exchange",
      description: "Foster partnerships between academia, industry, and professional bodies to align educational frameworks with real-world applications and needs."
    },
    {
      title: "Ethical & Standards-Led Development",
      description: "Promote the responsible and ethical adoption of AI in QS, guided by clear professional standards and inclusive practices."
    },
    {
      title: "Capacity Building & Skills Development",
      description: "Enable upskilling through training, certification pathways, and CPD for both students and practitioners navigating AI integration."
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
            <h2 className="text-3xl font-bold text-gray-900">AI for Quantity Surveying Practice (AI4QS)</h2>
            <p className="text-lg text-gray-600">
            At AI4QS, we are reimagining the future of Quantity Surveying through the transformative lens of Artificial Intelligence.
AI4QS is a pioneering initiative led by researchers from the University of Westminster and Loughborough University, originating from the ongoing AI Competencies in Construction Project funded by UK Research and Innovation (UKRI) and hosted at the School of Applied Management, University of Westminster

            </p>
            <p className="text-lg text-gray-600">
            Our mission is to understand, shape, and advance the role of AI in Quantity Surveying practice and education. We believe Artificial Intelligence is not simply a tool, it is a transformative force reshaping how projects are costed, managed, delivered, and sustained. As custodians of critical project, financial, and sustainability data, Quantity Surveyors must evolve beyond traditional roles to become future-ready leaders in an increasingly digital and data-driven built environment.
            <br />
<span className='font-bold'>{""}AI4QS is not just about technology.</span> <br />
It's about empowering the Quantity Surveying profession to lead confidently, think critically, and unlock new forms of value in the data age.

            </p>
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

        {/* Objectives */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Strategic Focus
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Objectives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The key areas where we're driving change in the quantity surveying profession
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={objective.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
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
            {/* <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Experience the power of AI in transforming your quantity surveying practices
            </p> */}
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