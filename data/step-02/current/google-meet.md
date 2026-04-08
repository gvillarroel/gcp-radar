# Google Meet

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 20
Unique features: 21

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-17 | Google Meet smart note event subscriptions |  | Developers can subscribe to Google Meet smart note events through the Google Workspace Events API or Google Cloud Pub/Sub. |
| 2025-12-15 | Google Meet smart notes file retrieval |  | Developers can use the smartNotes resource to get and list smart notes files in a conference record. |
| 2025-11-20 | Google Meet meeting space identification via phone and SIP access |  | Developers can identify and join a meeting space using the phoneAccess and gatewaySipAccess fields on the spaces resource. |
| 2025-11-12 | Google Meet conference and transcript event subscriptions |  | Calendar invitees can subscribe to Google Meet conference started and transcript file generated events through the Google Workspace Events API or Google Cloud Pub/Sub. |
| 2025-02-07 | Google Meet conference data query access |  | Meeting participants can query conference records, conference artifacts, and participant records. |
| 2024-02-12 | Meet Add-ons SDK getCurrentMeetingRecordingStatus() method | 2024-02-12 | The getCurrentMeetingRecordingStatus() method returned the current meeting recording status and was later deprecated with no replacement; deprecated on 2024-02-12. |
| 2023-12-07 | Google Meet Add-ons SDK |  | The Google Meet Add-ons SDK lets developers embed apps into Google Meet so users can discover, share, and collaborate without leaving Meet. |
| 2023-11-02 | Google Meet API |  | The Google Meet API lets developers create and manage meetings and provides entry points to users from their apps. |
| 2023-10-16 | AddonMeetingInfo recording info field |  | The RecordingInfo field indicates whether the current Google Meet call is being recorded. |
| 2023-10-16 | AddonSession.Builder.verifyRecordingInfo() method |  | The verifyRecordingInfo() method checks that the add-on's recording status matches Meet's recording status and terminates the session if they differ. |
| 2023-05-23 | AddonSessionHandler.onParticipantPrivilegeChanged callback |  | The onParticipantPrivilegeChanged callback notifies an add-on when a participant's privileges change. |
| 2023-02-22 | LiveSharingSessionDelegate |  | LiveSharingSessionDelegate was added to the Live Sharing SDK API. |
| 2023-02-22 | MeetingDisconnectHandler | 2023-02-22 | MeetingDisconnectHandler was deprecated and developers were directed to use LiveSharingSessionDelegate instead; deprecated on 2023-02-22. |
| 2023-01-03 | Live Sharing failure reporting API |  | The SDK adds notifyLiveSharingFailureEvent for reporting Live Sharing failures. |
| 2022-07-26 | Live Sharing participant metadata |  | The SDK adds an API for setting participant metadata in Live Sharing sessions. |
| 2022-07-26 | MEET_LIVE_SHARING permission | 2022-07-26 | The MEET_LIVE_SHARING Android permission is obsolete and removed from the manifest; deprecated on 2022-07-26. |
| 2022-05-25 | Live Sharing client executor configuration |  | The client factory adds an overload that lets consumers supply executor services. |
| 2022-05-25 | Live Sharing exception error codes |  | LiveSharingException can now include canonical error codes such as MEET_VERSION_UNSUPPORTED. |
| 2022-05-25 | Live Sharing meeting info builder access |  | The SDK exposes LiveSharingMeetingInfo.Builder to API consumers for testing. |
| 2022-05-25 | Live Sharing meeting query API |  | The SDK enables the queryMeeting() capability. |
| 2022-05-03 | Live Sharing error-level logging |  | The SDK enables ERROR-level logging to help partners debug integrations. |

Source file slug: `google-meet.md`

