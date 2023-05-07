import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, updateExpiredDate } from "../store/todoListSlice";
import { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList.list);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);

  const [amountOfDate, setAmountOfDate] = useState(0);

  const handleStatus = (id) => {
    dispatch(changeStatus(id));
  };

  const handleCheck = () => {
    setFilter(!filter);
  };
  const Icon = ({ status, className, color, onClick }) => {
    if (status === "done") {
      return (
        <FaRegCheckCircle
          className={className}
          color={color}
          onClick={onClick}
        />
      );
    } else {
      return (
        <FaRegCircle className={className} color={color} onClick={onClick} />
      );
    }
  };
  //Date Picker
  const onChange = (date, dateString, id) => {
    console.log(date);
    dispatch(updateExpiredDate({ id, expiredDate: dateString }));
    setAmountOfDate();
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
  return (
    <div className="todo-list-container">
      <div className="btn-filter header">
        <input type="checkbox" checked={filter} onChange={handleCheck} />
        <span>Not finished only</span>
      </div>
      {filter
        ? todoList
            .filter((item) => item.status === "not finished")
            .map((item, index) => {
              return (
                <div className="todo-item-container" key={index}>
                  <Icon
                    className="item-done-button"
                    color="#9a9a9a"
                    onClick={() => handleStatus(item.id)}
                    status={item.status}
                  />
                  <div className="item-title">{item.todo}</div>
                </div>
              );
            })
        : todoList.map((item, index) => {
            return (
              <div className="todo-item-container" key={index}>
                <Icon
                  className="item-done-button"
                  color="#9a9a9a"
                  onClick={() => handleStatus(item.id)}
                  status={item.status}
                />
                <div
                  className="item-title"
                  style={
                    item.status === "done"
                      ? { textDecoration: "line-through" }
                      : null
                  }
                >
                  {item.todo}
                </div>
                <span
                  className="expired"
                  style={{ fontSize: "15px", margin: "0 8px 0 24px" }}
                >
                  Expired after {amountOfDate} day
                </span>
                <div>
                  <Space direction="vertical">
                    <DatePicker
                      format="YYYY-MM-DD"
                      disabledDate={disabledDate}
                      onChange={(date, dateString) =>
                        onChange(date, dateString, item.id)
                      }
                    />
                  </Space>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default TodoList;
