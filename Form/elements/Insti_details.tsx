import React, { useState } from 'react';
import { Select, Input, Autocomplete, Stack, Title, TagsInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import classes from '../page.module.css';
import { TextInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';

const InstiDetails: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div className={classes.container}>
      <Stack>
        <div className={classes.formContent}>
          <Select
            label="Applied for Session"
            placeholder="Pick year"
            data={['2022-2023', '2023-2024', '2024-2025', '2025-2026']}
            className={classes.formMidContent}
          />
          <DateInput
            value={value}
            onChange={setValue}
            label="Date of application"
            placeholder="Enter the Date of Application"
            className={classes.formMidContent}
          />
          <Input.Wrapper label="Name of the Institution" className={classes.formMidContent}>
            <Input placeholder="Enter the name of the Institution" />
          </Input.Wrapper>
          <Autocomplete
            label="Select a city"
            placeholder="Pick a city or enter anything"
            data={['Agartala', 'Agra', 'Ahmedabad', 'Ahmednagar', 'Aizawl', 'Ajmer', 'Akola']}
            className={classes.formMidContent}
          />
          <TextInput
            label="District"
            placeholder="Enter District"
            className={classes.formMidContent}
          />
          <Autocomplete
            label="State"
            placeholder="Enter State"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            className={classes.formMidContent}
          />
          <Select
            label="Institute Class"
            placeholder="Select Institute Class"
            data={['X', 'Y', 'V', 'Z']}
            className={classes.formMidContent}
          />
          <NumberInput
            label="Latitude"
            placeholder="Enter Latitude"
            allowNegative={false}
            className={classes.formMidContent}
          />
          <NumberInput
            label="Longitude"
            placeholder="Enter Longitude"
            allowNegative={false}
            className={classes.formMidContent}
          />
          <Select
            label="Institute Category"
            placeholder="Select Institute Category"
            data={['X', 'Y', 'V', 'Z']}
            className={classes.formMidContent}
          />
          <Select
            label="Institute Type"
            placeholder="Select Institute Type"
            data={['X', 'Y', 'V', 'Z']}
            className={classes.formMidContent}
          />
          <Input.Wrapper label="Application ID" className={classes.formMidContent}>
            <Input placeholder="Enter Application ID" />
          </Input.Wrapper>

          <Input.Wrapper className={classes.formMidContent} label="Priority Areas" description="" >
          <Input placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper className={classes.formMidContent} label="Other Emerging Areas" description="" >
              <Input placeholder="" />
          </Input.Wrapper>
          
        </div>
        <Input.Wrapper className={classes.formBigContent} label="Indicative Research Areas for PhD research Proposal for additional PhD candidates under ESDM/IT/ITES" description="" >
              <TagsInput className={classes.formContent} placeholder="" />
          </Input.Wrapper>

          <Title order={6}>Latest NIRF Rankings </Title>
          
          <div className= {classes.withHeading}>
          <Input.Wrapper className={classes.formMidContent} label="NIRF Ranking (Overall)" description="" >
              <TagsInput className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper className={classes.formMidContent} label="NIRF Ranking (Research)" description="" >
              <TagsInput className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper className={classes.formMidContent} label="NIRF Ranking (Engineering)" description="" >
              <TagsInput className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper className={classes.formMidContent} label="NIRF Ranking (University)" description="" >
              <TagsInput className={classes.formContent} placeholder="" />
          </Input.Wrapper>
        </div>
      </Stack>
    </div>
  );
};

export default InstiDetails;
