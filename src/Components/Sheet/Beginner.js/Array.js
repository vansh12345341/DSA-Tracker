import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import BootstrapTable from "../../table final/src/BootstrapTable";
const Array = () => {
  return (
    <Container className="mt-5">
      <Form className="d-flex">
        <Button variant="success mt-5 mb-5 me-2" size="sm">Random</Button>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 mb-5 mt-5"
          aria-label="Search"
        />
        <DropdownButton
          variant="outline-secondary"
          title="Category"
          id="input-group-dropdown-1"
          className="mb-5 mt-5 me-2"
        >
          <Dropdown.Item href="/">All</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/">Easy</Dropdown.Item>
          <Dropdown.Item href="/">Medium</Dropdown.Item>
          <Dropdown.Item href="/">Hard</Dropdown.Item>
        </DropdownButton>
        <Button variant="outline-success mt-5 mb-5">Search</Button>
      </Form>
    </Container>
  );
};

export default Array;
