---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.408Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine platform version 1.9.40"
feature_slug: "app-engine-platform-version-1-9-40"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
keywords:
  - "app"
  - "engine"
  - "platform"
  - "version"
  - "40"
  - "was"
  - "released"
---

# App Engine platform version 1.9.40

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine version 1.9.40 was released.

## Extended Definition

App Engine version 1.9.40 was released.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)

## Supporting Pages

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn about integrating Identity Platform with App Engine, try the how-to guide for signing in users on App Engine .
- Go Java Node.js PHP Python Ruby .NET Custom To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Stop a version Each version in App Engine runs within one or more instances, depending on how much traffic you configured it to handle.
- The scaling settings are applied at the App Engine version level as part of the app.yaml file.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Learn about the App Engine flexible environment Here are some topics to help continue your learning about App Engine: An overview of App Engine Request routing Request handling Managing instances Hello World code review Hello World is the simplest possible App Engine app, as it contains only one service, has only one version, and all of the code is located within the app's root directory.
- What's next Learn the whole platform Now that you know what it's like to develop and deploy App Engine apps, you can explore the rest of Google Cloud.
- By default, App Engine uses the latest available LTS .NET version if you don't specify a runtime version in your app.yaml file.
- For more details about how to design your app to take advantage of versions and services, see An overview of App Engine .

