---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T17:31:01.267Z"
product_name: "Vault API"
product_slug: "vault-api"
feature_name: "Team Drive-related fields in Vault API"
feature_slug: "team-drive-related-fields-in-vault-api"
latest_feature_date: "2020-06-01"
deprecation_date: "2020-06-01"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/vault/reference/rest/v1/Query"
  - "https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds"
  - "https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports"
  - "https://developers.google.com/workspace/vault/guides/saved-queries"
keywords:
  - "team"
  - "drive"
  - "related"
  - "fields"
  - "vault"
  - "deprecated"
  - "removed"
  - "2020"
---

# Team Drive-related fields in Vault API

Product: Vault API
Coverage: MEDIUM

## Step 02 Summary

Support for Team Drive-related fields in the Vault API is deprecated and removed from the API; deprecated on 2020-06-01.

## Extended Definition

Support for Team Drive-related fields in the Vault API is deprecated and removed from the API; deprecated on 2020-06-01.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/vault/reference/rest/v1/Query](https://developers.google.com/workspace/vault/reference/rest/v1/Query)
- [https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds](https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds)
- [https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports](https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports)
- [https://developers.google.com/workspace/vault/guides/saved-queries](https://developers.google.com/workspace/vault/guides/saved-queries)

## Supporting Pages

### Query \_|\_ Google Vault \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/reference/rest/v1/Query](https://developers.google.com/workspace/vault/reference/rest/v1/Query)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "corpus" : enum ( CorpusType ) , "dataScope" : enum ( DataScope ) , "searchMethod" : enum ( SearchMethod ) , "method" : enum ( SearchMethod ) , "terms" : string , "startTime" : string , "endTime" : string , "teamDriveInfo" : { object ( TeamDriveInfo ) } , "timeZone" : string , "accountInfo" : { object ( AccountInfo ) } , "orgUnitInfo" : { object ( OrgUnitInfo ) } , "sharedDriveInfo" : { object ( SharedDriveInfo ) } , "hangoutsChatInfo" : { object ( HangoutsChatInfo ) } , "sitesUrlInfo" : { object ( SitesUrlInfo ) } , "driveDocumentInfo" : { object ( DriveDocumentInfo ) } "mailOptions" : { object ( MailOptions ) } , "driveOptions" : { object ( DriveOptions ) } , "hangoutsChatOptions" : { object ( HangoutsChatOptions ) } , "voiceOptions" : { object ( VoiceOptions ) } , "calendarOptions" : { object ( CalendarOptions ) } , "geminiOptions" : { object ( GeminiOptions ) } } Fields corpus enum ( CorpusType ) The Google Workspace service to search. dataScope enum ( DataScope ) The data source to search. searchMethod (deprecated) enum ( SearchMethod ) This field was deprecated on June 10, 2019.
- Team Drives to search JSON representation { "teamDriveIds" : [ string ] } Fields teamDriveIds[] (deprecated) string This field was deprecated on June 10, 2019.
- This maps to the "Included only if documents shared directly (not due to shared drive membership)" option in the Vault UI. (Previously "includeSharedDrives" off) INCLUDED Resources in shared drives are included in the search. (Previously "includeSharedDrives" on) HangoutsChatOptions Additional options for Google Chat search JSON representation { "includeRooms" : boolean } Fields includeRooms boolean For searches by account or organizational unit, set to true to include rooms.
- JSON representation { "versionDate" : string , "includeTeamDrives" : boolean , "includeSharedDrives" : boolean , "clientSideEncryptedOption" : enum ( ClientSideEncryptedOption ) , "sharedDrivesOption" : enum ( SharedDrivesOption ) } Fields versionDate string ( Timestamp format) Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date.

### REST Resource: matters.holds \_|\_ Google Vault \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds](https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "includeTeamDriveFiles" : boolean , "includeSharedDriveFiles" : boolean } Fields includeTeamDriveFiles (deprecated) boolean This field was deprecated on June 10, 2019.
- JSON representation { "driveQuery" : { object ( HeldDriveQuery ) } , "mailQuery" : { object ( HeldMailQuery ) } , "groupsQuery" : { object ( HeldGroupsQuery ) } , "hangoutsChatQuery" : { object ( HeldHangoutsChatQuery ) } , "voiceQuery" : { object ( HeldVoiceQuery ) } , "calendarQuery" : { object ( HeldCalendarQuery ) } } Fields Union field corpus query .
- To include files in Team Drives in the hold, set to true . includeSharedDriveFiles boolean To include files in shared drives in the hold, set to true .
- Resource: Hold JSON representation HeldOrgUnit JSON representation CorpusQuery JSON representation HeldDriveQuery JSON representation HeldMailQuery JSON representation HeldGroupsQuery JSON representation HeldHangoutsChatQuery JSON representation HeldVoiceQuery JSON representation HeldCalendarQuery Methods Resource: Hold A hold.

### REST Resource: matters.exports \_|\_ Google Vault \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports](https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- ExportOptions Additional options for exports JSON representation { "region" : enum ( ExportRegion ) , "mailOptions" : { object ( MailExportOptions ) } , "groupsOptions" : { object ( GroupsExportOptions ) } , "driveOptions" : { object ( DriveExportOptions ) } , "hangoutsChatOptions" : { object ( HangoutsChatExportOptions ) } , "voiceOptions" : { object ( VoiceExportOptions ) } , "calendarOptions" : { object ( CalendarExportOptions ) } , "geminiOptions" : { object ( GeminiExportOptions ) } } Fields region enum ( ExportRegion ) The requested data region for the export.
- JSON representation { "exportFormat" : enum ( ExportFormat ) , "showConfidentialModeContent" : boolean , "useNewExport" : boolean , "exportLinkedDriveFiles" : boolean } Fields exportFormat enum ( ExportFormat ) The file format for exported messages. showConfidentialModeContent boolean To export confidential mode content, set to true . useNewExport boolean To use the new export system, set to true . exportLinkedDriveFiles boolean Optional.
- Service-specific options for exports. corpus export options can be only one of the following: mailOptions object ( MailExportOptions ) Options for Gmail exports. groupsOptions object ( GroupsExportOptions ) Options for Groups exports. driveOptions object ( DriveExportOptions ) Options for Drive exports. hangoutsChatOptions object ( HangoutsChatExportOptions ) Options for Chat exports. voiceOptions object ( VoiceExportOptions ) Options for Voice exports. calendarOptions object ( CalendarExportOptions ) Option available for Calendar export. geminiOptions object ( GeminiExportOptions ) Option available for Gemini export.
- Resource: Export JSON representation UserInfo JSON representation ExportOptions JSON representation MailExportOptions JSON representation ExportFormat GroupsExportOptions JSON representation DriveExportOptions JSON representation HangoutsChatExportOptions JSON representation VoiceExportOptions JSON representation CalendarExportOptions JSON representation GeminiExportOptions JSON representation ExportRegion ExportStatus ExportStats JSON representation CloudStorageSink JSON representation CloudStorageFile JSON representation Methods Resource: Export An export.

### Manage saved queries \_|\_ Google Vault \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/vault/guides/saved-queries](https://developers.google.com/workspace/vault/guides/saved-queries)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Create a saved search query The following examples show how to create saved queries for mail messages and for files in Google Drive: Mail Java public SavedQuery createMailAllDataAccountSavedQuery ( String matterId ) throws Exception { AccountInfo emailsToSearch = new AccountInfo (). setEmails (( ImmutableList . of ( "email1" , "email2" ))); MailOptions mailOptions = new MailOptions (). setExcludeDrafts ( true ); String queryTerms = "to:ceo@solarmora.com" ; Query mailQuery = new Query () . setCorpus ( "MAIL" ) . setDataScope ( "ALL DATA" ) . setSearchMethod ( "ACCOUNT" ) . setAccountInfo ( emailsToSearch ) . setTerms ( queryTerms ) . setMailOptions ( mailOptions ); SavedQuery savedQuery = new SavedQuery () . setDisplayName ( "NEW SAVED QUERY NAME" ) . setQuery ( mailQuery ); return client . matters (). savedQueries (). create ( matterId , savedQuery ). execute (); } Python def create mail all data account saved query ( self , matter id ): emails to search = [ 'email1' , 'email2' ] mail query options = { 'excludeDrafts' : True } query terms = 'to:ceo@solarmora.com' mail query = { 'corpus' : 'MAIL' , 'dataScope' : 'ALL DATA' , 'searchMethod' : 'ACCOUNT' , 'accountInfo' : { 'emails' : emails to search }, 'terms' : query terms , 'mailOptions' : mail query options , } saved query = { 'displayName' : 'NEW SAVED QUERY NAME' , 'query' : mail query , } return self . service . matters () . savedQueries () . create ( matterId = matter id , body = saved query ) . execute () Drive Java public SavedQuery createDriveAllDataOUSavedQuery ( String matterId ) throws Exception { OrgUnitInfo ouToSearch = new OrgUnitInfo (). setOrgUnitId ( "ou id retrieved from admin sdk" ); DriveOptions driveQueryOptions = new DriveOptions (). setIncludeTeamDrives ( true ); Query driveQuery = new Query () . setCorpus ( "DRIVE" ) . setDataScope ( "ALL DATA" ) . setSearchMethod ( "ORG UNIT" ) . setOrgUnitInfo ( ouToSearch ) . setDriveOptions ( driveQueryOptions ); SavedQuery savedQuery = new SavedQuery () . setDisplayName ( "NEW SAVED QUERY NAME" ) . setQuery ( driveQuery ); return client . matters (). savedQueries (). create ( matterId , savedQuery ). execute (); } } Python def create drive all data ou saved query ( self , matter id ): ou to search = 'ou id retrieved from admin sdk' drive query options = { 'includeTeamDrives' : True } drive query = { 'corpus' : 'DRIVE' , 'dataScope' : 'ALL DATA' , 'searchMethod' : 'ORG UNIT' , 'orgUnitInfo' : { 'org unit id' : ou to search , }, 'driveOptions' : drive query options } saved query = { 'displayName' : 'NEW SAVED QUERY NAME' , 'query' : drive query , } return self . service . matters () . savedQueries () . create ( matterId = matter id , body = saved query ) . execute () Delete a saved search query The following example shows how to delete a saved query.
- Home Google Workspace Google Vault Guides Send feedback Manage saved queries Stay organized with collections Save and categorize content based on your preferences.
- To work with Vault resources, an account must have the required Vault privileges and access to the matter.
- The saved query API lets you programmatically manage saved queries in Google Vault.

