---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.509Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment region availability: australia-southeast1"
feature_slug: "app-engine-flexible-environment-region-availability-australia-southeast1"
latest_feature_date: "2017-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/locations"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "region"
  - "availability"
  - "australia"
  - "southeast1"
---

# App Engine flexible environment region availability: australia-southeast1

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment became available in the australia-southeast1 (Sydney, Australia) region.

## Extended Definition

The App Engine flexible environment became available in the australia-southeast1 (Sydney, Australia) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "App Engine locations \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback App Engine locations Stay organized with collections Save and categorize content based on your preferences.
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- The following App Engine app locations create databases that are multi-region: Apps located in us-central create a database in the nam5 multi-region.

### "Mapping custom domains \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/flexible/ruby/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- The regions are as follows: us-west2 us-east4 northamerica-northeast1 southamerica-east1 europe-west2 europe-west3 asia-south1 asia-northeast1 australia-southeast1 App Engine custom domains use a pool of shared IP addresses for all applications.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- Using custom domains might add noticeable latency to responses that App Engine sends to your app's users in some regions.
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Overview of app security Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls Not supported in the App Engine flexible environment.
- REGION ID .r.appspot.com To target specific resources in your App Engine app, use the -dot- syntax to separate each resource you want to target, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

