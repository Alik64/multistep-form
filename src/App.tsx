import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { useFormStore } from "./store/store";

const App = () => {
  const increaseStep = useFormStore((state) => state.increase);
  const decreaseStep = useFormStore((state) => state.decrease);
  const step = useFormStore((state) => state.step);
  
  return (
    <main className="content">
      <div>{step}</div>
      <div>
        <Sidebar />

        <section>
          <div></div>
          <section></section>
          <div>
            <button onClick={decreaseStep}>Go back</button>
            <button onClick={increaseStep}>Next</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
