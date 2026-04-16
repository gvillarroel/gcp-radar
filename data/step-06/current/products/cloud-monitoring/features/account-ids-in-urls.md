---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.052Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Account IDs in URLs"
feature_slug: "account-ids-in-urls"
latest_feature_date: "2016-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "account"
  - "ids"
  - "urls"
  - "monitoring"
  - "include"
  - "stackdriver"
  - "id"
  - "multi"
---

# Account IDs in URLs

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring URLs include the Stackdriver account ID to support multi-account tabs and link sharing.

## Extended Definition

Monitoring URLs include the Stackdriver account ID to support multi-account tabs and link sharing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.
- If your project has multiple projects in its metrics scope, then the metrics shown on the Metrics Management page include the metrics from all of those projects.
- The set of principals includes users, groups, and service accounts.

### Use agent policies (GA) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies)
- Source ID: `site-iam-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Grant the Identity and Access Management roles Logs Writer ( roles/logging.logWriter ) and Monitoring Metric Writer ( roles/monitoring.metricWriter ) to the Compute Engine default service account so that the agents can write logs and metrics to the Logging and Cloud Monitoring APIs.
- Cloud Monitoring VM Instances page The VM Instances page in Cloud Monitoring includes an Agent column that lists the agent installed on each VM, and for the Ops Agent, includes an indicator for installed agents that are older than the latest version.
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-policy-access= [admin editor viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash prepare-for-ops-agents-policies.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-policy-access= [admin editor viewer] The diagnose policies.sh script Given a project ID, a Compute Engine instance ID, a Compute Engine zone, and the agent policy ID, the diagnose policies.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS policy assignment The OS policy assignments that are applicable to this Compute Engine instance A description of this Compute Engine instance To invoke the script, run the following command: bash diagnose policies.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID \ --zone= ZONE Pricing The gcloud compute instances ops-agents policies commands are implemented by using OS policy assignment resources from VM Manager .
- The examples assume that you put the YAML in a file named agent-policy-description.yaml and that you create the policy in the us-central1-a zone by using a command like the following: gcloud compute instances ops-agents policies create POLICY ID \ --zone us-central1-a \ --file agent-policy-description.yaml \ --project PROJECT ID Install on all VMs To install the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : all : True Remove from all VMs To remove the latest version of the Ops Agent on all VMs in the us-central1-a zone, use the following policy description: agentsRule : packageState : removed version : latest instanceFilter : all : True Install on VMs based on labels To install the latest version of the Ops Agent on all VMs in the us-central1-a zone with the label "env=prod" or "app=web", use the following policy description: agentsRule : packageState : installed version : latest instanceFilter : inclusionLabels : - labels : env : prod - labels : app : web When you specify multiple labels: entries for inclusion or exclusion, a VM matches if any of the labels is present; that is, the sets of labels for inclusion or exclusion are matched as a logical OR operation, not a logical AND operation.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- For information about how to configure our Google Cloud project to view metrics for multiple Google Cloud projects and AWS accounts, see Metrics scopes overview .
- You can configure the metrics scope to include time-series data from other Google Cloud projects and from AWS accounts.
- The following is an example of a points array with two values: "points": [ { "interval": { "startTime": "2020-07-27T20:20:21.597143Z", "endTime": "2020-07-27T20:20:21.597143Z" }, "value": { "doubleValue": 0.473005 } }, { "interval": { "startTime": "2020-07-27T20:19:21.597239Z", "endTime": "2020-07-27T20:19:21.597239Z" }, "value": { "doubleValue": 0.473025 } }, ], To understand the meaning of a value, you need to refer to the other data included in the time series and to the definitions of that data.

