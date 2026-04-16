---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.114Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "ServiceNow integration OAuth authentication support"
feature_slug: "servicenow-integration-oauth-authentication-support"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide"
keywords:
  - "servicenow"
  - "integration"
  - "oauth"
  - "authentication"
  - "now"
  - "has"
  - "improved"
  - "including"
---

# ServiceNow integration OAuth authentication support

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The ServiceNow integration now has improved OAuth authentication support, including admin tokens.

## Extended Definition

The ServiceNow integration now has improved OAuth authentication support, including admin tokens.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- When enabled, instead of storing session data in the Activities object using multiple entries, all session data, including associated files, for example voice recordings, chat transcripts, and media files uploaded by the end user, are included within the new CCAI Platform session object.
- Allow agent to select "Do not create a case" option for outbound calls When settings indicate that session data is mapped to the CCAI Platform Session object, call data including the call recording will be stored in the CCAI Platform Session and associated to the selected lookup object.

### "Zendesk app installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Follow these instructions or refer to the following link from Zendesk: Using OAuth authentication with your application .
- Redirect URLs Set the Redirect URLs of the OAuth client as follows, https://INSTANCE.ccaiplatform.com/v1/zendesk/oauth callback You should replace INSTANCE with the actual subdomain of your CCAI Platform.
- Set Zendesk Subdomain to the subdomain of your Zendesk account. https://your zendesk subdomain.zendesk.com Set OAuth Client ID to the Unique Identifier of your Zendesk OAuth client.
- Generate an API Token The following steps enable you to generate an API token in Zendesk: In Zendesk Support Admin Center, click Apps and Integrations > Zendesk API .

### "Zendesk CRM installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following instructions guide you through the OAuth setup process including registering your application with Zendesk.
- The following Zendesk applications are supported: Call : Latest version: v1.4.0 Chat : Latest version: v1.3.0 Before you start The following are prerequisites for the Zendesk CRM integration: Sign in to CCAI Platform portal as an administrator.
- Set the OAuth redirect URL. https://YOUR SUBDOMAIN.example.com/v1/zendesk/oauth callback You should replace YOUR SUBDOMAIN with the actual subdomain of your Zendesk account.
- Set the Unique Identifier and Secret fields which are are auto-populated while adding a new OAuth client.

