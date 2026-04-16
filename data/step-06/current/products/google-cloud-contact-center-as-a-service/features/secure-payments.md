---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.138Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Secure Payments"
feature_slug: "secure-payments"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "secure"
  - "payments"
  - "feature"
  - "adds"
  - "braintree"
  - "payment"
  - "provider"
  - "improves"
---

# Secure Payments

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

This feature adds Braintree as a payment provider and improves secure payment configuration and agent payment handling.

## Extended Definition

This feature adds Braintree as a payment provider and improves secure payment configuration and agent payment handling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Secure Payments \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments)
- Source ID: `site-docs-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Secure Payments for multi-currency When you set up secure credit card payment options through Stripe or Braintree, you have the option to select from the following international currencies: United States Dollar - USD (default option) British Pounds - EUR Euros - EUR Canadian Dollars - CAD Set a new default currency Go to Settings > Developer Settings > Credit Card Payment Providers .
- The Secure Payments feature provides secure credit card processing.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Secure Payments Stay organized with collections Save and categorize content based on your preferences.
- Configure Secure Payments for inbound calls Go to Settings > Queue > {select preferred channel} > select a queue > Credit Card Payment Settings .

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Variables for dynamic consumer messages Variables are dynamic content tags that allow you to personalize messaging configuration in order to manage secure payments, configure greeting and after-hours messaging, and inform customers of their wait time and place in queue.
- Sample input We're assigning a representative to help you with @{QUEUE} Secure Payments The following variables can be used for secure payments messaging.
- Dynamic content variables are available specifically for Secure Payments.
- Note: We recommend completing this step even if the feature associated with the message is not being utilized so that the system is ready if it's ever enabled. (Example of TTS typed in the new language) Click Apply to save.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- With Secure Payments, callers are taken through a payment flow and call recording is automatically paused Call recordings are saved as .mp3 files unless otherwise requested.
- Text 1 for Payments Text 2 for Billing Text 3 for All other enquiries When naming your queues, keep in mind that you cannot use protected SMS command words in queue names, including: STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT START, YES, UNSTOP HELP, INFO Command words for EXIT (configurable on Chat settings page) Command words for BACK (configurable on Chat settings page) If you try to name the queue using a protected word, an error message is displayed.
- In this example, the keyword "pay" has been assigned to the Payments queue.
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .

