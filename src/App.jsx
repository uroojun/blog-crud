import { useRef, useState } from "react";
import "./App.css";
import blogData from "./data";

function App() {
  let BlogTitleRef = useRef("");
  let BlogAuthorRef = useRef("");
  let BlogDescriptionRef = useRef("");

  let [data, setData] = useState(blogData);
  let [toggle, setToggle] = useState(false);
  let [index, setIndex] = useState();

  const AddHandler = (event) => {
    event.preventDefault();

    let blogData = {
      title: BlogTitleRef.current.value,
      author: BlogAuthorRef.current.value,
      description: BlogDescriptionRef.current.value,
    };

    setData([blogData, ...data]);


    
    BlogTitleRef.current.value = "";
    BlogAuthorRef.current.value =  "";
    BlogDescriptionRef.current.value = "";
  };
  
  const DeleteHandler = () => {
    data.splice(index, 1);
    setData([...data]);
  };

  const EditHandler = (event) => {
    event.preventDefault();
    
    let blogData = {
      title: BlogTitleRef.current.value,
      author: BlogAuthorRef.current.value,
      description: BlogDescriptionRef.current.value,
    };

    data.splice(index, 1, blogData);
    setData([...data]);



    BlogTitleRef.current.value = "";
    BlogAuthorRef.current.value =  "";
    BlogDescriptionRef.current.value = "";

    setToggle(false)
  };

  const GetValues = (index) => {
    let copyData = data.slice(index, index + 1);
    BlogTitleRef.current.value = copyData[0].title;
    BlogAuthorRef.current.value = copyData[0].author;
    BlogDescriptionRef.current.value = copyData[0].description;

    setIndex(index);
    setToggle(true);
  };

  return (
    <div className="main">
      <h2>BLOGS</h2>
      <div className="form-div">
        <form>
          <input
            ref={BlogTitleRef}
            placeholder="Enter Title Name..."
            type="text"
          />
          <input
            ref={BlogAuthorRef}
            placeholder="Enter Author Name..."
            type="text"
          />
          <input
            ref={BlogDescriptionRef}
            placeholder="Some Description of the blog..."
            type="text"
          />
          {toggle ? (
            <button onClick={EditHandler} className="submit-btn" type="button">
              Edit Blog
            </button>
          ) : (
            <button onClick={AddHandler} className="submit-btn" type="button">
              Add Blog
            </button>
          )}
        </form>
      </div>
      <ul className="blog-list">
        {data.map((item, index) => (
          <div className="card">
            <div className="card-items">
              <div className="blog-title">
                <h1>{item.title}</h1>
              </div>
              <div className="blog-author">
                <h6>by {item.author}</h6>
              </div>
              <div className="blog-description">
                <h4>Description:{item.description}</h4>
              </div>
              <div className="btn-div">
                <button
                  onClick={() => {
                    DeleteHandler(index);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    GetValues(index);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
