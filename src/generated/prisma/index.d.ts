
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WhatsAppNumber
 * 
 */
export type WhatsAppNumber = $Result.DefaultSelection<Prisma.$WhatsAppNumberPayload>
/**
 * Model WhatsAppSession
 * 
 */
export type WhatsAppSession = $Result.DefaultSelection<Prisma.$WhatsAppSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SessionStatus: {
  PENDING: 'PENDING',
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  PAIRING: 'PAIRING',
  ERROR: 'ERROR'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppNumber`: Exposes CRUD operations for the **WhatsAppNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppNumbers
    * const whatsAppNumbers = await prisma.whatsAppNumber.findMany()
    * ```
    */
  get whatsAppNumber(): Prisma.WhatsAppNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppSession`: Exposes CRUD operations for the **WhatsAppSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppSessions
    * const whatsAppSessions = await prisma.whatsAppSession.findMany()
    * ```
    */
  get whatsAppSession(): Prisma.WhatsAppSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    WhatsAppNumber: 'WhatsAppNumber',
    WhatsAppSession: 'WhatsAppSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "whatsAppNumber" | "whatsAppSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppNumber: {
        payload: Prisma.$WhatsAppNumberPayload<ExtArgs>
        fields: Prisma.WhatsAppNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>
          }
          findMany: {
            args: Prisma.WhatsAppNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>[]
          }
          create: {
            args: Prisma.WhatsAppNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>
          }
          createMany: {
            args: Prisma.WhatsAppNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsAppNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>
          }
          update: {
            args: Prisma.WhatsAppNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsAppNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppNumberPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppNumber>
          }
          groupBy: {
            args: Prisma.WhatsAppNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppNumberCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppNumberCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppSession: {
        payload: Prisma.$WhatsAppSessionPayload<ExtArgs>
        fields: Prisma.WhatsAppSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          findMany: {
            args: Prisma.WhatsAppSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>[]
          }
          create: {
            args: Prisma.WhatsAppSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          createMany: {
            args: Prisma.WhatsAppSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WhatsAppSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          update: {
            args: Prisma.WhatsAppSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsAppSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppSession>
          }
          groupBy: {
            args: Prisma.WhatsAppSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    whatsAppNumber?: WhatsAppNumberOmit
    whatsAppSession?: WhatsAppSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WhatsAppNumberCountOutputType
   */

  export type WhatsAppNumberCountOutputType = {
    sessions: number
  }

  export type WhatsAppNumberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | WhatsAppNumberCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * WhatsAppNumberCountOutputType without action
   */
  export type WhatsAppNumberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumberCountOutputType
     */
    select?: WhatsAppNumberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsAppNumberCountOutputType without action
   */
  export type WhatsAppNumberCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    email: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    email: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    email: string
    role: $Enums.UserRole
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      email: string
      role: $Enums.UserRole
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model WhatsAppNumber
   */

  export type AggregateWhatsAppNumber = {
    _count: WhatsAppNumberCountAggregateOutputType | null
    _avg: WhatsAppNumberAvgAggregateOutputType | null
    _sum: WhatsAppNumberSumAggregateOutputType | null
    _min: WhatsAppNumberMinAggregateOutputType | null
    _max: WhatsAppNumberMaxAggregateOutputType | null
  }

  export type WhatsAppNumberAvgAggregateOutputType = {
    id: number | null
  }

  export type WhatsAppNumberSumAggregateOutputType = {
    id: number | null
  }

  export type WhatsAppNumberMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WhatsAppNumberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WhatsAppNumberCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type WhatsAppNumberAvgAggregateInputType = {
    id?: true
  }

  export type WhatsAppNumberSumAggregateInputType = {
    id?: true
  }

  export type WhatsAppNumberMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
  }

  export type WhatsAppNumberMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
  }

  export type WhatsAppNumberCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type WhatsAppNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppNumber to aggregate.
     */
    where?: WhatsAppNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppNumbers to fetch.
     */
    orderBy?: WhatsAppNumberOrderByWithRelationInput | WhatsAppNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppNumbers
    **/
    _count?: true | WhatsAppNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsAppNumberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsAppNumberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppNumberMaxAggregateInputType
  }

  export type GetWhatsAppNumberAggregateType<T extends WhatsAppNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppNumber[P]>
      : GetScalarType<T[P], AggregateWhatsAppNumber[P]>
  }




  export type WhatsAppNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppNumberWhereInput
    orderBy?: WhatsAppNumberOrderByWithAggregationInput | WhatsAppNumberOrderByWithAggregationInput[]
    by: WhatsAppNumberScalarFieldEnum[] | WhatsAppNumberScalarFieldEnum
    having?: WhatsAppNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppNumberCountAggregateInputType | true
    _avg?: WhatsAppNumberAvgAggregateInputType
    _sum?: WhatsAppNumberSumAggregateInputType
    _min?: WhatsAppNumberMinAggregateInputType
    _max?: WhatsAppNumberMaxAggregateInputType
  }

  export type WhatsAppNumberGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    isActive: boolean
    createdAt: Date
    _count: WhatsAppNumberCountAggregateOutputType | null
    _avg: WhatsAppNumberAvgAggregateOutputType | null
    _sum: WhatsAppNumberSumAggregateOutputType | null
    _min: WhatsAppNumberMinAggregateOutputType | null
    _max: WhatsAppNumberMaxAggregateOutputType | null
  }

  type GetWhatsAppNumberGroupByPayload<T extends WhatsAppNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppNumberGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppNumberGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    sessions?: boolean | WhatsAppNumber$sessionsArgs<ExtArgs>
    _count?: boolean | WhatsAppNumberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppNumber"]>



  export type WhatsAppNumberSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type WhatsAppNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "isActive" | "createdAt", ExtArgs["result"]["whatsAppNumber"]>
  export type WhatsAppNumberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | WhatsAppNumber$sessionsArgs<ExtArgs>
    _count?: boolean | WhatsAppNumberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WhatsAppNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppNumber"
    objects: {
      sessions: Prisma.$WhatsAppSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["whatsAppNumber"]>
    composites: {}
  }

  type WhatsAppNumberGetPayload<S extends boolean | null | undefined | WhatsAppNumberDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppNumberPayload, S>

  type WhatsAppNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppNumberCountAggregateInputType | true
    }

  export interface WhatsAppNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppNumber'], meta: { name: 'WhatsAppNumber' } }
    /**
     * Find zero or one WhatsAppNumber that matches the filter.
     * @param {WhatsAppNumberFindUniqueArgs} args - Arguments to find a WhatsAppNumber
     * @example
     * // Get one WhatsAppNumber
     * const whatsAppNumber = await prisma.whatsAppNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppNumberFindUniqueArgs>(args: SelectSubset<T, WhatsAppNumberFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppNumberFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppNumber
     * @example
     * // Get one WhatsAppNumber
     * const whatsAppNumber = await prisma.whatsAppNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberFindFirstArgs} args - Arguments to find a WhatsAppNumber
     * @example
     * // Get one WhatsAppNumber
     * const whatsAppNumber = await prisma.whatsAppNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppNumberFindFirstArgs>(args?: SelectSubset<T, WhatsAppNumberFindFirstArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberFindFirstOrThrowArgs} args - Arguments to find a WhatsAppNumber
     * @example
     * // Get one WhatsAppNumber
     * const whatsAppNumber = await prisma.whatsAppNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppNumbers
     * const whatsAppNumbers = await prisma.whatsAppNumber.findMany()
     * 
     * // Get first 10 WhatsAppNumbers
     * const whatsAppNumbers = await prisma.whatsAppNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppNumberWithIdOnly = await prisma.whatsAppNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppNumberFindManyArgs>(args?: SelectSubset<T, WhatsAppNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppNumber.
     * @param {WhatsAppNumberCreateArgs} args - Arguments to create a WhatsAppNumber.
     * @example
     * // Create one WhatsAppNumber
     * const WhatsAppNumber = await prisma.whatsAppNumber.create({
     *   data: {
     *     // ... data to create a WhatsAppNumber
     *   }
     * })
     * 
     */
    create<T extends WhatsAppNumberCreateArgs>(args: SelectSubset<T, WhatsAppNumberCreateArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppNumbers.
     * @param {WhatsAppNumberCreateManyArgs} args - Arguments to create many WhatsAppNumbers.
     * @example
     * // Create many WhatsAppNumbers
     * const whatsAppNumber = await prisma.whatsAppNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppNumberCreateManyArgs>(args?: SelectSubset<T, WhatsAppNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WhatsAppNumber.
     * @param {WhatsAppNumberDeleteArgs} args - Arguments to delete one WhatsAppNumber.
     * @example
     * // Delete one WhatsAppNumber
     * const WhatsAppNumber = await prisma.whatsAppNumber.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppNumber
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppNumberDeleteArgs>(args: SelectSubset<T, WhatsAppNumberDeleteArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppNumber.
     * @param {WhatsAppNumberUpdateArgs} args - Arguments to update one WhatsAppNumber.
     * @example
     * // Update one WhatsAppNumber
     * const whatsAppNumber = await prisma.whatsAppNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppNumberUpdateArgs>(args: SelectSubset<T, WhatsAppNumberUpdateArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppNumbers.
     * @param {WhatsAppNumberDeleteManyArgs} args - Arguments to filter WhatsAppNumbers to delete.
     * @example
     * // Delete a few WhatsAppNumbers
     * const { count } = await prisma.whatsAppNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppNumberDeleteManyArgs>(args?: SelectSubset<T, WhatsAppNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppNumbers
     * const whatsAppNumber = await prisma.whatsAppNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppNumberUpdateManyArgs>(args: SelectSubset<T, WhatsAppNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsAppNumber.
     * @param {WhatsAppNumberUpsertArgs} args - Arguments to update or create a WhatsAppNumber.
     * @example
     * // Update or create a WhatsAppNumber
     * const whatsAppNumber = await prisma.whatsAppNumber.upsert({
     *   create: {
     *     // ... data to create a WhatsAppNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppNumber we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppNumberUpsertArgs>(args: SelectSubset<T, WhatsAppNumberUpsertArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberCountArgs} args - Arguments to filter WhatsAppNumbers to count.
     * @example
     * // Count the number of WhatsAppNumbers
     * const count = await prisma.whatsAppNumber.count({
     *   where: {
     *     // ... the filter for the WhatsAppNumbers we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppNumberCountArgs>(
      args?: Subset<T, WhatsAppNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppNumberAggregateArgs>(args: Subset<T, WhatsAppNumberAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppNumberAggregateType<T>>

    /**
     * Group by WhatsAppNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNumberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppNumberGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppNumber model
   */
  readonly fields: WhatsAppNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends WhatsAppNumber$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppNumber$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppNumber model
   */
  interface WhatsAppNumberFieldRefs {
    readonly id: FieldRef<"WhatsAppNumber", 'Int'>
    readonly name: FieldRef<"WhatsAppNumber", 'String'>
    readonly phoneNumber: FieldRef<"WhatsAppNumber", 'String'>
    readonly isActive: FieldRef<"WhatsAppNumber", 'Boolean'>
    readonly createdAt: FieldRef<"WhatsAppNumber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppNumber findUnique
   */
  export type WhatsAppNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppNumber to fetch.
     */
    where: WhatsAppNumberWhereUniqueInput
  }

  /**
   * WhatsAppNumber findUniqueOrThrow
   */
  export type WhatsAppNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppNumber to fetch.
     */
    where: WhatsAppNumberWhereUniqueInput
  }

  /**
   * WhatsAppNumber findFirst
   */
  export type WhatsAppNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppNumber to fetch.
     */
    where?: WhatsAppNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppNumbers to fetch.
     */
    orderBy?: WhatsAppNumberOrderByWithRelationInput | WhatsAppNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppNumbers.
     */
    cursor?: WhatsAppNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppNumbers.
     */
    distinct?: WhatsAppNumberScalarFieldEnum | WhatsAppNumberScalarFieldEnum[]
  }

  /**
   * WhatsAppNumber findFirstOrThrow
   */
  export type WhatsAppNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppNumber to fetch.
     */
    where?: WhatsAppNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppNumbers to fetch.
     */
    orderBy?: WhatsAppNumberOrderByWithRelationInput | WhatsAppNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppNumbers.
     */
    cursor?: WhatsAppNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppNumbers.
     */
    distinct?: WhatsAppNumberScalarFieldEnum | WhatsAppNumberScalarFieldEnum[]
  }

  /**
   * WhatsAppNumber findMany
   */
  export type WhatsAppNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppNumbers to fetch.
     */
    where?: WhatsAppNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppNumbers to fetch.
     */
    orderBy?: WhatsAppNumberOrderByWithRelationInput | WhatsAppNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppNumbers.
     */
    cursor?: WhatsAppNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppNumbers.
     */
    skip?: number
    distinct?: WhatsAppNumberScalarFieldEnum | WhatsAppNumberScalarFieldEnum[]
  }

  /**
   * WhatsAppNumber create
   */
  export type WhatsAppNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppNumber.
     */
    data: XOR<WhatsAppNumberCreateInput, WhatsAppNumberUncheckedCreateInput>
  }

  /**
   * WhatsAppNumber createMany
   */
  export type WhatsAppNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppNumbers.
     */
    data: WhatsAppNumberCreateManyInput | WhatsAppNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppNumber update
   */
  export type WhatsAppNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppNumber.
     */
    data: XOR<WhatsAppNumberUpdateInput, WhatsAppNumberUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppNumber to update.
     */
    where: WhatsAppNumberWhereUniqueInput
  }

  /**
   * WhatsAppNumber updateMany
   */
  export type WhatsAppNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppNumbers.
     */
    data: XOR<WhatsAppNumberUpdateManyMutationInput, WhatsAppNumberUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppNumbers to update
     */
    where?: WhatsAppNumberWhereInput
    /**
     * Limit how many WhatsAppNumbers to update.
     */
    limit?: number
  }

  /**
   * WhatsAppNumber upsert
   */
  export type WhatsAppNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppNumber to update in case it exists.
     */
    where: WhatsAppNumberWhereUniqueInput
    /**
     * In case the WhatsAppNumber found by the `where` argument doesn't exist, create a new WhatsAppNumber with this data.
     */
    create: XOR<WhatsAppNumberCreateInput, WhatsAppNumberUncheckedCreateInput>
    /**
     * In case the WhatsAppNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppNumberUpdateInput, WhatsAppNumberUncheckedUpdateInput>
  }

  /**
   * WhatsAppNumber delete
   */
  export type WhatsAppNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppNumber to delete.
     */
    where: WhatsAppNumberWhereUniqueInput
  }

  /**
   * WhatsAppNumber deleteMany
   */
  export type WhatsAppNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppNumbers to delete
     */
    where?: WhatsAppNumberWhereInput
    /**
     * Limit how many WhatsAppNumbers to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppNumber.sessions
   */
  export type WhatsAppNumber$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    where?: WhatsAppSessionWhereInput
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    cursor?: WhatsAppSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppNumber without action
   */
  export type WhatsAppNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNumber
     */
    select?: WhatsAppNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppNumber
     */
    omit?: WhatsAppNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppNumberInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppSession
   */

  export type AggregateWhatsAppSession = {
    _count: WhatsAppSessionCountAggregateOutputType | null
    _avg: WhatsAppSessionAvgAggregateOutputType | null
    _sum: WhatsAppSessionSumAggregateOutputType | null
    _min: WhatsAppSessionMinAggregateOutputType | null
    _max: WhatsAppSessionMaxAggregateOutputType | null
  }

  export type WhatsAppSessionAvgAggregateOutputType = {
    whatsappNumberId: number | null
  }

  export type WhatsAppSessionSumAggregateOutputType = {
    whatsappNumberId: number | null
  }

  export type WhatsAppSessionMinAggregateOutputType = {
    id: string | null
    whatsappNumberId: number | null
    qrCode: string | null
    status: $Enums.SessionStatus | null
    lastConnected: Date | null
    isActive: boolean | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppSessionMaxAggregateOutputType = {
    id: string | null
    whatsappNumberId: number | null
    qrCode: string | null
    status: $Enums.SessionStatus | null
    lastConnected: Date | null
    isActive: boolean | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppSessionCountAggregateOutputType = {
    id: number
    whatsappNumberId: number
    sessionData: number
    qrCode: number
    status: number
    lastConnected: number
    isActive: number
    connectionInfo: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsAppSessionAvgAggregateInputType = {
    whatsappNumberId?: true
  }

  export type WhatsAppSessionSumAggregateInputType = {
    whatsappNumberId?: true
  }

  export type WhatsAppSessionMinAggregateInputType = {
    id?: true
    whatsappNumberId?: true
    qrCode?: true
    status?: true
    lastConnected?: true
    isActive?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppSessionMaxAggregateInputType = {
    id?: true
    whatsappNumberId?: true
    qrCode?: true
    status?: true
    lastConnected?: true
    isActive?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppSessionCountAggregateInputType = {
    id?: true
    whatsappNumberId?: true
    sessionData?: true
    qrCode?: true
    status?: true
    lastConnected?: true
    isActive?: true
    connectionInfo?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsAppSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSession to aggregate.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppSessions
    **/
    _count?: true | WhatsAppSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsAppSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsAppSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppSessionMaxAggregateInputType
  }

  export type GetWhatsAppSessionAggregateType<T extends WhatsAppSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppSession[P]>
      : GetScalarType<T[P], AggregateWhatsAppSession[P]>
  }




  export type WhatsAppSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppSessionWhereInput
    orderBy?: WhatsAppSessionOrderByWithAggregationInput | WhatsAppSessionOrderByWithAggregationInput[]
    by: WhatsAppSessionScalarFieldEnum[] | WhatsAppSessionScalarFieldEnum
    having?: WhatsAppSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppSessionCountAggregateInputType | true
    _avg?: WhatsAppSessionAvgAggregateInputType
    _sum?: WhatsAppSessionSumAggregateInputType
    _min?: WhatsAppSessionMinAggregateInputType
    _max?: WhatsAppSessionMaxAggregateInputType
  }

  export type WhatsAppSessionGroupByOutputType = {
    id: string
    whatsappNumberId: number
    sessionData: JsonValue | null
    qrCode: string | null
    status: $Enums.SessionStatus
    lastConnected: Date | null
    isActive: boolean
    connectionInfo: JsonValue | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: WhatsAppSessionCountAggregateOutputType | null
    _avg: WhatsAppSessionAvgAggregateOutputType | null
    _sum: WhatsAppSessionSumAggregateOutputType | null
    _min: WhatsAppSessionMinAggregateOutputType | null
    _max: WhatsAppSessionMaxAggregateOutputType | null
  }

  type GetWhatsAppSessionGroupByPayload<T extends WhatsAppSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppSessionGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappNumberId?: boolean
    sessionData?: boolean
    qrCode?: boolean
    status?: boolean
    lastConnected?: boolean
    isActive?: boolean
    connectionInfo?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whatsappNumber?: boolean | WhatsAppNumberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppSession"]>



  export type WhatsAppSessionSelectScalar = {
    id?: boolean
    whatsappNumberId?: boolean
    sessionData?: boolean
    qrCode?: boolean
    status?: boolean
    lastConnected?: boolean
    isActive?: boolean
    connectionInfo?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsAppSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whatsappNumberId" | "sessionData" | "qrCode" | "status" | "lastConnected" | "isActive" | "connectionInfo" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppSession"]>
  export type WhatsAppSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsappNumber?: boolean | WhatsAppNumberDefaultArgs<ExtArgs>
  }

  export type $WhatsAppSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppSession"
    objects: {
      whatsappNumber: Prisma.$WhatsAppNumberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whatsappNumberId: number
      sessionData: Prisma.JsonValue | null
      qrCode: string | null
      status: $Enums.SessionStatus
      lastConnected: Date | null
      isActive: boolean
      connectionInfo: Prisma.JsonValue | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsAppSession"]>
    composites: {}
  }

  type WhatsAppSessionGetPayload<S extends boolean | null | undefined | WhatsAppSessionDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppSessionPayload, S>

  type WhatsAppSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppSessionCountAggregateInputType | true
    }

  export interface WhatsAppSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppSession'], meta: { name: 'WhatsAppSession' } }
    /**
     * Find zero or one WhatsAppSession that matches the filter.
     * @param {WhatsAppSessionFindUniqueArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppSessionFindUniqueArgs>(args: SelectSubset<T, WhatsAppSessionFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppSessionFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindFirstArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppSessionFindFirstArgs>(args?: SelectSubset<T, WhatsAppSessionFindFirstArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindFirstOrThrowArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppSessions
     * const whatsAppSessions = await prisma.whatsAppSession.findMany()
     * 
     * // Get first 10 WhatsAppSessions
     * const whatsAppSessions = await prisma.whatsAppSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppSessionWithIdOnly = await prisma.whatsAppSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppSessionFindManyArgs>(args?: SelectSubset<T, WhatsAppSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppSession.
     * @param {WhatsAppSessionCreateArgs} args - Arguments to create a WhatsAppSession.
     * @example
     * // Create one WhatsAppSession
     * const WhatsAppSession = await prisma.whatsAppSession.create({
     *   data: {
     *     // ... data to create a WhatsAppSession
     *   }
     * })
     * 
     */
    create<T extends WhatsAppSessionCreateArgs>(args: SelectSubset<T, WhatsAppSessionCreateArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppSessions.
     * @param {WhatsAppSessionCreateManyArgs} args - Arguments to create many WhatsAppSessions.
     * @example
     * // Create many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppSessionCreateManyArgs>(args?: SelectSubset<T, WhatsAppSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WhatsAppSession.
     * @param {WhatsAppSessionDeleteArgs} args - Arguments to delete one WhatsAppSession.
     * @example
     * // Delete one WhatsAppSession
     * const WhatsAppSession = await prisma.whatsAppSession.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppSession
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppSessionDeleteArgs>(args: SelectSubset<T, WhatsAppSessionDeleteArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppSession.
     * @param {WhatsAppSessionUpdateArgs} args - Arguments to update one WhatsAppSession.
     * @example
     * // Update one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppSessionUpdateArgs>(args: SelectSubset<T, WhatsAppSessionUpdateArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppSessions.
     * @param {WhatsAppSessionDeleteManyArgs} args - Arguments to filter WhatsAppSessions to delete.
     * @example
     * // Delete a few WhatsAppSessions
     * const { count } = await prisma.whatsAppSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppSessionDeleteManyArgs>(args?: SelectSubset<T, WhatsAppSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppSessionUpdateManyArgs>(args: SelectSubset<T, WhatsAppSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsAppSession.
     * @param {WhatsAppSessionUpsertArgs} args - Arguments to update or create a WhatsAppSession.
     * @example
     * // Update or create a WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.upsert({
     *   create: {
     *     // ... data to create a WhatsAppSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppSession we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppSessionUpsertArgs>(args: SelectSubset<T, WhatsAppSessionUpsertArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionCountArgs} args - Arguments to filter WhatsAppSessions to count.
     * @example
     * // Count the number of WhatsAppSessions
     * const count = await prisma.whatsAppSession.count({
     *   where: {
     *     // ... the filter for the WhatsAppSessions we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppSessionCountArgs>(
      args?: Subset<T, WhatsAppSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsAppSessionAggregateArgs>(args: Subset<T, WhatsAppSessionAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppSessionAggregateType<T>>

    /**
     * Group by WhatsAppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsAppSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppSessionGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsAppSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppSession model
   */
  readonly fields: WhatsAppSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whatsappNumber<T extends WhatsAppNumberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppNumberDefaultArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsAppSession model
   */
  interface WhatsAppSessionFieldRefs {
    readonly id: FieldRef<"WhatsAppSession", 'String'>
    readonly whatsappNumberId: FieldRef<"WhatsAppSession", 'Int'>
    readonly sessionData: FieldRef<"WhatsAppSession", 'Json'>
    readonly qrCode: FieldRef<"WhatsAppSession", 'String'>
    readonly status: FieldRef<"WhatsAppSession", 'SessionStatus'>
    readonly lastConnected: FieldRef<"WhatsAppSession", 'DateTime'>
    readonly isActive: FieldRef<"WhatsAppSession", 'Boolean'>
    readonly connectionInfo: FieldRef<"WhatsAppSession", 'Json'>
    readonly errorMessage: FieldRef<"WhatsAppSession", 'String'>
    readonly createdAt: FieldRef<"WhatsAppSession", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsAppSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppSession findUnique
   */
  export type WhatsAppSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession findUniqueOrThrow
   */
  export type WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession findFirst
   */
  export type WhatsAppSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSessions.
     */
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession findFirstOrThrow
   */
  export type WhatsAppSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSessions.
     */
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession findMany
   */
  export type WhatsAppSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSessions to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession create
   */
  export type WhatsAppSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppSession.
     */
    data: XOR<WhatsAppSessionCreateInput, WhatsAppSessionUncheckedCreateInput>
  }

  /**
   * WhatsAppSession createMany
   */
  export type WhatsAppSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppSessions.
     */
    data: WhatsAppSessionCreateManyInput | WhatsAppSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppSession update
   */
  export type WhatsAppSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppSession.
     */
    data: XOR<WhatsAppSessionUpdateInput, WhatsAppSessionUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppSession to update.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession updateMany
   */
  export type WhatsAppSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppSessions.
     */
    data: XOR<WhatsAppSessionUpdateManyMutationInput, WhatsAppSessionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppSessions to update
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to update.
     */
    limit?: number
  }

  /**
   * WhatsAppSession upsert
   */
  export type WhatsAppSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppSession to update in case it exists.
     */
    where: WhatsAppSessionWhereUniqueInput
    /**
     * In case the WhatsAppSession found by the `where` argument doesn't exist, create a new WhatsAppSession with this data.
     */
    create: XOR<WhatsAppSessionCreateInput, WhatsAppSessionUncheckedCreateInput>
    /**
     * In case the WhatsAppSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppSessionUpdateInput, WhatsAppSessionUncheckedUpdateInput>
  }

  /**
   * WhatsAppSession delete
   */
  export type WhatsAppSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppSession to delete.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession deleteMany
   */
  export type WhatsAppSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSessions to delete
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppSession without action
   */
  export type WhatsAppSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WhatsAppNumberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type WhatsAppNumberScalarFieldEnum = (typeof WhatsAppNumberScalarFieldEnum)[keyof typeof WhatsAppNumberScalarFieldEnum]


  export const WhatsAppSessionScalarFieldEnum: {
    id: 'id',
    whatsappNumberId: 'whatsappNumberId',
    sessionData: 'sessionData',
    qrCode: 'qrCode',
    status: 'status',
    lastConnected: 'lastConnected',
    isActive: 'isActive',
    connectionInfo: 'connectionInfo',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsAppSessionScalarFieldEnum = (typeof WhatsAppSessionScalarFieldEnum)[keyof typeof WhatsAppSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const WhatsAppNumberOrderByRelevanceFieldEnum: {
    name: 'name',
    phoneNumber: 'phoneNumber'
  };

  export type WhatsAppNumberOrderByRelevanceFieldEnum = (typeof WhatsAppNumberOrderByRelevanceFieldEnum)[keyof typeof WhatsAppNumberOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const WhatsAppSessionOrderByRelevanceFieldEnum: {
    id: 'id',
    qrCode: 'qrCode',
    errorMessage: 'errorMessage'
  };

  export type WhatsAppSessionOrderByRelevanceFieldEnum = (typeof WhatsAppSessionOrderByRelevanceFieldEnum)[keyof typeof WhatsAppSessionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WhatsAppNumberWhereInput = {
    AND?: WhatsAppNumberWhereInput | WhatsAppNumberWhereInput[]
    OR?: WhatsAppNumberWhereInput[]
    NOT?: WhatsAppNumberWhereInput | WhatsAppNumberWhereInput[]
    id?: IntFilter<"WhatsAppNumber"> | number
    name?: StringFilter<"WhatsAppNumber"> | string
    phoneNumber?: StringFilter<"WhatsAppNumber"> | string
    isActive?: BoolFilter<"WhatsAppNumber"> | boolean
    createdAt?: DateTimeFilter<"WhatsAppNumber"> | Date | string
    sessions?: WhatsAppSessionListRelationFilter
  }

  export type WhatsAppNumberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    sessions?: WhatsAppSessionOrderByRelationAggregateInput
    _relevance?: WhatsAppNumberOrderByRelevanceInput
  }

  export type WhatsAppNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phoneNumber?: string
    AND?: WhatsAppNumberWhereInput | WhatsAppNumberWhereInput[]
    OR?: WhatsAppNumberWhereInput[]
    NOT?: WhatsAppNumberWhereInput | WhatsAppNumberWhereInput[]
    name?: StringFilter<"WhatsAppNumber"> | string
    isActive?: BoolFilter<"WhatsAppNumber"> | boolean
    createdAt?: DateTimeFilter<"WhatsAppNumber"> | Date | string
    sessions?: WhatsAppSessionListRelationFilter
  }, "id" | "phoneNumber">

  export type WhatsAppNumberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: WhatsAppNumberCountOrderByAggregateInput
    _avg?: WhatsAppNumberAvgOrderByAggregateInput
    _max?: WhatsAppNumberMaxOrderByAggregateInput
    _min?: WhatsAppNumberMinOrderByAggregateInput
    _sum?: WhatsAppNumberSumOrderByAggregateInput
  }

  export type WhatsAppNumberScalarWhereWithAggregatesInput = {
    AND?: WhatsAppNumberScalarWhereWithAggregatesInput | WhatsAppNumberScalarWhereWithAggregatesInput[]
    OR?: WhatsAppNumberScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppNumberScalarWhereWithAggregatesInput | WhatsAppNumberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WhatsAppNumber"> | number
    name?: StringWithAggregatesFilter<"WhatsAppNumber"> | string
    phoneNumber?: StringWithAggregatesFilter<"WhatsAppNumber"> | string
    isActive?: BoolWithAggregatesFilter<"WhatsAppNumber"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppNumber"> | Date | string
  }

  export type WhatsAppSessionWhereInput = {
    AND?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    OR?: WhatsAppSessionWhereInput[]
    NOT?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    id?: StringFilter<"WhatsAppSession"> | string
    whatsappNumberId?: IntFilter<"WhatsAppSession"> | number
    sessionData?: JsonNullableFilter<"WhatsAppSession">
    qrCode?: StringNullableFilter<"WhatsAppSession"> | string | null
    status?: EnumSessionStatusFilter<"WhatsAppSession"> | $Enums.SessionStatus
    lastConnected?: DateTimeNullableFilter<"WhatsAppSession"> | Date | string | null
    isActive?: BoolFilter<"WhatsAppSession"> | boolean
    connectionInfo?: JsonNullableFilter<"WhatsAppSession">
    errorMessage?: StringNullableFilter<"WhatsAppSession"> | string | null
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    whatsappNumber?: XOR<WhatsAppNumberScalarRelationFilter, WhatsAppNumberWhereInput>
  }

  export type WhatsAppSessionOrderByWithRelationInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    sessionData?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    status?: SortOrder
    lastConnected?: SortOrderInput | SortOrder
    isActive?: SortOrder
    connectionInfo?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappNumber?: WhatsAppNumberOrderByWithRelationInput
    _relevance?: WhatsAppSessionOrderByRelevanceInput
  }

  export type WhatsAppSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    OR?: WhatsAppSessionWhereInput[]
    NOT?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    whatsappNumberId?: IntFilter<"WhatsAppSession"> | number
    sessionData?: JsonNullableFilter<"WhatsAppSession">
    qrCode?: StringNullableFilter<"WhatsAppSession"> | string | null
    status?: EnumSessionStatusFilter<"WhatsAppSession"> | $Enums.SessionStatus
    lastConnected?: DateTimeNullableFilter<"WhatsAppSession"> | Date | string | null
    isActive?: BoolFilter<"WhatsAppSession"> | boolean
    connectionInfo?: JsonNullableFilter<"WhatsAppSession">
    errorMessage?: StringNullableFilter<"WhatsAppSession"> | string | null
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    whatsappNumber?: XOR<WhatsAppNumberScalarRelationFilter, WhatsAppNumberWhereInput>
  }, "id">

  export type WhatsAppSessionOrderByWithAggregationInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    sessionData?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    status?: SortOrder
    lastConnected?: SortOrderInput | SortOrder
    isActive?: SortOrder
    connectionInfo?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsAppSessionCountOrderByAggregateInput
    _avg?: WhatsAppSessionAvgOrderByAggregateInput
    _max?: WhatsAppSessionMaxOrderByAggregateInput
    _min?: WhatsAppSessionMinOrderByAggregateInput
    _sum?: WhatsAppSessionSumOrderByAggregateInput
  }

  export type WhatsAppSessionScalarWhereWithAggregatesInput = {
    AND?: WhatsAppSessionScalarWhereWithAggregatesInput | WhatsAppSessionScalarWhereWithAggregatesInput[]
    OR?: WhatsAppSessionScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppSessionScalarWhereWithAggregatesInput | WhatsAppSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    whatsappNumberId?: IntWithAggregatesFilter<"WhatsAppSession"> | number
    sessionData?: JsonNullableWithAggregatesFilter<"WhatsAppSession">
    qrCode?: StringNullableWithAggregatesFilter<"WhatsAppSession"> | string | null
    status?: EnumSessionStatusWithAggregatesFilter<"WhatsAppSession"> | $Enums.SessionStatus
    lastConnected?: DateTimeNullableWithAggregatesFilter<"WhatsAppSession"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"WhatsAppSession"> | boolean
    connectionInfo?: JsonNullableWithAggregatesFilter<"WhatsAppSession">
    errorMessage?: StringNullableWithAggregatesFilter<"WhatsAppSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppSession"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    email: string
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    email: string
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    email: string
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppNumberCreateInput = {
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WhatsAppNumberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppNumberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionCreateInput = {
    id?: string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: string | null
    status?: $Enums.SessionStatus
    lastConnected?: Date | string | null
    isActive?: boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappNumber: WhatsAppNumberCreateNestedOneWithoutSessionsInput
  }

  export type WhatsAppSessionUncheckedCreateInput = {
    id?: string
    whatsappNumberId: number
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: string | null
    status?: $Enums.SessionStatus
    lastConnected?: Date | string | null
    isActive?: boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappNumber?: WhatsAppNumberUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type WhatsAppSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionCreateManyInput = {
    id?: string
    whatsappNumberId: number
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: string | null
    status?: $Enums.SessionStatus
    lastConnected?: Date | string | null
    isActive?: boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WhatsAppSessionListRelationFilter = {
    every?: WhatsAppSessionWhereInput
    some?: WhatsAppSessionWhereInput
    none?: WhatsAppSessionWhereInput
  }

  export type WhatsAppSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppNumberOrderByRelevanceInput = {
    fields: WhatsAppNumberOrderByRelevanceFieldEnum | WhatsAppNumberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsAppNumberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsAppNumberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WhatsAppNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsAppNumberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WhatsAppNumberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WhatsAppNumberScalarRelationFilter = {
    is?: WhatsAppNumberWhereInput
    isNot?: WhatsAppNumberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WhatsAppSessionOrderByRelevanceInput = {
    fields: WhatsAppSessionOrderByRelevanceFieldEnum | WhatsAppSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WhatsAppSessionCountOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    sessionData?: SortOrder
    qrCode?: SortOrder
    status?: SortOrder
    lastConnected?: SortOrder
    isActive?: SortOrder
    connectionInfo?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionAvgOrderByAggregateInput = {
    whatsappNumberId?: SortOrder
  }

  export type WhatsAppSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    qrCode?: SortOrder
    status?: SortOrder
    lastConnected?: SortOrder
    isActive?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionMinOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    qrCode?: SortOrder
    status?: SortOrder
    lastConnected?: SortOrder
    isActive?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionSumOrderByAggregateInput = {
    whatsappNumberId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WhatsAppSessionCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput> | WhatsAppSessionCreateWithoutWhatsappNumberInput[] | WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput | WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: WhatsAppSessionCreateManyWhatsappNumberInputEnvelope
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
  }

  export type WhatsAppSessionUncheckedCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput> | WhatsAppSessionCreateWithoutWhatsappNumberInput[] | WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput | WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: WhatsAppSessionCreateManyWhatsappNumberInputEnvelope
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WhatsAppSessionUpdateManyWithoutWhatsappNumberNestedInput = {
    create?: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput> | WhatsAppSessionCreateWithoutWhatsappNumberInput[] | WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput | WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput[]
    upsert?: WhatsAppSessionUpsertWithWhereUniqueWithoutWhatsappNumberInput | WhatsAppSessionUpsertWithWhereUniqueWithoutWhatsappNumberInput[]
    createMany?: WhatsAppSessionCreateManyWhatsappNumberInputEnvelope
    set?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    disconnect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    delete?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    update?: WhatsAppSessionUpdateWithWhereUniqueWithoutWhatsappNumberInput | WhatsAppSessionUpdateWithWhereUniqueWithoutWhatsappNumberInput[]
    updateMany?: WhatsAppSessionUpdateManyWithWhereWithoutWhatsappNumberInput | WhatsAppSessionUpdateManyWithWhereWithoutWhatsappNumberInput[]
    deleteMany?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
  }

  export type WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberNestedInput = {
    create?: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput> | WhatsAppSessionCreateWithoutWhatsappNumberInput[] | WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput | WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput[]
    upsert?: WhatsAppSessionUpsertWithWhereUniqueWithoutWhatsappNumberInput | WhatsAppSessionUpsertWithWhereUniqueWithoutWhatsappNumberInput[]
    createMany?: WhatsAppSessionCreateManyWhatsappNumberInputEnvelope
    set?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    disconnect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    delete?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
    update?: WhatsAppSessionUpdateWithWhereUniqueWithoutWhatsappNumberInput | WhatsAppSessionUpdateWithWhereUniqueWithoutWhatsappNumberInput[]
    updateMany?: WhatsAppSessionUpdateManyWithWhereWithoutWhatsappNumberInput | WhatsAppSessionUpdateManyWithWhereWithoutWhatsappNumberInput[]
    deleteMany?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
  }

  export type WhatsAppNumberCreateNestedOneWithoutSessionsInput = {
    create?: XOR<WhatsAppNumberCreateWithoutSessionsInput, WhatsAppNumberUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: WhatsAppNumberCreateOrConnectWithoutSessionsInput
    connect?: WhatsAppNumberWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WhatsAppNumberUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<WhatsAppNumberCreateWithoutSessionsInput, WhatsAppNumberUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: WhatsAppNumberCreateOrConnectWithoutSessionsInput
    upsert?: WhatsAppNumberUpsertWithoutSessionsInput
    connect?: WhatsAppNumberWhereUniqueInput
    update?: XOR<XOR<WhatsAppNumberUpdateToOneWithWhereWithoutSessionsInput, WhatsAppNumberUpdateWithoutSessionsInput>, WhatsAppNumberUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WhatsAppSessionCreateWithoutWhatsappNumberInput = {
    id?: string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: string | null
    status?: $Enums.SessionStatus
    lastConnected?: Date | string | null
    isActive?: boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput = {
    id?: string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: string | null
    status?: $Enums.SessionStatus
    lastConnected?: Date | string | null
    isActive?: boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput = {
    where: WhatsAppSessionWhereUniqueInput
    create: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput>
  }

  export type WhatsAppSessionCreateManyWhatsappNumberInputEnvelope = {
    data: WhatsAppSessionCreateManyWhatsappNumberInput | WhatsAppSessionCreateManyWhatsappNumberInput[]
    skipDuplicates?: boolean
  }

  export type WhatsAppSessionUpsertWithWhereUniqueWithoutWhatsappNumberInput = {
    where: WhatsAppSessionWhereUniqueInput
    update: XOR<WhatsAppSessionUpdateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedUpdateWithoutWhatsappNumberInput>
    create: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput>
  }

  export type WhatsAppSessionUpdateWithWhereUniqueWithoutWhatsappNumberInput = {
    where: WhatsAppSessionWhereUniqueInput
    data: XOR<WhatsAppSessionUpdateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedUpdateWithoutWhatsappNumberInput>
  }

  export type WhatsAppSessionUpdateManyWithWhereWithoutWhatsappNumberInput = {
    where: WhatsAppSessionScalarWhereInput
    data: XOR<WhatsAppSessionUpdateManyMutationInput, WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberInput>
  }

  export type WhatsAppSessionScalarWhereInput = {
    AND?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
    OR?: WhatsAppSessionScalarWhereInput[]
    NOT?: WhatsAppSessionScalarWhereInput | WhatsAppSessionScalarWhereInput[]
    id?: StringFilter<"WhatsAppSession"> | string
    whatsappNumberId?: IntFilter<"WhatsAppSession"> | number
    sessionData?: JsonNullableFilter<"WhatsAppSession">
    qrCode?: StringNullableFilter<"WhatsAppSession"> | string | null
    status?: EnumSessionStatusFilter<"WhatsAppSession"> | $Enums.SessionStatus
    lastConnected?: DateTimeNullableFilter<"WhatsAppSession"> | Date | string | null
    isActive?: BoolFilter<"WhatsAppSession"> | boolean
    connectionInfo?: JsonNullableFilter<"WhatsAppSession">
    errorMessage?: StringNullableFilter<"WhatsAppSession"> | string | null
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
  }

  export type WhatsAppNumberCreateWithoutSessionsInput = {
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WhatsAppNumberUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WhatsAppNumberCreateOrConnectWithoutSessionsInput = {
    where: WhatsAppNumberWhereUniqueInput
    create: XOR<WhatsAppNumberCreateWithoutSessionsInput, WhatsAppNumberUncheckedCreateWithoutSessionsInput>
  }

  export type WhatsAppNumberUpsertWithoutSessionsInput = {
    update: XOR<WhatsAppNumberUpdateWithoutSessionsInput, WhatsAppNumberUncheckedUpdateWithoutSessionsInput>
    create: XOR<WhatsAppNumberCreateWithoutSessionsInput, WhatsAppNumberUncheckedCreateWithoutSessionsInput>
    where?: WhatsAppNumberWhereInput
  }

  export type WhatsAppNumberUpdateToOneWithWhereWithoutSessionsInput = {
    where?: WhatsAppNumberWhereInput
    data: XOR<WhatsAppNumberUpdateWithoutSessionsInput, WhatsAppNumberUncheckedUpdateWithoutSessionsInput>
  }

  export type WhatsAppNumberUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppNumberUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionCreateManyWhatsappNumberInput = {
    id?: string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: string | null
    status?: $Enums.SessionStatus
    lastConnected?: Date | string | null
    isActive?: boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUpdateWithoutWhatsappNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionUncheckedUpdateWithoutWhatsappNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionData?: NullableJsonNullValueInput | InputJsonValue
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectionInfo?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}