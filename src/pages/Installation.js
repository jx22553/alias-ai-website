import React from "react";
import { FaWrench, FaKey, FaCog, FaCode, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./style.css";

function Installation() {
    return (
      <div className="installation-container gradient-background">
        <div className="content left-aligned-content">
          <motion.div 
            initial={{ y: -10 }} 
            animate={{ y: 10 }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
            <FaWrench className="icon extra-large-icon glowing-icon" />
          </motion.div>
          <h1 className="title">Installation Guide</h1>
          <p className="subtitle large-text fade-in">
            Get started with Alias AI by following these simple steps.
          </p>
          
          <div className="section-box">
            <h2 className="section-title">Prerequisites</h2>
            <p className="description professional-text fade-in">
              To use Alias AI, you will need an <strong>OpenAI API key</strong>. This enables the extension to provide AI-powered suggestions within your VS Code editor.
            </p>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">How to Install</h2>
            <div className="installation-steps">
              <p><FaCheckCircle className="list-icon" /> Open <strong>Visual Studio Code</strong>.</p>
              <p><FaCheckCircle className="list-icon" /> Go to the <strong>Extensions View</strong> in the Activity Bar.</p>
              <p><FaCheckCircle className="list-icon" /> Search for <strong>Alias AI</strong> in the Extensions Marketplace.</p>
              <p><FaCheckCircle className="list-icon" /> Click <strong>Install</strong> to add the extension to your editor.</p>
              <p><FaCheckCircle className="list-icon" /> Reload VS Code if prompted.</p>
            </div>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">How to Obtain an OpenAI API Key</h2>
            <div className="installation-steps">
              <p><FaKey className="list-icon" /> Visit the <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI platform</a>.</p>
              <p><FaKey className="list-icon" /> Sign in or create an OpenAI account.</p>
              <p><FaKey className="list-icon" /> Navigate to the <strong>API Keys</strong> section.</p>
              <p><FaKey className="list-icon" /> Click <strong>Create New Key</strong> and copy it to a secure location.</p>
            </div>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">Setting Up Your API Key</h2>
            <div className="installation-steps">
              <p><FaCog className="list-icon" /> Press <strong>Ctrl+Shift+P</strong> (or <strong>Cmd+Shift+P</strong> on macOS) to open the Command Palette.</p>
              <p><FaCog className="list-icon" /> Search for and select <strong>Alias AI: Set API Key</strong>.</p>
              <p><FaCog className="list-icon" /> Enter your OpenAI API key and press <strong>Enter</strong>.</p>
              <p><FaCog className="list-icon" /> You’ll see a confirmation message once the key is securely stored.</p>
            </div>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">How to Use Alias AI</h2>
            <div className="installation-steps">
              <p><FaCode className="list-icon" /> Open a supported file (JavaScript, TypeScript, Python, Java, or C++).</p>
              <p><FaCode className="list-icon" /> Press <strong>Ctrl+Shift+P</strong> (or <strong>Cmd+Shift+P</strong> on macOS) and select <strong>Alias AI: Rename Variables</strong>.</p>
              <p><FaCode className="list-icon" /> View the <strong>Suggestions Panel</strong> with AI-generated names.</p>
              <p><FaCode className="list-icon" /> Click on variable names to highlight them in your code.</p>
              <p><FaCode className="list-icon" /> Select the best suggestion and apply changes instantly.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Installation;
