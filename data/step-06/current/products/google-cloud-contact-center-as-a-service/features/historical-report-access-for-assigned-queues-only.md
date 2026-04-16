---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.108Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Historical report access for assigned queues only"
feature_slug: "historical-report-access-for-assigned-queues-only"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "historical"
  - "report"
  - "access"
  - "assigned"
  - "queues"
  - "only"
  - "reports"
  - "can"
---

# Historical report access for assigned queues only

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Historical reports can now be limited so that only data for assigned queues is downloaded.

## Extended Definition

Historical reports can now be limited so that only data for assigned queues is downloaded.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Standard reports \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By selecting Assigned Teams Only , only the assigned team has access to the session data report.
- Here are the available call types: Voice Inbound (IVR) : standard PSTN calls Voice Inbound (IVR via Mobile) : fallback PSTN calls made using the mobile SDKs Voice Inbound (Mobile) : calls placed by end-users using the mobile SDKs Voice Callback (Web) : calls initiated from the web SDK Voice Inbound (API) : calls initiated using an API Voice Scheduled (Mobile) : calls scheduled using the mobile SDKs Voice Scheduled (Web) : calls scheduled using the web SDK Voice Outbound : calls placed by agents dialing a number Voice Outbound (API) : calls initiated using an API Voice Scheduled (API) : calls initiated by an outbound dialer campaign Voice Internal : agent-to-agent calls Voice Inbound (Direct) : calls initiated by end-users using agents' direct numbers Voice Outbound (Direct) calls initiated by agents using their direct numbers Voice Outbound (UCaaS) : outbound, unified communications as a service (UCaaS) calls Voice Inbound (Extension) : inbound end-user to agent calls Here are the available chat types: Messaging Inbound (Mobile Chat) : chats initiated by end-users using the mobile SDKs Messaging Inbound (Web Chat) : chats initiated by end-users using the web SDK Messaging Inbound (SMS) : SMS chats initiated by end-users Messaging Outbound (SMS) : SMS chats initiated by agents Messaging Outbound (SMS via API) : SMS chats initiated by an API Messaging Inbound (SMS Direct) : SMS chats initiated by end-users using agents' direct numbers Messaging Outbound (SMS Direct) : SMS chats initiated by agents using their direct numbers Messaging Outbound (SMS Direct via API) : SMS chats initiated by an API using agents' direct numbers Messaging (WhatsApp) : chats initiated using WhatsApp Queues From the CCAI Platform portal, go to Reports > Queues .
- 2,300,000 lines will be broken up into 3 files, two that are 1 million in length and one 300k in length Sample Reports There are different report types available, depending on the data set you are accessing.
- Reports are generated based on three categories: Agents & Team , Call & Chat , and Queues .

### "Standard Reports: Virtual Agent Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Virtual_Agent_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on accessing and building reports see the Accessing Reports section of Historical Reports: Interaction-based Data Model .
- For more information on accessing and building reports see the Accessing Reports section of Historical Reports: Interaction-based Data Model.
- The Virtual Agent Escalation/Deflection Report can be found at Reports > Queues .
- The Virtual Agent Detailed Report can be found at Reports > Queues .

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports Agent and Teams Data Sets Stay organized with collections Save and categorize content based on your preferences.
- Queue Priority by Language: List of assigned queues including the language and specific queue priority for each queue assigned.
- Performance Metrics Report Overview From the Reports tab, one of the report options is the Performance Metrics report .
- To create a report: Go to Reports > Agents and Teams Step 1: Select Agents and Team.

