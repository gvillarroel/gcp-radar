---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.009Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Managed SSL certificates"
feature_slug: "managed-ssl-certificates"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "managed"
  - "ssl"
  - "certificates"
  - "automatically"
  - "provision"
  - "renew"
  - "revoke"
  - "app"
---

# Managed SSL certificates

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Managed SSL certificates automatically provision, renew, and revoke certificates for App Engine custom domains; Managed SSL certificates can be used with existing App Engine domain mappings by upgrading from existing SSL certificates.

## Extended Definition

Managed SSL certificates automatically provision, renew, and revoke certificates for App Engine custom domains; Managed SSL certificates can be used with existing App Engine domain mappings by upgrading from existing SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- By default, HTTPS connections on your custom domain are enabled automatically using managed SSL certificates.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see the following pages: Using Google-managed SSL certificates Using self-managed SSL certificates SSL policies Note the following limitation: We recommend that you use ingress controls so that your app only receives requests sent from the load balancer (and the VPC if you use it).
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- If you encounter the limit, App Engine keeps trying to issue managed certificates until all requests have been fulfilled.
- There is a limit of 20 managed SSL certificates per week for each base domain.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom domains To send HTTPS requests with your custom domain, you can use the managed SSL certificates that are provisioned by App Engine.

