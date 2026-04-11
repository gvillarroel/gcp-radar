---
title: "Enabling real-time email and chat notifications \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications
  title: "Enabling real-time email and chat notifications \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Enabling real-time email and chat notifications
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
Overview
Security Command Center provides real-time notifications of findings in the
Google Cloud console. This guide describes how to use Google Cloud services
and third-party APIs to extend
that functionality and receive near real-time notifications in email and chat
apps. When you complete the guide, you get alerts to new findings in configured
third-party services without logging into the Google Cloud console,
allowing for faster triaging of vulnerabilities and threats. Learn more about
the different types of
vulnerabilities and threats in
Security Command Center.
Topology
In this guide, you create the configuration that is illustrated in the
following diagram.
Near real-time notifications workflow for Security Command Center
(click to enlarge)
Objectives
In this guide, you do the following:
Set up a Pub/Sub topic.
Set up Slack, Twilio SendGrid Mail, and Webex Teams.
Write code in Cloud Run functions.
Configure Pub/Sub and Cloud Run functions to
send notifications to Slack, Twilio SendGrid Mail, or Webex Teams whenever a new
high or critical severity finding is written to Security Command Center.
Troubleshoot notification problems.
Costs
This tutorial uses billable components of Google Cloud, including:
Pub/Sub
Cloud Run functions
Cloud Build
Use the pricing calculator to generate a cost estimate
based on your projected usage.
Before you begin
To complete this guide, you must have the following Identity and Access Management (IAM)
roles:
Organization Admin ( roles/resourcemanager.organizationAdmin )
Security Center Admin ( roles/securitycenter.admin )
Security Admin ( roles/iam.securityAdmin )
A role with the serviceusage.services.use permission , such as Owner ( roles/owner ),
Editor ( roles/editor ), or a custom role
Create Service Accounts ( roles/iam.serviceAccountCreator )
Pub/Sub Editor ( roles/pubsub.editor )
Billing Account Administrator ( roles/billing.admin )
The IAM roles for Security Command Center can be granted at the organization,
folder, or project level. Your ability to view, edit, create, or update findings, assets,
and security sources depends on the level for which you are granted access. To learn more about
Security Command Center roles, see Access control .
Setting up a project
Complete the following steps to create or select a project.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Estimated time: it takes approximately one hour to set up and test
notifications for a single service.
Setting up a Pub/Sub topic
Important: If you already configured Security Command Center to publish findings in
Pub/Sub, you can skip to
Setting up a messaging app . Otherwise, follow the
instructions in this section to set up a Pub/Sub topic.
Pub/Sub is a real-time messaging service that enables messages to
be sent and received between independent applications. Learn more about
Pub/Sub .
In this section, you configure Security Command Center to publish findings to a
Pub/Sub topic.
To set up and subscribe to a Pub/Sub topic:
Specify your Google Cloud project in an environment variable.
Note: This project ID is used throughout this document.
export PROJECT_ID = PROJECT_ID
Replace PROJECT_ID with your project ID.
Specify your Google Cloud organization in an environment variable.
export ORG_ID = ORG_ID
Replace ORG_ID with your organization ID.
Set the project ID for gcloud commands.
gcloud config set project PROJECT_ID
Create the Pub/Sub topic where notifications are published.
gcloud pubsub topics create scc-critical-and-high-severity-findings-topic
Specify the topic in an environment variable.
export TOPIC = projects/ $PROJECT_ID /topics/scc-critical-and-high-severity-findings-topic
Create the subscription that notifies Cloud Run functions
to send an email or chat message when messages are published to the topic.
gcloud pubsub subscriptions create scc-critical-and-high-severity-findings-sub \
--topic scc-critical-and-high-severity-findings-topic
Note: By default, Pub/Sub subscriptions expire after 31 days of
inactivity, defined as subscriptions without active connections, pull
requests, or push successes. To keep subscriptions longer, set the
--expiration-period flag to a higher value or the special value never ,
indicating the subscription never expires. See Using subscription
properties for more
information.
Configure Security Command Center to publish notifications to the topic. Any
filter compatible with the ListFindings API can be used.
The following filter publishes notifications for active high and critical
severity findings in the global location. Learn more about
filtering findings .
gcloud scc notifications create scc-critical-high-severity \
--pubsub-topic = $TOPIC \
--organization = $ORG_ID \
--location = global \
--filter '(severity="HIGH" OR severity="CRITICAL") AND state="ACTIVE"'
Note: If you use VPC Service Controls, you might need to grant access to protected
project resources before creating a NotificationConfig and in order for
notifications to work. For more information, see Granting perimeter access
in VPC Service Controls .
Next, you create or configure your email or chat app to receive notifications
from Pub/Sub.
Setting up a messaging app
This section describes how to use Pub/Sub and
Cloud Run functions or Cloud Run functions (1st gen)
to enable near real-time notifications for Twilio SendGrid Mail API, Slack,
and Webex Teams.
Note: The Twilio SendGrid Mail and Slack examples show how to send
notifications with basic information (the finding category). The Webex
solution adds the additional step of creating a
service account to include additional
information, such as discovery times, remediation steps, and links to
findings.
You can customize any of the examples to include as much or as little
information as you want.
Twilio SendGrid Mail
To enable email notifications, you do the following:
Create a Twilio SendGrid Mail API account and obtain an API key.
Create and deploy a Cloud Run function that sends emails when
notifications are received from Pub/Sub.
Create Twilio SendGrid Mail API account
In this section, you create a Twilio SendGrid Mail API account and obtain an API
key. If you already have SendGrid enabled, skip to
Obtain a Twilio SendGrid Mail API Key
and ensure your existing API key has adequate permissions.
Go to the Google Cloud console.
Go to the Google Cloud console
In the search box at the top of the page, search for
SendGrid Email API .
On the next page, select the plan that fits your needs.
If necessary, proceed by selecting a project to associate with SendGrid.
You might need adequate permissions to
manage purchases for the project's associated billing account.
Review the terms and if you're comfortable, click Subscribe .
Activate the SendGrid service by clicking Register with SendGrid .
On the registration screen, enter a username, password, and email address.
Accept the terms of service and click Continue .
At the confirmation dialog, click Return to Google .
Obtain a Twilio SendGrid Mail API key
Click Manage API keys on SendGrid website . A new tab opens for the
SendGrid website.
Complete the form or sign in, if prompted. Then, click Get Started!
In the menu panel, expand Settings and click API Keys .
On the next screen, click the Create API Key button.
Under API Key Name , enter " SCC Email Notifications ," select
Full Access , and then click the Create & View button.
You are shown the API key. Record the value. You need it in the next
section.
Click Done . You are shown the current set of API keys. Close the tab
and return to the Google Cloud console.
Next, you deploy a Cloud Run function to send notifications to an email
address.
Create the SendGrid Cloud Run function
In this section, you deploy a function that sends notifications to your email
account.
Go to Cloud Run functions.
Go to Cloud Run functions
Ensure that you're using the same PROJECT_ID you used to create
the Pub/Sub topic.
Click Create Function .
Set Function name to
send-high-and-critical-finding-email-notification and the
Trigger type to Pub/Sub .
Select the Pub/Sub topic that you created in Setting up a
Pub/Sub topic .
Click Save , and then click Next .
On the next page, set Runtime to Python 3.8 . The code sample in
this section is written in Python, but you can use any language supported by
Cloud Run functions.
In the file list, click requirements.txt and add the
following to the text field: sendgrid .
Click main.py and replace the contents with the following code snippet.
Note : This code sample requires you to hardcode
user or application credentials. For added security, and to safeguard
credentials, consider using Secret Manager with
Cloud Run functions. For instructions, see
Using secrets
in Cloud Run functions documentation.
import base64
import json
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
def send_email_notification ( event , context ):
"""Triggered from a message on a Pub/Sub topic.
Args:
event (dict): Event payload.
context (google.cloud.functions.Context): Metadata for the event.
"""
pubsub_message = base64 . b64decode ( event [ 'data' ]) . decode ( 'utf-8' )
message_json = json . loads ( pubsub_message )
message = Mail (
from_email = ' noreply@yourdomain.com ' ,
to_emails = ' $EMAIL_ADDRESS ' ,
subject = 'New High or Critical Severity Finding Detected' ,
html_content = 'A new high or critical severity finding was
detected : ' + ''.join(message_json[' finding '][' category ']))
try :
sg = SendGridAPIClient ( ' $SENDGRID_EMAIL_API_KEY ' )
response = sg . send ( message )
print ( response . status_code )
print ( response . body )
print ( response . headers )
except Exception as e :
print ( e )
print ( pubsub_message )
Replace the following:
Change noreply@yourdomain.com to the email address from which you
want messages to originate.
Change $EMAIL_ADDRESS to the intended recipient's email address.
Note: This variable can hold an array of email addresses
( ['user1@yourdomain.com', 'user2@yourdomain.com'] ) or you
can write custom code to make a dynamic variable set to, for example,
a rotating list of individuals who are on-call.
Change $SENDGRID_EMAIL_API_KEY to the API key you already have or the
one you created in the previous section.
Navigate to the Entry point field and enter the name of the function
in the code snippet ( send_email_notification , in this example).
Click Deploy . You are returned to the Cloud Run functions list
where you should see your new function. When a green check mark appears next
to the function name, it has been successfully deployed. The process could
take a few minutes.
Slack
To send notifications to a Slack channel, you do the following:
Create a new Slack app with sufficient privileges to post messages to a
public Slack channel.
Create and deploy a Cloud Run function that posts chat messages to
Slack when notifications are received from Pub/Sub.
Create a new Slack app
In this section, you create a new Slack app to receive notifications.
Navigate to Slack API apps .
The page opens in a new tab.
Sign in or create an account.
Select Create an App .
Set App Name to " SCC Finding Notifier ."
Select the Development Slack Workspace where you'd like the Slack Bot
to post messages, and then click Create App .
In the navigation panel, select OAuth & Permissions .
Navigate to the Scopes section. Scopes fall into two categories:
Bot Token Scopes
User Token Scopes
For this exercise, you don't need to add a User Token Scope. Under Bot
Token Scopes, click Add an OAuth Scope and enter:
chat:write
chat:write.public
Go to the top of the OAuth & Permissions page and click
Install App to Workspace .
In the confirmation dialog, click Allow .
Copy the Bot User OAuth Access Token for use in the Cloud
Function.
Next, you deploy a Cloud Run function to send notifications to a Slack
group.
Create the Slack Cloud Run function
In this section, you deploy a function to send notifications to your Slack
account. The code sample in this section is written in Python, but you can use
any language that is supported by Cloud Run functions.
Note : This code sample requires you to hardcode
user or application credentials. For added security, and to safeguard
credentials, consider using Secret Manager with
Cloud Run functions. For instructions, see
Using secrets
in the Cloud Run functions documentation.
In the Google Cloud console, go to Cloud Run functions Services
page.
Go to Services
Select the ID of the project that contains the Pub/Sub topic.
Click Write a function , and fill in the fields:
For Service name , enter slack-chat-high-and-critical-findings .
For Region , select the region where you want to store the service.
For Runtime , select the Python version to use to run your function.
Click Add trigger and select Pub/Sub trigger .
Enter the details of the Pub/Sub topic that you
created in Setting up a Pub/Sub
topic , and click Save trigger .
Click Create . The service details are displayed.
In the Source pane of the Source tab, click requirements.txt .
In the code editor, add requests and functions-framework==3.* :
requests
functions-framework==3.*
In the Source pane, click main.py .
In the code editor, replace the code with the following:
import base64
import json
import requests
import functions_framework
TOKEN = " BOT_ACCESS_TOKEN "
@functions_framework . cloud_event
def send_slack_chat_notification ( cloud_event ):
pubsub_message = base64 . b64decode ( cloud_event . data [ "message" ][ "data" ]) . decode ( 'utf-8' ) . strip ()
message_json = json . loads ( pubsub_message )
finding = message_json [ 'finding' ]
requests . post ( "https://slack.com/api/chat.postMessage" , data = {
"token" : TOKEN ,
"channel" : "# SLACK_CHANNEL_NAME " ,
"text" : f "A high severity finding { finding [ 'category' ] } was detected."
})
Replace the following:
BOT_ACCESS_TOKEN : the Bot User OAuth
Access Token that you created with the Slack app.
SLACK_CHANNEL_NAME : the Slack channel where
you want to send the notifications.
In the Function entry point field, enter the name of the function
in the code sample: send_slack_chat_notification .
Click Save and redeploy . If a green check mark appears next to the
function name, your function has been successfully deployed. This process
can take a few minutes.
Webex
To send notifications to your Webex Teams account, you do the following:
Create a new service account that has permissions to retrieve assets from
Security Command Center.
Create a new Webex Bot with sufficient privileges to post messages to
your workspace.
Create and deploy a Cloud Run function that subscribes to
Pub/Sub and posts chat messages to Webex when notifications
are received from the Pub/Sub topic.
Create a service account
Cloud Run functions, by default, cannot retrieve assets from
Security Command Center. In this section, you provision a service account that
allows Cloud Run functions to retrieve assets associated with findings.
Name your service account and specify it as an environment variable.
export SERVICE_ACCOUNT = ACCOUNT_NAME
Create the service account for your project.
gcloud iam service-accounts create $SERVICE_ACCOUNT \
--display-name "Service Account for SCC Finding Notifier WebEx Cloud Function" \
--project $PROJECT_ID
Grant the service account the securitycenter.assetsViewer role
at the organization level.
gcloud organizations add-iam-policy-binding $ORG_ID \
--member = "serviceAccount: $SERVICE_ACCOUNT @ $PROJECT_ID .iam.gserviceaccount.com" \
--role = 'roles/securitycenter.assetsViewer'
Create a Webex Bot
In this section, you create a Webex Bot that posts messages to your
workspace.
Sign in to your Webex Teams account and navigate to the New
Bot page.
Set Bot Name to " SCC Finding Notifier ".
Select a descriptive but unique Bot Username
( your-name -scc-finding-notifier-demo).
Under Icon , select Default 1 .
Set Description to "A bot that notifies the team when a new high or
critical severity finding is published to Security Command Center."
Click Add Bot .
On the confirmation page, copy the Bot Access Token and save it for
use in the Cloud Run function.
Add Webex Bot to workspace
In this section, you add the Webex Bot to a workspace.
In the Webex Space where you want the Bot to post notifications, expand the
activity panel.
Select Add People .
Type " SCC Finding Notifier " in the text field and select the bot you
created from the drop-down menu.
Select the Add button, and then close the panel.
Obtain the Room ID of the workspace for the Cloud Run function.
On a desktop computer, go to
https://developer.webex.com/docs/api/v1/rooms/list-
rooms
and sign in, if necessary. This page uses the Webex API to list rooms to which
you belong.
Navigate to the search panel.
Select the tab labeled Try it at the top of the panel.
Leave all options with their default values and click Run .
In the Response tab, you receive a JSON-formatted response with a list
of items , or rooms. Find the title of the room in which you want
notifications to appear and record the associated id value.
Next, you deploy a Cloud Run function to send notifications to your
Webex workspace.
Create the Webex Cloud Run function
In this section, you deploy a function to send notifications to your Webex
account.
Go to Cloud Run functions.
Go to Cloud Run functions
Select the same PROJECT_ID in which the Pub/Sub
topic was created.
Click Create Function .
Set the Function name to
webex-teams-high-and-critical-findings and Trigger type to
Pub/Sub .
Select the Pub/Sub topic that you created in Setting up a
Pub/Sub topic .
Expand the Variables, Networking and Advanced Settings field.
Under Service account , filter for and select the
webex-cloud-function-sa service account you created.
Click Save , and then click Next .
On the next page, set Runtime to Python 3.8 . The code sample in
this section is written in Python, but you can use any language supported by
Cloud Run functions.
Navigate to the file list. Click requirements.txt and add the
following:
requests==2.25.1
google-cloud-securitycenter==1.1.0
Click main.py and replace the contents with the following code snippet.
Note : This code sample requires you to hardcode
user or application credentials. For added security, and to safeguard
credentials, consider using Secret Manager with
Cloud Run functions. For instructions, see
Using secrets
in Cloud Run functions documentation.
#!/usr/bin/env python3
import base64
import json
import requests
from google.cloud import securitycenter_v1
WEBEX_TOKEN = " WEBEX_TOKEN "
ROOM_ID = " ROOM_ID "
TEMPLATE = """
**Severity:** {severity} \n
**Asset:** {asset} \n
**SCC Category:** {category} \n
**Project:** {project} \n
**First observed:** {create_time} \n
**Last observed:** {event_time} \n
**Link to finding:** {finding_link}
"""
PREFIX = "https://console.cloud.google.com/security/command-center/findings"
def get_finding_detail_page_link ( finding_name ):
"""Constructs a direct link to the finding detail page."""
org_id = finding_name . split ( "/" )[ 1 ]
return f " { PREFIX } ?organizationId= { org_id } & resourceId= { finding_name } "
def get_asset ( parent , resource_name ):
"""Retrieves the asset corresponding to `resource_name` from SCC."""
client = securitycenter_v1 . SecurityCenterClient ()
resp = client . list_assets (
securitycenter_v1 . ListAssetsRequest (
parent = parent ,
filter = f 'securityCenterProperties.resourceName=" { resource_name } "' ,
)
)
page = next ( resp . pages )
if page . total_size == 0 :
return None
asset = page . list_assets_results [ 0 ] . asset
return json . loads ( securitycenter_v1 . Asset . to_json ( asset ))
def send_webex_teams_notification ( event , context ):
"""Send the notification to Webex Teams."""
pubsub_message = base64 . b64decode ( event [ "data" ]) . decode ( "utf-8" )
message_json = json . loads ( pubsub_message )
finding = message_json [ "finding" ]
parent = "/" . join ( finding [ "parent" ] . split ( "/" )[ 0 : 2 ])
asset = get_asset ( parent , finding [ "resourceName" ])
requests . post (
"https://webexapis.com/v1/messages" ,
json = {
"roomId" : ROOM_ID ,
"markdown" : TEMPLATE . format (
severity = finding [ "severity" ],
asset = asset [ "securityCenterProperties" ][ "resourceDisplayName" ],
category = finding [ "category" ],
project = asset [ "resourceProperties" ][ "project" ],
create_time = finding [ "createTime" ],
event_time = finding [ "eventTime" ],
finding_link = get_finding_detail_page_link ( finding [ "name" ]),
),
},
headers = { "Authorization" : f "Bearer { WEBEX_TOKEN } " },
)
Replace the following:
WEBEX_TOKEN with the Bot Access Token from the Create a Webex Bot
section.
ROOM_ID with the Room ID from the Add Webex Bot to workspace
section.
Navigate to the Entry point field and enter the name of the function
in the code snippet ( send_webex_teams_notification , in this
example).
Click Deploy . You are returned to the Cloud Run functions list
where you should see your new function. When a green check mark appears next
to the function name, it has been successfully deployed. The process can take
a few minutes.
If the preceding steps for your selected service completed without errors, the
setup is complete and you start receiving notifications. Keep in mind:
You receive a separate email or chat message for each individual critical
or high severity finding. The frequency or number of notifications depends
on the resources within your organization.
Notifications are published and sent in near-real time. However, the
immediacy of emails or messages is not guaranteed and multiple factors can
cause delays, including issues with Twilio SendGrid Mail, your email system, Slack, or
Webex.
To change the notifications workflow, you can do the following:
Change recipients by updating your Cloud Run function.
Change which findings trigger notifications by updating the filter for the
Pub/Sub topic.
Testing notifications
To test whether notifications are properly configured, follow the instructions
below to toggle high severity findings between active and inactive states.
Note: Event Threat Detection only returns iam_anomalous_grant findings for
Security Command Center users with a gmail.com email address.
Go to the Security Command Center Findings page.
Go to the Findings page
Select your organization, if prompted.
In the Quick filters panel, scroll down to the Severity section
and select either High or Critical . The Findings query results
panel updates to show findings of only the selected severity.
In the Findings query results panel, select a finding by checking
the box next to its name.
From the Change active state menu in the Findings query results
action bar, select Inactive . If the current findings query shows
only active findings, the finding is removed from the query results.
In the Quick filters panel, scroll down to the State section and
change the selections so that only Inactive is selected. The
Findings query results panel updates to show only inactive findings.
In the Findings query results panel, select the finding that
you marked inactive.
From the Change active state menu in the Findings query results
action bar, select Active .
Check your email or messaging service and you should see a message
similar to the images below.
Note: Email messages might appear in your spam folder.
Email:
Slack:
Messages sent to Webex, which contain more information in this guide, resemble
the following image.
Troubleshooting
If emails or chat messages are not being sent or received, follow the steps
below to identify and resolve potential issues.
Twilio SendGrid Mail:
To stop emails from going to the spam folder, add the from_email value
to your email allowlist or configure sender authentication
on SendGrid.
Be sure you are not exceeding the rate limit for your SendGrid plan.
Failed emails can be detected through SendGrid
reporting .
Your domain's or email provider's DMARC policy might block email from
unauthenticated senders. Learn how SendGrid manages sender
identity .
If there is an error, try another email address in the from_email
value.
Twilio SendGrid Mail, Slack, and Webex:
Check Stackdriver
logs for
your Cloud Run function to determine whether the function is being
invoked. If it is not being invoked, ensure that notifications are set up
correctly.
If the Cloud Run function is being invoked, then it might be
crashing. Check for errors in Cloud Run functions using
Google Cloud console Error Reporting .
Cleaning up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources, or
keep the project and delete the individual resources.
Deleting the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Deleting individual resources
Delete your notification configuration:
gcloud scc notifications delete scc-critical-high-severity \
--organization = ORG_ID \
--location = global
Replace ORG_ID with your organization ID.
To maintain your configuration and temporarily pause notifications, comment
out the send or post calls in your Cloud Run function.
Delete your Cloud Run function:
Go to Cloud Run functions.
Go to Cloud Run functions
Click the checkbox next to the function you want to delete.
Click Delete delete .
Delete the service account:
Go to the Service accounts page.
Go to the Service accounts page
Select a project.
Select the service account you want to delete, and then click
Delete delete .
What's next
Read more about notification errors .
Learn about filtering notifications .
Learn how to remediate
Web Security Scanner
and
Security Health Analytics
findings.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
