---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.848Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Internal IP mode for App Engine flexible instances"
feature_slug: "internal-ip-mode-for-app-engine-flexible-instances"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
keywords:
  - "private networking mode"
  - "network.instance_ip_mode"
  - "private IP mode"
  - "flexible instance networking"
  - "internal IP mode"
  - "INTERNAL_IP mode"
  - "internal mode"
  - "internal IP"
---

# Internal IP mode for App Engine flexible instances

Product: App Engine flexible environment Java
Coverage: HIGH

## Step 02 Summary

App Engine flexible environment instances now support setting IP mode to Internal.

## Extended Definition

In App Engine flexible environment, a service can be configured to run with only an internal IP address, making it a private service that is not directly accessible via an external IP. By default, a flexible service is deployed with both an internal and an ephemeral external IP, so this capability is the specific configuration that enables internal-only networking. If that service still needs outbound internet access, the documentation indicates Cloud NAT can be used as the egress path.

## Evidence Summary

The cited page confirms App Engine flexible services can be exposed only on internal IP, explains the default presence of both internal and external ephemeral IPs, and advises Cloud NAT for outbound internet access when internal-only mode is used.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- If your service does not require an external IP address, you can prevent your service from sending requests to resources on the internet and reduce costs by limiting your service to using only its internal IP address.
- Send external requests without an external IP address If your service sends requests to the internet but you want to limit it to using only its internal IP address, you can use Cloud NAT to create a gateway.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.

