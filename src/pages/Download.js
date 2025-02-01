import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./style.css";

function Download() {
    return (
      <div className="download-container gradient-background">
        <div className="content centered-content">
          <motion.div 
            initial={{ y: -10 }} 
            animate={{ y: 10 }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
            <FaDownload className="icon extra-large-icon glowing-icon" />
          </motion.div>
          <h1 className="title center-text">Get Alias AI</h1>
          <p className="subtitle large-text fade-in center-text">
            Enhance your coding experience with AI-powered smart renaming.
          </p>
          
          <h2 className="glowing-text center-text">Download from the VS Code Marketplace</h2>
          <p className="description professional-text fade-in centered-text">
            Alias AI is available for free on the Visual Studio Code Marketplace. Click below to install and start optimizing your code instantly.
          </p>
          
          <motion.a 
            href="https://marketplace.visualstudio.com/items?itemName=alias-ai.alias-ai-dev&ssr=false#overview" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button neon-button large-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}>
            <FaExternalLinkAlt className="button-icon" /> Go to Marketplace
          </motion.a>
        </div>
      </div>
    );
}

export default Download;
