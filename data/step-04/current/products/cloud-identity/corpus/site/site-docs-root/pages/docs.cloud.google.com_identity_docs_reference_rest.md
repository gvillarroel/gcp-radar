---
title: "Cloud Identity API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest
  title: "Cloud Identity API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Identity
Reference
Send feedback
Cloud Identity API
Stay organized with collections
Save and categorize content based on your preferences.
API for provisioning and managing identity resources.
Service: cloudidentity.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudidentity.googleapis.com/$discovery/rest?version=v1
https://cloudidentity.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudidentity.googleapis.com
REST Resource: v1beta1.customers.userinvitations
Methods
cancel
POST /v1beta1/{name=customers/*/userinvitations/*}:cancel
Cancels a UserInvitation that was already sent.
get
GET /v1beta1/{name=customers/*/userinvitations/*}
Retrieves a UserInvitation resource.
isInvitableUser
GET /v1beta1/{name=customers/*/userinvitations/*}:isInvitableUser
Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account).
list
GET /v1beta1/{parent=customers/*}/userinvitations
Retrieves a list of UserInvitation resources.
send
POST /v1beta1/{name=customers/*/userinvitations/*}:send
Sends a UserInvitation to email.
REST Resource: v1beta1.devices
Methods
cancelWipe
POST /v1beta1/{name=devices/*}:cancelWipe
Cancels an unfinished device wipe.
create
POST /v1beta1/devices
Creates a device.
delete
DELETE /v1beta1/{name=devices/*}
Deletes the specified device.
get
GET /v1beta1/{name=devices/*}
Retrieves the specified device.
list
GET /v1beta1/devices
Lists/Searches devices.
wipe
POST /v1beta1/{name=devices/*}:wipe
Wipes all data on the specified device.
REST Resource: v1beta1.devices.deviceUsers
Methods
approve
POST /v1beta1/{name=devices/*/deviceUsers/*}:approve
Approves device to access user data.
block
POST /v1beta1/{name=devices/*/deviceUsers/*}:block
Blocks device from accessing user data
cancelWipe
POST /v1beta1/{name=devices/*/deviceUsers/*}:cancelWipe
Cancels an unfinished user account wipe.
delete
DELETE /v1beta1/{name=devices/*/deviceUsers/*}
Deletes the specified DeviceUser.
get
GET /v1beta1/{name=devices/*/deviceUsers/*}
Retrieves the specified DeviceUser
list
GET /v1beta1/{parent=devices/*}/deviceUsers
Lists/Searches DeviceUsers.
lookup
GET /v1beta1/{parent=devices/*/deviceUsers}:lookup
Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request.
wipe
POST /v1beta1/{name=devices/*/deviceUsers/*}:wipe
Wipes the user's account on a device.
REST Resource: v1beta1.devices.deviceUsers.clientStates
Methods
get
GET /v1beta1/{name=devices/*/deviceUsers/*/clientStates/*}
Gets the client state for the device user
patch
PATCH /v1beta1/{clientState.name=devices/*/deviceUsers/*/clientStates/*}
Updates the client state for the device user
Note : This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
REST Resource: v1beta1.groups
Methods
create
POST /v1beta1/groups
Creates a Group .
delete
DELETE /v1beta1/{name=groups/*}
Deletes a Group .
get
GET /v1beta1/{name=groups/*}
Retrieves a Group .
getSecuritySettings
GET /v1beta1/{name=groups/*/securitySettings}
Get Security Settings
list
GET /v1beta1/groups
Lists the Group resources under a customer or namespace.
lookup
GET /v1beta1/groups:lookup
Looks up the resource name of a Group by its EntityKey .
patch
PATCH /v1beta1/{resource.name=groups/*}
Updates a Group .
search
GET /v1beta1/groups:search
Searches for Group resources matching a specified query.
updateSecuritySettings
PATCH /v1beta1/{securitySettings.name=groups/*/securitySettings}
Update Security Settings
REST Resource: v1beta1.groups.memberships
Methods
checkTransitiveMembership
GET /v1beta1/{parent=groups/*}/memberships:checkTransitiveMembership
Check a potential member for membership in a group.
create
POST /v1beta1/{parent=groups/*}/memberships
Creates a Membership .
delete
DELETE /v1beta1/{name=groups/*/memberships/*}
Deletes a Membership .
get
GET /v1beta1/{name=groups/*/memberships/*}
Retrieves a Membership .
getMembershipGraph
GET /v1beta1/{parent=groups/*}/memberships:getMembershipGraph
Get a membership graph of just a member or both a member and a group.
list
GET /v1beta1/{parent=groups/*}/memberships
Lists the Membership s within a Group .
lookup
GET /v1beta1/{parent=groups/*}/memberships:lookup
Looks up the resource name of a Membership by its EntityKey .
modifyMembershipRoles
POST /v1beta1/{name=groups/*/memberships/*}:modifyMembershipRoles
Modifies the MembershipRole s of a Membership .
searchDirectGroups
GET /v1beta1/{parent=groups/*}/memberships:searchDirectGroups
Searches direct groups of a member.
searchTransitiveGroups
GET /v1beta1/{parent=groups/*}/memberships:searchTransitiveGroups
Search transitive groups of a member.
searchTransitiveMemberships
GET /v1beta1/{parent=groups/*}/memberships:searchTransitiveMemberships
Search transitive memberships of a group.
REST Resource: v1beta1.inboundOidcSsoProfiles
Methods
create
POST /v1beta1/inboundOidcSsoProfiles
Creates an InboundOidcSsoProfile for a customer.
delete
DELETE /v1beta1/{name=inboundOidcSsoProfiles/*}
Deletes an InboundOidcSsoProfile .
get
GET /v1beta1/{name=inboundOidcSsoProfiles/*}
Gets an InboundOidcSsoProfile .
list
GET /v1beta1/inboundOidcSsoProfiles
Lists InboundOidcSsoProfile objects for a Google enterprise customer.
patch
PATCH /v1beta1/{inboundOidcSsoProfile.name=inboundOidcSsoProfiles/*}
Updates an InboundOidcSsoProfile .
REST Resource: v1beta1.inboundSamlSsoProfiles
Methods
create
POST /v1beta1/inboundSamlSsoProfiles
Creates an InboundSamlSsoProfile for a customer.
delete
DELETE /v1beta1/{name=inboundSamlSsoProfiles/*}
Deletes an InboundSamlSsoProfile .
get
GET /v1beta1/{name=inboundSamlSsoProfiles/*}
Gets an InboundSamlSsoProfile .
list
GET /v1beta1/inboundSamlSsoProfiles
Lists InboundSamlSsoProfile s for a customer.
patch
PATCH /v1beta1/{inboundSamlSsoProfile.name=inboundSamlSsoProfiles/*}
Updates an InboundSamlSsoProfile .
REST Resource: v1beta1.inboundSamlSsoProfiles.idpCredentials
Methods
add
POST /v1beta1/{parent=inboundSamlSsoProfiles/*}/idpCredentials:add
Adds an IdpCredential .
delete
DELETE /v1beta1/{name=inboundSamlSsoProfiles/*/idpCredentials/*}
Deletes an IdpCredential .
get
GET /v1beta1/{name=inboundSamlSsoProfiles/*/idpCredentials/*}
Gets an IdpCredential .
list
GET /v1beta1/{parent=inboundSamlSsoProfiles/*}/idpCredentials
Returns a list of IdpCredential s in an InboundSamlSsoProfile .
REST Resource: v1beta1.inboundSsoAssignments
Methods
create
POST /v1beta1/inboundSsoAssignments
Creates an InboundSsoAssignment for users and devices in a Customer under a given Group or OrgUnit .
delete
DELETE /v1beta1/{name=inboundSsoAssignments/*}
Deletes an InboundSsoAssignment .
get
GET /v1beta1/{name=inboundSsoAssignments/*}
Gets an InboundSsoAssignment .
list
GET /v1beta1/inboundSsoAssignments
Lists the InboundSsoAssignment s for a Customer .
patch
PATCH /v1beta1/{inboundSsoAssignment.name=inboundSsoAssignments/*}
Updates an InboundSsoAssignment .
REST Resource: v1beta1.orgUnits.memberships
Methods
list
GET /v1beta1/{parent=orgUnits/*}/memberships
List OrgMembership resources in an OrgUnit treated as 'parent'.
move
POST /v1beta1/{name=orgUnits/*/memberships/*}:move
Move an OrgMembership to a new OrgUnit.
REST Resource: v1beta1.policies
Methods
create
POST /v1beta1/policies
Create a policy.
delete
DELETE /v1beta1/{name=policies/*}
Delete a policy.
get
GET /v1beta1/{name=policies/*}
Get a policy.
list
GET /v1beta1/policies
List policies.
patch
PATCH /v1beta1/{policy.name=policies/*}
Update a policy.
REST Resource: v1.customers.userinvitations
Methods
cancel
POST /v1/{name=customers/*/userinvitations/*}:cancel
Cancels a UserInvitation that was already sent.
get
GET /v1/{name=customers/*/userinvitations/*}
Retrieves a UserInvitation resource.
isInvitableUser
GET /v1/{name=customers/*/userinvitations/*}:isInvitableUser
Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account).
list
GET /v1/{parent=customers/*}/userinvitations
Retrieves a list of UserInvitation resources.
send
POST /v1/{name=customers/*/userinvitations/*}:send
Sends a UserInvitation to email.
REST Resource: v1.devices
Methods
cancelWipe
POST /v1/{name=devices/*}:cancelWipe
Cancels an unfinished device wipe.
create
POST /v1/devices
Creates a device.
delete
DELETE /v1/{name=devices/*}
Deletes the specified device.
get
GET /v1/{name=devices/*}
Retrieves the specified device.
list
GET /v1/devices
Lists/Searches devices.
wipe
POST /v1/{name=devices/*}:wipe
Wipes all data on the specified device.
REST Resource: v1.devices.deviceUsers
Methods
approve
POST /v1/{name=devices/*/deviceUsers/*}:approve
Approves device to access user data.
block
POST /v1/{name=devices/*/deviceUsers/*}:block
Blocks device from accessing user data
cancelWipe
POST /v1/{name=devices/*/deviceUsers/*}:cancelWipe
Cancels an unfinished user account wipe.
delete
DELETE /v1/{name=devices/*/deviceUsers/*}
Deletes the specified DeviceUser.
get
GET /v1/{name=devices/*/deviceUsers/*}
Retrieves the specified DeviceUser
list
GET /v1/{parent=devices/*}/deviceUsers
Lists/Searches DeviceUsers.
lookup
GET /v1/{parent=devices/*/deviceUsers}:lookup
Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request.
wipe
POST /v1/{name=devices/*/deviceUsers/*}:wipe
Wipes the user's account on a device.
REST Resource: v1.devices.deviceUsers.clientStates
Methods
get
GET /v1/{name=devices/*/deviceUsers/*/clientStates/*}
Gets the client state for the device user
list
GET /v1/{parent=devices/*/deviceUsers/*}/clientStates
Lists the client states for the given search query.
patch
PATCH /v1/{clientState.name=devices/*/deviceUsers/*/clientStates/*}
Updates the client state for the device user
Note : This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
REST Resource: v1.groups
Methods
create
POST /v1/groups
Creates a Group.
delete
DELETE /v1/{name=groups/*}
Deletes a Group .
get
GET /v1/{name=groups/*}
Retrieves a Group .
getSecuritySettings
GET /v1/{name=groups/*/securitySettings}
Get Security Settings
list
GET /v1/groups
Lists the Group resources under a customer or namespace.
lookup
GET /v1/groups:lookup
Looks up the resource name of a Group by its EntityKey .
patch
PATCH /v1/{resource.name=groups/*}
Updates a Group .
search
GET /v1/groups:search
Searches for Group resources matching a specified query.
updateSecuritySettings
PATCH /v1/{securitySettings.name=groups/*/securitySettings}
Update Security Settings
REST Resource: v1.groups.memberships
Methods
checkTransitiveMembership
GET /v1/{parent=groups/*}/memberships:checkTransitiveMembership
Check a potential member for membership in a group.
create
POST /v1/{parent=groups/*}/memberships
Creates a Membership .
delete
DELETE /v1/{name=groups/*/memberships/*}
Deletes a Membership .
get
GET /v1/{name=groups/*/memberships/*}
Retrieves a Membership .
getMembershipGraph
GET /v1/{parent=groups/*}/memberships:getMembershipGraph
Get a membership graph of just a member or both a member and a group.
list
GET /v1/{parent=groups/*}/memberships
Lists the Membership s within a Group .
lookup
GET /v1/{parent=groups/*}/memberships:lookup
Looks up the resource name of a Membership by its EntityKey .
modifyMembershipRoles
POST /v1/{name=groups/*/memberships/*}:modifyMembershipRoles
Modifies the MembershipRole s of a Membership .
searchDirectGroups
GET /v1/{parent=groups/*}/memberships:searchDirectGroups
Searches direct groups of a member.
searchTransitiveGroups
GET /v1/{parent=groups/*}/memberships:searchTransitiveGroups
Search transitive groups of a member.
searchTransitiveMemberships
GET /v1/{parent=groups/*}/memberships:searchTransitiveMemberships
Search transitive memberships of a group.
REST Resource: v1.inboundOidcSsoProfiles
Methods
create
POST /v1/inboundOidcSsoProfiles
Creates an InboundOidcSsoProfile for a customer.
delete
DELETE /v1/{name=inboundOidcSsoProfiles/*}
Deletes an InboundOidcSsoProfile .
get
GET /v1/{name=inboundOidcSsoProfiles/*}
Gets an InboundOidcSsoProfile .
list
GET /v1/inboundOidcSsoProfiles
Lists InboundOidcSsoProfile objects for a Google enterprise customer.
patch
PATCH /v1/{inboundOidcSsoProfile.name=inboundOidcSsoProfiles/*}
Updates an InboundOidcSsoProfile .
REST Resource: v1.inboundSamlSsoProfiles
Methods
create
POST /v1/inboundSamlSsoProfiles
Creates an InboundSamlSsoProfile for a customer.
delete
DELETE /v1/{name=inboundSamlSsoProfiles/*}
Deletes an InboundSamlSsoProfile .
get
GET /v1/{name=inboundSamlSsoProfiles/*}
Gets an InboundSamlSsoProfile .
list
GET /v1/inboundSamlSsoProfiles
Lists InboundSamlSsoProfile s for a customer.
patch
PATCH /v1/{inboundSamlSsoProfile.name=inboundSamlSsoProfiles/*}
Updates an InboundSamlSsoProfile .
REST Resource: v1.inboundSamlSsoProfiles.idpCredentials
Methods
add
POST /v1/{parent=inboundSamlSsoProfiles/*}/idpCredentials:add
Adds an IdpCredential .
delete
DELETE /v1/{name=inboundSamlSsoProfiles/*/idpCredentials/*}
Deletes an IdpCredential .
get
GET /v1/{name=inboundSamlSsoProfiles/*/idpCredentials/*}
Gets an IdpCredential .
list
GET /v1/{parent=inboundSamlSsoProfiles/*}/idpCredentials
Returns a list of IdpCredential s in an InboundSamlSsoProfile .
REST Resource: v1.inboundSsoAssignments
Methods
create
POST /v1/inboundSsoAssignments
Creates an InboundSsoAssignment for users and devices in a Customer under a given Group or OrgUnit .
delete
DELETE /v1/{name=inboundSsoAssignments/*}
Deletes an InboundSsoAssignment .
get
GET /v1/{name=inboundSsoAssignments/*}
Gets an InboundSsoAssignment .
list
GET /v1/inboundSsoAssignments
Lists the InboundSsoAssignment s for a Customer .
patch
PATCH /v1/{inboundSsoAssignment.name=inboundSsoAssignments/*}
Updates an InboundSsoAssignment .
REST Resource: v1.policies
Methods
get
GET /v1/{name=policies/*}
Get a policy.
list
GET /v1/policies
List policies.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-16 UTC."],[],[]]
