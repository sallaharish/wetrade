export const getDescription = (label:any) => {
    switch (label) {
      case "Fully Automated Trading Software": return "Trade 24/7, Effortlessly The complete Automated Trading Software ready for quick-installation. AI Trading Software comes with a quick-install wizard that will walk you through the simple install and configuration process. No additional skills, tools, or downloads are required. Just double-click the wizard, and let it do the rest";
      case "Quick Strategy Guide": return "We've included a detailed guide that will walk you through the best techniques for setting up and using AI Trading Software. We'll show you how to maximize the performance of AI Trading Software with our informative Quick Strategy Guid";
      case "Real-Time Alerts and Notifications": return "We’ll keep you updated daily on your portfolio's performance with real-time alerts and notifications, so you're always in the loop.";
      case "Optimal Money-Management": return "AI Trading Software systematically tracks your open trading positions and closes each out at the optimal profit levels.";
      case "24/7 Quick Response Support": return "24/7 Quick Response Support Our support desk is open 24/7 to answer your questions. We pride ourselves on rapid follow-up often answering questions within one business day.";
      case "Beginner's Guide": return "";
      case " Back test of Trading Strategy": return "";
      case " Market Insights & Analysis": return "";
      case "Blog": return "";
      case "About": return "";
      default: return "";
    }
  };
  
  export const getCardImage = (label:any) => {
    switch (label) {
      case "Fully Automated Trading Software": return "/assets/menu/toolkits.png";
      case "Quick Strategy Guide": return "/assets/menu/screeners.png";
      case "Real-Time Alerts and Notifications": return "/assets/menu/backtesters.png";
      case "Optimal Money-Management": return "/assets/menu/ai-assistant.png";
      case "24/7 Quick Response Support": return "/assets/menu/ai-assistant.png";
      default: return "/assets/menu/default.png";
    }
  };
  