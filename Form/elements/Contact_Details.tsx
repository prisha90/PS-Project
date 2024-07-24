import React, { useState } from 'react';
import { Input, Stack, NumberInput } from '@mantine/core';
import classes from '../page.module.css';

const ContactDetails: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);


  return (
    <div className={classes.container}>
      <div className={classes.formContent}>
          <Input.Wrapper label="Name of the Institution Head">
            <Input placeholder="Enter the name"  />
          </Input.Wrapper>
          <Input.Wrapper label="Designation at the Institute">
            <Input placeholder="Enter the designation" />
          </Input.Wrapper>
          <Input.Wrapper label="Address">
            <Input placeholder="Enter Address" />
          </Input.Wrapper>
          <Input.Wrapper label="Email ID">
            <Input type="email" placeholder="Enter Email ID" />
          </Input.Wrapper>
          <Input.Wrapper label="Phone Number">
            <NumberInput
              value={phoneNumber}
              onChange={(val) => setPhoneNumber(val?.toString())}
              placeholder="Enter Phone Number"
              hideControls
            />
          </Input.Wrapper>
      </div>
    </div>
  );
};

export default ContactDetails;