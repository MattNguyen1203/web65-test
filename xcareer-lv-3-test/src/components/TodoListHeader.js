import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoListHeader = () => {
  const todoList = useSelector((state) => state.todoList.list);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    const result = todoList.reduce((total, item) => {
      if (item.status === "not finished") {
        return (total += 1);
      } else return total;
    }, 0);
    setTotalItem(result);
  }, [todoList]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="header">You have {totalItem} tasks left!</div>
    </div>
  );
};

export default TodoListHeader;
