---
title: "Create a custom dashboard or analysis for your Carbon Footprint data \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data
source_metadata:
  url: https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard
  title: "Create a custom dashboard or analysis for your Carbon Footprint data \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Carbon Footprint
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a custom dashboard or analysis for your Carbon Footprint data
Beyond Carbon Footprint's default view and data export, you can create custom dashboards and analyses using the exported data. This flexibility allows for tailored data visualization and granularity, enabling deeper insights to optimize your carbon footprint management according to your specific requirements.
Using Google Sheets
Follow these steps to create a custom dashboard for your
Carbon Footprint data using Google Sheets .
Export your entire carbon footprint to a sheet
Use a pivot table
to create custom reporting on your exported data.
Create a chart
to visualize the results of the pivot table.
Use Looker Studio
Follow these steps to create a custom Looker Studio
report for your Carbon Footprint data.
Export your carbon footprint to BigQuery
Create a new Looker Studio report
Connect to BigQuery
by selecting the dataset you previously chose when configuring the Carbon Footprint
export.
Add charts to your report
using the data source created in the previous step.
Use Looker
Follow these steps to create a custom Looker
dashboard for your Carbon Footprint data.
This option is recommended if you are an existing Looker customer.
Export your carbon footprint to BigQuery
Install the Carbon Footprint block
Estimate emissions data at different granularity by joining Carbon Footprint data with Cloud Billing data
You can combine your Carbon Footprint export data with your
Cloud Billing export data to view your carbon
You can combine your Carbon Footprint export data with your
Cloud Billing export data to view your carbon
emissions at different levels of granularity. This allows for analysis at
customized label, tag, or resource levels, supporting the identification
of areas for reducing your environmental impact. You can follow these steps
to approximate either instance-level emissions data and tag or label level
emissions data.
Approximate instance-level emissions data
Export Data to BigQuery : Export Carbon Footprint data and Cloud Billing detailed usage cost data to BigQuery respectively.
Join Datasets : First, aggregate the hourly Cloud Billing detailed usage cost data to the monthly level, grouped by billing account ID, project, product, resource, and region before joining. Then join exported Carbon Footprint data with Cloud Billing detailed usage cost data using the common dimensions of billing account ID, project, product, region, and month.
Estimate Resource-Level Emissions : Break down carbon emissions data (aggregated by billing account ID, project, product, region, and month) to the individual resource level. This estimation can be performed by proportionally distributing the emissions based on each resource's contribution to the cost at list within any given billing account ID, project, product, region, and month. Using cost_at_list avoids side effect of potential pricing discounts. Implement validation steps to identify and mitigate any potential double counting of emissions.
Important Note : Resource-level emissions estimated using this cost-based distribution are approximations, as both cost and emissions scale with usage. While not a precise measure of individual resource impact, this method helps prioritize high-usage resources for optimization.
Approximate tag or label level emissions data
Export Data to BigQuery : Export Carbon Footprint data and Cloud Billing standard usage cost data to BigQuery respectively.
Join Datasets : First, aggregate the hourly Cloud Billing standard usage cost data to the monthly level, grouped by billing account ID, project, product, tag or labels , and region before joining. Then join exported Carbon Footprint data with Cloud Billing standard usage cost data using the common dimensions of billing account ID, project, product, region, and month.
Estimate Tag-Level or Label-level Emissions : With the joined dataset, aggregate emissions data by tag or labels and other dimensions as needed.
Important Note : Tag-Level or label-level emissions aggregated using this approach are approximations and may not accurately reflect the actual energy consumption and emissions.
What's next?
Read about the data schema used in the export .
Understand the methodology behind Carbon Footprint
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
