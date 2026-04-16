---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:10.830Z"
product_name: "Google Meet"
product_slug: "google-meet"
feature_name: "Google Meet smart notes file retrieval"
feature_slug: "google-meet-smart-notes-file-retrieval"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration"
  - "https://developers.google.com/workspace/meet/api/guides/artifacts"
  - "https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes"
  - "https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview"
keywords:
  - "meet"
  - "smart"
  - "notes"
  - "file"
  - "retrieval"
  - "developers"
  - "can"
  - "use"
---

# Google Meet smart notes file retrieval

Product: Google Meet
Coverage: MEDIUM

## Step 02 Summary

Developers can use the smartNotes resource to get and list smart notes files in a conference record.

## Extended Definition

Developers can use the smartNotes resource to get and list smart notes files in a conference record.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)

## Supporting Pages

### "Configure meeting spaces and members \_|\_ Google Meet \_|\_ Google for\

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When both features are enabled While each feature can be used separately, both transcripts and smart notes can also be used at the same time to create better post-meeting artifacts.
- Manage auto artifacts Meeting organizers, but not co-hosts, can pre-configure auto-recording, auto-transcripts, and smart notes within the meeting space.
- OAuth scopes for settings Setting or accessing meetings settings requires the following OAuth scopes: Use case Scope code Set auto artifact generation for spaces created by other apps. https://www.googleapis.com/auth/meetings.space.settings Get or list artifacts from conferences created by other apps. https://www.googleapis.com/auth/meetings.space.readonly Get or list other pre-meeting settings of a meeting space created by a third-party app. https://www.googleapis.com/auth/meetings.space.created https://www.googleapis.com/auth/meetings.space.readonly Read and edit the settings for all meeting spaces a user can access through any other app, such as Calendar. https://www.googleapis.com/auth/meetings.space.settings For more information on OAuth scopes, see Meet REST API scopes .
- Related topics Start or schedule a Google Meet video meeting "Take notes for me" in Google Meet Use Transcripts with Google Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Work with artifacts \_|\_ Google Meet \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It's possible a user might delete the smart notes file from Drive, yet the unique name is still returned in Meet.
- Retrieve artifacts If you're a meeting space owner or participant, you can call the get and list methods on the recordings , transcripts , transcripts.entries , and smart notes resources to retrieve artifacts.
- List all smart notes To list details about all smart notes files in a conference record, use the list method on the smartNotes resource.
- Get details about smart notes To get details about a specific smart notes file, use the get method on the smartNotes resource.

### "REST Resource: conferenceRecords.smartNotes \_|\_ Google Meet \_|\_ Google\

- URL: [https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Meet Reference Send feedback REST Resource: conferenceRecords.smartNotes Stay organized with collections Save and categorize content based on your preferences.
- Destination of the smart notes. destination can be only one of the following: docsDestination object ( DocsDestination ) Output only.
- ENDED This smart notes session has ended, but the smart notes file hasn't been generated yet.
- FILE GENERATED Smart notes file is generated and ready to download.

### Google Meet meeting spaces overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Create and manage meeting spaces Configure meeting spaces and members Join a meeting Countries where you can use a phone with Meet Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To manage a meeting space, use the following values for the name field: To get details about a meeting space, you can use either spaces/{space} or the alias spaces/{meetingCode} .
- Warning: A meetingCode shouldn't be stored long term as it can become dissociated from a meeting space and it can be reused for different meeting spaces in the future.
- To end an active conference within a meeting space, you can only use spaces/{space} .

