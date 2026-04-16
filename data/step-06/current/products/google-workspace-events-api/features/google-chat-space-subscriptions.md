---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:23.876Z"
product_name: "Google Workspace Events API"
product_slug: "google-workspace-events-api"
feature_name: "Google Chat space subscriptions"
feature_slug: "google-chat-space-subscriptions"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/events/guides/events-chat"
  - "https://developers.google.com/workspace/events"
  - "https://developers.google.com/workspace/events/guides/auth"
  - "https://developers.google.com/workspace/events/guides/list-subscriptions"
keywords:
  - "chat"
  - "space"
  - "subscriptions"
  - "to"
  - "spaces"
  - "reaction"
  - "change"
  - "events"
---

# Google Chat space subscriptions

Product: Google Workspace Events API
Coverage: MEDIUM

## Step 02 Summary

Subscriptions to Google Chat spaces support reaction change events.

## Extended Definition

Subscriptions to Google Chat spaces support reaction change events.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/events/guides/events-chat](https://developers.google.com/workspace/events/guides/events-chat)
- [https://developers.google.com/workspace/events](https://developers.google.com/workspace/events)
- [https://developers.google.com/workspace/events/guides/auth](https://developers.google.com/workspace/events/guides/auth)
- [https://developers.google.com/workspace/events/guides/list-subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions)

## Supporting Pages

### "Subscribe to Google Chat events \_|\_ Google Workspace \_|\_ Google for\

- URL: [https://developers.google.com/workspace/events/guides/events-chat](https://developers.google.com/workspace/events/guides/events-chat)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each event that the subscription receives, the payload appears in the data field of the event: Example Event type JSON payload A user posts a message in the space that says "Hello world." google.workspace.chat.message.v1.created Includes resource data: { "message": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID ", "sender": { "name": "users/ USER ID ", "type": "HUMAN" }, "createTime": "2023-09-07T21:37:36.260127Z", "text": "Hello world", "thread": { "name": "spaces/ SPACE ID /threads/ THREAD ID " }, "space": { "name": "spaces/ SPACE ID " }, "argumentText": "Hello world" } } Excludes resource data: { "message": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID " } } A user becomes a space manager. google.workspace.chat.membership.v1.updated Includes resource data: { "membership": { "name": "spaces/ SPACE ID /members/ MEMBER ID ", "state": "JOINED", "member": { "name": "users/ USER ID ", "type": "HUMAN" }, "createTime": "1970-01-01T00:00:00Z", "role": "ROLE MANAGER" } } Excludes resource data: { "membership": { "name": "spaces/ SPACE ID /members/ MEMBER ID " } } A user updates the description of the space to "Sales team for Cymbal Labs." google.workspace.chat.space.v1.updated Includes resource data: { "space": { "name": "spaces/ SPACE ID ", "displayName": "Cymbal Sales", "spaceThreadingState": "THREADED MESSAGES", "spaceType": "SPACE", "spaceDetails": { "description": "Sales team for Cymbal Labs." }, "spaceHistoryState": "HISTORY ON" } } Excludes resource data: { "space": { "name": "spaces/ SPACE ID " } } Two Chat users were added to the space at the same time. google.workspace.chat.membership.v1.batchCreated Includes resource data: { "memberships": [ { "membership": { "name": "spaces/ SPACE ID /members/ MEMBER ID ", "state": "JOINED", "member": { "name": "users/ USER ID ", "type": "HUMAN" }, "createTime": "1970-01-01T00:00:00Z", "role": "ROLE MEMBER" } }, { "membership": { "name": "spaces/ SPACE ID /members/ MEMBER ID ", "state": "JOINED", "member": { "name": "users/ USER ID ", "type": "HUMAN" }, "createTime": "1970-01-01T00:00:00Z", "role": "ROLE MEMBER" } } ] } Excludes resource data: { "memberships": [ { "membership": { "name": "spaces/ SPACE ID /members/ MEMBER ID " } }, { "membership": { "name": "spaces/ SPACE ID /members/ MEMBER ID " } } ] } A user reacts to a message with the 😊 emoji. google.workspace.chat.reaction.v1.created Includes resource data: { "reaction": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID /reactions/ REACTION ID ", "user": { "name": "users/ USER ID ", "type": "HUMAN" }, "emoji": { "unicode": "😊" } } } Excludes resource data: { "reaction": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID /reactions/ REACTION ID " } } Users react to a message with the 😊 emoji and 😸 emoji. google.workspace.chat.reaction.v1.batchCreated Includes resource data: { "reactions": [ { "reaction": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID /reactions/ REACTION ID ", "user": { "name": "users/ USER ID ", "type": "HUMAN" }, "emoji": { "unicode": "😊" } } }, { "reaction": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID /reactions/ REACTION ID ", "user": { "name": "users/ USER ID ", "type": "HUMAN" }, "emoji": { "unicode": "😸" } } } ] } Excludes resource data: { "reactions": [ { "reaction": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID /reactions/ REACTION ID " }, "reaction": { "name": "spaces/ SPACE ID /messages/ MESSAGE ID /reactions/ REACTION ID ", } } ] } Limitations For subscriptions to users, events about new members in direct messages or unnamed group chats ( google.workspace.chat.membership.v1.created ), only trigger after the first message is posted.
- The following table displays the possible batch events for a subscription: Batch event type Format Multiple messages are posted. google.workspace.chat.message.v1.batchCreated Multiple messages are updated. google.workspace.chat.message.v1.batchUpdated Multiple messages are deleted. google.workspace.chat.message.v1.batchDeleted Multiple reactions are created. google.workspace.chat.reaction.v1.batchCreated Multiple reactions are deleted. google.workspace.chat.reaction.v1.batchDeleted Multiple members are added to the subscribed space, or the subscribed user has been added to multiple spaces. google.workspace.chat.membership.v1.batchCreated Multiple memberships are updated in the subscribed space, or for the subscribed user. google.workspace.chat.membership.v1.batchUpdated Multiple members are removed from the subscribed space, or the subscribed user has been removed from multiple spaces. google.workspace.chat.membership.v1.batchDeleted The space has multiple updates. google.workspace.chat.space.v1.batchUpdated Event data This section describes event data and example payloads for events in Chat.
- Event type Format Resource data Subscriptions to spaces A message is posted. google.workspace.chat.message.v1.created space.message A message is updated. google.workspace.chat.message.v1.updated space.message A message is deleted. google.workspace.chat.message.v1.deleted space.message A reaction is created. google.workspace.chat.reaction.v1.created space.message.reaction A reaction is deleted. google.workspace.chat.reaction.v1.deleted space.message.reaction A member is added to the space. google.workspace.chat.membership.v1.created space.membership A member is updated in the space. google.workspace.chat.membership.v1.updated space.membership A member is removed from the space. google.workspace.chat.membership.v1.deleted space.membership The space is updated. google.workspace.chat.space.v1.updated space The space is deleted. google.workspace.chat.space.v1.deleted space Subscriptions to users The user becomes a member of a space.
- Page Summary outlined flag Google Chat apps can subscribe to events like new messages, reactions, membership changes, and space updates using the Google Workspace Events API.

### "Subscribe to events using the Google Workspace Events API \_|\_ Google for\

- URL: [https://developers.google.com/workspace/events](https://developers.google.com/workspace/events)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Target resource Supported events Chat spaces Messages Memberships Reactions Space Chat users Memberships Google Drive files or shared drive files Access proposals Approvals Comments Files Replies Google Meet meeting spaces and users Conferences Participant sessions Recordings Smart notes science Developer Preview Transcripts To learn more, see the following guides: Subscribe to Chat events Subscribe to Drive events Subscribe to Meet events Structure of Google Workspace events Google Workspace events follow the CloudEvents specification , which is an industry-standard way of describing event data.
- Supported Google Workspace events include changes to Chat spaces, messages, memberships, Meet conferences, recordings, and more, offering flexibility in monitoring specific resource activities.
- The following example shows a Google Cloud Pub/Sub message that contains an event about an updated message in a Chat space: { "message" : { "attributes" : { "ce-datacontenttype" : "application/json" , "ce-id" : "spaces/ SPACE ID /spaceEvents/ SPACE EVENT ID " , "ce-source" : "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID " , "ce-specversion" : "1.0" , "ce-subject" : "//chat.googleapis.com/spaces/ SPACE ID " , "ce-time" : "2023-09-07T21:37:53.274191Z" , "ce-type" : "google.workspace.chat.message.v1.updated" }, "data" : " EVENT DATA " , "messageId" : " PUBSUB MESSAGE ID " , "orderingKey" : "//workspaceevents.googleapis.com/subscriptions/ SUBSCRIPTION ID " , "publishTime" : "2023-09-07T21:37:53.713Z" } } This example contains the following fields: attributes : Attributes for the CloudEvent , which include the event type.
- Events are formatted using the CloudEvents specification, and can be either a subscription event or a lifecycle event : Subscription event A change to the Google Workspace resource that you're monitoring, such as a new message in a Chat space.

### Choose Google Workspace Events API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/events/guides/auth](https://developers.google.com/workspace/events/guides/auth)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table displays which authorization scopes are supported for each event type: Events Event types Authorization scopes supported Chat A message is posted or updated. google.workspace.chat.message.v1.created google.workspace.chat.message.v1.updated With User authentication : chat.messages chat.messages.readonly With App authentication and administrator approval : chat.app.messages.readonly A reaction is added or deleted, or multiple reactions are changed. google.workspace.chat.reaction.v1.created google.workspace.chat.reaction.v1.deleted google.workspace.chat.reaction.v1.batchChanged chat.messages.reactions chat.messages.reactions.readonly chat.messages chat.messages.readonly A membership is created, updated, or removed, or multiple memberships are changed. google.workspace.chat.membership.v1.created google.workspace.chat.membership.v1.updated google.workspace.chat.membership.v1.deleted google.workspace.chat.membership.v1.batchChanged With User authentication : chat.memberships chat.memberships.readonly With App authentication and administrator approval : chat.app.memberships chat.app.memberships.readonly A space is updated or deleted. google.workspace.chat.space.v1.updated google.workspace.chat.space.v1.deleted With User authentication : chat.spaces chat.spaces.readonly With App authentication and administrator approval : chat.app.spaces chat.app.spaces.readonly Drive A file is created, changed, moved, deleted, renamed, trashed, or removed from the trash. google.workspace.drive.file.v3.added google.workspace.drive.file.v3.moved google.workspace.drive.file.v3.contentChanged google.workspace.drive.file.v3.deleted google.workspace.drive.file.v3.renamed google.workspace.drive.file.v3.trashed google.workspace.drive.file.v3.untrashed drive drive.file drive.readonly drive.metadata An Access Proposal is created or resolved on a file. google.workspace.drive.accessProposal.v3.created google.workspace.drive.accessProposal.v3.resolved drive drive.file drive.readonly drive.metadata drive.metadata drive.metadata.readonly An Approval is cancelled, completed, created, reset, reviewers changed, or reviewers responded on a file. google.workspace.drive.approval.v3.cancelled google.workspace.drive.approval.v3.completed google.workspace.drive.approval.v3.created google.workspace.drive.approval.v3.reset google.workspace.drive.approval.v3.reviewersChanged google.workspace.drive.approval.v3.reviewerResponded drive drive.file drive.readonly drive.metadata drive.metadata drive.metadata.readonly A Comment is created, deleted, edited, reopened, or resolved on a file. google.workspace.drive.comment.v3.created google.workspace.drive.comment.v3.deleted google.workspace.drive.comment.v3.edited google.workspace.drive.comment.v3.reopened google.workspace.drive.comment.v3.resolved drive drive.file drive.readonly drive.metadata drive.metadata drive.metadata.readonly A Reply is created, deleted, or edited on a file. google.workspace.drive.reply.v3.created google.workspace.drive.reply.v3.deleted google.workspace.drive.reply.v3.edited drive drive.file drive.readonly drive.metadata drive.metadata drive.metadata.readonly A Permission is created, deleted, or edited on a file. google.workspace.drive.permission.v3.created google.workspace.drive.permission.v3.deleted google.workspace.drive.permission.v3.edited drive drive.file drive.readonly drive.metadata drive.metadata drive.metadata.readonly Meet A conference starts or ends. google.workspace.meet.conference.v2.started google.workspace.meet.conference.v2.ended meetings.space.created meetings.space.readonly A participant joins or leaves a conference. google.workspace.meet.participant.v2.joined google.workspace.meet.participant.v2.left meetings.space.created meetings.space.readonly A recording was generated. google.workspace.meet.recording.v2.fileGenerated meetings.space.created meetings.space.readonly A transcript was generated. google.workspace.meet.transcript.v2.fileGenerated meetings.space.created meetings.space.readonly Related topics Authentication overview for Chat Authentication overview for Drive Authentication overview for Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table displays which scopes and types of authentication are required or supported for each Google Workspace Events API method: Method User authentication required or supported App authentication supported (Chat apps only) Authorization scopes supported Create a subscription check — With user authentication, requires a supported scope for each event type : chat.messages chat.messages.readonly chat.messages.reactions chat.messages.reactions.readonly chat.memberships chat.memberships.readonly chat.spaces chat.spaces.readonly drive.file drive drive.readonly drive.metadata drive.metadata.readonly meetings.space.created meetings.space.readonly Developer Preview : With app authentication and administrator approval (Google Chat apps only), requires a supported scope for each event type : chat.app.memberships chat.app.memberships.readonly chat.app.spaces chat.app.spaces.readonly chat.app.messages.readonly Get a subscription check check With user authentication, this method requires a scope that supports at least one event type for the subscription.
- With app authentication (Chat apps only): chat.bot Update a subscription check — With user authentication, requires a supported scope for each event type : chat.messages chat.messages.readonly chat.messages.reactions chat.messages.reactions.readonly chat.memberships chat.memberships.readonly chat.spaces chat.spaces.readonly drive.file drive drive.readonly drive.metadata drive.metadata.readonly meetings.space.created meetings.space.readonly Developer Preview : With app authentication and administrator approval (Google Chat apps only), requires a supported scope for each event type : chat.app.memberships chat.app.memberships.readonly chat.app.spaces chat.app.spaces.readonly chat.app.messages.readonly Reactivate a subscription check — With user authentication, requires a supported scope for each event type : chat.messages chat.messages.readonly chat.messages.reactions chat.messages.reactions.readonly chat.memberships chat.memberships.readonly chat.spaces chat.spaces.readonly drive.file drive drive.readonly drive.metadata drive.metadata.readonly meetings.space.created meetings.space.readonly With app authentication and administrator approval (Chat apps only), requires a supported scope for each event type : chat.app.memberships chat.app.memberships.readonly chat.app.spaces chat.app.spaces.readonly chat.app.messages.readonly Delete a subscription check check With user authentication, this method requires a scope that supports at least one event type for the subscription.
- Available scopes for Google Chat and Google Meet events allow actions like viewing, creating, and deleting messages, reactions, memberships, spaces, and managing meeting spaces.

### List Google Workspace subscriptions \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/events/guides/list-subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to filter by subscriptions for a Chat space, use //chat.googleapis.com/spaces/ SPACE ID where spaces/ SPACE ID represents the name field for the Space resource.
- For example, to filter by subscriptions for a Chat space, use //chat.googleapis.com/spaces/ SPACE ID where spaces/ SPACE ID represents the name field for the Space resource.
- For example, to filter for subscriptions that receive events about new memberships to a Chat space, google.workspace.chat.message.v1.created .
- For example, to filter for subscriptions that receive events about new memberships to a Chat space, google.workspace.chat.message.v1.created .

