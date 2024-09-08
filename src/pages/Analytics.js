import React, { useState } from "react";
import "./Analytics.css";
import { FaTrash } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaExclamationCircle } from "react-icons/fa";

function Analytics() {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteClick = (userName) => {
    setSelectedUser(userName);
  };

  return (
    <container className="main-area">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <button
          className="add-new-member-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          ADD NEW MEMBER
        </button>
        <div>
          <h2> Members</h2>
        </div>
      </div>

      {/* MODAL  */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add New Member
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="d-flex gap-4 ms-5">
                <div className="form-group position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="titleInput"
                    style={{ height: "50px", width: "200px" }}
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}
                    defaultValue=""
                  />
                  {isNameFocused && (
                    <label className="result-label">Name</label>
                  )}
                </div>
                <div className="form-group position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    id="titleInput"
                    style={{ height: "50px", width: "200px" }}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    defaultValue=""
                  />
                  {isEmailFocused && (
                    <label className="result-label">Email</label>
                  )}
                </div>
                <div className="position-relative">
                  <select
                    className="form-select rounded-1 search-select"
                    style={{ height: "50px", width: "180px" }}
                    value="Editor"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    defaultValue=""
                  >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Sales">Sales</option>
                  </select>
                  {isFocused && <label className="result-label">Role</label>}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="cancel-btn" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="save-btn" data-bs-dismiss="modal">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          className="card shadow-2-strong"
          style={{ width: "450px", height: "80px" }}
        >
          <div class="card-body d-flex mt-n2">
            <div className="col-2">
              <img
                src="person4.jpg"
                alt=""
                className="img-fluid img-thumbnail card-img mt-n2"
              />
            </div>
            <div className="col-8 ms-3">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <h6> Shone Jogi</h6>
                  <button className="badge rounded-pill card-btn ms-3">
                    Admin
                  </button>
                </div>
                <div className="light-text">shonejogi2000@gmail.com</div>
              </div>
            </div>
            <div className="col-4 ms-4">
              <FaTrash
                style={{ color: "#fa2871", height: "20px", width: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                onClick={() => handleDeleteClick("Shone Jogi")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <div
        className="modal fade"
        id="confirmDeleteModal"
        tabindex="-1"
        aria-labelledby="confirmDeleteLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div className="display-1 text-danger">
                {/* <i className="bi bi-exclamation-circle"></i>{" "} */}
                <FaExclamationCircle className="mb-3 mt-3" />
                {/* Bootstrap Icon */}
              </div>
              <h2> Are you sure ? </h2>
              <h5 className="mt-4">
                {selectedUser} will no longer have access to this Org.
              </h5>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd card  */}
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div
          className="card shadow-2-strong"
          style={{ width: "450px", height: "80px" }}
        >
          <div class="card-body d-flex mt-n2">
            <div className="col-2">
              <img
                src="person3.jpg"
                alt=""
                className="img-fluid img-thumbnail card-img mt-n2"
              />
            </div>
            <div className="col-8 ms-3">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <h6> Sai</h6>
                  <button className="badge rounded-pill card-btn ms-3">
                    Admin
                  </button>
                </div>
                <div className="light-text">
                  saiprasadpujari.stud@vivacollege.org
                </div>
              </div>
            </div>
            <div className="col-4 ms-4">
              <FaTrash
                style={{ color: "#fa2871", height: "20px", width: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                onClick={() => handleDeleteClick("Sai")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd card */}

      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div
          className="card shadow-2-strong"
          style={{ width: "450px", height: "80px" }}
        >
          <div class="card-body d-flex mt-n2">
            <div className="col-2">
              <img
                src="person2.jpg"
                alt=""
                className="img-fluid img-thumbnail card-img mt-n2"
              />
            </div>
            <div className="col-8 ms-3">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <h6> Siddhant Jain</h6>
                  <button className="badge rounded-pill card-btn ms-3">
                    Admin
                  </button>
                </div>
                <div className="light-text">siddhantjain209@gmail.com</div>
              </div>
            </div>
            <div className="col-4 ms-4">
              <FaTrash
                style={{ color: "#fa2871", height: "20px", width: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                onClick={() => handleDeleteClick("Siddhant Jain")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4th card  */}
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div
          className="card shadow-2-strong"
          style={{ width: "450px", height: "80px" }}
        >
          <div class="card-body d-flex mt-n2">
            <div className="col-2">
              <img
                src="person1.jpg"
                alt=""
                className="img-fluid img-thumbnail card-img mt-n2"
              />
            </div>
            <div className="col-8 ms-3">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <h6> Kartiki Tewari</h6>
                  <button className="badge rounded-pill card-btn ms-3">
                    Admin
                  </button>
                </div>
                <div className="light-text">kartiki45tewari@gmail.com</div>
              </div>
            </div>
            <div className="col-4 ms-4">
              <FaTrash
                style={{ color: "#fa2871", height: "20px", width: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                onClick={() => handleDeleteClick("Kartiki Tewari")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5th card  */}

      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div
          className="card shadow-2-strong"
          style={{ width: "450px", height: "80px" }}
        >
          <div class="card-body d-flex mt-n2">
            <div className="col-2">
              <img
                src="person4.jpg"
                alt=""
                className="img-fluid img-thumbnail card-img mt-n2"
              />
            </div>
            <div className="col-8 ms-3">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <h6> Kaushal </h6>
                  <button className="badge rounded-pill card-btn ms-3">
                    Admin
                  </button>
                  <button className="badge rounded-pill card-btn ms-3">
                    Editor <IoCloseCircle />
                  </button>
                  <button className="badge rounded-pill card-btn ms-3">
                    Sales <IoCloseCircle />
                  </button>
                </div>
                <div className="light-text">kaushalnbt@gmail.com</div>
              </div>
            </div>
            <div className="col-4 ms-4">
              <FaTrash
                style={{ color: "#fa2871", height: "20px", width: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                onClick={() => handleDeleteClick(" Kaushal")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6th card  */}

      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div
          className="card shadow-2-strong"
          style={{ width: "450px", height: "80px" }}
        >
          <div class="card-body d-flex mt-n2">
            <div className="col-2">
              <img
                src="person3.jpg"
                alt=""
                className="img-fluid img-thumbnail card-img mt-n2"
              />
            </div>
            <div className="col-8 ms-3">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <h6>Adarsh Yadav</h6>
                  <button className="badge rounded-pill card-btn ms-3">
                    Admin
                  </button>
                </div>
                <div className="light-text">itsadarsh33@gmail.com</div>
              </div>
            </div>
            <div className="col-4 ms-4">
              <FaTrash
                style={{ color: "#fa2871", height: "20px", width: "20px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                onClick={() => handleDeleteClick("Adarsh Yadav")}
              />
            </div>
          </div>
        </div>
      </div>
    </container>
  );
}

export default Analytics;
