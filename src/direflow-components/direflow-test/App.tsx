import { EventContext } from "direflow-component";
import React, { FC, useContext } from "react";

interface IProps {
  title: string;
}

const App: FC<IProps> = ({ title, ...otherProps }) => {
  const dispatch = useContext(EventContext);

  console.log(title);
  return (
    <div>
      <div>Hello World - Pass in a title prop and watch it change.</div>
      <div>{title}</div>
    </div>
  );
};

App.defaultProps = {
  title: "Sample Title",
};

export default App;
