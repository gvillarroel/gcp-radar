---
title: "Choose Workflows or Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows
  title: "Choose Workflows or Application Integration \_|\_ Google Cloud Documentation"
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
Choose Workflows or Application Integration
Stay organized with collections
Save and categorize content based on your preferences.
Although Application Integration and Workflows
share some similar capabilities, they are targeted for different uses, and are
delivered differently.
If you're integrating business systems or implementing a business process,
consider using Application Integration. If you're orchestrating
services for application development, pipelines, or infrastructure automation,
consider using Workflows. You can also use both together; for
example, to orchestrate a pipeline that updates an integrated third-party
business system.
The following use case-based guidance, examples, and diagrams can help you
choose a solution.
Use Application Integration
If you are an enterprise architect, integration developer, or business
analyst, who needs a way to connect, map, transform, and integrate data between
business systems like Salesforce, ServiceNow, or a Cloud SQL database:
Application Integration is ideal for integrating
applications that have differing data structures and for exchanging data. It
provides built-in
transformation functions
that let you convert the source application data to fit the destination
application schema.
Consider using Application Integration for real-time
business transactions, or processing business transactions in small batches. Or,
if you have existing Google Cloud applications and are facing
connectivity challenges as the result of a large number of SaaS applications.
Application Integration offers a
drag-and-drop visual interface
that lets you create an entire integration flow with little or no code.
Connectors also allow you to call and perform operations on various entities.
If you need a connector that can be used to integrate and map
data between a Google Cloud service such as BigQuery and a
third-party service such as ServiceNow:
An Application Integration connector hides the complexity of
application-specific data structures and protocols. It provides a standard
interface to perform create, read, update, and delete operations on
application data.
For example, a Spanner connection lets you insert, read, update and
delete rows in a Spanner table and use the resulting output
in an integration. Or, the Oracle DB connector lets you connect to an Oracle
database instance and perform the supported database operations.
See the list of
supported connectors .
Example: Using Application Integration to map and extract data
The following diagram shows an example of using Application Integration
to map and extract data from an external system:
A Salesforce trigger is subscribed to the Salesforce opportunity channel. Data
changes to the Salesforce opportunity invokes
Application Integration which extracts the status of the
Salesforce opportunity. If the status is closed, the integration extracts the
opportunity details and writes the data to a Cloud SQL instance using
a connector. If there is a data change, but the status remains open, the
integration sends a message to a Pub/Sub topic using a connector.
Use Workflows
If you are a developer, data engineer, or cloud platform team, who needs a
way to orchestrate services together to build applications, process automations,
or implement data and machine learning pipelines:
Workflows is ideal if you want to separate the logic that
sequences and links your services together from your core business logic. A
workflow can perform a sequence of operations across multiple systems, waiting
for all operations to complete, and it can be event-driven.
Consider using Workflows if you want to write less code to
specify your application infrastructure and execute loosely-coupled services in
an order that you define: a workflow . These workflows can combine the services
of any HTTP-based API, making service dependencies explicit and observable
end-to-end.
A workflow consists of a series of steps described using the
Workflows syntax ,
and can be written in either YAML or JSON. Workflows
standard library functions
and built-in environment variables allow you to easily construct arguments and
process responses. Connectors can be used to interact with other
Google Cloud products.
If you need a connector that can be used to simplify calling and integrating
with other Google Cloud APIs such as Cloud Run functions or
Firestore within a workflow:
Workflows publishes lightweight, serverless connectors that
can be used to connect to other Google Cloud APIs within a workflow, and
to integrate your workflows with those Google Cloud products. They
simplify calling services because they handle the formatting of requests for
you, and provide methods and arguments so that you don't need to know the
details of a Google Cloud API.
For example, you can create a workflow that use the Cloud Translation API
connector to translate files to other languages in asynchronous batch mode and
save the results in a Cloud Storage bucket. Or, you can execute a workflow
that runs multiple BigQuery query jobs serially, one after the other.
Supported connectors include a
connector to Application Integration
so that you can use both products together; in this document, see
Use Application Integration and Workflows together .
For example, you can create a workflow that triggers and waits for an
integration, or any other operation such as updating a Salesforce instance.
See the list of supported connectors .
Note: To deploy ETL/ELT data pipelines, we recommend using
Cloud Data Fusion .
Example: Using Workflows for lightweight service orchestration
The following diagram shows an example of using Workflows to
orchestrate services:
When a file is uploaded to a Cloud Storage bucket, a
Cloud Run function triggers Workflows to execute a
workflow: text is recognized using the Cloud Natural Language API; images and videos are
recognized using the Cloud Vision API and Cloud Video Intelligence API; and tags
are saved and written to Firestore.
Use Application Integration and Workflows together
You can use Application Integration and
Workflows together to orchestrate applications and services.
Workflows supports a
connector to Application Integration
so that you can use both products together. For example, you can perform an
action in a third-party business system from Workflows using
Application Integration. Or, you can connect with custom
development from Application Integration using
Workflows.
Example: Using Application Integration and Workflows to perform an action in a third-party business system
In the following diagram, a refund for digital content is requested through a
mobile app. Workflows removes the content and
initiates a refund process in Application Integration,
using heuristic methods and potentially human approval. Based on the result from
Application Integration, Workflows either
grants a refund or restores the content.
What's next
Learn more about Application Integration .
Learn more about Workflows .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
