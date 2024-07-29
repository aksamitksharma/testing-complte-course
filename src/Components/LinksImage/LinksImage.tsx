import { useState, ChangeEvent } from "react";
import DisplayName from "./DisplayName";

const LinkImage = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string>("");
  const [allNames, setAllNames] = useState<string[]>([]);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    let updateNames = [name, ...allNames];

    setNames(name);
    setName("");
    setAllNames(updateNames);
  };

  // const handleShow = () => {
  //     console.log("asdsadsdaad")
  // }

  return (
    <>
      <h1>This is heading</h1>
      <h1>This is heading 2</h1>
      <h2>This is heading 3</h2>
      <div>
        <input
          type="text"
          name="uname"
          value={name}
          placeholder="Enter name"
          onChange={handleName}
        />
        <button onClick={handleSave}>Save</button>
                
        <input
          type="text"
          name="cname"
          value={names}
          placeholder="Copy name"
          onChange={handleName}
        />

        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile-pic"
        />

        <DisplayName displayName={allNames} />
      </div>
    </>
  );
};

export default LinkImage;
