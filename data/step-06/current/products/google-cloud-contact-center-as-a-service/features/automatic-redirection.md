---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.053Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Automatic redirection"
feature_slug: "automatic-redirection"
latest_feature_date: "2025-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
keywords:
  - "automatic"
  - "redirection"
  - "lets"
  - "administrators"
  - "route"
  - "specified"
  - "percentages"
  - "sessions"
---

# Automatic redirection

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Automatic redirection lets administrators route specified percentages of sessions to selected redirection groups.

## Extended Definition

Automatic redirection lets administrators route specified percentages of sessions to selected redirection groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Configure deflections at the agent level For agent to agent , end-user to agent or direct inbound call types, you can configure the following deflection types at the agent level: after hours, overcapacity, and automatic redirection.
- Configure automatic redirection at the agent level With automatic redirection turned on for an agent, the system immediately redirects inbound calls to the agent.
- To configure automatic redirection at the agent level, follow these steps: In the CCAI Platform portal, click Settings > Users & Teams .

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Select the first available menu : If the caller does not make a selection after the specified number of repetitions, this option automatically places them in the first menu option available to them.
- Select the last available menu : If the caller does not make a selection after the specified number of repetitions, this option automatically places them in the previous menu.
- This lets you control the ability of agents to transfer sessions and receive transferred sessions based on the queues or teams that they belong to.
- To other options than directing consumers straight to an agent, use Automatic Redirection.

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This will set up an automatic redirection for transferring to an existing third party telephony platform. { "ujet" : { "type" : "action" , "action" : "escalation" , "escalation reason" : "by virtual agent" , "menu id" : 100 , "language" : "ko" } } The menu id is the value that you saved for the automatic redirection queue node in step 1.
- The language setting in the payload is an optional value if the automatic redirection queue node is in a different language IVR Voice menu than the language for the current interaction.
- For more information about automatic redirection, see Automatic Redirection .
- You can do this using queue nodes that have automatic redirection enabled.

