---
title: "Monitor usage patterns for service accounts and keys \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-account-monitoring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-account-monitoring
  title: "Monitor usage patterns for service accounts and keys \_|\_ Identity and\
    \ Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Monitor usage patterns for service accounts and keys | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin Required roles
View usage metrics for all service accounts or keys
View usage metrics for a single service account
View usage metrics for a single service account key
Export metrics
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Monitor usage patterns for service accounts and keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
View usage metrics for all service accounts or keys
View usage metrics for a single service account
View usage metrics for a single service account key
Export metrics
What's next
This page explains how to use Cloud Monitoring to view usage metrics for your
service accounts and service account keys. These metrics let you view and track
usage patterns, which can help you identify anomalies, either automatically or
manually.
Note: To quickly identify the dates of only the most recent service
account and key usages, see View recent usage for service accounts and
keys .
Service accounts and service account keys appear in these metrics if they are
used to call any Google API, including APIs that are not part of Google Cloud.
The metrics include both successful and failed API calls. For example, if an API
call fails because the caller is not authorized to call that API, or because the
request referred to a resource that does not exist, the service account or key
that was used for that API call appears in the metrics.
Service account keys also appear in these metrics if a system lists the keys
while attempting to authenticate a request, even if the system doesn't use
the key to authenticate the request. This behavior is
most common when using signed URLs for Cloud Storage
or when authenticating to third-party applications. As a
result it is possible to see usage metrics for keys that have not been used for
authentication.
The following don't appear in either service account or service account key
metrics:
Cloud Storage HMAC authentication keys
Requests authenticated by
API keys bound to service accounts
Monitoring retains service account metrics for
6 weeks. If
you need to access data for a longer time period, you can periodically export
the results to BigQuery. For more information, see
Monitoring metric export in the Solutions
documentation.
After you use a service account or service account key, usage metrics are
usually available within a few minutes.
Before you begin
Enable the IAM and Cloud Monitoring APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to view recent usage for service accounts and keys,
ask your administrator to grant you the
Monitoring Viewer ( roles/monitoring.viewer )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
View usage metrics for all service accounts or keys
To view the usage metrics for your service accounts or service account keys,
follow these steps:
Console REST
More
To view the metrics for a monitored resource by using the
Metrics Explorer, do the following:
In the Google Cloud console, go to the
leaderboard Metrics explorer page:
Go to Metrics explorer
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console, select your Google Cloud project.
For App Hub configurations, select the
App Hub host project or the app-enabled folder's management project.
In the Metric element, expand the Select a metric menu,
enter IAM Service Account
in the filter bar, and then use the submenus to select a specific resource type and metric:
In the Active resources menu, select IAM Service Account .
In the Active metric categories menu, select Service_account .
In the Active metrics menu, select a service account metric.
The following metrics are available within your selected time interval:
For service account usage metrics,
select Service account authentication events .
For service account key usage metrics,
select Service account key authentication events .
Click Apply .
To add filters, which remove time series from the query results, use the
Filter element .
To combine time series, use the menus on the
Aggregation element .
For example, to display the CPU utilization for your VMs, based on their zone, set the
first menu to Mean and the second menu to zone .
All time series are displayed when the first menu of the Aggregation element is set
to Unaggregated . The default settings for the Aggregation element
are determined by the metric type you selected.
For quota and other metrics that report one sample per day, do the following:
In the Display pane,
set the Widget type to Stacked bar chart .
Set the time period to at least one week.
Note: Service account metrics include disabled service accounts. Service account
key metrics do not include disabled service account keys, but they might
include expired or deleted service account keys.
The Cloud Monitoring API API's
timeSeries.list
method allows you to access usage metrics programmatically.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
METRIC_TYPE : The type of metric you want to check. Use one of the
following values:
For service account usage metrics, use
iam.googleapis.com%2Fservice_account%2Fauthn_events_count .
For service account key usage metrics, use
iam.googleapis.com%2Fservice_account%2Fkey%2Fauthn_events_count .
END_TIME : The end of the time interval
that you want to check, in percent-encoded
RFC 3339 format. For example,
2020-06-12T00%3A00%3A00.00Z .
START_TIME : The start of the time interval
that you want to check, in percent-encoded
RFC 3339 format. For example,
2020-04-12T00%3A00%3A00.00Z .
Note: If you are sending the request using the API Explorer, do not use percent-encoded
values.
HTTP method and URL:
GET https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22 METRIC_TYPE %22&interval.endTime= END_TIME &interval.startTime= START_TIME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22 METRIC_TYPE %22&interval.endTime= END_TIME &interval.startTime= START_TIME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22 METRIC_TYPE %22&interval.endTime= END_TIME &interval.startTime= START_TIME " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
For more information about programmatically reading usage metrics, see
Reading metric data in the
Monitoring documentation.
Note: Service account metrics include disabled service accounts. Service account
key metrics do not include disabled service account keys, but they might
include expired or deleted service account keys.
View usage metrics for a single service account
To view usage metrics for a single service account, follow these steps:
Console REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select the project that contains your service account.
Click the email address of your service account.
Click the Metrics tab. The Authentication traffic chart shows
the usage metrics for the service account.
Optional: To view the chart on the Metrics explorer page, which offers
additional filtering and viewing options, click
more_vert >
View in Metrics Explorer .
The Cloud Monitoring API's
timeSeries.list
method , when used with specific filters, allows you to get usage metrics for
a single service account. You can then use those metrics to determine when the account was last
used.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SERVICE_ACCOUNT_ID : The unique numeric ID of your service account. To
find your service account's unique numeric ID, follow these steps:
In the Google Cloud console, go to the Service Accounts page.
Go to the
Service Accounts page
Click the email address of your service account. Your service account's unique numeric ID
is the value in the Unique ID field.
END_TIME : The end of the time interval
that you want to check, in percent-encoded
RFC 3339 format. For example,
2020-06-12T00%3A00%3A00.00Z .
START_TIME : The start of the time interval
that you want to check, in percent-encoded
RFC 3339 format. For example,
2020-04-12T00%3A00%3A00.00Z .
Note: If you are sending the request using the API Explorer, do not use percent-encoded
values.
HTTP method and URL:
GET https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22iam.googleapis.com%2Fservice_account%2Fauthn_events_count%22%20AND%20resource.labels.unique_id%3D%22 SERVICE_ACCOUNT_ID %22&interval.endTime= END_TIME &interval.startTime= START_TIME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22iam.googleapis.com%2Fservice_account%2Fauthn_events_count%22%20AND%20resource.labels.unique_id%3D%22 SERVICE_ACCOUNT_ID %22&interval.endTime= END_TIME &interval.startTime= START_TIME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22iam.googleapis.com%2Fservice_account%2Fauthn_events_count%22%20AND%20resource.labels.unique_id%3D%22 SERVICE_ACCOUNT_ID %22&interval.endTime= END_TIME &interval.startTime= START_TIME " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
The response contains a timeSeries
object with all of the recent authentication events for the specified service account.
View usage metrics for a single service account key
To view usage metrics for a single service account key, follow these steps:
Console REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select the project that contains the service account associated with
your key.
Click the email address of the service account associated with your key.
Click the Metrics tab. The Authentication traffic per key chart
shows usage metrics for all keys associated with the service account.
In the chart legend, click the ID of the service account key that you want to
view usage metrics for. The chart updates to show metrics for only that
service account key.
Optional: To view the chart on the Metrics explorer page, which offers
additional filtering and viewing options, click
more_vert >
View in Metrics Explorer .
First, get the service account key's ID.
List the service account keys:
The
projects.serviceAccounts.keys.list
method lists all of the service account keys for a service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NAME : The name of the service account whose keys you want to list.
KEY_TYPES : Optional. A comma-separated list of key types that you want
to include in the response. The key type indicates whether a key is user-managed
( USER_MANAGED ) or system-managed ( SYSTEM_MANAGED ). If left blank, all
keys are returned.
HTTP method and URL:
GET https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys?keyTypes= KEY_TYPES
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys?keyTypes= KEY_TYPES "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys?keyTypes= KEY_TYPES " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"keys": [
{
"name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/90c48f61c65cd56224a12ab18e6ee9ca9c3aee7c",
"validAfterTime": "2020-03-04T17:39:47Z",
"validBeforeTime": "9999-12-31T23:59:59Z",
"keyAlgorithm": "KEY_ALG_RSA_2048",
"keyOrigin": "GOOGLE_PROVIDED",
"keyType": "USER_MANAGED"
},
{
"name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/e5e3800831ac1adc8a5849da7d827b4724b1fce8",
"validAfterTime": "2020-03-31T23:50:09Z",
"validBeforeTime": "9999-12-31T23:59:59Z",
"keyAlgorithm": "KEY_ALG_RSA_2048",
"keyOrigin": "GOOGLE_PROVIDED",
"keyType": "USER_MANAGED"
},
{
"name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/b97699f042b8eee6a846f4f96259fbcd13e2682e",
"validAfterTime": "2020-05-17T18:58:13Z",
"validBeforeTime": "9999-12-31T23:59:59Z",
"keyAlgorithm": "KEY_ALG_RSA_2048",
"keyOrigin": "GOOGLE_PROVIDED",
"keyType": "USER_MANAGED",
"disabled": true
"disable_reason": "SERVICE_ACCOUNT_KEY_DISABLE_REASON_EXPOSED"
"extended_status": "SERVICE_ACCOUNT_KEY_EXTENDED_STATUS_KEY_EXPOSED"
"extended_status_message": "exposed at: https://www.github.com/SomePublicRepo"
}
]
}
Use the metadata in the response to identify the key you want to track.
Then, copy the key's unique ID from the end of the name field.
The name field has the following format:
"name" : "projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_EMAIL /keys/ KEY_ID "
The key's unique ID is everything after keys/ .
For example, the unique ID in the following key name is
0f561cc41650ff521899de2fd653bd3de08e2da4 :
"name" : "projects/my-project/serviceAccounts/my-account@my-project.iam.gserviceaccount.com/keys/0f561cc41650ff521899de2fd653bd3de08e2da4"
Then, use the ID to view usage metrics for the service account key.
The Cloud Monitoring API's
timeSeries.list
method , when used with specific filters, allows you to get usage metrics for
a single service account key. You can then use those metrics to determine when the key was last
used.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
KEY_ID : The unique ID of your service account key.
END_TIME : The end of the time interval
that you want to check, in percent-encoded
RFC 3339 format. For example,
2020-06-12T00%3A00%3A00.00Z .
START_TIME : The start of the time interval
that you want to check, in percent-encoded
RFC 3339 format. For example,
2020-04-12T00%3A00%3A00.00Z .
Note: If you are sending the request using the API Explorer, do not use percent-encoded
values.
HTTP method and URL:
GET https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22iam.googleapis.com%2Fservice_account%2Fkey%2Fauthn_events_count%22%20AND%20metric.labels.key_id%3D%22 KEY_ID %22&interval.endTime= END_TIME &interval.startTime= START_TIME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22iam.googleapis.com%2Fservice_account%2Fkey%2Fauthn_events_count%22%20AND%20metric.labels.key_id%3D%22 KEY_ID %22&interval.endTime= END_TIME &interval.startTime= START_TIME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries?filter=metric.type%3D%22iam.googleapis.com%2Fservice_account%2Fkey%2Fauthn_events_count%22%20AND%20metric.labels.key_id%3D%22 KEY_ID %22&interval.endTime= END_TIME &interval.startTime= START_TIME " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
The response contains a timeSeries
object with all of the recent authentication events for the specified service account key.
Export metrics
You can use Monitoring to export your metrics
to BigQuery. Exporting metrics is useful for performing
long-term analysis because Monitoring only retains metrics for a
limited time.
For instructions, see Monitoring metric export
in the Solutions documentation.
What's next
Discover how to export metric data to BigQuery.
Use Activity Analyzer to view only the most recent authentication
events for your service accounts and keys.
Use service account insights to identify service accounts that
have not been used in the past 90 days.
Learn how to disable service accounts or
delete service accounts .
Learn how to delete service account keys .
Explore the features offered by Monitoring .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
