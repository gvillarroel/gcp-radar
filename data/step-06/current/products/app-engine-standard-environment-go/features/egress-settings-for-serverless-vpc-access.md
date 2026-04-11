---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.766Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Egress settings for Serverless VPC Access"
feature_slug: "egress-settings-for-serverless-vpc-access"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "external destination traffic"
  - "static outbound IP"
  - "egress routing through connector"
  - "egress controls"
  - "egress route"
  - "Serverless VPC Access egress"
  - "egress configuration"
  - "egress settings"
---

# Egress settings for Serverless VPC Access

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

Egress settings for Serverless VPC Access are now generally available, enabling control of traffic to external destinations and supporting static outbound IP configurations; Serverless VPC Access gained egress settings, allowing control over routing traffic to external destinations through the connector.

## Extended Definition

Egress settings for Serverless VPC Access are now generally available, enabling control of traffic to external destinations and supporting static outbound IP configurations; Serverless VPC Access gained egress settings, allowing control over routing traffic to external destinations through the connector.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Egress controls Egress controls determine what traffic is sent over Serverless VPC connectors .
- To specify Egress settings for your app, see Egress settings .

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Egress settings are not compatible with the URL Fetch service.

