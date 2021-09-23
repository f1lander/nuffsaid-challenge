import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import generateMessage, { Message } from "./Api";
import { MessageContainer } from "./containers/MessageContainer";
import { Priority } from "./types";
import { MessageItem } from "./components/MessageItem";
import AppTopBar from "./components/AppTopBar";

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  const handleOnClearMessage = (message: string) => {
    setMessages(messages.filter((msg) => msg.message !== message));
  };

  return (
    <div>
      <AppTopBar />
      <Box mt={10}>
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
