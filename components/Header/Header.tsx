'use client';
import { useUserContext } from '@/context/userContext';
import Link from 'next/link';
import { Github, MoonStar, User } from 'lucide-react';
import { useTasks } from '@/context/taskContext';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { user } = useUserContext();
  const { activeTasks, openModalForAdd } = useTasks();

  const router = useRouter();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
      <div>
        <h1 className="text-lg font-medium">{userId ? `Welcome, ${name}!` : 'Welcome to Task Manager !'}</h1>
        <p className="text-sm">
          {userId ? (
            <>
              You have <span className="font-bold text-[#3aafae]">{activeTasks.length}</span>&nbsp;active tasks.
            </>
          ) : (
            'Please login or register to view your tasks.'
          )}
        </p>
      </div>

      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-8 py-3 bg-[#3aafae] text-white rounded-[50px]
          hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push('/login');
            }
          }}
        >
          {userId ? 'Add a new Task' : 'Login / Register'}
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <Github />
          </Link>
          <Link
            href="/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <MoonStar />
          </Link>
          <Link
            href="/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <User />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
