'use client';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useUserContext } from '@/context/userContext';

const SidebarProvider = () => {
  const userId = useUserContext().user._id;
  return <>{userId && <Sidebar />}</>;
};

export default SidebarProvider;
