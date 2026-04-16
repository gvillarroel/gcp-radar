---
title: "Class ChatMessage \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message
  title: "Class ChatMessage \_|\_ Apps Script \_|\_ Google for Developers"
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
Class ChatMessage
Stay organized with collections
Save and categorize content based on your preferences.
ChatMessage
A Google Chat message .
Available for Google Workspace add-ons that extend Google Chat.
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ();
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card );
const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId );
Methods
Method Return type Brief description
add Accessory Widget(accessoryWidget) Chat Message Sets the accessoryWidget for this action.
add Card With Id(cardWithId) Chat Message Sets the card of the message.
set Text(text) Chat Message Sets the text of the message.
Detailed documentation
addAccessoryWidget(accessoryWidget)
Sets the accessoryWidget for this action.
Parameters
Name Type Description
accessory Widget Accessory Widget The accessoryWidget to set.
Return
ChatMessage — This object, for chaining.
addCardWithId(cardWithId)
Sets the card of the message.
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" )))
. build ();
const cardWithId = CardService . newCardWithId () . setCardId ( "card_one" ) . setCard ( card );
const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId );
Parameters
Name Type Description
card With Id Card With Id The cardWithId to set.
Return
ChatMessage — This object, for chaining.
setText(text)
Sets the text of the message.
const message = AddOnsResponseService . newChatMessage () . setText ( "Example text" );
Parameters
Name Type Description
text String The text part of a message.
Return
ChatMessage — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
