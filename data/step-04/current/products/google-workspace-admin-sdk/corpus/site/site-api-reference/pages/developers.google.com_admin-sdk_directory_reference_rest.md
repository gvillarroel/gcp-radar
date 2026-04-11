---
title: "Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/admin-sdk/directory/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/admin-sdk/directory/reference/rest
source_metadata:
  url: https://developers.google.com/admin-sdk/directory/reference/rest
  title: "Admin SDK: Directory API \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
Admin SDK: Directory API
Stay organized with collections
Save and categorize content based on your preferences.
The Admin SDK Directory API lets administrators of enterprise domains view and manage their organization's users, groups, devices, and related resources. The Cloud Identity APIs offer additional ways of managing some of the same resources.
Service: admin.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://admin.googleapis.com/$discovery/rest?version=directory_v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://admin.googleapis.com
REST Resource: asps
Methods
delete
DELETE /admin/directory/v1/users/{userKey}/asps/{codeId}
Deletes an ASP issued by a user.
get
GET /admin/directory/v1/users/{userKey}/asps/{codeId}
Gets information about an ASP issued by a user.
list
GET /admin/directory/v1/users/{userKey}/asps
Lists the ASPs issued by a user.
REST Resource: chromeosdevices
Methods
action (deprecated)
POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action
Use BatchChangeChromeOsDeviceStatus instead.
get
GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
Retrieves a Chrome OS device's properties.
list
GET /admin/directory/v1/customer/{customerId}/devices/chromeos
Retrieves a paginated list of Chrome OS devices within an account.
moveDevicesToOu
POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu
Moves or inserts multiple Chrome OS devices to an organizational unit.
patch
PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
update
PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId .
REST Resource: customer.devices.chromeos
Methods
batchChangeStatus
POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus
Changes the status of a batch of ChromeOS devices.
countChromeOsDevices
GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices
Counts ChromeOS devices matching the request.
issueCommand
POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand
Issues a command for the device to execute.
REST Resource: customer.devices.chromeos.commands
Methods
get
GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}
Gets command data a specific command issued to the device.
REST Resource: customers
Methods
get
GET /admin/directory/v1/customers/{customerKey}
Retrieves a customer.
patch
PATCH /admin/directory/v1/customers/{customerKey}
Patches a customer.
update
PUT /admin/directory/v1/customers/{customerKey}
Updates a customer.
REST Resource: domainAliases
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}
Deletes a domain Alias of the customer.
get
GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}
Retrieves a domain alias of the customer.
insert
POST /admin/directory/v1/customer/{customer}/domainaliases
Inserts a domain alias of the customer.
list
GET /admin/directory/v1/customer/{customer}/domainaliases
Lists the domain aliases of the customer.
REST Resource: domains
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/domains/{domainName}
Deletes a domain of the customer.
get
GET /admin/directory/v1/customer/{customer}/domains/{domainName}
Retrieves a domain of the customer.
insert
POST /admin/directory/v1/customer/{customer}/domains
Inserts a domain of the customer.
list
GET /admin/directory/v1/customer/{customer}/domains
Lists the domains of the customer.
REST Resource: groups
Methods
delete
DELETE /admin/directory/v1/groups/{groupKey}
Deletes a group.
get
GET /admin/directory/v1/groups/{groupKey}
Retrieves a group's properties.
insert
POST /admin/directory/v1/groups
Creates a group.
list
GET /admin/directory/v1/groups
Retrieves all groups of a domain or of a user given a userKey (paginated).
patch
PATCH /admin/directory/v1/groups/{groupKey}
Updates a group's properties.
update
PUT /admin/directory/v1/groups/{groupKey}
Updates a group's properties.
REST Resource: groups.aliases
Methods
delete
DELETE /admin/directory/v1/groups/{groupKey}/aliases/{alias}
Removes an alias.
insert
POST /admin/directory/v1/groups/{groupKey}/aliases
Adds an alias for the group.
list
GET /admin/directory/v1/groups/{groupKey}/aliases
Lists all aliases for a group.
REST Resource: members
Methods
delete
DELETE /admin/directory/v1/groups/{groupKey}/members/{memberKey}
Removes a member from a group.
get
GET /admin/directory/v1/groups/{groupKey}/members/{memberKey}
Retrieves a group member's properties.
hasMember
GET /admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}
Checks whether the given user is a member of the group.
insert
POST /admin/directory/v1/groups/{groupKey}/members
Adds a user to the specified group.
list
GET /admin/directory/v1/groups/{groupKey}/members
Retrieves a paginated list of all members in a group.
patch
PATCH /admin/directory/v1/groups/{groupKey}/members/{memberKey}
Updates the membership properties of a user in the specified group.
update
PUT /admin/directory/v1/groups/{groupKey}/members/{memberKey}
Updates the membership of a user in the specified group.
REST Resource: mobiledevices
Methods
action
POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action
Takes an action that affects a mobile device.
delete
DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}
Removes a mobile device.
get
GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}
Retrieves a mobile device's properties.
list
GET /admin/directory/v1/customer/{customerId}/devices/mobile
Retrieves a paginated list of all user-owned mobile devices for an account.
REST Resource: orgunits
Methods
delete
DELETE /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}
Removes an organizational unit.
get
GET /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}
Retrieves an organizational unit.
insert
POST /admin/directory/v1/customer/{customerId}/orgunits
Adds an organizational unit.
list
GET /admin/directory/v1/customer/{customerId}/orgunits
Retrieves a list of all organizational units for an account.
patch
PATCH /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}
Updates an organizational unit.
update
PUT /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}
Updates an organizational unit.
REST Resource: privileges
Methods
list
GET /admin/directory/v1/customer/{customer}/roles/ALL/privileges
Retrieves a paginated list of all privileges for a customer.
REST Resource: resources.buildings
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
Deletes a building.
get
GET /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
Retrieves a building.
insert
POST /admin/directory/v1/customer/{customer}/resources/buildings
Inserts a building.
list
GET /admin/directory/v1/customer/{customer}/resources/buildings
Retrieves a list of buildings for an account.
patch
PATCH /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
Patches a building.
update
PUT /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}
Updates a building.
REST Resource: resources.calendars
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
Deletes a calendar resource.
get
GET /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
Retrieves a calendar resource.
insert
POST /admin/directory/v1/customer/{customer}/resources/calendars
Inserts a calendar resource.
list
GET /admin/directory/v1/customer/{customer}/resources/calendars
Retrieves a list of calendar resources for an account.
patch
PATCH /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
Patches a calendar resource.
update
PUT /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}
Updates a calendar resource.
REST Resource: resources.features
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/resources/features/{featureKey}
Deletes a feature.
get
GET /admin/directory/v1/customer/{customer}/resources/features/{featureKey}
Retrieves a feature.
insert
POST /admin/directory/v1/customer/{customer}/resources/features
Inserts a feature.
list
GET /admin/directory/v1/customer/{customer}/resources/features
Retrieves a list of features for an account.
patch
PATCH /admin/directory/v1/customer/{customer}/resources/features/{featureKey}
Patches a feature.
rename
POST /admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename
Renames a feature.
update
PUT /admin/directory/v1/customer/{customer}/resources/features/{featureKey}
Updates a feature.
REST Resource: roleAssignments
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}
Deletes a role assignment.
get
GET /admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}
Retrieves a role assignment.
insert
POST /admin/directory/v1/customer/{customer}/roleassignments
Creates a role assignment.
list
GET /admin/directory/v1/customer/{customer}/roleassignments
Retrieves a paginated list of all roleAssignments.
REST Resource: roles
Methods
delete
DELETE /admin/directory/v1/customer/{customer}/roles/{roleId}
Deletes a role.
get
GET /admin/directory/v1/customer/{customer}/roles/{roleId}
Retrieves a role.
insert
POST /admin/directory/v1/customer/{customer}/roles
Creates a role.
list
GET /admin/directory/v1/customer/{customer}/roles
Retrieves a paginated list of all the roles in a domain.
patch
PATCH /admin/directory/v1/customer/{customer}/roles/{roleId}
Patches a role.
update
PUT /admin/directory/v1/customer/{customer}/roles/{roleId}
Updates a role.
REST Resource: schemas
Methods
delete
DELETE /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
Deletes a schema.
get
GET /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
Retrieves a schema.
insert
POST /admin/directory/v1/customer/{customerId}/schemas
Creates a schema.
list
GET /admin/directory/v1/customer/{customerId}/schemas
Retrieves all schemas for a customer.
patch
PATCH /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
Patches a schema.
update
PUT /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}
Updates a schema.
REST Resource: tokens
Methods
delete
DELETE /admin/directory/v1/users/{userKey}/tokens/{clientId}
Deletes all access tokens issued by a user for an application.
get
GET /admin/directory/v1/users/{userKey}/tokens/{clientId}
Gets information about an access token issued by a user.
list
GET /admin/directory/v1/users/{userKey}/tokens
Returns the set of tokens specified user has issued to 3rd party applications.
REST Resource: twoStepVerification
Methods
turnOff
POST /admin/directory/v1/users/{userKey}/twoStepVerification/turnOff
Turns off 2-Step Verification for user.
REST Resource: users
Methods
delete
DELETE /admin/directory/v1/users/{userKey}
Deletes a user.
get
GET /admin/directory/v1/users/{userKey}
Retrieves a user.
insert
POST /admin/directory/v1/users
Creates a user.
list
GET /admin/directory/v1/users
Retrieves a paginated list of either deleted users or all users in a domain.
makeAdmin
POST /admin/directory/v1/users/{userKey}/makeAdmin
Makes a user a super administrator.
patch
PATCH /admin/directory/v1/users/{userKey}
Updates a user using patch semantics.
signOut
POST /admin/directory/v1/users/{userKey}/signOut
Signs a user out of all web and device sessions and reset their sign-in cookies.
undelete
POST /admin/directory/v1/users/{userKey}/undelete
Undeletes a deleted user.
update
PUT /admin/directory/v1/users/{userKey}
Updates a user.
watch
POST /admin/directory/v1/users/watch
Watches for changes in users list.
REST Resource: users.aliases
Methods
delete
DELETE /admin/directory/v1/users/{userKey}/aliases/{alias}
Removes an alias.
insert
POST /admin/directory/v1/users/{userKey}/aliases
Adds an alias.
list
GET /admin/directory/v1/users/{userKey}/aliases
Lists all aliases for a user.
watch
POST /admin/directory/v1/users/{userKey}/aliases/watch
Watches for changes in users list.
REST Resource: users.photos
Methods
delete
DELETE /admin/directory/v1/users/{userKey}/photos/thumbnail
Removes the user's photo.
get
GET /admin/directory/v1/users/{userKey}/photos/thumbnail
Retrieves the user's photo.
patch
PATCH /admin/directory/v1/users/{userKey}/photos/thumbnail
Adds a photo for the user.
update
PUT /admin/directory/v1/users/{userKey}/photos/thumbnail
Adds a photo for the user.
REST Resource: verificationCodes
Methods
generate
POST /admin/directory/v1/users/{userKey}/verificationCodes/generate
Generates new backup verification codes for the user.
invalidate
POST /admin/directory/v1/users/{userKey}/verificationCodes/invalidate
Invalidates the current backup verification codes for the user.
list
GET /admin/directory/v1/users/{userKey}/verificationCodes
Returns the current set of valid backup verification codes for the specified user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
