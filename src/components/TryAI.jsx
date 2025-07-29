import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SymptomData from './SymptomData';

const TypingLine = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <Typography sx={{ whiteSpace: 'pre-line' }}>{displayedText}</Typography>;
};

const LOCATIONS = [
  'Dhanmondi',
  'Mohakhali',
  'Mogbazar',
  'Banani',
  'Khamarbari',
  'Gulshan',
  'Uttara',
  'Mirpur',
  'Motijheel',
  'Other',
];

const TryAI = () => {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([]);
  const [typing, setTyping] = useState(false);
  const [askedConfirmation, setAskedConfirmation] = useState(false);
  const [awaitingLocation, setAwaitingLocation] = useState(false);

  const inputRef = useRef(null);

  const focusInput = () => {
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Remove last bot message (go back)
  const handlePrevious = () => {
    setConversation((prev) => {
      const lastBotIndex = [...prev].reverse().findIndex((m) => m.role === 'bot');
      if (lastBotIndex === -1) return prev;
      const indexToRemove = prev.length - 1 - lastBotIndex;
      const newConv = [...prev];
      newConv.splice(indexToRemove, 1);
      return newConv;
    });
    setAskedConfirmation(false);
    setAwaitingLocation(false);
    focusInput();
  };

  // Clear all conversation
  const handleClearAll = () => {
    setConversation([]);
    setAskedConfirmation(false);
    setAwaitingLocation(false);
    focusInput();
  };

  const handleSend = () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput) return;

    setConversation((prev) => [...prev, { role: 'user', text: trimmedInput }]);
    setInputText('');
    setTyping(true);

    const lowerInput = trimmedInput.toLowerCase();

    // If awaiting location selection
    if (awaitingLocation) {
      setTimeout(() => {
        const keywords = SymptomData.map((s) => `• ${s.keyword}`).join('\n');
        setConversation((prev) => [
          ...prev,
          {
            role: 'bot',
            text: `Thanks for sharing your location (${trimmedInput}). Now, please tell me the nature of the emergency. You can use keywords like:\n${keywords}`
          }
        ]);
        setTyping(false);
        setAwaitingLocation(false);
        focusInput();
      }, 1000);
      return;
    }

    // Try to match symptom keyword
    const matched = SymptomData.find((s) => lowerInput.includes(s.keyword.toLowerCase()));

    if (matched) {
      const response = `🚨 Emergency Details 🚨\n\n` +
        `Problem: ${matched.name}\n` +
        `Response in 30 words: ${matched.shortResponse}\n\n` +
        `📍 Best Route: ${matched.route}\n` +
        `🚑 Nearest Ambulance Location: ${matched.location}\n` +
        `🛏️ Ambulance Type: ${matched.ambulanceType}\n` +
        `💰 Estimated Price: ${matched.price}\n` +
        `⏱️ Estimated Duration: ${matched.duration}\n` +
        `🌐 Service Available in: ${matched.availableIn}`;

      setTimeout(() => {
        setConversation((prev) => [...prev, { role: 'bot', text: response }]);
        setTyping(false);
        focusInput();
      }, 1000);
      setAskedConfirmation(false);
      return;
    }

    // No symptom matched
    if (!askedConfirmation) {
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          { role: 'bot', text: 'I couldn\'t classify the emergency. Do you need an ambulance? (yes/no)' }
        ]);
        setTyping(false);
        setAskedConfirmation(true);
        focusInput();
      }, 1000);
    } else {
      if (lowerInput === 'yes') {
        setTimeout(() => {
          setConversation((prev) => [
            ...prev,
            { role: 'bot', text: 'Please select your location from below:' }
          ]);
          setTyping(false);
          setAskedConfirmation(false);
          setAwaitingLocation(true);
          focusInput();
        }, 1000);
      } else if (lowerInput === 'no') {
        setTimeout(() => {
          setConversation((prev) => [
            ...prev,
            { role: 'bot', text: 'Okay. Please describe the emergency in more detail so I can assist you better.' }
          ]);
          setTyping(false);
          setAskedConfirmation(false);
          focusInput();
        }, 1000);
      } else {
        setTimeout(() => {
          setConversation((prev) => [
            ...prev,
            { role: 'bot', text: 'Please reply with "yes" if you want ambulance support or "no" to describe the emergency further.' }
          ]);
          setTyping(false);
          focusInput();
        }, 1000);
      }
    }
  };

  const handleLocationClick = (location) => {
    // When user clicks location chip
    setConversation((prev) => [...prev, { role: 'user', text: location }]);
    setTyping(true);

    setTimeout(() => {
      const keywords = SymptomData.map((s) => `• ${s.keyword}`).join('\n');
      setConversation((prev) => [
        ...prev,
        {
          role: 'bot',
          text: `Thanks for sharing your location (${location}). Now, please tell me the nature of the emergency. You can use keywords like:\n${keywords}`
        }
      ]);
      setTyping(false);
      setAwaitingLocation(false);
      focusInput();
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <Box sx={{ maxWidth: 720, margin: 'auto', mt: 4, px: 3, mb:5 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
        🧠 AI Emergency Assistant Chatbot
      </Typography>

      <Paper
        elevation={5}
        sx={{ height: 450, overflowY: 'auto', p: 3, mb: 3, borderRadius: 4, bgcolor: '#f5f7fa' }}
      >
        <List>
          {conversation.map((msg, idx) => (
            <ListItem
              key={idx}
              sx={{
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 1.5,
                  maxWidth: '75%',
                  bgcolor: msg.role === 'user' ? '#d0e8ff' : '#e8f0fe',
                  borderRadius: 2,
                }}
              >
                <ListItemText
                  primary={
                    msg.role === 'bot' ? (
                      <TypingLine text={msg.text} />
                    ) : (
                      <Typography align="right" sx={{ fontWeight: 'bold' }}>
                        {msg.text}
                      </Typography>
                    )
                  }
                />
              </Paper>
            </ListItem>
          ))}
          {typing && (
            <ListItem>
              <ListItemText primary={<TypingLine text="Typing..." />} />
            </ListItem>
          )}
        </List>

        {/* Location Chips */}
        {awaitingLocation && (
          <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {LOCATIONS.map((loc) => (
              <Chip
                key={loc}
                label={loc}
                onClick={() => handleLocationClick(loc)}
                clickable
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        )}
      </Paper>

      <TextField
        inputRef={inputRef}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        placeholder="Describe your emergency (e.g. chest pain in Dhanmondi)..."
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSend} color="primary">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" color="info" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="outlined" color="error" onClick={handleClearAll}>
          Clear All
        </Button>
      </Stack>
    </Box>
  );
};

export default TryAI;
