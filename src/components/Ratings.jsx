import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import "./Style.css"

export const Ratings = ({ question }) => {
  const colors = {
    orange: "#FFBA5A",
    grey: "A9A9A9",
  };

  const stars = Array(5).fill(0);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [data, setData] = useState({});
  const [final, setFinal] = useState([])

  useEffect(() => {
    setCurrentValue(0);
    setFinal([...final, data])
  }, [question]);


const handleStorage = () => {
    localStorage.setItem("data", JSON.stringify(final))
  }

  const handleClick = (value) => {
    setCurrentValue(value);
    setData({ ...data, question, Ratings: value });
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <>
      <div>
        <div className="stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(index + 1)}
                // onClick={() => setData({...data, question, Ratings: index+1})}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            );
          })}
        </div>
      </div>
      <br />
      <button className="submitBtn" onClick={handleStorage}>Submit</button>
    </>
  );
};
