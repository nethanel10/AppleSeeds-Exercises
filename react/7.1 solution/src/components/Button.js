const Button = ({ colorProp, setColor }) => {
    return (
      <button
        onClick={() => {
          setColor(colorProp);
        }}
      >
        {colorProp}
      </button>
    );
  };
export default Button;  