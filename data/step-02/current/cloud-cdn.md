# Cloud CDN

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 44
Unique features: 41

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | Cloud CDN cache policies in URL maps |  | Cloud CDN adds cache policy configuration in global external HTTP(S) Load Balancer URL maps with granular rules based on hostname, path, headers, and query parameters. |
| 2025-11-13 | Cloud CDN service extensions (pre-cache edge extensions) |  | Cloud CDN allows custom code in the pre-cache request-processing stage on global external Application Load Balancers using Service Extension edge extensions; Cloud CDN enables custom code execution in the pre-cache request-processing path on global external Application Load Balancers through edge Service Extensions. |
| 2025-11-13 | Cloud CDN traffic extensions (post-cache) |  | Cloud CDN enables custom code execution in the post-cache request-processing path on global external Application Load Balancers through traffic extensions. |
| 2025-10-07 | Cloud CDN predefined dashboards |  | Cloud CDN provides built-in predefined dashboards enabled by default for monitoring CDN traffic distribution and cache effectiveness. |
| 2025-05-19 | Cloud CDN content targeting |  | Cloud CDN supports content targeting to customize caching and delivery by context, including device and geolocation characteristics. |
| 2025-05-05 | Cloud CDN cache invalidation by cache tags |  | Cloud CDN supports cache-tag-based invalidation with higher request rates and support for all invalidation matchers; Cloud CDN supports cache-tag-based invalidation with improved performance and higher rate limits. |
| 2025-02-18 | Cloud CDN TLS 1.3 early data (0-RTT) |  | External HTTP(S) Load Balancing with Cloud CDN supports TLS 1.3 early data (0-RTT) to send request data during the TLS handshake for resumed connections. |
| 2024-10-31 | Cloud CDN private origin authentication for Amazon S3-compatible object stores |  | Cloud CDN adds support for enabling private origin authentication for Amazon S3 and compatible object stores through the Google Cloud Console; Cloud CDN's private origin authentication for Amazon S3 and compatible object stores is available as a general availability capability. |
| 2023-05-30 | Cloud CDN flexible pattern matching for advanced traffic management |  | Cloud CDN supports advanced traffic management on the Global External HTTP(S) Load Balancer using flexible path pattern matching; Cloud CDN introduces flexible path pattern matching with Global External HTTP(S) Load Balancers to route traffic by advanced wildcard and rewrite behavior. |
| 2023-01-17 | Private origin authentication for Amazon S3 origins |  | Cloud CDN now supports private origin authentication for Amazon S3 and compatible object stores to allow only trusted connections. |
| 2022-09-20 | Dynamic compression |  | Cloud CDN supports dynamic compression using Brotli and gzip to reduce network payload for compressible content; Cloud CDN can automatically compress responses in transit as they are served from origin to client. |
| 2022-01-28 | Custom named cookies and headers in cache key |  | Cloud CDN supports including custom-named cookies and headers in cache key calculation for testing and canary-style traffic control; Cloud CDN supports using custom-named cookies and headers in the cache key for A/B testing and similar traffic scenarios. |
| 2022-01-28 | Query parameter allowlisting for backend buckets |  | Cloud CDN enables allowlisting of query parameters for backend buckets to support cache busting; Cloud CDN allowslist query parameters on backend buckets to enable cache-busting behavior. |
| 2021-06-22 | Cloud CDN HTTP/3 support |  | Cloud CDN, via External HTTP(S) Load Balancing, supports HTTP/3 over QUIC for lower latency and improved throughput. |
| 2021-04-07 | Negative caching for HTTP 302 and 307 responses |  | Cloud CDN now supports negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) responses. |
| 2021-01-31 | Cache bypass via request headers |  | Cloud CDN supports bypassing cache processing based on incoming request headers. |
| 2021-01-31 | Serving stale content (serve-while-stale) |  | Cloud CDN can serve stale cached content when the origin is unavailable or returning errors, based on configured stale duration. |
| 2020-12-08 | Terraform support for Cloud CDN cache modes |  | The Google Terraform provider can configure Cloud CDN cache modes. |
| 2020-12-08 | Terraform support for Cloud CDN custom response headers |  | The Google Terraform provider can configure custom response headers for Cloud CDN resources. |
| 2020-12-08 | Terraform support for Cloud CDN TTL overrides |  | The Google Terraform provider can configure TTL override settings for Cloud CDN. |
| 2020-11-02 | Cloud Console support for cache modes |  | Cloud Console now supports configuring Cloud CDN cache modes. |
| 2020-11-02 | Cloud Console support for cache TTL configuration |  | Cloud Console now supports configuring cache TTLs for Cloud CDN. |
| 2020-11-02 | Cloud Console support for custom response headers |  | Cloud Console now supports setting custom response headers for Cloud CDN. |
| 2020-10-26 | Caching of additional HTTP response codes |  | Cloud CDN can cache a broader set of response codes, including common errors such as 404, 301, and 302. |
| 2020-10-26 | Per-status-code TTL override via negative caching |  | Cloud CDN supports configuring TTL overrides on a per-status-code basis through negative caching. |
| 2020-09-29 | Request collapsing behavior improvements |  | Cloud CDN improved request collapsing to reduce origin load during revalidation and cache fill operations. |
| 2020-09-14 | Cloud CDN cache modes |  | Cloud CDN introduces cache modes for backend buckets and backend services to automatically cache common static and media content types. |
| 2020-09-14 | Cloud CDN custom response headers |  | Cloud CDN supports configuring custom response headers on backend buckets and backend services through External HTTP(S) Load Balancing; Cloud CDN expands custom response header support on backend buckets and services and populates a new cdn_cache_status variable in headers. |
| 2020-09-14 | Cloud CDN TTL overrides |  | Cloud CDN adds TTL override controls to let operators fine-tune cache duration for responses on backend buckets and services. |
| 2020-06-10 | Cloud CDN logging for HTTP(S) Load Balancing |  | Cloud CDN logging is available for traffic served through HTTP(S) Load Balancing. |
| 2020-04-17 | Cloud CDN request log cacheId field |  | Cloud CDN request logs now include a cacheId field that identifies the edge cache node and location used to serve a response. |
| 2020-04-15 | Cloud CDN Signed Cookies |  | Cloud CDN Signed Cookies are generally available and allow signing a URL prefix and issuing cookies for protected cached content. |
| 2020-04-15 | Cloud CDN Signed URL prefix authorization |  | Cloud CDN extends signed URL support to allow authorizing a URL prefix as an alternative signing scheme. |
| 2020-04-09 | Cloud CDN TLS v1.3 by default |  | Cloud CDN is enabled for TLS v1.3 by default on applicable external load balancer integrations. |
| 2020-03-25 | Cloud CDN custom origins |  | Cloud CDN custom origins is generally available, enabling caches to source content from on-premises or other-cloud origins; Cloud CDN custom origins support is available in beta for serving cached content from external origins. |
| 2018-08-01 | Cloud CDN Large Object Caching |  | Cloud CDN Large Object Caching supports caching objects up to 5 TB; Cloud CDN Large Object Caching is available in beta and supports object sizes up to 5 TB. |
| 2018-06-26 | Cloud CDN Signed URLs |  | Cloud CDN Signed URLs support is generally available for authorization of cached responses; Cloud CDN Signed URLs support is available in beta for authorized access to cached content. |
| 2017-04-19 | Cloud CDN Custom Cache Keys |  | Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys; Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys. |
| 2017-03-22 | Cloud CDN support for Google Cloud Storage with HTTP(S) Load Balancing |  | Cloud CDN can serve cached content from Google Cloud Storage origins behind HTTP(S) Load Balancing; Cloud CDN can serve cached content from Google Cloud Storage origins behind HTTP(S) Load Balancing. |
| 2017-01-19 | Cloud CDN cache invalidation for a single host |  | Cloud CDN supports invalidating cached objects scoped to a single host. |
| 2016-06-27 | Cloud CDN |  | Cloud CDN became generally available as a Google Cloud service; Cloud CDN became available in beta. |

Source file slug: `cloud-cdn.md`

