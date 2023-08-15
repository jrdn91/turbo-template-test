import * as _prisma_client_runtime from '@prisma/client/runtime';
import * as _prisma_client from '.prisma/client';
import { PrismaClient } from '@prisma/client';
export * from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}
declare const prisma: PrismaClient<_prisma_client.Prisma.PrismaClientOptions, never, _prisma_client.Prisma.RejectOnNotFound | _prisma_client.Prisma.RejectPerOperation | undefined, _prisma_client_runtime.DefaultArgs>;

export { prisma };
