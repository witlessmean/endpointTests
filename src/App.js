import axios from "axios";
import { useState } from "react";

function App() {
  const [whatWeGet, setWhatWeGet] = useState("random");

  axios.get("http://localhost:8080/").then((stuff) => {
    console.log(stuff);
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
      [e.target.name]: e.target.value,
    };
    setFormState(obj);
  };


  const postSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/add-post", {
        title: formState.title,
        description: formState.description,
        link: formState.link
      })
      .then((stuff) => {
       // console.log(stuff);
      })
      .catch((err) => {
       // console.log(err);
      });
  };

  //////////////////delete last
  
  const deleteLastPost = (e) => {
    axios.delete("http://localhost:8080/delete-last-post").then((stuff) => {
      //console.log(stuff)
    }).catch((err) => {
     // console.log(err)
    })
  }

//////////////////dynamic delete

const [dynamicDeleteState, setDynamicDeleteState] = useState("");

const onDynamicDeleteChange = (e) => {
    e.persist();
    setDynamicDeleteState(e.target.value);
    //console.log(e.target.value)
};

const dynamicDeleteSubmit = (e) => {
  e.preventDefault();
  axios
    .delete(`http://localhost:8080/deleteDynamicPost/${dynamicDeleteState}`)
    .then((stuff) => {
     // console.log(stuff);
    })
    .catch((err) => {
     // console.log(err);
    });
};

//////////////////patch

const [postTitleToUpdateState, setPostTitleToUpdateState] = useState("");

const onPostTitleToUpdateChange = (e) => {
  e.persist();
  setPostTitleToUpdateState(e.target.value);
  console.log(e.target.value);
};

const [updateFormState, setUpdateFormState] = useState({
  title: "",
  description: "",
  link: "",
});

const onUpdateInputChange = (e) => {
  e.persist();
  const obj = {
    ...formState,
    [e.target.name]: e.target.value,
  };
  setUpdateFormState(obj);
};

const onUpdateTitlePostSubmit = (e) => {
  e.preventDefault();
  console.log(updateFormState)
  axios
    .patch("http://localhost:8080/updatePostTitle/", {
      titleToBeUpdated: postTitleToUpdateState,
      title: updateFormState.title,
    })
    .then((stuff) => {
     // console.log(stuff);
    })
    .catch((err) => {
     // console.log(err);
    });
};
const onUpdatePostDescSubmit = (e) => {
  e.preventDefault();
  console.log(updateFormState)
  axios
    .patch("http://localhost:8080/updatePostDesc/", {
      titleToBeUpdated: postTitleToUpdateState,
      description: updateFormState.description,
    })
    .then((stuff) => {
     // console.log(stuff);
    })
    .catch((err) => {
     // console.log(err);
    });
};
const onUpdatePostLinkSubmit = (e) => {
  e.preventDefault();
  console.log(updateFormState)
  axios
    .patch("http://localhost:8080/updatePostLink/", {
      titleToBeUpdated: postTitleToUpdateState,
      link: updateFormState.link,
    })
    .then((stuff) => {
     // console.log(stuff);
    })
    .catch((err) => {
     // console.log(err);
    });
};

  return (
    <>
      <form onSubmit={postSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={onInputChange}
          value={formState.title}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={onInputChange}
          value={formState.description}
        />
        <input
          type="text"
          name="link"
          placeholder="link"
          onChange={onInputChange}
          value={formState.link}
        />
        <button type="submit">submit</button>
      </form>
      <h1>{whatWeGet}</h1>
      <button onClick={deleteLastPost} >delete last</button>
      

    <form onSubmit={dynamicDeleteSubmit}>
    <input
          type="text"
          name="dynamicDelete"
          placeholder="dynamicDelete"
          onChange={onDynamicDeleteChange}
          value={dynamicDeleteState}
        />
      <button type="submit">dynamic delete</button>
    </form>
 
    <form onSubmit={onUpdateTitlePostSubmit}>
      <input type="text" name="titleOfPostToUpdate" placeholder="titleOfPostToUpdate"
      onChange={onPostTitleToUpdateChange}
      value={postTitleToUpdateState} />

<input
          type="text"
          name="title"
          placeholder="title"
          onChange={onUpdateInputChange}
          value={updateFormState.title}
        />
  <button type="submit">submit title</button>
    </form>
    
    <form onSubmit={onUpdatePostDescSubmit}>
      <input type="text" name="titleOfPostToUpdate" placeholder="titleOfPostToUpdate"
      onChange={onPostTitleToUpdateChange}
      value={postTitleToUpdateState} />

<input
type="text"
name="description"
placeholder="description"
onChange={onUpdateInputChange}
value={updateFormState.description}
/>
<button type="submit">submit desc</button>
    </form>
    <form onSubmit={onUpdatePostLinkSubmit}>
      <input type="text" name="titleOfPostToUpdate" placeholder="titleOfPostToUpdate"
      onChange={onPostTitleToUpdateChange}
      value={postTitleToUpdateState} />

<input
type="text"
name="link"
placeholder="link"
onChange={onUpdateInputChange}
value={updateFormState.link}
/>
<button type="submit">submit link</button>
    </form>
    
    </>
  );
}

export default App;

