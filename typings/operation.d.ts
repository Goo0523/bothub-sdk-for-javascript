/** Ignoring some properties in an interface */
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** Part partial */
declare type PartPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** To overwrite a read-only interface as writable */
declare type Writeable<T extends object> = { -readonly [P in keyof T]: T[P] };

/** Overwrite some property types in an interface */
declare type Overwrite<T extends object, K extends object> = Omit<T, Extract<keyof T, keyof K>> & K;

/** return the array type */
declare type GetArray<T> = T extends (any | (infer R)[]) ? R[] : never;

/** return the array type */
declare type GetArrayItem<T> = T extends (infer R)[] ? R : never;

/** any object */
declare type AnyObject<T = any> = { [key: string]: T };

/** get Promise type */
declare type GetPromise<T> = T extends Promise<infer U> ? Promise<U> : never;

/** get Promise item */
declare type GetPromiseType<T> = T extends Promise<infer U> ? U : never;
