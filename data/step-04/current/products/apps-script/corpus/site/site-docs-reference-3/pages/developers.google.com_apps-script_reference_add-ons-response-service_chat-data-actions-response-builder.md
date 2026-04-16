---
title: "Class ChatDataActionsResponseBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder
  title: "Class ChatDataActionsResponseBuilder \_|\_ Apps Script \_|\_ Google for\
    \ Developers"
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
Class ChatDataActionsResponseBuilder
Stay organized with collections
Save and categorize content based on your preferences.
ChatDataActionsResponseBuilder
A builder for Chat DataAction objects.
Available for Google Workspace add-ons that extend Google Chat.
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ()
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card )
const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId )
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction ()
. setMessage ( message ))
. build ()
Methods
Method Return type Brief description
build() Data Actions Response Builds the current action response.
set Create Chat Message Action(createMessageAction) Chat Data Actions Response Builder Sets the Create Message Action for this Data Actions Response .
set Update Chat Message Action(updateMessageAction) Chat Data Actions Response Builder Sets the Update Message Action for this Data Actions Response .
set Update Inline Preview Action(updateInlinePreviewAction) Chat Data Actions Response Builder Sets the Update Inline Preview Action for this Data Actions Response .
Detailed documentation
build()
Builds the current action response.
Return
DataActionsResponse — A DataActionResponse .
setCreateChatMessageAction(createMessageAction)
Sets the CreateMessageAction for this DataActionsResponse .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" )))
. build ()
const cardWithId = CardService . newCardWithId () . setCardId ( "card_one" ) . setCard ( card )
const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId )
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction ()
. setMessage ( message ))
. build ()
Parameters
Name Type Description
create Message Action Create Message Action The create message action to use.
Return
ChatDataActionsResponseBuilder — This object, for chaining.
setUpdateChatMessageAction(updateMessageAction)
Sets the UpdateMessageAction for this DataActionsResponse .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" )))
. build ()
const cardWithId = CardService . newCardWithId () . setCardId ( "card_one" ) . setCard ( card )
const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId )
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction ()
. setMessage ( message ))
. build ()
Parameters
Name Type Description
update Message Action Update Message Action The update message action to use.
Return
ChatDataActionsResponseBuilder — This object, for chaining.
setUpdateInlinePreviewAction(updateInlinePreviewAction)
Sets the UpdateInlinePreviewAction for this DataActionsResponse .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph () . setText ( "url" ))
. addWidget ( CardService . newButtonSet ()
. addButton ( CardService . newTextButton ()
. setText ( "Open URL!" )
. setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" )))))
. build ();
const cardWithId = CardService . newCardWithId () . setCardId ( "card_one" ) . setCard ( card );
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction ()
. addCardWithId ( cardWithId ))
. build ();
Parameters
Name Type Description
update Inline Preview Action Update Inline Preview Action The update inline preview to use.
Return
ChatDataActionsResponseBuilder — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
