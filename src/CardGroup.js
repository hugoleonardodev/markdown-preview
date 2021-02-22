import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
import TextInput from "./TextInput";
const Example = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardBody>
          <Form>
            <FormGroup className="position-relative">
              <Label for="exampleEmail">Valid input</Label>
              <FormFeedback valid tooltip>
                Sweet! that name is available
              </FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Example;
