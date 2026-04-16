---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.575Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "user"
  - "managed"
  - "account"
  - "per"
  - "app"
  - "engine"
  - "version"
  - "specifying"
---

# User-managed service account per App Engine version

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Specifying a user-managed service account for each App Engine version during deployment is now generally available.

## Extended Definition

Specifying a user-managed service account for each App Engine version during deployment is now generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- This solution is best if you want to authenticate users based on their Google Account, or if you are using Google Admin console for your domain.
- To learn about integrating Identity Platform with App Engine, try the how-to guide for signing in users on App Engine .

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Go to Versions Locate the email address of your App Engine version-specific service account.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

