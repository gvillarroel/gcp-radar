---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.884Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java SDK update"
feature_slug: "app-engine-java-sdk-update"
latest_feature_date: "2018-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "app"
  - "engine"
  - "java"
  - "sdk"
  - "update"
  - "was"
  - "updated"
  - "version"
---

# App Engine Java SDK update

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine Java SDK was updated to version 1.9.64; The App Engine Java SDK was updated to version 1.9.63.

## Extended Definition

The App Engine Java SDK was updated to version 1.9.64; The App Engine Java SDK was updated to version 1.9.63.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource name : appengine.versions.update Query parameters Parameters updateMask string ( FieldMask format) Standard field mask for the set of fields to be updated.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instanceClass automatic scaling in the standard environment: automaticScaling.min idle instances automaticScaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: servingStatus manualScaling.instances Flexible environment servingStatus automatic scaling in the flexible environment: automaticScaling.min total instances automaticScaling.max total instances automaticScaling.cool down period sec automaticScaling.cpu utilization.target utilization manual scaling in the flexible environment: manualScaling.instances HTTP request PATCH https://appengine.googleapis.com/v1/{name=apps/ /services/ /versions/ } The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.services.versions.patch Stay organized with collections Save and categorize content based on your preferences.

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Caching static content To ensure that clients always receive updated static content as soon as it is published, we recommend that you serve static content from versioned directories, such as css/v1/styles.css .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- App Engine returns an uncompressed response and Google Frontend caches the uncompressed version of the response data.
- App Engine returns a compressed response and the Google Front End caches the gzipped version of the response data.

