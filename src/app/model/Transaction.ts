import { Group } from "./group";
import { User } from "./user";

export class Transaction {
    id: number;
    amount: number;
    tgroup: Group;
    user: User;
    motif: string;
}