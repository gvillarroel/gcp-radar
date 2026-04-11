---
title: "Cloud Logging API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rpc
  title: "Cloud Logging API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Cloud Logging API
Stay organized with collections
Save and categorize content based on your preferences.
Writes log entries and manages your Cloud Logging configuration.
Service: logging.googleapis.com
The Service name logging.googleapis.com is needed to create RPC client stubs.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.logging.v2.ConfigServiceV2
Methods
CopyLogEntries
Copies a set of log entries from a log bucket to a Cloud Storage bucket.
CreateBucket
Creates a log bucket that can be used to store log entries.
CreateBucketAsync
Creates a log bucket asynchronously that can be used to store log entries.
CreateExclusion
Creates a new exclusion in the _Default sink in a specified parent resource.
CreateLink
Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket.
CreateLogScope
Creates a log scope.
CreateSavedQuery
Creates a new SavedQuery for the user making the request.
CreateSink
Creates a sink that exports specified log entries to a destination.
CreateView
Creates a view over log entries in a log bucket.
DeleteBucket
Deletes a log bucket.
DeleteExclusion
Deletes an exclusion in the _Default sink.
DeleteLink
Deletes a link.
DeleteLogScope
Deletes a log scope.
DeleteSavedQuery
Deletes an existing SavedQuery that was created by the user making the request.
DeleteSink
Deletes a sink.
DeleteView
Deletes a view on a log bucket.
GetBucket
Gets a log bucket.
GetCmekSettings
Gets the Logging CMEK settings for the given resource.
GetExclusion
Gets the description of an exclusion in the _Default sink.
GetLink
Gets a link.
GetLogScope
Gets a log scope.
GetSavedQuery
Returns all data associated with the requested query.
GetSettings
Gets the settings for the given resource.
GetSink
Gets a sink.
GetView
Gets a view on a log bucket.
ListBuckets
Lists log buckets.
ListExclusions
Lists all the exclusions on the _Default sink in a parent resource.
ListLinks
Lists links.
ListLogScopes
Lists log scopes.
ListRecentQueries
Lists the RecentQueries that were created by the user making the request.
ListSavedQueries
Lists the SavedQueries that were created by the user making the request.
ListSinks
Lists sinks.
ListViews
Lists views on a log bucket.
UndeleteBucket
Undeletes a log bucket.
UpdateBucket
Updates a log bucket.
UpdateBucketAsync
Updates a log bucket asynchronously.
UpdateCmekSettings
Updates the Log Router CMEK settings for the given resource.
UpdateExclusion
Changes one or more properties of an existing exclusion in the _Default sink.
UpdateLogScope
Updates a log scope.
UpdateSavedQuery
Updates an existing SavedQuery.
UpdateSettings
Updates the settings for the given resource.
UpdateSink
Updates a sink.
UpdateView
Updates a view on a log bucket.
google.logging.v2.LoggingServiceV2
Methods
DeleteLog
Deletes all the log entries in a log for the global _Default Log Bucket.
ListLogEntries
Lists log entries.
ListLogs
Lists the logs in projects, organizations, folders, or billing accounts.
ListMonitoredResourceDescriptors
Lists the descriptors for monitored resource types used by Logging.
TailLogEntries
Streaming read of log entries as they are received.
WriteLogEntries
Writes log entries to Logging.
google.logging.v2.MetricsServiceV2
Methods
CreateLogMetric
Creates a logs-based metric.
DeleteLogMetric
Deletes a logs-based metric.
GetLogMetric
Gets a logs-based metric.
ListLogMetrics
Lists logs-based metrics.
UpdateLogMetric
Creates or updates a logs-based metric.
google.logging.v2.RoutingConfigService
Methods
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
