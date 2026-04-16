---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.588Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Managed SSL certificates for App Engine custom domains"
feature_slug: "managed-ssl-certificates-for-app-engine-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "app"
  - "engine"
  - "custom"
  - "domains"
  - "allow"
---

# Managed SSL certificates for App Engine custom domains

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Managed certificates allow App Engine applications on custom domains to have automatically provisioned, renewed, and revoked SSL certificates.

## Extended Definition

Managed certificates allow App Engine applications on custom domains to have automatically provisioned, renewed, and revoked SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.
- App Engine firewall The App Engine firewall enables you to control access to your App Engine app through a set of rules that can either allow or deny requests from the specified ranges of IP addresses.
- Allow only traffic from a specific service Ensure that all the traffic to your App Engine app is first proxied through a specific service.
- For more information, see Securing Custom Domains with SSL .

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Routing with a dispatch file You can create a dispatch file to override App Engine's URL-based routing rules and define your own custom routing rules.
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- When you start an instance of a basic scaling service, App Engine allows it to accept traffic, but the / ah/start request is not sent to an instance until it receives its first user request.
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.
- Click the tab for instructions on using the tool of your choice: Console To delete a service: Go to the App Engine Services page in the Google Cloud console: Go to Services Select a service from the table, and click Delete . gcloud Run the following: gcloud app services delete SERVICE Replace: SERVICE with the name of your service.

