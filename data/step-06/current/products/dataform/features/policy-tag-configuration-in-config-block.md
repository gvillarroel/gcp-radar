---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.754Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Policy tag configuration in config block"
feature_slug: "policy-tag-configuration-in-config-block"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference"
keywords:
  - "policy"
  - "tag"
  - "configuration"
  - "in"
  - "config"
  - "block"
  - "dataform"
  - "supports"
---

# Policy tag configuration in config block

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Dataform supports configuring policy tags in the config block.

## Extended Definition

Dataform supports configuring policy tags in the config block.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)

## Supporting Pages

### "Create custom organization policy constraints \_|\_ Dataform \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field dataform.googleapis.com/CompilationResult resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.gitCommitish resource.releaseConfig resource.workspace dataform.googleapis.com/ReleaseConfig resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.cronSchedule resource.disabled resource.gitCommitish resource.name resource.releaseCompilationResult resource.timeZone dataform.googleapis.com/Repository resource.displayName resource.gitRemoteSettings.authenticationTokenSecretVersion resource.gitRemoteSettings.defaultBranch resource.gitRemoteSettings.sshAuthenticationConfig.hostPublicKey resource.gitRemoteSettings.sshAuthenticationConfig.userPrivateKeySecretVersion resource.gitRemoteSettings.url resource.kmsKeyName resource.name resource.npmrcEnvironmentVariablesSecretVersion resource.serviceAccount resource.setAuthenticatedUserAdmin resource.workspaceCompilationOverrides.defaultDatabase resource.workspaceCompilationOverrides.schemaSuffix resource.workspaceCompilationOverrides.tablePrefix dataform.googleapis.com/WorkflowConfig resource.cronSchedule resource.disabled resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.name resource.releaseConfig resource.timeZone dataform.googleapis.com/WorkflowInvocation resource.compilationResult resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.workflowConfig dataform.googleapis.com/Workspace resource.name What's next Learn more about custom constraints .
- Only allow configuration of a Git remote to connect using HTTPS to repositories in the Google organization on GitHub. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictGitRemote resourceTypes : - dataform.googleapis.com/Repository methodTypes : - CREATE - UPDATE condition : - resource.gitRemoteSettings.url == "" resource.gitRemoteSettings.url.startsWith('https://github.com/google/') actionType : ALLOW displayName : Only allow the https://github.com/google/ Git remote. description : Only allow configuration of a Git remote to connect using HTTPS to repositories in the Google organization on GitHub.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataform.googleapis.com/CompilationResult dataform.googleapis.com/ReleaseConfig dataform.googleapis.com/Repository dataform.googleapis.com/WorkflowConfig dataform.googleapis.com/WorkflowInvocation dataform.googleapis.com/Workspace To learn more about Organization Policy, see Custom organization policies .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. create workflow invocation create workflow invocation ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. get workflow invocation get workflow invocation ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.ReleaseConfig Represents a Dataform release configuration. create repository create repository ( request : typing .

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In a release configuration, you can configure the following compilation overrides: Google Cloud project Table prefix Schema suffix Value of a compilation variable You can create multiple release configurations in a Dataform repository, one for each stage of your development lifecycle, creating isolated repository compilation results.
- You can select the following workflow actions to be run: All actions Selected actions Actions with selected tags Then, during a scheduled execution of your workflow configuration, Dataform deploys your selection of actions from the applied compilation result to BigQuery.
- The following code sample shows the executionSetting variable passed to a Dataform API compilation request: { "gitCommitish": "staging", "codeCompilationConfig": { "vars": { "executionSetting": "staging" } } } Run a compilation result with compilation overrides To run the compilation result created by a compilationResults.create request, pass the compilation result ID returned by the compilationResults.create request in a workflowInvocations.create request.
- The following code sample shows a compilation result ID passed in a workflowInvocations.create request: { "compilationResult": "projects/my-project-name/locations/europe-west4/repositories/my-repository-name/compilationResults/7646b4ed-ac8e-447f-93cf-63c43249ff11" } Create a release configuration This section shows you how to create a release configuration in Dataform to configure templates of compilation settings, which you can run on a schedule.

### Dataform core reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows the myVariableName custom compilation variable set in workflow settings with the projectConfig.vars property, accessed in a SELECT statement in a SQLX file: config { type: "view" } SELECT ${when( dataform.projectConfig.vars.myVariableName === "myVariableValue", "myVariableName is set to myVariableValue!", "myVariableName is not set to myVariableValue!" )} For more information about overriding project configuration settings for individual compilation results, see the CodeCompilationConfig REST resource in Dataform API .
- A full identifier of a BigQuery policy tag includes the project name, location, and taxonomy, For example: "projects/1/locations/eu/taxonomies/2/policyTags/3" BigQuery supports one tag per column. columns IColumnsDescriptor A description of columns within the struct, object, or record. description string A description of the struct, object, or record.
- IActionConfig Defines Dataform tags and dependencies applied to a workflow action. tags string[] A list of user-defined tags with which the action should be labeled. dependencies Resolvable Resolvable[] Dependencies of the action. disabled boolean If set to true, this action won't be run.
- IColumnsDescriptor Describes columns in a table. { [name]: string IRecordDescriptor } IDeclarationConfig Configuration options for declaration action types. columns IColumnsDescriptor A description of columns within the table. database string The database (Google Cloud project ID) in which to create the source table exists. description string A description of the table. schema string The schema (BigQuery dataset) in which the source table exists.

