---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.134Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom CRM extended OAuth authentication"
feature_slug: "custom-crm-extended-oauth-authentication"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api"
keywords:
  - "custom"
  - "crm"
  - "extended"
  - "oauth"
  - "authentication"
  - "adds"
  - "integration"
---

# Custom CRM extended OAuth authentication

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Adds extended OAuth authentication support to the Custom CRM integration.

## Extended Definition

Adds extended OAuth authentication support to the Custom CRM integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Feedback: when enabled, shows customer feedback collected during session on record Case: case the session object is attached to Initial menu selected: initial queue menu selected Materialized menu path: the selected path leading to connection with the agent Language: the language used or selected for the session Outbound phone number -- applicable outbound phone number Status: status of the session Total transfers: number of total transfers during the session Files All media files associated with the session object are attached as files to the session object.
- Session actions Reflects session activities: Started call Custom data from customer has arrived Finished call Customer rating feedback received Example: Session action detail UI - end user feedback Transfers Any transfers associated with the session are listed in this section.

### "Zendesk app installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Follow these instructions or refer to the following link from Zendesk: Using OAuth authentication with your application .
- Check if custom ticket fields were created from Zendesk by referring to: Admin > Manage > User Fields Admin > Manage > Ticket Fields Fields User Fields Identifier Ticket Fields Verification (Checkbox) Customer Text Feedback (Multi-line text) Customer Satisfaction Rating (Numeric): 1 to 5 Shared Customer Rating (Text): Twitter or Facebook Domain-based Access Control Refer to Domain-based Access Control for steps to limit platform access based on the domain and details related to CRM-specific domains.
- Redirect URLs Set the Redirect URLs of the OAuth client as follows, https://INSTANCE.ccaiplatform.com/v1/zendesk/oauth callback You should replace INSTANCE with the actual subdomain of your CCAI Platform.
- Set Zendesk Subdomain to the subdomain of your Zendesk account. https://your zendesk subdomain.zendesk.com Set OAuth Client ID to the Unique Identifier of your Zendesk OAuth client.

### "Mid-Session authentication by API \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- Source ID: `site-docs-reference-required-5`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Mid-Session authentication by API Stay organized with collections Save and categorize content based on your preferences.
- Upon successful authentication, you can update the end user identifier to link the session to the verified end-user.
- Aids with customer lookup. john@doe.com 3 phone String No The generic phone number associated with the interaction.
- This page explains how to use call and chat API endpoints for mid-session authentication in your SDK channels.

