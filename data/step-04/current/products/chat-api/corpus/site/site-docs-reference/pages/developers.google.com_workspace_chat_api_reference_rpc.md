---
title: "Google Chat API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rpc
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rpc
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
The Google Chat API enables the development of Chat apps that integrate with Google Chat.
It allows for managing Chat resources like spaces, members, and messages.
Developers utilize the service name chat.googleapis.com when creating RPC client stubs.
The API provides a range of methods to interact with various aspects of Google Chat, such as creating messages, managing spaces, and handling memberships.
Some features, like custom emojis and space notification settings, are available through the Google Workspace Developer Preview Program.
The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.
Service: chat.googleapis.com
The Service name chat.googleapis.com is needed to create RPC client stubs.
google.chat.v1.ChatService
Methods
CompleteImportSpace
Completes the import process for the specified space and makes it visible to users.
CreateCustomEmoji
Creates a custom emoji.
CreateMembership
Creates a membership for the calling Chat app, a user, or a Google Group.
CreateMessage
Creates a message in a Google Chat space.
CreateReaction
Creates a reaction and adds it to a message.
CreateSection
Creates a section in Google Chat.
CreateSpace
Creates a space.
DeleteCustomEmoji
Deletes a custom emoji.
DeleteMembership
Deletes a membership.
DeleteMessage
Deletes a message.
DeleteReaction
Deletes a reaction to a message.
DeleteSection
Deletes a section of type CUSTOM_SECTION .
DeleteSpace
Deletes a named space.
FindDirectMessage
Returns the existing direct message with the specified user.
FindGroupChats
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Returns all spaces with spaceType == GROUP_CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users .
GetAttachment
Gets the metadata of a message attachment.
GetCustomEmoji
Returns details about a custom emoji.
GetMembership
Returns details about a membership.
GetMessage
Returns details about a message.
GetSpace
Returns details about a space.
GetSpaceEvent
Returns an event from a Google Chat space.
GetSpaceNotificationSetting
Gets the space notification setting.
GetSpaceReadState
Returns details about a user's read state within a space, used to identify read and unread messages.
GetThreadReadState
Returns details about a user's read state within a thread, used to identify read and unread messages.
ListCustomEmojis
Lists custom emojis visible to the authenticated user.
ListMemberships
Lists memberships in a space.
ListMessages
Lists messages in a space that the caller is a member of, including messages from blocked members and spaces.
ListReactions
Lists reactions to a message.
ListSectionItems
Lists items in a section.
ListSections
Lists sections available to the Chat user.
ListSpaceEvents
Lists events from a Google Chat space.
ListSpaces
Lists spaces the caller is a member of.
MoveSectionItem
Moves an item from one section to another.
PositionSection
Changes the sort order of a section.
ReplaceMessageCards
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Replaces the cards included in a message.
SearchSpaces
Returns a list of spaces in a Google Workspace organization based on an administrator's search.
SetUpSpace
Creates a space and adds specified users to it.
UpdateMembership
Updates a membership.
UpdateMessage
Updates a message.
UpdateSection
Updates a section.
UpdateSpace
Updates a space.
UpdateSpaceNotificationSetting
Updates the space notification setting.
UpdateSpaceReadState
Updates a user's read state within a space, used to identify read and unread messages.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Chat API, accessible via `chat.googleapis.com`, enables developers to manage Chat resources. Key actions include creating, deleting, and updating spaces, memberships, messages, and reactions. Developers can also list and retrieve information about these resources, including attachments, custom emojis, and read states. Specific actions for importing spaces and managing space notifications, as well as some custom emoji features, are available as part of a developer preview program.\n"]]
