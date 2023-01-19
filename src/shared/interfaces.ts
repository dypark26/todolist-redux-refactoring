import React from 'react';

export interface TodoType {
  title?: string;
  contents?: string;
  isDone?: boolean;
  id?: string;
}

export interface HeaderProps {
  children: React.ReactNode;
}

export interface TodoListProps {
  isActive: boolean;
}

export interface TodoProps {
  todo: { title?: string; contents?: string; isDone?: boolean; id?: string };
}
