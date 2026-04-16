---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.026Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Private external origin authentication"
feature_slug: "private-external-origin-authentication"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
keywords:
  - "private"
  - "external"
  - "origin"
  - "authentication"
  - "media"
  - "cdn"
  - "can"
  - "authenticate"
---

# Private external origin authentication

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can authenticate private external origins by dynamically generating signed requests with AWS Signature Version 4.

## Extended Definition

Media CDN can authenticate private external origins by dynamically generating signed requests with AWS Signature Version 4.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)

## Supporting Pages

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private resources inside Google Cloud or on-premises can be reached by configuring an external Application Load Balancer as an origin behind Media CDN.
- Supported origins and protocols Media CDN directly supports any publicly reachable HTTP endpoint as an origin, including the following: Cloud Storage buckets, including private buckets through Identity and Access Management service accounts External Application Load Balancers Amazon S3-compatible buckets, including private buckets that use AWS Signature Version 4 Other publicly available object storage, such as Azure Blob Storage Publicly available web servers, such as public VMs or on-premises hosts Connectivity to origins is over secure tunnels and Google's global backbone network.
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- Cache keys You can reduce the number of times Media CDN needs to contact your origin by considering what uniquely identifies a request, and removing components that might often change between requests.
- N/A Where possible, Media CDN is RFC-compliant (HTTP RFC 7234 ), but favors optimizing for cache offload and minimizing the impact that clients can have on hit rate and overall origin load.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- You can grant Media CDN access to your private Cloud Storage buckets and authenticate requests to ensure that only valid Media CDN requests are granted.
- Origin authentication Media CDN supports private Cloud Storage buckets as an origin through origin authentication .
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Note: Media CDN can take up to 10 minutes to create the service API Use the edgeCacheServices.create method : POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE ID { "name": " SERVICE ID ", "routing": { "hostRules": [ { "hosts": [" DOMAIN "], "pathMatcher": "routes" } ], "pathMatchers": [ { "name": "routes", "routeRules": [ { "priority": "1", "matchRules": [ { "prefixMatch": "/" } ], "origin": " ORIGIN ", "routeAction": { "cdnPolicy": { "cacheMode": "CACHE ALL STATIC", "defaultTtl": "3600s" } } "headerAction": { "responseHeadersToAdd": [ { "headerName": "x-cache-status", "headerValue": "{cdn cache status}" } ] }, } ] } ] } } Replace the following: PARENT : the parent resource in the format projects/ PROJECT /locations/global SERVICE ID : the name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Note: Media CDN can take up to 10 minutes to create the service Terraform resource "google network services edge cache service" "default" { name = "cloud-media-service" routing { host rule { hosts = ["googlecloudexample.com"] path matcher = "routes" } path matcher { name = "routes" route rule { description = "a default route rule, priority=10 (low)" priority = 10 match rule { prefix match = "/" } origin = google network services edge cache origin.default.name route action { cdn policy { cache mode = "CACHE ALL STATIC" default ttl = "3600s" } } header action { response header to add { header name = "x-cache-status" header value = "{cdn cache status}" } } } } } } It might take several minutes for your first service to be created.
- Note: Media CDN can take up to 10 minutes to create the origin Terraform resource "google network services edge cache origin" "default" { name = "cloud-storage-origin" origin address = "gs://my-bucket-${random id.unique suffix.hex}" } Create an EdgeCacheService resource Your EdgeCacheService resource configures routing, certificate, and caching settings, and can point to EdgeCacheOrigin resources.
- The retrieved details include the IP addresses assigned to the service: ipv4Addresses: IPV4 ADDRESS ipv6Addresses: IPV6 ADDRESS Test whether a response is being cached Before testing the service, make sure that you have cacheable content stored at your origin so that Media CDN can retrieve it.

