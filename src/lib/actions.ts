"use server";

import { wixClientServer } from "./wixClientServer";
export const updateUser = async (formData: FormData) => {
  const wixClient = await wixClientServer();

  const id = formData.get("id") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  try {
    const response = await wixClient.members.updateMember(id, {
      contact: {
        phones: [phone] || undefined,
      },
      loginEmail: email || undefined,
      profile: { nickname: username || undefined },
    });
  } catch (err) {
    console.log(err);
  }
};
