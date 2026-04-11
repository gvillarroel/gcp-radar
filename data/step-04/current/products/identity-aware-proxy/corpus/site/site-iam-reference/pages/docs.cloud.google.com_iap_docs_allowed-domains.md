---
title: "Restrict resource access to specific domains \_|\_ Identity-Aware Proxy \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/allowed-domains
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/managing-access
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/allowed-domains
  title: "Restrict resource access to specific domains \_|\_ Identity-Aware Proxy\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Restrict resource access to specific domains
Stay organized with collections
Save and categorize content based on your preferences.
To improve overall security, IAP by default denies access to
requests that do not have a matching Server Name Indication (SNI).
IAP also checks the SNI of the load balancer certificate. This allows
IAP to restrict URL redirect to malicious domains. The
IAP allowed domains feature provides an additional security
layer for your IAP-protected resources. As a resource owner
or IAP administrator, you can restrict access to
IAP-protected resources to specific domains by configuring
the allowed domains feature.
You can also configure IAP allowed domains in the following scenarios:
Your browser or an intermediate proxy is forcing connection pooling: In this scenario, you receive HTTP response 429 and error code 51 . To resolve the issue, an IAP admin can update the list of allowed domains to include your host name.
The host name provided does not match the SSL certificate on the server: In this scenario, you receive error code 52 . To resolve the issue, an IAP admin can update the list of allowed domains to include your host name.
Configure allowed domains
You can use gcloud or the API to configure allowed domains settings. To configure allowed domains, use the following fields:
enable : Boolean. Turns the allowed domains feature on or off.
Domains : String. The list of allowed domains. The domains can contain wildcard prefixes, such as *.example.com. Domain names cannot contain a wildcard directly on a public suffix or on a top level domain. Example: *.com , *.co.in .
For more information, see IapSettings .
To configure IAP allowed domains, complete the following steps:
Console
Go to the IAP page.
Go to Identity-Aware Proxy .
Select a project, and then select the resource on which you want to enable the allowed domains feature.
Open Settings for the resource. Under Allowed domains , select Enable Allowed Domains .
Specify the list of allowed domains, and then click Save .
gcloud
Following are some example commands for specifying allowed domains.
For more information, see gcloud iap settings set .
Run the following command:
gcloud iap settings set SETTING_FILE --folder= FOLDER --organization= ORGANIZATION --project= PROJECT --resource-type= RESOURCE_TYPE --service= SERVICE --version= VERSION
Where SETTING_FILE is:
accessSettings :
allowed_domains_settings :
enable : true
domains : [ "*.example.com" , "*.example.net" ]
Replace the following:
FOLDER : The folder ID.
ORGANIZATION : The organization ID.
PROJECT : The project ID.
RESOURCE_TYPE : The IAP resource type. Must be
app-engine , iap_web , compute , organization , folder ,
backend-services , forwarding-rule , or cloud-run .
SERVICE : The service name. This is optional when resource-type is compute or app-engine .
VERSION : The version name. This is not applicable for compute , and is optional when resource-type is app-engine .
You must specify at least one of the following flags to define the scope for
the settings:
--organization=ORGANIZATION
--folder=FOLDER
--project=PROJECT
API
To configure allowed domains, complete the following steps. For more information about using the API to configure allowed domains, see IapSettings .
Run the following command to prepare an iap_settings.json file. Update the values as needed.
{
"access_settings":{
"allowed_domains_settings":{
"enable": true
"domains": [
"*.example.com",
"*.exampe.net"
]
}
}
}
Get the resource name by running the gcloud iap settings get command. Copy the name field from the output. You will need the name in the following step.
gcloud iap settings get --organization=ORGANIZATION --folder=FOLDER --project=PROJECT --resource-type=RESOURCE_TYPE --service=SERVICE --version=VERSION
Replace RESOURCE_NAME in the following command with the name from the previous step. The IapSettings will be updated.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d @iap_settings.json \
"https://iap.googleapis.com/v1/RESOURCE_NAME:iapSettings?updateMask=iapSettings.accessSettings.allowedDomainsSettings.enable,iapSettings.accessSettings.allowedDomainsSettings.domains"
Troubleshooting
Allowed domains access issue
If you receive Error code 53 , ask an IAP administrator to add your host name to the list of allowed domains.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
