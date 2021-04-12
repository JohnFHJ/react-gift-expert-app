import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handleAdd = () => {
  //   //   dos formas
  //   setCategories([...categories, "Naruto"]);
  //   // setCategories((cat) => [...cat, "Naruto"]);
  // };

  return (
    <div>
      <h2>GiftExpertApp</h2>
      {/* Se pueden enviar funciones por props para ser utilizada en otro componente */}
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          //Esto se usa para que no salga el error del key, comunmente se pone
          // el id del elemento que se este consultando
          return <GifGrid key={category} category={category}></GifGrid>;
        })}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
