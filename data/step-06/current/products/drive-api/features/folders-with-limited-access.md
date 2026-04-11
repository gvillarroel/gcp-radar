---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:41:51.889Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "Folders with limited access"
feature_slug: "folders-with-limited-access"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/limited-expansive-access"
  - "https://developers.google.com/workspace/drive/api/guides/delete"
  - "https://developers.google.com/workspace/drive/api/guides/api-specific-auth"
keywords:
  - "folders"
  - "with"
  - "limited"
  - "access"
  - "drive"
  - "api"
  - "supports"
  - "that"
---

# Folders with limited access

Product: Drive API
Coverage: LOW

## Step 02 Summary

Drive API supports folders that restrict access to specific users by disabling inherited permissions.

## Extended Definition

Drive API supports folders that restrict access to specific users by disabling inherited permissions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- [https://developers.google.com/workspace/drive/api/guides/delete](https://developers.google.com/workspace/drive/api/guides/delete)
- [https://developers.google.com/workspace/drive/api/guides/api-specific-auth](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)

## Supporting Pages

### "Manage folders with limited and expansive access \_|\_ Google Drive \_|\_\

- URL: [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With this change, folders with limited access are the one exception that allows restricting access to a specific subfolder in both My Drive and shared drives.
- Folders with limited access are the one exception that allows restricting access to a specific subfolder in both My Drive and shared drives.
- If a user deletes a hierarchy with folders that have limited access and are owned by others, these folders move to the owner's My Drive.
- Related topics Share files, folders, and drives How file access works in shared drives Learn about folders with limited access Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Trash or delete files and folders \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/delete](https://developers.google.com/workspace/drive/api/guides/delete)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows how to use the fileId to mark the file as untrashed: Python body value = { 'trashed' : False } response = drive service . files () . update ( fileId = " FILE ID " , body = body value ) . execute () Node.js const body value = { 'trashed' : false }; const response = await drive service . files . update ({ fileId : ' FILE ID ' , requestBody : body value , }); return response ; Replace FILE ID with the fileId of the file that you want to untrash.
- The following code sample shows how to use the fileId to mark the file as trashed: Python body value = { 'trashed' : True } response = drive service . files () . update ( fileId = " FILE ID " , body = body value ) . execute () Node.js const body value = { 'trashed' : true }; const response = await drive service . files . update ({ fileId : ' FILE ID ' , requestBody : body value , }); return response ; Replace FILE ID with the fileId of the file that you want to trash.
- The following code sample shows how to use the fileId to delete the file: Python response = drive service . files () . delete ( fileId = " FILE ID " ) . execute () Node.js const response = await drive service . files . delete ({ fileId : ' FILE ID ' }); return response ; Replace FILE ID with the fileId of the file that you want to delete.
- Home Google Workspace Google Drive Guides Send feedback Trash or delete files and folders Stay organized with collections Save and categorize content based on your preferences.

### Choose Google Drive API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/api-specific-auth](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Non-sensitive scopes The following Drive API scopes are recommended for most use cases: Scope code Description https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.appfolder View and manage the app's own configuration data in your Google Drive. https://www.googleapis.com/auth/drive.install Allow apps to appear as an option in the "Open with" or the "New" menu. https://www.googleapis.com/auth/drive.file Create new Drive files, or modify existing files, that you open with an app or that the user shares with an app while using the Google Picker API or the app's file picker.
- Securely store refresh tokens To access private data using the Drive API, your app must obtain an access token that grants access to that API.
- The following are some reasons why you should use drive.file scope: Usability : The drive.file scope works with all Drive API REST Resources which means you can use it the same way you use broader OAuth scopes.
- Home Google Workspace Google Drive Guides Send feedback Choose Google Drive API scopes Stay organized with collections Save and categorize content based on your preferences.

