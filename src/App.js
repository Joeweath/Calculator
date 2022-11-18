import Button from "./components/calculator/buttonbox/Button/Button";
import ButtonBox from "./components/calculator/buttonbox/buttonbox";
import Calculator from "./components/calculator/calculator";

function App() {
  return (
    <div className="App">
      <Calculator>
        <screen />
        {/* <ButtonBox>
          <Button className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}/>
        </ButtonBox>
      </Calculator>
    </div>
  );
}

export default App;
