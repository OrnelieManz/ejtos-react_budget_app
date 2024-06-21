/* The container must be positioned relative: */
.custom-select-wrapper {
    position: relative;
    font-family: Arial;
    font-size:20px
  }

  .custom-select-wrapper select {
    display: none; /*hide original SELECT element: */
  }

  .custom-select-wrapper select-selected {
    background-color:  rgb(27, 170, 110);
    color:#fff;
  }

  /* Style the arrow inside the select element: */
  .custom-select-wrapper select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  /* style the items (options), including the selected item: */

  .custom-select-wrapper select-items div {
    color: #0f0f0f;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  /* Style items (options): */
  .custom-select-wrapper select-items {
    position: absolute;
    background-color: rgb(27, 170, 110);
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }

  /* Hide the items when the select box is closed: */
  .custom-select-wrapper select-hide {
    display: none;
  }

  .select-items div:hover, .same-as-selected {
    background-color: rgb(239, 244, 245);
  }