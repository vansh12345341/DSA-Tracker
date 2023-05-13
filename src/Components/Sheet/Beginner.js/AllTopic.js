import React , { useState , useEffect} from "react";
import { Button, Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AllTopic = ({ data }) => {
  const [checkboxState, setCheckboxState] = useState({});

  useEffect(() => {
    const storedCheckboxStates = {};
    data.questions.forEach((_, idx) => {
      const storedState = localStorage.getItem(`checkboxState-${idx}`);
      if (storedState !== null) {
        storedCheckboxStates[idx] = storedState === 'true';
      }
    });
    setCheckboxState(storedCheckboxStates);
  }, [data]);
  

  const handleCheckboxChange = (event, idx) => {
    const isChecked = event.target.checked;
    setCheckboxState({ ...checkboxState, [idx]: isChecked });
    localStorage.setItem(`checkboxState-${idx}`, isChecked);
  };

  return (
    <Container className="mt-5">
      <Form className="d-flex">
        <Button variant="success mt-5 mb-5 me-2" size="sm">
          Random
        </Button>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 mb-5 mt-5"
          aria-label="Search"
        />
        <DropdownButton
          variant="outlined-secondary"
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
      <Table striped bordered hover variant="dark mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th colSpan={2}>Questions</th>
            <th></th>
          </tr>
        </thead>

        {data.questions.map((res, idx) => {
          return (
            <tbody key={idx}>
              <tr>
                <td>{idx}</td>
                <td colSpan={2}>
                  {" "}
                  <input type="checkbox"    checked={checkboxState[idx] || false}
                    onChange={(event) => handleCheckboxChange(event, idx)}></input>
                </td>
                <th>
                  <a target="_blank" href={res.Url} rel="noreferrer">
                    {res.Problem}
                  </a>
                </th>
                <td>2</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default AllTopic;
