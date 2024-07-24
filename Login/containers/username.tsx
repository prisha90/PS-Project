import React, { useState } from 'react';
import { Input, Button, Tabs, Text, Box, NumberInput, Group, Title, UnstyledButton} from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import classes from '../page.module.css';

interface UsernameProps {
  onNext: () => void;
}

const Username: React.FC<UsernameProps> = ({ onNext }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState<number | undefined>(undefined);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [createButtonDisabled, setCreateButtonDisabled] = useState(false);
  const [createUsername, setCreateUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createError, setCreateError] = useState('');
  const [inputBoxDisabled, setInputBoxDisabled] = useState(false);
  const [createBoxDisabled, setCreteBoxDisabled] = useState(true);


  const validateUsername = () => {
    if (username.trim() === '') {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
      onNext();
      setNextButtonDisabled(true);
      setCreateButtonDisabled(true);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
      onNext();
      setNextButtonDisabled(true);
      setCreateButtonDisabled(true);
    }
  };

  const validateMobile = () => {
    if (!mobile || mobile.toString().length !== 10) {
      setMobileError('Mobile number must be 10 digits');
    } else {
      setMobileError('');
      onNext();
      setNextButtonDisabled(true);
      setCreateButtonDisabled(true);
    }
  };

  const handleCreateAccount = () => {
    setCreateUsername('');
    setCreatePassword('');
    setConfirmPassword('');
    setCreateError('');
    setInputBoxDisabled(true);
    setCreteBoxDisabled(false);
  };

  const handleCreateAccountSubmit = () => {
    if (createUsername.trim() === '') {
      setCreateError('Please Enter Username');
    } else if (createPassword !== confirmPassword) {
      setCreateError('Passwords do not match');
    } else if (createPassword.trim() === '') {
      setCreateError('Password is required');
    } else if (!createPassword|| createPassword.toString().length !== 8) {
      setCreateError('Password number must have 8 digits');
    } else {
      // connect to backend
      setInputBoxDisabled(false);
      setCreteBoxDisabled(true);
      setCreateButtonDisabled(true);
    }
  };

  return (
    <div>
      <Title order={1} className={classes.title}>
        LOGIN
      </Title>
      
      {!inputBoxDisabled && (
          <>
      <Tabs defaultValue="username" classNames={classes}>
        <Tabs.List grow className={classes.tabsList}>
          <Tabs.Tab value="username" className={classes.tab}>
            Username
          </Tabs.Tab>
          <Tabs.Tab value="email" className={classes.tab}>
            Email
          </Tabs.Tab>
          <Tabs.Tab value="mobile" className={classes.tab}>
            Mobile Number
          </Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panel value="username">
          <Input.Wrapper className={classes.inputWrapper} label="Enter Username">
            <Input
              className={classes.input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Input.Wrapper>
          {usernameError && <Text className={classes.errorText}>{usernameError}</Text>}
        </Tabs.Panel>

        <Tabs.Panel value="email">
          <Input.Wrapper className={classes.inputWrapper} label="Enter Email">
            <Input
              className={classes.input}
              placeholder="Email"
              leftSection={<IconAt size={16} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Input.Wrapper>
          {emailError && <Text className={classes.errorText}>{emailError}</Text>}
        </Tabs.Panel>

        <Tabs.Panel value="mobile">
          <Input.Wrapper className={classes.inputWrapper} label="Enter Mobile Number">
            <NumberInput
              className={classes.input}
              placeholder="Mobile Number"
              value={mobile}
              onChange={(value) => setMobile(value)}
              hideControls
            />
          </Input.Wrapper>
          {mobileError && <Text className={classes.errorText}>{mobileError}</Text>}
        </Tabs.Panel>
      </Tabs>
      </>
        )}
      


      <Group className={classes.group}>
  {!inputBoxDisabled && (
    <>
      {!createButtonDisabled && (
        <div className={classes.leftButtonGroup}>
          <UnstyledButton
            className={classes.createAccountBtn}
            variant="outline"
            onClick={handleCreateAccount}
          >
            Create New Account
          </UnstyledButton>
        </div>
      )}
      {!nextButtonDisabled && (
        <div className={classes.buttonGroup}>
          <Button
            className={classes.submitBtn}
            variant="filled"
            onClick={() => {
              validateUsername();
              validateEmail();
              validateMobile();
            }}
            style={{ marginLeft: 'auto' }}
          >
            Next
            </Button>
          </div>
        )}
      </>
    )}
  </Group>

          
      

      <div>
      {!createBoxDisabled && (
        <Box className={classes.content}>
          <Input.Wrapper className={classes.inputWrapper} label="Username">
            <Input
              className={classes.input}
              placeholder="Username"
              value={createUsername}
              onChange={(e) => setCreateUsername(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper className={classes.inputWrapper} label="Password">
            <Input
              className={classes.input}
              type="password"
              placeholder="Password"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper className={classes.inputWrapper} label="Confirm Password">
            <Input
              className={classes.input}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Input.Wrapper>

          {createError && <Text className={classes.errorText}>{createError}</Text>}
          
          <Button
            className={classes.submitdetailsBtn}
            variant="filled"
            onClick={handleCreateAccountSubmit}
          >
            Create Account
          </Button>
        </Box>
      )}
      </div>
    </div>
  );
};

export default Username;