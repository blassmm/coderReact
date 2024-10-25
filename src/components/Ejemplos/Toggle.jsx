import { useEffect } from "react";

const Toggle = () => {
  useEffect(() => {
    console.log("componente de toggle");

    return () => {
      console.log("Desmontando componente");
    };
  }, []);

  return (
    <div>
      <p>Toggle</p>
      <p>Activated</p>
    </div>
  );
};

export default Toggle;
