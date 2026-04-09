---
title: "Create data products \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/create-data-products
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/create-data-products
  title: "Create data products \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Guides
Send feedback
Create data products
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document is intended for data product owners who want to create and
configure data products in Dataplex Universal Catalog.
For more information about the architecture and key concepts of
data products, see About data products .
Before you begin
Enable the Dataplex, BigQuery APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Ensure that your data assets (for example, BigQuery datasets,
tables, and views) are created and populated.
For more information about creating data assets, see the following documents:
Create BigQuery datasets
Create and use BigQuery tables
Create logical views in BigQuery
Create materialized views in BigQuery
Identify or create the Google groups
that you want to configure in your data product. Each data product must have
a unique Google group.
Required roles
This section outlines the minimum IAM roles required for two
primary user groups: data product owners (those who create and manage data
products) and data product consumers (those who search for and use data
products).
Roles for a data product owner
To get the permissions that
you need to create and manage data products,
ask your administrator to grant you the
following IAM roles on the project:
Full permissions to create, update, delete, and manage permissions for data products:
Dataplex Data Products Admin ( roles/dataplex.dataProductsAdmin )
Update and manage existing data products:
Dataplex Data Products Editor ( roles/dataplex.dataProductsEditor )
Add aspects such as schema , overview , and contacts :
Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner )
Search for and add assets:
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
Edit system aspect types such as documentation and contract aspect of refresh cadence:
Dataplex Catalog Editor ( roles/dataplex.catalogEditor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create and manage data products. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create and manage data products:
Edit the overview system aspect type:
dataplex.entryGroups.useOverviewAspect
Edit the refresh cadence system aspect type:
dataplex.entryGroups.useRefreshCadenceAspect
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Roles for a data product consumer
For the data product consumers to search for, view, and request access to
data products, as a data product owner, you must ensure the data product is
discoverable. To do this, grant the data product consumers the following
IAM roles on the data product:
Search for data products and access them in Dataplex Universal Catalog Search:
Dataplex Data Product Consumer ( dataplex.dataProductsConsumer )
Read-only access to view data product definitions and metadata:
Dataplex Data Product Viewer ( dataplex.dataProductsViewer )
Request access to data products: Dataplex Data Product Consumer
( dataplex.dataProductsConsumer )
Create and configure a data product
Note: The REST API methods for creating and updating data products and assets are long-running operations. When you call these methods, the API returns an Operation object that you can use to check the status of the task.
Creating a data product involves the following high-level tasks:
Create a data product
This mandatory initial step requires defining core
details such as a unique data product name, description, region where the
data product is created, and owner details.
Optional: Add assets
In this phase, you select assets to include in the data product. A key
constraint is that assets must reside in the same region as the data product
itself. You can add a maximum of 10 assets to a data product.
For the list of supported assets, see
Assets supported .
Optional: Configure access groups and asset permissions
In this optional phase, you simplify access control by creating access
groups. These access groups act as user-friendly aliases (for example,
Analyst or Reader ) for underlying Google groups. You then assign
permissions by selecting a specific IAM role and mapping it
to an access group for a specific asset.
Optional: Add additional details such as contracts, aspects, and documentation
This optional phase enhances governance and metadata. You can add a
contract, which is a first-party aspect type, to formally communicate the
agreed-upon data refresh cadence, specifying parameters such as refresh
frequency, refresh time, and threshold. You also include
Aspects to provide
additional metadata for your data product. Additionally, you add rich text
documentation, such as user guides and sample queries.
Note: You can perform the optional steps during data product creation or post
creation.
To create and configure a data product, complete the steps in the following
sections:
Create a data product
Console
In the Google Cloud console, go to the Dataplex Universal Catalog Data products page.
Go to Data products
Click Create .
In the Create data products pane, enter the following details:
Data product name : Enter a unique name for your data product.
Data product ID : This is an auto-generated unique identifier.
You can edit this field.
Project ID : This is a unique identifier of the project where the
data product is created. Browse and select the project.
Region : Select the region or multi-region where the data product is
created.
Icon : Browse and select an icon to visually identify the data
product. This is optional.
Description : Enter a brief description of the data product.
Contacts : Enter the email ID of the data product owner.
Labels : Add key-value labels to organize your resources. This is
optional.
Click Create data product .
REST
To create a data product, use the
dataProducts.create
method.
For example, send the following POST request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"display_name": " DISPLAY_NAME ", "owner_emails": [" EMAIL_IDs "]}' \
https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /dataProducts?data_product_id= DATA_PRODUCT_ID
Replace the following:
DISPLAY_NAME : a user-friendly name for your
data product
EMAIL_IDs : comma-separated email IDs of the
data product owners
PROJECT_ID : the ID of your Google Cloud
project
LOCATION : the region in which you want to
create the data product
DATA_PRODUCT_ID : a unique ID for your data
product
Terraform
To create a data product, use the
google_dataplex_data_product
resource.
resource "google_dataplex_data_product" "example_product" {
project = " PROJECT_ID "
location = " LOCATION "
data_product_id = " DATA_PRODUCT_ID "
display_name = " DISPLAY_NAME "
description = " DESCRIPTION "
owner_emails = [" EMAIL_IDs "]
provider = google-beta
}
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the region in which you want to create
the data product
DATA_PRODUCT_ID : a unique ID for your data product
DISPLAY_NAME : a user-friendly name for your data
product
DESCRIPTION : a brief description of the data
product
EMAIL_IDs : comma-separated email IDs of the data
product owners, for example— ["user1@example.com", "user2@example.com"]
Optional: Add assets
Console
In the Add assets pane, click +Add .
Search for and select the assets that you want to add to your data product.
The assets you select must reside in the same region as the data product.
If you have necessary permissions, you can view the metadata of assets by
clicking the asset.
To refine the search results, use Filters .
After you select the assets, click Add .
Note: In preview, you can add a maximum of 10 assets to a data product.
Click Continue .
REST
To add a data asset to your data product, use the
dataAssets.create
method.
For example, send the following POST request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"resource": " RESOURCE_NAME "}' \
https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID /dataAssets?data_asset_id= DATA_ASSET_ID
Replace the following:
RESOURCE_NAME : the
full resource name of the data asset (for
example,
//bigquery.googleapis.com/projects/ PROJECT_ID /datasets/ DATASET_ID /tables/ TABLE_ID )
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the region where the data product exists
DATA_PRODUCT_ID : the ID of the data product
DATA_ASSET_ID : a unique ID for this data asset
within the data product
Terraform
To add a data asset to your data product, use the
google_dataplex_data_product_data_asset
resource.
resource "google_dataplex_data_product_data_asset" "example_asset" {
project = " PROJECT_ID "
location = " LOCATION "
data_product_id = " DATA_PRODUCT_ID "
data_asset_id = " DATA_ASSET_ID "
resource = " RESOURCE_NAME "
provider = google-beta
}
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the region where the data product exists
DATA_PRODUCT_ID : the ID of the data product
DATA_ASSET_ID : a unique ID for this data asset
within the data product
RESOURCE_NAME : the
full resource name of the data asset (for
example,
//bigquery.googleapis.com/projects/ PROJECT_ID /datasets/ DATASET_ID /tables/ TABLE_ID )
Optional: Configure access groups and asset permissions
In the Configure access groups and asset permissions pane, you can create
access groups and assign
permissions to assets.
Configure access groups
Console
Click Add access group .
In the Access group name field, enter a name for the access group.
For example, Analyst .
In the Access group description field, enter a description for the
access group.
In the Access group identifier field, enter the email address of
a Google group that you want to assign to this access group. Data
product consumers who request access to this access
group can be added as members to the mapped Google group.
If you don't have a Google group, you can create one. For more
information, see
Create and manage Google groups in the Google Cloud console .
Note: You can add a maximum of three access groups per data product.
Click Add .
REST
To configure an access group for the data product, use the
dataProducts.patch
method.
For example, send the following PATCH request:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"access_groups": ACCESS_GROUPS_MAP }' \
https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID ?update_mask="access_groups"
Replace the following:
ACCESS_GROUPS_MAP : a JSON object representing a
map where each key is an access group ID and the value is an
AccessGroup
object. For example:
{
"analyst" : {
"id" : "analyst" , "display_name" : "Analyst access group" , "description" : "Access group for analysts" , "principal" :
{ "google_group" : "analyst-team@example.com" }
}
}
PROJECT_ID : the ID of your Google Cloud
project
LOCATION : the region where the data
product exists
DATA_PRODUCT_ID : the ID of your data product
Terraform
To define access groups for your data product, use the access_groups nested
block within the
google_dataplex_data_product
resource.
For example, use the following configuration:
resource "google_dataplex_data_product" "example_data_product" {
project = " PROJECT_ID "
location = " LOCATION "
data_product_id = " DATA_PRODUCT_ID "
display_name = " DISPLAY_NAME "
owner_emails = [" EMAIL_IDs "]
access_groups {
id = "analyst" # Internal identifier for configuration
group_id = "analyst" # Unique identifier of the access group, should be same as the 'id'
display_name = "Business Analyst"
description = "Access group for regional analysts"
principal {
google_group = "analyst-team@example.com"
}
provider = google-beta
}
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the region where the data product
exists
DATA_PRODUCT_ID : a unique ID for the data product
DISPLAY_NAME : a user-friendly name for your data
product
EMAIL_IDs : comma-separated email IDs of the data
product owners, for example— ["user1@example.com", "user2@example.com"]
Configure asset permissions
After you configure access groups, you can configure permissions for the
assets in the data product.
Console
In the Asset permissions section, select the asset for which you
want to configure permissions.
Click Configure permissions .
In the Select access group field, select an access group.
In the Assign IAM role field, select an IAM role
that you want to assign to the access group.
For example, if your asset is a BigQuery table named
Sales , and if you selected Analyst access group, and assigned
BigQuery Metadata Viewer role to this access group, the data product
consumers who are part of the Analyst access group have
BigQuery Metadata Viewer permission on the Sales table.
You can add multiple roles to an asset.
Click Configure . The asset now shows its assigned permissions.
To configure permissions for other assets, repeat the steps.
Click Continue .
REST
To configure permissions for the assets in the data product, use the
dataAssets.patch
method.
For example, send the following PATCH request:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"access_group_configs": ACCESS_GROUP_CONFIGS_MAP }' \
https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID /dataAssets/ DATA_ASSET_ID ?update_mask="access_group_configs"
Replace the following:
ACCESS_GROUP_CONFIGS_MAP : a JSON object
representing a map where each key is an access group ID and the value is an
AccessGroupConfig
object. For example:
{
"analyst" : {
iam_roles : [ "roles/bigquery.dataViewer" ]
}
}
PROJECT_ID : the ID of your Google Cloud
project
LOCATION : the region where the data
product exists
DATA_PRODUCT_ID : the ID of your data product
DATA_ASSET_ID : the ID of the asset for which
you want to configure permissions
Terraform
Assign IAM roles to your access groups for specific assets
using the access_group_configs block in the
google_dataplex_data_product_data_asset
resource.
For example, use the following configuration:
resource "google_dataplex_data_product_data_asset" "example_data_asset" {
project = " PROJECT_ID "
location = " LOCATION "
data_product_id = " DATA_PRODUCT_ID "
data_asset_id = " DATA_ASSET_ID "
resource = " RESOURCE_NAME "
access_group_configs {
access_group = "analyst" # Must match the 'id' defined in google_dataplex_data_product
iam_roles = ["roles/bigquery.dataViewer"]
}
provider = google-beta
}
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the region where the data product exists
DATA_PRODUCT_ID : the ID of the data product
DATA_ASSET_ID : a unique ID for this data asset
within the data product
RESOURCE_NAME : the
full resource name of the data asset (for
example,
//bigquery.googleapis.com/projects/ PROJECT_ID /datasets/ DATASET_ID /tables/ TABLE_ID )
Optional: Add additional details
You can also add contracts, aspects, and additional documentation for the data
product.
Add a contract
To establish a foundation of trust between data producers and consumers, you
can attach a contract to your
data product. By specifying parameters such as refresh time and thresholds, you
provide consumers with the necessary context to understand when the data is
updated and whether it meets their specific business requirements.
Console
In the Add additional details pane, click Add contract .
In the Select contract field, select Refresh cadence .
In the Frequency field, select an agreed-upon schedule for how
often data is updated or delivered, ensuring a predictable flow
from data producer to data consumer. For example, Weekly .
In the Refresh time field, enter a maximum acceptable time when data is
updated at its source and when it becomes available to the consumer.
For example, 23:00&nbsp;PST .
In the Threshold (in minutes) field, enter a measurable limit in minutes
for the acceptable delay in data delivery. For example, enter 30
to set threshold as 30 minutes.
Optional: In the Cron schedule field, enter a cron expression that
defines the schedule for data generation and delivery in the
format: MINUTE HOUR DAY_OF_MONTH MONTH DAY_OF_WEEK
The following are the accepted values:
MINUTE : 0 - 59
HOUR : 0 - 23
DAY_OF_MONTH : 1 - 31
MONTH : 1-31 or JAN-DEC
DAY_OF_WEEK : 0-6 or SUN-SAT
For example, 0 8 * * 1-5 runs at 8:00 AM on weekdays (Monday-Friday).
Click Save .
REST
Contracts are modeled as
aspects on the data product.
To add a Refresh Cadence contract for a data product, use the
entries.patch
method.
For example, send the following PATCH request:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d \
'{
"aspects": {
"dataplex-types.global.refresh-cadence": {
"aspectType": "projects/dataplex-types/locations/global/aspectTypes/refresh-cadence",
"data": {
"frequency": " REFRESH_FREQUENCY "
}
}
}
}' \
"https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ DATA_PRODUCT_LOCATION /dataProducts/ DATA_PRODUCT_ID ?updateMask=aspects"
Replace the following:
REFRESH_FREQUENCY : the agreed-upon schedule for
how often data is updated or delivered, ensuring a predictable flow from
data producer to data consumer. For example: Weekly
PROJECT_ID : the ID of your Google Cloud project
where the API call is being made
LOCATION : the region of the Dataplex Universal Catalog
service endpoint you are calling (for example, us-central1 )
DATA_PRODUCT_PROJECT_NUMBER : the project number where the
data product resource is located
DATA_PRODUCT_LOCATION : the location of the data
product resource
DATA_PRODUCT_ID : the ID of your data product
Note: The project number is a unique, automatically generated numeric
identifier that is different from your Project ID. For more information on how
to find or retrieve your project number, see
Identifying projects .
Terraform
Contracts are modeled as
aspects on the data product.
To manage a contract, you must manage the underlying Dataplex Universal Catalog
entry. Because Terraform doesn't automatically discover existing aspects, you
must first import the
google_dataplex_entry .
To import the entry, use the following command:
terraform import google_dataplex_entry.data_product_metadata "projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID "
Terraform configuration:
resource "google_dataplex_entry" "data_product_metadata" {
project = " DATA_PRODUCT_PROJECT_NUMBER "
location = " LOCATION "
entry_group_id = "@dataplex"
entry_id = "projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID "
entry_type = "projects/655216118709/locations/global/entryTypes/data-product"
aspects {
aspect_key = "655216118709.global.refresh-cadence"
aspect {
data = jsonencode({
frequency = " REFRESH_FREQUENCY "
})
}
}
provider = google-beta
}
Replace the following:
DATA_PRODUCT_PROJECT_NUMBER : the project number
where the data product resource is located
LOCATION : the region of the Dataplex Universal Catalog
service endpoint you are calling (for example, us-central1 )
DATA_PRODUCT_ID : the ID of your data product
REFRESH_FREQUENCY : the agreed-upon schedule for
how often data is updated or delivered, ensuring a predictable flow from data
producer to data consumer. For example: Weekly
For general information on the import process, refer to the
Terraform import documentation .
Add aspects
Use aspects to enrich your
data product with structured, reusable metadata. These templates provide a
standardized way for data producers to communicate the quality and fitness of a
data product, improving governance and helping consumers determine if the product
meets their business needs.
To add aspects for the data product, follow these steps:
Console
In the Add additional details pane, click + Add aspect .
In the Select aspect type field, search for and select an aspect
type from the list. For example, Geo context .
In the Country field, select the country to which the asset belongs.
In the Region field, select the business region to which the asset
belongs.
Click Save .
REST
To add aspects for a data product, use the
entries.patch
method.
For example, send the following PATCH request:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d \
'{
"aspects": {
" ASPECT_PROJECT_ID . ASPECT_LOCATION . ASPECT_NAME ": {
"aspectType": "projects/ ASPECT_PROJECT_ID /locations/ ASPECT_LOCATION /aspectTypes/ ASPECT_NAME ",
"data": {}
}
}
}' \
"https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ DATA_PRODUCT_LOCATION /dataProducts/ DATA_PRODUCT_ID ?updateMask=aspects"
Replace the following:
ASPECT_PROJECT_ID : the ID of your Google Cloud
project where the aspect is created
ASPECT_LOCATION : the region of the
Dataplex Universal Catalog service endpoint where the aspect is created
(for example, us-central1 )
ASPECT_NAME : the name of the aspect you want to
attach to the data product
PROJECT_ID : the ID of your Google Cloud project
where the API call is being made
LOCATION : the region of the Dataplex Universal Catalog
service endpoint you are calling (for example, us-central1 )
DATA_PRODUCT_PROJECT_NUMBER : the project number
where the data product resource is located
DATA_PRODUCT_LOCATION : the location of the data
product resource
DATA_PRODUCT_ID : the ID of your data product
Terraform
To manage aspects, you must manage the underlying Dataplex Universal Catalog entry.
Because Terraform doesn't automatically discover existing aspects, you must
first import the
google_dataplex_entry .
To import the entry, use the following command:
terraform import google_dataplex_entry.data_product_metadata "projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID "
Terraform configuration:
resource "google_dataplex_entry" "data_product_metadata" {
project = " DATA_PRODUCT_PROJECT_NUMBER "
location = " LOCATION "
entry_group_id = "@dataplex"
entry_id = "projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID "
entry_type = "projects/655216118709/locations/global/entryTypes/data-product"
aspects {
aspect_key = " ASPECT_PROJECT_NUMBER . ASPECT_LOCATION . ASPECT_NAME "
aspect {
data = {}
}
}
provider = google-beta
}
Replace the following:
DATA_PRODUCT_PROJECT_NUMBER : the project number
where the data product resource is located
LOCATION : the region of the Dataplex Universal Catalog
service endpoint you are calling (for example, us-central1 )
DATA_PRODUCT_ID : the ID of your data product
ASPECT_PROJECT_NUMBER : the Google Cloud project
number where the aspect is created
ASPECT_LOCATION : the region of the
Dataplex Universal Catalog service endpoint where the aspect is created
(for example, us-central1 )
ASPECT_NAME : the name of the aspect you want to
attach to the data product
For general information on the import process, refer to the
Terraform import documentation .
Add documentation
Documentation provides the essential context for consumers to understand and
use a data product effectively. You can include rich-text details such as user
guides, sample SQL queries, and business logic descriptions to help users
generate insights from the underlying assets. In Dataplex Universal Catalog,
documentation is managed through the overview system aspect.
To add documentation for the data product, follow these steps:
Console
In the Add additional details pane, click
edit Edit next to
Documentation .
Type in the content in the rich-text editor.
Click Save .
The newly created data product appears on the Dataplex Universal Catalog
Data products page.
REST
Documentation is modeled as
aspects on the data product.
To add documentation, use the
entries.patch
method.
For example, send the following PATCH request:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d \
'{
"aspects": {
"dataplex-types.global.overview": {
"aspectType": "projects/dataplex-types/locations/global/aspectTypes/overview",
"data": {
"content": " DOCUMENTATION "
}
}
}
}' \
"https://dataplex.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ DATA_PRODUCT_LOCATION /dataProducts/ DATA_PRODUCT_ID ?updateMask=aspects"
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
where the API call is being made
LOCATION : the region of the Dataplex Universal Catalog
service endpoint you are calling (for example, us-central1 )
DATA_PRODUCT_PROJECT_NUMBER : the project number
where the data product resource is located
DATA_PRODUCT_LOCATION : the location of the data
product resource
DATA_PRODUCT_ID : the ID of your data product
DOCUMENTATION : the content that you want to
attach to the data product
Terraform
Documentation is modeled as
aspects on the data product.
To manage documentation, you must manage the underlying Dataplex Universal Catalog
entry. Because Terraform doesn't automatically discover existing aspects, you
must first import the
google_dataplex_entry .
To import the entry, use the following command:
terraform import google_dataplex_entry.data_product_metadata "projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID "
Terraform configuration:
resource "google_dataplex_entry" "data_product_metadata" {
project = " DATA_PRODUCT_PROJECT_NUMBER "
location = " LOCATION "
entry_group_id = "@dataplex"
entry_id = "projects/ DATA_PRODUCT_PROJECT_NUMBER /locations/ LOCATION /dataProducts/ DATA_PRODUCT_ID "
entry_type = "projects/655216118709/locations/global/entryTypes/data-product"
aspects {
aspect_key = "655216118709.global.overview"
aspect {
data = jsonencode({
content = " DOCUMENTATION "
})
}
}
provider = google-beta
}
Replace the following:
DATA_PRODUCT_PROJECT_NUMBER : the project number
where the data product resource is located
LOCATION : the region of the Dataplex Universal Catalog
service endpoint you are calling (for example, us-central1 )
DATA_PRODUCT_ID : the ID of your data product
DOCUMENTATION : the content that you want to
attach to the data product
For general information on the import process, refer to the
Terraform import documentation .
What's next
Learn more about managing data products .
Learn how to search for data products .
As a data consumer, learn how to
request access to data products .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
