---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.368Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Automatic scaling instance state labeling"
feature_slug: "automatic-scaling-instance-state-labeling"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "Dynamic scaling state label"
  - "Dynamic instance state"
  - "instances labeled Dynamic"
  - "automatic scaling instance label"
  - "automatic scaling instance state"
  - "instance state"
  - "no Resident instances"
  - "Dynamic"
---

# Automatic scaling instance state labeling

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Automatic scaling now labels all App Engine instances as Dynamic rather than introducing Resident instances.

## Extended Definition

Automatic scaling now labels all App Engine instances as Dynamic rather than introducing Resident instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- When an application is not being used at all, App Engine turns off its associated dynamic instances, but readily reloads them as soon as they are needed.
- As requests for your application increase, the number of dynamic instances may increase as well.
- Instance life cycle Instance states An instance of an auto-scaled service is always running.

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Previously, if you used the min idle instances setting, the minimum idle instances were labelled as Resident in the Cloud Console, with the remainder of the instances labelled as Dynamic .
- If you use min idle instances and enable warmup requests, you will see at least that many dynamic instances running even during periods with no traffic.
- The new scheduler simply labels all instances as Dynamic with auto scaling.

