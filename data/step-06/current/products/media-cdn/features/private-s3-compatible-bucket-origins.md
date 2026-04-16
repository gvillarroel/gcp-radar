---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.025Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Private S3-compatible bucket origins"
feature_slug: "private-s3-compatible-bucket-origins"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
keywords:
  - "private"
  - "s3"
  - "compatible"
  - "bucket"
  - "origins"
  - "media"
  - "cdn"
  - "can"
---

# Private S3-compatible bucket origins

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can use a private S3-compatible bucket as an origin and configure it in the console.

## Extended Definition

Media CDN can use a private S3-compatible bucket as an origin and configure it in the console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)

## Supporting Pages

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported origins and protocols Media CDN directly supports any publicly reachable HTTP endpoint as an origin, including the following: Cloud Storage buckets, including private buckets through Identity and Access Management service accounts External Application Load Balancers Amazon S3-compatible buckets, including private buckets that use AWS Signature Version 4 Other publicly available object storage, such as Azure Blob Storage Publicly available web servers, such as public VMs or on-premises hosts Connectivity to origins is over secure tunnels and Google's global backbone network.
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- What's next Configure an origin Use a private Amazon S3-compatible bucket as an origin Configure service routes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- To rewrite a hostname (for example, rewriting cdn.example.com to my-bucket.s3.us-west-2.amazonaws.com ), you can configure the following: name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 1 origin : my-origin matchRules : - prefixMatch : "/videos/" routeAction : urlRewrite : hostRewrite : "my-bucket.s3.us-west-2.amazonaws.com" In this case, the origin request URL would change from cdn.example.com/videos/ to my-bucket.s3.us-west-2.amazonaws.com/videos/ .
- For example, to map all requests with a path prefix of /legacy/ to your external bucket, you can configure both a hostRewrite and a pathPrefixRewrite to strip this prefix from the origin request: routeRules : - description : legacy backend matchRules : - prefixMatch : "/legacy/" routeAction : urlRewrite : hostRewrite : BUCKET-NAME.s3.REGION.amazonaws.com pathPrefixRewrite : / cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s For more information about how the host header is set on origin requests, see the origin request headers documentation.
- Use third-party storage backends Media CDN supports connecting to publicly reachable HTTP endpoints outside of Google Cloud, including AWS S3 storage buckets, Azure Blob Storage, and other storage providers.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Note: Media CDN can take up to 10 minutes to create the origin Terraform resource "google network services edge cache origin" "default" { name = "cloud-storage-origin" origin address = "gs://my-bucket-${random id.unique suffix.hex}" } Create an EdgeCacheService resource Your EdgeCacheService resource configures routing, certificate, and caching settings, and can point to EdgeCacheOrigin resources.
- Create a Cloud Storage bucket Media CDN content can originate from locations such as a Cloud Storage bucket, a third-party storage location, or a load balancer.
- Note: Media CDN can take up to 10 minutes to create the service API Use the edgeCacheServices.create method : POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE ID { "name": " SERVICE ID ", "routing": { "hostRules": [ { "hosts": [" DOMAIN "], "pathMatcher": "routes" } ], "pathMatchers": [ { "name": "routes", "routeRules": [ { "priority": "1", "matchRules": [ { "prefixMatch": "/" } ], "origin": " ORIGIN ", "routeAction": { "cdnPolicy": { "cacheMode": "CACHE ALL STATIC", "defaultTtl": "3600s" } } "headerAction": { "responseHeadersToAdd": [ { "headerName": "x-cache-status", "headerValue": "{cdn cache status}" } ] }, } ] } ] } } Replace the following: PARENT : the parent resource in the format projects/ PROJECT /locations/global SERVICE ID : the name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- After you've set up your domain, access your content with the following curl command: curl -svo /dev/null "http://DOMAIN NAME/FILE NAME" If you did not configure DNS to point to your provisioned IP addresses, use the resolve option to override the address that curl uses. curl -svo /dev/null --resolve DOMAIN NAME :80: IP ADDRESS "http:// DOMAIN NAME/FILE NAME " Replace the following: DOMAIN NAME : the host domain you specified while creating the service IP ADDRESS : the IP address of the service as visible in the Addresses column in the list of services FILE NAME : the name of the file you uploaded to the bucket Example: curl -svo /dev/null --resolve web.example.com:80:34.104.37.129 "http://web.example.com/file.mp4" The command initially produces output similar to the following, with the status miss , because Media CDN doesn't have the requested data already retrieved from the origin: < HTTP/2 200 OK ... < x-cache-status: den;miss ...

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- Routes without an explicit cdnPolicy configured behave as if they have the following configuration: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s cacheKeyPolicy : includeProtocol : false excludeHost : false excludeQueryString : false signedRequestMode : DISABLED negativeCaching : false Cacheable responses A cacheable response is an HTTP response that Media CDN can store and quickly retrieve, thus allowing for faster load times.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- When using the CACHE ALL STATIC cache or FORCE CACHE ALL modes, this is not required. private N/A A response with the private directive isn't cached by Media CDN, even if the response is otherwise considered cacheable.

