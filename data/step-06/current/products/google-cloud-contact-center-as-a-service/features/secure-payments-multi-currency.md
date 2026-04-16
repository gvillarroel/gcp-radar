---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.139Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Secure Payments Multi-currency"
feature_slug: "secure-payments-multi-currency"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "secure"
  - "payments"
  - "multi"
  - "currency"
  - "feature"
  - "adds"
  - "payment"
  - "stripe"
---

# Secure Payments Multi-currency

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

This feature adds multi-currency payment support for Stripe and Braintree.

## Extended Definition

This feature adds multi-currency payment support for Stripe and Braintree.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "Secure Payments \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Secure Payments for multi-currency When you set up secure credit card payment options through Stripe or Braintree, you have the option to select from the following international currencies: United States Dollar - USD (default option) British Pounds - EUR Euros - EUR Canadian Dollars - CAD Set a new default currency Go to Settings > Developer Settings > Credit Card Payment Providers .
- Apply multi-currency options to your payment provider Note: Stripe and Braintree are the only providers that offer multi-currency.
- The Secure Payments feature provides secure credit card processing.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Secure Payments Stay organized with collections Save and categorize content based on your preferences.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- With Secure Payments, callers are taken through a payment flow and call recording is automatically paused Call recordings are saved as .mp3 files unless otherwise requested.
- Priority order = Sub-queue Target > Top-level Queue Target > Global Target Examples: Targets Set Resulting Targets Global Target = 70% , Top-level Queue 1 = None , Queue 1a = None, Queue 1b = None, Queue 2a = None, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 70% (inherited from global) , Queue 1a = 70% (inherited from global), Queue 1b = 70% (inherited from global), Queue 2a = 70% (inherited from global), Queue 2b = 70% (inherited from global), Top-level Queue 2 = 70% (inherited from global) Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = 75%, Queue 2a = 65%, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 75%, Queue 2a = 65%, Queue 2b = 70% (inherited from global), Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = None, Queue 2a = 60%, Queue 2b = 40%, Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 65% (inherited from Top-level), Top-level Queue 2 = None , Queue 2a = 60%, Queue 2b = 40% Utilize set targets Call and chat dashboards When viewing the default view of the Call or Chat dashboard, the target displayed will be the globally configured target metric When viewing multiple queues (or a queue group), no target will be displayed Queue reports dashboard Available for interaction-based data model enabled environments The SL Target and Concurrency Target column will display each queue's target If a queue group consists of multiple queues with varying targets, then no value will be displayed in the Totals row Performance metrics dashboard Available for interaction-based data model enabled environments The SL Target column will display each queue's service level target.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Text 1 for Payments Text 2 for Billing Text 3 for All other enquiries When naming your queues, keep in mind that you cannot use protected SMS command words in queue names, including: STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT START, YES, UNSTOP HELP, INFO Command words for EXIT (configurable on Chat settings page) Command words for BACK (configurable on Chat settings page) If you try to name the queue using a protected word, an error message is displayed.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Variables for dynamic consumer messages Variables are dynamic content tags that allow you to personalize messaging configuration in order to manage secure payments, configure greeting and after-hours messaging, and inform customers of their wait time and place in queue.
- Sample input We're assigning a representative to help you with @{QUEUE} Secure Payments The following variables can be used for secure payments messaging.
- Dynamic content variables are available specifically for Secure Payments.
- Enabling multiple languages for IVR, mobile, and web channels Adding languages creates a new queue structure for each channel, enabling all queue settings and assignments, messages, and all queue-specific settings to be set per language.

