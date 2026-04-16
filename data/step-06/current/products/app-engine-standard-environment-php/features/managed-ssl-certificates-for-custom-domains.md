---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.316Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Managed SSL certificates for custom domains"
feature_slug: "managed-ssl-certificates-for-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "custom"
  - "domains"
  - "app"
  - "engine"
  - "added"
---

# Managed SSL certificates for custom domains

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine added managed SSL certificates for custom domains, with automatic provisioning, renewal, and revocation tied to domain mapping.

## Extended Definition

App Engine added managed SSL certificates for custom domains, with automatic provisioning, renewal, and revocation tied to domain mapping.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Routing with a dispatch file You can create a dispatch file to override App Engine's URL-based routing rules and define your own custom routing rules.
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/php7/how-requests-are-routed)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Routing with a dispatch file You can create a dispatch file to override App Engine's URL-based routing rules and define your own custom routing rules.
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.

