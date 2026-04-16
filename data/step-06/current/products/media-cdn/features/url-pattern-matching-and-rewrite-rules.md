---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.029Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "URL pattern matching and rewrite rules"
feature_slug: "url-pattern-matching-and-rewrite-rules"
latest_feature_date: "2021-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
keywords:
  - "url"
  - "pattern"
  - "matching"
  - "and"
  - "rewrite"
  - "rules"
  - "media"
  - "cdn"
---

# URL pattern matching and rewrite rules

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can match incoming requests with wildcard patterns and rewrite URLs before forwarding requests to the origin.

## Extended Definition

Media CDN can match incoming requests with wildcard patterns and rewrite URLs before forwarding requests to the origin.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)

## Supporting Pages

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to route requests that match a specific header, query parameter, and path prefix for the host media.example.com : name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 origin : staging-live-origin matchRules : - prefixMatch : /vod/ headerMatches : - headerName : "x-staging-client" presentMatch : true queryParameterMatches : - name : "live" exactMatch : "yes" routeAction : cdnPolicy : defaultTtl : 5s Path matching Media CDN supports full (exact), prefix, and wildcard path matching.
- For example, to configure a catch-all route that directs all unmatched requests to a default origin named my-origin , create a new route with priority: 999 and a matchRules[].prefixMatch of / as follows: name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 999 origin : my-origin matchRules : - prefixMatch : / You can optionally rewrite the URL prior to the origin fetch, or redirect to a default page (such as your landing page) instead of sending the request "as is" to the origin.
- For example, to map all requests with a path prefix of /legacy/ to your external bucket, you can configure both a hostRewrite and a pathPrefixRewrite to strip this prefix from the origin request: routeRules : - description : legacy backend matchRules : - prefixMatch : "/legacy/" routeAction : urlRewrite : hostRewrite : BUCKET-NAME.s3.REGION.amazonaws.com pathPrefixRewrite : / cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s For more information about how the host header is set on origin requests, see the origin request headers documentation.
- Rewrite request URLs Media CDN supports host and path rewrites.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Such a file indicates the following: How routing works—by first matching the host and then the path How caching works—based on the cache mode and TTL How requests and responses are modified—for example, by inserting the cdn cache status variable into a response header Paste the following sample content into the file, and then save it: name : SERVICE routing : hostRules : - hosts : - DOMAIN pathMatcher : routes pathMatchers : - name : routes routeRules : - priority : 1 matchRules : - prefixMatch : / origin : ORIGIN routeAction : cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s headerAction : responseHeadersToAdd : - headerName : "x-cache-status" headerValue : "{cdn cache status}" Replace the following: SERVICE : name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- After you've set up your domain, access your content with the following curl command: curl -svo /dev/null "http://DOMAIN NAME/FILE NAME" If you did not configure DNS to point to your provisioned IP addresses, use the resolve option to override the address that curl uses. curl -svo /dev/null --resolve DOMAIN NAME :80: IP ADDRESS "http:// DOMAIN NAME/FILE NAME " Replace the following: DOMAIN NAME : the host domain you specified while creating the service IP ADDRESS : the IP address of the service as visible in the Addresses column in the list of services FILE NAME : the name of the file you uploaded to the bucket Example: curl -svo /dev/null --resolve web.example.com:80:34.104.37.129 "http://web.example.com/file.mp4" The command initially produces output similar to the following, with the status miss , because Media CDN doesn't have the requested data already retrieved from the origin: < HTTP/2 200 OK ... < x-cache-status: den;miss ...
- Note: Media CDN can take up to 10 minutes to create the service API Use the edgeCacheServices.create method : POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE ID { "name": " SERVICE ID ", "routing": { "hostRules": [ { "hosts": [" DOMAIN "], "pathMatcher": "routes" } ], "pathMatchers": [ { "name": "routes", "routeRules": [ { "priority": "1", "matchRules": [ { "prefixMatch": "/" } ], "origin": " ORIGIN ", "routeAction": { "cdnPolicy": { "cacheMode": "CACHE ALL STATIC", "defaultTtl": "3600s" } } "headerAction": { "responseHeadersToAdd": [ { "headerName": "x-cache-status", "headerValue": "{cdn cache status}" } ] }, } ] } ] } } Replace the following: PARENT : the parent resource in the format projects/ PROJECT /locations/global SERVICE ID : the name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant the following roles: Note: These roles are visible only in projects where Media CDN is enabled . roles/networkservices.edgeCacheAdmin : Access to create, update, delete, and manage all Edge Cache resources. roles/networkservices.edgeCacheUser : Access to view and use Edge Cache resources. roles/networkservices.edgeCacheViewer : Read-only access to Edge Cache resources.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Routes without an explicit cdnPolicy configured behave as if they have the following configuration: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s cacheKeyPolicy : includeProtocol : false excludeHost : false excludeQueryString : false signedRequestMode : DISABLED negativeCaching : false Cacheable responses A cacheable response is an HTTP response that Media CDN can store and quickly retrieve, thus allowing for faster load times.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- Static content MIME types The CACHE ALL STATIC cache mode allows Media CDN to automatically cache common static content such as video, audio, images, and common web assets based on the MIME type returned in the Content-Type HTTP response header.
- Using cache modes Cache modes allow you to configure when Media CDN should respect origin cache directives, cache static media types, and cache all responses from the origin, regardless of the directives set.

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Use the following URL to access the JSON file that contains the updated Google-assigned IP address ranges. https://www.gstatic.com/ipranges/mediacdn.json Failover and timeouts The following sections describe these configuration options: Timeouts: Determine how long Media CDN waits to connect to your origin or for it to respond to a request.
- Yes HTTP 502 Bad Gateway If Media CDN receives a status code matching any configured retryConditions , such as an HTTP 404 Not Found or HTTP 429 Too Many Requests error, and subsequent retry and failover origin requests continue to fail, an HTTP 502 Bad Gateway error is returned to the client after origin attempts are exhausted.
- The following table documents what the origin sees in the incoming request under different configuration scenarios: Client Request EdgeCacheService.hostRewrite EdgeCacheOrigin.hostRewrite originAddress Host header / TLS SNI at origin media.example.com None None backend.example.com media.example.com media.example.com service.example.com None backend.example.com service.example.com media.example.com None origin.example.com backend.example.com origin.example.com media.example.com service.example.com origin.example.com backend.example.com origin.example.com media.example.com service.example.com origin.example.com gs://vod-content-bucket set automatically based on the bucket name The primary origin and any failover origins see the same host header if they share the same routeRule or hostRewrite configuration.
- Supported origins and protocols Media CDN directly supports any publicly reachable HTTP endpoint as an origin, including the following: Cloud Storage buckets, including private buckets through Identity and Access Management service accounts External Application Load Balancers Amazon S3-compatible buckets, including private buckets that use AWS Signature Version 4 Other publicly available object storage, such as Azure Blob Storage Publicly available web servers, such as public VMs or on-premises hosts Connectivity to origins is over secure tunnels and Google's global backbone network.

