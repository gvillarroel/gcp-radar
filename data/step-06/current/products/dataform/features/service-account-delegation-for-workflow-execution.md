---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.747Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Service account delegation for workflow execution"
feature_slug: "service-account-delegation-for-workflow-execution"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow"
keywords:
  - "account"
  - "delegation"
  - "for"
  - "workflow"
  - "execution"
  - "lets"
  - "dataform"
  - "configure"
---

# Service account delegation for workflow execution

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Service account delegation lets Dataform configure delegated service accounts for workflow execution at the repository or workflow configuration level.

## Extended Definition

Service account delegation lets Dataform configure delegated service accounts for workflow execution at the repository or workflow configuration level.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)

## Supporting Pages

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ways to configure Dataform execution Dataform provides the following options for configuring execution: Manual execution in a workspace You can manually trigger the instant execution of a workflow in a Dataform workspace, outside of any schedule.
- Dataform release configurations and workflow configurations let you configure compilation and schedule executions within Dataform, without the need to rely on additional services.
- Introduction to the workflow lifecycle in Dataform This section describes the workflow lifecycle in Dataform and ways to configure compilation and execution within Dataform.
- The following default settings are set in workflow settings.yaml : defaultProject : analytics defaultDataset : dataform The following workspace compilation overrides create a dynamic table prefix and schema suffix for each workspace in the repository: Google Cloud Project ID : analytics dev Table prefix : ${workspaceName} Schema suffix : ${workspaceName} When Sasha manually triggers execution in the Sasha workspace, Dataform runs its content with the following settings: Google Cloud project: analytics dev Schema: dataform sasha Table names: sasha name , for example, sasha orders When Kai manually triggers execution in the Kai workspace, Dataform runs its content with the following settings: Google Cloud project: analytics dev Schema: dataform kai Tables names: kai name , for example, kai orders Create workspace compilation overrides To create Dataform workspace compilation overrides, follow these steps: In your repository, go to Settings .

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About custom service accounts and Dataform service agents You can configure custom service accounts to run workflows on your behalf in the following ways: At the repository level, to run all the workflows in a given repository.
- This lets the default Dataform service agent start new automatic workflow runs for workflow configurations that are run by the custom service account.
- This lets Dataform run your workflows using the permissions defined on your custom service account instead of on the default service agent's account.
- These permissions let the default Dataform service agent initiate workflow executions impersonating the custom service account.

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataform offers a web environment for the following activities: Workflow development Connection with GitHub, GitLab, Azure DevOps Services, and Bitbucket Continuous integration and continuous deployment Workflow execution The following sections describe the main features of Dataform.
- To debug errors, you can monitor runs in the following ways: View detailed Dataform execution logs View audit logs for Dataform View Cloud Logging logs for Dataform Dataform core Dataform core is an open source meta-language to create SQL tables and workflows.
- Workflow compilation Dataform uses default compilation settings, configured in the workflow settings file , to compile the workflow code in your workspace to SQL in real-time, creating a compilation result of the workspace.
- Dataform lets you develop Dataform core in a development workspace In a development workspace, you can define and document tables, their dependencies, and transformation logic to build your workflow.

### "Quickstart: Create and run a workflow \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the API request with the following information: Endpoint : GET https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workflowInvocations Query parameter : to ensure that the most recent executions appear at the top of the results, use ?orderBy=create time desc . curl command: curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workflowInvocations?orderBy=create time%20desc" Replace the following: LOCATION : the Google Cloud region for your repository, for example, europe-west4 .
- Create a view A Dataform view is an asset defined in a SQLX file that lets you transform data and serves as a source for other tables or views in your workflow.
- To learn how to override default Dataform settings of your repository, see Configure Dataform workflow settings .
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces Query parameter : workspaceId= WORKSPACE ID curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d "{}" \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces?workspaceId= WORKSPACE ID " To initialize your workspace with the necessary configuration, create a local file named workflow settings.yaml and paste the following configuration: defaultProject : PROJECT ID defaultDataset : dataform dataformCoreVersion : CORE VERSION In your terminal, run the following command to encode the file content into a single continuous string: base64 -w 0 workflow settings.yaml Copy the resulting output string to use in the SETTINGS DEFINITION field in your JSON request body.

