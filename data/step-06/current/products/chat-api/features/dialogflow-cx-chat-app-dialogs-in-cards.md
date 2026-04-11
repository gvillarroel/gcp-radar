---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.618Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Dialogflow CX chat app dialogs in cards"
feature_slug: "dialogflow-cx-chat-app-dialogs-in-cards"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
keywords:
  - "dialogflow"
  - "cx"
  - "dialogs"
  - "cards"
  - "apps"
  - "app"
  - "chat"
  - "in"
---

# Dialogflow CX chat app dialogs in cards

Product: Chat API
Coverage: LOW

## Step 02 Summary

Dialogflow CX Chat apps can open dialogs and receive user-entered data from card messages and dialogs.

## Extended Definition

Dialogflow CX Chat apps can open dialogs and receive user-entered data from card messages and dialogs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)

## Supporting Pages

### "Build a Dialogflow CX Google Chat app that understands and responds with\

- URL: [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Considerations for responding to slash commands and receiving data from cards or dialogs : When Dialogflow Chat apps receive a message with a slash command, the query input contains only the value of the text field.
- For a detailed walkthrough instructing you how to build and configure agents, see Create a Dialogflow CX agent . code Codelab: For an example of how to build a Dialogflow CX data store agent, see the knowledge Chat app from the codelab Build apps for Google Chat with Gemini . code Codelab: For an example of how to build a Dialogflow CX conversational agent, see the feedback Chat app from the codelab Build apps for Google Chat with Gemini .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To build a Google Chat app integrated with Dialogflow CX, first enable the necessary APIs and set up a Google Cloud project.
- Send card messages from Dialogflow code Codelab: For an applied example of sending card messages from Dialogflow, see Display sources in knowledge Chat app answers in the codelab Build apps for Google Chat with Gemini.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- For an example in Google Chat apps, see Display cards and dialogs in columns .
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.
- Multiple cards can be strung together sequentially, which helps users complete multi-step processes, like filling in form data. code Codelab: Ready to build a more advanced Chat app?

