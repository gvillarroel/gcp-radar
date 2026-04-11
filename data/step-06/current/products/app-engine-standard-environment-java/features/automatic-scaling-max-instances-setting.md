---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.368Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Automatic scaling max instances setting"
feature_slug: "automatic-scaling-max-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/managing-costs"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "app.yaml automatic_scaling max_instances"
  - "instance cap"
  - "automatic scaling max instances"
  - "maximum instances"
  - "limit scheduled instances"
  - "max_instances setting"
  - "max instances setting"
  - "max_instances"
---

# Automatic scaling max instances setting

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Automatic scaling now supports a max instances setting to cap the total number of instances scheduled.

## Extended Definition

Automatic scaling now supports a max instances setting to cap the total number of instances scheduled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- Example basic scaling : max instances : 11 idle timeout : 10m manual scaling Applications that use an instance class of B1 or higher must specify either this element or basic scaling .
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- This element enables basic scaling of instance classes B1 and higher, can contain the following elements: max instances Required.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- Example basic scaling : max instances : 11 idle timeout : 10m manual scaling Applications that use an instance class of B1 or higher must specify either this element or basic scaling .
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- This element enables basic scaling of instance classes B1 and higher, can contain the following elements: max instances Required.

### "Manage App Engine costs \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you receive a notification, you can limit costs by lowering the value of the max instances setting or disabling your app .
- To specify the maximum number of instances, use the max instances setting in your app's app.yaml file.
- Important: App Engine applies the max instances setting on a best effort basis.

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- New max instances setting allows you to cap the total number of instances to be scheduled.
- March 03, 2025 Feature For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- To override the default, specify a new max instances value in your app.yaml file, and deploy a new version or redeploy over an existing version.

