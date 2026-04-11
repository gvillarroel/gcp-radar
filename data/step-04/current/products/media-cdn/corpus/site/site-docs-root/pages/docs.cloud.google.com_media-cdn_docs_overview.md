---
title: "Media CDN overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/media-cdn/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/media-cdn/docs
source_metadata:
  url: https://docs.cloud.google.com/media-cdn/docs/overview
  title: "Media CDN overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Media CDN
Guides
Send feedback
Media CDN overview
Stay organized with collections
Save and categorize content based on your preferences.
Media CDN is Google Cloud's media delivery solution.
Media CDN complements Cloud CDN , which is Google Cloud's
web acceleration solution. Media CDN is optimized for
high-throughput egress workloads, such as streaming video and large file
downloads.
An edge cache is typically server infrastructure that stores content closer to
end users, located within points of presence (PoPs) or partner ISPs.
Media CDN uses Google's global edge-caching infrastructure to serve
your content as close to your users as possible. By using Google's
infrastructure to serve content, you can reduce load on your origin
infrastructure.
Media CDN lets you fetch content from
publicly accessible HTTP endpoints. You can use Media CDN with your
existing origin infrastructure, whether the content is hosted within
Cloud Storage, in another cloud, or within your on-premises infrastructure.
You can control how content is cached for each URI you serve in a route . Using
a route lets you optimize behavior based on the type of content, client
attributes, and your freshness requirements for each route you define with
Media CDN.
For guidance on which CDN product to use, see
Choose a CDN product . You can use both products if they
both meet your needs.
How Media CDN works
Media CDN has three major components:
A router
A cache
A cache filler
Conceptually, the components are connected as depicted in the following diagram:
Figure 1. Media CDN components.
The router and cache component are configured with the IP addresses and
protocols that they use, security and cache policies, and a routing configuration.
The configuration is contained in an
EdgeCacheService
resource. The router uses the
HeaderAction ,
described in EdgeCacheService , to determine how the router modifies requests (including
header manipulation and path rewrites).
Media CDN terminates user HTTP requests at a reverse proxy. The
reverse proxy matches the HTTP requests to a
Routing configuration .
The routing configuration defines how HTTP requests are routed, modified,
cached, and filled.
If the configured cache component is missing the content requested by the user,
known as a cache miss , then the cache component requests content from the
configured upstream origin. Media CDN uses request parameters,
such as the host, path, and query parameters, as a cache key . You can configure
what items Media CDN considers as part of a cache key, which can
reduce requests from Media CDN to the upstream origin. For more
information, see Cache keys .
The cache filler makes a new request each time it contacts the upstream origin.
When the cache filler contacts the upstream origin, it saves the original
request. Then, for each attempt to fill the cache for the item requested by the
cache, the cache filler copies the headers of the original request and modifies
the request based on the settings in
EdgeCacheOrigin .
Because the cache component is after the router and the cache filler is after
the cache component, the cache filler has access only to the headers that the
router modified. The cache filler won't, and can't, undo the header changes made
by the router. However, the cache filler only applies modifications for a given
EdgeCacheOrigin resource when it uses a particular EdgeCacheOrigin resource.
When the cache component has the requested content, it returns the content to
the router to return to the downstream user agent.
Media CDN capabilities
The following sections briefly describe Media CDN's capabilities.
SSL (TLS) certificate support
Media CDN has built-in support for serving TLS-encrypted
(HTTPS) traffic from your own domain. Media CDN is served from
your own domain as a bring-your-own (BYO) domain, and doesn't require a
Google-hosted domain.
There are no additional charges associated with serving SSL (TLS) traffic, or
for obtaining Google-managed SSL certificates.
For more information, see SSL (TLS) Certificates .
Google Cloud Armor support
Media CDN supports Cloud Armor edge security
policies. Media CDN uses Google Cloud Armor to allow or deny access
to content. Cloud Armor supports IP address allowlists and denylists,
geographic and layer 7 header filtering controls, and decorate requests by
inserting custom headers. Additionally, Cloud Armor for Media CDN integrates with Google Threat Intelligence to enable advanced protection against known malicious IP addresses and traffic patterns.
Cloud Armor also supports Autonomous System Numbers (ASNs) in edge
security policies
for Media CDN. This feature helps you permit or
block network traffic originating from specific ASNs.
For more information, see Configure security policies .
Extensibility
Media CDN lets you add custom code to the request-response
processing path by using Service Extensions plugins ( Preview ).
Such customization unlocks a wide variety of lightweight use cases, such as
header normalization and custom tokenization.
For more information, see Deploy Service Extensions plugins in
Media CDN routes .
Origin authentication
Media CDN supports private Cloud Storage buckets as an
origin through origin authentication . You can grant Media CDN
access to your private Cloud Storage buckets and authenticate requests
to ensure that only valid Media CDN requests are granted.
For more information, see Origin connectivity and shielding .
Advanced routing features
Media CDN provides advanced HTTP routing capabilities that let you
map traffic to specific edge configurations and origins at a fine-grained level.
For more information, see Advanced routing .
Client connectivity features
Media CDN supports modern networking protocols such as HTTP/2 and
QUIC from the client to the edge, increasing throughput and reducing overall
network latency.
For more information, see
Client connectivity and IP addresses .
Cache invalidation
Cache invalidation, also called cache purging , is when cached content is
declared invalid. When content is declared invalid, the content is removed from
the cache and then refilled from the origin server the next time that the
content is requested.
Media CDN supports the following ways of invalidating content:
By host and URL path
By URL prefix and wildcard
By cache tags, including built-in tags for status, origin, and media type
You can combine the invalidation parameters to target specific cached responses
and to minimize origin load on the subsequent cache fill.
For more information, see Cache invalidation .
Custom HTTP headers
Media CDN lets you specify custom HTTP headers. Custom request
headers support static values, whereas custom response headers support both
static and dynamic values.
Custom headers let you do the following:
Return geographic data about the client that you can use to show localized
content, such as: country, region, or city.
Determine whether a response was served from cache (in full or in part), and
which cache location it was served from.
Strip or replace both the request and response headers.
For more information, see Define custom headers .
Integration with Cloud Logging
Media CDN also offers integration with Google Cloud's logging
services.
Media CDN logs each HTTP request between the client and edge, and
between Media CDN and the origin, to Cloud Logging
(Logging . Logs are typically delivered in near
real time. You can query logs in Logging and export them to
Cloud Storage or Pub/Sub .
For more information, see Logging guide .
Signed requests
Media CDN supports signed cookies and signed URLs for content
authentication. Signed requests let you scope access to an exact URL prefix for
a limited time and to a specific client.
For more information, see Use signed requests .
Request access
To request access to Media CDN, contact your Google Cloud sales
representative or your account team. Then,
use the Quickstart to try Media CDN.
What's next
To find Media CDN points of presence, see Cache locations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
