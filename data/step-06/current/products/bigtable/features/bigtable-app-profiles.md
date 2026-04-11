---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.348Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable app profiles"
feature_slug: "bigtable-app-profiles"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "configuring"
  - "priorities"
  - "profiles"
  - "request"
  - "app"
  - "bigtable"
  - "now"
  - "to"
---

# Bigtable app profiles

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable app profiles now support configuring request priorities to prioritize workloads.

## Extended Definition

Bigtable app profiles now support configuring request priorities to prioritize workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Use the gcloud beta bigtable app-profiles update command to convert the app profile: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --standard \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] [--route-to= CLUSTER ID ] \ [--transactional-writes] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update the settings as needed, then click Save , or click Cancel to exit without saving. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Select the new cluster that traffic should be routed to, and then click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ [--description= DESCRIPTION ] \ [--force] \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] \ [--route-to= CLUSTER ID ] \ [--transactional-writes] \ [--priority=PRIORITY] \ [--row-affinity] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App profiles overview An application profile, or app profile , stores settings that tell your Bigtable instance how to handle incoming requests from an application.
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.
- Request priority You can specify the priority that Bigtable should give to a standard app profile's data requests.
- Use a separate app profile for each workload When you create a Bigtable instance, a default app profile is created automatically, and its settings depend on the number of clusters the instance has.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.29.1 (2023-11-07) Bug Fixes Add getPageSize() to QueryPaginator ( 42a7e36 ) Dependencies Update shared dependencies ( #1985 ) ( 0d1f620 ) 2.25.3 (2023-11-08) Bug Fixes A rare race condition in the row merger ( #1939 ) ( #2002 ) ( 6de74f3 ) 2.23.5 (2023-11-07) Bug Fixes Remove javadoc external link configuration ( #1815 ) ( #1999 ) ( e7752be ) 2.23.4 (2023-11-06) Bug Fixes A rare race condition in the row merger ( #1939 ) ( #1988 ) ( 31b084a ) November 08, 2023 Feature Cloud Bigtable app profiles now let you configure request priorities to prioritize certain workload data requests over others.
- Python Changes for google-cloud-bigtable 2.22.0 (2023-12-12) Features Add support for Cloud Bigtable request priorities in app profiles ( #871 ) ( a4d551e ) Add support for Python 3.12 ( #888 ) ( 4f050aa ) Introduce compatibility with native namespace packages ( #893 ) ( d218f4e ) Publish CopyBackup protos to external customers ( #855 ) ( 4105df7 ) Bug Fixes Add feature flag for improved mutate rows throttling ( e5af359 ) Add lock to flow control ( #899 ) ( e4e63c7 ) Mutations batcher race condition ( #896 ) ( fe58f61 ) Require google-cloud-core 1.4.4 ( #866 ) ( 09f8a46 ) Use retry async instead of retry in async client ( 597efd1 ) Documentation Minor formatting ( e5af359 ) December 13, 2023 Feature Reverse scans in Cloud Bigtable let you read a range of rows backwards.
- Java Changes for google-cloud-bigtable 2.28.0 (2023-10-12) Features Add support for Cloud Bigtable Request Priorities in App Profiles ( #1954 ) ( 8822571 ) Add test profile to push metrics to test environment ( #1921 ) ( 2104315 ) Dependencies Update shared dependencies ( #1955 ) ( f29717e ) October 09, 2023 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Feature Bigtable app profiles let you configure request priorities to prioritize certain workload data requests over others.

