---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.397Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Managed SSL certificates for custom domains"
feature_slug: "managed-ssl-certificates-for-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "custom"
  - "domains"
  - "app"
  - "engine"
  - "can"
---

# Managed SSL certificates for custom domains

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine can automatically provision, renew, and revoke managed SSL certificates for mapped custom domains.

## Extended Definition

App Engine can automatically provision, renew, and revoke managed SSL certificates for mapped custom domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- To verify that the certificate was provisioned: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains The SSL security displays as Google-managed .

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inconsistent metrics when App Engine flexible environment uses Cloud Load Balancing The App Engine flexible environment dashboard displays all metrics only for requests routed through a flexible environment managed backend.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Routing with a dispatch file You can create a dispatch file to override App Engine's URL-based routing rules and define your own custom routing rules.

