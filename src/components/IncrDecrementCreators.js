import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCreator, incrementCreator } from "../store/countReducer";

const IncrDecrementCreators = () => {
  const count = useSelector((state) => state.count.count);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  console.log(count, users);

  return (
    <div className="IncrDecrementCreators">
      <div className="count">{count}</div>

      <div className="btns">
        <button className="btn" onClick={() => dispatch(incrementCreator())}>
          ИНКРЕМЕНТ++
        </button>

        <button className="btn" onClick={() => dispatch(decrementCreator())}>
          ДЕКРЕМЕНТ--
        </button>
      </div>

      <div className="users">
        {users.map((user) => (
          <div className="user"> {user.name} </div>
        ))}
      </div>
    </div>
  );
};

export default IncrDecrementCreators;
