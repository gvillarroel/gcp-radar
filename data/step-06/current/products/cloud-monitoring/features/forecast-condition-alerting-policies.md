---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.108Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Forecast condition alerting policies"
feature_slug: "forecast-condition-alerting-policies"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "forecast"
  - "condition"
  - "alerting"
  - "policies"
  - "can"
  - "threshold"
  - "violations"
  - "within"
---

# Forecast condition alerting policies

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Alerting policies can forecast threshold violations within a configurable time window for constraint metrics such as quota, memory, and storage usage.

## Extended Definition

Alerting policies can forecast threshold violations within a configurable time window for constraint metrics such as quota, memory, and storage usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field monitoring.googleapis.com/AlertPolicy resource.alertStrategy.autoClose resource.alertStrategy.notificationChannelStrategy.notificationChannelNames resource.alertStrategy.notificationChannelStrategy.renotifyInterval resource.alertStrategy.notificationRateLimit.period resource.combiner resource.conditions.conditionAbsent.aggregations.alignmentPeriod resource.conditions.conditionAbsent.aggregations.crossSeriesReducer resource.conditions.conditionAbsent.aggregations.groupByFields resource.conditions.conditionAbsent.aggregations.perSeriesAligner resource.conditions.conditionAbsent.duration resource.conditions.conditionAbsent.filter resource.conditions.conditionAbsent.trigger.count resource.conditions.conditionAbsent.trigger.percent resource.conditions.conditionMatchedLog.filter resource.conditions.conditionMatchedLog.labelExtractors resource.conditions.conditionMonitoringQueryLanguage.duration resource.conditions.conditionMonitoringQueryLanguage.evaluationMissingData resource.conditions.conditionMonitoringQueryLanguage.query resource.conditions.conditionMonitoringQueryLanguage.trigger.count resource.conditions.conditionMonitoringQueryLanguage.trigger.percent resource.conditions.conditionPrometheusQueryLanguage.alertRule resource.conditions.conditionPrometheusQueryLanguage.duration resource.conditions.conditionPrometheusQueryLanguage.evaluationInterval resource.conditions.conditionPrometheusQueryLanguage.labels resource.conditions.conditionPrometheusQueryLanguage.query resource.conditions.conditionPrometheusQueryLanguage.ruleGroup resource.conditions.conditionSql.booleanTest.column resource.conditions.conditionSql.daily.periodicity resource.conditions.conditionSql.hourly.minuteOffset resource.conditions.conditionSql.hourly.periodicity resource.conditions.conditionSql.minutes.periodicity resource.conditions.conditionSql.query resource.conditions.conditionSql.rowCountTest.comparison resource.conditions.conditionSql.rowCountTest.threshold resource.conditions.conditionThreshold.aggregations.alignmentPeriod resource.conditions.conditionThreshold.aggregations.crossSeriesReducer resource.conditions.conditionThreshold.aggregations.groupByFields resource.conditions.conditionThreshold.aggregations.perSeriesAligner resource.conditions.conditionThreshold.comparison resource.conditions.conditionThreshold.denominatorAggregations.alignmentPeriod resource.conditions.conditionThreshold.denominatorAggregations.crossSeriesReducer resource.conditions.conditionThreshold.denominatorAggregations.groupByFields resource.conditions.conditionThreshold.denominatorAggregations.perSeriesAligner resource.conditions.conditionThreshold.denominatorFilter resource.conditions.conditionThreshold.duration resource.conditions.conditionThreshold.evaluationMissingData resource.conditions.conditionThreshold.filter resource.conditions.conditionThreshold.forecastOptions.forecastHorizon resource.conditions.conditionThreshold.thresholdValue resource.conditions.conditionThreshold.trigger.count resource.conditions.conditionThreshold.trigger.percent resource.conditions.displayName resource.conditions.name resource.displayName resource.documentation.content resource.documentation.links.displayName resource.documentation.links.url resource.documentation.mimeType resource.documentation.subject resource.enabled resource.name resource.notificationChannels resource.severity monitoring.googleapis.com/NotificationChannel resource.description resource.displayName resource.enabled resource.type monitoring.googleapis.com/Snooze resource.criteria.policies resource.displayName resource.interval.endTime resource.interval.startTime What's next Learn more about Organization Policy Service .
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Test the policy Try to create an alerting policy with documentation that excludes the resource project name. gcloud monitoring policies create \ --display-name="CPU Utilization - 5% Threshold" \ --project= PROJECT ID \ --condition-display-name="Condition 1" \ --condition-filter='resource.type="gce instance" AND metric.type="compute.googleapis.com/instance/cpu/utilization"' \ --duration='60s' \ --if='>5' \ --combiner='AND' \ --documentation='The ${ metric . display name } of the ${ resource . type } ${ resource . label . instance id } has exceeded 5% for over 60 seconds.' \ Replace PROJECT ID with your project ID.
- Create the constraint Save the following file as constraint-alert-doc-has-project.yaml : actionType : DENY condition : resource.documentation.content.contains('${resource.project}') description : Requires documentation to include the project name. displayName : Alerting policy documentation must include project name. methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertDocHasProject resourceTypes : - monitoring.googleapis.com/AlertPolicy Replace ORGANIZATION ID with your organization ID.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- January 25, 2023 Feature Now the alerting policy can forecast, or predict, that the threshold will be violated within a configurable time window.
- Feature You can now display summaries of single-condition alerting policies on a custom dashboard.
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.
- February 17, 2023 Feature You can now install pre-defined alerting policies for services integrated with Cloud Monitoring from the Monitoring Integrations page and from the Observability tab on the pages for Kubernetes Engine clusters and workloads.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- You can list metrics that appear in no alerting policy or in no custom dashboard defined in the current Google Cloud project by selecting the No alert policies or No custom dashboards quick filter.
- You can use the Metrics Management page to do the following: View metric usage at a glance : See how your metrics are being used in queries , custom dashboards , or alerting policies .
- You can also create alerting policies for any metric by clicking more vert Actions and then clicking Create alert for metric .
- If these metrics represent observability gaps, you can create charts or alerting policies for them.

