import React, { useEffect, useState } from "react";
import axios from "axios";
import Drawer from'./Drawer'
import {Container} from'@mui/material'
import SkeletonApp from './SkeletonApp'
const DB_LINK = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(DB_LINK)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
        { state.length!==0?<Drawer data={state}/>: <SkeletonApp/>}
    </Container>
  );
}

export default App;
