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
  
  return {QueryParams,
  }
}