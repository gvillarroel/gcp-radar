---
title: "Package google.apps.script.type.docs \_|\_ Google Workspace add-ons \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/docs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/docs
  title: "Package google.apps.script.type.docs \_|\_ Google Workspace add-ons \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Reference
Send feedback
Package google.apps.script.type.docs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
DocsAddOnManifest customizes the appearance and execution of Google Docs add-ons, including homepage configuration, file scope authorization, link previews, and third-party resource creation.
DocsExtensionPoint defines a common format for Google Docs add-on triggers, specifying the endpoint function to execute when activated.
The manifest includes triggers for various events like homepage access, file authorization, link previews, and actions to create third-party resources.
Each extension point within the manifest specifies a runFunction which is the Apps Script function to be executed upon triggering the extension point.
Index
DocsAddOnManifest (message)
DocsExtensionPoint (message)
DocsAddOnManifest
Properties customizing the appearance and execution of a Google Docs add-on.
Fields
homepageTrigger
HomepageExtensionPoint
If present, this overrides the configuration from addOns.common.homepageTrigger .
onFileScopeGrantedTrigger
DocsExtensionPoint
Endpoint to execute when file scope authorization is granted for this document/user pair.
linkPreviewTriggers[]
LinkPreviewExtensionPoint
A list of extension points for previewing links in a Google Docs document. For details, see Preview links with smart chips .
createActionTriggers[]
CreateActionExtensionPoint
A list of extension points for creating third-party resources from within Google Workspace applications. For more information, see Create third-party resources from the @ menu .
DocsExtensionPoint
Common format for declaring a Docs add-on's triggers.
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-22 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-22 UTC."],[],["The provided content details the `DocsAddOnManifest` and `DocsExtensionPoint` for customizing Google Docs add-ons. `DocsAddOnManifest` properties include: `homepageTrigger` to override common homepage settings, `onFileScopeGrantedTrigger` to execute code upon file scope authorization, `linkPreviewTriggers` for link previews, and `createActionTriggers` for creating external resources. `DocsExtensionPoint` has a `runFunction` field, specifying the endpoint triggered upon activation. These components define how add-ons appear and function within Google Docs.\n"]]
