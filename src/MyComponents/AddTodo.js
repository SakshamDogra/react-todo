import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("no, value should be entered");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label HTMLfor="title" className="form-label">
            Todo-Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div id="emailHelp" className="form-text">
          Enter the task you want to achieve.
        </div>
        <div className="mb-3">
          <label HTMLfor="exampleInputEmail1" className="form-label">
            To-Do Description
          </label>

          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-sn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
