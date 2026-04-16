---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.714Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Remote API OAuth2 access"
feature_slug: "remote-api-oauth2-access"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "remote"
  - "oauth2"
  - "access"
  - "now"
  - "supports"
  - "credentials"
  - "through"
  - "application"
---

# Remote API OAuth2 access

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Remote API access now supports OAuth2 credentials through Application Default Credentials.

## Extended Definition

Remote API access now supports OAuth2 credentials through Application Default Credentials.

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
- Final score: 114
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
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- IAP-protected services or applications can only be accessed by principals which have the correct IAM role .
- IAP lets you control access to your App Engine services, before requests reach your application resources.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to authorize the requests between your services and other Google Cloud services: Provide credentials for Application Default Credentials Using user-managed service accounts Your App Engine services can also communicate using Pub/Sub , which provides reliable asynchronous many-to-many messaging between processes, including App Engine.
- Configure the client app to send all-traffic through the Serverless VPC Access connector, instead of configuring requests to use the private.googleapis.com IP range.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Communication between services in different projects You can have private access between Google Cloud projects when apps running in projects belong to a Shared VPC network that is configured to invoke an app running in the Shared VPC network's host project.

