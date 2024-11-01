// @ts-expect-error We're importing a JSX file
import MyApp from "./components/MyApp";

function App() {
  return (
    <div>
      <MyApp />
    </div>
  );
}

export default App;
