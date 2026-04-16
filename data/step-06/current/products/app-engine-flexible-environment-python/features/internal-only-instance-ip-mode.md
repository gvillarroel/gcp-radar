---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.095Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Internal-only instance IP mode"
feature_slug: "internal-only-instance-ip-mode"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
keywords:
  - "internal"
  - "only"
  - "instance"
  - "ip"
  - "mode"
  - "app"
  - "engine"
  - "flexible"
---

# Internal-only instance IP mode

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment instances can be configured to use only internal IP addresses without external ephemeral IPs; App Engine flexible environment instances can be configured to use only internal IP addresses without external ephemeral IPs.

## Extended Definition

App Engine flexible environment instances can be configured to use only internal IP addresses without external ephemeral IPs; App Engine flexible environment instances can be configured to use only internal IP addresses without external ephemeral IPs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- If your app.yaml file already has a network section, add the following line inside the network section: instance ip mode: internal If your app.yaml file doesn't have a network section, create the section and specify the instance IP mode by adding the following lines: network: instance ip mode: internal Save these changes.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This ensures that you are using a version of the gcloud CLI that supports private IP addresses for flexible environment apps. gcloud components update In your app.yaml file, add the instance ip mode field to the network section and set it to internal .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configure private internal-only services Stay organized with collections Save and categorize content based on your preferences.
- This page shows the required configuration for exposing an App Engine flexible environment service only on its internal IP address.
- If your app.yaml file already has a network section, add the following line inside the network section: instance ip mode: internal If your app.yaml file doesn't have a network section, create the section and specify the instance IP mode by adding the following lines: network: instance ip mode: internal Save these changes.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.
- To enable and disable debug mode in gcloud : Use the gcloud app instances enable-debug command to debug the VMs for a particular instance and version, as follows: gcloud app --project PROJECT-ID instances enable-debug Replace PROJECT-ID with your own project ID, and follow the prompts to specify the instance version to debug.
- To connect to an instance in the console: Visit the Google Cloud console instances page for your project: Go to the instances page Click SSH in the far right of the row containing the instance you want to access: This puts the instance into debug mode, and opens an SSH session for the instance in a terminal window.
- When finished debugging, disable debug mode as follows: gcloud app --project PROJECT-ID instances disable-debug Follow the prompts to specify the instance version When you disable debug mode, the VM is stopped and a new instance of your app is started, running on a clean, new VM.

