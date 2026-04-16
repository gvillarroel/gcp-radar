---
title: "Use custom fields in the Close Case dialog \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/custom-fields-in-case-closure
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/release-notes
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/custom-fields-in-case-closure
  title: "Use custom fields in the Close Case dialog \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use custom fields in the Close Case dialog
Supported in:
Google secops
SOAR
This document explains how to use custom fields to collect and manage
information during the case closure process.
Create a custom field
You must create a custom field with a specific scope before it can be used in
the Close Case dialog. The Scope , Type , and Name of
a custom field are mandatory and can't be modified after it's saved.
To create a custom field for the Close Case dialog, follow these
steps:
Go to SOAR Settings > Case Data > Custom Fields .
Click Add Add Custom Fields .
Set the Scope to either Case or All . Custom fields
with an Alert scope can't be used in the Close Case dialog.
Enter a custom field Name .
Select a custom field Type from the list:
Free Text : Enter any text, up to 1,024 characters.
Radio Button : Provides two customizable options for selection.
Single Select : List with a single option to select. This type
supports a maximum of 1,024 characters, with each option name limited to
255 characters.
Multi Select : List with multiple options to select. This type
supports a maximum of 1,024 characters, with each option name limited to
255 characters.
Calendar : A date and time field. The default format is DD/MM/YYYY HH:MM:SS .
Click Save .
Add a custom field to the Close Case dialog
After you create a custom field with the correct scope, you can add it to the
Close Case dialog.
Go to SOAR Settings > Case Data > Close Case .
In the Custom Fields section, click
settings
Settings .
In the Case Closure Fields side drawer, click Manage Custom
Fields .
Select the custom fields you want to display in the Close Case
dialog. You can select up to 1,000 custom fields.
Click Save .
Close a single case
When you close a case individually, you can enter additional information for
the custom fields you added to the Close Case dialog.
Go to the case you want to close, then click Close Case .
In the Close Case dialog, the standard Reason and
Root Cause fields appear alongside any custom fields that have been
added. Select the appropriate options for your case and enter any additional
comments. These comments will be posted on the Case Wall .
Click Close .
Note: The Close Case dialog for bulk operations doesn't include
custom fields. Custom field values can differ between cases. To update or use
custom fields, you must close each case individually.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
