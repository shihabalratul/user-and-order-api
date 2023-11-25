/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from './user.interface';
import { User } from './user.model';

// Create a new user document in Mongodb
export const createUserDB = async (userData: TUser) => {
    const user = new User(userData);
    await user.save();

    return user;
};

// Querying all the user data from Database
export const getAllUsersFromDB = async () => {
    const users = await User.find({}).select({
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
        _id: 0,
    });
    return users;
};

// Qurying a single user with userId
export const getSingleUserFromDB = async (userId: number) => {
    if (await User.userExists(userId)) {
        const user = await User.findOne({ userId }).select({
            _id: 0,
            password: 0,
            orders: 0,
        });
        return user;
    } else {
        throw new Error('User not found!');
    }
};

// Update a single user document from the collection
export const updateSingleUserFromDB = async (userId: number, userData: any) => {
    if (await User.userExists(userId)) {
        await User.updateOne({ userId }, { ...userData });
        if (userData.userId) {
            userId = userData.userId;
        }

        const user = await getSingleUserFromDB(userId);
        return user;
    } else {
        throw new Error('User not found!');
    }
};

// Delete a single user document
export const deleteSingleUserFromDB = async (userId: number) => {
    if (await User.userExists(userId)) {
        const result = await User.deleteOne({ userId });
        if (result.acknowledged !== true) {
            throw new Error('Error Deleting data please try again');
        }
    } else {
        throw new Error('User not found!');
    }
};
