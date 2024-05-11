import "./whatIDo.css";
import WhatIDoCards from "./WhatIDoCards";

const WhatIDo = (props) => {
  const { darkMode } = props;
  return (
    <div className="what-do">
      <WhatIDoCards darkMode={darkMode} />
    </div>
  );
};

export default WhatIDo;
