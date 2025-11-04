import { Schema, Document, Types } from "mongoose";
export interface IPhone {
    type: string;
    number: string;
}
export interface IAddress {
    area?: string;
    street?: string;
    number?: string;
    po?: string;
    municipality?: string;
}
export interface IUser extends Document {
    username: string;
    password: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    address?: {
        area?: string;
        street?: string;
        number?: string;
        po?: string;
        municipality?: string;
    };
    phone?: IPhone[];
    roles: Types.ObjectId[];
}
declare const _default: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IUser, import("mongoose").Model<IUser, any, any, any, Document<unknown, any, IUser, any, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUser, Document<unknown, {}, import("mongoose").FlatRecord<IUser>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IUser> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=user.model.d.ts.map