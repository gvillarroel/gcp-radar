---
title: "Troubleshoot Cloud CDN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/troubleshooting-steps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/troubleshooting-steps
  title: "Troubleshoot Cloud CDN \_|\_ Google Cloud Documentation"
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
Troubleshoot Cloud CDN
Stay organized with collections
Save and categorize content based on your preferences.
Learn about troubleshooting steps that you might find helpful
if you run into the following problems using Cloud CDN.
If the issue that you're seeing is related to
external backends , see also
Troubleshooting external backend and internet NEG
issues .
General problems and solutions
This section describes some common problems and their solutions.
Responses aren't being cached
If responses aren't being cached, first check that Cloud CDN is
enabled for your backend service
or backend bucket. When you enable Cloud CDN, it might take a few
minutes before responses begin to be cached.
Cloud CDN caches only responses with cacheable content .
This information is conveyed in HTTP response headers, in combination with the
backend configuration. When you configure a custom response header
with cdn_cache_status , you can observe the cache status in
Cloud CDN logs and determine
whether a response was served as a result of a cache miss.
If responses for a URL aren't being cached, check which headers are being
returned for that URL, and how cacheability is configured
for your backend.
There are several ways to check response headers:
In Google Chrome, the
DevTools network panel
In Mozilla Firefox, the
Developer Tools Network Monitor
A command-line tool such as
curl or
GNU Wget
The following example demonstrates using curl to check the HTTP response
headers for http://example.com/style.css :
curl -s -D - -o /dev/null http://example.com/style.css
Output:
HTTP/1.1 200 OK
Date: Tue, 16 Feb 2016 12:00:00 GMT
Content-Type: text/css
Content-Length: 1977
Via: 1.1 google
Comparing these headers with the cacheable
content requirements reveals that the response
is missing the required Cache-Control header (assuming that the cache
mode is set to USE_ORIGIN_HEADERS ).
The method for setting headers depends on the type of origin server. If you're
running a web server on Compute Engine, consult the web server software's
documentation for details about configuring response headers. For
Cloud Storage, marking the object as
shared publicly causes the
appropriate headers to be sent.
After reconfiguring the origin server to add the required header, you can use
curl again to check the result:
curl -s -D - -o /dev/null http://example.com/style.css
Output:
HTTP/1.1 200 OK
Date: Tue, 16 Feb 2016 12:00:30 GMT
Content-Type: text/css
Content-Length: 1977
Cache-Control: max-age=86400,public
Via: 1.1 google
curl -s -D - -o /dev/null http://example.com/style.css
Output:
HTTP/1.1 200 OK
Date: Tue, 16 Feb 2016 12:00:31 GMT
Content-Type: text/css
Content-Length: 1977
Cache-Control: max-age=86400,public
Via: 1.1 google
curl -s -D - -o /dev/null http://example.com/style.css
Output:
HTTP/1.1 200 OK
Date: Tue, 16 Feb 2016 12:00:30 GMT
Content-Type: text/css
Content-Length: 1977
Cache-Control: max-age=86400,public
Via: 1.1 google
Age: 2
The last response in this example includes an Age header.
Cloud CDN adds an Age header to responses that it serves from
cache. Here, the header indicates that the response was successfully served from
cache by using a cache entry that was created two seconds ago.
Additionally, if
ETags
are enabled on the backend instances,
Cloud CDN relies on ETags to confirm the freshness of the object.
If the backend instances serve different ETags on the same object,
Cloud CDN counts mismatches as a cache miss and refreshes the
object. To prevent this, either the backend instances must serve the same ETag
or ETags must be disabled.
To check this, run curl repeatedly and watch for changes in the ETag value:
curl -s -D - -o /dev/null http://example.com/image.png
Output:
HTTP/2 200
date: Fri, 20 Mar 2020 15:02:30 GMT
server: Apache
strict-transport-security: max-age=31536000; includeSubDomains
last-modified: Mon, 16 Mar 2020 04:20:59 GMT
etag: "10f-5a0f1256f1402"
accept-ranges: bytes
content-length: 271
cache-control: public, max-age=864000
expires: Mon, 30 Mar 2020 15:02:30 GMT
vary: Accept-Encoding
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
content-type: image/png
via: 1.1 google
alt-svc: clear
curl -s -D - -o /dev/null http://example.com/image.png
Output:
HTTP/2 200
date: Fri, 20 Mar 2020 15:03:11 GMT
server: Apache
strict-transport-security: max-age=31536000; includeSubDomains
last-modified: Mon, 16 Mar 2020 04:18:31 GMT
etag: "10f-5a0f11ca09b7a"
accept-ranges: bytes
content-length: 271
cache-control: public, max-age=864000
expires: Mon, 30 Mar 2020 15:03:11 GMT
vary: Accept-Encoding
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
content-type: image/png
via: 1.1 google
alt-svc: clear
Cloud Storage objects cannot be accessed
To provide access to objects in Cloud Storage, you must either configure
signed URLs or give the bucket and all of its objects public access for
allUsers .
If you decide to provide allUsers access, you can verify object-level access
as follows.
Console
In the Google Cloud console, open the Cloud Storage browser .
Open the Storage browser
Click a bucket to view the Bucket details page.
In the Public access column, hold the pointer over the
exclamation-point icon and click Edit access .
For each object in the bucket, ensure that the following permission is
set:
Entity: User
Name: allUsers
Access: Reader
To learn more about access control for Cloud Storage, see the
Identity and Access Management (IAM) documentation
for Cloud Storage.
To learn more about signed URLs, see
Using signed URLs .
If the objects are accessible but not being cached, see
Responses aren't being cached .
Private content was cached, or cached content is incorrect
If you know why the origin server served the private or incorrect content and
you can fix the problem, you can invalidate Cloud CDN caches
by using the following process:
Ensure that the origin server no longer returns the private or incorrect
content.
Request a cache invalidation to
instruct Cloud CDN to stop serving the cached content.
For more information, see the
Cache invalidation overview .
Cloud CDN caches only responses with cacheable
content
and serves responses from cache only up to the expiration time specified in the
response. If you don't know why the content was cached or cannot fix the
problem expediently, you might want to
disable Cloud CDN
until you can understand and fix the problem, and then
re-enable it.
For more information about what content is cached and for how long, see the
Caching overview .
Cache hit ratio is low
For performance and scalability, it's important to optimize cache hit
ratios . If you're experiencing
lower than expected cache hit ratios, make sure that you're following the best
practices to optimize the cache hit
ratio .
Use the following table to understand some of the possible reasons for a low
cache hit ratio and the potential fixes.
Reasons
Comments
Fixes
Your content isn't cacheable .
A cacheable response is an HTTP response that Cloud CDN can store.
Make sure that your content is
cacheable .
The cache mode isn't optimal for your application.
Cloud CDN has multiple
cache modes .
If you aren't using cache control headers to control caching behavior,
the recommended best practice it to let Cloud CDN cache all static
content.
There is a small amount of traffic.
During testing and experimentation, the amount of traffic that you're
generating is likely to be low. Google has a
global distributed cache , and requests
from different geographic locations go to different Google frontend
locations. In each frontend location, Google might have multiple discrete
instances of the cache.
Ensure that enough volume of traffic is being sent to Google to
populate all of the relevant caches.
During testing, make sure to shard traffic by URL so that all
traffic for each set of requests goes to Google. Don't randomly shard
each request to a different CDN provider.
Responses for particular URLs aren't cached.
Cloud CDN incorporates the full request URI into its cache
keys, so http://example.com/cat.jpg?color=orange and
http://example.com/cat.jpg?color=gray have separate cache
entries.
Always use a single URL for a given resource. If you need to pass
parameters to JavaScript running on an otherwise cacheable page, consider
using
fragment identifiers instead of
query strings .
The cache is unnecessarily sharded due to the Vary header
field.
The Vary header field in a response describes what parts of
a request message (aside from the method, Host header field,
and the request target) might influence the origin server's process for
selecting and representing a response. As an example, you might want to use
the Vary: Accept-Encoding header if you serve different content
to clients that can handle compressed responses and those that can't.
Use the Vary response header only when necessary.
You aren't using custom cache keys .
By default, Cloud CDN uses the complete request URL to build
the cache key. You can customize cache keys to include or omit any
combination of protocol, host, and query string. For example, if two
domains use the same static content, you can create a custom cache key
that omits the host field.
Use custom cache keys, where needed.
Multiple cache fills exist for the same content
In general, you can reduce the number of cache fills by increasing the
expiration times of your cacheable responses. Everything else being the same,
you see fewer cache fills for a response with
Cache-Control: public, max-age=86400 than one with
Cache-Control: public, max-age=1 .
For more information about expiration times, see
Expiration times and validation requests .
For information about configuring the appropriate response headers, see the
documentation for your web server software.
Cloud CDN operates numerous caches around the world, and old cache
entries are routinely evicted to make room for new content. As a result,
multiple cache fills per resource are expected as part of normal operation.
Compression isn't working
Cloud CDN offers dynamic compression
for origins that can't compress their responses. Where possible,
we recommend that you use compression at the origin because it reduces cache
fill costs.
If responses served by Cloud CDN are not compressed but should
be, check that the web server software running on your instances is configured
to compress responses. By default, some web server software automatically
disables compression for requests that include a Via header. The presence of a
Via header indicates that the request was forwarded by a proxy. HTTP proxies
such as the external Application Load Balancer add a Via
header to each request as
required by the HTTP specification .
To enable compression, you may have to override your web server's default
configuration to tell it to compress responses even if the request had a
Via header.
If you are using the nginx
web server software, modify the nginx.conf configuration file to enable
compression. The location of this file depends on where nginx is installed. In
many Linux distributions, the file is stored at /etc/nginx/nginx.conf .
To allow nginx compression to work with your external Application Load Balancer, add the
following two lines to the http section of nginx.conf:
gzip_proxied any;
gzip_vary on;
The first line enables compression even for requests forwarded by a proxy like
the external Application Load Balancer.
The second line adds a Vary: Accept-Encoding header to responses.
Vary: Accept-Encoding notifies caching proxies such as
Cloud CDN that they should maintain separate cache entries for
compressed and non-compressed variants of compressible resources.
After modifying nginx.conf, you need to restart nginx before it uses the new
configuration. In many Linux distributions, you can restart nginx
by running sudo service nginx restart or /etc/init.d/nginx restart .
Responses terminate with byte_range_caching_aborted errors
When Cloud CDN assembles a response from multiple byte range
requests , it checks whether those ranges
are from the same version of the resource by comparing ETag and Last-Modified
response headers. If Cloud CDN finds that the value of
either header is inconsistent with ranges it has already served to the client,
it aborts the response.
If you notice unexpected terminated responses,
Cloud Logging log entries
with byte_range_caching_aborted statusDetails, or your instances returning
412 Precondition Failed responses, ensure that the web server software running
on all your virtual machine (VM) instances returns the same ETag and
Last-Modified values for a given resource.
When serving files from disk, it's common for web server software to derive the
ETag and Last-Modified values from the file's modification time. In this case,
you can ensure that your VM instances report consistent values by using the same
image for all instances. For details about how your web
server software determines ETag and Last-Modified values, see your web
server software documentation.
Troubleshooting signed cookies
The following issues can occur when you are
using signed cookies .
Encoding
When generating a signature, the request is unexpectedly rejected
due to a signature mismatch.
When encoding the URL and Signature values, ensure that you are using the
URL-safe variant
of base64. Standard base64 fails when the generated characters aren't URL
safe. Padding is accepted.
Signing
Your request is rejected by Cloud CDN.
Ensure that you are using HMAC-SHA-1 as your signing algorithm, and not another
variant of HMAC.
Confirm that the (case-sensitive) KeyName parameter matches a valid key name
for the backend service or backend bucket) in use by Cloud CDN.
Don't sign query parameters when generating and signing a URLPrefix . Make
sure that URLPrefix contains only the scheme, host, and (partial) path
components of the URL.
Ensure that the signature block— URLPrefix , Expires , KeyName and the
Signature itself—are the last : -delimited sections of the cookie.
Ensure that URLPrefix , Expires , KeyName , and Signature occur in
that order.
Don't include an asterisk ( * ) character at the end of a URLPrefix in a
signed cookie.
Cookies
Browsers typically limit cookies to 4 KB per domain, with a limit of 50 cookies
per domain in total. Take note of other cookies that you are issuing and requiring
your clients to send because many web servers also have maximum request header
limits.
Ensure that you are using the colon character ( : ), Unicode code point
U+003A , as the delimiter for the named parameters in a signed cookie,
and not the ampersand ( & ) character.
Ensure that the Expires timestamp on the cookies that you are issuing isn't
unnecessarily short. Validity periods of less than one to two minutes might be
prone to clock skew issues between the issuing app and the
Cloud CDN infrastructure.
Make sure that you aren't setting multiple cookies for the same Domain and
Path with differing values. Set a single cookie per user with a URL
prefix value that encompasses all content that the user needs to access.
Error messages
This section provides information about some common error messages and how to
resolve them.
Cache invalidation errors
Error code
Notes
Invalid value for field 'resource.path'
The path value had an invalid format. Paths must begin with a
/ , must not contain a ? or # , and
must have only a single * , which must be a final character
after a / .
Paths must not be longer than 1024 characters. If you receive this
error, check the path value and correct any format errors.
This error only addresses the format of the path. A path that is of
valid format, but which doesn't exist, is still treated as valid.
Rate Limit Exceeded
Cloud CDN restricts the rate at which cache invalidation
operations can be performed. You can submit up to 500 invalidation requests
per minute. Each operation can specify a path pattern that matches
any number of objects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
