---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.028Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Cache invalidation by host"
feature_slug: "cache-invalidation-by-host"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/cache-invalidation"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates"
keywords:
  - "cache"
  - "invalidation"
  - "by"
  - "host"
  - "media"
  - "cdn"
  - "can"
  - "invalidate"
---

# Cache invalidation by host

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin.

## Extended Definition

Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates)

## Supporting Pages

### Invalidate cached content \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Media CDN supports multiple ways of selecting content to be invalidated, as follows: Host and URL path URL prefix (wildcard) Cache tags, including built-in tags for status , origin , and content-type You can combine these invalidation parameters to target specific cached responses and minimize origin load on the subsequent cache fill.
- Supported invalidation syntax The supported invalidation syntax is as follows: Type Syntax Example Host invalidation Invalidate cached responses for the specified host. gcloud edge-cache services invalidate-cache SERVICE NAME \ --host="media.example.com" Path invalidation Invalidate cached responses for the specified path or path prefix. gcloud edge-cache services invalidate-cache SERVICE NAME \ --path="/content/1234/hls/ " gcloud edge-cache services invalidate-cache SERVICE NAME \ --path="/videos/funny.mp4" Cache tag invalidation on HTTP status code, origin name, or MIME type Invalidate cached responses with a matching tag.
- Click Invalidate and then click Confirm to indicate that you want Media CDN to invalidate the content matching the host. gcloud gcloud edge-cache services invalidate-cache SERVICE NAME \ --host= HOST Replace the following: SERVICE NAME with the name of the Edge Cache service.
- For example: gcloud edge-cache services invalidate-cache SERVICE NAME \ --tags="status=404,content-type=text/plain" Invalidation latency Cache invalidation across Media CDN's thousands of locations typically completes within one minute globally.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- Routes without an explicit cdnPolicy configured behave as if they have the following configuration: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s cacheKeyPolicy : includeProtocol : false excludeHost : false excludeQueryString : false signedRequestMode : DISABLED negativeCaching : false Cacheable responses A cacheable response is an HTTP response that Media CDN can store and quickly retrieve, thus allowing for faster load times.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- Cache keys You can reduce the number of times Media CDN needs to contact your origin by considering what uniquely identifies a request, and removing components that might often change between requests.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- You can configure what items Media CDN considers as part of a cache key, which can reduce requests from Media CDN to the upstream origin.
- Media CDN is served from your own domain as a bring-your-own (BYO) domain, and doesn't require a Google-hosted domain.

### Configure SSL (TLS) certificates \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must have the following Identity and Access Management permissions to authorize, create, and attach certificates to an Edge Cache service: certificatemanager.certs.create certificatemanager.certs.get certificatemanager.certs.list certificatemanager.certs.use certificatemanager.dnsauthorizations.create certificatemanager.dnsauthorizations.get certificatemanager.dnsauthorizations.list certificatemanager.dnsauthorizations.use Users who need to attach an existing certificate to an Media CDN service require the certificatemanager.certs.get , certificatemanager.certs.list , and certificatemanager.certs.use IAM permissions.
- Make sure you specify --scope=EDGE CACHE for certificates associated with Media CDN. gcloud certificate-manager certificates create stream-example-com \ --certificate-file= CERT .pem \ --private-key-file= PRIVATE KEY .pem \ --scope=EDGE CACHE Create request issued for: [stream-example-com] Created certificate [stream-example-com].
- Issue a managed certificate To create a managed certificate and attach it to your Media CDN service, you must do the following: Demonstrate ownership ("authorization") of the domains that you want to issue certificates for by creating a challenge token and adding a DNS record.
- After you have created a Media CDN service (or services), you can issue and attach SSL (TLS) certificates to support secure connectivity in browsers and mobile applications.

