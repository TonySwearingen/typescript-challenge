import * as React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";
import Todo from "./TodoJS";


export default () => {
  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <h1 className="text-center">ToDo List</h1>
              <Todo/>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
