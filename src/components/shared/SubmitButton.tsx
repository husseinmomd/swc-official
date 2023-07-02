export const SubmitButton = () => {
  return (
    <div>
      <div className="button">
        <div className="text">Submit</div>
      </div>
      <div className="progress-bar" />
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 25 30"
        // style={{ enableBackground: "new 0 0 25 30" }}
      >
        <path className="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
      </svg>
    </div>
  );
};
