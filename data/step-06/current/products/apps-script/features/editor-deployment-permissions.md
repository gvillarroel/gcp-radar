---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.583Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Editor deployment permissions"
feature_slug: "editor-deployment-permissions"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/add-ons/overview"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder"
keywords:
  - "editor"
  - "deployment"
  - "permissions"
  - "apps"
  - "script"
  - "allows"
  - "editors"
  - "addition"
---

# Editor deployment permissions

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script allows script editors, in addition to owners, to publish add-ons and deploy scripts as web apps or executables.

## Extended Definition

Apps Script allows script editors, in addition to owners, to publish add-ons and deploy scripts as web apps or executables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .
- April 13, 2022 Feature You can now perform the following actions in the new Apps Script integrated development environment (IDE): Create test deployments for Editor Add-ons .
- Additional functionality for the Apps Script Integrated Development Environment (IDE) Script Editor .
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try a quickstart To see how building an add-on works, try a quickstart: Node.js Google Workspace add-on quickstart Apps Script Google Workspace add-on quickstart Apps Script Editor add-on quickstart Want to see Google Workspace add-ons in action?
- The Google Workspace add-ons API facilitates automated testing, background tasks, and deployment management with Cloud IAM permissions.
- Quickstart guides are available for developers to learn how to build Google Workspace add-ons using Node.js or Apps Script.
- Manage deployment permissions for service accounts or regular users with granular Cloud IAM permissions.

### "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Return EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse . requestFileScopeForActiveDocument() Requests the drive.file scope for the current active Editor document. // Display a permissions dialog to the user, requesting drive.file scope for // the current document on behalf of this add-on.
- Methods Method Return type Brief description build() Editor File Scope Action Response Builds the current Editor action response. request File Scope For Active Document() Editor File Scope Action Response Builder Requests the drive.file scope for the current active Editor document.
- AddOnsResponseService . newEditorFileScopeActionResponseBuilder () . requestFileScopeForActiveDocument () . build (); Note: To call this method, you must add the drive.file scope to the add-on's manifest.

