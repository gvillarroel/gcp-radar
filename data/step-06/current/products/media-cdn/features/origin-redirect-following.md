---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.025Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Origin redirect following"
feature_slug: "origin-redirect-following"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/configuration"
keywords:
  - "origin"
  - "redirect"
  - "following"
  - "media"
  - "cdn"
  - "can"
  - "follow"
  - "redirects"
---

# Origin redirect following

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can follow origin redirects and cache the final retrieved object; Media CDN can follow origin redirects and cache the final retrieved object.

## Extended Definition

Media CDN can follow origin redirects and cache the final retrieved object; Media CDN can follow origin redirects and cache the final retrieved object.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration)

## Supporting Pages

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can enable Media CDN to follow redirects to other origin servers.
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- The following table describes the timeout fields: Field Default Description connectTimeout 5 seconds The maximum amount of time Media CDN can take from starting the request to the origin until Media CDN determines whether the response is usable.
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following configuration demonstrates how to configure your Media CDN routing to support this: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : the first route only matches video manifests - priority : 1 matchRules : - pathTemplateMatch : "/ .m3u8" # " " matches all path segments - pathTemplateMatch : "/ .mpd" origin : manifest-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 5s the second route matches video segments, fetches them from a separate origin server, caching them for a longer duration (1 day). - priority : 2 matchRules : - pathTemplateMatch : "/ .ts" - pathTemplateMatch : "/ .m4s" origin : segment-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 86400s Example: Capture path variables The following example shows how to use named variables to describe one or more path segments.
- The following example shows how to route requests that match a specific header, query parameter, and path prefix for the host media.example.com : name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 origin : staging-live-origin matchRules : - prefixMatch : /vod/ headerMatches : - headerName : "x-staging-client" presentMatch : true queryParameterMatches : - name : "live" exactMatch : "yes" routeAction : cdnPolicy : defaultTtl : 5s Path matching Media CDN supports full (exact), prefix, and wildcard path matching.
- For example, to configure a catch-all route that directs all unmatched requests to a default origin named my-origin , create a new route with priority: 999 and a matchRules[].prefixMatch of / as follows: name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 999 origin : my-origin matchRules : - prefixMatch : / You can optionally rewrite the URL prior to the origin fetch, or redirect to a default page (such as your landing page) instead of sending the request "as is" to the origin.
- To rewrite a hostname (for example, rewriting cdn.example.com to my-bucket.s3.us-west-2.amazonaws.com ), you can configure the following: name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 1 origin : my-origin matchRules : - prefixMatch : "/videos/" routeAction : urlRewrite : hostRewrite : "my-bucket.s3.us-west-2.amazonaws.com" In this case, the origin request URL would change from cdn.example.com/videos/ to my-bucket.s3.us-west-2.amazonaws.com/videos/ .

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a Vary header is present in the response, Media CDN doesn't cache it, unless the header specifies either one of the headers that are configured as a cache key setting or one of the following values: Accept: used to indicate which media types the client accepts Accept-Encoding: used to indicate which compression types the client accepts Available-Dictionary: used to provide the hash of an available dictionary for compression Origin/X-Origin: typically used for cross-origin resource sharing X-Goog-Allowed-Resources: supports Google Cloud organization restriction Sec-Fetch-Dest/Sec-Fetch-Mode/Sec-Fetch-Site: used to fetch metadata request headers Media CDN caches responses with a Vary header in the response by using the value of the header as part of the cache key.
- Routes without an explicit cdnPolicy configured behave as if they have the following configuration: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s cacheKeyPolicy : includeProtocol : false excludeHost : false excludeQueryString : false signedRequestMode : DISABLED negativeCaching : false Cacheable responses A cacheable response is an HTTP response that Media CDN can store and quickly retrieve, thus allowing for faster load times.
- Origin requirements To allow Media CDN to cache origin responses larger than 1 MiB, an origin must include the following in the response headers for GET requests, unless specified otherwise: A Last-Modified or ETag HTTP response header (a validator ).
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.

