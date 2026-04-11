---
title: "Authenticate content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/authenticate-content
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/authenticate-content
  title: "Authenticate content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation"
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
Authenticate content
Stay organized with collections
Save and categorize content based on your preferences.
Cloud CDN offers three ways to help you control access to your cached content:
Signed URLs let you serve responses from Google Cloud's
globally distributed caches when you need requests to be authorized.
Anyone with the signed URL can access the resource for a limited time.
Signed cookies also let you access a
resource for a limited time. They are helpful when you need to sign tens or
hundreds of URLs for each user.
Private origin authentication lets you limit connections to your
Amazon Simple Storage Service (Amazon S3) buckets or other compatible object stores and prevent users
from accessing them directly.
Signed URLs
A signed URL is a URL that provides limited permission and time to make a
request.
Use cases
In some scenarios, you might not want to require your users to have a Google
Account to access Cloud CDN content, but you still want to control
access by using your application-specific logic.
The typical way to address this use case is to provide a signed URL
to a user, which gives the user read access to that resource for a limited time.
You specify an expiration time when you create the signed URL. Anyone who knows
the URL can access the resource until the expiration time for the URL is reached
or the key used to sign the URL is rotated.
Use signed URLs in the following cases:
To restrict access to individual files, such as an installation
download.
To serve users with client applications that don't support cookies.
How signed URLs work
Signed URLs give a client temporary access to a private resource without
requiring additional authorization. To achieve this, selected elements of a
request are hashed and cryptographically signed by using a strongly random key
that you generate.
When a request uses the signed URL that you provided, the request is considered
authorized to receive the requested content. When Cloud CDN receives a
request with a bad signature for an enabled service, the request is rejected and
never goes to your backend for handling.
Generally, a signed URL can be used by anyone who has it. However, a signed URL
is usually only intended to be used by the client to which the URL was given.
To mitigate the risk of the URL being used by a different client, signed URLs
expire at a time chosen by you. To minimize the risk of a signed URL being
shared, set it to expire as soon as possible.
How URLs are signed
Before you can sign URLs, you create one or more cryptographic keys on a backend
service, backend bucket, or both. You then sign and cryptographically hash a URL
by using the Google Cloud CLI or your own code.
Handling of signed URLs
When signed URL handling is enabled on a backend, Cloud CDN gives
special handling to requests with signed URLs. Specifically, requests with a
Signature query parameter are considered signed. When such a request is
received, Cloud CDN verifies the following:
The HTTP method is GET , HEAD , OPTIONS , or TRACE .
The Expires parameter is set to a future time.
The request's signature matches the signature computed by using the named key.
If any of these checks fails, a 403 Forbidden response is served. Otherwise,
the request is either proxied to the backend or served from the cache.
OPTIONS and TRACE requests are always proxied to the backend directly
and not served from the cache. All valid
signed requests for a particular base URL (the part before the Expires
parameter) share the same cache entry. Responses to signed and unsigned
requests don't share cache entries. Responses are cached and served until the
expiration time that you set.
Content that requires signed requests is often marked as uncacheable by using the
Cache-Control header. To make such objects compatible with
Cloud CDN without requiring backend changes, Cloud CDN
overrides the Cache-Control header when responding to requests that have valid
signed URLs. Cloud CDN treats the content as cacheable and uses
the max-age parameter set in your Cloud CDN configuration. The
response served still has the Cache-Control headers that the backend generated.
The URL returned from the gcloud CLI or produced by your custom
code can be distributed according to your needs. We recommend signing only HTTPS
URLs because HTTPS provides a secure transport that prevents the signature
component of the signed URL from being intercepted. Similarly, you should
distribute the signed URLs over secure transport protocols such as TLS/HTTPS.
For instructions for using signed URLs with Cloud CDN,
see Use signed URLs .
Signed cookies
A signed cookie is a cookie that provides limited permission and time to make
requests for a set of files.
Use cases
Use signed cookies in the following cases:
To provide access to multiple restricted files.
To avoid changing your current URLs.
To avoid updating URLs each time you refresh authorization to access content.
Streaming media by using HLS and DASH
If you serve video and audio content by using the HTTP Live Streaming (HLS) or
Dynamic Adaptive Streaming over HTTP (DASH) protocols, you typically generate a
manifest that contains a list of URLs to video and audio segments. You might
have multiple instances of each segment to provide different encodings
(codec, bitrate, resolution) to a client.
Although you can use Cloud CDN's signed URLs to sign and authorize
access to each of these URLs, dynamically generating all possible combinations
on a per-user basis is burdensome and increases origin load and application
complexity.
Signed cookies are designed to address this concern. You can provide the user
with a signed cookie that authorizes them to access any content that matches a
policy (URL prefix and expiry date) without having to individually generate or
sign your media manifests. You can refresh user access periodically through the
JavaScript fetch() API on page navigation or other background mechanisms in
built-in applications. The ability to refresh user access also lets you use short
expiry times, making it harder for users to share protected content.
You can issue these cookies to users with multiple browser clients and
other HTTP-speaking clients, such as Google's ExoPlayer and iOS' AVPlayer.
Binary downloads (gaming)
Similar to media streaming, if you provide game client downloads, you might
divide large multi-gigabyte patches or game data into smaller chunks to support
finer-grained caching, invalidation, and concurrency.
These chunks are typically listed in a manifest. Signed cookies let you
authorize access to those downloads to authenticated users only without
requiring modifications to the manifest, and (as with signed URLs) without
foregoing the benefits of Cloud CDN caching.
How signed cookies work
Configuring and issuing signed cookies requires three steps:
Create a signing key for the given backend service.
Create a cookie value with the allowed URL prefix, expiry, key name, and
cryptographic signature.
Issue the cookie in your application code.
Cloud CDN validates these signed cookies when they are included
with requests.
You can prevent users from circumventing your signed cookie controls when using
a Cloud Storage bucket. To do so, constrain access to the underlying
bucket by removing the allUsers role and granting the Cloud CDN
service account read access to the bucket.
Similarly, your virtual machine (VM) instances should validate the signatures
on every signed request that they serve.
For instructions for using signed cookies with Cloud CDN,
see Use signed cookies .
Private origin authentication
Private origin authentication gives Cloud CDN long-term access to
private Amazon S3 buckets or compatible object stores.
Cloud CDN can then serve content from these origins without using
public read access.
Private origin authentication is origin facing, while
signed URLs
and signed cookies are client facing. You
can enable both for the same content. Private origin authentication limits
non-CDN access to your origins and content. Signed URLs and cookies control
which users can access Cloud CDN.
Private origin authentication is supported for Cloud CDN with
a global external Application Load Balancer or a classic Application Load Balancer.
Note: Cloud CDN does not support AWS Signature Version 4A for
Multi-Region Access Points.
For instructions for using private origin authentication with Cloud CDN, see
Configure private origin authentication .
Caveats and limitations
You are solely responsible for any consent and privacy compliance needed for
your signed cookies. Signed cookies are issued and managed by you, not Google.
If you use both signed URLs and signed cookies to control access to the same
files, and a viewer uses a signed URL to request a file, Cloud CDN
determines whether to return the file to the viewer based only on the signed
URL. Cloud CDN only considers signed cookies if the URL is not
signed.
If you have configured your service for signed requests, and your URL includes
Signature as a query parameter, Cloud CDN attempts to interpret
your URL as a signed URL. If Cloud CDN attempts to treat your URL as
a signed URL when you didn't intend it, your URL likely isn't a valid signed
URL, so Cloud CDN rejects it.
Browsers and other clients typically enforce limits on cookie size (4 KB per
cookie) and a total count of 50 per domain, as per
RFC 6265 . Consider
the total cookie payload sent from their domain.
Cloud CDN limits and restrictions apply, including a
maximum of three signed request keys per backend.
Signed requests are not charged differently from existing Cloud CDN
requests. However, failed (rejected) requests, such as those with expired
or otherwise invalid signatures, still incur cache lookup charges .
What's next
To learn about other best practices, see Web security best practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
