---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.336Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Remote API OAuth2 credentials support"
feature_slug: "remote-api-oauth2-credentials-support"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access"
keywords:
  - "remote"
  - "oauth2"
  - "credentials"
  - "now"
  - "supports"
  - "authentication"
  - "application"
  - "default"
---

# Remote API OAuth2 credentials support

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

The Remote API now supports OAuth2 authentication using Application Default Credentials.

## Extended Definition

The Remote API now supports OAuth2 authentication using Application Default Credentials.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/access-control](https://docs.cloud.google.com/appengine/docs/standard/php7/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here's an example of creating a client for Cloud Storage: Go // implicit uses Application Default Credentials to authenticate. func implicit () { ctx := context .
- You can override this default flow by doing any of the following: Set the GOOGLE APPLICATION CREDENTIALS environment variable.
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/access-control](https://docs.cloud.google.com/appengine/docs/standard/php7/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here's an example of creating a client for Cloud Storage: Go // implicit uses Application Default Credentials to authenticate. func implicit () { ctx := context .
- You can override this default flow by doing any of the following: Set the GOOGLE APPLICATION CREDENTIALS environment variable.
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access)
- Source ID: `site-docs-reference-4`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here's an example of creating a client for Cloud Storage: Go // implicit uses Application Default Credentials to authenticate. func implicit () { ctx := context .
- You can override this default flow by doing any of the following: Set the GOOGLE APPLICATION CREDENTIALS environment variable.
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.

