---
title: "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store
  title: "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Set up a Confluence Cloud data store
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a data store and connect Confluence Cloud to Gemini Enterprise.
Before you begin
Ensure the following before you set up your Confluence Cloud federated connection:
Grant the Discovery Engine Editor role ( roles/discoveryengine.editor ). This role is required for the user to create the data store. To grant this role, do the following:
In the Google Cloud console, go to the IAM page.
Go to IAM
Locate the user account and click the edit Edit icon.
Grant the Discovery Engine Editor role to the user. For more information, see IAM roles and permissions .
To enforce data source access control and secure data in Google Gemini Enterprise, configure your identity provider .
To set up the Confluence Cloud data store, you must use the new centralized Atlassian user management model. If you are using the original model, you need to migrate your user management before proceeding. For more information, see Site administrator role .
Create an OAuth 2.0 app , obtain the client ID and secret , and configure the minimum application permissions
with the consent of a Confluence Cloud administrator.
Optional: To retrieve user email addresses from Confluence Cloud, even when settings restrict email visibility, install the User Identity Accessor for Confluence Cloud app with Confluence Site administrator privileges, and then configure it to securely retrieve user email addresses. You might not need to install this app if email addresses are already publicly accessible.
Note: Atlassian is updating user interface elements, and some elements mentioned
in this documentation are being renamed (for example, Products is being
renamed to Apps ). For more information, see Atlassian Administration terminology change from "products" to "apps" .
Create Confluence Cloud data store
To create a Confluence Cloud data store, perform the following steps:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Select or create a Google Cloud project.
In the navigation menu, click Data stores .
Click add Create data store .
In the Source section, search for Confluence Cloud , and click Select .
In the Data section:
In the Connector mode section, select Data ingestion or Federated search as the connection mode.
Click Continue .
In the Authentication settings section, configure authentication based on your chosen connection mode.
If you selected Data ingestion :
Select OAuth 2.0 client credentials or API token as the authentication method.
If you select OAuth 2.0 client credentials , enter the following details:
Client ID : The identifier for your OAuth 2.0 app.
Client secret : The secret key associated with your OAuth 2.0 app.
Instance URI : The base URL of your Confluence Cloud instance ( For example, https://your-domain.atlassian.net ).
Instance ID : A unique identifier for your Confluence Cloud instance.
If you select API token , enter the following details:
Instance URI : The base URL of your Confluence Cloud instance ( For example, https://your-domain.atlassian.net ).
User account : The Atlassian username associated with the API token.
API token : The API token generated from your Atlassian account.
If you selected Federated search :
Enter the following details:
Client ID : The identifier for your OAuth 2.0 app.
Client secret : The secret key associated with your OAuth 2.0 app.
Instance URI : The base URL of your Confluence Cloud instance ( For example, https://your-domain.atlassian.net ).
Click Login and complete the Atlassian sign-in.
For more information about credentials, see Confluence Cloud configuration .
Click Continue .
In the Destinations section, enter the URL for your Confluence Cloud endpoint.
Click Continue .
In the Entities to sync (if you selected Data ingestion ) or Entities to search (if you selected Federated search ) section:
Select all the required entities.
If you selected Federated search , proceed to the next step.
If you selected Data ingestion , do the following:
Optional: To sync specific projects, do the following:
Click Filter .
To filter entities out of the index, select Exclude from the index , or to ensure that they are included in the index, select Include in the index .
Enter the space keys. Press Enter after each space key. The space key is the unique code in a Confluence space URL, found after /spaces/ . (For example, in https://company.atlassian.net/wiki/spaces/ABC/overview , the space key is ABC .)
Click Save .
To configure the sync schedule, do the following:
In the Sync frequency list, select the sync frequency.
To schedule separate full syncs of entity and identity data, expand the menu in the Full sync section and then select Custom options .
In the Incremental sync frequency list, select the incremental sync frequency.
For more information, see Sync schedules .
Click Continue .
In the Actions section:
If you selected Federated search :
From Select Confluence Cloud actions to enable , select the actions from the category to enable them for the data store.
If you selected Data ingestion :
In the Authentication settings section, configure authentication based on your chosen connection mode.
Enter the following authentication details:
Client ID : The identifier for your OAuth 2.0 app.
Client secret : The secret key associated with your OAuth 2.0 app.
Instance URI : The base URL of your Confluence Cloud instance ( For example, https://your-domain.atlassian.net ).
Instance ID : A unique identifier for your Confluence Cloud instance.
For more information about credentials, see Confluence Cloud configuration .
Click Login and sign-in to Confluence Cloud to verify your account.
Click Continue .
In the Destinations section, enter the URL for your Confluence Cloud endpoint.
From Select Confluence Cloud actions to enable , select the actions from the category to enable them for the data store.
Note: If you skip adding actions in this step, you can add them later. For more information, see Add actions .
To view and manage the list of actions, see View and manage actions .
Click Continue .
In the Configuration section:
From the Multi-region list, select the location for your data connector.
In the Your data connector name field, enter a name for your connector.
If you selected us or eu as the location,
configure the Encryption settings :
Optional: If you haven't configured single-region keys, click Go to settings page to do so. For more information, see Register a single-region key for third-party connectors .
Select Google-managed encryption key or Cloud KMS key .
If you selected Cloud KMS key :
In the Key management type list, select the appropriate type.
In the Cloud KMS key list, select the key.
For more information, see Customer-managed encryption keys .
Click Continue .
In the Billing section, select General pricing or Configurable pricing . For more information, see Verify the billing status of your projects and Licenses .
Click Create . Gemini Enterprise creates your data store and displays your data stores on the Data Stores page.
On the Data Stores page, click your data store name to see the status. After the data store state changes from Creating to Active , the Confluence Cloud data store is ready to be used.
For an ingestion data store created with Confluence Cloud, the data store state transitions from Creating to Running upon synchronization initiation. It then changes to Active once ingestion is complete, signifying that the data store is fully configured. Depending on data volume, ingestion may require several hours.
After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.
Enable real-time sync for data ingestion
Preview
— Real-time sync
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Real-time sync only syncs document entities and doesn't sync data related to
identity entities. The following table shows which document events are
supported with real-time sync.
Confluence entities
Create
Update
Delete
Permission changes
Spaces
check
check
close
close
Pages
check
check
close
close
Blogs
check
check
close
close
Attachments
check
check
close
close
Comments
check
check
close
close
Whiteboards
close
close
close
close
Enable real-time sync 20 minutes after creating the Confluence Cloud data store.
To enable real-time sync for a Confluence data store, follow these steps:
Generate a webhook URL
Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
Select a Confluence data store.
Click View/Edit in the Realtime sync row.
In the View and edit realtime sync parameters dialog, do the following:
To turn on real-time sync, click the Enable realtime sync toggle.
In the Client secret field, enter a placeholder value, such as clientsecret .
Click Save .
After the status of Realtime sync changes to Running , click View/Edit .
In the View and edit realtime sync parameters dialog, do the following:
Copy the Webhook URL .
Click Close .
Subscribe to events using the API
To receive real-time updates from Confluence, you must subscribe to specific events using a POST request. To make API calls, use the same administrator account used for setting up authentication and permissions in Confluence to create the data store.
curl -X POST \
INSTANCE_URL /wiki/rest/webhooks/1.0/webhook \
-H "Content-Type: application/json" \
-u " USERNAME : API_TOKEN " \
-d '{
"name": " SUBSCRIPTION_NAME ",
"url": " LISTENER_URL ",
"events": [
" EVENT_TYPE_1 ",
" EVENT_TYPE_2 "
],
"active": true
}'
INSTANCE_URL : The base web address for your Atlassian Cloud site.
USERNAME : The Atlassian Cloud username.
API_TOKEN : The API token generated from your Atlassian account. For more information, see Set up an API token in Confluence
SUBSCRIPTION_NAME : A unique name for your event subscription.
LISTENER_URL : The webhook URL copied from the Google Cloud console once Real-Time Sync (RTS) is enabled on your data store.
EVENT_TYPE : The event types that you want to subscribe to. You can subscribe to create, update, and delete events for attachments, blog posts, pages, spaces, and comments.
The user can subscribe to the following events:
space_created
space_updated
page_created
page_updated
attachment_created
attachment_updated
comment_created
comment_updated
blog_created
blog_updated
Note: Whiteboard and trashed events are not supported. Create subscriptions only for entities already added to your data store to avoid ingesting unwanted data.
Example command and result
curl -X POST \
https://cymbalgroup.atlassian.net/wiki/rest/webhooks/1.0/webhook \
-H "Content-Type: application/json" \
-u "admin1:######" \
-d '{
"name": "Cymbal_DCT",
"events": [
"attachment_created",
"attachment_updated"
],
"url": "https://rt-server-a-jx3m2-uw.a.run.app/webhook",
"active": true
}'
{
"name": "Cymbal_DCT",
"url": "https://cymbalgroup.atlassian.net/wiki/rest/webhooks/1.0/webhook",
"description": " Webhook for Cymbal DCT group to fetch attachments.",
"excludeBody": false,
"filters": {},
"events": [
"attachment_created",
"attachment_updated",
],
"enabled": true,
"self": https://rt-server-a-jx3m2-uw.a.run.app/webhook,
"lastUpdatedUser": "Cymb_389",
"lastUpdatedDisplayName": "Ariel",
"lastUpdated": 1752095647212
}
API error codes
This table lists common API error codes users encounter when creating webhooks.
Error class Error code
Error message Troubleshooting
403
FORBIDDEN
Current user not permitted to use Confluence.
Ensure a valid token from an administrator account and correct API endpoint.
Data handling and query execution
This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.
Query execution
After you authorize Confluence Cloud and send a search query to Gemini Enterprise:
Gemini Enterprise sends your search query directly to the Atlassian API.
Gemini Enterprise blends the results with those from other connected data sources and displays a comprehensive search result.
Data handling
When using third-party federated search, the following data handling rules apply:
Your query string is sent to the third-party search backend (Atlassian API).
These third parties may associate queries with your identity.
If multiple federated search data sources are enabled, the query might be sent to all of them.
After the data reaches the third-party system, it is governed by that system's terms of service and privacy policies.
Note: To improve accuracy, an LLM may rewrite your query before it is sent to Confluence Cloud. This rewritten query can incorporate information from your session's query history. As a result, parts of your query history might also be included in the query sent to the Atlassian API.
What's next
To provide a user interface for querying your Confluence Cloud data, create an app and connect it to the Confluence Cloud data store .
To view and manage the list of actions, see View and manage actions .
To preview how your search results appear after your app is set up, see Get search results .
To enable alerts for the data store, see Configure alerts for third-party data stores .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
