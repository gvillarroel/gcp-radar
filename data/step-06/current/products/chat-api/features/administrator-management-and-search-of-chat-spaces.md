---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.197Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Administrator management and search of Chat spaces"
feature_slug: "administrator-management-and-search-of-chat-spaces"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/admin-overview"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-user"
keywords:
  - "administrator"
  - "management"
  - "search"
  - "chat"
  - "spaces"
  - "workspace"
  - "administrators"
  - "can"
---

# Administrator management and search of Chat spaces

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Google Workspace administrators can manage and search Chat spaces across their organization using the Google Chat API.

## Extended Definition

Google Workspace administrators can manage and search Chat spaces across their organization using the Google Chat API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)

## Supporting Pages

### "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a Google Workspace administrator, you can perform a number of management tasks with the Chat API, such as the following: Search spaces based on specified criteria List members of a space Add members to and remove members from a space Get details about a member and a space Update or delete a space Update a user's membership How to authenticate and authorize as a Google Workspace administrator When using the Chat API for management tasks, administrators can authenticate and authorize requests by invoking administrator privileges or configuring domain-wide delegation of authority for an application's service account.
- To manage Chat spaces, Google Workspace administrators can use the Space Management Tool in the Google Admin console or call the Google Chat API.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Workspace administrators can use the Chat API to manage spaces and automate tasks.
- The following Chat API methods enable administrator privileges with useAdminAccess=true . spaces.delete spaces.get spaces.patch spaces.search spaces.members.create spaces.members.delete spaces.members.get spaces.members.list spaces.members.patch Manage users' space memberships The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator.
- Home Google Workspace Google Chat Reference Send feedback REST Resource: spaces Stay organized with collections Save and categorize content based on your preferences.
- PRIVATE Only users or Google Groups that have been individually added or invited by other users or Google Workspace administrators can discover and access the space.

### Authenticate and authorize as a Google Chat user \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticate and authorize as a Google Workspace administrator This section explains how Google Workspace workspace administrators can manage Google Chat apps and spaces across their organization with user authentication.
- Workspace administrators have control over app and space management through domain-wide delegation or administrator privileges.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Chat apps utilize OAuth 2.0 for user authentication, enabling actions like creating spaces, adding users, and accessing other Workspace APIs.
- Python 3.6 or greater The pip package management tool Node.js A Business or Enterprise Google Workspace account with access to Google Chat .

