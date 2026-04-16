---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.025Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Standalone queue menu settings page"
feature_slug: "standalone-queue-menu-settings-page"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "standalone"
  - "queue"
  - "menu"
  - "settings"
  - "page"
  - "each"
  - "has"
  - "loads"
---

# Standalone queue menu settings page

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Each queue has a standalone Queue Menu Settings page that loads faster than the embedded queue settings view.

## Extended Definition

Each queue has a standalone Queue Menu Settings page that loads faster than the embedded queue settings view.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Access queue menu settings \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/access-queue-menu-settings)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the settings for a queue in the following ways: Browse for queue settings Open a stand-alone queue settings page You can find instructions for configuring queue settings in Queue and menu settings , Multicast and deltacast , and other pages in the Routing section of the documentation.
- Open a stand-alone queue settings page from the Queues menu To open a stand-alone queue settings page from the Queues menu, follow these steps: In the CCAI Platform portal, click Queues .
- A stand-alone queue settings page loads faster than a settings page that you browse for , and you can open it directly with a URL.
- You can also open stand-alone queue settings pages from the Queues menu and the Phone Number Management pane .

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .
- Text 1 for Payments Text 2 for Billing Text 3 for All other enquiries When naming your queues, keep in mind that you cannot use protected SMS command words in queue names, including: STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT START, YES, UNSTOP HELP, INFO Command words for EXIT (configurable on Chat settings page) Command words for BACK (configurable on Chat settings page) If you try to name the queue using a protected word, an error message is displayed.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- While deflection options and configuration is done on the Call settings and Queue Settings pages, the actual hours are set on the Support Center Details settings page.
- Deflection after hours of operation can be further customized for each leaf-queue in Settings > Queue .
- If you don't see the Settings menu, click menu Menu , and then click Settings > Queue .

