# Calendar API

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 15
Unique features: 16

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-10-27 | Secondary calendar data ownership |  | Secondary calendars now have a single data owner exposed through the read-only dataOwner field, with ownership-based restrictions on deletion, access changes, and calendar list removal. |
| 2024-11-19 | Birthday special events from Google Contacts |  | The Calendar API can access birthdays and other special events automatically created from Google Contacts, including birthday-specific metadata in birthdayProperties. |
| 2024-08-05 | Birthday event type |  | The Calendar API supports a birthday eventType for creating, managing, filtering, and watching birthday events as special recurring all-day events. |
| 2023-08-17 | Working locations |  | The Calendar API supports reading and updating users' working locations; The Calendar API supports reading and updating users' working locations. |
| 2022-03-23 | Custom attachments |  | The Calendar API supports custom attachments on calendar events. |
| 2021-10-20 | Focus time event type |  | The Calendar API exposes a focusTime event type so applications can distinguish focus time events. |
| 2021-05-18 | Per-minute per-project per-user quota |  | The Calendar API provides a quota limit for requests per minute per project per user. |
| 2021-05-18 | Per-minute per-project quota |  | The Calendar API provides a quota limit for requests per minute per project. |
| 2021-02-08 | Out-of-office event owner identification |  | The Calendar API lets applications use the calendarId in the calendar resource endpoint to identify the owner of an out-of-office event. |
| 2021-02-01 | Event type field |  | The Calendar API exposes an eventType field so applications can distinguish special event types such as outOfOffice. |
| 2019-09-27 | Add-on conference data |  | The Calendar API allows attaching conference data of type addOn to new or existing events through Events.insert and Events.update. |
| 2018-10-31 | Additional OAuth scopes |  | The Calendar API supports four new OAuth scopes that let applications request more limited access to calendar data. |
| 2018-10-02 | sendUpdates parameter |  | The Calendar API provides a sendUpdates parameter for controlling whether event change notifications go to all guests, only non-Google Calendar guests, or no guests. |
| 2018-03-22 | Global HTTP batch endpoints | 2019-03-25 | Calendar API support for Global HTTP batch endpoints is deprecated and scheduled for discontinuation; deprecated on 2019-03-25. |
| 2018-03-22 | JSON-RPC protocol support | 2019-03-25 | Calendar API support for the JSON-RPC protocol is deprecated and scheduled for discontinuation; deprecated on 2019-03-25. |
| 2017-07-12 | Conference data for Hangouts and Google Meet |  | The Calendar API supports Hangouts and Google Meet conference data in events through the conferenceData field, including reading, copying, creating, and clearing conference details. |

Source file slug: `calendar-api.md`

