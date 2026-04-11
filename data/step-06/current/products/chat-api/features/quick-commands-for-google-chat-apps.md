---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.586Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Quick commands for Google Chat apps"
feature_slug: "quick-commands-for-google-chat-apps"
latest_feature_date: "2025-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/commands"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
keywords:
  - "commands"
  - "quick"
  - "respond"
  - "apps"
  - "chat"
  - "can"
  - "now"
  - "for"
---

# Quick commands for Google Chat apps

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat apps can now respond to quick commands selected by users from the message reply area in a Chat space.

## Extended Definition

Chat apps can now respond to quick commands selected by users from the message reply area in a Chat space.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/commands](https://developers.google.com/workspace/chat/commands)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)

## Supporting Pages

### Respond to Google Chat app commands \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/commands](https://developers.google.com/workspace/chat/commands)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Chat app handles MESSAGE interaction events, detects whether the interaction event contains the matching command ID, and returns a private message: Node.js node/avatar-app/index.js View on GitHub / Handles slash and quick commands. @param {Object} event - The Google Chat event. @param {Object} res - The HTTP response object. / function handleAppCommands ( event , res ) { const { appCommandId , appCommandType } = event . appCommandMetadata ; switch ( appCommandId ) { case ABOUT COMMAND ID : return res . send ({ privateMessageViewer : event . user , text : 'The Avatar app replies to Google Chat messages.' }); case HELP COMMAND ID : return res . send ({ privateMessageViewer : event . user , text : 'The Avatar app replies to Google Chat messages.' }); } } Apps Script apps-script/avatar-app/avatar-app.gs View on GitHub // Checks for the presence of a slash command in the message. if ( event . message . slashCommand ) { // Executes the slash command logic based on its ID. // Slash command IDs are set in the Google Chat API configuration. switch ( event . message . slashCommand . commandId ) { case ABOUT COMMAND ID : return { privateMessageViewer : event . user , text : 'The Avatar app replies to Google Chat messages.' }; } } Python python/avatar-app/main.py View on GitHub def handle app commands ( event : Mapping [ str , Any ]) - > Mapping [ str , Any ]: """Handles slash and quick commands.
- Create a quick command if your Chat app can respond to the user immediately, without waiting for additional input.
- The Chat app handles APP COMMAND interaction events, detects whether the interaction event contains the matching command ID, and returns a private message: Node.js node/avatar-app/index.js View on GitHub / Handles slash and quick commands. @param {Object} event - The Google Chat event. @param {Object} res - The HTTP response object. / function handleAppCommands ( event , res ) { const { appCommandId , appCommandType } = event . appCommandMetadata ; switch ( appCommandId ) { case ABOUT COMMAND ID : return res . send ({ privateMessageViewer : event . user , text : 'The Avatar app replies to Google Chat messages.' }); case HELP COMMAND ID : return res . send ({ privateMessageViewer : event . user , text : 'The Avatar app replies to Google Chat messages.' }); } } Apps Script apps-script/avatar-app/avatar-app.gs View on GitHub / Handles the APP COMMAND event type.
- It includes information like the command ID and the user who triggered it. / function onAppCommand ( event ) { // Executes the quick command logic based on its ID. // Command IDs are set in the Google Chat API configuration. switch ( event . appCommandMetadata . appCommandId ) { case HELP COMMAND ID : return { privateMessageViewer : event . user , text : 'The Avatar app replies to Google Chat messages.' }; } } Python python/avatar-app/main.py View on GitHub def handle app commands ( event : Mapping [ str , Any ]) - > Mapping [ str , Any ]: """Handles slash and quick commands.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- Available for Google Chat apps and unavailable for Google Workspace add-ons. multi select data source can be only one of the following: external data source Action An external data source, such as a relational database. platform data source PlatformDataSource A data source from Google Workspace.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- For example, https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png . start icon can be only one of the following: start icon uri string SelectionType The format for the items that users can select.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.
- Multiple cards can be strung together sequentially, which helps users complete multi-step processes, like filling in form data. code Codelab: Ready to build a more advanced Chat app?
- To add trusted testers and learn more about testing interactive features, see Test interactive features for Google Chat apps .

