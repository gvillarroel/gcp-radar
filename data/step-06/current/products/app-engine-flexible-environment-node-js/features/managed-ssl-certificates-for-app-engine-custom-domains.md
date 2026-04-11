---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.406Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "Managed SSL certificates for App Engine custom domains"
feature_slug: "managed-ssl-certificates-for-app-engine-custom-domains"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-custom-domains-and-ssl"
keywords:
  - "automatic certificate revocation"
  - "automatic provisioning"
  - "automatic renewal"
  - "App Engine domain mapping certificates"
  - "certificate lifecycle"
  - "managed certs"
  - "Google-managed SSL"
  - "managed SSL certificates"
---

# Managed SSL certificates for App Engine custom domains

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine added managed certificates for custom domains, automatically provisioning, renewing, and revoking certificates during domain mapping lifecycle.

## Extended Definition

App Engine added managed certificates for custom domains, automatically provisioning, renewing, and revoking certificates during domain mapping lifecycle.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-custom-domains-and-ssl)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Upgrade to managed SSL certificates Before you upgrade to Google-managed SSL certificates, note that managed certificates do not support wildcard mappings.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- There is a limit of 20 managed SSL certificates per week for each base domain.
- Note: Wildcard mappings are not supported for managed SSL certificates.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- There is a limit of 20 managed SSL certificates per week for each base domain.
- Note: Wildcard mappings are not supported for managed SSL certificates.

