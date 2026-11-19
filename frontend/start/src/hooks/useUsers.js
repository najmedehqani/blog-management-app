
import { getAllUsersApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  const { data, isLoading:isLoadingUsers} = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
  });
 const { users } = data || {}
  return {users,isLoadingUsers};
}
