---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.292Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Remote API OAuth2 authentication"
feature_slug: "remote-api-oauth2-authentication"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "remote"
  - "oauth2"
  - "authentication"
  - "can"
  - "now"
  - "accessed"
  - "credentials"
  - "via"
---

# Remote API OAuth2 authentication

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Remote API can now be accessed using OAuth2 credentials via application default credentials.

## Extended Definition

The Remote API can now be accessed using OAuth2 credentials via application default credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference-required-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.
- Background () // For API packages whose import path is starting with "cloud.google.com/go", // such as cloud.google.com/go/storage in this case, if there are no credentials // provided, the client library will look for credentials in the environment. storageClient , err := storage .

