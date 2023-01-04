export interface todoType {
  id: number;
  title: string;
  completed: boolean;
  date: Date;
  description: string;
}

export interface todoInput {
  Todo: string;
  description: string;
}
