import LoginForm from '@/src/components/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login Page',
};
 
export default function LoginPage() {
  return (
    <main>
      <div>
        <LoginForm />
      </div>
    </main>
  );
}