---
title: "Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/best-practices
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/best-practices
  title: "Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
Content delivery best practices
Stay organized with collections
Save and categorize content based on your preferences.
This page provides best practices for optimizing and accelerating content
delivery with Cloud CDN . The sections are divided into several key areas.
Cloud CDN uses an external Application Load Balancer
as the origin for cacheable content. An external Application Load Balancer can deliver a mix
of static and dynamically created content to users through one global IP address
from the following types of backends:
Instance groups
Zonal network endpoint groups
(NEGs)
Serverless NEGs : One or
more App Engine , Cloud Run ,
or Cloud Run functions services
Internet NEGs for
external backends
Buckets in Cloud Storage
Because of the seamless integration with Google Cloud, you have
several options for deploying Cloud CDN and managing content.
Use the best practices listed here to plan and refine your deployment.
For more information, see Set up Cloud CDN .
Optimize the cache hit ratio
The following recommended practices help optimize the cache hit ratio.
Cache static content
As a best practice to improve performance, when you enable Cloud CDN,
you need to choose the right cache mode for your application.
The most flexible and generally preferred method to manage cache rules is by
using the cache control header. If you are not familiar with using
origin cache-control headers, the best practice recommendation is to allow
Cloud CDN to automatically cache static content.
To automatically cache static responses from your origin, you can use the
--cache-mode=CACHE_ALL_STATIC setting (default). This setting lets
Cloud CDN cache common static content
types when the origin does not specify any
caching directives in the response headers. Ensure that your content matches the
categories outlined; otherwise, content is not cached.
Don't cache user-specific content
In some cases, browsers can cache user-specific content. Don't use
Cloud CDN to cache user-specific content.
Use custom cache keys to improve cache hit ratio
For performance and scalability, it's important to optimize the cache hit ratio.
By default, Cloud CDN uses the complete request URL to build
the cache key. To help optimize your cache hit ratio, you can use
custom cache keys so that Cloud CDN
doesn't unnecessarily shard the cache.
Cloud CDN key-value store (click to enlarge).
Custom cache keys let you include or omit any combination of protocol, host, and
query string. Following are some examples of when you might use custom cache
keys:
You have two hosts that resolve to the same IP address and go to the same
service. In this example, the entire website is the same on the two
hosts. By default, Cloud CDN caches two copies because of the
different Host: header in the HTTP requests. With a custom cache key, you
can make Cloud CDN ignore the host part of the request and share the
cache entries.
In a more specific example, you might have two websites on different domains
that use the same logo. The website content is different, but you use the same
company logo on both domains, and you have a dedicated backend service that
holds shared content. When you enable Cloud CDN and customize the
cache keys for the backend service that holds the logo, clear the Host
checkbox so that the cache ignores the domain but caches the logo.
A logo needs to be cached whether displayed through HTTP or HTTPS. When you
customize the cache keys for the backend service that holds the logo, clear
the Protocol checkbox so that requests through HTTP and HTTPS count as
matches for the logo's cache entry.
To learn how to customize cache keys, see Using cache
keys .
Optimize performance
The following recommended practices help optimize performance.
Ensure that HTTP/3 and QUIC protocol support is enabled
HTTP/3 is a next-generation internet protocol. It is built on top of QUIC ,
a protocol developed from the original Google QUIC
) (gQUIC) protocol. HTTP/3 is supported between the external HTTP(S) load
balancer, Cloud CDN, and clients.
To increase performance with Cloud CDN, ensure that HTTP/3 is enabled .
Use negative caching
Negative caching provides fine-grained
control over caching for common errors or redirects. When Cloud CDN
encounters specific response codes, it holds that response in cache for a set TTL.
This can reduce the load on your origins and improve the end-user experience by
reducing response latency.
Enable TLS early data
The use of TLS early data
improves the rate of resumed connections by 30 % to 50 %.
To enable TLS early data, use the
gcloud compute target-https-proxies update command
with the tls-early-data option. For more information, see
Configure TLS early data .
You can enable TLS early data in STRICT or PERMISSIVE modes.
STRICT : Enables early data for idempotent methods ( GET , HEAD , OPTIONS
, and TRACE ), which don't have other query parameters. This is the safer
method and applicable in most cases.
PERMISSIVE : Enables early data for idempotent methods that can include
query parameters. When using this mode, you must closely monitor your
application behavior and security posture.
Early data requests that use nonidempotent HTTP methods or have query
parameters are rejected with an HTTP 425 status code.
Optimize security
The following recommended practices help optimize security.
Use Google Cloud Armor
Cloud Armor integrates with Cloud CDN for both
cached
and non-cached or cache-miss
content. A best practice recommendation is to use Cloud Armor in conjunction
with Cloud CDN wherever possible to increase the security of web
applications.
Use signed URLs
If you're using signed URLs ,
note the following:
Keep public and private content in separate Cloud Storage
buckets.
Follow security best
practices .
Authenticate private origins
Origin authentication offers a strong guarantee that the request comes only from
your own configured backend service. It also offers in-transit data protection
for the request and protects against reuse of the signed portion of the
request.
We recommend using private origin
authentication
for Amazon S3 buckets or compatible object stores. Private origin
authentication helps ensure that only trusted connections access content on your
private origins and that users don't directly access them.
Additionally, if origin firewalls prevent access to the origin, use IP
allowlisting to ensure that a request is from Cloud CDN or the
external Application Load Balancer. However, this doesn't prevent other Media CDN
customers from attempting to access your content by specifying your origin in
their configuration.
Optimize the cache
The following recommended practices help optimize the cache.
Optimize cache TTLs
You can set or override the TTLs to fine tune how long Cloud CDN caches
your responses and when Cloud CDN revalidates your responses.
You can also define a client-facing TTL to make the most of browser caches.
For more information, see Using TTL settings and overrides .
Set the expiration for time-sensitive content
Each piece of content in a Cloud CDN cache has an associated expiration
time, and it's important to set an expiration that is appropriate for your use
case. Because origin servers must resend content that expires on cache servers,
you need to choose the expiration carefully.
One method for choosing the expiration is to categorize
content based on how often you update the content; for example:
Near real-time updates such as live feeds for sporting events or traffic
Frequent updates such as weekly, daily, or hourly weather information or
front-page news images
Infrequent updates such as a website logo or CSS or JavaScript files
Next, choose the expiration by content category. For example, a five-second
expiration might be appropriate for near real-time sports scores, and a one-hour
expiration could be used for weather updates. For content stored in
Cloud Storage, set the expiration times by using
Cache-Control metadata .
When content is served by Compute Engine, you control expiration times
by configuring your web server software.
Expiration times are specified by the max-age and s-maxage values
in the Cache-Control header. This header is defined by the
HTTP specification .
For example, the following Cache-Control header makes the associated content
publicly readable and cacheable with a cache expiration of 72 hours
(259200 seconds):
Cache-Control: public, max-age=259200
To maximize caching, follow the guidelines in the
Caching overview . Remember that max-age and s-maxage
values in the Cache-Control metadata field work together in the following
ways:
The max-age and s-maxage values are measured in seconds.
The s-maxage value applies only to shared caches, not browser caches.
The max-age value applies to all caches unless s-maxage overrides it.
For content that changes infrequently or that must change along
with related content, it's often appropriate to use a long expiration time
in combination with versioned URLs .
Use versioned URLs to update content
Versioning content serves a different version of the same content, effectively
removing it by showing users new content before the cache entry expires. Because
versioning is free, we recommend that you use versioning as the
default approach for updating cacheable content.
To version content, add a parameter to the URL, such as a version number.
There are various ways to include parameters in URLs, such as:
Add a query string: file.ext?v=100 .
For backend buckets, any query strings used for versioning must be specified
in the configuration for the backend bucket. For more information, see Query
string include list for Cloud Storage cache
keys .
Alter the filename: file.1.0.0.ext or file_v100.ext .
Alter the path: /v100/file.ext .
When you add the parameter, you change the name of the file and the URL.
This change forces the cache to ignore any existing cache entry.
Use invalidation sparingly to remove content
Invalidation removes content
from the Cloud CDN distributed cache servers
before the cache entry expires. Invalidation is eventually consistent.
We recommend that you use invalidation sparingly and only as a last resort.
For example, invalidation is useful when you must remove content for legal
reasons or because of an accidental upload. Otherwise, we recommend that
you use versioning whenever possible or wait until the content expires normally.
Cloud CDN cache servers routinely evict infrequently accessed
content to make room for new content. Content that is not accessed for 30 days
is removed unconditionally.
Cache invalidations are rate limited .
To learn more about invalidation,
see the Cache invalidation overview .
Optimize uploaded file consistency
The following recommended practices help optimize the consistency of file uploads.
Avoid updating existing files
Rather than update existing files, upload new versions.
For new files, use unique names that can include version numbers or dates.
Appending a version number (for example, file_v2.css ) or a date (for example,
file_20230806.js ) to the filename helps to ensure that Cloud CDN
fetches the correct, updated version. Appending a parameter to the file URL (for example,
file.css?v=2 ) to force a new version to be fetched isn't recommended because
this approach doesn't address the risk of caching a nonatomic origin file
update, where partial or incomplete files can still be cached.
It's crucial to upload new versions of dependencies before uploading the files
that reference them. This practice helps to ensure that all references are to
complete, updated files, thereby reducing the risk of serving partially updated or
truncated files.
Make atomic updates to files
When updating existing files is necessary, do it atomically.
If a file is accessed and cached before an upload is complete, it might be
cached as an incomplete or truncated file. For example, a file, such as
/index.html , can't have a unique name but can point to other files that have
unique names.
Uploading a file under its target name can result in incomplete files being
cached when they are accessed during the upload. Instead, upload the file under a
temporary name and rename it to the target name only after the upload is
complete. This practice helps ensure that the file is fully and immediately
available when referenced.
When existing files are updated, byte-range caching
can result in Cloud CDN holding ranges of the earlier file after the new
file has been uploaded. If Cloud CDN has cached ranges of the earlier file,
requests for missing chunks can lead to partial responses. This happens
because Cloud CDN detects that the origin file has changed
(because etag or last-modified changes), deletes any stale content,
disconnects any in-progress downloads, and generates an error, which prompts
the client to retry. To mitigate this problem, issue
invalidations for byte-range cached files that are being updated.
Optimize Monitoring and Logging
The following recommended practices help optimize Monitoring
and Logging.
Ensure that logging is enabled for Cloud CDN
A best practice for managing Cloud CDN is to ensure that logging is
enabled for all Cloud CDN enabled backends .
Use the custom monitoring dashboard for Cloud CDN
To ensure greater reliability and performance, a best practice is to regularly
review monitoring metrics related to Cloud CDN. A great place to start
is with the Cloud CDN custom monitoring dashboard .
Review third-party performance tests
Review reports from third-party providers, such as the availability, latency,
and throughput reports provided by
Citrix Radar .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
