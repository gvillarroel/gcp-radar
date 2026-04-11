---
title: "Export Cloud Billing data to BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery
  title: "Export Cloud Billing data to BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Export Cloud Billing data to BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Billing export to
BigQuery
lets you export detailed Google Cloud billing data (such as usage,
cost estimates, and pricing data) automatically throughout the day to a
BigQuery dataset
that you specify. Then you can access your
Cloud Billing data from BigQuery for detailed analysis, or
use a tool like
Looker Studio
to visualize your data. You can also use this export method to export data to
a JSON file.
Timing is important. To access a more comprehensive set of
Google Cloud billing data for your analysis needs, we recommend that
you enable Cloud Billing data export to BigQuery at the same
time that you
create a Cloud Billing account .
See the limitations
that might impact exporting your billing data to BigQuery.
Next steps
Managing and reporting costs effectively is a critical part of financial
stewardship, whether you're running a multi-billion-dollar enterprise
business or small household budget. Making data-driven decisions about your
Google Cloud costs and usage starts with collecting the data you'll need
to inform those decisions.
Refer to the guides in this section to learn about the following tasks:
Set up Cloud Billing data export to BigQuery
Understand the Cloud Billing data tables
Find example queries for Cloud Billing data export
Set up Cloud Billing data export to BigQuery
To start collecting your Cloud Billing data, you must
enable Cloud Billing data export to BigQuery .
The
setup guide
provides best practice recommendations and detailed instructions
for enabling Cloud Billing data export to BigQuery.
These are the following types of Cloud Billing data you can enable for
export:
Standard usage cost data -
Contains standard Cloud Billing account cost usage information,
such as account ID, invoice date, services, SKUs, projects, labels,
locations, cost, usage, credits, adjustments, and currency.
Use the Standard usage export to analyze broad trends in your cost data.
Detailed usage cost data -
Contains detailed Cloud Billing account cost usage information.
Includes everything in the standard usage cost data plus resource-level
cost data, like a virtual machine or SSD that generates service usage.
Use the Detailed usage export to analyze costs at the resource level, and
identify specific resources that might be driving up costs. The detailed
export includes resource-level information for the following products:
Compute Engine
Google Kubernetes Engine (GKE)
Cloud Run functions
Cloud Run
To view information about GKE,
enable cost allocation in detailed exports .
Review the
schema of the detailed usage cost data
for further recommendations and limitations.
(Resellers only) Rebilling data export -
Contains detailed Cloud Billing account cost usage information
across all your Reseller Billing Accounts annotated with Partner specific
attributes.
Use the Rebilling data export to manage billing operations for your
Google Cloud customers. Learn more about
Repricing configurations
which let you generate end-customer costs.
Pricing data -
Contains Cloud Billing account pricing information, such as
account ID, services, SKUs, products, geographic metadata, pricing units,
currency, aggregation, and tiers.
You can also get your Cloud Billing account pricing data in these
ways:
Use the Pricing page in the Google Cloud console
Use the Google Cloud Pricing API
Committed use discounts (CUD) metadata
(Preview) -
For customers who purchase CUDs, this daily export provides CUD metadata to
a BigQuery table, which you can join with other billing
data exports for better CUD management and reporting. CUD metadata includes
information such as billing account ID, product ID,
consumption model ID,
commitment amount units and values, and more.
Using BigQuery to store and query Cloud Billing
data will incur minimal fees. For more information, see
Cost of use .
See the limitations
that might impact exporting your billing data to BigQuery.
Understand the Cloud Billing data tables
After you
enable Cloud Billing export to BigQuery ,
Cloud Billing
data tables
are automatically created in the
BigQuery dataset .
To understand the data schema of your exported content, see the reference
information for the contents of the Cloud Billing data that's
exported to each table in the BigQuery dataset.
Standard usage cost table
Detailed usage cost table
Pricing table
CUD metadata export
Find example queries for Cloud Billing data
For tips and guidance for using SQL to run queries on your
Cloud Billing data, view the
example queries .
On the example queries page, you'll find various SQL examples, including the
following:
Return the total costs on an invoice
Query your data using labels
Return data about your committed use discounts
Query costs and credits by project for a specified invoice month
Join pricing data with detailed usage cost data
Cost of use
Using BigQuery to store and analyze billing usage and cost data
typically incurs minimal fees.
Loading data into the designated dataset is free; this action takes advantage
of BigQuery's pool of shared resources to load data in batches.
When exporting and analyzing Cloud Billing data with BigQuery,
the associated cost depends on the amount of data you stream, store, and
query.
Many partitioned table operations are free, including loading data into
partitions, copying partitions, and exporting data from partitions. Though
free, these operations are subject to BigQuery's quotas and
limits.
Generally, querying the Detailed cost export might cost more than querying the
Standard export. To optimize your costs, we recommend using the Standard export
to analyze trends in your costs, and using the Detailed export to track costs at
the resource level, and identify specific resources that might be driving your
costs.
To get an idea of what charges to expect, see
Estimating storage and query costs .
For more information on best practices for optimizing costs in
BigQuery, see
Control costs in BigQuery .
For detailed prices, review
BigQuery pricing .
Limitations
Exporting Cloud Billing data to BigQuery is subject to the
following limitations.
The table schema for any of the Cloud Billing data exports can change
When the table schema changes, such as when new fields are added to a
BigQuery table schema for a Cloud Billing data
export, any queries that directly reference the exported columns might
fail. To resolve this, we recommend creating
BigQuery views
that query the exported tables and present the information in your
preferred structure.
You can then adjust the queries that feed your reports and dashboards to
pull from the views, instead of the exported tables. By using views, you
can standardize the structure of the data used in your queries and
dashboards.
The views you create should normalize the data so that all of the relevant
tables present the same schema to your queries. This protects you from
future schema changes, allowing you to modify the view's underlying query
in those instances when the data schema changes.
BigQuery dataset locations supported for use with Cloud Billing data
BigQuery datasets
are configured to use a
location – either a
multi-region location (EU or US), or a region location. The
dataset location is set at creation time. After a dataset is created, its
location can't be changed.
Cloud Billing data export supports all multi-region locations
(EU or US), but only a subset of region locations. When you're
configuring your Cloud Billing export settings, if you create or select
a dataset that's configured to use an unsupported region location,
when you attempt to save your export settings, you'll see an
Invalid dataset region error.
The following table lists the
multi-region locations
and the region locations
that are supported for use with BigQuery datasets that
contain Cloud Billing data.
Americas
Asia Pacific
Europe
Middle East
Multi-region : US
Regions :
northamerica-northeast1 (Montréal)
southamerica-east1 (São Paulo)
us-central1 (Iowa)
us-east1 (South Carolina)
us-east4 (Northern Virginia)
us-west1 (Oregon)
us-west2 (Los Angeles)
us-west3 (Salt Lake City)
us-west4 (Las Vegas)
Regions :
asia-east1 (Taiwan)
asia-east2 (Hong Kong)
asia-northeast1 (Tokyo)
asia-northeast2 (Osaka)
asia-northeast3 (Seoul)
asia-south1 (Mumbai)
asia-southeast1 (Singapore)
asia-southeast2 (Jakarta)
australia-southeast1 (Sydney)
Multi-region : EU
Regions :
europe-central2 (Warsaw)
europe-north1 (Finland)
europe-west1 (Belgium)
europe-west2 (London)
europe-west3 (Frankfurt)
europe-west4 (Netherlands)
europe-west6 (Zurich)
Regions :
me-central1 (Doha)
me-central2 (Dammam)
me-west1 (Tel Aviv)
If you edit your export settings to update the project or dataset where
your exported billing data is stored, previously exported billing data isn't
backfilled to your new dataset. To include the billing information that was
exported prior to the switch, you must manually join the new dataset with
the previous dataset. For more information, see
Join operation .
Warning: Don't insert data into the billing export tables, such as by
manually merging data from a previous dataset. If you manually insert data,
this data might be deleted by the Cloud Billing export process.
For your BigQuery datasets
containing standard usage cost data or detailed usage cost data , the
type of location you configure on the dataset impacts the timing
of when your Google Cloud billing data is exported to the dataset:
If you configure the dataset to use a
multi-region location
(EU or US), the dataset includes Google Cloud billing data incurred
from the start of the previous month from when you first enabled the
export. That is, Google Cloud billing data is added retroactively
for the current and previous month. For the initial backfill of
exported data, it might take up to five days for your retroactive
Cloud Billing data to finish exporting before you start seeing your
current usage data. This retroactive backfill of data only occurs the
first time you enable export. If you edit the export settings to change
the project or dataset where your exported billing data is stored, or you
are re-enabling the export , then billing data is not added
retroactively .
If your dataset is configured to use a supported
region location ,
your standard usage cost data and your detailed usage cost data only
reflect Google Cloud billing data incurred starting from the date
you enabled Cloud Billing export, and after. That is,
Google Cloud billing data is not added retroactively for
non-multi-region dataset locations , so you won't see Cloud Billing
data from before you enable export.
Note: Cloud Billing data export supports all
multi-region locations
(EU or US), and a subset of
region locations .
When you're configuring your Cloud Billing export settings, if you
create or select a dataset that's configured to use an unsupported
region location, when you attempt to save your export settings, you'll
see an Invalid dataset region error.
For more details, see
Data availability .
Your BigQuery datasets
containing pricing data only collect Google Cloud billing data incurred from
the date you set up Cloud Billing export, and after. That is,
_Google Cloud pricing data isn't added retroactively, so you won't
see Cloud Billing pricing data from before you enable export. For more details, see
Data availability .
When exporting detailed usage cost data , the detailed export
automatically includes resource-level information about Compute Engine.
To view a breakdown of Google Kubernetes Engine (GKE) cluster costs in a
detailed data export, you must also
enable cost allocation for GKE .
Dataset encryption:
Customer-managed encryption keys
(CMEK) aren't supported when exporting billing data to
BigQuery. If you enable CMEK encryption for your billing
data dataset, this type of encryption prevents Cloud Billing from
writing billing data to the appropriate tables within that dataset. Instead,
you need to enable the dataset
to use a Google-owned and Google-managed encryption key.
If you want to use BigQuery row-level security
on the table that contains your exported data, you must give the
Cloud Billing export
service account billing-export-bigquery@system.gserviceaccount.com
full access to the table
using the BigQuery TRUE filter .
The following command grants access to the Cloud Billing service account:
CREATE ROW ACCESS POLICY cloud_billing_export_policy
ON `__project_id__.__dataset_id__.__table_id__`
GRANT TO ('serviceAccount:billing-export-bigquery@system.gserviceaccount.com')
FILTER USING (TRUE);
Resource-level Tags
might take up to an hour to propagate to
BigQuery exports. If a tag was added or removed
within an hour, or if a resource has existed for less than an hour, it might
not appear in the export.
Resource-level tags are available for the following resources:
Compute Engine instances
Spanner instances
Cloud Run services
Artifact Registry repositories
Next
Set up billing data export to BigQuery
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
