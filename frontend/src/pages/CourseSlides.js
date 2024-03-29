import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import PopUp from "../components/PopUp";
import { useSelector, useDispatch } from "react-redux";

const CourseSlides = () => {
  const files = useSelector((state) => state.options.files);
  const loading = useSelector((state) => state.options.loading);
  const popupState = useSelector((state) => state.options.popup_state);
  const handleLoadingChange = (value) => {
    dispatch({
      type: "CHANGE_LOADING",
      loading: value,
    });
  };

  const handleSetFile = (value) => {
    dispatch({
      type: "SET_FILE",
      files: value,
    });
  };
  const maxLength = 27;
  const dispatch = useDispatch();
  const getFiles = async () => {
    handleLoadingChange(true);
    try {
      const res = await fetch("http://localhost:4000/api/file");
      const data = await res.json();

      console.log(data.files);
      handleSetFile(data.files);
      handleLoadingChange(false);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (id, fileName) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/file/download/${id}`,
        { responseType: "blob" }
      );

      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(files)

  useEffect(() => {
    console.log(files);
    getFiles();
  }, []);

  const handlePopupState = (value) => {
    dispatch({
      type: "SET_POPUP",
      popup_state: value,
    });
  };
  const openPopup = () => {
    handlePopupState(true);
  };

  return (
    <div className="container">
      <button className="add-new" onClick={openPopup}>
        Add New File
      </button>

      <div className="chemistry-sect">
        <div className="file-header">Chemistry</div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {files &&
              files.map((file) => {
                if (file.category === "Chemistry") {
                  return (
                    <div className="file" key={file._id}>
                      <div className="file-sub-cont">
                        <h3>
                          {file.filename.length > maxLength
                            ? file.filename.slice(0, maxLength - 3) + "..."
                            : file.filename}
                        </h3>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(file._id, file.filename)}
                        >
                          <span class="material-symbols-outlined">
                            download
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>
      <div className="physics-sect">
        <div className="file-header">Physics</div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {files &&
              files.map((file) => {
                if (file.category === "Physics") {
                  return (
                    <div className="file" key={file._id}>
                      <div className="file-sub-cont">
                        <h3>
                          {file.filename.length > maxLength
                            ? file.filename.slice(0, maxLength - 3) + "..."
                            : file.filename}
                        </h3>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(file._id, file.filename)}
                        >
                          <span class="material-symbols-outlined">
                            download
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>

      <div className="maths-sect">
        <div className="file-header">Mathematics</div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {files &&
              files.map((file) => {
                if (file.category === "Mathematics") {
                  return (
                    <div className="file" key={file._id}>
                      <div className="file-sub-cont">
                        <h3>
                          {file.filename.length > maxLength
                            ? file.filename.slice(0, maxLength - 3) + "..."
                            : file.filename}
                        </h3>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(file._id, file.filename)}
                        >
                          <span class="material-symbols-outlined">
                            download
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>

      <div className="biology-sect">
        <div className="file-header">Biology</div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {files &&
              files.map((file) => {
                if (file.category === "Biology") {
                  return (
                    <div className="file" key={file._id}>
                      <div className="file-sub-cont">
                        <h3>
                          {file.filename.length > maxLength
                            ? file.filename.slice(0, maxLength - 3) + "..."
                            : file.filename}
                        </h3>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(file._id, file.filename)}
                        >
                          <span class="material-symbols-outlined">
                            download
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>

      <div className="english-sect">
        <div className="file-header">English</div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {files &&
              files.map((file) => {
                if (file.category === "English") {
                  return (
                    <div className="file" key={file._id}>
                      <div className="file-sub-cont">
                        <h3>
                          {file.filename.length > maxLength
                            ? file.filename.slice(0, maxLength - 3) + "..."
                            : file.filename}
                        </h3>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(file._id, file.filename)}
                        >
                          <span class="material-symbols-outlined">
                            download
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>
      <PopUp open={popupState} />
    </div>
  );
};

export default CourseSlides;
