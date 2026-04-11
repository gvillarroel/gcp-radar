---
title: "Canonical requests \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/authentication/canonical-requests
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/authentication/canonical-requests
  title: "Canonical requests \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Canonical requests
Stay organized with collections
Save and categorize content based on your preferences.
Canonical requests define the elements of a request that a user must include
when sending V4 signature-authenticated requests, such as signed URLs ,
to Cloud Storage.
Overview
A canonical request is a string that represents a specific HTTP request to
Cloud Storage. You use a canonical request along with a cryptographic
key, such as an RSA key, to create a signature that is then included
in the actual request as authentication.
A canonical request includes information such as the HTTP verb, query string
parameters, and headers expected to be used in the actual request,
as well as the object, bucket, or other resource to be requested.
A canonical request ensures that when Cloud Storage receives the
request, it can calculate the same signature that you calculated. If your
version and the version calculated by Cloud Storage
don't match, the request fails.
Structure
Canonical requests have the following structure, including the use of newlines
between each element:
HTTP_VERB
PATH_TO_RESOURCE
CANONICAL_QUERY_STRING
CANONICAL_HEADERS
SIGNED_HEADERS
PAYLOAD
HTTP verbs
Signed requests can use the following HTTP verbs, which must be specified as
part of the canonical request:
DELETE
GET
HEAD
POST 1
PUT
1 Signed URLs can only be used for POST requests that initiate a
resumable upload. See Using signed URLs with resumable uploads for more
information.
Resource path
Canonical requests include the path to the resource that the request applies to.
The path to the resource is everything that follows the hostname but precedes
any query string.
For example, if the Cloud Storage URL is
https://storage.googleapis.com/example-bucket/cat-pics/tabby.jpeg ,
then the path to the resource is /example-bucket/cat-pics/tabby.jpeg .
If you use an alternative Cloud Storage URL such as
https://example-bucket.storage.googleapis.com/cat-pics/tabby.jpeg
then the path to the resource is /cat-pics/tabby.jpeg .
For additional URL endpoints that can be used with signed URLs, see
XML API request endpoints .
When defining the resource path, you must percent encode the
following reserved characters: ?=!#$&'()*+,:;@[]" Any other percent encoding
used in the URL should also be included in the resource path.
Canonical Query string
Canonical requests specify each query string parameter that will be subsequently
included in any signed request that uses the relevant signature, with the
exception of the X-Goog-Signature or X-Amz-Signature query string parameter.
The query string specified in the canonical request is called the
canonical query string
The query string is everything that follows the question mark ( ? ) at the end
of the resource path.
For example, if the Cloud Storage URL is
https://storage.googleapis.com/example-bucket/cat-pics/tabby.jpeg?generation=1360887697105000&userProject=my-project ,
then the query string is generation=1360887697105000&userProject=my-project .
When constructing the canonical query string:
The parameters in the query string must be sorted by name using a
lexicographical sort by code point value.
Each parameter in the query string must be separated with & .
If your canonical query string is empty, this portion of the overall
canonical request is just a new line ( \n ).
Required query string parameters
Most query string parameters are added as needed, but the following must
be included in your canonical request when you intend to use it to make a
signed URL :
X-Goog-Algorithm : The algorithm you will use to sign the URL. Valid values
are GOOG4-RSA-SHA256 and GOOG4-HMAC-SHA256 .
X-Goog-Credential : The credentials you will use to sign the URL. Credentials
consist of an authorizer and a credential scope given in the format:
AUTHORIZER %2F CREDENTIAL_SCOPE . The
authorizer can be a service account name or an HMAC key access ID .
X-Goog-Date : The date and time the signed URL becomes usable, in the
ISO 8601 basic format YYYYMMDD'T'HHMMSS'Z' .
X-Goog-Expires : The lifetime of the signed URL, measured in seconds from
X-Goog-Date . The longest expiration value is 604800 seconds (7 days).
X-Goog-SignedHeaders : A semicolon-separated list of names of headers
defined in the canonical request. These are also known as signed headers .
host must be one of the header names.
These query string parameters subsequently must be used in the signed URL
itself, along with the X-Goog-Signature query string parameter, which contains
the signature authenticating the request.
Note: Cloud Storage also accepts these query string parameters if
they are consistently prefixed with X-Amz- instead of X-Goog- .
Canonical Headers
Canonical requests include any headers that must be subsequently included in
signed requests that use the relevant signature. However, such signed requests
can include additional headers that were not specified in the canonical
request, except as noted in required headers . Headers
specified in the canonical request are called canonical headers .
Canonical headers can include custom headers as well as extension headers
that begin with x-goog- .
When specifying canonical headers, keep in mind the following:
Make all header names lowercase.
Sort all headers by header name using a lexicographical sort by code point
value.
Separate each header with a newline ( \n ).
Eliminate duplicate header names by creating one header name with a
comma-separated list of values. Be sure there is no whitespace between the
values, and be sure that the order of the comma-separated list matches the
order that the headers appear in your request. For more information, see
RFC 7230 section 3.2 .
Replace any folding whitespace or newlines (CRLF or LF) with a single space.
For more information about folding whitespace, see
RFC 7230, section 3.2.4. .
Remove any whitespace around the colon that appears after the header name.
For example, using the custom header x-goog-acl: private without removing
the space after the colon returns a 403 Forbidden error, because the
request signature you calculate does not match the signature
Cloud Storage calculates.
Example
If you have the following set of headers:
host: storage.googleapis.com
content-type: text/plain
x-goog-meta-reviewer: jane
x-goog-meta-reviewer: john
The construction of the canonical headers in the canonical request would be:
content-type:text/plain
host:storage.googleapis.com
x-goog-meta-reviewer:jane,john
Note: In these examples, newlines are shown as actual new lines and not \n .
Required canonical headers
Most headers, such as content-type , are added as needed, but the following
headers must always be defined in the canonical headers if you intend to use
them in the signed request:
host : The URI used to access Cloud Storage.
Headers prefixed with x-goog- . The only such header which is optional to
include as a canonical header is x-goog-content-sha256 .
Headers prefixed with x-amz- . The only such header which is optional to
include as a canonical header is x-amz-content-sha256 .
Signed headers
A signed header is the name portion of a canonical header.
To create the signed headers list, convert all header names to lowercase, sort
them by character code, and use a semicolon ( ; ) to separate each.
Example
If you have the following set of headers:
host: storage.googleapis.com
content-type: text/plain
x-goog-meta-reviewer: jane
x-goog-meta-reviewer: john
The construction of the signed headers in the canonical request would be:
content-type;host;x-goog-meta-reviewer
Payload
If your canonical request will be used to create a signed URL , this value
should be the string UNSIGNED-PAYLOAD .
If your canonical request will be used to create a signature for use in an
Authorization header :
Use UNSIGNED-PAYLOAD if you want to allow arbitrary payloads as part of
the request.
Use UNSIGNED-PAYLOAD if the request will initiate a resumable upload,
because the x-goog-content-sha256 header is ignored for
resumable uploads.
If you want to allow only a specific payload, this value should be a
lowercase, hex-encoded, SHA-256 hash of the intended payload. To require
an empty payload, use an empty string as the input to the hash function.
An example of a hashed payload (in this case an empty payload) is:
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
Example
The following is an example of a properly formed canonical request, with
newlines shown as actual new lines and not \n :
GET
/example-bucket/tabby.jpeg
host:storage.googleapis.com
x-amz-content-sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
x-amz-date:20190301T190859Z
host;x-amz-content-sha256;x-amz-date
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
What's next
Learn about signatures and how they use canonical requests.
Build a request that uses a canonical request .
Build signed URLs , which use canonical requests.
Learn more about signed URLs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
