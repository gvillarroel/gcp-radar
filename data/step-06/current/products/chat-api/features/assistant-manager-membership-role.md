---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.172Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Assistant manager membership role"
feature_slug: "assistant-manager-membership-role"
latest_feature_date: "2025-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members"
  - "https://developers.google.com/workspace/chat/admin-overview"
keywords:
  - "assistant"
  - "manager"
  - "membership"
  - "role"
  - "chat"
  - "spaces"
  - "help"
  - "owners"
---

# Assistant manager membership role

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat spaces support a new assistant manager membership role to help owners administer spaces.

## Extended Definition

Chat spaces support a new assistant manager membership role to help owners administer spaces.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)
- [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)

## Supporting Pages

### REST Resource: spaces.members \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Membership resource defines relationships within Google Chat spaces, indicating if a user or app is invited, present, or absent.
- Resource: Membership JSON representation MembershipState MembershipRole Group JSON representation Methods Resource: Membership Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
- Page Summary outlined flag Membership resource represents the relationship between a user, Chat app, or Google Group with a space, detailing their involvement status and role.
- MembershipRole Represents a user's permitted actions in a Chat space.

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Whether basic space members ( ROLE MEMBER ) have this permission. assistantManagersAllowed boolean Optional.
- Whether space owners ( ROLE MANAGER ) have this permission. membersAllowed boolean Optional.
- Whether space managers ROLE ASSISTANT MANAGER ) have this permission.

### "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Promote users to space manager Using spaces.members.patch , admins can change a member's role by updating their MembershipRole between the following options: ROLE MEMBER : A member of the space.
- Find managers of a space Using spaces.members.list , admins can retrieve a list of members for a space that is filtered to MembershipState=ROLE MANAGER .
- As a Google Workspace administrator, you can perform a number of management tasks with the Chat API, such as the following: Search spaces based on specified criteria List members of a space Add members to and remove members from a space Get details about a member and a space Update or delete a space Update a user's membership How to authenticate and authorize as a Google Workspace administrator When using the Chat API for management tasks, administrators can authenticate and authorize requests by invoking administrator privileges or configuring domain-wide delegation of authority for an application's service account.
- The following Chat API methods enable administrator privileges with useAdminAccess=true . spaces.delete spaces.get spaces.patch spaces.search spaces.members.create spaces.members.delete spaces.members.get spaces.members.list spaces.members.patch Manage users' space memberships The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.

