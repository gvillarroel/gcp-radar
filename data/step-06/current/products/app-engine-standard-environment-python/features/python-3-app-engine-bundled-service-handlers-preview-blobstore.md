---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.119Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Python 3 App Engine bundled service handlers preview (Blobstore"
feature_slug: "python-3-app-engine-bundled-service-handlers-preview-blobstore"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api"
keywords:
  - "blobstore"
  - "handlers"
  - "enables"
  - "bundled"
  - "preview"
  - "python"
  - "engine"
  - "app"
---

# Python 3 App Engine bundled service handlers preview (Blobstore

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries.

## Extended Definition

Enables access to Blobstore, Deferred, and Mail handlers for App Engine bundled services in Python 3 through language-idiomatic libraries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- You should use the appengine-web.xml file for configuring your app only if you are migrating an existing app from the App Engine Java 8 runtime to the latest supported Java version and you want to use the legacy bundled services .
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . <entrypoint> Optional and only for second-generation runtimes.

### "Package google.golang.org/appengine/v2/blobstore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/blobstore (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- Package blobstore provides a client for App Engine's persistent blob storage service.
- UploadURLOptions type UploadURLOptions struct { MaxUploadBytes int64 // optional MaxUploadBytesPerBlob int64 // optional // StorageBucket specifies the Google Cloud Storage bucket in which // to store the blob. // This is required if you use Cloud Storage instead of Blobstore. // Your application must have permission to write to the bucket. // You may optionally specify a bucket name and path in the format // "bucket name/path", in which case the included path will be the // prefix of the uploaded object's name.
- Values , err error ) ParseUpload parses the synthetic POST request that your app gets from App Engine after a user's successful upload of blobs.

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- The Task Queue com.google.appengine.api.taskqueue.Queue#add methods will forward the NamespaceManager settings into the task being added causing the added task to be executed with the same current namespace as the task creator.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package com.google.appengine.api (5.0.0) Stay organized with collections Save and categorize content based on your preferences.
- Classes LifecycleManager NamespaceManager Provides functions for manipulating the current namespace used for App Engine APIs.

