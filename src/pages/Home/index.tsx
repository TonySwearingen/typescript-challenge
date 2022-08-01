import * as React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";
import Todo from "./Todo";
import Provider from "./Provider";

export default () => {
  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <h1 className="text-center">To Do List</h1>
            <Provider>
              <Todo/>
            </Provider>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
