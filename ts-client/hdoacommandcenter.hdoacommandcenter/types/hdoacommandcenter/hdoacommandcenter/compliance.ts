/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hdoacommandcenter.hdoacommandcenter";

export interface Compliance {
  id: number;
  hipaaOversight: boolean;
  govOversight: boolean;
  dataSecCompliance: boolean;
  creator: string;
}

function createBaseCompliance(): Compliance {
  return { id: 0, hipaaOversight: false, govOversight: false, dataSecCompliance: false, creator: "" };
}

export const Compliance = {
  encode(message: Compliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.hipaaOversight === true) {
      writer.uint32(16).bool(message.hipaaOversight);
    }
    if (message.govOversight === true) {
      writer.uint32(24).bool(message.govOversight);
    }
    if (message.dataSecCompliance === true) {
      writer.uint32(32).bool(message.dataSecCompliance);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Compliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.hipaaOversight = reader.bool();
          break;
        case 3:
          message.govOversight = reader.bool();
          break;
        case 4:
          message.dataSecCompliance = reader.bool();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Compliance {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      hipaaOversight: isSet(object.hipaaOversight) ? Boolean(object.hipaaOversight) : false,
      govOversight: isSet(object.govOversight) ? Boolean(object.govOversight) : false,
      dataSecCompliance: isSet(object.dataSecCompliance) ? Boolean(object.dataSecCompliance) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Compliance): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.hipaaOversight !== undefined && (obj.hipaaOversight = message.hipaaOversight);
    message.govOversight !== undefined && (obj.govOversight = message.govOversight);
    message.dataSecCompliance !== undefined && (obj.dataSecCompliance = message.dataSecCompliance);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Compliance>, I>>(object: I): Compliance {
    const message = createBaseCompliance();
    message.id = object.id ?? 0;
    message.hipaaOversight = object.hipaaOversight ?? false;
    message.govOversight = object.govOversight ?? false;
    message.dataSecCompliance = object.dataSecCompliance ?? false;
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
