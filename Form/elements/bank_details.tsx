import React from 'react';
import { Input,Stack} from '@mantine/core';
import classes from '../page.module.css';

const BankDetails : React.FC = () => {
  

  return (
    <Input.Wrapper label="Institute Bank Name" description="" >
      <Input className={classes.formContent} placeholder=" "/>
    </Input.Wrapper>

     <Input.Wrapper label="Branch Name" description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  
     <Input.Wrapper label="Address of the Bank " description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  
     <Input.Wrapper label="Telephone Number" description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  
     <Input.Wrapper label="Email Id" description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  
     <Input.Wrapper label="Bank Account Number" description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  

     <Input.Wrapper label="MICR Code" description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  
     <Input.Wrapper label="IFSC Code of the Branch" description="" >
        <Input className={classes.formContent} placeholder="" />
     </Input.Wrapper>  
  );
};

export default BankDetails;