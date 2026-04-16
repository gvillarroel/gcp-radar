---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.493Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine Admin API and gcloud support for custom domains and SSL certificates"
feature_slug: "app-engine-admin-api-and-gcloud-support-for-custom-domains-and-ssl-certificates"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl"
keywords:
  - "app"
  - "engine"
  - "admin"
  - "gcloud"
  - "custom"
  - "domains"
  - "ssl"
  - "certificates"
---

# App Engine Admin API and gcloud support for custom domains and SSL certificates

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine added beta-level Admin API and gcloud capabilities to create and manage custom domains and SSL certificates.

## Extended Definition

App Engine added beta-level Admin API and gcloud capabilities to create and manage custom domains and SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.

