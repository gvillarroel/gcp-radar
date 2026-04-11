---
title: "Google Meet API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2
  title: "Google Meet API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Reference
Send feedback
Google Meet API
Stay organized with collections
Save and categorize content based on your preferences.
Create and manage meetings in Google Meet.
REST Resource: v2.conferenceRecords
REST Resource: v2.conferenceRecords.participants
REST Resource: v2.conferenceRecords.participants.participantSessions
REST Resource: v2.conferenceRecords.recordings
REST Resource: v2.conferenceRecords.smartNotes
REST Resource: v2.conferenceRecords.transcripts
REST Resource: v2.conferenceRecords.transcripts.entries
REST Resource: v2.spaces
Service: meet.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://meet.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://meet.googleapis.com
REST Resource: v2.conferenceRecords
Methods
get
GET /v2/{name=conferenceRecords/*}
Gets a conference record by conference ID.
list
GET /v2/conferenceRecords
Lists the conference records.
REST Resource: v2.conferenceRecords.participants
Methods
get
GET /v2/{name=conferenceRecords/*/participants/*}
Gets a participant by participant ID.
list
GET /v2/{parent=conferenceRecords/*}/participants
Lists the participants in a conference record.
REST Resource: v2.conferenceRecords.participants.participantSessions
Methods
get
GET /v2/{name=conferenceRecords/*/participants/*/participantSessions/*}
Gets a participant session by participant session ID.
list
GET /v2/{parent=conferenceRecords/*/participants/*}/participantSessions
Lists the participant sessions of a participant in a conference record.
REST Resource: v2.conferenceRecords.recordings
Methods
get
GET /v2/{name=conferenceRecords/*/recordings/*}
Gets a recording by recording ID.
list
GET /v2/{parent=conferenceRecords/*}/recordings
Lists the recording resources from the conference record.
REST Resource: v2.conferenceRecords.smartNotes
Methods
get
GET /v2/{name=conferenceRecords/*/smartNotes/*}
Gets smart notes by smart note ID.
list
GET /v2/{parent=conferenceRecords/*}/smartNotes
Lists the set of smart notes from the conference record.
REST Resource: v2.conferenceRecords.transcripts
Methods
get
GET /v2/{name=conferenceRecords/*/transcripts/*}
Gets a transcript by transcript ID.
list
GET /v2/{parent=conferenceRecords/*}/transcripts
Lists the set of transcripts from the conference record.
REST Resource: v2.conferenceRecords.transcripts.entries
Methods
get
GET /v2/{name=conferenceRecords/*/transcripts/*/entries/*}
Gets a TranscriptEntry resource by entry ID.
list
GET /v2/{parent=conferenceRecords/*/transcripts/*}/entries
Lists the structured transcript entries per transcript.
REST Resource: v2.spaces
Methods
create
POST /v2/spaces
Creates a space.
endActiveConference
POST /v2/{name=spaces/*}:endActiveConference
Ends an active conference (if there's one).
get
GET /v2/{name=spaces/*}
Gets details about a meeting space.
patch
PATCH /v2/{space.name=spaces/*}
Updates details about a meeting space.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
