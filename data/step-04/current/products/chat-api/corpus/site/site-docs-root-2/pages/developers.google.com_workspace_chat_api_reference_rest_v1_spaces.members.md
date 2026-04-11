---
title: "REST Resource: spaces.members \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members
  title: "REST Resource: spaces.members \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
REST Resource: spaces.members
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Membership resource represents the relationship between a user, Chat app, or Google Group with a space, detailing their involvement status and role.
It defines states like JOINED , INVITED , or NOT_A_MEMBER and roles such as MEMBER or MANAGER for space interactions.
Membership information includes details like creation and deletion times, user or group association, and resource names.
Google Chat API provides methods to manage memberships: create, delete, get, list, and update them.
Memberships for Google Groups require user authentication and are represented by the Group resource with its associated name .
Resource: Membership
JSON representation
MembershipState
MembershipRole
Group
JSON representation
Methods
Resource: Membership
Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
JSON representation
{
"name" : string ,
"state" : enum ( MembershipState ) ,
"role" : enum ( MembershipRole ) ,
"createTime" : string ,
"deleteTime" : string ,
"member" : {
object ( User )
} ,
"groupMember" : {
object ( Group )
}
}
Fields
name
string
Identifier. Resource name of the membership, assigned by the server.
Format: spaces/{space}/members/{member}
state
enum ( MembershipState )
Output only. State of the membership.
role
enum ( MembershipRole )
Optional. User's role within a Chat space, which determines their permitted actions in the space.
This field can only be used as input in members.patch .
createTime
string ( Timestamp format)
Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.
deleteTime
string ( Timestamp format)
Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.
Union field memberType . Member associated with this membership. Other member types might be supported in the future. memberType can be only one of the following:
member
object ( User )
Optional. The Google Chat user or app the membership corresponds to. If your Chat app authenticates as a user , the output populates the user name and type .
groupMember
object ( Group )
Optional. The Google Group the membership corresponds to.
Reading or mutating memberships for Google Groups requires user authentication .
MembershipState
Specifies the member's relationship with a space. Other membership states might be supported in the future.
Enums
MEMBERSHIP_STATE_UNSPECIFIED
Default value. Don't use.
JOINED
The user is added to the space, and can participate in the space.
INVITED
The user is invited to join the space, but hasn't joined it.
NOT_A_MEMBER
The user doesn't belong to the space and doesn't have a pending invitation to join the space.
MembershipRole
Represents a user's permitted actions in a Chat space. More enum values might be added in the future.
Enums
MEMBERSHIP_ROLE_UNSPECIFIED
Default value. For users : they aren't a member of the space, but can be invited. For Google Groups : they're always assigned this role (other enum values might be used in the future).
ROLE_MEMBER
A member of the space. In the Chat UI, this role is called Member.
The user has basic permissions, like sending messages to the space. Managers and owners can grant members additional permissions in a space, including:
Add or remove members.
Modify space details.
Turn history on or off.
Mention everyone in the space with @all .
Manage Chat apps and webhooks installed in the space.
In direct messages and unnamed group conversations, everyone has this role.
ROLE_MANAGER
A space owner. In the Chat UI, this role is called Owner.
The user has the complete set of space permissions to manage the space, including:
Change the role of other members in the space to member, manager, or owner.
Delete the space.
Only supported in SpaceType.SPACE (named spaces).
To learn more, see Learn more about your role as a space owner or manager .
ROLE_ASSISTANT_MANAGER
A space manager. In the Chat UI, this role is called Manager.
The user has all basic permissions of ROLE_MEMBER , and can be granted a subset of administrative permissions by an owner. By default, managers have all the permissions of an owner except for the ability to:
Delete the space.
Make another space member an owner.
Change an owner's role.
By default, managers permissions include but aren't limited to:
Make another member a manager.
Delete messages in the space.
Manage space permissions.
Receive notifications for requests to join the space if the manager has the "manage members" permission in the space settings.
Make a space discoverable.
Only supported in SpaceType.SPACE (named spaces).
To learn more, see Manage space settings .
Group
A Google Group in Google Chat.
JSON representation
{
"name" : string
}
Fields
name
string
Resource name for a Google Group.
Represents a group in Cloud Identity Groups API.
Format: groups/{group}
Methods
create
Creates a membership for the calling Chat app, a user, or a Google Group.
delete
Deletes a membership.
get
Returns details about a membership.
list
Lists memberships in a space.
patch
Updates a membership.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Membership resource defines relationships within Google Chat spaces, indicating if a user or app is invited, present, or absent. Key attributes include `name`, `state` (JOINED, INVITED, NOT_A_MEMBER), `role` (MEMBER, MANAGER), and `memberType` (user or group). Methods allow creation, deletion, retrieval, listing, and updating of memberships. Group membership is also detailed, and its associated JSON representation and format.\n`MembershipRole` defines permission levels, and `MembershipState` defines the current relationship to a space.\n"]]
