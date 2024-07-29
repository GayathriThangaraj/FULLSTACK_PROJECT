import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, Box, TextField, Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const createData = (id, name, type, price, location) => {
  return { id, name, type, price, location };
};

const initialRows = [
  createData(1, "Property 1", "House", "$200,000", "New York"),
  createData(2, "Property 2", "Apartment", "$150,000", "Los Angeles"),
  createData(2, "Property 3", "Villa", "$150,000", "Mumbai"),
  createData(2, "Property 4", "Apartment", "$150,000", "Delhi"),
  createData(2, "Property 5", "Building", "$150,000", "Los Angeles"),
  // Add more rows as needed
];

const TableComponent = () => {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [editValues, setEditValues] = useState({ name: "", type: "", price: "", location: "" });

  const handleEdit = (row) => {
    setCurrentRow(row);
    setEditValues({ name: row.name, type: row.type, price: row.price, location: row.location });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleSave = () => {
    setRows(rows.map((row) => (row.id === currentRow.id ? { ...row, ...editValues } : row)));
    setOpen(false);
    setCurrentRow(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(row)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={editValues.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Type"
            name="type"
            value={editValues.type}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={editValues.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={editValues.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSave} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TableComponent;
