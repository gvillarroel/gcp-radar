# Chat API

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 83
Unique features: 64

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-01 | Custom sections API |  | The Chat API lets developers create, update, delete, list, position, and organize custom sections and section items for personalized conversation views; The Chat API lets developers create, update, delete, list, position, and organize custom sections and section items for personalized conversation views. |
| 2026-03-31 | App authentication with administrator approval for Chat API read methods |  | Chat API read methods for messages and space events support app authentication with administrator approval; Chat API space event read methods support app authentication with administrator approval when using chat.app.* scopes. |
| 2026-03-31 | App authentication with administrator approval for Chat event subscriptions |  | Chat apps can use app authentication with administrator approval to subscribe to, renew, and reactivate Chat space event subscriptions through the Google Workspace Events API; Chat apps can use app authentication with administrator approval and chat.app.* scopes to subscribe to, renew, and reactivate Chat space event subscriptions through the Google Workspace Events API. |
| 2026-03-19 | Block quote formatting |  | Chat apps can format message text with block quotes. |
| 2026-03-10 | User-authenticated card messages on behalf of users |  | Chat apps can create card-based messages on behalf of users with user authentication and asynchronously update those cards without user interaction. |
| 2026-02-09 | User mentions with app authentication |  | The Chat API supports mentioning users in messages sent with app authentication, including users who have not joined a space or are in import-mode spaces. |
| 2026-02-03 | Pub/Sub delivery for Chat apps built as Google Workspace add-ons |  | Developers can build Google Chat apps as Google Workspace add-ons that receive messages through Cloud Pub/Sub. |
| 2026-01-14 | Convert Chat apps to Google Workspace add-ons |  | Interactive event-driven Chat apps can be converted into Google Workspace add-ons that extend Chat and other Google Workspace applications. |
| 2025-12-14 | Dynamic autocomplete drop-down menus |  | Google Chat apps can dynamically populate drop-down menus with autocomplete using Google Workspace or external data sources. |
| 2025-10-30 | Find group chats by members |  | Chat apps can find existing group conversations with specific members by using the FindGroupChats method. |
| 2025-10-22 | Assistant manager membership role |  | Chat spaces support a new assistant manager membership role to help owners administer spaces. |
| 2025-09-12 | Increased per-space write quotas |  | The Chat API provides higher per-space quota limits for writing messages during imports and for creating reactions. |
| 2025-09-10 | Carousel card layout |  | Chat apps can present cards in a carousel layout that rotates through multiple cards with previous and next navigation; Chat apps can present cards in a carousel layout that rotates through multiple cards with previous and next navigation. |
| 2025-08-12 | Quoted messages |  | The Chat API can create messages that quote other messages and update messages to remove quotes. |
| 2025-07-25 | chat.app authentication scopes for space and membership management |  | New chat.app.* authentication scopes let Chat apps manage spaces and memberships directly through the Chat API; New chat.app.* authentication scopes let Chat apps manage spaces and memberships directly through the Chat API. |
| 2025-07-25 | Space permission settings management with app authentication |  | Chat apps can create, update, and retrieve Chat space permission settings, including announcement spaces, using app authentication; Chat apps can create, update, and retrieve Chat space permission settings, including announcement spaces, using app authentication. |
| 2025-07-22 | Huddle |  | Message annotations can expose metadata for Meet, Huddle, and Calendar smart chips through the RichLinkMetadata object. |
| 2025-07-22 | Rich link metadata for Meet |  | Message annotations can expose metadata for Meet, Huddle, and Calendar smart chips through the RichLinkMetadata object. |
| 2025-07-09 | Google Workspace add-ons for Chat apps |  | Developers can build Google Chat apps as Google Workspace add-ons. |
| 2025-06-10 | Markdown formatting |  | Chat apps can format text with Markdown, including lists and code blocks. |
| 2025-03-07 | Space notification settings API |  | The Chat API lets developers get and update a user's notification settings for a Chat space; The Chat API lets developers get and update a user's notification settings for a Chat space. |
| 2025-03-05 | Quick commands |  | Chat apps can respond to quick commands selected by users from the message reply area; Quick commands let users invoke and interact with a Chat app directly without typing a slash command. |
| 2025-03-03 | User mentions with user authentication |  | The Chat API supports mentioning users in messages sent with user authentication, including users who have not joined a space or are in import-mode spaces. |
| 2024-11-05 | Group chats in import mode |  | The Chat API can create group chats in import mode for migrations from other messaging platforms; The Chat API can create group chats in import mode for migrations from other messaging platforms. |
| 2024-11-04 | Read-only custom emoji scope |  | A read-only OAuth scope lets developers get and list custom emoji through the Chat API. |
| 2024-10-24 | Advanced card UI widgets |  | Chat apps can use Chip, Overflow Menu, Material Button, and collapsible text and section control widgets in card-based interfaces; Chat apps can use Chip, Overflow Menu, Material Button, and collapsible text and section control widgets in card-based interfaces. |
| 2024-10-10 | Custom emoji management API |  | The Chat API can create, delete, get, and list custom emoji when custom emoji is enabled for the Workspace organization. |
| 2024-10-02 | Announcement spaces and permission settings API |  | The Chat API can create announcement spaces and read or update a space's permission settings; The Chat API can create announcement spaces and read or update a space's permission settings. |
| 2024-09-11 | Administrator management and search of Chat spaces |  | Google Workspace administrators can manage and search Chat spaces across their organization using the Google Chat API. |
| 2024-09-11 | Chat space smart chips |  | The chatSpaceLinkData field in RichLinkMetadata lets messages include smart chips that point to Chat spaces. |
| 2024-07-08 | ID token request authentication for Chat apps |  | Chat apps running on Cloud Functions, Cloud Run, or other ID-token-enabled systems can verify that requests originated from Google Chat. |
| 2024-07-08 | Import spaces with external users allowed |  | Imported Chat spaces can be configured to allow external users to join. |
| 2024-07-03 | Space discoverability controls |  | The Chat API can make a space discoverable to specific users in a Google Workspace organization and expose its URI. |
| 2024-06-28 | Dialogflow CX dialogs |  | Dialogflow CX Chat apps can open dialogs and receive user input from card messages and dialogs. |
| 2024-06-25 | Google Groups in spaces |  | The Chat API can add and remove Google Groups as members of a Chat space. |
| 2024-06-24 | User-wide Chat space event subscriptions |  | Chat apps can subscribe to events across all Chat spaces where a user is a member by targeting all spaces for that user. |
| 2024-06-18 | Administrator access for Chat space and membership management |  | Domain and delegated administrators can use the useAdminAccess parameter with additional Chat API methods to manage spaces and memberships with administrator privileges; Domain and delegated administrators can use the useAdminAccess parameter with Chat API methods to search, delete, and manage spaces and memberships with administrator privileges. |
| 2024-04-25 | User read states API |  | The Chat API can get and update a user's read state in a space and retrieve a user's read state for a message thread. |
| 2024-04-24 | Dialogflow CX integration for Chat apps |  | Google Chat apps can integrate directly with Dialogflow CX to understand and respond using natural language; The Chat API supports direct integration with Dialogflow CX so Chat apps can understand and respond with natural language. |
| 2024-04-23 | App home card messages |  | Chat apps can send a customizable app home card message to users when they open a direct message with the app; Chat apps can send a customizable app home card message when a user opens a direct message with the app. |
| 2024-04-22 | Apps Script Card Service for Chat apps |  | Google Chat apps built with Apps Script can use Card Service to create card messages and dialogs; Google Chat apps built with Apps Script can use Card Service to create card messages and dialogs. |
| 2024-04-18 | Chat space membership role updates |  | The Chat API can update a human user's membership role in a space between regular member and space manager; The Chat API can update a human user's membership role in a space between regular member and space manager. |
| 2024-04-08 | Imported spaces with external users |  | The Chat API can import spaces from other messaging platforms and allow external users to join them. |
| 2024-03-20 | Accessory widgets in messages |  | Google Chat apps can add interactive accessory widgets to the bottom of messages; Google Chat apps can add interactive accessory widgets to the bottom of messages. |
| 2024-03-13 | Google Chat space events access |  | The Chat API can get and list events for a space, including message, membership, and space update events. |
| 2024-03-04 | Bulleted list formatting in Message.formattedText |  | The Message.formattedText field includes markup syntax for bulleted list text formatting. |
| 2024-01-17 | Discoverable Chat spaces for target audiences |  | The Chat API can make a space discoverable to a target audience instead of requiring individual invitations. |
| 2024-01-17 | User events subscriptions |  | Chat apps can subscribe to events about users, including new, updated, deleted, and multiple membership changes. |
| 2024-01-10 | Historical memberships import |  | Google Chat data import supports migrating historical memberships; Google Chat data import supports migrating historical memberships. |
| 2024-01-10 | Messaging platform data import |  | The Chat API can import messages, attachments, reactions, memberships, and space entities from other messaging platforms into spaces in import mode; The Chat API can import messages, attachments, reactions, memberships, and space entities from other messaging platforms into spaces in import mode. |
| 2024-01-05 | Private messages in multi-user spaces |  | Chat apps can send private messages within spaces that contain multiple people. |
| 2023-12-13 | Card Builder Tool |  | The Card Builder Tool helps developers design and preview card messages for Google Chat apps. |
| 2023-12-06 | User read states |  | The Chat API can get and update a user's read state in a space and get a user's read state in a message thread. |
| 2023-11-30 | Google Groups memberships in Chat spaces |  | The Chat API can retrieve Google Groups that are members of a Chat space through membership APIs. |
| 2023-11-06 | Apps Script Advanced Chat Service |  | Apps Script can call the Chat API through the Advanced Chat Service. |
| 2023-10-30 | Message reaction events subscriptions |  | Google Chat apps can subscribe to events for new, removed, and bulk-changed message reactions. |
| 2023-10-17 | Multiselect menus |  | Cards and dialogs support multiselect menus for selecting Google Workspace users, spaces, or external data items; Cards and dialogs support multiselect menus for selecting Google Workspace users, spaces, or external data items. |
| 2023-09-28 | Message.formattedText |  | The formattedText field lets developers view the text formatting sent in a message. |
| 2023-07-28 | Email address user references |  | User-authenticated Chat apps can reference users by email address in supported Chat API methods and mentions. |
| 2023-07-13 | Card sections without dividers |  | Google Chat cards can be configured with no divider between card sections. |
| 2023-03-06 | SelectionInput widget |  | Chat apps can use the SelectionInput widget to present checkboxes, radio buttons, switches, and dropdown menus. |
| 2023-01-18 | Card and dialog form inputs |  | Chat apps can receive and respond to user-submitted information from cards and dialogs. |
| 2022-06-28 | Cards v1 | 2022-06-28 | Cards v1 is the original Google Chat cards framework that has been replaced by Cards v2; deprecated on 2022-06-28. |
| 2022-06-16 | Material Design cards |  | Google Chat cards on the web match Google Material Design for improved usability and faster rendering; Google Chat cards on mobile devices match Google Material Design for improved usability and faster rendering. |

Source file slug: `chat-api.md`

