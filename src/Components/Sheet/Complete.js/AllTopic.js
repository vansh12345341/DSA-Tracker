import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AllTopic = ({ data, update }) => {

  function updateHandler(dataArray,index,pos,ques){
    // console.log(data.position,data.questions,data.questions.Done,index);
    update(dataArray,index,ques,pos);
  }

  let hi = [
    {
      Url: "https://leetcode.com/problems/two-sum/",
      Topic: "Array",
      Difficulty: "Easy",
      Problem: "Two Sum",
      Done: false,
      Bookmark: false,
      Notes: "",
      Solution: "",
    },
    {
      Url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      Topic: "Array",
      Difficulty: "Easy",
      Problem: "Best Time to Buy and Sell Stock",
      Done: false,
      Bookmark: false,
      Notes: "",
      Solution: "",
    },
  ];

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
                  <input
                  name="checkAddress"
                    type="checkbox"
                    onClick={() => updateHandler(data,idx,data.position,data.questions)}
                  ></input>
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
