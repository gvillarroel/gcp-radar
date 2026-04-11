---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.067Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Serverless VPC Access egress settings"
feature_slug: "serverless-vpc-access-egress-settings"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "route traffic through VPC connector"
  - "external outbound traffic"
  - "Serverless VPC Access egress settings"
  - "connector egress behavior"
  - "egress control for App Engine"
  - "egress settings"
  - "egress routing"
  - "VPC egress"
---

# Serverless VPC Access egress settings

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Serverless VPC Access egress settings are generally available for App Engine standard, allowing control over whether external outbound traffic uses the VPC connector; Serverless VPC Access egress settings became available for App Engine, enabling external outbound traffic routing control through the connector.

## Extended Definition

Serverless VPC Access egress settings are generally available for App Engine standard, allowing control over whether external outbound traffic uses the VPC connector; Serverless VPC Access egress settings became available for App Engine, enabling external outbound traffic routing control through the connector.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Egress settings allow you to specify whether or not to send traffic with external destinations through your Serverless VPC Access connector, which is necessary if you want to set up a static outbound IP address for your App Engine service.
- Egress settings allow you to specify whether or not to send traffic with external destinations through your Serverless VPC Access connector, which is necessary if you want to set up a static outbound IP address for your App Engine service.
- November 03, 2021 Feature Egress settings for Serverless VPC Access are now generally available.
- July 21, 2021 Feature Egress settings are now available for Serverless VPC Access.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- Using the urlfetch library ignores egress settings, and requests will not route through a Serverless VPC Access connector.
- Egress settings are not compatible with the URL Fetch service.

