import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button as BootstrapButton,
  Modal,
  Form,
  Navbar,
  Breadcrumb,
} from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./App.css";

function generateCompanies(n: number) {
  const companies = [];
  for (let i = 1; i <= n; i++) {
    companies.push({
      id: i,
      name: `Company ${String.fromCharCode(64 + i)}`,
      billingAddress: `${1234 + i} Street, City`,
      phoneNumber: `123-456-${7890 + i}`,
      email: `info@company${String.fromCharCode(64 + i).toLowerCase()}.com`,
    });
  }
  return companies;
}

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const companies = generateCompanies(30);

  const dialogFooter = (
    <BootstrapButton variant="primary" onClick={() => setShowDialog(false)}>
      Submit
    </BootstrapButton>
  );

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">PRIME REACT BOOTSTRAP THEME</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Companies</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col>
            <h2>Companies</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-end mb-3">
          <Col md="auto">
            <Button label="Add Company" onClick={() => setShowDialog(true)} />
          </Col>
          <Col md="auto">
            <Button label="Filters" className="p-button-secondary" />
          </Col>
        </Row>

        <Modal
          show={showDialog}
          onHide={() => setShowDialog(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Company
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <InputText
                  id="name"
                  type="text"
                  placeholder="Enter company name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Billing Address</Form.Label>
                <InputText
                  id="billingAddress"
                  type="text"
                  placeholder="Enter billing address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <InputText
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter phone number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <InputText
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>{dialogFooter}</Modal.Footer>
        </Modal>

        <DataTable
          value={companies}
          size="small"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          className="mt-4"
          stripedRows
          dataKey="id"
          filterDisplay="menu"
        >
          <Column
            field="id"
            header="ID"
            sortable
            filter
            filterPlaceholder="Search by ID"
          />
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search by Name"
          />
          <Column
            field="billingAddress"
            header="Billing Address"
            sortable
            filter
            filterPlaceholder="Search by Address"
          />
          <Column
            field="phoneNumber"
            header="Phone Number"
            sortable
            filter
            filterPlaceholder="Search by Phone"
          />
          <Column
            field="email"
            header="Email"
            sortable
            filter
            filterPlaceholder="Search by Email"
          />
        </DataTable>
      </Container>
    </>
  );
}

export default App;
