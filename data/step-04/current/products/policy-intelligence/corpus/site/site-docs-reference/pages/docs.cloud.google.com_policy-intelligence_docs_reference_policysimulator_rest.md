---
title: "Policy Simulator API \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/reference/policyanalyzer/rest
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest
  title: "Policy Simulator API \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Reference
Send feedback
Policy Simulator API
Stay organized with collections
Save and categorize content based on your preferences.
Policy Simulator is a collection of endpoints for creating, running, and viewing a Replay . A Replay is a type of simulation that lets you see how your members' access to resources might change if you changed your IAM policy.
During a Replay , Policy Simulator re-evaluates, or replays, past access attempts under both the current policy and your proposed policy, and compares those results to determine how your members' access might change under the proposed policy.
REST Resource:
v1beta.folders.locations.orgPolicyViolationsPreviews.operations
REST Resource: v1beta.folders.locations.replays
REST Resource: v1beta.folders.locations.replays.operations
REST Resource: v1beta.folders.locations.replays.results
REST Resource: v1beta.operations
REST Resource: v1beta.organizations.locations.orgPolicyViolationsPreviews
REST Resource:
v1beta.organizations.locations.orgPolicyViolationsPreviews.operations
REST Resource:
v1beta.organizations.locations.orgPolicyViolationsPreviews.orgPolicyViolations
REST Resource: v1beta.organizations.locations.replays
REST Resource: v1beta.organizations.locations.replays.operations
REST Resource: v1beta.organizations.locations.replays.results
REST Resource:
v1beta.projects.locations.orgPolicyViolationsPreviews.operations
REST Resource: v1beta.projects.locations.replays
REST Resource: v1beta.projects.locations.replays.operations
REST Resource: v1beta.projects.locations.replays.results
REST Resource: v1.folders.locations.orgPolicyViolationsPreviews.operations
REST Resource: v1.folders.locations.replays
REST Resource: v1.folders.locations.replays.operations
REST Resource: v1.folders.locations.replays.results
REST Resource: v1.operations
REST Resource: v1.organizations.locations.orgPolicyViolationsPreviews
REST Resource:
v1.organizations.locations.orgPolicyViolationsPreviews.operations
REST Resource:
v1.organizations.locations.orgPolicyViolationsPreviews.orgPolicyViolations
REST Resource: v1.organizations.locations.replays
REST Resource: v1.organizations.locations.replays.operations
REST Resource: v1.organizations.locations.replays.results
REST Resource: v1.projects.locations.orgPolicyViolationsPreviews.operations
REST Resource: v1.projects.locations.replays
REST Resource: v1.projects.locations.replays.operations
REST Resource: v1.projects.locations.replays.results
Service: policysimulator.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://policysimulator.googleapis.com/$discovery/rest?version=v1
https://policysimulator.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://policysimulator.googleapis.com
REST Resource: v1beta.folders.locations.orgPolicyViolationsPreviews.operations
Methods
get
GET /v1beta/{name=folders/*/locations/*/orgPolicyViolationsPreviews/*/operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1beta.folders.locations.replays
Methods
create
POST /v1beta/{parent=folders/*/locations/*}/replays
Creates and starts a Replay using the given ReplayConfig .
get
GET /v1beta/{name=folders/*/locations/*/replays/*}
Gets the specified Replay .
list
GET /v1beta/{parent=folders/*/locations/*}/replays
Lists each Replay in a project, folder, or organization.
REST Resource: v1beta.folders.locations.replays.operations
Methods
get
GET /v1beta/{name=folders/*/locations/*/replays/*/operations/**}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=folders/*/locations/*/replays/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1beta.folders.locations.replays.results
Methods
list
GET /v1beta/{parent=folders/*/locations/*/replays/*}/results
Lists the results of running a Replay .
REST Resource: v1beta.operations
Methods
get
GET /v1beta/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1beta.organizations.locations.orgPolicyViolationsPreviews
Methods
create
POST /v1beta/{parent=organizations/*/locations/*}/orgPolicyViolationsPreviews
CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided [OrgPolicyViolationsPreview.OrgPolicyOverlay][].
generate
POST /v1beta/{parent=organizations/*/locations/*}/orgPolicyViolationsPreviews:generate
GenerateOrgPolicyViolationsPreview generates an OrgPolicyViolationsPreview for the proposed changes in the provided [OrgPolicyViolationsPreview.OrgPolicyOverlay][].
get
GET /v1beta/{name=organizations/*/locations/*/orgPolicyViolationsPreviews/*}
GetOrgPolicyViolationsPreview gets the specified OrgPolicyViolationsPreview .
list
GET /v1beta/{parent=organizations/*/locations/*}/orgPolicyViolationsPreviews
ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization.
REST Resource: v1beta.organizations.locations.orgPolicyViolationsPreviews.operations
Methods
get
GET /v1beta/{name=organizations/*/locations/*/orgPolicyViolationsPreviews/*/operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1beta.organizations.locations.orgPolicyViolationsPreviews.orgPolicyViolations
Methods
list
GET /v1beta/{parent=organizations/*/locations/*/orgPolicyViolationsPreviews/*}/orgPolicyViolations
ListOrgPolicyViolations lists the [OrgPolicyViolations][] that are present in an OrgPolicyViolationsPreview .
REST Resource: v1beta.organizations.locations.replays
Methods
create
POST /v1beta/{parent=organizations/*/locations/*}/replays
Creates and starts a Replay using the given ReplayConfig .
get
GET /v1beta/{name=organizations/*/locations/*/replays/*}
Gets the specified Replay .
list
GET /v1beta/{parent=organizations/*/locations/*}/replays
Lists each Replay in a project, folder, or organization.
REST Resource: v1beta.organizations.locations.replays.operations
Methods
get
GET /v1beta/{name=organizations/*/locations/*/replays/*/operations/**}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=organizations/*/locations/*/replays/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1beta.organizations.locations.replays.results
Methods
list
GET /v1beta/{parent=organizations/*/locations/*/replays/*}/results
Lists the results of running a Replay .
REST Resource: v1beta.projects.locations.orgPolicyViolationsPreviews.operations
Methods
get
GET /v1beta/{name=projects/*/locations/*/orgPolicyViolationsPreviews/*/operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1beta.projects.locations.replays
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/replays
Creates and starts a Replay using the given ReplayConfig .
get
GET /v1beta/{name=projects/*/locations/*/replays/*}
Gets the specified Replay .
list
GET /v1beta/{parent=projects/*/locations/*}/replays
Lists each Replay in a project, folder, or organization.
REST Resource: v1beta.projects.locations.replays.operations
Methods
get
GET /v1beta/{name=projects/*/locations/*/replays/*/operations/**}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=projects/*/locations/*/replays/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1beta.projects.locations.replays.results
Methods
list
GET /v1beta/{parent=projects/*/locations/*/replays/*}/results
Lists the results of running a Replay .
REST Resource: v1.folders.locations.orgPolicyViolationsPreviews.operations
Methods
get
GET /v1/{name=folders/*/locations/*/orgPolicyViolationsPreviews/*/operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1.folders.locations.replays
Methods
create
POST /v1/{parent=folders/*/locations/*}/replays
Creates and starts a Replay using the given ReplayConfig .
get
GET /v1/{name=folders/*/locations/*/replays/*}
Gets the specified Replay .
REST Resource: v1.folders.locations.replays.operations
Methods
get
GET /v1/{name=folders/*/locations/*/replays/*/operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=folders/*/locations/*/replays/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.folders.locations.replays.results
Methods
list
GET /v1/{parent=folders/*/locations/*/replays/*}/results
Lists the results of running a Replay .
REST Resource: v1.operations
Methods
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.locations.orgPolicyViolationsPreviews
Methods
create
POST /v1/{parent=organizations/*/locations/*}/orgPolicyViolationsPreviews
CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided [OrgPolicyViolationsPreview.OrgPolicyOverlay][].
get
GET /v1/{name=organizations/*/locations/*/orgPolicyViolationsPreviews/*}
GetOrgPolicyViolationsPreview gets the specified OrgPolicyViolationsPreview .
list
GET /v1/{parent=organizations/*/locations/*}/orgPolicyViolationsPreviews
ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization.
REST Resource: v1.organizations.locations.orgPolicyViolationsPreviews.operations
Methods
get
GET /v1/{name=organizations/*/locations/*/orgPolicyViolationsPreviews/*/operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1.organizations.locations.orgPolicyViolationsPreviews.orgPolicyViolations
Methods
list
GET /v1/{parent=organizations/*/locations/*/orgPolicyViolationsPreviews/*}/orgPolicyViolations
ListOrgPolicyViolations lists the [OrgPolicyViolations][] that are present in an OrgPolicyViolationsPreview .
REST Resource: v1.organizations.locations.replays
Methods
create
POST /v1/{parent=organizations/*/locations/*}/replays
Creates and starts a Replay using the given ReplayConfig .
get
GET /v1/{name=organizations/*/locations/*/replays/*}
Gets the specified Replay .
REST Resource: v1.organizations.locations.replays.operations
Methods
get
GET /v1/{name=organizations/*/locations/*/replays/*/operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=organizations/*/locations/*/replays/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.locations.replays.results
Methods
list
GET /v1/{parent=organizations/*/locations/*/replays/*}/results
Lists the results of running a Replay .
REST Resource: v1.projects.locations.orgPolicyViolationsPreviews.operations
Methods
get
GET /v1/{name=projects/*/locations/*/orgPolicyViolationsPreviews/*/operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.replays
Methods
create
POST /v1/{parent=projects/*/locations/*}/replays
Creates and starts a Replay using the given ReplayConfig .
get
GET /v1/{name=projects/*/locations/*/replays/*}
Gets the specified Replay .
REST Resource: v1.projects.locations.replays.operations
Methods
get
GET /v1/{name=projects/*/locations/*/replays/*/operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*/replays/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.replays.results
Methods
list
GET /v1/{parent=projects/*/locations/*/replays/*}/results
Lists the results of running a Replay .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-16 UTC."],[],[]]
