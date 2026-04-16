---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.121Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Headless Web SDK"
feature_slug: "headless-web-sdk"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api"
keywords:
  - "headless"
  - "web"
  - "sdk"
  - "lets"
  - "teams"
  - "build"
  - "fully"
  - "customized"
---

# Headless Web SDK

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Headless Web SDK lets teams build a fully customized and branded web support experience using its API suite.

## Extended Definition

The Headless Web SDK lets teams build a fully customized and branded web support experience using its API suite.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api)

## Supporting Pages

### "Headless web SDK guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the headless web SDK To install the headless web SDK, use the following code snippet in your project: npm install @ujet/websdk-headless --save Use the headless web SDK To use the headless Web SDK, you can follow the example code provided: import { Client } from "@ujet/websdk-headless" const client = new Client ({ ... }) async function authenticate () { const resp = await fetch ( "/your-auth-endpoint" ) const data = await resp . json () return { token : data . token } } const client = new Client ({ companyId : "YOUR-COMPANY-ID" , tenant : "YOUR-TENANT-NAME" , authenticate : authenticate , }) // const company = await client.getCompany() // const menus = await client.getMenus() The Client class accepts several options (you can customize according to your requirements): interface ClientOption { companyId : string ; authenticate : () = > Promise<TokenResponse> ; tenant ?: string ; host ?: string ; lang ?: string ; bridge ?: string ; cobrowse ?: { enabled : boolean ; messages ?: CobrowseMessages ; api ?: string ; license ?: string ; trustedOrigins ?: string []; capabilities ?: string []; registration ?: boolean ; redactedViews ?: string []; unredactedViews ?: string []; }; } Enable logging During implementation and testing it might be necessary to gather additional information in the console log.
- How can I help you today?" } , { type: "buttons" , buttons: [ { label: "Create New Order" , selected: false } , { label: "Check Order Status" , selected: true } , { label: "Check Account Balance" , selected: false } , ] } ] } , { sender: "end user" , timestamp: "2021-03-15 12:00:15Z" , content: [ { type: "text" , text: "Check Order Status" } ] } , { sender: "agent" , timestamp: "2021-03-15 12:00:16Z" , content: [ { type: "text" , text: "I can help you with that, what's your order number?" } ] } , { sender: "end user" , timestamp: "2021-03-15 12:00:20Z" , content: [ { type: "media" , media: { type: "image" , url: "https://ujet.s3.amazonaws.com/default-virtual-agent-avatar-1.png" } } ] } ] } } , signed: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' // JWT or other signed payload } try { const chat: Chat = await client.createChat ( 123 , { custom data }) } catch ( error ) { // handle error } Reference implementation For a reference implementation of the web SDK, see ccaas-web-headless-sdk-sample on GitHub.
- To enable logging for the headless SDK, import Logger and consoleLoggerHandler by adding the following code to your web application: import { Logger , consoleLoggerHandler } from '@ujet/websdk-headless' Logger . addHandler ( consoleLoggerHandler ) Configure Screen Share You can enable and configure Screen Share using the headless web SDK.
- The agent will not be able to control anything on the screen." , "allowText" : "Allow" , "denyText" : "Deny" } Custom data configuration The custom data option lets you pass arbitrary key-value pair data to the web SDK.

### "Web SDK API reference \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api)
- Source ID: `site-docs-reference-3`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Restrict queue transfers CCAI Platform lets you restrict the queues and teams that can transfer a session, and the queues and teams that can receive a transferred session.
- This lets you control the ability of agents to transfer sessions and receive transferred sessions based on the queues or teams that they belong to.
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Note: If turned off while customers contact support through your app, end-users will see the following message: "Sorry, customer support is not available now." Add and edit queues You can build and edit the structure of your queues just like using a text editor by using your keyboard.