### Configuration overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IPv4, IPv6, logging enabled (default), and a managed SSL certificate configured The following example shows the gcloud output for this configuration: gcloud edge-cache origins describe prod-media-origin id: "2295067926314745283" creationTimestamp: "2019-11-13T09:53:48.757-08:00" name: "prod-media-origin" description: "" originAddress: "gs://bucket name/" failoverOrigin: "s3-origin" retryConditions: [HTTP 5XX, NOT FOUND] originProtocol: HTTP2 timeouts: connectTimeout: 5s maxAttemptsTimeout: 10 responseTimeout: 6s id: "2295067926314745283" creationTimestamp: "2019-11-13T09:53:48.757-08:00" name: "s3-origin" description: "" originAddress: "media.example.com.s3.amazonaws.com" retryConditions: [HTTP 5XX, NOT FOUND] originProtocol: HTTP2 gcloud edge-cache keysets describe prod-keyset id: "2295067926314745283" creationTimestamp: "2019-11-13T09:53:48.757-08:00" name: "prod-keyset" publicKeys: - name: "sept-2020-key" value: "DThVLjhAKm3VYOvLBAwFZ5XbjVyF98Ias8NZU0WEM9w=" - name: "aug-2020-key" value: "3nQa82ScYgDDAxJrKCqumSEg60VNODGR5dGAveJWsw4=" gcloud edge-cache services describe prod-media-service name: "prod-media-service" edgeSslCertificates: - "media-example-com-cert" - "video-serving-example-com-cert" requireTls: true routing: hostRules: - description: "prod hostnames" hosts: - "media.example.com" - "video-serving.example.net" pathMatcher: "routes" pathMatchers: - name: "routes" routeRules: - priority: 1 description: "prod video segments" origin: "prod-media-origin" matchRules: - pathTemplateMatch: "/ .ts" # HLS segments - pathTemplateMatch: "/ .m4s" # DASH / CMAF segments routeAction: cdnPolicy: cacheMode: "FORCE CACHE ALL" clientTtl: 3600s defaultTtl: 86400s signedRequestMode: REQUIRE SIGNATURES signedRequestKeySet: "prod-keyset" headerAction: responseHeadersToAdd: - headerName: cache-status headerValue: "{cdn cache status}" - headerName: proxy-status headerValue: "{proxy status}" - priority: 2 description: "prod manifest endpoints" origin: "prod-media-origin" matchRules: - pathTemplateMatch: "/ .m3u8" # HLS playlists - pathTemplateMatch: "/ .mpd" # DASH manifests routeAction: urlRewrite: pathPrefixRewrite: "/output/manifests" cdnPolicy: cacheMode: "CACHE ALL STATIC" clientTtl: 10s defaultTtl: 30s maxTtl: 120s headerAction: responseHeadersToAdd: - headerName: cache-status headerValue: "{cdn cache status}" - headerName: proxy-status headerValue: "{proxy status}" - priority: 3 # catch all routes should be the lowest priority route description: "catch all route" origin: "prod-media-origin" matchRules: - prefixMatch: / headerAction: responseHeadersToAdd: - headerName: cache-status headerValue: "{cdn cache status}" - headerName: proxy-status headerValue: "{proxy status}" Configuration options for Media CDN To configure Media CDN, you can use the following tools: Google Cloud console Imported YAML or JSON files The APIs directly Use the Google Cloud console Go to Media CDN For instructions that describe how to configure Media CDN in the Google Cloud console, see the quickstart .
- Example configuration The following list of resources describes a representative Media CDN configuration: An EdgeCacheOrigin : A Cloud Storage-based origin that retries cache fetches against an alternative origin (AWS S3) if the object isn't in Cloud Storage (for example, HTTP 404) or a 5xx error is encountered.
- Media CDN has the following predefined IAM roles: roles/networkservices.edgeCacheAdmin roles/networkservices.edgeCacheUser roles/networkservices.edgeCacheViewer Note: These roles are visible only in projects where Media CDN is enabled .
- For example, if you configure a logConfig.sampleRate without also setting logConfig.enable = true , you can expect the following error to be returned: gcloud edge-cache operations describe operation-1611525680496-5b9ac8fbb7f58-90a7a822-f0c1e8c6 done: true error: message: "Logs sample rate must not be specified without enabling logging." name: projects/my-project/locations/global/operations/operation-1611525680496-5b9ac8fbb7f58-90a7a822-f0c1e8c6 To view all recent operations, their status, and completion, you can run the following command: gcloud edge-cache operations list END TIME ID TARGET DONE operation-1611095421009-5b9486244bf21-cc6b5924-628b8e2a True operation-1611096056610-5b94888273fe6-2da85286-8c810f8e True operation-1611095551517-5b9486a0c251e-c2e1bbbb-de4aa8a5 True Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

