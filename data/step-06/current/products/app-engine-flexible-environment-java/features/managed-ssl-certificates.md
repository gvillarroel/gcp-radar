---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.291Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Managed SSL certificates"
feature_slug: "managed-ssl-certificates"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "app"
  - "engine"
  - "can"
  - "use"
  - "custom"
---

# Managed SSL certificates

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine can use managed SSL certificates for custom domains; App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains.

## Extended Definition

App Engine can use managed SSL certificates for custom domains; App Engine can automatically provision, renew, and revoke SSL certificates for mapped custom domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- To use and manage your own SSL certificates instead of Google-managed certificates: Make sure you have already set up your custom domain in your App Engine project.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/java/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- If you encounter the limit, App Engine keeps trying to issue managed certificates until all requests have been fulfilled.
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/java/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- If you encounter the limit, App Engine keeps trying to issue managed certificates until all requests have been fulfilled.
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.

