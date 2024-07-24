import React from 'react';
import { Input, Stack, Select } from '@mantine/core';
import classes from '../page.module.css';

const SeatAllot: React.FC = () => {
    return (
        <div className={classes.container}>
            <div className={classes.formContent}>
                <Select
                    label="Applied for Session"
                    placeholder="Pick year"
                    data={['2022-2023', '2023-2024', '2024-2025', '2025-2026']}
                />

                <Input.Wrapper label="Name of the Institute">
                    <Input className={classes.formContent} placeholder="" />
                </Input.Wrapper>

                <Select
                    label="Academic Committee Meeting Member"
                    placeholder="Pick number"
                    data={['1', '2', '3', '4']}
                />

                <Input.Wrapper label="Part Time Allotted">
                    <Input className={classes.formContent} placeholder="" />
                </Input.Wrapper>

                <Input.Wrapper label="Full Time Requested">
                    <Input className={classes.formContent} placeholder="" />
                </Input.Wrapper>

                <Input.Wrapper label="Full Time Allotted">
                    <Input className={classes.formContent} placeholder="" />
                </Input.Wrapper>
            </div>
        </div>
    );
};

export default SeatAllot;
