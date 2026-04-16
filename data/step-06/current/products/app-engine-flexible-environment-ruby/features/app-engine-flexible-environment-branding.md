---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.516Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment branding"
feature_slug: "app-engine-flexible-environment-branding"
latest_feature_date: "2016-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "branding"
  - "managed"
  - "vms"
  - "was"
---

# App Engine flexible environment branding

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine Managed VMs was renamed to App Engine flexible environment.

## Extended Definition

App Engine Managed VMs was renamed to App Engine flexible environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- NTP with App Engine flexible environment The App Engine flexible environment has network time protocol (NTP) services which use Google NTP servers.
- However, the NTP services in the flexible environment is not editable.
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- If you encounter the limit, App Engine keeps trying to issue managed certificates until all requests have been fulfilled.
- By default, when you map a domain to your app, App Engine issues a managed certificate for SSL for HTTPS connections.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/ruby/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- After mapping a custom domain to your application and updating your DNS records , App Engine provisions a managed SSL certificate, renews the certificate, and revokes it when you remove the custom domain from your application.

