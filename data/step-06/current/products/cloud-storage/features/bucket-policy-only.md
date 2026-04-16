---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.960Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket Policy Only"
feature_slug: "bucket-policy-only"
latest_feature_date: "2019-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control"
  - "https://docs.cloud.google.com/storage/docs/access-control/lists"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
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
Coverage: MEDIUM

## Step 02 Summary

Bucket Policy Only unifies access control by disabling object-level ACLs and relying on bucket-level IAM policies.

## Extended Definition

Bucket Policy Only unifies access control by disabling object-level ACLs and relying on bucket-level IAM policies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Overview of access control \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if your bucket's IAM policy only allows a few users to read object data in the bucket, but one of the objects in the bucket has an ACL that makes it publicly readable, then that specific object is exposed to the public.
- As you evaluate and plan your access control settings, keep the following best practices in mind: Use the principle of least privilege when granting access to your buckets, objects, or managed folders.
- Policy documents allow greater control over size, content type, and other upload characteristics than signed URLs, and can be used by website owners to allow visitors to upload files to Cloud Storage.
- For example, you can use IAM to grant access to a bucket for only a few people, then create a signed URL that allows others to access a specific resource within the bucket.

### Access control lists (ACLs) \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Doing so also removes all use of ACLs in the bucket, making IAM policies the only access control system used by the bucket.
- In most cases, you should avoid using ACLs, and you should enable uniform bucket-level access for your buckets, which prevents ACL usage: ACLs can't be used exclusively to control access to your Google Cloud resources, because ACLs can't be set on the overall project or resources outside Cloud Storage.
- You most likely want to use ACLs in the following cases: You need to customize access to individual objects within a bucket, such as if you want the uploader of an object to have full control over that object, but less access to other objects in your bucket.
- ACL behavior Cloud Storage helps you adhere to best practices by enforcing some ACL modification rules, which prevent you from setting ACLs that make data inaccessible: You cannot apply an ACL that specifies a different bucket or object owner.

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Command line In the following example, the project ID is "123412341234"; your project ID will be different. defaultObjectAcl: – entity: project-owners-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: owners role: OWNER – entity: project-editors-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: editors role: OWNER – entity: project-viewers-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: viewers role: READER REST APIs JSON API In the following example, the project ID is "123412341234"; your project ID will be different. "defaultObjectAcl": [ { "kind": "storage#objectAccessControl", "entity": "project-owners-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "owners" } }, { "kind": "storage#objectAccessControl", "entity": "project-editors-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "editors" } }, { "kind": "storage#objectAccessControl", "entity": "project-viewers-123412341234", "role": "READER", "projectTeam": { "projectNumber": "123412341234", "team": "viewers" } } ] XML API In the following example, the project role IDs start with "00b4903a97..."; your project IDs will be different. <?xml version='1.0' encoding='UTF-8'?> <AccessControlList> <Entries> <Entry> <Scope type='GroupById'> <ID>00b4903a9721...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9723...</ID> </Scope> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Note that the default object ACL for a newly created bucket is equivalent to the predefined projectPrivate ACL.
- For example, to return the ACL for the object paris.jpg in the bucket example-travel-maps : curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \ https://storage.googleapis.com/example-travel-maps/paris.jpg?acl You should see a response that looks like: <?xml version="1.0" encoding="UTF-8"?> <AccessControlList> <Owner> <ID>84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46</ID> <Name>Owner Name</Name> </Owner> <Entries> <Entry> <Scope type="UserById"> <ID>84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46</ID> <Name>Name</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> <Name>Jefferson</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="GroupByEmail"> <EmailAddress>gs-announce@googlegroups.com</EmailAddress> </Scope> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> You can also use the JSON GET method of the ObjectAccessControls resource to return a specific ACL entry.
- The following example shows different bucket ACL entries: <?xml version="1.0" encoding="UTF-8"?> <AccessControlList> <Owner> <ID>00b4903a9721...</ID> </Owner> <Entries> <Entry> <Scope type="GroupById"> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="GroupByDomain"> <Domain>example.com</Domain> </Scope> <Permission>READ</Permission> </Entry> <Entry> <Scope type="GroupByEmail"> <EmailAddress>gs-announce@googlegroups.com</EmailAddress> </Scope> <Permission>READ</Permission> </Entry> <Entry> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> <Name>Jefferson</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="AllUsers"/> <Permission>READ</Permission> </Entry> <Entry> <Scope type="AllAuthenticatedUsers"/> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Set the Name element in ACL XML When you retrieve an ACL from a bucket or object, you might notice an additional <Name> element appended to some of your entries.
- For example: curl -X PUT --data-binary @acls.xml -H "Authorization: Bearer $(gcloud auth print-access-token)" \ http://storage.googleapis.com/ BUCKET NAME ?defaultObjectAcl An example of acls.xml : <AccessControlList> <Entries> <Entry> <Permission> FULL CONTROL </Permission> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> </Scope> </Entry> </Entries> </AccessControlList> The syntax of ACLs is discussed in Setting ACLs .

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- If not passed, falls back to the client stored on the current bucket. generation int Selects the specific revision of the object. copy source acl bool (Optional) If true, copy the soft-deleted object's access controls. projection str (Optional) Specifies the set of properties to return.
- See: configuring retries Returns Type Description google.api core.iam.Policy the policy instance, based on the resource returned from the getIamPolicy API request. get logging get logging () Return info about access logging for this bucket.
- See https://cloud.google.com/storage/docs/static-website Note: This configures the bucket's website-related properties,controlling how the service behaves when accessing bucket contents as a web site.
- See: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl enable object retention bool (Optional) Whether object retention should be enabled on this bucket.

