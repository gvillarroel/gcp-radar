---
title: "Choose Workflows or Cloud Composer for service orchestration \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/choose-orchestration
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/choose-orchestration
  title: "Choose Workflows or Cloud Composer for service orchestration \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Choose Workflows or Cloud Composer for service orchestration
Stay organized with collections
Save and categorize content based on your preferences.
Both Workflows and
Cloud Composer can be used for service
orchestration to combine services to implement application functionality or
perform data processing. Although they are conceptually similar, each is
designed for a different set of use cases. This page helps you choose the right
product for your use case.
Key differences
The core difference between Workflows and Cloud Composer
is what type of architecture each product is designed to support.
Workflows orchestrates multiple HTTP-based services into a
durable and stateful workflow. It has low latency and can handle a high number
of executions. It's also completely serverless.
Workflows is great for chaining microservices together,
automating infrastructure tasks like starting or stopping a VM, and integrating
with external systems. Workflows connectors also support simple
sequences of operations in Google Cloud services such as Cloud Storage
and BigQuery.
Cloud Composer is designed to orchestrate data driven workflows
(particularly ETL/ELT). It's built on the Apache Airflow project, but
Cloud Composer is fully managed. Cloud Composer supports your
pipelines wherever they are, including on-premises or across multiple cloud
platforms. All logic in Cloud Composer, including tasks and scheduling,
is expressed in Python as Directed Acyclic Graph (DAG) definition files.
Cloud Composer is best for batch workloads that can handle a few
seconds of latency between task executions. You can use Cloud Composer
to orchestrate services in your data pipelines, such as triggering a job in
BigQuery or starting a Dataflow pipeline. You can use
pre-existing operators to communicate with various services, and there are over
150 operators for Google Cloud alone.
Detailed feature comparison
Feature
Workflows
Cloud Composer
Syntax
Workflows syntax in YAML or JSON format
Python
State model
Imperative flow control
Declarative
DAG with automatic dependency resolution
Integrations
HTTP requests
and connectors
Airflow Operators and
Sensors
Passing data between steps
512 KB for variables
48 KB 1 for
XCom
Execution triggers and scheduling
gcloud CLI, Google Cloud console,
Workflows API, Workflows client libraries,
Cloud Scheduler
Cron-like schedules
in the DAG definition file, Airflow Sensors
Asynchronous patterns
Polling
Callbacks
Waiting for long-running Google Cloud operations
Polling
Parallel execution
Either concurrent executions of the same workflow or within a workflow
using parallel steps
Automatic based on dependencies
Execution latency
Milliseconds
Seconds
Based on open source
No
Yes (Apache Airflow)
Scaling model
Serverless (scales up to demand and down to zero)
Provisioned
Billing model
Usage-based (per step executed)
Based on provisioned capacity
Data processing features
No
Backfills , ability to
re-run DAGs
Source code for airflow.models.xcom .
Apache Airflow documentation . August 2, 2021. ↩
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
