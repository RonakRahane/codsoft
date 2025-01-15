import React, { useState } from "react";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Stethoscope,
  Smile,
  ShieldCheck,
  ChevronRight,
  Star,
  Calendar,
  Award,
  Users,
  HeartPulse,
  Sparkles,
  Baby,
  PhoneCall,
  CreditCard,
  ThumbsUp,
  ParkingCircle,
  Navigation,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Building2,
  GraduationCap,
  Heart,
} from "lucide-react";

const services = [
  {
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and preventive treatments",
    icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with whitening, veneers, and aesthetic procedures",
    icon: <Smile className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent dental problems",
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Orthodontics",
    description:
      "Advanced teeth straightening with Invisalign and traditional braces",
    icon: <Sparkles className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Specialized dental care for children in a friendly environment",
    icon: <Baby className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Preventive Care",
    description:
      "Regular check-ups and cleanings to maintain optimal oral health",
    icon: <HeartPulse className="w-12 h-12 text-blue-500" />,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "The best dental experience I've ever had! Dr. Johnson and her team are incredibly professional and caring.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "Finally found a dental clinic that makes me feel comfortable. The staff is amazing and the results are fantastic!",
    rating: 5,
  },
  {
    name: "Emily L.",
    text: "State-of-the-art facility with a warm, welcoming atmosphere. Highly recommend!",
    rating: 5,
  },
];

const benefits = [
  {
    title: "Affordable Care",
    description: "Flexible payment plans and insurance options available",
    icon: <CreditCard className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Comfort First",
    description: "Pain-free treatments with advanced techniques",
    icon: <ThumbsUp className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Easy Parking",
    description: "Convenient location with ample parking space",
    icon: <ParkingCircle className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Central Location",
    description: "Easy to reach from anywhere in the city",
    icon: <Navigation className="w-8 h-8 text-blue-500" />,
  },
];

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-gray-900">
                The Dental Smile
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-500">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-500">
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-500"
              >
                Reviews
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-500">
                Contact
              </a>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    
      <header className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="./src/images/clinic.png"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              Bright Smiles, Healthy Lives
            </h1>
            <p className="text-2xl text-white/90 mb-12 animate-fade-in-delay">
              Experience world-class dental care with our team of experienced
              professionals. Comprehensive care for the whole family in a
              comfortable, modern environment.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center text-lg font-semibold"
              >
                Book Free Consultation
                <ChevronRight className="ml-2" />
              </button>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition flex items-center text-lg font-semibold"
              >
                <Phone className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Builders */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">15+ Years</h3>
              <p className="text-gray-600">Of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-blue-500 mb-4 fill-current" />
              <h3 className="text-2xl font-bold mb-2">5-Star</h3>
              <p className="text-gray-600">Rated Clinic</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Same Day</h3>
              <p className="text-gray-600">Appointments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive dental care for all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="text-blue-500 hover:text-blue-600 flex items-center"
                >
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Meet Dr. Mike Andreson
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                With over 15 years of experience in dentistry, Dr. Andreson leads
                our team with expertise in general and cosmetic dentistry. he
                believes in providing personalized care and ensuring patient
                comfort at every visit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-500" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-500" />
                  <span>123 Dental Street, Medical District, City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-500" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-500" />
                  <span>contact@thedentalsmile.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="src/images/picture.png"
                alt="Dr. Sarah Johnson"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-card-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <p className="mt-2 font-semibold">500+ 5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">
              Real reviews from our satisfied patients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Experience the difference at The Dental Smile
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Stethoscope className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">The Dental Smile</span>
              </div>
              <p className="text-gray-400 mb-6">
                Providing exceptional dental care and creating beautiful smiles
                since 2008.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Patient Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Building2 className="w-4 h-4 mr-2 text-blue-400" />
                  General Dentistry
                </li>
                <li className="flex items-center text-gray-400">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                  Cosmetic Dentistry
                </li>
                <li className="flex items-center text-gray-400">
                  <GraduationCap className="w-4 h-4 mr-2 text-blue-400" />
                  Orthodontics
                </li>
                <li className="flex items-center text-gray-400">
                  <Heart className="w-4 h-4 mr-2 text-blue-400" />
                  Pediatric Care
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  123 Dental Street, Medical District, City
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  (123) 456-7890
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  contact@thedentalsmile.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Mon-Fri: 9:00 AM - 6:00 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} The Dental Smile. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Visit</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Tell us about your dental needs"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsContactFormOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
