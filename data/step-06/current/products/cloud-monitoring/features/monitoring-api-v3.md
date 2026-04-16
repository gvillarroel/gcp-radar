---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.069Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring API v3"
feature_slug: "monitoring-api-v3"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "monitoring"
  - "v3"
  - "generally"
  - "available"
  - "programmatic"
  - "access"
  - "intended"
  - "replace"
---

# Monitoring API v3

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring API v3 is generally available for programmatic access to Monitoring; Monitoring API v3 is available and intended to replace API v2.

## Extended Definition

Monitoring API v3 is generally available for programmatic access to Monitoring; Monitoring API v3 is available and intended to replace API v2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Test the policy Try to create an alerting policy with documentation that excludes the resource project name. gcloud monitoring policies create \ --display-name="CPU Utilization - 5% Threshold" \ --project= PROJECT ID \ --condition-display-name="Condition 1" \ --condition-filter='resource.type="gce instance" AND metric.type="compute.googleapis.com/instance/cpu/utilization"' \ --duration='60s' \ --if='>5' \ --combiner='AND' \ --documentation='The ${ metric . display name } of the ${ resource . type } ${ resource . label . instance id } has exceeded 5% for over 60 seconds.' \ Replace PROJECT ID with your project ID.
- Create the constraint Save the following file as constraint-alert-doc-has-project.yaml : actionType : DENY condition : resource.documentation.content.contains('${resource.project}') description : Requires documentation to include the project name. displayName : Alerting policy documentation must include project name. methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertDocHasProject resourceTypes : - monitoring.googleapis.com/AlertPolicy Replace ORGANIZATION ID with your organization ID.
- Resource Field monitoring.googleapis.com/AlertPolicy resource.alertStrategy.autoClose resource.alertStrategy.notificationChannelStrategy.notificationChannelNames resource.alertStrategy.notificationChannelStrategy.renotifyInterval resource.alertStrategy.notificationRateLimit.period resource.combiner resource.conditions.conditionAbsent.aggregations.alignmentPeriod resource.conditions.conditionAbsent.aggregations.crossSeriesReducer resource.conditions.conditionAbsent.aggregations.groupByFields resource.conditions.conditionAbsent.aggregations.perSeriesAligner resource.conditions.conditionAbsent.duration resource.conditions.conditionAbsent.filter resource.conditions.conditionAbsent.trigger.count resource.conditions.conditionAbsent.trigger.percent resource.conditions.conditionMatchedLog.filter resource.conditions.conditionMatchedLog.labelExtractors resource.conditions.conditionMonitoringQueryLanguage.duration resource.conditions.conditionMonitoringQueryLanguage.evaluationMissingData resource.conditions.conditionMonitoringQueryLanguage.query resource.conditions.conditionMonitoringQueryLanguage.trigger.count resource.conditions.conditionMonitoringQueryLanguage.trigger.percent resource.conditions.conditionPrometheusQueryLanguage.alertRule resource.conditions.conditionPrometheusQueryLanguage.duration resource.conditions.conditionPrometheusQueryLanguage.evaluationInterval resource.conditions.conditionPrometheusQueryLanguage.labels resource.conditions.conditionPrometheusQueryLanguage.query resource.conditions.conditionPrometheusQueryLanguage.ruleGroup resource.conditions.conditionSql.booleanTest.column resource.conditions.conditionSql.daily.periodicity resource.conditions.conditionSql.hourly.minuteOffset resource.conditions.conditionSql.hourly.periodicity resource.conditions.conditionSql.minutes.periodicity resource.conditions.conditionSql.query resource.conditions.conditionSql.rowCountTest.comparison resource.conditions.conditionSql.rowCountTest.threshold resource.conditions.conditionThreshold.aggregations.alignmentPeriod resource.conditions.conditionThreshold.aggregations.crossSeriesReducer resource.conditions.conditionThreshold.aggregations.groupByFields resource.conditions.conditionThreshold.aggregations.perSeriesAligner resource.conditions.conditionThreshold.comparison resource.conditions.conditionThreshold.denominatorAggregations.alignmentPeriod resource.conditions.conditionThreshold.denominatorAggregations.crossSeriesReducer resource.conditions.conditionThreshold.denominatorAggregations.groupByFields resource.conditions.conditionThreshold.denominatorAggregations.perSeriesAligner resource.conditions.conditionThreshold.denominatorFilter resource.conditions.conditionThreshold.duration resource.conditions.conditionThreshold.evaluationMissingData resource.conditions.conditionThreshold.filter resource.conditions.conditionThreshold.forecastOptions.forecastHorizon resource.conditions.conditionThreshold.thresholdValue resource.conditions.conditionThreshold.trigger.count resource.conditions.conditionThreshold.trigger.percent resource.conditions.displayName resource.conditions.name resource.displayName resource.documentation.content resource.documentation.links.displayName resource.documentation.links.url resource.documentation.mimeType resource.documentation.subject resource.enabled resource.name resource.notificationChannels resource.severity monitoring.googleapis.com/NotificationChannel resource.description resource.displayName resource.enabled resource.type monitoring.googleapis.com/Snooze resource.criteria.policies resource.displayName resource.interval.endTime resource.interval.startTime What's next Learn more about Organization Policy Service .
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following table describes the categories of billable metrics available on the Metrics Management page and whether they are measured by bytes or samples ingested: Domain Metric prefix Pricing model Meaning Agent agent.googleapis.com Bytes Metrics that are collected from external resources by agents .

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring APIs: monitoring.googleapis.com Installing the agent requires access to the following DNS names: (Linux) Google Cloud package repository: packages.cloud.google.com (Linux) Google downloads subdomain: dl.google.com (Windows) Legacy Stackdriver download server: repo.stackdriver.com Getting the Monitoring agent source code The source code for the Monitoring agent is available for only the Linux-hosted Monitoring agent.
- The Monitoring agent, stackdriver-agent , is based on the original collectd system statistics collection daemon. stackdriver-agent source code is available at Stackdriver/collectd .
- Monitoring can access some instance metrics without the Monitoring agent, including CPU utilization, some disk traffic metrics, network traffic, and uptime information.
- Monitoring uses the Monitoring agent to access additional system resources and application services in virtual machine (VM) instances.

