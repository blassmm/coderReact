import { useState } from "react";
import ContadorView from "./ContadorView";
import Toggle from "./Toggle";

const ContadorContainer = () => {
  const [contador, setContador] = useState(0);
  const [toggle, setToggle] = useState(true);

  const aumentar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const alternarToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <ContadorView contador={contador} aumentar={aumentar} />
      <div>
        <p>Valor toggle: { toggle.toString() } </p>
        <button onClick={alternarToggle}> Alternar valor del toggle</button>
        {toggle === true && <Toggle />}
      </div>
    </>
  );
};

export default ContadorContainer;
