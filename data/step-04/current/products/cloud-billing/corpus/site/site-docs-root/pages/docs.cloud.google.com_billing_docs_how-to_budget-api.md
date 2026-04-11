---
title: "Using the Cloud Billing Budget API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/budget-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/budget-api
  title: "Using the Cloud Billing Budget API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
APIs & Reference
Send feedback
Using the Cloud Billing Budget API
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to send a few simple requests to the Cloud Billing Budget API.
For a full list of methods, see the
REST API
or RPC API reference documentation.
Before you begin
You should do the following before reading this guide:
Read Cloud Billing Budget API overview .
Read Cloud Billing Budget API prerequisites .
Perform setup steps .
Identify your Cloud Billing account ID
For every Cloud Billing Budget API call, you need your
Cloud Billing account ID .
Go to the
Google Cloud console Manage billing accounts page .
On the Your billing accounts tab, you see the list of
Cloud Billing accounts by name and ID. Locate the
Account ID value for the account where you manage budgets.
Key budget concepts
A budget can be applied to an entire billing account, or
scoped (filtered)
using granular budget filters to monitor specific slices of your costs.
A budget that is applied to an entire Cloud Billing account
includes costs from all of the
Google Cloud projects paid for by that billing account .
If you have limited or no access to the Cloud Billing account, you
can create single-project budgets for projects that you own. If you are a
Cloud Billing account-level user, you can create single-project
budgets that can't be modified by project-level users using the
OwnershipScope
field in the budget.
You can narrow the budget's
scope using filters ,
such as a subset of organizations, folders, projects, services, and other
budget filters applicable to your Cloud Billing account.
You can specify the time period of the budget. By default, a budget monitors
costs incurred during a calendar month. Using the usage_period filter that
is available in the Cloud Billing Budget API, you can configure the budget
time period to a CalendarPeriod
or a
CustomPeriod ,
allowing you to create budgets to monitor time frames beyond the default
calendar month, such as a quarter, a year, or a custom date range that you
specify.
You can set the
budget amount
to a total that you specify, or base the budget amount on the spend from the
previous calendar period.
You can set
budget threshold rules
to trigger email alert notifications. When your costs (actual costs or
forecasted costs) exceed a percentage of your budget (based on the rules you
set), alert emails are sent to the
recipients you specify .
You can set the budget's
notification rules ,
to specify the email recipients
of budget alerts, and to enable
programmatic notifications using Pub/Sub .
You can use Pub/Sub topics
for programmatic notifications
(for example, to forward your budget messages to other mediums such as Slack,
or to automate cost management tasks).
Quota limitation : Each individual Cloud Billing account can have
several thousand budgets
associated with it at a time. See
Quotas and limits
for current limits and additional information.
Calling the API
The following samples show how to send a few simple requests to the
Cloud Billing Budget API.
List budgets
This API method lists all budgets available for a given Cloud Billing
account.
REST
Before using any of the request data,
make the following replacements:
billing-account-id : The Cloud Billing account ID the budgets
apply to.
project-id : The Google Cloud project where the Cloud Billing Budget API is enabled.
HTTP method and URL:
GET https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: project-id " \ "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project-id " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"budgets": [
{
"name": "billingAccounts/000000-111111-222222/budgets/33333333-4444-5555-6666-777777777777",
"displayName": "Forecasted spend budget with Service Filter",
"budgetFilter": {
"projects": [
"projects/123456789"
],
"services": [
"services/A1E8-BE35-7EBC"
],
"creditTypesTreatment": "EXCLUDE_ALL_CREDITS",
"calendarPeriod": "MONTH"
},
"amount": {
"lastPeriodAmount": {}
},
"thresholdRules": [
{
"thresholdPercent": 0.9,
"spendBasis": "FORECASTED_SPEND"
}
],
"allUpdatesRule": {},
"etag": "c9d6c011f6fa6b5c"
}
]
}
Get budget
This API method gets the details for a particular budget.
REST
To call this method, you need the budget-id of the
budget you want to update. You can get the budget ID from the
createBudget output when you create your budget, or
listBudgets output if you list all of your
budgets.
Before using any of the request data,
make the following replacements:
billing-account-id : The Cloud Billing account ID this budget
applies to.
budget-id : The ID of the budget you want to get.
project-id : The Google Cloud project where the Cloud Billing Budget API is enabled.
HTTP method and URL:
GET https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: project-id " \ "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project-id " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "billingAccounts/000000-111111-222222/budgets/33333333-4444-5555-6666-777777777777",
"displayName": "Forecasted spend budget with Service Filter",
"budgetFilter": {
"projects": [
"projects/123456789"
],
"services": [
"services/A1E8-BE35-7EBC"
],
"creditTypesTreatment": "EXCLUDE_ALL_CREDITS",
"calendarPeriod": "MONTH"
},
"amount": {
"lastPeriodAmount": {}
},
"thresholdRules": [
{
"thresholdPercent": 0.9,
"spendBasis": "FORECASTED_SPEND"
}
],
"allUpdatesRule": {},
"etag": "c9d6c011f6fa6b5c"
}
Create budget
This API method creates a
Cloud Billing budget
applied to the specified Cloud Billing account.
REST
This sample shows how to create a budget for a given Cloud Billing account
that is
scoped (filtered) by a Google Cloud project that you specify and set
for a
calendar time period of a quarter.
Before using any of the request data,
make the following replacements:
projects/ budget-scope-project-id : The Google Cloud project ID
you want to set as a
budget scope
( budgetFilter ).
billing-account-id : The Cloud Billing account ID this budget
applies to.
api-user-project-id : The Google Cloud project where the Cloud Billing Budget API is
enabled.
HTTP method and URL:
POST https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets
Request JSON body:
{
"displayName": "Keep my spending down",
"budgetFilter": {
"projects": [
"projects/ budget-scope-project-id "
],
"calendar_period": "QUARTER"
},
"amount": {
"lastPeriodAmount": {}
},
"thresholdRules": {
"thresholdPercent": 0.8,
"spendBasis": "CURRENT_SPEND"
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: api-user-project-id " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " api-user-project-id " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "billingAccounts/000000-111111-222222/budgets/33333333-4444-5555-6666-777777777777",
"displayName": "Keep my spending down",
"budgetFilter": {
"projects": [
"projects/123456789"
],
"creditTypesTreatment": "INCLUDE_ALL_CREDITS",
"calendar_period": "QUARTER"
},
"amount": {
"lastPeriodAmount": {}
},
"thresholdRules": {
"thresholdPercent": 0.8,
"spendBasis": "CURRENT_SPEND"
},
"allUpdatesRule": {},
"etag": "f7928d8010160668"
}
Update budget
Use this API method to modify an
existing Cloud Billing budget
to change the
budget amount ,
the budget filters (budget scope) ,
the budget time period ,
or threshold rules .
REST
This sample shows how to update an existing budget to set a
scope (filter) by a Google Cloud project you specify, and to
update the budget's time period from a monthly budget to a quarterly
budget .
To call this method, you need the budget-id of the
budget you want to update. You can get the budget ID from the
createBudget output when you create your budget, or
listBudgets output if you list all of your
budgets.
Before using any of the request data,
make the following replacements:
projects/ budget-scope-project-id : The Google Cloud project I
you want to set as a
budget scope
( budgetFilter ).
billing-account-id : The Cloud Billing account ID this budget
applies to.
budget-id : The ID of the budget you want to update.
api-user-project-id : The Google Cloud project where the
Cloud Billing Budget API is enabled.
HTTP method and URL:
PATCH https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id
Request JSON body:
{
"budget": {
"displayName": "My fancy budget",
"budgetFilter": {
"projects": [
"projects/ budget-scope-project-id "
],
"calendar_period": "QUARTER"
},
"amount": {
"specifiedAmount": {
"units": 500
}
},
"thresholdRules": {
"thresholdPercent": 0.8,
"spendBasis": "CURRENT_SPEND"
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: api-user-project-id " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " api-user-project-id " } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "billingAccounts/000000-111111-222222/budgets/33333333-4444-5555-6666-777777777777",
"displayName": "My fancy budget",
"budgetFilter": {
"projects": [
"projects/123456789"
],
"creditTypesTreatment": "INCLUDE_ALL_CREDITS",
"calendar_period": "QUARTER"
},
"amount": {
"specifiedAmount": {
"units": 500
}
},
"thresholdRules": {
"thresholdPercent": 0.8,
"spendBasis": "CURRENT_SPEND"
},
"allUpdatesRule": {},
"etag": "f7928d8010160668"
}
Delete a budget
Use this API method to delete an
existing Cloud Billing budget .
REST
To call this method, you need the budget-id of the
budget you want to update. You can get the budget ID from the
createBudget output when you create your budget, or
listBudgets output if you list all of your
budgets.
Before using any of the request data,
make the following replacements:
billing-account-id : The Cloud Billing account ID this budget
applies to.
budget-id : The ID of the budget you want to delete.
project-id : The Google Cloud project where the Cloud Billing Budget API is enabled.
HTTP method and URL:
DELETE https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: project-id " \ "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project-id " } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://billingbudgets.googleapis.com/v1/billingAccounts/ billing-account-id /budgets/ budget-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{}
Previous
arrow_back
Setup
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
