---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.080Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "End co-browse sessions with Apps API"
feature_slug: "end-co-browse-sessions-with-apps-api"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
keywords:
  - "end"
  - "co"
  - "browse"
  - "sessions"
  - "apps"
  - "now"
  - "provides"
  - "endpoint"
---

# End co-browse sessions with Apps API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API now provides an endpoint to end a co-browse session by external session ID.

## Extended Definition

The Apps API now provides an endpoint to end a co-browse session by external session ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.
- V 1.16 - supporting sessions, transfers, actions, files URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000syZQ&isdtp=p1 V 1.17 - added Email field in Account object (UJET Email c) URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000kkWd&isdtp=p1 Salesforce configuration updates The following configuration changes are required in Salesforce.
- Requirements Salesforce Service Cloud licenses Salesforce Service Console Lightning apps Updated Salesforce instance Salesforce Lightning enabled CCAI Platform 1.15 or above The agent adapter The agent adapter will show on the bottom left of the Service Console Lightning (or Sales Console Lightning) apps, in the utility bar.

### "Apps API \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The endpoints are grouped into the following categories: Agent status Bulk user management Calls Campaigns Chats Co-browse Company Do Not Call list Contact data End users Force agent logout SMS Wait times Basic authentication Requests use basic authentication.
- The Contact Center AI Platform (CCAI Platform) provides API endpoints to support integration with the platform.
- Base URL The API uses the following base URL for all of its API requests https://{subdomain}.{domain​}/apps/api/v1 where a mention to /calls means https://{subdomain​}.​{domain​}/apps/api/v1/calls Rate Limits The system limits requests to a rate of 10 request per second per customer.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Apps API Stay organized with collections Save and categorize content based on your preferences.

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+1 859-657-9625" , "recording permission" : "recording permission granted" } Response: Error : scheduled at is required { "message" : "scheduled at is required" } Status Code: 400 Get reserved data attributes during a call Endpoint Method: GET Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag Example request and responses This section contains an example request and response for the endpoint.
- Endpoint: Method: POST Type: RAW URL: https:// { ​ { subdomain } ​ } . { ​ { domain } ​ } /apps/api/v1/calls Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "ticket id" : "76517" , "end user number" : "+1 859-657-9625" , "scheduled at" : "2019-09-15T00:19:14.421Z" , "recording permission" : "recording permission granted" } Example request and responses The following sections provide example requests to the endpoint.
- Endpoint: Method: POST Type: RAW URL: https:// { ​ { subdomain } ​ } . { ​ { domain } ​ } /apps/api/v1/calls Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Inbound (API)" , "lang" : "en" , "menu id" : 9 , "ticket id" : "76517" , "end user number" : "+1 859-657-9625" , "recording permission" : "recording permission granted" } Example request and responses The following sections provide example requests to the endpoint.

