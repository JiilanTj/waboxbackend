
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
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model WaNumberPermission
 * 
 */
export type WaNumberPermission = $Result.DefaultSelection<Prisma.$WaNumberPermissionPayload>
/**
 * Model ChatTemplate
 * 
 */
export type ChatTemplate = $Result.DefaultSelection<Prisma.$ChatTemplatePayload>

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


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT',
  LOCATION: 'LOCATION',
  CONTACT: 'CONTACT',
  STICKER: 'STICKER',
  SYSTEM: 'SYSTEM'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const MessageStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  READ: 'READ',
  FAILED: 'FAILED'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

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

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waNumberPermission`: Exposes CRUD operations for the **WaNumberPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaNumberPermissions
    * const waNumberPermissions = await prisma.waNumberPermission.findMany()
    * ```
    */
  get waNumberPermission(): Prisma.WaNumberPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatTemplate`: Exposes CRUD operations for the **ChatTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatTemplates
    * const chatTemplates = await prisma.chatTemplate.findMany()
    * ```
    */
  get chatTemplate(): Prisma.ChatTemplateDelegate<ExtArgs, ClientOptions>;
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
    WhatsAppSession: 'WhatsAppSession',
    Chat: 'Chat',
    Message: 'Message',
    WaNumberPermission: 'WaNumberPermission',
    ChatTemplate: 'ChatTemplate'
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
      modelProps: "user" | "whatsAppNumber" | "whatsAppSession" | "chat" | "message" | "waNumberPermission" | "chatTemplate"
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
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      WaNumberPermission: {
        payload: Prisma.$WaNumberPermissionPayload<ExtArgs>
        fields: Prisma.WaNumberPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaNumberPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaNumberPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>
          }
          findFirst: {
            args: Prisma.WaNumberPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaNumberPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>
          }
          findMany: {
            args: Prisma.WaNumberPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>[]
          }
          create: {
            args: Prisma.WaNumberPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>
          }
          createMany: {
            args: Prisma.WaNumberPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WaNumberPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>
          }
          update: {
            args: Prisma.WaNumberPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>
          }
          deleteMany: {
            args: Prisma.WaNumberPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaNumberPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaNumberPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaNumberPermissionPayload>
          }
          aggregate: {
            args: Prisma.WaNumberPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaNumberPermission>
          }
          groupBy: {
            args: Prisma.WaNumberPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaNumberPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaNumberPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<WaNumberPermissionCountAggregateOutputType> | number
          }
        }
      }
      ChatTemplate: {
        payload: Prisma.$ChatTemplatePayload<ExtArgs>
        fields: Prisma.ChatTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>
          }
          findFirst: {
            args: Prisma.ChatTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>
          }
          findMany: {
            args: Prisma.ChatTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>[]
          }
          create: {
            args: Prisma.ChatTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>
          }
          createMany: {
            args: Prisma.ChatTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>
          }
          update: {
            args: Prisma.ChatTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ChatTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatTemplatePayload>
          }
          aggregate: {
            args: Prisma.ChatTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatTemplate>
          }
          groupBy: {
            args: Prisma.ChatTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ChatTemplateCountAggregateOutputType> | number
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
    chat?: ChatOmit
    message?: MessageOmit
    waNumberPermission?: WaNumberPermissionOmit
    chatTemplate?: ChatTemplateOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    whatsappPermissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsappPermissions?: boolean | UserCountOutputTypeCountWhatsappPermissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhatsappPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaNumberPermissionWhereInput
  }


  /**
   * Count Type WhatsAppNumberCountOutputType
   */

  export type WhatsAppNumberCountOutputType = {
    sessions: number
    chats: number
    permissions: number
  }

  export type WhatsAppNumberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | WhatsAppNumberCountOutputTypeCountSessionsArgs
    chats?: boolean | WhatsAppNumberCountOutputTypeCountChatsArgs
    permissions?: boolean | WhatsAppNumberCountOutputTypeCountPermissionsArgs
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
   * WhatsAppNumberCountOutputType without action
   */
  export type WhatsAppNumberCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * WhatsAppNumberCountOutputType without action
   */
  export type WhatsAppNumberCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaNumberPermissionWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
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
    whatsappPermissions?: boolean | User$whatsappPermissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
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
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsappPermissions?: boolean | User$whatsappPermissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      whatsappPermissions: Prisma.$WaNumberPermissionPayload<ExtArgs>[]
    }
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
    whatsappPermissions<T extends User$whatsappPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$whatsappPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.whatsappPermissions
   */
  export type User$whatsappPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    where?: WaNumberPermissionWhereInput
    orderBy?: WaNumberPermissionOrderByWithRelationInput | WaNumberPermissionOrderByWithRelationInput[]
    cursor?: WaNumberPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaNumberPermissionScalarFieldEnum | WaNumberPermissionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    chats?: boolean | WhatsAppNumber$chatsArgs<ExtArgs>
    permissions?: boolean | WhatsAppNumber$permissionsArgs<ExtArgs>
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
    chats?: boolean | WhatsAppNumber$chatsArgs<ExtArgs>
    permissions?: boolean | WhatsAppNumber$permissionsArgs<ExtArgs>
    _count?: boolean | WhatsAppNumberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WhatsAppNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppNumber"
    objects: {
      sessions: Prisma.$WhatsAppSessionPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      permissions: Prisma.$WaNumberPermissionPayload<ExtArgs>[]
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
    chats<T extends WhatsAppNumber$chatsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppNumber$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends WhatsAppNumber$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppNumber$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * WhatsAppNumber.chats
   */
  export type WhatsAppNumber$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * WhatsAppNumber.permissions
   */
  export type WhatsAppNumber$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    where?: WaNumberPermissionWhereInput
    orderBy?: WaNumberPermissionOrderByWithRelationInput | WaNumberPermissionOrderByWithRelationInput[]
    cursor?: WaNumberPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaNumberPermissionScalarFieldEnum | WaNumberPermissionScalarFieldEnum[]
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
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    whatsappNumberId: number | null
    unreadCount: number | null
  }

  export type ChatSumAggregateOutputType = {
    whatsappNumberId: number | null
    unreadCount: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    whatsappNumberId: number | null
    contactJid: string | null
    contactName: string | null
    contactNumber: string | null
    isGroup: boolean | null
    groupName: string | null
    lastMessageId: string | null
    lastMessageText: string | null
    lastMessageTime: Date | null
    unreadCount: number | null
    isPinned: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    whatsappNumberId: number | null
    contactJid: string | null
    contactName: string | null
    contactNumber: string | null
    isGroup: boolean | null
    groupName: string | null
    lastMessageId: string | null
    lastMessageText: string | null
    lastMessageTime: Date | null
    unreadCount: number | null
    isPinned: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    whatsappNumberId: number
    contactJid: number
    contactName: number
    contactNumber: number
    isGroup: number
    groupName: number
    lastMessageId: number
    lastMessageText: number
    lastMessageTime: number
    unreadCount: number
    isPinned: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    whatsappNumberId?: true
    unreadCount?: true
  }

  export type ChatSumAggregateInputType = {
    whatsappNumberId?: true
    unreadCount?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    whatsappNumberId?: true
    contactJid?: true
    contactName?: true
    contactNumber?: true
    isGroup?: true
    groupName?: true
    lastMessageId?: true
    lastMessageText?: true
    lastMessageTime?: true
    unreadCount?: true
    isPinned?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    whatsappNumberId?: true
    contactJid?: true
    contactName?: true
    contactNumber?: true
    isGroup?: true
    groupName?: true
    lastMessageId?: true
    lastMessageText?: true
    lastMessageTime?: true
    unreadCount?: true
    isPinned?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    whatsappNumberId?: true
    contactJid?: true
    contactName?: true
    contactNumber?: true
    isGroup?: true
    groupName?: true
    lastMessageId?: true
    lastMessageText?: true
    lastMessageTime?: true
    unreadCount?: true
    isPinned?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    whatsappNumberId: number
    contactJid: string
    contactName: string | null
    contactNumber: string
    isGroup: boolean
    groupName: string | null
    lastMessageId: string | null
    lastMessageText: string | null
    lastMessageTime: Date | null
    unreadCount: number
    isPinned: boolean
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsappNumberId?: boolean
    contactJid?: boolean
    contactName?: boolean
    contactNumber?: boolean
    isGroup?: boolean
    groupName?: boolean
    lastMessageId?: boolean
    lastMessageText?: boolean
    lastMessageTime?: boolean
    unreadCount?: boolean
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whatsappNumber?: boolean | WhatsAppNumberDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>



  export type ChatSelectScalar = {
    id?: boolean
    whatsappNumberId?: boolean
    contactJid?: boolean
    contactName?: boolean
    contactNumber?: boolean
    isGroup?: boolean
    groupName?: boolean
    lastMessageId?: boolean
    lastMessageText?: boolean
    lastMessageTime?: boolean
    unreadCount?: boolean
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whatsappNumberId" | "contactJid" | "contactName" | "contactNumber" | "isGroup" | "groupName" | "lastMessageId" | "lastMessageText" | "lastMessageTime" | "unreadCount" | "isPinned" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsappNumber?: boolean | WhatsAppNumberDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      whatsappNumber: Prisma.$WhatsAppNumberPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whatsappNumberId: number
      contactJid: string
      contactName: string | null
      contactNumber: string
      isGroup: boolean
      groupName: string | null
      lastMessageId: string | null
      lastMessageText: string | null
      lastMessageTime: Date | null
      unreadCount: number
      isPinned: boolean
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whatsappNumber<T extends WhatsAppNumberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppNumberDefaultArgs<ExtArgs>>): Prisma__WhatsAppNumberClient<$Result.GetResult<Prisma.$WhatsAppNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly whatsappNumberId: FieldRef<"Chat", 'Int'>
    readonly contactJid: FieldRef<"Chat", 'String'>
    readonly contactName: FieldRef<"Chat", 'String'>
    readonly contactNumber: FieldRef<"Chat", 'String'>
    readonly isGroup: FieldRef<"Chat", 'Boolean'>
    readonly groupName: FieldRef<"Chat", 'String'>
    readonly lastMessageId: FieldRef<"Chat", 'String'>
    readonly lastMessageText: FieldRef<"Chat", 'String'>
    readonly lastMessageTime: FieldRef<"Chat", 'DateTime'>
    readonly unreadCount: FieldRef<"Chat", 'Int'>
    readonly isPinned: FieldRef<"Chat", 'Boolean'>
    readonly isArchived: FieldRef<"Chat", 'Boolean'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    mediaSize: number | null
  }

  export type MessageSumAggregateOutputType = {
    mediaSize: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    messageId: string | null
    fromJid: string | null
    fromNumber: string | null
    fromName: string | null
    toJid: string | null
    toNumber: string | null
    type: $Enums.MessageType | null
    content: string | null
    mediaUrl: string | null
    mediaType: string | null
    mediaSize: number | null
    mediaCaption: string | null
    quotedMessageId: string | null
    quotedContent: string | null
    status: $Enums.MessageStatus | null
    isFromMe: boolean | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    messageId: string | null
    fromJid: string | null
    fromNumber: string | null
    fromName: string | null
    toJid: string | null
    toNumber: string | null
    type: $Enums.MessageType | null
    content: string | null
    mediaUrl: string | null
    mediaType: string | null
    mediaSize: number | null
    mediaCaption: string | null
    quotedMessageId: string | null
    quotedContent: string | null
    status: $Enums.MessageStatus | null
    isFromMe: boolean | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    messageId: number
    fromJid: number
    fromNumber: number
    fromName: number
    toJid: number
    toNumber: number
    type: number
    content: number
    mediaUrl: number
    mediaType: number
    mediaSize: number
    mediaCaption: number
    quotedMessageId: number
    quotedContent: number
    status: number
    isFromMe: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    mediaSize?: true
  }

  export type MessageSumAggregateInputType = {
    mediaSize?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    messageId?: true
    fromJid?: true
    fromNumber?: true
    fromName?: true
    toJid?: true
    toNumber?: true
    type?: true
    content?: true
    mediaUrl?: true
    mediaType?: true
    mediaSize?: true
    mediaCaption?: true
    quotedMessageId?: true
    quotedContent?: true
    status?: true
    isFromMe?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    messageId?: true
    fromJid?: true
    fromNumber?: true
    fromName?: true
    toJid?: true
    toNumber?: true
    type?: true
    content?: true
    mediaUrl?: true
    mediaType?: true
    mediaSize?: true
    mediaCaption?: true
    quotedMessageId?: true
    quotedContent?: true
    status?: true
    isFromMe?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    messageId?: true
    fromJid?: true
    fromNumber?: true
    fromName?: true
    toJid?: true
    toNumber?: true
    type?: true
    content?: true
    mediaUrl?: true
    mediaType?: true
    mediaSize?: true
    mediaCaption?: true
    quotedMessageId?: true
    quotedContent?: true
    status?: true
    isFromMe?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    chatId: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName: string | null
    toJid: string
    toNumber: string
    type: $Enums.MessageType
    content: string | null
    mediaUrl: string | null
    mediaType: string | null
    mediaSize: number | null
    mediaCaption: string | null
    quotedMessageId: string | null
    quotedContent: string | null
    status: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageId?: boolean
    fromJid?: boolean
    fromNumber?: boolean
    fromName?: boolean
    toJid?: boolean
    toNumber?: boolean
    type?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    mediaSize?: boolean
    mediaCaption?: boolean
    quotedMessageId?: boolean
    quotedContent?: boolean
    status?: boolean
    isFromMe?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    messageId?: boolean
    fromJid?: boolean
    fromNumber?: boolean
    fromName?: boolean
    toJid?: boolean
    toNumber?: boolean
    type?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    mediaSize?: boolean
    mediaCaption?: boolean
    quotedMessageId?: boolean
    quotedContent?: boolean
    status?: boolean
    isFromMe?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "messageId" | "fromJid" | "fromNumber" | "fromName" | "toJid" | "toNumber" | "type" | "content" | "mediaUrl" | "mediaType" | "mediaSize" | "mediaCaption" | "quotedMessageId" | "quotedContent" | "status" | "isFromMe" | "timestamp" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      messageId: string
      fromJid: string
      fromNumber: string
      fromName: string | null
      toJid: string
      toNumber: string
      type: $Enums.MessageType
      content: string | null
      mediaUrl: string | null
      mediaType: string | null
      mediaSize: number | null
      mediaCaption: string | null
      quotedMessageId: string | null
      quotedContent: string | null
      status: $Enums.MessageStatus
      isFromMe: boolean
      timestamp: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly messageId: FieldRef<"Message", 'String'>
    readonly fromJid: FieldRef<"Message", 'String'>
    readonly fromNumber: FieldRef<"Message", 'String'>
    readonly fromName: FieldRef<"Message", 'String'>
    readonly toJid: FieldRef<"Message", 'String'>
    readonly toNumber: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly content: FieldRef<"Message", 'String'>
    readonly mediaUrl: FieldRef<"Message", 'String'>
    readonly mediaType: FieldRef<"Message", 'String'>
    readonly mediaSize: FieldRef<"Message", 'Int'>
    readonly mediaCaption: FieldRef<"Message", 'String'>
    readonly quotedMessageId: FieldRef<"Message", 'String'>
    readonly quotedContent: FieldRef<"Message", 'String'>
    readonly status: FieldRef<"Message", 'MessageStatus'>
    readonly isFromMe: FieldRef<"Message", 'Boolean'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model WaNumberPermission
   */

  export type AggregateWaNumberPermission = {
    _count: WaNumberPermissionCountAggregateOutputType | null
    _avg: WaNumberPermissionAvgAggregateOutputType | null
    _sum: WaNumberPermissionSumAggregateOutputType | null
    _min: WaNumberPermissionMinAggregateOutputType | null
    _max: WaNumberPermissionMaxAggregateOutputType | null
  }

  export type WaNumberPermissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    whatsappNumberId: number | null
  }

  export type WaNumberPermissionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    whatsappNumberId: number | null
  }

  export type WaNumberPermissionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    whatsappNumberId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaNumberPermissionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    whatsappNumberId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaNumberPermissionCountAggregateOutputType = {
    id: number
    userId: number
    whatsappNumberId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaNumberPermissionAvgAggregateInputType = {
    id?: true
    userId?: true
    whatsappNumberId?: true
  }

  export type WaNumberPermissionSumAggregateInputType = {
    id?: true
    userId?: true
    whatsappNumberId?: true
  }

  export type WaNumberPermissionMinAggregateInputType = {
    id?: true
    userId?: true
    whatsappNumberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaNumberPermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    whatsappNumberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaNumberPermissionCountAggregateInputType = {
    id?: true
    userId?: true
    whatsappNumberId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaNumberPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaNumberPermission to aggregate.
     */
    where?: WaNumberPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaNumberPermissions to fetch.
     */
    orderBy?: WaNumberPermissionOrderByWithRelationInput | WaNumberPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaNumberPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaNumberPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaNumberPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaNumberPermissions
    **/
    _count?: true | WaNumberPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaNumberPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaNumberPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaNumberPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaNumberPermissionMaxAggregateInputType
  }

  export type GetWaNumberPermissionAggregateType<T extends WaNumberPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateWaNumberPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaNumberPermission[P]>
      : GetScalarType<T[P], AggregateWaNumberPermission[P]>
  }




  export type WaNumberPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaNumberPermissionWhereInput
    orderBy?: WaNumberPermissionOrderByWithAggregationInput | WaNumberPermissionOrderByWithAggregationInput[]
    by: WaNumberPermissionScalarFieldEnum[] | WaNumberPermissionScalarFieldEnum
    having?: WaNumberPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaNumberPermissionCountAggregateInputType | true
    _avg?: WaNumberPermissionAvgAggregateInputType
    _sum?: WaNumberPermissionSumAggregateInputType
    _min?: WaNumberPermissionMinAggregateInputType
    _max?: WaNumberPermissionMaxAggregateInputType
  }

  export type WaNumberPermissionGroupByOutputType = {
    id: number
    userId: number
    whatsappNumberId: number
    createdAt: Date
    updatedAt: Date
    _count: WaNumberPermissionCountAggregateOutputType | null
    _avg: WaNumberPermissionAvgAggregateOutputType | null
    _sum: WaNumberPermissionSumAggregateOutputType | null
    _min: WaNumberPermissionMinAggregateOutputType | null
    _max: WaNumberPermissionMaxAggregateOutputType | null
  }

  type GetWaNumberPermissionGroupByPayload<T extends WaNumberPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaNumberPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaNumberPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaNumberPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], WaNumberPermissionGroupByOutputType[P]>
        }
      >
    >


  export type WaNumberPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    whatsappNumberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    whatsappNumber?: boolean | WhatsAppNumberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waNumberPermission"]>



  export type WaNumberPermissionSelectScalar = {
    id?: boolean
    userId?: boolean
    whatsappNumberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaNumberPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "whatsappNumberId" | "createdAt" | "updatedAt", ExtArgs["result"]["waNumberPermission"]>
  export type WaNumberPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    whatsappNumber?: boolean | WhatsAppNumberDefaultArgs<ExtArgs>
  }

  export type $WaNumberPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaNumberPermission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      whatsappNumber: Prisma.$WhatsAppNumberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      whatsappNumberId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waNumberPermission"]>
    composites: {}
  }

  type WaNumberPermissionGetPayload<S extends boolean | null | undefined | WaNumberPermissionDefaultArgs> = $Result.GetResult<Prisma.$WaNumberPermissionPayload, S>

  type WaNumberPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaNumberPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaNumberPermissionCountAggregateInputType | true
    }

  export interface WaNumberPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaNumberPermission'], meta: { name: 'WaNumberPermission' } }
    /**
     * Find zero or one WaNumberPermission that matches the filter.
     * @param {WaNumberPermissionFindUniqueArgs} args - Arguments to find a WaNumberPermission
     * @example
     * // Get one WaNumberPermission
     * const waNumberPermission = await prisma.waNumberPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaNumberPermissionFindUniqueArgs>(args: SelectSubset<T, WaNumberPermissionFindUniqueArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaNumberPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaNumberPermissionFindUniqueOrThrowArgs} args - Arguments to find a WaNumberPermission
     * @example
     * // Get one WaNumberPermission
     * const waNumberPermission = await prisma.waNumberPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaNumberPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, WaNumberPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaNumberPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionFindFirstArgs} args - Arguments to find a WaNumberPermission
     * @example
     * // Get one WaNumberPermission
     * const waNumberPermission = await prisma.waNumberPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaNumberPermissionFindFirstArgs>(args?: SelectSubset<T, WaNumberPermissionFindFirstArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaNumberPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionFindFirstOrThrowArgs} args - Arguments to find a WaNumberPermission
     * @example
     * // Get one WaNumberPermission
     * const waNumberPermission = await prisma.waNumberPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaNumberPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, WaNumberPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaNumberPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaNumberPermissions
     * const waNumberPermissions = await prisma.waNumberPermission.findMany()
     * 
     * // Get first 10 WaNumberPermissions
     * const waNumberPermissions = await prisma.waNumberPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waNumberPermissionWithIdOnly = await prisma.waNumberPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaNumberPermissionFindManyArgs>(args?: SelectSubset<T, WaNumberPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaNumberPermission.
     * @param {WaNumberPermissionCreateArgs} args - Arguments to create a WaNumberPermission.
     * @example
     * // Create one WaNumberPermission
     * const WaNumberPermission = await prisma.waNumberPermission.create({
     *   data: {
     *     // ... data to create a WaNumberPermission
     *   }
     * })
     * 
     */
    create<T extends WaNumberPermissionCreateArgs>(args: SelectSubset<T, WaNumberPermissionCreateArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaNumberPermissions.
     * @param {WaNumberPermissionCreateManyArgs} args - Arguments to create many WaNumberPermissions.
     * @example
     * // Create many WaNumberPermissions
     * const waNumberPermission = await prisma.waNumberPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaNumberPermissionCreateManyArgs>(args?: SelectSubset<T, WaNumberPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WaNumberPermission.
     * @param {WaNumberPermissionDeleteArgs} args - Arguments to delete one WaNumberPermission.
     * @example
     * // Delete one WaNumberPermission
     * const WaNumberPermission = await prisma.waNumberPermission.delete({
     *   where: {
     *     // ... filter to delete one WaNumberPermission
     *   }
     * })
     * 
     */
    delete<T extends WaNumberPermissionDeleteArgs>(args: SelectSubset<T, WaNumberPermissionDeleteArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaNumberPermission.
     * @param {WaNumberPermissionUpdateArgs} args - Arguments to update one WaNumberPermission.
     * @example
     * // Update one WaNumberPermission
     * const waNumberPermission = await prisma.waNumberPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaNumberPermissionUpdateArgs>(args: SelectSubset<T, WaNumberPermissionUpdateArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaNumberPermissions.
     * @param {WaNumberPermissionDeleteManyArgs} args - Arguments to filter WaNumberPermissions to delete.
     * @example
     * // Delete a few WaNumberPermissions
     * const { count } = await prisma.waNumberPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaNumberPermissionDeleteManyArgs>(args?: SelectSubset<T, WaNumberPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaNumberPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaNumberPermissions
     * const waNumberPermission = await prisma.waNumberPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaNumberPermissionUpdateManyArgs>(args: SelectSubset<T, WaNumberPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaNumberPermission.
     * @param {WaNumberPermissionUpsertArgs} args - Arguments to update or create a WaNumberPermission.
     * @example
     * // Update or create a WaNumberPermission
     * const waNumberPermission = await prisma.waNumberPermission.upsert({
     *   create: {
     *     // ... data to create a WaNumberPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaNumberPermission we want to update
     *   }
     * })
     */
    upsert<T extends WaNumberPermissionUpsertArgs>(args: SelectSubset<T, WaNumberPermissionUpsertArgs<ExtArgs>>): Prisma__WaNumberPermissionClient<$Result.GetResult<Prisma.$WaNumberPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaNumberPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionCountArgs} args - Arguments to filter WaNumberPermissions to count.
     * @example
     * // Count the number of WaNumberPermissions
     * const count = await prisma.waNumberPermission.count({
     *   where: {
     *     // ... the filter for the WaNumberPermissions we want to count
     *   }
     * })
    **/
    count<T extends WaNumberPermissionCountArgs>(
      args?: Subset<T, WaNumberPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaNumberPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaNumberPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaNumberPermissionAggregateArgs>(args: Subset<T, WaNumberPermissionAggregateArgs>): Prisma.PrismaPromise<GetWaNumberPermissionAggregateType<T>>

    /**
     * Group by WaNumberPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaNumberPermissionGroupByArgs} args - Group by arguments.
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
      T extends WaNumberPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaNumberPermissionGroupByArgs['orderBy'] }
        : { orderBy?: WaNumberPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaNumberPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaNumberPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaNumberPermission model
   */
  readonly fields: WaNumberPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaNumberPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaNumberPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaNumberPermission model
   */
  interface WaNumberPermissionFieldRefs {
    readonly id: FieldRef<"WaNumberPermission", 'Int'>
    readonly userId: FieldRef<"WaNumberPermission", 'Int'>
    readonly whatsappNumberId: FieldRef<"WaNumberPermission", 'Int'>
    readonly createdAt: FieldRef<"WaNumberPermission", 'DateTime'>
    readonly updatedAt: FieldRef<"WaNumberPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaNumberPermission findUnique
   */
  export type WaNumberPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * Filter, which WaNumberPermission to fetch.
     */
    where: WaNumberPermissionWhereUniqueInput
  }

  /**
   * WaNumberPermission findUniqueOrThrow
   */
  export type WaNumberPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * Filter, which WaNumberPermission to fetch.
     */
    where: WaNumberPermissionWhereUniqueInput
  }

  /**
   * WaNumberPermission findFirst
   */
  export type WaNumberPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * Filter, which WaNumberPermission to fetch.
     */
    where?: WaNumberPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaNumberPermissions to fetch.
     */
    orderBy?: WaNumberPermissionOrderByWithRelationInput | WaNumberPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaNumberPermissions.
     */
    cursor?: WaNumberPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaNumberPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaNumberPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaNumberPermissions.
     */
    distinct?: WaNumberPermissionScalarFieldEnum | WaNumberPermissionScalarFieldEnum[]
  }

  /**
   * WaNumberPermission findFirstOrThrow
   */
  export type WaNumberPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * Filter, which WaNumberPermission to fetch.
     */
    where?: WaNumberPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaNumberPermissions to fetch.
     */
    orderBy?: WaNumberPermissionOrderByWithRelationInput | WaNumberPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaNumberPermissions.
     */
    cursor?: WaNumberPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaNumberPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaNumberPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaNumberPermissions.
     */
    distinct?: WaNumberPermissionScalarFieldEnum | WaNumberPermissionScalarFieldEnum[]
  }

  /**
   * WaNumberPermission findMany
   */
  export type WaNumberPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * Filter, which WaNumberPermissions to fetch.
     */
    where?: WaNumberPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaNumberPermissions to fetch.
     */
    orderBy?: WaNumberPermissionOrderByWithRelationInput | WaNumberPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaNumberPermissions.
     */
    cursor?: WaNumberPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaNumberPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaNumberPermissions.
     */
    skip?: number
    distinct?: WaNumberPermissionScalarFieldEnum | WaNumberPermissionScalarFieldEnum[]
  }

  /**
   * WaNumberPermission create
   */
  export type WaNumberPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a WaNumberPermission.
     */
    data: XOR<WaNumberPermissionCreateInput, WaNumberPermissionUncheckedCreateInput>
  }

  /**
   * WaNumberPermission createMany
   */
  export type WaNumberPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaNumberPermissions.
     */
    data: WaNumberPermissionCreateManyInput | WaNumberPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaNumberPermission update
   */
  export type WaNumberPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a WaNumberPermission.
     */
    data: XOR<WaNumberPermissionUpdateInput, WaNumberPermissionUncheckedUpdateInput>
    /**
     * Choose, which WaNumberPermission to update.
     */
    where: WaNumberPermissionWhereUniqueInput
  }

  /**
   * WaNumberPermission updateMany
   */
  export type WaNumberPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaNumberPermissions.
     */
    data: XOR<WaNumberPermissionUpdateManyMutationInput, WaNumberPermissionUncheckedUpdateManyInput>
    /**
     * Filter which WaNumberPermissions to update
     */
    where?: WaNumberPermissionWhereInput
    /**
     * Limit how many WaNumberPermissions to update.
     */
    limit?: number
  }

  /**
   * WaNumberPermission upsert
   */
  export type WaNumberPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the WaNumberPermission to update in case it exists.
     */
    where: WaNumberPermissionWhereUniqueInput
    /**
     * In case the WaNumberPermission found by the `where` argument doesn't exist, create a new WaNumberPermission with this data.
     */
    create: XOR<WaNumberPermissionCreateInput, WaNumberPermissionUncheckedCreateInput>
    /**
     * In case the WaNumberPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaNumberPermissionUpdateInput, WaNumberPermissionUncheckedUpdateInput>
  }

  /**
   * WaNumberPermission delete
   */
  export type WaNumberPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
    /**
     * Filter which WaNumberPermission to delete.
     */
    where: WaNumberPermissionWhereUniqueInput
  }

  /**
   * WaNumberPermission deleteMany
   */
  export type WaNumberPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaNumberPermissions to delete
     */
    where?: WaNumberPermissionWhereInput
    /**
     * Limit how many WaNumberPermissions to delete.
     */
    limit?: number
  }

  /**
   * WaNumberPermission without action
   */
  export type WaNumberPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaNumberPermission
     */
    select?: WaNumberPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaNumberPermission
     */
    omit?: WaNumberPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaNumberPermissionInclude<ExtArgs> | null
  }


  /**
   * Model ChatTemplate
   */

  export type AggregateChatTemplate = {
    _count: ChatTemplateCountAggregateOutputType | null
    _avg: ChatTemplateAvgAggregateOutputType | null
    _sum: ChatTemplateSumAggregateOutputType | null
    _min: ChatTemplateMinAggregateOutputType | null
    _max: ChatTemplateMaxAggregateOutputType | null
  }

  export type ChatTemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatTemplateSumAggregateOutputType = {
    id: number | null
  }

  export type ChatTemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatTemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatTemplateCountAggregateOutputType = {
    id: number
    name: number
    content: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatTemplateAvgAggregateInputType = {
    id?: true
  }

  export type ChatTemplateSumAggregateInputType = {
    id?: true
  }

  export type ChatTemplateMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatTemplateCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatTemplate to aggregate.
     */
    where?: ChatTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTemplates to fetch.
     */
    orderBy?: ChatTemplateOrderByWithRelationInput | ChatTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatTemplates
    **/
    _count?: true | ChatTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatTemplateMaxAggregateInputType
  }

  export type GetChatTemplateAggregateType<T extends ChatTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateChatTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatTemplate[P]>
      : GetScalarType<T[P], AggregateChatTemplate[P]>
  }




  export type ChatTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatTemplateWhereInput
    orderBy?: ChatTemplateOrderByWithAggregationInput | ChatTemplateOrderByWithAggregationInput[]
    by: ChatTemplateScalarFieldEnum[] | ChatTemplateScalarFieldEnum
    having?: ChatTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatTemplateCountAggregateInputType | true
    _avg?: ChatTemplateAvgAggregateInputType
    _sum?: ChatTemplateSumAggregateInputType
    _min?: ChatTemplateMinAggregateInputType
    _max?: ChatTemplateMaxAggregateInputType
  }

  export type ChatTemplateGroupByOutputType = {
    id: number
    name: string
    content: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatTemplateCountAggregateOutputType | null
    _avg: ChatTemplateAvgAggregateOutputType | null
    _sum: ChatTemplateSumAggregateOutputType | null
    _min: ChatTemplateMinAggregateOutputType | null
    _max: ChatTemplateMaxAggregateOutputType | null
  }

  type GetChatTemplateGroupByPayload<T extends ChatTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ChatTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ChatTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatTemplate"]>



  export type ChatTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["chatTemplate"]>

  export type $ChatTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      content: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatTemplate"]>
    composites: {}
  }

  type ChatTemplateGetPayload<S extends boolean | null | undefined | ChatTemplateDefaultArgs> = $Result.GetResult<Prisma.$ChatTemplatePayload, S>

  type ChatTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatTemplateCountAggregateInputType | true
    }

  export interface ChatTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatTemplate'], meta: { name: 'ChatTemplate' } }
    /**
     * Find zero or one ChatTemplate that matches the filter.
     * @param {ChatTemplateFindUniqueArgs} args - Arguments to find a ChatTemplate
     * @example
     * // Get one ChatTemplate
     * const chatTemplate = await prisma.chatTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatTemplateFindUniqueArgs>(args: SelectSubset<T, ChatTemplateFindUniqueArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatTemplateFindUniqueOrThrowArgs} args - Arguments to find a ChatTemplate
     * @example
     * // Get one ChatTemplate
     * const chatTemplate = await prisma.chatTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateFindFirstArgs} args - Arguments to find a ChatTemplate
     * @example
     * // Get one ChatTemplate
     * const chatTemplate = await prisma.chatTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatTemplateFindFirstArgs>(args?: SelectSubset<T, ChatTemplateFindFirstArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateFindFirstOrThrowArgs} args - Arguments to find a ChatTemplate
     * @example
     * // Get one ChatTemplate
     * const chatTemplate = await prisma.chatTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatTemplates
     * const chatTemplates = await prisma.chatTemplate.findMany()
     * 
     * // Get first 10 ChatTemplates
     * const chatTemplates = await prisma.chatTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatTemplateWithIdOnly = await prisma.chatTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatTemplateFindManyArgs>(args?: SelectSubset<T, ChatTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatTemplate.
     * @param {ChatTemplateCreateArgs} args - Arguments to create a ChatTemplate.
     * @example
     * // Create one ChatTemplate
     * const ChatTemplate = await prisma.chatTemplate.create({
     *   data: {
     *     // ... data to create a ChatTemplate
     *   }
     * })
     * 
     */
    create<T extends ChatTemplateCreateArgs>(args: SelectSubset<T, ChatTemplateCreateArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatTemplates.
     * @param {ChatTemplateCreateManyArgs} args - Arguments to create many ChatTemplates.
     * @example
     * // Create many ChatTemplates
     * const chatTemplate = await prisma.chatTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatTemplateCreateManyArgs>(args?: SelectSubset<T, ChatTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatTemplate.
     * @param {ChatTemplateDeleteArgs} args - Arguments to delete one ChatTemplate.
     * @example
     * // Delete one ChatTemplate
     * const ChatTemplate = await prisma.chatTemplate.delete({
     *   where: {
     *     // ... filter to delete one ChatTemplate
     *   }
     * })
     * 
     */
    delete<T extends ChatTemplateDeleteArgs>(args: SelectSubset<T, ChatTemplateDeleteArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatTemplate.
     * @param {ChatTemplateUpdateArgs} args - Arguments to update one ChatTemplate.
     * @example
     * // Update one ChatTemplate
     * const chatTemplate = await prisma.chatTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatTemplateUpdateArgs>(args: SelectSubset<T, ChatTemplateUpdateArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatTemplates.
     * @param {ChatTemplateDeleteManyArgs} args - Arguments to filter ChatTemplates to delete.
     * @example
     * // Delete a few ChatTemplates
     * const { count } = await prisma.chatTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatTemplateDeleteManyArgs>(args?: SelectSubset<T, ChatTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatTemplates
     * const chatTemplate = await prisma.chatTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatTemplateUpdateManyArgs>(args: SelectSubset<T, ChatTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatTemplate.
     * @param {ChatTemplateUpsertArgs} args - Arguments to update or create a ChatTemplate.
     * @example
     * // Update or create a ChatTemplate
     * const chatTemplate = await prisma.chatTemplate.upsert({
     *   create: {
     *     // ... data to create a ChatTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ChatTemplateUpsertArgs>(args: SelectSubset<T, ChatTemplateUpsertArgs<ExtArgs>>): Prisma__ChatTemplateClient<$Result.GetResult<Prisma.$ChatTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateCountArgs} args - Arguments to filter ChatTemplates to count.
     * @example
     * // Count the number of ChatTemplates
     * const count = await prisma.chatTemplate.count({
     *   where: {
     *     // ... the filter for the ChatTemplates we want to count
     *   }
     * })
    **/
    count<T extends ChatTemplateCountArgs>(
      args?: Subset<T, ChatTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatTemplateAggregateArgs>(args: Subset<T, ChatTemplateAggregateArgs>): Prisma.PrismaPromise<GetChatTemplateAggregateType<T>>

    /**
     * Group by ChatTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatTemplateGroupByArgs} args - Group by arguments.
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
      T extends ChatTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ChatTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatTemplate model
   */
  readonly fields: ChatTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ChatTemplate model
   */
  interface ChatTemplateFieldRefs {
    readonly id: FieldRef<"ChatTemplate", 'Int'>
    readonly name: FieldRef<"ChatTemplate", 'String'>
    readonly content: FieldRef<"ChatTemplate", 'String'>
    readonly isActive: FieldRef<"ChatTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"ChatTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatTemplate findUnique
   */
  export type ChatTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ChatTemplate to fetch.
     */
    where: ChatTemplateWhereUniqueInput
  }

  /**
   * ChatTemplate findUniqueOrThrow
   */
  export type ChatTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ChatTemplate to fetch.
     */
    where: ChatTemplateWhereUniqueInput
  }

  /**
   * ChatTemplate findFirst
   */
  export type ChatTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ChatTemplate to fetch.
     */
    where?: ChatTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTemplates to fetch.
     */
    orderBy?: ChatTemplateOrderByWithRelationInput | ChatTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatTemplates.
     */
    cursor?: ChatTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatTemplates.
     */
    distinct?: ChatTemplateScalarFieldEnum | ChatTemplateScalarFieldEnum[]
  }

  /**
   * ChatTemplate findFirstOrThrow
   */
  export type ChatTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ChatTemplate to fetch.
     */
    where?: ChatTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTemplates to fetch.
     */
    orderBy?: ChatTemplateOrderByWithRelationInput | ChatTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatTemplates.
     */
    cursor?: ChatTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatTemplates.
     */
    distinct?: ChatTemplateScalarFieldEnum | ChatTemplateScalarFieldEnum[]
  }

  /**
   * ChatTemplate findMany
   */
  export type ChatTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ChatTemplates to fetch.
     */
    where?: ChatTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatTemplates to fetch.
     */
    orderBy?: ChatTemplateOrderByWithRelationInput | ChatTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatTemplates.
     */
    cursor?: ChatTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatTemplates.
     */
    skip?: number
    distinct?: ChatTemplateScalarFieldEnum | ChatTemplateScalarFieldEnum[]
  }

  /**
   * ChatTemplate create
   */
  export type ChatTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatTemplate.
     */
    data: XOR<ChatTemplateCreateInput, ChatTemplateUncheckedCreateInput>
  }

  /**
   * ChatTemplate createMany
   */
  export type ChatTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatTemplates.
     */
    data: ChatTemplateCreateManyInput | ChatTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatTemplate update
   */
  export type ChatTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatTemplate.
     */
    data: XOR<ChatTemplateUpdateInput, ChatTemplateUncheckedUpdateInput>
    /**
     * Choose, which ChatTemplate to update.
     */
    where: ChatTemplateWhereUniqueInput
  }

  /**
   * ChatTemplate updateMany
   */
  export type ChatTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatTemplates.
     */
    data: XOR<ChatTemplateUpdateManyMutationInput, ChatTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ChatTemplates to update
     */
    where?: ChatTemplateWhereInput
    /**
     * Limit how many ChatTemplates to update.
     */
    limit?: number
  }

  /**
   * ChatTemplate upsert
   */
  export type ChatTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatTemplate to update in case it exists.
     */
    where: ChatTemplateWhereUniqueInput
    /**
     * In case the ChatTemplate found by the `where` argument doesn't exist, create a new ChatTemplate with this data.
     */
    create: XOR<ChatTemplateCreateInput, ChatTemplateUncheckedCreateInput>
    /**
     * In case the ChatTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatTemplateUpdateInput, ChatTemplateUncheckedUpdateInput>
  }

  /**
   * ChatTemplate delete
   */
  export type ChatTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
    /**
     * Filter which ChatTemplate to delete.
     */
    where: ChatTemplateWhereUniqueInput
  }

  /**
   * ChatTemplate deleteMany
   */
  export type ChatTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatTemplates to delete
     */
    where?: ChatTemplateWhereInput
    /**
     * Limit how many ChatTemplates to delete.
     */
    limit?: number
  }

  /**
   * ChatTemplate without action
   */
  export type ChatTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatTemplate
     */
    select?: ChatTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatTemplate
     */
    omit?: ChatTemplateOmit<ExtArgs> | null
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


  export const ChatScalarFieldEnum: {
    id: 'id',
    whatsappNumberId: 'whatsappNumberId',
    contactJid: 'contactJid',
    contactName: 'contactName',
    contactNumber: 'contactNumber',
    isGroup: 'isGroup',
    groupName: 'groupName',
    lastMessageId: 'lastMessageId',
    lastMessageText: 'lastMessageText',
    lastMessageTime: 'lastMessageTime',
    unreadCount: 'unreadCount',
    isPinned: 'isPinned',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    messageId: 'messageId',
    fromJid: 'fromJid',
    fromNumber: 'fromNumber',
    fromName: 'fromName',
    toJid: 'toJid',
    toNumber: 'toNumber',
    type: 'type',
    content: 'content',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    mediaSize: 'mediaSize',
    mediaCaption: 'mediaCaption',
    quotedMessageId: 'quotedMessageId',
    quotedContent: 'quotedContent',
    status: 'status',
    isFromMe: 'isFromMe',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const WaNumberPermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    whatsappNumberId: 'whatsappNumberId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaNumberPermissionScalarFieldEnum = (typeof WaNumberPermissionScalarFieldEnum)[keyof typeof WaNumberPermissionScalarFieldEnum]


  export const ChatTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatTemplateScalarFieldEnum = (typeof ChatTemplateScalarFieldEnum)[keyof typeof ChatTemplateScalarFieldEnum]


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


  export const ChatOrderByRelevanceFieldEnum: {
    id: 'id',
    contactJid: 'contactJid',
    contactName: 'contactName',
    contactNumber: 'contactNumber',
    groupName: 'groupName',
    lastMessageId: 'lastMessageId',
    lastMessageText: 'lastMessageText'
  };

  export type ChatOrderByRelevanceFieldEnum = (typeof ChatOrderByRelevanceFieldEnum)[keyof typeof ChatOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    messageId: 'messageId',
    fromJid: 'fromJid',
    fromNumber: 'fromNumber',
    fromName: 'fromName',
    toJid: 'toJid',
    toNumber: 'toNumber',
    content: 'content',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    mediaCaption: 'mediaCaption',
    quotedMessageId: 'quotedMessageId',
    quotedContent: 'quotedContent'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


  export const ChatTemplateOrderByRelevanceFieldEnum: {
    name: 'name',
    content: 'content'
  };

  export type ChatTemplateOrderByRelevanceFieldEnum = (typeof ChatTemplateOrderByRelevanceFieldEnum)[keyof typeof ChatTemplateOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


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
    whatsappPermissions?: WaNumberPermissionListRelationFilter
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
    whatsappPermissions?: WaNumberPermissionOrderByRelationAggregateInput
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
    whatsappPermissions?: WaNumberPermissionListRelationFilter
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
    chats?: ChatListRelationFilter
    permissions?: WaNumberPermissionListRelationFilter
  }

  export type WhatsAppNumberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    sessions?: WhatsAppSessionOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    permissions?: WaNumberPermissionOrderByRelationAggregateInput
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
    chats?: ChatListRelationFilter
    permissions?: WaNumberPermissionListRelationFilter
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

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    whatsappNumberId?: IntFilter<"Chat"> | number
    contactJid?: StringFilter<"Chat"> | string
    contactName?: StringNullableFilter<"Chat"> | string | null
    contactNumber?: StringFilter<"Chat"> | string
    isGroup?: BoolFilter<"Chat"> | boolean
    groupName?: StringNullableFilter<"Chat"> | string | null
    lastMessageId?: StringNullableFilter<"Chat"> | string | null
    lastMessageText?: StringNullableFilter<"Chat"> | string | null
    lastMessageTime?: DateTimeNullableFilter<"Chat"> | Date | string | null
    unreadCount?: IntFilter<"Chat"> | number
    isPinned?: BoolFilter<"Chat"> | boolean
    isArchived?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    whatsappNumber?: XOR<WhatsAppNumberScalarRelationFilter, WhatsAppNumberWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    contactJid?: SortOrder
    contactName?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrderInput | SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastMessageText?: SortOrderInput | SortOrder
    lastMessageTime?: SortOrderInput | SortOrder
    unreadCount?: SortOrder
    isPinned?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappNumber?: WhatsAppNumberOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    _relevance?: ChatOrderByRelevanceInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    whatsappNumberId_contactJid?: ChatWhatsappNumberIdContactJidCompoundUniqueInput
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    whatsappNumberId?: IntFilter<"Chat"> | number
    contactJid?: StringFilter<"Chat"> | string
    contactName?: StringNullableFilter<"Chat"> | string | null
    contactNumber?: StringFilter<"Chat"> | string
    isGroup?: BoolFilter<"Chat"> | boolean
    groupName?: StringNullableFilter<"Chat"> | string | null
    lastMessageId?: StringNullableFilter<"Chat"> | string | null
    lastMessageText?: StringNullableFilter<"Chat"> | string | null
    lastMessageTime?: DateTimeNullableFilter<"Chat"> | Date | string | null
    unreadCount?: IntFilter<"Chat"> | number
    isPinned?: BoolFilter<"Chat"> | boolean
    isArchived?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    whatsappNumber?: XOR<WhatsAppNumberScalarRelationFilter, WhatsAppNumberWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "whatsappNumberId_contactJid">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    contactJid?: SortOrder
    contactName?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrderInput | SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastMessageText?: SortOrderInput | SortOrder
    lastMessageTime?: SortOrderInput | SortOrder
    unreadCount?: SortOrder
    isPinned?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    whatsappNumberId?: IntWithAggregatesFilter<"Chat"> | number
    contactJid?: StringWithAggregatesFilter<"Chat"> | string
    contactName?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Chat"> | string
    isGroup?: BoolWithAggregatesFilter<"Chat"> | boolean
    groupName?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    lastMessageId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    lastMessageText?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    lastMessageTime?: DateTimeNullableWithAggregatesFilter<"Chat"> | Date | string | null
    unreadCount?: IntWithAggregatesFilter<"Chat"> | number
    isPinned?: BoolWithAggregatesFilter<"Chat"> | boolean
    isArchived?: BoolWithAggregatesFilter<"Chat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    messageId?: StringFilter<"Message"> | string
    fromJid?: StringFilter<"Message"> | string
    fromNumber?: StringFilter<"Message"> | string
    fromName?: StringNullableFilter<"Message"> | string | null
    toJid?: StringFilter<"Message"> | string
    toNumber?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaType?: StringNullableFilter<"Message"> | string | null
    mediaSize?: IntNullableFilter<"Message"> | number | null
    mediaCaption?: StringNullableFilter<"Message"> | string | null
    quotedMessageId?: StringNullableFilter<"Message"> | string | null
    quotedContent?: StringNullableFilter<"Message"> | string | null
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    isFromMe?: BoolFilter<"Message"> | boolean
    timestamp?: DateTimeFilter<"Message"> | Date | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromJid?: SortOrder
    fromNumber?: SortOrder
    fromName?: SortOrderInput | SortOrder
    toJid?: SortOrder
    toNumber?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaType?: SortOrderInput | SortOrder
    mediaSize?: SortOrderInput | SortOrder
    mediaCaption?: SortOrderInput | SortOrder
    quotedMessageId?: SortOrderInput | SortOrder
    quotedContent?: SortOrderInput | SortOrder
    status?: SortOrder
    isFromMe?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_chatId?: MessageMessageIdChatIdCompoundUniqueInput
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: StringFilter<"Message"> | string
    messageId?: StringFilter<"Message"> | string
    fromJid?: StringFilter<"Message"> | string
    fromNumber?: StringFilter<"Message"> | string
    fromName?: StringNullableFilter<"Message"> | string | null
    toJid?: StringFilter<"Message"> | string
    toNumber?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaType?: StringNullableFilter<"Message"> | string | null
    mediaSize?: IntNullableFilter<"Message"> | number | null
    mediaCaption?: StringNullableFilter<"Message"> | string | null
    quotedMessageId?: StringNullableFilter<"Message"> | string | null
    quotedContent?: StringNullableFilter<"Message"> | string | null
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    isFromMe?: BoolFilter<"Message"> | boolean
    timestamp?: DateTimeFilter<"Message"> | Date | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id" | "messageId_chatId">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromJid?: SortOrder
    fromNumber?: SortOrder
    fromName?: SortOrderInput | SortOrder
    toJid?: SortOrder
    toNumber?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaType?: SortOrderInput | SortOrder
    mediaSize?: SortOrderInput | SortOrder
    mediaCaption?: SortOrderInput | SortOrder
    quotedMessageId?: SortOrderInput | SortOrder
    quotedContent?: SortOrderInput | SortOrder
    status?: SortOrder
    isFromMe?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    messageId?: StringWithAggregatesFilter<"Message"> | string
    fromJid?: StringWithAggregatesFilter<"Message"> | string
    fromNumber?: StringWithAggregatesFilter<"Message"> | string
    fromName?: StringNullableWithAggregatesFilter<"Message"> | string | null
    toJid?: StringWithAggregatesFilter<"Message"> | string
    toNumber?: StringWithAggregatesFilter<"Message"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaType?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaSize?: IntNullableWithAggregatesFilter<"Message"> | number | null
    mediaCaption?: StringNullableWithAggregatesFilter<"Message"> | string | null
    quotedMessageId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    quotedContent?: StringNullableWithAggregatesFilter<"Message"> | string | null
    status?: EnumMessageStatusWithAggregatesFilter<"Message"> | $Enums.MessageStatus
    isFromMe?: BoolWithAggregatesFilter<"Message"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type WaNumberPermissionWhereInput = {
    AND?: WaNumberPermissionWhereInput | WaNumberPermissionWhereInput[]
    OR?: WaNumberPermissionWhereInput[]
    NOT?: WaNumberPermissionWhereInput | WaNumberPermissionWhereInput[]
    id?: IntFilter<"WaNumberPermission"> | number
    userId?: IntFilter<"WaNumberPermission"> | number
    whatsappNumberId?: IntFilter<"WaNumberPermission"> | number
    createdAt?: DateTimeFilter<"WaNumberPermission"> | Date | string
    updatedAt?: DateTimeFilter<"WaNumberPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    whatsappNumber?: XOR<WhatsAppNumberScalarRelationFilter, WhatsAppNumberWhereInput>
  }

  export type WaNumberPermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    whatsappNumber?: WhatsAppNumberOrderByWithRelationInput
  }

  export type WaNumberPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_whatsappNumberId?: WaNumberPermissionUserIdWhatsappNumberIdCompoundUniqueInput
    AND?: WaNumberPermissionWhereInput | WaNumberPermissionWhereInput[]
    OR?: WaNumberPermissionWhereInput[]
    NOT?: WaNumberPermissionWhereInput | WaNumberPermissionWhereInput[]
    userId?: IntFilter<"WaNumberPermission"> | number
    whatsappNumberId?: IntFilter<"WaNumberPermission"> | number
    createdAt?: DateTimeFilter<"WaNumberPermission"> | Date | string
    updatedAt?: DateTimeFilter<"WaNumberPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    whatsappNumber?: XOR<WhatsAppNumberScalarRelationFilter, WhatsAppNumberWhereInput>
  }, "id" | "userId_whatsappNumberId">

  export type WaNumberPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaNumberPermissionCountOrderByAggregateInput
    _avg?: WaNumberPermissionAvgOrderByAggregateInput
    _max?: WaNumberPermissionMaxOrderByAggregateInput
    _min?: WaNumberPermissionMinOrderByAggregateInput
    _sum?: WaNumberPermissionSumOrderByAggregateInput
  }

  export type WaNumberPermissionScalarWhereWithAggregatesInput = {
    AND?: WaNumberPermissionScalarWhereWithAggregatesInput | WaNumberPermissionScalarWhereWithAggregatesInput[]
    OR?: WaNumberPermissionScalarWhereWithAggregatesInput[]
    NOT?: WaNumberPermissionScalarWhereWithAggregatesInput | WaNumberPermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaNumberPermission"> | number
    userId?: IntWithAggregatesFilter<"WaNumberPermission"> | number
    whatsappNumberId?: IntWithAggregatesFilter<"WaNumberPermission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WaNumberPermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WaNumberPermission"> | Date | string
  }

  export type ChatTemplateWhereInput = {
    AND?: ChatTemplateWhereInput | ChatTemplateWhereInput[]
    OR?: ChatTemplateWhereInput[]
    NOT?: ChatTemplateWhereInput | ChatTemplateWhereInput[]
    id?: IntFilter<"ChatTemplate"> | number
    name?: StringFilter<"ChatTemplate"> | string
    content?: StringFilter<"ChatTemplate"> | string
    isActive?: BoolFilter<"ChatTemplate"> | boolean
    createdAt?: DateTimeFilter<"ChatTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ChatTemplate"> | Date | string
  }

  export type ChatTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ChatTemplateOrderByRelevanceInput
  }

  export type ChatTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatTemplateWhereInput | ChatTemplateWhereInput[]
    OR?: ChatTemplateWhereInput[]
    NOT?: ChatTemplateWhereInput | ChatTemplateWhereInput[]
    name?: StringFilter<"ChatTemplate"> | string
    content?: StringFilter<"ChatTemplate"> | string
    isActive?: BoolFilter<"ChatTemplate"> | boolean
    createdAt?: DateTimeFilter<"ChatTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ChatTemplate"> | Date | string
  }, "id">

  export type ChatTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatTemplateCountOrderByAggregateInput
    _avg?: ChatTemplateAvgOrderByAggregateInput
    _max?: ChatTemplateMaxOrderByAggregateInput
    _min?: ChatTemplateMinOrderByAggregateInput
    _sum?: ChatTemplateSumOrderByAggregateInput
  }

  export type ChatTemplateScalarWhereWithAggregatesInput = {
    AND?: ChatTemplateScalarWhereWithAggregatesInput | ChatTemplateScalarWhereWithAggregatesInput[]
    OR?: ChatTemplateScalarWhereWithAggregatesInput[]
    NOT?: ChatTemplateScalarWhereWithAggregatesInput | ChatTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatTemplate"> | number
    name?: StringWithAggregatesFilter<"ChatTemplate"> | string
    content?: StringWithAggregatesFilter<"ChatTemplate"> | string
    isActive?: BoolWithAggregatesFilter<"ChatTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatTemplate"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    email: string
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappPermissions?: WaNumberPermissionCreateNestedManyWithoutUserInput
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
    whatsappPermissions?: WaNumberPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappPermissions?: WaNumberPermissionUpdateManyWithoutUserNestedInput
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
    whatsappPermissions?: WaNumberPermissionUncheckedUpdateManyWithoutUserNestedInput
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
    chats?: ChatCreateNestedManyWithoutWhatsappNumberInput
    permissions?: WaNumberPermissionCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutWhatsappNumberInput
    chats?: ChatUncheckedCreateNestedManyWithoutWhatsappNumberInput
    permissions?: WaNumberPermissionUncheckedCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUpdateManyWithoutWhatsappNumberNestedInput
    chats?: ChatUpdateManyWithoutWhatsappNumberNestedInput
    permissions?: WaNumberPermissionUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
    chats?: ChatUncheckedUpdateManyWithoutWhatsappNumberNestedInput
    permissions?: WaNumberPermissionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
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

  export type ChatCreateInput = {
    id?: string
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappNumber: WhatsAppNumberCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    whatsappNumberId: number
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappNumber?: WhatsAppNumberUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    whatsappNumberId: number
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName?: string | null
    toJid: string
    toNumber: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    mediaSize?: number | null
    mediaCaption?: string | null
    quotedMessageId?: string | null
    quotedContent?: string | null
    status?: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    chatId: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName?: string | null
    toJid: string
    toNumber: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    mediaSize?: number | null
    mediaCaption?: string | null
    quotedMessageId?: string | null
    quotedContent?: string | null
    status?: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    chatId: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName?: string | null
    toJid: string
    toNumber: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    mediaSize?: number | null
    mediaCaption?: string | null
    quotedMessageId?: string | null
    quotedContent?: string | null
    status?: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaNumberPermissionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWhatsappPermissionsInput
    whatsappNumber: WhatsAppNumberCreateNestedOneWithoutPermissionsInput
  }

  export type WaNumberPermissionUncheckedCreateInput = {
    id?: number
    userId: number
    whatsappNumberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaNumberPermissionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhatsappPermissionsNestedInput
    whatsappNumber?: WhatsAppNumberUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type WaNumberPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaNumberPermissionCreateManyInput = {
    id?: number
    userId: number
    whatsappNumberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaNumberPermissionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaNumberPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatTemplateCreateInput = {
    name: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatTemplateUncheckedCreateInput = {
    id?: number
    name: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatTemplateCreateManyInput = {
    id?: number
    name: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
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

  export type WaNumberPermissionListRelationFilter = {
    every?: WaNumberPermissionWhereInput
    some?: WaNumberPermissionWhereInput
    none?: WaNumberPermissionWhereInput
  }

  export type WaNumberPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type WhatsAppSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
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

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelevanceInput = {
    fields: ChatOrderByRelevanceFieldEnum | ChatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatWhatsappNumberIdContactJidCompoundUniqueInput = {
    whatsappNumberId: number
    contactJid: string
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    contactJid?: SortOrder
    contactName?: SortOrder
    contactNumber?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrder
    lastMessageId?: SortOrder
    lastMessageText?: SortOrder
    lastMessageTime?: SortOrder
    unreadCount?: SortOrder
    isPinned?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    whatsappNumberId?: SortOrder
    unreadCount?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    contactJid?: SortOrder
    contactName?: SortOrder
    contactNumber?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrder
    lastMessageId?: SortOrder
    lastMessageText?: SortOrder
    lastMessageTime?: SortOrder
    unreadCount?: SortOrder
    isPinned?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    whatsappNumberId?: SortOrder
    contactJid?: SortOrder
    contactName?: SortOrder
    contactNumber?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrder
    lastMessageId?: SortOrder
    lastMessageText?: SortOrder
    lastMessageTime?: SortOrder
    unreadCount?: SortOrder
    isPinned?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    whatsappNumberId?: SortOrder
    unreadCount?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[]
    notIn?: $Enums.MessageStatus[]
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageMessageIdChatIdCompoundUniqueInput = {
    messageId: string
    chatId: string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromJid?: SortOrder
    fromNumber?: SortOrder
    fromName?: SortOrder
    toJid?: SortOrder
    toNumber?: SortOrder
    type?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    mediaSize?: SortOrder
    mediaCaption?: SortOrder
    quotedMessageId?: SortOrder
    quotedContent?: SortOrder
    status?: SortOrder
    isFromMe?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    mediaSize?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromJid?: SortOrder
    fromNumber?: SortOrder
    fromName?: SortOrder
    toJid?: SortOrder
    toNumber?: SortOrder
    type?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    mediaSize?: SortOrder
    mediaCaption?: SortOrder
    quotedMessageId?: SortOrder
    quotedContent?: SortOrder
    status?: SortOrder
    isFromMe?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromJid?: SortOrder
    fromNumber?: SortOrder
    fromName?: SortOrder
    toJid?: SortOrder
    toNumber?: SortOrder
    type?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    mediaSize?: SortOrder
    mediaCaption?: SortOrder
    quotedMessageId?: SortOrder
    quotedContent?: SortOrder
    status?: SortOrder
    isFromMe?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    mediaSize?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[]
    notIn?: $Enums.MessageStatus[]
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WaNumberPermissionUserIdWhatsappNumberIdCompoundUniqueInput = {
    userId: number
    whatsappNumberId: number
  }

  export type WaNumberPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaNumberPermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
  }

  export type WaNumberPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaNumberPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaNumberPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    whatsappNumberId?: SortOrder
  }

  export type ChatTemplateOrderByRelevanceInput = {
    fields: ChatTemplateOrderByRelevanceFieldEnum | ChatTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatTemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WaNumberPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<WaNumberPermissionCreateWithoutUserInput, WaNumberPermissionUncheckedCreateWithoutUserInput> | WaNumberPermissionCreateWithoutUserInput[] | WaNumberPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutUserInput | WaNumberPermissionCreateOrConnectWithoutUserInput[]
    createMany?: WaNumberPermissionCreateManyUserInputEnvelope
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
  }

  export type WaNumberPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WaNumberPermissionCreateWithoutUserInput, WaNumberPermissionUncheckedCreateWithoutUserInput> | WaNumberPermissionCreateWithoutUserInput[] | WaNumberPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutUserInput | WaNumberPermissionCreateOrConnectWithoutUserInput[]
    createMany?: WaNumberPermissionCreateManyUserInputEnvelope
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
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

  export type WaNumberPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaNumberPermissionCreateWithoutUserInput, WaNumberPermissionUncheckedCreateWithoutUserInput> | WaNumberPermissionCreateWithoutUserInput[] | WaNumberPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutUserInput | WaNumberPermissionCreateOrConnectWithoutUserInput[]
    upsert?: WaNumberPermissionUpsertWithWhereUniqueWithoutUserInput | WaNumberPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaNumberPermissionCreateManyUserInputEnvelope
    set?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    disconnect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    delete?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    update?: WaNumberPermissionUpdateWithWhereUniqueWithoutUserInput | WaNumberPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaNumberPermissionUpdateManyWithWhereWithoutUserInput | WaNumberPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaNumberPermissionScalarWhereInput | WaNumberPermissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WaNumberPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaNumberPermissionCreateWithoutUserInput, WaNumberPermissionUncheckedCreateWithoutUserInput> | WaNumberPermissionCreateWithoutUserInput[] | WaNumberPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutUserInput | WaNumberPermissionCreateOrConnectWithoutUserInput[]
    upsert?: WaNumberPermissionUpsertWithWhereUniqueWithoutUserInput | WaNumberPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaNumberPermissionCreateManyUserInputEnvelope
    set?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    disconnect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    delete?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    update?: WaNumberPermissionUpdateWithWhereUniqueWithoutUserInput | WaNumberPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaNumberPermissionUpdateManyWithWhereWithoutUserInput | WaNumberPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaNumberPermissionScalarWhereInput | WaNumberPermissionScalarWhereInput[]
  }

  export type WhatsAppSessionCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput> | WhatsAppSessionCreateWithoutWhatsappNumberInput[] | WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput | WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: WhatsAppSessionCreateManyWhatsappNumberInputEnvelope
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<ChatCreateWithoutWhatsappNumberInput, ChatUncheckedCreateWithoutWhatsappNumberInput> | ChatCreateWithoutWhatsappNumberInput[] | ChatUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutWhatsappNumberInput | ChatCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: ChatCreateManyWhatsappNumberInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type WaNumberPermissionCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<WaNumberPermissionCreateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput> | WaNumberPermissionCreateWithoutWhatsappNumberInput[] | WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput | WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: WaNumberPermissionCreateManyWhatsappNumberInputEnvelope
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
  }

  export type WhatsAppSessionUncheckedCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<WhatsAppSessionCreateWithoutWhatsappNumberInput, WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput> | WhatsAppSessionCreateWithoutWhatsappNumberInput[] | WhatsAppSessionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput | WhatsAppSessionCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: WhatsAppSessionCreateManyWhatsappNumberInputEnvelope
    connect?: WhatsAppSessionWhereUniqueInput | WhatsAppSessionWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<ChatCreateWithoutWhatsappNumberInput, ChatUncheckedCreateWithoutWhatsappNumberInput> | ChatCreateWithoutWhatsappNumberInput[] | ChatUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutWhatsappNumberInput | ChatCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: ChatCreateManyWhatsappNumberInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type WaNumberPermissionUncheckedCreateNestedManyWithoutWhatsappNumberInput = {
    create?: XOR<WaNumberPermissionCreateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput> | WaNumberPermissionCreateWithoutWhatsappNumberInput[] | WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput | WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput[]
    createMany?: WaNumberPermissionCreateManyWhatsappNumberInputEnvelope
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
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

  export type ChatUpdateManyWithoutWhatsappNumberNestedInput = {
    create?: XOR<ChatCreateWithoutWhatsappNumberInput, ChatUncheckedCreateWithoutWhatsappNumberInput> | ChatCreateWithoutWhatsappNumberInput[] | ChatUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutWhatsappNumberInput | ChatCreateOrConnectWithoutWhatsappNumberInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutWhatsappNumberInput | ChatUpsertWithWhereUniqueWithoutWhatsappNumberInput[]
    createMany?: ChatCreateManyWhatsappNumberInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutWhatsappNumberInput | ChatUpdateWithWhereUniqueWithoutWhatsappNumberInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutWhatsappNumberInput | ChatUpdateManyWithWhereWithoutWhatsappNumberInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type WaNumberPermissionUpdateManyWithoutWhatsappNumberNestedInput = {
    create?: XOR<WaNumberPermissionCreateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput> | WaNumberPermissionCreateWithoutWhatsappNumberInput[] | WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput | WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput[]
    upsert?: WaNumberPermissionUpsertWithWhereUniqueWithoutWhatsappNumberInput | WaNumberPermissionUpsertWithWhereUniqueWithoutWhatsappNumberInput[]
    createMany?: WaNumberPermissionCreateManyWhatsappNumberInputEnvelope
    set?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    disconnect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    delete?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    update?: WaNumberPermissionUpdateWithWhereUniqueWithoutWhatsappNumberInput | WaNumberPermissionUpdateWithWhereUniqueWithoutWhatsappNumberInput[]
    updateMany?: WaNumberPermissionUpdateManyWithWhereWithoutWhatsappNumberInput | WaNumberPermissionUpdateManyWithWhereWithoutWhatsappNumberInput[]
    deleteMany?: WaNumberPermissionScalarWhereInput | WaNumberPermissionScalarWhereInput[]
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

  export type ChatUncheckedUpdateManyWithoutWhatsappNumberNestedInput = {
    create?: XOR<ChatCreateWithoutWhatsappNumberInput, ChatUncheckedCreateWithoutWhatsappNumberInput> | ChatCreateWithoutWhatsappNumberInput[] | ChatUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutWhatsappNumberInput | ChatCreateOrConnectWithoutWhatsappNumberInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutWhatsappNumberInput | ChatUpsertWithWhereUniqueWithoutWhatsappNumberInput[]
    createMany?: ChatCreateManyWhatsappNumberInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutWhatsappNumberInput | ChatUpdateWithWhereUniqueWithoutWhatsappNumberInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutWhatsappNumberInput | ChatUpdateManyWithWhereWithoutWhatsappNumberInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type WaNumberPermissionUncheckedUpdateManyWithoutWhatsappNumberNestedInput = {
    create?: XOR<WaNumberPermissionCreateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput> | WaNumberPermissionCreateWithoutWhatsappNumberInput[] | WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput[]
    connectOrCreate?: WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput | WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput[]
    upsert?: WaNumberPermissionUpsertWithWhereUniqueWithoutWhatsappNumberInput | WaNumberPermissionUpsertWithWhereUniqueWithoutWhatsappNumberInput[]
    createMany?: WaNumberPermissionCreateManyWhatsappNumberInputEnvelope
    set?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    disconnect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    delete?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    connect?: WaNumberPermissionWhereUniqueInput | WaNumberPermissionWhereUniqueInput[]
    update?: WaNumberPermissionUpdateWithWhereUniqueWithoutWhatsappNumberInput | WaNumberPermissionUpdateWithWhereUniqueWithoutWhatsappNumberInput[]
    updateMany?: WaNumberPermissionUpdateManyWithWhereWithoutWhatsappNumberInput | WaNumberPermissionUpdateManyWithWhereWithoutWhatsappNumberInput[]
    deleteMany?: WaNumberPermissionScalarWhereInput | WaNumberPermissionScalarWhereInput[]
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

  export type WhatsAppNumberCreateNestedOneWithoutChatsInput = {
    create?: XOR<WhatsAppNumberCreateWithoutChatsInput, WhatsAppNumberUncheckedCreateWithoutChatsInput>
    connectOrCreate?: WhatsAppNumberCreateOrConnectWithoutChatsInput
    connect?: WhatsAppNumberWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type WhatsAppNumberUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<WhatsAppNumberCreateWithoutChatsInput, WhatsAppNumberUncheckedCreateWithoutChatsInput>
    connectOrCreate?: WhatsAppNumberCreateOrConnectWithoutChatsInput
    upsert?: WhatsAppNumberUpsertWithoutChatsInput
    connect?: WhatsAppNumberWhereUniqueInput
    update?: XOR<XOR<WhatsAppNumberUpdateToOneWithWhereWithoutChatsInput, WhatsAppNumberUpdateWithoutChatsInput>, WhatsAppNumberUncheckedUpdateWithoutChatsInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutWhatsappPermissionsInput = {
    create?: XOR<UserCreateWithoutWhatsappPermissionsInput, UserUncheckedCreateWithoutWhatsappPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsappPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type WhatsAppNumberCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<WhatsAppNumberCreateWithoutPermissionsInput, WhatsAppNumberUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: WhatsAppNumberCreateOrConnectWithoutPermissionsInput
    connect?: WhatsAppNumberWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWhatsappPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutWhatsappPermissionsInput, UserUncheckedCreateWithoutWhatsappPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhatsappPermissionsInput
    upsert?: UserUpsertWithoutWhatsappPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhatsappPermissionsInput, UserUpdateWithoutWhatsappPermissionsInput>, UserUncheckedUpdateWithoutWhatsappPermissionsInput>
  }

  export type WhatsAppNumberUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<WhatsAppNumberCreateWithoutPermissionsInput, WhatsAppNumberUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: WhatsAppNumberCreateOrConnectWithoutPermissionsInput
    upsert?: WhatsAppNumberUpsertWithoutPermissionsInput
    connect?: WhatsAppNumberWhereUniqueInput
    update?: XOR<XOR<WhatsAppNumberUpdateToOneWithWhereWithoutPermissionsInput, WhatsAppNumberUpdateWithoutPermissionsInput>, WhatsAppNumberUncheckedUpdateWithoutPermissionsInput>
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

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[]
    notIn?: $Enums.MessageStatus[]
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[]
    notIn?: $Enums.MessageType[]
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[]
    notIn?: $Enums.MessageStatus[]
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type WaNumberPermissionCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappNumber: WhatsAppNumberCreateNestedOneWithoutPermissionsInput
  }

  export type WaNumberPermissionUncheckedCreateWithoutUserInput = {
    id?: number
    whatsappNumberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaNumberPermissionCreateOrConnectWithoutUserInput = {
    where: WaNumberPermissionWhereUniqueInput
    create: XOR<WaNumberPermissionCreateWithoutUserInput, WaNumberPermissionUncheckedCreateWithoutUserInput>
  }

  export type WaNumberPermissionCreateManyUserInputEnvelope = {
    data: WaNumberPermissionCreateManyUserInput | WaNumberPermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WaNumberPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: WaNumberPermissionWhereUniqueInput
    update: XOR<WaNumberPermissionUpdateWithoutUserInput, WaNumberPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<WaNumberPermissionCreateWithoutUserInput, WaNumberPermissionUncheckedCreateWithoutUserInput>
  }

  export type WaNumberPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: WaNumberPermissionWhereUniqueInput
    data: XOR<WaNumberPermissionUpdateWithoutUserInput, WaNumberPermissionUncheckedUpdateWithoutUserInput>
  }

  export type WaNumberPermissionUpdateManyWithWhereWithoutUserInput = {
    where: WaNumberPermissionScalarWhereInput
    data: XOR<WaNumberPermissionUpdateManyMutationInput, WaNumberPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type WaNumberPermissionScalarWhereInput = {
    AND?: WaNumberPermissionScalarWhereInput | WaNumberPermissionScalarWhereInput[]
    OR?: WaNumberPermissionScalarWhereInput[]
    NOT?: WaNumberPermissionScalarWhereInput | WaNumberPermissionScalarWhereInput[]
    id?: IntFilter<"WaNumberPermission"> | number
    userId?: IntFilter<"WaNumberPermission"> | number
    whatsappNumberId?: IntFilter<"WaNumberPermission"> | number
    createdAt?: DateTimeFilter<"WaNumberPermission"> | Date | string
    updatedAt?: DateTimeFilter<"WaNumberPermission"> | Date | string
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

  export type ChatCreateWithoutWhatsappNumberInput = {
    id?: string
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutWhatsappNumberInput = {
    id?: string
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutWhatsappNumberInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutWhatsappNumberInput, ChatUncheckedCreateWithoutWhatsappNumberInput>
  }

  export type ChatCreateManyWhatsappNumberInputEnvelope = {
    data: ChatCreateManyWhatsappNumberInput | ChatCreateManyWhatsappNumberInput[]
    skipDuplicates?: boolean
  }

  export type WaNumberPermissionCreateWithoutWhatsappNumberInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWhatsappPermissionsInput
  }

  export type WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaNumberPermissionCreateOrConnectWithoutWhatsappNumberInput = {
    where: WaNumberPermissionWhereUniqueInput
    create: XOR<WaNumberPermissionCreateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput>
  }

  export type WaNumberPermissionCreateManyWhatsappNumberInputEnvelope = {
    data: WaNumberPermissionCreateManyWhatsappNumberInput | WaNumberPermissionCreateManyWhatsappNumberInput[]
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

  export type ChatUpsertWithWhereUniqueWithoutWhatsappNumberInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutWhatsappNumberInput, ChatUncheckedUpdateWithoutWhatsappNumberInput>
    create: XOR<ChatCreateWithoutWhatsappNumberInput, ChatUncheckedCreateWithoutWhatsappNumberInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutWhatsappNumberInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutWhatsappNumberInput, ChatUncheckedUpdateWithoutWhatsappNumberInput>
  }

  export type ChatUpdateManyWithWhereWithoutWhatsappNumberInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutWhatsappNumberInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    whatsappNumberId?: IntFilter<"Chat"> | number
    contactJid?: StringFilter<"Chat"> | string
    contactName?: StringNullableFilter<"Chat"> | string | null
    contactNumber?: StringFilter<"Chat"> | string
    isGroup?: BoolFilter<"Chat"> | boolean
    groupName?: StringNullableFilter<"Chat"> | string | null
    lastMessageId?: StringNullableFilter<"Chat"> | string | null
    lastMessageText?: StringNullableFilter<"Chat"> | string | null
    lastMessageTime?: DateTimeNullableFilter<"Chat"> | Date | string | null
    unreadCount?: IntFilter<"Chat"> | number
    isPinned?: BoolFilter<"Chat"> | boolean
    isArchived?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type WaNumberPermissionUpsertWithWhereUniqueWithoutWhatsappNumberInput = {
    where: WaNumberPermissionWhereUniqueInput
    update: XOR<WaNumberPermissionUpdateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedUpdateWithoutWhatsappNumberInput>
    create: XOR<WaNumberPermissionCreateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedCreateWithoutWhatsappNumberInput>
  }

  export type WaNumberPermissionUpdateWithWhereUniqueWithoutWhatsappNumberInput = {
    where: WaNumberPermissionWhereUniqueInput
    data: XOR<WaNumberPermissionUpdateWithoutWhatsappNumberInput, WaNumberPermissionUncheckedUpdateWithoutWhatsappNumberInput>
  }

  export type WaNumberPermissionUpdateManyWithWhereWithoutWhatsappNumberInput = {
    where: WaNumberPermissionScalarWhereInput
    data: XOR<WaNumberPermissionUpdateManyMutationInput, WaNumberPermissionUncheckedUpdateManyWithoutWhatsappNumberInput>
  }

  export type WhatsAppNumberCreateWithoutSessionsInput = {
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    chats?: ChatCreateNestedManyWithoutWhatsappNumberInput
    permissions?: WaNumberPermissionCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutWhatsappNumberInput
    permissions?: WaNumberPermissionUncheckedCreateNestedManyWithoutWhatsappNumberInput
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
    chats?: ChatUpdateManyWithoutWhatsappNumberNestedInput
    permissions?: WaNumberPermissionUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutWhatsappNumberNestedInput
    permissions?: WaNumberPermissionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberCreateWithoutChatsInput = {
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionCreateNestedManyWithoutWhatsappNumberInput
    permissions?: WaNumberPermissionCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUncheckedCreateWithoutChatsInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutWhatsappNumberInput
    permissions?: WaNumberPermissionUncheckedCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberCreateOrConnectWithoutChatsInput = {
    where: WhatsAppNumberWhereUniqueInput
    create: XOR<WhatsAppNumberCreateWithoutChatsInput, WhatsAppNumberUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName?: string | null
    toJid: string
    toNumber: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    mediaSize?: number | null
    mediaCaption?: string | null
    quotedMessageId?: string | null
    quotedContent?: string | null
    status?: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName?: string | null
    toJid: string
    toNumber: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    mediaSize?: number | null
    mediaCaption?: string | null
    quotedMessageId?: string | null
    quotedContent?: string | null
    status?: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type WhatsAppNumberUpsertWithoutChatsInput = {
    update: XOR<WhatsAppNumberUpdateWithoutChatsInput, WhatsAppNumberUncheckedUpdateWithoutChatsInput>
    create: XOR<WhatsAppNumberCreateWithoutChatsInput, WhatsAppNumberUncheckedCreateWithoutChatsInput>
    where?: WhatsAppNumberWhereInput
  }

  export type WhatsAppNumberUpdateToOneWithWhereWithoutChatsInput = {
    where?: WhatsAppNumberWhereInput
    data: XOR<WhatsAppNumberUpdateWithoutChatsInput, WhatsAppNumberUncheckedUpdateWithoutChatsInput>
  }

  export type WhatsAppNumberUpdateWithoutChatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUpdateManyWithoutWhatsappNumberNestedInput
    permissions?: WaNumberPermissionUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
    permissions?: WaNumberPermissionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    messageId?: StringFilter<"Message"> | string
    fromJid?: StringFilter<"Message"> | string
    fromNumber?: StringFilter<"Message"> | string
    fromName?: StringNullableFilter<"Message"> | string | null
    toJid?: StringFilter<"Message"> | string
    toNumber?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaType?: StringNullableFilter<"Message"> | string | null
    mediaSize?: IntNullableFilter<"Message"> | number | null
    mediaCaption?: StringNullableFilter<"Message"> | string | null
    quotedMessageId?: StringNullableFilter<"Message"> | string | null
    quotedContent?: StringNullableFilter<"Message"> | string | null
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    isFromMe?: BoolFilter<"Message"> | boolean
    timestamp?: DateTimeFilter<"Message"> | Date | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappNumber: WhatsAppNumberCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    whatsappNumberId: number
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappNumber?: WhatsAppNumberUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWhatsappPermissionsInput = {
    name: string
    username: string
    email: string
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWhatsappPermissionsInput = {
    id?: number
    name: string
    username: string
    email: string
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWhatsappPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhatsappPermissionsInput, UserUncheckedCreateWithoutWhatsappPermissionsInput>
  }

  export type WhatsAppNumberCreateWithoutPermissionsInput = {
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionCreateNestedManyWithoutWhatsappNumberInput
    chats?: ChatCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: WhatsAppSessionUncheckedCreateNestedManyWithoutWhatsappNumberInput
    chats?: ChatUncheckedCreateNestedManyWithoutWhatsappNumberInput
  }

  export type WhatsAppNumberCreateOrConnectWithoutPermissionsInput = {
    where: WhatsAppNumberWhereUniqueInput
    create: XOR<WhatsAppNumberCreateWithoutPermissionsInput, WhatsAppNumberUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpsertWithoutWhatsappPermissionsInput = {
    update: XOR<UserUpdateWithoutWhatsappPermissionsInput, UserUncheckedUpdateWithoutWhatsappPermissionsInput>
    create: XOR<UserCreateWithoutWhatsappPermissionsInput, UserUncheckedCreateWithoutWhatsappPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhatsappPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhatsappPermissionsInput, UserUncheckedUpdateWithoutWhatsappPermissionsInput>
  }

  export type UserUpdateWithoutWhatsappPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWhatsappPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppNumberUpsertWithoutPermissionsInput = {
    update: XOR<WhatsAppNumberUpdateWithoutPermissionsInput, WhatsAppNumberUncheckedUpdateWithoutPermissionsInput>
    create: XOR<WhatsAppNumberCreateWithoutPermissionsInput, WhatsAppNumberUncheckedCreateWithoutPermissionsInput>
    where?: WhatsAppNumberWhereInput
  }

  export type WhatsAppNumberUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: WhatsAppNumberWhereInput
    data: XOR<WhatsAppNumberUpdateWithoutPermissionsInput, WhatsAppNumberUncheckedUpdateWithoutPermissionsInput>
  }

  export type WhatsAppNumberUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUpdateManyWithoutWhatsappNumberNestedInput
    chats?: ChatUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WhatsAppNumberUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: WhatsAppSessionUncheckedUpdateManyWithoutWhatsappNumberNestedInput
    chats?: ChatUncheckedUpdateManyWithoutWhatsappNumberNestedInput
  }

  export type WaNumberPermissionCreateManyUserInput = {
    id?: number
    whatsappNumberId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaNumberPermissionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappNumber?: WhatsAppNumberUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type WaNumberPermissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaNumberPermissionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsappNumberId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ChatCreateManyWhatsappNumberInput = {
    id?: string
    contactJid: string
    contactName?: string | null
    contactNumber: string
    isGroup?: boolean
    groupName?: string | null
    lastMessageId?: string | null
    lastMessageText?: string | null
    lastMessageTime?: Date | string | null
    unreadCount?: number
    isPinned?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaNumberPermissionCreateManyWhatsappNumberInput = {
    id?: number
    userId: number
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

  export type ChatUpdateWithoutWhatsappNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutWhatsappNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutWhatsappNumberInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactJid?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaNumberPermissionUpdateWithoutWhatsappNumberInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhatsappPermissionsNestedInput
  }

  export type WaNumberPermissionUncheckedUpdateWithoutWhatsappNumberInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaNumberPermissionUncheckedUpdateManyWithoutWhatsappNumberInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    messageId: string
    fromJid: string
    fromNumber: string
    fromName?: string | null
    toJid: string
    toNumber: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    mediaSize?: number | null
    mediaCaption?: string | null
    quotedMessageId?: string | null
    quotedContent?: string | null
    status?: $Enums.MessageStatus
    isFromMe: boolean
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromJid?: StringFieldUpdateOperationsInput | string
    fromNumber?: StringFieldUpdateOperationsInput | string
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    toJid?: StringFieldUpdateOperationsInput | string
    toNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSize?: NullableIntFieldUpdateOperationsInput | number | null
    mediaCaption?: NullableStringFieldUpdateOperationsInput | string | null
    quotedMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    quotedContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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