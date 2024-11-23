/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hdoacommandcenter.hdoacommandcenter";

export interface MsgCreateCommerce {
  creator: string;
  fractionalize: boolean;
  access: boolean;
  sell: boolean;
}

export interface MsgCreateCommerceResponse {
  id: number;
}

export interface MsgUpdateCommerce {
  creator: string;
  id: number;
  fractionalize: boolean;
  access: boolean;
  sell: boolean;
}

export interface MsgUpdateCommerceResponse {
}

export interface MsgDeleteCommerce {
  creator: string;
  id: number;
}

export interface MsgDeleteCommerceResponse {
}

export interface MsgCreateGovernance {
  creator: string;
  healthcareGov: boolean;
  commerceGov: boolean;
  complianceGov: boolean;
}

export interface MsgCreateGovernanceResponse {
  id: number;
}

export interface MsgUpdateGovernance {
  creator: string;
  id: number;
  healthcareGov: boolean;
  commerceGov: boolean;
  complianceGov: boolean;
}

export interface MsgUpdateGovernanceResponse {
}

export interface MsgDeleteGovernance {
  creator: string;
  id: number;
}

export interface MsgDeleteGovernanceResponse {
}

export interface MsgCreateDomain {
  creator: string;
  docPathway: boolean;
  nursePathway: boolean;
  adminPathway: boolean;
  pharmaPathway: boolean;
  pathModelling: boolean;
  resourceTracing: boolean;
}

export interface MsgCreateDomainResponse {
  id: number;
}

export interface MsgUpdateDomain {
  creator: string;
  id: number;
  docPathway: boolean;
  nursePathway: boolean;
  adminPathway: boolean;
  pharmaPathway: boolean;
  pathModelling: boolean;
  resourceTracing: boolean;
}

export interface MsgUpdateDomainResponse {
}

export interface MsgDeleteDomain {
  creator: string;
  id: number;
}

export interface MsgDeleteDomainResponse {
}

export interface MsgCreateCompliance {
  creator: string;
  hipaaOversight: boolean;
  govOversight: boolean;
  dataSecCompliance: boolean;
}

export interface MsgCreateComplianceResponse {
  id: number;
}

export interface MsgUpdateCompliance {
  creator: string;
  id: number;
  hipaaOversight: boolean;
  govOversight: boolean;
  dataSecCompliance: boolean;
}

export interface MsgUpdateComplianceResponse {
}

export interface MsgDeleteCompliance {
  creator: string;
  id: number;
}

export interface MsgDeleteComplianceResponse {
}

function createBaseMsgCreateCommerce(): MsgCreateCommerce {
  return { creator: "", fractionalize: false, access: false, sell: false };
}

