---
title: "Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store
  title: "Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Set up a Box data store
Stay organized with collections
Save and categorize content based on your preferences.
Private preview: Creating and using a data store using data ingestion is in private preview. You need to be on the allowlist to use the data ingestion data store. To be added to the allowlist, contact your account team or the
sales team .
Public preview: The federated search and actions features are in public preview. This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms . Pre-GA features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
This page describes how to create a data store and connect Box to Gemini Enterprise.
Before you begin
Before you set up your Box connection, ensure you perform the following:
Grant the Discovery Engine Editor role ( roles/discoveryengine.editor ). This role is required for the user to create the data store. To grant this role, do the following:
In the Google Cloud console, go to the IAM page.
Go to IAM
Locate the user account and click the edit Edit icon.
Grant the Discovery Engine Editor role to the user. For more information, see IAM roles and permissions .
Create , and authorize the Box app account.
Configure Box and set the necessary permissions . For the list of scopes required for search and data ingestion, see Required permissions .
Obtain the authentication information to use during data store creation.
Set up a Google Cloud project with an
administrator account capable of managing organization-level
configurations, ensuring the organization can set up a workforce pool.
Make sure your organization is set up to manage a
workforce pool.
Create the Box data store
To create the Box data store, perform the following steps:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Select or create a Google Cloud project.
In the navigation menu, click Data stores .
Click add Create data store .
In the Source section, search for Box , and click Select .
In the Data section:
In the Connector mode section, select Federated search or Data ingestion as the connection mode.
Click Continue .
In the Authentication settings section, configure authentication based on your chosen connection mode.
If you selected Federated Search , enter the following details:
Client ID : The unique identifier for your Box application.
Client secret : The secret key associated with your Box application.
If you selected Data ingestion , enter the following details:
Enterprise ID : The unique identifier for your Box enterprise.
Client ID : The public identifier for your Box application.
Client secret : The secret key associated with your Box application.
Instance URI : The base URL for your Box instance API.
Private key : The private key used for authenticating your Box application.
Key ID : The identifier for the private key.
Passphrase : The passphrase used to decrypt the private key.
For the list of scopes required for search, actions, and data ingestion, see Required scopes . For information about how to obtain authentication information, see Obtain Box authentication information .
If you selected Federated Search , click Login and complete the sign-in.
Click Continue .
In the Advanced options section:
If you selected Federated search , select the Impersonate user mode as Admin or User , and click Continue .
Optional. If you selected Data ingestion , select the Enable static IP addresses checkbox to allow a set of static IP addresses in your system.
Click Continue .
In the Entities to search (if you selected Federated search ) or Entities to sync (if you selected Data ingestion ) section:
Select all the required entities.
If you selected Data ingestion , continue with the following steps:
Optional: To sync specific projects, do the following:
Click Filter .
To filter entities out of the index, select the Exclude from the index checkbox, or to ensure that they are included in the index, select the Include to the index checkbox.
Enter the keys. Press enter after each key.
Click Save .
To configure the sync schedule, do the following:
In the Sync frequency list, select the sync frequency.
To schedule separate full syncs of entity and identity data, expand the menu in the Full sync section and then select Custom options .
In the Incremental sync frequency list, select the incremental sync frequency.
For more information, see Sync schedules .
Click Continue .
In the Actions section:
If you selected Federated search , in the Select Box actions to enable section, select the actions to enable for the data store.
If you selected Data ingestion :
In the Authentication settings section, provide the following authentication details:
Client ID : The public identifier for your Box application.
Client secret : The secret key associated with your Box application.
For more information about how to obtain these credentials, see Obtain Box authentication information .
Click Login and sign in to Box to verify your account.
Click Continue .
In the Advanced options section, select the Enable static IP addresses checkbox to allow a set of static IP addresses in your system.
Click Continue .
In the Select Box actions to enable section, select the actions to enable for the data store.
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
Click Create . Gemini Enterprise creates your data store and displays your data stores on the Data Stores page.
To verify the state of the data store, do the following:
Navigate to the data store in the data store list and monitor its state until it changes to Active .
When the data store state changes from Creating to Active , the Box connector is ready to be used.
For an ingestion data store created with Box, the data store state transitions from Creating to Running upon synchronization initiation. It then changes to Active once ingestion is complete, signifying that the data store is fully configured. Depending on data volume, ingestion may require several hours.
If you have created a Box federated data store, you must
authorize Gemini Enterprise to Box before executing the query.
Data handling and query execution
This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.
Query execution
After you authorize Box and send a search query to Gemini Enterprise:
Gemini Enterprise sends your search query directly to the Box API.
Gemini Enterprise blends the results with those from other connected data sources and displays a comprehensive search result.
Data handling
When using third-party federated search, the following data handling rules apply:
Your query string is sent to the third-party search backend (Box API).
These third parties may associate queries with your identity.
If multiple federated search data sources are enabled, the query might be sent to all of them.
After the data reaches the third-party system, it is governed by that system's terms of service and privacy policies.
Note: To improve accuracy, an LLM may rewrite your query before it is sent to Box. This rewritten query can incorporate information from your session's query history. As a result, parts of your query history might also be included in the query sent to the Box API.
What's next
To provide a user interface for querying your data, create an app and connect it to the Box federated data store .
To view and manage the list of actions, see View and manage actions .
To preview how your search results appear after your app is set up, see Get search results .
To enable alerts for the data store, see Configure alerts for third-party data stores .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
