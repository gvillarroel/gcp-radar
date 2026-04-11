---
title: "REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces
  title: "REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers"
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
REST Resource: spaces
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat Spaces are categorized as SPACE, GROUP_CHAT, or DIRECT_MESSAGE and contain properties like name, display name, threading state, and permission settings.
Spaces can be COLLABORATION_SPACE where all members can post or ANNOUNCEMENT_SPACE where only managers can post.
Permission settings, defined by PermissionSetting objects, control user actions such as managing members, modifying space details, posting messages, and using @all mentions.
The Google Chat Spaces API allows for creating, deleting, updating, and retrieving spaces, as well as managing their members, permissions, and settings.
Available API methods include create , delete , get , list , patch , and more to interact with and manage spaces programmatically.
Resource: Space
JSON representation
Type
SpaceType
SpaceThreadingState
SpaceDetails
JSON representation
HistoryState
MembershipCount
JSON representation
AccessSettings
JSON representation
AccessState
PredefinedPermissionSettings
PermissionSettings
JSON representation
PermissionSetting
JSON representation
Methods
Resource: Space
A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
JSON representation
{
"name" : string ,
"type" : enum ( Type ) ,
"spaceType" : enum ( SpaceType ) ,
"singleUserBotDm" : boolean ,
"threaded" : boolean ,
"displayName" : string ,
"externalUserAllowed" : boolean ,
"spaceThreadingState" : enum ( SpaceThreadingState ) ,
"spaceDetails" : {
object ( SpaceDetails )
} ,
"spaceHistoryState" : enum ( HistoryState ) ,
"importMode" : boolean ,
"createTime" : string ,
"lastActiveTime" : string ,
"adminInstalled" : boolean ,
"membershipCount" : {
object ( MembershipCount )
} ,
"accessSettings" : {
object ( AccessSettings )
} ,
"spaceUri" : string ,
"importModeExpireTime" : string ,
"customer" : string ,
"predefinedPermissionSettings" : enum ( PredefinedPermissionSettings ) ,
"permissionSettings" : {
object ( PermissionSettings )
}
}
Fields
name
string
Identifier. Resource name of the space.
Format: spaces/{space}
Where {space} represents the system-assigned ID for the space. You can obtain the space ID by calling the spaces.list() method or from the space URL. For example, if the space URL is https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA , the space ID is AAAAAAAAA .
type (deprecated)
enum ( Type )
This item is deprecated!
Output only. Deprecated: Use spaceType instead. The type of a space.
spaceType
enum ( SpaceType )
Optional. The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.
singleUserBotDm
boolean
Optional. Whether the space is a DM between a Chat app and a single human.
threaded (deprecated)
boolean
This item is deprecated!
Output only. Deprecated: Use spaceThreadingState instead. Whether messages are threaded in this space.
displayName
string
Optional. The space's display name. Required when creating a space with a spaceType of SPACE . If you receive the error message ALREADY_EXISTS when creating a space or updating the displayName , try a different displayName . An existing space within the Google Workspace organization might already use this display name.
For direct messages, this field might be empty.
Supports up to 128 characters.
externalUserAllowed
boolean
Optional. Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions:
The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user.
For existing spaces, this field is output only.
spaceThreadingState
enum ( SpaceThreadingState )
Output only. The threading state in the Chat space.
spaceDetails
object ( SpaceDetails )
Optional. Details about the space including description and rules.
spaceHistoryState
enum ( HistoryState )
Optional. The message history state for messages and threads in this space.
importMode
boolean
Optional. Whether this space is created in Import Mode as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.
Creating a space in Import Mode requires user authentication .
createTime
string ( Timestamp format)
Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces.
For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time.
Only populated in the output when spaceType is GROUP_CHAT or SPACE .
lastActiveTime
string ( Timestamp format)
Output only. Timestamp of the last message in the space.
adminInstalled
boolean
Output only. For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization.
To support admin install, your Chat app must feature direct messaging.
membershipCount
object ( MembershipCount )
Output only. The count of joined memberships grouped by member type. Populated when the spaceType is SPACE , DIRECT_MESSAGE or GROUP_CHAT .
accessSettings
object ( AccessSettings )
Optional. Specifies the access setting of the space. Only populated when the spaceType is SPACE .
spaceUri
string
Output only. The URI for a user to access the space.
importModeExpireTime
string ( Timestamp format)
Output only. The time when the space will be automatically deleted by the system if it remains in import mode.
Each space created in import mode must exit this mode before this expire time using spaces.completeImport .
This field is only populated for spaces that were created with import mode.
customer
string
Optional. Immutable. The customer id of the domain of the space. Required only when creating a space with app authentication and SpaceType is SPACE , otherwise should not be set.
In the format customers/{customer} , where customer is the id from the Admin SDK customer resource . Private apps can also use the customers/my_customer alias to create the space in the same Google Workspace organization as the app.
This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.
Union field space_permission_settings . Represents the permission settings of a space. Only populated when the space_type is SPACE . space_permission_settings can be only one of the following:
predefinedPermissionSettings
enum ( PredefinedPermissionSettings )
Optional. Input only. Predefined space permission settings, input only when creating a space. If the field is not set, a collaboration space is created. After you create the space, settings are populated in the PermissionSettings field.
Setting predefined permission settings supports:
App authentication with administrator approval with the chat.app.spaces or chat.app.spaces.create scopes.
User authentication
permissionSettings
object ( PermissionSettings )
Optional. Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings.
Reading and updating permission settings supports:
App authentication with administrator approval with the chat.app.spaces scope. Only populated and settable when the Chat app created the space.
User authentication
Type
Deprecated: Use SpaceType instead.
Enums
TYPE_UNSPECIFIED
Reserved.
ROOM
Conversations between two or more humans.
DM
1:1 Direct Message between a human and a Chat app, where all messages are flat. Note that this doesn't include direct messages between two humans.
SpaceType
The type of space. Required when creating or updating a space. Output only for other usage.
Enums
SPACE_TYPE_UNSPECIFIED
Reserved.
SPACE
A place where people send messages, share files, and collaborate. A SPACE can include Chat apps.
GROUP_CHAT
Group conversations between 3 or more people. A GROUP_CHAT can include Chat apps.
DIRECT_MESSAGE
1:1 messages between two humans or a human and a Chat app.
SpaceThreadingState
Specifies the type of threading state in the Chat space.
Enums
SPACE_THREADING_STATE_UNSPECIFIED
Reserved.
THREADED_MESSAGES
Named spaces that support message threads. When users respond to a message, they can reply in-thread, which keeps their response in the context of the original message.
GROUPED_MESSAGES
Named spaces where the conversation is organized by topic. Topics and their replies are grouped together.
UNTHREADED_MESSAGES
Direct messages (DMs) between two people and group conversations between 3 or more people.
SpaceDetails
Details about the space including description and rules.
JSON representation
{
"description" : string ,
"guidelines" : string
}
Fields
description
string
Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants.
Supports up to 150 characters.
guidelines
string
Optional. The space's rules, expectations, and etiquette.
Supports up to 5,000 characters.
HistoryState
The history state for messages and spaces. Specifies how long messages and conversation threads are kept after creation.
Enums
HISTORY_STATE_UNSPECIFIED
Default value. Do not use.
HISTORY_OFF
History off. Messages and threads are kept for 24 hours .
HISTORY_ON
History on. The organization's Vault retention rules specify for how long messages and threads are kept.
MembershipCount
Represents the count of memberships of a space, grouped into categories.
JSON representation
{
"joinedDirectHumanUserCount" : integer ,
"joinedGroupCount" : integer
}
Fields
joinedDirectHumanUserCount
integer
Output only. Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.
joinedGroupCount
integer
Output only. Count of all groups that have directly joined the space.
AccessSettings
Represents the access setting of the space.
JSON representation
{
"accessState" : enum ( AccessState ) ,
"audience" : string
}
Fields
accessState
enum ( AccessState )
Output only. Indicates the access state of the space.
audience
string
Optional. The resource name of the target audience who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see Make a space discoverable to a target audience .
Format: audiences/{audience}
To use the default target audience for the Google Workspace organization, set to audiences/default .
Reading the target audience supports:
User authentication
App authentication with administrator approval with the chat.app.spaces scope.
This field is not populated when using the chat.bot scope with app authentication .
Setting the target audience requires user authentication .
AccessState
Represents the access state of the space.
Enums
ACCESS_STATE_UNSPECIFIED
Access state is unknown or not supported in this API.
PRIVATE
Only users or Google Groups that have been individually added or invited by other users or Google Workspace administrators can discover and access the space.
DISCOVERABLE
A space manager has granted a target audience access to the space. Users or Google Groups that have been individually added or invited to the space can also discover and access the space. To learn more, see Make a space discoverable to specific users .
Creating discoverable spaces requires user authentication .
PredefinedPermissionSettings
Predefined permission settings that you can only specify when creating a named space. More settings might be added in the future. For details about permission settings for named spaces, see Learn about spaces .
Enums
PREDEFINED_PERMISSION_SETTINGS_UNSPECIFIED
Unspecified. Don't use.
COLLABORATION_SPACE
Setting to make the space a collaboration space where all members can post messages.
ANNOUNCEMENT_SPACE
Setting to make the space an announcement space where only space managers can post messages.
PermissionSettings
Permission settings that you can specify when updating an existing named space.
To set permission settings when creating a space, specify the PredefinedPermissionSettings field in your request.
JSON representation
{
"manageMembersAndGroups" : {
object ( PermissionSetting )
} ,
"modifySpaceDetails" : {
object ( PermissionSetting )
} ,
"toggleHistory" : {
object ( PermissionSetting )
} ,
"useAtMentionAll" : {
object ( PermissionSetting )
} ,
"manageApps" : {
object ( PermissionSetting )
} ,
"manageWebhooks" : {
object ( PermissionSetting )
} ,
"postMessages" : {
object ( PermissionSetting )
} ,
"replyMessages" : {
object ( PermissionSetting )
}
}
Fields
manageMembersAndGroups
object ( PermissionSetting )
Optional. Setting for managing members and groups in a space.
modifySpaceDetails
object ( PermissionSetting )
Optional. Setting for updating space name, avatar, description and guidelines.
toggleHistory
object ( PermissionSetting )
Optional. Setting for toggling space history on and off.
useAtMentionAll
object ( PermissionSetting )
Optional. Setting for using @all in a space.
manageApps
object ( PermissionSetting )
Optional. Setting for managing apps in a space.
manageWebhooks
object ( PermissionSetting )
Optional. Setting for managing webhooks in a space.
postMessages
object ( PermissionSetting )
Output only. Setting for posting messages in a space.
replyMessages
object ( PermissionSetting )
Optional. Setting for replying to messages in a space.
PermissionSetting
Represents a space permission setting.
JSON representation
{
"managersAllowed" : boolean ,
"membersAllowed" : boolean ,
"assistantManagersAllowed" : boolean
}
Fields
managersAllowed
boolean
Optional. Whether space owners ( ROLE_MANAGER ) have this permission.
membersAllowed
boolean
Optional. Whether basic space members ( ROLE_MEMBER ) have this permission.
assistantManagersAllowed
boolean
Optional. Whether space managers ROLE_ASSISTANT_MANAGER ) have this permission.
Methods
completeImport
Completes the import process for the specified space and makes it visible to users.
create
Creates a space.
delete
Deletes a named space.
findDirectMessage
Returns the existing direct message with the specified user.
findGroupChats
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Returns all spaces with spaceType == GROUP_CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users .
get
Returns details about a space.
list
Lists spaces the caller is a member of.
patch
Updates a space.
search
Returns a list of spaces in a Google Workspace organization based on an administrator's search.
setup
Creates a space and adds specified users to it.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Spaces in Google Chat represent conversations, defined by properties like `spaceType` (e.g., `SPACE`, `DIRECT_MESSAGE`), `displayName`, and `threaded` status. Spaces can be created, deleted, updated, searched, and listed using methods like `create`, `delete`, `patch`, `search`, and `list`. Access settings, history, and permission settings are customizable, with `predefinedPermissionSettings` offering quick setups. `completeImport` finalizes a spaces import, and `setup` creates a space with specific users. Permissions for managing apps, members, and posting are configurable.\n"]]
