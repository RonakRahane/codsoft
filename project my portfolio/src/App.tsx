import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, Github, Linkedin, ExternalLink, Moon, Sun, Code2, Database, Globe2 } from 'lucide-react';

function App(){
  // Set darkMode to true by default
  const [darkMode, setDarkMode] = useState(true);
  const [profileClicked, setProfileClicked] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleProfileClick = () => {
    setProfileClicked(true);
    setTimeout(() => setProfileClicked(false), 10);
  };

  return (
    <div className={`min-h-screen transition-colors duration-100 ${darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 sticky top-0 z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Ronak Rahane</h1>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </nav>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                 <Moon className="w-5 h-5 text-gray-600" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('src/images/background.jpeg')] bg-cover bg-center opacity-25 dark:opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Crafting exceptional digital experiences through elegant code and innovative solutions
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group max-w-sm mx-auto cursor-pointer" onClick={handleProfileClick}>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="src/images/picture.png"
                alt="Profile"
                className={`relative w-80 h-80 object-cover rounded-lg shadow-2xl transition-all duration-300 mx-auto transform hover:scale-105 ${profileClicked ? 'scale-110' : ''}`}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hi, I’m Ronak Rahane, a passionate Full Stack Developer with a strong dedication to crafting robust, 
              user-friendly, and innovative web applications. With expertise in both front-end and back-end technologies, 
              I thrive on turning ideas into reality through clean code and thoughtful design.
              <br/>
              <br/>
              <h3 >Let’s build something amazing together!</h3>
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group relative"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group relative"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold dark:text-white">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux & React Query</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold dark:text-white">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>PostgreSQL & MongoDB</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Globe2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold dark:text-white">DevOps</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>AWS & Azure</li>
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Linux & Shell Scripting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform with real-time inventory and AI-powered recommendations',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
                tech: ['React', 'Node.js', 'PostgreSQL']
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management with real-time updates and team analytics',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
                tech: ['Next.js', 'GraphQL', 'MongoDB']
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics dashboard with AI-driven insights and automated reporting',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                tech: ['TypeScript', 'Python', 'TensorFlow']
              },
            ].map((project) => (
              <div key={project.title} className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Resume Section */}
        <section className="py-20 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold mb-6 dark:text-white">Download Resume</h2>
                  <a
                    href="#"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </div>
              </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Get in Touch</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <h3 className="font-semibold dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">ronak.rahane@example.com</p>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <h3 className="font-semibold dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 (123) 456-7890</p>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:text-white transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:text-white transition-all duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:text-white transition-all duration-300"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:text-white transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

         {/* Footer */}
         <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Ronak Rahane</span>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors group relative">
                <Github className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors group relative">
                <Linkedin className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors group relative">
                <Mail className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Email</span>
              </a>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>&copy; 2025 Ronak Rahane. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
