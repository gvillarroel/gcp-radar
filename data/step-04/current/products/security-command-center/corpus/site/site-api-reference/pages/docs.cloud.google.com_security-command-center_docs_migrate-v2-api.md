---
title: "Migrate to v2 of the Security Command Center API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api
  title: "Migrate to v2 of the Security Command Center API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
Migrate to v2 of the Security Command Center API
Stay organized with collections
Save and categorize content based on your preferences.
This page explains the differences between version 1 (v1) and version 2 (v2) of
the Security Command Center API . It also explains how to
migrate to the v2 Security Command Center API, in combination with the v1
Security Command Center Management API .
As of December 9, 2024, if you activate Security Command Center within an organization for
the first time, then you must use only version 2 of the Security Command Center API in that
organization. Earlier versions are not supported.
If you activated Security Command Center at the project level before December 9, 2024, then
any projects you activate in the same organization will support all available
versions of the Security Command Center API.
For all integrations with Security Command Center, we recommend that you adopt the v2
Security Command Center API and the v1 Security Command Center Management API. We recommend using
the Cloud Client Libraries or the Google Cloud Terraform provider to call these
APIs. For more information, see the following:
Terraform
Security Command Center API resources
Security Command Center Management API resources
Client libraries
Security Command Center API client libraries
Security Command Center Management API client libraries
Differences between the v1 and v2 APIs
As you migrate to the v2 Security Command Center API, be aware of the following
differences from the v1 API.
Data residency
The v2 Security Command Center API supports
data residency , which gives you more
control over where your Security Command Center data is located.
If data residency is enabled for your organization, then you must do the
following to access resources that are
subject to data residency controls :
Use a regional service endpoint to
access the resource.
Specify a location when you call the resource's methods.
If data residency is not enabled for your organization, we recommend that you
call the location-aware version of each method and specify the global
location. Doing so makes it easier to adopt data residency in the future.
To use the location-aware version of each method, do the following:
Console
The Google Cloud console uses the location-aware version of each method
whenever necessary.
gcloud
When you run gcloud CLI commands that let you specify a location,
like gcloud scc findings list ,
always provide a location. There are a few ways to do this:
Use the --location flag.
If you provide the full path of the resource name, use a format that
specifies a location, like
projects/123/sources/456/locations/global/findings/a1b2c3 .
Terraform
Always provide the location argument for resources that support it, like
google_scc_v2_organization_mute_config .
REST
Call the version of the method with locations in its name. For example,
call
organizations.locations.findings.bulkMute
rather than
organizations.findings.bulkMute .
Client libraries
See the code samples for Security Command Center or
the API reference for
your client library.
To learn how to use regional endpoints when data residency is enabled, see
Security Command Center regional endpoints .
Notification configurations and BigQuery export configurations
The v1 Security Command Center API lets you create and manage the following types of
export configurations:
Notification configurations , which
send findings to Pub/Sub
BigQuery export configurations ,
which stream findings to BigQuery
You can also create and manage these export configurations with the v2
Security Command Center API. However, if you create an export configuration with the v1
Security Command Center API, then it's not visible in the v2 Security Command Center API.
Similarly, if you create an export configuration with the v2 Security Command Center API,
then it's not visible in the v1 Security Command Center API.
In addition, export configurations that you create with the v2
Security Command Center API cannot use the source_properties field to
filter findings . You must
use another field instead.
Console
In the Google Cloud console, if an export configuration was created with
the v1 Security Command Center API, then it has a Legacy label. You can use the
Google Cloud console to manage these resources.
If you create a new export configuration in the Google Cloud console, then
it's always created with the v2 Security Command Center API.
gcloud
To manage export configurations that were created with the v1
Security Command Center API, don't specify a location when you run
gcloud CLI commands such as
gcloud scc notifications describe :
Don't use the --location flag.
If you provide the full path for the configuration ID, use a format that
doesn't specify a location, like
organizations/123/notificationConfigs/456 . Don't use a format like
organizations/123/ locations/global/ notificationConfigs/456 .
Similarly, to create or manage export configurations with the v2
Security Command Center API, specify a location when you run the
gcloud CLI command. When you create new configurations, we
recommend that you use the v2 Security Command Center API.
Terraform
Your Terraform configuration file defines export configurations as either v1
or v2 resources. For example, see the resources for notification
configurations:
v1
google_scc_notification_config
google_scc_folder_notification_config
google_scc_project_notification_config
v2
google_scc_v2_organization_notification_config
google_scc_v2_folder_notification_config
google_scc_v2_project_notification_config
When you create new configurations, we recommend that you create v2
resources.
REST
To manage export configurations that were created with the v1
Security Command Center API, you must use the v1 Security Command Center API.
When you create new configurations, we recommend that you use the v2
Security Command Center API.
Client libraries
To manage export configurations that were created with the v1
Security Command Center API, you must use the Cloud Client Libraries for the v1
Security Command Center API.
When you create new configurations, we recommend that you use the v2
Security Command Center API.
Built-in services and custom modules
The v1 Security Command Center API lets you view and update these resource types:
Security Command Center
built-in services
and their enablement states
Custom modules for the following built-in services:
Event Threat Detection
Security Health Analytics
To manage these resource types, use the
Security Command Center Management API
and its
client libraries .
The v2 Security Command Center API can't manage these resource types.
Asset management
If your organization activated Security Command Center before June 20, 2023, then you
might use the v1 Security Command Center API to
view assets in
an organization, folder, or project. These Security Command Center asset management
features are deprecated and are not available in the v2 Security Command Center API.
These features will be removed from the v1 Security Command Center API on or after June
20, 2024.
Instead, you can use Cloud Asset Inventory to view your assets, including their security
marks. For details, see List assets .
You can also use the v2 Security Command Center API to
update security marks
for your assets. The Security Command Center API methods that update security marks are
not deprecated.
Update client libraries and Terraform provider
To update your code to use the v2 Security Command Center API, do the following:
Terraform
Install the current version of the Terraform provider for Google Cloud.
For details, see the
provider documentation .
In addition, update your Terraform configuration file to create resources that
start with the prefix google_scc_v2_ or google_scc_management_ . Keep in mind
that the following resources are
not shared across the v1 and v2 APIs :
google_scc_folder_notification_config
google_scc_folder_scc_big_query_export
google_scc_notification_config
google_scc_organization_scc_big_query_export
google_scc_project_notification_config
google_scc_project_scc_big_query_export
If you apply a Terraform execution plan that replaces these resources with their
v2 equivalents, then Terraform will delete the v1 configurations and create new
v2 configurations.
C++
Update your application to include the client library's v2 header file:
#include "google/cloud/securitycenter/v2/security_center_client.h"
In addition, update your application to use classes in the v2 namespace:
namespace securitycenter = :: google :: cloud :: securitycenter_v2 ;
C#
Install the v2 client library, then update your application to use that library:
Install-Package Google.Cloud.SecurityCenter.V2
Go
Install the v2 client library, then update your application to use that library:
go get cloud.google.com/go/securitycenter/apiv2
Java
Install the current version of the client library. For details, see
Install the client library .
In addition, update your application to use the classes, interfaces, and enums
in the
com.google.cloud.securitycenter.v2 package .
Node.js
Install the current version of the client library. For details, see
Install the client library .
In addition, update your application to use
v2.SecurityCenterClient
and the classes, interfaces, and enums in the
protos.google.cloud.securitycenter.v2 namespace.
PHP
Install the current version of the client library. For details, see
Install the client library .
In addition, update your application to use the classes and enums in the
Google \ Cloud \ SecurityCenter \ V2 namespace .
Python
Install the current version of the client library. For details, see
Install the client library .
In addition, update your application to use the classes in the
google.cloud.securitycenter_v2 package .
Ruby
Install the current version of the client library. For details, see
Install the client library .
In addition, update your application to set the version parameter to :v2
when it creates a client object .
If you need to programmatically manage Security Command Center
built-in services
and their enablement states, or custom modules for Event Threat Detection or
Security Health Analytics, then you must also install a
client library for the Security Command Center Management API
and update your application to use that client library.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
