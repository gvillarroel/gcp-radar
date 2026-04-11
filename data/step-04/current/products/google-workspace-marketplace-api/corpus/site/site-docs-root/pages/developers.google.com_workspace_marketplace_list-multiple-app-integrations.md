---
title: "List app integrations together \_|\_ Google Workspace Marketplace \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/marketplace/list-multiple-app-integrations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace
source_metadata:
  url: https://developers.google.com/workspace/marketplace/list-multiple-app-integrations
  title: "List app integrations together \_|\_ Google Workspace Marketplace \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Guides
Send feedback
List app integrations together
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Publishing multiple app integrations within a single app listing streamlines user experience by enabling simultaneous installation and authorization.
This approach can accelerate user acquisition compared to separate listings for each integration.
Web apps, Drive apps, and Editor add-ons (Docs, Sheets, Slides, Forms) can often be combined within one listing, with certain compatibility rules outlined in a provided table.
Before combining integrations, developers should be aware of potential impacts like broader consent screens, scope verification, and user access considerations.
Detailed instructions are given for adding multiple integrations to both new and existing app listings, emphasizing the use of a shared Google Cloud project.
If you've developed multiple app integrations, you might want to publish them
together in one app listing. Doing so lets users install and authorize them at
the same time, provides a more seamless user experience, and lets you grow your
user count faster because all integrations are installed from one listing.
For example, if your app offers a specific integration with Google Sheets and
is available as a web app, instead of creating two app listings for a
Sheets add-on and a web app, you can
list them together as one app.
To determine if you can list your app integrations together, refer to the next
section.
App integrations you can list together
Use this table to learn which app integrations can be included in a single app
listing.
Can be included with:
Web app
Drive app
Docs add-on
Sheets add-on
Slides add-on
Forms add-on
Google Workspace add-on
Google Chat app
Web app
x
x
x
x
x
Drive app
x
x
x
x
x
x
Docs add-on
x
x
x
x
x
x
Sheets add-on
x
x
x
x
x
x
Slides add-on
x
x
x
x
x
x
Forms add-on
x
x
x
x
x
x
Google Workspace add-on
x
x
x
x
x
x*
x**
Google Chat app **
x**
*You can't list more than one Google Workspace add-on
in your app listing, but you can build a single Google Workspace add-on that
extends Gmail, Calendar, Chat,
Drive, Docs, Sheets,
Slides, and Meet.
**Only available for
Google Chat apps built as Google Workspace add-ons .
Otherwise, Chat apps must be listed separately in the
Marketplace.
Note: Usually Google Workspace add-ons can't be added to the same listing as a web app.
However, if you have an existing app listing that includes one or more
Editor add-ons and a web app, you can add a Google Workspace add-on
to the app listing.
Before you add multiple app integrations
Before you include more than one app integration in your app listing, consider
the following effects:
The consent screen lists all scopes required by all app integrations.
Any new scope is verified (when applicable).
If you add a new app integration that requires additional scopes to an
existing app listing, administrators who have already installed the original
app for their domain need to authorize the additional scopes in the
Google Admin console. Until they do, users within the domain are
individually prompted to authorize.
If you plan to combine existing app listings, there are additional effects to
consider. If you move an app integration from its original app listing to
another app listing:
Existing users might lose access and need to install the app listing you
moved it to.
User counts and reviews don't carry over.
You might need to update the consolidated Google Cloud project's configuration
to accommodate the new app integration.
You must reverify OAuth 2.0 scopes because they were previously approved for
a specific Google Cloud project.
Add multiple app integrations to a new app listing
To add multiple app integrations to a new app listing, do the following:
If you haven't created a Google Cloud project yet, set up a
Google Cloud project . If you built your app
integrations in Apps Script, make sure they're all associated
with the same Google Cloud project.
Enable and configure the Google Workspace Marketplace SDK with the information
for all the app integrations. Explain in the description that the app
includes multiple app integrations.
Add app integrations to an existing app listing
To add multiple app integrations to an existing app listing, do the following:
Make sure you have edit access to the existing app's Google Cloud project.
If the app integration you want to add was built with
Apps Script, set your add-on's
Apps Script project to the existing app's
Google Cloud project .
In the existing app's Google Cloud project, update the
Google Workspace Marketplace SDK.
On the App Configuration page under App Extension , select the app
integration to add and fill out the relevant fields.
Add information about the new app integration to the App Configuration
and Store Listing pages. Make sure you explain in the app description
that the app includes multiple app integrations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Multiple app integrations, excluding Google Chat apps, can be published in a single listing, allowing simultaneous installation and authorization for users. This offers a better experience and faster user growth. Web, Drive, Docs, Sheets, Slides, Forms, and Google Workspace add-ons can be combined. Adding integrations to an existing listing requires updating the Google Cloud project's configuration. New listings require setting up a project and configuring the Google Workspace Marketplace SDK with details for each integration.\n"]]
