import { Bot, Calculator, ChartBar, ClipboardCheck, Cloud, Cog, FileText, Layers, PieChart, Shield, Zap, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const featuredServices = [
    {
      title: "AI-Powered Cost Estimation",
      description: "Our flagship solution harnesses the power of machine learning to transform how you estimate costs. By analyzing historical data, market trends, and project specifics, our AI delivers unparalleled accuracy.",
      features: [
        "Reduce estimation time by up to 60%",
        "Improve accuracy by 25% on average",
        "Consider thousands of variables simultaneously",
        "Learn from your historical project data"
      ],
      icon: Brain,
      color: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      title: "Automated Quantity Takeoff",
      description: "Our computer vision technology automatically extracts accurate measurements and quantities from building plans, BIM models, and even scanned drawings, eliminating tedious manual work.",
      features: [
        "Process complex drawings in minutes",
        "99.2% accuracy on standard plans",
        "Supports all common file formats",
        "Integrates with popular BIM software"
      ],
      icon: Bot,
      color: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-500"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Transform your data into actionable insights with our predictive analytics platform. Forecast costs, identify trends, and make informed decisions based on comprehensive data analysis.",
      features: [
        "Interactive dashboards and visualizations",
        "Real-time market price integration",
        "Risk assessment and mitigation tools",
        "Custom reporting capabilities"
      ],
      icon: ChartBar,
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-500"
    }
  ];

  const additionalServices = [
    {
      title: "Smart Document Processing",
      description: "Extract and process information from construction documents automatically using our AI technology.",
      icon: FileText,
    },
    {
      title: "Real-time Collaboration",
      description: "Cloud-based platform for seamless team collaboration and document sharing with powerful version control.",
      icon: Cloud,
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports and analyses with just a few clicks in multiple export formats.",
      icon: ClipboardCheck,
    },
    {
      title: "Process Automation",
      description: "Streamline workflows and reduce manual tasks with intelligent automation solutions customized for QS needs.",
      icon: Cog,
    },
    {
      title: "Integration Services",
      description: "Connect AI4QS with your existing tools and software for a unified, efficient workflow ecosystem.",
      icon: Zap,
    },
    {
      title: "Data Security & Compliance",
      description: "Enterprise-grade security and compliance features to ensure your sensitive project data remains protected.",
      icon: Shield,
    },
    {
      title: "BIM Data Extraction",
      description: "Seamlessly extract and analyze data from Building Information Models to inform your quantity surveying.",
      icon: Layers,
    },
    {
      title: "Historical Data Analysis",
      description: "Leverage past project data to improve future estimations and identify optimization opportunities.",
      icon: Database,
    }
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
              Our Solutions
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              AI-Powered Services for<br />Modern Quantity Surveyors
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions designed to transform your quantity surveying practice with cutting-edge artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful AI tools designed specifically for quantity surveying professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredServices.map((service) => (
              <Card key={service.title} className="overflow-hidden border-gray-200 h-full">
                <CardContent className="p-0">
                  <div className={`p-6 bg-gradient-to-br ${service.color}`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor} mb-4`} />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-primary mr-2 text-lg">•</span>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complementary solutions to enhance your quantity surveying workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-lg border bg-white hover:shadow-md transition-all group"
              >
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach to implementing AI solutions for your quantity surveying practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-gray-200 z-0 md:hidden"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Consultation & Analysis</h3>
                <p className="text-gray-600 text-center">We begin by understanding your specific needs, challenges, and workflows through a comprehensive consultation.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-gray-200 z-0 md:hidden"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Custom Implementation</h3>
                <p className="text-gray-600 text-center">Our team tailors our AI solutions to integrate seamlessly with your existing systems and processes.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-gray-200 z-0 md:hidden"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Training & Support</h3>
                <p className="text-gray-600 text-center">We provide comprehensive training and ongoing support to ensure you get maximum value from our solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary bg-gradient-to-br from-primary to-primary-deep relative overflow-hidden">
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
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Get in touch with our team to learn how AI4QS can revolutionize your quantity surveying workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary">
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
