---
title: "Spotlights \_|\_ Cloud Shell \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-spotlights
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-spotlights
  title: "Spotlights \_|\_ Cloud Shell \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Shell
Reference
Send feedback
Spotlights
Stay organized with collections
Save and categorize content based on your preferences.
This page lists directives related to spotlights.
Spotlight pointers
<walkthrough-spotlight-pointer spotlightId=" SPOTLIGHT_ID "> LINK_TEXT </walkthrough-spotlight-pointer>
<walkthrough-spotlight-pointer cssSelector=" CSS_SELECTOR "> LINK_TEXT </walkthrough-spotlight-pointer>
Creates a link that highlights the specified UI element in
Google Cloud console when clicked.
You can spotlight an element on the page in one of two ways:
Spotlight/instrumentation ID
Using the spotlightId parameter, specify a DOM element's
instrumentation-id or
spotlight-id property value to select the element.
CSS selector
For elements without a spotlight
or instrumentation
ID, use the cssSelector parameter with a CSS selector to select the element.
Only one of these parameters is required. If both are provided, spotlightId
is used.
Multiple elements can be selected using a comma as a delimiter. All matching
elements are highlighted, with the first focused and scrolled into view.
For spotlights in Cloud Shell Editor, refer to
Cloud Shell Editor spotlights .
Parameters
Parameter
Type
Description
spotlightId
List
Spotlight/instrumentation IDs to spotlight, separated
by comma.
cssSelector
List
CSS selectors to spotlight, separated by comma.
title
String
(Optional) The tooltip to show when the user hovers
their mouse cursor over the spotlight link.
Here's a list of spotlight/instrumentation IDs you can use:
Spotlight/instrumentation ID
Highlighted element
console-nav-menu
The console navigation menu.
devshell-activate-button
The button to open Cloud Shell.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
