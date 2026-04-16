---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.266Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "User-managed service accounts per App Engine version during deployment"
feature_slug: "user-managed-service-accounts-per-app-engine-version-during-deployment"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "user"
  - "managed"
  - "accounts"
  - "per"
  - "app"
  - "engine"
  - "version"
  - "during"
---

# User-managed service accounts per App Engine version during deployment

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Allows specifying a different service account for each App Engine version at deploy time; Allows assigning a user-managed service account to each App Engine version during deployment.

## Extended Definition

Allows specifying a different service account for each App Engine version at deploy time; Allows assigning a user-managed service account to each App Engine version during deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference-required-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure App Engine service accounts Stay organized with collections Save and categorize content based on your preferences.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-required-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- When you start an instance of a basic scaling service, App Engine allows it to accept traffic, but the / ah/start request is not sent to an instance until it receives its first user request.
- Stop a version Each version in App Engine runs within one or more instances, depending on how much traffic you configured it to handle.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference-required-2`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.

