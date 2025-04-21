import { ArrowRight, Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';
import Event from '../assets/images/Events.jpg';
import AI4QSIMG from '../assets/images/AI4QSIMG.png';
import { Link } from 'react-router-dom';

const EventPage = () => {
  const eventData = {
    title: "Artificial Intelligence for Quantity Surveying Practice",
    date: "24th April 2025",
    time: "9:30 - 14:30 ",
    location: "SURVEYOR HOUSE AT RICS WESTMINSTER",
    price: "Free",
    organizer: "AI4QS Initiative",
    description: [
      "Join us for an insightful event exploring the transformative potential of Artificial Intelligence in Quantity Surveying practice and education.",
      "This event brings together leading academics, industry practitioners, and technology experts to discuss how AI is reshaping the Quantity Surveying profession and what this means for practitioners, educators, and students.",
      "The session will include presentations, panel discussions, and networking opportunities, providing a comprehensive overview of current trends, future developments, and practical applications of AI in Quantity Surveying."
    ],
    agenda: [
      { time: "4:30 PM", activity: "Registration and Networking" },
      { time: "5:00 PM", activity: "Welcome and Introduction to AI4QS" },
      { time: "5:15 PM", activity: "Keynote: The Future of AI in Quantity Surveying" },
      { time: "5:45 PM", activity: "Panel Discussion: Challenges and Opportunities" },
      { time: "6:15 PM", activity: "Q&A Session" },
      { time: "6:30 PM", activity: "Networking and Refreshments" },
      { time: "7:00 PM", activity: "Event Close" }
    ],
    speakers: [
      { name: "Dr. Abdullahi Saka", role: "Reader, University of Westminster" },
      { name: "Dr. Kudirat Ayinla", role: "Lecturer, Loughborough University" },
      { name: "Industry Speakers", role: "To be announced" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Upcoming Event
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  {eventData.title}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Join us for a transformative discussion on the future of AI in Quantity Surveying
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="https://www.eventbrite.co.uk/e/artificial-intelligence-for-quantity-surveying-practice-tickets-1302937273459?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Register Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <Link to="/contact">Contact Organizers</Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={Event} alt="Event" className="w-full object-cover " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Event</h2>
              <div className="space-y-4 mb-8">
                {eventData.description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600">{paragraph}</p>
                ))}
              </div>

              {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Agenda</h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                <div className="divide-y divide-gray-200">
                  {eventData.agenda.map((item, index) => (
                    <div key={index} className="p-4 flex">
                      <div className="w-24 font-medium text-gray-900">{item.time}</div>
                      <div className="flex-1 text-gray-700">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Speakers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {eventData.speakers.map((speaker, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{speaker.name}</h4>
                    <p className="text-gray-600">{speaker.role}</p>
                  </div>
                ))}
              </div> */}
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Date</h4>
                      <p className="text-gray-600">{eventData.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Time</h4>
                      <p className="text-gray-600">{eventData.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600">{eventData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Organizer</h4>
                      <p className="text-gray-600">{eventData.organizer}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Button className="w-full">
                      <a href="https://www.eventbrite.co.uk/e/artificial-intelligence-for-quantity-surveying-practice-tickets-1302937273459?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                        Register Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
   

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
              Join Us for This Exciting Event
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Limited seats available. Register now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary">
                <a href="https://www.eventbrite.co.uk/e/artificial-intelligence-for-quantity-surveying-practice-tickets-1302937273459?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Register on Eventbrite <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
          
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPage;

