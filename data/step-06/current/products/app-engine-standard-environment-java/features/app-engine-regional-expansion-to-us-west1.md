---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.872Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine regional expansion to us-west1"
feature_slug: "app-engine-regional-expansion-to-us-west1"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "expansion"
  - "us"
  - "west1"
  - "became"
  - "available"
---

# App Engine regional expansion to us-west1

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine became available in the us-west1, asia-southeast1, and asia-east1 regions.

## Extended Definition

App Engine became available in the us-west1, asia-southeast1, and asia-east1 regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)

## Supporting Pages

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Important: Each Google Cloud project can contain only a single App Engine application, and once created you cannot change the location of your App Engine application. gcloud After installing Google Cloud CLI , an account with the Google Cloud project Owner role can run the following gcloud commands to create a Google Cloud project and App Engine application: Run the following command to create a Google Cloud project: gcloud projects create PROJECT ID Replace PROJECT ID with the Google Cloud project ID.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration Files app.yaml Details about the configuration file that is used to configure App Engine deployed versions. cron.yaml Details about the configuration file that is used to configure regularly scheduled tasks on App Engine. dispatch.yaml Details about the configuration file that is used to route incoming requests to a specific service based on the path or hostname in the URL. index.yaml Details about the configuration file used to define the Datastore indexes of the data in your app.
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback APIs & Reference Stay organized with collections Save and categorize content based on your preferences.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

