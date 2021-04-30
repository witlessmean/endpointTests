import axios from 'axios';
import { useState } from 'react';

function App() {
  
  const [whatWeGet, setWhatWeGet] = useState('random');

  axios.get("http://localhost:8080/").then((stuff) => {
    console.log(stuff)
  });
  
const [formState, setFormState] = useState({
  title: "",
  description: "",
  link: "",
});

const onInputChange = (e) => {
  e.persist();
  const obj = {
    ...formState,
    [e.target.name]: e.target.value
  }
  setFormState(obj)
};

const postSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:8080/", {
    formState
  }).then((stuff) => {
    console.log(stuff)
  }).catch((err) => {
    console.log(err)
  })
};

  return (
    <>
<form onSubmit={postSubmit}>
  <input type='text' name="title" placeholder="title" onChange={onInputChange} value={formState.title} />
  <input type='text' name="description" placeholder="description" onChange={onInputChange} value={formState.description} />
  <input type='text' name="link" placeholder="link" onChange={onInputChange} value={formState.link} />
<button type="submit">submit</button>
</form>
    <h1>
       {whatWeGet}
    </h1>
  </>
  );
}

export default App;
