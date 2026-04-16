---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.746Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Terraform repository SSH authentication and service account fields"
feature_slug: "terraform-repository-ssh-authentication-and-service-account-fields"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/connect-repository"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1"
  - "https://docs.cloud.google.com/dataform/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/dataform/docs/troubleshooting"
keywords:
  - "terraform"
  - "repository"
  - "ssh"
  - "authentication"
  - "and"
  - "account"
  - "fields"
  - "this"
---

# Terraform repository SSH authentication and service account fields

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

This feature adds ssh_authentication_config and service_account fields to the google_dataform_repository Terraform resource.

## Extended Definition

This feature adds ssh_authentication_config and service_account fields to the google_dataform_repository Terraform resource.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1)
- [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dataform/docs/troubleshooting](https://docs.cloud.google.com/dataform/docs/troubleshooting)

## Supporting Pages

### "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists supported Git providers and connection methods that are available for their repositories: Git provider Connection method Azure DevOps Services SSH Bitbucket SSH GitHub SSH or HTTPS GitLab SSH or HTTPS Important: To connect your remote Git repository to Dataform, verify that your Git host has a public IP address .
- Connect a remote repository through SSH To connect a remote repository through SSH, you need to generate an SSH key and a Secret Manager secret.
- The value that you copy must be in the following format: ALGORITHM BASE64 KEY VALUE For example: ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Hr1oTWqNqOlzGJOfGJ4NakVyIzf1rXYd4d7wo6jBlkLvCA4odBlL0mDUyZ0/QUfTTqeu+tm22gOsv+VrVTMk6vwRU75gY/y9ut5Mb3bR5BV58dKXyq9A9UeB5Cakehn5Zgm6x1mKoVyf+FFn26iYqXJRgzIZZcZ5V6hrE0Qg39kZm4az48o0AUbf6Sp4SLdvnuMa2sVNwHBboS7EJkm57XQPVU3/QpyNLHbWDdzwtrlS+ez30S3AdYhLKEOxAG8weOnyrtLJAUen9mTkol8oII1edf7mWWbWVf0nBmly21+nZcmCTISQBtdcyPaEno7fFQMDD26/s0lfKob4Kw8H Verify this key is still up-to-date with Azure DevOps Services.
- Azure DevOps Services To retrieve the Azure DevOps Services public host key, run the following command in the terminal: ssh-keyscan -t rsa ssh.dev.azure.com Copy one of the outputted keys, omitting ssh.dev.azure.com from the beginning of the line.

### "Package com.google.cloud.dataform.v1 (0.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1)
- Source ID: `site-java-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ssh Authentication Config Configures fields for performing SSH authentication. com. google. cloud. dataform. v1.
- Builder Configures fields for performing SSH authentication. com. google. cloud. dataform. v1.
- This class provides the ability to make remote calls to the backing service through method Settings Classes Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Create custom organization policy constraints \_|\_ Dataform \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field dataform.googleapis.com/CompilationResult resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.gitCommitish resource.releaseConfig resource.workspace dataform.googleapis.com/ReleaseConfig resource.codeCompilationConfig.assertionSchema resource.codeCompilationConfig.builtinAssertionNamePrefix resource.codeCompilationConfig.databaseSuffix resource.codeCompilationConfig.defaultDatabase resource.codeCompilationConfig.defaultLocation resource.codeCompilationConfig.defaultNotebookRuntimeOptions.aiPlatformNotebookRuntimeTemplate resource.codeCompilationConfig.defaultNotebookRuntimeOptions.gcsOutputBucket resource.codeCompilationConfig.defaultSchema resource.codeCompilationConfig.schemaSuffix resource.codeCompilationConfig.tablePrefix resource.codeCompilationConfig.vars resource.cronSchedule resource.disabled resource.gitCommitish resource.name resource.releaseCompilationResult resource.timeZone dataform.googleapis.com/Repository resource.displayName resource.gitRemoteSettings.authenticationTokenSecretVersion resource.gitRemoteSettings.defaultBranch resource.gitRemoteSettings.sshAuthenticationConfig.hostPublicKey resource.gitRemoteSettings.sshAuthenticationConfig.userPrivateKeySecretVersion resource.gitRemoteSettings.url resource.kmsKeyName resource.name resource.npmrcEnvironmentVariablesSecretVersion resource.serviceAccount resource.setAuthenticatedUserAdmin resource.workspaceCompilationOverrides.defaultDatabase resource.workspaceCompilationOverrides.schemaSuffix resource.workspaceCompilationOverrides.tablePrefix dataform.googleapis.com/WorkflowConfig resource.cronSchedule resource.disabled resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.name resource.releaseConfig resource.timeZone dataform.googleapis.com/WorkflowInvocation resource.compilationResult resource.invocationConfig.fullyRefreshIncrementalTablesEnabled resource.invocationConfig.includedTags resource.invocationConfig.includedTargets.database resource.invocationConfig.includedTargets.name resource.invocationConfig.includedTargets.schema resource.invocationConfig.queryPriority resource.invocationConfig.serviceAccount resource.invocationConfig.transitiveDependenciesIncluded resource.invocationConfig.transitiveDependentsIncluded resource.workflowConfig dataform.googleapis.com/Workspace resource.name What's next Learn more about custom constraints .
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataform.googleapis.com/CompilationResult dataform.googleapis.com/ReleaseConfig dataform.googleapis.com/Repository dataform.googleapis.com/WorkflowConfig dataform.googleapis.com/WorkflowInvocation dataform.googleapis.com/Workspace To learn more about Organization Policy, see Custom organization policies .
- The output is the following: Operation denied by custom org policies: ["customConstraints/custom.restrictRepositoryLocation": "All resources must be created in the us-central1 region."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

### Troubleshoot Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/troubleshooting](https://docs.cloud.google.com/dataform/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access token for a remote repository is rejected The following error occurs when your authentication token for a connected third-party repository does not have access to that repository: The access token for remote repository REPOSITORY NAME was rejected To resolve this error, check required permissions in your Git provider and update the Secret Manager authentication token accordingly.
- Also, validate that the authentication token or private key is correct and has the required permissions to access the repository.
- To resolve this issue, do one of the following: Click Enter manually and enter the service account ID.
- Failure to resolve workflow settings.yaml The following error occurs when you initialize a Dataform workspace, but the initialization process fails to install all packages: Uncaught Error: Failed to resolve workflow settings.yaml To resolve this error, in your workspace, open workflow settings.yaml and click Install packages . git+ package targets are not supported The following error occurs when you define packages in package.json with targets prefixed with git+ : 'git+' prefixed package targets are not currently supported.

