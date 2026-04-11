---
title: "Sending batch requests \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/batch
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/batch
  title: "Sending batch requests \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
Sending batch requests
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how to batch JSON API calls together to reduce the number of
HTTP connections your client has to make when accessing Cloud Storage.
Overview
Each HTTP connection that your client makes results in a certain amount of
overhead. The Cloud Storage JSON API supports batching, to allow your client
to put several API calls into a single HTTP request.
Examples of situations when you might want to use batching:
Updating metadata, such as permissions, on many objects.
Deleting many objects.
In each case, instead of sending each call separately, you can group them
together into a single HTTP request. All the inner requests must go to the
Cloud Storage JSON API.
You should not include more than 100 calls in a single batch request. If you
need to make more calls than that, use multiple batch requests. The total batch
request payload must be less than 10MB.
Note: The batch system for the Cloud Storage JSON API uses the same syntax
as the OData batch processing system, but the semantics differ. Note: Cloud Storage does not support batch operations for uploading
or downloading.
Batch details
A batch request consists of multiple API calls combined into one HTTP request,
which can be sent to the Cloud Storage batch endpoint , which is
https://storage.googleapis.com/batch/storage/v1 . This section describes the batch syntax
in detail; later, there's an example .
Note: A set of n requests batched together counts toward your usage limit
and operations costs as n requests, not as one request. The batch
request is taken apart into a set of n requests before processing.
Format of a batch request
A batch request is a single standard HTTP request containing multiple
Cloud Storage JSON API calls. This main request uses the multipart/mixed
content type. Within the main HTTP request, there are multiple parts
which each contain a nested HTTP request.
Each part begins with its own Content-Type: application/http HTTP header.
The part can also have an optional Content-ID header. These headers
mark the beginning of the part, but they're separate from the nested HTTP
request. This means that after the server unwraps the batch request into
separate requests, the part headers are ignored.
The body of each part is itself a complete HTTP request, with its own verb,
URL, headers, and body. These HTTP requests must only contain the path portion
of the URL; full URLs can have undefined behavior.
The HTTP headers for the outer batch request, except for the Content- headers
such as Content-Type , apply to every nested request as well. However, if
you specify a given HTTP header in both the outer request and a nested request,
then the nested request's header value overrides the outer batch request
header's value for that specific request.
For example, if you provide an Authorization header for a specific nested
request, then that header applies only to the request that specified it. If you
provide an Authorization header for the outer request, then that header
applies to all of the nested requests unless they override it with an
Authorization header of their own.
When Cloud Storage receives the batched request, it applies the outer
request's query parameters and headers (as appropriate) to each part and
then treats each part as if it were a separate HTTP request.
Response to a batch request
The Cloud Storage response is a single standard HTTP response with a
multipart/mixed content type; each part of this main response is the response
to one of the requests in the batched request. The order of responses is the
same as the requests.
Like all the parts in a request, each response part contains a complete HTTP
response, including a status code, headers, and a body. And like the parts in
the request, each response part is preceded by a Content-Type header that
marks the beginning of the part. For more information on status codes, see
HTTP status and error codes for the Cloud Storage JSON API .
If a given part of the request had a Content-ID header, then the corresponding
part of the response has a matching Content-ID header. The Content-ID header
of the response begins with response- , followed by the Content-ID value
used in the request, as shown in the example .
Caution: The server may perform your requests in any order. Do not rely on
requests executing in the order you specify them. To ensure that two calls occur
in a specific order, send the first one by itself, then wait for the response
to the first one before sending the second one.
Example
The following batch example updates the custom metadata for three objects
in example-bucket .
Example batch HTTP request
HTTP
POST /batch/storage/v1 HTTP/1.1
Host: storage.googleapis.com
Content-Length: 960
Content-Type: multipart/mixed; boundary="===============7330845974216740156=="
Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh_s-6Uw7p8vtgSwg
--===============7330845974216740156==
Content-Type: application/http
Content-Transfer-Encoding: binary
Content-ID: <b29c5de2-0db4-490b-b421-6a51b598bd22+1>
PATCH /storage/v1/b/example-bucket/o/obj1 HTTP/1.1
Content-Type: application/json
accept: application/json
content-length: 31
{"metadata": {"type": "tabby"}}
--===============7330845974216740156==
Content-Type: application/http
Content-Transfer-Encoding: binary
Content-ID: <b29c5de2-0db4-490b-b421-6a51b598bd22+2>
PATCH /storage/v1/b/example-bucket/o/obj2 HTTP/1.1
Content-Type: application/json
accept: application/json
content-length: 32
{"metadata": {"type": "tuxedo"}}
--===============7330845974216740156==
Content-Type: application/http
Content-Transfer-Encoding: binary
Content-ID: <b29c5de2-0db4-490b-b421-6a51b598bd22+3>
PATCH /storage/v1/b/example-bucket/o/obj3 HTTP/1.1
Content-Type: application/json
accept: application/json
content-length: 32
{"metadata": {"type": "calico"}}
--===============7330845974216740156==--
Client libraries
C++
The C++ client library does not support batched requests.
C#
The C# client library does not support batched requests.
Go
The Go client library does not support batched requests.
Java
For more information, see the Cloud Storage Java API reference documentation .
import com.google.api.gax.paging. Page ;
import com.google.cloud.storage. Blob ;
import com.google.cloud.storage. BlobInfo ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageBatch ;
import com.google.cloud.storage. StorageBatchResult ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
import java.util.HashMap ;
import java.util.List ;
import java.util.Map ;
import java.util.Objects ;
import java.util.stream.Collectors ;
public class BatchSetObjectMetadata {
public static void batchSetObjectMetadata (
String projectId , String bucketName , String pathPrefix ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
// The directory prefix. All objects in the bucket with this prefix will have their metadata
// updated
// String pathPrefix = "yourPath/";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Map<String , String > newMetadata = new HashMap <> ();
newMetadata . put ( "keyToAddOrUpdate" , "value" );
Page<Blob> blobs =
storage . list (
bucketName ,
Storage . BlobListOption . prefix ( pathPrefix ),
Storage . BlobListOption . delimiter ( "/" ));
StorageBatch batchRequest = storage . batch ();
// Add all blobs with the given prefix to the batch request
List<StorageBatchResult<Blob> > batchResults =
blobs
. streamAll ()
. map ( blob - > batchRequest . update ( blob . toBuilder (). setMetadata ( newMetadata ). build ()))
. collect ( Collectors . toList ());
// Execute the batch request
batchRequest . submit ();
List<StorageException> failures =
batchResults . stream ()
. map (
r - > {
try {
BlobInfo blob = r . get ();
return null ;
} catch ( StorageException e ) {
return e ;
}
})
. filter ( Objects :: nonNull )
. collect ( Collectors . toList ());
System . out . println (
( batchResults . size () - failures . size ())
+ " blobs in bucket "
+ bucketName
+ " with prefix '"
+ pathPrefix
+ "' had their metadata updated successfully." );
if ( ! failures . isEmpty ()) {
System . out . println ( "While processing, there were " + failures . size () + " failures" );
for ( StorageException failure : failures ) {
failure . printStackTrace ( System . out );
}
}
}
}
Node.js
The Node.js client library does not support batched requests.
PHP
The PHP client library does not support batched requests.
Python
For more information, see the Cloud Storage Python API reference documentation .
from google.cloud import storage
def batch_request ( bucket_name , prefix = None ):
"""
Use a batch request to patch a list of objects with the given prefix in a bucket.
Note that Cloud Storage does not support batch operations for uploading or downloading.
Additionally, the current batch design does not support library methods whose return values
depend on the response payload.
See https://cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.batch
"""
# The ID of your GCS bucket
# bucket_name = "my-bucket"
# The prefix of the object paths
# prefix = "directory-prefix/"
client = storage . Client ()
bucket = client . bucket ( bucket_name )
# Accumulate in a list the objects with a given prefix.
blobs_to_patch = [ blob for blob in bucket . list_blobs ( prefix = prefix )]
# Use a batch context manager to edit metadata in the list of blobs.
# The batch request is sent out when the context manager closes.
# No more than 100 calls should be included in a single batch request.
with client . batch ():
for blob in blobs_to_patch :
metadata = { "your-metadata-key" : "your-metadata-value" }
blob . metadata = metadata
blob . patch ()
print (
f "Batch request edited metadata for all objects with the given prefix in { bucket . name } ."
)
Ruby
To learn how to make a batch request using Ruby, see the
Cloud Storage Ruby API reference documentation .
Example batch HTTP response
This is the response to the HTTP example request in the previous section.
HTTP/1.1 200 OK
Content-Type: multipart/mixed; boundary=batch_pK7JBAk73-E=_AA5eFwv4m2Q=
Date: Mon, 22 Jan 2018 18:56:00 GMT
Expires: Mon, 22 Jan 2018 18:56:00 GMT
Cache-Control: private, max-age=0
Content-Length: 3767
--batch_pK7JBAk73-E=_AA5eFwv4m2Q=
Content-Type: application/http
Content-ID: <response-b29c5de2-0db4-490b-b421-6a51b598bd22+1>
HTTP/1.1 200 OK
ETag: "lGaP-E0memYDumK16YuUDM_6Gf0/V43j6azD55CPRGb9b6uytDYl61Y"
Content-Type: application/json; charset=UTF-8
Date: Mon, 22 Jan 2018 18:56:00 GMT
Expires: Mon, 22 Jan 2018 18:56:00 GMT
Cache-Control: private, max-age=0
Content-Length: 846
{
"kind": "storage#object",
"id": "example-bucket/obj1/1495822576643790",
.
.
.
"metadata": {
"type": "tabby"
},
.
.
.
}
--batch_pK7JBAk73-E=_AA5eFwv4m2Q=
Content-Type: application/http
Content-ID: <response-b29c5de2-0db4-490b-b421-6a51b598bd22+2>
HTTP/1.1 200 OK
ETag: "lGaP-E0memYDumK16YuUDM_6Gf0/91POdd-sxSAkJnS8Dm7wMxBSDKk"
Content-Type: application/json; charset=UTF-8
Date: Mon, 22 Jan 2018 18:56:00 GMT
Expires: Mon, 22 Jan 2018 18:56:00 GMT
Cache-Control: private, max-age=0
Content-Length: 846
{
"kind": "storage#object",
"id": "example-bucket/obj2/1495822576643790",
.
.
.
"metadata": {
"type": "tuxedo"
},
.
.
.
}
--batch_pK7JBAk73-E=_AA5eFwv4m2Q=
Content-Type: application/http
Content-ID: <response-b29c5de2-0db4-490b-b421-6a51b598bd22+3>
HTTP/1.1 200 OK
ETag: "lGaP-E0memYDumK16YuUDM_6Gf0/d2Z1F1_ZVbB1dC0YKM9rX5VAgIQ"
Content-Type: application/json; charset=UTF-8
Date: Mon, 22 Jan 2018 18:56:00 GMT
Expires: Mon, 22 Jan 2018 18:56:00 GMT
Cache-Control: private, max-age=0
Content-Length: 846
{
"kind": "storage#object",
"id": "example-bucket/obj3/1495822576643790",
.
.
.
"metadata": {
"type": "calico"
},
.
.
.
}
--batch_pK7JBAk73-E=_AA5eFwv4m2Q=--
If the overall request isn't formatted correctly and Cloud Storage
is unable to parse it into sub-requests, you receive a 400 error. Otherwise,
Cloud Storage returns a 200 status code, even if some or all of the
sub-requests fail.
When the overall request returns with a 200 status code, the
response contains results for each sub-request, including a status code for
each, which indicates whether the sub-request succeeded or failed. For example,
when batch deleting objects, each successful sub-request contains a
204 No Content status code.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
