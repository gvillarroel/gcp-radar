---
title: "Advisory Notifications API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
  title: "Advisory Notifications API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Advisory Notifications
Reference
Send feedback
Advisory Notifications API
Stay organized with collections
Save and categorize content based on your preferences.
An API for accessing Advisory Notifications in Google Cloud
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.notifications
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.notifications
Service: advisorynotifications.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://advisorynotifications.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://advisorynotifications.googleapis.com
REST Resource: v1.organizations.locations
Methods
getSettings
GET /v1/{name=organizations/*/locations/*/settings}
Get notification settings.
updateSettings
PATCH /v1/{settings.name=organizations/*/locations/*/settings}
Update notification settings.
REST Resource: v1.organizations.locations.notifications
Methods
get
GET /v1/{name=organizations/*/locations/*/notifications/*}
Gets a notification.
list
GET /v1/{parent=organizations/*/locations/*}/notifications
Lists notifications under a given parent.
REST Resource: v1.projects.locations
Methods
getSettings
GET /v1/{name=projects/*/locations/*/settings}
Get notification settings.
updateSettings
PATCH /v1/{settings.name=projects/*/locations/*/settings}
Update notification settings.
REST Resource: v1.projects.locations.notifications
Methods
get
GET /v1/{name=projects/*/locations/*/notifications/*}
Gets a notification.
list
GET /v1/{parent=projects/*/locations/*}/notifications
Lists notifications under a given parent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
