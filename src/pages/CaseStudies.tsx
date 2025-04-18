import { ArrowRight, Award, CheckCircle, Clock, Download, FileText, LineChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { getServiceSchema } from '@/utils/schemaMarkup';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Reducing Estimation Time by 70% for Major Hospital Project",
      client: "HealthBuild Contractors",
      description: "How AI4QS helped a major healthcare construction firm dramatically reduce their estimation time while improving accuracy by 25%.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      industry: "Healthcare",
      duration: "6 months",
      results: [
        "Reduced estimation time from 2 weeks to 3 days",
        "Improved cost prediction accuracy by 25%",
        "Saved approximately $2.3M in potential cost overruns"
      ],
      testimonial: {
        quote: "AI4QS transformed our quantity surveying process completely. What used to take weeks now takes days, with better accuracy.",
        author: "James Wilson",
        position: "Chief Estimator, HealthBuild Contractors"
      }
    },
    {
      title: "AI-Powered Quantity Takeoff for Commercial High-Rise",
      client: "Skyward Development Group",
      description: "Implementing automated quantity takeoff for a 45-story commercial building with complex architectural features.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      industry: "Commercial Real Estate",
      duration: "4 months",
      results: [
        "90% reduction in manual measurements",
        "Identified 15% material optimization opportunities",
        "Completed quantity takeoff in 2 days vs. typical 3 weeks"
      ],
      testimonial: {
        quote: "The precision of AI4QS's automated quantity takeoff is remarkable. It found optimization opportunities we would have missed.",
        author: "Michelle Zhang",
        position: "Project Manager, Skyward Development"
      }
    },
    {
      title: "Predictive Cost Modeling for Residential Development",
      client: "HomeSpace Developers",
      description: "Using machine learning to predict cost fluctuations for a 200-unit residential development over a 3-year construction timeline.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      industry: "Residential Construction",
      duration: "12 months",
      results: [
        "Predicted material cost changes with 92% accuracy",
        "Enabled strategic procurement saving 12% on key materials",
        "Improved cash flow forecasting by anticipating cost spikes"
      ],
      testimonial: {
        quote: "The predictive cost modeling allowed us to make procurement decisions that saved millions on our development project.",
        author: "Thomas Reed",
        position: "Finance Director, HomeSpace Developers"
      }
    },
    {
      title: "Government Infrastructure Project Cost Analysis",
      client: "National Infrastructure Authority",
      description: "Analyzing historical data from 50+ infrastructure projects to improve estimation accuracy for a major bridge construction.",
      image: "https://images.unsplash.com/photo-1625183234864-00051efa6068?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      industry: "Public Infrastructure",
      duration: "9 months",
      results: [
        "Identified systematic estimation errors in similar past projects",
        "Developed custom ML model for infrastructure-specific factors",
        "Reduced contingency requirements by 15% through improved accuracy"
      ],
      testimonial: {
        quote: "AI4QS's data analysis uncovered patterns in our historical projects that were impossible to see manually, improving our entire approach.",
        author: "Dr. Elena Kapoor",
        position: "Chief Engineer, National Infrastructure Authority"
      }
    }
  ];

  const caseStudyMetrics = [
    { value: "£186M", label: "Project Value Optimized", icon: LineChart },
    { value: "65%", label: "Average Time Saved", icon: Clock },
    { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
    { value: "42", label: "Enterprise Clients", icon: Users }
  ];

  return (
    <>
      <SEOHead 
        title="AI4QS Case Studies | Success Stories in AI-Powered Quantity Surveying"
        description="Explore real-world examples of how AI4QS technology has transformed quantity surveying practices, reducing estimation time by up to 70% and improving accuracy by 25%."
        keywords="quantity surveying case studies, AI success stories, construction cost savings, AI4QS implementation, AI for quantity surveyors, cost estimation, quantity takeoff automation"
        ogType="article"
        ogImage="https://ai4qs.com/images/case-studies-og.jpg"
        schemaData={getServiceSchema()}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-96 w-96 -top-48 -right-48 rounded-full bg-primary/5 blur-3xl opacity-50"></div>
          <div className="absolute h-96 w-96 -bottom-48 -left-48 rounded-full bg-purple-500/5 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Success Stories
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real-world examples of how AI4QS is transforming quantity surveying practices and delivering measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudyMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{metric.value}</span>
                  <metric.icon className="h-5 w-5 text-primary ml-1" />
                </div>
                <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="overflow-hidden border-gray-200 shadow-md bg-white">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} h-72 lg:h-auto`}>
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} p-8`}>
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {study.industry}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                          <Clock className="h-3 w-3 mr-1" />
                          {study.duration}
                        </div>
                      </div>
                      <div className="text-primary font-semibold mb-2">{study.client}</div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      
                      <div className="bg-primary/5 p-6 rounded-xl mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Key Results:</h3>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4 mb-6 italic text-gray-600">
                        "{study.testimonial.quote}"
                        <div className="mt-2 text-sm font-medium text-gray-900 not-italic">
                          {study.testimonial.author}, {study.testimonial.position}
                        </div>
                      </div>
                      
                      <Button className="group">
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our whitepapers and industry reports for more insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Quantity Surveying: AI Impact Report",
                description: "An in-depth analysis of how AI is reshaping the quantity surveying profession",
                icon: FileText
              },
              {
                title: "ROI Calculator: AI in Quantity Surveying",
                description: "Interactive tool to calculate potential return on investment for AI implementation",
                icon: LineChart
              },
              {
                title: "Implementation Guide: AI for QS Practices",
                description: "Step-by-step guide for integrating AI solutions into existing QS workflows",
                icon: Award
              }
            ].map((resource) => (
              <div key={resource.title} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <resource.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See AI4QS in Action?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover how our AI solutions can transform your quantity surveying practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
