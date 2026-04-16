---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.051Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS London Region Support"
feature_slug: "aws-london-region-support"
latest_feature_date: "2017-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/region-support"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
keywords:
  - "aws"
  - "london"
  - "region"
  - "monitoring"
  - "supports"
  - "eu"
  - "west"
---

# AWS London Region Support

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports the AWS London region eu-west-2.

## Extended Definition

Monitoring supports the AWS London region eu-west-2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)

## Supporting Pages

### Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- Source ID: `site-docs-reference`
- Final score: 66
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
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- When you run the terraform plan or terraform apply command, you are prompted for the following values: PROJECT ID : The ID of your Google Cloud project Example: ops agent policy install all in region This example installs the latest version of the Ops Agent on all eligible VMs in a given region, like us-west1 .
- A region contains multiple zones, in this case, us-west-1a , us-west-1b , and us-west-1c .
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- To verify that the OS Config API is enabled for the project, run the following commands: gcloud services list --project PROJECT ID grep osconfig.googleapis.com The expected output follows: osconfig.googleapis.com Cloud OS Config API The policy already exists A sample error looks like the following: ALREADY EXISTS: Requested entity already exists This error means this policy already exists with the same name, project ID and region.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Linux operating systems The agent supports the following Linux operating systems: Note: To use Cloud Logging on VMs with Container-Optimized OS, follow Using Cloud Logging with Container-Optimized OS instead.

