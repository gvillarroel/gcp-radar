---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.569Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine Users API IAM role and group expansion"
feature_slug: "app-engine-users-api-iam-role-and-group-expansion"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "role"
  - "iam"
  - "users"
  - "group"
  - "api"
  - "engine"
  - "and"
  - "app"
---

# App Engine Users API IAM role and group expansion

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

The App Engine Users API now treats project Owners, Editors, Viewers, and App Engine Admins as admins through IAM roles and group membership.

## Extended Definition

The App Engine Users API now treats project Owners, Editors, Viewers, and App Engine Admins as admins through IAM roles and group membership.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- You must choose a location, which cannot be changed later. gcloud app create Learn more : Generally, select the region nearest to your app's users, but also consider the location of the other Google Cloud products and services that your app uses.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package com.google.appengine.api (5.0.0) Stay organized with collections Save and categorize content based on your preferences.
- See Also: Multitenancy and the Namespaces Java API in the Google App Engine Developer's Guide .
- The Task Queue com.google.appengine.api.taskqueue.Queue#add methods will forward the NamespaceManager settings into the task being added causing the added task to be executed with the same current namespace as the task creator.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- This solution works well if you are upgrading an existing app from a first-generation runtime to a second-generation runtime, and want to continue to use the Users API.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.

