---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.537Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine Serverless VPC Access egress settings"
feature_slug: "app-engine-serverless-vpc-access-egress-settings"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
keywords:
  - "private ranges only"
  - "Serverless VPC Access egress settings"
  - "egress traffic settings"
  - "external traffic through connector"
  - "egress mode"
  - "egress settings"
  - "connector egress"
  - "all traffic"
---

# App Engine Serverless VPC Access egress settings

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Serverless VPC Access egress settings are now generally available in App Engine standard to control whether external traffic uses the connector; App Engine standard now offers Serverless VPC Access egress settings so you can choose whether external traffic is sent through the connector.

## Extended Definition

Serverless VPC Access egress settings are now generally available in App Engine standard to control whether external traffic uses the connector; App Engine standard now offers Serverless VPC Access egress settings so you can choose whether external traffic is sent through the connector.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)

## Supporting Pages

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Egress settings are not compatible with the URL Fetch service.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Egress settings are not compatible with the URL Fetch service.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With Egress control settings, you can require all traffic from your App Engine services to be routed through the attached VPC Connector.
- To specify Egress settings for your app, see Egress settings .

