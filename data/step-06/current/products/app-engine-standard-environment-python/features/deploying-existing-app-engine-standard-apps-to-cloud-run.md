---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.259Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Deploying existing App Engine standard apps to Cloud Run"
feature_slug: "deploying-existing-app-engine-standard-apps-to-cloud-run"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "deploying"
  - "existing"
  - "app"
  - "engine"
  - "standard"
  - "apps"
  - "run"
  - "applications"
---

# Deploying existing App Engine standard apps to Cloud Run

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Existing App Engine standard applications can be deployed to Cloud Run using the `gcloud beta app migrate-to-run` command.

## Extended Definition

Existing App Engine standard applications can be deployed to Cloud Run using the `gcloud beta app migrate-to-run` command.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference-required-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure App Engine service accounts Stay organized with collections Save and categorize content based on your preferences.
- When deploying an existing version or a new version, you can specify a service account to act as that version's identity.
- App Engine applications require a service account to access other Google Cloud services and execute tasks.

### "Hosting a static website on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- Source ID: `site-docs-reference-required-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Store this file in your www directory. < html > < head > < title>Hello , world ! < / title > < link rel = "stylesheet" type = "text/css" href = "/css/style.css" > < / head > < body > < h1>Hello , world ! < / h1 > < p > This is a simple static HTML file that will be served from Google App Engine . < / p > < / body > < / html > Deploying your application to App Engine When you deploy your application files, your website will be uploaded to App Engine.
- Before you begin Before you can host your website on App Engine: Create a new Google Cloud console project or retrieve the project ID of an existing project to use: Go to the Projects page Tip: You can retrieve a list of your existing project IDs with the gcloud command line tool .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Hosting a static website on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Hosting your static site on App Engine can cost less than using a traditional hosting provider, as App Engine standard environment provides a free tier.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- This solution works well if you are upgrading an existing app from a first-generation runtime to a second-generation runtime, and want to continue to use the Users API.

