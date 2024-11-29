import LoginModale from '@/features/login/components/LoginModale';
import RegistrationModale from '@/features/registration/component/RegistrationModale';

const LoginBar = () => {
  return (
    <>
      <div className="flex gap-4">
        <LoginModale />
        <RegistrationModale />
      </div>
    </>
  );
};

export default LoginBar;
