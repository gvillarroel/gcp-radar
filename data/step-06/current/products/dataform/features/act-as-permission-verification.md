---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.733Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Act-as permission verification"
feature_slug: "act-as-permission-verification"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/strict-act-as-mode"
  - "https://docs.cloud.google.com/dataform/docs/best-practices-repositories"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
keywords:
  - "act"
  - "as"
  - "permission"
  - "verification"
  - "helps"
  - "users"
  - "identify"
  - "and"
---

# Act-as permission verification

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Act-as permission verification helps users identify and resolve iam.serviceAccounts.actAs permission issues in Dataform using Cloud Logging.

## Extended Definition

Act-as permission verification helps users identify and resolve iam.serviceAccounts.actAs permission issues in Dataform using Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)

## Supporting Pages

### Use strict act-as mode \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: For existing repositories, we recommend enabling strict act-as mode, as this helps to ensure a more secure and predictable permissions model for your Dataform projects.
- You should review these logs regularly to identify and grant any missing iam.serviceAccounts.actAs permissions.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Service Account User ( roles/iam.serviceAccountUser ) on the custom service account View logs in Logging: Logs Viewer ( roles/logging.viewer ) on the project Grant IAM roles to users or service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Verify act-as permissions for the effective service account To ensure your Dataform workflows run securely and without interruption, it's important to verify the act-as permissions on the service accounts they use.

