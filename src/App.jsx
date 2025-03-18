import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Featuressection from "./components/Featuressection";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <>
      <Navbar/> 
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection/>
        <Featuressection/>
        <Workflow/>

      </div>
    </>
  )
}