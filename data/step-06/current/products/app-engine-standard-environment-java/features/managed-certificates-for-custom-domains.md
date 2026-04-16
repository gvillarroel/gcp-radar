---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.892Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Managed certificates for custom domains"
feature_slug: "managed-certificates-for-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "managed"
  - "certificates"
  - "custom"
  - "domains"
  - "became"
  - "available"
  - "beta"
  - "app"
---

# Managed certificates for custom domains

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Managed certificates became available in beta for App Engine custom domains, enabling automatic SSL provisioning, renewal, and revocation when domains are unlinked.

## Extended Definition

Managed certificates became available in beta for App Engine custom domains, enabling automatic SSL provisioning, renewal, and revocation when domains are unlinked.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/application-security](https://docs.cloud.google.com/appengine/docs/standard/java11/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/application-security](https://docs.cloud.google.com/appengine/docs/standard/java11/application-security)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.
- For more information, see Securing Custom Domains with SSL .
- Depending on how your app is configured, you have the following options: appspot.com domains Use the https URL prefix to send HTTPS request to the default service of your Google Cloud project, for example: https:// PROJECT ID .
- To learn more about the Google Security Model and the available steps that you can take to secure your Google Cloud projects, see Google Cloud Platform Security .

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.
- For more information, see Securing Custom Domains with SSL .
- Depending on how your app is configured, you have the following options: appspot.com domains Use the https URL prefix to send HTTPS request to the default service of your Google Cloud project, for example: https:// PROJECT ID .
- To learn more about the Google Security Model and the available steps that you can take to secure your Google Cloud projects, see Google Cloud Platform Security .

