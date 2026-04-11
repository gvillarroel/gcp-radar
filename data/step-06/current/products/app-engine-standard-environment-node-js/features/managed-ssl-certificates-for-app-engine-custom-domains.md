---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.091Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Managed SSL certificates for App Engine custom domains"
feature_slug: "managed-ssl-certificates-for-app-engine-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/mapping-custom-domains"
keywords:
  - "automatically provisioned certificates"
  - "auto-renew managed certificates"
  - "revoke managed certificate"
  - "Google-managed SSL for custom domain"
  - "Google-managed certificate"
  - "managed certs"
  - "managed SSL certificates"
---

# Managed SSL certificates for App Engine custom domains

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Managed certificates allow App Engine applications on custom domains to have automatically provisioned, renewed, and revoked SSL certificates.

## Extended Definition

Managed certificates allow App Engine applications on custom domains to have automatically provisioned, renewed, and revoked SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/nodejs/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/nodejs/mapping-custom-domains)

## Supporting Pages

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/nodejs/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/nodejs/mapping-custom-domains)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- There is a limit of 20 managed SSL certificates per week for each base domain.
- Note: Wildcard mappings are not supported for managed SSL certificates.

