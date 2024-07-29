import { useState } from "react";
import ApiCalling from "./ApiCalling";

type DisplayNameProps = {
  displayName: string[];
};

const DisplayName = ({ displayName }: DisplayNameProps) => {
    const [isDisplay, setIsDisplay]=useState<boolean>(true)


    const handleChange = () =>{
        setIsDisplay(!isDisplay)
    }
  return (
    <>
      Display Name Component
      <ul>
        {displayName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {
        isDisplay?"I am true, show you the name":"I am false, hide the name"
      }

      <button onClick={handleChange}>Toggle</button>

      
    </>
  );
};

export default DisplayName;
