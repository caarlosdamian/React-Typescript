import React, { useState } from "react";
import { Istate as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}
const AddToList: React.FC<IProps> = ({setPeople,people}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        value={input.name}
        onChange={handleChange}
        placeholder="Name"
        name="name"
        className="AddToList-input"
      />
      <input
        type="number"
        value={input.age}
        placeholder="Age"
        name="age"
        onChange={handleChange}
        className="AddToList-input"
      />
      <input
        type="text"
        value={input.img}
        placeholder="Image Url"
        name="img"
        onChange={handleChange}
        className="AddToList-input"
      />
      <textarea
        value={input.note}
        placeholder="Note"
        name="note"
        onChange={handleChange}
        className="AddToList-input"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
