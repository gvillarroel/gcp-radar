---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.900Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java SDK 1.9.52"
feature_slug: "app-engine-java-sdk-1-9-52"
latest_feature_date: "2017-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "app"
  - "engine"
  - "java"
  - "sdk"
  - "52"
  - "updated"
  - "version"
---

# App Engine Java SDK 1.9.52

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Updated the App Engine Java SDK to version 1.9.52.

## Extended Definition

Updated the App Engine Java SDK to version 1.9.52.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource name : appengine.versions.update Query parameters Parameters updateMask string ( FieldMask format) Standard field mask for the set of fields to be updated.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instanceClass automatic scaling in the standard environment: automaticScaling.min idle instances automaticScaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: servingStatus manualScaling.instances Flexible environment servingStatus automatic scaling in the flexible environment: automaticScaling.min total instances automaticScaling.max total instances automaticScaling.cool down period sec automaticScaling.cpu utilization.target utilization manual scaling in the flexible environment: manualScaling.instances HTTP request PATCH https://appengine.googleapis.com/v1/{name=apps/ /services/ /versions/ } The URL uses gRPC Transcoding syntax.
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.services.versions.patch Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- Tighter control around deploying new versions, including the ability to automate traffic migration between two versions or traffic splitting across one or more versions.
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Caching static content To ensure that clients always receive updated static content as soon as it is published, we recommend that you serve static content from versioned directories, such as css/v1/styles.css .
- App Engine returns an uncompressed response and Google Frontend caches the uncompressed version of the response data.
- App Engine returns a compressed response and the Google Front End caches the gzipped version of the response data.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

