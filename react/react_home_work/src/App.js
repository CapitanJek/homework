import React from 'react';
import Menu from "./home_work/Work_1/Menu";
import Props from "./home_work/Work_1/Props_Text";
const App = () => {
  return (
      <div>
          <Menu/>
          <Props color={'red'} size={80} background={'green'}/>

      </div>
  )
}
export default App;
