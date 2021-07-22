import { useState } from "react";
import Graphic from "./components/Graphic.jsx";

const App = () => {
  const [valueInput1, setValueInput1] = useState("");
  const [valueInput2, setValueInput2] = useState("");
  const [valueInput3, setValueInput3] = useState("");
  const [valueInput4, setValueInput4] = useState("");
  const [valueInput5, setValueInput5] = useState("");
  const [valueInput6, setValueInput6] = useState("");
  const [valueSubmit, setValueSubmit] = useState(false);

  const handleSubmit = () => {
    if (
      !valueInput1 &&
      !valueInput2 &&
      !valueInput3 &&
      !valueInput4 &&
      !valueInput5 &&
      !valueInput6
    ) {
      alert("Digite algum valor!");
      return 0;
    } else if (valueSubmit) {
      setValueSubmit(false);
    } else {
      setValueSubmit(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={valueInput1}
        onChange={(event) => setValueInput1(event.target.value)}
      />
      <input
        type="text"
        value={valueInput2}
        onChange={(event) => setValueInput2(event.target.value)}
      />
      <input
        type="text"
        value={valueInput3}
        onChange={(event) => setValueInput3(event.target.value)}
      />
      <input
        type="text"
        value={valueInput4}
        onChange={(event) => setValueInput4(event.target.value)}
      />
      <input
        type="text"
        value={valueInput5}
        onChange={(event) => setValueInput5(event.target.value)}
      />
      <input
        type="text"
        value={valueInput6}
        onChange={(event) => setValueInput6(event.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      {valueSubmit ? (
        <Graphic
          valueF1={valueInput1}
          valueF2={valueInput2}
          valueF3={valueInput3}
          valueF4={valueInput4}
          valueF5={valueInput5}
          valueF6={valueInput6}
        />
      ) : (
        <label></label>
      )}
    </div>
  );
};

export default App;
