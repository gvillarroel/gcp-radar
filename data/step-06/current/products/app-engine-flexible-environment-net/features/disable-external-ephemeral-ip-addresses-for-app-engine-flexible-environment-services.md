---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.744Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Disable external ephemeral IP addresses for App Engine Flexible Environment services"
feature_slug: "disable-external-ephemeral-ip-addresses-for-app-engine-flexible-environment-services"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
keywords:
  - "disable external ephemeral IP"
  - "external ephemeral IP address"
  - "no external ephemeral IP"
  - "ephemeral IP off"
  - "ephemeral external IP"
  - "external IP disabled"
  - "App Engine flexible services"
---

# Disable external ephemeral IP addresses for App Engine Flexible Environment services

Product: App Engine flexible environment .NET
Coverage: HIGH

## Step 02 Summary

App Engine Flexible Environment now supports disabling external ephemeral IP addresses for its services.

## Extended Definition

This feature in App Engine flexible environment allows services to disable their default ephemeral external IP addresses while still running with an internal IP address. Disabling the ephemeral external IP is intended for private/internal-oriented deployments, but services that need access to custom domains must rely on Cloud NAT, since the ephemeral external IP is what normally enables requests to custom domains and internet resources.

## Evidence Summary

The cited page directly states how App Engine flexible services are provisioned with both internal and ephemeral external IPs by default, and how disabling the external ephemeral IP changes external access behavior with Cloud NAT requirements.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The documentation explicitly explains how to deploy flexible environment services without ephemeral external IPs and the operational implications of disabling them.

Evidence snippets:
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.
- Your service can send external requests through the Cloud NAT gateway without using the default ephemeral external IP addresses.

