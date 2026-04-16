---
title: "Cloud Monitoring API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/ref_v3/rest
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/ref_v3/rest
  title: "Cloud Monitoring API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Monitoring
Reference
Send feedback
Cloud Monitoring API
Stay organized with collections
Save and categorize content based on your preferences.
Manages your Cloud Monitoring data and configurations.
REST Resource: v3.folders.timeSeries
REST Resource: v3.organizations.timeSeries
REST Resource: v3.projects.alertPolicies
REST Resource: v3.projects.alerts
REST Resource: v3.projects.groups
REST Resource: v3.projects.groups.members
REST Resource: v3.projects.metricDescriptors
REST Resource: v3.projects.monitoredResourceDescriptors
REST Resource: v3.projects.notificationChannelDescriptors
REST Resource: v3.projects.notificationChannels
REST Resource: v3.projects.snoozes
REST Resource: v3.projects.timeSeries
REST Resource: v3.projects.uptimeCheckConfigs
REST Resource: v3.services
REST Resource: v3.services.serviceLevelObjectives
REST Resource: v3.uptimeCheckIps
REST Resource: v1.locations.global.metricsScopes
REST Resource: v1.locations.global.metricsScopes.projects
REST Resource: v1.operations
REST Resource: v1.projects.dashboards
REST Resource: v1.projects.location.prometheus.api.v1
REST Resource: v1.projects.location.prometheus.api.v1.label
REST Resource: v1.projects.location.prometheus.api.v1.metadata
Service: monitoring.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://monitoring.googleapis.com/$discovery/rest?version=v3
https://monitoring.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://monitoring.googleapis.com
REST Resource: v3.folders.timeSeries
Methods
list
GET /v3/{name}/timeSeries
Lists time series that match a filter.
REST Resource: v3.organizations.timeSeries
Methods
list
GET /v3/{name}/timeSeries
Lists time series that match a filter.
REST Resource: v3.projects.alertPolicies
Methods
create
POST /v3/{name}/alertPolicies
Creates a new alerting policy.
delete
DELETE /v3/{name}
Deletes an alerting policy.
get
GET /v3/{name}
Gets a single alerting policy.
list
GET /v3/{name}/alertPolicies
Lists the existing alerting policies for the workspace.
patch
PATCH /v3/{alertPolicy.name}
Updates an alerting policy.
REST Resource: v3.projects.alerts
Methods
get
GET /v3/{name}
Gets a single alert.
list
GET /v3/{parent}/alerts
Lists the existing alerts for the metrics scope of the project.
REST Resource: v3.projects.groups
Methods
create
POST /v3/{name}/groups
Creates a new group.
delete
DELETE /v3/{name}
Deletes an existing group.
get
GET /v3/{name}
Gets a single group.
list
GET /v3/{name}/groups
Lists the existing groups.
update
PUT /v3/{group.name}
Updates an existing group.
REST Resource: v3.projects.groups.members
Methods
list
GET /v3/{name}/members
Lists the monitored resources that are members of a group.
REST Resource: v3.projects.metricDescriptors
Methods
create
POST /v3/{name}/metricDescriptors
Creates a new metric descriptor.
delete
DELETE /v3/{name}
Deletes a metric descriptor.
get
GET /v3/{name}
Gets a single metric descriptor.
list
GET /v3/{name}/metricDescriptors
Lists metric descriptors that match a filter.
REST Resource: v3.projects.monitoredResourceDescriptors
Methods
get
GET /v3/{name}
Gets a single monitored resource descriptor.
list
GET /v3/{name}/monitoredResourceDescriptors
Lists monitored resource descriptors that match a filter.
REST Resource: v3.projects.notificationChannelDescriptors
Methods
get
GET /v3/{name}
Gets a single channel descriptor.
list
GET /v3/{name}/notificationChannelDescriptors
Lists the descriptors for supported channel types.
REST Resource: v3.projects.notificationChannels
Methods
create
POST /v3/{name}/notificationChannels
Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.
delete
DELETE /v3/{name}
Deletes a notification channel.
get
GET /v3/{name}
Gets a single notification channel.
getVerificationCode
POST /v3/{name}:getVerificationCode
Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project.
list
GET /v3/{name}/notificationChannels
Lists the notification channels that have been created for the project.
patch
PATCH /v3/{notificationChannel.name}
Updates a notification channel.
sendVerificationCode
POST /v3/{name}:sendVerificationCode
Causes a verification code to be delivered to the channel.
verify
POST /v3/{name}:verify
Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode .
REST Resource: v3.projects.snoozes
Methods
create
POST /v3/{parent}/snoozes
Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened.
get
GET /v3/{name}
Retrieves a Snooze by name .
list
GET /v3/{parent}/snoozes
Lists the Snooze s associated with a project.
patch
PATCH /v3/{snooze.name}
Updates a Snooze , identified by its name , with the parameters in the given Snooze object.
REST Resource: v3.projects.timeSeries
Methods
create
POST /v3/{name}/timeSeries
Creates or adds data to one or more time series.
list
GET /v3/{name}/timeSeries
Lists time series that match a filter.
query (deprecated)
POST /v3/{name}/timeSeries:query
Queries time series by using Monitoring Query Language (MQL).
REST Resource: v3.projects.uptimeCheckConfigs
Methods
create
POST /v3/{parent}/uptimeCheckConfigs
Creates a new Uptime check configuration.
delete
DELETE /v3/{name}
Deletes an Uptime check configuration.
get
GET /v3/{name}
Gets a single Uptime check configuration.
list
GET /v3/{parent}/uptimeCheckConfigs
Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).
patch
PATCH /v3/{uptimeCheckConfig.name}
Updates an Uptime check configuration.
REST Resource: v3.services
Methods
create
POST /v3/{parent}/services
Create a Service .
delete
DELETE /v3/{name}
Soft delete this Service .
get
GET /v3/{name}
Get the named Service .
list
GET /v3/{parent}/services
List Service s for this Metrics Scope.
patch
PATCH /v3/{service.name}
Update this Service .
REST Resource: v3.services.serviceLevelObjectives
Methods
create
POST /v3/{parent}/serviceLevelObjectives
Create a ServiceLevelObjective for the given Service .
delete
DELETE /v3/{name}
Delete the given ServiceLevelObjective .
get
GET /v3/{name}
Get a ServiceLevelObjective by name.
list
GET /v3/{parent}/serviceLevelObjectives
List the ServiceLevelObjective s for the given Service .
patch
PATCH /v3/{serviceLevelObjective.name}
Update the given ServiceLevelObjective .
REST Resource: v3.uptimeCheckIps
Methods
list
GET /v3/uptimeCheckIps
Returns the list of IP addresses that checkers run from.
REST Resource: v1.locations.global.metricsScopes
Methods
get
GET /v1/{name}
Returns a specific Metrics Scope , including the list of projects monitored by the specified Metrics Scope .
listMetricsScopesByMonitoredProject
GET /v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject
Returns a list of every Metrics Scope that a specific MonitoredProject has been added to.
REST Resource: v1.locations.global.metricsScopes.projects
Methods
create
POST /v1/{parent}/projects
Adds a MonitoredProject with the given project ID to the specified Metrics Scope .
delete
DELETE /v1/{name}
Deletes a MonitoredProject from the specified Metrics Scope .
REST Resource: v1.operations
Methods
get
GET /v1/{name}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.dashboards
Methods
create
POST /v1/{parent}/dashboards
Creates a new custom dashboard.
delete
DELETE /v1/{name}
Deletes an existing custom dashboard.
get
GET /v1/{name}
Fetches a specific dashboard.
list
GET /v1/{parent}/dashboards
Lists the existing dashboards.
patch
PATCH /v1/{dashboard.name}
Replaces an existing custom dashboard with a new definition.
REST Resource: v1.projects.location.prometheus.api.v1
Methods
labels
GET /v1/{name}/location/{location}/prometheus/api/v1/labels
Lists labels for metrics.
query
GET /v1/{name}/location/{location}/prometheus/api/v1/query
Evaluate a PromQL query at a single point in time.
query_exemplars
GET /v1/{name}/location/{location}/prometheus/api/v1/query_exemplars
Lists exemplars relevant to a given PromQL query,
query_range
GET /v1/{name}/location/{location}/prometheus/api/v1/query_range
Evaluate a PromQL query with [start, end] time range.
series
GET /v1/{name}/location/{location}/prometheus/api/v1/series
Lists metadata for metrics.
REST Resource: v1.projects.location.prometheus.api.v1.label
Methods
values
GET /v1/{name}/location/{location}/prometheus/api/v1/label/{label}/values
Lists possible values for a given label name.
REST Resource: v1.projects.location.prometheus.api.v1.metadata
Methods
list
GET /v1/{name}/location/{location}/prometheus/api/v1/metadata
Lists metadata for metrics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
