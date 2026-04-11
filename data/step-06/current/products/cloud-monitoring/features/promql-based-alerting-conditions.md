---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.094Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "PromQL-based alerting conditions"
feature_slug: "promql-based-alerting-conditions"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
keywords:
  - "promql"
  - "based"
  - "alerting"
  - "conditions"
  - "this"
  - "lets"
  - "policies"
  - "use"
---

# PromQL-based alerting conditions

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature lets alerting policies use PromQL expressions as conditions.

## Extended Definition

This feature lets alerting policies use PromQL expressions as conditions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This interface, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- This interface, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- This UI, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- The output is the following: Operation denied by custom org policies: ["customConstraints/alertDocHasProject": "Alerting policy documentation must include project name."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: monitoring.googleapis.com/AlertPolicy monitoring.googleapis.com/NotificationChannel monitoring.googleapis.com/Snooze To learn more about Organization Policy, see Custom organization policies .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Use custom organization policies Stay organized with collections Save and categorize content based on your preferences.

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The prepare-for-ops-agents-policies.sh script The diagnose policies.sh script The prepare-for-ops-agents-policies.sh script After you download the prepare-for-ops-agents-policies.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .
- The examples assume that you put the YAML in a file named agent-policy-description.yaml and that you create the policy in the us-central1-a zone by using a command like the following: gcloud compute instances ops-agents policies create POLICY ID \ --zone us-central1-a \ --file agent-policy-description.yaml \ --project PROJECT ID Install on all VMs To install the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : all : True Remove from all VMs To remove the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : removed version : latest instanceFilter : all : True Install on VMs based on labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone with the label "env=prod" or "app=web", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : inclusionLabels : - labels : env : prod - labels : app : web When you specify multiple labels: entries for inclusion or exclusion, a VM matches if any of the labels is present; that is, the sets of labels for inclusion or exclusion are matched as a logical OR operation, not a logical AND operation.
- Install on VMs based on operating system To install the latest version 2 of the Ops Agent on all VMs running Debian 11 or RHEL 7. in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : 2. . instanceFilter : inventories : - osShortName : rhel osVersion : '7. ' - osShortName : debian osVersion : '11' Terraform This section describes the examples in the examples directory of the terraform-google-cloud-operations repository.

