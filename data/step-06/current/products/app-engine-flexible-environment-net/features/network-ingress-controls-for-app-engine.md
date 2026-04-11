---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.747Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Network ingress controls for App Engine"
feature_slug: "network-ingress-controls-for-app-engine"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "VPC-originated requests only"
  - "Cloud Load Balancing ingress path"
  - "incoming traffic restrictions"
  - "restrict incoming traffic"
  - "allowed ingress traffic"
  - "App Engine network ingress controls"
  - "network ingress setting"
  - "ingress controls"
---

# Network ingress controls for App Engine

Product: App Engine flexible environment .NET
Coverage: LOW

## Step 02 Summary

App Engine now supports network ingress controls to restrict incoming traffic to VPC-originated requests or traffic through Cloud Load Balancing.

## Extended Definition

Network ingress controls for App Engine in the flexible environment are an App Engine security feature that lets you restrict inbound traffic to the app, thereby limiting which incoming requests are accepted.

## Evidence Summary

The cited Google Cloud documentation confirms that App Engine flexible supports ingress controls to restrict inbound traffic, but the provided excerpt does not include explicit details about VPC-only or Cloud Load Balancing-specific restriction modes.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page discusses inbound request security (HTTPS, access control, and firewall), which is related to ingress control, but does not clearly detail VPC-or-Load-Balancer-restricted ingress behavior.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.

