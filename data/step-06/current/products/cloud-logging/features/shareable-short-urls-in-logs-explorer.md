---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.438Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Shareable Short URLs in Logs Explorer"
feature_slug: "shareable-short-urls-in-logs-explorer"
latest_feature_date: "2020-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "shareable"
  - "short"
  - "urls"
  - "logs"
  - "explorer"
  - "can"
  - "create"
  - "shortened"
---

# Shareable Short URLs in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer can create shortened share links for the current query.

## Extended Definition

Logs Explorer can create shortened share links for the current query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Save and share queries . link Share link : Create a shortened URL of the query and copy it to your clipboard, making it easier to share a query.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Example command: gcloud logging sinks update Default \ logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID \ --log-filter='NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency")' \ --description="Updated the Default sink to route logs to the LOCATION region" Note: When you create a project, the filter for the Default sink is as shown in the previous command.
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- View your log entry: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, when you to the Logs Explorer page and use the Refine scope selector to list log views, region information is also displayed.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Enable the APIs Required roles To get the permissions that you need to create a Compute Engine instance, install Apache, and to view metric data, ask your administrator to grant you the following IAM roles on your project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Logs Viewer ( roles/logging.viewer ) Monitoring Editor ( roles/monitoring.editor ) OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- The email notification you receive looks similar to the following: To view the new log entries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

