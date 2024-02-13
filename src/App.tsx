import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
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
  const items = [{ label: "Dashboard" }, { label: "Companies" }];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };

  const dialogFooter = (
    <div>
      <Button
        className="full-width-button"
        label="Submit"
        onClick={() => setShowDialog(false)}
      />
    </div>
  );

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#020e33" }}
      >
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand" href="#">
            PRIME REACT BOOTSTRAP THEME
          </a>
        </div>
      </nav>
      <div className="container">
        <BreadCrumb model={items} home={home} separatorIcon={"/"} />

        <h2>Companies</h2>
        <div className="d-flex justify-content-end">
          <div className="me-2">
            <Button label="Add Company" onClick={() => setShowDialog(true)} />
          </div>
          <Button label="Filters" className="p-button-secondary" />
        </div>

        <Dialog
          header="Add New Company"
          visible={showDialog}
          footer={dialogFooter}
          onHide={() => setShowDialog(false)}
          position="top"
          style={{ width: "500px" }}
        >
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="name">Company Name</label>
              <InputText
                id="name"
                type="text"
                placeholder="Enter company name"
              />
            </div>
            <div className="p-field">
              <label htmlFor="billingAddress">Billing Address</label>
              <InputText
                id="billingAddress"
                type="text"
                placeholder="Enter billing address"
              />
            </div>
            <div className="p-field">
              <label htmlFor="phoneNumber">Phone Number</label>
              <InputText
                id="phoneNumber"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                type="email"
                placeholder="Enter email address"
              />
            </div>
          </div>
        </Dialog>

        <DataTable
          value={companies}
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
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search by Name"
          ></Column>
          <Column
            field="billingAddress"
            header="Billing Address"
            sortable
            filter
            filterPlaceholder="Search by Address"
          ></Column>
          <Column
            field="phoneNumber"
            header="Phone Number"
            sortable
            filter
            filterPlaceholder="Search by Phone"
          ></Column>
          <Column
            field="email"
            header="Email"
            sortable
            filter
            filterPlaceholder="Search by Email"
          ></Column>
        </DataTable>
      </div>
    </>
  );
}

export default App;
