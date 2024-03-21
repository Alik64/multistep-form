import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <main className="content">
      <div>
       <Sidebar/>

        <section>
          <div></div>
          <section></section>
          <div>
            <button>Go back</button>
            <button>Next</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
