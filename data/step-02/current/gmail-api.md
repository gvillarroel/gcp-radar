# Gmail API

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 26
Unique features: 36

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-03 | Gmail Postmaster Tools API v2 |  | Provides access to the full Postmaster Tools dataset, including compliance status data, with flexible querying and batch operations. |
| 2025-12-02 | Gmail Postmaster Tools API v2beta |  | Provides access to the full Postmaster Tools dataset, including compliance status data, with flexible querying and batch operations. |
| 2025-09-10 | Deal Cards in the Promotions tab |  | Annotations can be used to create Deal Cards in the Promotions tab. |
| 2025-05-20 | Smart card support for Gmail client-side encryption |  | Gmail API supports using smart cards for client-side encryption in Google Workspace organizations that use hardware key encryption. |
| 2017-02-07 | history.list type filtering |  | The history.list method can filter history records by type. |
| 2016-11-30 | messages.batchModify |  | The messages.batchModify method modifies labels on multiple messages in a single batch operation. |
| 2016-07-01 | Filters |  | New endpoints are available for managing filters in mail settings. |
| 2016-07-01 | Forwarding |  | New endpoints are available for managing forwarding in mail settings. |
| 2016-07-01 | POP and IMAP |  | New endpoints are available for managing POP and IMAP settings in mail settings. |
| 2016-07-01 | Send-as aliases |  | New endpoints are available for managing send-as aliases in mail settings. |
| 2016-07-01 | Signatures |  | New endpoints are available for managing signatures in mail settings. |
| 2016-07-01 | Vacation responder |  | New endpoints are available for managing vacation responder settings in mail settings. |
| 2016-02-25 | messages.batchDelete |  | The messages.batchDelete method deletes multiple messages in a single batch operation. |
| 2016-01-13 | drafts.list includeSpamTrash |  | The drafts.list method can include drafts with the SPAM or TRASH label when includeSpamTrash is enabled. |
| 2015-06-22 | history.list message label details |  | The history.list method returns current message label IDs in change events to help reconstruct message state before and after a change. |
| 2015-06-18 | Message.internalDate |  | The Message.internalDate field exposes a message's creation timestamp in the mailbox. |
| 2015-05-29 | Mailbox push notifications |  | Mailbox updates can be delivered in real time through Cloud Pub/Sub notifications filtered by Gmail labels. |
| 2015-03-18 | messages.insert deleted parameter |  | The messages.insert method supports the deleted request parameter. |
| 2015-03-18 | messages.insert label assignment |  | The messages.insert method can set the SENT and DRAFT labels on inserted messages. |
| 2015-02-25 | History change-type enums |  | The history.list method now includes change-type enums such as messagesAdded, messagesDeleted, labelsAdded, and labelsDeleted. |
| 2015-02-11 | messages.import deleted parameter |  | The messages.import method supports the deleted parameter for email migration use cases. |
| 2015-02-11 | messages.import neverMarkSpam parameter |  | The messages.import method supports the neverMarkSpam parameter for email migration use cases. |
| 2015-02-11 | messages.import processForCalendar parameter |  | The messages.import method supports the processForCalendar parameter for email migration use cases. |
| 2015-01-23 | messages.import labelIds parameter |  | The messages.import method can automatically apply labels from message.labelIds. |
| 2014-10-22 | threads.get format parameter |  | The threads.get method supports full, metadata, and minimal response formats, but not raw. |
| 2014-10-16 | getProfile method |  | The getProfile method returns mailbox-wide metadata such as history ID and total message and thread counts. |
| 2014-10-06 | IMPORTANT label |  | Gmail API adds an IMPORTANT system label to match the Gmail UI. |
| 2014-10-06 | Labels count fields |  | The Labels resource adds fields for total and unread message and thread counts. |
| 2014-09-02 | internalDateSource parameter |  | The messages.insert and messages.import methods support the internalDateSource parameter. |
| 2013-10-28 | Review Action | 2017-07-15 | Review Action is deprecated; Review Action is now generally available to all users; deprecated on 2017-07-15. |
| 2013-10-03 | Email Markup Tester |  | The Email Markup Tester replaced the Schema Validator tool for testing email schemas. |
| 2013-10-03 | Schema Validator tool | 2013-10-03 | The Schema Validator tool was replaced by the Email Markup Tester; deprecated on 2013-10-03. |
| 2013-07-23 | Order |  | A schema for representing an order. |
| 2013-07-23 | Parcel Delivery |  | A schema for representing a parcel delivery. |
| 2013-07-23 | TrackAction |  | A schema action for letting users track package deliveries. |
| 2013-07-11 | RSVP Action |  | An action that lets recipients RSVP to Google Calendar emails. |

Source file slug: `gmail-api.md`

