import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  min-width: 35rem;
  overflow-y: auto;
  max-height: 50rem;
`;

type MessageContainerProps = {
  title: string;
};

export const MessageContainer: React.FC<MessageContainerProps> = (
  props
): JSX.Element => {
  const count = React.Children.count(props.children);
  return (
    <Container>
      <Typography>{props.title}</Typography>
      <Typography>{count}</Typography>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {props.children}
      </Stack>
    </Container>
  );
};

export default MessageContainer;
