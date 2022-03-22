export interface TaskFace {
  id: number;
  title: string;
  description: string;
  due_date: string;
  completed: boolean;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
