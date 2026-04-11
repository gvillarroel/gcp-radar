---
title: "Understand the Cloud Billing data tables in BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables
  title: "Understand the Cloud Billing data tables in BigQuery \_|\_ Google Cloud\
    \ Documentation"
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
Understand the Cloud Billing data tables in BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
This document provides reference information for the schema of the
Cloud Billing data that's exported to each table in
BigQuery.
Billing data tables
Shortly after
enabling Cloud Billing export to BigQuery ,
billing data tables are automatically created in the BigQuery
dataset.
Standard usage cost table
– In your BigQuery dataset, this table is named
gcp_billing_export_v1_<BILLING_ACCOUNT_ID> .
Detailed usage cost table
– This includes all of the data fields from the standard usage cost
table, along with additional fields that provide resource-level cost data,
such as a virtual machine or SSD that generates service usage.
In your BigQuery dataset, this table is named
gcp_billing_export_resource_v1_<BILLING_ACCOUNT_ID> .
Pricing data table
– In your BigQuery dataset, this table name is
cloud_pricing_export .
Committed use discounts (CUD) metadata
(Preview)
– This includes CUD metadata such as billing account ID, product ID, consumption model ID, commitment amount units and values, and more. In your BigQuery dataset, this table name is cud_subscriptions_export .
Warning: Don't modify these tables, such as
by adding a column or manually re-creating the tables. Doing so can cause data
to stop exporting, or any data appended manually to the tables to be lost,
until the changes are reverted or the tables are deleted.
If you want to consolidate billing data from past configurations or
versions of Cloud Billing export to BigQuery, we recommend
keeping the data in separate tables and using a UNION query instead.
Learn more
about these limitations.
Frequency of data loads
Standard and detailed usage cost export
When you first enable the standard or detailed usage cost export to
BigQuery, it might take a few hours to start seeing
Google Cloud cost data propagate to your BigQuery
dataset. Data is exported in chronological order. If your export is
configured to include data retroactively
for the current and previous month,
it might take up to five days for the exported data to fully catch up to your
current usage data.
Google Cloud services report usage and cost data to Cloud Billing
processes at varying intervals.
Cloud Billing exports usage and cost data to your
BigQuery dataset at regular intervals (there are no
delivery or latency guarantees for the export to BigQuery).
Because the usage reporting frequency varies by Google Cloud service,
you might not see Cloud Billing usage and cost data right away for all
recently used Google Cloud services.
Pricing and CUD metadata export
When you first enable the pricing export to BigQuery, it
might take up to 48 hours to start seeing your Google Cloud pricing
data.
After you enable pricing export, the pricing data applicable to your
Cloud Billing account is exported to BigQuery once
each day.
Data availability
For customers who enable the standard or detailed usage cost
data export for the first time :
If you configure your
BigQuery dataset
to use a
multi-region location
(EU or US), Cloud Billing data is exported retroactively from the start
of the previous month. For example, if you enable standard usage cost or
detailed usage cost data export on September 23rd, your export will
include data beginning August 1st.
We export data in chronological order, one day at a time, so the data from
the first day of the last month is populated first. For the initial
backfill of exported data, it might take up to five days for your
retroactive Cloud Billing data to finish exporting before you start
seeing your most recent usage data.
If you configure your
BigQuery dataset
to use a supported
region location ,
your standard usage cost or detailed usage cost data is available
from the date you enable Cloud Billing export, and after. That is,
Google Cloud billing data is not added retroactively for
non-multi-region dataset locations , so you won't see Cloud Billing
data from before you enable export.
For customers who have enabled, disabled, and subsequently re-enabled the
standard usage cost or detailed usage cost data export, the
Cloud Billing data might not be available for the period when export
was explicitly disabled.
If you enable the pricing data export, your
BigQuery dataset only reflects Cloud Billing data
incurred from the date when you first enabled the pricing export, and after.
Cloud Billing pricing data isn't added retroactively, so you won't see
pricing data for dates that occurred before you enabled export.
The data in the BigQuery datasets reflects the state of your
resources at the time that the usage was recorded. If you make changes to
your resources, such as adding new labels to a project, or changing a
project's hierarchy (which would change project.ancestors ), those changes
are only shown in future exports of usage data. Previously exported records
aren't changed.
If you delete any exported data (such as BigQuery export
records), we can't backfill the deleted records.
If you
edit the settings of an export
to update the project or dataset where your exported billing data is stored,
data from the previous dataset isn't automatically backfilled into the new
dataset; the new BigQuery dataset only reflects
Cloud Billing data incurred from the date when you changed the export
settings, and after. To include the complete record of exported billing data,
you must manually join the new dataset with the previous dataset. For more
information, see
Join operation .
BigQuery loads are
ACID compliant ,
so if you query the BigQuery Cloud Billing export dataset
while data is being loaded into it, you won't encounter partially loaded
data.
See other limitations
that might impact exporting your billing data to BigQuery,
such as datasets with customer-managed encryption keys (CMEK) enabled.
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
Related topics
Topics related to exported Cloud Billing data
Set up Cloud Billing data export to BigQuery
Standard usage cost table
Detailed usage cost table
Pricing data table
Visualize spend over time with Looker Studio
Cost and pricing reports available in the Google Cloud console
View your Cloud Billing reports and cost trends
View and download the cost details of your invoice or statement
View and download prices for Google's cloud services
Understand your savings with cost breakdown reports
Analyze the effectiveness of your committed use discounts
View your cost and payment history
Previous
arrow_back
Set up billing data export to BigQuery
Next
Structure of Standard data export
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
