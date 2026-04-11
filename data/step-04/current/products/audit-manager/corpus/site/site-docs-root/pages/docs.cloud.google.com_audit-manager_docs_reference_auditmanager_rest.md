---
title: "Audit Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/audit-manager/docs/reference/auditmanager/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/audit-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/audit-manager/docs/reference/auditmanager/rest
  title: "Audit Manager API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Audit Manager
Reference
Send feedback
Audit Manager API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.folders.locations
REST Resource: v1.folders.locations.auditReports
REST Resource: v1.folders.locations.auditScopeReports
REST Resource: v1.folders.locations.operationDetails
REST Resource: v1.folders.locations.operationIds
REST Resource: v1.folders.locations.resourceEnrollmentStatuses
REST Resource: v1.folders.locations.standards.controls
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.auditReports
REST Resource: v1.organizations.locations.operations
REST Resource: v1.organizations.locations.resourceEnrollmentStatuses
REST Resource: v1.organizations.locations.standards.controls
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.auditReports
REST Resource: v1.projects.locations.auditScopeReports
REST Resource: v1.projects.locations.operationDetails
REST Resource: v1.projects.locations.operationIds
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.resourceEnrollmentStatuses
REST Resource: v1.projects.locations.standards.controls
Service: auditmanager.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://auditmanager.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://auditmanager.googleapis.com
REST Resource: v1.folders.locations
Methods
enrollResource
POST /v1/{scope=folders/*/locations/*}:enrollResource
Enrolls the customer resource(folder/project/organization) to the audit manager service by creating the audit managers Service Agent in customers workload and granting required permissions to the Service Agent.
REST Resource: v1.folders.locations.auditReports
Methods
generate
POST /v1/{scope=folders/*/locations/*}/auditReports:generate
Register the Audit Report generation requests and returns the OperationId using which the customer can track the report generation progress.
get
GET /v1/{name=folders/*/locations/*/auditReports/*}
Get the overall audit report
list
GET /v1/{parent=folders/*/locations/*}/auditReports
Lists audit reports in the selected parent scope
REST Resource: v1.folders.locations.auditScopeReports
Methods
generate
POST /v1/{scope=folders/*/locations/*}/auditScopeReports:generate
Generates a demo report highlighting different responsibilities (Google/Customer/ shared) required to be fulfilled for the customer's workload to be compliant with the given standard.
REST Resource: v1.folders.locations.operationDetails
Methods
get
GET /v1/{name=folders/*/locations/*/operationDetails/*}
Get details about generate audit report operation.
REST Resource: v1.folders.locations.operationIds
Methods
get
GET /v1/{name=folders/*/locations/*/operationIds/*}
Get details about generate audit report operation.
REST Resource: v1.folders.locations.resourceEnrollmentStatuses
Methods
get
GET /v1/{name=folders/*/locations/*/resourceEnrollmentStatuses/*}
Get a resource along with its enrollment status.
list
GET /v1/{parent=folders/*/locations/*}/resourceEnrollmentStatuses
Fetches all resources under the parent along with their enrollment.
REST Resource: v1.folders.locations.standards.controls
Methods
list
GET /v1/{parent=folders/*/locations/*/standards/*}/controls
Gets controls needed to be implemented to be compliant to a standard.
REST Resource: v1.organizations.locations
Methods
enrollResource
POST /v1/{scope=organizations/*/locations/*}:enrollResource
Enrolls the customer resource(folder/project/organization) to the audit manager service by creating the audit managers Service Agent in customers workload and granting required permissions to the Service Agent.
REST Resource: v1.organizations.locations.auditReports
Methods
list
GET /v1/{parent=organizations/*/locations/*}/auditReports
Lists audit reports in the selected parent scope
REST Resource: v1.organizations.locations.operations
Methods
cancel
POST /v1/{name=organizations/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=organizations/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=organizations/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.locations.resourceEnrollmentStatuses
Methods
get
GET /v1/{name=organizations/*/locations/*/resourceEnrollmentStatuses/*}
Get a resource along with its enrollment status.
list
GET /v1/{parent=organizations/*/locations/*}/resourceEnrollmentStatuses
Fetches all resources under the parent along with their enrollment.
REST Resource: v1.organizations.locations.standards.controls
Methods
list
GET /v1/{parent=organizations/*/locations/*/standards/*}/controls
Gets controls needed to be implemented to be compliant to a standard.
REST Resource: v1.projects.locations
Methods
enrollResource
POST /v1/{scope=projects/*/locations/*}:enrollResource
Enrolls the customer resource(folder/project/organization) to the audit manager service by creating the audit managers Service Agent in customers workload and granting required permissions to the Service Agent.
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.auditReports
Methods
generate
POST /v1/{scope=projects/*/locations/*}/auditReports:generate
Register the Audit Report generation requests and returns the OperationId using which the customer can track the report generation progress.
get
GET /v1/{name=projects/*/locations/*/auditReports/*}
Get the overall audit report
list
GET /v1/{parent=projects/*/locations/*}/auditReports
Lists audit reports in the selected parent scope
REST Resource: v1.projects.locations.auditScopeReports
Methods
generate
POST /v1/{scope=projects/*/locations/*}/auditScopeReports:generate
Generates a demo report highlighting different responsibilities (Google/Customer/ shared) required to be fulfilled for the customer's workload to be compliant with the given standard.
REST Resource: v1.projects.locations.operationDetails
Methods
get
GET /v1/{name=projects/*/locations/*/operationDetails/*}
Get details about generate audit report operation.
REST Resource: v1.projects.locations.operationIds
Methods
get
GET /v1/{name=projects/*/locations/*/operationIds/*}
Get details about generate audit report operation.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.resourceEnrollmentStatuses
Methods
get
GET /v1/{name=projects/*/locations/*/resourceEnrollmentStatuses/*}
Get a resource along with its enrollment status.
REST Resource: v1.projects.locations.standards.controls
Methods
list
GET /v1/{parent=projects/*/locations/*/standards/*}/controls
Gets controls needed to be implemented to be compliant to a standard.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],[]]
