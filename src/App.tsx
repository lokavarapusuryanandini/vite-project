import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //list grp component
  // let items = ["New York", "Paris", "France", "India"];
  // const handleSelectItem =(item:string)=>{console.log(item);}
  // return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>

  //alert component
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible === true ? (
        <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>
      ) : null}
      <Button onClick={() => setAlertVisibility(true)}>button</Button>
    </div>
  );
}

export default App;
