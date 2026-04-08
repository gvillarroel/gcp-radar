# Chat API

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 83
Unique features: 90

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-01 | Chat API custom sections and personalized views |  | Chat API now supports creating, listing, updating, ordering, and organizing conversation content into personalized custom sections. |
| 2026-03-31 | Chat API methods with app authentication and administrator approval |  | Chat APIs now allow app-authenticated calls with administrator approval for key message and space-event read methods such as getting and listing messages and space events. |
| 2026-03-31 | Workspace Events API subscription methods with app authentication and administrator approval |  | Chat apps can now use app authentication with administrator approval to manage Chat space event subscriptions through Workspace Events API operations such as subscribe, renew, and reactivate. |
| 2026-03-10 | User-authenticated card message creation and asynchronous card updates |  | Chat apps can create card-based messages on behalf of users and asynchronously update those cards without additional user interaction. |
| 2026-02-09 | App-authenticated user mentions for non-members and import-mode spaces |  | Chat apps using app authentication can mention users not yet in a space or belonging to spaces in import mode when sending messages. |
| 2026-02-03 | Chat apps as Google Workspace add-ons with Cloud Pub/Sub message delivery |  | Developers can build Chat apps as Google Workspace add-ons that receive messages through Cloud Pub/Sub, improving deployment for apps behind firewalls. |
| 2026-01-14 | Conversion of interactive Chat apps to Google Workspace add-ons |  | Interactive event-driven Google Chat apps can be converted into Google Workspace add-ons to extend Chat within the Workspace add-ons framework. |
| 2025-12-14 | Dynamic card dropdown autocomplete in Chat apps |  | Chat apps can dynamically populate dropdown menu items from Google Workspace or external data sources with autocomplete behavior. |
| 2025-12-11 | Chat API custom sections and section item management |  | Chat API now exposes section and section-item RPC/REST operations to create, list, update, move, and position custom conversation sections and their items. |
| 2025-10-30 | FindGroupChats Chat API method |  | Chat apps can use the FindGroupChats capability to discover existing group conversations containing specified members. |
| 2025-10-22 | Chat space membership role model update with assistant manager role |  | Chat spaces now introduce ROLE_ASSISTANT_MANAGER in the membership role model and map manager/owner role naming in the UI while keeping API enum semantics consistent. |
| 2025-09-18 | Chat API methods with app authentication and admin approval using chat.app.* scopes |  | Chat APIs now permit app-authenticated access with administrator approval for getting and listing space events via chat.app.* authorization scopes. |
| 2025-09-18 | Workspace Events API subscription methods with app authentication and chat.app.* scopes |  | Chat apps can use chat.app.* authorization scopes with administrator approval to subscribe, renew, and reactivate Chat space event notifications in the Workspace Events API. |
| 2025-09-12 | Chat API per-space write quotas for messages and reactions |  | Chat API per-space quota limits for writing messages and reactions were increased, with `spaces.messages.create` raised to 600 per minute and `spaces.messages.reactions.create` raised to 300 per minute. |
| 2025-09-10 | Chat app carousel card layout |  | Chat apps can now use a carousel layout that displays a sliding sequence of cards with navigation controls. |
| 2025-08-18 | Admin-approved app authentication for message retrieval |  | Chat API message read methods now support app authentication with administrator approval using the `chat.app.messages.readonly` scope. |
| 2025-08-12 | Message quoting support |  | Chat API now supports creating messages with quoted content and updating messages to remove quotes. |
| 2025-07-25 | Chat app authentication scopes for space and membership management |  | Chat API methods for creating, updating, deleting, and viewing spaces and managing memberships now support Chat app authentication via `chat.app.*` scopes. |
| 2025-07-25 | Chat space permission settings APIs for app authentication |  | Chat apps can create, update, and retrieve space permission settings via Chat API using app authentication scopes for spaces. |
| 2025-07-22 | RichLinkMetadata for chip annotation details |  | Message annotations now expose metadata for Meet, Huddle, and Calendar chips through the `RichLinkMetadata` object. |
| 2025-07-09 | Google Chat apps as Google Workspace add-ons |  | Developers can now build Google Chat apps that run as Google Workspace add-ons. |
| 2025-06-10 | Markdown formatting in Chat apps |  | Chat apps can now format message text with Markdown, including support for lists and code blocks. |
| 2025-03-07 | Chat space notification settings API |  | Chat API now supports retrieving and updating a user's notification settings for a Chat space; Adds Chat API methods to get and update a user's space notification settings. |
| 2025-03-05 | Quick commands for Google Chat apps |  | Chat apps can now respond to quick commands selected by users from the message reply area in a Chat space. |
| 2025-03-03 | Mention users outside joined spaces in messages |  | Chat API now supports mentioning users who are not in a space or are in an import-mode space when sending messages with user authentication. |
| 2024-12-18 | Chat quick commands |  | Quick commands allow users to invoke and interact with a Google Chat app without typing a slash command. |
| 2024-12-16 | Chat app announcement space creation |  | Chat apps can create announcement spaces in Chat API using app authentication. |
| 2024-12-16 | Chat app space permission settings API |  | Chat apps can now create, update, and retrieve space permission settings through Chat API methods using app authentication. |
| 2024-12-16 | Chat carousel widget layout |  | Introduces a carousel layout that can display a rotating sequence of cards with previous/next navigation. |
| 2024-11-05 | Chat import-mode group chat creation |  | Adds support for creating group chats in import mode via the spaces.create method for migration scenarios. |
| 2024-11-04 | Read-only custom emoji scope |  | Introduces the chat.customemojis.readonly OAuth scope for read-only retrieval and listing of custom emoji. |
| 2024-10-24 | Chat card chip widget |  | Adds the Chip widget for use in Chat card messages, homepages, and dialogs. |
| 2024-10-24 | Chat card collapsible section control button |  | Adds customizable control buttons for collapsible sections within Chat card-based UI surfaces. |
| 2024-10-24 | Chat card collapsible text paragraph widget |  | Adds the Collapsible Text paragraph widget for interactive Chat card-based interfaces. |
| 2024-10-24 | Chat card material buttons widget |  | Adds Material Buttons as a supported widget in Chat card messages, homepages, and dialogs. |
| 2024-10-24 | Chat card overflow menu widget |  | Adds the Overflow Menu widget for use in Chat card messages, homepages, and dialogs. |
| 2024-10-10 | Chat API custom emoji management |  | Enables Chat API create, delete, get, and list operations for custom emoji when organization-level custom emoji is enabled. |
| 2024-10-02 | Chat announcement space API creation |  | Provides generally available support in Chat API for creating announcement spaces. |
| 2024-10-02 | Space permission settings read/update API |  | Provides generally available APIs to read and update permission settings for Chat spaces. |
| 2024-09-30 | Chat API app authentication with chat.app.* scopes |  | Adds support for using chat.app.* OAuth scopes for Chat API space and membership operations across create, update, delete, get, invite, and remove flows. |
| 2024-09-11 | chatSpaceLinkData rich link support |  | Adds chatSpaceLinkData to spaces.messages rich link metadata to embed smart chips that link to Chat spaces. |
| 2024-09-11 | Workspace admin Chat space management APIs |  | Allows Google Workspace administrators to manage and search Chat spaces at scale, including membership and space lifecycle operations. |
| 2024-09-10 | Group chat creation in import mode |  | The Chat API now allows creating Google Chat group spaces in import mode via the spaces.create method. |
| 2024-08-07 | Chat card widget: Chip |  | Chat cards now support the Chip widget for building card-based user interfaces. |
| 2024-08-07 | Chat card widget: Collapsible Section control button |  | Chat cards now support a customizable control button for collapsible sections. |
| 2024-08-07 | Chat card widget: Collapsible Text Paragraph |  | Chat cards now support a Collapsible Text Paragraph widget for card-based user interfaces. |
| 2024-08-07 | Chat card widget: Material Button |  | Chat cards now support Material Button widgets for card-based user interfaces. |
| 2024-08-07 | Chat card widget: Overflow Menu |  | Chat cards now support the Overflow Menu widget for card-based user interfaces. |
| 2024-07-08 | Allowing external users to join Chat spaces |  | Imported Chat spaces can now allow external users to join the space using the externalUserAllowed setting. |
| 2024-07-08 | Chat app request authentication with ID tokens |  | Chat apps on Google Cloud Functions, Cloud Run, or App URLs can authenticate requests using Chat-issued ID tokens. |
| 2024-07-08 | Importing Chat spaces from other messaging platforms |  | Developers can import a Chat space from another messaging platform into Google Chat. |
| 2024-07-03 | Workspace-restricted space discoverability |  | Chat spaces can be made discoverable to specific Google Workspace users via space accessSettings and exposed with spaceUri. |
| 2024-06-28 | Dialogflow CX chat app dialogs in cards |  | Dialogflow CX Chat apps can open dialogs and receive user-entered data from card messages and dialogs. |
| 2024-06-26 | Announcement spaces and space permission settings |  | The Chat API now supports creating announcement spaces and reading or updating their permission settings. |
| 2024-06-25 | Google Group membership management in Chat spaces |  | Google Groups can be added to or removed from Chat spaces using spaces.members and space setup APIs. |
| 2024-06-24 | Global user-level Chat event subscriptions |  | Chat apps can create subscriptions for events across all spaces where a user is a member using targetResource //chat.googleapis.com/spaces/-. |
| 2024-06-18 | Administrator Chat API access with useAdminAccess |  | Domain or delegated admins can use useAdminAccess to manage spaces and memberships, including get/update operations for spaces and members; Domain or delegated admins can use useAdminAccess to manage Chat spaces and memberships with additional supported methods including search/delete spaces and list/create/delete memberships. |
| 2024-04-25 | User read state APIs in Chat spaces and threads |  | The Chat API now supports getting and updating users' read states for spaces and message threads via users.spaces and users.spaces.threads resources. |
| 2024-04-24 | Dialogflow CX integration with Google Chat API |  | Allows building a Google Chat app that can understand and respond with natural language via direct integration with Dialogflow CX; Allows building a Google Chat app that can understand and respond with natural language via direct integration with Dialogflow CX. |
| 2024-04-23 | Google Chat app home card messages |  | Enables Chat apps to send customizable home card messages to users in direct messages. |
| 2024-04-22 | Google Chat Apps Script Card Service support |  | Adds support for Apps Script's Card Service in Google Chat apps to build UI components like card messages and dialogs; Adds support for Apps Script's Card Service in Google Chat apps to build UI components like card messages and dialogs. |
| 2024-04-18 | Google Chat space membership role updates |  | Allows updating a human user's role in a Chat space via spaces.members.patch, including changing between regular member and space manager. |
| 2024-04-08 | Google Chat space import from external messaging platforms |  | Introduces the ability to import a space from other messaging platforms and allow external users to join it. |
| 2024-03-20 | Google Chat accessory widgets |  | Adds support for accessory widgets, interactive UI elements that appear at the bottom of a message. |
| 2024-03-13 | Google Chat space event APIs |  | Adds support for retrieving and listing space events, including message, membership, and space-update events via Google Workspace Events API. |
| 2024-03-04 | Bulleted list formatting in message formattedText |  | Enables the Message resource formattedText field to include markup for bulleted list text formatting. |
| 2024-01-17 | Discoverable Google Chat spaces |  | Adds support for making a Chat space discoverable by a target audience instead of requiring individual user invitations. |
| 2024-01-17 | Google Chat user event subscriptions |  | Enables Chat apps to subscribe to user-related events such as membership lifecycle changes via Google Workspace Events API. |
| 2024-01-10 | Chat API historical membership migration during data import |  | The Chat API now supports migrating historical space memberships as part of data import workflows; Developer Preview added support for migrating historical memberships as part of Chat data imports. |
| 2024-01-10 | Google Chat cross-platform data import |  | Google Chat now supports importing messages, attachments, reactions, memberships, and space data from other messaging platforms into corresponding Chat API resources. |
| 2024-01-08 | Chat app interactive message buttons |  | Chat apps can add interactive buttons to the bottom of messages in Google Chat. |
| 2024-01-05 | Private messaging from Chat apps in multi-user spaces |  | Chat apps can send private messages to users in spaces that contain multiple people. |
| 2023-12-13 | Chat card builder tool |  | The Chat API includes a Card Builder Tool for creating and previewing card messages for apps. |
| 2023-12-06 | Chat user read state API for spaces and threads |  | The Chat API now exposes APIs to get and update a user's read state at space and message-thread level. |
| 2023-11-30 | Google Chat space membership retrieval for Google Groups |  | Chat space membership APIs now support listing and getting memberships for Google Groups via ListMemberships(showGroups) and GetMembership. |
| 2023-11-28 | Chat app home card messages |  | Chat apps can send a customizable app home card message directly to users in direct messages. |
| 2023-11-06 | Advanced Chat Service for Google Apps Script |  | The Chat API can now be invoked from Google Apps Script through the Advanced Chat Service. |
| 2023-10-30 | Chat app reaction event subscriptions |  | Chat apps can subscribe to message reaction lifecycle events, including new, removed, and changed reactions. |
| 2023-10-17 | Multiselect input menus for Chat cards and dialogs |  | Multiselect menu components for cards and dialogs are now available in Google Chat, allowing selection of users, spaces, or external items. |
| 2023-09-28 | Chat API formattedText field |  | Chat API now exposes a formattedText field so applications can view text formatting included in messages. |
| 2023-09-15 | Chat space human membership role updates |  | Developers can update a human user's membership in a Chat space, including changing roles such as member and manager, via spaces.members.patch. |
| 2023-07-28 | Email-based user references in Chat API |  | User-authenticated Chat apps can reference users by email for space and membership operations and use email addresses for @mentions. |
| 2023-07-13 | Card section divider control |  | Chat card layouts can now omit dividers between card sections. |
| 2023-07-10 | Chat multiselect menu widget |  | Multiselect menus are introduced in Chat for user input of static or dynamic data in a Developer Preview. |
| 2023-06-07 | Chat API data import mode |  | Chat API supports importing messages, attachments, reactions, memberships, and space entities from other messaging platforms through import-mode Chat spaces. |
| 2023-03-06 | Chat card selection input controls |  | Chat app cards can now include input controls such as checkboxes, radio buttons, switches, and dropdown menus. |
| 2023-01-18 | Card and dialog user input processing |  | Chat apps can now receive and respond to information submitted by users in cards and dialogs. |
| 2022-06-28 | Google Chat Cards v1 | 2022-06-28 | Cards v1 was deprecated and replaced by Cards v2; deprecated on 2022-06-28. |
| 2022-06-16 | Chat web cards Material Design update |  | Google Chat web cards now follow Google Material Design for improved usability and faster rendering. |
| 2022-05-15 | Chat mobile cards Material Design update |  | Google Chat mobile cards in Developer Preview now follow Google Material Design for improved usability and faster rendering. |

Source file slug: `chat-api.md`

