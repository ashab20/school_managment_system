"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const UsersSeed_1 = __importDefault(require("./UsersSeed"));
const StudentSeed_1 = __importDefault(require("./StudentSeed"));
const runSeeder = (command, count) => __awaiter(void 0, void 0, void 0, function* () {
    if (command === "user") {
        yield (0, UsersSeed_1.default)(count);
    }
    else if (command === "student") {
        yield (0, StudentSeed_1.default)(count);
    }
    else {
        // Execute all seeds
        yield (0, UsersSeed_1.default)(count);
        yield (0, StudentSeed_1.default)(count);
    }
});
const [command, countArg] = process.argv.slice(2);
const count = parseInt(countArg);
if (isNaN(count)) {
    console.error("Invalid count. Please provide a valid number.");
    process.exit(1);
}
runSeeder(command, count)
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=index.js.map