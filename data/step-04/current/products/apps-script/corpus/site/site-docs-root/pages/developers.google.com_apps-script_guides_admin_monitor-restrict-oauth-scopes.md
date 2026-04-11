---
title: "Monitor & restrict data access \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes
  title: "Monitor & restrict data access \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Monitor & restrict data access
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how Google Workspace administrators can monitor and manage the data access users grant to Apps Script through OAuth scopes.
You can monitor specific OAuth grant events using the Investigation tool in the Google Admin console.
Access granted to scopes can be revoked, but users can re-grant access afterward.
Administrators can create alerts to be notified when users grant access to specific OAuth scopes.
High-risk OAuth scopes for certain services like Gmail and Google Drive can be restricted to prevent unauthorized app access.
You need an Enterprise, Education Standard, or Education
Plus Google Workspace account to monitor and restrict the data access that
users grant to Apps Script.
Google Workspace users grant access to levels of data, known as scopes, when
they run scripts or use apps like add-ons or web apps. This page
describes how to monitor or revoke the scopes that users grant access to within
their Google Workspace account.
Monitor OAuth grant events by scope
To view events where users grant access to a specific scope or scopes, follow
these steps:
In the Google Admin console, go to Menu
menu
> Security
> Security center
> Investigation tool .
Go to Investigation tool
Click Data Source and select OAuth log events .
Click Add condition > Attribute
and select Event .
Click Event and select Grant .
Click Add condition > Attribute
and select Scope .
For Scope , enter the scope you want to monitor. For a list of scopes,
refer to OAuth 2.0 Scopes for Google APIs .
Click Search . A list of grant events displays for the scopes you
specified.
Revoke OAuth grants
Important : After you revoke access to a scope, users can re-grant access.
Set up alerts for scopes that you don't want users to grant access to so that
you can revoke access as needed. Refer to
Create an alert for OAuth grants .
To revoke access to a scope, follow the steps for
Monitor OAuth grant events by scope ,
then select the events you want to revoke and click
Revoke access tokens for users .
Create an alert for OAuth grants
To receive an alert when someone grants access to a specific scope, follow the
steps for Monitor OAuth grant events by scope ,
then follow these steps:
At the top of the search, click Create activity rule .
For Rule name , enter a name for the alert.
Click Next: View Conditions . The conditions automatically populate
from the search parameters. Edit them if needed, then click
Next: Add Actions .
In Threshold 1 , select a time frame and threshold for the rule and check
the Send to alert center box.
Click Add email recipients and enter the email addresses that should
receive alerts. Click Done .
Click Next: Review .
Review the details and click Create Rule .
For more information, refer to
Create and manage activity rules .
Restrict access to high-risk OAuth scopes
You can restrict access to most Google Workspace services. For Gmail
and Google Drive, restrict access to high-risk OAuth scopes while allowing
users to give access to OAuth scopes that are not classified as high-risk. If
an app requests access to a restricted high-risk OAuth scope, and you have
not specifically trusted the app, users cannot authorize it.
To restrict access to high-risk OAuth scopes, refer to Restrict or unrestrict
Google services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
