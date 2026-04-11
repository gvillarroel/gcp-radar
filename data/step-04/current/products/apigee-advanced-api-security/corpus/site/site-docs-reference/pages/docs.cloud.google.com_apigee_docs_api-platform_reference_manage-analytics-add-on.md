---
title: "Manage the Apigee API Analytics add-on \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-analytics-add-on
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-analytics-add-on
  title: "Manage the Apigee API Analytics add-on \_|\_ Google Cloud Documentation"
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
Manage the Apigee API Analytics add-on
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee , but not to Apigee hybrid .
View
Apigee Edge documentation.
Apigee API Analytics collects and calculates a wealth of information that flows through API proxies.
You can visualize this data with graphs and charts in the Apigee UI, or you can download the raw data
for offline analysis using the Apigee APIs. For more information on the types of data you can collect and analyze
with Apigee API Analytics, see Apigee Analytics overview .
If you are an Apigee Pay-as-you-go customer, Apigee API Analytics is available as
a paid
add-on . This topic describes how to enable and manage the Apigee API Analytics
add-on for eligible Pay-as-you-go environments. For more information on using the Apigee API Analytics
dashboards after the add-on is enabled in your Apigee environments, see
Using the analytics dashboards .
Availability
Apigee API Analytics is available as a paid add-on capability that is managed for each
Apigee environment in your Apigee implementation. The add-on can be
enabled in any Apigee Intermediate or Comprehensive environment. You cannot enable and use
Apigee API Analytics in Base environments. For more details on Apigee environment capabilities,
see Comparison of environment types .
Required roles and permissions
To get the permissions that
you need to manage the Apigee API Analytics add-on,
ask your administrator to grant you the
Apigee Environment Admin ( apigee.environment.admin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage the Apigee API Analytics add-on. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage the Apigee API Analytics add-on:
apigee.addonsconfig.get
apigee.addonsconfig.update
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Enable the Apigee API Analytics add-on
You can enable the Apigee API Analytics add-on for an Intermediate or Comprehensive
Apigee environment using the Apigee UI in the Google Cloud console or using the API,
as described in the following sections.
Note : The Apigee API Analytics add-on cannot be enabled in a Base environment.
Apigee in Google Cloud console
To enable the Apigee API Analytics add-on in the Google Cloud console:
Open the Apigee page in the console.
Go to Apigee
Select the project with the Pay-as-you-go organization and environments you wish to manage.
Select Add-ons > Analytics to open the Analytics add-on page.
In the Manage Apigee API Analytics add-on pane, select the checkbox for
the environment (or environments) where you want to enable the add-on.
Click Enable selected .
When enablement is complete for the selected environments, the environment Status will display check_circle Enabled .
To view your Apigee API Analytics data, select Analytics > API Metrics to view your analytics data.
It may take up to 10 minutes to display the analytics data.
Apigee API
To enable the Apigee API Analytics add-on using the Apigee API, enter the
following command:
curl -X POST \
https://apigee.googleapis.com/v1/organizations/ ORG_NAME /environments/ ENV_NAME /addonsConfig:setAddonEnablement \
-H "Authorization: Bearer $token" \
-H "Content-type: application/json" \
-d '{"analyticsEnabled":true}'
Where:
ORG_NAME is the name of the Apigee Pay-as-you-go organization where you want to add Analytics to eligible environments.
ENV_NAME is the name of the Apigee environment where you wish to enable the Apigee API Analytics add-on.
Once enablement completes, select Analytics > API Metrics to view your Apigee API Analytics data.
It may take up to 10 minutes for the analytics data to display in the UI, or be available via an API call.
The Apigee API Analytics add-on enablement process can take up to 15 minutes. Once enabled,
analytics data for the environment is retained for 14 months. You can access the environment's historic data from the
API Metrics page in the console as long as the add-on is enabled.
Billing for use of the Apigee API Analytics add-on begins once add-on enablement begins.
Disable the Apigee API Analytics add-on
You can disable the Apigee API Analytics add-on for an Intermediate or Comprehensive Apigee
environment using the Apigee UI in the Google Cloud console or using the API, as described in the following sections.
If you have the Advanced API Security add-on enabled in the environment, you must disable the
Advanced API Security add-on before you can disable the Apigee API Analytics add-on. If the Advanced API Security
add-on is not disabled, any request to disable Apigee API Analytics in the environment will fail.
If the Advanced API Security add-on is enabled in your environment, it will display in the
Other enabled add-ons column of the Manage Apigee API Analytics add-on pane.
To disable the add-on, see
Disable the Advanced API Security add-on .
Note : If you disable the Apigee API Analytics add-on in an environment,
the analytics data will be deleted within 30 days. For more information, see
Manage your Apigee API Analytics data . In addition, any functionality enabled by using the
DataCapture policy in your environments will
no longer work once the add-on is disabled.
Apigee in Cloud console
To disable the Apigee API Analytics add-on in the Google Cloud console:
Open the Apigee page in the console.
Go to Apigee
Select the project with the Pay-as-you-go organization and environments you wish to manage.
Select Add-ons > Analytics to open the Analytics add-on page.
In the Manage Apigee API Analytics add-on pane, select the checkbox for
the environment (or environments) where you want to disable the add-on.
Click Disable selected .
When disablement completes, the Status will display
do_not_disturb_on Disabled for each environment.
Apigee API
To disable the Apigee API Analytics add-on using the Apigee API, enter the
following command:
curl -X POST \
https://apigee.googleapis.com/v1/organizations/ ORG_NAME /environments/ ENV_NAME /addonsConfig:setAddonEnablement \
-H "Authorization: Bearer $token" \
-H "Content-type: application/json" \
-d '{"analyticsEnabled":false}'
Where:
ORG_NAME is the name of the Apigee Pay-as-you-go organization where you want to add Analytics to eligible environments.
ENV_NAME is the name of the Apigee environment where you wish to enable the Apigee API Analytics add-on.
View Apigee API Analytics add-on status in an environment
You can check the status of the Apigee API Analytics add-on for an Intermediate or Comprehensive Apigee
environment using the Apigee UI in the Google Cloud console or using the API, as described in the following sections.
Apigee in Google Cloud console
To view the status of the Apigee API Analytics add-on in an environment using the Google Cloud console:
Open the Apigee page in the console.
Go to Apigee
Select the project with the Pay-as-you-go organization and environments you wish to manage.
Select Add-ons > Analytics to open the Analytics add-on page.
In the Manage Apigee API Analytics add-on pane, a list of environments displays.
In the status column, you can see whether the add-on is Enabled or Disabled in
each Intermediate or Comprehensive environment. Base environments do not display either status.
Apigee API
To view the status of the Apigee API Analytics add-on in an environment using the Apigee API, enter the
following command:
curl -X GET \
https://apigee.googleapis.com/v1/organizations/ ORG_NAME /environments/ ENV_NAME /addonsConfig \
-H "Authorization: Bearer $token" \
-H "Content-type: application/json"
Where:
ORG_NAME is the name of the Apigee Pay-as-you-go organization.
ENV_NAME is the name of the Apigee environment.
The response returns an analyticsConfig object representing the current status of the add-on.
Manage your Apigee API Analytics data
Once the Apigee API Analytics add-on is enabled for an environment, analytics data for the
environment is retained for 14 months. You can access the environment's historic analytics data from the API Metrics
page in the console as long as the add-on is enabled.
If you disable the Apigee API Analytics add-on in an environment,
the analytics data for the environment is deleted after 30 days. If you re-enable the add-on in the same
environment within 30 days of disablement, you can regain access to analytics data for the environment
through the retention period of 14 months. No data is restored if the add-on is re-enabled for the environment after 30 days.
If you want to retain analytics data for any environment beyond the 14-month retention period, we recommend that
exporting and saving your data in another location. You may also want to export your Analytics data before disabling the
Apigee API Analytics add-on, or within the 30-day window after disablement. For more information, see
Exporting data from Analytics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
