import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoListSlice";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        todo: inputValue,
        status: "not finished",
        expiredDate: null,
      })
    );
  };
  return (
    <form className="form">
      <input
        placeholder="Enter task ..."
        onChange={handleInputValue}
        value={inputValue}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
