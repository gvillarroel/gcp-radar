---
title: "Manage discovery scan configurations \_|\_ Sensitive Data Protection \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations
  title: "Manage discovery scan configurations \_|\_ Sensitive Data Protection \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Manage discovery scan configurations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create, view, pause, resume, edit, and delete an
existing discovery scan
configuration .
A discovery scan configuration (sometimes called discovery configuration or
scan configuration ) specifies how Sensitive Data Protection should profile
your data. For more information, see Discovery scan
configuration .
Create a scan configuration
For information about how to create an organization-level or project-level
discovery scan configuration, see the following pages:
Discovery type
Create an organization-level scan configuration
Create a project-level scan configuration 1
Discovery for BigQuery data
Profile BigQuery data in an organization or folder
Profile BigQuery data in a single project
Discovery for Cloud SQL data
Profile Cloud SQL data in an organization or folder
Profile Cloud SQL data in a single project
Discovery for Cloud Storage data
Profile Cloud Storage data in an organization or folder
Profile Cloud Storage data in a single project
Discovery for Vertex AI data
Profile Vertex AI data in an organization or folder
Profile Vertex AI data in a single project
Discovery for Amazon S3 data
Discovery for Amazon S3 data
Not applicable
Discovery for Azure Blob Storage data
Discovery for Azure Blob Storage data
Not applicable
Secrets discovery (no profiles generated)
Configure secrets discovery at the organization level
Configure secrets discovery at the project level
1 Not suitable for customers who have an organization-level discovery
subscription, such as one provided through Security Command Center
View a scan configuration
Go to the discovery scan configurations list.
Go to discovery scan configurations
Make sure you're viewing the correct organization or project:
To manage a discovery scan configuration that you created at the
organization or folder level, view the organization.
To manage a discovery scan configuration that you created at the project
level, view the project.
To manage a discovery scan configuration for single data resource, view the
project that contains the resource.
To switch to a different view, on the toolbar, click the project selector.
Select the organization or project that you want to view.
To open the Scan configuration details page, click the name of the
resource associated with the scan configuration.
Pause a scan configuration
Go to the discovery scan configurations list.
Go to discovery scan configurations
Make sure you're viewing the correct organization or project:
To manage a discovery scan configuration that you created at the
organization or folder level, view the organization.
To manage a discovery scan configuration that you created at the project
level, view the project.
To manage a discovery scan configuration for single data resource, view the
project that contains the resource.
To switch to a different view, on the toolbar, click the project selector.
Select the organization or project that you want to view.
Click more_vert Actions ,
and then click Pause scan .
As long as a scan configuration is paused, Sensitive Data Protection doesn't
generate any new profiles under that configuration.
Resume a scan configuration
Go to the discovery scan configurations list.
Go to discovery scan configurations
Make sure you're viewing the correct organization or project:
To manage a discovery scan configuration that you created at the
organization or folder level, view the organization.
To manage a discovery scan configuration that you created at the project
level, view the project.
To manage a discovery scan configuration for single data resource, view the
project that contains the resource.
To switch to a different view, on the toolbar, click the project selector.
Select the organization or project that you want to view.
Click more_vert Actions ,
and then click Resume scan .
Edit a scan configuration
If you edit a scan configuration that has already been used to profile
tables, you might end up having different tables scanned according to
different configurations.
To edit a scan configuration, follow these steps:
Go to the discovery scan configurations list.
Go to discovery scan configurations
Make sure you're viewing the correct organization or project:
To manage a discovery scan configuration that you created at the
organization or folder level, view the organization.
To manage a discovery scan configuration that you created at the project
level, view the project.
To manage a discovery scan configuration for single data resource, view the
project that contains the resource.
To switch to a different view, on the toolbar, click the project selector.
Select the organization or project that you want to view.
Click more_vert Actions ,
and then click Edit .
Edit the configuration as needed. For more information, see the documents
listed in Create a scan configuration on this page.
Click Save .
Delete a scan configuration
Deleting a scan configuration doesn't delete the data profiles that have
been generated through it. In addition, deleting a scan configuration and
creating a new one doesn't cause a reprofile operation on tables that are in the
scope of the new scan configuration.
Sensitive Data Protection reprofiles data as described in Frequency of data profile
generation . You can customize the profiling frequency in your scan configuration by creating a schedule .
To force the discovery service to reprofile your data, see Force a reprofile
operation .
For information on how long Sensitive Data Protection
retains data profiles, see
Retention of data profiles .
To delete a scan configuration, follow these steps:
Go to the discovery scan configurations list.
Go to discovery scan configurations
Make sure you're viewing the correct organization or project:
To manage a discovery scan configuration that you created at the
organization or folder level, view the organization.
To manage a discovery scan configuration that you created at the project
level, view the project.
To manage a discovery scan configuration for single data resource, view the
project that contains the resource.
To switch to a different view, on the toolbar, click the project selector.
Select the organization or project that you want to view.
Click more_vert Actions ,
and then click Delete .
To confirm the deletion, in the dialog that appears, click Delete .
View configuration errors
Go to the discovery scan configurations list.
Go to discovery scan configurations
Make sure you're viewing the correct organization or project:
To manage a discovery scan configuration that you created at the
organization or folder level, view the organization.
To manage a discovery scan configuration that you created at the project
level, view the project.
To manage a discovery scan configuration for single data resource, view the
project that contains the resource.
To switch to a different view, on the toolbar, click the project selector.
Select the organization or project that you want to view.
Click the name of the resource associated with the scan configuration. The
Scan configuration details page appears.
If there are errors in your configuration, the Scan status field shows
View errors .
Click View errors . The Errors pane appears. For each error, the
following details are provided:
Date and time the error was detected
Error code
Detailed error message
For certain types of errors, a Repair button might be available.
If a Repair button is available and if you have resolved the cause of the
error, click Repair . Sensitive Data Protection retries processing the
scan configuration and resolves the error if all requirements are met.
What's next
Learn more about data profiles .
Learn how to profile data in a project .
Learn how to profile data in an organization or folder .
Learn how to troubleshoot issues with data profiles .
Refer to a list of metrics included in data profiles.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
