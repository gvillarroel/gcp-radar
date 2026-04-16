---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.878Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Object contexts"
feature_slug: "object-contexts"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-permissions"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo.ObjectContexts"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud"
keywords:
  - "object"
  - "contexts"
  - "let"
  - "you"
  - "attach"
  - "contextual"
  - "information"
  - "to"
---

# Object contexts

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Object contexts let you attach contextual information to Cloud Storage objects to improve data management and discovery.

## Extended Definition

Object contexts let you attach contextual information to Cloud Storage objects to improve data management and discovery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo.ObjectContexts](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo.ObjectContexts)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)

## Supporting Pages

### IAM permissions for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This permission alone does not allow you to list IAM policies or IP filtering rules. storage.buckets.listEffectiveTags List all tags associated with a bucket, including tags inherited from higher in the resource hierarchy, such as from the bucket's project. storage.buckets.listTagBindings List tags directly attached to a bucket. storage.buckets.relocate Relocate buckets between geographic locations. storage.buckets.restore Bulk restore objects that have been soft-deleted . storage.buckets.setIamPolicy Update bucket IAM policies. storage.buckets.setIpFilter Set IP filtering rules on a bucket. storage.buckets.update Update bucket metadata including adding or removing a Pub/Sub notification configuration on a bucket and reading bucket metadata when updating.
- This also returns any contexts attached to the objects. storage.objects.move Move an object within a bucket with hierarchical namespace enabled. storage.objects.overrideUnlockedRetention Use the x-goog-bypass-governance-retention header or the overrideUnlockedRetention query parameter when working with object retention configurations . storage.objects.restore Restore objects that have been soft-deleted . storage.objects.setIamPolicy Update object ACLs. storage.objects.setRetention Add or update retentions for objects. storage.objects.update Update object metadata, excluding ACLs.
- Object permission name Description storage.objects.create Add new objects to a bucket. storage.objects.createContext Attach contexts to an object. storage.objects.delete Delete objects. storage.objects.deleteContext Delete object contexts. storage.objects.dropContexts Drop specified groups of object contexts from a source object during a rewrite , copy , or compose operation using the dropContextGroups parameter. storage.objects.get Read object data and metadata, excluding ACLs.
- This also returns any contexts attached to the object. storage.objects.getIamPolicy Read object ACLs, returned as IAM policies. storage.objects.list List objects in a bucket.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Solution : You are missing an IAM permission for the bucket or object that is required to complete the request.
- For example, if you're granted the Storage Object Viewer role for a project and you're trying to download an object, make sure the object is in a bucket that's in the project; you might inadvertently have the Storage Object Viewer permission for a different project.
- If you have the storage.buckets.setIamPolicy permission or the storage.objects.setIamPolicy permission and you still get an error, your bucket might be subject to public access prevention , which doesn't allow access to allUsers or allAuthenticatedUsers .
- Solution : To create managed folders , make sure the following requirements are met: You have an IAM role that contains the storage.managedfolders.create permission, such as the Storage Object Admin ( roles/storage.objectAdmin ) role.

### "Class BlobInfo.ObjectContexts (2.64.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo.ObjectContexts](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo.ObjectContexts)
- Source ID: `site-java-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class BlobInfo.ObjectContexts (2.64.0) Stay organized with collections Save and categorize content based on your preferences.
- ObjectContexts implements Serializable Inheritance Object > BlobInfo.ObjectContexts Implements Serializable Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static BlobInfo .
- Builder toBuilder () Returns Type Description BlobInfo.ObjectContexts.Builder toString() public String toString () Returns Type Description String Overrides Object.toString() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Builder newBuilder () Returns Type Description BlobInfo.ObjectContexts.Builder Methods equals(Object obj) public boolean equals ( Object obj ) Parameter Name Description obj Object Returns Type Description boolean Overrides Object.equals(Object) getCustom() public Map<String , BlobInfo .

### "Quickstart: Discover object storage with the Google Cloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the object from your bucket Use the gcloud storage cp command to download the image that you stored in your bucket to somewhere on your computer, such as the desktop: gcloud storage cp gs:// BUCKET NAME /kitten.png Desktop/kitten2.png If successful, the command returns a response like the following: Copying gs://my-awesome-bucket/kitten.png to file://Desktop/kitten2.png Completed files 1/1 8.6kiB/8.6kiB You've just downloaded something from your bucket.
- List details for an object Use the gcloud storage ls command with the --long flag to get some details about one of your images: gcloud storage ls gs:// BUCKET NAME /kitten.png --long If successful, the command returns a response like the following: 8775 2026-01-21T01:22:17Z gs://srs-bucketcli/kitten.png TOTAL: 1 objects, 8775 bytes (8.57kiB) You've just obtained information about the image's size and date of creation.
- Delete an object Use the gcloud storage rm command to delete one of your images: gcloud storage rm gs:// BUCKET NAME /kitten.png If successful, the command returns a response like the following: Removing gs://my-awesome-bucket/kitten.png...
- If successful, the command returns a response like the following: Copying file://Desktop/kitten.png to gs://my-awesome-bucket/kitten.png Completed files 1/1 8.6kiB/8.6kiB You've just stored an object in your bucket.

