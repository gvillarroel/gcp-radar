---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.086Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Outbound phone number country code propagation"
feature_slug: "outbound-phone-number-country-code-propagation"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "outbound"
  - "phone"
  - "number"
  - "country"
  - "code"
  - "propagation"
  - "automatically"
  - "included"
---

# Outbound phone number country code propagation

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The country code from an outbound phone number is automatically included in the phone number of an added call party.

## Extended Definition

The country code from an outbound phone number is automatically included in the phone number of an added call party.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- For example, agents can add or change the country code, edit the phone number, or change the outbound number, language, or queue.
- If the number is blocked, and the caller is calling into a UK number from a phone number with a US country code, the callback won't take place since there will be an incorrect number stored for the caller [UK +44 (extracted from inbound IVR number + consumer entered number].
- Examples: If a consumer dials a UK number from a UK phone and does not enter UK country code [44], the number will be stored with +44 and the callback call will take place as usual since the correct number is stored.
- Giving agents the opportunity to add an area code to a phone number is particularly important in cases when the area code isn't included in the CRM record.

### "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- Source ID: `site-docs-reference-required-8`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These improvements include a country code selector and an improved workflow for changing the outbound number and language.
- The system automatically includes the selected country code when it places your outbound call.
- The system automatically includes the selected country code when it places your outbound call.
- The flag for the country code appears in the Outbound call screen.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Feedback: when enabled, shows customer feedback collected during session on record Case: case the session object is attached to Initial menu selected: initial queue menu selected Materialized menu path: the selected path leading to connection with the agent Language: the language used or selected for the session Outbound phone number -- applicable outbound phone number Status: status of the session Total transfers: number of total transfers during the session Files All media files associated with the session object are attached as files to the session object.
- No cases will be created CRM data impacting the Agent experience Number of contacts with the same phone number No Contact with phone number Only one Contact with phone number Multiple Contacts with phone number Number of open cases No Case Only one Case Multiple Cases Placing an outbound call Dialed outbound call Placing a call by syncing with the current page in Salesforce From Salesforce, navigate to a Case, Contact, Account, or Lead.

