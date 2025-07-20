import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, User, MessageSquare, ExternalLink, Code, Database, Brain, Settings, Phone, MapPin } from 'lucide-react';
import './App.css';

const colorThemes = [
  { primary: '#10B981', secondary: '#F97316', accent: '#3B82F6', name: 'green-orange' },
  { primary: '#EF4444', secondary: '#EC4899', accent: '#8B5CF6', name: 'red-pink' },
  { primary: '#3B82F6', secondary: '#8B5CF6', accent: '#10B981', name: 'blue-purple' },
  { primary: '#F59E0B', secondary: '#06B6D4', accent: '#EF4444', name: 'amber-cyan' },
];

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const designations = [
    'ML Engineer',
    'Cloud Engineer', 
    'DevOps Engineer',
    'Software Developer'
  ];

  useEffect(() => {
    // Set random theme on load
    const randomTheme = Math.floor(Math.random() * colorThemes.length);
    setCurrentTheme(randomTheme);
    
    // Update CSS variables
    const theme = colorThemes[randomTheme];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
  }, []);

  useEffect(() => {
    // Rotate designations every 2 seconds
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`floating-shape ${i % 2 === 0 ? 'triangle' : 'square'}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">HJ</span>
          </div>
          <nav className="nav">
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
          <div className="social-icons">
            <a href="https://github.com/Har976sh" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-jangid-298965276/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="section hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-name">Harsh Jangid</h1>
            <div className="designation-container">
              <span className="designation-text">{designations[currentDesignation]}</span>
            </div>
            <p className="hero-description">
              A learner before an engineering student who's obsessed with the idea of making finance smarter through technology. 
              Currently BTech at MUJ, but honestly, I learn more from building real solutions and asking the right questions than from textbooks.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                <ExternalLink size={20} />
                View My Projects
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="profile-image">
                <img src={require('./assets/profile.HEIC')} alt="Harsh Jangid" />
              </div>
            </div>
            <div className="about-text">
              <p>
                Hi, I am Harsh Jangid, a 3rd year undergrad from Manipal University interested in learning about modern AI and DevOps, 
                integrating Generative AI and ops (GenOps). I'm passionate about creating innovative solutions that bridge the gap between 
                artificial intelligence and operational excellence.
              </p>
              <p>
                Crafting the future of AI-powered solutions with cutting-edge technology and innovative thinking. 
                Specialized in generative AI, machine learning, and intelligent systems.
              </p>
              <p>
                My journey involves exploring the intersection of technology and finance, building solutions that make complex systems 
                more accessible and efficient. I believe in learning through hands-on experience and real-world problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <Code size={32} />
              </div>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <Database size={32} />
              </div>
              <h3>Backend</h3>
              <ul>
                <li>Django</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>SQL Database</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <Brain size={32} />
              </div>
              <h3>AI & ML Tools</h3>
              <ul>
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>Scikit-learn</li>
                <li>Keras</li>
                <li>LangChain</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <Settings size={32} />
              </div>
              <h3>Automation Tools</h3>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Linux</li>
                <li>Jenkins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-content">
            <div className="project-category">
              <h3 className="category-title">Major Projects</h3>
              <div className="project-cards">
                <div className="project-card placeholder">
                  <div className="project-icon">
                    <Code size={48} />
                  </div>
                  <h4>Coming Soon</h4>
                  <p>Major projects will be added here</p>
                </div>
              </div>
            </div>
            
            <div className="project-category">
              <h3 className="category-title">Minor Projects</h3>
              <div className="project-cards">
                <div className="project-card placeholder">
                  <div className="project-icon">
                    <Code size={48} />
                  </div>
                  <h4>Coming Soon</h4>
                  <p>Minor projects will be added here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-form-container">
              <div className="contact-info">
                <h3>Reach Out to Me</h3>
                <p>Let's connect and discuss opportunities, collaborations, or just have a tech chat!</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <User className="form-icon" size={20} />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Mail className="form-icon" size={20} />
                </div>
                
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <MessageSquare className="form-icon" size={20} />
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="contact-animation">
              <div className="earth-container">
                <div className="earth">
                  <div className="earth-inner"></div>
                </div>
                <div className="spaceship">
                  🚀
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-grid">
              <a href="https://github.com/Har976sh" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/harsh-jangid-298965276/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/Harsh63991861" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Harsh Jangid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;