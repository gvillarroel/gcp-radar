---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.572Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "URLFetch payload size exception handling"
feature_slug: "urlfetch-payload-size-exception-handling"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
keywords:
  - "urlfetch"
  - "payload"
  - "size"
  - "exception"
  - "handling"
  - "requests"
  - "overly"
  - "large"
---

# URLFetch payload size exception handling

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

URLFetch requests with overly large payloads now use RequestPayloadTooLargeException.

## Extended Definition

URLFetch requests with overly large payloads now use RequestPayloadTooLargeException.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Create an ingress firewall rule on your VPC network to allow requests from connectors that target this network: gcloud compute firewall-rules create vpc-connector-requests \ --allow tcp,udp,icmp \ --direction = INGRESS \ --source-tags vpc-connector \ --network = VPC NETWORK This rule gives the connector access to every resource in the network.

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-5`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The FacetResult for this facet will be constructed like this: FacetResult(name='size', values=[ FacetResultValue(label='[8, 10)', 22, refinement=refinement key), FacetResultValue(label='small', 100, refinement=refinement key), FacetResultValue(label='medium', 300, refinement=refinement key), FacetResultValue(label='large', 250, refinement=refinement key)]) The label parameter is constructed from a facet value.
- For example, the facet named "size" might have values "small", "medium", and "large." By using facets with search, you can retrieve summary information to help you refine a query and "drill down" into your results in a series of steps.
- Query ( "name:x86" , return facets = [ "type" , "ram size gb" ]) results = index . search ( query ) for facet in results . facets : print ( "facet {} " . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) When you retrieve facets by name, by default only the 10 most often occurring values for a facet will be returned.
- Selecting facets by name and value To retrieve information only about particular values of a facet, add a return facets parameter that includes a FacetRequest object with a values list: def facet by name and value ( index ): Create the query and specify to return the "type" facet with values "computer" and "printer" and the "ram size gb" facet with value in the ranges [0,4), [4, 8), and [8, max]. query = search .

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to the default channel. threadsafe bool Whether multiple requests can be dispatched to this version at once. vm bool Whether to deploy this version in a container on a virtual machine. flexible runtime settings FlexibleRuntimeSettings Settings for App Engine flexible runtimes. app engine apis bool Allows App Engine second generation runtimes to access the legacy bundled services. beta settings map<string, string> Metadata settings that are supplied to this version to enable beta runtime features. env string App Engine execution environment for this version.
- Defaults to a runtime-specific value. max idle instances int32 Maximum number of idle instances that should be maintained for this version. max total instances int32 Maximum number of instances that should be started to handle requests for this version. max pending latency Duration Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. min idle instances int32 Minimum number of idle instances that should be maintained for this version.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.get view AuthorizedCertificateView Controls the set of fields returned in the LIST response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.
- Authorization requires the following IAM permission on the specified resource parent : appengine.versions.list view VersionView Controls the set of fields returned in the List response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.

