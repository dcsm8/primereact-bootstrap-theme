import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Navbar,
  Breadcrumb,
} from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
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
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const companies = generateCompanies(30);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            React-Bootstrap + PrimeReact Table
          </Navbar.Brand>
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
            <Button
              variant="primary"
              className="me-2"
              onClick={handleShowModal}
            >
              Add Company
            </Button>
          </Col>
          <Col md="auto">
            <Button variant="secondary">Filters</Button>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="billingAddress">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter billing address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
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
          showGridlines
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
