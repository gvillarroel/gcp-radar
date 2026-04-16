---
title: "Class AddOnsResponseService \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service
  title: "Class AddOnsResponseService \_|\_ Apps Script \_|\_ Google for Developers"
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
Class AddOnsResponseService
Stay organized with collections
Save and categorize content based on your preferences.
AddOnsResponseService
AddOnsResponseService provides the ability to create responses for Google Workspace
add-ons.
Sample usage:
function myFunction () {
return AddOnsResponseService . newChatDataActionBuilder ();
}
The following example shows how a Chat app responds with a dialog:
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" )))
. build ();
const actionResponse = AddOnsResponseService . newActionResponseBuilder ()
. setNavigation ( AddOnsResponseService . newNavigation () . pushCard ( card ))
. build ();
The following example shows how a Chat app responds with a link preview card:
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
. addCardWithId ( cardWithId )) . build ();
Properties
Property Type Description
Addon Compose Ui Action Type Addon Compose Ui Action Type The Addon Compose Ui Action Type enumeration.
Composed Email Type Composed Email Type The Composed Email Type enumeration.
Content Type Content Type The Content Type enumeration.
End Navigation End Navigation The End Navigation enumeration.
On Close On Close The On Close enumeration.
Open As Open As The Open As enumeration.
Send Status Send Status The Send Status enumeration.
Update Draft Body Type Update Draft Body Type The Update Draft Body Type enumeration.
Methods
Method Return type Brief description
new Accessory Widget() Accessory Widget Creates a new Accessory Widget .
new Action() Action Creates a new Action .
new Action Response Builder() Action Response Builder Creates a Action Response Builder .
new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder .
new Attachment() Attachment Creates a Attachment .
new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder .
new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder .
new Chat Message() Chat Message Creates a Chat Message .
new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder .
new Create Message Action() Create Message Action Creates a Create Message Action .
new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder .
new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder .
new Link Preview() Link Preview Creates a Link Preview .
new Navigation() Navigation Creates a Navigation .
new Notification() Notification Creates a Notification .
new Open Link() Open Link Creates a Open Link .
new Render Action Builder() Render Action Builder Creates a new Render Action Builder .
new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder .
new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder .
new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ;
new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action .
new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action .
new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action .
new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action .
new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action .
new Update Message Action() Update Message Action Creates a Update Message Action .
Detailed documentation
newAccessoryWidget()
Creates a new AccessoryWidget .
const widget = CardService . newButtonSet ()
. addButton ( CardService . newImageButton ()
. setIcon ( CardService . Icon . PHONE )
. setOnClickAction ( CardService . newAction ()
. setFunctionName ( "phone" )))
. addButton ( CardService . newTextButton ()
. setText ( "Robot" )
. setIconUrl ( "https://developers.google.com/chat/images/quickstart-app-avatar.png" )
. setOnClickAction ( CardService . newAction ()
. setFunctionName ( "robot" )));
const accessoryWidget = AddOnsResponseService . newAccessoryWidget ()
. addWidget ( widget );
Return
AccessoryWidget — An empty AccessoryWidget.
newAction()
Creates a new Action .
Return
Action — An empty Action.
newActionResponseBuilder()
Creates a ActionResponseBuilder .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ();
const actionResponse = AddOnsResponseService . newActionResponseBuilder ()
. setNavigation ( AddOnsResponseService . newNavigation (). pushCard ( card ))
. build ();
Return
ActionResponseBuilder — An empty ActionResponse builder.
newAddonComposeUiActionResponseBuilder()
Creates a AddonComposeUiActionResponseBuilder .
Return
AddonComposeUiActionResponseBuilder — An empty AddonComposeUiActionResponseBuilder.
newAttachment()
Creates a Attachment .
Return
Attachment — An empty attachment.
newCalendarEventActionResponseBuilder()
Creates a CalendarEventActionResponseBuilder .
Return
CalendarEventActionResponseBuilder — An empty CalendarEventActionResponseBuilder .
newChatDataActionBuilder()
Creates a ChatDataActionsResponseBuilder .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ();
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card );
const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId );
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction ()
. setMessage ( message ))
. build ();
Return
ChatDataActionsResponseBuilder — An empty ChatDataActionsResponseBuilder.
newChatMessage()
Creates a ChatMessage .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ();
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card );
const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId );
Return
ChatMessage — An empty ChatMessage.
newComposeActionResponseBuilder()
Creates a ComposeActionResponseBuilder .
Return
ComposeActionResponseBuilder — An empty ComposeActionResponse builder.
newCreateMessageAction()
Creates a CreateMessageAction .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ();
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card );
const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId );
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction ()
. setMessage ( message ))
. build ();
Return
CreateMessageAction — An empty CreateMessageAction.
newDriveItemsSelectedActionResponseBuilder()
Creates a DriveItemsSelectedActionResponseBuilder .
Return
DriveItemsSelectedActionResponseBuilder — An empty DriveItemsSelectedActionResponseBuilder .
newEditorFileScopeActionResponseBuilder()
Creates a EditorFileScopeActionResponseBuilder .
Return
EditorFileScopeActionResponseBuilder — An empty EditorFileScopeActionResponseBuilder .
newLinkPreview()
Creates a LinkPreview .
Return
LinkPreview — An empty LinkPreview.
newNavigation()
Creates a Navigation .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( 'Card title' ))
. addSection ( cardSection )
. build ();
const navigation = AddOnsResponseService . newNavigation ()
. pushCard ( card );
Return
Navigation — An empty Navigation.
newNotification()
Creates a Notification .
const notification = AddOnsResponseService . newNotification (). setText ( "You closed a dialog!" );
const navigation = AddOnsResponseService . newNavigation ()
. setEndNavigation ( AddOnsResponseService . EndNavigation . CLOSE_DIALOG );
Return
Notification — An empty Notification.
newOpenLink()
Creates a OpenLink .
Return
OpenLink — An empty OpenLink.
newRenderActionBuilder()
Creates a new RenderActionBuilder .
Return
RenderActionBuilder — An empty RenderActionBuilder.
newUniversalActionResponseBuilder()
Creates a UniversalActionResponseBuilder .
Return
UniversalActionResponseBuilder — An empty UniversalActionResponse builder.
newUpdateDraftActionResponseBuilder()
Creates a UpdateDraftActionResponseBuilder .
Return
UpdateDraftActionResponseBuilder — An empty UpdateDraftActionResponseBuilder.
newUpdateDraftBccRecipientsAction()
Creates a UpdateDraftBccRecipientsAction ;
Return
UpdateDraftBccRecipientsAction — An empty UpdateDraftBccRecipientsAction.
newUpdateDraftBodyAction()
Creates a UpdateDraftBodyAction .
Return
UpdateDraftBodyAction — An empty UpdateDraftBodyAction.
newUpdateDraftCcRecipientsAction()
Creates a UpdateDraftCcRecipientsAction .
Return
UpdateDraftCcRecipientsAction — An Empty UpdateDraftCcRecipientsAction.
newUpdateDraftSubjectAction()
Creates a UpdateDraftSubjectAction .
Return
UpdateDraftSubjectAction — An empty UpdateDraftSubjectAction.
newUpdateDraftToRecipientsAction()
Creates a UpdateDraftToRecipientsAction .
Return
UpdateDraftToRecipientsAction — An empty UpdateDraftToRecipientsAction.
newUpdateInlinePreviewAction()
Creates a UpdateInlinePreviewAction .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Unfurl Card!" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "url" ))
. addWidget ( CardService . newButtonSet ()
. addButton ( CardService . newTextButton ()
. setText ( "Open URL!" )
. setOpenLink ( CardService . newOpenLink (). setUrl ( "https://www.google.com" )))))
. build ();
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card );
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction ()
. addCardWithId ( cardWithId )). build ();
Return
UpdateInlinePreviewAction — An empty UpdateInlinePreviewAction.
newUpdateMessageAction()
Creates a UpdateMessageAction .
const card = CardService . newCardBuilder ()
. setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" ))
. addSection ( CardService . newCardSection ()
. addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" )))
. build ();
const cardWithId = CardService . newCardWithId (). setCardId ( "card_one" ). setCard ( card );
const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId );
const chatDataAction = AddOnsResponseService . newChatDataActionBuilder ()
. setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction ()
. setMessage ( message ))
. build ();
Return
UpdateMessageAction — An empty UpdateMessageAction.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
