---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.670Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Internal-only SSH access for App Engine flexible instances"
feature_slug: "internal-only-ssh-access-for-app-engine-flexible-instances"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/disable-external-ip"
keywords:
  - "internal"
  - "only"
  - "ssh"
  - "access"
  - "app"
  - "engine"
  - "flexible"
  - "instances"
---

# Internal-only SSH access for App Engine flexible instances

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment now supports SSH login to instances that use only internal IP addresses.

## Extended Definition

App Engine flexible environment now supports SSH login to instances that use only internal IP addresses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/flexible/disable-external-ip](https://cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/disable-external-ip)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/disable-external-ip)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://cloud.google.com/appengine/docs/flexible/disable-external-ip](https://cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .

