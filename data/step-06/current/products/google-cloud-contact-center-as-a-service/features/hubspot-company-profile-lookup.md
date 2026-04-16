---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.003Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "HubSpot company profile lookup"
feature_slug: "hubspot-company-profile-lookup"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
keywords:
  - "hubspot"
  - "company"
  - "profile"
  - "lookup"
  - "integrations"
  - "can"
  - "search"
  - "both"
---

# HubSpot company profile lookup

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

HubSpot integrations can search both Contacts and Companies to identify end users during active sessions.

## Extended Definition

HubSpot integrations can search both Contacts and Companies to identify end users during active sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- If the configuration access requirements for one or both of these settings are not met, the CCAI Platform Portal UI to configure Account Lookup and Session Data will be inactive as shown below: CCAI Platform portal configuration Account lookup and session data mapping In the CCAI Platform portal, go to Settings > Developer Settings and select Salesforce .
- These account lookups are available for both Sales Cloud and Service Cloud.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- To add hyperlinks to the message body, use the following link structure: Text format structure to open link in the same tab: {www.yourcompany.co Click on this link same tab} Text format structure to open link in a new tab: {www.google.com Click on this link new tab} Click Save .
- The default message after they select "Yes" is "How can we help?" To enter hyperlinked text: Text format structure: {​{https://www.yourcompany.co \ Visit our website}​} Click Finish to save the trigger and be directed back to the trigger page.
- In the Web & Mobile Chat Settings pane, for Transfer Limits , do the following for Web or Mobile , or both, depending on your requirements: Select the Limit the total count of transfers in a single chat session to [number field] checkbox.

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Searching for articles : Agents can manually search for specific knowledge articles by entering keywords into the Knowledge base search field Search results appear as tiles, similar to automatic suggestions, and can be clicked to view the article Note: If a chat is transferred to another agent, the knowledge articles remain accessible to the new agent until the session ends or the transferring agent exits.
- Service account requirements To use Agent Assist, you need to create a Google Cloud Service Account and key in the project where you created your Agent Assist conversation profile .
- View knowledge suggestions : As the chat continues, the system analyzes both end-user and agent messages and displays relevant article suggestions as Clickable tiles .
- View knowledge suggestions : The system listens to the ongoing conversation and generates knowledge suggestions based on both the agent's and end-user's dialogue.

