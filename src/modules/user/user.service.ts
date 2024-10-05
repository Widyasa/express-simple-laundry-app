import {prisma} from "../../utils/prisma";

export const findUserCredential = async (email: string) => {
    const findUser = await prisma.users.findFirst({ where: { email:email } });
    if (!findUser) {
        return { success: false, message: 'user not found' };
    }
    return { success: true, user: findUser };
}
