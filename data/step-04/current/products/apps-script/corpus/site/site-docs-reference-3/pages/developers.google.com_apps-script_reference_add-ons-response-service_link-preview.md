---
title: "Class LinkPreview \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview
  title: "Class LinkPreview \_|\_ Apps Script \_|\_ Google for Developers"
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
Class LinkPreview
Stay organized with collections
Save and categorize content based on your preferences.
LinkPreview
Card action that displays a link preview card and smart chip in the host app. For more
information, refer to Preview links
with smart chips .
const decoratedText =
CardService . newDecoratedText (). setTopLabel ( 'Hello' ). setText ( 'Hi!' );
const cardSection = CardService . newCardSection (). addWidget ( decoratedText );
const card = CardService . newCardBuilder (). addSection ( cardSection ). build ();
const linkPreview =
AddOnsResponseService . newLinkPreview (). setPreviewCard ( card ). setTitle (
'Smart chip title' );
Methods
Method Return type Brief description
print Json() String Prints the JSON representation of this object.
set Link Preview Title(title) Link Preview Sets the title that displays in the link preview above the preview card.
set Preview Card(previewCard) Link Preview Sets the card that displays information about a link from a third-party or non-Google service.
set Title(title) Link Preview Sets the title that displays in the smart chip for the link preview.
Detailed documentation
printJson()
Prints the JSON representation of this object. This is for debugging only.
Return
String
setLinkPreviewTitle(title)
Sets the title that displays in the link preview above the preview card. If unset, the link
preview displays the header of the PreviewCard .
const linkPreview = AddOnsResponseService . newLinkPreview (). setLinkPreviewTitle (
'Link preview title' ,
);
Parameters
Name Type Description
title String The title of the link preview.
Return
LinkPreview — This object, for chaining.
setPreviewCard(previewCard)
Sets the card that displays information about a link from a third-party or non-Google service.
const decoratedText =
CardService . newDecoratedText (). setTopLabel ( 'Hello' ). setText ( 'Hi!' );
const cardSection = CardService . newCardSection (). addWidget ( decoratedText );
const card = CardService . newCardBuilder (). addSection ( cardSection ). build ();
const linkPreview =
AddOnsResponseService . newLinkPreview (). setPreviewCard ( card ). setTitle (
'Smart chip title' );
Parameters
Name Type Description
preview Card Card The preview card.
Return
LinkPreview — This object, for chaining.
setTitle(title)
Sets the title that displays in the smart chip for the link preview. If unset, the smart chip
displays the header of the PreviewCard .
const linkPreview =
AddOnsResponseService . newLinkPreview (). setTitle ( 'Smart chip title' );
Parameters
Name Type Description
title String The title of the smart chip.
Return
LinkPreview — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
