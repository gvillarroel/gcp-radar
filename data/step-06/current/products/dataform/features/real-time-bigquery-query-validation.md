---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.754Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Real-time BigQuery query validation"
feature_slug: "real-time-bigquery-query-validation"
latest_feature_date: "2022-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-workspace"
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1"
keywords:
  - "real"
  - "time"
  - "query"
  - "validation"
  - "dataform"
  - "can"
  - "validate"
  - "compiled"
---

# Real-time BigQuery query validation

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Dataform can validate compiled queries against BigQuery in real time.

## Extended Definition

Dataform can validate compiled queries against BigQuery in real time.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1)

## Supporting Pages

### Create a development workspace \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An initialized development workspace contains the following directories and files: definitions/ : a directory for asset definitions, in Dataform core or JavaScript. includes/ : an empty directory for scripts and variables that you can reuse across the repository. workflow settings.yaml : the default Dataform configuration file containing the Google Cloud project ID and BigQuery schema to publish assets in.
- If the query compilation is successful, the pane displays the compiled queries and validates them through dry runs against BigQuery.
- Dataform compiles your code into SQL queries in real time.
- Create a Dataform development workspace When you create a development workspace in a new repository for the first time, Dataform prompts you to initialize the development workspace with a set of configuration files that are required for Dataform to work.

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- In a Dataform workspace, you can develop the following workflow actions: Source data declarations Tables and views Incremental tables Table partitions and clusters Dependencies between actions Documentation of tables Custom SQL operations BigQuery labels BigQuery policy tags Dataform tags Data quality tests, called assertions You can use JavaScript to reuse your Dataform workflow code in the following ways: Across a file with code encapsulation Across a repository with includes Across repositories with packages Dataform compiles the workflow code in your workspace in real-time.
- Dataform compiles your Dataform core code in real time to create a SQL compilation result that you can run in BigQuery.
- To test the output of a compiled SQL query before you run it to BigQuery, you can run preview of the query in your Dataform workspace.
- To debug in real-time, you can inspect the compiled workflow of your project in an interactive graph in your development workspace.

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Compilation Dataform compiles the workflow code in your workspace to SQL in real time, creating a compilation result of the workspace that you can run in BigQuery.
- When you develop a workflow in a Dataform workspace, Dataform compiles your code into a compilation result in real time to provide query validation.
- You can configure the following workspace compilation overrides: Google Cloud project in which Dataform runs the contents of the workspace Table prefix Schema suffix You can use workspace compilation overrides to create isolated development environments by isolating workspace compilation results in BigQuery with dynamic compilation overrides.
- You can select the following workflow actions to be run: All actions Selected actions Actions with selected tags Then, during a scheduled execution of your workflow configuration, Dataform deploys your selection of actions from the applied compilation result to BigQuery.

### "Package com.google.cloud.dataform.v1 (0.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1)
- Source ID: `site-java-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataform Grpc Dataform is a service to develop, create, document, test, and update curated tables in BigQuery. com. google. cloud. dataform. v1.
- Async Service Dataform is a service to develop, create, document, test, and update curated tables in BigQuery. com. google. cloud. dataform. v1.
- Dataform Client Service Description: Dataform is a service to develop, create, document, test, and update curated tables in BigQuery.
- Query Repository Directory Contents Response QueryRepositoryDirectoryContents response message. com. google. cloud. dataform. v1.

