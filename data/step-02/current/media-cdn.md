# Media CDN

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 26
Unique features: 23

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-17 | Origin HEAD request requirement removal |  | Media CDN can fetch objects from the origin without issuing a preliminary HEAD request. |
| 2025-12-05 | Multipart range requests |  | Media CDN supports requesting multiple non-contiguous byte ranges in a single HTTP request; Media CDN supports requesting multiple non-contiguous byte ranges in a single HTTP request. |
| 2025-11-03 | Flexible shielding |  | Media CDN lets you specify a single geographic region for origin shielding so cache fills route through that region; Media CDN lets you specify a single geographic region for origin shielding so cache fills route through that region. |
| 2025-09-24 | ASN-based Cloud Armor rules |  | Media CDN can use Cloud Armor rules to allow or deny traffic based on the client's autonomous system number; Media CDN can use Cloud Armor rules to allow or deny traffic based on the client's autonomous system number. |
| 2025-09-24 | Network Threat Intelligence in Edge Security Policies |  | Media CDN edge cache services can use Network Threat Intelligence from Cloud Armor to identify and block known malicious IP addresses and networks; Media CDN edge cache services can use Network Threat Intelligence from Cloud Armor to identify and block known malicious IP addresses and networks. |
| 2025-03-24 | Dynamic compression |  | Media CDN can automatically compress content to improve delivery performance and reduce egress costs; Media CDN can automatically compress content to improve delivery performance and reduce egress costs. |
| 2024-09-16 | HTTP method filtering for route rules |  | Media CDN can filter traffic by HTTP method at the route-rule level. |
| 2024-06-25 | Cloud Armor edge security policies |  | Media CDN can use globally scoped Cloud Armor edge security policies to filter Layer 7 requests; Media CDN can use globally scoped Cloud Armor edge security policies to filter Layer 7 requests. |
| 2024-06-04 | Origin method proxying overrides |  | Media CDN can proxy supported HTTP methods other than GET, HEAD, and OPTIONS to an origin on specific route rules. |
| 2024-05-24 | Dual-token authentication |  | Media CDN can authenticate requests with a short-duration token and a long-duration token. |
| 2024-05-13 | Content targeting |  | Media CDN can cache and deliver assets customized to end-user context using device characterization and geo-targeting. |
| 2023-12-06 | Private S3-compatible bucket origins |  | Media CDN can use a private S3-compatible bucket as an origin and configure it in the console. |
| 2023-01-31 | Origin redirect following |  | Media CDN can follow origin redirects and cache the final retrieved object; Media CDN can follow origin redirects and cache the final retrieved object. |
| 2023-01-31 | Per-origin header overrides |  | Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins; Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins. |
| 2022-10-28 | Service Extensions plugins |  | Media CDN can run Service Extensions plugins in the request-response path for lightweight customization. |
| 2022-09-13 | Private external origin authentication |  | Media CDN can authenticate private external origins by dynamically generating signed requests with AWS Signature Version 4. |
| 2022-09-13 | Token-based client authentication |  | Media CDN can authenticate requests using signed tokens for custom identifiers, HMAC-based cryptography, and token propagation across playback sessions. |
| 2022-08-12 | CMCD logging and metrics |  | Media CDN can log and report Common Media Client Data transmitted through HTTP headers or query parameters. |
| 2021-06-30 | and tag |  | Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin. |
| 2021-06-30 | Cache invalidation by host |  | Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin. |
| 2021-06-30 | path |  | Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin. |
| 2021-06-25 | URL pattern matching and rewrite rules |  | Media CDN can match incoming requests with wildcard patterns and rewrite URLs before forwarding requests to the origin. |
| 2021-06-16 | Private Cloud Storage bucket access |  | Media CDN can connect to private Cloud Storage buckets so content is served only through Media CDN instead of direct public access. |

Source file slug: `media-cdn.md`

