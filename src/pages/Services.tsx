import { Bot, Calculator, ChartBar, ClipboardCheck, Cloud, Cog, FileText, Layers, PieChart, Shield, Zap, Brain, Database, BookOpen, Users, Globe, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const projectPhases = [
    {
      title: "Phase I: Baseline Research",
      description: "Laying the foundation for understanding AI in Quantity Surveying practice and education.",
      features: [
        "Mapping the current status of AI adoption in Quantity Surveying across academia and industry.",
        "Identifying key opportunities, benefits, barriers, and skill gaps in AI uptake.",
        "Conducting surveys, interviews, and focus groups with QS professionals and educators.",
        "Analysing trends, challenges, and future needs to inform the next phase of the project."
      ],
      icon: Brain,
      color: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      title: "Phase II: Competency and Education Development",
      description: "Defining what it means to be an \"AI-Ready QS\" and supporting the evolution of QS education and professional development.",
      features: [
        "Defining core competencies and skillsets for the AI-literate QS professional.",
        "Developing a strategic roadmap for integrating AI into QS curricula and industry training.",
        "Designing draft education modules, CPD programmes, and professional training pathways.",
        "Engaging with universities, industry partners, and professional bodies to validate and refine proposals."
      ],
      icon: BookOpen,
      color: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-500"
    },
    {
      title: "Phase III: Knowledge Exchange and Industry Engagement",
      description: "Bridging academia and practice to drive collaborative learning, adoption, and leadership in AI for QS.",
      features: [
        "Organising workshops, panels, webinars, and conferences to share project findings.",
        "Publishing practical guidance, toolkits, and whitepapers for academia and industry.",
        "Collaborating with RICS, industry leaders, and education providers to align professional standards.",
        "Building a community of AI4QS Champions to drive future innovation in the sector."
      ],
      icon: Users,
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-500"
    },
    {
      title: "Phase IV: System Development and Future Delivery",
      description: "Creating a digital platform to support QS professionals, educators, and organisations on their AI adoption journey.",
      features: [
        "Designing and developing the AI4QS Digital Hub to house research outputs, learning resources, and tools.",
        "Launching a competency framework dashboard and interactive self-assessment tools for QSs.",
        "Providing on-demand guidance, e-learning modules, and community networking features.",
        "Establishing AI4QS as an ongoing centre of excellence supporting innovation in QS practice and education."
      ],
      icon: Server,
      color: "from-green-500/10 to-green-500/5",
      iconColor: "text-green-500"
    }
  ];

  const additionalServices = [
    {
      title: "Education and Training Development",
      description: "We design training recommendations and support the integration of AI competencies into Quantity Surveying education. This includes developing short courses, CPD (Continuing Professional Development) programs, and bespoke workshops aimed at upskilling QS educators, students, and industry professionals.",
      icon: BookOpen,
    },
    {
      title: "Research and Insights",
      description: "We produce cutting-edge research, toolkits, and whitepapers offering practical guidance on AI adoption in QS practice. Our insights cover ethics, technical frameworks, emerging trends, and sector-specific applications, helping the profession navigate opportunities and challenges with confidence.",
      icon: FileText,
    },
    {
      title: "Knowledge Exchange and Community Building",
      description: "We host panels, roundtables, collaborative forums, and workshops to connect academia, industry, and professional bodies. Our knowledge exchange activities foster a vibrant, forward-thinking community committed to advancing AI leadership in Quantity Surveying.",
      icon: Users,
    },
    {
      title: "Professional Development and Strategic Advice",
      description: "We advise professional bodies, educational institutions, and companies on developing AI competency frameworks, ethical standards, and training pathways. We also support career development for Quantity Surveyors by offering skills audits, workforce planning, and strategic guidance on digital upskilling.",
      icon: ChartBar,
    },
    {
      title: "Consultative Support for Organisations",
      description: "We work with construction and real estate organisations to integrate AI-driven solutions into cost management, project forecasting, lifecycle costing, and commercial risk management. Our consultative support ensures teams adopt AI responsibly, efficiently, and strategically to unlock long-term value.",
      icon: Shield,
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-96 w-96 -top-48 -right-48 rounded-full bg-primary/5 blur-3xl opacity-50"></div>
          <div className="absolute h-96 w-96 -bottom-48 -left-48 rounded-full bg-purple-500/5 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Initiative
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              AI-Powered Services for<br />Modern Quantity Surveyors
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions designed to transform your quantity surveying practice with cutting-edge artificial intelligence.
            </p>
          </div>
        </div>
      </section> */}

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project           </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to integrating AI in Quantity Surveying Practice and Education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projectPhases.map((phase) => (
              <Card key={phase.title} className="overflow-hidden border-gray-200 h-full">
                <CardContent className="p-0">
                  <div className={`p-6 bg-gradient-to-br ${phase.color}`}>
                    <phase.icon className={`h-10 w-10 ${phase.iconColor} mb-4`} />
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.features.map((feature) => (
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
              Our Services and Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support solutions to advance AI adoption in Quantity Surveying in Practice and Education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              Ready to Transform Your Practice and Education?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary">
                <Link to="/contact">Get in touch</Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/case-studies">View Case Studies</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
