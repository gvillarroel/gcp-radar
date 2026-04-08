# Calendar API

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 15
Unique features: 15

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-10-27 | Secondary calendar data ownership |  | The Calendar API introduced a single data owner model for secondary calendars, with a read-only dataOwner field and owner-restricted actions. |
| 2024-11-19 | Birthday events from Google Contacts |  | Calendar API clients can access Google Contacts-generated special events, including birthdays with birthdayProperties and linked contact details. |
| 2024-08-05 | Birthday event type |  | The Calendar API added the new birthday eventType for creating and managing recurring annual birthday events and filtering them via events.list and events.watch. |
| 2023-08-17 | Working locations support |  | Reading and updating working locations through the Calendar API became generally available; The Calendar API added developer preview support for reading and updating working locations. |
| 2022-03-23 | Custom event attachments |  | Calendar API support was added for custom attachments on events. |
| 2021-10-20 | Focus time event type |  | The Calendar API introduced the focusTime eventType so clients can identify focus-time events. |
| 2021-05-18 | Calendar API per-minute quotas |  | The Calendar API added separate per-minute quotas for each project and each project-user pair. |
| 2021-02-08 | Out-of-office event ownership identification |  | The Calendar API endpoint now allows clients to identify the owner of an out-of-office event from the calendarId. |
| 2021-02-01 | Event type field |  | The Calendar API added an eventType field on events to distinguish special event categories such as outOfOffice. |
| 2019-09-27 | Conference data add-on attachment |  | Calendar API events can now include add-on conference data when created or updated via Events.insert and Events.update. |
| 2018-10-31 | Additional Calendar API OAuth scopes |  | The Calendar API added four OAuth scopes to support finer-grained authorization of calendar data access. |
| 2018-10-02 | sendUpdates parameter for Calendar event changes |  | The Calendar API added the sendUpdates parameter so event update notifications can be sent to all guests, only non-Google Calendar guests, or suppressed entirely. |
| 2018-03-22 | Global HTTP batch endpoint support in Calendar API | 2019-03-25 | Support for global HTTP batch endpoints in the Calendar API was deprecated and scheduled for full discontinuation; deprecated on 2019-03-25. |
| 2018-03-22 | JSON-RPC protocol support in Calendar API | 2019-03-25 | Support for using the JSON-RPC protocol with the Calendar API was deprecated and scheduled for full discontinuation; deprecated on 2019-03-25. |
| 2017-07-12 | Calendar event conferenceData support |  | Calendar API added conference support for event data via conferenceData, including Hangouts and Google Meet features such as reading, copying, creating, and clearing conference data. |

Source file slug: `calendar-api.md`

