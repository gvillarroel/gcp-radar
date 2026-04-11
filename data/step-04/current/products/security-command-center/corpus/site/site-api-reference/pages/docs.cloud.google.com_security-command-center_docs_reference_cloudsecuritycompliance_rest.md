---
title: "Cloud Security Compliance API \_|\_ Security Command Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest
  title: "Cloud Security Compliance API \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
Cloud Security Compliance API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.folders.locations
REST Resource: v1.folders.locations.cmEnrollment
REST Resource: v1.folders.locations.findingSummaries
REST Resource: v1.folders.locations.frameworkAuditScopeReports
REST Resource: v1.folders.locations.frameworkAudits
REST Resource: v1.folders.locations.frameworkComplianceReports
REST Resource:
v1.folders.locations.frameworkComplianceReports.controlComplianceSummaries
REST Resource: v1.folders.locations.frameworkComplianceSummaries
REST Resource: v1.folders.locations.operationDetails
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.cloudControlDeployments
REST Resource: v1.organizations.locations.cloudControls
REST Resource: v1.organizations.locations.cmEnrollment
REST Resource: v1.organizations.locations.findingSummaries
REST Resource: v1.organizations.locations.frameworkAuditScopeReports
REST Resource: v1.organizations.locations.frameworkAudits
REST Resource: v1.organizations.locations.frameworkComplianceReports
REST Resource:
v1.organizations.locations.frameworkComplianceReports.controlComplianceSummaries
REST Resource: v1.organizations.locations.frameworkComplianceSummaries
REST Resource: v1.organizations.locations.frameworkDeployments
REST Resource: v1.organizations.locations.frameworks
REST Resource: v1.organizations.locations.operationDetails
REST Resource: v1.organizations.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.cmEnrollment
REST Resource: v1.projects.locations.findingSummaries
REST Resource: v1.projects.locations.frameworkAuditScopeReports
REST Resource: v1.projects.locations.frameworkAudits
REST Resource: v1.projects.locations.frameworkComplianceReports
REST Resource:
v1.projects.locations.frameworkComplianceReports.controlComplianceSummaries
REST Resource: v1.projects.locations.frameworkComplianceSummaries
REST Resource: v1.projects.locations.operationDetails
Service: cloudsecuritycompliance.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudsecuritycompliance.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudsecuritycompliance.googleapis.com
REST Resource: v1.folders.locations
Methods
updateCmEnrollment
PATCH /v1/{cmEnrollment.name=folders/*/locations/*/cmEnrollment}
Updates the Compliance Manager enrollment for a resource to facilitate an audit.
REST Resource: v1.folders.locations.cmEnrollment
Methods
calculate
GET /v1/{name=folders/*/locations/*/cmEnrollment}:calculate
Calculates the effective Compliance Manager enrollment for a resource.
REST Resource: v1.folders.locations.findingSummaries
Methods
list
GET /v1/{parent=folders/*/locations/*}/findingSummaries
Lists the finding summary by category for a given scope.
REST Resource: v1.folders.locations.frameworkAuditScopeReports
Methods
generateFrameworkAuditScopeReport
POST /v1/{scope=folders/*/locations/*}/frameworkAuditScopeReports:generateFrameworkAuditScopeReport
Generates an audit scope report for a framework.
REST Resource: v1.folders.locations.frameworkAudits
Methods
create
POST /v1/{parent=folders/*/locations/*}/frameworkAudits
Creates a framework audit.
get
GET /v1/{name=folders/*/locations/*/frameworkAudits/*}
Gets the details for a framework audit.
list
GET /v1/{parent=folders/*/locations/*}/frameworkAudits
Lists the framework audits for a given organization, folder, or project.
REST Resource: v1.folders.locations.frameworkComplianceReports
Methods
aggregate
GET /v1/{name=folders/*/locations/*/frameworkComplianceReports/*}:aggregate
Gets the aggregated compliance report over time for a given scope.
fetch
GET /v1/{name=folders/*/locations/*/frameworkComplianceReports/*}:fetch
Fetches the framework compliance report for a given scope.
REST Resource: v1.folders.locations.frameworkComplianceReports.controlComplianceSummaries
Methods
list
GET /v1/{parent=folders/*/locations/*/frameworkComplianceReports/*}/controlComplianceSummaries
Lists the control compliance summary for a given scope.
REST Resource: v1.folders.locations.frameworkComplianceSummaries
Methods
list
GET /v1/{parent=folders/*/locations/*}/frameworkComplianceSummaries
Lists the framework compliance summary for a given scope.
REST Resource: v1.folders.locations.operationDetails
Methods
get
GET /v1/{name=folders/*/locations/*/operationDetails/*}
Gets details for the generate audit report operation.
REST Resource: v1.organizations.locations
Methods
get
GET /v1/{name=organizations/*/locations/*}
Gets information about a location.
list
GET /v1/{name=organizations/*}/locations
Lists information about the supported locations for this service.
updateCmEnrollment
PATCH /v1/{cmEnrollment.name=organizations/*/locations/*/cmEnrollment}
Updates the Compliance Manager enrollment for a resource to facilitate an audit.
REST Resource: v1.organizations.locations.cloudControlDeployments
Methods
get
GET /v1/{name=organizations/*/locations/*/cloudControlDeployments/*}
Gets details about a cloud control deployment.
list
GET /v1/{parent=organizations/*/locations/*}/cloudControlDeployments
Lists the cloud conrol deployments in a given parent resource.
REST Resource: v1.organizations.locations.cloudControls
Methods
create
POST /v1/{parent=organizations/*/locations/*}/cloudControls
Creates a custom cloud control in a given parent resource.
delete
DELETE /v1/{name=organizations/*/locations/*/cloudControls/*}
Deletes a custom cloud control, including all its major and minor revisions.
get
GET /v1/{name=organizations/*/locations/*/cloudControls/*}
Gets details about a cloud control.
list
GET /v1/{parent=organizations/*/locations/*}/cloudControls
Lists the cloud controls (both built-in and custom) that are available in a given parent resource.
patch
PATCH /v1/{cloudControl.name=organizations/*/locations/*/cloudControls/*}
Updates a custom cloud control.
REST Resource: v1.organizations.locations.cmEnrollment
Methods
calculate
GET /v1/{name=organizations/*/locations/*/cmEnrollment}:calculate
Calculates the effective Compliance Manager enrollment for a resource.
REST Resource: v1.organizations.locations.findingSummaries
Methods
list
GET /v1/{parent=organizations/*/locations/*}/findingSummaries
Lists the finding summary by category for a given scope.
REST Resource: v1.organizations.locations.frameworkAuditScopeReports
Methods
generateFrameworkAuditScopeReport
POST /v1/{scope=organizations/*/locations/*}/frameworkAuditScopeReports:generateFrameworkAuditScopeReport
Generates an audit scope report for a framework.
REST Resource: v1.organizations.locations.frameworkAudits
Methods
create
POST /v1/{parent=organizations/*/locations/*}/frameworkAudits
Creates a framework audit.
get
GET /v1/{name=organizations/*/locations/*/frameworkAudits/*}
Gets the details for a framework audit.
list
GET /v1/{parent=organizations/*/locations/*}/frameworkAudits
Lists the framework audits for a given organization, folder, or project.
REST Resource: v1.organizations.locations.frameworkComplianceReports
Methods
aggregate
GET /v1/{name=organizations/*/locations/*/frameworkComplianceReports/*}:aggregate
Gets the aggregated compliance report over time for a given scope.
fetch
GET /v1/{name=organizations/*/locations/*/frameworkComplianceReports/*}:fetch
Fetches the framework compliance report for a given scope.
REST Resource: v1.organizations.locations.frameworkComplianceReports.controlComplianceSummaries
Methods
list
GET /v1/{parent=organizations/*/locations/*/frameworkComplianceReports/*}/controlComplianceSummaries
Lists the control compliance summary for a given scope.
REST Resource: v1.organizations.locations.frameworkComplianceSummaries
Methods
list
GET /v1/{parent=organizations/*/locations/*}/frameworkComplianceSummaries
Lists the framework compliance summary for a given scope.
REST Resource: v1.organizations.locations.frameworkDeployments
Methods
create
POST /v1/{parent=organizations/*/locations/*}/frameworkDeployments
Creates a framework deployment in a given parent resource.
delete
DELETE /v1/{name=organizations/*/locations/*/frameworkDeployments/*}
Deletes a framework deployment.
get
GET /v1/{name=organizations/*/locations/*/frameworkDeployments/*}
Gets details about a framework deployment.
list
GET /v1/{parent=organizations/*/locations/*}/frameworkDeployments
Lists the framework deployments in a given parent resource.
REST Resource: v1.organizations.locations.frameworks
Methods
create
POST /v1/{parent=organizations/*/locations/*}/frameworks
Creates a custom framework in a given parent resource.
delete
DELETE /v1/{name=organizations/*/locations/*/frameworks/*}
Deletes a custom framework, including all its major and minor revisions.
get
GET /v1/{name=organizations/*/locations/*/frameworks/*}
Gets details about a framework.
list
GET /v1/{parent=organizations/*/locations/*}/frameworks
Lists the frameworks (both built-in and custom) that are available within the parent resource.
patch
PATCH /v1/{framework.name=organizations/*/locations/*/frameworks/*}
Updates a custom framework.
REST Resource: v1.organizations.locations.operationDetails
Methods
get
GET /v1/{name=organizations/*/locations/*/operationDetails/*}
Gets details for the generate audit report operation.
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
REST Resource: v1.projects.locations
Methods
updateCmEnrollment
PATCH /v1/{cmEnrollment.name=projects/*/locations/*/cmEnrollment}
Updates the Compliance Manager enrollment for a resource to facilitate an audit.
REST Resource: v1.projects.locations.cmEnrollment
Methods
calculate
GET /v1/{name=projects/*/locations/*/cmEnrollment}:calculate
Calculates the effective Compliance Manager enrollment for a resource.
REST Resource: v1.projects.locations.findingSummaries
Methods
list
GET /v1/{parent=projects/*/locations/*}/findingSummaries
Lists the finding summary by category for a given scope.
REST Resource: v1.projects.locations.frameworkAuditScopeReports
Methods
generateFrameworkAuditScopeReport
POST /v1/{scope=projects/*/locations/*}/frameworkAuditScopeReports:generateFrameworkAuditScopeReport
Generates an audit scope report for a framework.
REST Resource: v1.projects.locations.frameworkAudits
Methods
create
POST /v1/{parent=projects/*/locations/*}/frameworkAudits
Creates a framework audit.
get
GET /v1/{name=projects/*/locations/*/frameworkAudits/*}
Gets the details for a framework audit.
list
GET /v1/{parent=projects/*/locations/*}/frameworkAudits
Lists the framework audits for a given organization, folder, or project.
REST Resource: v1.projects.locations.frameworkComplianceReports
Methods
aggregate
GET /v1/{name=projects/*/locations/*/frameworkComplianceReports/*}:aggregate
Gets the aggregated compliance report over time for a given scope.
fetch
GET /v1/{name=projects/*/locations/*/frameworkComplianceReports/*}:fetch
Fetches the framework compliance report for a given scope.
REST Resource: v1.projects.locations.frameworkComplianceReports.controlComplianceSummaries
Methods
list
GET /v1/{parent=projects/*/locations/*/frameworkComplianceReports/*}/controlComplianceSummaries
Lists the control compliance summary for a given scope.
REST Resource: v1.projects.locations.frameworkComplianceSummaries
Methods
list
GET /v1/{parent=projects/*/locations/*}/frameworkComplianceSummaries
Lists the framework compliance summary for a given scope.
REST Resource: v1.projects.locations.operationDetails
Methods
get
GET /v1/{name=projects/*/locations/*/operationDetails/*}
Gets details for the generate audit report operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
