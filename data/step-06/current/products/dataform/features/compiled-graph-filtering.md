---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.397Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Compiled graph filtering"
feature_slug: "compiled-graph-filtering"
latest_feature_date: "2023-06-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/best-practices-repositories"
  - "https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding"
  - "https://docs.cloud.google.com/dataform/docs/overview"
keywords:
  - "compiled"
  - "graph"
  - "filtering"
  - "lets"
  - "users"
  - "filter"
  - "the"
  - "in"
---

# Compiled graph filtering

Product: Dataform
Coverage: LOW

## Step 02 Summary

Compiled graph filtering lets users filter the compiled graph in a Dataform workspace.

## Extended Definition

Compiled graph filtering lets users filter the compiled graph in a Dataform workspace.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)

## Supporting Pages

### Best practices for repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following sample shows a subdirectory structure of sources with two source pools: definitions/ sources/ google ads/ google ads filtered.sqlx google ads criteria metrics.sqlx google ads criteria metrics filtered.sqlx google ads labels.sqlx google ads labels filtered.sqlx google analytics/ google analytics users.sqlx google analytics users filtered.sqlx google analytics sessions.sqlx If you declare multiple data source tables within the same schema, you can consolidate their declarations into a single JavaScript file.
- The following code sample shows multiple data sources within one schema, declared in a single JavaScript file: [ "source table 1" , "source table 2" , "source table 3" ]. forEach (( name ) = > declare ({ database : "gcp project" , schema : "source dataset" , name , }) ); To protect your workflow against data source changes, you can create a view for each data source declaration—for example, analytics users filtered.sqlx .
- The following structure of subdirectories in the definitions directory reflects the key stages of a workflow: sources Data source declarations and basic transformation of source data—for example, filtering. intermediate Tables and actions that read from sources and transform data before you use the transformed data to define outputs tables.
- To write the output of the compiled graph of your workflow to a JSON file, inside your repository, run the following Dataform CLI command: dataform compile --json > graph.json Splitting repositories This section discusses strategies for splitting a Dataform repository and managing cross-repository dependencies.

### Binding \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a list of the available pre-defined roles, see here . members[] string Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers : A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers : A special identifier that represents anyone who is authenticated with a Google account or a service account.
- For example, admins@example.com . domain:{domain} : The G Suite domain (primary) that represents all the users of that domain.
- Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-28 UTC."],[],[]]

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- To inspect the entire workflow defined in your workspace, you can view an interactive compiled graph that shows all compiled actions in your workflow and relationships between them.
- To debug in real-time, you can inspect the compiled workflow of your project in an interactive graph in your development workspace.
- In a release configuration, you can override the Google Cloud project in which Dataform runs the compilation results, add a prefix to names of all compiled tables, add a suffix the default schema, and add compilation variables.
- Dataform lets you develop Dataform core in a development workspace In a development workspace, you can define and document tables, their dependencies, and transformation logic to build your workflow.

