import { FunctionComponent } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { useFormStore } from "./store/store";
import PersonalInfo from "components/personal-info/PersonalInfo";


const App = () => {
  const increaseStep = useFormStore((state) => state.increase);
  const decreaseStep = useFormStore((state) => state.decrease);
  const step = useFormStore((state) => state.step);
  interface ComponentMap {
    [key: number]: React.ReactNode; // Using number as key type
  }
  const componentMap: ComponentMap = {
    1: <PersonalInfo/>,
    2: <div>2</div>,
    3: <div>3</div>,
    4: <div>4</div>,
  };

  const SectionToRender = componentMap[step];

  return (
    <main className="main">

      <div className="main-container">
        <Sidebar />

        <section>
          {SectionToRender}
          <div>
            <button onClick={decreaseStep}>Go back</button>
            <button onClick={increaseStep}>Next Step</button>
          </div>
        </section>
      
      </div>
    </main>
  );
};

export default App;
