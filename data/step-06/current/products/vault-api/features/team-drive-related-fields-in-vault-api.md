---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:23:07.156Z"
product_name: "Vault API"
product_slug: "vault-api"
feature_name: "Team Drive-related fields in Vault API"
feature_slug: "team-drive-related-fields-in-vault-api"
latest_feature_date: "2020-06-01"
deprecation_date: "2020-06-01"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/vault/release-notes"
  - "https://developers.google.com/workspace/vault/reference/rest/v1/Query"
  - "https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports"
keywords:
  - "team"
  - "drive"
  - "related"
  - "fields"
  - "in"
  - "vault"
  - "api"
  - "for"
---

# Team Drive-related fields in Vault API

Product: Vault API
Coverage: LOW

## Step 02 Summary

Support for Team Drive-related fields in the Vault API is deprecated and removed from the API; deprecated on 2020-06-01.

## Extended Definition

Support for Team Drive-related fields in the Vault API is deprecated and removed from the API; deprecated on 2020-06-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/vault/release-notes](https://developers.google.com/workspace/vault/release-notes)
- [https://developers.google.com/workspace/vault/reference/rest/v1/Query](https://developers.google.com/workspace/vault/reference/rest/v1/Query)
- [https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports](https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports)

## Supporting Pages

### Google Vault API release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/release-notes](https://developers.google.com/workspace/vault/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Consequently, the Vault API is changing as follows: Shared drive-related request and response fields have replaced Team Drive in: DriveOptions HeldDriveQuery SearchMethod SharedDriveInfo has replaced TeamDriveInfo .
- June 01, 2020 Deprecated All Team Drive-related fields are removed from the Vault API.
- This page contains release notes for features and updates to the Vault API.
- Although these fields are marked as deprecated and will continue to be available until then, we strongly recommend that you update your apps and your API configuration to reference the new fields as soon as possible.

### Query \_|\_ Google Vault \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/reference/rest/v1/Query](https://developers.google.com/workspace/vault/reference/rest/v1/Query)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This maps to the "Included only if documents shared directly (not due to shared drive membership)" option in the Vault UI. (Previously "includeSharedDrives" off) INCLUDED Resources in shared drives are included in the search. (Previously "includeSharedDrives" on) HangoutsChatOptions Additional options for Google Chat search JSON representation { "includeRooms" : boolean } Fields includeRooms boolean For searches by account or organizational unit, set to true to include rooms.
- JSON representation { "versionDate" : string , "includeTeamDrives" : boolean , "includeSharedDrives" : boolean , "clientSideEncryptedOption" : enum ( ClientSideEncryptedOption ) , "sharedDrivesOption" : enum ( SharedDrivesOption ) } Fields versionDate string ( Timestamp format) Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date.
- JSON representation { "corpus" : enum ( CorpusType ) , "dataScope" : enum ( DataScope ) , "searchMethod" : enum ( SearchMethod ) , "method" : enum ( SearchMethod ) , "terms" : string , "startTime" : string , "endTime" : string , "teamDriveInfo" : { object ( TeamDriveInfo ) } , "timeZone" : string , "accountInfo" : { object ( AccountInfo ) } , "orgUnitInfo" : { object ( OrgUnitInfo ) } , "sharedDriveInfo" : { object ( SharedDriveInfo ) } , "hangoutsChatInfo" : { object ( HangoutsChatInfo ) } , "sitesUrlInfo" : { object ( SitesUrlInfo ) } , "driveDocumentInfo" : { object ( DriveDocumentInfo ) } "mailOptions" : { object ( MailOptions ) } , "driveOptions" : { object ( DriveOptions ) } , "hangoutsChatOptions" : { object ( HangoutsChatOptions ) } , "voiceOptions" : { object ( VoiceOptions ) } , "calendarOptions" : { object ( CalendarOptions ) } , "geminiOptions" : { object ( GeminiOptions ) } } Fields corpus enum ( CorpusType ) The Google Workspace service to search. dataScope enum ( DataScope ) The data source to search. searchMethod (deprecated) enum ( SearchMethod ) This field was deprecated on June 10, 2019.
- JSON representation DataScope SearchMethod AccountInfo JSON representation OrgUnitInfo JSON representation SharedDriveInfo JSON representation HangoutsChatInfo JSON representation SitesUrlInfo JSON representation DriveDocumentInfo JSON representation DriveDocumentIds JSON representation TeamDriveInfo JSON representation MailOptions JSON representation ClientSideEncryptedOption DriveOptions JSON representation SharedDrivesOption HangoutsChatOptions JSON representation VoiceOptions JSON representation CalendarOptions JSON representation AttendeeResponse GeminiOptions The query definition used for search and export.

### REST Resource: matters.exports \_|\_ Google Vault \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports](https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- ExportOptions Additional options for exports JSON representation { "region" : enum ( ExportRegion ) , "mailOptions" : { object ( MailExportOptions ) } , "groupsOptions" : { object ( GroupsExportOptions ) } , "driveOptions" : { object ( DriveExportOptions ) } , "hangoutsChatOptions" : { object ( HangoutsChatExportOptions ) } , "voiceOptions" : { object ( VoiceExportOptions ) } , "calendarOptions" : { object ( CalendarExportOptions ) } , "geminiOptions" : { object ( GeminiExportOptions ) } } Fields region enum ( ExportRegion ) The requested data region for the export.
- JSON representation { "exportFormat" : enum ( ExportFormat ) , "showConfidentialModeContent" : boolean , "useNewExport" : boolean , "exportLinkedDriveFiles" : boolean } Fields exportFormat enum ( ExportFormat ) The file format for exported messages. showConfidentialModeContent boolean To export confidential mode content, set to true . useNewExport boolean To use the new export system, set to true . exportLinkedDriveFiles boolean Optional.
- Service-specific options for exports. corpus export options can be only one of the following: mailOptions object ( MailExportOptions ) Options for Gmail exports. groupsOptions object ( GroupsExportOptions ) Options for Groups exports. driveOptions object ( DriveExportOptions ) Options for Drive exports. hangoutsChatOptions object ( HangoutsChatExportOptions ) Options for Chat exports. voiceOptions object ( VoiceExportOptions ) Options for Voice exports. calendarOptions object ( CalendarExportOptions ) Option available for Calendar export. geminiOptions object ( GeminiExportOptions ) Option available for Gemini export.
- Resource: Export JSON representation UserInfo JSON representation ExportOptions JSON representation MailExportOptions JSON representation ExportFormat GroupsExportOptions JSON representation DriveExportOptions JSON representation HangoutsChatExportOptions JSON representation VoiceExportOptions JSON representation CalendarExportOptions JSON representation GeminiExportOptions JSON representation ExportRegion ExportStatus ExportStats JSON representation CloudStorageSink JSON representation CloudStorageFile JSON representation Methods Resource: Export An export.

