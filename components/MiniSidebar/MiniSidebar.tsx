'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, FileCheck, FileClock, TimerOff, Trash2 } from 'lucide-react';

const MiniSidebar = () => {
  const pathname = usePathname();

  const getStrokeColor = (link: string) => {
    return pathname === link ? '#3aafae' : '#71717a';
  };

  const navItems = [
    {
      icon: <LayoutGrid color={getStrokeColor('/')} />,
      title: 'All',
      link: '/',
    },
    {
      icon: <FileCheck color={getStrokeColor('/completed')} />,
      title: 'Completed',
      link: '/completed',
    },
    {
      icon: <FileClock color={getStrokeColor('/pending')} />,
      title: 'Pending',
      link: '/pending',
    },
    {
      icon: <TimerOff color={getStrokeColor('/overdue')} />,
      title: 'Overdue',
      link: '/overdue',
    },
  ];

  return (
    <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
      <div className="flex items-center justify-center h-[5rem]">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>

      <div className="mt-8 flex-1 flex flex-col items-center justify-between">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.link}>{item.icon}</Link>

              {/* Hover Tooltip */}
              <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-[1.5rem]">
          <button
            title="button"
            className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31]  p-2 rounded-full"
          >
            <Trash2 color="#EB4E31" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
