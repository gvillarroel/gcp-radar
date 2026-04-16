---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.283Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Managed SSL certificates for App Engine custom domains"
feature_slug: "managed-ssl-certificates-for-app-engine-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "app"
  - "engine"
  - "custom"
  - "domains"
  - "available"
---

# Managed SSL certificates for App Engine custom domains

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Managed SSL certificates are available for custom domains, with automatic provisioning, renewal, and revocation when domains are mapped.

## Extended Definition

Managed SSL certificates are available for custom domains, with automatic provisioning, renewal, and revocation when domains are mapped.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)

## Supporting Pages

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-required-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Routing with a dispatch file You can create a dispatch file to override App Engine's URL-based routing rules and define your own custom routing rules.
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference-required-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.
- For more information, see Securing Custom Domains with SSL .
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the index configuration file To deploy the index.yaml configuration file, run the following command: gcloud app deploy index.yaml Delete unused indexes When you change or remove an index from the index configuration, the original index is not deleted from App Engine automatically.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.

