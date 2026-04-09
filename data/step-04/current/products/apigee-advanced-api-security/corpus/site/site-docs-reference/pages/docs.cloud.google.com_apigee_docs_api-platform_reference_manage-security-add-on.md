---
title: "Manage the Advanced API Security add-on \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
  title: "Manage the Advanced API Security add-on \_|\_ Apigee \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Resources
Send feedback
Manage the Advanced API Security add-on
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee , but not to Apigee hybrid .
View
Apigee Edge documentation.
Advanced API Security continually monitors your APIs to protect them from security threats,
including attacks from malicious clients and abuse. Advanced API Security analyzes your API traffic to
identify suspicious API requests, and provides tools that can block or flag those requests. In addition, Advanced API Security evaluates your API configurations to
ensure they meet security standards, and gives you recommendations for improving them if
needed.
If you are an Apigee Pay-as-you-go customer, Advanced API Security is available as
a paid
add-on . This topic describes how to enable and manage the Advanced API Security
add-on for eligible Pay-as-you-go environments. For more information on using Advanced API Security
after the add-on is enabled in your Apigee environments, see
Overview of Advanced API Security .
Availability
Advanced API Security is available as a paid add-on capability that is managed for each
Apigee environment in your Apigee implementation. The add-on can be
enabled in any Apigee Intermediate or Comprehensive environment. You cannot enable and use
Advanced API Security in Base environments. For more details on Apigee environment capabilities,
see Comparison of environment types .
Tip: Advanced API Security is also available in Apigee API hub
for multiple gateway types, including Apigee Edge. See
Advanced API Security for multiple
Apigee organizations and gateways for information.
Note : Before enabling the Advanced API Security add-on in an environment,
make sure that the Apigee API Analytics add-on is enabled for the environment. If Apigee API Analytics is not
enabled, any request to enable Advanced API Security in the environment will fail.
If the Apigee API Analytics add-on is enabled in your environment, it will display in the
Other enabled add-ons column of the Manage Advanced API Security add-on pane.
To enable the add-on, see Enable the
Apigee API Analytics add-on .
Required roles and permissions
To get the permissions that
you need to manage the Advanced API Security add-on,
ask your administrator to grant you the
Apigee Environment Admin ( apigee.environment.admin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage the Advanced API Security add-on. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage the Advanced API Security add-on:
apigee.addonsconfig.get
apigee.addonsconfig.update
You might also be able to get
these permissions
with custom roles or
other predefined roles .
After the add-on is enabled, additional roles may be required to perform tasks using Advanced API Security.
For more information, see Required roles .
Enable the Advanced API Security add-on
You can enable the Advanced API Security add-on for an Intermediate or Comprehensive
Apigee environment using the API.
Note : The Advanced API Security add-on cannot be enabled in a Base environment.
To enable the Advanced API Security add-on using the Apigee API, enter the
following command:
curl -X POST \
https://apigee.googleapis.com/v1/organizations/ ORG_NAME /environments/ ENV_NAME /addonsConfig:setAddonEnablement \
-H "Authorization: Bearer $token" \
-H "Content-type: application/json" \
-d '{"apiSecurityEnabled":true}'
Where:
ORG_NAME is the name of the Apigee Pay-as-you-go organization where you want to add Advanced API Security to eligible environments.
ENV_NAME is the name of the Apigee environment where you wish to enable the Advanced API Security add-on.
Once enablement completes, click Advanced API Security to view page options for using your security data,
including Risk assessment , Abuse detection , Security reports , and Security actions .
It may take up to 10 minutes to display the Advanced API Security data in the UI, or be available via an API call.
The Advanced API Security add-on enablement process can take up to 15 minutes. Once enabled,
security data for the environment is retained for 14 months. You can access the environment's historic data from the
Advanced API Security pages in the console as long as the add-on is enabled.
Billing for use of the Advanced API Security add-on begins once add-on enablement begins.
Disable the Advanced API Security add-on
You can disable the Advanced API Security add-on for an Intermediate or Comprehensive Apigee
environment using the API.
Note : If you disable the Advanced API Security add-on in an environment,
the security data is deleted after 30 days. For more information, see
Manage your Advanced API Security data .
To disable the Advanced API Security add-on using the Apigee API, enter the
following command:
curl -X POST \
https://apigee.googleapis.com/v1/organizations/ ORG_NAME /environments/ ENV_NAME /addonsConfig:setAddonEnablement \
-H "Authorization: Bearer $token" \
-H "Content-type: application/json" \
-d '{"apiSecurityEnabled":false}'
Where:
ORG_NAME is the name of the Apigee Pay-as-you-go organization where you want to disable Advanced API Security in eligible environments.
ENV_NAME is the name of the Apigee environment where you wish to disable the Advanced API Security add-on.
View Advanced API Security add-on status in an environment
You can check the status of the Advanced API Security add-on for an Intermediate or Comprehensive Apigee
environment using the API.
To view the status of the Advanced API Security add-on in an environment using the Apigee API, enter the
following command:
curl -X GET \
https://apigee.googleapis.com/v1/organizations/ ORG_NAME /environments/ ENV_NAME /addonsConfig \
-H "Authorization: Bearer $token" \
-H "Content-type: application/json"
Where:
ORG_NAME is the name of the Apigee Pay-as-you-go organization.
ENV_NAME is the name of the Apigee environment.
The response returns an ApiSecurityConfig object representing the current status of the add-on.
Manage your Advanced API Security data
Once the Advanced API Security add-on is enabled for an environment, security data for the
environment is retained for 14 months. You can access the environment's previously generated security reports for the
environment from the Security reports
page in the console, but new reports cannot be created.
If you disable the Advanced API Security add-on in an environment,
the security data for the environment is deleted after 30 days. If you re-enable the add-on in the same
environment within 30 days of disablement, you can regain access to security data for the environment
through the retention period of 14 months. No data is restored if the add-on is re-enabled for the environment after 30 days.
If you want to retain security reports for any environment beyond the 14-month retention period, we recommend
exporting and saving your data in another location. You may also want to export your Advanced API Security
data before disabling the add-on, or within the 30-day window after disablement. You can export your security reports
using the Export button on the Security reports page in the console
or download a report using the Security reports API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
