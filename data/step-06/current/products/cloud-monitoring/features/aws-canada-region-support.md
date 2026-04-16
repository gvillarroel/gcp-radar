---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.050Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS Canada Region Support"
feature_slug: "aws-canada-region-support"
latest_feature_date: "2017-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/region-support"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "aws"
  - "canada"
  - "region"
  - "monitoring"
  - "supports"
  - "ca"
  - "central"
---

# AWS Canada Region Support

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports the AWS Canada region ca-central-1.

## Extended Definition

Monitoring supports the AWS Canada region ca-central-1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Data regionality for Cloud Monitoring Stay organized with collections Save and categorize content based on your preferences.
- To store a time series in a specific region , the monitored resource against which the time series is written must have one of the following labels and the value of the label must be valid: location zone region A time series is discarded when the monitored resource against which the time series is written has one of the previous labels and the value of the label isn't recognized or isn't specified.
- Storage of time-series data Google agents, client-side code using libraries like OpenTelemetry, and third-party sources such as BindPlane , write time series by using the Cloud Monitoring API.
- Data written by Google Cloud products Google Cloud products deployable by zone or by region store any time series that they generate in the same region to which they are deployed.

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- When you run the terraform plan or terraform apply command, you are prompted for the following values: PROJECT ID : The ID of your Google Cloud project REGION : The region in which to install the agent on VMs Example: ops agent policy install all in zone This example installs the latest version of the Ops Agent on all eligible VMs in a given zone, like us-central1-a .
- The examples assume that you put the YAML in a file named agent-policy-description.yaml and that you create the policy in the us-central1-a zone by using a command like the following: gcloud compute instances ops-agents policies create POLICY ID \ --zone us-central1-a \ --file agent-policy-description.yaml \ --project PROJECT ID Install on all VMs To install the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : all : True Remove from all VMs To remove the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : removed version : latest instanceFilter : all : True Install on VMs based on labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone with the label "env=prod" or "app=web", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : inclusionLabels : - labels : env : prod - labels : app : web When you specify multiple labels: entries for inclusion or exclusion, a VM matches if any of the labels is present; that is, the sets of labels for inclusion or exclusion are matched as a logical OR operation, not a logical AND operation.
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- Install on VMs based on other labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone running Debian 11, except those with the labels "env=prod" and "app=web6", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : exclusionLabels : - labels : env : prod app : web6 inventories : - osShortName : debian osVersion : '11' When you specify multiple key-value pairs under a single labels: entry for inclusion or exclusion, a VM matches if all of the labels are present; that is, the labels are matched as a logical AND operation, not a logical OR operation.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Install and manage the Ops Agent by using VM Extension Manager policies Stay organized with collections Save and categorize content based on your preferences.
- These policies can't manage versions of the Ops Agent earlier than version 2.58.0, Ops Agent instances installed by using other means, or any version of the legacy Monitoring agent or Logging agent .

