'use client';
import Modal from '@/components/Modal/Modal';
import ProfileModal from '@/components/Profile/ProfileModal';
import { useTasks } from '@/context/taskContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isEditing, profileModal } = useTasks();

  return (
    <div className="main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-auto">
      {isEditing && <Modal />}
      {profileModal && <ProfileModal />}
      {children}
    </div>
  );
};

export default MainLayout;
