---
title: "Looker actions overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/actions-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/looker-core-access-control
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/actions-overview
  title: "Looker actions overview \_|\_ Google Cloud Documentation"
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
Looker actions overview
Stay organized with collections
Save and categorize content based on your preferences.
Looker's Action API allows developers to define actions, or custom destinations to which Looker can send query results, dashboard results, or user interactions.
Note: The Looker Action Hub, a Looker-hosted service that provides common, prebuilt actions, is built on top of the Action API. See Looker Action Hub to learn more.
Once an action is developed, deployed as a web service, and then added to a Looker instance, Looker users will be able to send data using that action from within Looker. For more information, see the Sharing data through an action hub documentation page.
Using Actions
The Action API supports a number of variations in use cases:
Actions support various levels of user interactivity. They may be designed for ad hoc user interactions while a user is viewing a dashboard, or they may be intended to work with recurring or triggered schedules.
Actions can instruct Looker to collect form data from users, in order to parameterize the handling of the data.
Actions can even request user authentication to a third party service using OAuth, for example to implicitly deliver data to user-specific destinations.
Actions can also receive query results in various formats, from data oriented formats like CSV and Excel, to various JSON formats for programmatic use cases, to visualization-oriented formats like PNG or PDF.
While these use cases are diverse, the common thread between them is that Looker users are able to instruct Looker to reach out and send data to an Action.
As a result, implementing an Action involves deploying a web service to listen for these requests.
This can be achieved by adding a few new endpoints to an existing application server, deploying a web server exclusively for this purpose, or even using a serverless environment such as Google Cloud Run functions. The Action API does not require the service to maintain any state between requests, so Action servers can benefit from scalable and flexible stateless deployment configurations.
Finally, since the Action API consists of JSON-formatted HTTP POST requests, any server side language can be readily used to implement an action. Looker provides several examples in TypeScript, including the open-source code for our ActionHub .
List of integrated services
The following list shows the services that are are available in the Looker Action Hub.
Caution: Individual Actions shown on the following list are not officially supported Google products.
Here is how to use the list:
The URLs that are shown in the Link to README file column provide instructions for enabling and configuring the integrated service to work with Looker.
The URLs that are shown in the How to use this integration column provide instructions for how to send data from Looker to the integrated service. Some of these articles also contain enablement instructions.
Required LookML tags lists any required tags that must be used with the tags parameter in the content's underlying model.
Action type indicates what level of data the integrated service is sending: field, query, or dashboard. A field-level action sends the value of a single, specified cell in a data table. A query-level action sends the results of an entire query, such as all rows in an Explore or a Look. A dashboard-level action sends an image of a dashboard.
Content available for scheduled deliveries indicates what type of Looker content this integrated service can send as an ad hoc or scheduled content delivery .
Uses Google OAuth authentication indicates whether the integrated service uses Google OAuth credentials for authentication. Customer-hosted instances may be unable to enable actions from the Looker Action Hub that use Google OAuth. See the Sharing data through an action hub documentation page for suggested solutions to this potential issue.
Uses data streaming indicates whether the integrated service supports streamed query results. Customer-hosted instances may be unable to enable actions from the Looker Action Hub that stream results. See the Sharing data through an action hub documentation page for suggested solutions to this potential issue.
Minimum supported Looker version provides the earliest Looker version that your instance must be using in order to use this integration.
Integrated service
Description
Link to README file
How to use this integration
Required LookML tags
Action type
Content available for scheduled deliveries
Uses Google OAuth authentication (Yes/No)
Uses data streaming (Yes/No)
Minimum supported Looker version
Airtable
Add records to a table in Airtable.
View README on GitHub
View Community article
None
Query
Look, Explore
No
No
5.6
Amazon SageMaker Infer
Perform an inference using Amazon SageMaker.
No README available
No article available
None
Query
Look, Explore
No
Yes
5.6
Amazon SageMaker Train: Linear Learner
Start a training job on Amazon SageMaker, using the Linear Learner algorithm.
No README available
No article available
None
Query
Look, Explore
No
Yes
5.6
Amazon SageMaker Train: Xgboost
Start a training job on Amazon SageMaker, using the Xgboost algorithm.
No README available
No article available
None
Query
Look, Explore
No
Yes
5.6
Amazon Web Services EC2 Stop Instance
Stop an EC2 Instance using the Amazon EC2 API.
View README on GitHub
View Community article
aws_resource_id
Field, query
Look, Explore
No
No
5.6
Auger
Use query result to build a predictive model.
View README on GitHub
See README
None
Query
Look, Explore
No
Yes
5.24
Azure Storage
Send and store a data file on Azure Storage.
View README on GitHub
View Community article
None
Query, dashboard
Look, Explore, dashboard
No
Yes (for queries), No (for dashboards)
5.6
Braze
The Braze action lets you flag users within Braze using the REST API Endpoint from a Look. Ensure there's a braze_id field tagged in the results. MAX EXPORT: 10000.
View README on GitHub
See README
braze_id
Query
Look, Explore
No
Yes
5.6
DigitalOcean — Stop Droplet
Stop DigitalOcean process using the DigitalOcean API.
View README on GitHub
View Community article
digitalocean_droplet_id
Field, query
Look, Explore
No
No
5.6
DigitalOcean Spaces
Send to and store a data file in DigitalOcean Storage.
View README on GitHub
View Community article
None
Query, dashboard
Look, Explore, dashboard
No
Yes (for Looks and Explores), No (for dashboards)
5.6
Dropbox
Send and store a data file on Dropbox.
No README available
View documentation
None
Query, dashboard
Look, Explore, dashboard
Yes
No
6.8
Facebook Custom Audiences
Upload data to Facebook Ads Custom Audiences from Customer List.
View README on GitHub
See README
None
Query
Look, Explore
Yes
Yes
6.10
Firebase
Use Firebase to send push notifications to mobile.
No README available
No article available
None
Query
Look, Explore
No
No
22.4
Google Ads Customer Match
Upload data to Google Ads Customer Match.
View README on GitHub
View documentation
None
Query
Look, Explore
Yes
Yes
6.10
Google Analytics Data Import
Upload data to a Google Analytics dataset.
View README on GitHub
See README
None
Query
Look, Explore
Yes
Yes
6.10
Google Cloud Storage
Write data files to a Google Cloud Storage bucket.
View README on GitHub
View Community article
None
Query, dashboard
Look, Explore, dashboard
No
Yes (for Looks and Explores), No (for dashboards)
5.6
Google Drive
Send data to Google Drive.
No README available
View documentation
None
Query, dashboard
Look, Explore, dashboard
Yes
Yes (for Looks and Explores), No (for dashboards)
7.4
Google Sheets
Send CSV data to a Google Sheet.
No README available
View documentation
None
Query
Look, Explore
Yes
Yes
7.4
Hubspot Companies
Add properties to your Companies using the Hubspot V3 API.
View README on GitHub
See README
hubspot_company_id
Query
Look, Explore
No
Yes
5.6
Hubspot Contacts
Add properties to your Contacts using the Hubspot V3 API.
View README on GitHub
See README
hubspot_contact_id
Query
Look, Explore
No
Yes
5.6
Kloudio
Add data to a Google Sheet.
View README on GitHub
See README
None
Query
Look, Explore
No
No
5.6
mParticle
Bulk export your user or event data from Looker to mParticle.
View README on GitHub
See README
See README
Query
Look, Explore
No
Yes
5.6
Salesforce Campaigns
Add contacts or leads to Salesforce campaign.
View README on GitHub
See README
sfdc_contact_id or sfdc_lead_id
Query
Look, Explore
Yes
No
22.6
Segment Group
Add traits and/or users to your Segment groups.
View README on GitHub
View documentation
segment_group_id and user_id, or segment_group_id and segment_anonymous_id
Query
Look, Explore
No
Yes
4.20
Segment Identify
Add traits to your Segment users using Identify.
View README on GitHub
View documentation
email or user_id or segment_anonymous_id or segment_group_id
Query
Look, Explore
No
Yes
4.20
Segment Track
Connect to a number of integrations provided by Segment to identify and target users for marketing workflows.
View README on GitHub
View documentation
email or user_id or segment_anonymous_id or segment_group_id
Query
Look, Explore
No
Yes
4.20
SendGrid
Send data and schedule results to send to an email address using SendGrid's API.
View README on GitHub
View Community article
None
Query, dashboard
Look, Explore, dashboard
No
No
5.6
Slack
Send Looker content in direct messages, public channels, and private channels in Slack using OAuth. It is available for Looker-hosted deployments on Looker 6.24+ with the IP Allowlist feature disabled.
No README available
View documentation
None
Query, dashboard
Look, Explore, dashboard
Yes
Yes (for Looks and Explores), No (for dashboards)
6.24
Slack Attachment (API Token)
Send data directly into a Slack channel along with user credentials. You may also want to reference Lookerbot documentation for additional Slack functionality.
View README on GitHub
View documentation
None
Query, dashboard
Look, Explore, dashboard
No
No
5.6
Teams — Incoming Webhook
Send data to Microsoft Teams using an incoming webhook.
View README on GitHub
See README
None
Query, dashboard
Look, Explore, dashboard
No
No
5.6
Tray
Connect to a number of integrations provided by Tray.io to automate workflows.
View README on GitHub
View Community article
None
Query
Look, Explore
No
Yes
5.6
Twilio — Send Data
Send data from a Look or schedule results to send to a phone number using Twilio's API.
View README on GitHub
View Community article
None
Query
Look, Explore
No
No
5.6
Twilio — Send Message
Send a message to a series of phone numbers (data columns that are tagged as phone numbers) in a Look.
View README on GitHub
See README
phone
Field, query
Look, Explore
No
No
5.6
Zapier
Connect to a number of integrations that are provided by Zapier to automate workflows.
View README on GitHub
View Community article
None
Query
Look, Explore
No
Yes
5.6
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
