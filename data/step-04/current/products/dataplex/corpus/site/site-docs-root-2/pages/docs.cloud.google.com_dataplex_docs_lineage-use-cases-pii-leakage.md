---
title: "Analyze causes of Personally Identifiable Information (PII) leak \_|\_ Knowledge\
  \ Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-pii-leakage
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-pii-leakage
  title: "Analyze causes of Personally Identifiable Information (PII) leak \_|\_ Knowledge\
    \ Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Analyze causes of Personally Identifiable Information (PII) leak
Stay organized with collections
Save and categorize content based on your preferences.
In this scenario, you receive an alert that sensitive consumer data (specifically first and last names) appears in a view visible to the entire organization.
This information is originally intended only for specific functional purposes, such as account creation, invoicing, and shipping. However, through a series of transformations and the creation of an analytics view, the Personally Identifiable Information (PII) leaks into a broader analytics schema.
In this tutorial, you use data lineage to trace the flow of sensitive data back to the process that moves it from a trusted to a non-trusted location.
Get started
To complete the use case, first set up the environment and run the data transformations. Use the prerequisites and setup page to connect a remote repository to Dataform. This repository contains the code necessary to set up the dataset and transform the data.
After you set up the environment, use BigQuery and Lineage Explorer to identify where PII crosses a security boundary.
Analyze personal information leak with Lineage Explorer
After you prepare the dataset, trace the personal information leak using the BigQuery Lineage tab.
In this example, you trace the user_email column from the public view back to its source:
In Google Cloud console, go to the BigQuery page.
Use the search field to find the order_status_stats table.
Click the Lineage tab.
In the Lineage Explorer pane, do the following:
In the Column Level Lineage section, select the user_email column name from the list.
In the Direction section, select the Upstream direction.
Click Apply .
Follow the graph back one step. The graph shows that the email is pulled from the status_counts_by_user_v intermediate view.
Click the process node between the view and its upstream dependencies. The process node shows that a join operation occurs between anonymized order data and a table containing identity information.
The lineage proves that personal information crosses from a restricted functional table into a broader analytics schema, where unauthorized users can see it.
For more information on visualizing data with data lineage graph, see Lineage graph view .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
