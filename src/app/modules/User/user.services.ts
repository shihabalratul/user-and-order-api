import { TUser } from './user.interface';
import { User } from './user.model';

// Create a new user document in Mongodb
export const createUserDB = async (userData: TUser) => {
    const user = new User(userData);
    await user.save();
    console.log(user);
    return user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
};
