---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.013Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "End-user-to-agent extension input"
feature_slug: "end-user-to-agent-extension-input"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "end"
  - "user"
  - "agent"
  - "extension"
  - "input"
  - "administrators"
  - "can"
  - "configure"
---

# End-user-to-agent extension input

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure end users to enter an agent extension number during a call and provide supporting prompt and directory messages.

## Extended Definition

Administrators can configure end users to enter an agent extension number during a call and provide supporting prompt and directory messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Agent desktop \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want a custom role that lets a user configure the agent desktop, configure announcements, or use the agent desktop, you need to select the correct permission settings for that custom role.
- Permissions Users with the Admin role can configure agent desktop settings and announcements but can't use the agent desktop.
- Conversely, users with the Agent role can use the agent desktop but can't configure agent desktop settings and announcements.
- The following agent desktop permissions for administrators display: Settings > Operation Management > All Settings > Agent Desktop > All Settings > Agent Desktop > Layout and panel Management Settings > Announcement Management To find the permission settings for using the agent desktop, do the following: For Agent , click visibility View .

### "Agent extensions guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Agent extensions guide Stay organized with collections Save and categorize content based on your preferences.
- Set deflections for extension calls If your administrator gives you permissions, you can set deflections for agent to agent calls or end-user to agent calls.
- Agent extensions allow agents to be assigned a phone number extension for agent to agent and end-user to agent calling.
- Receive an internal call When an internal call comes in from another agent, the agent's name and extension appear under Calling from on the Incoming call screen.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Do this by configuring the Enable extension input at the beginning of a call checkbox when you turn on and configure end-user to agent calling .
- The end-user does one of the following: The end-user enters an agent extension number before the specified number of seconds of wait time elapses (wait time is specified in Turn on and configure end-user to agent calling ).
- To configure a prompt for the end-user, do the following: Select the Extension input announcement message checkbox. (Optional): Edit the text-to-speech message or upload an audio recording that contains your prompt.
- Depending on how you configure your instance, an end-user can directly call an agent in one of two ways: enter the agent's extension number at the beginning of a call, or call the agent from the agent directory.

