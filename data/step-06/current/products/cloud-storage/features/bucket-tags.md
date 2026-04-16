---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.930Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket tags"
feature_slug: "bucket-tags"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls"
  - "https://docs.cloud.google.com/storage/docs/access-control/lists"
keywords:
  - "bucket"
  - "tags"
  - "provide"
  - "tag"
  - "based"
  - "classification"
  - "and"
  - "access"
---

# Bucket tags

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Bucket tags provide tag-based classification and access control for Cloud Storage buckets; Bucket tags can be applied to Cloud Storage buckets for fine-grained access control.

## Extended Definition

Bucket tags provide tag-based classification and access control for Cloud Storage buckets; Bucket tags can be applied to Cloud Storage buckets for fine-grained access control.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls](https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)
- [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)

## Supporting Pages

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- For such buckets, iterate over the blobs returned by list blobs and call make public for each blob. move blob move blob ( blob , new name , client = None , if generation match = None , if generation not match = None , if metageneration match = None , if metageneration not match = None , if source generation match = None , if source generation not match = None , if source metageneration match = None , if source metageneration not match = None , timeout = 60 , retry = google . cloud . storage . retry .
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/access-logs Parameters Name Description bucket name str name of bucket in which to store access logs object prefix str prefix for access log filenames exists exists ( client = None , timeout = 60 , if etag match = None , if etag not match = None , if metageneration match = None , if metageneration not match = None , retry = google . api core . retry . retry unary .
- See: configuring retries Exceptions Type Description ValueError if force is True and the bucket contains more than 256 objects / blobs. delete blob delete blob ( blob name , client = None , generation = None , if generation match = None , if generation not match = None , if metageneration match = None , if metageneration not match = None , timeout = 60 , retry = google . api core . retry . retry unary .

### Class BlobInfo (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo)
- Source ID: `site-java-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Also: Hashes and ETags: Best Practices Returns Type Description String getCrc32cToHexString() public String getCrc32cToHexString () Returns the CRC32C checksum of blob's data as described in RFC 4960, Appendix B; decoded to string.
- See Also: Entity Tags Returns Type Description String getEventBasedHold() public Boolean getEventBasedHold () Beta This feature is covered by the Pre-GA Offerings Terms of the Terms of Service.
- See Also: Hashes and ETags: Best Practices Returns Type Description String getMd5ToHexString() public String getMd5ToHexString () Returns the MD5 hash of blob's data decoded to string.
- A BlobInfo object includes the BlobId instance and the set of properties, such as the blob's access control configuration, user provided metadata, the CRC32C checksum, etc.

### BucketAccessControls \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls](https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Cloud Storage Reference Send feedback BucketAccessControls Stay organized with collections Save and categorize content based on your preferences.
- Resource representations { "kind": "storage#bucketAccessControl", "id": string , "selfLink": string , "bucket": string , "entity": string , "role": string , "email": string , "domain": string , "entityId": string , "etag": string , "projectTeam": { "projectNumber": string , "team": string } } Property name Value Description Notes bucket string The name of the bucket. domain string The domain associated with the entity, if any. email string The email address associated with the entity, if any. entity string The entity holding the permission, in one of the following forms: user- email group- groupId group- email domain- domain project- team - projectId allUsers allAuthenticatedUsers Examples: The user liz@example.com would be user-liz@example.com .
- OWNER s are WRITER s, and they can get the acl property of a bucket , update a bucket, and call all BucketAccessControls methods on the bucket.
- Use storage.buckets.getIamPolicy and storage.buckets.setIamPolicy to control access instead.

### Access control lists (ACLs) \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Also allows a user to read and write bucket metadata, including ACLs, and to work with tags on the bucket.
- In most cases, you should avoid using ACLs, and you should enable uniform bucket-level access for your buckets, which prevents ACL usage: ACLs can't be used exclusively to control access to your Google Cloud resources, because ACLs can't be set on the overall project or resources outside Cloud Storage.
- ACLs and IAM Identity and Access Management (IAM) and ACLs work in tandem to grant access to your buckets and objects, which means a user only needs the relevant permission from either of these systems in order to access a bucket or object.
- Home Documentation Storage Cloud Storage Guides Send feedback Access control lists (ACLs) Stay organized with collections Save and categorize content based on your preferences.

