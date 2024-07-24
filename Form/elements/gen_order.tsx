import React from 'react';
import { Input, Group, Text, rem, Stack } from '@mantine/core';
import classes from '../page.module.css';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';

const GenOrder: React.FC = (props) => {

  return (
    <div className={classes.container}>
      <div className={classes.formContent}>
          <Input.Wrapper label="Full Time Allotted">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Fellowship Full Time (1st & 2nd Year)">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Fellowship Full Time (3rd to 5th Year)">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Fellowship Part Time">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Rate of Research Contingency/Yr/FT">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Rate of Institutional Overhead/Yr/FT">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Institute Class (%)">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Implementation Order ID">
            <Input className={classes.formContent} placeholder="" />
          </Input.Wrapper>
          <Input.Wrapper label="Implementation Order Document">
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
    </div>
  );
};

export default GenOrder;