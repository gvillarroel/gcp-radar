# Google Meet

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-30T16:03:27.420Z`
Product status: `PASS`

## Summary

- Feature cards: 21
- Step 07 failed features: 0
- Step 07 warned features: 3
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 21 unknown

## Service Card

- Service card ID: `google-meet:service`
- Latest feature date: 2025-12-17
- Official source links: 19
- Security capabilities: 15

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Google Meet smart note event subscriptions | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/events-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview) |
| Google Meet smart notes file retrieval | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/artifacts)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview) |
| Google Meet meeting space identification via phone and SIP access | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview) |
| Google Meet conference and transcript event subscriptions | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/events-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview) |
| Google Meet conference data query access | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/participants) |
| Meet Add-ons SDK getCurrentMeetingRecordingStatus() method | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview) |
| Google Meet Add-ons SDK | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview) |
| Google Meet API | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview) |
| AddonMeetingInfo recording info field | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/artifacts)<br>[source](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)<br>[source](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings) |
| AddonSession.Builder.verifyRecordingInfo() method | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/artifacts)<br>[source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/participants) |
| AddonSessionHandler.onParticipantPrivilegeChanged callback | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)<br>[source](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)<br>[source](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get) |
| LiveSharingSessionDelegate | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/events-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview) |
| MeetingDisconnectHandler | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/events-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview) |
| Live Sharing failure reporting API | MEDIUM | WARN | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python) |
| Live Sharing participant metadata | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/participants)<br>[source](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)<br>[source](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions/get) |
| MEET_LIVE_SHARING permission | MEDIUM | WARN | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview) |
| Live Sharing client executor configuration | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces)<br>[source](https://developers.google.com/workspace/meet/api/guides/quickstart/java)<br>[source](https://developers.google.com/workspace/meet/api/guides/quickstart/nodejs) |
| Live Sharing exception error codes | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/artifacts)<br>[source](https://developers.google.com/workspace/meet/api/guides/participants)<br>[source](https://developers.google.com/workspace/meet/api/guides/quickstart/java) |
| Live Sharing meeting info builder access | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/artifacts)<br>[source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces) |
| Live Sharing meeting query API | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/events-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/overview) |
| Live Sharing error-level logging | MEDIUM | WARN | unknown | [source](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)<br>[source](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)<br>[source](https://developers.google.com/workspace/meet/api/guides/quickstart/python) |
