---
title: "Class InsertSection \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/insert-section
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/insert-section
  title: "Class InsertSection \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class InsertSection
Stay organized with collections
Save and categorize content based on your preferences.
InsertSection
A builder for InsertSection objects. Developers can insert a new section to the card by passing a
InsertSection to ModifyCard
Only available for Google Workspace add-ons that extend Google Workspace Studio.
Sample usage:
const insertSection = AddOnsResponseService . newInsertSection (). insertBelowSection ( 'sample_id' )
. setSection ( CardService . newCardSection (). setHeader ( 'New Section' ));
const modifyCard = AddOnsResponseService . newModifyCard ()
. setInsertSection ( insertSection );
Methods
Method Return type Brief description
insert At Top(onCardTop) Insert Section Sets the onCardTop flag, which indicates whether the new section should be inserted at the top
of the card.
insert Below Section(sectionId) Insert Section Sets the section ID, and the new section is inserted below it.
set Section(section) Insert Section Sets the card section to be inserted.
Detailed documentation
insertAtTop(onCardTop)
Sets the onCardTop flag, which indicates whether the new section should be inserted at the top
of the card.
Parameters
Name Type Description
on Card Top Boolean The onCardTop flag.
Return
InsertSection — The insert section object, for chaining.
insertBelowSection(sectionId)
Sets the section ID, and the new section is inserted below it. If the section ID is not found,
then the new section is inserted at the end of the card.
Parameters
Name Type Description
section Id String The ID of the section to insert below.
Return
InsertSection — The insert section object, for chaining.
setSection(section)
Sets the card section to be inserted.
Parameters
Name Type Description
section Card Section The Card Section to be inserted.
Return
InsertSection — The insert section object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
