import { useState, useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const fakeCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["holi", "adios", "good vibes"]);
      }, 1000);
    });
  };

  useEffect(() => {
    fakeCall().then((data) => setList(data));
  }, []);

  return (
    <>
      {list.map((item, i) => (
        <h2 key={i}>{item}</h2>
      ))}
    </>
  );
};

export { List };
