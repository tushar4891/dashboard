import React, { useRef, useState } from "react";
import "./About.css";
import { MdUpload } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi2";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import dataArray from "../TableData";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";

// Style for active button
const activeButtonStyle = {
  backgroundColor: "blue",
  color: "white",
};

// Default button style
const defaultButtonStyle = {
  backgroundColor: "transparent",
  color: "black",
};

function About() {
  // State to track the selected button
  const [selected, setSelected] = useState("TEXT");
  const fileInputRef = useRef(null);

  const [expandedRows, setExpandedRows] = useState({});
  const [message, setMessage] = useState("");

  const toggleRow = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Function to trigger the file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle the file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // You can also implement additional logic like uploading the file
    }
  };

  // Function to handle button clicks
  const handleButtonClick = (button) => {
    setSelected(button);
  };

  const QuantitySelect = () => {
    const options = Array.from({ length: 10 }).map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));

    // Add additional options for 20 and 50
    options.push(
      <option key={20} value={20}>
        20
      </option>,
      <option key={50} value={50}>
        50
      </option>
    );
    return options;
  };

  // --------------- Pagination functions --------------------

  const itemsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataArray.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  // Handler for page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <container className="main-area">
      <div className="d-flex gap-3 justify-content-center align-item-center">
        <div>
          <button
            className="add-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <HiOutlinePlus className="me-2" /> ADD DATA
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content animation ">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    ADD DATA
                  </h5>
                  <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <div className="d-flex gap-3">
                    {["TEXT", "PDF", "EPUB", "LINK", "CSV"].map((type) => (
                      <button
                        key={type}
                        className="modal-btn"
                        style={
                          selected === type
                            ? activeButtonStyle
                            : defaultButtonStyle
                        }
                        onClick={() => handleButtonClick(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    {selected === "TEXT" && (
                      <div>
                        <form className="">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Title"
                              id="titleInput"
                              style={{ height: "50px" }}
                            />
                          </div>
                          <div
                            className="form-group mt-3"
                            style={{ position: "relative" }}
                          >
                            <textarea
                              type="text"
                              className="form-control"
                              placeholder="Description"
                              rows={4}
                            />
                            <span
                              className="secondary-description"
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                                fontSize: "12px",
                                color: "#aaa",
                              }}
                            >
                              0 / 2000
                            </span>
                          </div>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Read More / Source Link"
                              style={{ height: "50px" }}
                            />
                          </div>
                          <p
                            className=" fw-lighter mt-2 ms-3"
                            style={{ fontSize: "12px" }}
                          >
                            The Source or Read More link user gets at the end of
                            the message
                          </p>
                        </form>
                      </div>
                    )}
                    {selected === "PDF" && (
                      <div>
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            className=" upload-btn mt-2"
                            onClick={handleUploadClick}
                          >
                            UPLOAD PDF
                            <MdUpload
                              className="ms-3 "
                              style={{
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </button>
                          {/* Hidden file input element */}
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                        </div>
                        <form>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Read More / Source Link"
                              style={{ height: "50px" }}
                            />
                          </div>
                          <p
                            className=" fw-lighter mt-2 ms-3"
                            style={{ fontSize: "12px" }}
                          >
                            The Source or Read More link user gets at the end of
                            the message
                          </p>
                        </form>
                      </div>
                    )}
                    {selected === "EPUB" && (
                      <div>
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            className=" upload-btn mt-2"
                            onClick={handleUploadClick}
                          >
                            UPLOAD EPUB
                            <MdUpload
                              className="ms-3 "
                              style={{
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </button>
                          {/* Hidden file input element */}
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                        </div>
                        <form>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Read More / Source Link"
                              style={{ height: "50px" }}
                            />
                          </div>
                          <p
                            className=" fw-lighter mt-2 ms-3"
                            style={{ fontSize: "12px" }}
                          >
                            The Source or Read More link user gets at the end of
                            the message
                          </p>
                        </form>
                      </div>
                    )}
                    {selected === "LINK" && (
                      <form className="">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Link URL"
                            id="titleInput"
                            style={{ height: "50px" }}
                          />
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Read More / Source Link"
                            style={{ height: "50px" }}
                          />
                        </div>
                        <p
                          className=" fw-lighter mt-2 ms-3"
                          style={{ fontSize: "12px" }}
                        >
                          The Source or Read More link user gets at the end of
                          the message
                        </p>
                      </form>
                    )}
                    {selected === "CSV" && (
                      <div>
                        {/* <div className="d-flex "> */}
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <button
                            className=" upload-btn mt-2"
                            onClick={handleUploadClick}
                          >
                            UPLOAD CSV
                            <MdUpload
                              className="ms-3 "
                              style={{
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </button>
                          <p
                            className=" fw-lighter mt-3 ms-3"
                            style={{ fontSize: "10px" }}
                          >
                            Please upload your CSV file in the following format:
                            <a
                              href="/path-to-your-csv-file.csv"
                              download="your-csv-file.csv"
                              style={{
                                textDecoration: "underline",
                                color: "#347afa",
                                cursor: "pointer",
                              }}
                            >
                              Download CSV
                            </a>
                          </p>
                          <p
                            className=" fw-lighter mt-n2 ms-3"
                            style={{ fontSize: "10px" }}
                          >
                            Make sure the header is present
                          </p>
                          {/* </div> */}
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                        </div>
                        <form>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Read More / Source Link"
                              style={{ height: "50px" }}
                            />
                          </div>
                          <p
                            className=" fw-lighter mt-2 ms-3"
                            style={{ fontSize: "12px" }}
                          >
                            The Source or Read More link user gets at the end of
                            the message
                          </p>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="cancel-btn"
                    data-bs-dismiss="modal"
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    class="save-btn"
                    style={{
                      backgroundColor:
                        selected === "PDF" ||
                        selected === "EPUB" ||
                        selected === "CSV"
                          ? "#e0e0e0"
                          : "#347afa",
                    }}
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            className=" data-status-btn "
            data-bs-toggle="modal"
            data-bs-target="#newexampleModal"
          >
            <PiClockCounterClockwiseFill className="me-2" />
            DATA TRAINING STATUS
          </button>

          <div
            class="modal fade"
            id="newexampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Data Training Status
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="container">
                    <div class="header">
                      <div className="d-flex">
                        <div className="col-md-12">
                          <div class="title">Title</div>
                        </div>
                        <div className="col-md-12">
                          <div class="title">Type</div>
                        </div>
                        <div className="col-md-12">
                          <div class="title">Status</div>
                        </div>
                        <div className="col-md-12">
                          <div class="title">Added On</div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="content">No data added for training</div> */}
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className=" ground-btn ">
            <TiMessages className="me-2" />
            GROUND TRUTHS
          </button>
        </div>
      </div>
      <div>
        <hr class="custom-hr" />
      </div>

      <div className="d-flex justify-content-center align-items-center mt-n4">
        <div className="col-md-2 mt-5 ms-5 mx-3 search-container">
          <input
            className="form-control rounded-1 search-input"
            type="search"
            placeholder=" "
          />
          <label className="search-label">Search</label>
        </div>
        <div>
          <div className="col-md-4 mt-5 ms-3 mx-3 position-relative">
            <select
              className="form-select rounded-1 search-select"
              style={{ height: "40px", width: "140px" }}
              defaultValue={3} // Set default value to 3
            >
              <QuantitySelect />
            </select>
            <label className="result-label">Result</label>
          </div>
        </div>
        <div className="col-md-2 mt-5 ms-3 mx-3">
          <button className="search-btn">SEARCH</button>
        </div>
      </div>

      <div>
        <div className="col-md-10 ms-5">
          <table className="table text-center table-borderless table-striped table-hover shadow-sm">
            <thead>
              <tr>
                <th>Data </th>
                <th>Source</th>
                <th>Type</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data, index) => (
                <tr key={index}>
                  <td style={{ width: "700px" }}>
                    {expandedRows[index] ? (
                      <>
                        <div>{data.message}</div>
                        <button
                          className="btn btn-link"
                          onClick={() => toggleRow(index)}
                        >
                          Show Less <IoIosArrowUp />
                        </button>
                      </>
                    ) : (
                      <>
                        <div>{data.message.slice(0, 100)}...</div>
                        {/* Truncate message */}
                        <button
                          className="btn btn-link"
                          onClick={() => toggleRow(index)}
                        >
                          Show More <IoIosArrowDown />
                        </button>
                      </>
                    )}
                  </td>
                  <td>{"--"}</td>
                  <td>
                    {
                      <button className="badge rounded-pill card-btn">
                        TEXT
                      </button>
                    }
                  </td>
                  <td style={{ width: "150px" }}>{data.date}</td>
                  <td>
                    {
                      <div className="d-flex gap-3">
                        <FaPen
                          style={{
                            color: "#007bff",
                            height: "20px",
                            width: "20px",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#penModal"
                          onClick={() => {
                            setMessage(data.message);
                          }}
                        />
                        <FaTrash
                          style={{
                            color: "#fa2871",
                            height: "20px",
                            width: "20px",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#confirmDeleteModal"
                        />
                      </div>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <h2> Confirmation </h2>
              <h5 className="mt-4">
                Are you sure you want to delete this data?
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

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="penModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Data
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <form className="">
                  <div
                    className="form-group mt-3"
                    style={{ position: "relative" }}
                  >
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder={message}
                      rows={4}
                    />
                    <span
                      className="secondary-description"
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        fontSize: "12px",
                        color: "#aaa",
                      }}
                    >
                      {message.length} / 2000
                    </span>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Read More / Source Link"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <p
                    className=" fw-lighter mt-2 ms-3"
                    style={{ fontSize: "12px" }}
                  >
                    The Source or Read More link user gets at the end of the
                    message
                  </p>

                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Read More Label"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <p
                    className=" fw-lighter mt-2 ms-3"
                    style={{ fontSize: "12px" }}
                  >
                    The label for Read More link user gets at the end of the
                    message
                  </p>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      {/* Empty div for space */}
      <div style={{ height: "50px" }}></div>
    </container>
  );
}

export default About;
