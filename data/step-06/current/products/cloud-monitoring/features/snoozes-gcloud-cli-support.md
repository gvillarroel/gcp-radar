---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.873Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Snoozes gcloud CLI support"
feature_slug: "snoozes-gcloud-cli-support"
latest_feature_date: "2023-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "snoozes"
  - "gcloud"
  - "cli"
  - "can"
  - "created"
  - "managed"
  - "addition"
  - "console"
---

# Snoozes gcloud CLI support

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Snoozes can be created and managed with the gcloud CLI in addition to the console and API.

## Extended Definition

Snoozes can be created and managed with the gcloud CLI in addition to the console and API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Test the policy Try to create an alerting policy with documentation that excludes the resource project name. gcloud monitoring policies create \ --display-name="CPU Utilization - 5% Threshold" \ --project= PROJECT ID \ --condition-display-name="Condition 1" \ --condition-filter='resource.type="gce instance" AND metric.type="compute.googleapis.com/instance/cpu/utilization"' \ --duration='60s' \ --if='>5' \ --combiner='AND' \ --documentation='The ${ metric . display name } of the ${ resource . type } ${ resource . label . instance id } has exceeded 5% for over 60 seconds.' \ Replace PROJECT ID with your project ID.
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- For general information about using the Google Cloud console and the gcloud CLI to create VM extension policies, see Install VM extensions by creating extension policies .
- For general information about using the Google Cloud console and the gcloud CLI to manage VM extension policies, see Modify extensions by updating a VM extension policy .

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- To grant this role to the service account, run the following gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID --member "serviceAccount: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" --role="roles/cloudtrace.agent" You can then run the gcloud projects get-iam-policy command to verify that the change has been made: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" The output now includes roles/cloudtrace.agent : ROLE roles/cloudtrace.agent roles/logging.logWriter roles/monitoring.metricWriter For more information about managing IAM roles, see Manage access to project, folders, and organizations .
- Determine the roles granted to to the service account To see the roles granted to a service account, run the following gcloud projects get-iam-policy command: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" You might see output like the following: ROLE roles/logging.logWriter roles/monitoring.metricWriter If the output includes either roles/cloudtrace.agent or roles/cloudtrace.admin , then the service account has sufficient permission to write traces.
- Trivial PromQL queries for the example metrics look like the following: otlp test gauge otlp test cumulative For more information about using PromQL in Cloud Monitoring to query metrics ingested by using the Prometheus API, see Google Cloud Managed Service for Prometheus data in Cloud Monitoring .
- Pricing and quota The ingestion format you use determines how the OTLP metrics are charged: Prometheus API: When you use the Prometheus API to ingest your application's metrics, the data is subject to sample-based pricing, as if the metrics had come in by using Managed Service for Prometheus.

