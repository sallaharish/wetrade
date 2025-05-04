import dropdownDarkImg1 from "../Assets/images/bw 1.png"
import dropdownDarkImg2 from "../Assets/images/bw 2.png"
import dropdownDarkImg3 from "../Assets/images/bw 3.png"
import dropdownDarkImg4 from "../Assets/images/bw 4.png"
import dropdownLightImg1 from "../Assets/images/color 1.png"
import dropdownLightImg2 from "../Assets/images/color 2.png"
import dropdownLightImg3 from "../Assets/images/color 3.png"
import dropdownLightImg4 from "../Assets/images/color 4.png"
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
  
  export const getCardImage = (label: string) => {
    let imgPath;
    switch (label) {
      case "Fully Automated Trading Software":
        imgPath = dropdownLightImg1;
        break;
      case "Quick Strategy Guide":
        imgPath = dropdownLightImg2;
        break;
      case "Real-Time Alerts and Notifications":
        imgPath = dropdownLightImg3;
        break;
      case "Optimal Money-Management":
        imgPath = dropdownLightImg4;
        break;
      case "24/7 Quick Response Support":
        imgPath = dropdownLightImg2;
        break;
      default:
        imgPath = dropdownLightImg3;
        break;
    }
  
    return imgPath.replace(" ", "%20"); // Handle space in URL
  };
  
  export const getHoverCardImage = (label: string) => {
    let imgPath;
    switch (label) {
      case "Fully Automated Trading Software":
        imgPath = dropdownDarkImg1;
        break;
      case "Quick Strategy Guide":
        imgPath = dropdownDarkImg2;
        break;
      case "Real-Time Alerts and Notifications":
        imgPath = dropdownDarkImg3;
        break;
      case "Optimal Money-Management":
        imgPath = dropdownDarkImg4;
        break;
      case "24/7 Quick Response Support":
        imgPath = dropdownDarkImg2;
        break;
      default:
        imgPath = dropdownDarkImg3;
        break;
    }
  
    return imgPath.replace(" ", "%20"); 
  };