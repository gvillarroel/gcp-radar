---
title: "Manage dry run configurations \_|\_ VPC Service Controls \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations
  title: "Manage dry run configurations \_|\_ VPC Service Controls \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Manage dry run configurations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how you can manage the dry run configuration for your
service perimeters. For information about managing service
perimeters generally, see Managing service perimeters .
Before you begin
Read Overview of VPC Service Controls
Read Dry run mode
Set your default access policy for using the gcloud command-line tool.
-or-
Get the name of your policy. The policy name is required
for commands using the gcloud command-line tool and making API calls. If you set a default
access policy, you do not need to specify the policy for the gcloud command-line tool.
Enforcing a dry run configuration
When you're satisfied with the dry run configuration for a service perimeter,
you can enforce that configuration. When a dry run configuration is enforced,
it replaces the current enforced configuration for a perimeter, if one exists.
If an enforced version of the perimeter doesn't exist, the dry run configuration
is used as the initial enforced configuration for the perimeter.
Note: You can only enforce a dry run configuration that has been modified. If
the dry run configuration has not been changed, you cannot enforce it. In the
Google Cloud console, if the dry run configuration has not been modified, the
Enforce button will not be visible on the VPC Service Perimeter Detail
page.
After you update a service perimeter, it may take up to 30 minutes for the
changes to propagate and take effect. During this time, the perimeter might block
requests with the following error message: Error 403: Request is prohibited by organization's policy.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, click Dry run mode .
In the list of service perimeters, click the name of the service
perimeter that you want to enforce.
On the Service perimeter details page, click Enforce config .
When you are asked to confirm that you want to overwrite your existing
enforced configuration, click Confirm .
gcloud
You can use the gcloud command-line tool to enforce the dry configuration for an individual
perimeter, as well as for all of your perimeters simultaneously.
Enforce one dry run configuration
To enforce the dry run configuration for a single perimeter, use the
dry-run enforce command:
gcloud access-context-manager perimeters dry-run enforce PERIMETER_NAME \
[ --policy = POLICY_NAME ]
Where:
PERIMETER_NAME is the name of the service perimeter that you
want to obtain details about.
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
Enforce all dry run configurations
To enforce the dry run configuration for all of your perimeters, use the
dry-run enforce-all command:
gcloud access-context-manager perimeters dry-run enforce-all \
[ --etag = ETAG ]
[ --policy = POLICY_NAME ]
Where:
PERIMETER_NAME is the name of the service perimeter that you
want to obtain details about.
ETAG is a string that represents the target
version of your organization's access policy. If you do not include an
etag, the enforce-all operation targets the latest version of the your
organization's access policy.
To obtain the latest etag of your access policy,
list your access policies .
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
API
To enforce the dry run configuration for all of
your perimeters, call accessPolicies.servicePerimeters.commit .
Updating a dry run configuration
When you update a dry run configuration, you can modify the list of services,
projects, and VPC accessible services, among other features of the perimeter.
After you update a service perimeter, it may take up to 30 minutes for the
changes to propagate and take effect. During this time, the perimeter might block
requests with the following error message: Error 403: Request is prohibited by organization's policy.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, click Dry run mode .
In the list of service perimeters, click the name of the service
perimeter that you want to edit.
On the Service perimeter details page, click Edit .
On the Edit service perimeter page, make changes to the dry
run configuration of the service perimeter.
Click Save .
gcloud
To add new projects to a perimeter, use the dry-run update command and
specify the resources to add:
gcloud access-context-manager perimeters dry-run update PERIMETER_NAME \
--add-resources = RESOURCES \
[ --policy = POLICY_NAME ]
Where:
PERIMETER_NAME is the name of the service perimeter that you
want to obtain details about.
RESOURCES is a comma-separated list of one or more project
numbers or VPC network names. For example: projects/12345 or
//compute.googleapis.com/projects/my-project/global/networks/vpc1 .
Only projects and VPC networks are allowed. Project format: projects/<project_number> .
VPC format: //compute.googleapis.com/projects/<project-id>/global/networks/<network_name> .
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
To update the list of restricted services, use the dry-run update command
and specify the services to add as a comma-delimited list:
gcloud access-context-manager perimeters dry-run update PERIMETER_ID \
--add-restricted-services = SERVICES \
[ --policy = POLICY_NAME ]
Where:
PERIMETER_NAME is the name of the service perimeter that you
want to obtain details about.
SERVICES is a comma-delimited list of one or more services.
For example: storage.googleapis.com or
storage.googleapis.com,bigquery.googleapis.com .
POLICY_NAME is the name of your organization's access policy.
This value is required only if you haven't set a
default access policy .
Identifying blocked requests
After you have created a dry run configuration, you can review logs to identify where the dry run configuration would deny access to services if enforced.
Console
In the Google Cloud console navigation menu, click Logging , and then
click Logs Explorer .
Go to Logs Explorer
In the Query field, input a query filter like the following filter,
and then click Run query .
log_id("cloudaudit.googleapis.com/policy") AND severity="error" AND protoPayload.metadata.dryRun="true"
View the logs under Query results .
gcloud
To view logs using gcloud CLI, run a command like the following:
gcloud logging read 'log_id("cloudaudit.googleapis.com/policy") AND severity="error" AND protoPayload.metadata.dryRun="true"'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
