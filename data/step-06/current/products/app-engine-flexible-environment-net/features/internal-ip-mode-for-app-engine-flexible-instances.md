---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.743Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Internal IP mode for App Engine flexible instances"
feature_slug: "internal-ip-mode-for-app-engine-flexible-instances"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
keywords:
  - "internal IP only mode"
  - "set instance IP mode"
  - "IP mode setting"
  - "IP mode internal"
  - "internal IP mode"
  - "internal mode"
  - "App Engine flexible networking"
  - "internal IP"
---

# Internal IP mode for App Engine flexible instances

Product: App Engine flexible environment .NET
Coverage: HIGH

## Step 02 Summary

App Engine flexible environment added General Availability of setting IP mode to internal for instances.

## Extended Definition

App Engine flexible environment services can be configured to run in an internal-only networking mode, which prevents the service from using an external IP address and keeps it limited to its internal IP. By default, a flexible service is provisioned with both an internal IP and an ephemeral external IP, and switching to internal-only operation requires explicit service configuration, including using a private-internal setup; outbound internet access in that state must be provided via Cloud NAT if required.

## Evidence Summary

The cited App Engine flexible documentation page states that services can be limited to internal IP only, describes the default dual IP behavior, and explains how to expose only internal IP while using Cloud NAT for external egress.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly describes using an internal IP mode for flexible instances and the required network prerequisites such as Private Google Access and Shared VPC configuration.

Evidence snippets:
- If your service does not require an external IP address, you can prevent your service from sending requests to resources on the internet and reduce costs by limiting your service to using only its internal IP address.
- Send external requests without an external IP address If your service sends requests to the internet but you want to limit it to using only its internal IP address, you can use Cloud NAT to create a gateway.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.

