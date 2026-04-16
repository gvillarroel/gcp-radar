---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.032Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Skip language selection"
feature_slug: "skip-language-selection"
latest_feature_date: "2025-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "skip"
  - "language"
  - "selection"
  - "call"
  - "flows"
  - "can"
  - "route"
  - "callers"
---

# Skip language selection

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call flows can skip language selection and route callers to the default language and queue.

## Extended Definition

Call flows can skip language selection and route callers to the default language and queue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the text field, enter the language selection text that you want to play at the beginning of an IVR call—for example, For English, press 1.
- Configure the language selection message You can configure a language selection message to play at the start of all IVR calls.
- To skip the language selection message, do the following: Select Skip language selection .
- Once the language is selected, the page contains all messages callers hear.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- After hour deflection When After Hour deflection is enabled, calls will be deflected based on the specific operation hours for the queue or language the caller has selected or has been routed to.
- When enabled, configure the TSS or upload a custom greeting in Settings > Languages & Messages Overcapacity deflection callback option - Request Already Placed message. - Limit consumer to 1 callback request per queue: a consumer could leave a separate callback request on a different queue than the first request. - Limit consumer to 1 callback request across all queues.
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- Overcapacity Deflection When enabled, the "Overcapacity Deflection" and "Overcapacity Deflection Options" messages will play, as well as specific recordings for options like "Overcapacity Deflection Callback Option." When you add or remove options, be sure to update the message that lists the options callers have, otherwise, callers won't know the new options exist.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- When there's a need to force a selection for overcapacity for a particular call flow, setting the overcapacity deflection per-queue will direct callers where they need to go.
- Details At least one agent must be assigned to a call/chat queue for the queue to be enabled Agents can only be assigned to a leaf queue, so if there is a sub-queue associated, agents must be assigned to one of the sub-queues Queue menus are set up and ready to use when the color turns from red to white If enabling multiple languages, see Enabling Multiple Languages Assign agents to the IVR channel Go to Settings > Queue.
- Example : If the Mobile menu 'Existing Customer Help' is mapped to the IVR menu 'Customer' for PSTN fallback, and an end-user selects 'Existing Customer Help' when PSTN fallback is active, the call would automatically be directed to IVR queue menu 'Customer.' If no PSTN fallback to IVR option is enabled and configured, the PSTN fallback call will be directed to the top of the IVR structure for that language.

