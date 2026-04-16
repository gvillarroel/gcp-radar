---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.260Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "BlobInfo Cloud Storage property"
feature_slug: "blobinfo-cloud-storage-property"
latest_feature_date: "2016-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "identifies"
  - "blobstore"
  - "blobinfo"
  - "storage"
  - "blob"
  - "property"
  - "includes"
  - "when"
---

# BlobInfo Cloud Storage property

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

BlobInfo includes a property that identifies when a Blobstore blob is stored in a Cloud Storage bucket.

## Extended Definition

BlobInfo includes a property that identifies when a Blobstore blob is stored in a Cloud Storage bucket.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore.jakarta Provides management and persistent storage of large, immutable byte arrays.
- See Also: com.google.appengine.api.backends.BackendService , Backends (Java) in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore Provides management and persistent storage of large, immutable byte arrays.
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.capabilities Provides status information about the services available via the GAE APIs.
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-4`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore.jakarta Provides management and persistent storage of large, immutable byte arrays.
- See Also: com.google.appengine.api.backends.BackendService , Backends (Java) in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore Provides management and persistent storage of large, immutable byte arrays.
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.capabilities Provides status information about the services available via the GAE APIs.
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .

