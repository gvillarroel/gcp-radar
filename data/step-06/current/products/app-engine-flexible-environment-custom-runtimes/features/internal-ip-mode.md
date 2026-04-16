---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.386Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Internal IP mode"
feature_slug: "internal-ip-mode"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
keywords:
  - "internal"
  - "ip"
  - "mode"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "instances"
---

# Internal IP mode

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment instances can be configured to use internal IP mode.

## Extended Definition

App Engine flexible environment instances can be configured to use internal IP mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- By default, flexible environment services receive both an internal IP address and an ephemeral external IP address when they are first deployed.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.
- To enable and disable debug mode in gcloud : Use the gcloud app instances enable-debug command to debug the VMs for a particular instance and version, as follows: gcloud app --project PROJECT-ID instances enable-debug Replace PROJECT-ID with your own project ID, and follow the prompts to specify the instance version to debug.
- To connect to an instance in the console: Visit the Google Cloud console instances page for your project: Go to the instances page Click SSH in the far right of the row containing the instance you want to access: This puts the instance into debug mode, and opens an SSH session for the instance in a terminal window.
- When finished debugging, disable debug mode as follows: gcloud app --project PROJECT-ID instances disable-debug Follow the prompts to specify the instance version When you disable debug mode, the VM is stopped and a new instance of your app is started, running on a clean, new VM.

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- NTP with App Engine flexible environment The App Engine flexible environment has network time protocol (NTP) services which use Google NTP servers.
- Stop a version Each version in App Engine runs within one or more instances, depending on how much traffic you configured it to handle.
- By default, your app uses automatic scaling, which means App Engine will manage the number of idle instances.

