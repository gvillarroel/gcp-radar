---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.427Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Remote API OAuth 2.0 authentication"
feature_slug: "remote-api-oauth-2-0-authentication"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "authentication"
  - "credentials"
  - "remote"
  - "oauth"
  - "application"
  - "supports"
  - "default"
  - "access"
---

# Remote API OAuth 2.0 authentication

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Remote API supports access using OAuth 2.0 application default credentials.

## Extended Definition

Remote API supports access using OAuth 2.0 application default credentials.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Granting users access to Cloud resources If you want your app to read user data from another Google service, you'll need to set up OAuth 2.0 for Web Server Applications .
- Here's an example of creating a client for Cloud Storage: Go // implicit uses Application Default Credentials to authenticate. func implicit () { ctx := context .
- You can override this default flow by doing any of the following: Set the GOOGLE APPLICATION CREDENTIALS environment variable.
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Granting users access to Cloud resources If you want your app to read user data from another Google service, you'll need to set up OAuth 2.0 for Web Server Applications .
- Here's an example of creating a client for Cloud Storage: Go // implicit uses Application Default Credentials to authenticate. func implicit () { ctx := context .
- You can override this default flow by doing any of the following: Set the GOOGLE APPLICATION CREDENTIALS environment variable.
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java Node.js PHP Python Ruby To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- Identity-Aware Proxy (IAP) Unlike the other authentication options that implement authentication within your app, IAP protects and secures your application by adding an IAM authentication and authorization layer in front of your resources.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.

