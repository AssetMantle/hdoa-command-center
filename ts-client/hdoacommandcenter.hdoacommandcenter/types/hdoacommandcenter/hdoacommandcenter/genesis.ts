/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Commerce } from "./commerce";
import { Compliance } from "./compliance";
import { Domain } from "./domain";
import { Factory } from "./factory";
import { Governance } from "./governance";
import { Params } from "./params";

export const protobufPackage = "hdoacommandcenter.hdoacommandcenter";

/** GenesisState defines the hdoacommandcenter module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  commerceList: Commerce[];
  commerceCount: number;
  governanceList: Governance[];
  governanceCount: number;
  domainList: Domain[];
  domainCount: number;
  complianceList: Compliance[];
  complianceCount: number;
  factoryList: Factory[];
  factoryCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    commerceList: [],
    commerceCount: 0,
    governanceList: [],
    governanceCount: 0,
    domainList: [],
    domainCount: 0,
    complianceList: [],
    complianceCount: 0,
    factoryList: [],
    factoryCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commerceList) {
      Commerce.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.commerceCount !== 0) {
      writer.uint32(24).uint64(message.commerceCount);
    }
    for (const v of message.governanceList) {
      Governance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.governanceCount !== 0) {
      writer.uint32(40).uint64(message.governanceCount);
    }
    for (const v of message.domainList) {
      Domain.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.domainCount !== 0) {
      writer.uint32(56).uint64(message.domainCount);
    }
    for (const v of message.complianceList) {
      Compliance.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.complianceCount !== 0) {
      writer.uint32(72).uint64(message.complianceCount);
    }
    for (const v of message.factoryList) {
      Factory.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.factoryCount !== 0) {
      writer.uint32(88).uint64(message.factoryCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.commerceList.push(Commerce.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commerceCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.governanceList.push(Governance.decode(reader, reader.uint32()));
          break;
        case 5:
          message.governanceCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.domainList.push(Domain.decode(reader, reader.uint32()));
          break;
        case 7:
          message.domainCount = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.complianceList.push(Compliance.decode(reader, reader.uint32()));
          break;
        case 9:
          message.complianceCount = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.factoryList.push(Factory.decode(reader, reader.uint32()));
          break;
        case 11:
          message.factoryCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      commerceList: Array.isArray(object?.commerceList)
        ? object.commerceList.map((e: any) => Commerce.fromJSON(e))
        : [],
      commerceCount: isSet(object.commerceCount) ? Number(object.commerceCount) : 0,
      governanceList: Array.isArray(object?.governanceList)
        ? object.governanceList.map((e: any) => Governance.fromJSON(e))
        : [],
      governanceCount: isSet(object.governanceCount) ? Number(object.governanceCount) : 0,
      domainList: Array.isArray(object?.domainList) ? object.domainList.map((e: any) => Domain.fromJSON(e)) : [],
      domainCount: isSet(object.domainCount) ? Number(object.domainCount) : 0,
      complianceList: Array.isArray(object?.complianceList)
        ? object.complianceList.map((e: any) => Compliance.fromJSON(e))
        : [],
      complianceCount: isSet(object.complianceCount) ? Number(object.complianceCount) : 0,
      factoryList: Array.isArray(object?.factoryList) ? object.factoryList.map((e: any) => Factory.fromJSON(e)) : [],
      factoryCount: isSet(object.factoryCount) ? Number(object.factoryCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.commerceList) {
      obj.commerceList = message.commerceList.map((e) => e ? Commerce.toJSON(e) : undefined);
    } else {
      obj.commerceList = [];
    }
    message.commerceCount !== undefined && (obj.commerceCount = Math.round(message.commerceCount));
    if (message.governanceList) {
      obj.governanceList = message.governanceList.map((e) => e ? Governance.toJSON(e) : undefined);
    } else {
      obj.governanceList = [];
    }
    message.governanceCount !== undefined && (obj.governanceCount = Math.round(message.governanceCount));
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e ? Domain.toJSON(e) : undefined);
    } else {
      obj.domainList = [];
    }
    message.domainCount !== undefined && (obj.domainCount = Math.round(message.domainCount));
    if (message.complianceList) {
      obj.complianceList = message.complianceList.map((e) => e ? Compliance.toJSON(e) : undefined);
    } else {
      obj.complianceList = [];
    }
    message.complianceCount !== undefined && (obj.complianceCount = Math.round(message.complianceCount));
    if (message.factoryList) {
      obj.factoryList = message.factoryList.map((e) => e ? Factory.toJSON(e) : undefined);
    } else {
      obj.factoryList = [];
    }
    message.factoryCount !== undefined && (obj.factoryCount = Math.round(message.factoryCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.commerceList = object.commerceList?.map((e) => Commerce.fromPartial(e)) || [];
    message.commerceCount = object.commerceCount ?? 0;
    message.governanceList = object.governanceList?.map((e) => Governance.fromPartial(e)) || [];
    message.governanceCount = object.governanceCount ?? 0;
    message.domainList = object.domainList?.map((e) => Domain.fromPartial(e)) || [];
    message.domainCount = object.domainCount ?? 0;
    message.complianceList = object.complianceList?.map((e) => Compliance.fromPartial(e)) || [];
    message.complianceCount = object.complianceCount ?? 0;
    message.factoryList = object.factoryList?.map((e) => Factory.fromPartial(e)) || [];
    message.factoryCount = object.factoryCount ?? 0;
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
