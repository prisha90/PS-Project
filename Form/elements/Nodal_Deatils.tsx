import React, { useState } from 'react';
import { Input, Stack, NumberInput, Group, Text, rem, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX} from '@tabler/icons-react';
import classes from '../page.module.css';

const NodalDetails: React.FC = (props) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
  const [pincode, setPincode] = useState<string | undefined>(undefined);

  return (
    <div className={classes.container}>
      <div className={classes.formContent}>
          <Input.Wrapper label="Name of the Institution Head">
            <Input placeholder="Enter the name"  />
          </Input.Wrapper>
          <Input.Wrapper label="Designation at the Institute">
            <Input placeholder="Enter the designation"  />
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
          <Input.Wrapper label="Pincode">
            <NumberInput
              value={pincode}
              onChange={(val) => setPincode(val?.toString())}
              placeholder="Enter Pincode"
              hideControls
            />
          </Input.Wrapper>
          </div>
          <Input.Wrapper label="Declaration">
          <Dropzone
            
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            {...props}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <IconUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed 5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
          </Input.Wrapper>
    </div>
  );
};

export default NodalDetails;