import supertest from 'supertest';
import { Express } from 'express';
export declare class TestServer {
    app: Express;
    request: ReturnType<typeof supertest>;
    private mongoServer?;
    constructor();
    start(): Promise<void>;
    stop(): Promise<void>;
    cleanup(): Promise<void>;
}
//# sourceMappingURL=testSetup.d.ts.map