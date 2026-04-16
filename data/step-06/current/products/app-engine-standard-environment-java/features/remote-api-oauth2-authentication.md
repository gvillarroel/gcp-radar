---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.271Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Remote API OAuth2 authentication"
feature_slug: "remote-api-oauth2-authentication"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
keywords:
  - "authentication"
  - "credentials"
  - "remote"
  - "oauth2"
  - "application"
  - "through"
  - "supports"
  - "access"
---

# Remote API OAuth2 authentication

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Remote API access supports OAuth2 credentials through Application Default Credentials.

## Extended Definition

Remote API access supports OAuth2 credentials through Application Default Credentials.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/access-control](https://docs.cloud.google.com/appengine/docs/standard/java11/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)

## Supporting Pages

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.
- Google Workspace domain-wide delegation of authority If you have a Google Workspace (formerly G Suite) domain, an administrator of the domain can authorize an application to access user data on behalf of users in the Google Workspace domain.
- Fatal ( err ) } = kmsService } Java static void authImplicit () { // If you don't specify credentials when constructing the client, the client library will // look for credentials via the environment variable GOOGLE APPLICATION CREDENTIALS.
- For example, an application that uses the Google Calendar API to add events to the calendars of all users in a Google Workspace domain would use a service account to access the Google Calendar API on behalf of users.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/access-control](https://docs.cloud.google.com/appengine/docs/standard/java11/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you set the GOOGLE APPLICATION CREDENTIALS environment variable or pass credentials in your code, we recommend that you store your credentials in one of the following ways: Store your credentials in a secure location such as Firestore in Datastore mode (Datastore) and retrieve them at runtime.
- Google Workspace domain-wide delegation of authority If you have a Google Workspace (formerly G Suite) domain, an administrator of the domain can authorize an application to access user data on behalf of users in the Google Workspace domain.
- Fatal ( err ) } = kmsService } Java static void authImplicit () { // If you don't specify credentials when constructing the client, the client library will // look for credentials via the environment variable GOOGLE APPLICATION CREDENTIALS.
- For example, an application that uses the Google Calendar API to add events to the calendars of all users in a Google Workspace domain would use a service account to access the Google Calendar API on behalf of users.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- This helps your application maintain steady performance through fluctuations in request load, but also raises the number of idle instances (and consequent running costs) during such periods of heavy load.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- When a URL handler with a login setting other than optional matches a URL, the handler first checks whether the user has signed in to the application using its authentication option .
- Requests to external IP addresses are sent to the public internet. all-traffic All requests are sent through the Serverless VPC Access connector into the connected VPC network.

