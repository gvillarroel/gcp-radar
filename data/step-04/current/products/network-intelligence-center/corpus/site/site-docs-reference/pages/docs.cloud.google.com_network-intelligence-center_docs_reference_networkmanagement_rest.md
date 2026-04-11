---
title: "Network Management API \_|\_ Network Intelligence Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest
  title: "Network Management API \_|\_ Network Intelligence Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Reference
Send feedback
Network Management API
Stay organized with collections
Save and categorize content based on your preferences.
The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.
REST Resource: v1beta1.organizations.locations
REST Resource: v1beta1.organizations.locations.global.operations
REST Resource: v1beta1.organizations.locations.vpcFlowLogsConfigs
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.global.connectivityTests
REST Resource: v1beta1.projects.locations.global.operations
REST Resource: v1beta1.projects.locations.vpcFlowLogsConfigs
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.monitoringPoints
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.networkPaths
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.webPaths
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.global.operations
REST Resource: v1.organizations.locations.vpcFlowLogsConfigs
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.global.connectivityTests
REST Resource: v1.projects.locations.global.operations
REST Resource: v1.projects.locations.vpcFlowLogsConfigs
Service: networkmanagement.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://networkmanagement.googleapis.com/$discovery/rest?version=v1
https://networkmanagement.googleapis.com/$discovery/rest?version=v1beta1
https://networkmanagement.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://networkmanagement.googleapis.com
REST Resource: v1beta1.organizations.locations
Methods
get
GET /v1beta1/{name=organizations/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=organizations/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.organizations.locations.global.operations
Methods
cancel
POST /v1beta1/{name=organizations/*/locations/global/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=organizations/*/locations/global/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=organizations/*/locations/global/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=organizations/*/locations/global}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.organizations.locations.vpcFlowLogsConfigs
Methods
create
POST /v1beta1/{parent=organizations/*/locations/*}/vpcFlowLogsConfigs
Creates a new VpcFlowLogsConfig .
delete
DELETE /v1beta1/{name=organizations/*/locations/*/vpcFlowLogsConfigs/*}
Deletes a specific VpcFlowLogsConfig .
get
GET /v1beta1/{name=organizations/*/locations/*/vpcFlowLogsConfigs/*}
Gets the details of a specific VpcFlowLogsConfig .
list
GET /v1beta1/{parent=organizations/*/locations/*}/vpcFlowLogsConfigs
Lists all VpcFlowLogsConfigs in a given organization.
patch
PATCH /v1beta1/{vpcFlowLogsConfig.name=organizations/*/locations/*/vpcFlowLogsConfigs/*}
Updates an existing VpcFlowLogsConfig .
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.global.connectivityTests
Methods
create
POST /v1beta1/{parent=projects/*/locations/global}/connectivityTests
Creates a new Connectivity Test.
delete
DELETE /v1beta1/{name=projects/*/locations/global/connectivityTests/*}
Deletes a specific ConnectivityTest .
get
GET /v1beta1/{name=projects/*/locations/global/connectivityTests/*}
Gets the details of a specific Connectivity Test.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/global/connectivityTests/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/global}/connectivityTests
Lists all Connectivity Tests owned by a project.
patch
PATCH /v1beta1/{resource.name=projects/*/locations/global/connectivityTests/*}
Updates the configuration of an existing ConnectivityTest .
rerun
POST /v1beta1/{name=projects/*/locations/global/connectivityTests/*}:rerun
Rerun an existing ConnectivityTest .
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/global/connectivityTests/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/global/connectivityTests/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.global.operations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/global/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=projects/*/locations/global/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/global/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/global}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.vpcFlowLogsConfigs
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs
Creates a new VpcFlowLogsConfig .
delete
DELETE /v1beta1/{name=projects/*/locations/*/vpcFlowLogsConfigs/*}
Deletes a specific VpcFlowLogsConfig .
get
GET /v1beta1/{name=projects/*/locations/*/vpcFlowLogsConfigs/*}
Gets the details of a specific VpcFlowLogsConfig .
list
GET /v1beta1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs
Lists all VpcFlowLogsConfigs in a given project.
patch
PATCH /v1beta1/{vpcFlowLogsConfig.name=projects/*/locations/*/vpcFlowLogsConfigs/*}
Updates an existing VpcFlowLogsConfig .
queryOrgVpcFlowLogsConfigs
GET /v1beta1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs:queryOrgVpcFlowLogsConfigs
QueryOrgVpcFlowLogsConfigs returns a list of all organization-level VPC Flow Logs configurations applicable to the specified project.
showEffectiveFlowLogsConfigs
GET /v1beta1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs:showEffectiveFlowLogsConfigs
ShowEffectiveFlowLogsConfigs returns a list of all VPC Flow Logs configurations applicable to a specified resource.
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/networkMonitoringProviders
Creates a NetworkMonitoringProvider resource.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*}
Deletes a NetworkMonitoringProvider resource and all of its child resources.
generateProviderAccessToken
GET /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*}:generateProviderAccessToken
Generates a provider access token for a given Google access token.
get
GET /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*}
Gets the NetworkMonitoringProvider resource.
list
GET /v1alpha1/{parent=projects/*/locations/*}/networkMonitoringProviders
Lists NetworkMonitoringProviders for a given project and location.
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.monitoringPoints
Methods
downloadInstallScript
GET /v1alpha1/{parent=projects/*/locations/*/networkMonitoringProviders/*}/monitoringPoints:downloadInstallScript
Downloads an install script for MonitoringPoints for a given network monitoring provider.
downloadRecreateInstallScript
GET /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*/monitoringPoints/*}:downloadRecreateInstallScript
Downloads an install script for a specific Container MonitoringPoint.
downloadServerConnectConfig
GET /v1alpha1/{parent=projects/*/locations/*/networkMonitoringProviders/*}/monitoringPoints:downloadServerConnectConfig
Downloads the server connect configuration for a given network monitoring provider.
get
GET /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*/monitoringPoints/*}
Gets the MonitoringPoint resource.
list
GET /v1alpha1/{parent=projects/*/locations/*/networkMonitoringProviders/*}/monitoringPoints
Lists MonitoringPoints for a given network monitoring provider.
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.networkPaths
Methods
get
GET /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*/networkPaths/*}
Gets the NetworkPath resource.
list
GET /v1alpha1/{parent=projects/*/locations/*/networkMonitoringProviders/*}/networkPaths
Lists NetworkPaths for a given network monitoring provider.
REST Resource: v1alpha1.projects.locations.networkMonitoringProviders.webPaths
Methods
get
GET /v1alpha1/{name=projects/*/locations/*/networkMonitoringProviders/*/webPaths/*}
Gets the WebPath resource.
list
GET /v1alpha1/{parent=projects/*/locations/*/networkMonitoringProviders/*}/webPaths
Lists WebPaths for a given network monitoring provider.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.locations
Methods
get
GET /v1/{name=organizations/*/locations/*}
Gets information about a location.
list
GET /v1/{name=organizations/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.organizations.locations.global.operations
Methods
cancel
POST /v1/{name=organizations/*/locations/global/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=organizations/*/locations/global/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=organizations/*/locations/global/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=organizations/*/locations/global}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.locations.vpcFlowLogsConfigs
Methods
create
POST /v1/{parent=organizations/*/locations/*}/vpcFlowLogsConfigs
Creates a new VpcFlowLogsConfig .
delete
DELETE /v1/{name=organizations/*/locations/*/vpcFlowLogsConfigs/*}
Deletes a specific VpcFlowLogsConfig .
get
GET /v1/{name=organizations/*/locations/*/vpcFlowLogsConfigs/*}
Gets the details of a specific VpcFlowLogsConfig .
list
GET /v1/{parent=organizations/*/locations/*}/vpcFlowLogsConfigs
Lists all VpcFlowLogsConfigs in a given organization.
patch
PATCH /v1/{vpcFlowLogsConfig.name=organizations/*/locations/*/vpcFlowLogsConfigs/*}
Updates an existing VpcFlowLogsConfig .
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.global.connectivityTests
Methods
create
POST /v1/{parent=projects/*/locations/global}/connectivityTests
Creates a new Connectivity Test.
delete
DELETE /v1/{name=projects/*/locations/global/connectivityTests/*}
Deletes a specific ConnectivityTest .
get
GET /v1/{name=projects/*/locations/global/connectivityTests/*}
Gets the details of a specific Connectivity Test.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/connectivityTests/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/global}/connectivityTests
Lists all Connectivity Tests owned by a project.
patch
PATCH /v1/{resource.name=projects/*/locations/global/connectivityTests/*}
Updates the configuration of an existing ConnectivityTest .
rerun
POST /v1/{name=projects/*/locations/global/connectivityTests/*}:rerun
Rerun an existing ConnectivityTest .
setIamPolicy
POST /v1/{resource=projects/*/locations/global/connectivityTests/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/connectivityTests/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.global.operations
Methods
cancel
POST /v1/{name=projects/*/locations/global/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/global/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/global/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/global}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.vpcFlowLogsConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs
Creates a new VpcFlowLogsConfig .
delete
DELETE /v1/{name=projects/*/locations/*/vpcFlowLogsConfigs/*}
Deletes a specific VpcFlowLogsConfig .
get
GET /v1/{name=projects/*/locations/*/vpcFlowLogsConfigs/*}
Gets the details of a specific VpcFlowLogsConfig .
list
GET /v1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs
Lists all VpcFlowLogsConfigs in a given project.
patch
PATCH /v1/{vpcFlowLogsConfig.name=projects/*/locations/*/vpcFlowLogsConfigs/*}
Updates an existing VpcFlowLogsConfig .
queryOrgVpcFlowLogsConfigs
GET /v1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs:queryOrgVpcFlowLogsConfigs
QueryOrgVpcFlowLogsConfigs returns a list of all organization-level VPC Flow Logs configurations applicable to the specified project.
showEffectiveFlowLogsConfigs
GET /v1/{parent=projects/*/locations/*}/vpcFlowLogsConfigs:showEffectiveFlowLogsConfigs
ShowEffectiveFlowLogsConfigs returns a list of all VPC Flow Logs configurations applicable to a specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
