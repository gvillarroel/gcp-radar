---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.004Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Predictive campaign dialing controls"
feature_slug: "predictive-campaign-dialing-controls"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "predictive"
  - "campaign"
  - "dialing"
  - "controls"
  - "adds"
  - "rate"
  - "agent"
  - "occupancy"
---

# Predictive campaign dialing controls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Adds new predictive campaign controls for dialing rate, agent occupancy, and optional abandonment limits.

## Extended Definition

Adds new predictive campaign controls for dialing rate, agent occupancy, and optional abandonment limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Standard Reports: Campaign Data Sets \_|\_ Google Cloud Contact Center as\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is calculated as BCW +Talk Time + Hold time + Wrap-up time / All handled interactions Predictive Dialer Disposition Report The Predictive Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- Total Volume The total volume of calls presented from the Campaign Handled Calls The interactions that were handled by an agent Abandoned by Contact The interaction was answered by the consumer and then the consumer decides to disconnect from the call.
- Predictive Dialer Detailed Report The Predictive Dialer Detailed Report provides a detailed report of interactions in the predictive dialer campaign.
- Predictive Preview Progressive Campaign Name The name of the Campaign as configured in the Campaign Manager within the CCAI Platform Portal.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- To assign extension numbers to your agents, do one of the following: To automatically generate phone extensions for your agents, select the Enable Auto-generated extension checkbox.
- Set the Scheduled calls which controls the duration of a countdown timer an agent will see before getting assigned to a scheduled call.
- Set the rule (select the Allow/Deny radio button) to enable or disable special service number dialing for selected agents or teams.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Occupancy : [Total time Agent status = In-Call or In-Chat or Wrap-up] / [Total time agent status = Available] Volume per Hour : Average volume of interactions per hour (per hour referenced as 24 hours in a day, regardless of hours of operation) Handle Time: Calls: average (call duration + hold time + default wrap-up status associated with a Call ID) Chats: average chat duration only (no wrap-up status applied) Longest Handle Time : Longest call/chat duration Calls: max(call duration + average default wrap-up status associated with an interaction ID) Chats: max chat duration only (no wrap-up status applied) Hold Time : Average duration (in seconds) that a consumer was placed on hold by an Agent.
- Select the type of session for which agent and team reports should be generated.
- Select the type of session for which agent and team reports should be generated.
- Select the type of session for which agent and team reports should be generated.

