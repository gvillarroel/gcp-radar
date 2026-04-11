---
title: "Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/create-repository
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/create-repository
  title: "Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Create a repository
Stay organized with collections
Save and categorize content based on your preferences.
This document helps you understand the concept of
repositories in Dataform and how to create a new repository.
About Dataform repositories
Each Dataform repository houses a collection of SQLX and JavaScript
files that make up your workflow, as well as Dataform
configuration files and packages. You interact with the contents of your
repository in a development workspace .
Dataform displays your repositories on the Dataform page in
the alphabetical order of repository IDs. You can sort and filter them.
To view your repositories, in the Google Cloud console,
go to the Dataform page.
Go to Dataform
Each Dataform repository is connected to a default
Dataform service agent or a custom service account. You can
only select a custom service account when you
create a repository .
You can
edit the service account later.
By default, Dataform uses a service agent or service account
derived from your project number in the following format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
Dataform uses Git to record changes and manage file versions.
Each Dataform repository corresponds with a Git repository.
After you create a Dataform repository, you can connect it
to a remote GitHub, GitLab, or Bitbucket repository.
In a Dataform repository, Dataform stores the repository code.
In a connected repository, the third-party repository stores the repository code.
Dataform interacts with the third-party repository to allow you to edit
and execute its contents in a Dataform development workspace.
The Dataform repository page consists of the following components:
Development Workspaces tab
Displays development workspaces created in the repository.
Workflow Execution Logs tab
Displays Dataform workflow execution logs .
Releases & scheduling tab
Lets you inspect, create, edit, and delete
release configurations
and
workflow configurations .
Settings tab
Displays the name and location of the repository. For a repository connected
to a third-party Git repository, displays the third-party repository source,
default branch name, and secret token. Displays the buttons to
connect the repository to a third-party
Git repository and to
edit the Git connection .
Create development workspace button
Lets you create a development workspace .
After you create and initialize a development workspace, you can
edit your workflow settings file to configure
the following Dataform settings of your repository:
The default database (Google Cloud project ID).
The default schema (BigQuery dataset ID).
The default BigQuery location.
The default schema (BigQuery dataset ID) for assertions.
The warehouse, which must be set to bigquery .
User-defined variables that are made available to project code during compilation.
Important: Repositories created in Dataform are not visible in
BigQuery repositories.
For more information about Dataform repository settings, see
IProjectConfig in the Dataform core reference .
Repository settings
When you create a Dataform repository, you need to set the following
repository settings:
Repository ID
A unique ID of the repository. IDs can only include numbers, letters, hyphens,
and underscores.
Region
Dataform region for storing the repository and its contents.
This storage region can be different than the processing region where
Dataform processes your code and stores the output of executions.
By default, the processing region is set to your default BigQuery
dataset region. You can edit the processing region in the workflow settings file
after creating the repository. For more information, see
Configure Dataform workflow settings .
Service agent or service account
The Dataform service agent or custom service account
associated with the repository. For new repositories, you must provide a custom
service account. You can select a service account associated with your
Google Cloud project or manually enter a different service account.
By default, Dataform uses a service
agent or service account derived from your project number in the following
format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
You must use a custom service account to run workflows in your
repository, but the default Dataform service agent is still
used for all other repository operations.
Strict act-as mode
Enables an additional security check that requires the
iam.serviceAccounts.actAs permission on the service account.
For new repositories,
strict act-as mode
is enforced. For existing repositories, we recommend using custom
service accounts and enabling strict act-as mode to ensure a more secure and
predictable permissions model.
Encryption
Encryption method for the repository. You can use the
default encryption , a unique
customer-managed Cloud KMS encryption key,
or a default Dataform CMEK key.
For more information about using
customer-managed encryption keys (CMEK) in
Dataform, see Use customer-managed encryption keys .
After you create a repository, you can
connect it to GitHub or GitLab .
Important: To create a Dataform repository connected to a remote
Git repository that is not allow-listed in the dataform.restrictGitRemotes
policy, first add the remote Git repository to the allowedValues list in the
policy, and then create a new Dataform repository and connect it to
the remote repository. For more information, see
Restrict remote repositories .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery and Dataform APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery and Dataform APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To use CMEK encryption for the repository, enable CMEK encryption of Dataform repositories .
Important: Before you create a Dataform repository that you want to
connect to a remote Git repository ,
check if your organization or project
restricts remote Git repositories with the
dataform.restrictGitRemotes Organization Policy.
If the policy is in place, ensure that the remote repository is allow-listed
before you create the Dataform repository and connect it to the remote
repository. For more information, see
Restrict remote repositories
Required roles
To get the permissions that
you need to create and delete a repository,
ask your administrator to grant you the
following IAM roles on repositories:
Dataform Admin ( roles/dataform.admin ) - the project
Service Account User ( roles/iam.serviceAccountUser ) - the custom service account
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Grant required roles
To run workflows in your Dataform repository and in
BigQuery, you can use a custom service account or your Google
Account.
Your custom service account must have the following required roles:
BigQuery Data Editor
( roles/bigquery.dataEditor )
on projects or specific BigQuery datasets to which
Dataform needs both read and write access. This usually includes
the project hosting your Dataform repository.
BigQuery Data Viewer
( roles/bigquery.dataViewer )
on projects or specific BigQuery datasets to which
Dataform needs read-only access.
BigQuery Job User
( roles/bigquery.jobUser )
on the project hosting your Dataform repository.
To let Dataform use your custom service account, the default
Dataform service agent must have the following roles on the
custom service account resource:
Service Account Token Creator
( roles/iam.serviceAccountTokenCreator )
Service Account User
( roles/iam.serviceAccountUser )
To grant these roles, follow these steps:
In the Google Cloud console, go to the IAM page.
Go to IAM
Click Grant access .
In the New principals field, enter your custom service account ID.
In the Select a role menu, select the following roles one by one, using
Add another role for each additional role:
BigQuery Data Editor
BigQuery Data Viewer
BigQuery Job User
Click Save .
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
Select your custom service account.
Go to Principals with access , and then click Grant access .
In the New principals field, enter your default Dataform
service agent ID.
Your default Dataform service agent ID is in the following
format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the numeral ID of your
Google Cloud project. You can find your Google Cloud project ID in the
Google Cloud console dashboard. For more information, see
Identifying projects .
In the Select a role list, add the following roles:
Service Account User
Service Account Token Creator
Click Save .
For more information on granting roles, see
Grant Dataform the required access .
Create a repository
To create a Dataform repository, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Click Create repository .
On the Create repository page, in the Repository ID field,
enter a unique ID.
IDs can only include numbers, letters, hyphens, and underscores.
In the Region drop-down list, select a Dataform region
for storing the repository and its contents. Select the Dataform
region nearest to your location.
For a list of available Dataform regions, see
Locations . The repository region does not have
to match the location of your BigQuery datasets.
In the workflow_settings.yaml file, you can set the processing region where
Dataform processes your code and stores the output of executions.
The processing region has to match the location of your BigQuery
datasets, but does not need to match the repository region.
For more information, see
Configure Dataform workflow settings .
In the Service account menu, select a custom service account for the
repository.
Important: You can't select the default Dataform service agent
when creating a repository. You must use a custom service account for
the repository.
In the menu, you can select a custom service account associated with your
Google Cloud project that you have access to. Custom service accounts are used only
for workflow execution. All other repository operations are performed by the
default Dataform service agent.
Optional: To select a service account that's not displayed in the
menu—for example, if you lack the iam.serviceAccounts.list permission
required to view the list of roles—click Enter manually and enter
the service account ID.
Note: The iam.serviceAccounts.list permission is available in the
View Service Accounts role
( roles/iam.serviceAccountViewer ).
In the actAs permission checks section, enforce the permission checks
on user actions on the repository. For details on these checks, see
Use strict act-as mode .
Configure your selected encryption mechanism for the repository:
Caution: You can't change the encryption mechanism of a Dataform
repository after the repository is created. For more information, see
Dataform CMEK restrictions
Default CMEK key
Dataform displays the
Use the default KMS key checkbox and selects it by default.
To encrypt the repository with the default Dataform CMEK key,
leave the Use the default KMS key checkbox selected.
Caution: If you select the Use the default KMS key checkbox but
no default Dataform CMEK key is set for your project, Dataform
applies encryption at rest to the repository.
Use customer-managed encryption keys .
Unique CMEK key
To encrypt the repository with a unique CMEK key, do the following:
If the Use the default KMS key checkbox is selected by default,
deselect the checkbox.
In the Encryption section, select the
Customer-managed encryption keys (CMEK) option.
In the Select a customer-managed key drop-down,
select a unique CMEK key.
Encryption at rest
To use the default encryption ,
in the Encryption section,
select the Google-managed encryption key option.
Caution: If a default Dataform CMEK key is set for the
region of your repository, you must use CMEK encryption. Don't select
the Google-managed encryption key option. For more information,
see
Dataform CMEK restrictions .
Click Create , and then click Go to repositories .
Edit the service account
You must associate a custom service account with a Dataform
repository for workflow execution. All other repository operations are
still performed by the default Dataform service agent.
To edit the service account for a Dataform repository, follow
these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then click Settings .
Note: The Dataform repositories list includes only
repositories created for Dataform workflow development.
Repositories for BigQuery Studio assets, such as notebooks or saved
queries, are managed separately and don't appear in this list.
By the Service account field, click edit Edit Service account .
In the Service account menu, select a service account for the repository.
In the menu, you can select a custom service account associated with your
Google Cloud project that you have access to.
Optional: To select a service account that is not displayed in the menu,
click Enter manually and enter a service account ID.
Click Save .
Delete a repository
To delete a repository and all its contents, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
By the repository that you want to delete, click the more_vert
More menu, and then select Delete .
In the Delete repository window, enter the name of the repository to
confirm deletion.
Click Delete .
What's next
To learn how to connect a Dataform repository to a third-party Git
repository, see Connect to a third-party Git repository .
To learn more about how repository size affects development in Dataform,
see Overview of repository size .
To learn more about splitting a repository in Dataform, see
Introduction to splitting repositories .
To learn how to configure Dataform processing settings,
see Configure Dataform workflow settings .
To learn how to create and initialize a workspace, see
Create a workspace .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
