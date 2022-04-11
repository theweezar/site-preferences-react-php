import { useState } from "react";
import { Col, Form, Nav, Row, Button } from "react-bootstrap";

const AttributeDefinitions = () => {
  return (
    <div>
      <p>This page lists the attribute definitions of your object type. Use the search to find attribute definitions by ID and name.</p>
      <p>Click New to create new attribute definitions. Click Delete to delete existing attribute definitions.</p>
      <div>
        <table className="w-100">
          <tbody>
            <tr>
              <td className="py-2 fw-bold">Search Attribute Definitions</td>
            </tr>
            <tr>
              <td>
                <Form>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                      ID or names
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control type="text" />
                    </Col>
                    <Col sm="2">
                      <Button variant="secondary">Find</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </td>
            </tr>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AttributeGrouping = () => {
  return (
    <div>
      <p>On this page you can manage the attribute groups of your object type.</p>
      <p>rovide an ID and name and then click Add to add a new group.</p>
      <p>Click Apply to save changes to existing groups. Click Reset to revert your changes.</p>
    </div>
  );
};

export const Preferences = () => {
  const [page, setPage] = useState('attribute-definitions');

  return (
    <div className="preferences-container">
      <h1 className="title">Preferences</h1>
      <p>
        Users create/update/delete the preference attributes and groups
      </p>
      <div>
        <Nav variant="tabs" defaultActiveKey="/home" onSelect={(selectedKey) => setPage(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="attribute-definitions" active={page === 'attribute-definitions'}>Attribute Definitions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="attribute-grouping" active={page === 'attribute-grouping'}>Attribute Grouping</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="mt-3">
        {page === 'attribute-definitions' ? <AttributeDefinitions /> : <></>}
        {page === 'attribute-grouping' ? <AttributeGrouping /> : <></>}
      </div>
    </div>
  );
};
