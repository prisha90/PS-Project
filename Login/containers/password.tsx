import React, { useState, useEffect } from 'react';
import { Input, Button, Radio, Group, PasswordInput, Text, Stack, Title, UnstyledButton  } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import classes from '../page.module.css';

interface PasswordProps {
  onNext: () => void;
}

const Password: React.FC<PasswordProps> = ({ onNext }) => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [otpError, setOtpError] = useState<string>('');
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  const [inputBoxDisabled, setInputBoxDisabled] = useState(false);
  const [passwordBoxDisabled, setPasswordBoxDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAccounts(['Account 1', 'Account 2', 'Account 3']);
    }, 1000);
  }, []);

  const handleAccountSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAccount(e.target.value);
    setShowPasswordInput(true);
  };


  const validatePasswords = () => {
    if (password.trim() === '') {
      setPasswordError('Password is required');
    } 
    else if (!password || password.toString().length !== 8) {
      setPasswordError('Password number must have 8 digits');
    }
    else {
      setPasswordError('');
      setPasswordBoxDisabled(true);
      onNext();
      setNextButtonDisabled(true);
    }
  };

  const handleForgotPassword = () => {
    setInputBoxDisabled(true);
    setPasswordBoxDisabled(false);
  };

  const handleOtpSubmit = () => {
    if (otp.trim() === '') {
      setOtpError('OTP is required');
    } else {
      setOtpError('');
      setOtpVerified(true);
      // Verify the OTP with backend here
    }
  };

  const handlePasswordReset = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else if (password.trim() === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
      setOtpVerified(false);
      setPassword('');
      setConfirmPassword('');
      setOtp('');
      setInputBoxDisabled(false);
      setPasswordBoxDisabled(true);
    }
  };

  return (
    <div>
      <Title order={3} className={classes.extendedTitle}>Choose Account</Title>
      <Stack>
        {accounts.map((account) => (
          <Radio
            key={account}
            label={account}
            name="account"
            value={account}
            onChange={handleAccountSelection}
            checked={selectedAccount === account}
          />
        ))}
      </Stack>

      {!inputBoxDisabled && (
        <div>
          {showPasswordInput && (
            <>
              <Input.Wrapper className={classes.inputWrapper} label="Enter Password/OTP/Pin" mt="1rem">
                <PasswordInput
                  placeholder="Password/OTP/Pin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  visibilityToggleIcon={({ reveal }) =>
                    reveal ? (
                      <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                    ) : (
                      <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                    )
                  }
                />
              </Input.Wrapper>
              {passwordError && <Text className={classes.errorText}>{passwordError}</Text>}
              

          {!nextButtonDisabled && (
              <Group className={classes.group}>
                <div className={classes.leftButtonGroup}>
                  <UnstyledButton className={classes.forgotPasswordBtn} variant='default' onClick={handleForgotPassword}>
                    Forgot Password?
                  </UnstyledButton>
                </div>
                <div className={classes.buttonGroup}>
                  <Button className={classes.submitBtn} variant="filled" onClick={validatePasswords}>
                    Next
                  </Button>
                </div>
              </Group>
          )}
            </>
          )}
        </div>
      )}

      {!passwordBoxDisabled && (
        <div>
          {!otpVerified ? (
            <>
              <Title order={4} className={classes.extendedTitle}>Forgot Password</Title>
              <Input.Wrapper className={classes.inputWrapper} label="Enter OTP" mt="1rem">
                <Input
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Input.Wrapper>
              {otpError && <Text className={classes.errorText}>{otpError}</Text>}
              <Button className={classes.submitBtn} variant="filled" onClick={handleOtpSubmit}>
                Submit OTP
              </Button>
            </>
          ) : (
            <>
              <Title order={4} className={classes.extendedTitle}>Create New Password</Title>
              <Input.Wrapper className={classes.inputWrapper} label="Enter New Password" mt="1rem">
                <PasswordInput
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  visibilityToggleIcon={({ reveal }) =>
                    reveal ? (
                      <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                    ) : (
                      <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                    )
                  }
                />
              </Input.Wrapper>

              <Input.Wrapper className={classes.inputWrapper} label="Confirm New Password" mt="1rem">
                <PasswordInput
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  visibilityToggleIcon={({ reveal }) =>
                    reveal ? (
                      <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                    ) : (
                      <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                    )
                  }
                />
              </Input.Wrapper>

              {passwordError && <Text className={classes.errorText}>{passwordError}</Text>}
              <Button className={classes.resetBtn} variant="filled" onClick={handlePasswordReset}>
                Reset Password
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Password;
