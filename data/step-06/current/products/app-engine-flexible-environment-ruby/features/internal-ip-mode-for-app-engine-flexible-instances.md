---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.500Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Internal IP mode for App Engine flexible instances"
feature_slug: "internal-ip-mode-for-app-engine-flexible-instances"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
keywords:
  - "internal"
  - "ip"
  - "mode"
  - "app"
  - "engine"
  - "flexible"
  - "instances"
  - "environments"
---

# Internal IP mode for App Engine flexible instances

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environments now allow setting IP mode to internal for instances.

## Extended Definition

App Engine flexible environments now allow setting IP mode to internal for instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- Private Google Access dependency: Instances with IP mode set to internal require Private Google Access on the target subnetwork.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable and disable debug mode in gcloud : Use the gcloud app instances enable-debug command to debug the VMs for a particular instance and version, as follows: gcloud app --project PROJECT-ID instances enable-debug Replace PROJECT-ID with your own project ID, and follow the prompts to specify the instance version to debug.
- To connect to an instance in the console: Visit the Google Cloud console instances page for your project: Go to the instances page Click SSH in the far right of the row containing the instance you want to access: This puts the instance into debug mode, and opens an SSH session for the instance in a terminal window.
- When finished debugging, disable debug mode as follows: gcloud app --project PROJECT-ID instances disable-debug Follow the prompts to specify the instance version When you disable debug mode, the VM is stopped and a new instance of your app is started, running on a clean, new VM.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.

