import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: { title: string };
};

type UserListResponse = {
  total: number;
  users: UserType[]; 
};

const fetchUsers = async ({ pageParam = 0 }): Promise<UserListResponse> => {
  const res = await axios.get<UserListResponse>(
    `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`
  );
  return res.data;
};

export const useInfiniteUsers = () => {
    return useInfiniteQuery<
      UserListResponse, // raw API response type for each page
      Error, // error type
      UserListResponse, // returned page type
      string[], // queryKey type
      number // pageParam type
    >({
      queryKey: ["users"],
      queryFn: fetchUsers,
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        const nextSkip = pages.length * 10;
        return nextSkip < lastPage.total ? nextSkip : undefined;
      },
    });
  
};
