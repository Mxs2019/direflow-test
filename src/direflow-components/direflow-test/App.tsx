import { EventContext } from "direflow-component";
import React, { FC, useContext } from "react";

interface IProps {
  title: string;
}

const App: FC<IProps> = ({ title }) => {
  const dispatch = useContext(EventContext);

  console.log(title);
  return (
    <div>
      <div>Hello World</div>
      <div>{title}</div>
    </div>
  );
};

App.defaultProps = {
  title: "Direflow Test",
};

export default App;
