---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.736Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "User credential authorization for runs and scheduling"
feature_slug: "user-credential-authorization-for-runs-and-scheduling"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/schedule-runs"
  - "https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/trigger-execution"
keywords:
  - "user"
  - "credential"
  - "authorization"
  - "for"
  - "runs"
  - "and"
  - "scheduling"
  - "this"
---

# User credential authorization for runs and scheduling

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

This feature lets Dataform use Google Account user credentials to authorize pipeline creation, scheduling, execution, and workflow configuration creation.

## Extended Definition

This feature lets Dataform use Google Account user credentials to authorize pipeline creation, scheduling, execution, and workflow configuration creation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution)

## Supporting Pages

### Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Account user credentials ( Preview ) Google Account user credentials are the default authorization method for manual, non-scheduled workflow configuration creation and executions.
- Launch a workflow config after recompiling the release config WORKFLOW CONFIG RESOURCE="projects/${ PROJECT ID}/locations/${ DATAFORM LOCATION}/repositories/${ DATAFORM REPO ID}/workflowConfigs/${ WORKFLOW CONFIG ID}" CREATE WORKFLOW PAYLOAD="{\"workflowConfig\": \"$$WORKFLOW CONFIG RESOURCE\"}" WORKFLOW INVOCATIONS API="https://dataform.googleapis.com/v1/projects/${ PROJECT ID}/locations/${ DATAFORM LOCATION}/repositories/${ DATAFORM REPO ID}/workflowInvocations" curl --fail-with-body -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d "$$CREATE WORKFLOW PAYLOAD" \ "$$WORKFLOW INVOCATIONS API" echo "Successfully created a new workflow invocation." Define substitution variables that can be set in the trigger substitutions : DATAFORM LOCATION : 'us-central1' # Default, change if needed DATAFORM REPO ID : '' # Required: Set this in the trigger RELEASE CONFIG ID : '' # Required: Set this in the trigger WORKFLOW CONFIG ID : '' # Required: Set this in the trigger PROJECT ID : ${PROJECT ID} # Automatically uses the build's Project ID options : logging : CLOUD LOGGING ONLY Create the Cloud Build trigger To create a trigger that runs your build configuration when code is pushed to your repository, do the following: In the Google Cloud console, open the Cloud Build Triggers page.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on repositories Composer Worker ( roles/composer.worker ) on the Cloud Composer environment's service account Automate runs with Cloud Build: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the custom service account Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To authenticate the resource with your Google Account user credentials, you must manually grant permission for BigQuery pipelines to get the access token for your Google Account and access the source data on your behalf.

