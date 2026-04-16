---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.209Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "User read states API"
feature_slug: "user-read-states-api"
latest_feature_date: "2024-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api-overview"
  - "https://developers.google.com/workspace/chat/overview"
  - "https://developers.google.com/workspace/chat/api/reference/rest"
keywords:
  - "user"
  - "read"
  - "states"
  - "chat"
  - "can"
  - "get"
  - "update"
  - "state"
---

# User read states API

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can get and update a user's read state in a space and retrieve a user's read state for a message thread.

## Extended Definition

The Chat API can get and update a user's read state in a space and retrieve a user's read state for a message thread.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api-overview](https://developers.google.com/workspace/chat/api-overview)
- [https://developers.google.com/workspace/chat/overview](https://developers.google.com/workspace/chat/overview)
- [https://developers.google.com/workspace/chat/api/reference/rest](https://developers.google.com/workspace/chat/api/reference/rest)

## Supporting Pages

### Develop with Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/overview](https://developers.google.com/workspace/chat/overview)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource reference: RPC reference REST reference For example usage, see: Get space read state Update space read state Get thread read state User read states User read states are singleton resources that represent details about a specified user's last read message in a Google Chat space or a message thread.
- Space read state resource reference: RPC reference REST reference Thread read state resource reference: RPC reference REST reference For example usage, see: Get space read state Update space read state Get thread read state User space notification settings User space notification settings are singleton resources that represent a specified user notification settings in a Google Chat space.
- Google Chat API overview The Chat API consists of gRPC services or REST resources and methods that grant access to Chat, including spaces, space members, messages, message reactions, message attachments, space events, and user read states.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Chat apps integrate services directly into conversations, allowing users to access information and perform actions without leaving the chat.

### Develop with Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api-overview](https://developers.google.com/workspace/chat/api-overview)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource reference: RPC reference REST reference For example usage, see: Get space read state Update space read state Get thread read state User read states User read states are singleton resources that represent details about a specified user's last read message in a Google Chat space or a message thread.
- Space read state resource reference: RPC reference REST reference Thread read state resource reference: RPC reference REST reference For example usage, see: Get space read state Update space read state Get thread read state User space notification settings User space notification settings are singleton resources that represent a specified user notification settings in a Google Chat space.
- Google Chat API overview The Chat API consists of gRPC services or REST resources and methods that grant access to Chat, including spaces, space members, messages, message reactions, message attachments, space events, and user read states.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Chat apps integrate services directly into conversations, allowing users to access information and perform actions without leaving the chat.

### Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest](https://developers.google.com/workspace/chat/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API facilitates actions like creating, reading, updating, and deleting Chat entities and provides access to user read states and space events.
- REST Resource: v1.users.spaces Methods getSpaceReadState GET /v1/{name=users/ /spaces/ /spaceReadState} Returns details about a user's read state within a space, used to identify read and unread messages. updateSpaceReadState PATCH /v1/{spaceReadState.name=users/ /spaces/ /spaceReadState} Updates a user's read state within a space, used to identify read and unread messages.
- Additionally, it provides methods to handle user read states within spaces and threads and list events of the spaces.\n"]]
- REST Resource: v1.customEmojis REST Resource: v1.media REST Resource: v1.spaces REST Resource: v1.spaces.members REST Resource: v1.spaces.messages REST Resource: v1.spaces.messages.attachments REST Resource: v1.spaces.messages.reactions REST Resource: v1.spaces.spaceEvents REST Resource: v1.users.sections REST Resource: v1.users.sections.items REST Resource: v1.users.spaces REST Resource: v1.users.spaces.spaceNotificationSetting REST Resource: v1.users.spaces.threads Service: chat.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

