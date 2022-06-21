import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../src/App.css";

export default function BlogModal(props) {
  return (
    <div show={props.show} onHide={props.handleClose}>
      <div className="modal2">
        <div>
          <div closeButton>
            <h1>Modal heading</h1>
          </div>
          <div>Woohoo, you're reading this text in a modal!</div>
          <div>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
