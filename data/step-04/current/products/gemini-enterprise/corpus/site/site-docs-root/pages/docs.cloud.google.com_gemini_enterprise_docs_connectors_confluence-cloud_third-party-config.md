---
title: "Confluence Cloud configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config
  title: "Confluence Cloud configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud\
    \ Documentation"
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
Confluence Cloud configuration
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set up and configure your Confluence Cloud instance before creating the Confluence Cloud data store.
Set up authentication and permissions
You need to set up authentication and permissions in the Atlassian administrator account center. This is crucial for allowing the connector to access and synchronize data. The Confluence Cloud connector supports various authentication methods, such as OAuth client credentials or API tokens.
Create an OAuth 2.0 app
To create an OAuth 2.0 app for authentication, follow these steps to set up the application in your Atlassian Developer Console and obtain the necessary client ID and client secret.
Verify Confluence organization administrator access
To verify Confluence organization administrator access, do the following:
Sign-in to Atlassian with your user credentials.
Select the Confluence app.
Click Settings .
If you see the System option under Confluence settings , you have Confluence organization administrator access. Otherwise, request your Confluence organization administrator to provide access.
Create OAuth 2.0 app
To create an OAuth 2.0 app, do the following:
Sign in to the Atlassian Developer Console .
Click the profile icon and select Developer console .
In the Console page, click Create and select OAuth 2.0 Integration .
In the app creation page, do the following:
Enter a name for the app.
Select the checkbox to agree to Atlassian's developer terms.
Click Create .
In the app page, do the following:
From the navigation menu, click Authorization .
In the Authorization type table, select Add for OAuth 2.0 (3LO) .
In the Callback URL field, enter the URL as per the connection mode of your data store.
Data ingestion and actions: https://vertexaisearch.cloud.google.com/console/oauth/confluence_oauth.html
Federated search and actions: https://vertexaisearch.cloud.google.com/oauth-redirect
Click Save changes .
Obtain client ID and client secret
To obtain the client ID and client secret, do the following:
In the app page, from the navigation menu click Distribution .
In the Distribution page, do the following:
In the Distribution controls section, select Edit .
In the Distribution status section, select Sharing to enable editing other fields.
Enter information in the following mandatory fields:
For Vendor , enter Google .
For Privacy policy , enter https://policies.google.com .
For Does your app store personal data? , select Yes .
Select I confirm that I've implemented the personal data reporting API checkbox.
Click Save changes .
In the app page, do the following:
From the navigation menu, click Settings .
From the settings page, copy your Client ID and Client secret .
Obtain an instance ID and instance URL
Obtain the instance ID:
Open a new tab, copy the instance URL, and append /_edge/tenant_info to the instance URL. For example, https:// YOUR_INSTANCE .atlassian.net/_edge/tenant_info .
Navigate to the link to find the cloudId value. The cloudId is your instance ID.
Obtain the instance URL:
Go to atlassian.net and sign in with your administrator account.
Select the app you want to sync. For example, sync the first app.
Find the instance URL (the subdomain in the address bar).
Grant administrator roles
To grant the Confluence administrator the Discovery Engine Editor role in the
Google Cloud console, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Navigate to IAM .
Go to IAM
Locate the user account that has administrator access in Confluence and click the Edit icon edit .
Grant the Discovery Engine Editor role to the administrator .
To grant a user an administrator role in Atlassian, do the following:
Sign in to Atlassian using an organization administrator account.
Click the menu icon and select your organization.
Alternatively, you can go to admin.atlassian.com .
On the Admin page, click the product and select the Manage users button.
Click Groups under User management .
On the Groups page:
Click Create group .
Enter a name for the group.
This group receives permissions required by the connector. Users added to this
group inherit these permissions. The connector uses this group to authenticate
and fetch documents.
On the Group page , click Add product .
Select User access admin as the role for Confluence .
Select Product admin as the role for Confluence administration .
Click Grant Access .
Click Add group members to add a user account or group members that the
connector uses to authenticate and access the required resources.
Configure minimum application scopes
To configure OAuth 2.0 and retrieve the required credentials for your
Confluence connector setup, do the following:
To configure scopes, do the following:
Click Permissions .
Add the necessary Confluence API scopes:
Go to Confluence API .
Click Add > Configure .
Go to the Granular scopes tab and click Edit scopes .
For federated search, some scopes might be listed under
Classic Scopes .
Select the required scopes according to your connection mode.
Note: The following table outlines the permissions required for each connection mode. If you enable Actions for either the Federated search or Data ingestion connection mode, also select the permissions listed in the Actions row.
Usage reason
Permission
Description
Data ingestion
read:content-details:confluence
Allows the data store to read content details in Confluence.
read:attachment:confluence
Allows the data store to download and read attachments.
read:comment:confluence
Allows the data store to read comments.
read:page:confluence
Allows the data store to read pages.
read:whiteboard:confluence
Allows the data store to read whiteboards.
read:space:confluence
Allows the data store to read spaces.
read:group:confluence
Allows the data store to read groups.
read:user:confluence
Allows the data store to read users.
read:content.metadata:confluence
Allows the data store to read content metadata.
read:configuration:confluence
Allows the data store to read configurations.
Federated search
search:confluence
Allows the data store to perform search queries in Confluence.
Actions
write:page:confluence
Allows the data store to create pages in Confluence.
write:attachment:confluence
Allows the data store to upload attachments to Confluence pages.
write:confluence-content
Allows the data store to write content in Confluence.
write:confluence-file
Allows the data store to upload attachments to Confluence.
read:attachment:confluence
Allows the data store to download and read attachments.
read:comment:confluence
Allows the data store to read comments.
read:configuration:confluence
Allows the data store to read configurations.
read:confluence-content.all
Allows the data store to read all Confluence content.
read:confluence-space.summary
Allows the data store to read space summaries.
read:content-details:confluence
Allows the data store to read content details in Confluence.
read:content.metadata:confluence
Allows the data store to read content metadata.
read:group:confluence
Allows the data store to read groups.
read:page:confluence
Allows the data store to read pages.
read:space:confluence
Allows the data store to read spaces.
read:space-details:confluence
Allows the data store to read space details.
read:task:confluence
Allows the data store to read tasks.
read:user:confluence
Allows the data store to read users.
search:confluence
Allows the data store to perform search queries in Confluence.
Add User Identity API scopes. The read:me scope is required when
Actions are enabled for the data store:
Go to User Identity API .
Click Add > Configure .
Go to the Granular scopes tab and click Edit scopes .
Select the read:me scope.
Usage reason
Permission
Description
Actions
read:me
Allows the data store to read current user information.
Confirm that all the scopes are selected and save your changes.
Set up an API token in Confluence
If you plan to use an API token for authentication, you must create an API token
without scopes. This data store doesn't support API tokens with scopes.
Sign in to Atlassian Console .
Click Create API token .
Enter a name for the API token.
Select an expiration date for the API token. The token expiration period ranges from 1 to 365 days.
Click Create .
Save the token for later use.
Manage user visibility
To make the user's email visible to anyone in the Atlassian account, follow these steps:
Sign in to the Atlassian Developer Console .
Click the profile icon and select Developer console .
Click the user profile icon and select Manage account .
Navigate to Profile and visibility .
Go to Contact and set the Who can see this as Anyone .
To make the user's email visible to anyone in Confluence, follow these steps:
Sign in to Atlassian with your user credentials.
Select a Confluence app.
Click Settings > System .
Select General Configuration in the left pane.
Click Edit Settings .
For User email visibility , select Public .
Click Update .
Install and configure User Identity Accessor for Confluence Cloud
If user email addresses aren't publicly accessible by default due to privacy settings in Confluence Cloud, you must install the User Identity Accessor for Confluence Cloud app to securely retrieve user email addresses. If user email addresses are already publicly visible, you might not need to install the app. For more information about restricted email visibility, see Manage user visibility and grant roles .
Roles and permissions
To install and configure the User Identity Accessor for Confluence Cloud app, you must have the appropriate administrative role and grant the required app-level permissions.
Required role : You must be a Confluence Site administrator to install
and configure the app.
App-level permissions : You must grant the following permissions during the app installation:
Read Email Address : Allows the app to securely retrieve user email addresses, even when profile visibility is restricted.
App Storage scope : Enables the app to read and write to its storage device.
Install User Identity Accessor for Confluence Cloud
To install the User Identity Accessor for Confluence Cloud app on your Confluence site, follow
these steps:
Navigate to Atlassian Marketplace .
Click Get it now .
Get it now
From the Select a site list, select the Confluence site where you want to install the app.
Note: You must have administrator privileges for the selected Confluence site to install the app.
Click Review to authorize the required permissions and agree to the terms and conditions.
Click Get it now to complete the app installation.
Upon successful installation, a confirmation message appears: "Your app has been added to your instance and is ready for use."
Configure User Identity Accessor for Confluence Cloud
After you've installed the User Identity Accessor for Confluence Cloud app, configure an API key that your external system (for example,
your Confluence Cloud data store) uses to securely call the app's webtrigger to fetch
emails.
Access the configuration page
To access the User Identity Accessor for Confluence Cloud app's configuration page in Confluence Cloud, follow these steps:
In your Confluence Cloud instance, click the Settings ⚙️ icon in the
navigation menu.
Select Apps from the menu.
On the Apps administration page, locate your app, User Identity Accessor for Confluence Cloud , in the Manage apps list.
Click Configure or the link associated with your app. The app's dedicated configuration page opens within Confluence.
Set up the API key
To set up the API key on the configuration page, follow these steps:
In the API Key Configuration section, specify the secret key for
authenticating requests to the app's webtrigger. You can authenticate requests using either of the following methods:
Enter your own key : Type or paste your own strong, unique API
key into the API Key field. Use a key of at least 20–30 characters with a
mix of uppercase letters, lowercase letters, numbers, and symbols.
Generate a key : Click the Generate New Key button. The system
generates and displays a strong, random key in the field.
Important : Immediately copy the API key displayed in the field. For security
reasons, you might be unable to view the full key again after saving or
navigating away. If lost, you need to set or generate a new one.
Click Save API Key . A success message confirms that the key is securely
saved.
Note: The API key generated or created in this section serves as the value for
the Confluence Identity Sync Forge Client Secret field in the Advanced Options
section during data store setup .
Test the app configuration
Verify that the User Identity Accessor for Confluence Cloud app is configured
correctly by sending a request from your external system and confirming that user
email addresses are returned successfully.
Get the webtrigger URL
On the Apps administration page, locate the Webtrigger URL section, which displays the
unique URL specific to your Confluence site and this app installation:
Your external system must call this URL to request user emails.
For example, https:// YOUR_INSTANCE_ID .hello.atlassian-dev.net/x1/ WEBTRIGGER_ID ,
where YOUR_INSTANCE_ID is your Confluence Cloud instance identifier and
WEBTRIGGER_ID is the unique identifier for the webtrigger endpoint
generated for your app.
Click the Copy URL button or copy the entire URL.
Configure your external system
Configure your external system that needs to fetch Confluence user emails with the API
key and webtrigger URL obtained in the previous steps.
Endpoint URL : The webtrigger URL you copied.
HTTP Method : POST
Required Headers :
Content-Type : application/json
X-Api-Key : YOUR_API_KEY
Replace YOUR_API_KEY with the API key you set or
generated in the Set up the API key section.
Example curl command
This example demonstrates calling the User Identity Accessor for Confluence Cloud webtrigger, which accepts an array
of account IDs and returns the email addresses.
curl --location --request POST 'https:// YOUR_INSTANCE_ID .hello.atlassian-dev.net/x1/ ENDPOINT_PATH ' \
--header 'X-Api-Key: YOUR-API-KEY ' \
--header 'Content-Type: application/json' \
--data-raw '{
"accountIds": [
" ACCOUNT_ID_1 ",
" ACCOUNT_ID_2 "
]
}'
Replace:
YOUR_INSTANCE_ID with your Confluence Cloud instance ID
ENDPOINT_PATH with the API endpoint path
YOUR_API_KEY with the API key you set or generated in the Set up the API key section
ACCOUNT_ID with Atlassian account IDs you want to target
Expected response
[{ "accountId" : " ACCOUNT_ID_1 " , "emailAddress" : " EMAIL_ADDRESS_1 " },
{ "accountId" : " ACCOUNT_ID_2 " , "emailAddress" : " EMAIL_ADDRESS_2 " }]
Replace:
ACCOUNT_ID_X with actual Atlassian account IDs
USER_EMAIL_X with user email addresses returned from your API call
Implement security best practices
To confirm the security of your API key, follow these recommendations:
Store the API key securely within your Confluence Cloud data store's configuration.
Verify that all communication with the webhook URL occurs over HTTPS. This is the default for User Identity Accessor for Confluence Cloud webtriggers.
Support for User Identity Accessor for Confluence Cloud
Support offerings are available from Google for the User Identity Accessor for Confluence Cloud app that can include maintenance and regular updates to keep the app up to date. If you encounter any issues or have questions specific to the app functionality, contact Google Cloud Support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
