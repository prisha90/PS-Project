"use client";

import React, { useState } from 'react';
import classes from './page.module.css';
import { Title, Text, Group, UnstyledButton } from '@mantine/core';
import Sidebar from './containers/sidebar';
import { IconEdit } from '@tabler/icons-react';

const Page: React.FC = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [status, setStatus] = useState('Pending');

  const handleSave = () => {
    setIsEditing(false);
    console.log('Content saved');
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className={classes.page}>
        <div className={classes.headerOutside}>
          <Title order={1}>
            Approval Of Proposal
          </Title>
          <div className={classes.headerInside}>
          <Text
            component="span"
            className={classes.statusText}
            style={{ color: status === 'Approved' ? 'green' : 'red' }}
          >
            Status: {status}
          </Text>
          <UnstyledButton onClick={handleEdit} compact>
            <IconEdit size={25} color={isEditing ? 'green' : 'red'} />
          </UnstyledButton>
          </div>
        </div>
      <div className={classes.contentContainer}>
        <Sidebar disabled={!isEditing} />
        <UnstyledButton size="xs" onClick={handleSave} className={classes.saveButton} compact disabled={!isEditing}>
          Save
        </UnstyledButton>
      </div>
    </div>
  );
};

export default Page;
