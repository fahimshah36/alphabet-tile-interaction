import {useState} from "react";

const AlphabetGrid = () => {
  const [output, setOutput] = useState("");

  function transformString(str) {
    return str.replace(/(.)\1*/g, (match, char) => {
      if (match.length === 6) {
        return "__";
      } else if (match.length === 3) {
        return "_";
      } else {
        return match;
      }
    });
  }

  const handleTileClick = (letter) => {
    let newOutput = output + letter;
    setOutput(newOutput);
  };

  const alphabet = Array.from({length: 26}, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const transformedOutput = transformString(output);

  return (
    <div className="container">
      <h1 style={{textAlign: "center", marginBottom: "30px"}}>
        Alphabet Tile Interaction
      </h1>
      <div className="grid">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="output" style={{color: "green"}}>
        Output: <span style={{color: "black"}}>{transformedOutput}</span>
      </div>
    </div>
  );
};

export default AlphabetGrid;
