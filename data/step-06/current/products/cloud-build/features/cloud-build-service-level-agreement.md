---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.888Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build service level agreement"
feature_slug: "cloud-build-service-level-agreement"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/resources"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/build/docs/overview"
keywords:
  - "committing"
  - "agreement"
  - "least"
  - "published"
  - "level"
---

# Cloud Build service level agreement

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build published a service-level agreement committing to at least 99.95% monthly uptime.

## Extended Definition

Cloud Build published a service-level agreement committing to at least 99.95% monthly uptime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/resources](https://docs.cloud.google.com/build/docs/resources)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)

## Supporting Pages

### Resources \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/resources](https://docs.cloud.google.com/build/docs/resources)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Build Service Level Agreement (SLA) The Cloud Build Service Level Agreement.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify this element to change default settings for automatic scaling, such as setting minimum and maximum levels for number of instances, latency, and concurrent connections for a service.
- In order to use static handlers, at least one of your handlers must contain the line script: auto or define an entrypoint element to deploy successfully. secure Optional.
- Keep the following in mind: A high maximum reduces the number of idle instances more gradually when load levels return to normal after a spike.
- Note: When settling back to normal levels after a load spike, the number of idle instances can temporarily exceed your specified maximum.

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- You can either use the build steps provided by Cloud Build and the Cloud Build community, or write your own custom build steps: Build steps provided by Cloud Build : Cloud Build has published a set of supported open-source build steps for common languages and tasks.
- This panel displays the following information: Supply-chain Levels for Software Artifacts (SLSA) Level : Identifies the maturity level of your software build process in accordance with the SLSA specification .
- In the requirements for the SLSA framework, automated builds are a requirement for SLSA level 1, and using a build service instead of developer environments for builds is a requirement for SLSA level 2.
- Security insights panel Cloud Build includes a Security insights panel in the Google Cloud console that displays a high-level overview of multiple security metrics.

