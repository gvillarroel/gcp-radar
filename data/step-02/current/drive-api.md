# Drive API

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 10
Unique features: 14

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-25 | enforceExpansiveAccess query parameter | 2026-02-25 | This request parameter for permissions methods is deprecated and should be replaced by folders with limited access settings; deprecated on 2026-02-25. |
| 2025-12-17 | Drive file content approvals |  | The Drive API supports reading content approvals on Drive files through the approvals resource using get and list. |
| 2025-12-17 | Google Drive approval events |  | Google Drive events can now report approval lifecycle and reviewer changes on a file. |
| 2025-11-11 | Google Drive comment and reply events |  | Google Drive events can now report when users post comments or replies in Docs, Sheets, or Slides files. |
| 2025-07-07 | Google Drive event subscriptions |  | Google Drive events can now be subscribed to for file movement, edits, trash changes, and access proposal activity. |
| 2025-02-19 | Expansive access behavior in My Drive |  | Drive API lets clients opt into expansive access behavior in My Drive by setting enforceExpansiveAccess on permissions.delete and permissions.update. |
| 2025-02-19 | Folders with limited access |  | Drive API supports folders that restrict access to specific users by disabling inherited permissions. |
| 2024-09-13 | files.download long-running operations |  | The files.download method now returns a long-running operation for downloading blob content or exporting Google Workspace content. |
| 2024-07-11 | drive.meet.readonly scope |  | This restricted scope lets you view Drive files created or edited by Google Meet. |
| 2023-07-24 | capabilities.canModifyContentRestriction | 2023-07-24 | This capability parameter was deprecated; deprecated on 2023-07-24. |
| 2023-07-24 | capabilities.canModifyEditorContentRestriction |  | This capability indicates whether an editor can modify a content restriction. |
| 2023-07-24 | capabilities.canModifyOwnerContentRestriction |  | This capability indicates whether the owner can modify a content restriction. |
| 2023-07-24 | capabilities.canRemoveContentRestriction |  | This capability indicates whether a content restriction can be removed. |
| 2023-07-24 | ownerRestricted content restriction parameter |  | This content restriction parameter lets only the file owner modify the restriction. |

Source file slug: `drive-api.md`