export const MsgCreateCommerce = {
  encode(message: MsgCreateCommerce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fractionalize === true) {
      writer.uint32(16).bool(message.fractionalize);
    }
    if (message.access === true) {
      writer.uint32(24).bool(message.access);
    }
    if (message.sell === true) {
      writer.uint32(32).bool(message.sell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCommerce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCommerce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fractionalize = reader.bool();
          break;
        case 3:
          message.access = reader.bool();
          break;
        case 4:
          message.sell = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCommerce {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fractionalize: isSet(object.fractionalize) ? Boolean(object.fractionalize) : false,
      access: isSet(object.access) ? Boolean(object.access) : false,
      sell: isSet(object.sell) ? Boolean(object.sell) : false,
    };
  },

  toJSON(message: MsgCreateCommerce): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fractionalize !== undefined && (obj.fractionalize = message.fractionalize);
    message.access !== undefined && (obj.access = message.access);
    message.sell !== undefined && (obj.sell = message.sell);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCommerce>, I>>(object: I): MsgCreateCommerce {
    const message = createBaseMsgCreateCommerce();
    message.creator = object.creator ?? "";
    message.fractionalize = object.fractionalize ?? false;
    message.access = object.access ?? false;
    message.sell = object.sell ?? false;
    return message;
  },
};

function createBaseMsgCreateCommerceResponse(): MsgCreateCommerceResponse {
  return { id: 0 };
}

export const MsgCreateCommerceResponse = {
  encode(message: MsgCreateCommerceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCommerceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCommerceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCommerceResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateCommerceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCommerceResponse>, I>>(object: I): MsgCreateCommerceResponse {
    const message = createBaseMsgCreateCommerceResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateCommerce(): MsgUpdateCommerce {
  return { creator: "", id: 0, fractionalize: false, access: false, sell: false };
}

export const MsgUpdateCommerce = {
  encode(message: MsgUpdateCommerce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.fractionalize === true) {
      writer.uint32(24).bool(message.fractionalize);
    }
    if (message.access === true) {
      writer.uint32(32).bool(message.access);
    }
    if (message.sell === true) {
      writer.uint32(40).bool(message.sell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommerce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCommerce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.fractionalize = reader.bool();
          break;
        case 4:
          message.access = reader.bool();
          break;
        case 5:
          message.sell = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCommerce {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      fractionalize: isSet(object.fractionalize) ? Boolean(object.fractionalize) : false,
      access: isSet(object.access) ? Boolean(object.access) : false,
      sell: isSet(object.sell) ? Boolean(object.sell) : false,
    };
  },

  toJSON(message: MsgUpdateCommerce): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.fractionalize !== undefined && (obj.fractionalize = message.fractionalize);
    message.access !== undefined && (obj.access = message.access);
    message.sell !== undefined && (obj.sell = message.sell);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCommerce>, I>>(object: I): MsgUpdateCommerce {
    const message = createBaseMsgUpdateCommerce();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.fractionalize = object.fractionalize ?? false;
    message.access = object.access ?? false;
    message.sell = object.sell ?? false;
    return message;
  },
};

function createBaseMsgUpdateCommerceResponse(): MsgUpdateCommerceResponse {
  return {};
}

export const MsgUpdateCommerceResponse = {
  encode(_: MsgUpdateCommerceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommerceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCommerceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCommerceResponse {
    return {};
  },

  toJSON(_: MsgUpdateCommerceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCommerceResponse>, I>>(_: I): MsgUpdateCommerceResponse {
    const message = createBaseMsgUpdateCommerceResponse();
    return message;
  },
};

function createBaseMsgDeleteCommerce(): MsgDeleteCommerce {
  return { creator: "", id: 0 };
}

export const MsgDeleteCommerce = {
  encode(message: MsgDeleteCommerce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCommerce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCommerce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCommerce {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteCommerce): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCommerce>, I>>(object: I): MsgDeleteCommerce {
    const message = createBaseMsgDeleteCommerce();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteCommerceResponse(): MsgDeleteCommerceResponse {
  return {};
}

export const MsgDeleteCommerceResponse = {
  encode(_: MsgDeleteCommerceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCommerceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCommerceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCommerceResponse {
    return {};
  },

  toJSON(_: MsgDeleteCommerceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCommerceResponse>, I>>(_: I): MsgDeleteCommerceResponse {
    const message = createBaseMsgDeleteCommerceResponse();
    return message;
  },
};

function createBaseMsgCreateGovernance(): MsgCreateGovernance {
  return { creator: "", healthcareGov: false, commerceGov: false, complianceGov: false };
}

export const MsgCreateGovernance = {
  encode(message: MsgCreateGovernance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGovernance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGovernance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      healthcareGov: isSet(object.healthcareGov) ? Boolean(object.healthcareGov) : false,
      commerceGov: isSet(object.commerceGov) ? Boolean(object.commerceGov) : false,
      complianceGov: isSet(object.complianceGov) ? Boolean(object.complianceGov) : false,
    };
  },

  toJSON(message: MsgCreateGovernance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.healthcareGov !== undefined && (obj.healthcareGov = message.healthcareGov);
    message.commerceGov !== undefined && (obj.commerceGov = message.commerceGov);
    message.complianceGov !== undefined && (obj.complianceGov = message.complianceGov);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGovernance>, I>>(object: I): MsgCreateGovernance {
    const message = createBaseMsgCreateGovernance();
    message.creator = object.creator ?? "";
    message.healthcareGov = object.healthcareGov ?? false;
    message.commerceGov = object.commerceGov ?? false;
    message.complianceGov = object.complianceGov ?? false;
    return message;
  },
};

function createBaseMsgCreateGovernanceResponse(): MsgCreateGovernanceResponse {
  return { id: 0 };
}

export const MsgCreateGovernanceResponse = {
  encode(message: MsgCreateGovernanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGovernanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGovernanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGovernanceResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateGovernanceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGovernanceResponse>, I>>(object: I): MsgCreateGovernanceResponse {
    const message = createBaseMsgCreateGovernanceResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateGovernance(): MsgUpdateGovernance {
  return { creator: "", id: 0, healthcareGov: false, commerceGov: false, complianceGov: false };
}

export const MsgUpdateGovernance = {
  encode(message: MsgUpdateGovernance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.healthcareGov === true) {
      writer.uint32(24).bool(message.healthcareGov);
    }
    if (message.commerceGov === true) {
      writer.uint32(32).bool(message.commerceGov);
    }
    if (message.complianceGov === true) {
      writer.uint32(40).bool(message.complianceGov);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGovernance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.healthcareGov = reader.bool();
          break;
        case 4:
          message.commerceGov = reader.bool();
          break;
        case 5:
          message.complianceGov = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGovernance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      healthcareGov: isSet(object.healthcareGov) ? Boolean(object.healthcareGov) : false,
      commerceGov: isSet(object.commerceGov) ? Boolean(object.commerceGov) : false,
      complianceGov: isSet(object.complianceGov) ? Boolean(object.complianceGov) : false,
    };
  },

  toJSON(message: MsgUpdateGovernance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.healthcareGov !== undefined && (obj.healthcareGov = message.healthcareGov);
    message.commerceGov !== undefined && (obj.commerceGov = message.commerceGov);
    message.complianceGov !== undefined && (obj.complianceGov = message.complianceGov);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGovernance>, I>>(object: I): MsgUpdateGovernance {
    const message = createBaseMsgUpdateGovernance();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.healthcareGov = object.healthcareGov ?? false;
    message.commerceGov = object.commerceGov ?? false;
    message.complianceGov = object.complianceGov ?? false;
    return message;
  },
};

function createBaseMsgUpdateGovernanceResponse(): MsgUpdateGovernanceResponse {
  return {};
}

export const MsgUpdateGovernanceResponse = {
  encode(_: MsgUpdateGovernanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGovernanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGovernanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGovernanceResponse {
    return {};
  },

  toJSON(_: MsgUpdateGovernanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGovernanceResponse>, I>>(_: I): MsgUpdateGovernanceResponse {
    const message = createBaseMsgUpdateGovernanceResponse();
    return message;
  },
};

function createBaseMsgDeleteGovernance(): MsgDeleteGovernance {
  return { creator: "", id: 0 };
}

export const MsgDeleteGovernance = {
  encode(message: MsgDeleteGovernance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGovernance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGovernance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteGovernance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteGovernance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteGovernance>, I>>(object: I): MsgDeleteGovernance {
    const message = createBaseMsgDeleteGovernance();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteGovernanceResponse(): MsgDeleteGovernanceResponse {
  return {};
}

export const MsgDeleteGovernanceResponse = {
  encode(_: MsgDeleteGovernanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGovernanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGovernanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteGovernanceResponse {
    return {};
  },

  toJSON(_: MsgDeleteGovernanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteGovernanceResponse>, I>>(_: I): MsgDeleteGovernanceResponse {
    const message = createBaseMsgDeleteGovernanceResponse();
    return message;
  },
};

function createBaseMsgCreateDomain(): MsgCreateDomain {
  return {
    creator: "",
    docPathway: false,
    nursePathway: false,
    adminPathway: false,
    pharmaPathway: false,
    pathModelling: false,
    resourceTracing: false,
  };
}

export const MsgCreateDomain = {
  encode(message: MsgCreateDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      docPathway: isSet(object.docPathway) ? Boolean(object.docPathway) : false,
      nursePathway: isSet(object.nursePathway) ? Boolean(object.nursePathway) : false,
      adminPathway: isSet(object.adminPathway) ? Boolean(object.adminPathway) : false,
      pharmaPathway: isSet(object.pharmaPathway) ? Boolean(object.pharmaPathway) : false,
      pathModelling: isSet(object.pathModelling) ? Boolean(object.pathModelling) : false,
      resourceTracing: isSet(object.resourceTracing) ? Boolean(object.resourceTracing) : false,
    };
  },

  toJSON(message: MsgCreateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.docPathway !== undefined && (obj.docPathway = message.docPathway);
    message.nursePathway !== undefined && (obj.nursePathway = message.nursePathway);
    message.adminPathway !== undefined && (obj.adminPathway = message.adminPathway);
    message.pharmaPathway !== undefined && (obj.pharmaPathway = message.pharmaPathway);
    message.pathModelling !== undefined && (obj.pathModelling = message.pathModelling);
    message.resourceTracing !== undefined && (obj.resourceTracing = message.resourceTracing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDomain>, I>>(object: I): MsgCreateDomain {
    const message = createBaseMsgCreateDomain();
    message.creator = object.creator ?? "";
    message.docPathway = object.docPathway ?? false;
    message.nursePathway = object.nursePathway ?? false;
    message.adminPathway = object.adminPathway ?? false;
    message.pharmaPathway = object.pharmaPathway ?? false;
    message.pathModelling = object.pathModelling ?? false;
    message.resourceTracing = object.resourceTracing ?? false;
    return message;
  },
};

function createBaseMsgCreateDomainResponse(): MsgCreateDomainResponse {
  return { id: 0 };
}

export const MsgCreateDomainResponse = {
  encode(message: MsgCreateDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateDomainResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDomainResponse>, I>>(object: I): MsgCreateDomainResponse {
    const message = createBaseMsgCreateDomainResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateDomain(): MsgUpdateDomain {
  return {
    creator: "",
    id: 0,
    docPathway: false,
    nursePathway: false,
    adminPathway: false,
    pharmaPathway: false,
    pathModelling: false,
    resourceTracing: false,
  };
}

export const MsgUpdateDomain = {
  encode(message: MsgUpdateDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.docPathway === true) {
      writer.uint32(24).bool(message.docPathway);
    }
    if (message.nursePathway === true) {
      writer.uint32(32).bool(message.nursePathway);
    }
    if (message.adminPathway === true) {
      writer.uint32(40).bool(message.adminPathway);
    }
    if (message.pharmaPathway === true) {
      writer.uint32(48).bool(message.pharmaPathway);
    }
    if (message.pathModelling === true) {
      writer.uint32(56).bool(message.pathModelling);
    }
    if (message.resourceTracing === true) {
      writer.uint32(64).bool(message.resourceTracing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.docPathway = reader.bool();
          break;
        case 4:
          message.nursePathway = reader.bool();
          break;
        case 5:
          message.adminPathway = reader.bool();
          break;
        case 6:
          message.pharmaPathway = reader.bool();
          break;
        case 7:
          message.pathModelling = reader.bool();
          break;
        case 8:
          message.resourceTracing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      docPathway: isSet(object.docPathway) ? Boolean(object.docPathway) : false,
      nursePathway: isSet(object.nursePathway) ? Boolean(object.nursePathway) : false,
      adminPathway: isSet(object.adminPathway) ? Boolean(object.adminPathway) : false,
      pharmaPathway: isSet(object.pharmaPathway) ? Boolean(object.pharmaPathway) : false,
      pathModelling: isSet(object.pathModelling) ? Boolean(object.pathModelling) : false,
      resourceTracing: isSet(object.resourceTracing) ? Boolean(object.resourceTracing) : false,
    };
  },

  toJSON(message: MsgUpdateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.docPathway !== undefined && (obj.docPathway = message.docPathway);
    message.nursePathway !== undefined && (obj.nursePathway = message.nursePathway);
    message.adminPathway !== undefined && (obj.adminPathway = message.adminPathway);
    message.pharmaPathway !== undefined && (obj.pharmaPathway = message.pharmaPathway);
    message.pathModelling !== undefined && (obj.pathModelling = message.pathModelling);
    message.resourceTracing !== undefined && (obj.resourceTracing = message.resourceTracing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDomain>, I>>(object: I): MsgUpdateDomain {
    const message = createBaseMsgUpdateDomain();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.docPathway = object.docPathway ?? false;
    message.nursePathway = object.nursePathway ?? false;
    message.adminPathway = object.adminPathway ?? false;
    message.pharmaPathway = object.pharmaPathway ?? false;
    message.pathModelling = object.pathModelling ?? false;
    message.resourceTracing = object.resourceTracing ?? false;
    return message;
  },
};

function createBaseMsgUpdateDomainResponse(): MsgUpdateDomainResponse {
  return {};
}

export const MsgUpdateDomainResponse = {
  encode(_: MsgUpdateDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDomainResponse {
    return {};
  },

  toJSON(_: MsgUpdateDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDomainResponse>, I>>(_: I): MsgUpdateDomainResponse {
    const message = createBaseMsgUpdateDomainResponse();
    return message;
  },
};

function createBaseMsgDeleteDomain(): MsgDeleteDomain {
  return { creator: "", id: 0 };
}

export const MsgDeleteDomain = {
  encode(message: MsgDeleteDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDomain>, I>>(object: I): MsgDeleteDomain {
    const message = createBaseMsgDeleteDomain();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteDomainResponse(): MsgDeleteDomainResponse {
  return {};
}

export const MsgDeleteDomainResponse = {
  encode(_: MsgDeleteDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDomainResponse {
    return {};
  },

  toJSON(_: MsgDeleteDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDomainResponse>, I>>(_: I): MsgDeleteDomainResponse {
    const message = createBaseMsgDeleteDomainResponse();
    return message;
  },
};

function createBaseMsgCreateCompliance(): MsgCreateCompliance {
  return { creator: "", hipaaOversight: false, govOversight: false, dataSecCompliance: false };
}

export const MsgCreateCompliance = {
  encode(message: MsgCreateCompliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCompliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCompliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCompliance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hipaaOversight: isSet(object.hipaaOversight) ? Boolean(object.hipaaOversight) : false,
      govOversight: isSet(object.govOversight) ? Boolean(object.govOversight) : false,
      dataSecCompliance: isSet(object.dataSecCompliance) ? Boolean(object.dataSecCompliance) : false,
    };
  },

  toJSON(message: MsgCreateCompliance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hipaaOversight !== undefined && (obj.hipaaOversight = message.hipaaOversight);
    message.govOversight !== undefined && (obj.govOversight = message.govOversight);
    message.dataSecCompliance !== undefined && (obj.dataSecCompliance = message.dataSecCompliance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCompliance>, I>>(object: I): MsgCreateCompliance {
    const message = createBaseMsgCreateCompliance();
    message.creator = object.creator ?? "";
    message.hipaaOversight = object.hipaaOversight ?? false;
    message.govOversight = object.govOversight ?? false;
    message.dataSecCompliance = object.dataSecCompliance ?? false;
    return message;
  },
};

function createBaseMsgCreateComplianceResponse(): MsgCreateComplianceResponse {
  return { id: 0 };
}

export const MsgCreateComplianceResponse = {
  encode(message: MsgCreateComplianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateComplianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateComplianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateComplianceResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateComplianceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateComplianceResponse>, I>>(object: I): MsgCreateComplianceResponse {
    const message = createBaseMsgCreateComplianceResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateCompliance(): MsgUpdateCompliance {
  return { creator: "", id: 0, hipaaOversight: false, govOversight: false, dataSecCompliance: false };
}

export const MsgUpdateCompliance = {
  encode(message: MsgUpdateCompliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.hipaaOversight === true) {
      writer.uint32(24).bool(message.hipaaOversight);
    }
    if (message.govOversight === true) {
      writer.uint32(32).bool(message.govOversight);
    }
    if (message.dataSecCompliance === true) {
      writer.uint32(40).bool(message.dataSecCompliance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCompliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCompliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.hipaaOversight = reader.bool();
          break;
        case 4:
          message.govOversight = reader.bool();
          break;
        case 5:
          message.dataSecCompliance = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCompliance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      hipaaOversight: isSet(object.hipaaOversight) ? Boolean(object.hipaaOversight) : false,
      govOversight: isSet(object.govOversight) ? Boolean(object.govOversight) : false,
      dataSecCompliance: isSet(object.dataSecCompliance) ? Boolean(object.dataSecCompliance) : false,
    };
  },

  toJSON(message: MsgUpdateCompliance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.hipaaOversight !== undefined && (obj.hipaaOversight = message.hipaaOversight);
    message.govOversight !== undefined && (obj.govOversight = message.govOversight);
    message.dataSecCompliance !== undefined && (obj.dataSecCompliance = message.dataSecCompliance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCompliance>, I>>(object: I): MsgUpdateCompliance {
    const message = createBaseMsgUpdateCompliance();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.hipaaOversight = object.hipaaOversight ?? false;
    message.govOversight = object.govOversight ?? false;
    message.dataSecCompliance = object.dataSecCompliance ?? false;
    return message;
  },
};

function createBaseMsgUpdateComplianceResponse(): MsgUpdateComplianceResponse {
  return {};
}

export const MsgUpdateComplianceResponse = {
  encode(_: MsgUpdateComplianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateComplianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateComplianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateComplianceResponse {
    return {};
  },

  toJSON(_: MsgUpdateComplianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateComplianceResponse>, I>>(_: I): MsgUpdateComplianceResponse {
    const message = createBaseMsgUpdateComplianceResponse();
    return message;
  },
};

function createBaseMsgDeleteCompliance(): MsgDeleteCompliance {
  return { creator: "", id: 0 };
}

export const MsgDeleteCompliance = {
  encode(message: MsgDeleteCompliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCompliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCompliance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCompliance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteCompliance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCompliance>, I>>(object: I): MsgDeleteCompliance {
    const message = createBaseMsgDeleteCompliance();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteComplianceResponse(): MsgDeleteComplianceResponse {
  return {};
}

export const MsgDeleteComplianceResponse = {
  encode(_: MsgDeleteComplianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteComplianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteComplianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteComplianceResponse {
    return {};
  },

  toJSON(_: MsgDeleteComplianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteComplianceResponse>, I>>(_: I): MsgDeleteComplianceResponse {
    const message = createBaseMsgDeleteComplianceResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCommerce(request: MsgCreateCommerce): Promise<MsgCreateCommerceResponse>;
  UpdateCommerce(request: MsgUpdateCommerce): Promise<MsgUpdateCommerceResponse>;
  DeleteCommerce(request: MsgDeleteCommerce): Promise<MsgDeleteCommerceResponse>;
  CreateGovernance(request: MsgCreateGovernance): Promise<MsgCreateGovernanceResponse>;
  UpdateGovernance(request: MsgUpdateGovernance): Promise<MsgUpdateGovernanceResponse>;
  DeleteGovernance(request: MsgDeleteGovernance): Promise<MsgDeleteGovernanceResponse>;
  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse>;
  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse>;
  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
  CreateCompliance(request: MsgCreateCompliance): Promise<MsgCreateComplianceResponse>;
  UpdateCompliance(request: MsgUpdateCompliance): Promise<MsgUpdateComplianceResponse>;
  DeleteCompliance(request: MsgDeleteCompliance): Promise<MsgDeleteComplianceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCommerce = this.CreateCommerce.bind(this);
    this.UpdateCommerce = this.UpdateCommerce.bind(this);
    this.DeleteCommerce = this.DeleteCommerce.bind(this);
    this.CreateGovernance = this.CreateGovernance.bind(this);
    this.UpdateGovernance = this.UpdateGovernance.bind(this);
    this.DeleteGovernance = this.DeleteGovernance.bind(this);
    this.CreateDomain = this.CreateDomain.bind(this);
    this.UpdateDomain = this.UpdateDomain.bind(this);
    this.DeleteDomain = this.DeleteDomain.bind(this);
    this.CreateCompliance = this.CreateCompliance.bind(this);
    this.UpdateCompliance = this.UpdateCompliance.bind(this);
    this.DeleteCompliance = this.DeleteCompliance.bind(this);
  }
  CreateCommerce(request: MsgCreateCommerce): Promise<MsgCreateCommerceResponse> {
    const data = MsgCreateCommerce.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "CreateCommerce", data);
    return promise.then((data) => MsgCreateCommerceResponse.decode(new _m0.Reader(data)));
  }

  UpdateCommerce(request: MsgUpdateCommerce): Promise<MsgUpdateCommerceResponse> {
    const data = MsgUpdateCommerce.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "UpdateCommerce", data);
    return promise.then((data) => MsgUpdateCommerceResponse.decode(new _m0.Reader(data)));
  }

  DeleteCommerce(request: MsgDeleteCommerce): Promise<MsgDeleteCommerceResponse> {
    const data = MsgDeleteCommerce.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "DeleteCommerce", data);
    return promise.then((data) => MsgDeleteCommerceResponse.decode(new _m0.Reader(data)));
  }

  CreateGovernance(request: MsgCreateGovernance): Promise<MsgCreateGovernanceResponse> {
    const data = MsgCreateGovernance.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "CreateGovernance", data);
    return promise.then((data) => MsgCreateGovernanceResponse.decode(new _m0.Reader(data)));
  }

  UpdateGovernance(request: MsgUpdateGovernance): Promise<MsgUpdateGovernanceResponse> {
    const data = MsgUpdateGovernance.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "UpdateGovernance", data);
    return promise.then((data) => MsgUpdateGovernanceResponse.decode(new _m0.Reader(data)));
  }

  DeleteGovernance(request: MsgDeleteGovernance): Promise<MsgDeleteGovernanceResponse> {
    const data = MsgDeleteGovernance.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "DeleteGovernance", data);
    return promise.then((data) => MsgDeleteGovernanceResponse.decode(new _m0.Reader(data)));
  }

  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse> {
    const data = MsgCreateDomain.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "CreateDomain", data);
    return promise.then((data) => MsgCreateDomainResponse.decode(new _m0.Reader(data)));
  }

  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse> {
    const data = MsgUpdateDomain.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "UpdateDomain", data);
    return promise.then((data) => MsgUpdateDomainResponse.decode(new _m0.Reader(data)));
  }

  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse> {
    const data = MsgDeleteDomain.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "DeleteDomain", data);
    return promise.then((data) => MsgDeleteDomainResponse.decode(new _m0.Reader(data)));
  }

  CreateCompliance(request: MsgCreateCompliance): Promise<MsgCreateComplianceResponse> {
    const data = MsgCreateCompliance.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "CreateCompliance", data);
    return promise.then((data) => MsgCreateComplianceResponse.decode(new _m0.Reader(data)));
  }

  UpdateCompliance(request: MsgUpdateCompliance): Promise<MsgUpdateComplianceResponse> {
    const data = MsgUpdateCompliance.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "UpdateCompliance", data);
    return promise.then((data) => MsgUpdateComplianceResponse.decode(new _m0.Reader(data)));
  }

  DeleteCompliance(request: MsgDeleteCompliance): Promise<MsgDeleteComplianceResponse> {
    const data = MsgDeleteCompliance.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Msg", "DeleteCompliance", data);
    return promise.then((data) => MsgDeleteComplianceResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
