import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

export interface BaseComponentProps extends ChildrenProps, ClassNameProps {}

export type ThemeVariant = 'primary' | 'secondary' | 'glass' | 'outline';