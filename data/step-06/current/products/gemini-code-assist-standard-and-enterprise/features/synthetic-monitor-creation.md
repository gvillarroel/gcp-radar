---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.709Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Synthetic monitor creation"
feature_slug: "synthetic-monitor-creation"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
keywords:
  - "synthetic"
  - "monitor"
  - "creation"
  - "lets"
  - "users"
  - "create"
  - "in"
  - "monitoring"
---

# Synthetic monitor creation

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets users create a synthetic monitor in Cloud Monitoring.

## Extended Definition

Lets users create a synthetic monitor in Cloud Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)

## Supporting Pages

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- You can use the data visualization and analysis tools in Cloud Monitoring to help you answer important questions, such as how many daily active users in your organization are using Gemini Code Assist.
- Before you begin To get the permissions that you need to view metric data by using the Google Cloud console, ask your administrator to grant you the Monitoring Viewer ( roles/monitoring.viewer ) IAM role on your project.
- Gemini Code Assist automatically collects and stores metrics in Cloud Monitoring .
- What's next Learn more about monitoring Gemini for Google Cloud usage .

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to the following: 2024-10-30,user1@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user1@company.com 2024-10-28,user1@company.com Create a chart that displays daily usage The following steps show how to use Monitoring to create daily use graphs that show the aggregate total of daily active Gemini Code Assist users and the number of their requests per day.
- Create a Monitoring metric from your log data that records the number of Gemini Code Assist users: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, you can generate metrics that report the daily active usage or the acceptance of code recommendations for a variety of Google Cloud products, including Cloud Logging, Google Cloud CLI, Cloud Monitoring, and BigQuery.
- For information about generating Monitoring metrics from your log data, see Log-based metrics overview .

### "Configure Gemini Code Assist release channels \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output includes the operation metadata in the following format: { "name": "projects/ CONTAINER PROJECT NAME /locations/global/operations/operation- DSWG BINDING OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.cloudaicompanion.v1.OperationMetadata", "createTime": "2025-01-23T15:27:50.076075570Z", "target": "projects/ TARGET PROJECT NAME /locations/global/dataSharingWithGoogleSettings/ DSWG SETTING ID /settingBindings/ DSWG BINDING ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Optional: Check the status of the prompt and response setting binding creation: curl -H "Authorization: Bearer $TOKEN" \ https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/operations/operation- DSWG BINDING OPERATION ID Replace the following: CONTAINER PROJECT NAME : the project ID of the project where the binding resource is stored.
- The output includes the operation metadata in the following format: { "name": "projects/ CONTAINER PROJECT NAME /locations/global/operations/operation- RC BINDING OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.cloudaicompanion.v1.OperationMetadata", "createTime": "2025-01-23T15:27:50.076075570Z", "target": "projects/ TARGET PROJECT NAME /locations/global/releaseChannelSettings/ RC SETTING ID /settingBindings/ RC BINDING ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Optional: Check the status of the release channel setting binding creation: curl -H "Authorization: Bearer $TOKEN" \ https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/operations/operation- RC BINDING OPERATION ID Replace the following: CONTAINER PROJECT NAME : the project ID of the project where the binding resource is stored.
- Optional: Create the prompt and response sharing setting and a setting-specific value: Obtain the token: TOKEN=$(gcloud auth print-access-token) Create the setting: curl -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' -d '{ "enable preview data sharing": true, } ' -X POST "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/dataSharingWithGoogleSettings?data sharing with google setting id= DSWG SETTING ID " Replace the following: CONTAINER PROJECT NAME : the parent project ID DSWG SETTING ID : a unique setting name—for example, dswg1 for Data Sharing with Google The output shows the enablePreviewDataSharing set to true : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/dataSharingWithGoogleSettings/ DSWG SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "enablePreviewDataSharing": true } Create the prompt and response setting binding: curl \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-Type: application/json' \ -d '{ "target": "projects/ TARGET PROJECT NAME ", "product": "GEMINI CODE ASSIST" }' \ -X POST "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/dataSharingWithGoogleSettings/ DSWG SETTING ID /settingBindings?setting binding id= DSWG BINDING ID " Replace the following: TARGET PROJECT NAME : the target project to which the setting should be applied.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions cloudaicompanion.releaseChannelSettings.create cloudaicompanion.releaseChannelSettings.delete cloudaicompanion.releaseChannelSettings.get cloudaicompanion.releaseChannelSettings.list cloudaicompanion.releaseChannelSettings.update cloudaicompanion.dataSharingWithGoogleSettings.create Configure release channels using an API: cloudaicompanion.settingBindings.releaseChannelSettingsCreate cloudaicompanion.settingBindings.releaseChannelSettingsDelete cloudaicompanion.settingBindings.releaseChannelSettingsGet cloudaicompanion.settingBindings.releaseChannelSettingsList cloudaicompanion.settingBindings.releaseChannelSettingsUpdate cloudaicompanion.settingBindings.releaseChannelSettingsUse Configure prompt and response sharing using an API: cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsCreate cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsUse View Gemini for Google Cloud administrator settings: cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings Configure Gemini Code Assist release channels Select one of the following options: Console In the Google Cloud console, go to the Admin for Gemini page.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.

