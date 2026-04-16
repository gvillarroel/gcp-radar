---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.399Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Custom domain and SSL management API"
feature_slug: "custom-domain-and-ssl-management-api"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list"
keywords:
  - "custom"
  - "domain"
  - "ssl"
  - "management"
  - "app"
  - "engine"
  - "admin"
  - "gcloud"
---

# Custom domain and SSL management API

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine Admin API and gcloud provide beta features to create and manage custom domains and SSL certificates.

## Extended Definition

App Engine Admin API and gcloud provide beta features to create and manage custom domains and SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list)

## Supporting Pages

### "Method: apps.authorizedDomains.list \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedDomains/list)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.authorizedDomains.list Stay organized with collections Save and categorize content based on your preferences.
- Authorization Scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/appengine.admin https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only For more information, see the Authentication Overview .
- HTTP request GET https://appengine.googleapis.com/v1/{parent=apps/ }/authorizedDomains The URL uses gRPC Transcoding syntax.
- AuthorizedDomain A domain that a user has been authorized to administer.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.
- Alternatively, you can use gcloud commands or the Admin API to delete custom domains.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .

