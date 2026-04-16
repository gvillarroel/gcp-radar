---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.039Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Key-value pair ordering in agent adapter and CRM records"
feature_slug: "key-value-pair-ordering-in-agent-adapter-and-crm-records"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "key"
  - "value"
  - "pair"
  - "ordering"
  - "agent"
  - "adapter"
  - "crm"
  - "records"
---

# Key-value pair ordering in agent adapter and CRM records

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Google Cloud CCaaS now controls the order of key-value pairs shown in the agent adapter and CRM records for virtual agent session variables and Web SDK custom data.

## Extended Definition

Google Cloud CCaaS now controls the order of key-value pairs shown in the agent adapter and CRM records for virtual agent session variables and Web SDK custom data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Many new updates to the Agent call adapter Review and select from multiple matching account records Select from open cases associated with the selected account Create a new case Configurable option to not create a ticket and/or create a new ticket Handling multiple matching account records Flexible ticket to session association Feature details The object/term Account is referenced below as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings .
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Configuration saved in Settings > Developer Settings for Account Lookup can be overridden by agent selection in the agent adapter if an object other than the primary object is synced Account ID and case ID field details Labels The object/term Account is referenced in this article as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Phone number selection in the Agent Adapter When an agent clicks on the dial option of the adapter, they will now see a drop-down of the default Global Outbound number as well as any other outbound numbers which are associated with the queues to which they are assigned.
- Revert to an agent's deflection settings If an agent configured their own deflection settings using the agent adapter, their settings appear on that user's Edit User page at Settings > Users & Teams > Manage Users & Teams .
- If selected, agents will see a list of the calls completed in the last 30 days and associated metadata such as time stamps, call duration, and disposition notes in the Call Adapter.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Manual wrap-up If an agent manually changes their status to Wrap-up in the agent adapter, wrap-up activities are automatically assigned to the agent's last completed call or chat session.
- Prevent agents from selecting a queue for an outbound call You can hide a queue in the agent adapter so that agents can't select it for an outbound call.
- Agent experience From the Agent Adapter, while an active call from an enabled queue, click on the Actions button, then click Redact .

