const Active = () => {
  return (
    <div className="Active_Selector">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="9.5" stroke="#0066FF"></circle>
        <circle cx="10" cy="10" r="5" fill="#0066FF"></circle>
      </svg>

      <svg
        width="1"
        height="170"
        viewBox="0 0 1 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.25"
          y="0.25"
          width="0.5"
          height="169.5"
          stroke="#0066FF"
          stroke-width="0.5"
          stroke-dasharray="4 4"
        ></rect>
      </svg>
    </div>
  );
};

export default Active;
