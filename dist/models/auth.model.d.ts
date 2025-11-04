import { Types } from "mongoose";
export interface AuthPayload {
    username: string;
    email?: string;
    roles: Types.ObjectId[];
}
//# sourceMappingURL=auth.model.d.ts.map