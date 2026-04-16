---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:03.998Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Internal IP mode"
feature_slug: "internal-ip-mode"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle"
keywords:
  - "internal"
  - "ip"
  - "mode"
  - "lets"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Internal IP mode

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Internal IP mode lets App Engine flexible environment instances run without external ephemeral IP addresses; Internal IP mode lets App Engine flexible environment instances run without external ephemeral IP addresses.

## Extended Definition

Internal IP mode lets App Engine flexible environment instances run without external ephemeral IP addresses; Internal IP mode lets App Engine flexible environment instances run without external ephemeral IP addresses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.

### "Runtime lifecycle \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- The App Engine flexible environment runtimes use open source components that are maintained by their respective communities.
- Upon notification, you should prepare to upgrade your application to a newer runtime that is supported in the flexible environment .
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes No UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.

