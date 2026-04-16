---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.406Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Regional availability in asia-northeast1"
feature_slug: "regional-availability-in-asia-northeast1"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
keywords:
  - "regional"
  - "availability"
  - "asia"
  - "northeast1"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Regional availability in asia-northeast1

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment is available in the asia-northeast1 region.

## Extended Definition

App Engine flexible environment is available in the asia-northeast1 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)

## Supporting Pages

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/python/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Updating DNS records at your domain registrar Note: If you have a custom domain set up for your App Engine app and want to move it to a different Google Cloud project, you do not need to update your custom domain DNS records as these will remain fixed for the domain when you switch projects.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- Both the standard environment and the flexible environment share the same limits for services and versions.
- Only the App Engine standard environment provides free quotas.

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring the web.xml deployment descriptor Stay organized with collections Save and categorize content based on your preferences.
- App Engine doesn't support JNDI environment variables ( <env-entry> ).
- Note that App Engine provides the JavaServer Pages Standard Tag Library (JSTL) , and you do not need to install it. <taglib> <taglib-uri>/escape</taglib-uri> <taglib-location>/WEB-INF/escape-tags.tld</taglib-location> </taglib> The welcome file list When the URLs for your site represent paths to static files or JSPs in your WAR, it is often a good idea for paths to directories to do something useful as well.
- Specifically, you cannot customize the 404 response page when no servlet mapping is defined for a URL, the 403 quota error page, or the 500 server error page that appears after an App Engine internal error. web.xml features not supported The following web.xml features are not supported by App Engine: App Engine supports the <load-on-startup> element for servlet declarations.

