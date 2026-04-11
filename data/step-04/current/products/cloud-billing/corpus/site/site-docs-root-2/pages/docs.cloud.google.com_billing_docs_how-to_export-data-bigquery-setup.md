---
title: "Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup
  title: "Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation"
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
Set up Cloud Billing data export to BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
This document provides all required steps to set up Cloud Billing data
export to BigQuery.
Note: Using BigQuery to store and query Cloud Billing
data incurs minimal fees. For more information, see
Cost of use .
To export Cloud Billing data to BigQuery, take the
following steps:
Create a project where the Cloud Billing data will be
stored, and enable billing on the project (if you haven't already
done so).
Configure permissions on the project and on the Cloud Billing account.
Enable the BigQuery Data Transfer Service API (required to export your pricing data).
Create a BigQuery dataset to store the data in.
Enable Cloud Billing export of cost data and pricing data to be written
into the dataset.
This document walks you through the details of each of these steps.
About the Google Cloud console
The Google Cloud console
( visit documentation ,
open console )
is a web UI used to provision, configure, manage, and monitor systems that use
Google Cloud products. You use the Google Cloud console to set up and
manage Google Cloud and Cloud Billing resources.
Permissions required for this task
To enable and configure the export of Google Cloud billing usage cost
data to a BigQuery dataset, you need the following
permissions:
For Cloud Billing, you need either the Billing Account Costs Manager
role or the Billing Account Administrator role on the target
Cloud Billing account.
For BigQuery, you need the
BigQuery User role for the Google Cloud project
that contains the BigQuery dataset to be used to
store the Cloud Billing data.
To enable and configure the export of Cloud Billing pricing data and
CUD metadata , you need the following permissions:
For Cloud Billing, you need the Billing Account Administrator role
on the target Cloud Billing account.
For BigQuery, you need the
BigQuery Admin role for the Google Cloud project
that contains the BigQuery dataset to be used to
store the Cloud Billing pricing data.
For the Google Cloud project containing the target dataset, you need the
resourcemanager.projects.update permission. This permission is
included in the roles/editor role.
You might also need other project permissions. If you're a member of a
Google Cloud Organization, to create a new project, you need the
Project Creator role on the Organization or Folder. Specifically, to
create a new project, you need the following permissions:
resourcemanager.organizations.get
resourcemanager.projects.create
For more information about Google Cloud permissions, see:
Overview of Cloud Billing access control
Create custom roles for Cloud Billing
Understanding Predefined Identity and Access Management Roles
Enable Cloud Billing data export to BigQuery
Interactive tutorial: Analyze billing data with BigQuery
(20 minutes)
Get started with billing data exports using this interactive tutorial.
In the tutorial, you'll enable Cloud Billing data to export to a
BigQuery dataset. Next, you'll run some sample queries
through the BigQuery web interface to examine billing
data.
Launch the billing data export tutorial
Complete the five steps in this section to enable the export of your
Cloud Billing data to BigQuery.
For a quick introduction to enabling billing data export and running sample
queries of Cloud Billing data in BigQuery, follow this
interactive tutorial for billing data export .
If you're a reseller, you can set up a reseller-specific export of your
Channel Services billing data using the Partner Sales Console . To do so,
follow steps 1-4 on this page to create your project and BigQuery
dataset. Then for step 5, see
Export Channel Services data to BigQuery
to enable the export.
1. Select or Create a project
Cloud Billing data exported to BigQuery is contained in
a BigQuery dataset. A dataset is contained within a
Google Cloud project you specify.
We recommend that you create and use a
separate Google Cloud project to contain all of your FinOps and billing
administration needs for a Cloud Billing account, including your
exported Cloud Billing data.
Learn more about the benefits of using a FinOps-focused project
for your billing administration use cases.
Caution: The Google Cloud project you select to contain your dataset
should be
linked to the same Cloud Billing account
that contains the data that you plan to export to the
BigQuery dataset.
A Google Cloud project is
linked to exactly one Cloud Billing account
at a time.
A Cloud Billing account is
linked to one or more projects .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Learn more about creating and managing projects .
2. Verify that billing is enabled
You must make sure that billing is enabled on the Google Cloud project
you select to contain your dataset, and that the Google Cloud project is
linked to the same Cloud Billing account
that contains the data that you plan to export to the
BigQuery dataset.
Learn how to
confirm billing is enabled for your project
Learn how to
view projects linked to Cloud Billing accounts
3. Enable the BigQuery Data Transfer Service API
If you plan to export your Cloud Billing pricing data to
BigQuery, you need to enable the BigQuery Data Transfer Service API. If you
don't plan to export your Cloud Billing pricing data , you can
skip to
Step 4. Create a BigQuery dataset .
The BigQuery Data Transfer Service API should be enabled in the same Google Cloud project
you're using to contain your BigQuery datasets. If you
followed the recommendation in the
project section ,
this is your FinOps or billing administration Google Cloud project.
To enable the BigQuery Data Transfer Service API, do the following:
Sign in to the Google Cloud console and go to the API page.
Go to the BigQuery Data Transfer Service API page
On the top left of the page, select a project. You must enable the
BigQuery Data Transfer Service API in the same project you are using to contain your
BigQuery dataset. If you followed the
recommendation in the
project section ,
this is your FinOps or billing administration Google Cloud project.
On the BigQuery Data Transfer Service API page, click Enable to enable the API in your
selected project.
For more information on enabling APIs, see the
Service Usage documentation .
4. Create a BigQuery dataset
Before you enable your Cloud Billing data to export to
BigQuery, you must create at least one
BigQuery dataset
to manage your exported data. You can use the same dataset to contain
your standard usage cost data, detailed usage cost data, and your pricing
data.
A dataset is contained within a Google Cloud project you specify.
Datasets are top-level containers that are used to organize and control access
to your
tables
and
views .
A table or view must belong to a dataset, so you need to create at least one
dataset before
loading data into BigQuery .
If you use an existing dataset, review the
limitations
that might impact exporting your billing data to BigQuery,
such as being unable to export data to datasets configured to use
customer-managed key encryption, or being unable to use a dataset
configured with an unsupported region location.
To create a BigQuery dataset, do the following:
Sign in to the Google Cloud console and go to the BigQuery
page.
Go to BigQuery page
In the project drop-down list (
My Project
arrow_drop_down ) at the top of the Google Cloud console page, select the
project you set up
to contain your dataset. Make note of the project ID , as you will use
that in the next steps.
In the Explorer panel, in the pinned projects section, click
arrow_right
your-project-ID to expand the project to view any existing datasets and
saved queries.
Next to the project ID , click the View actions menu
( more_vert ) and then
click Create dataset . The Create dataset panel opens.
Enter a Dataset ID . We recommend an ID that spans projects, such as
all_billing_data , rather than a project-specific ID.
Select a Data location . The data location specifies the multi-region
or region where your data is stored. All tables within this dataset share this location.
We recommend selecting a multi-region location (EU or US). For your
standard usage cost and detailed usage cost data exports,
the location you select can influence whether the previous month's data
is added to the dataset retroactively. Review the
limitations
for more information about dataset locations and data availability.
Cloud Billing export supports all
multi-region locations (EU or US). However, only a subset of dataset
region locations are supported for Cloud Billing export to
BigQuery. Review the limitations
for more information about dataset locations.
After you create the dataset, the location can't be changed .
Learn more
about locations.
Ensure that the Enable table expiration option is cleared .
If you enable table expiration and enter a number of days,
any new table created in this dataset is automatically deleted
following the specified number of days after creation.
Caution: If you delete any tables containing exported Cloud Billing
data records, those records are gone and we can't backfill the deleted
records.
In the Advanced options section, choose an Encryption setting.
The default option is Google-owned and Google-managed encryption key .
If you want to use customer-managed encryption key (CMEK) encryption,
select Customer-managed encryption key (CMEK) , and choose an
encryption key.
Warning: To use CMEK encryption for your Cloud Billing data, you
must enable CMEK at the dataset level. If you enable CMEK encryption at
the project or organization level using organization policies, the policy
prevents Cloud Billing from writing billing data to the tables in
your dataset.
To save, click Create dataset .
See the limitations
that might impact exporting your billing data to BigQuery.
If you're a reseller, you can reuse the same project and dataset you just
created when you
enable the reseller-specific Channel Services billing data export .
5. Enable Cloud Billing export to the BigQuery dataset
Note: (Resellers) You can set up a reseller-specific export of
your Channel Services billing data to a specified BigQuery
dataset using the Partner Sales Console. After completing steps 1-4 on this
page, see
Export Channel Services data to BigQuery
to enable a Channel Services export.
You enable Cloud Billing data export in the Cloud Billing
section of the Google Cloud console. These are the types of data you
can enable to export:
Standard usage cost data -
Contains standard Cloud Billing account cost usage information,
such as account ID, invoice date, services, SKUs, projects, labels,
locations, cost, usage, credits, adjustments, and currency.
Use the Standard usage export to analyze broad trends in your cost data.
Detailed usage cost data -
Contains detailed Cloud Billing account cost usage information.
Includes everything in the standard usage cost data plus resource-level
cost data, like a virtual machine or SSD that generates service usage.
Use the Detailed export to analyze costs at the resource level, and
identify specific resources that might be driving up your costs.
The detailed export automatically includes resource-level information
about Compute Engine. To view a breakdown of Google Kubernetes Engine (GKE)
cluster costs in a detailed data export, you must also
enable cost allocation for GKE .
Pricing data -
Contains Cloud Billing account pricing information, such as
account ID, services, SKUs, products, geographic metadata, pricing units,
currency, aggregation, and tiers.
Committed use discounts (CUD) metadata
(Preview) -
Contains Cloud Billing CUD metadata information, such as billing
account ID, CUD product ID, CUD product type, consumption model ID and
description, subscription instance ID, subscription entitlement scope,
commitment amount, and term. For a list of export fields, see
Structure of CUD metadata export .
Note: If you use VPC Service Controls for BigQuery resources on
your project or organization, you must create
ingress and egress rules
to properly enable CUD metadata exports.
To enable your Cloud Billing usage cost or pricing data to be
exported to BigQuery, do the following:
In the Google Cloud console, go to the Billing export page.
Go to the Billing export page
At the prompt, choose the Cloud Billing account
for which you'd like to export billing data. The Billing export page opens for the selected billing account.
On the BigQuery export tab, click Edit settings for
each type of data you'd like to export. Each type of data is configured
separately.
From the Projects list, select the
project that you set up
to contain your
BigQuery dataset .
The project you select is used to store the exported data in the
BigQuery dataset.
For standard and detailed usage cost data exports, the
Cloud Billing data includes usage and cost data for all
Google Cloud projects paid for by the same Cloud Billing account .
For pricing data export, the Cloud Billing data includes only the
pricing data specific to the
Cloud Billing account that is linked to the selected dataset project .
For CUD metadata export, it contains CUD metadata for all CUDs purchased
in any of the projects linked to the billing account.
Note: If you use VPC Service Controls for BigQuery resources on
your project or organization, you must create
ingress and egress rules
to properly enable CUD metadata exports.
From the Dataset ID field, select the
dataset that you set up
to contain your exported Cloud Billing data.
For all types of Cloud Billing data exported to
BigQuery, the following applies:
The BigQuery API is required to export data to
BigQuery. If the project you selected doesn't have the
BigQuery API enabled, you're prompted to enable it.
Click Enable BigQuery API to enable the API.
If the project you selected doesn't contain any
BigQuery datasets, you're prompted to create one.
If necessary,
follow these steps to create a new dataset .
If you use an existing dataset, review the
limitations
that might impact exporting your billing data to
BigQuery, such as being unable to export data to datasets
configured to use a CMEK , or being unable to use a dataset configured
with an unsupported region location.
For pricing data export, the BigQuery Data Transfer Service API is required to export the
data to BigQuery. If the project you selected doesn't have
the BigQuery Data Transfer Service API enabled, you're prompted to enable it. If
necessary, follow these steps to enable the API .
Click Save .
Note: Cloud Billing data export supports all multi-region dataset
locations (EU and US). However, only a
subset of region dataset locations
are supported for
use with Cloud Billing data. When you're configuring your Cloud Billing
export settings, if you create or select a dataset that's configured to use an
unsupported region location, when you attempt to save your export
settings, you'll see an Invalid dataset region error, and your
settings aren't saved.
To correct this error, edit your export settings again, and select or
create a BigQuery dataset that's configured to use either
a multi-region location (recommended), or one of the
supported region locations .
Update Cloud Billing data to export
After you
enable your Cloud Billing data to be exported to BigQuery ,
you can change various data export settings, for example:
Change the location where your exported billing data is stored by editing the
export settings.
Change which types of billing data are exported by disabling or enabling
the different types.
Before you update the project or dataset where your billing data is stored, or
disable any of your data exports, review the
limitations
and data availability guidelines
for how these updates might impact your billing data exported to
BigQuery.
Disable a type of billing data export
To disable a type of Cloud Billing data being exported to
BigQuery, do the following:
Select Disable Standard Export , Disable Detailed Export , or
Disable Pricing Export accordingly.
Select Confirm to save your selection.
Enable a type of billing data export
To re-enable a disabled export of Cloud Billing data to
BigQuery, see
Enable your Cloud Billing data to be exported to BigQuery .
Change the project or dataset of a billing data export
To update the project or dataset where your exported billing data is stored, do the following:
For the export you want to update, select Edit settings .
On the Edit settings page, choose a different project or dataset.
Select Save to confirm your updates.
Caution: Previously exported billing data isn't backfilled automatically to the
new storage location. After switching your export settings to a new dataset, to
include the billing information that was exported prior to the switch, you must
manually join the new dataset with the previous dataset. For more information,
see Join operation .
About dataset permissions
Cloud Billing export to BigQuery uses a
service account
to manage dataset permissions.
Note: Service accounts don't apply to CUD metadata export.
After you enable Cloud Billing export to BigQuery, Google
automatically adds a service account as an owner to the dataset that you
specify. The service accounts look like this:
For the Standard and Detailed usage cost datasets: billing-export-bigquery@system.gserviceaccount.com
For the Pricing dataset: cloud-account-pricing@cloud-account-pricing.iam.gserviceaccount.com
The service accounts are owned and managed by Google and provide the
permissions that are necessary for our offline process to create a table
and write Cloud Billing records to it.
Warning: Don't remove the service accounts from your dataset. If you remove
a service account while Cloud Billing export to BigQuery is
enabled, the table isn't updated, which puts you at risk of data loss. If you
removed a service account, you must either re-add it manually or disable
and re-enable Cloud Billing export to BigQuery.
See the limitations
that might impact exporting your billing data to BigQuery.
Billing data tables
Shortly after enabling Cloud Billing export to BigQuery,
billing data tables are automatically created in the BigQuery
dataset. To learn more about these BigQuery tables and the
table schemas, see
Understanding the auto-created data tables in BigQuery .
Frequency of data loads
When you first enable the standard or detailed usage cost export to
BigQuery, it might take a few hours to start seeing
Google Cloud cost data propagate to your BigQuery
dataset. Data is exported in chronological order. If your export is
configured to include data retroactively for the current and previous month,
it might take up to five days for the exported data to fully catch up to your
current usage data.
When you first enable the pricing export to BigQuery, it
might take up to 48 hours to start seeing your Google Cloud pricing
data.
Learn more about the frequency of the data loads into your
BigQuery tables .
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
Understanding the Cloud Billing data tables in BigQuery
Example queries for Cloud Billing data export to BigQuery
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
Overview of billing data export to BigQuery
Next
Understand the billing data tables in BigQuery
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
