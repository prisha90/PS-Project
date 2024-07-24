import React, { useState } from 'react';
import { Table, TextInput, Modal, Title, ActionIcon, Button, Input } from '@mantine/core';
import { IconPlus, IconTrash, IconCheck, IconX, IconEdit } from '@tabler/icons-react';
import classes from '../page.module.css';

const Intake = () => {
  const initialRow = {
    id: Date.now(),
    year: '',
    fullTime: '',
    partTime: '',
    isEditing: true,
    isSaved: false,
  };

  const [rows, setRows] = useState([initialRow]);
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleAddRow = () => {
    setRows([...rows, { ...initialRow, id: Date.now() }]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map(row => row.id === id ? { ...row, [field]: value } : row);
    setRows(updatedRows);
  };

  const handleSave = (id) => {
    const updatedRows = rows.map(row => row.id === id ? { ...row, isEditing: false, isSaved: true } : row);
    setRows(updatedRows);
  };

  const handleCancelEdit = (id) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, isEditing: false };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleEditRow = (row) => {
    setSelectedRow(row);
    setEditValues({
      year: row.year,
      fullTime: row.fullTime,
      partTime: row.partTime
    });
    setModalOpened(true);
  };

  const handleModalSave = () => {
    const updatedRows = rows.map(row =>
      row.id === selectedRow.id ? { ...row, ...editValues } : row
    );
    setRows(updatedRows);
    setModalOpened(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Title order={5}>Intake of PhD candidates in any of the areas of ESDM, IT, ITES in the last 3 years (In reverse chronological order)</Title>
      </div>
      <div className={classes.box}>
        <Input.Wrapper className={classes.formBigContent} label="Capacity to take additional PhD Candidates(For full time PhD seats)" description="" >
          <Input className={classes.formContent} placeholder=" " />
        </Input.Wrapper>
        <Input.Wrapper className={classes.formBigContent} label="Number of Full Time PhD Candidates requested Under Phase II for academic year 2023-2024" description="" >
          <Input className={classes.formContent} placeholder="" />
        </Input.Wrapper>
        <Input.Wrapper className={classes.formBigContent} label="Capacity to take additional PhD Candidates(For part time PhD seats)" description="" >
          <Input className={classes.formContent} placeholder="" />
        </Input.Wrapper>
        <Input.Wrapper className={classes.formBigContent} label="Number of Part Time PhD Candidates requested Under Phase II for academic year 2023-2024" description="" >
          <Input className={classes.formContent} placeholder="" />
        </Input.Wrapper>
        <Input.Wrapper label="Number of Full Time PhD Candidates Enrolled Under Phase I of Visvesvaraya PhD Scheme & Graduated" description="" >
          <Input className={classes.formContent} placeholder=" " />
        </Input.Wrapper>
        <Input.Wrapper label="Number of Full Time PhD Candidates Enrolled Under Phase I of Visvesvaraya PhD Scheme & Currently Pursuing PhD" description="" >
          <Input className={classes.formContent} placeholder="" />
        </Input.Wrapper>
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Year</th>
            <th>Number of Full Time PhD Candidates Enrolled</th>
            <th>Number of Part Time PhD Candidates Enrolled</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>
                <ActionIcon onClick={handleAddRow} color="blue" mr="xs">
                  <IconPlus />
                </ActionIcon>
              </td>
              <td>
                <TextInput
                  value={row.year}
                  onChange={(event) => handleInputChange(row.id, 'year', event.currentTarget.value)}
                  disabled={row.isSaved}
                  className={row.isSaved ? classes.disabledInput : ''}
                />
              </td>
              <td>
                <TextInput
                  value={row.fullTime}
                  onChange={(event) => handleInputChange(row.id, 'fullTime', event.currentTarget.value)}
                  disabled={row.isSaved}
                  className={row.isSaved ? classes.disabledInput : ''}
                />
              </td>
              <td>
                <TextInput
                  value={row.partTime}
                  onChange={(event) => handleInputChange(row.id, 'partTime', event.currentTarget.value)}
                  disabled={row.isSaved}
                  className={row.isSaved ? classes.disabledInput : ''}
                />
              </td>
              <td>
                {row.isEditing ? (
                  <>
                    <ActionIcon onClick={() => handleSave(row.id)} color="green" mr="xs">
                      <IconCheck />
                    </ActionIcon>
                    <ActionIcon onClick={() => handleCancelEdit(row.id)} color="gray">
                      <IconX />
                    </ActionIcon>
                  </>
                ) : (
                  <>
                    <ActionIcon onClick={() => handleEditRow(row)} color="blue" mr="xs">
                      <IconEdit />
                    </ActionIcon>
                    <ActionIcon onClick={() => handleDeleteRow(row.id)} color="red">
                      <IconTrash />
                    </ActionIcon>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Edit Row"
      >
        <TextInput
          label="Year"
          value={editValues.year}
          onChange={(event) => setEditValues({ ...editValues, year: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Number of Full Time PhD Candidates"
          value={editValues.fullTime}
          onChange={(event) => setEditValues({ ...editValues, fullTime: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Number of Part Time PhD Candidates"
          value={editValues.partTime}
          onChange={(event) => setEditValues({ ...editValues, partTime: event.currentTarget.value })}
          mb="sm"
        />
        <Button onClick={handleModalSave}>Save</Button>
      </Modal>
    </div>
  );
};

export default Intake;
