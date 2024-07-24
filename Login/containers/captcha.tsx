import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Input, Text, Title, Group, UnstyledButton,  Notification, rem  } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import classes from '../page.module.css';

const generateCaptchaText = () => {
  const chars = '0123456789';
  let text = '';
  for (let i = 0; i < 5; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
};

const drawCaptcha = (canvas: HTMLCanvasElement, text: string) => {
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';

    // Add random rotation and scaling
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      const x = 30 + i * 30;
      const y = 35;
      ctx.save();
      ctx.translate(x, y);
      const angle = (Math.random() - 0.5) * 0.5; 
      const scale = 1 + (Math.random() - 0.5) * 0.3; 
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // Draw random lines over the text
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
  }
};

const Captcha: React.FC = () => {
  const [captchaText, setCaptchaText] = useState<string>(generateCaptchaText());
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawCaptcha(canvasRef.current, captchaText);
    }
  }, [captchaText]);

  const handleRefreshCaptcha = () => {
    const newCaptchaText = generateCaptchaText();
    setCaptchaText(newCaptchaText);
    if (canvasRef.current) {
      drawCaptcha(canvasRef.current, newCaptchaText);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userAnswer === captchaText) {
      setMessage('CAPTCHA verified successfully!');
    } else {
      setMessage('Incorrect answer. Please try again.');
      handleRefreshCaptcha();
    }
  };

  return (
    <Container>
      <Title order={3} className={classes.title}>Enter CAPTCHA</Title>
      <Group className={classes.captchaGroup}>
      <canvas
        className={classes.captcha}
        ref={canvasRef}
        width={200}
        height={50}
        style={{ cursor: 'pointer' }}
        onClick={handleRefreshCaptcha}
      />
      <UnstyledButton className={classes.refreshButton} onClick={handleRefreshCaptcha}>
        <IconRefresh size={16} />
      </UnstyledButton>
      </Group>
      <form onSubmit={handleSubmit}>
        <Input.Wrapper className={classes.captchaInputWrapper} label="CAPTCHA">
          <Input
            value={userAnswer}
            className={classes.input}
            onChange={(e) => setUserAnswer(e.currentTarget.value)}
            placeholder="Enter your answer"
            required
          />
        </Input.Wrapper>
        <Button className={classes.submit} type="submit" variant="filled">Submit</Button>
      </form>
      {message && (
        <Text className={classes.message} align="center" mt="md" color={message.includes('successfully') ? 'green' : 'red'}>
          {message}
          <Notification className={classes.notification} color="teal" title="Login Successfull!" mt="md">
        Login Successful!
      </Notification>
        </Text>
        
      )}
    </Container>
  );
};

export default Captcha;
