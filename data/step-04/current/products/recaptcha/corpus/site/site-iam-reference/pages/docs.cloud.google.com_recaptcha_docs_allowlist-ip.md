---
title: "Configure an IP address allowlist \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/allowlist-ip
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/allowlist-ip
  title: "Configure an IP address allowlist \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Configure an IP address allowlist
Stay organized with collections
Save and categorize content based on your preferences.
To exclude trusted IP addresses from reCAPTCHA
enforcement, you create an allowlist for a reCAPTCHA
key that is associated with your site, and add the IP addresses and the subnets
to that allowlist.
You can also remove an IP address and a subnet from the allowlist, and list
the IP addresses and subnets that are added to the allowlist.
Before you begin
Gather all IP addresses and subnets that you want to add to the allowlist.
Identify the IP addresses and subnets that you want to remove from the allowlist.
Ensure that you have the following Identity and Access Management role: reCAPTCHA Enterprise Admin
( roles/recaptchaenterprise.admin ).
Add an IP address or subnet to the allowlist
When you add an IP address or a subnet to the allowlist,
reCAPTCHA skips the verification and always gives a score of 0.9
to the requests coming from that IP address or subnet.
You can add a maximum of 1000 IP addresses and subnets to an allowlist.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Before using any of the command data below,
make the following replacements:
KEY : The reCAPTCHA key associated with your site.
IP_ADDRESS_OR_SUBNET : The IP address or subnet that needs to be added to the allowlist.
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
gcloud recaptcha keys add-ip-override
KEY \
--ip = IP_ADDRESS_OR_SUBNET \
--override = ALLOW
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud recaptcha keys add-ip-override
KEY `
--ip = IP_ADDRESS_OR_SUBNET `
--override = ALLOW
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud recaptcha keys add-ip-override
KEY ^
--ip = IP_ADDRESS_OR_SUBNET ^
--override = ALLOW
REST
Before using any of the request data,
make the following replacements:
KEY : The reCAPTCHA key associated with your site.
IP_ADDRESS_OR_SUBNET : The IP address or subnet that needs to be added to the allowlist.
PROJECT_ID : Your Google Cloud project ID
HTTP method and URL:
POST https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ KEY :addIpOverride
Request JSON body:
{
"ip_override_data": {
"ip": " IP_ADDRESS_OR_SUBNET ",
"override_type": "ALLOW"
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ KEY :addIpOverride"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ KEY :addIpOverride" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
After you add an IP address or a subnet to the allowlist, the changes take
effect within a few minutes.
Remove an IP address or subnet from the allowlist
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Before using any of the command data below,
make the following replacements:
KEY : The reCAPTCHA key associated with your site.
IP_ADDRESS_OR_SUBNET : The IP address or subnet that needs to be added to the allowlist.
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
gcloud recaptcha keys remove-ip-override
KEY \
--ip = IP_ADDRESS_OR_SUBNET \
--override = ALLOW
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud recaptcha keys remove-ip-override
KEY `
--ip = IP_ADDRESS_OR_SUBNET `
--override = ALLOW
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud recaptcha keys remove-ip-override
KEY ^
--ip = IP_ADDRESS_OR_SUBNET ^
--override = ALLOW
REST
Before using any of the request data,
make the following replacements:
KEY : The reCAPTCHA key associated with your site.
IP_ADDRESS_OR_SUBNET : The IP address or subnet that needs to be added to the allowlist.
PROJECT_ID : Your Google Cloud project ID
HTTP method and URL:
POST https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ KEY :removeIpOverride
Request JSON body:
{
"ip_override_data": {
"ip": " IP_ADDRESS_OR_SUBNET ",
"override_type": "ALLOW"
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ KEY :removeIpOverride"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ KEY :removeIpOverride" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
After you remove an IP address or a subnet from the allowlist, the changes
take effect within a few minutes.
List all IP addresses from the allowlist
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Before using any of the command data below,
make the following replacements:
KEY : The reCAPTCHA key associated with your site.
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
gcloud recaptcha keys list-ip-overrides KEY --format = json
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud recaptcha keys list-ip-overrides KEY --format = json
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud recaptcha keys list-ip-overrides KEY --format = json
REST
Before using any of the request data,
make the following replacements:
KEY : The reCAPTCHA key associated with your site.
PROJECT_ID : Your Google Cloud project ID
HTTP method and URL:
GET https://recaptchaenterprise.googleapis.com/v1/projects/ /keys/ :listIpOverrides
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://recaptchaenterprise.googleapis.com/v1/projects/ /keys/ :listIpOverrides"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ /keys/ :listIpOverrides" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"ipOverrides": [
{
"ip": "1.2.3.4",
"overrideType": "ALLOW"
}
],
"nextPageToken": ""
}
What's next
Create assessments for websites
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
