---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.671Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Per-version user-managed service account"
feature_slug: "per-version-user-managed-service-account"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "per"
  - "version"
  - "user"
  - "managed"
  - "account"
  - "lets"
  - "each"
  - "app"
---

# Per-version user-managed service account

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Per-version user-managed service account support lets each App Engine version run with a specified user-managed service account; Per-version user-managed service account support lets each App Engine version run with a specified user-managed service account.

## Extended Definition

Per-version user-managed service account support lets each App Engine version run with a specified user-managed service account; Per-version user-managed service account support lets each App Engine version run with a specified user-managed service account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- This solution is best if you want to authenticate users based on their Google Account, or if you are using Google Admin console for your domain.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- Google Identity Services for Web Authenticate users by using Google user accounts from Gmail and Google Workspace.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can: Use the Versions page in the Google Cloud console Use gcloud app versions start and gcloud app versions stop commands Startup Each service instance is created in response to a start request, which is an empty HTTP GET request to / ah/start .
- Stop a version Each version in App Engine runs within one or more instances, depending on how much traffic you configured it to handle.
- You configure the number of instances of each version in that service's configuration file.
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.

