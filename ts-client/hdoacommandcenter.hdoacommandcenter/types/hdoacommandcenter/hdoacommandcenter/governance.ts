/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hdoacommandcenter.hdoacommandcenter";

export interface Governance {
  id: number;
  healthcareGov: boolean;
  commerceGov: boolean;
  complianceGov: boolean;
  creator: string;
}

function createBaseGovernance(): Governance {
  return { id: 0, healthcareGov: false, commerceGov: false, complianceGov: false, creator: "" };
}

export const Governance = {
  encode(message: Governance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.healthcareGov === true) {
      writer.uint32(16).bool(message.healthcareGov);
    }
    if (message.commerceGov === true) {
      writer.uint32(24).bool(message.commerceGov);
    }
    if (message.complianceGov === true) {
      writer.uint32(32).bool(message.complianceGov);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Governance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.healthcareGov = reader.bool();
          break;
        case 3:
          message.commerceGov = reader.bool();
          break;
        case 4:
          message.complianceGov = reader.bool();
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

  fromJSON(object: any): Governance {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      healthcareGov: isSet(object.healthcareGov) ? Boolean(object.healthcareGov) : false,
      commerceGov: isSet(object.commerceGov) ? Boolean(object.commerceGov) : false,
      complianceGov: isSet(object.complianceGov) ? Boolean(object.complianceGov) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Governance): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.healthcareGov !== undefined && (obj.healthcareGov = message.healthcareGov);
    message.commerceGov !== undefined && (obj.commerceGov = message.commerceGov);
    message.complianceGov !== undefined && (obj.complianceGov = message.complianceGov);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Governance>, I>>(object: I): Governance {
    const message = createBaseGovernance();
    message.id = object.id ?? 0;
    message.healthcareGov = object.healthcareGov ?? false;
    message.commerceGov = object.commerceGov ?? false;
    message.complianceGov = object.complianceGov ?? false;
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
