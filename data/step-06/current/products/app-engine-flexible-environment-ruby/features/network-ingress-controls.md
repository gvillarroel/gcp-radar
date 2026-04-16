---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.001Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Network ingress controls"
feature_slug: "network-ingress-controls"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings"
keywords:
  - "network"
  - "ingress"
  - "controls"
  - "restrict"
  - "app"
  - "engine"
  - "traffic"
  - "requests"
---

# Network ingress controls

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Network ingress controls restrict App Engine traffic to requests from a project's VPC or through Cloud Load Balancing.

## Extended Definition

Network ingress controls restrict App Engine traffic to requests from a project's VPC or through Cloud Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security](https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security)
- [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)

## Supporting Pages

### "Ingress settings \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings](https://docs.cloud.google.com/appengine/docs/flexible/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- OK This section describes how to use ingress settings to restrict network access to your App Engine app.
- Accessing internal services The following considerations apply: For requests from a Shared VPC, traffic is only considered internal if the App Engine app is deployed in the Shared VPC host project.
- For requests from Compute Engine VM instances or other resources running inside a VPC network in the same project, no further setup is required.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/application-security](https://docs.cloud.google.com/appengine/docs/flexible/application-security)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- You can add IP addresses or subnetworks to a denylist, so that requests routed from those addresses and subnetworks are denied before they reach your App Engine app.
- By default, your App Engine app accepts traffic from all network origins.
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.

### "Overview of app security \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security](https://docs.cloud.google.com/appengine/docs/flexible/ruby/application-security)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- You can add IP addresses or subnetworks to a denylist, so that requests routed from those addresses and subnetworks are denied before they reach your App Engine app.
- By default, your App Engine app accepts traffic from all network origins.
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.

