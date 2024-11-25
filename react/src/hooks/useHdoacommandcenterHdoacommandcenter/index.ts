/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useHdoacommandcenterHdoacommandcenter() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.HdoacommandcenterHdoacommandcenter.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryCommerce = (id: string,  options: any) => {
    const key = { type: 'QueryCommerce',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.HdoacommandcenterHdoacommandcenter.query.queryCommerce(id).then( res => res.data );
    }, options);
  }
  
  const QueryCommerceAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryCommerceAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.HdoacommandcenterHdoacommandcenter.query.queryCommerceAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryGovernance = (id: string,  options: any) => {
    const key = { type: 'QueryGovernance',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.HdoacommandcenterHdoacommandcenter.query.queryGovernance(id).then( res => res.data );
    }, options);
  }
  
  const QueryGovernanceAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryGovernanceAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.HdoacommandcenterHdoacommandcenter.query.queryGovernanceAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryDomain = (id: string,  options: any) => {
    const key = { type: 'QueryDomain',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.HdoacommandcenterHdoacommandcenter.query.queryDomain(id).then( res => res.data );
    }, options);
  }
  
  const QueryDomainAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryDomainAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.HdoacommandcenterHdoacommandcenter.query.queryDomainAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryCompliance = (id: string,  options: any) => {
    const key = { type: 'QueryCompliance',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.HdoacommandcenterHdoacommandcenter.query.queryCompliance(id).then( res => res.data );
    }, options);
  }
  
  const QueryComplianceAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryComplianceAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.HdoacommandcenterHdoacommandcenter.query.queryComplianceAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryFactory = (id: string,  options: any) => {
    const key = { type: 'QueryFactory',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.HdoacommandcenterHdoacommandcenter.query.queryFactory(id).then( res => res.data );
    }, options);
  }
  
  const QueryFactoryAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryFactoryAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.HdoacommandcenterHdoacommandcenter.query.queryFactoryAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QueryCommerce,QueryCommerceAll,QueryGovernance,QueryGovernanceAll,QueryDomain,QueryDomainAll,QueryCompliance,QueryComplianceAll,QueryFactory,QueryFactoryAll,
  }
}