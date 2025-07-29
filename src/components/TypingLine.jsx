import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const TypingLine = ({ text = '', delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // If text is null, undefined, or not a string, skip animation
    if (typeof text !== 'string' || !text.trim()) return;

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    text && (
      <Typography
        sx={{
          fontSize: '1rem',
          lineHeight: 1.6,
          whiteSpace: 'pre-wrap',
          mb: 1.5,
          px: 2,
          py: 1,
          bgcolor: '#f5f5f5',
          borderRadius: 2,
          maxWidth: '100%',
          boxShadow: 1,
        }}
      >
        {displayedText}
      </Typography>
    )
  );
};

export default TypingLine;
