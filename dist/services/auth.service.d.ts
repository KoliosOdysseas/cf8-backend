export declare const login: (username: string, password: string) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../models/user.model").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../models/user.model").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    token: string;
} | null>;
//# sourceMappingURL=auth.service.d.ts.map