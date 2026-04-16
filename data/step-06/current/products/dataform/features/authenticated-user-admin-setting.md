---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.749Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Authenticated user admin setting"
feature_slug: "authenticated-user-admin-setting"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow"
  - "https://docs.cloud.google.com/dataform/docs/manage-repository"
keywords:
  - "authenticated"
  - "user"
  - "admin"
  - "setting"
  - "the"
  - "adds"
  - "set"
  - "field"
---

# Authenticated user admin setting

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

The authenticated user admin setting adds the set_authenticated_user_admin field to the Dataform Repository resource.

## Extended Definition

The authenticated user admin setting adds the set_authenticated_user_admin field to the Dataform Repository resource.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
- [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)

## Supporting Pages

### "Create custom organization policy constraints \_|\_ Dataform \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field dataform.googleapis.com/CompilationResult resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.gitCommitish resource.releaseConfig resource.workspace dataform.googleapis.com/ReleaseConfig resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.cronSchedule resource.disabled resource.gitCommitish resource.name resource.releaseCompilationResult resource.timeZone dataform.googleapis.com/Repository resource.displayName resource.gitRemoteSettings.authenticationTokenSecretVersion resource.gitRemoteSettings.defaultBranch resource.gitRemoteSettings.sshAuthenticationConfig.hostPublicKey resource.gitRemoteSettings.sshAuthenticationConfig.userPrivateKeySecretVersion resource.gitRemoteSettings.url resource.kmsKeyName resource.name resource.npmrcEnvironmentVariablesSecretVersion resource.serviceAccount resource.setAuthenticatedUserAdmin resource.workspaceCompilationOverrides.defaultDatabase resource.workspaceCompilationOverrides.schemaSuffix resource.workspaceCompilationOverrides.tablePrefix dataform.googleapis.com/WorkflowConfig resource.cronSchedule resource.disabled resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.name resource.releaseConfig resource.timeZone dataform.googleapis.com/WorkflowInvocation resource.compilationResult resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.workflowConfig dataform.googleapis.com/Workspace resource.name What's next Learn more about custom constraints .
- Only allow configuration of a Git remote to connect using HTTPS to repositories in the Google organization on GitHub. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictGitRemote resourceTypes : - dataform.googleapis.com/Repository methodTypes : - CREATE - UPDATE condition : - resource.gitRemoteSettings.url == "" resource.gitRemoteSettings.url.startsWith('https://github.com/google/') actionType : ALLOW displayName : Only allow the https://github.com/google/ Git remote. description : Only allow configuration of a Git remote to connect using HTTPS to repositories in the Google organization on GitHub.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Grant a specific role upon resource creation When you set the setAuthenticatedUserAdmin field to true in the projects.locations.repositories resource , Dataform automatically grants the user who creates the repository the Dataform Admin role ( roles/dataform.admin ) on that repository.
- If setAuthenticatedUserAdmin is true and you configure the creator role field with a custom role, Dataform grants the custom role instead of the default dataform.admin role.
- The dataform.repositories.create permission is included in the following IAM roles: BigQuery Admin ( roles/bigquery.admin ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Studio User ( roles/bigquery.studioUser ) BigQuery User ( roles/bigquery.user ) Code Creator ( roles/dataform.codeCreator ) Code Editor ( roles/dataform.codeEditor ) Code Owner ( roles/dataform.codeOwner ) Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) Dataform Admin ( roles/dataform.admin ) To restrict the data that a user, service agent, or service account can read or write in BigQuery, you can grant granular BigQuery IAM permissions to selected BigQuery datasets or tables.
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Viewer role on the sales repository to allAuthenticatedUsers : curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.viewer", "members": ["allAuthenticatedUsers"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Prevent public access to repositories To ensure that no access is granted to the public on any Dataform repository, you can restrict the allAuthenticatedUsers principal in your project.

### "Quickstart: Create and run a workflow \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces Query parameter : workspaceId= WORKSPACE ID curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d "{}" \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces?workspaceId= WORKSPACE ID " To initialize your workspace with the necessary configuration, create a local file named workflow settings.yaml and paste the following configuration: defaultProject : PROJECT ID defaultDataset : dataform dataformCoreVersion : CORE VERSION In your terminal, run the following command to encode the file content into a single continuous string: base64 -w 0 workflow settings.yaml Copy the resulting output string to use in the SETTINGS DEFINITION field in your JSON request body.
- Enable the APIs Required roles To get the permissions that you need to perform all the tasks in this quickstart, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on the project or repository BigQuery Data Editor ( roles/bigquery.dataEditor ) on the project or specific datasets BigQuery Job User ( roles/bigquery.jobUser ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{ "path": "workflow settings.yaml", "contents": " SETTINGS DEFINITION " }' \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile" Replace the following: CORE VERSION : the latest stable (non-beta) version of Dataform core, for example, 3.0.43 .
- You can override the default settings in the workflow settings file to best suit your needs, but it is not a requirement to deploy workflows to BigQuery.

### Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Note: Dataform defaults to using the authenticated Google Cloud user's email address for the commit author, but the Dataform API allows setting a custom email address for the commit author.
- The following code sample shows a workflow settings.yaml file with workflow-level defaults for BigLake Iceberg tables in BigQuery: defaultProject : "defaultProject" defaultDataset : "defaultDataset" defaultLocation : "us-central1" defaultIcebergConfig : bucketName : "wsDefaultBucketName" tableFolderRoot : "wsDefaultTableFolderRoot" tableFolderSubpath : "wsDefaultTableFolderSubpath" You can access these fields in your Dataform code as properties of the ProjectConfig object: dataform.ProjectConfig.defaultIcebergConfig.bucketName dataform.ProjectConfig.defaultIcebergConfig.tableFolderRoot dataform.ProjectConfig.defaultIcebergConfig.tableFolderSubpath For more information, see Create BigLake tables for Apache Iceberg in BigQuery and the iceberg block properties .
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Configure Dataform settings and manage the location of the Dataform core package: Dataform Admin ( roles/dataform.admin ) on repositories.
- To configure workflow-level defaults for the tables, add the defaultIcebergConfig block with the following fields to your workflow settings.yaml file: bucketName : Optional.

