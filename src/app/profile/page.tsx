import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";
export const dynamic = "force-dynamic";
const ProfilePage = async () => {
  const wixClient = await wixClientServer();
  const user = await wixClient.members.getCurrentMember({
    fieldsets: [members.Set.FULL],
  });

  if (!user.member?.contactId) {
    return <div className="">Not logged in!</div>;
  }

  return (
    <div className="w-full md:w-1/2 justify-center items-center flex flex-col md:h-[calc(100vh-180px)] m-auto">
      <h1 className="text-2xl">Profile</h1>
      <form action={updateUser} className="mt-12 flex flex-col gap-4">
        <input type="text" hidden name="id" value={user.member.contactId} />
        <label className="text-sm text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          placeholder={user.member?.profile?.nickname || "Tom"}
          className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
        />
        <label className="text-sm text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder={(user.member?.contact?.phones && user.member?.contact.phones[0]) || "+82 10-1234-4879"}
          className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
        />
        <label className="text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder={user.member?.loginEmail || "korea@gmail.com"}
          className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
        />
        <UpdateButton />
      </form>
    </div>
  );
};

export default ProfilePage;
