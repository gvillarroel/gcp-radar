---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.794Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "Expansive access behavior in My Drive"
feature_slug: "expansive-access-behavior-in-my-drive"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/limited-expansive-access"
  - "https://developers.google.com/workspace/drive/api/guides/about-sdk"
  - "https://developers.google.com/workspace/drive/api/guides/about-shareddrives"
  - "https://developers.google.com/workspace/drive/api/guides/enable-shareddrives"
keywords:
  - "expansive"
  - "access"
  - "behavior"
  - "in"
  - "my"
  - "drive"
  - "api"
  - "lets"
---

# Expansive access behavior in My Drive

Product: Drive API
Coverage: MEDIUM

## Step 02 Summary

Drive API lets clients opt into expansive access behavior in My Drive by setting enforceExpansiveAccess on permissions.delete and permissions.update.

## Extended Definition

Drive API lets clients opt into expansive access behavior in My Drive by setting enforceExpansiveAccess on permissions.delete and permissions.update.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk)
- [https://developers.google.com/workspace/drive/api/guides/about-shareddrives](https://developers.google.com/workspace/drive/api/guides/about-shareddrives)
- [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)

## Supporting Pages

### "Manage folders with limited and expansive access \_|\_ Google Drive \_|\_\

- URL: [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Developers can opt in to expansive access API behavior in My Drive ahead of any future mandatory enforcement.
- Adapt to expansive access To make it easier for developers to adapt to expansive access, several improvements were made to the Google Drive API: The permissionDetails[] field on the permissions resource is now populated for items in My Drive.
- About expansive access The introduction of folders with limited access broadens the expansive access model from shared drives to My Drive.
- The introduction of folders with limited access replicates the expansive access model from shared drives to My Drive.

### Google Drive API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These terms define the key components shown in Figure 1: Google Drive Google's cloud file storage service provides users with a personal storage space, called My Drive , and the option to access collaborative shared folders, called shared drives .
- Google Drive API The REST API that lets you use Drive storage from within your app.
- Apply labels to Drive files, set label field values, read label field values on files, and search for files using label metadata terms defined by the custom label taxonomy.
- Create a dedicated Drive folder to store application-specific data so the app cannot access all the user's content stored in Drive.

### Shared drives overview \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-shareddrives](https://developers.google.com/workspace/drive/api/guides/about-shareddrives)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Manage folders with limited and expansive access Create a shortcut to a Drive file How file access works in shared drives Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Roles for shared drives As with items in My Drive, each user in a shared drive is granted access with a specific role.
- Compare member and file access There are two classes of permissions in shared drives: Member permissions are for users who have been granted access to the shared drive, either directly or through a group.
- Members have access to all files within the shared drive, with the access level depending on the role given to the member, such as commenter or reader .

### Implement shared drive support \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following query modes are specific to shared drives: includeItemsFromAllDrives corpora Query description true user Queries files that the user has accessed, including both shared drive and My Drive files. true domain Queries files that are shared to the domain, including both shared drive and My Drive files. true drive Queries all items in the specified shared drive.
- Enable shared drive support in the Drive UI To access shared drive content using the Drive UI, make sure you have checked the Shared drives support box on the Drive UI integration tab of the Google Drive API in the Google Cloud console .
- To begin, you must include the supportsAllDrives=true query parameter in your requests when your app performs the following operations: Drive API v3 files.get files.list files.create files.update files.copy files.delete changes.list changes.getStartPageToken permissions.list permissions.get permissions.create permissions.update permissions.delete Drive API v2 files.get files.list files.insert files.update files.patch files.copy files.trash files.untrash files.delete files.touch children.insert parents.insert changes.list changes.getStartPageToken changes.get permissions.list permissions.get permissions.insert permissions.update permissions.patch permissions.delete The supportsAllDrives=true parameter informs Google Drive that your application is designed to handle files on shared drives.
- The following query modes are specific to shared drives: includeItemsFromAllDrives driveId Query description true No Changes are reflective of changes to files inside or outside of shared drives that the user has accessed, as well as changes to shared drives in which the user is a member. true Yes Changes are reflective of changes to the particular shared drive that was specified and items inside that shared drive.

