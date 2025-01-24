import { Login } from '@/lib/services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useLogin() {
  const { mutate: login, isPending:isLoadingLogin } = useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      toast.success('Login successful');
      console.log(data)
      // Handle successful login (e.g., redirect)
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoadingLogin };
}
