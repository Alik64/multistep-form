import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { useFormStore } from "./store/store";

const App = () => {
  const increaseStep = useFormStore((state) => state.increase);
  const decreaseStep = useFormStore((state) => state.decrease);
  const step = useFormStore((state) => state.step);
  
  return (
    <main className="main">

      <div className="main-container">
        <Sidebar />

        <section>
          <section></section>
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
