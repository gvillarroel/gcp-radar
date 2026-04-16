---
title: "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source
  title: "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\
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
Connect a third-party data source
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to connect third-party data sources to
Gemini Enterprise.
When you connect a third-party data source, Gemini Enterprise
creates a data store and associates entity data stores with it
for each specified entity. Entity
types are specific to the connected data source (for example, Jira Cloud entities include issues, attachments, comments, and worklogs).
To import data from a Google data source instead, see Create a first-party data
store .
If you are using customer-managed encryption keys, see Register single-region keys
for third-party connectors .
Connect a third-party data source
Visit a source-specific page for information on how to connect that source to Gemini Enterprise.
Generally Available
Connect Confluence Cloud with data ingestion and federation
Connect Dropbox with data federation
Connect Jira Cloud with data ingestion and federation
Connect Microsoft Entra ID
Connect Microsoft Outlook with data ingestion and federation
Connect Microsoft OneDrive with data ingestion and federation
Connect Microsoft SharePoint Online with data ingestion and federation
Connect ServiceNow with data ingestion
Public preview
Connect Box with data federation
Connect Confluence Data Center with data federation
Connect Docusign with data federation
Connect GitHub with data federation
Connect Hubspot with data federation
Connect Jira Data Center with data federation
Connect Linear with data federation
Connect Microsoft Teams with data federation
Connect Monday with data federation
Connect Notion with data federation
Connect ServiceNow with data federation
Connect Shopify with data federation
Connect Zendesk with data federation
Private preview
To connect data sources that are in private preview, contact
your Google account team and request to be added to the allowlist.
Connect Box with data ingestion
Connect Confluence Data Center On-premises with data ingestion
Connect Jira Data Center On-premises with data ingestion
Connect Salesforce with data ingestion
Connect Slack with data federation
Supported actions
Expand the data store name in the following list to reveal the available actions for each.
Box
Launch date
Action
Description
1/23/26
Upload file
Uploads a new document or file to a specific folder in Box.
Download file
Downloads a file from Box.
12/19/25
Copy file
Creates a duplicate of a file within a destination folder while leaving the original file unchanged.
Confluence Cloud
Launch date
Action
Description
1/23/26
Upload attachment
Uploads a file to be attached to a specific page.
Download attachment
Retrieves the actual file content of a specific attachment.
12/19/25
Create page
Creates a new Confluence Cloud page.
Confluence Data Center
Launch date
Action
Description
3/4/26
Download attachment
Download an attachment from a Confluence Data Center page.
2/19/26
Upload attachment
Uploads an attachment to a Confluence Data Center page.
Dropbox
Launch date
Action
Description
1/28/26
Download file
Downloads a file from Dropbox.
1/23/26
Upload file
Uploads a new file to a specified path within a Dropbox account.
12/12/25
Create folder
Creates a folder in Dropbox.
Copy file or folder
Copies a file or folder in Dropbox.
GitHub
Launch date
Action
Description
03/18/26
Create or update file
Create or update a file in GitHub.
Create or update issue
Create or update an issue in GitHub.
Fork repository
Fork a repository in GitHub.
Push files
Push files to GitHub.
03/11/26
Add comment to a pending review
Add comment to pending review in GitHub.
Add comment to an issue
Add comment to an issue in GitHub.
Create branch
Create a branch in GitHub.
Update pull request
Update a pull request in GitHub.
Merge pull request
Merge a pull request in GitHub.
HubSpot
Launch date
Action
Description
03/18/26
Manage CRM Objects
Manages CRM objects in HubSpot.
Jira Cloud
Launch date
Action
Description
1/23/26
Upload attachment
Uploads an attachment to an existing issue in Jira.
12/19/25
Change issue status
Changes a Jira issue's status.
12/12/25
Create comment
Creates a comment on a Jira issue.
Update comment
Edits an existing comment.
Create issue
Creates a new Jira issue (requires summary, project ID, and issue type ID).
Update issue
Updates an existing issue in Jira Cloud. You need to provide the issue ID to identify it, and you can modify various fields such as the summary, description, and assignee.
Jira Data Center
Launch date
Action
Description
2/19/26
Create issue
Create a new issue or ticket.
Update issue
Change the details of a ticket, like updating its summary, description, priority, or assignee.
Change Issue Status
Change the status of an issue.
Create comment
Add a comment on an issue.
Update comment
Modify an existing comment on an issue.
Download attachment
Download an attachment from an issue.
Upload attachment
Add an attachment to an issue.
1/30/26
Update issue
Updates an existing issue in Jira Data Center.
Linear
Launch date
Action
Description
2/6/26
Create comment
Add a comment to a Linear issue.
Create issue
Create an issue in Linear.
Update issue
Update an issue in Linear.
Create project
Create a new Linear project.
Update project
Update information about a Linear project.
Microsoft OneDrive
Launch date
Action
Description
1/23/26
Upload file
Uploads a file to OneDrive.
Download file
Downloads a file from OneDrive.
12/12/25
Create folder
Creates a new folder in OneDrive at a specified path.
Copy file
Copies a file in OneDrive from a source to a destination.
Microsoft Outlook
Launch date
Action
Description
4/9/26
Reply to mail
Replies to an email message.
1/23/26
Download attachment
Downloads an attachment from an email.
12/19/25
Create contact
Creates a new Outlook contact.
Update contact
Updates an existing Outlook contact.
12/12/25
Create event
Creates a new event.
Update event
Updates an existing event.
Send mail
Sends an email, including attachments.
Microsoft SharePoint
Launch date
Action
Description
3/11/26
Add page
Creates a new page on the SharePoint site.
Check out document
Check out a document from a SharePoint library.
Check in document
Check a document into a SharePoint library.
Rename attachment or document
Rename an attachment or a document in a SharePoint library.
Move attachment or document
Move a document from a SharePoint library to a destination library, folder, or another SharePoint site.
1/23/26
Upload document
Uploads a file to a SharePoint list item.
Download document
Downloads a file attached to a SharePoint list item.
12/12/25
Create folder
Creates a new folder in a specified path.
Add list
Creates a new structured data list (for example, tasks, contacts) on SharePoint.
Microsoft Teams
Launch date
Action
Description
12/19/25
Send channel message
Sends a message to a specified channel.
Send chat message
Sends a message in a chat.
Monday
Launch date
Action
Description
3/17/26
Change item column values
Changes the column values of an item in Monday.
Create board
Creates a new board in Monday.
Create column
Creates a new column in Monday.
Create dashboard
Creates a new dashboard in Monday.
Create doc
Creates a new doc in Monday.
Create form
Creates a new form in Monday.
Create group
Creates a new group in Monday.
Create item
Creates a new item in Monday.
3/4/26
Create workspace
Create a new workspace in Monday.
Notion
Launch date
Action
Description
03/11/26
Create database
Creates a new database in Notion.
Update database
Updates the attributes of a database in Notion.
Create page
Creates a new page in Notion.
Update page
Updates attributes of a Notion page.
2/19/26
Create comment
Creates a new comment on a Notion page or block.
Salesforce
Launch date
Action
Description
4/9/26
Create case
Creates a new case in Salesforce.
ServiceNow
Launch date
Action
Description
12/12/25
Create incident
Creates a new ServiceNow incident to report and track service interruptions.
Update incident
Updates an existing ServiceNow incident using its system ID.
Shopify
Launch date
Action
Description
3/11/26
Create customer
Create a new customer in Shopify.
Update customer
Update an existing customer in Shopify.
Create order
Create a new order in Shopify.
Send Fulfillment Request
Sends a request to fulfill products to a fulfillment service for an order.
3/4/26
Create customer
Create a new customer in Shopify.
Update customer
Update an existing customer in Shopify.
Zendesk
Launch date
Action
Description
3/4/26
Update article
Updates an existing article in Zendesk.
2/19/26
Update ticket
Updates an existing ticket in Zendesk.
Create category
Creates a new category in Zendesk.
Update post
Updates a post in Zendesk.
Merge tickets
Merges multiple tickets in Zendesk.
1/30/26
Create ticket
Creates a new ticket in Zendesk.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
