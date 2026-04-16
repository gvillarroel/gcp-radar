---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.602Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "OAuth2 access for Remote API"
feature_slug: "oauth2-access-for-remote-api"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "oauth2"
  - "access"
  - "remote"
  - "can"
  - "now"
  - "accessed"
  - "credentials"
  - "application"
---

# OAuth2 access for Remote API

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The Remote API can now be accessed using OAuth2 credentials and application-default credentials.

## Extended Definition

The Remote API can now be accessed using OAuth2 credentials and application-default credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.
- Google Workspace domain-wide delegation of authority If you have a Google Workspace (formerly G Suite) domain, an administrator of the domain can authorize an application to access user data on behalf of users in the Google Workspace domain.
- Fatal ( err ) } = kmsService } Java static void authImplicit () { // If you don't specify credentials when constructing the client, the client library will // look for credentials via the environment variable GOOGLE APPLICATION CREDENTIALS.
- For example, an application that uses the Google Calendar API to add events to the calendars of all users in a Google Workspace domain would use a service account to access the Google Calendar API on behalf of users.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAP-protected services or applications can only be accessed by principals which have the correct IAM role .
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- IAP lets you control access to your App Engine services, before requests reach your application resources.
- While a user is signed in to the application, the app can access the user's email address.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to authorize the requests between your services and other Google Cloud services: Provide credentials for Application Default Credentials Using user-managed service accounts Your App Engine services can also communicate using Pub/Sub , which provides reliable asynchronous many-to-many messaging between processes, including App Engine.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Communication between services in different projects You can have private access between Google Cloud projects when apps running in projects belong to a Shared VPC network that is configured to invoke an app running in the Shared VPC network's host project.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Communicating between your services Stay organized with collections Save and categorize content based on your preferences.

