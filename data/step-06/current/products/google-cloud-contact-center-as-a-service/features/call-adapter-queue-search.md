---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.095Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call Adapter queue search"
feature_slug: "call-adapter-queue-search"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "call"
  - "adapter"
  - "queue"
  - "search"
  - "adds"
  - "finding"
  - "right"
  - "more"
---

# Call Adapter queue search

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Call Adapter adds search for finding the right queue more quickly.

## Extended Definition

The Call Adapter adds search for finding the right queue more quickly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Here are some of the characteristics of an emergency services callback queue: You can't assign an emergency phone number to more than one emergency queue, but you can assign multiple emergency phone numbers to the same emergency queue.
- Configure queue-level EWT caller announcements Queue-level announcements allow for more personalized interactions with end-users while they wait in different queues.
- Dialing '0' transfers user to another queue : The caller will be transferred to the queue selected in the search field.
- Do the following: In the Search field, search for the queue that you want to deflect calls to.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .
- Prevent agents from selecting a queue for an outbound call You can hide a queue in the agent adapter so that agents can't select it for an outbound call.
- Agent experience From the Agent Adapter, while an active call from an enabled queue, click on the Actions button, then click Redact .

### "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- Source ID: `site-docs-reference-required-8`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If auto-answer is enabled, an Incoming call screen appears in the call adapter and the target pick-up time a After you answer the call, the following sequence begins in the call adapter: A new screen appears that displays caller information, queue information, and the support phone number that the caller used.
- If you have a Salesforce or Zendesk customer relationship management (CRM) app, click the phone number that you want to dial, paste a phone number into the call adapter, or dial the number.
- To make an outbound call without outbound calling improvements, follow these steps: In the call adapter, click Start call .
- To make an outbound call using flexible outbound dialing, follow these steps: In the call adapter, click Start call .

