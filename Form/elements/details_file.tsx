import React, { useState } from 'react';
import { Table, TextInput, Modal, Title, ActionIcon, Button, MultiSelect, Group } from '@mantine/core';
import { IconPlus, IconTrash, IconCheck, IconX, IconEdit } from '@tabler/icons-react';
import classes from '../page.module.css';

const FacultyDetails = () => {
  const initialRow = {
    id: Date.now(),
    nameOfFaculty: '',
    department: '',
    email: '',
    phoneNumber: '',
    officeLocation: '',
    regularCandidates: '',
    partTimeCandidates: '',
    workingIn: '',
    emergingAreas: '',
    specifyOtherEmergingAreas: '',
    awardedTechnologyTransferred: '',
    awarded: '',
    filesRegistered: '',
    inventionDisclosureFiled: '',
    otherDetails: '',
    sci: '',
    eSci: '',
    internationalProfessionalSociety: '',
    internationalProfessionalSocietyPublished: '',
    internationalNationalElsevier: '',
    othersPresentedPublished: '',
    scopes: '',
    ugcApproved: '',
    prototypeDeveloped: '',
    startupsStarted: '',
    isEditing: true,
  };

  const [rows, setRows] = useState([initialRow]);
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [visibleColumns, setVisibleColumns] = useState([
    'nameOfFaculty', 'email', 'phoneNumber', 'regularCandidates', 'partTimeCandidates', 'workingIn'
  ]);

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

  const handleEditRow = (row) => {
    setSelectedRow(row);
    setEditValues({
      ...row
    });
    setModalOpened(true);
  };

  const handleSave = () => {
    const updatedRows = rows.map(row =>
      row.id === selectedRow.id ? { ...row, ...editValues, isEditing: false } : row
    );
    setRows(updatedRows);
    setModalOpened(false);
  };

  const handleCancel = () => {
    setModalOpened(false);
    setEditValues({});
  };

  const handleModalChange = (field, value) => {
    setEditValues(prev => ({ ...prev, [field]: value }));
  };

  const handleColumnVisibilityChange = (arr: string[]) => {
    setVisibleColumns(arr);
  };

  const columnOptions = [
    'nameOfFaculty', 'department', 'email', 'phoneNumber', 'officeLocation',
    'regularCandidates', 'partTimeCandidates', 'workingIn', 'emergingAreas',
    'specifyOtherEmergingAreas', 'awardedTechnologyTransferred', 'awarded',
    'filesRegistered', 'inventionDisclosureFiled', 'otherDetails', 'sci',
    'eSci', 'internationalProfessionalSociety', 'internationalProfessionalSocietyPublished',
    'internationalNationalElsevier', 'othersPresentedPublished', 'scopes',
    'ugcApproved', 'prototypeDeveloped', 'startupsStarted'
  ];

  const isColumnGroupVisible = (columns) => {
    return columns.some(col => visibleColumns.includes(col));
  };

  const countVisibleColumns = (columns) => {
    return columns.filter(col => visibleColumns.includes(col)).length;
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Title order={5}>Details of those faculty members, who are eligible to guide PhD candidates
          in ESDM, IT, ITES areas along with the distribution of current PhD candidates</Title>
      </div>

      <MultiSelect
        placeholder="Select columns to display"
        data={columnOptions}
        value={visibleColumns}
        onChange={handleColumnVisibilityChange}
        clearable
        multiple
        className={classes.select}
      />

      <Table>
        <thead>
          <tr>
            <th rowSpan={2}></th>
            {isColumnGroupVisible([
              'nameOfFaculty', 'email', 'phoneNumber', 'regularCandidates', 'partTimeCandidates',
              'workingIn', 'emergingAreas', 'specifyOtherEmergingAreas', 'officeLocation', 'department'
            ]) && (
                <th colSpan={countVisibleColumns([
                  'nameOfFaculty', 'email', 'phoneNumber', 'regularCandidates', 'partTimeCandidates',
                  'workingIn', 'emergingAreas', 'specifyOtherEmergingAreas', 'officeLocation', 'department'
                ])}>Details of Faculty Working</th>
              )}
            {isColumnGroupVisible([
              'awardedTechnologyTransferred', 'awarded', 'filesRegistered', 'inventionDisclosureFiled', 'otherDetails'
            ]) && (
                <th colSpan={countVisibleColumns([
                  'awardedTechnologyTransferred', 'awarded', 'filesRegistered', 'inventionDisclosureFiled', 'otherDetails'
                ])}>Patents Granted and Commercially Exploited/Licensed</th>
              )}
            {isColumnGroupVisible([
              'sci', 'eSci', 'internationalProfessionalSociety', 'internationalProfessionalSocietyPublished', 'internationalNationalElsevier',
              'othersPresentedPublished', 'scopes', 'ugcApproved'
            ]) && (
                <th colSpan={countVisibleColumns([
                  'sci', 'eSci', 'internationalProfessionalSociety', 'internationalProfessionalSocietyPublished', 'internationalNationalElsevier',
                  'othersPresentedPublished', 'scopes', 'ugcApproved'
                ])}>Journal Publications (Marks Per Paper)</th>
              )}
            {isColumnGroupVisible([
              'prototypeDeveloped', 'startupsStarted'
            ]) && (
                <th colSpan={countVisibleColumns([
                  'prototypeDeveloped', 'startupsStarted'
                ])}>Applied Research Carried Out</th>
              )}
          </tr>
          <tr>
            {visibleColumns.includes('nameOfFaculty') && <th>Name of Faculty</th>}
            {visibleColumns.includes('email') && <th>Email ID</th>}
            {visibleColumns.includes('phoneNumber') && <th>Mobile Number</th>}
            {visibleColumns.includes('department') && <th>Department</th>}
            {visibleColumns.includes('workingIn') && <th>Working In</th>}
            {visibleColumns.includes('officeLocation') && <th>Working In</th>}
            {visibleColumns.includes('partTimeCandidates') && <th>Part Time Candidates</th>}
            {visibleColumns.includes('regularCandidates') && <th>Regular Candidates</th>}
            {visibleColumns.includes('emergingAreas') && <th>Emerging Areas</th>}
            {visibleColumns.includes('specifyOtherEmergingAreas') && <th>Specify Other Emerging Areas</th>}
            {visibleColumns.includes('awardedTechnologyTransferred') && <th>Awarded and Technology Transferred</th>}
            {visibleColumns.includes('awarded') && <th>Awarded</th>}
            {visibleColumns.includes('filesRegistered') && <th>Files Registered</th>}
            {visibleColumns.includes('inventionDisclosureFiled') && <th>Invention Disclosure Filed</th>}
            {visibleColumns.includes('otherDetails') && <th>Other Details</th>}
            {visibleColumns.includes('sci') && <th>SCI</th>}
            {visibleColumns.includes('eSci') && <th>E-SCI/SCI-E</th>}
            {visibleColumns.includes('internationalProfessionalSociety') && <th>International Professional Society Paper(s) Presented But Not Published</th>}
            {visibleColumns.includes('internationalProfessionalSocietyPublished') && <th>International Professional Society Paper(s) Presented and Published</th>}
            {visibleColumns.includes('internationalNationalElsevier') && <th>International/National Elsevier or Springer Conference Paper(s) Presented and Published</th>}
            {visibleColumns.includes('othersPresentedPublished') && <th>Others Including Conference/Seminar Paper(s) Presented and Published</th>}
            {visibleColumns.includes('scopes') && <th>Scopes</th>}
            {visibleColumns.includes('ugcApproved') && <th>UGC Approved (Non Paid Journal)</th>}
            {visibleColumns.includes('prototypeDeveloped') && <th>Prototype/Product Developed</th>}
            {visibleColumns.includes('startupsStarted') && <th>Startup(s) Started</th>}
            <th></th>
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
              {visibleColumns.map(col => (
                col in row && (
                  <td key={col} onClick={() => handleEditRow(row)}>
                    <TextInput
                      value={row[col]}
                      onChange={(event) => handleInputChange(row.id, col, event.currentTarget.value)}
                      disabled={!row.isEditing}
                      className={!row.isEditing ? classes.disabledInput : ''}
                    />
                  </td>
                )
              ))}
              <td>
                {row.isEditing ? (
                  <>
                    <ActionIcon onClick={handleSave} color="green" mr="xs">
                      <IconCheck />
                    </ActionIcon>
                    <ActionIcon onClick={handleCancel} color="gray">
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
          label="Name of Faculty"
          value={editValues.nameOfFaculty}
          onChange={(event) => setEditValues({ ...editValues, nameOfFaculty: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Department"
          value={editValues.department}
          onChange={(event) => setEditValues({ ...editValues, department: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Email"
          value={editValues.email}
          onChange={(event) => setEditValues({ ...editValues, email: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Phone Number"
          value={editValues.phoneNumber}
          onChange={(event) => setEditValues({ ...editValues, phoneNumber: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Office Location"
          value={editValues.officeLocation}
          onChange={(event) => setEditValues({ ...editValues, officeLocation: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Regular Candidates"
          value={editValues.regularCandidates}
          onChange={(event) => setEditValues({ ...editValues, regularCandidates: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Part Time Candidates"
          value={editValues.partTimeCandidates}
          onChange={(event) => setEditValues({ ...editValues, partTimeCandidates: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Working In"
          value={editValues.workingIn}
          onChange={(event) => setEditValues({ ...editValues, workingIn: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Emerging Areas"
          value={editValues.emergingAreas}
          onChange={(event) => setEditValues({ ...editValues, emergingAreas: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Specify Other Emerging Areas"
          value={editValues.specifyOtherEmergingAreas}
          onChange={(event) => setEditValues({ ...editValues, specifyOtherEmergingAreas: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Awarded and Technology Transferred"
          value={editValues.awardedTechnologyTransferred}
          onChange={(event) => setEditValues({ ...editValues, awardedTechnologyTransferred: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Awarded"
          value={editValues.awarded}
          onChange={(event) => setEditValues({ ...editValues, awarded: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Files Registered"
          value={editValues.filesRegistered}
          onChange={(event) => setEditValues({ ...editValues, filesRegistered: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Invention Disclosure Filed"
          value={editValues.inventionDisclosureFiled}
          onChange={(event) => setEditValues({ ...editValues, inventionDisclosureFiled: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Other Details"
          value={editValues.otherDetails}
          onChange={(event) => setEditValues({ ...editValues, otherDetails: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="SCI"
          value={editValues.sci}
          onChange={(event) => setEditValues({ ...editValues, sci: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="E-SCI/SCI-E"
          value={editValues.eSci}
          onChange={(event) => setEditValues({ ...editValues, eSci: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="International Professional Society"
          value={editValues.internationalProfessionalSociety}
          onChange={(event) => setEditValues({ ...editValues, internationalProfessionalSociety: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="International Professional Society Published"
          value={editValues.internationalProfessionalSocietyPublished}
          onChange={(event) => setEditValues({ ...editValues, internationalProfessionalSocietyPublished: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="International National Elsevier"
          value={editValues.internationalNationalElsevier}
          onChange={(event) => setEditValues({ ...editValues, internationalNationalElsevier: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Others Presented Published"
          value={editValues.othersPresentedPublished}
          onChange={(event) => setEditValues({ ...editValues, othersPresentedPublished: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Scopes"
          value={editValues.scopes}
          onChange={(event) => setEditValues({ ...editValues, scopes: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="UGC Approved"
          value={editValues.ugcApproved}
          onChange={(event) => setEditValues({ ...editValues, ugcApproved: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Prototype Developed"
          value={editValues.prototypeDeveloped}
          onChange={(event) => setEditValues({ ...editValues, prototypeDeveloped: event.currentTarget.value })}
          mb="sm"
        />
        <TextInput
          label="Startups Started"
          value={editValues.startupsStarted}
          onChange={(event) => setEditValues({ ...editValues, startupsStarted: event.currentTarget.value })}
          mb="sm"
        />

        <Group position="right" mt="md">src/app/mehak
          <Button onClick={handleSave}>Save</Button>
        </Group>
      </Modal>

    </div>
  );
};

export default FacultyDetails;