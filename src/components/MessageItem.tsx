import React from "react";
import styled from "@emotion/styled";
import { MessageProps, Priority, PriorityColor } from "../types";
import { Button, Grid, Typography } from "@mui/material";

// styled components
const Container = styled(Grid)<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  max-width: 30rem;
  min-width: 30rem;
  border-radius: 5px;
`;

export const MessageItem: React.FC<MessageProps> = (props): JSX.Element => {
  const { message, priority } = props;

  const bgColor = PriorityColor[Priority[priority]];

  return (
    <Container justifyContent="flex-end" direction="column" bg={bgColor}>
      <Typography>{message}</Typography>

      <Button>Clear</Button>
    </Container>
  );
};
