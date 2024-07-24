"use client";

import React, { useState } from 'react';
import classes from './page.module.css';
import Username from './containers/username';
import Password from './containers/password';
import Captcha from './containers/captcha';

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <Username onNext={() => setShowPassword(true)} />
        {showPassword && (
          <>
            <Password onNext={() => setShowCaptcha(true)} />
            {showCaptcha && <Captcha />}
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
