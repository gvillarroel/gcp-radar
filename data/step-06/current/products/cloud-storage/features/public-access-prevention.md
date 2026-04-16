---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.945Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Public access prevention"
feature_slug: "public-access-prevention"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control"
  - "https://docs.cloud.google.com/storage/docs/access-control/making-data-public"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
keywords:
  - "public"
  - "access"
  - "prevention"
  - "blocks"
  - "storage"
  - "from"
  - "being"
  - "accidentally"
---

# Public access prevention

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Public access prevention blocks Cloud Storage data from being accidentally exposed to the public.

## Extended Definition

Public access prevention blocks Cloud Storage data from being accidentally exposed to the public.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)

## Supporting Pages

### Overview of access control \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To prevent resources from becoming inaccessible, you can do any of the following: Grant the Storage Admin IAM role for your project to a group instead of an individual.
- When you enable public access prevention, users who gain access through allUsers and allAuthenticatedUsers are disallowed access to data.
- Public access prevention Use public access prevention to restrict public access to your buckets and objects.
- Home Documentation Storage Cloud Storage Guides Send feedback Overview of access control Stay organized with collections Save and categorize content based on your preferences.

### Make data public \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- Source ID: `site-iam-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To remove public access from all objects in a bucket: Storage Admin ( roles/storage.admin ) These roles contain the permissions required to make objects public.
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Update the specified bucket's IAM configuration to make it publicly accessible. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') / function set bucket public iam(string $bucketName): void { $storage = new StorageClient(); $bucket = $storage->bucket($bucketName); $policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]); $policy['version'] = 3; $role = 'roles/storage.objectViewer'; $members = ['allUsers']; $policy['bindings'][] = [ 'role' => $role, 'members' => $members ]; $bucket->iam()->setPolicy($policy); printf('Bucket %s is now public', $bucketName); } Python For more information, see the Cloud Storage Python API reference documentation .
- The following is an example ACL file the would grant allUsers access to an object: <AccessControlList> <Entries> <Entry> <Scope type="AllUsers"/> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Remove public access for all objects within a bucket To remove public access for all objects within a bucket, remove the IAM policy that grants allUsers the Storage Object Viewer ( roles/storage.objectViewer ) role: Console In the Google Cloud console, go to the Cloud Storage Buckets page.
- For more information, see Set up authentication for client libraries . from typing import List from google.cloud import storage def set bucket public iam ( bucket name : str = "your-bucket-name" , members : List [ str ] = [ "allUsers" ], ): """Set a public IAM Policy to bucket""" bucket name = "your-bucket-name" storage client = storage .

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- See Also: public-access-prevention , uniform bucket-level access com. google. cloud. storage.
- See Also: public-access-prevention com. google. cloud. storage.
- Zero Copy Support Public components which exist to support zero-copy data access Interfaces Interface Description com. google. cloud. storage.
- Public Network Source The public network IP address ranges that can access the bucket and its data. com. google. cloud. storage.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- If you have the storage.buckets.setIamPolicy permission or the storage.objects.setIamPolicy permission and you still get an error, your bucket might be subject to public access prevention , which doesn't allow access to allUsers or allAuthenticatedUsers .
- Client ( extra headers = { "x-custom-header" : "value" } ) Ruby require "google/cloud/storage" storage = Google :: Cloud :: Storage . new storage . add custom headers { 'X-Custom-Header' = > 'value' } Accessing buckets with a CORS configuration If you have set a CORS configuration on your bucket and notice that incoming requests from client browsers are failing, try the following troubleshooting steps: Review the CORS configuration on the target bucket.
- Public access prevention might be set on the bucket directly, or it might be enforced through an organization policy that is set at a higher level.
- StorageOptions ; import java.io.IOException ; import java.nio.ByteBuffer ; import static java.nio.charset.StandardCharsets.UTF 8 ; public class Example { public void main ( String args [] ) throws IOException { HeaderProvider headerProvider = FixedHeaderProvider . create ( "custom-header" , "custom-value" ); Storage storage = StorageOptions . getDefaultInstance () . toBuilder () . setHeaderProvider ( headerProvider ) . build (). getService (); String bucketName = "example-bucket" ; String blobName = "test-custom-header" ; // Use client with custom header BlobInfo blob = BlobInfo . newBuilder ( bucketName , blobName ). build (); byte [] stringBytes ; try ( WriteChannel writer = storage . writer ( blob )) { stringBytes = "hello world" . getBytes ( UTF 8 ); writer . write ( ByteBuffer . wrap ( stringBytes )); } } } Node.js const storage = new Storage (); storage . interceptors . push ({ request : requestConfig = > { Object . assign ( requestConfig . headers , { 'X-Custom-Header' : 'value' , }); return requestConfig ; }, }); PHP All method calls which trigger http requests accept an optional $restOptions argument as the last argument.

