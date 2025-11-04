import { IUser } from '../models/user.model';
import { Document } from 'mongoose';
export declare const findAllUsers: () => Promise<(import("mongoose").FlattenMaps<IUser> & Required<{
    _id: import("mongoose").FlattenMaps<unknown>;
}> & {
    __v: number;
})[]>;
export declare const findUserById: (id: string) => Promise<(import("mongoose").FlattenMaps<IUser> & Required<{
    _id: import("mongoose").FlattenMaps<unknown>;
}> & {
    __v: number;
}) | null>;
export declare const createUser: (payload: Partial<IUser>) => Promise<Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare const updateUser: (id: string, payload: Partial<IUser>) => Promise<(Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const deleteUser: (id: string) => Promise<(Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
//# sourceMappingURL=user.service.d.ts.map