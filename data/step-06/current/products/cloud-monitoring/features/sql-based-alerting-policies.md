---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.801Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "SQL-based alerting policies"
feature_slug: "sql-based-alerting-policies"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
keywords:
  - "sql"
  - "based"
  - "alerting"
  - "policies"
  - "monitoring"
  - "lets"
  - "you"
  - "create"
---

# SQL-based alerting policies

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring lets you create alerting policies that monitor the results of SQL queries.

## Extended Definition

Cloud Monitoring lets you create alerting policies that monitor the results of SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application telemetry Stay organized with collections Save and categorize content based on your preferences.
- To get more information about your incidents and alerting policies, do the following: To find details about the alerting policy that caused the incident, click the policy name.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- You can create and manage alerting policies by using the Google Cloud console, the Cloud Monitoring API, the Google Cloud CLI, or Terraform.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- When these integrations exist, you might see a panel that lists recommended alerts, or you might see a button on a chart that lets you create an alerting policy.

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Test the policy Try to create an alerting policy with documentation that excludes the resource project name. gcloud monitoring policies create \ --display-name="CPU Utilization - 5% Threshold" \ --project= PROJECT ID \ --condition-display-name="Condition 1" \ --condition-filter='resource.type="gce instance" AND metric.type="compute.googleapis.com/instance/cpu/utilization"' \ --duration='60s' \ --if='>5' \ --combiner='AND' \ --documentation='The ${ metric . display name } of the ${ resource . type } ${ resource . label . instance id } has exceeded 5% for over 60 seconds.' \ Replace PROJECT ID with your project ID.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-alert-doc-has-project.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.alertDocHasProject ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: monitoring.googleapis.com/AlertPolicy DISPLAY NAME: Alerting policy documentation must include the project name.
- Create the constraint Save the following file as constraint-alert-doc-has-project.yaml : actionType : DENY condition : resource.documentation.content.contains('${resource.project}') description : Requires documentation to include the project name. displayName : Alerting policy documentation must include project name. methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertDocHasProject resourceTypes : - monitoring.googleapis.com/AlertPolicy Replace ORGANIZATION ID with your organization ID.

