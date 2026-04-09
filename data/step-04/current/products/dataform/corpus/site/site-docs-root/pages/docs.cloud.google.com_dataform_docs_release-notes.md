---
title: "Dataform release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/release-notes
  title: "Dataform release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Resources
Send feedback
Dataform release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Dataform. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 02, 2026
Feature
The
Dataform folders and repositories
feature is now
generally available
(GA). This feature lets you organize code assets like notebooks and saved
queries into a hierarchical structure with IAM policy inheritance. This release
also introduces deleteTree API methods for deleting folders and
team folders.
January 28, 2026
Feature
You can
organize your code assets into a hierarchical structure
with folders and repositories using the Dataform API. This feature is in
preview .
January 19, 2026
Breaking
Dataform workflows ,
BigQuery notebooks ,
pipelines ,
and
data preparations
are enforcing strict act-as mode at the project level. To avoid failures and
maintain automatic releases, you must use custom service accounts instead of the
default Dataform service agent across all repositories. You must also grant the
Service Account User role ( roles/iam.serviceAccountUser ) to the default
Dataform service agent and relevant principals. For more information and to
verify act-as permissions, see
Use strict act-as mode .
December 16, 2025
Feature
Strict act-as mode
for Dataform is now
generally available
(GA). This feature enhances security by requiring users to have the
iam.serviceAccounts.actAs permission on the service account used to run
workflows, ensuring a more secure and predictable permissions model for your
Dataform projects.
December 15, 2025
Feature
You can verify and resolve iam.serviceAccounts.actAs permission issues in
Dataform by checking Cloud Logging, interpreting log entries, and granting the
necessary IAM roles. For more information, see
Verify act-as permissions for the effective service account .
This feature is in
preview .
December 09, 2025
Feature
Dataform offers
enhanced IAM permissions ,
providing more granular control over resource creation and scheduling.
Administrators can also
enable private workspaces
to restrict access to the workspace creator. These features are in
preview .
November 18, 2025
Feature
Dataform now lets you automate the creation of
BigLake tables for Apache Iceberg in BigQuery .
This feature is
generally available
(GA).
November 13, 2025
Feature
You can use custom constraints with Organization Policy to provide more
granular control over specific fields for the CompilationResult ,
ReleaseConfig , WorkflowConfig , WorkflowInvocation , and Workspace
resources. For more information, see
Create custom organization policy constraints .
This feature is
generally available
(GA).
October 06, 2025
Feature
You can use custom constraints with Organization Policy to provide more
granular control over specific fields for some Dataform
resources. For more information, see
Create custom organization policy constraints .
This feature is
generally available
(GA).
Feature
You can set the priority of BigQuery jobs in Dataform
to run queries as interactive jobs that start running as quickly as possible
or as batch jobs with lower priority. For more information, see
Create a workflow configuration
and
InvocationConfig .
This feature is
generally available
(GA).
September 08, 2025
Feature
You can now update an incremental table schema without a full table refresh . This feature is in Preview .
September 02, 2025
Feature
Dataform now automatically selects a processing location based on the datasets referenced in your SQL queries. This makes setting the default location optional in your workflow configurations. For more information, see About repository settings . This feature is generally available (GA).
August 21, 2025
Security
A security vulnerability was discovered in the Dataform API. This vulnerability could potentially allow unauthorized access to customer code repositories and data. For more information, see
GCP-2025-045 security bulletin .
July 14, 2025
Feature
Updates to the automatic cataloging of Dataform metadata in Dataplex improve the near real-time management and search capabilities for repository metadata. These features are generally available (GA).
June 12, 2025
Announcement
Dark theme is now available for BigQuery and Dataform. To turn on the dark theme, go to the Console, open the Settings and utilities menu next to your avatar, and select Preferences . On the User preferences page, select Appearance in the navigation, select your color theme, and save your selection.
May 29, 2025
Feature
You can now use your Google Account user credentials to authorize the creation, scheduling, and running of pipelines, the scheduling of notebooks and data preparations, and the creation of workflow configurations. For more information, see Schedule runs . This feature is in preview .
May 28, 2025
Feature
You can now use strict act-as mode to enable an additional security check for certain user actions in Dataform. For more information, see Use strict act-as mode . This feature is in preview .
December 19, 2024
Feature
You can now search for and view the metadata of Dataform repositories in the Dataplex console. This feature is in preview .
Feature
You can now manage Dataform repositories in Dataplex. Metadata of Dataform repositories is automatically available in Dataplex, without additional configuration. For more information, see Manage Dataform assets
with Dataplex . This feature is generally available (GA).
October 10, 2024
Announcement
Dataform is available in the following regions:
asia-northeast2
asia-south2
australia-southeast2
europe-central2
europe-north1
europe-west8
europe-west9
europe-west10
me-west1
northamerica-northeast2
southamerica-west1
us-west3
For more information, see Locations .
September 30, 2024
Change
The maximum size limit for workspaces encrypted with customer-managed encryption keys (CMEK) is 512 MB. For more information about Dataform quotas and limits, see Quotas and limits . For more information about encrypting Dataform repositories with CMEK, see Use customer-managed encryption keys .
September 09, 2024
Feature
You can now set a default Dataform customer-managed encryption keys (CMEK) key for your project to encrypt multiple Dataform repositories with the same CMEK key. For more information, see Use Dataform default CMEK keys .
August 12, 2024
Feature
Customer-Managed Encryption Keys (CMEK) in Dataform are generally available (GA). For more information, see Use customer-managed encryption keys .
Feature
You can now use Cloud External Key Manager (Cloud EKM) keys to protect Dataform data. Cloud EKM keys in Dataform are generally available (GA). For more information, see Using and managing external keys .
August 05, 2024
Feature
Access Approval supports Dataform in the GA stage .
July 31, 2024
Change
The maximum size limit for repositories encrypted with customer-managed encryption keys (CMEK) is 512 MB. For more information about Dataform quotas and limits, see Quotas and limits . For more information about encrypting Dataform repositories with CMEK, see Use customer-managed encryption keys .
July 18, 2024
Announcement
As of Dataform Core 3.0.0. ,
Dataform doesn't distribute a Docker image. You can build your own
Docker image of Dataform, which you can use to run the equivalent of Dataform CLI commands. To build your own Docker image, see Containerize an application
in the Docker documentation.
June 21, 2024
Announcement
The 3.0.0 version of the open-source Dataform framework is available.
The workflow_settings.yaml file, which was introduced in Dataform Core 3.0.0-beta.0, replaces dataform.json .
You can specify the Dataform Core version directly in the workflow_settings.yaml file, which removes the need for package.json for most repositories. To have package dependencies other than @dataform/core , the package.json file is still required.
No immediate action to convert existing Dataform code is required. You can continue to use dataform.json and package.json in existing repositories.
You can convert your dataform.json file into workflow_settings.yaml by following the instructions in the 3.0.0 GitHub release .
New repositories use workflow_settings.yaml by default. You can replace the workflow_settings.yaml file with dataform.json to continue using the JSON format. If you remove workflow_settings.yaml , you need to add a package.json file to your repository to install @dataform/core .
For more information, see the 3.0.0 release on GitHub .
June 17, 2024
Feature
You can now inspect past manual compilation results of a selected release configuration. For more information, see View details of a release configuration .
May 29, 2024
Feature
Dataform Core includeDependentAssertions and dependOnDependencyAssertions parameters for adding assertions as dependencies are available.
You can set the includeDependentAssertions parameter in a selected action to automatically add assertions of a selected dependency action as dependencies of the edited action.
You can set dependOnDependencyAssertions the parameter in a selected action to automatically add assertions of all dependency actions as dependencies of the edited action.
For more information, see Set assertions as dependencies .
May 10, 2024
Feature
Gemini, an AI-powered collaborator in Google Cloud, can help you generate code in Dataform. This feature is in preview . For more information, see Write queries with Gemini assistance .
April 02, 2024
Feature
You can now use Customer-Managed Encryption Keys (CMEK) to protect repositories in Dataform. CMEK in Dataform is available in preview . For more information, see Use customer-managed encryption keys .
March 13, 2024
Announcement
The 3.0.0-beta.0 version of the open-source Dataform framework is available. This update introduces significant changes, including, but not limited to, the following:
Deprecation of dataform.json in favor of workflow_settings.yaml
Stateless package installation by @dataform/cli
Warehouse-agnostic compilation output
You don't need to take immediate action to update your Dataform code.
For more information, see the 3.0.0-beta.0 release on GitHub .
March 12, 2024
Feature
Granting repository access to all authenticated users is available. For more information, see Grant public access to a repository .
March 11, 2024
Announcement
Dataform is available in the africa-south1 region. For more information, see Locations .
February 26, 2024
Announcement
Dataform is available in the us-south1 region.
For more information, see Locations .
February 21, 2024
Feature
Support for VPC Service Controls is generally available ( GA ).
February 15, 2024
Announcement
Dataform is available in the following regions:
asia-east2
asia-northeast3
asia-southeast2
europe-southwest1
europe-west12
me-central1
me-central2
northamerica-northeast
us-east4
us-east5
us-west2
us-west4
For more information, see Locations .
January 29, 2024
Feature
Support for VPC Service Controls is available in preview .
January 17, 2024
Change
The Releases & Scheduling tab replaces the Release configurations and Workflow configurations tabs in repositories. Configuration and monitoring of release configurations and workflow configurations is available in the Releases & Scheduling tab.
For more information, see Create a release configuration , and Schedule executions with workflow configurations .
December 11, 2023
Feature
Display of files as workspace tabs is available.
December 07, 2023
Announcement
The 2.8.0 version of the open-source Dataform framework is available. This update introduces performance improvements. For more information, see the 2.8.0: Packaging and compilation performance improvements release on GitHub.
December 05, 2023
Feature
Terraform IAM policy for the Dataform repository resource is available.
December 04, 2023
Feature
Preview of uncommitted changes during a commit is available.
November 16, 2023
Announcement
Dataform is compliant with VPAT.
For more information, see Dataform compliance .
October 27, 2023
Feature
Batch workspace deletion is available.
October 26, 2023
Feature
File search is available in workspaces.
October 23, 2023
Announcement
The 2.7.0 version of the open-source Dataform framework is available. This update introduces explicitly listed column names in incremental insert statements. For more information, see the 2.7.0: Updates for Dataform GCP incremental SQL release on GitHub.
October 20, 2023
Feature
Workforce identity federation is available.
October 17, 2023
Feature
ssh_authentication_config and service_account fields are available in the google_dataform_repository Dataform Terraform resource.
October 13, 2023
Feature
Formatting of Dataform core and JavaScript code is available.
September 07, 2023
Feature
Service account delegation for workflow execution is now available. You can configure service account delegation for whole repositories , or for individual workflow configurations .
September 06, 2023
Feature
Organizational policy for restricting remote repositories is available.
August 31, 2023
Announcement
Legacy Dataform will be deprecated on February 26, 2024, after which you will not be able to access legacy projects.
We recommend migration to Dataform in Google Cloud Platform.
To learn more about Dataform in Google Cloud Platform, see Overview of Dataform .
To discover how to migrate legacy projects, see Migrate from legacy Dataform .
August 22, 2023
Announcement
Dataform is compliant with SOC 2 and SOC 3.
For more information, see Dataform compliance .
August 18, 2023
Feature
SSH authentication for GitHub, GitLab, and Bitbucket Cloud repositories is supported.
Feature
Connecting Dataform repositories to Bitbucket Cloud repositories is supported.
August 09, 2023
Announcement
Dataform is compliant with HIPAA, ISO/IEC 27001, and SOC 1.
For more information, see Dataform compliance .
August 02, 2023
Feature
Filtering and sorting repositories are available.
August 01, 2023
Feature
The following Dataform API methods for version control are available:
CommitRepositoryChanges()
ReadRepositoryFile()
QueryRepositoryDirectoryContents()
FetchRepositoryHistory()
The following fields of Repository are available:
labels
set_authenticated_user_admin
July 27, 2023
Feature
Selection of files for a commit is available.
June 19, 2023
Feature
Filtering the compiled graph in a workspace is available.
May 04, 2023
Announcement
Dataform is generally available ( GA ).
Feature
Dataform release configurations are available. Release configurations let you configure execution environments, for example, staging and production.
Feature
Dataform workflow configurations are available. Workflow configurations let you execute SQL workflows on a schedule.
April 18, 2023
Feature
Cloud Logging is available for Dataform in Preview.
March 24, 2023
Feature
Workspace compilation overrides are available in Preview.
March 21, 2023
Announcement
Dataform in Preview is available in the following regions:
australia-southeast1
southamerica-east1
March 10, 2023
Announcement
Dataform in Preview is available in the following regions:
asia-south1
europe-west6
March 09, 2023
Feature
Query preview in a workspace is available in Preview.
March 06, 2023
Announcement
Dataform in Preview is available in the following regions:
asia-northeast1
europe-west2
europe-west3
us-east1
February 14, 2023
Announcement
Dataform in Preview is available in the following regions:
asia-southeast1
europe-west1
us-west1
January 27, 2023
Announcement
Dataform in Preview is available in the asia-east1 region.
January 25, 2023
Feature
Workspace navigation tabs are available in Preview.
January 09, 2023
Feature
Display of a SQL workflow as a compiled graph in a workspace is available in Preview.
November 25, 2022
Feature
Real-time validation of compiled queries against BigQuery is available in Preview.
Fixed
Definition of BigQuery variables in the pre_operations block of type: incremental queries that contain a uniqueKey is available in Preview.
October 21, 2022
Feature
Configuration of policy tags in the config block is available in Preview.
August 25, 2022
Announcement
Dataform is available in Preview.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
