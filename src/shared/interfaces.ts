import React from 'react';

export interface TodoType {
  title: string;
  contents: string;
  isDone: boolean;
  id: string;
}
export interface AddTodo {
  title: string;
  contents: string;
}
export interface DeleteTodo {
  id: string;
}
export interface SwitchTodo {
  isDone: boolean;
  id: string;
}

export interface HeaderProps {
  children: React.ReactNode;
}

export interface TodoListProps {
  isActive: boolean;
}

export interface TodoProps {
  todo: { title: string; contents: string; isDone: boolean; id: string };
}
