# Dataform

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 52
Unique features: 51

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-02 | deleteTree API |  | The deleteTree API adds methods to delete folders and team folders in Dataform. |
| 2026-04-02 | Folders and repositories |  | Folders and repositories let you organize Dataform code assets into a hierarchical structure with IAM policy inheritance; Folders and repositories let you organize Dataform code assets into a hierarchical structure using the Dataform API. |
| 2025-12-16 | Strict act-as mode |  | Strict act-as mode requires users to have iam.serviceAccounts.actAs on the service account used to run Dataform workflows; Strict act-as mode adds an additional security check for certain user actions in Dataform. |
| 2025-12-15 | Act-as permission verification |  | Act-as permission verification helps users identify and resolve iam.serviceAccounts.actAs permission issues in Dataform using Cloud Logging. |
| 2025-12-09 | Enhanced IAM permissions |  | Enhanced IAM permissions provide more granular control over resource creation and scheduling in Dataform. |
| 2025-12-09 | Private workspaces |  | Private workspaces restrict workspace access to the workspace creator in Dataform. |
| 2025-11-18 | BigLake table creation for Apache Iceberg |  | This feature lets Dataform automate the creation of BigLake tables for Apache Iceberg in BigQuery. |
| 2025-11-13 | Custom organization policy constraints |  | Custom organization policy constraints provide granular control over specific fields for CompilationResult, ReleaseConfig, WorkflowConfig, WorkflowInvocation, and Workspace resources; Custom organization policy constraints provide more granular control over specific fields for Dataform resources. |
| 2025-10-06 | BigQuery job priority settings |  | BigQuery job priority settings let Dataform run queries as interactive jobs or lower-priority batch jobs. |
| 2025-09-08 | Incremental table schema updates without full refresh |  | This feature lets Dataform update an incremental table schema without performing a full table refresh. |
| 2025-09-02 | Automatic processing location selection |  | Automatic processing location selection chooses a Dataform processing location based on datasets referenced in SQL queries. |
| 2025-07-14 | Dataplex metadata cataloging |  | Dataplex metadata cataloging automatically catalogs Dataform metadata to improve near real-time management and search of repository metadata. |
| 2025-05-29 | User credential authorization for runs and scheduling |  | This feature lets Dataform use Google Account user credentials to authorize pipeline creation, scheduling, execution, and workflow configuration creation. |
| 2024-12-19 | Dataplex repository management |  | Dataplex repository management lets you manage Dataform repositories in Dataplex with metadata available automatically. |
| 2024-12-19 | Dataplex repository metadata search and view |  | This feature lets users search for and view Dataform repository metadata in the Dataplex console. |
| 2024-09-09 | Default CMEK key |  | A default CMEK key lets a project encrypt multiple Dataform repositories with the same customer-managed encryption key. |
| 2024-08-12 | Cloud EKM keys |  | Cloud EKM keys let Dataform protect data using externally managed encryption keys. |
| 2024-08-12 | Customer-managed encryption keys |  | Customer-managed encryption keys let Dataform protect repositories with user-managed encryption keys; Customer-managed encryption keys let Dataform protect repositories with user-managed encryption keys. |
| 2024-08-05 | Access Approval support |  | Access Approval support enables Dataform to use Google Cloud Access Approval controls. |
| 2024-06-17 | Manual compilation result inspection |  | Manual compilation result inspection lets users inspect past manual compilation results for a selected release configuration. |
| 2024-05-29 | Assertion dependency parameters |  | Assertion dependency parameters let Dataform actions automatically add assertions from selected dependencies or all dependency actions as dependencies. |
| 2024-05-10 | Gemini code generation assistance |  | Gemini code generation assistance helps users generate code in Dataform. |
| 2024-03-12 | Public repository access |  | Public repository access lets all authenticated users access a Dataform repository. |
| 2024-02-21 | VPC Service Controls support |  | VPC Service Controls support lets Dataform operate within VPC Service Controls perimeters; VPC Service Controls support lets Dataform operate within VPC Service Controls perimeters. |
| 2023-12-11 | Workspace file tabs |  | Workspace file tabs display files as tabs within a Dataform workspace. |
| 2023-12-05 | Terraform IAM policy for repository resource |  | This feature adds Terraform IAM policy support for the Dataform repository resource. |
| 2023-12-04 | Uncommitted changes preview during commit |  | This feature lets users preview uncommitted changes while creating a commit in Dataform. |
| 2023-10-27 | Batch workspace deletion |  | Batch workspace deletion lets users delete multiple Dataform workspaces together. |
| 2023-10-26 | Workspace file search |  | Workspace file search lets users search for files within Dataform workspaces. |
| 2023-10-20 | Workforce identity federation |  | Workforce identity federation lets external workforce identities access Dataform. |
| 2023-10-17 | Terraform repository SSH authentication and service account fields |  | This feature adds ssh_authentication_config and service_account fields to the google_dataform_repository Terraform resource. |
| 2023-10-13 | Code formatting |  | Code formatting adds formatting support for Dataform core and JavaScript code. |
| 2023-09-07 | Service account delegation for workflow execution |  | Service account delegation lets Dataform configure delegated service accounts for workflow execution at the repository or workflow configuration level. |
| 2023-09-06 | Organizational policy for restricting remote repositories |  | This organizational policy lets administrators restrict remote repositories used by Dataform. |
| 2023-08-18 | Bitbucket Cloud repository connectivity |  | Bitbucket Cloud repository connectivity lets Dataform connect repositories to Bitbucket Cloud repositories. |
| 2023-08-18 | SSH authentication for remote repositories |  | SSH authentication lets Dataform connect to GitHub, GitLab, and Bitbucket Cloud repositories using SSH. |
| 2023-08-02 | Repository filtering and sorting |  | Repository filtering and sorting let users filter and sort Dataform repositories. |
| 2023-08-01 | Authenticated user admin setting |  | The authenticated user admin setting adds the set_authenticated_user_admin field to the Dataform Repository resource. |
| 2023-08-01 | Repository labels |  | Repository labels add label support to the Dataform Repository resource. |
| 2023-08-01 | Version control API methods |  | Version control API methods add commit, file read, directory query, and repository history operations to the Dataform API. |
| 2023-07-27 | Commit file selection |  | Commit file selection lets users choose specific files to include in a commit. |
| 2023-06-19 | Compiled graph filtering |  | Compiled graph filtering lets users filter the compiled graph in a Dataform workspace. |
| 2023-05-04 | Release configurations |  | Release configurations let Dataform configure execution environments such as staging and production. |
| 2023-05-04 | Workflow configurations |  | Workflow configurations let Dataform execute SQL workflows on a schedule. |
| 2023-04-18 | Cloud Logging integration |  | Cloud Logging integration makes Dataform logs available in Cloud Logging. |
| 2023-03-24 | Workspace compilation overrides |  | Workspace compilation overrides let users override compilation settings in a Dataform workspace. |
| 2023-03-09 | Workspace query preview |  | Workspace query preview lets users preview queries within a Dataform workspace. |
| 2023-01-25 | Workspace navigation tabs |  | Workspace navigation tabs add tabbed navigation within a Dataform workspace. |
| 2023-01-09 | Compiled graph view |  | Compiled graph view displays a SQL workflow as a compiled graph in a Dataform workspace. |
| 2022-11-25 | Real-time BigQuery query validation |  | Dataform can validate compiled queries against BigQuery in real time. |
| 2022-10-21 | Policy tag configuration in config block |  | Dataform supports configuring policy tags in the config block. |

Source file slug: `dataform.md`

