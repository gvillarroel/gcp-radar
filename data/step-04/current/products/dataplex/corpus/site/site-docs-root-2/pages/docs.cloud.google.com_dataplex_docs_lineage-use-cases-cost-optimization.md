---
title: "Use data lineage to optimize costs \_|\_ Knowledge Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-cost-optimization
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/lineage-use-cases-cost-optimization
  title: "Use data lineage to optimize costs \_|\_ Knowledge Catalog \_|\_ Google\
    \ Cloud Documentation"
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
Use data lineage to optimize costs
Stay organized with collections
Save and categorize content based on your preferences.
In this scenario, you manage a BigQuery project with datasets derived from the Quarterly Census of Employment and Wages (QCEW) . The project contains numerous tables and views for various dashboards and analyses, such as tracking employment trends or wage comparisons. As a result, your storage costs increase. To reduce costs, you identify tables or views that are not actively used as sources for jobs or assets within BigQuery, making them candidates for deletion.
Use data lineage to identify assets that are not being used as a source by any other BigQuery jobs. By checking each asset for downstream links, systematically flag unused resources for deletion to reduce storage costs.
Caution: Be careful when deleting resources. Just because a resource lacks downstream workflows doesn't mean it is entirely unused. For example, users might still query a table directly to retrieve specific data in read-only mode. Deleting the resource could disrupt the work of anyone who relies on that direct access.
Get started
To complete the use case, first set up the environment and run the data transformations. Use the prerequisites and setup page to connect a remote repository to Dataform. This repository contains the code necessary to set up the dataset and transform the data.
After you finish the environment setup, use BigQuery and Lineage Explorer to visually identify assets without downstream dependencies.
Identify unused assets with Lineage Explorer
After the dataset is prepared, identify assets that lack downstream dependencies. While you can do this visually for individual tables, you can also use a programmatic approach for larger datasets.
In this example, compare active assets with standalone assets to determine which can be safely removed:
In Google Cloud console, go to the BigQuery page.
Use the search field to find a standalone table (for example, an old analysis table from a specific year).
Click the Lineage tab.
In the Lineage Explorer pane, do the following:
In the Direction section, select the Downstream direction.
Click Apply .
Observe the graph. If there are no downstream nodes, the asset is not being used as a source for other tracked BigQuery jobs.
For more information on visualizing data with data lineage graph, see Lineage graph view .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
