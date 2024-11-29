import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import UserRegistrationForm from '@/features/registration/component/UserRegistrationForm';

export default function RegistrationModale() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Inscription</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscription</DialogTitle>
          <DialogDescription>Inscriptrion</DialogDescription>
        </DialogHeader>
        <UserRegistrationForm />
        <DialogFooter>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
