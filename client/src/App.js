// Create the react app using the command called npx create-react-app app_name
// after that move to that particular app using command called cd app_name
// To start our app use the command npm start
// The default port number of the react application is 3000
// In order to apply styling I have been using  the bootstrap
// To import bootstrap go to offical website of getbootstrap.com
// And copy the links of css and js
// Paste those links in index.html file present in public folder(remove manifest)
// Change the title of your project in the title tag
// After that src folder and create two new folders called components(reusable components and layouts) and pages(routes are written in this folder)
// After that create the Layout folder inside the components
// Create layout.js file inside the layout folder
// Create the required components
// To install icons the command is npm install react-icons
import Tada from "react-reveal/Tada";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";
// To get the basic structure of the react we use the short cut called rafce(react arrow function export component)
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              © 2025 VishnuPriya Athukuri “Made with ❤️ using React”
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29767"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
