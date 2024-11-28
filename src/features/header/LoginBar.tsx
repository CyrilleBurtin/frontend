import { Button } from '@/components/ui/button';
import { LoginModale } from '@/features/login/components/Modale';

const LoginBar = () => {
  return (
    <>
      <div className="flex gap-4">
        <LoginModale />
        <Button variant="outline">Enregistrement</Button>
      </div>
    </>
  );
};

export default LoginBar;
