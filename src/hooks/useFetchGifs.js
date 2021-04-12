import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // useEffect(() => {
  //   getGifs( category )
  //   .then((imgs) => setImages( imgs ));
  // }, [category]); //con el array vacio en el segundo parametro, significa que este codigo se ejecute solo cuando es la primera vez
  // //con algo en el array si por alguna razon la categoria cambia entonces solo es de poner el parametro en el array
  // // getGifs();

  //   los efectos nunca pueden ser async
  useEffect(() => {
    getGifs(category).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [category]);

  //   setTimeout(() => {
  //     setState({
  //       data: [1, 2, 3, 4, 5, 6, 7, 8],
  //       loading: false,
  //     });
  //   }, 3000);

  return state;
};
