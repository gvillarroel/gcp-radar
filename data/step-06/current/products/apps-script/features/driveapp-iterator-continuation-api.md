---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.784Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DriveApp iterator continuation API"
feature_slug: "driveapp-iterator-continuation-api"
latest_feature_date: "2013-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/list"
keywords:
  - "continuation"
  - "iterator"
  - "token"
  - "driveapp"
  - "added"
  - "apis"
  - "api"
  - "for"
---

# DriveApp iterator continuation API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added continuation-token APIs for Drive iterators, including getContinuationToken and continue*Iterator methods, to resume iteration across executions.

## Extended Definition

Added continuation-token APIs for Drive iterators, including getContinuationToken and continue*Iterator methods, to resume iteration across executions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Several new methods were added to the DocsList class ( getFilesForPaging, etc.) that use continuation tokens as described in the documentation.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### Apps Script API \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://script.googleapis.com REST Resource: v1.processes Methods list GET /v1/processes List information about processes made by or on behalf of a user, such as process type and current status. listScriptProcesses GET /v1/processes:listScriptProcesses List information about a script's executed processes, such as process type and current status.
- The service uses the script.googleapis.com endpoint and offers a Discovery document for machine-readable API specifications.
- Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.processes REST Resource: v1.projects REST Resource: v1.projects.deployments REST Resource: v1.projects.versions REST Resource: v1.scripts Service: script.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### Method: processes.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.processes For more information, see the OAuth 2.0 Overview .
- JSON representation { "processes" : [ { object ( Process ) } ] , "nextPageToken" : string } Fields processes[] object ( Process ) List of processes matching request parameters. nextPageToken string Token for the next page of results.
- Defaults to 50. pageToken string The token for continuing a previous list request on the next page.
- HTTP request GET https://script.googleapis.com/v1/processes The URL uses gRPC Transcoding syntax.

