/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface HdoacommandcenterCommerce {
  /** @format uint64 */
  id?: string;
  fractionalize?: boolean;
  access?: boolean;
  sell?: boolean;
  creator?: string;
}

export interface HdoacommandcenterCompliance {
  /** @format uint64 */
  id?: string;
  hipaaOversight?: boolean;
  govOversight?: boolean;
  dataSecCompliance?: boolean;
  creator?: string;
}

export interface HdoacommandcenterDomain {
  /** @format uint64 */
  id?: string;
  docPathway?: boolean;
  nursePathway?: boolean;
  adminPathway?: boolean;
  pharmaPathway?: boolean;
  pathModelling?: boolean;
  resourceTracing?: boolean;
  creator?: string;
}

export interface HdoacommandcenterFactory {
  /** @format uint64 */
  id?: string;

  /** @format int32 */
  mode?: number;
  creator?: string;
}

export interface HdoacommandcenterGovernance {
  /** @format uint64 */
  id?: string;
  healthcareGov?: boolean;
  commerceGov?: boolean;
  complianceGov?: boolean;
  creator?: string;
}

export interface HdoacommandcenterMsgCreateCommerceResponse {
  /** @format uint64 */
  id?: string;
}

export interface HdoacommandcenterMsgCreateComplianceResponse {
  /** @format uint64 */
  id?: string;
}

export interface HdoacommandcenterMsgCreateDomainResponse {
  /** @format uint64 */
  id?: string;
}

export interface HdoacommandcenterMsgCreateFactoryResponse {
  /** @format uint64 */
  id?: string;
}

export interface HdoacommandcenterMsgCreateGovernanceResponse {
  /** @format uint64 */
  id?: string;
}

export type HdoacommandcenterMsgDeleteCommerceResponse = object;

export type HdoacommandcenterMsgDeleteComplianceResponse = object;

export type HdoacommandcenterMsgDeleteDomainResponse = object;

export type HdoacommandcenterMsgDeleteFactoryResponse = object;

export type HdoacommandcenterMsgDeleteGovernanceResponse = object;

export type HdoacommandcenterMsgUpdateCommerceResponse = object;

export type HdoacommandcenterMsgUpdateComplianceResponse = object;

export type HdoacommandcenterMsgUpdateDomainResponse = object;

export type HdoacommandcenterMsgUpdateFactoryResponse = object;

export type HdoacommandcenterMsgUpdateGovernanceResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type HdoacommandcenterParams = object;

export interface HdoacommandcenterQueryAllCommerceResponse {
  Commerce?: HdoacommandcenterCommerce[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HdoacommandcenterQueryAllComplianceResponse {
  Compliance?: HdoacommandcenterCompliance[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HdoacommandcenterQueryAllDomainResponse {
  Domain?: HdoacommandcenterDomain[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HdoacommandcenterQueryAllFactoryResponse {
  Factory?: HdoacommandcenterFactory[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HdoacommandcenterQueryAllGovernanceResponse {
  Governance?: HdoacommandcenterGovernance[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HdoacommandcenterQueryGetCommerceResponse {
  Commerce?: HdoacommandcenterCommerce;
}

export interface HdoacommandcenterQueryGetComplianceResponse {
  Compliance?: HdoacommandcenterCompliance;
}

export interface HdoacommandcenterQueryGetDomainResponse {
  Domain?: HdoacommandcenterDomain;
}

export interface HdoacommandcenterQueryGetFactoryResponse {
  Factory?: HdoacommandcenterFactory;
}

export interface HdoacommandcenterQueryGetGovernanceResponse {
  Governance?: HdoacommandcenterGovernance;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface HdoacommandcenterQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: HdoacommandcenterParams;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title hdoacommandcenter/hdoacommandcenter/commerce.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCommerceAll
   * @request GET:/hdoa-command-center/hdoacommandcenter/commerce
   */
  queryCommerceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HdoacommandcenterQueryAllCommerceResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/commerce`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCommerce
   * @summary Queries a list of Commerce items.
   * @request GET:/hdoa-command-center/hdoacommandcenter/commerce/{id}
   */
  queryCommerce = (id: string, params: RequestParams = {}) =>
    this.request<HdoacommandcenterQueryGetCommerceResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/commerce/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryComplianceAll
   * @request GET:/hdoa-command-center/hdoacommandcenter/compliance
   */
  queryComplianceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HdoacommandcenterQueryAllComplianceResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/compliance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCompliance
   * @summary Queries a list of Compliance items.
   * @request GET:/hdoa-command-center/hdoacommandcenter/compliance/{id}
   */
  queryCompliance = (id: string, params: RequestParams = {}) =>
    this.request<HdoacommandcenterQueryGetComplianceResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/compliance/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainAll
   * @request GET:/hdoa-command-center/hdoacommandcenter/domain
   */
  queryDomainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HdoacommandcenterQueryAllDomainResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/domain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomain
   * @summary Queries a list of Domain items.
   * @request GET:/hdoa-command-center/hdoacommandcenter/domain/{id}
   */
  queryDomain = (id: string, params: RequestParams = {}) =>
    this.request<HdoacommandcenterQueryGetDomainResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/domain/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFactoryAll
   * @request GET:/hdoa-command-center/hdoacommandcenter/factory
   */
  queryFactoryAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HdoacommandcenterQueryAllFactoryResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/factory`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFactory
   * @summary Queries a list of Factory items.
   * @request GET:/hdoa-command-center/hdoacommandcenter/factory/{id}
   */
  queryFactory = (id: string, params: RequestParams = {}) =>
    this.request<HdoacommandcenterQueryGetFactoryResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/factory/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGovernanceAll
   * @request GET:/hdoa-command-center/hdoacommandcenter/governance
   */
  queryGovernanceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HdoacommandcenterQueryAllGovernanceResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/governance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGovernance
   * @summary Queries a list of Governance items.
   * @request GET:/hdoa-command-center/hdoacommandcenter/governance/{id}
   */
  queryGovernance = (id: string, params: RequestParams = {}) =>
    this.request<HdoacommandcenterQueryGetGovernanceResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/governance/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/hdoa-command-center/hdoacommandcenter/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<HdoacommandcenterQueryParamsResponse, RpcStatus>({
      path: `/hdoa-command-center/hdoacommandcenter/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
