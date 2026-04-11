---
title: "Google Chat API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest
  title: "Google Chat API \_|\_ Google for Developers"
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
Google Chat API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Chat API enables the development of Chat apps to integrate services with Google Chat.
It allows management of Chat resources such as spaces, members, and messages through various REST resources.
Developers can leverage client libraries or utilize the provided discovery document and service endpoint for API requests.
Features like custom emojis and space notification settings are currently in Developer Preview and may be subject to change.
The API facilitates actions like creating, reading, updating, and deleting Chat entities and provides access to user read states and space events.
The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.
REST Resource: v1.customEmojis
REST Resource: v1.media
REST Resource: v1.spaces
REST Resource: v1.spaces.members
REST Resource: v1.spaces.messages
REST Resource: v1.spaces.messages.attachments
REST Resource: v1.spaces.messages.reactions
REST Resource: v1.spaces.spaceEvents
REST Resource: v1.users.sections
REST Resource: v1.users.sections.items
REST Resource: v1.users.spaces
REST Resource: v1.users.spaces.spaceNotificationSetting
REST Resource: v1.users.spaces.threads
Service: chat.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://chat.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://chat.googleapis.com
REST Resource: v1.customEmojis
Methods
create
POST /v1/customEmojis
Creates a custom emoji.
delete
DELETE /v1/{name=customEmojis/*}
Deletes a custom emoji.
get
GET /v1/{name=customEmojis/*}
Returns details about a custom emoji.
list
GET /v1/customEmojis
Lists custom emojis visible to the authenticated user.
REST Resource: v1.media
Methods
download
GET /v1/media/{resourceName=**}
Downloads media.
upload
POST /upload/v1/{parent=spaces/*}/attachments:upload
Uploads an attachment.
REST Resource: v1.spaces
Methods
completeImport
POST /v1/{name=spaces/*}:completeImport
Completes the import process for the specified space and makes it visible to users.
create
POST /v1/spaces
Creates a space.
delete
DELETE /v1/{name=spaces/*}
Deletes a named space.
findDirectMessage
GET /v1/spaces:findDirectMessage
Returns the existing direct message with the specified user.
findGroupChats
GET /v1/spaces:findGroupChats
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Returns all spaces with spaceType == GROUP_CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users .
get
GET /v1/{name=spaces/*}
Returns details about a space.
list
GET /v1/spaces
Lists spaces the caller is a member of.
patch
PATCH /v1/{space.name=spaces/*}
Updates a space.
search
GET /v1/spaces:search
Returns a list of spaces in a Google Workspace organization based on an administrator's search.
setup
POST /v1/spaces:setup
Creates a space and adds specified users to it.
REST Resource: v1.spaces.members
Methods
create
POST /v1/{parent=spaces/*}/members
Creates a membership for the calling Chat app, a user, or a Google Group.
delete
DELETE /v1/{name=spaces/*/members/*}
Deletes a membership.
get
GET /v1/{name=spaces/*/members/*}
Returns details about a membership.
list
GET /v1/{parent=spaces/*}/members
Lists memberships in a space.
patch
PATCH /v1/{membership.name=spaces/*/members/*}
Updates a membership.
REST Resource: v1.spaces.messages
Methods
create
POST /v1/{parent=spaces/*}/messages
Creates a message in a Google Chat space.
delete
DELETE /v1/{name=spaces/*/messages/*}
Deletes a message.
get
GET /v1/{name=spaces/*/messages/*}
Returns details about a message.
list
GET /v1/{parent=spaces/*}/messages
Lists messages in a space that the caller is a member of, including messages from blocked members and spaces.
patch
PATCH /v1/{message.name=spaces/*/messages/*}
Updates a message.
replaceCards
POST /v1/{name=spaces/*/messages/*}:replaceCards
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Replaces the cards included in a message.
update
PUT /v1/{message.name=spaces/*/messages/*}
Updates a message.
REST Resource: v1.spaces.messages.attachments
Methods
get
GET /v1/{name=spaces/*/messages/*/attachments/*}
Gets the metadata of a message attachment.
REST Resource: v1.spaces.messages.reactions
Methods
create
POST /v1/{parent=spaces/*/messages/*}/reactions
Creates a reaction and adds it to a message.
delete
DELETE /v1/{name=spaces/*/messages/*/reactions/*}
Deletes a reaction to a message.
list
GET /v1/{parent=spaces/*/messages/*}/reactions
Lists reactions to a message.
REST Resource: v1.spaces.spaceEvents
Methods
get
GET /v1/{name=spaces/*/spaceEvents/*}
Returns an event from a Google Chat space.
list
GET /v1/{parent=spaces/*}/spaceEvents
Lists events from a Google Chat space.
REST Resource: v1.users.sections
Methods
create
POST /v1/{parent=users/*}/sections
Creates a section in Google Chat.
delete
DELETE /v1/{name=users/*/sections/*}
Deletes a section of type CUSTOM_SECTION .
list
GET /v1/{parent=users/*}/sections
Lists sections available to the Chat user.
patch
PATCH /v1/{section.name=users/*/sections/*}
Updates a section.
position
POST /v1/{name=users/*/sections/*}:position
Changes the sort order of a section.
REST Resource: v1.users.sections.items
Methods
list
GET /v1/{parent=users/*/sections/*}/items
Lists items in a section.
move
POST /v1/{name=users/*/sections/*/items/*}:move
Moves an item from one section to another.
REST Resource: v1.users.spaces
Methods
getSpaceReadState
GET /v1/{name=users/*/spaces/*/spaceReadState}
Returns details about a user's read state within a space, used to identify read and unread messages.
updateSpaceReadState
PATCH /v1/{spaceReadState.name=users/*/spaces/*/spaceReadState}
Updates a user's read state within a space, used to identify read and unread messages.
REST Resource: v1.users.spaces.spaceNotificationSetting
Methods
get
GET /v1/{name=users/*/spaces/*/spaceNotificationSetting}
Gets the space notification setting.
patch
PATCH /v1/{spaceNotificationSetting.name=users/*/spaces/*/spaceNotificationSetting}
Updates the space notification setting.
REST Resource: v1.users.spaces.threads
Methods
getThreadReadState
GET /v1/{name=users/*/spaces/*/threads/*/threadReadState}
Returns details about a user's read state within a thread, used to identify read and unread messages.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Chat API facilitates building Chat apps and managing resources. Key actions include creating, deleting, getting, listing, and updating spaces, members, and messages. It supports managing custom emojis, media files, message attachments, and reactions. Users can also search spaces, find direct messages, manage space import processes, and configure notification settings. Additionally, it provides methods to handle user read states within spaces and threads and list events of the spaces.\n"]]
