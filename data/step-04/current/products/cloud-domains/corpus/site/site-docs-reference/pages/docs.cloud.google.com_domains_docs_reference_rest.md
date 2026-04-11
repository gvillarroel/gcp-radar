---
title: "Cloud Domains API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/reference/rest
  title: "Cloud Domains API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Reference
Send feedback
Cloud Domains API
Stay organized with collections
Save and categorize content based on your preferences.
Enables management and configuration of domain names.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1beta1.projects.locations.registrations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.registrations
Service: domains.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://domains.googleapis.com/$discovery/rest?version=v1
https://domains.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://domains.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.operations
Methods
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.registrations
Methods
configureContactSettings
POST /v1beta1/{registration=projects/*/locations/*/registrations/*}:configureContactSettings
Updates a Registration 's contact settings.
configureDnsSettings
POST /v1beta1/{registration=projects/*/locations/*/registrations/*}:configureDnsSettings
Updates a Registration 's DNS settings.
configureManagementSettings
POST /v1beta1/{registration=projects/*/locations/*/registrations/*}:configureManagementSettings
Updates a Registration 's management settings.
delete
DELETE /v1beta1/{name=projects/*/locations/*/registrations/*}
Deletes a Registration resource.
export (deprecated)
POST /v1beta1/{name=projects/*/locations/*/registrations/*}:export
Deprecated: For more information, see Cloud Domains feature deprecation
Exports a Registration resource, such that it is no longer managed by Cloud Domains.
get
GET /v1beta1/{name=projects/*/locations/*/registrations/*}
Gets the details of a Registration resource.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/registrations/*}:getIamPolicy
Gets the access control policy for a resource.
import (deprecated)
POST /v1beta1/{parent=projects/*/locations/*}/registrations:import
Deprecated: For more information, see Cloud Domains feature deprecation
Imports a domain name from Google Domains for use in Cloud Domains.
initiatePushTransfer
POST /v1beta1/{registration=projects/*/locations/*/registrations/*}:initiatePushTransfer
Initiates the Push Transfer process to transfer the domain to another registrar.
list
GET /v1beta1/{parent=projects/*/locations/*}/registrations
Lists the Registration resources in a project.
patch
PATCH /v1beta1/{registration.name=projects/*/locations/*/registrations/*}
Updates select fields of a Registration resource, notably labels .
register
POST /v1beta1/{parent=projects/*/locations/*}/registrations:register
Registers a new domain name and creates a corresponding Registration resource.
renewDomain
POST /v1beta1/{registration=projects/*/locations/*/registrations/*}:renewDomain
Renews a recently expired domain.
resetAuthorizationCode
POST /v1beta1/{registration=projects/*/locations/*/registrations/*}:resetAuthorizationCode
Resets the authorization code of the Registration to a new random string.
retrieveAuthorizationCode
GET /v1beta1/{registration=projects/*/locations/*/registrations/*}:retrieveAuthorizationCode
Gets the authorization code of the Registration for the purpose of transferring the domain to another registrar.
retrieveImportableDomains (deprecated)
GET /v1beta1/{location=projects/*/locations/*}/registrations:retrieveImportableDomains
Deprecated: For more information, see Cloud Domains feature deprecation
Lists domain names from Google Domains that can be imported to Cloud Domains using the ImportDomain method.
retrieveRegisterParameters
GET /v1beta1/{location=projects/*/locations/*}/registrations:retrieveRegisterParameters
Gets parameters needed to register a new domain name, including price and up-to-date availability.
retrieveTransferParameters (deprecated)
GET /v1beta1/{location=projects/*/locations/*}/registrations:retrieveTransferParameters
Deprecated: For more information, see Cloud Domains feature deprecation
Gets parameters needed to transfer a domain name from another registrar to Cloud Domains.
searchDomains
GET /v1beta1/{location=projects/*/locations/*}/registrations:searchDomains
Searches for available domain names similar to the provided query.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/registrations/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/registrations/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
transfer (deprecated)
POST /v1beta1/{parent=projects/*/locations/*}/registrations:transfer
Deprecated: For more information, see Cloud Domains feature deprecation
Transfers a domain name from another registrar to Cloud Domains.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.registrations
Methods
configureContactSettings
POST /v1/{registration=projects/*/locations/*/registrations/*}:configureContactSettings
Updates a Registration 's contact settings.
configureDnsSettings
POST /v1/{registration=projects/*/locations/*/registrations/*}:configureDnsSettings
Updates a Registration 's DNS settings.
configureManagementSettings
POST /v1/{registration=projects/*/locations/*/registrations/*}:configureManagementSettings
Updates a Registration 's management settings.
delete
DELETE /v1/{name=projects/*/locations/*/registrations/*}
Deletes a Registration resource.
export (deprecated)
POST /v1/{name=projects/*/locations/*/registrations/*}:export
Deprecated: For more information, see Cloud Domains feature deprecation
Exports a Registration resource, such that it is no longer managed by Cloud Domains.
get
GET /v1/{name=projects/*/locations/*/registrations/*}
Gets the details of a Registration resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/registrations/*}:getIamPolicy
Gets the access control policy for a resource.
import (deprecated)
POST /v1/{parent=projects/*/locations/*}/registrations:import
Deprecated: For more information, see Cloud Domains feature deprecation
Imports a domain name from Google Domains for use in Cloud Domains.
initiatePushTransfer
POST /v1/{registration=projects/*/locations/*/registrations/*}:initiatePushTransfer
Initiates the Push Transfer process to transfer the domain to another registrar.
list
GET /v1/{parent=projects/*/locations/*}/registrations
Lists the Registration resources in a project.
patch
PATCH /v1/{registration.name=projects/*/locations/*/registrations/*}
Updates select fields of a Registration resource, notably labels .
register
POST /v1/{parent=projects/*/locations/*}/registrations:register
Registers a new domain name and creates a corresponding Registration resource.
renewDomain
POST /v1/{registration=projects/*/locations/*/registrations/*}:renewDomain
Renews a recently expired domain.
resetAuthorizationCode
POST /v1/{registration=projects/*/locations/*/registrations/*}:resetAuthorizationCode
Resets the authorization code of the Registration to a new random string.
retrieveAuthorizationCode
GET /v1/{registration=projects/*/locations/*/registrations/*}:retrieveAuthorizationCode
Gets the authorization code of the Registration for the purpose of transferring the domain to another registrar.
retrieveImportableDomains (deprecated)
GET /v1/{location=projects/*/locations/*}/registrations:retrieveImportableDomains
Deprecated: For more information, see Cloud Domains feature deprecation
Lists domain names from Google Domains that can be imported to Cloud Domains using the ImportDomain method.
retrieveRegisterParameters
GET /v1/{location=projects/*/locations/*}/registrations:retrieveRegisterParameters
Gets parameters needed to register a new domain name, including price and up-to-date availability.
retrieveTransferParameters (deprecated)
GET /v1/{location=projects/*/locations/*}/registrations:retrieveTransferParameters
Deprecated: For more information, see Cloud Domains feature deprecation
Gets parameters needed to transfer a domain name from another registrar to Cloud Domains.
searchDomains
GET /v1/{location=projects/*/locations/*}/registrations:searchDomains
Searches for available domain names similar to the provided query.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/registrations/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/registrations/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
transfer (deprecated)
POST /v1/{parent=projects/*/locations/*}/registrations:transfer
Deprecated: For more information, see Cloud Domains feature deprecation
Transfers a domain name from another registrar to Cloud Domains.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
