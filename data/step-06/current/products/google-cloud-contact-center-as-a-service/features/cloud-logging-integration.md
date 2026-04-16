---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.016Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Cloud Logging integration"
feature_slug: "cloud-logging-integration"
latest_feature_date: "2025-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "logging"
  - "integration"
  - "generally"
  - "available"
  - "ccaas"
  - "projects"
  - "capture"
  - "log"
---

# Cloud Logging integration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging is generally available for Google Cloud CCaaS projects to capture log data and events and filter entries by the ContactCenter resource type.

## Extended Definition

Cloud Logging is generally available for Google Cloud CCaaS projects to capture log data and events and filter entries by the ContactCenter resource type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Salesforce integration guide Stay organized with collections Save and categorize content based on your preferences.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Salesforce: CCAI Platform session mapping to case or account objects (person account, contact, lead) When a call or chat takes place, the associated data needs to be made available in your CRM and CCAI Platform offers flexibility in how the call/chat session data to is attached to Salesforce data objects.
- The following configuration options are available: Account Lookup: ability to perform account lookup against any Salesforce end-user based account object Session Data Location : map session data to an Account object (Contact, Person Account, Account, Lead, or Task rather than a Case.

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Telephony integration options The following telephony integration options are available: SIP integration Call forwarding over the public switched telephone network (PSTN) SIP integration You can integrate with an existing enterprise Session Border Controller (SBC) by using session initiation protocol (SIP) through the Bring Your Own Carrier option provided by Contact Center AI Platform.
- Virtual agent escalation using SIP integration This section explains how to create a Dialogflow CX custom payload for virtual agent escalations when you have the following requirements: The virtual agent needs to escalate to human agents on your own contact center using SIP.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Interactive Virtual Assistant (IVA) guide Stay organized with collections Save and categorize content based on your preferences.
- Call flow The following is an example of the call flow with IVA when using SIP integration: An inbound call is received from an end-user into the existing telephony infrastructure.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Options vary based on the target metric to watch: Agent Average CSAT Available Time Unavailable Time Break Time Meal Time Special Task Time Team Average CSAT Average Call Duration Queue Average CSAT Average Call Duration Average Wait Time Choose the Operator (>, <, =<, or =>), and Value (time frame or CSAT stars) to monitor.
- Filter options Select one or more of the following filter options to see specific Agents: Option Description Team Agents assigned to the team via sub-team or top-level Team Status Shows current Agents in the selected status/es Queue Group Select from available queue groups.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Real-time dashboards and monitoring pages Stay organized with collections Save and categorize content based on your preferences.

