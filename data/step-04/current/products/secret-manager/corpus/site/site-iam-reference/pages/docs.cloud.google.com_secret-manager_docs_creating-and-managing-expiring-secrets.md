---
title: "Set an expiration date for a secret \_|\_ Secret Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets
  title: "Set an expiration date for a secret \_|\_ Secret Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Set an expiration date for a secret
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set an expiration date for a new or existing secret, change the expiration
date of an existing secret, and remove any previously set expiration date from a secret.
Overview
By default, secrets stored in Secret Manager exist until a user deletes
them. If a secret must only be stored for a known, limited amount of time, you
can attach an expiration time to it. At a secret's configured expiration time,
it is automatically deleted.
If you don't have requirements that the secret must be deleted, consider using
IAM Conditions or the Disabled version state to revoke access in a safe way.
Warning: At expiration time, the secret and all of its secret versions are
irreversibly deleted without warning. See
Safely using expiring secrets
for more information.
You can enter an expiration time as either a timestamp or a
duration. When secret metadata is retrieved, the expiration is always
returned as a timestamp, regardless of how it was given.
An expiration can be added, updated, or removed from a secret at any time.
Limitations
A secret's expiration cannot be less than 60 seconds away or more than 100
years away.
Safely use expiring secrets
When a secret expires in Secret Manager, it is irreversibly
deleted . The best way to detect soon-to-expire secrets is by using IAM Conditions to remove permissions from the accounts that use the secret prior to expiration.
To manage access to secrets effectively, set a time-based condition on the permissions granted.
Set an expiration date: Permissions should expire shortly before the secret itself is set to expire. This allows you to identify any workflows or processes that might still be using the secret
unexpectedly.
Monitor for disruptions: If any workflows stop working after permissions are revoked, you can quickly restore access to minimize any impact.
Adjust as needed: If you find you need more time, you can extend the expiration date of the secret or even remove it altogether if it's no longer needed.
This approach helps ensure that access to secrets is tightly controlled and only available for as long as necessary, reducing the risk of unauthorized access or misuse.
For example, imagine a scenario where a service account needs to access a secret every day for
30 days. You can configure the secret to expire 60 days after it's created. This gives a buffer period
after the expected usage. You can also set up a conditional IAM binding to grant the
service account the Secret Accessor role for 45 days. If the service account attempts
to access the secret after 45 days, it's denied permission. Any workflows relying on this secret
stop working. An administrator can quickly restore access by granting the Secret Accessor role
back to the service account. This allows them time to investigate why the secret is still needed after
the expected 30-day period, as the secret itself won't be deleted for another 15 days.
Caution: If an account has project-level permissions, it can access all secrets within that
project, even if you try to set specific expiration dates or restrictions on individual secrets. This
means that using IAM Conditions alone won't help you detect when secrets are expiring. To effectively manage expiring secrets, assign permissions at the secret level rather than the project level. This
ensures that access to each secret is controlled independently and any expiration settings you apply
are enforced.
Additionally, it is possible to create alerts based on logs warning of secrets
that are expiring soon. For information, see the
Expiration logging
section of this document.
Specify timestamps and durations
Timestamp values must be formatted as RFC 3339 , for example
2100-01-01T09:00:00-05:00 .
Duration values must be formatted as the number of seconds including the s
suffix, for example 86400s .
Set a secret's expiration date
You can set an expiration date and time on a secret using the Google Cloud console, the Google Cloud CLI,
or the Secret Manager API.
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click Create secret .
On the Create secret page, enter a name for the secret in the Name field.
Enter a value for the secret (for example, abcd1234 ). You can also upload a text file containing the secret value using
the Upload file option. This action automatically creates the secret version.
Go to Expiration , and then select the Set expiration date checkbox.
Enter the expiration date and time in the Month/Day/Year, Hour:Minute AM/PM format,
for example, 7/31/20, 1:00 AM . You can also use the date and time picker to enter the expiration
date and time.
Click Create secret .
gcloud
Create an expiring secret using a timestamp
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret
TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID \
--replication-policy "automatic" \
--expire-time " TIMESTAMP "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID `
--replication-policy "automatic" `
--expire-time " TIMESTAMP "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID ^
--replication-policy "automatic" ^
--expire-time " TIMESTAMP "
Create an expiring secret using a duration
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret
DURATION : the expiration duration in seconds, for example 86400s
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID \
--replication-policy "automatic" \
--ttl " DURATION "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID `
--replication-policy "automatic" `
--ttl " DURATION "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID ^
--replication-policy "automatic" ^
--ttl " DURATION "
REST
Create an expiring secret using a timestamp
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID
SECRET_ID : the ID of the secret
TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00
HTTP method and URL:
POST https://secretmanager.googleapis.com/v1/projects/$ PROJECT_ID /secrets?secretId=$ SECRET_ID
Request JSON body:
{
"replication": {"automatic": {}},
"expire_time": " TIMESTAMP "
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/$ PROJECT_ID /secrets?secretId=$ SECRET_ID "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/$ PROJECT_ID /secrets?secretId=$ SECRET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID ",
"createTime": "2024-09-04T03:58:38.200877Z",
"expireTime": "2024-09-04T09:25:39Z",
"etag": "\"162143305d282d\""
}
Create an expiring secret using a duration
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID
SECRET_ID : the ID of the secret
DURATION : the expiration duration in seconds, for example 86400s
HTTP method and URL:
POST https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID
Request JSON body:
{
"replication": {"automatic": {}},
"ttl": " DURATION "
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID ",
"createTime": "2024-09-04T03:58:38.200877Z",
"expireTime": "2024-09-04T09:25:39Z",
"etag": "\"162143305d282d\""
}
Update a secret's expiration date
To update the secret's expiration date and time, use one of the following methods:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
To edit a secret, locate the secret in the list, and then click the
more_vert Actions menu associated with that
secret. In the Actions menu, click Edit .
Go to the Expiration section. Update the expiration date and time, and click
Update secret .
gcloud
Update a secret's expiration using a timestamp
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret
TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID \
--expire-time " TIMESTAMP "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID `
--expire-time " TIMESTAMP "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID ^
--expire-time " TIMESTAMP "
Update a secret's expiration using a duration
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret
DURATION : the expiration duration in seconds, for example 86400s
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID \
--ttl " DURATION "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID `
--ttl " DURATION "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID ^
--ttl " DURATION "
REST
Update a secret's expiration using a timestamp
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID
SECRET_ID : the ID of the secret
TOKEN : your own Oauth2.0 access token
TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00
HTTP method and URL:
PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=expire_time
Request JSON body:
{"expire_time": " TIMESTAMP "}
To send your request, choose one of these options:
curl
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=expire_time"
PowerShell
Save the request body in a file named request.json ,
and execute the following command:
$headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=expire_time" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID ",
"createTime": "2024-09-04T03:58:38.200877Z",
"expireTime": "2024-09-04T09:25:39Z",
"etag": "\"162143305d282d\""
}
Update a secret's expiration using a duration
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID
SECRET_ID : the ID of the secret
DURATION : the expiration duration in seconds, for example 86400s
HTTP method and URL:
PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=ttl
Request JSON body:
{"ttl": " DURATION "}
To send your request, choose one of these options:
curl
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=ttl"
PowerShell
Save the request body in a file named request.json ,
and execute the following command:
$headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=ttl" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID ",
"createTime": "2024-09-04T03:58:38.200877Z",
"expireTime": "2024-09-04T09:25:39Z",
"etag": "\"162143305d282d\""
}
Remove a secret's expiration date
To remove the secret's expiration date and time, use one of the following methods:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
To edit a secret, locate the secret in the list, and then click the
more_vert Actions menu associated with that
secret. In the Actions menu, click Edit .
Go to the Expiration section. Clear the Set expiration date checkbox, and
then click Update secret .
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID \
--remove-expiration
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID `
--remove-expiration
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID ^
--remove-expiration
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID
SECRET_ID : the ID of the secret
TOKEN : your own Oauth2.0 access token
HTTP method and URL:
PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=expire_time
Request JSON body:
{}
To send your request, choose one of these options:
curl
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=expire_time"
PowerShell
Save the request body in a file named request.json ,
and execute the following command:
$headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=expire_time" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID ",
"createTime": "2024-09-04T03:58:38.200877Z",
"etag": "\"162143305d282d\""
}
Expiration logging
Cloud Audit Logs are not produced when a secret automatically expires.
Instead Secret Manager writes logs to the Secret Manager Secret resource at specific intervals leading up to a secret's expiration.
Log Timing
Secret Event Type
30 days before expiration
EXPIRES_IN_30_DAYS
7 days before expiration
EXPIRES_IN_7_DAYS
1 day before expiration
EXPIRES_IN_1_DAY
6 hours before expiration
EXPIRES_IN_6_HOURS
1 hour before expiration
EXPIRES_IN_1_HOUR
at expiration
EXPIRED
See the Logging Quickstart guide
for information about how to view these logs. You can create log-based
metrics and use them to create alerts for upcoming expirations.
What's next
Learn how to set up rotation schedules for secrets .
Learn how to enable Customer-Managed Encryption Keys (CMEK) for Secret Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