### Quickstart: Schedule production runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to perform all tasks in this quickstart, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on the repository Service Account User ( roles/iam.serviceAccountUser ) on the custom service account Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Using Google Account user account credentials is discouraged for scheduled runs.
- Important: To ensure that Dataform runs the latest compilation result in the corresponding release configuration, keep a minimum 1 hour break between the compilation result creation time and the scheduled run time.
- Every day at 4 PM UTC+1, Dataform compiles the quickstart-production repository and applies the compilation settings configured in this release configuration to create production compilation results.

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Required roles for Dataform service agents, custom service accounts, and Google Accounts Default Dataform service agents, custom service accounts, and Google Account user credentials ( Preview ) used to authenticate in Dataform require the following BigQuery IAM roles to be able to run workflows in BigQuery: BigQuery Data Editor ( roles/bigquery.dataEditor ) on projects to which Dataform needs both read and write access.
- The permissions in the Code Creator let you create and list code in Dataform, and access only the code that you created and code that was explicitly shared with you. dataform.commentThreads.get dataform.commentThreads.list dataform.comments.get dataform.comments.list dataform.folders.create dataform.locations. dataform.locations.get dataform.locations.list dataform.repositories.create dataform.repositories.list resourcemanager.projects.get resourcemanager.projects.list Code Editor ( roles/ dataform.codeEditor ) Edit access code resources. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.addContents dataform.folders.create dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform.operations.get dataform.repositories.commit dataform. repositories. computeAccessTokenStatus dataform.repositories.create dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform.workspaces.commit dataform.workspaces.create dataform.workspaces.delete dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform. workspaces. installNpmPackages dataform.workspaces.list dataform. workspaces. makeDirectory dataform. workspaces. moveDirectory dataform.workspaces.moveFile dataform.workspaces.pull dataform.workspaces.push dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. removeDirectory dataform.workspaces.removeFile dataform.workspaces.reset dataform. workspaces. searchFiles dataform.workspaces.writeFile resourcemanager.projects.get resourcemanager.projects.list Code Owner ( roles/ dataform.codeOwner ) Full access to code resources. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders. dataform.folders.addContents dataform.folders.create dataform.folders.delete dataform.folders.deleteTree dataform.folders.get dataform.folders.getIamPolicy dataform.folders.move dataform.folders.queryContents dataform.folders.setIamPolicy dataform.folders.update dataform.locations. dataform.locations.get dataform.locations.list dataform.operations.get dataform.operations.list dataform.repositories.commit dataform. repositories. computeAccessTokenStatus dataform.repositories.create dataform.repositories.delete dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform.repositories.move dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform. repositories. setIamPolicy dataform.repositories.update dataform.workspaces. dataform.workspaces.commit dataform.workspaces.create dataform.workspaces.delete dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform. workspaces. installNpmPackages dataform.workspaces.list dataform. workspaces. makeDirectory dataform. workspaces. moveDirectory dataform.workspaces.moveFile dataform.workspaces.pull dataform.workspaces.push dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. removeDirectory dataform.workspaces.removeFile dataform.workspaces.reset dataform. workspaces. searchFiles dataform. workspaces. setIamPolicy dataform.workspaces.writeFile resourcemanager.projects.get resourcemanager.projects.list Code Scheduler Beta ( roles/ dataform.codeScheduler ) Access for scheduling workflows and releases. dataform.releaseConfigs.create dataform. workflowConfigs. create Code Viewer ( roles/ dataform.codeViewer ) Read-only access to all code resources. dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform. repositories. computeAccessTokenStatus dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform.workspaces.list dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. searchFiles resourcemanager.projects.get resourcemanager.projects.list Team Folder Commenter Beta ( roles/ dataform.teamFolderCommenter ) View and comment access to a team folder and its contents. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform. repositories. computeAccessTokenStatus dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform.teamFolders.get dataform. teamFolders. getIamPolicy dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform.workspaces.list dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. searchFiles resourcemanager.projects.get resourcemanager.projects.list Team Folder Contributor ( roles/ dataform.teamFolderContributor ) Edit access to a team folder and its contents. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.addContents dataform.folders.create dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform.operations.get dataform.repositories.commit dataform. repositories. computeAccessTokenStatus dataform.repositories.create dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform.teamFolders.get dataform. teamFolders. getIamPolicy dataform.teamFolders.update dataform.workspaces.commit dataform.workspaces.create dataform.workspaces.delete dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform. workspaces. installNpmPackages dataform.workspaces.list dataform. workspaces. makeDirectory dataform. workspaces. moveDirectory dataform.workspaces.moveFile dataform.workspaces.pull dataform.workspaces.push dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. removeDirectory dataform.workspaces.removeFile dataform.workspaces.reset dataform. workspaces. searchFiles dataform.workspaces.writeFile resourcemanager.projects.get resourcemanager.projects.list Team Folder Creator ( roles/ dataform.teamFolderCreator ) Access to create new team folders. dataform.teamFolders.create Team Folder Owner ( roles/ dataform.teamFolderOwner ) Full access to a team folder and its contents.
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Viewer role on the sales repository to allAuthenticatedUsers : curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.viewer", "members": ["allAuthenticatedUsers"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Prevent public access to repositories To ensure that no access is granted to the public on any Dataform repository, you can restrict the allAuthenticatedUsers principal in your project.
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Editor role on the sales repository to a single user: curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.editor", "members": ["user:sasha@examplepetstore.com"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Grant public access to a repository You can grant public access to a Dataform repository by granting IAM roles on the repository to the allAuthenticatedUsers principal.

### Manually trigger runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To authenticate the resource with your Google Account user credentials, you must manually grant permission for BigQuery pipelines to get the access token for your Google Account and access the source data on your behalf.
- Required roles To get the permissions that you need to manually trigger a run, ask your administrator to grant you the following IAM roles: Dataform Editor ( roles/dataform.editor ) on the Dataform repository BigQuery Job User ( roles/bigquery.jobUser ) on the project To use a custom service account for execution: Service Account User ( roles/iam.serviceAccountUser ) on the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Data analytics Dataform Guides Send feedback Manually trigger runs Stay organized with collections Save and categorize content based on your preferences.
- What's next To learn how Dataform runs incremental tables and how to configure an incremental table, see Configure an incremental table .

