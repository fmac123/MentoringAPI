export type Ok<T> = { type: 'OK', data: T };

export type Error = {type: 'ERROR', message: string};

export type Result<T> = Ok<T> | Error;