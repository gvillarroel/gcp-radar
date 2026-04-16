---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.304Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log view management in Google Cloud console"
feature_slug: "log-view-management-in-google-cloud-console"
latest_feature_date: "2025-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/buckets"
keywords:
  - "log"
  - "view"
  - "management"
  - "console"
  - "can"
  - "create"
  - "manage"
  - "views"
---

# Log view management in Google Cloud console

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can create and manage log views.

## Extended Definition

The Google Cloud console can create and manage log views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant roles required to use VM Extension Manager To get the permissions that you need to create, view, modify, and delete VM extension policies, ask your administrator to grant you the following IAM roles on the project: To create extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To view extension policies: VM Extension Policy Viewer ( roles/compute.vmExtensionPolicyViewer ) VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To modify extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To delete extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following sections show how to manage the Ops Agent to do the following: Update the pinned version of the agent on all VMs Modify the configuration of the Ops Agent on all VMs Update the pinned version of the Ops Agent on all VMs in a zone To change the pinned version of the Ops Agent on all VMs in a zone, do the following: Console To create a zonal policy, you can use the Google Cloud console.
- Install the Google Cloud CLI You can create and manage VM extension policies by using the Google Cloud console or the Google Cloud CLI, gcloud.
- You can create and manage zonal VM extension policies by using the Google Cloud console or the Google Cloud CLI, gcloud.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After creating a bucket, create a sink to route log entries to your bucket and configure log views to control who can access the logs in your new bucket and which logs are accessible to them.
- This document describes how to create and manage Cloud Logging buckets using the Google Cloud console, the Google Cloud CLI , and the Logging API .
- Your Identity and Access Management role includes the permissions that let you create a linked dataset .
- To create a user-defined log bucket for your Google Cloud project, do the following: Google Cloud console To create a log bucket in your Google Cloud project, do the following: In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .

