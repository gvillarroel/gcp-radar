---
title: "Extend Google Docs with add-ons \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/editors/docs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/editors/docs
  title: "Extend Google Docs with add-ons \_|\_ Google Workspace add-ons \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Extend Google Docs with add-ons
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Docs is a cloud-based document solution enabling real-time collaboration and offering robust tools for composing, editing, and sharing documents.
Docs add-ons, built using Apps Script, extend functionality by enabling workflow customization, integration with third-party systems, and connectivity with other Google Workspace applications.
Add-ons can manipulate document content, create custom interfaces, and automate tasks through triggers based on specific events.
Google provides comprehensive documentation and resources, including code samples, to guide developers in building Docs add-ons.
Google Docs is a
cloud-based document solution with real-time collaboration and powerful tools
to compose, edit, and share documents.
You can extend Docs with add-ons that build
customized workflow improvements, establish connectivity to third-party
systems, and integrate your documents with other Google Workspace
applications (like Google Slides).
You can see the Docs add-on others have
built on the
Google Workspace Marketplace .
What you can do
Here are a few things you can do with add-ons that extend
Docs:
Read, edit, visualize, and format text in Docs using the
built-in Apps Script
Document service . The service also lets you
create and modify tables, images, drawings, and equations appearing in
Docs.
Create custom menus and define multiple
custom dialogs and sidebars interfaces
using standard HTML and CSS.
Use add-on triggers to run specified
functions when certain triggering events occur.
Docs add-ons are built using
Apps Script. To learn more about how to access and manage
Google Docs with Apps Script, see
Extend Docs .
Document structure
The documents created in Docs have internal, tree-like structures
(similar to HTML or JSON) that define where and how text, images, tables, and
other elements appear. The Apps Script
Document service defines several classes
(such as Paragraph or
Table ) to help manage the different
element types.
See Structure of a document
to learn about these element classes and the rules that govern their
arrangement.
Triggers
Apps Script triggers let a script project execute a
specified function when certain conditions are met, such as when a document is
opened or when an add-on is installed.
See add-on triggers for more
information on what triggers can be used with Docs
add-ons and what restrictions apply to their use.
Getting started
When you're ready to take a look at some code, check out our
add-on samples , including
the Docs add-on
Quickstart featuring
Google Translate.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Google Docs is a cloud-based document solution that can be extended with add-ons via Apps Script. These add-ons can read, edit, visualize, and format text, create custom menus and dialogs, and integrate with other Google Workspace applications. Add-ons utilize Apps Script triggers to run functions when specific events occur. The documents' tree-like structure is managed through the Apps Script Document service. Resources are available, including add-on samples and a quickstart guide, to help begin developing.\n"]]
