export enum Priority {
  Error,
  Warn,
  Info,
}

export const PriorityColor: any = {
    Error: '#F56236',
    Warn: '#FCE788',
    Info: '#88FCA3',
  };

export type MessageProps = {
  priority: Priority;
  message: string;
};
