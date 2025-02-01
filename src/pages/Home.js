import React from "react";
import { FaRocket, FaCogs, FaBolt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./style.css";

function Home() {
    return (
      <div className="home-container gradient-background">
        <div className="content centered-content">
          <motion.div 
            initial={{ y: -10 }} 
            animate={{ y: 10 }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
            <FaRocket className="icon extra-large-icon glowing-icon" />
          </motion.div>
          <h1 className="title center-text" style={{ fontSize: "4rem" }}>Alias AI</h1>
          <p className="subtitle large-text fade-in center-text">
            The AI-powered assistant for cleaner, more readable, and maintainable code.
          </p>
          
          <h2 className="glowing-text center-text">Why Choose Alias AI?</h2>
          <p className="description professional-text fade-in centered-text">
            Alias AI seamlessly integrates with your development workflow, helping you refactor code effortlessly with AI-driven variable and function renaming. Reduce errors, improve clarity, and streamline your projects with ease.
          </p>
          
          <div className="features-list" style={{ display: "flex", flexDirection: "column", alignItems: "center", whiteSpace: "nowrap", fontSize: "0.9rem", lineHeight: "1.2" }}>
            <p><FaCheckCircle className="list-icon" /> <strong>Improve Readability:</strong> AI-suggested variable names make your code easier to understand.</p>
            <p><FaCheckCircle className="list-icon" /> <strong>Boost Productivity:</strong> Reduce time spent manually renaming variables.</p>
            <p><FaCheckCircle className="list-icon" /> <strong>Maintain Consistency:</strong> Ensure uniform naming conventions across your codebase.</p>
            <p><FaCheckCircle className="list-icon" /> <strong>Multi-Language Support:</strong> Works with JavaScript, Python, Java, and C++.</p>
            <p><FaCheckCircle className="list-icon" /> <strong>Seamless VS Code Integration:</strong> Works directly within your IDE with an intuitive UI.</p>
          </div>
          
          <div className="visuals row-visuals">
            <motion.div 
              className="visual-box neon-box large-box" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}>
                <FaCogs className="visual-icon extra-large-icon glowing-icon" />
              </motion.span>
              <p className="feature-text">Seamless VS Code Integration</p>
            </motion.div>
            <motion.div 
              className="visual-box neon-box large-box" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}>
                <FaBolt className="visual-icon extra-large-icon glowing-icon" />
              </motion.span>
              <p className="feature-text">Instant Smart Renaming</p>
            </motion.div>
            <motion.div 
              className="visual-box neon-box large-box" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}>
                <FaShieldAlt className="visual-icon extra-large-icon glowing-icon" />
              </motion.span>
              <p className="feature-text">Code Security & Consistency</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
}

export default Home;
