---
title: "Advanced Cloud Identity Groups Service \_|\_ Apps Script \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/apps-script/advanced/groups
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/groups
  title: "Advanced Cloud Identity Groups Service \_|\_ Apps Script \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Advanced Cloud Identity Groups Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The advanced Cloud Identity Groups (CIG) service in Apps Script allows interaction with the CIG API.
This is an advanced service that needs to be enabled before use.
Sample code is provided for creating groups, searching for groups, and managing group memberships.
access the CIG API in Apps Script.
The advanced Cloud Identity Groups (CIG) service lets you use the
CIG API in
Google Apps Script.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for
the CIG API.
Like all advanced services in Apps Script, the advanced CIG
service uses the same objects, methods, and parameters as the public API. For
more information, see How method signatures are determined .
Sample Code
The following helper functions use
version v1
of the API.
Create a Group
To create a Google Group, call
groups.create
with an instance of the new group resource. The group instance must include a
groupKey , parent , and label set to
cloudidentity.googleapis.com/groups.discussion_forum .
You also need to set the initialGroupConfig parameter, which defines the
initial owner of the group. You can use the following values for this parameter:
WITH_INITIAL_OWNER : Makes the person sending the request the owner of the
group.
EMPTY : Creates a group with no initial owners. You can only use this value if
you're a Google Workspace Super Admin or Google Groups Admin. For more
information about Google Workspace roles, see prebuilt administrator
roles.
The following example shows how to create a group such that the user is the
owner of the group:
const groups = CloudIdentityGroups . Groups ;
function createGroup ( groupId , parentId , displayName ) {
const groupKey = { id : groupId };
const group = {
parent : "customerId/" + parentId ,
displayName : displayName ,
groupKey : groupKey ,
// Set the label to specify creation of a Google Group.
labels : { "cloudidentity.googleapis.com/groups.discussion_forum" : "" },
};
const optionalArgs = { initialGroupConfig : "WITH_INITIAL_OWNER" };
try {
const response = groups . create ( group , optionalArgs );
console . log ( response );
} catch ( error ) {
console . error ( error );
}
}
Search for a Group
To search for a Google Group, call
groups.search
with a query string. To search for all groups, provide the
label cloudidentity.googleapis.com/groups.discussion_forum .
const groups = CloudIdentityGroups . Groups ;
function searchGroup ( customer_id ) {
const search_query = `parent=='customerId/ ${ customer_id } ' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels` ;
const search_group_request = groups . search ({ query : search_query });
console . log ( JSON . stringify ( search_group_request ));
}
Add a Membership to a Group
After a group exists, you can create memberships for it. This method requires a
membership resource
and the parent's resource name string. The former value can be obtained by
by looking up the group through the lookup
method.
The following helper method shows an example of adding a membership to a group.
expiryDetail is an optional field that can be added to set an expiration for
the membership. The value of preferredMemberKey is the member's email address.
const groups = CloudIdentityGroups . Groups ;
function createMembership ( namespace , groupId , memberKey ) {
try {
// Given a group ID and namespace, retrieve the ID for parent group
const groupLookupResponse = groups . lookup ({
'groupKey.id' : groupId ,
'groupKey.namespace' : namespace
});
const groupName = groupLookupResponse . name ;
// Create a membership object with a memberKey and a single role of type MEMBER
const membership = {
preferredMemberKey : { id : memberKey },
roles : [
{
name : "MEMBER" ,
expiryDetail : {
expireTime : "2025-10-02T15:01:23Z" ,
},
},
],
};
// Create a membership using the ID for the parent group and a membership object
const response = groups . Memberships . create ( membership , groupName );
console . log ( JSON . stringify ( response ));
} catch ( e ) {
console . error ( e );
}
}
Get Memberships from Member
Use the groups.memberships.searchDirectGroups
method to search for immediate parents of a member.
The following helper method shows an example of iterating through a given
member's direct memberships.
const groups = CloudIdentityGroups . Groups ;
function searchMemberMemberships ( memberId , pageSize ) {
try {
let memberships = [];
let nextPageToken = '' ;
const withinParent = 'groups/-' ; // This parameter sets the scope as "all groups"
do {
// Get page of memberships
const queryParams = {
query : `member_key_id == \' ${ memberId } \'` ,
page_size : pageSize ,
page_token : nextPageToken ,
};
const response = groups . Memberships . searchDirectGroups ( withinParent , queryParams );
memberships = memberships . concat ( response . memberships );
// Set up next page
nextPageToken = response . nextPageToken ;
} while ( nextPageToken );
return memberships ;
} catch ( e ) {
console . error ( e );
}
}
Get Memberships from a Group
Use the groups.memberships.list
method to list the members of a group.
groupId : The numeric ID of the group that you want to list members for. To
find the ID of a single group, use the groups.lookup
method. To see all group IDs under a customer or namespace, use the groups.list
method.
const groups = CloudIdentityGroups . Groups ;
function listGroupMemberships ( groupId , pageSize ) {
try {
let membershipList = [];
let nextPageToken = '' ;
// Get group name
const groupName = groups . lookup ({ 'groupKey.id' : groupId }). name ;
do {
// Get page of memberships
const queryParams = {
pageSize : pageSize ,
pageToken : nextPageToken
}
const response = groups . Memberships . list ( groupName , queryParams );
membershipList = membershipList . concat ( response . memberships );
// Set up next page
nextPageToken = response . nextPageToken ;
} while ( nextPageToken );
return membershipList ;
} catch ( error ) {
console . error ( error );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
