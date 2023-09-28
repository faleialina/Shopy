import { useState } from "react";

function Basket({ doAdd }) {

  const [number, setNumber] = useState(1);
  function doAdd() {
    setNumber(number + 1);
  }
  
  return (
    <div>
      <p>{number}</p>
    </div>
  )
}

export default Basket;