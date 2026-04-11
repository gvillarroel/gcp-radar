---
title: "Conditional Requests Via ETag / Generation / Metageneration Preconditions\
  \ \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storage/latest/generation_metageneration
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storage/latest/generation_metageneration
  title: "Conditional Requests Via ETag / Generation / Metageneration Preconditions\
    \ \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Conditional Requests Via ETag / Generation / Metageneration Preconditions
Stay organized with collections
Save and categorize content based on your preferences.
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.1
3.3.1
3.2.0
3.1.1
3.0.0
2.19.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.1
2.1.0
2.0.0
1.44.0
1.43.0
1.42.3
1.41.1
1.40.0
1.39.0
1.38.0
1.37.1
1.36.2
1.35.1
1.34.0
1.33.0
1.32.0
1.31.2
1.30.0
1.29.0
1.28.1
1.27.0
1.26.0
1.25.0
1.24.1
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
Preconditions tell Cloud Storage to only perform a request if the
ETag, generation, or
metageneration number of the affected object
meets your precondition criteria. These checks of the ETag, generation, and
metageneration numbers ensure that the object is in the expected state,
allowing you to perform safe read-modify-write updates and conditional
operations on objects
Concepts
ETag
An ETag is returned as part of the response header whenever a resource is
returned, as well as included in the resource itself. Users should make no
assumptions about the value used in an ETag except that it changes whenever the
underlying data changes, per the
specification
The ETag attribute is set by the GCS back-end, and is read-only in the
client library.
Metageneration
When you create a Bucket ,
its metageneration is initialized
to 1 , representing the initial version of the bucket’s metadata.
When you first upload a
Blob (“Object” in the GCS back-end docs),
its metageneration is likewise
initialized to 1 . representing the initial version of the blob’s metadata.
The metageneration attribute is set by the GCS back-end, and is read-only
in the client library.
Each time you patch or update the bucket’s / blob’s metadata, its
metageneration is incremented.
Generation
Each time you upload a new version of a file to a
Blob (“Object” in the GCS back-end docs),
the Blob’s generation is changed, and its
metageneration is reset to 1 (the first
metadata version for that generation of the blob).
The generation attribute is set by the GCS back-end, and is read-only
in the client library.
See also
Storage API Generation Precondition docs
Conditional Parameters
Using if_etag_match
Passing the if_etag_match parameter to a method which retrieves a
blob resource (e.g.,
Blob.reload )
makes the operation conditional on whether the blob’s current ETag matches
the given value. This parameter is not supported for modification (e.g.,
Blob.update ).
Using if_etag_not_match
Passing the if_etag_not_match parameter to a method which retrieves a
blob resource (e.g.,
Blob.reload )
makes the operation conditional on whether the blob’s current ETag matches
the given value. This parameter is not supported for modification (e.g.,
Blob.update ).
Using if_generation_match
Passing the if_generation_match parameter to a method which retrieves a
blob resource (e.g.,
Blob.reload ) or modifies
the blob (e.g.,
Blob.update )
makes the operation conditional on whether the blob’s current generation
matches the given value.
As a special case, passing 0 as the value for if_generation_match
makes the operation succeed only if there are no live versions of the blob.
Using if_generation_not_match
Passing the if_generation_not_match parameter to a method which retrieves
a blob resource (e.g.,
Blob.reload ) or modifies
the blob (e.g.,
Blob.update )
makes the operation conditional on whether the blob’s current generation
does not match the given value.
If no live version of the blob exists, the precondition fails.
As a special case, passing 0 as the value for if_generation_not_match
makes the operation succeed only if there is a live version of the blob.
Using if_metageneration_match
Passing the if_metageneration_match parameter to a method which retrieves
a blob or bucket resource
(e.g., Blob.reload ,
Bucket.reload )
or modifies the blob or bucket (e.g.,
Blob.update
Bucket.patch )
makes the operation conditional on whether the resource’s current
metageneration matches the given value.
Using if_metageneration_not_match
Passing the if_metageneration_not_match parameter to a method which
retrieves a blob or bucket resource
(e.g., Blob.reload ,
Bucket.reload )
or modifies the blob or bucket (e.g.,
Blob.update
Bucket.patch )
makes the operation conditional on whether the resource’s current
metageneration does not match the given value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
