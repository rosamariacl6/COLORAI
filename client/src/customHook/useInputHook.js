import React, { useEffect, useState } from "react";

export const useInputHook = (element) => {
  //   const [input, setInput] = useState();
  const [dataElement, setDataElement] = useState(second);

  useEffect(() => {
    setDataElement(element);
  }, []);

  return { dataElement, setDataElement };
};
