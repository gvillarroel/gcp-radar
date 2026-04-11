---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.655Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "getChatThreads method"
feature_slug: "getchatthreads-method"
latest_feature_date: "2022-11-01"
deprecation_date: "2022-11-01"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/chat"
  - "https://developers.google.com/apps-script/api/reference/rest"
keywords:
  - "getchatthreads"
  - "deprecates"
  - "including"
  - "chat"
  - "methods"
  - "method"
  - "api"
  - "the"
---

# getChatThreads method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecates the getChatThreads() Chat API methods, including the getChatThreads(start, max) overload, with no Apps Script replacement provided; Marks the getChatThreads() and getChatThreads(start, max) methods as deprecated, with no replacement method available in Apps Script; deprecated on 2022-11-01.

## Extended Definition

Deprecates the getChatThreads() Chat API methods, including the getChatThreads(start, max) overload, with no Apps Script replacement provided; Marks the getChatThreads() and getChatThreads(start, max) methods as deprecated, with no replacement method available in Apps Script; deprecated on 2022-11-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.
- November 01, 2022 Deprecated Apps Script has sunset the following methods: getChatThreads() getChatThreads(start, max) There isn't a replacement method to get this data with Apps Script.
- The Spreadsheet API adds a new NamedRange type and the following related methods: NamedRange.getName() gets the name of the named range NamedRange.setName(name) sets the name of the named range NamedRange.getRange() gets the underlying range associated with the named range NamedRange.setRange(range) sets the underlying range associated with the named range NamedRange.remove() deletes the named range Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet Sheet.getNamedRanges() gets an array of all the named ranges in the sheet Protection.setNamedRange(range) associates an existing protected range with an existing named range The Utilities API includes a new getUuid() method that generates a unique identifier.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Like all advanced services in Apps Script, the Chat service uses the same objects, methods, and parameters as the public API.
- For example, to call the spaces.messages.create method, add the following: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Limits and considerations The Advanced Chat service doesn't support: The Chat API method media.download .
- The Advanced Chat service has limitations and does not support the media.download method or Developer Preview methods, which require using UrlFetchApp . manage Chat spaces, members, and messages.
- Chat API methods available in Developer Preview To download a message attachment or call a developer preview method, use UrlFetchApp instead.

### Apps Script API \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects Methods create POST /v1/projects Creates a new, empty script project with no script files and a base manifest file. get GET /v1/projects/{scriptId} Gets a script project's metadata. getContent GET /v1/projects/{scriptId}/content Gets the content of the script project, including the code source and metadata for each script file. getMetrics GET /v1/projects/{scriptId}/metrics Get metrics data for scripts, such as number of executions and active users. updateContent PUT /v1/projects/{scriptId}/content Updates the content of the specified script project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://script.googleapis.com REST Resource: v1.processes Methods list GET /v1/processes List information about processes made by or on behalf of a user, such as process type and current status. listScriptProcesses GET /v1/processes:listScriptProcesses List information about a script's executed processes, such as process type and current status.
- REST Resource: v1.projects.deployments Methods create POST /v1/projects/{scriptId}/deployments Creates a deployment of an Apps Script project. delete DELETE /v1/projects/{scriptId}/deployments/{deploymentId} Deletes a deployment of an Apps Script project. get GET /v1/projects/{scriptId}/deployments/{deploymentId} Gets a deployment of an Apps Script project. list GET /v1/projects/{scriptId}/deployments Lists the deployments of an Apps Script project. update PUT /v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId} Updates a deployment of an Apps Script project.
- REST Resource: v1.projects.versions Methods create POST /v1/projects/{scriptId}/versions Creates a new immutable version using the current code, with a unique version number. get GET /v1/projects/{scriptId}/versions/{versionNumber} Gets a version of a script project. list GET /v1/projects/{scriptId}/versions List the versions of a script project.

