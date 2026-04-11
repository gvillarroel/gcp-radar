---
title: "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store
  title: "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\
    \ Google Cloud Documentation"
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
Set up a Confluence Data Center data store
Stay organized with collections
Save and categorize content based on your preferences.
Private preview: Creating and using a data store using data ingestion is in private preview. You need to be on the allowlist to use the data ingestion data store. To be added to the allowlist, contact your account team or the
sales team .
Public preview: The federated search is in public preview. This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms . Pre-GA features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
This page describes how to create a data store and connect Confluence Data Center to Gemini Enterprise.
Before you begin
Note: To enforce data source access control and secure data in Google Gemini Enterprise, ensure that you have configured your identity provider .
Before you set up your connection, do the following:
Grant the Discovery Engine Editor role ( roles/discoveryengine.editor ). This role is required for the user to create the data store. To grant this role, do the following:
In the Google Cloud console, go to the IAM page.
Go to IAM
Locate the user account and click the edit Edit icon.
Grant the Discovery Engine Editor role to the user. For more information, see IAM roles and permissions .
Complete the steps in Set up authentication and obtain client credentials to get the client ID and client secret and set up permissions .
If your Confluence Data Center instance uses a private IP, publish a Private Service Connect producer service . For more information about using
Private Service Connect to connect Gemini Enterprise to
self-hosted data sources, see
Introduction to self-hosted data sources .
If you are using the data ingestion connection mode, you must meet these additional requirements:
Verify that you have the Confluence Administrator permission to fetch the Access Control List (ACL) information.
Install the Permission Accessor for Confluence Data Center plugin .
This plugin provides REST endpoints to Gemini Enterprise. These endpoints
enable Gemini Enterprise to retrieve space permission details, content
restrictions, and email addresses of licensed users. This information is then
used to ensure that the correct permissions are applied within the
Gemini Enterprise search experience.
Create the Confluence Data Center data store
To create the Confluence Data Center data store, perform the following steps:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Select or create a Google Cloud project.
In the navigation menu, click Data stores .
Click add Create data store .
In the Source section, search for Confluence Data Center , and click Select .
In the Data section:
In the Connector mode section, select Data ingestion or Federated search .
Click Continue .
In the Authentication settings section, configure authentication based on your chosen connection mode.
Provide the authentication details:
For Federated search , provide the following details:
Instance URI: The base URL of your Confluence Data Center instance, for example, https://your-confluence-instance.com .
Client ID: The unique identifier for the OAuth application registered with Confluence Data Center.
Client secret: The Secret Manager secret that contains the client secret for authenticating requests.
To learn how to obtain these credentials, see Set up authentication and obtain client credentials .
For Data ingestion , choose between Username and Password credentials, Personal access token , or API token , and enter the authentication details accordingly.
Click Continue .
From the Destination type list, select Public or Private .
If you selected the Public destination type, for Domain URL , enter your public URL.
If you selected the Private destination type, enter the following information:
Service attachment : Enter your Private Service Connect service attachment. To obtain this, you need to publish a Private Service Connect producer service for your Confluence Data Center instance.
If the region of your Private Service Connect service attachment is different from the region of your data store, select the Enable PSC Global Access checkbox.
For an instance with a Domain URL:
Optional: Base domain name : Enter your base domain.
Domain URL : Enter your domain URL. This must match the instance URI.
Optional: Destination port : Enter your destination port.
For an instance without a Domain URL:
Destination port : Enter your destination port.
Note: Private connectivity is required when connecting to private, on-premises authentication endpoints.
Click Continue .
Optional: Click Advanced options .
If you selected Federated search , do the following:
If you enable the SSL settings checkbox, select a Trust Model from Private , Public , or Insecure , and then configure the required fields. For more information on trust models, see Trust models .
Public : Use this option if your Confluence Data Center instance uses certificates issued by a publicly trusted CA.
Private : Use this option if your Confluence Data Center instance uses certificates signed by a private or internal CA.
Insecure : This option bypasses certificate validation. It is not recommended for production environments as it can expose your connection to security risks.
The following fields are common to all Trust Models:
Keystore Client Certificate : The client certificate in PEM format. For example, -----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE----- .
Keystore Client Private Key : The private key for the client certificate in PEM format.
Keystore Client Private Key Passphrase : The passphrase for the client private key, if applicable.
The following additional information is required for the Private Trust Model:
Private Certificate : The public certificate of the private CA in PEM format.
If you selected Data ingestion , do the following:
Select the Enable Static IP Addresses checkbox. After creating the connector, you must allowlist registered static IPs for sync runs to succeed.
In the Max QPS field, specify the maximum number of queries sent to the Confluence Data Center data store per second.
Select the Enable Custom Fields checkbox. If enabled, the connector fetches custom fields from the Confluence Data Center.
If required, select the Proxy settings and SSL settings checkboxes to enable them.
Click Continue .
In the Entities to search (if you selected Federated search ) or Entities to sync (if you selected Data ingestion ) section:
Select all the required entities.
If you selected Federated search , proceed to the next step.
If you selected Data ingestion , continue with the following steps:
Optional: To sync specific projects, do the following:
Click Filter .
To filter entities out of the index, select the Exclude from the index checkbox, or to ensure that they are included in the index, select the Include in the index checkbox.
Enter the keys. Press Enter after each key.
Click Save .
To configure the sync schedule, do the following:
In the Sync frequency list, select a sync frequency.
To schedule separate full syncs of entity and identity data, expand the menu in the Full sync section and then select Custom options .
In the Incremental sync frequency list, select an incremental sync frequency.
For more information, see Sync schedules .
Click Continue .
If you selected Federated search , in the Actions section, for Select Confluence Data Center actions to enable , choose the actions from the category to enable for the data store.
Note: If you skip adding actions in this step, you can add them later. For more information, see Add actions .
To manage the list of actions, see Manage actions .
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
Click Continue .
Click Create . Gemini Enterprise creates your data store and displays your data stores on the Data stores page.
If you selected the Private destination type and configured your
Private Service Connect producer service to
Accept connections for selected projects (explicit approval), do the
following:
In the Google Cloud console, search for Private Service Connect and go to the
Private Service Connect page.
Click the Published services tab.
Click the name of the Private Service Connect service
corresponding to your Confluence Data Center data store.
In the Connected projects section, select the checkbox next to the
Gemini Enterprise tenant project for the data store, and then click
Accept project .
Note: The Gemini Enterprise tenant project ID ends in -tp .
The data store status remains as Creating in the Data Stores page until you click Accept project
on the service details page within Private Service Connect. After you click Accept project , the data store status changes to Active .
To verify the state of the data store, do the following in the Data stores page:
Navigate to the newly created data store in the data store list and monitor its state until it changes to Active .
When the data store state changes from Creating to Active , the Confluence Data Center connector is ready to be used.
After creating the data store:
Create an app .
Connect it to the Confluence Data Center data store .
Authorize Gemini Enterprise to Confluence Data Center before executing any queries.
For information on permissions required to perform search, see
Required permissions .
Data handling and query execution
This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.
Query execution
After you authorize Confluence Data Center and send a search query to Gemini Enterprise:
Gemini Enterprise sends your search query directly to the Confluence Data Center API.
Gemini Enterprise blends the results with those from other connected data sources and displays a comprehensive search result.
Data handling
When using third-party federated search, the following data handling rules apply:
Your query string is sent to the third-party search backend (Confluence Data Center API).
These third parties may associate queries with your identity.
If multiple federated search data sources are enabled, the query might be sent to all of them.
After the data reaches the third-party system, it is governed by that system's terms of service and privacy policies.
Note: To improve accuracy, an LLM may rewrite your query before it is sent to Confluence Data Center. This rewritten query can incorporate information from your session's query history. As a result, parts of your query history might also be included in the query sent to the Confluence Data Center API.
What's next
To provide a user interface for querying your Confluence Data Center data, create an app and connect it to the Confluence Data Center data store .
To preview how your search results appear after your app is set up, see Get search results .
To enable alerts for the data store, see Configure alerts for third-party data stores .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
