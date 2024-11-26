import React from "react";

export type SingleUser = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };
  id: string;
} | null;

export type Users = SingleUser[] | never[];

export type UserDetails = {
  orgName?: string;
  username: string;
  email: string;
  createdAt?: string;
};
export interface UserParams {
  page: number;
  limit: number;
  details: UserDetails;
}

export interface ButtonProps {
  text: string;
  onClick: (e?: any) => void;
  type?: "button" | "submit";
  isDisabled?: boolean;
}

export interface DropdownMenuProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  options: { label: string; icon: string; onClick: () => void }[];
}

export interface filterDropdownProps {
  data: Users;
  isOpen: boolean;
  toggleDropdown: () => void;
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; limit: number }>
  >;
  details: UserDetails;
  setDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
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
  user?: any;
  loading: boolean;
}

export interface StatusPillProps {
  status: string;
}

export interface PaginationProps {
  pagination: {
    page: number;
    limit: number;
  };
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; limit: number }>
  >;
}
export interface TableProps extends PaginationProps {
  data: Users;
  thead: string[];
  loading: boolean;
  children: React.ReactNode;
  details: UserDetails;
  setDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
}

export interface TrProps {
  onClick?: (e?: any) => void;
  children: React.ReactNode;
}

export interface ShellNavigationProps {
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
