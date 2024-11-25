/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Commerce } from "./commerce";
import { Compliance } from "./compliance";
import { Domain } from "./domain";
import { Factory } from "./factory";
import { Governance } from "./governance";
import { Params } from "./params";

export const protobufPackage = "hdoacommandcenter.hdoacommandcenter";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCommerceRequest {
  id: number;
}

export interface QueryGetCommerceResponse {
  Commerce: Commerce | undefined;
}

export interface QueryAllCommerceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommerceResponse {
  Commerce: Commerce[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGovernanceRequest {
  id: number;
}

export interface QueryGetGovernanceResponse {
  Governance: Governance | undefined;
}

export interface QueryAllGovernanceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGovernanceResponse {
  Governance: Governance[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDomainRequest {
  id: number;
}

export interface QueryGetDomainResponse {
  Domain: Domain | undefined;
}

export interface QueryAllDomainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainResponse {
  Domain: Domain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetComplianceRequest {
  id: number;
}

export interface QueryGetComplianceResponse {
  Compliance: Compliance | undefined;
}

export interface QueryAllComplianceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllComplianceResponse {
  Compliance: Compliance[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFactoryRequest {
  id: number;
}

export interface QueryGetFactoryResponse {
  Factory: Factory | undefined;
}

export interface QueryAllFactoryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFactoryResponse {
  Factory: Factory[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCommerceRequest(): QueryGetCommerceRequest {
  return { id: 0 };
}

export const QueryGetCommerceRequest = {
  encode(message: QueryGetCommerceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCommerceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCommerceRequest();
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

  fromJSON(object: any): QueryGetCommerceRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetCommerceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCommerceRequest>, I>>(object: I): QueryGetCommerceRequest {
    const message = createBaseQueryGetCommerceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetCommerceResponse(): QueryGetCommerceResponse {
  return { Commerce: undefined };
}

export const QueryGetCommerceResponse = {
  encode(message: QueryGetCommerceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Commerce !== undefined) {
      Commerce.encode(message.Commerce, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCommerceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCommerceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Commerce = Commerce.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommerceResponse {
    return { Commerce: isSet(object.Commerce) ? Commerce.fromJSON(object.Commerce) : undefined };
  },

  toJSON(message: QueryGetCommerceResponse): unknown {
    const obj: any = {};
    message.Commerce !== undefined && (obj.Commerce = message.Commerce ? Commerce.toJSON(message.Commerce) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCommerceResponse>, I>>(object: I): QueryGetCommerceResponse {
    const message = createBaseQueryGetCommerceResponse();
    message.Commerce = (object.Commerce !== undefined && object.Commerce !== null)
      ? Commerce.fromPartial(object.Commerce)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommerceRequest(): QueryAllCommerceRequest {
  return { pagination: undefined };
}

export const QueryAllCommerceRequest = {
  encode(message: QueryAllCommerceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommerceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommerceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommerceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCommerceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCommerceRequest>, I>>(object: I): QueryAllCommerceRequest {
    const message = createBaseQueryAllCommerceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommerceResponse(): QueryAllCommerceResponse {
  return { Commerce: [], pagination: undefined };
}

export const QueryAllCommerceResponse = {
  encode(message: QueryAllCommerceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Commerce) {
      Commerce.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommerceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommerceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Commerce.push(Commerce.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommerceResponse {
    return {
      Commerce: Array.isArray(object?.Commerce) ? object.Commerce.map((e: any) => Commerce.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCommerceResponse): unknown {
    const obj: any = {};
    if (message.Commerce) {
      obj.Commerce = message.Commerce.map((e) => e ? Commerce.toJSON(e) : undefined);
    } else {
      obj.Commerce = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCommerceResponse>, I>>(object: I): QueryAllCommerceResponse {
    const message = createBaseQueryAllCommerceResponse();
    message.Commerce = object.Commerce?.map((e) => Commerce.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetGovernanceRequest(): QueryGetGovernanceRequest {
  return { id: 0 };
}

export const QueryGetGovernanceRequest = {
  encode(message: QueryGetGovernanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGovernanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGovernanceRequest();
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

  fromJSON(object: any): QueryGetGovernanceRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetGovernanceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGovernanceRequest>, I>>(object: I): QueryGetGovernanceRequest {
    const message = createBaseQueryGetGovernanceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetGovernanceResponse(): QueryGetGovernanceResponse {
  return { Governance: undefined };
}

export const QueryGetGovernanceResponse = {
  encode(message: QueryGetGovernanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Governance !== undefined) {
      Governance.encode(message.Governance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGovernanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGovernanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Governance = Governance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGovernanceResponse {
    return { Governance: isSet(object.Governance) ? Governance.fromJSON(object.Governance) : undefined };
  },

  toJSON(message: QueryGetGovernanceResponse): unknown {
    const obj: any = {};
    message.Governance !== undefined
      && (obj.Governance = message.Governance ? Governance.toJSON(message.Governance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGovernanceResponse>, I>>(object: I): QueryGetGovernanceResponse {
    const message = createBaseQueryGetGovernanceResponse();
    message.Governance = (object.Governance !== undefined && object.Governance !== null)
      ? Governance.fromPartial(object.Governance)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGovernanceRequest(): QueryAllGovernanceRequest {
  return { pagination: undefined };
}

export const QueryAllGovernanceRequest = {
  encode(message: QueryAllGovernanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGovernanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGovernanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGovernanceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGovernanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGovernanceRequest>, I>>(object: I): QueryAllGovernanceRequest {
    const message = createBaseQueryAllGovernanceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGovernanceResponse(): QueryAllGovernanceResponse {
  return { Governance: [], pagination: undefined };
}

export const QueryAllGovernanceResponse = {
  encode(message: QueryAllGovernanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Governance) {
      Governance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGovernanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGovernanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Governance.push(Governance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGovernanceResponse {
    return {
      Governance: Array.isArray(object?.Governance) ? object.Governance.map((e: any) => Governance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGovernanceResponse): unknown {
    const obj: any = {};
    if (message.Governance) {
      obj.Governance = message.Governance.map((e) => e ? Governance.toJSON(e) : undefined);
    } else {
      obj.Governance = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGovernanceResponse>, I>>(object: I): QueryAllGovernanceResponse {
    const message = createBaseQueryAllGovernanceResponse();
    message.Governance = object.Governance?.map((e) => Governance.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDomainRequest(): QueryGetDomainRequest {
  return { id: 0 };
}

export const QueryGetDomainRequest = {
  encode(message: QueryGetDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDomainRequest();
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

  fromJSON(object: any): QueryGetDomainRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetDomainRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDomainRequest>, I>>(object: I): QueryGetDomainRequest {
    const message = createBaseQueryGetDomainRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetDomainResponse(): QueryGetDomainResponse {
  return { Domain: undefined };
}

export const QueryGetDomainResponse = {
  encode(message: QueryGetDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Domain !== undefined) {
      Domain.encode(message.Domain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain = Domain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainResponse {
    return { Domain: isSet(object.Domain) ? Domain.fromJSON(object.Domain) : undefined };
  },

  toJSON(message: QueryGetDomainResponse): unknown {
    const obj: any = {};
    message.Domain !== undefined && (obj.Domain = message.Domain ? Domain.toJSON(message.Domain) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDomainResponse>, I>>(object: I): QueryGetDomainResponse {
    const message = createBaseQueryGetDomainResponse();
    message.Domain = (object.Domain !== undefined && object.Domain !== null)
      ? Domain.fromPartial(object.Domain)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDomainRequest(): QueryAllDomainRequest {
  return { pagination: undefined };
}

export const QueryAllDomainRequest = {
  encode(message: QueryAllDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDomainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDomainRequest>, I>>(object: I): QueryAllDomainRequest {
    const message = createBaseQueryAllDomainRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDomainResponse(): QueryAllDomainResponse {
  return { Domain: [], pagination: undefined };
}

export const QueryAllDomainResponse = {
  encode(message: QueryAllDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Domain) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainResponse {
    return {
      Domain: Array.isArray(object?.Domain) ? object.Domain.map((e: any) => Domain.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDomainResponse): unknown {
    const obj: any = {};
    if (message.Domain) {
      obj.Domain = message.Domain.map((e) => e ? Domain.toJSON(e) : undefined);
    } else {
      obj.Domain = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDomainResponse>, I>>(object: I): QueryAllDomainResponse {
    const message = createBaseQueryAllDomainResponse();
    message.Domain = object.Domain?.map((e) => Domain.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetComplianceRequest(): QueryGetComplianceRequest {
  return { id: 0 };
}

export const QueryGetComplianceRequest = {
  encode(message: QueryGetComplianceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetComplianceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetComplianceRequest();
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

  fromJSON(object: any): QueryGetComplianceRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetComplianceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetComplianceRequest>, I>>(object: I): QueryGetComplianceRequest {
    const message = createBaseQueryGetComplianceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetComplianceResponse(): QueryGetComplianceResponse {
  return { Compliance: undefined };
}

export const QueryGetComplianceResponse = {
  encode(message: QueryGetComplianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Compliance !== undefined) {
      Compliance.encode(message.Compliance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetComplianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetComplianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Compliance = Compliance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetComplianceResponse {
    return { Compliance: isSet(object.Compliance) ? Compliance.fromJSON(object.Compliance) : undefined };
  },

  toJSON(message: QueryGetComplianceResponse): unknown {
    const obj: any = {};
    message.Compliance !== undefined
      && (obj.Compliance = message.Compliance ? Compliance.toJSON(message.Compliance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetComplianceResponse>, I>>(object: I): QueryGetComplianceResponse {
    const message = createBaseQueryGetComplianceResponse();
    message.Compliance = (object.Compliance !== undefined && object.Compliance !== null)
      ? Compliance.fromPartial(object.Compliance)
      : undefined;
    return message;
  },
};

function createBaseQueryAllComplianceRequest(): QueryAllComplianceRequest {
  return { pagination: undefined };
}

export const QueryAllComplianceRequest = {
  encode(message: QueryAllComplianceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllComplianceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllComplianceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllComplianceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllComplianceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllComplianceRequest>, I>>(object: I): QueryAllComplianceRequest {
    const message = createBaseQueryAllComplianceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllComplianceResponse(): QueryAllComplianceResponse {
  return { Compliance: [], pagination: undefined };
}

export const QueryAllComplianceResponse = {
  encode(message: QueryAllComplianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Compliance) {
      Compliance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllComplianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllComplianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Compliance.push(Compliance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllComplianceResponse {
    return {
      Compliance: Array.isArray(object?.Compliance) ? object.Compliance.map((e: any) => Compliance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllComplianceResponse): unknown {
    const obj: any = {};
    if (message.Compliance) {
      obj.Compliance = message.Compliance.map((e) => e ? Compliance.toJSON(e) : undefined);
    } else {
      obj.Compliance = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllComplianceResponse>, I>>(object: I): QueryAllComplianceResponse {
    const message = createBaseQueryAllComplianceResponse();
    message.Compliance = object.Compliance?.map((e) => Compliance.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetFactoryRequest(): QueryGetFactoryRequest {
  return { id: 0 };
}

export const QueryGetFactoryRequest = {
  encode(message: QueryGetFactoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFactoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFactoryRequest();
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

  fromJSON(object: any): QueryGetFactoryRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetFactoryRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFactoryRequest>, I>>(object: I): QueryGetFactoryRequest {
    const message = createBaseQueryGetFactoryRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetFactoryResponse(): QueryGetFactoryResponse {
  return { Factory: undefined };
}

export const QueryGetFactoryResponse = {
  encode(message: QueryGetFactoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Factory !== undefined) {
      Factory.encode(message.Factory, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFactoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFactoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Factory = Factory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFactoryResponse {
    return { Factory: isSet(object.Factory) ? Factory.fromJSON(object.Factory) : undefined };
  },

  toJSON(message: QueryGetFactoryResponse): unknown {
    const obj: any = {};
    message.Factory !== undefined && (obj.Factory = message.Factory ? Factory.toJSON(message.Factory) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFactoryResponse>, I>>(object: I): QueryGetFactoryResponse {
    const message = createBaseQueryGetFactoryResponse();
    message.Factory = (object.Factory !== undefined && object.Factory !== null)
      ? Factory.fromPartial(object.Factory)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFactoryRequest(): QueryAllFactoryRequest {
  return { pagination: undefined };
}

export const QueryAllFactoryRequest = {
  encode(message: QueryAllFactoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFactoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFactoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFactoryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFactoryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFactoryRequest>, I>>(object: I): QueryAllFactoryRequest {
    const message = createBaseQueryAllFactoryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFactoryResponse(): QueryAllFactoryResponse {
  return { Factory: [], pagination: undefined };
}

export const QueryAllFactoryResponse = {
  encode(message: QueryAllFactoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Factory) {
      Factory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFactoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFactoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Factory.push(Factory.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFactoryResponse {
    return {
      Factory: Array.isArray(object?.Factory) ? object.Factory.map((e: any) => Factory.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFactoryResponse): unknown {
    const obj: any = {};
    if (message.Factory) {
      obj.Factory = message.Factory.map((e) => e ? Factory.toJSON(e) : undefined);
    } else {
      obj.Factory = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFactoryResponse>, I>>(object: I): QueryAllFactoryResponse {
    const message = createBaseQueryAllFactoryResponse();
    message.Factory = object.Factory?.map((e) => Factory.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Commerce items. */
  Commerce(request: QueryGetCommerceRequest): Promise<QueryGetCommerceResponse>;
  CommerceAll(request: QueryAllCommerceRequest): Promise<QueryAllCommerceResponse>;
  /** Queries a list of Governance items. */
  Governance(request: QueryGetGovernanceRequest): Promise<QueryGetGovernanceResponse>;
  GovernanceAll(request: QueryAllGovernanceRequest): Promise<QueryAllGovernanceResponse>;
  /** Queries a list of Domain items. */
  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse>;
  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse>;
  /** Queries a list of Compliance items. */
  Compliance(request: QueryGetComplianceRequest): Promise<QueryGetComplianceResponse>;
  ComplianceAll(request: QueryAllComplianceRequest): Promise<QueryAllComplianceResponse>;
  /** Queries a list of Factory items. */
  Factory(request: QueryGetFactoryRequest): Promise<QueryGetFactoryResponse>;
  FactoryAll(request: QueryAllFactoryRequest): Promise<QueryAllFactoryResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Commerce = this.Commerce.bind(this);
    this.CommerceAll = this.CommerceAll.bind(this);
    this.Governance = this.Governance.bind(this);
    this.GovernanceAll = this.GovernanceAll.bind(this);
    this.Domain = this.Domain.bind(this);
    this.DomainAll = this.DomainAll.bind(this);
    this.Compliance = this.Compliance.bind(this);
    this.ComplianceAll = this.ComplianceAll.bind(this);
    this.Factory = this.Factory.bind(this);
    this.FactoryAll = this.FactoryAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Commerce(request: QueryGetCommerceRequest): Promise<QueryGetCommerceResponse> {
    const data = QueryGetCommerceRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "Commerce", data);
    return promise.then((data) => QueryGetCommerceResponse.decode(new _m0.Reader(data)));
  }

  CommerceAll(request: QueryAllCommerceRequest): Promise<QueryAllCommerceResponse> {
    const data = QueryAllCommerceRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "CommerceAll", data);
    return promise.then((data) => QueryAllCommerceResponse.decode(new _m0.Reader(data)));
  }

  Governance(request: QueryGetGovernanceRequest): Promise<QueryGetGovernanceResponse> {
    const data = QueryGetGovernanceRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "Governance", data);
    return promise.then((data) => QueryGetGovernanceResponse.decode(new _m0.Reader(data)));
  }

  GovernanceAll(request: QueryAllGovernanceRequest): Promise<QueryAllGovernanceResponse> {
    const data = QueryAllGovernanceRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "GovernanceAll", data);
    return promise.then((data) => QueryAllGovernanceResponse.decode(new _m0.Reader(data)));
  }

  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse> {
    const data = QueryGetDomainRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "Domain", data);
    return promise.then((data) => QueryGetDomainResponse.decode(new _m0.Reader(data)));
  }

  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse> {
    const data = QueryAllDomainRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "DomainAll", data);
    return promise.then((data) => QueryAllDomainResponse.decode(new _m0.Reader(data)));
  }

  Compliance(request: QueryGetComplianceRequest): Promise<QueryGetComplianceResponse> {
    const data = QueryGetComplianceRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "Compliance", data);
    return promise.then((data) => QueryGetComplianceResponse.decode(new _m0.Reader(data)));
  }

  ComplianceAll(request: QueryAllComplianceRequest): Promise<QueryAllComplianceResponse> {
    const data = QueryAllComplianceRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "ComplianceAll", data);
    return promise.then((data) => QueryAllComplianceResponse.decode(new _m0.Reader(data)));
  }

  Factory(request: QueryGetFactoryRequest): Promise<QueryGetFactoryResponse> {
    const data = QueryGetFactoryRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "Factory", data);
    return promise.then((data) => QueryGetFactoryResponse.decode(new _m0.Reader(data)));
  }

  FactoryAll(request: QueryAllFactoryRequest): Promise<QueryAllFactoryResponse> {
    const data = QueryAllFactoryRequest.encode(request).finish();
    const promise = this.rpc.request("hdoacommandcenter.hdoacommandcenter.Query", "FactoryAll", data);
    return promise.then((data) => QueryAllFactoryResponse.decode(new _m0.Reader(data)));
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
