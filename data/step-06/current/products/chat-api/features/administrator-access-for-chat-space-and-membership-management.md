---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.208Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Administrator access for Chat space and membership management"
feature_slug: "administrator-access-for-chat-space-and-membership-management"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/admin-overview"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-user"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
keywords:
  - "administrator"
  - "access"
  - "chat"
  - "space"
  - "membership"
  - "management"
  - "domain"
  - "delegated"
---

# Administrator access for Chat space and membership management

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Domain and delegated administrators can use the useAdminAccess parameter with additional Chat API methods to manage spaces and memberships with administrator privileges; Domain and delegated administrators can use the useAdminAccess parameter with Chat API methods to search, delete, and manage spaces and memberships with administrator privileges.

## Extended Definition

Domain and delegated administrators can use the useAdminAccess parameter with additional Chat API methods to manage spaces and memberships with administrator privileges; Domain and delegated administrators can use the useAdminAccess parameter with Chat API methods to search, delete, and manage spaces and memberships with administrator privileges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)

## Supporting Pages

### "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a Google Workspace administrator, you can perform a number of management tasks with the Chat API, such as the following: Search spaces based on specified criteria List members of a space Add members to and remove members from a space Get details about a member and a space Update or delete a space Update a user's membership How to authenticate and authorize as a Google Workspace administrator When using the Chat API for management tasks, administrators can authenticate and authorize requests by invoking administrator privileges or configuring domain-wide delegation of authority for an application's service account.
- The following Chat API methods enable administrator privileges with useAdminAccess=true . spaces.delete spaces.get spaces.patch spaces.search spaces.members.create spaces.members.delete spaces.members.get spaces.members.list spaces.members.patch Manage users' space memberships The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.
- User authentication Who calls the API method What users see in Chat Administrator privileges Administrator with useAdminAccess=true "The organization's administrator performed [an action]." For example, "The organization's administrator changed Kiran B to space manager." It does not identify the administrator user's name or user ID or the name of the Chat app.
- To manage Chat spaces, Google Workspace administrators can use the Space Management Tool in the Google Admin console or call the Google Chat API.

### Authenticate and authorize as a Google Chat user \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticate and authorize using administrator privileges If you're a domain administrator or a delegated administrator with administrator privileges , you can authenticate and authorize your calls to the Google Chat API with administrator privileges by setting the useAdminAccess field in the requests of applicable methods.
- Python 3.6 or greater The pip package management tool Node.js A Business or Enterprise Google Workspace account with access to Google Chat .
- Workspace administrators have control over app and space management through domain-wide delegation or administrator privileges.
- Administrators can also authenticate for domain-wide access or app management.

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Resource: Space JSON representation Type SpaceType SpaceThreadingState SpaceDetails JSON representation HistoryState MembershipCount JSON representation AccessSettings JSON representation AccessState PredefinedPermissionSettings PermissionSettings JSON representation PermissionSetting JSON representation Methods Resource: Space A space in Google Chat.
- JSON representation { "name" : string , "type" : enum ( Type ) , "spaceType" : enum ( SpaceType ) , "singleUserBotDm" : boolean , "threaded" : boolean , "displayName" : string , "externalUserAllowed" : boolean , "spaceThreadingState" : enum ( SpaceThreadingState ) , "spaceDetails" : { object ( SpaceDetails ) } , "spaceHistoryState" : enum ( HistoryState ) , "importMode" : boolean , "createTime" : string , "lastActiveTime" : string , "adminInstalled" : boolean , "membershipCount" : { object ( MembershipCount ) } , "accessSettings" : { object ( AccessSettings ) } , "spaceUri" : string , "importModeExpireTime" : string , "customer" : string , "predefinedPermissionSettings" : enum ( PredefinedPermissionSettings ) , "permissionSettings" : { object ( PermissionSettings ) } } Fields name string Identifier.
- Methods completeImport Completes the import process for the specified space and makes it visible to users. create Creates a space. delete Deletes a named space. findDirectMessage Returns the existing direct message with the specified user. findGroupChats Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.

