---
title: "Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore
  title: "Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Self-service Explores
Stay organized with collections
Save and categorize content based on your preferences.
With the Self-service Explores feature, your Looker users can upload CSV, XLS, and XLSX files to Looker and then query and visualize the data in a Looker Explore without needing to configure a LookML model or set up Git version control.
Looker admins can select the Self-service Explores option from the Looker Admin menu to configure the Self-service Explores feature and view data uploads on the instance.
Before you begin
To use self-service Explores, your Looker instance must meet the following requirements:
Running Looker 25.18 or later.
Has a connection to a BigQuery database (see the Google BigQuery documentation page for information about setting up a BigQuery connection on your Looker instance), and the connection must be configured in the following ways:
The connection must be configured with the All projects scope. To verify the connection's scope, see the Scope column in the Databases tab of the Connections page in the Looker admin menu. The connection's Project Scope value cannot be edited once the connection is created.
The connection must be enabled for persistent derived tables (PDTs). To verify that PDTs are enabled on the BigQuery connection, open the Looker Connections page, click the Edit button for the BigQuery connection, click to open the Optional Settings tab, and then verify that the Enable PDTs toggle is turned on.
For any user who will be creating self-service Explores, their Looker user account must have the upload_data permission, which allows a user to upload CSV files to your instance.
Enabling self-service Explores
Important:
To support the Self-service Explore feature, upon upgrade to Looker 25.20, your Looker instance adds the upload_data permission to any role or permission set that contains the explore permission, including custom permission sets. If you enable data uploads on a Looker instance, any user with the upload_data permission will be able to upload data to create self-service Explores on your instance.
Be mindful of changing the settings on the Self-service Explores admin page if your instance has existing self-service Explores:
If you disable data uploads, your users will no longer be able to access existing self-service Explores from the Explore menu, and any Looks or dashboards that rely on the data may be affected.
If you change the BigQuery connection, any existing self-service Explores on your instance can be affected, along with any Looks or dashboards that rely on their data.
Before your users can create self-service Explores, a Looker admin must configure the feature by performing the following steps:
From the General section of the Looker Admin menu, select the Self-service Explores admin page.
On the Self-service Explores admin page, from the Default BigQuery connection drop-down menu, select the BigQuery connection to use for storing the data for self-service Explores. Looker will save the data to this BigQuery database for the self-service Explores on your instance.
Click the Test connection button to verify that the BigQuery connection is valid and that it has PDTs enabled so that it can support data uploads. (See the Before you begin section for information on the requirements for connections to support data uploads.) If the test fails, you won't be able to enable data uploads. You can go to the Connections admin page to see more details about your connection and to further test the connection to see where the connection is failing.
Click the Enable data uploads button.
If you want your Looker instance to support uploading data from Google Sheets , you must also use the Google Cloud console to enable the required APIs. See the Enabling the APIs to support Google Sheets uploads section on this page.
Enabling the APIs to support Google Sheets uploads
To support uploading data from Google Sheets, the following APIs must be enabled in the Google Cloud console by an IAM user with the IAM roles/serviceusage.serviceUsageAdmin permission:
This API must be enabled in the Google Cloud project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page:
BigQuery API: Required for all BigQuery operations
These APIs must be enabled in the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection , which may or may not be the same as the Google Cloud project that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page):
BigQuery API: Required for all BigQuery operations
Google Sheets API: Required for retrieving the names of each sheet in a Google Sheets document
Google Drive API: Required for BigQuery to read files from Drive
Perform the following steps to enable the APIs:
From the Google Cloud console Open project picker , select the project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page.
In the Google Cloud console navigation menu, go to APIs & Services > Library and open the BigQuery API.
Go to BigQuery API
On the BigQuery API page, if the API isn't already enabled, click Enable .
Still on the BigQuery API page, from the Google Cloud console Open project picker , select the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection ).
On the BigQuery API page, if the API isn't already enabled, click Enable .
In the Google Cloud console navigation menu, go to APIs & Services > Library and open the Google Sheets API.
Go to Google Sheets API
On the Google Sheets API page, if the API isn't already enabled, click Enable .
In the Google Cloud console navigation menu, go to APIs & Services > Library and open the Google Drive API.
Go to Google Drive API
On the Google Drive API page, if the API isn't already enabled, click Enable .
Enabling OAuth for Google Sheets uploads
After you have enabled self-service Explores and enabled the APIs to support Google Sheets uploads , you can also enable your users to use Google Drive navigation to select Google Sheets documents for data uploads .
To enable Google Drive navigation on your Looker instance, an IAM user with the required roles must create an OAuth client in the Google Cloud console and then enter the OAuth credentials into the Self-service Explores admin page on your Looker instance, as described in the procedure in this section.
Note: Before you can generate your OAuth credentials, Google requires that you configure an OAuth consent screen, which lets your users choose how to grant access to their private data. If you haven't yet configured an OAuth consent screen for your selected Google Cloud console project, the Google Cloud console will display a notice with a Configure consent screen button. Click the button and follow the procedure on the Configure the OAuth consent screen and choose scopes Workspace documentation page, and then return to this procedure.
To create the OAuth client and enter the credentials in your Looker instance, follow these steps:
In the Google Cloud console, use the Google Cloud console Open project picker to select the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection ).
Go to Google Cloud console
Use the Google Cloud console main menu to navigate to APIs & Services > Credentials .
From the Credentials page, click the Create Credentials drop-down menu, and then select OAuth client ID .
In the Application type drop-down, select Web application .
In the Name field, enter a name for your OAuth client, such as Looker upload data from Sheets .
In the Authorized JavaScript origins section, click the Add URI button. Enter your Looker instance URL:
https:// LOOKER_INSTANCE_URL
Click Create .
After you click Create , an OAuth client created window appears. This window displays the client ID and client secret that the Google Cloud console created for your OAuth client. Copy and make note of these values.
In your Looker instance, select Self-service Explores from the General section of the Admin panel.
On the Self-service Explores page, in the Client ID and Client secret fields, paste the values that you copied from the Google Cloud console when you created the OAuth client in the Google Cloud console.
Click Save .
Now, when your users upload data using the Import from cloud option, Looker displays Google Drive navigation for selecting Google Sheets documents .
Viewing the data uploads on your Looker instance
If self-service Explores are enabled on your instance, a Looker admin can use the Data uploads table on the Self-service Explores admin page to view the data that your users have uploaded on the instance.
The Data uploads table shows the following information about the data uploads on your instance:
The name of the self-service Explore, which is also a hyperlink that opens the self-service Explore
The owner of the data upload
The date that the data was uploaded
A Delete button that allows Looker admins to delete the file upload and its associated self-service Explore
Looker admins can open any self-service Explore on the instance by using the links in the Data uploads table. However, the Self-service Explores section of the Looker Explore menu lists only the self-service Explores that you own or that the owner has specifically shared with you. The Explore menu doesn't list every self-service Explore on the instance for Looker admins, since that could make the Explore menu cumbersome.
Removing a data upload
The owner of a data upload can remove their upload from the Edit Self-service Explore page . In addition, a Looker admin can remove a data upload from the Self-service Explores admin page by following these steps:
From the General section of the Looker Admin menu, select the Self-service Explores admin page.
In the Data uploads table, click the Delete button for the data upload that you want to remove.
Click Delete in the confirmation dialog.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
