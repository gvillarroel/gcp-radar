---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.310Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine network ingress controls"
feature_slug: "app-engine-network-ingress-controls"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
keywords:
  - "app"
  - "engine"
  - "network"
  - "ingress"
  - "controls"
  - "can"
  - "now"
  - "use"
---

# App Engine network ingress controls

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine can now use network ingress controls to allow traffic only from the project VPC or via Cloud Load Balancing.

## Extended Definition

App Engine can now use network ingress controls to allow traffic only from the project VPC or via Cloud Load Balancing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/application-security](https://docs.cloud.google.com/appengine/docs/flexible/python/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)

## Supporting Pages

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- OK This section describes how to use ingress settings to restrict network access to your App Engine app.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Ingress settings Stay organized with collections Save and categorize content based on your preferences.
- For example, to view the ingress settings and other information for the default service run: gcloud app services describe default Edit ingress settings Console Go to the App Engine Services page.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/application-security](https://docs.cloud.google.com/appengine/docs/flexible/python/application-security)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- You can add IP addresses or subnetworks to a denylist, so that requests routed from those addresses and subnetworks are denied before they reach your App Engine app.
- VPC Service Controls Not supported in the App Engine flexible environment.
- By default, your App Engine app accepts traffic from all network origins.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- You can add IP addresses or subnetworks to a denylist, so that requests routed from those addresses and subnetworks are denied before they reach your App Engine app.
- VPC Service Controls Not supported in the App Engine flexible environment.
- By default, your App Engine app accepts traffic from all network origins.

