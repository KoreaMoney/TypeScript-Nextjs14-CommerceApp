import { wixClientServer } from "@/lib/wixClientServer";

const ProfilePage = async () => {
  const wixClient = wixClientServer();

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div>User</div>
      <div>Orders</div>
    </div>
  );
};

export default ProfilePage;
