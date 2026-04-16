---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.308Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go 1.8 context package support"
feature_slug: "go-1-8-context-package-support"
latest_feature_date: "2017-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access"
keywords:
  - "library"
  - "context"
  - "package"
  - "when"
  - "uses"
  - "runtime"
---

# Go 1.8 context package support

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Go 1.8 runtime uses the standard library context package when creating App Engine contexts.

## Extended Definition

The Go 1.8 runtime uses the standard library context package when creating App Engine contexts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .
- PHP EOL, $bucket->name()); } } Python def implicit (): from google.cloud import storage If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage client = storage .

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .
- PHP EOL, $bucket->name()); } } Python def implicit (): from google.cloud import storage If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage client = storage .

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access)
- Source ID: `site-docs-reference-4`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .
- PHP EOL, $bucket->name()); } } Python def implicit (): from google.cloud import storage If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage client = storage .

