import { UserDetails } from "../../types";
import { createQueryString } from "../../utils/createQueryString";
import apiInstance from "../instance";

export const fetchUsers = async (params: {
  page: number;
  limit: number;
  details: UserDetails;
}) => {
  const response = await apiInstance.get(
    `/users?page=${params.page}&limit=${params.limit}&${createQueryString(
      params.details
    )}`
  );
  return response.data;
};

export const fetchUserById = async (id: string | undefined) => {
  const response = await apiInstance.get(`users/${id}`);
  return response.data;
};
