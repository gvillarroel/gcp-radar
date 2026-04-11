---
title: "Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/access-control
  title: "Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Control access with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to do the following in Dataform:
Grant Dataform required access .
Control access to Dataform with IAM .
Control access to individual tables with IAM .
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
Grant Dataform the required access
This section shows you how to grant the Identity and Access Management (IAM) roles
that Dataform service agents and custom service accounts
require to run workflows in BigQuery.
About custom service accounts and Dataform service agents
You can configure custom service accounts to run workflows on your behalf in the
following ways:
At the repository level, to run all
the workflows in a given repository.
Individually for each
workflow configuration .
When you create a Dataform repository or workflow configuration,
you can select any service account that you have
act-as permissions
on. You must configure the required permissions for all the
service accounts associated with your Dataform resources.
Important: We recommend enabling
strict act-as mode
on existing repositories, as this helps to ensure a more secure and
predictable permissions model for your Dataform projects.
When you create your first Dataform repository,
Dataform automatically generates a default service agent.
Dataform uses the default service agent to interact with
BigQuery on your behalf.
Your default Dataform service agent ID is in the following
format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the numeral ID of your
Google Cloud project. You can find your Google Cloud project ID in the
Google Cloud console dashboard. For more information, see
Find the project name, number, and ID .
Required roles for Dataform service agents, custom service accounts, and Google Accounts
Default Dataform service agents, custom service accounts, and
Google Account user credentials
( Preview ) used to
authenticate in Dataform require the following
BigQuery IAM roles to be able to run workflows in
BigQuery:
BigQuery Data Editor
( roles/bigquery.dataEditor ) on projects to which Dataform
needs both read and write access. These usually include the project hosting
your Dataform repository.
BigQuery Data Viewer
( roles/bigquery.dataViewer ) on projects to which Dataform
needs read-only access.
BigQuery Job User
( roles/bigquery.jobUser ) on the project hosting your Dataform
repository.
BigQuery Data Owner
( roles/bigquery.dataOwner ) if you want to query
BigQuery datasets .
BigQuery roles for column-level access control
if you want to
use BigQuery policy tags .
Additionally, grant the following roles to the default Dataform
service agent on the
effective service account
for the workflow configuration. These roles are required for strict act-as
mode to work.
Service Account User
( roles/iam.serviceAccountUser )
Service Account Token Creator
( roles/iam.serviceAccountTokenCreator )
Caution: When you grant the Service Account Token Creator role to a default
Dataform service agent so that it can access a custom service
account in your project, the custom service account can then be used in any
Dataform repository. This means that anyone who can run
workflows in Dataform can use this service account in the
project. To mitigate this risk, we recommend enabling
strict act-as mode
on existing repositories.
For automatic repository releases and automatic workflow runs,
grant the default Dataform service agent the
iam.serviceAccounts.actAs permission on the
effective service account .
Security considerations
Granting the roles required by Dataform to a
Dataform service agent, custom service account, or a
user's Google Account ( Preview )
comes with the following security considerations:
Any service agent or service account granted the required roles might gain
access to BigQuery or Secret Manager in the project that
the service agent or service account belongs to, regardless of
VPC Service Controls. Requests originating from Dataform that
use a service agent with the required roles are within the
VPC Service Controls perimeter of the project that the
Dataform repository belongs to.
For more information, see
Configure VPC Service Controls .
Any user who has the dataform.repositories.create IAM
permission can run code using the default Dataform service
agent and all the permissions granted to that service agent or service
account.
For more information, see
Security considerations for Dataform permissions .
To restrict the data that a user, service agent, or service account can
read or write in BigQuery, you can grant granular
BigQuery IAM permissions to selected
BigQuery datasets or tables. For more information, see
Controlling access to datasets and
Controlling access to tables and views .
To prevent users from performing actions while using the Google Account user
credentials of another user, the following restrictions are enforced:
To modify a workflow configuration with another Google Account user's
credentials attached to it, you need to attach your own Google Account
user credentials to the workflow configuration or change the workflow
configuration to authenticate with a custom service account.
You can't modify a compilation result for a release configuration if there
are workflow configurations referencing the release configuration that have
another Google Account user's credentials attached.
You can't set a workflow configuration to authenticate with Google Account
user credentials and reference a release configuration with a schedule. This
limitation has the following consequences:
You can't update a release configuration to use a schedule if there are
workflow configurations referencing the release configuration that are set
to authenticate with Google Account user credentials.
You can't create a workflow configuration that authenticates with
Google Account user credentials and points to a release configuration with a
schedule.
You can't create or update a workflow configuration to use Google Account
user credentials and point to a release configuration with a schedule.
Grant the required BigQuery roles
To grant the required BigQuery IAM roles to your
default Dataform service agent, a custom service account
that you want to use in Dataform, or a user's Google Account that
you want to use to authenticate in Dataform
( Preview ), follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select or create a repository .
Note: The Dataform repositories list includes only
repositories created for Dataform workflow development.
Repositories for BigQuery Studio assets, such as notebooks or saved
queries, are managed separately and don't appear in this list.
In the Google Cloud console, go to the IAM page.
Go to IAM
Click Grant Access .
In the New principals field, enter the service agent ID, service
account ID, or the user's Google
Account email ( Preview ).
In the Select a role list, select the BigQuery Job User role.
Click Add another role , and then in the Select a role list,
select the BigQuery Data Editor role.
Click Add another role , and then in the Select a role list,
select the BigQuery Data Viewer role.
Click Save .
Grant roles required for automatic workflows
To use a custom service account in Dataform, the default
Dataform service agent must be able to access the custom service
account. This lets Dataform run your workflows using the
permissions defined on your custom service account instead of on the default
service agent's account.
To grant this access, you need to grant the
Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) to the default Dataform
service agent as the principal. This lets the default Dataform
service agent impersonate the service account by creating short-lived credentials
known as tokens. These tokens are required for Dataform to run
workflows using the custom service account's identity.
You also need to grant the
Service Account User role
( roles/iam.serviceAccountUser ) to the default Dataform service
agent. This lets the default Dataform service agent start new
automatic workflow runs for workflow configurations that are run by the custom service account.
To grant the default Dataform service agent access to a
custom service account, follow these steps:
In the Google Cloud console, go to IAM >
Service accounts .
Go to Service accounts
Select a project.
On the
Service accounts for project " PROJECT_NAME "
page, select your custom service account.
Go to Principals with access , and then click Grant Access .
In the New principals field, enter your default Dataform
service agent ID.
Your default Dataform service agent ID is in the following
format:
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
In the Select a role list, select the Service Account Token Creator
role and the Service Account User role.
Click Save .
The custom service account is now ready to be configured within your
Dataform repository.
Audit service account configurations
This section shows you how to audit your Dataform resources to
ensure proper service account usage and permission grants. Auditing is especially
important when using custom service accounts, as they require specific
permissions for the default Dataform service agent to operate.
When using a custom service account for a Dataform repository or
workflow configuration, you must verify that the default
Dataform service agent has the
Service Account User role
( roles/iam.serviceAccountUser ) on the custom service account. This role
grants the iam.serviceAccounts.actAs permission, which lets scheduled runs,
initiated by the default Dataform service agent, impersonate
the custom service account. Additionally, verify that the default
Dataform service agent has the
Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator )
on the effective service account.
Verify repository service accounts
First, identify the dataform.Repository assets that are in scope for
Dataform's own scheduling and execution. Then, verify the service
account configurations for those in-scope repositories.
Use Cloud Asset Inventory to list all the resources of the dataform.Repository type.
For more information, see
View your assets .
For each repository in the Cloud Asset Inventory output, check the
resource.data.labels field to determine if it's in scope. The exact path might
vary slightly based on your export format.
Identify out-of-scope repositories by inspecting the labels map for the
single-file-asset-type key. The presence of this key indicates that the
repository is used by a BigQuery feature. If the value is sql
or data_canvas , the repository can be excluded from the service account
permission checks.
The remaining repositories lacking this key or these values are in
scope for the service account permission checks.
For each in-scope repository, check the resource.data.serviceAccount field
in the Cloud Asset Inventory output to determine if a custom service account is
configured:
If the resource.data.serviceAccount field is present and its value is
different from the project's default Dataform service agent
email address, then the repository uses a custom service account.
If the resource.data.serviceAccount field is absent, or if the field's
value matches the project's default Dataform service agent,
then the repository uses the default service agent.
Note: If you expect a custom service account to be configured but the
resource.data.serviceAccount field is absent, first double-check the
repository's configuration in the Google Cloud console. If the service account
is configured on the repository but not appearing in the Cloud Asset Inventory
output, contact Cloud Customer Care .
If a custom service account is used, verify that the default
Dataform service agent has both the Service Account User role
( roles/iam.serviceAccountUser ) and the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on that custom service account.
Verify workflow configuration service accounts
Using dedicated custom service accounts for Dataform workflow
configurations is a security best practice, aligning with the principle of least
privilege.
To verify service account usage for dataform.WorkflowConfig resources , do
the following:
Use Cloud Asset Inventory to list all resources of the dataform.WorkflowConfig
type.
For each workflow configuration, examine the Cloud Asset Inventory output to determine the effective service account:
If the resource.data.serviceAccount field is present, this value is
the email address of the service account explicitly set on the workflow
configuration.
If the resource.data.serviceAccount field is absent, the workflow
configuration inherits the service account from its parent repository.
Check the
parent repository's configuration
to find the effective service account.
Identify if a custom service account is being used by comparing the email
address of the effective service account with the email address of the project's
default Dataform service agent. If they are different, a custom
service account is in use.
If a custom service account is in use, ensure that the default
Dataform service agent has both the Service Account User role
( roles/iam.serviceAccountUser ) and the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) granted on that custom service
account. These permissions let the default Dataform service
agent initiate workflow executions impersonating the custom service account.
Control access to Dataform with IAM
This section describes the access control options for Dataform
and shows you how to view and grant Dataform roles.
Dataform uses Identity and Access Management (IAM)
for access control. For more information about roles and permissions in
IAM, see
IAM roles and permissions index .
Predefined Dataform roles
The following table lists the predefined roles that give you access
to Dataform resources:
Role
Permissions
Dataform Admin
( roles/ dataform.admin )
Full access to all Dataform resources.
dataform.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.config.get
dataform.config.update
dataform.folders.addContents
dataform.folders.create
dataform.folders.delete
dataform.folders.deleteTree
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.move
dataform.folders.queryContents
dataform.folders.setIamPolicy
dataform.folders.update
dataform.locations.get
dataform.locations.list
dataform.operations.cancel
dataform.operations.delete
dataform.operations.get
dataform.operations.list
dataform.releaseConfigs.create
dataform.releaseConfigs.delete
dataform.releaseConfigs.get
dataform.releaseConfigs.list
dataform.releaseConfigs.update
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform.repositories.delete
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform.repositories.move
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. repositories. scheduleRelease
dataform. repositories. scheduleWorkflow
dataform. repositories. setIamPolicy
dataform.repositories.update
dataform.teamFolders.create
dataform.teamFolders.delete
dataform. teamFolders. deleteTree
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. teamFolders. setIamPolicy
dataform.teamFolders.update
dataform. workflowConfigs. create
dataform. workflowConfigs. delete
dataform.workflowConfigs.get
dataform.workflowConfigs.list
dataform. workflowConfigs. update
dataform. workflowInvocations. cancel
dataform. workflowInvocations. create
dataform. workflowInvocations. delete
dataform. workflowInvocations. get
dataform. workflowInvocations. list
dataform. workflowInvocations. query
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform. workspaces. setIamPolicy
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Dataform Editor
( roles/ dataform.editor )
Edit access to Workspaces and Read-only access to Repositories.
dataform.commentThreads.get
dataform.commentThreads.list
dataform.comments.get
dataform.comments.list
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.config.get
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.operations.get
dataform.operations.list
dataform.releaseConfigs.get
dataform.releaseConfigs.list
dataform. repositories. computeAccessTokenStatus
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform.workflowConfigs.get
dataform.workflowConfigs.list
dataform.workflowInvocations.*
dataform. workflowInvocations. cancel
dataform. workflowInvocations. create
dataform. workflowInvocations. delete
dataform. workflowInvocations. get
dataform. workflowInvocations. list
dataform. workflowInvocations. query
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Dataform Viewer
( roles/ dataform.viewer )
Read-only access to all Dataform resources.
dataform.commentThreads.get
dataform.commentThreads.list
dataform.comments.get
dataform.comments.list
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.config.get
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.operations.get
dataform.operations.list
dataform.releaseConfigs.get
dataform.releaseConfigs.list
dataform. repositories. computeAccessTokenStatus
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform.workflowConfigs.get
dataform.workflowConfigs.list
dataform. workflowInvocations. get
dataform. workflowInvocations. list
dataform. workflowInvocations. query
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform.workspaces.list
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. searchFiles
resourcemanager.projects.get
resourcemanager.projects.list
Code Commenter
Beta
( roles/ dataform.codeCommenter )
Permissions to comment, at the repository level. Grants CRUD access over commentThread and comment resources.
dataform.commentThreads.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.*
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform.folders.get
dataform.folders.queryContents
dataform.locations.get
dataform.repositories.get
dataform.repositories.readFile
resourcemanager.projects.get
resourcemanager.projects.list
Code Creator
( roles/ dataform.codeCreator )
Access only to private and shared code resources. The permissions in the Code Creator let you create and list code in Dataform, and access only the code that you created and code that was explicitly shared with you.
dataform.commentThreads.get
dataform.commentThreads.list
dataform.comments.get
dataform.comments.list
dataform.folders.create
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.repositories.create
dataform.repositories.list
resourcemanager.projects.get
resourcemanager.projects.list
Code Editor
( roles/ dataform.codeEditor )
Edit access code resources.
dataform.commentThreads.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.*
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.addContents
dataform.folders.create
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.operations.get
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Code Owner
( roles/ dataform.codeOwner )
Full access to code resources.
dataform.commentThreads.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.*
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.*
dataform.folders.addContents
dataform.folders.create
dataform.folders.delete
dataform.folders.deleteTree
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.move
dataform.folders.queryContents
dataform.folders.setIamPolicy
dataform.folders.update
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.operations.get
dataform.operations.list
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform.repositories.delete
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform.repositories.move
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. repositories. setIamPolicy
dataform.repositories.update
dataform.workspaces.*
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform. workspaces. setIamPolicy
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Code Scheduler
Beta
( roles/ dataform.codeScheduler )
Access for scheduling workflows and releases.
dataform.releaseConfigs.create
dataform. workflowConfigs. create
Code Viewer
( roles/ dataform.codeViewer )
Read-only access to all code resources.
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform. repositories. computeAccessTokenStatus
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform.workspaces.list
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. searchFiles
resourcemanager.projects.get
resourcemanager.projects.list
Team Folder Commenter
Beta
( roles/ dataform.teamFolderCommenter )
View and comment access to a team folder and its contents.
dataform.commentThreads.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.*
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform. repositories. computeAccessTokenStatus
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform.workspaces.list
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. searchFiles
resourcemanager.projects.get
resourcemanager.projects.list
Team Folder Contributor
( roles/ dataform.teamFolderContributor )
Edit access to a team folder and its contents.
dataform.commentThreads.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.*
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.addContents
dataform.folders.create
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.operations.get
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform.teamFolders.update
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Team Folder Creator
( roles/ dataform.teamFolderCreator )
Access to create new team folders.
dataform.teamFolders.create
Team Folder Owner
( roles/ dataform.teamFolderOwner )
Full access to a team folder and its contents. Can share the team folder and its contents.
dataform.commentThreads.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.*
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.*
dataform.folders.addContents
dataform.folders.create
dataform.folders.delete
dataform.folders.deleteTree
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.move
dataform.folders.queryContents
dataform.folders.setIamPolicy
dataform.folders.update
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.operations.get
dataform.operations.list
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform.repositories.delete
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform.repositories.move
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. repositories. setIamPolicy
dataform.repositories.update
dataform.teamFolders.delete
dataform. teamFolders. deleteTree
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. teamFolders. setIamPolicy
dataform.teamFolders.update
dataform.workspaces.*
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform. workspaces. setIamPolicy
dataform.workspaces.writeFile
resourcemanager.projects.get
resourcemanager.projects.list
Team Folder Viewer
( roles/ dataform.teamFolderViewer )
View access to a team folder and its contents.
dataform.compilationResults.*
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.queryContents
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform. repositories. computeAccessTokenStatus
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform.workspaces.list
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. searchFiles
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Dataform Service Agent
( roles/ dataform.serviceAgent )
Gives permission for the Dataform API to access a secret from Secret Manager
Warning: Do not grant service agent roles to any principals except
service agents .
dataform. compilationResults. create
dataform. workflowInvocations. create
resourcemanager.projects.get
resourcemanager.projects.list
Custom Dataform roles
Custom roles can include any permissions that you specify. You can create
custom roles that include permissions to perform specific administrative
operations, like creating development workspaces or creating files and
directories within a development workspace. To create custom roles,
see Creating and managing custom roles .
Security considerations for Dataform permissions
Any user who has the dataform.repositories.create permission can run code
in BigQuery using the default Dataform service
agent and all permissions granted to that service agent. This includes
execution of Dataform workflows .
The dataform.repositories.create permission is included in the following
IAM roles:
BigQuery Admin ( roles/bigquery.admin )
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery Studio User ( roles/bigquery.studioUser )
BigQuery User ( roles/bigquery.user )
Code Creator ( roles/dataform.codeCreator )
Code Editor ( roles/dataform.codeEditor )
Code Owner ( roles/dataform.codeOwner )
Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser )
Dataform Admin ( roles/dataform.admin )
To restrict the data that a user, service agent, or service account can
read or write in BigQuery, you can grant granular
BigQuery IAM permissions to selected
BigQuery datasets or tables. For more information, see
Controlling access to datasets and
Controlling access to tables and views .
For more information about the default Dataform service agent
and the roles and permissions it requires, see
Grant Dataform required access .
View Dataform roles
Within the Google Cloud console, perform the following steps:
Go to the IAM & Admin > Roles page.
Go to Roles
In the Filter field, select Used in , type Dataform ,
and then press Enter .
Click one of the listed roles to view the permissions of the role in the
right pane.
For example, the Dataform Admin role has full access
to all Dataform resources.
For more information about granting a role on a project, see
Grant a role .
You can grant predefined or custom roles in this way.
Control access to an individual repository
To control access to Dataform with granular permissions,
you can set Dataform IAM roles on individual
repositories by using the Dataform API
repositories.setIamPolicy
request.
To set Dataform IAM roles on an individual
Dataform repository, follow these steps:
In the terminal, pass the Dataform API
repositories.setIamPolicy
request with an access policy .
In the policy, bind a user, group, domain, service agent, or service
account to a selected role in the following format:
{
"policy":
{
"bindings": [
{
"role": "roles/ ROLE ",
"members": [
" TYPE : IDENTIFIER ",
]
},
],
}
}
Replace the following:
ROLE : the Dataform
IAM role that you want to grant on the repository.
TYPE : user , group , domain , or serviceAccount .
IDENTIFIER : the user, group, domain, or service
account that you want to grant the role to.
In the IAM page, ensure that all users can view the full list
of Dataform repositories through a
Dataform role with the dataform.repositories.list permission .
In IAM, ensure that only users who require full access to all
Dataform repositories are granted the Dataform Admin role on all
repositories.
The following command passes the repositories.setIamPolicy Dataform API
request that grants the Dataform Editor role on the sales repository
to a single user:
curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.editor", "members": ["user:sasha@examplepetstore.com"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy"
Grant public access to a repository
You can grant public access to a Dataform repository by granting
IAM roles on the repository to the allAuthenticatedUsers
principal.
When you assign an IAM role to the allAuthenticatedUsers
principal, service agents, service accounts, and all users on the internet
who have authenticated with a Google Account are granted that role. This
includes accounts that aren't connected to a Google Workspace account
or Cloud Identity domain, such as personal Gmail accounts. Users
who aren't authenticated, such as anonymous visitors, aren't included. For
more information, see
All authenticated users .
For example, when you grant the Dataform Viewer role to
allAuthenticatedUsers on the sales repository, all service agents,
service accounts, and users on the internet who have authenticated with a
Google Account have read-only access to all sales code resources.
Caution: Granting administrator, edit, or execution level permissions
to allAuthenticatedUsers can allow bad actors to access your
data and run code. Grant only the minimal required permissions.
To grant public access to a Dataform repository, follow these
steps:
In the terminal, pass the Dataform API
repositories.setIamPolicy
request with an access policy .
In the policy, bind the allAuthenticatedUsers principal to a selected
role in the following format:
{
"policy":
{
"bindings": [
{
"role": "roles/ ROLE ",
"members": [
"allAuthenticatedUsers",
]
},
],
}
}
Replace ROLE with a Dataform
IAM role that you want to grant to all authenticated
users.
The following command passes the repositories.setIamPolicy Dataform API
request that grants the Dataform Viewer role on the sales repository
to allAuthenticatedUsers :
curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.viewer", "members": ["allAuthenticatedUsers"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy"
Prevent public access to repositories
To ensure that no access is granted to the public on any Dataform
repository, you can restrict the allAuthenticatedUsers principal in your
project.
To restrict allAuthenticatedUsers in your project, you can
set the iam.allowedPolicyMemberDomains policy ,
and remove allAuthenticatedUsers from the list of allowed_values .
When you restrict allAuthenticatedUsers in the iam.allowedPolicyMemberDomains
policy, the allAuthenticatedUsers principal can't be used in any
IAM policy in your project, which prevents granting public access
to all resources, including Dataform repositories.
For more information about the iam.allowedPolicyMemberDomains policy
and also instructions to set it, see
Restricting identities by domain .
Workforce Identity Federation in Dataform
Workforce Identity Federation
lets you use an external identity provider (IdP) to
authenticate and authorize users to Google Cloud services with
IAM.
Dataform supports Workforce Identity Federation with
no known limitations.
Control access to individual tables with IAM
This section shows you how to grant and revoke BigQuery
IAM roles
for individual Dataform tables and views.
When Dataform runs a table or view, it creates the resource
in BigQuery. During development in Dataform, you
can grant BigQuery roles to individual tables and views to
control their access in BigQuery after execution.
For more information about granting and revoking access to resources, see
Grant access to a resource .
Grant BigQuery roles to a table or view
You can grant BigQuery roles to a table or view in
Dataform by adding a post_operations block with the
GRANT DCL statement
to the .sqlx definition file of the selected table or view.
To grant BigQuery roles to a selected table or view, follow these
steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, expand the definitions/ directory.
Select the .sqlx definition file of the table or view that you want to
grant access to.
In the file, enter the following code snippet:
post_operations {
GRANT " ROLE_LIST "
ON " RESOURCE_TYPE " ${ self () }
TO " USER_LIST "
}
Replace the following:
ROLE_LIST : the BigQuery role or list of
comma-separated BigQuery roles that you want to grant.
RESOURCE_TYPE : TABLE or VIEW .
USER_LIST : the comma-separated list of users that the
role is granted to.
For a list of valid formats, see
user_list .
Optional: Click Format .
Run the table or view.
If you granted access on an incremental table, remove the GRANT statement
from the table definition file after the first execution.
The following code sample shows the
BigQuery Viewer role
granted on a table to a user:
config { type: "table" }
SELECT ...
post_operations {
GRANT `roles/bigquery.dataViewer`
ON TABLE ${self()}
TO "user:222larabrown@gmail.com"
}
Revoke BigQuery roles from a table or view
You can revoke BigQuery roles from a table or view by adding a
post_operations block with the
REVOKE DCL statement
to the .sqlx definition file of the selected table or view.
To revoke BigQuery roles from a selected table or view, follow
these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, expand the definitions/ directory.
Select the .sqlx definition file of the table or view that you want to
revoke access to.
In the post_operations block, enter the following REVOKE statement:
REVOKE " ROLE_LIST "
ON " RESOURCE_TYPE " ${ self () }
FROM " USER_LIST "
Replace the following:
ROLE_LIST : the BigQuery role or list of
comma-separated BigQuery roles that you want to revoke.
RESOURCE_TYPE : TABLE or VIEW .
USER_LIST : the comma-separated list of users that the
role is revoked from. For a list of valid formats, see
user_list .
To revoke the access granted in a GRANT statement in the file, replace the
GRANT statement with a REVOKE statement.
Warning: Removing the GRANT statement without adding the REVOKE statement
does not revoke access.
Optional: Click Format .
Run the table or view.
If you revoked access to an incremental table, remove the REVOKE statement
from the table definition file after the first execution.
The following code sample shows the
BigQuery Viewer role
revoked from a user on a table:
config { type: "table" }
SELECT ...
post_operations {
REVOKE `roles/bigquery.dataViewer`
ON TABLE ${self()}
FROM "user:222larabrown@gmail.com"
}
Collectively manage BigQuery roles for tables and views
To control BigQuery access to individual tables and views in a
single location, you can create a dedicated type: "operations" file with
GRANT and
REVOKE
DCL statements.
To manage BigQuery table access in a single type: "operations"
file, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, next to definitions/ , click the
More menu.
Click Create file .
In the Add a file path field, enter the name of the file followed by
.sqlx after definitions/ . For example, definitions/table-access.sqlx .
Filenames can only include numbers, letters, hyphens, and underscores.
Click Create file .
In the Files pane, expand the definitions/ directory, and select the
newly created file.
In the file, enter the following code snippet:
config { type : "operations" }
GRANT " ROLE_LIST "
ON RESOURCE_TYPE RESOURCE_NAME
TO " USER_LIST "
REVOKE " ROLE_LIST "
ON { "<var>" }} RESOURCE_TYPE RESOURCE_NAME
TO " USER_LIST "
Replace the following:
ROLE_LIST : the BigQuery role or list of
comma-separated BigQuery roles that you want to grant or
revoke.
RESOURCE_TYPE : TABLE or VIEW .
RESOURCE_NAME : the name of the table or view.
USER_LIST : the comma-separated list of users that the
role is granted to or revoked from. For a list of valid formats, see
user_list .
Add GRANT and REVOKE statements as needed.
To revoke access granted in a GRANT statement in the file, replace the
GRANT statement with a REVOKE statement.
Removing the GRANT statement without adding the REVOKE statement
does not revoke access.
Optional: Click Format .
Run the file after each update.
If you granted or revoked access on an incremental table, remove the
GRANT or REVOKE statement from the file after the first execution of
the statement.
Use the Config API to customize IAM behavior
You can use the
projects.locations.updateConfig Dataform API method
to customize IAM behavior and enhance security.
Warning: You must call this method for each location where you want to
enhance security. When the configuration is applied to a location, it affects
all the Dataform repositories in that location. To limit the
locations where Dataform resources can be created, see
Restricting resource locations .
Grant a specific role upon resource creation
When you set the setAuthenticatedUserAdmin field to true in the
projects.locations.repositories resource ,
Dataform automatically grants the user who creates the
repository the
Dataform Admin role
( roles/dataform.admin ) on that repository. In addition,
Dataform grants any user who creates a workspace in that
repository the Dataform Admin role on the new workspace.
You can use the creator_role field
(Preview)
in the
projects.locations.updateConfig method
to override this behavior. If setAuthenticatedUserAdmin is true and you
configure the creator_role field with a custom role, Dataform
grants the custom role instead of the default dataform.admin role.
Implement enhanced scheduling permissions
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To provide feedback or request support, contact
dataform-preview-support@google.com .
To require that users need explicit permissions to schedule
Dataform workflows, set the enable_project_checks_for_scheduling field to true in the
projects.locations.updateConfig method .
When you enable these checks for scheduling, the user needs the following
permissions:
To create a workflow configuration:
The dataform.workflowConfigs.create permission on the project, granted
by the
Code Scheduler role
( roles/dataform.codeScheduler ).
The dataform.repositories.scheduleWorkflow permission on the repository,
granted by the
Dataform Admin role
( roles/dataform.admin ).
To create a release configuration:
The dataform.releaseConfigs.create permission on the project, granted
by the
Code Scheduler role
( roles/dataform.codeScheduler ).
The dataform.repositories.scheduleRelease permission on the repository,
granted by the
Dataform Admin role
( roles/dataform.admin ).
Enable private workspaces
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To provide feedback or request support, contact
dataform-preview-support@google.com .
To restrict Dataform workspace access so that only the workspace
creator can read and write code in that workspace, set the
enable_private_workspace field to true in the
projects.locations.updateConfig method .
This restriction also applies to viewing generated artifacts, such as compiled
SQL, compilation errors, and run logs for the workspace's compilations or
workflow invocations.
This setting overrides standard IAM roles that grant workspace
access to other repository users.
What's next
To learn more about IAM, see
IAM overview .
To learn more about managing access to resources, see
Manage access to projects, folders, and organizations
To learn more about the key concepts of Workforce Identity Federation, see
Workforce Identity Federation .
To learn more about BigQuery IAM roles and
permissions, see Access control with IAM .
To learn more about granting granular permissions to BigQuery
datasets, see Controlling access to datasets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
