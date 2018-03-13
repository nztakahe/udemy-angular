export class User {
// use public to auto asi
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string){}

}