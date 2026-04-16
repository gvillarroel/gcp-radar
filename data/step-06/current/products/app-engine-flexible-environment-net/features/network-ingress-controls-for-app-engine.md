---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.673Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Network ingress controls for App Engine"
feature_slug: "network-ingress-controls-for-app-engine"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/flexible/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings"
  - "https://cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "network"
  - "ingress"
  - "controls"
  - "app"
  - "engine"
  - "now"
  - "supports"
  - "restrict"
---

# Network ingress controls for App Engine

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine now supports network ingress controls to restrict incoming traffic to VPC-originated requests or traffic through Cloud Load Balancing.

## Extended Definition

App Engine now supports network ingress controls to restrict incoming traffic to VPC-originated requests or traffic through Cloud Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/flexible/ingress-settings](https://cloud.google.com/appengine/docs/flexible/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- [https://cloud.google.com/appengine/docs/flexible/application-security](https://cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://cloud.google.com/appengine/docs/flexible/ingress-settings](https://cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- OK This section describes how to use ingress settings to restrict network access to your App Engine app.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Ingress settings Stay organized with collections Save and categorize content based on your preferences.
- For example, to view the ingress settings and other information for the default service run: gcloud app services describe default Edit ingress settings Console Go to the App Engine Services page.

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OK This section describes how to use ingress settings to restrict network access to your App Engine app.
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Ingress settings Stay organized with collections Save and categorize content based on your preferences.
- For example, to view the ingress settings and other information for the default service run: gcloud app services describe default Edit ingress settings Console Go to the App Engine Services page.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/flexible/application-security](https://cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- You can add IP addresses or subnetworks to a denylist, so that requests routed from those addresses and subnetworks are denied before they reach your App Engine app.
- VPC Service Controls Not supported in the App Engine flexible environment.
- By default, your App Engine app accepts traffic from all network origins.

