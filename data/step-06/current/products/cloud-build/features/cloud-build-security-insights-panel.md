---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.704Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Security Insights panel"
feature_slug: "cloud-build-security-insights-panel"
latest_feature_date: "2023-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsFixedSizeCollection"
keywords:
  - "build"
  - "security"
  - "insights"
  - "panel"
  - "introduced"
  - "showing"
  - "slsa"
  - "levels"
---

# Cloud Build Security Insights panel

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build introduced a Security Insights panel showing SLSA levels, vulnerabilities, and build detail metrics.

## Extended Definition

Cloud Build introduced a Security Insights panel showing SLSA levels, vulnerabilities, and build detail metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsFixedSizeCollection)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- June 23, 2023 Feature The Cloud Build Security insights panel that displays security metrics such as Supply-chain Levels for Software Artifacts (SLSA) level for built artifacts, vulnerabilities, and build details is now generally available .
- The new Security insights panel is part of Build History in the console.
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This panel displays the following information: Supply-chain Levels for Software Artifacts (SLSA) Level : Identifies the maturity level of your software build process in accordance with the SLSA specification .
- Security insights panel Cloud Build includes a Security insights panel in the Google Cloud console that displays a high-level overview of multiple security metrics.
- Cloud Build features meet the requirements of Supply chain Levels for Software Artifacts (SLSA) level 3.
- Build security Cloud Build provides several features to secure your builds including: Automated Builds An automated build or scripted build defines all build steps in build script or build configuration, including steps to retrieve source code and steps to build the code.

### "Class CloudBuildClient.ListBuildsFixedSizeCollection (3.90.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- ListBuildsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudBuildClient.ListBuildsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudBuildClient.ListBuildsPage> pages, int collectionSize) protected CloudBuildClient .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildClient .
- ListBuildsPage > pages , int collectionSize ) Parameters Name Description pages List < ListBuildsPage > collectionSize int Returns Type Description CloudBuildClient.ListBuildsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListBuildsFixedSizeCollection (3.90.0) Stay organized with collections Save and categorize content based on your preferences.

