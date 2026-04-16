---
title: "BigQuery integrations \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/bigquery_integrations
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/python_install
source_metadata:
  url: https://developers.google.com/earth-engine/guides/bigquery_integrations
  title: "BigQuery integrations \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
BigQuery integrations
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BigQuery is a scalable data warehouse for SQL analysis of large vector datasets, while Earth Engine specializes in planetary-scale geospatial raster analysis with a vast data catalog.
Combining BigQuery and Earth Engine creates a comprehensive environment for tackling complex geospatial challenges involving both vector and raster data.
The integration enables efficient workflows, including querying raster data in BigQuery using ST_REGIONSTATS , reading BigQuery data into Earth Engine as ee.FeatureCollection , and writing Earth Engine data to BigQuery using Export.table.toBigQuery() .
BigQuery excels as a serverless data warehouse for petabyte-scale SQL
analysis, including vector data using the GEOGRAPHY data type. Google Earth
Engine provides a planetary-scale platform specializing in geospatial raster
analysis and offers a vast data catalog. Their combination creates a uniquely
comprehensive environment for tackling complex geospatial challenges that
involve both vector and raster data.
The integration of BigQuery and Earth Engine enables efficient workflows where
BigQuery's vector data can be enriched with Earth Engine's raster insights, and
Earth Engine analyses can access data stored and managed in BigQuery. By using
both, you gain access to:
BigQuery : Scalable storage and SQL-based analysis for large vector
datasets.
Earth Engine : Powerful processing of petabytes of raster data and access
to a rich geospatial catalog.
The primary ways these platforms interoperate are:
Querying raster data within BigQuery : Using the
ST_REGIONSTATS SQL function to perform zonal statistics directly in
BigQuery.
Reading BigQuery data into Earth Engine : Accessing BigQuery tables or
query results as ee.FeatureCollection objects for use in Earth Engine
scripts.
Writing Earth Engine data to BigQuery : Exporting ee.FeatureCollection
results from Earth Engine analyses to BigQuery tables for storage and further
analysis.
The following sections provide additional details about each of these features.
Query raster data within BigQuery
The BigQuery ST_REGIONSTATS function brings Earth Engine's raster analysis
to BigQuery SQL. It calculates regional statistics on raster data for BigQuery
tables with GEOGRAPHY data.
Key use: Zonal statistics and raster analysis within BigQuery.
Data sources: Analytics Hub, Cloud Storage GeoTIFF, Earth Engine assets.
This function lets you query Earth Engine's 100+ PB geospatial
data catalog directly within BigQuery. You can also
apply this function to your own Earth Engine assets as well as GeoTIFFs in
Cloud Storage.
Learn more about ST_REGIONSTATS in BigQuery's
Work with raster data
page.
Read BigQuery data from Earth Engine
Earth Engine can directly access BigQuery data as ee.FeatureCollection
objects, allowing you to visualize and incorporate BigQuery data in Earth Engine
analyses.
ee.FeatureCollection.loadBigQueryTable() : Reads a BigQuery table into Earth
Engine.
ee.FeatureCollection.runBigQuery() : Executes a BigQuery SQL query and
retrieves results into Earth Engine.
These functions enable seamless use of BigQuery's vector data within Earth
Engine's raster-centric geospatial analysis platform.
Learn more about these functions in the
Read from BigQuery
page.
Write Earth Engine vector data to BigQuery
Earth Engine can export vector data to BigQuery using the
Export.table.toBigQuery()
function.
Functionality: Exports ee.FeatureCollection objects to BigQuery tables.
Benefits: Enables further analysis, integration, and storage of Earth
Engine results in BigQuery.
This facilitates a workflow where vector data results from Earth Engine's
processing are readily available in BigQuery.
Learn more about writing Earth Engine vector data to BigQuery in the
Exporting to BigQuery page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-03 UTC."],[],[]]
