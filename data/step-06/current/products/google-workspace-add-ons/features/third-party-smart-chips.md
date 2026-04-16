---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:23.681Z"
product_name: "Google Workspace add-ons"
product_slug: "google-workspace-add-ons"
feature_name: "Third-party smart chips"
feature_slug: "third-party-smart-chips"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips"
  - "https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip"
  - "https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/add-ons/guides/glossary"
keywords:
  - "third"
  - "party"
  - "smart"
  - "chips"
  - "lets"
  - "workspace"
  - "add"
  - "ons"
---

# Third-party smart chips

Product: Google Workspace add-ons
Coverage: MEDIUM

## Step 02 Summary

Lets Google Workspace Add-ons build third-party smart chips; Lets Google Workspace Add-ons build third-party smart chips.

## Extended Definition

Lets Google Workspace Add-ons build third-party smart chips; Lets Google Workspace Add-ons build third-party smart chips.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips](https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips)
- [https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip](https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip)
- [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/add-ons/guides/glossary](https://developers.google.com/workspace/add-ons/guides/glossary)

## Supporting Pages

### "Preview links with smart chips \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips](https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips)
- Source ID: `site-docs-root`
- Final score: 328
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: For Slides, labelText and localizedLabelText don't render, but you must include labelText for when Slides starts supporting third-party smart chips. localizedLabelText is optional. { "oauthScopes" : [ "https://www.googleapis.com/auth/workspace.linkpreview" ], "addOns" : { "common" : { "name" : "Preview support cases" , "logoUrl" : "https://www.example.com/images/company-logo.png" , "layoutProperties" : { "primaryColor" : "#dd4b39" } }, "docs" : { "linkPreviewTriggers" : [ { "runFunction" : "caseLinkPreview" , "patterns" : [ { "hostPattern" : "example.com" , "pathPrefix" : "support/cases" }, { "hostPattern" : " .example.com" , "pathPrefix" : "cases" }, { "hostPattern" : "cases.example.com" } ], "labelText" : "Support case" , "logoUrl" : "https://www.example.com/images/support-icon.png" , "localizedLabelText" : { "es" : "Caso de soporte" } } ] }, "sheets" : { "linkPreviewTriggers" : [ { "runFunction" : "caseLinkPreview" , "patterns" : [ { "hostPattern" : "example.com" , "pathPrefix" : "support/cases" }, { "hostPattern" : " .example.com" , "pathPrefix" : "cases" }, { "hostPattern" : "cases.example.com" } ], "labelText" : "Support case" , "logoUrl" : "https://www.example.com/images/support-icon.png" , "localizedLabelText" : { "es" : "Caso de soporte" } } ] }, "slides" : { "linkPreviewTriggers" : [ { "runFunction" : "caseLinkPreview" , "patterns" : [ { "hostPattern" : "example.com" , "pathPrefix" : "support/cases" }, { "hostPattern" : " .example.com" , "pathPrefix" : "cases" }, { "hostPattern" : "cases.example.com" } ], "labelText" : "Support case" , "logoUrl" : "https://www.example.com/images/support-icon.png" , "localizedLabelText" : { "es" : "Caso de soporte" } } ] } } } In the example, the Google Workspace add-on previews links for a company's support case service.
- Page Summary outlined flag Google Workspace add-ons can enhance link interactions in Docs, Sheets, and Slides by replacing them with smart chips or linked titles that reveal detailed previews.
- Home Google Workspace Add-ons Send feedback Preview links with smart chips Stay organized with collections Save and categorize content based on your preferences.
- This page explains how to build a Google Workspace add-on that lets Google Docs, Sheets, and Slides users preview links from a third-party service.

### "Create third-party resources from the @ menu \_|\_ Google Workspace add-ons\

- URL: [https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip](https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manifest Apps Script apps-script/3p-resources/appsscript.json View on GitHub { "timeZone" : "America/New York" , "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "https://www.googleapis.com/auth/workspace.linkpreview" , "https://www.googleapis.com/auth/workspace.linkcreate" ], "addOns" : { "common" : { "name" : "Manage support cases" , "logoUrl" : "https://developers.google.com/workspace/add-ons/images/support-icon.png" , "layoutProperties" : { "primaryColor" : "#dd4b39" } }, "docs" : { "linkPreviewTriggers" : [ { "runFunction" : "caseLinkPreview" , "patterns" : [ { "hostPattern" : "example.com" , "pathPrefix" : "support/cases" }, { "hostPattern" : " .example.com" , "pathPrefix" : "cases" }, { "hostPattern" : "cases.example.com" } ], "labelText" : "Support case" , "localizedLabelText" : { "es" : "Caso de soporte" }, "logoUrl" : "https://developers.google.com/workspace/add-ons/images/support-icon.png" } ], "createActionTriggers" : [ { "id" : "createCase" , "labelText" : "Create support case" , "localizedLabelText" : { "es" : "Crear caso de soporte" }, "runFunction" : "createCaseInputCard" , "logoUrl" : "https://developers.google.com/workspace/add-ons/images/support-icon.png" } ] } } } Node.js Note: To use the following deployment resource, replace $URL1 and $URL2 with the URLs of the functions for creating a third-party resource and creating a link preview. node/3p-resources/deployment.json View on GitHub { "oauthScopes" : [ "https://www.googleapis.com/auth/workspace.linkpreview" , "https://www.googleapis.com/auth/workspace.linkcreate" ], "addOns" : { "common" : { "name" : "Manage support cases" , "logoUrl" : "https://developers.google.com/workspace/add-ons/images/support-icon.png" , "layoutProperties" : { "primaryColor" : "#dd4b39" } }, "docs" : { "linkPreviewTriggers" : [ { "runFunction" : "$URL1" , "patterns" : [ { "hostPattern" : "example.com" , "pathPrefix" : "support/cases" }, { "hostPattern" : " .example.com" , "pathPrefix" : "cases" }, { "hostPattern" : "cases.example.com" } ], "labelText" : "Support case" , "localizedLabelText" : { "es" : "Caso de soporte" }, "logoUrl" : "https://developers.google.com/workspace/add-ons/images/support-icon.png" } ], "createActionTriggers" : [ { "id" : "createCase" , "labelText" : "Create support case" , "localizedLabelText" : { "es" : "Crear caso de soporte" }, "runFunction" : "$URL2" , "logoUrl" : "https://developers.google.com/workspace/add-ons/images/support-icon.png" } ] } } } Code Apps Script apps-script/3p-resources/3p-resources.gs View on GitHub / Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- This page explains how to build a Google Workspace add-on that lets Google Docs users create resources, such as a support case or project task, in a third-party service from within Google Docs.
- Home Google Workspace Add-ons Send feedback Create third-party resources from the @ menu Stay organized with collections Save and categorize content based on your preferences.
- JsonObject cardHeader = new JsonObject (); String caseName = String . format ( "Case %s" , caseDetails . get ( "name" )); cardHeader . add ( "title" , new JsonPrimitive ( caseName )); JsonObject textParagraph = new JsonObject (); textParagraph . add ( "text" , new JsonPrimitive ( caseDetails . get ( "description" ))); JsonObject widget = new JsonObject (); widget . add ( "textParagraph" , textParagraph ); JsonArray widgets = new JsonArray (); widgets . add ( widget ); JsonObject section = new JsonObject (); section . add ( "widgets" , widgets ); JsonArray sections = new JsonArray (); sections . add ( section ); JsonObject previewCard = new JsonObject (); previewCard . add ( "header" , cardHeader ); previewCard . add ( "sections" , sections ); JsonObject linkPreview = new JsonObject (); linkPreview . add ( "title" , new JsonPrimitive ( caseName )); linkPreview . add ( "previewCard" , previewCard ); JsonObject action = new JsonObject (); action . add ( "linkPreview" , linkPreview ); JsonObject renderActions = new JsonObject (); renderActions . add ( "action" , action ); return renderActions ; } } Related resources Preview links with smart chips Test your add-on Google Docs manifest Card interfaces for link previews Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Package google.apps.card.v1 \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following JSON returns a unique title for the link preview and its smart chip, and a preview card with a header and text description: { "action": { "linkPreview": { "title": "Smart chip title", "linkPreviewTitle": "Link preview title", "previewCard": { "header": { "title": "Preview card header", }, "sections": [ { "widgets": [ { "textParagraph": { "text": "Description of the link." } } ] } ] } } } } The example returns the following link preview: Fields previewCard Card A card that displays information about a link from a third-party service. title string The title that displays in the smart chip for the link preview.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- For more information, see Create third-party resources from the @ menu . modifyOperations[] ModifyCard For add-ons in Google Chat , updates a card based on a user interaction.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["This content outlines UI components for Google Chat apps and Workspace add-ons, structured within cards.

### Glossary \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/add-ons/guides/glossary](https://developers.google.com/workspace/add-ons/guides/glossary)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key concepts include: Calendar conferencing add-ons (for third-party conferencing), cards (UI pages), card-based add-ons, conference data/solutions , context (host app state), contextual triggering , editor add-ons , event objects (data passed to the server), Gmail add-ons , homepages , manifest (project configuration), manifest triggers , sidebar , smart chip , trigger (event response), trigger function , widget (UI element), and widget handler functions .\n"]]
- You can configure your add-on to use smart chips to preview links for a third-party or non-Google service.
- Conference data The set of information Google Calendar needs in order to let users create and join third-party conferences enabled by a Google Workspace add-on or Calendar conferencing add-on.
- Conference solution A representation of a third-party conference that can be created from Google Calendar using Google Workspace add-on or Calendar conferencing add-on.

