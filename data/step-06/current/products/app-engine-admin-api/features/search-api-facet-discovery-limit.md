---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.555Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Search API facet discovery limit"
feature_slug: "search-api-facet-discovery-limit"
latest_feature_date: "2017-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "search"
  - "facet"
  - "discovery"
  - "limit"
  - "maximum"
  - "value"
  - "was"
  - "increased"
---

# Search API facet discovery limit

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The maximum Search API facet discovery value limit was increased to 100.

## Extended Definition

The maximum Search API facet discovery value limit was increased to 100.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-5`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use this parameter to override the default behavior of faceted search. options = FacetOptions(discover facet limit=5, discover facet value limit=10, depth=6000); Parameter Description Default discover facet limit Number of facets to discover if facet discovery is turned on.
- Query ( "name:x86" , enable facet discovery = True ) results = index . search ( query ) for facet in results . facets : print ( "facet {} ." . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) When you retrieve facets by discovery, by default only the 10 most often occurring values for a facet will be returned.
- You can increase this limit up to 20 using the FacetOptions discovery value limit parameter.
- FacetRange ( start = 8 ), ], ), ], ) results = index . search ( query ) for facet in results . facets : print ( "facet {} " . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) The values in a single FacetRequest must all be the same type, either a list of string values or, for numbers, a list of FacetRanges , which are intervals that are closed on the left (start), and open on the right (end).

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Example: "myapp.appspot.com" failure threshold uint32 Number of consecutive failed checks required before removing traffic. success threshold uint32 Number of consecutive successful checks required before receiving traffic. check interval Duration Interval between health checks. timeout Duration Time before the check is considered failed. app start timeout Duration A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.
- Defaults to a runtime-specific value. max idle instances int32 Maximum number of idle instances that should be maintained for this version. max total instances int32 Maximum number of instances that should be started to handle requests for this version. max pending latency Duration Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. min idle instances int32 Minimum number of idle instances that should be maintained for this version.
- Any value specified here in a request is ignored. search api available bool Output only.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.get view AuthorizedCertificateView Controls the set of fields returned in the LIST response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- To decrease the number of minimum and maximum number of instances, you must do the following: Create a new connector with your preferred values.
- For example, if the value in the Maximum instances field is 8, then the largest possible value for the Minimum instances field is 7.
- To limit the maximum number of connections used per instance, use a client library that supports connection pools.
- To keep either the minimum or maximum number of instances at their current value, specify their current value.

