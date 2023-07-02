interface Props {
  selectedSkills: string[];
  isEmpty: boolean;
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
}
export const SelectedSkills: React.FC<Props> = ({
  selectedSkills,
  setSelectedSkills,
  isEmpty,
}) => {
  return (
    <div className="mt-3 d-flex flex-wrap" style={{ gap: "10px" }}>
      <span style={{ color: "red" }}>
        {isEmpty && "You must include at least one skill"}
      </span>
      {selectedSkills &&
        selectedSkills.map((s, idx) => (
          <span
            style={{
              border: "1px solid white",
              padding: ".4rem .6rem",
              color: "white",
              borderRadius: "50px",
              fontSize: ".8rem",
            }}
            key={idx}
          >
            {s}
            <span
              style={{ cursor: "pointer", padding: ".2rem" }}
              onClick={() => {
                setSelectedSkills(selectedSkills.filter((sk) => sk !== s));
              }}
            >
              x
            </span>
          </span>
        ))}
    </div>
  );
};
