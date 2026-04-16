---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.751Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Compiled graph filtering"
feature_slug: "compiled-graph-filtering"
latest_feature_date: "2023-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/best-practices-repositories"
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/dataform/docs/create-workspace"
  - "https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle"
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
Coverage: MEDIUM

## Step 02 Summary

Compiled graph filtering lets users filter the compiled graph in a Dataform workspace.

## Extended Definition

Compiled graph filtering lets users filter the compiled graph in a Dataform workspace.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- [https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle](https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle)

## Supporting Pages

### Best practices for repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following sample shows a subdirectory structure of sources with two source pools: definitions/ sources/ google ads/ google ads filtered.sqlx google ads criteria metrics.sqlx google ads criteria metrics filtered.sqlx google ads labels.sqlx google ads labels filtered.sqlx google analytics/ google analytics users.sqlx google analytics users filtered.sqlx google analytics sessions.sqlx If you declare multiple data source tables within the same schema, you can consolidate their declarations into a single JavaScript file.
- The following code sample shows multiple data sources within one schema, declared in a single JavaScript file: [ "source table 1" , "source table 2" , "source table 3" ]. forEach (( name ) = > declare ({ database : "gcp project" , schema : "source dataset" , name , }) ); To protect your workflow against data source changes, you can create a view for each data source declaration—for example, analytics users filtered.sqlx .
- The following structure of subdirectories in the definitions directory reflects the key stages of a workflow: sources Data source declarations and basic transformation of source data—for example, filtering. intermediate Tables and actions that read from sources and transform data before you use the transformed data to define outputs tables.
- To write the output of the compiled graph of your workflow to a JSON file, inside your repository, run the following Dataform CLI command: dataform compile --json > graph.json Splitting repositories This section discusses strategies for splitting a Dataform repository and managing cross-repository dependencies.

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- To inspect the entire workflow defined in your workspace, you can view an interactive compiled graph that shows all compiled actions in your workflow and relationships between them.
- To debug in real-time, you can inspect the compiled workflow of your project in an interactive graph in your development workspace.
- In a release configuration, you can override the Google Cloud project in which Dataform runs the compilation results, add a prefix to names of all compiled tables, add a suffix the default schema, and add compilation variables.
- Dataform lets you develop Dataform core in a development workspace In a development workspace, you can define and document tables, their dependencies, and transformation logic to build your workflow.

### Create a development workspace \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- You can filter the graph by the following properties: Name Tag Type Assertion Declaration Incremental table Materialized view Operations Table Unknown View You can select multiple filters at once.
- Compiled graph tab In the Compiled graph tab, you can see the compiled workflow defined in your workspace as an interactive directed acyclic graph (DAG).
- Edits you make to files in your workspace start off as uncommitted local changes that you can commit and then push to your repository so that they become available to all repository users.
- You can click an action in the graph to view its details in the following panes: Metadata pane: displays the full name, type, dependencies, and dependents of the selected action.

### "Best practices for the workflow lifecycle \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle](https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the workflow settings.yaml file, configure the following settings: defaultProject : development defaultLocation : US defaultDataset : development defaultAssertionDataset : dataform assertions dataformCoreVersion : 3.0.0 vars : sourceSchema : schema DEV sourceNameSuffix : DEV In the source declaration.sqlx file, configure the following settings: config { type : "declaration" , database : dataform . projectConfig . vars . projectVar , schema : dataform . projectConfig . vars . sourceSchema , name : "source name" + dataform . projectConfig . vars . sourceNameSuffix , } Variable Development (default) Production (overrides) projectVar development production sourceSchema schema DEV schema PROD sourceNameSuffix DEV PROD Compiled data source development.schema DEV.source name DEV production.schema PROD.source name PROD In this example, splitting development and production data sources by project and schema is achieved through the projectVar variable and sourceSchema custom variable, respectively.
- This ensures that end users can navigate to production tables and eliminates the risk of end users accessing incorrect data by accident.
- The user stats table is available to end users in the analytics schema in the enterprise-analytics Google Cloud project in BigQuery.
- The user stats table is available to end users in the analytics schema in the enterprise-prod Google Cloud project in BigQuery.

