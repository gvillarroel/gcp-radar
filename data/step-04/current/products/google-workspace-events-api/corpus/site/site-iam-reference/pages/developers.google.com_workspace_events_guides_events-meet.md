---
title: "Subscribe to Google Meet events \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/guides/events-meet
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/guides/auth
source_metadata:
  url: https://developers.google.com/workspace/events/guides/events-meet
  title: "Subscribe to Google Meet events \_|\_ Google Workspace \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Subscribe to Google Meet events
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page details how to subscribe to Google Meet events using the Google Workspace Events API to receive real-time updates about conferences, participants, recordings, and transcripts.
You can monitor events by specifying a target resource, which can be a meeting space or a user, and subscribe to specific event types, such as conference start/end or participant join/leave.
Event data includes payloads containing information about the changed resource, like a conference record or a participant session.
To get started, you need to create a subscription and choose the appropriate event types for your app's needs, refer to the provided links for a step-by-step guide and API documentation.
This document describes the Meet events that your app can
subscribe to using the Google Workspace Events API. After you decide which types of
events you need, create a subscription
to start receiving events from Meet.
In addition to subscribing to events, you can also query for events by calling
the Google Meet REST API. Call the Meet REST API to retrieve events on a periodic
basis, or catch up on events you might have missed from a subscription due to an
outage. To learn about the ways you can receive and respond to
Meet events, see Respond to events from
Meet in the
Meet documentation.
To learn more about developing apps for Meet, see the
Meet REST API overview .
Supported Meet events
Google Workspace subscriptions let you receive events about the
following types of changes in Meet:
A conference starts or ends in a meeting
space.
A participant joins or leaves a conference.
A recording starts, ends, or a file is
generated for a conference.
A smart note starts, ends, or a file is
generated for a conference.
A transcript starts, ends, or a file is
generated for a conference.
Resources that you can monitor for events
To receive events, specify a Meet resource to monitor, which
is called the target resource of the subscription.
The Google Workspace Events API supports the following target resources for
Meet:
Target resource
Format
Limitations (if applicable)
Meeting space
//meet.googleapis.com/spaces/ SPACE
where SPACE is the ID in the
resource name of the Meet REST API spaces resource.
For details, see
How
Meet identifies a meeting space .
User
//cloudidentity.googleapis.com/users/ USER
where USER is the ID in the
signedinUser.user field of the Meet REST API participants resource.
For details, see
Work with participants .
The subscription receives events about all meeting spaces where the
user is the owner of the meeting space. Usually, the meeting space owner is also the
organizer of the
Google Calendar event associated with the meeting space.
Event types for creating subscriptions
When you create a subscription to a Meet resource, use the
eventTypes[]
field to specify which types of events you want to receive. Event types are
formatted according to the CloudEvents specification,
such as
google.workspace. APPLICATION . RESOURCE . VERSION . ACTION .
For example, to receive events about new participants in a conference for a
Meet space, specify the event type as
google.workspace.meet.participant.v2.joined . To learn more about how events
work, see Structure of Google Workspace
events .
The following table displays which event types are supported for subscriptions
to Meet resources:
Event type
Format
Resource data
A conference starts in the meeting space.
google.workspace.meet.conference.v2.started
conferenceRecord
A conference ends in the meeting space.
google.workspace.meet.conference.v2.ended
conferenceRecord
A participant joins an active conference in the meeting space.
google.workspace.meet.participant.v2.joined
conferenceRecord.participantSession
A participant leaves an active conference in the meeting space.
google.workspace.meet.participant.v2.left
conferenceRecord.participantSession
A recording starts for a conference in the meeting space.
google.workspace.meet.recording.v2.started
conferenceRecord.recording
A recording ends for a conference in the meeting space.
google.workspace.meet.recording.v2.ended
conferenceRecord.recording
A recording file is generated for a conference in the meeting
space.
google.workspace.meet.recording.v2.fileGenerated
conferenceRecord.recording
A smart note starts for a conference in the meeting space.
google.workspace.meet.smartNote.v2.started
conferenceRecord.smartNote
A smart note ends for a conference in the meeting space.
google.workspace.meet.smartNote.v2.ended
conferenceRecord.smartNote
A smart note file is generated for a conference in the meeting
space.
google.workspace.meet.smartNote.v2.fileGenerated
conferenceRecord.smartNote
A transcript starts for a conference in the meeting space.
google.workspace.meet.transcript.v2.started
conferenceRecord.transcript
A transcript ends for a conference in the meeting space.
google.workspace.meet.transcript.v2.ended
conferenceRecord.transcript
A transcript file is generated for a conference in the meeting
space.
google.workspace.meet.transcript.v2.fileGenerated
conferenceRecord.transcript
Event data
This section describes event data and example payloads for events in
Meet meeting spaces.
When your Google Workspace subscription receives an event from
Meet, the
data
field contains the payload for the event. This payload has information about the
Google Workspace resource that changed. For example, if you've
subscribed to events about new transcripts in a space, the payload for these
events contains information about the transcripts
resource that changed.
Resource data in the event payload
The following table provides examples of JSON payloads for a subscription to a
Meet meeting space. The examples use the conference record ID
(for example, conferenceRecords/kRyYx8b7vNDsLpR1tG_cNjFUQBoBRhHIMoGJAJkBCQ ) to
identify the meeting space. For more information, see How Meet
identifies a meeting
space .
For each event that the subscription receives, the payload appears in the data
field of the event:
Event types
JSON payload
A conference starts or ends for the Meet meeting
space.
google.workspace.meet.conference.v2.started
google.workspace.meet.conference.v2.ended
Excludes resource data:
{
"conferenceRecord":
{
"name": "conferenceRecords/ CONFERENCE_RECORD_ID "
}
}
A participant joins or leaves a conference in the
Meet meeting space.
google.workspace.meet.participant.v2.joined
google.workspace.meet.participant.v2.left
Excludes resource data:
{
"participantSession":
{
"name": "conferenceRecords/ CONFERENCE_RECORD_ID /participants/ PARTICIPANT_ID /participantSessions/ PARTICIPANT_SESSION_ID "
}
}
A recording starts, ends, or a file is generated for a conference
in the Meet meeting space.
google.workspace.meet.recording.v2.started
google.workspace.meet.recording.v2.ended
google.workspace.meet.recording.v2.fileGenerated
Excludes resource data:
{
"recording":
{
"name": "conferenceRecords/ CONFERENCE_RECORD_ID /recordings/ RECORDING_ID "
}
}
A smart note starts, ends, or a file is generated for a conference
in the Meet meeting space.
google.workspace.meet.smartNote.v2.started
google.workspace.meet.smartNote.v2.ended
google.workspace.meet.smartNote.v2.fileGenerated
Excludes resource data:
{
"smartNote":
{
"name": "conferenceRecords/ CONFERENCE_RECORD_ID /smartNotes/ SMART_NOTE_ID "
}
}
A transcript starts, ends, or a file is generated for a conference
in the Meet meeting space.
google.workspace.meet.transcript.v2.started
google.workspace.meet.transcript.v2.ended
google.workspace.meet.transcript.v2.fileGenerated
Excludes resource data:
{
"transcript":
{
"name": "conferenceRecords/ CONFERENCE_RECORD_ID /transcripts/ TRANSCRIPT_ID "
}
}
Limitations
Calendar invitees and other participants invited to a conference can only receive the following
events: google.workspace.meet.conference.v2.started and google.workspace.meet.transcript.v2.fileGenerated .
Related topics
Google Workspace Events API overview
Structure of Google Workspace events
Choose Google Workspace Events API scopes
Meet REST API overview
Choose Meet REST API scopes
Tutorial: Observe meeting events with Python and the Meet REST API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Workspace Events API allows apps to subscribe to Google Meet events. Apps can receive notifications about conferences starting or ending, participants joining or leaving, and recordings or transcripts being generated. To receive events, you must create a subscription and specify a target resource, either a meeting space or a user. Define specific event types, such as `conference.v2.started` or `participant.v2.joined`, during subscription creation. Each event payload contains details about the changed resource.\n"]]
