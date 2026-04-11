---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.158Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS US East 2 Region Support"
feature_slug: "aws-us-east-2-region-support"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
keywords:
  - "aws"
  - "us"
  - "east"
  - "region"
  - "monitoring"
  - "supports"
  - "the"
---

# AWS US East 2 Region Support

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring supports the AWS region us-east-2.

## Extended Definition

Monitoring supports the AWS region us-east-2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature New AWS region : Monitoring now supports the AWS region us-east-2 .
- January 18, 2017 Feature New AWS regions : Monitoring now supports the AWS Canada ( ca-central-1 ) and London ( eu-west-2 ) regions.
- August 22, 2024 Deprecated Cloud Monitoring has ended support for the ingestion of AWS CloudWatch metrics by using AWS connector projects.
- August 18, 2023 Deprecated Cloud Monitoring is ending support for the ingestion of AWS CloudWatch metrics in AWS connector projects.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- The simplest way to verify that your Prometheus data is being ingested is to use the Cloud Monitoring Metrics Explorer page in the Google Cloud console: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To view the Metrics Management page, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Resource Field monitoring.googleapis.com/AlertPolicy resource.alertStrategy.autoClose resource.alertStrategy.notificationChannelStrategy.notificationChannelNames resource.alertStrategy.notificationChannelStrategy.renotifyInterval resource.alertStrategy.notificationRateLimit.period resource.combiner resource.conditions.conditionAbsent.aggregations.alignmentPeriod resource.conditions.conditionAbsent.aggregations.crossSeriesReducer resource.conditions.conditionAbsent.aggregations.groupByFields resource.conditions.conditionAbsent.aggregations.perSeriesAligner resource.conditions.conditionAbsent.duration resource.conditions.conditionAbsent.filter resource.conditions.conditionAbsent.trigger.count resource.conditions.conditionAbsent.trigger.percent resource.conditions.conditionMatchedLog.filter resource.conditions.conditionMatchedLog.labelExtractors resource.conditions.conditionMonitoringQueryLanguage.duration resource.conditions.conditionMonitoringQueryLanguage.evaluationMissingData resource.conditions.conditionMonitoringQueryLanguage.query resource.conditions.conditionMonitoringQueryLanguage.trigger.count resource.conditions.conditionMonitoringQueryLanguage.trigger.percent resource.conditions.conditionPrometheusQueryLanguage.alertRule resource.conditions.conditionPrometheusQueryLanguage.duration resource.conditions.conditionPrometheusQueryLanguage.evaluationInterval resource.conditions.conditionPrometheusQueryLanguage.labels resource.conditions.conditionPrometheusQueryLanguage.query resource.conditions.conditionPrometheusQueryLanguage.ruleGroup resource.conditions.conditionSql.booleanTest.column resource.conditions.conditionSql.daily.periodicity resource.conditions.conditionSql.hourly.minuteOffset resource.conditions.conditionSql.hourly.periodicity resource.conditions.conditionSql.minutes.periodicity resource.conditions.conditionSql.query resource.conditions.conditionSql.rowCountTest.comparison resource.conditions.conditionSql.rowCountTest.threshold resource.conditions.conditionThreshold.aggregations.alignmentPeriod resource.conditions.conditionThreshold.aggregations.crossSeriesReducer resource.conditions.conditionThreshold.aggregations.groupByFields resource.conditions.conditionThreshold.aggregations.perSeriesAligner resource.conditions.conditionThreshold.comparison resource.conditions.conditionThreshold.denominatorAggregations.alignmentPeriod resource.conditions.conditionThreshold.denominatorAggregations.crossSeriesReducer resource.conditions.conditionThreshold.denominatorAggregations.groupByFields resource.conditions.conditionThreshold.denominatorAggregations.perSeriesAligner resource.conditions.conditionThreshold.denominatorFilter resource.conditions.conditionThreshold.duration resource.conditions.conditionThreshold.evaluationMissingData resource.conditions.conditionThreshold.filter resource.conditions.conditionThreshold.forecastOptions.forecastHorizon resource.conditions.conditionThreshold.thresholdValue resource.conditions.conditionThreshold.trigger.count resource.conditions.conditionThreshold.trigger.percent resource.conditions.displayName resource.conditions.name resource.displayName resource.documentation.content resource.documentation.links.displayName resource.documentation.links.url resource.documentation.mimeType resource.documentation.subject resource.enabled resource.name resource.notificationChannels resource.severity monitoring.googleapis.com/NotificationChannel resource.description resource.displayName resource.enabled resource.type monitoring.googleapis.com/Snooze resource.criteria.policies resource.displayName resource.interval.endTime resource.interval.startTime What's next Learn more about Organization Policy Service .
- Create the constraint Save the following file as constraint-alert-doc-has-project.yaml : actionType : DENY condition : resource.documentation.content.contains('${resource.project}') description : Requires documentation to include the project name. displayName : Alerting policy documentation must include project name. methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertDocHasProject resourceTypes : - monitoring.googleapis.com/AlertPolicy Replace ORGANIZATION ID with your organization ID.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-alert-doc-has-project.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.alertDocHasProject ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: monitoring.googleapis.com/AlertPolicy DISPLAY NAME: Alerting policy documentation must include the project name.

