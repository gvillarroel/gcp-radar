---
title: "About data profiling \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/data-profiling-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/data-profiling-overview
  title: "About data profiling \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
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
About data profiling
Stay organized with collections
Save and categorize content based on your preferences.
Knowledge Catalog (formerly Dataplex Universal Catalog) makes it easier to understand and
analyze your data by automatically profiling your BigQuery
tables.
Profiling is like getting a detailed health report for your data. It gives you
key statistics, such as common values, how the data is spread out
(distribution), and how many entries are missing (null counts). This information
speeds up your analysis.
Data profiling automatically detects sensitive information and lets you set
access control policies. It
recommends data quality check rules
to ensure your data stays reliable.
Conceptual model
Knowledge Catalog lets you better understand the profile of your data by
creating a data profile scan. A data profile scan is a type of
Knowledge Catalog data
scan that
analyzes a BigQuery table to generate statistical insights.
The following diagram shows how Knowledge Catalog scans data to report on
statistical characteristics.
A data profile scan is associated with one BigQuery table
and scans the table to generate the data profiling results. A data profile
scan supports several configuration options .
Note: Knowledge Catalog runs scans on resources in a Google tenant project,
so you don't need to set up your own infrastructure.
Configuration options
This section describes the configuration options available for running
data profile scans.
Profiling modes
You can choose between the following profiling modes:
Standard : This is the default mode. It provides a comprehensive and
customizable profile by scanning your data based on the sampling and filters
that you specify. Standard mode is suitable for detailed analysis and
long-term monitoring of data characteristics.
Lightweight ( Preview ) : This mode
provides low-latency profile scans that return results in seconds. It is
optimized for speed and cost-efficiency to support use cases such as the
following:
Grounding AI agent responses with immediate data characteristics
Cost-effectively pre-generating profiles at scale for global data discovery
Providing rapid health reports during interactive data exploration
The lightweight mode has the following limitations:
Unlike the standard profiling mode, you can't modify the scope, filters, or
sampling size on lightweight scans.
It doesn't support BigQuery views and external tables.
Scheduling options
You can schedule a data profile scan with a defined frequency, or run the scan
on demand.
Execution identity
By default, Knowledge Catalog uses a centralized service agent ( service-PROJECT_NUMBER@gcp-sa-dataplex.iam.gserviceaccount.com ) to run data profile scans.
You can also override this default execution identity by specifying a custom service account (Bring Your Own Service Account) or by using your own End-User Credentials (EUC). This provides several benefits:
Principle of least privilege: Grant only the exact IAM permissions required for specific data profiling tasks to a dedicated service account, minimizing overprovisioned access.
Fine-grained access control: Scope permissions to specific resources, allowing integration with row-level and column-level access policies in BigQuery.
Improved auditability: Assign custom service accounts or user credentials to specific scans, making tracking and logging of activities much clearer in audit logs.
Billing unification: When you use a custom execution identity, the processing and storage charges are centralized directly under BigQuery (bypassing Knowledge Catalog Premium SKUs). This lets you take advantage of BigQuery enterprise discounts and slot commitments.
For instructions on how to configure a custom execution identity, see Configure execution identity .
Scope
For Standard profiling scans, you can specify the scope of the data to scan:
Full table : The entire table is scanned in the data profile scan.
Sampling, row filters, and column filters are applied on the entire table
before calculating the profiling statistics.
Incremental : Incremental data that you specify is scanned in the data
profile scan. Specify a Date or Timestamp column in the table to be
used as an increment. Typically, this is the column on which the table is
partitioned. Sampling, row filters, and column filters are applied on the
incremental data before calculating the profiling statistics.
Filter data
For Standard profiling scans, you can filter data to be scanned for
profiling by using row filters and column filters. Using filters helps you
reduce the run time and cost, and exclude sensitive and unuseful data.
Lightweight profiling scans don't support column filters and row filters.
Row filters : Row filters let you focus on data within a specific time
period or from a specific segment, such as region. For example, you can filter
out data with a timestamp before a certain date.
Column filters : Column filters lets you include and exclude specific
columns from your table to run the data profile scan.
Sample data
For Standard profiling scans, you can specify a percentage of records from
your data to sample for running a data profile scan. Creating data profile scans
on a smaller sample of data can reduce the run time and cost of querying the
entire dataset.
Multiple data profile scans
You can create multiple data profile scans at a time
using the Google Cloud console. You can select up to 100 tables from one dataset
and create a data profile scan for each dataset. For more information, see
Create multiple data profile scans .
Export scan results to a BigQuery table
You can export the data profile scan results to a BigQuery table
for further analysis. To customize reporting, you can connect the
BigQuery table data to a Looker dashboard. You can
build an aggregated report by using the same results table across multiple scans.
Data profiling results
The data profiling results include the following values:
Column type
Data profiling results
Numeric column
Percentage of null values.
Percentage of approximate unique (distinct) values.
Top 10 most common values in the column. It can be less than 10 if the
number of unique values in the column is less than 10 (null values aren't
included). For each of these most common values, the percentage of their
occurrence in the data scanned in the current scan is displayed.
Average, standard deviation, minimum, approximate lower quartile,
approximate median, approximate upper quartile, and maximum values.
String column
Percentage of null values.
Percentage of approximate unique (distinct) values.
Top 10 most common values in the column, which can be less than 10 if
the number of unique values in the column is less than 10.
Average, minimum, and maximum length of the string.
Other non-nested columns (date, time, timestamp, binary, etc.)
Percentage of null values.
Percentage of approximate unique (distinct) values.
Top 10 most common values in the column, which can be less than 10 if
the number of unique values in the column is less than 10.
All other nested or complex data-type columns (such as Record, Array,
JSON) or any column with repeated mode.
Percentage of null values.
The results include the number of records scanned in every job.
Note: Approximate values might differ from the actual values by 1-2% for performance improvement.
Reporting and monitoring
You can monitor and analyze the data profiling results using the following
reports and methods:
Reports published with the source table in the BigQuery and Knowledge Catalog pages
If you configure a data profile scan to publish the results to BigQuery and Knowledge Catalog, you can view the latest data profile scan
results on the source table's Data profile tab in both BigQuery and Knowledge Catalog. These results are accessible from any project.
Historical, per job report
On the Data profiling & quality > Data profile scan page in
Knowledge Catalog and BigQuery, you can view the
detailed reports for the latest and historical jobs. This
includes column-level profile information and the configuration that was used.
Analysis tab
On the Data profiling & quality > Data profile scan page in
Knowledge Catalog and BigQuery, you can use the Analysis
tab to view the trends for a given statistic of a column over multiple
profile jobs. For example, if you have an incremental scan, you can view how
the average of a value has been trending over time.
Build your own dashboard or analytics
If you have configured a data profile scan to export results to a
BigQuery table, then you can build your own dashboards using
tools, such as Looker Studio.
Limitations
Data profiling is supported for BigQuery tables with all column
types except BIGNUMERIC . A scan created for a table with a BIGNUMERIC
column results in a validation error and isn't successfully created.
Pricing
For more information about pricing, see
Knowledge Catalog pricing .
What's next
Learn how to use data profiling .
For more information about the available Terraform resources for creating data profile scans, see the following:
Dataplex data scan resource in the Terraform registry.
The Dataplex data scan resource documentation on GitHub, which supports YAML-based rule configuration.
Learn about auto data quality .
Learn how to use auto data quality .
Learn how to explore your data by generating data insights .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
