---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.522Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log scope management with Google Cloud CLI"
feature_slug: "log-scope-management-with-google-cloud-cli"
latest_feature_date: "2024-10-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "log"
  - "scope"
  - "management"
  - "with"
  - "cli"
  - "the"
  - "can"
  - "create"
---

# Log scope management with Google Cloud CLI

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Google Cloud CLI can create and manage log scopes.

## Extended Definition

The Google Cloud CLI can create and manage log scopes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources. (Optional) To delete the log entries you created, run the following gcloud command: gcloud logging logs delete my-test-log If you don't delete your log entries, then they expire and are removed.
- For example, if a Compute Engine VM instance is configured with the default API settings, then the list command completes with a permission denied error: ERROR: (gcloud.logging.read) PERMISSION DENIED: Request had insufficient authentication scopes.
- Write a log entry with unstructured data to the log my-test-log , run the gcloud logging write command: gcloud logging write my - test - log "A simple entry." After the command completes, you see the message: Created log entry .
- Write and query log entries with the gcloud CLI This document introduces you to some of the capabilities of Cloud Logging and shows you how to do the following: Write log entries by using the Google Cloud CLI.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- To view your Apache web server logs, create and run a query: Expand the list of Google Cloud projects from the Google Cloud project selector, and then copy the Google Cloud project ID into your clipboard.
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Enable the APIs Required roles To get the permissions that you need to create a Compute Engine instance, install Apache, and to view metric data, ask your administrator to grant you the following IAM roles on your project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Logs Viewer ( roles/logging.viewer ) Monitoring Editor ( roles/monitoring.editor ) OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Copy the following query and paste it into the log filter field: severity > = DEFAULT /help httpRequest.status = 404 The previous log filter searches for log entries with a severity level of at least DEFAULT , that contain the text /help , and that contain an httpRequest status of 404 .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- The query updates with a query similar to the following and reloads the query results: --Show similar entries protoPayload.methodName="io.k8s.core.v1.configmaps.update" --End of show similar entries To see a preview of the similar log entries, do the following: Select a log entry and click chevron right Expand .

