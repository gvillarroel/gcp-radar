---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.102Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Custom domain mapping"
feature_slug: "custom-domain-mapping"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl"
keywords:
  - "custom"
  - "domain"
  - "mapping"
  - "lets"
  - "you"
  - "verify"
  - "map"
  - "domains"
---

# Custom domain mapping

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

Custom domain mapping lets you verify and map custom domains by using gcloud commands and Admin API methods.

## Extended Definition

Custom domain mapping lets you verify and map custom domains by using gcloud commands and Admin API methods.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 271
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- Retrieve the DNS record information for your domain mappings: In the Google Cloud console, go to the Custom Domains tab of the App Engine Settings page.
- Using subdomains If you set up a wildcard subdomain mapping for your custom domain, your application serves requests for any matching subdomain.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/using-custom-domains-and-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 261
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- Retrieve the DNS record information for your domain mappings: In the Google Cloud console, go to the Custom Domains tab of the App Engine Settings page.
- Using subdomains If you set up a wildcard subdomain mapping for your custom domain, your application serves requests for any matching subdomain.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/python/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 241
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- To verify that the certificate was provisioned: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains The SSL security displays as Google-managed .
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .

