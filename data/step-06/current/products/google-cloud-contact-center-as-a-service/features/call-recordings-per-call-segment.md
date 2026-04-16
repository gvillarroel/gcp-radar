---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.126Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call recordings per call segment"
feature_slug: "call-recordings-per-call-segment"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "call"
  - "recordings"
  - "per"
  - "segment"
  - "can"
  - "saved"
  - "separate"
  - "each"
---

# Call recordings per call segment

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call recordings can be saved as separate recordings for each call segment instead of a single recording for the whole call.

## Extended Definition

Call recordings can be saved as separate recordings for each call segment instead of a single recording for the whole call.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Recording separation Recording separation enables you to choose to receive separate call recordings for each call segment rather than all of them in a single file.
- The ability to keep separate call records for each conversation segment allows for more flexible call analysis and, potentially, more efficient issue resolution.
- With Secure Payments, callers are taken through a payment flow and call recording is automatically paused Call recordings are saved as .mp3 files unless otherwise requested.
- Listen to call recordings Once the call has been recorded, the recording will most likely be saved in your CRM, depending on your configuration.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- The phone number is now saved and will be used as the outbound number for calls from this queue and will show in the queue set up page next to each assigned queue.
- When enabled, configure the TSS or upload a custom greeting in Settings > Languages & Messages Overcapacity deflection callback option - Request Already Placed message. - Limit consumer to 1 callback request per queue: a consumer could leave a separate callback request on a different queue than the first request. - Limit consumer to 1 callback request across all queues.
- Overcapacity Deflection When enabled, the "Overcapacity Deflection" and "Overcapacity Deflection Options" messages will play, as well as specific recordings for options like "Overcapacity Deflection Callback Option." When you add or remove options, be sure to update the message that lists the options callers have, otherwise, callers won't know the new options exist.
- The Call Settings page enables the following settings, and the Languages and Messages page offers the configuration for voice recordings or Text-to-Speech prompts that are required after certain settings are enabled.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Call and chat routing User segment DAP : CCAI Platform will search for a contact using phone number (IVR) or email address (Mobile) or custom field (Mobile) from Salesforce to match settings in the queue and directly route call or chat to the queue.
- This includes: Call recordings Chat history Mobile SDK based diagnostic package Media files sent by end users UI examples File List UI - sample for session file list for call recording File Detail UI - for example, image upload by the consumer.
- Do not enable this option if your compliance regulations/standards require all call recordings to be accessed because CCAI Platform will not be able to retrieve call recordings of calls where a case is not created.
- Use entered number to make call option A specific account might have multiple locations or contacts, and not all phone numbers are saved to the account or contact.

