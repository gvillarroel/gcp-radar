---
title: "Overview \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference
  title: "Overview \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Error Reporting
Reference
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
The Error Reporting API provides:
A simple endpoint to report errors from your running service.
Read access to error groups and their associated errors.
Getting started
Enable the Error Reporting API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Authorizing use of the API
Access to the Error Reporting API is controlled by Identity and Access Management roles and permissions. You can find out more about authentication and authorization for Google Cloud APIs in the Authentication guide .
Note: API keys are associated with a project for API quota and billing purposes, but they shouldn't be used as an authentication mechanism Instead, use service accounts whenever possible.
Data model
The Error Reporting API defines three entities: error events, error groups, and error group stats. The error group stats object is the object that most users will interact with most frequently.
Error events
An ErrorEvent represents a single occurrence of an error in your application. The object contains information about the error, such as the time at which it occurred, the context in which it occurred, and the error message that was returned. An error event is guaranteed to be available for at least 30 days after being generated.
Error groups
ErrorGroup objects are logically-grouped collections of error events. Grouping is based on information in the error event's stack trace. An error group is a simple object containing only the name, group ID, and any associated tracking issues for the group.
To update tracking issues URLs, use this resource's update method.
Error group stats
ErrorGroupStats objects contain detailed information about an error group, and are the API objects that you will interact with most frequently. Information in the groupStats object includes the first and last time an error event in this group occurred, the count, the number of affected users, and more. This object is useful when building widgets and custom dashboards.
Operations
The Error Reporting API supports the following operations:
Report a new error event
List error group stats
List error events
Get error groups
Update an error group's tracking issues
Report error events
You can report error events from your running services by writing them to ReportedErrorEvent . Doing this generates properly formatted error messages in Cloud Logging. The resulting log name is formatted as projects/<PROJECT_ID>/clouderrorreporting.googleapis.com%2Freported_errors . You might incur minor Cloud Logging ingestion costs using this method; to control these costs, review Logs exclusions .
You can also report new error events to Error Reporting by assembling error event entities from your running service and sending them to the events.report method.
List error group stats
To get a list of error group stats, send a request to the groupStats.list method. You can pass one or more query parameters to filter the group stats that are returned.
List error events
To get a list of error events belonging to a specific error group, send a request to the events.list method. You can pass a filter condition to these requests to retrieve only those error events that occurred between a specific start and end time, or those that match specific service contexts .
Get error groups
To retrieve a specific error group resource, send a request to the groups.get method.
Update error groups
To update the tracking issue URLs associated with an error group, send an updated ErrorGroup resource to the groups.update method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
