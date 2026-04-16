---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.099Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "WebSockets support"
feature_slug: "websockets-support"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
keywords:
  - "websockets"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
  - "persistent"
  - "bidirectional"
---

# WebSockets support

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment supports WebSockets for persistent bidirectional connections.

## Extended Definition

App Engine flexible environment supports WebSockets for persistent bidirectional connections.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/python-docs-samples cd python-docs-samples/appengine/flexible/websockets/ Run the sample locally To run locally, you need to use Gunicorn with the flask socket worker: $ gunicorn -b 127 .0.0.1:8080 -k flask sockets.worker main:app Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the directory where your app.yaml is located: gcloud app deploy You can then direct your browser to https:// PROJECT ID .
- Go Java Node.js PHP Python Ruby .NET Custom You can use WebSockets to create a persistent connection from a client (such as a mobile device or a computer) to an App Engine instance.
- App Engine flexible environment VM instances are restarted on a weekly basis.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.
- Go Java Node.js PHP Python Ruby .NET Custom To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.

