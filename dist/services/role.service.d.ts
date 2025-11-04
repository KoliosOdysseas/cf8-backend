import { IRole } from '../models/role.model';
export declare const findAllRoles: () => Promise<(import("mongoose").FlattenMaps<IRole> & Required<{
    _id: import("mongoose").FlattenMaps<unknown>;
}> & {
    __v: number;
})[]>;
export declare const createRole: (payload: Partial<IRole>) => Promise<import("mongoose").Document<unknown, {}, IRole, {}, {}> & IRole & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare const updateRole: (id: string, payload: Partial<IRole>) => Promise<(import("mongoose").Document<unknown, {}, IRole, {}, {}> & IRole & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const deleteRole: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IRole, {}, {}> & IRole & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
//# sourceMappingURL=role.service.d.ts.map