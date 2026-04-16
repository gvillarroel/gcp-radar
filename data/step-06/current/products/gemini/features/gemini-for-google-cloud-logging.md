---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.664Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini for Google Cloud logging"
feature_slug: "gemini-for-google-cloud-logging"
latest_feature_date: "2024-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini"
keywords:
  - "gemini"
  - "for"
  - "logging"
  - "you"
  - "can"
  - "enable"
  - "collection"
  - "and"
---

# Gemini for Google Cloud logging

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

You can enable collection and storage of user input, contextual information, and responses for Gemini for Google Cloud.

## Extended Definition

You can enable collection and storage of user input, contextual information, and responses for Gemini for Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)

## Supporting Pages

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the command succeeds, it returns a response body that shows the log prompts and responses and log metadata set to false : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "log prompts and responses": false, "log metadata": false } Set up multi-project logging You can use logs from Gemini Code Assist to create metrics and dashboards for monitoring per-project usage.
- Configure Gemini Code Assist logging The following sections provide steps required to enable the collection and storage of Gemini Code Assist Standard and Enterprise activity in Cloud Logging, including: Gemini Code Assist Standard and Enterprise prompts and response logs, such as user input, contextual information, and responses.
- API To enable logging for Gemini Code Assist Standard and Enterprise, use the loggingSettings resource to define the logging settings you want, and use the loggingSettings.settingBindings resource to bind the settings to a project: Verify that you have enabled the Cloud Logging API in the project.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist Standard and Enterprise logging Stay organized with collections Save and categorize content based on your preferences.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List the number of unique users The following instructions describe how to use the gcloud CLI to list the number of unique users of Gemini Code Assist in the most recent 28-day period: In a shell environment, ensure that you have updated all installed components of the gcloud CLI to the latest version: gcloud components update Read the log entries for Gemini Code Assist users and usage: gcloud logging read 'resource.type=cloudaicompanion.googleapis.com/Instance labels.product= "code assist"' \ --freshness 28d \ --project PROJECT ID \ --format "csv(timestamp.date('%Y-%m-%d'),labels.user id)" Replace PROJECT ID with your Google Cloud project ID.
- For example, you can generate metrics that report the daily active usage or the acceptance of code recommendations for a variety of Google Cloud products, including Cloud Logging, Google Cloud CLI, Cloud Monitoring, and BigQuery.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Generate Gemini Code Assist metrics Stay organized with collections Save and categorize content based on your preferences.
- If you need to enable and view Gemini for Google Cloud prompt, response, and metadata logs, see View Gemini for Google Cloud logs .

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- Enable the Gemini for Google Cloud API for Gemini using the gcloud services enable command : gcloud services enable cloudaicompanion.googleapis.com If you want to enable the Gemini for Google Cloud API in a different Google Cloud project, add the --project parameter: gcloud services enable cloudaicompanion.googleapis.com --project PROJECT ID Replace PROJECT ID with your Google Cloud project ID.
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- Enable the Gemini for Google Cloud API for Gemini using the gcloud services enable command : gcloud services enable cloudaicompanion.googleapis.com If you want to enable the Gemini for Google Cloud API in a different Google Cloud project, add the --project parameter: gcloud services enable cloudaicompanion.googleapis.com --project PROJECT ID Replace PROJECT ID with your Google Cloud project ID.
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.

