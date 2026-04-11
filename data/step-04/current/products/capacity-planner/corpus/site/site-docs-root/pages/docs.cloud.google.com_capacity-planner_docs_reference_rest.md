---
title: "Capacity Planner API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
  title: "Capacity Planner API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
Capacity Planner API
Stay organized with collections
Save and categorize content based on your preferences.
Provides programmatic access to Capacity Planner features.
REST Resource: v1beta.folders.locations.forecasts
REST Resource: v1beta.folders.locations.reservations
REST Resource: v1beta.folders.locations.reservationsUsage
REST Resource: v1beta.folders.locations.usageHistories
REST Resource: v1beta.organizations.locations.forecasts
REST Resource: v1beta.organizations.locations.reservations
REST Resource: v1beta.organizations.locations.reservationsUsage
REST Resource: v1beta.organizations.locations.usageHistories
REST Resource: v1beta.projects.locations.forecasts
REST Resource: v1beta.projects.locations.reservations
REST Resource: v1beta.projects.locations.reservationsUsage
REST Resource: v1beta.projects.locations.usageHistories
Service: capacityplanner.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://capacityplanner.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://capacityplanner.googleapis.com
REST Resource: v1beta.folders.locations.forecasts
Methods
export
POST /v1beta/{parent=folders/*/locations/*}/forecasts:export
Exports forecasted usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table.
query
POST /v1beta/{parent=folders/*/locations/*}/forecasts:query
Returns a list of the forecasts that are in the parent parameter and match your specified filters.
REST Resource: v1beta.folders.locations.reservations
Methods
query
GET /v1beta/{parent=folders/*/locations/*}/reservations:query
Returns a list of the reservations that are in the parent parameter and match your specified filters.
REST Resource: v1beta.folders.locations.reservationsUsage
Methods
export
POST /v1beta/{parent=folders/*/locations/*}/reservationsUsage:export
Exports reservations usage data requested by user into either an existing Cloud Storage bucket or a new/existing BigQuery table.
REST Resource: v1beta.folders.locations.usageHistories
Methods
export
POST /v1beta/{parent=folders/*/locations/*}/usageHistories:export
Exports historical usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table.
query
POST /v1beta/{parent=folders/*/locations/*}/usageHistories:query
Returns a list of the usage histories that are in the parent parameter and match your specified filters.
REST Resource: v1beta.organizations.locations.forecasts
Methods
export
POST /v1beta/{parent=organizations/*/locations/*}/forecasts:export
Exports forecasted usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table.
query
POST /v1beta/{parent=organizations/*/locations/*}/forecasts:query
Returns a list of the forecasts that are in the parent parameter and match your specified filters.
REST Resource: v1beta.organizations.locations.reservations
Methods
query
GET /v1beta/{parent=organizations/*/locations/*}/reservations:query
Returns a list of the reservations that are in the parent parameter and match your specified filters.
REST Resource: v1beta.organizations.locations.reservationsUsage
Methods
export
POST /v1beta/{parent=organizations/*/locations/*}/reservationsUsage:export
Exports reservations usage data requested by user into either an existing Cloud Storage bucket or a new/existing BigQuery table.
REST Resource: v1beta.organizations.locations.usageHistories
Methods
export
POST /v1beta/{parent=organizations/*/locations/*}/usageHistories:export
Exports historical usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table.
query
POST /v1beta/{parent=organizations/*/locations/*}/usageHistories:query
Returns a list of the usage histories that are in the parent parameter and match your specified filters.
REST Resource: v1beta.projects.locations.forecasts
Methods
export
POST /v1beta/{parent=projects/*/locations/*}/forecasts:export
Exports forecasted usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table.
query
POST /v1beta/{parent=projects/*/locations/*}/forecasts:query
Returns a list of the forecasts that are in the parent parameter and match your specified filters.
REST Resource: v1beta.projects.locations.reservations
Methods
query
GET /v1beta/{parent=projects/*/locations/*}/reservations:query
Returns a list of the reservations that are in the parent parameter and match your specified filters.
REST Resource: v1beta.projects.locations.reservationsUsage
Methods
export
POST /v1beta/{parent=projects/*/locations/*}/reservationsUsage:export
Exports reservations usage data requested by user into either an existing Cloud Storage bucket or a new/existing BigQuery table.
REST Resource: v1beta.projects.locations.usageHistories
Methods
export
POST /v1beta/{parent=projects/*/locations/*}/usageHistories:export
Exports historical usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table.
query
POST /v1beta/{parent=projects/*/locations/*}/usageHistories:query
Returns a list of the usage histories that are in the parent parameter and match your specified filters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-19 UTC."],[],[]]
