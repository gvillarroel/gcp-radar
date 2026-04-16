---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.473Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging agent partial success ingestion"
feature_slug: "logging-agent-partial-success-ingestion"
latest_feature_date: "2018-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies"
keywords:
  - "logging"
  - "agent"
  - "partial"
  - "success"
  - "ingestion"
  - "supports"
  - "so"
  - "valid"
---

# Logging agent partial success ingestion

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging agent supports partial success so valid log entries are ingested even when some entries in a batch are invalid.

## Extended Definition

The Logging agent supports partial success so valid log entries are ingested even when some entries in a batch are invalid.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- In addition, the following Prometheus metrics are exposed by the output plugin in prometheus mode: uptime with a version label: Uptime of the Logging agent. stackdriver successful requests count with grpc and code labels: The number of successful requests to the Logging API. stackdriver failed requests count with grpc and code labels: The number of failed requests to the Logging API, broken down by the error code. stackdriver ingested entries count with grpc and code labels: The number of log entries ingested by the Logging API. stackdriver dropped entries count with grpc and code labels: The number of log entries rejected by the Logging API. stackdriver retried entries count with grpc and code labels: The number of log entries that failed to be ingested by the Google Cloud fluentd output plugin due to a transient error and were retried. prometheus and prometheus monitor plugin configuration Note: The following default monitoring configuration is exclusive to Linux operating systems.
- When set to true , the Logging agent keeps track of the number of log entries requested to be sent to Cloud Logging and the actual number of log entries successfully ingested by Cloud Logging.
- If false , the full set would be dropped if it contained any invalid log entries. enable monitoring bool true When set to true , the Logging agent exports internal telemetry.
- The Logging agent output plugin supports three ways to set LogEntry labels: Dynamically, replacing specific labels in a structured entry with different labels.

### Use agent policies (GA) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- Grant the Identity and Access Management roles Logs Writer ( roles/logging.logWriter ) and Monitoring Metric Writer ( roles/monitoring.metricWriter ) to the Compute Engine default service account so that the agents can write logs and metrics to the Logging and Cloud Monitoring APIs.
- Uninstall the legacy Monitoring agent and Logging agent If you're creating a policy for the Ops Agent, ensure that your VMs don't have the legacy Logging agent or Monitoring agent installed on them.
- Home Documentation Observability Cloud Logging Guides Send feedback Use agent policies (GA) Stay organized with collections Save and categorize content based on your preferences.

