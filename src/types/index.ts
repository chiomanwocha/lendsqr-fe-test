import React from "react";

export interface ButtonProps {
  text: string;
  onClick: (e?: any) => void;
  type?: "button" | "submit";
  isDisabled?: boolean;
}

export interface DropdownMenuProps {
  options: { label: string; icon: string; onClick: () => void }[];
}

export interface filterDropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  pagination: { currentPage: number; itemsPerPage: number };
}

export interface InputProps {
  placeholder: string;
  type?: "email" | "text" | "password" | "number" | "date";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RenderIfProps {
  condition: boolean;
  children: string | React.ReactNode;
  elseNode?: string | React.ReactNode;
}

export interface CardProps {
  icon: string;
  title: string;
  value: string;
  loading: boolean;
}

export interface SectionCompProps {
  section: string;
  cols: number;
  loading: boolean;
  body: { title: string; content: string | undefined }[];
}

export interface DetailsProps {
  user: any;
  loading: boolean;
}

export interface StatusPillProps {
  status: string;
}

export interface TableProps {
  thead: string[];
  loading: boolean;
  children: React.ReactNode;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface TrProps {
  onClick?: (e?: any) => void;
  children: React.ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}
