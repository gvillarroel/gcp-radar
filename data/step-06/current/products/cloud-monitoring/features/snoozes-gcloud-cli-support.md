---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.106Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Snoozes gcloud CLI support"
feature_slug: "snoozes-gcloud-cli-support"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "snoozes"
  - "gcloud"
  - "cli"
  - "can"
  - "be"
  - "created"
  - "and"
  - "managed"
---

# Snoozes gcloud CLI support

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Snoozes can be created and managed with the gcloud CLI in addition to the console and API.

## Extended Definition

Snoozes can be created and managed with the gcloud CLI in addition to the console and API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, see the following: View application topology Application Monitoring overview October 23, 2025 Feature You can now use the Google Cloud CLI and the Cloud Monitoring API to list incidents and get incident details.
- For more information, see the following documents: Create and manage variables and pinned filters Configure dashboard filters and variables by using the API February 04, 2025 Feature When you create a snooze from the Incident details page, you can now apply the snooze to other incidents that have one or more of the same resource labels.
- November 03, 2022 Feature You can now add table widgets to custom dashboards that let you limit the number of table rows, persiste specific columns, display only those rows with the highest, or lowest values, and that display a visual indicator of the value as compared to the range of possible values.
- To learn more, see the following documents: Google Cloud console: Add widget to manage the value of a variable API: Dashboard with a FilterControl widget Feature The Google Cloud CLI ( gcloud ) commands to manage Cloud Monitoring alerting policies are now generally available.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- To view details of a specific extension policy, click the name of the policy. gcloud Zonal List VM extension policies To list information about all VM extension policies in a zone, use the gcloud beta compute zone-vm-extension-policies list : gcloud beta compute zone-vm-extension-policies list \ --project= PROJECT ID \ --zone= ZONE \ --page-size= PAGE SIZE INTEGER Replace the following variables in the command: PROJECT ID : The identifier of the project.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To grant this role to the service account, run the following gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID --member "serviceAccount: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" --role="roles/cloudtrace.agent" You can then run the gcloud projects get-iam-policy command to verify that the change has been made: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" The output now includes roles/cloudtrace.agent : ROLE roles/cloudtrace.agent roles/logging.logWriter roles/monitoring.metricWriter For more information about managing IAM roles, see Manage access to project, folders, and organizations .
- Determine the roles granted to to the service account To see the roles granted to a service account, run the following gcloud projects get-iam-policy command: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" You might see output like the following: ROLE roles/logging.logWriter roles/monitoring.metricWriter If the output includes either roles/cloudtrace.agent or roles/cloudtrace.admin , then the service account has sufficient permission to write traces.
- Benefits Before the availability of the OTLP plugin for the Ops Agent, the primary ways to instrument your applications to collect user-defined metrics and traces included the following: Using client libraries that implement the Monitoring API or the Trace API.
- This document describes how can use the Ops Agent and the OpenTelemetry Protocol (OTLP) receiver to collect user-defined metrics and traces from applications instrumented by using OpenTelemetry and running on Compute Engine.

