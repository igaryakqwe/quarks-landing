import Button from "./components/common/Button/Button.tsx";
import Input from "./components/common/Input/Input.tsx";
import Select from "./components/common/Select/Select.tsx";
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  return (
    <main>
      <h1>Start</h1>
      <Button>Start</Button>
      <Button disabled>Start</Button>
      <Input placeholder="12313213" />
      <Input error placeholder="12313213" />
      <div>
        <Select
          id="select-option1"
          name="options"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleChange}
        >
          Option 1
        </Select>

        <Select
          id="select-option2"
          name="options"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleChange}
        >
          Option 2
        </Select>

        <Select
          id="select-option3"
          name="options"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleChange}
        >
          Option 3
        </Select>
      </div>
    </main>
  );
}

export default App;
