export class User {
    constructor(
        public id?: number,
        public first_name?: string,
        public last_name?: string,
        public password?: string,
        public confirm_password ?: string,
        public email?:string,
        public terms_and_conditions?:boolean

    ) {}
}