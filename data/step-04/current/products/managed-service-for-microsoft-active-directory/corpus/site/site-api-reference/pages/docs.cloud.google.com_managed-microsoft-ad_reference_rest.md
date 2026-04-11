---
title: "Managed Service for Microsoft Active Directory API \_|\_ Managed Microsoft\
  \ AD \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest
  title: "Managed Service for Microsoft Active Directory API \_|\_ Managed Microsoft\
    \ AD \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Managed Microsoft AD
Reference
Send feedback
Managed Service for Microsoft Active Directory API
Stay organized with collections
Save and categorize content based on your preferences.
The Managed Service for Microsoft Active Directory API is used for managing a highly available, hardened service running Microsoft Active Directory (AD).
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.global.domains
REST Resource: v1beta1.projects.locations.global.domains.backups
REST Resource: v1beta1.projects.locations.global.domains.sqlIntegrations
REST Resource: v1beta1.projects.locations.global.operations
REST Resource: v1beta1.projects.locations.global.peerings
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.global.domains
REST Resource: v1.projects.locations.global.domains.backups
REST Resource: v1.projects.locations.global.domains.sqlIntegrations
REST Resource: v1.projects.locations.global.operations
REST Resource: v1.projects.locations.global.peerings
Service: managedidentities.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://managedidentities.googleapis.com/$discovery/rest?version=v1
https://managedidentities.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://managedidentities.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.global.domains
Methods
attachTrust
POST /v1beta1/{name=projects/*/locations/global/domains/*}:attachTrust
Adds an AD trust to a domain.
checkMigrationPermission
POST /v1beta1/{domain=projects/*/locations/global/domains/*}:checkMigrationPermission
CheckMigrationPermission API gets the current state of DomainMigration
create
POST /v1beta1/{parent=projects/*/locations/global}/domains
Creates a Microsoft AD domain.
delete
DELETE /v1beta1/{name=projects/*/locations/global/domains/*}
Deletes a domain.
detachTrust
POST /v1beta1/{name=projects/*/locations/global/domains/*}:detachTrust
Removes an AD trust.
disableMigration
POST /v1beta1/{domain=projects/*/locations/global/domains/*}:disableMigration
Disable Domain Migration
domainJoinMachine
POST /v1beta1/{domain=projects/*/locations/global/domains/*}:domainJoinMachine
DomainJoinMachine API joins a Compute Engine VM to the domain
enableMigration
POST /v1beta1/{domain=projects/*/locations/global/domains/*}:enableMigration
Enable Domain Migration
extendSchema
POST /v1beta1/{domain=projects/*/locations/global/domains/*}:extendSchema
Extend Schema for Domain
get
GET /v1beta1/{name=projects/*/locations/global/domains/*}
Gets information about a domain.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/global/domains/*}:getIamPolicy
Gets the access control policy for a resource.
getLdapssettings
GET /v1beta1/{name=projects/*/locations/global/domains/*}/ldapssettings
Gets the domain ldaps settings.
list
GET /v1beta1/{parent=projects/*/locations/global}/domains
Lists domains in a project.
patch
PATCH /v1beta1/{domain.name=projects/*/locations/global/domains/*}
Updates the metadata and configuration of a domain.
reconfigureTrust
POST /v1beta1/{name=projects/*/locations/global/domains/*}:reconfigureTrust
Updates the DNS conditional forwarder.
resetAdminPassword
POST /v1beta1/{name=projects/*/locations/global/domains/*}:resetAdminPassword
Resets a domain's administrator password.
restore
POST /v1beta1/{name=projects/*/locations/global/domains/*}:restore
RestoreBackup restores domain mentioned in the RestoreBackupRequest
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/global/domains/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/global/domains/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
updateLdapssettings
PATCH /v1beta1/{ldapsSettings.name=projects/*/locations/global/domains/*}/ldapssettings
Patches a single ldaps settings.
validateTrust
POST /v1beta1/{name=projects/*/locations/global/domains/*}:validateTrust
Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
REST Resource: v1beta1.projects.locations.global.domains.backups
Methods
create
POST /v1beta1/{parent=projects/*/locations/global/domains/*}/backups
Creates a Backup for a domain.
delete
DELETE /v1beta1/{name=projects/*/locations/global/domains/*/backups/*}
Deletes identified Backup.
get
GET /v1beta1/{name=projects/*/locations/global/domains/*/backups/*}
Gets details of a single Backup.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/global/domains/*/backups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/global/domains/*}/backups
Lists Backup in a given project.
patch
PATCH /v1beta1/{backup.name=projects/*/locations/global/domains/*/backups/*}
Updates the labels for specified Backup.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/global/domains/*/backups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/global/domains/*/backups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.global.domains.sqlIntegrations
Methods
get
GET /v1beta1/{name=projects/*/locations/global/domains/*/sqlIntegrations/*}
Gets details of a single sqlIntegration.
list
GET /v1beta1/{parent=projects/*/locations/global/domains/*}/sqlIntegrations
Lists SqlIntegrations in a given domain.
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
GET /v1beta1/{name=projects/*/locations/global/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.global.peerings
Methods
create
POST /v1beta1/{parent=projects/*/locations/global}/peerings
Creates a Peering for Managed AD instance.
delete
DELETE /v1beta1/{name=projects/*/locations/global/peerings/*}
Deletes identified Peering.
get
GET /v1beta1/{name=projects/*/locations/global/peerings/*}
Gets details of a single Peering.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/global/peerings/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/global}/peerings
Lists Peerings in a given project.
patch
PATCH /v1beta1/{peering.name=projects/*/locations/global/peerings/*}
Updates the labels for specified Peering.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/global/peerings/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/global/peerings/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.global.domains
Methods
attachTrust
POST /v1/{name=projects/*/locations/global/domains/*}:attachTrust
Adds an AD trust to a domain.
create
POST /v1/{parent=projects/*/locations/global}/domains
Creates a Microsoft AD domain.
delete
DELETE /v1/{name=projects/*/locations/global/domains/*}
Deletes a domain.
detachTrust
POST /v1/{name=projects/*/locations/global/domains/*}:detachTrust
Removes an AD trust.
extendSchema
POST /v1/{domain=projects/*/locations/global/domains/*}:extendSchema
Extend Schema for Domain
get
GET /v1/{name=projects/*/locations/global/domains/*}
Gets information about a domain.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/domains/*}:getIamPolicy
Gets the access control policy for a resource.
getLdapssettings
GET /v1/{name=projects/*/locations/global/domains/*}/ldapssettings
Gets the domain ldaps settings.
list
GET /v1/{parent=projects/*/locations/global}/domains
Lists domains in a project.
patch
PATCH /v1/{domain.name=projects/*/locations/global/domains/*}
Updates the metadata and configuration of a domain.
reconfigureTrust
POST /v1/{name=projects/*/locations/global/domains/*}:reconfigureTrust
Updates the DNS conditional forwarder.
resetAdminPassword
POST /v1/{name=projects/*/locations/global/domains/*}:resetAdminPassword
Resets a domain's administrator password.
restore
POST /v1/{name=projects/*/locations/global/domains/*}:restore
RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
setIamPolicy
POST /v1/{resource=projects/*/locations/global/domains/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/domains/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
updateLdapssettings
PATCH /v1/{ldapsSettings.name=projects/*/locations/global/domains/*}/ldapssettings
Patches a single ldaps settings.
validateTrust
POST /v1/{name=projects/*/locations/global/domains/*}:validateTrust
Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
REST Resource: v1.projects.locations.global.domains.backups
Methods
create
POST /v1/{parent=projects/*/locations/global/domains/*}/backups
Creates a Backup for a domain.
delete
DELETE /v1/{name=projects/*/locations/global/domains/*/backups/*}
Deletes identified Backup.
get
GET /v1/{name=projects/*/locations/global/domains/*/backups/*}
Gets details of a single Backup.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/domains/*/backups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/global/domains/*}/backups
Lists Backup in a given project.
patch
PATCH /v1/{backup.name=projects/*/locations/global/domains/*/backups/*}
Updates the labels for specified Backup.
setIamPolicy
POST /v1/{resource=projects/*/locations/global/domains/*/backups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/domains/*/backups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.global.domains.sqlIntegrations
Methods
get
GET /v1/{name=projects/*/locations/global/domains/*/sqlIntegrations/*}
Gets details of a single sqlIntegration.
list
GET /v1/{parent=projects/*/locations/global/domains/*}/sqlIntegrations
Lists SqlIntegrations in a given domain.
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
GET /v1/{name=projects/*/locations/global/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.global.peerings
Methods
create
POST /v1/{parent=projects/*/locations/global}/peerings
Creates a Peering for Managed AD instance.
delete
DELETE /v1/{name=projects/*/locations/global/peerings/*}
Deletes identified Peering.
get
GET /v1/{name=projects/*/locations/global/peerings/*}
Gets details of a single Peering.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/peerings/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/global}/peerings
Lists Peerings in a given project.
patch
PATCH /v1/{peering.name=projects/*/locations/global/peerings/*}
Updates the labels for specified Peering.
setIamPolicy
POST /v1/{resource=projects/*/locations/global/peerings/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/peerings/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
