---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.794Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "Folders with limited access"
feature_slug: "folders-with-limited-access"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/limited-expansive-access"
  - "https://developers.google.com/workspace/drive/api/guides/about-shareddrives"
  - "https://developers.google.com/workspace/drive/api/guides/about-sdk"
  - "https://developers.google.com/workspace/drive/api/guides/about-files"
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
Coverage: MEDIUM

## Step 02 Summary

Drive API supports folders that restrict access to specific users by disabling inherited permissions.

## Extended Definition

Drive API supports folders that restrict access to specific users by disabling inherited permissions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- [https://developers.google.com/workspace/drive/api/guides/about-shareddrives](https://developers.google.com/workspace/drive/api/guides/about-shareddrives)
- [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk)
- [https://developers.google.com/workspace/drive/api/guides/about-files](https://developers.google.com/workspace/drive/api/guides/about-files)

## Supporting Pages

### "Manage folders with limited and expansive access \_|\_ Google Drive \_|\_\

- URL: [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With this change, folders with limited access are the one exception that allows restricting access to a specific subfolder in both My Drive and shared drives.
- Folders with limited access are the one exception that allows restricting access to a specific subfolder in both My Drive and shared drives.
- If a user deletes a hierarchy with folders that have limited access and are owned by others, these folders move to the owner's My Drive.
- Related topics Share files, folders, and drives How file access works in shared drives Learn about folders with limited access Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Shared drives overview \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-shareddrives](https://developers.google.com/workspace/drive/api/guides/about-shareddrives)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Manage folders with limited and expansive access Create a shortcut to a Drive file How file access works in shared drives Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Users also lose access to any files and folders in the shared drive that were directly shared with them.
- For example, a user that has role=commenter for a shared drive cannot have their access level reduced at another point within the folder hierarchy.
- Members have access to all files within the shared drive, with the access level depending on the role given to the member, such as commenter or reader .

### Google Drive API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These terms define the key components shown in Figure 1: Google Drive Google's cloud file storage service provides users with a personal storage space, called My Drive , and the option to access collaborative shared folders, called shared drives .
- You can develop applications that integrate with Drive, and create robust functionality in your application using the Drive API.
- Google Drive API The REST API that lets you use Drive storage from within your app.
- Home Google Workspace Google Drive Guides Send feedback Google Drive API overview Stay organized with collections Save and categorize content based on your preferences.

### Files and folders overview \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-files](https://developers.google.com/workspace/drive/api/guides/about-files)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Drive Guides Send feedback Files and folders overview Stay organized with collections Save and categorize content based on your preferences.
- Shared drives A shared drive is an organizational structure within Drive that lives parallel to My Drive.
- The corpora for Drive are: user , domain , drive , and allDrives . user : Includes all files created by and opened by the user in "My Drive", and those shared directly with the user in "Shared with me." drive : Includes all files contained in a single shared drive, as indicated by the driveId . domain : Includes all searchable files shared with the user's domain. allDrives : Includes all files in shared drives where the user is a member, and all files in "My Drive" and "Shared with me." Use the allDrives corpora with caution as it has a broad scope and can affect performance.
- File characteristics This list shows some characteristics of a Drive file: Access proposal A proposal from a requester to an approver to grant a recipient access to a Drive item.

