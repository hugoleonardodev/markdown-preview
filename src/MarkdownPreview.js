import React from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardGroup,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";

import { defaultText } from "./defaultText";

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText,
      output: defaultText,
      isValid: true
    };
  }

  getMarkdownText() {
    const output = this.state.output;
    let rawMarkup = marked(output, { sanitize: false, breaks: true });
    const sanitized = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitized };
  }

  handleChange(e) {
    this.setState({ output: e.target.value, isValid: false });
    setTimeout(() => {
      this.setState({ isValid: true });
    }, 1000);
  }

  clearAll() {
    this.setState({
      input: "",
      output: "",
      isValid: false
    });
  }

  defaultState() {
    this.setState({
      input: defaultText,
      output: defaultText,
      isValid: true
    });
  }

  render() {
    const { isValid, output } = this.state;
    return (
      <div className="App">
        <CardGroup>
          <Card
            style={{
              boxShadow: "5px 5px 5px grey",
              marginLeft: "2vw",
              paddingBottom: "40px"
            }}
            color="light"
          >
            <CardHeader>Markdown Preview</CardHeader>
            <CardBody>
              <Form>
                <FormGroup className="position-relative">
                  <Label for="exampleEmail">Type a markedown text here:</Label>
                  <Input
                    valid={isValid}
                    onChange={(e) => this.handleChange(e)}
                    type="textarea"
                    value={output}
                  />
                  <FormFeedback
                    style={{ boxShadow: "2px 2px 2px grey" }}
                    valid
                    tooltip
                  >
                    Sweet! Now check the other card to see the preview.
                  </FormFeedback>
                  <FormText>
                    You may expand this input area by clicking and pushing the
                    bottom right corner of the box.
                  </FormText>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card
            style={{ boxShadow: "5px 5px 5px grey", marginLeft: "2vw" }}
            color="light"
          >
            <CardHeader>Here is your preview:</CardHeader>
            <CardBody>
              <div
                id="preview"
                dangerouslySetInnerHTML={this.getMarkdownText()}
              />
              <Button
                style={{ boxShadow: "2px 2px 2px grey" }}
                color="danger"
                onClick={() => this.clearAll()}
              >
                Clear All
              </Button>
              <Button
                style={{
                  marginLeft: "10vw",
                  boxShadow: "2px 2px 2px black"
                }}
                onClick={() => this.defaultState()}
              >
                To Default Values
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default MarkdownPreview;
