import { Group } from "./group";

export class User {
    username: string;
    password: string;
    active: boolean;
    roles: string;
    groups: Array<Group>;
    authdata?: string;
}