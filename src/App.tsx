import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import generateMessage from "./Api";
import { MessageContainer } from "./containers/MessageContainer";
import { Priority, Message } from "./types";
import { MessageItem } from "./components/MessageItem";
import AppTopBar from "./components/AppTopBar";

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stopMessages, setStopMessages] = useState<boolean>(false);

  useEffect(() => {
    if (!stopMessages) {
      return generateMessage((message: Message) =>
        setMessages((oldMessages) => [...oldMessages, message])
      );
    }
  }, [setMessages, stopMessages]);

  const handleOnClearMessage = (message?: string) => {
    if (!message) {
      setMessages([]);
    } else {
      setMessages(messages.filter((msg) => msg.message !== message));
    }
  };

  const handleOnStop = (value: boolean) => {
    setStopMessages(value);
  };

  return (
    <div>
      <AppTopBar />
      <Grid container justifyContent="center" spacing={2} mt={10}>
        <Grid item>
          <Button
            onClick={() => handleOnStop(!stopMessages)}
            variant="contained"
          >
            {stopMessages ? "Start" : "Stop"}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOnClearMessage()}>
            Clear
          </Button>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Grid spacing={5} container justifyContent="center">
          <Grid item>
            <MessageContainer title="Error Type 1">
              {messages
                ?.filter((item) => item.priority === Priority.Error)
                .map?.((msg) => (
                  <MessageItem
                    {...msg}
                    key={msg?.message}
                    onClear={handleOnClearMessage}
                  >
                    {msg?.message}
                  </MessageItem>
                ))}
            </MessageContainer>
          </Grid>
          <Grid item>
            <MessageContainer title="Warning Type 2">
              {messages
                ?.filter((item) => item.priority === Priority.Warn)
                .map?.((msg) => (
                  <MessageItem
                    {...msg}
                    key={msg?.message}
                    onClear={handleOnClearMessage}
                  >
                    {msg?.message}
                  </MessageItem>
                ))}
            </MessageContainer>
          </Grid>
          <Grid item>
            <MessageContainer title="Info Type 3">
              {messages
                ?.filter((item) => item.priority === Priority.Info)
                .map?.((msg) => (
                  <MessageItem
                    {...msg}
                    key={msg?.message}
                    onClear={handleOnClearMessage}
                  >
                    {msg?.message}
                  </MessageItem>
                ))}
            </MessageContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
