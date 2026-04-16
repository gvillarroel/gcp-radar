---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.740Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Assertion dependency parameters"
feature_slug: "assertion-dependency-parameters"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/dependencies"
  - "https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference"
keywords:
  - "assertion"
  - "dependency"
  - "parameters"
  - "let"
  - "dataform"
  - "actions"
  - "automatically"
  - "add"
---

# Assertion dependency parameters

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Assertion dependency parameters let Dataform actions automatically add assertions from selected dependencies or all dependency actions as dependencies.

## Extended Definition

Assertion dependency parameters let Dataform actions automatically add assertions from selected dependencies or all dependency actions as dependencies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/dependencies](https://docs.cloud.google.com/dataform/docs/dependencies)
- [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)

## Supporting Pages

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DeleteTeamFolderTreeRequest ( name="name value", ) Make the request operation = client. delete team folder tree (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.DeleteTeamFolderTreeRequest , dict]] The request object.
- DeleteFolderTreeRequest ( name="name value", ) Make the request operation = client. delete folder tree (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.DeleteFolderTreeRequest , dict]] The request object.
- QueryWorkflowInvocationActionsRequest ( name="name value", ) Make the request page result = client. query workflow invocation actions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.QueryWorkflowInvocationActionsRequest , dict]] The request object.
- MoveRepositoryRequest ( name="name value", ) Make the request operation = client. move repository (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.MoveRepositoryRequest , dict]] The request object.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DeleteTeamFolderTreeRequest ( name="name value", ) Make the request operation = client. delete team folder tree (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataform v1.types.DeleteTeamFolderTreeRequest , dict] The request object.
- DeleteFolderTreeRequest ( name="name value", ) Make the request operation = client. delete folder tree (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataform v1.types.DeleteFolderTreeRequest , dict] The request object.
- QueryWorkflowInvocationActionsRequest ( name="name value", ) Make the request page result = client. query workflow invocation actions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataform v1.types.QueryWorkflowInvocationActionsRequest , dict] The request object.
- QueryCompilationResultActionsRequest ( name="name value", ) Make the request page result = client. query compilation result actions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataform v1.types.QueryCompilationResultActionsRequest , dict] The request object.

### Set dependencies \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/dependencies](https://docs.cloud.google.com/dataform/docs/dependencies)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Dataform automatically adds the direct assertions of the dependency actions as dependencies during compilation.
- The following code sample shows sometableE , which depends on sometableA , sometableB , sometableC , sometableD , and all the direct assertions of the dependency tables: // filename is sometableE.sqlx config { type: "table", dependOnDependencyAssertions: true, dependencies: [ "sometableA", "sometableB" ] } SELECT FROM ${ref("sometableC")} SELECT FROM ${ref("sometableD")} In the preceding code sample, Dataform automatically adds all the direct assertions of sometableA , sometableB , sometableC , and sometableD as dependencies to sometableE during compilation.
- The following code sample shows the dependOnDependencyAssertions and includeDependentAssertions parameters set in the same table definition file: // filename is tableName.sqlx config { type: "table", dependOnDependencyAssertions: true, dependencies: [ "actionA", {name: "actionB", includeDependentAssertions: false} ] } SELECT FROM ${ref("actionC")} In the preceding code sample, Dataform adds all the direct assertions of actionA and actionC to the dependencies of tableName during compilation.
- You can set the includeDependentAssertions parameter for actions of the following types: table view operations Set the assertions of all the dependency actions as dependencies You can set the dependOnDependencyAssertions parameter to automatically set all the direct assertions from all the dependency actions of the edited action as additional dependencies of the edited action.

### Dataform core reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: // definitions/file.js assert ( "name" ). query ( ctx = > "select 1" ); CommonContext Context methods are available when evaluating contextable SQL code, such as within SQLX files, or when using a Contextable argument with Dataform core. database () => string Returns the database of this dataset, if applicable. name () => string Returns the name of this table. ref (ref: Resolvable string[], rest: string[]) => string References another action, adding it as a dependency to this action, returning valid SQL to be used in a from expression.
- ITableContext Context methods are available when evaluating contextable SQL code, such as within SQLX files, or when using a Contextable argument with Dataform core. incremental () => boolean Returns true when the current context indicates that the table will be built incrementally. name () => string Returns the fully qualified name of this table. ref (ref: Resolvable string[], rest: string[]) => string References another action, adding it as a dependency to this action, returning valid SQL to be used in a from expression.
- If configured, relevant assertions are automatically created and run as a dependency of this table. bigquery IBigQueryOptions BigQuery-specific warehouse options. columns IColumnsDescriptor A description of columns within the table. database string The database (Google Cloud project ID) in which to create the output of this action. description string A description of the table. disabled boolean If set to true , this action is not run.
- You can use Dataform core in SQLX and JavaScript files. assert() assert (name: string, query?: AContextable ) Adds a Dataform assertion the compiled graph.

