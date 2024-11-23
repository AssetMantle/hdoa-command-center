/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hdoacommandcenter.hdoacommandcenter";

export interface Domain {
  id: number;
  docPathway: boolean;
  nursePathway: boolean;
  adminPathway: boolean;
  pharmaPathway: boolean;
  pathModelling: boolean;
  resourceTracing: boolean;
  creator: string;
}

function createBaseDomain(): Domain {
  return {
    id: 0,
    docPathway: false,
    nursePathway: false,
    adminPathway: false,
    pharmaPathway: false,
    pathModelling: false,
    resourceTracing: false,
    creator: "",
  };
}

export const Domain = {
  encode(message: Domain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.docPathway === true) {
      writer.uint32(16).bool(message.docPathway);
    }
    if (message.nursePathway === true) {
      writer.uint32(24).bool(message.nursePathway);
    }
    if (message.adminPathway === true) {
      writer.uint32(32).bool(message.adminPathway);
    }
    if (message.pharmaPathway === true) {
      writer.uint32(40).bool(message.pharmaPathway);
    }
    if (message.pathModelling === true) {
      writer.uint32(48).bool(message.pathModelling);
    }
    if (message.resourceTracing === true) {
      writer.uint32(56).bool(message.resourceTracing);
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Domain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.docPathway = reader.bool();
          break;
        case 3:
          message.nursePathway = reader.bool();
          break;
        case 4:
          message.adminPathway = reader.bool();
          break;
        case 5:
          message.pharmaPathway = reader.bool();
          break;
        case 6:
          message.pathModelling = reader.bool();
          break;
        case 7:
          message.resourceTracing = reader.bool();
          break;
        case 8:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Domain {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      docPathway: isSet(object.docPathway) ? Boolean(object.docPathway) : false,
      nursePathway: isSet(object.nursePathway) ? Boolean(object.nursePathway) : false,
      adminPathway: isSet(object.adminPathway) ? Boolean(object.adminPathway) : false,
      pharmaPathway: isSet(object.pharmaPathway) ? Boolean(object.pharmaPathway) : false,
      pathModelling: isSet(object.pathModelling) ? Boolean(object.pathModelling) : false,
      resourceTracing: isSet(object.resourceTracing) ? Boolean(object.resourceTracing) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Domain): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.docPathway !== undefined && (obj.docPathway = message.docPathway);
    message.nursePathway !== undefined && (obj.nursePathway = message.nursePathway);
    message.adminPathway !== undefined && (obj.adminPathway = message.adminPathway);
    message.pharmaPathway !== undefined && (obj.pharmaPathway = message.pharmaPathway);
    message.pathModelling !== undefined && (obj.pathModelling = message.pathModelling);
    message.resourceTracing !== undefined && (obj.resourceTracing = message.resourceTracing);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Domain>, I>>(object: I): Domain {
    const message = createBaseDomain();
    message.id = object.id ?? 0;
    message.docPathway = object.docPathway ?? false;
    message.nursePathway = object.nursePathway ?? false;
    message.adminPathway = object.adminPathway ?? false;
    message.pharmaPathway = object.pharmaPathway ?? false;
    message.pathModelling = object.pathModelling ?? false;
    message.resourceTracing = object.resourceTracing ?? false;
    message.creator = object.creator ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
