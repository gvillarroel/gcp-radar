---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.402Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Policy tag configuration in config block"
feature_slug: "policy-tag-configuration-in-config-block"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
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
Coverage: LOW

## Step 02 Summary

Dataform supports configuring policy tags in the config block.

## Extended Definition

Dataform supports configuring policy tags in the config block.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### "Create custom organization policy constraints \_|\_ Dataform \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Field dataform.googleapis.com/CompilationResult resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.gitCommitish resource.releaseConfig resource.workspace dataform.googleapis.com/ReleaseConfig resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.cronSchedule resource.disabled resource.gitCommitish resource.name resource.releaseCompilationResult resource.timeZone dataform.googleapis.com/Repository resource.displayName resource.gitRemoteSettings.authenticationTokenSecretVersion resource.gitRemoteSettings.defaultBranch resource.gitRemoteSettings.sshAuthenticationConfig.hostPublicKey resource.gitRemoteSettings.sshAuthenticationConfig.userPrivateKeySecretVersion resource.gitRemoteSettings.url resource.kmsKeyName resource.name resource.npmrcEnvironmentVariablesSecretVersion resource.serviceAccount resource.setAuthenticatedUserAdmin resource.workspaceCompilationOverrides.defaultDatabase resource.workspaceCompilationOverrides.schemaSuffix resource.workspaceCompilationOverrides.tablePrefix dataform.googleapis.com/WorkflowConfig resource.cronSchedule resource.disabled resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.name resource.releaseConfig resource.timeZone dataform.googleapis.com/WorkflowInvocation resource.compilationResult resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.workflowConfig dataform.googleapis.com/Workspace resource.name What's next Learn more about custom constraints .
- Only allow configuration of a Git remote to connect using HTTPS to repositories in the Google organization on GitHub. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictGitRemote resourceTypes : - dataform.googleapis.com/Repository methodTypes : - CREATE - UPDATE condition : - resource.gitRemoteSettings.url == "" resource.gitRemoteSettings.url.startsWith('https://github.com/google/') actionType : ALLOW displayName : Only allow the https://github.com/google/ Git remote. description : Only allow configuration of a Git remote to connect using HTTPS to repositories in the Google organization on GitHub.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataform.googleapis.com/CompilationResult dataform.googleapis.com/ReleaseConfig dataform.googleapis.com/Repository dataform.googleapis.com/WorkflowConfig dataform.googleapis.com/WorkflowInvocation dataform.googleapis.com/Workspace To learn more about Organization Policy, see Custom organization policies .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. create workflow invocation create workflow invocation ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. get workflow invocation get workflow invocation ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.ReleaseConfig Represents a Dataform release configuration. create repository create repository ( request : typing .

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. create workflow invocation create workflow invocation ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. get workflow invocation get workflow invocation ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.ReleaseConfig Represents a Dataform release configuration. create repository create repository ( request : typing .

