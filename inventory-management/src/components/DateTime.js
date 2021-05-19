import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h1>{date.toLocaleDateString()}</h1>
    </div>
  );
};

export default DateTime;
