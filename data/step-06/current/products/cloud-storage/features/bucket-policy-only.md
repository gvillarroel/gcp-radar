---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.850Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket Policy Only"
feature_slug: "bucket-policy-only"
latest_feature_date: "2019-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control"
  - "https://docs.cloud.google.com/storage/docs/access-control/lists"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "bucket"
  - "policy"
  - "only"
  - "unifies"
  - "access"
  - "control"
  - "by"
  - "disabling"
---

# Bucket Policy Only

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Bucket Policy Only unifies access control by disabling object-level ACLs and relying on bucket-level IAM policies.

## Extended Definition

Bucket Policy Only unifies access control by disabling object-level ACLs and relying on bucket-level IAM policies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Overview of access control \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if your bucket's IAM policy only allows a few users to read object data in the bucket, but one of the objects in the bucket has an ACL that makes it publicly readable, then that specific object is exposed to the public.
- As you evaluate and plan your access control settings, keep the following best practices in mind: Use the principle of least privilege when granting access to your buckets, objects, or managed folders.
- Policy documents allow greater control over size, content type, and other upload characteristics than signed URLs, and can be used by website owners to allow visitors to upload files to Cloud Storage.
- For example, you can use IAM to grant access to a bucket for only a few people, then create a signed URL that allows others to access a specific resource within the bucket.

### Access control lists (ACLs) \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Doing so also removes all use of ACLs in the bucket, making IAM policies the only access control system used by the bucket.
- In most cases, you should avoid using ACLs, and you should enable uniform bucket-level access for your buckets, which prevents ACL usage: ACLs can't be used exclusively to control access to your Google Cloud resources, because ACLs can't be set on the overall project or resources outside Cloud Storage.
- You most likely want to use ACLs in the following cases: You need to customize access to individual objects within a bucket, such as if you want the uploader of an object to have full control over that object, but less access to other objects in your bucket.
- ACL behavior Cloud Storage helps you adhere to best practices by enforcing some ACL modification rules, which prevent you from setting ACLs that make data inaccessible: You cannot apply an ACL that specifies a different bucket or object owner.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If not passed, falls back to the client stored on the current bucket. generation int Selects the specific revision of the object. copy source acl bool (Optional) If true, copy the soft-deleted object's access controls. projection str (Optional) Specifies the set of properties to return.
- See: configuring retries Returns Type Description google.api core.iam.Policy the policy instance, based on the resource returned from the getIamPolicy API request. get logging get logging () Return info about access logging for this bucket.
- See https://cloud.google.com/storage/docs/static-website Note: This configures the bucket's website-related properties,controlling how the service behaves when accessing bucket contents as a web site.
- See: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl enable object retention bool (Optional) Whether object retention should be enabled on this bucket.

