// CommonButton.js
import React from 'react';
import Button from '@mui/material/Button';

const CommonButton = ({ variant, color, onClick,size,children, ...props }) => {
  return (
    <Button
      variant={variant || 'contained'}
      color={color || 'primary'}
      onClick={onClick}
      size={size||'medium'}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