### Best practices for repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- The following structure of subdirectories in the definitions directory reflects the key stages of a workflow: sources Data source declarations and basic transformation of source data—for example, filtering. intermediate Tables and actions that read from sources and transform data before you use the transformed data to define outputs tables.
- Best practices for repository size Repository size impacts multiple aspects of development in Dataform, such as the following: Collaboration Codebase readability Development processes Workflow compilation Workflow execution Dataform enforces API quotas and limits on compilation resources .
- Overview of repository size This section helps you understand how repository size impacts workflow development and Dataform compilation resources usage, and how to estimate the compilation resources usage of your repository.
- Some areas of a large workflow in a single repository might require custom permissions or processes, such as scheduling, that are different from the permissions and processes applied to the rest of the workflow.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- QueryWorkflowInvocationActionsRequest ( name="name value", ) Make the request page result = client. query workflow invocation actions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.QueryWorkflowInvocationActionsRequest , dict]] The request object.
- QueryCompilationResultActionsRequest ( name="name value", ) Make the request page result = client. query compilation result actions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.QueryCompilationResultActionsRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DataformTransport,Callable[..., DataformTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Important: We recommend enabling strict act-as mode on existing repositories, as this helps to ensure a more secure and predictable permissions model for your Dataform projects.
- For automatic repository releases and automatic workflow runs, grant the default Dataform service agent the iam.serviceAccounts.actAs permission on the effective service account .
- Caution: Granting administrator, edit, or execution level permissions to allAuthenticatedUsers can allow bad actors to access your data and run code.
- The permissions in the Code Creator let you create and list code in Dataform, and access only the code that you created and code that was explicitly shared with you. dataform.commentThreads.get dataform.commentThreads.list dataform.comments.get dataform.comments.list dataform.folders.create dataform.locations. dataform.locations.get dataform.locations.list dataform.repositories.create dataform.repositories.list resourcemanager.projects.get resourcemanager.projects.list Code Editor ( roles/ dataform.codeEditor ) Edit access code resources. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.addContents dataform.folders.create dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform.operations.get dataform.repositories.commit dataform. repositories. computeAccessTokenStatus dataform.repositories.create dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform.workspaces.commit dataform.workspaces.create dataform.workspaces.delete dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform. workspaces. installNpmPackages dataform.workspaces.list dataform. workspaces. makeDirectory dataform. workspaces. moveDirectory dataform.workspaces.moveFile dataform.workspaces.pull dataform.workspaces.push dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. removeDirectory dataform.workspaces.removeFile dataform.workspaces.reset dataform. workspaces. searchFiles dataform.workspaces.writeFile resourcemanager.projects.get resourcemanager.projects.list Code Owner ( roles/ dataform.codeOwner ) Full access to code resources. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders. dataform.folders.addContents dataform.folders.create dataform.folders.delete dataform.folders.deleteTree dataform.folders.get dataform.folders.getIamPolicy dataform.folders.move dataform.folders.queryContents dataform.folders.setIamPolicy dataform.folders.update dataform.locations. dataform.locations.get dataform.locations.list dataform.operations.get dataform.operations.list dataform.repositories.commit dataform. repositories. computeAccessTokenStatus dataform.repositories.create dataform.repositories.delete dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform.repositories.move dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform. repositories. setIamPolicy dataform.repositories.update dataform.workspaces. dataform.workspaces.commit dataform.workspaces.create dataform.workspaces.delete dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform. workspaces. installNpmPackages dataform.workspaces.list dataform. workspaces. makeDirectory dataform. workspaces. moveDirectory dataform.workspaces.moveFile dataform.workspaces.pull dataform.workspaces.push dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. removeDirectory dataform.workspaces.removeFile dataform.workspaces.reset dataform. workspaces. searchFiles dataform. workspaces. setIamPolicy dataform.workspaces.writeFile resourcemanager.projects.get resourcemanager.projects.list Code Scheduler Beta ( roles/ dataform.codeScheduler ) Access for scheduling workflows and releases. dataform.releaseConfigs.create dataform. workflowConfigs. create Code Viewer ( roles/ dataform.codeViewer ) Read-only access to all code resources. dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform. repositories. computeAccessTokenStatus dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform.workspaces.list dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. searchFiles resourcemanager.projects.get resourcemanager.projects.list Team Folder Commenter Beta ( roles/ dataform.teamFolderCommenter ) View and comment access to a team folder and its contents. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform. repositories. computeAccessTokenStatus dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform.teamFolders.get dataform. teamFolders. getIamPolicy dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform.workspaces.list dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. searchFiles resourcemanager.projects.get resourcemanager.projects.list Team Folder Contributor ( roles/ dataform.teamFolderContributor ) Edit access to a team folder and its contents. dataform.commentThreads. dataform.commentThreads.create dataform.commentThreads.delete dataform.commentThreads.get dataform.commentThreads.list dataform.commentThreads.update dataform.comments. dataform.comments.create dataform.comments.delete dataform.comments.get dataform.comments.list dataform.comments.update dataform.compilationResults. dataform. compilationResults. create dataform. compilationResults. get dataform. compilationResults. list dataform. compilationResults. query dataform.folders.addContents dataform.folders.create dataform.folders.get dataform.folders.getIamPolicy dataform.folders.queryContents dataform.locations. dataform.locations.get dataform.locations.list dataform.operations.get dataform.repositories.commit dataform. repositories. computeAccessTokenStatus dataform.repositories.create dataform. repositories. fetchHistory dataform. repositories. fetchRemoteBranches dataform.repositories.get dataform. repositories. getIamPolicy dataform.repositories.list dataform. repositories. queryDirectoryContents dataform.repositories.readFile dataform.teamFolders.get dataform. teamFolders. getIamPolicy dataform.teamFolders.update dataform.workspaces.commit dataform.workspaces.create dataform.workspaces.delete dataform. workspaces. fetchFileDiff dataform. workspaces. fetchFileGitStatuses dataform. workspaces. fetchGitAheadBehind dataform.workspaces.get dataform. workspaces. getIamPolicy dataform. workspaces. installNpmPackages dataform.workspaces.list dataform. workspaces. makeDirectory dataform. workspaces. moveDirectory dataform.workspaces.moveFile dataform.workspaces.pull dataform.workspaces.push dataform. workspaces. queryDirectoryContents dataform.workspaces.readFile dataform. workspaces. removeDirectory dataform.workspaces.removeFile dataform.workspaces.reset dataform. workspaces. searchFiles dataform.workspaces.writeFile resourcemanager.projects.get resourcemanager.projects.list Team Folder Creator ( roles/ dataform.teamFolderCreator ) Access to create new team folders. dataform.teamFolders.create Team Folder Owner ( roles/ dataform.teamFolderOwner ) Full access to a team folder and its contents.

