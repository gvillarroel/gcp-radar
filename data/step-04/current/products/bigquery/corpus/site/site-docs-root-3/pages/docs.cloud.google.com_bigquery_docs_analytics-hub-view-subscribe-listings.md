---
title: "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/introduction?authuser=3
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings
  title: "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
View and subscribe to listings and data exchanges
This document describes how to view and subscribe to listings and data exchanges
in BigQuery sharing (formerly Analytics Hub). As a BigQuery sharing
subscriber, you can view and subscribe to listings and data exchanges for which
you have access. Subscribing to a listing or a data exchange in
BigQuery sharing creates a linked dataset in your Google Cloud project.
Required roles
To get the permissions that you need to use listings, ask your
BigQuery sharing administrator to grant you the following
Identity and Access Management (IAM) roles on the BigQuery sharing subscriber
project:
Discover listings :
Analytics Hub Viewer ( roles/analyticshub.viewer )
Discover data exchanges :
Analytics Hub Viewer ( roles/analyticshub.viewer )
Subscribe to listings :
BigQuery User ( roles/bigquery.user )
To subscribe to listings, you must also ask the BigQuery sharing
listing publisher to grant you the
Analytics Hub Subscriber role
( roles/analyticshub.subscriber ) on their listing, exchange, or project,
depending on the scope that's most appropriate for your use case.
Subscribe to data exchanges :
BigQuery User ( roles/bigquery.user )
To subscribe to data exchanges in the context of data clean room exchanges,
you must also ask the BigQuery sharing exchange publisher to grant
you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on
the specific data clean room. Additionally, you must ask the destination
project owners in the BigQuery sharing subscriber organization to
grant you the
Analytics Hub Subscription Owner role
( roles/analyticshub.subscriptionOwner ) on the destination project.
View linked datasets :
BigQuery Data Viewer
( roles/bigquery.dataViewer )
Query linked datasets :
BigQuery Data Viewer
( roles/bigquery.dataViewer )
Update linked datasets :
BigQuery Data Owner
( roles/bigquery.dataOwner )
View table metadata :
BigQuery Data Viewer
( roles/bigquery.dataViewer )
Delete linked datasets :
BigQuery Admin
( roles/bigquery.admin )
For more information about granting roles, see
Manage access to projects, folders, and organizations .
These predefined roles contain the permissions required to perform the tasks in
this document. To see the exact permissions that are required to create and
query datasets, expand the Required permissions section:
Required permissions
Create new datasets: bigquery.datasets.create or bigquery.datasets.* to
perform additional actions on datasets.
Query datasets: bigquery.jobs.create or bigquery.jobs.* to perform
additional actions on jobs.
You might also be able to get these permissions with
custom roles
or other
predefined roles .
Discover listings
To discover public and private listings, follow these steps:
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
Click Search listings . A dialog appears containing listings that you can
access.
To filter listings by their name or description, enter the name or
description of the listing in the Search for listings field.
In the Filters section, you can filter listings based on the following
fields:
Listings : select whether you want to view private listings, public
listings, or
listings
within your organization.
Categories : select one or more categories.
Location : select a location. You can only search by data
exchange location. For more information, see
Supported regions .
Provider : select the data provider. Some data providers require you to
request access to their commercial datasets. After requesting access,
the data provider contacts you to share their datasets.
Browse through the filtered listings.
Discover data exchanges
To discover data exchanges, follow these steps:
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
Click Search listings . A dialog appears containing listings and data
exchanges that you can subscribe to.
To filter data exchanges by their name or description, enter the name or
description of the data clean room exchange in the Search for listings
field.
In the Filters section, you can filter data clean room exchanges based on
the following fields:
Listings : select the Clean rooms checkbox to view the data clean
rooms shared with you.
Categories : select one or more categories.
Location : select a location. You can only search by the data
exchange location. For more information, see
Supported regions .
Browse through the filtered data clean rooms.
Subscribe to listings
Subscribing to a listing
gives you read-only access to the data in the listing by creating a
linked dataset
in your project.
Caution: We recommend that you avoid placing data in a project that is within a
VPC Service Controls perimeter. If you do so, then you must add the appropriate
ingress and egress rules .
To subscribe to a listing, follow these steps:
Console
To view a list of listings that you have access to, follow the steps in
Discover listings .
Browse through the listings and click a listing that you want to subscribe
to. A dialog with the listing details appears. The dialog shows if the
provider enabled subscriber email logging. In the Additional details
section, you can see the regions where the provider made the listing
available.
If you don't have access to subscribe to a listing, such as a listing
referencing a commercial dataset , then click Request access or
Purchase via Marketplace . If you click a dataset that you can subscribe
to, then click Subscribe to open the Create linked dataset dialog.
If you don't have the Analytics Hub API enabled in your project,
an error message appears with a link to enable the API. Click
Enable Analytics Hub API .
In the Create linked dataset dialog, specify the following details:
Project : specify the name of the project in which you want to add the
dataset.
Linked dataset name : specify the name of the linked dataset.
Primary region : select the region where you want to create the
linked dataset.
Note: The selected primary region doesn't need to be the same as the
provider's primary region. You might choose to colocate your linked
dataset in the same region as the provider to minimize data replication
latency.
Optional: Replica regions
( Preview ):
select the region or regions where you want to create additional linked
dataset secondary replicas. You might choose to colocate your linked
dataset in the same region as your other data to minimize egress and
facilitate cross-dataset joins. To create linked dataset replicas, you
must have the bigquery.datasets.update permission on the linked dataset.
Note: Linked dataset replicas are created on a best-effort basis.
If permissions are missing, replicas aren't created.
To save your changes, click Save . The linked dataset is listed in your
project.
API
Use the
projects.locations.dataExchanges.listings.subscribe method .
POST https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE_ID /listings/ LISTING_ID :subscribe
Replace the following:
PROJECT_ID : the project ID of the listing that you
want to subscribe to.
LOCATION : the location for your listing that you
want to subscribe to.
DATAEXCHANGE_ID : the data exchange ID of the
listing that you want to subscribe to.
LISTING_ID : the listing ID that you want to
subscribe to.
In the body of the request, specify the dataset where you want to create the
linked dataset .
To create a subscription with linked dataset replicas available in multiple
regions
( Preview ),
specify the primary
region of the linked dataset using the location field in the request body.
For the secondary regions where you want to create linked dataset replicas,
you can optionally use the destinationDataset.replica_locations field in
the request body and list all the selected secondary replica regions. Ensure
that the specified regions in the location property and in the
destinationDataset.replica_locations field are regions where the associated
listing is available.
Note: Linked dataset replicas are created on a best-effort basis. If
the bigquery.datasets.update permission is missing on the linked dataset,
replicas aren't created.
If the request is successful, the response body contains the
subscription object .
If you enable subscriber email logging for the data exchange or listing with
the logLinkedDatasetQueryUserEmail field, the subscription response contains
log_linked_dataset_query_user_email: true . The logged data is available in
the job_principal_subject field of the
INFORMATION_SCHEMA.SHARED_DATASET_USAGE view .
If you enable stored procedure sharing
( Preview ), the listing response
contains stored_procedure_config: true .
Note: BigQuery sharing subscribers must
authorize shared stored procedures
in a linked dataset to read from and write to certain resources owned by
the subscriber.
Subscribe to data exchanges
Subscribing to a
data exchange
gives you read-only access to the data in the data clean room exchange by
creating a
linked dataset
in your project.
To subscribe to a data clean room exchange, follow these steps:
Console
To view a list of data clean room exchanges that you have access to, follow
the steps in
Discover data exchanges .
Browse through the data clean room exchanges and click a data clean room
exchange that you want to subscribe to. A dialog with the data clean room
exchange details appears.
If you click a data clean room exchange that you can subscribe
to, then click Subscribe to open the
Add data clean room to project dialog.
If you don't have the Analytics Hub API enabled in your project,
an error message appears with a link to enable the API. Click
Enable Analytics Hub API .
In the Add data clean room to project dialog, specify the following
details:
Destination : specify the name of the project in which you want to add
the dataset.
To save your changes, click Save . The linked dataset is listed in your
project.
API
Use the
projects.locations.dataExchanges.subscribe method .
POST https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE_ID :subscribe
Replace the following:
PROJECT_ID : the project ID of the data exchange
that you want to subscribe to.
LOCATION : the location for your data exchange that
you want to subscribe to.
DATAEXCHANGE_ID : the data exchange ID that you want
to subscribe to.
In the body of the request, specify the dataset where you want to create the
linked dataset .
If the request is successful, the response body contains the
subscription object .
If you have enabled subscriber email logging
( Preview )
for the data exchange, the subscription response contains
log_linked_dataset_query_user_email: true .
View linked datasets
Linked datasets are displayed together with other datasets in the
Google Cloud console.
To view linked datasets in your project, follow these steps:
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Classic Explorer pane, click category Classic Explorer :
If the Classic Explorer pane is not visible, click last_page Expand left pane to open the pane.
In the Classic Explorer pane, click the project name that contains the
linked dataset.
Alternatively, you can also use
Data Catalog (deprecated)
or
Knowledge Catalog
to search and view linked datasets. To match all BigQuery sharing
linked datasets, use the type=dataset.linked predicate. For more
information, see
Data Catalog search syntax
or
Knowledge Catalog search syntax .
Cloud Shell
Run the following command:
PROJECT= PROJECT_ID \
for dataset in $(bq ls --project_id $PROJECT | tail +3); do [ "$(bq show -d --project_id $PROJECT $dataset | egrep LINKED)" ] && echo $dataset; done
Replace PROJECT_ID with your Google Cloud project ID.
Note: If a BigQuery sharing publisher
removes the subscription ,
then the linked dataset details page shows that the dataset is unlinked.
You can delete an unlinked dataset because you can't
query an unlinked dataset.
Query linked datasets
You can query tables and views in your linked datasets
in the same way you
query any other BigQuery table .
Update linked datasets
Resources in a linked dataset are read-only . You can't edit the data or
metadata for resources in linked datasets, or specify permissions for individual
resources.
You can only update the description and labels of your linked datasets.
Changes to a linked dataset don't affect the source or shared datasets.
To update the description and labels of a linked dataset, follow these steps:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Explorer pane, click explore
Explorer :
In the Explorer pane, expand your project name, click Datasets , and
then click the name of the linked dataset to open it.
In the details pane, click mode_edit
Edit details and then specify the following details:
To add labels, see
Adding a label to a dataset .
To enable
collation ,
expand the Advanced options section and follow these steps:
Select Enable default collation .
From the Default collation list, select an option.
Click Save .
View table metadata
To view the underlying table metadata, query the
INFORMATION_SCHEMA.TABLES
view:
SELECT * FROM ` LINKED-DATASET .INFORMATION_SCHEMA.TABLES`
Replace LINKED-DATASET with the name of your linked dataset.
Note: Region-based INFORMATION_SCHEMA queries
don't return metadata of linked tables. To learn about INFORMATION_SCHEMA
views that don't support dataset qualifiers for linked datasets, see
Limitations .
Unsubscribe from or delete linked datasets
To unsubscribe from a dataset, you must delete the linked dataset. Deleting a
linked dataset doesn't delete the source dataset.
You cannot retrieve a linked dataset after you delete it. However, you can
recreate the deleted linked dataset by
subscribing to the listing again and adding the
dataset and the linked datasets created from Google Cloud Marketplace-integrated
listings to your project.
If your
subscription is removed
by a BigQuery sharing publisher, then your
linked dataset
is unlinked from the
shared dataset .
Since this is a publisher-initiated action on a subscriber-owned resource, the
linked dataset remains in the BigQuery sharing subscriber's project in an
unlinked state. You can remove the unlinked dataset by deleting it.
To delete a linked dataset, do the following:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Explorer pane, click explore
Explorer :
In the Explorer pane, expand your project name, click Datasets , and
then click the name of the linked dataset to open it.
Click Delete .
In the Delete linked dataset? dialog, confirm deletion by typing
delete .
Click Delete .
What's next
Learn about
BigQuery sharing .
Learn about
managing listings .
Learn about
managing data exchanges .
Learn about
BigQuery sharing audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
