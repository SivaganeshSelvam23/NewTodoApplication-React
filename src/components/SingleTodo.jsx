import React, { useState } from "react";
import {
  MdEdit,
  MdDelete,
  MdDone,
  MdSettingsBackupRestore,
  MdSave,
} from "react-icons/md";
const SingleTodo = ({
  items,
  index,
  todoCompleteHandler,
  todoDeleteHandler,
  todoEditHandler,
}) => {
  const [editText, setEditText] = useState(items.title);
  return (
    <div>
      <div className="listitems" key={index}>
        {!items.edit ? (
          <span
            style={{
              width: "300px",
              textDecoration: items.completed ? "line-through" : "none",
              color: items.completed ? "grey" : "white",
            }}
          >
            {items.title}
          </span>
        ) : (
          <input
            className="inputTwo"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        )}

        <div style={{ display: "flex", gap: 20 }}>
          {!items.edit ? (
            <MdEdit
              size={20}
              style={{ cursor: "pointer" }}
              title="Edit"
              onClick={() => todoEditHandler(index, editText)}
            />
          ) : (
            <MdSave
              size={20}
              style={{ cursor: "pointer" }}
              title="Save"
              onClick={() => todoEditHandler(index, editText)}
            />
          )}

          {items.completed ? (
            <MdSettingsBackupRestore
              size={20}
              style={{ cursor: "pointer" }}
              title="Restore"
              onClick={() => todoCompleteHandler(index)}
            />
          ) : (
            <MdDone
              size={20}
              style={{ cursor: "pointer" }}
              title="Complete"
              onClick={() => todoCompleteHandler(index)}
            />
          )}

          <MdDelete
            size={20}
            style={{ cursor: "pointer" }}
            title="Delete"
            onClick={() => todoDeleteHandler(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
