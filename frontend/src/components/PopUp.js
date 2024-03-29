import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const PopUp = ({ open }) => {
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.options.popup_state);
  const fileCategory = useSelector(
    (state) => state.options.file_category
  )
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleCreateFile = (value) =>{
    dispatch({
      type: "CREATE_FILE",
      files:value
    })
  }
 
  const handlePopupState = (value) => {
    dispatch({
      type: "SET_POPUP",
      popup_state: value,
    });
  };
  const handleFileChange = (event) => {
    dispatch({
      type: "SET_FILE_CATEGORY",
      file_category: event.target.value,

    })
  }
  const addFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("category", fileCategory)
      const res = await axios.post("http://localhost:4000/api/file", formData);
      console.log('result',res.data.newFile);
      handleCreateFile(res.data.newFile)
      handlePopupState(false)
    } catch (error) {
      console.log(error);
    }
   
  };
  const closePopup = () => {
    handlePopupState(false);
  };
  console.log('file-category',fileCategory)
  return (
    <>
      {popupState && <div className="overlay" onClick={closePopup}></div>}
      <div className={`popup ${open ? "popopen" : "popclose"}`}>
        <h3>File Category:</h3>
      <select
        value={fileCategory}
        className="file-cat"
        onChange={handleFileChange}
        >
          <option>Chemistry</option>
          <option>Physics</option>
          <option>Mathematics</option>
          <option>English</option>
          <option>Biology</option>
        </select>
        <input className="file-input" type="file" ref={fileInputRef} />
        
        <button className="add-file" onClick={addFile}>
          Add
        </button>
      </div>
    </>
  );
};
export default PopUp;
