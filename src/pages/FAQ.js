import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./style.css";

function FAQ() {
    return (
      <div className="faq-container gradient-background">
        <div className="content left-aligned-content">
          <motion.div 
            initial={{ y: -10 }} 
            animate={{ y: 10 }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
            <FaQuestionCircle className="icon extra-large-icon glowing-icon" />
          </motion.div>
          <h1 className="title">Frequently Asked Questions (FAQ)</h1>
          <p className="subtitle large-text fade-in">
            Find answers to the most commonly asked questions about Alias AI.
          </p>
          
          <div className="section-box">
            <h2 className="section-title">What is Alias AI?</h2>
            <p className="description professional-text fade-in">
              Alias AI is an AI-powered VS Code extension that helps developers refactor their code by providing intelligent, context-aware variable, function, and class renaming suggestions.
            </p>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">Is Alias AI free to use?</h2>
            <p className="description professional-text fade-in">
              Alias AI is free to install, but requires an OpenAI API key, which may have associated costs depending on your OpenAI usage.
            </p>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">How do I get an OpenAI API key?</h2>
            <p className="description professional-text fade-in">
              You can obtain an OpenAI API key by visiting the <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI platform</a>, signing in or creating an account, and generating a new API key in the API Keys section.
            </p>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">Does Alias AI work with all programming languages?</h2>
            <p className="description professional-text fade-in">
              Alias AI currently supports JavaScript, TypeScript, Python, Java, and C++. Future updates may expand support to additional languages.
            </p>
          </div>
          
          <div className="section-box">
            <h2 className="section-title">How do I set up my API key?</h2>
            <p className="description professional-text fade-in">
              After obtaining your OpenAI API key, press <strong>Ctrl+Shift+P</strong> (or <strong>Cmd+Shift+P</strong> on macOS) in VS Code, search for <strong>Alias AI: Set API Key</strong>, and enter your API key when prompted.
            </p>
          </div>
        </div>
      </div>
    );
}

export default FAQ;
