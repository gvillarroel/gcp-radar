---
title: "Overview of workflows \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/sql-workflows
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/sql-workflows
  title: "Overview of workflows \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Overview of workflows
Stay organized with collections
Save and categorize content based on your preferences.
This document helps you understand the architecture and execution of
workflows in Dataform.
You can use Dataform to develop, test, and version control
workflows that you can run in BigQuery to transform data for
analytics purposes. Dataform workflows power
BigQuery pipelines, data preparations, notebooks, and saved
queries.
You can develop workflows with
Dataform core ,
using SQLX files and optionally JavaScript files, or with
JavaScript .
A workflow can consist of the following objects:
Data source declarations
Declarations of BigQuery data sources that let you reference these
data sources in Dataform table definitions and SQL operations.
Tables
Tables that you create in Dataform based on the declared
data sources or other tables in your workflow. Dataform supports
the following table types: table, incremental table, view, and materialized view.
Assertions
Data quality test queries that you can use to validate table data.
Dataform runs assertions every time it updates your workflow
and it alerts you if any assertions fail.
Custom SQL operations
SQL statements that Dataform runs in BigQuery as they are,
without modification.
Includes
JavaScript files with definitions of variables and functions that you can
reuse across your workflow.
Visualization of a workflow
You can view your workflow visualized in the form of a
Directed Acyclic Graph (DAG). The DAG displays all objects of the workflow
defined in your workspace, and the relationships between them. You can zoom in
and out and use drag-and-drop navigation in the DAG. If there are compilation
errors in your workflow, Dataform displays an error message
instead of the DAG.
To view the DAG of your workflow, in your workspace, click Compiled graph .
Execution of a workflow
You must associate a custom service account with a Dataform
repository for workflow execution. All other repository operations are still
performed by the default Dataform service agent.
In your development workspace, you can
manually trigger a run of your entire
workflow, a selection of actions, or a selection of tags.
You can schedule runs with Dataform
release configurations
and
workflow configurations .
First, create a release configuration to create compilation results
of your repository. Then, create a workflow configuration, select a
release configuration, select workflow actions that you want to run,
and set the run schedule.
Alternatively, you can schedule runs either with
Cloud Composer , or with
Workflows and Cloud Scheduler .
During execution, Dataform runs SQL queries in BigQuery,
following the order of object dependencies in your workflow.
After execution, you can use your defined tables and views for all
your analytics purposes in BigQuery.
Execution configuration options
To run a specific group of your workflow actions, you can add
Dataform execution tags
to the files you select. You can then
run only the files with a selected tag
when you manually trigger a run.
By default, Dataform runs your workflow with
the execution settings defined in the workflow_settings.yaml file.
With
workspace compilation overrides ,
you can turn workspaces into isolated
execution environments. This means that when you manually trigger execution in
a workspace, Dataform runs the output in an isolated location in
BigQuery.
To create and run a single compilation result with compilation
overrides you can pass requests
with the Dataform API .
With
release configurations ,
you can configure compilation overrides for your whole repository, as well as
the frequency of creating compilation results with the applied settings.
To learn more about ways to configure compilation and code lifecycle in
Dataform, see
Introduction to code lifecycle in Dataform .
What's next
To learn how to declare a data source, see
Declare a data source .
To learn how to declare dependencies to define relationships between objects
in your workflow, see Set dependencies .
To learn how to define custom SQL operations, see
Create operations .
To learn how to reuse variables and functions across your workflow with includes, see
Reuse code across a single repository with includes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
