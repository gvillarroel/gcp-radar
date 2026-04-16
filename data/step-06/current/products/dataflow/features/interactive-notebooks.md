---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.833Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Interactive Notebooks"
feature_slug: "interactive-notebooks"
latest_feature_date: "2020-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
  - "https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro"
keywords:
  - "interactive"
  - "notebooks"
  - "provide"
  - "notebook"
  - "based"
  - "development"
  - "dataflow"
  - "workflows"
---

# Interactive Notebooks

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Interactive Notebooks provide notebook-based development for Dataflow workflows; Interactive Notebooks provide notebook-based development support for Dataflow workflows.

## Extended Definition

Interactive Notebooks provide notebook-based development for Dataflow workflows; Interactive Notebooks provide notebook-based development support for Dataflow workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- [https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro](https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro)

## Supporting Pages

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-reference-2`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Leave the parameter list empty to return the recording status of all pipelines. ib . recordings . describe ( p ) The describe() method provides the following details: Total size (in bytes) of all of the recordings for the pipeline on disk Start time of when the background recording job started (in seconds from Unix epoch) Current pipeline status of the background recording job Python variable for the pipeline Launch Dataflow jobs from a pipeline created in your notebook Optional: Before using your notebook to run Dataflow jobs, restart the kernel, rerun all cells, and verify the output.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the Flink dashboard from the printed link. ib . clusters . describe () Cleans up all long-lasting clusters managed by the notebook session. ib . clusters . cleanup ( force = True ) Notebook-managed clusters By default, if you don't provide any pipeline options, Interactive Apache Beam always reuses the most recently used cluster to run a pipeline with the FlinkRunner .
- The following list provides the advantages of using a custom container: Faster setup time for consecutive and interactive executions Stable configurations and dependencies More flexibility: you can set up more than Python dependencies The container build process might be tedious, but you can do everything in the notebook using the following usage pattern.
- You can check the beam sql magic usage with the -h or --help option: You can create a PCollection from constant values: You can join multiple PCollections : You can launch a Dataflow job with the -r DataflowRunner or --runner DataflowRunner option: To learn more, see the example notebook Apache Beam SQL in notebooks .
- Using the Apache Beam interactive runner with JupyterLab notebooks lets you iteratively develop pipelines, inspect your pipeline graph, and parse individual PCollections in a read-eval-print-loop (REPL) workflow.

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro](https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the Flink dashboard from the printed link. ib . clusters . describe () Cleans up all long-lasting clusters managed by the notebook session. ib . clusters . cleanup ( force = True ) Notebook-managed clusters By default, if you don't provide any pipeline options, Interactive Apache Beam always reuses the most recently used cluster to run a pipeline with the FlinkRunner .
- The following list provides the advantages of using a custom container: Faster setup time for consecutive and interactive executions Stable configurations and dependencies More flexibility: you can set up more than Python dependencies The container build process might be tedious, but you can do everything in the notebook using the following usage pattern.
- You can check the beam sql magic usage with the -h or --help option: You can create a PCollection from constant values: You can join multiple PCollections : You can launch a Dataflow job with the -r DataflowRunner or --runner DataflowRunner option: To learn more, see the example notebook Apache Beam SQL in notebooks .
- Using the Apache Beam interactive runner with JupyterLab notebooks lets you iteratively develop pipelines, inspect your pipeline graph, and parse individual PCollections in a read-eval-print-loop (REPL) workflow.

