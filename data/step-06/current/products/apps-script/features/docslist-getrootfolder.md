---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.662Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList.getRootFolder"
feature_slug: "docslist-getrootfolder"
latest_feature_date: "2012-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run"
keywords:
  - "docslist"
  - "getrootfolder"
  - "now"
  - "provides"
  - "method"
  - "retrieve"
  - "root"
  - "folder"
---

# DocsList.getRootFolder

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocsList now provides a method to retrieve the root folder.

## Extended Definition

DocsList now provides a method to retrieve the root folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added method to DocsList service to getRootFolder() .
- Deprecated Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) .
- The Slides service has been extended with the following new methods to support concrete color schemes: ColorScheme.setConcreteColor(type, color) ColorScheme.setConcreteColor(type, red, green, blue) ColorScheme.setConcreteColor(type, hexColor) The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values: RangeList.trimWhitespace() Range.removeDuplicates() Range.removeDuplicates(columnsToCompare) Range.trimWhitespace() May 20, 2019 Feature The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.

### Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Autocomplete The script editor provides a "content assist" feature, more commonly called "autocomplete," which reveals the global objects as well as methods and enums that are valid in the script's current context.
- Services are accessed through global objects, and methods can be called on these objects to perform actions or retrieve data, with the ability to chain method calls when they return other Apps Script classes.
- If you're not sure how to access a certain class, visit the root page for the service's reference documentation—it lists the classes for the service, and the methods that return them.
- The script editor provides an autocomplete feature that assists in identifying valid global objects, methods, and enums within the script's current context.

### Method: scripts.run \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)
- Source ID: `site-api-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The Status object's details field contains an array with a single ExecutionError object that provides information about the nature of the error. response object If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.
- Any user-facing error message is localized and sent in the details field, or localized by the client. details[] object An array that contains a single ExecutionError object that provides information about the nature of the error.
- This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the Authorization section; script projects that do not require authorization cannot be executed through this API.
- If the run call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body.

