---
title: "Manage subscriptions \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/introduction?authuser=3
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions
  title: "Manage subscriptions \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Manage subscriptions
This document describes how to manage subscriptions in BigQuery sharing
(formerly Analytics Hub), covering tasks for both
subscribers and publishers.
BigQuery sharing subscribers can do the following:
Subscribe to a listing.
List your current subscriptions in a given Google Cloud project.
Delete a subscription.
BigQuery sharing publishers can do the following:
View all subscriptions to your listing.
Revoke access to a specific subscription.
A BigQuery sharing subscription is a regionalized resource that resides
in the subscriber's project. Subscriptions store relevant information about the
subscriber and represent the contract between publisher and subscriber.
Before you begin
To get started with BigQuery sharing (formerly Analytics Hub), you need to
enable the Analytics Hub API inside your Google Cloud project.
To enable the Analytics Hub API, you need the following
Identity and Access Management (IAM) permissions:
serviceUsage.services.get
serviceUsage.services.list
serviceUsage.services.enable
The following predefined IAM role includes the
permissions that you need to enable the Analytics Hub API:
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
To enable the Analytics Hub API, select one of the following options:
Console
Go to the Analytics Hub API page and enable the Analytics Hub API for
your Google Cloud project.
Enable the Analytics Hub API
gcloud
Run the gcloud services enable
command:
gcloud services enable analyticshub.googleapis.com
Required roles
To get the permissions that
you need to manage subscriptions,
ask your administrator to grant you the
Analytics Hub Subscription Owner ( roles/analyticshub.subscriptionOwner )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Subscriber workflows for managing subscriptions
This section describes how BigQuery sharing subscribers manage subscriptions.
Subscribe to listings
To subscribe to listings, follow the steps in
View and subscribe to listings and data exchanges .
List subscriptions
To list your current subscriptions in a given project, use the
projects.locations.subscriptions.list method :
GET https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /location/ LOCATION /subscriptions
Replace the following:
PROJECT_ID : the Google Cloud project ID for the
subscriptions that you want to list.
LOCATION : the location for the subscriptions that you
want to list.
Delete a subscription
To delete a subscription, use the
projects.locations.subscriptions.delete method :
DELETE https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /location/ LOCATION /subscriptions/ SUBSCRIPTION_ID
Replace the following:
PROJECT_ID : the project ID for the subscription to
delete.
LOCATION : the location of the subscription to delete.
For more information about locations that support
sharing, see
Supported regions .
SUBSCRIPTION_ID : the ID of the subscription to delete.
The request body must be empty. If successful, the response body contains an
operation instance.
When a BigQuery sharing subscriber deletes a subscription, it also deletes
the linked dataset from the subscriber's project.
When you delete a subscription from a multi-region listing
( Preview ), all the
primary and secondary linked dataset replicas are also deleted from the
subscriber's project.
For more information about managing subscriptions using the API, see the
projects.locations.subscriptions methods .
Publisher workflows for managing subscriptions
This section describes how BigQuery sharing publishers manage
subscriptions. For more information about managing subscriptions to
listings, see
Manage listings .
List subscriptions
To list all subscriptions, select one of the following options.
Console
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
The page lists all the
data exchanges
you can access.
Select the data exchange name where you want to list subscriptions.
Select the Subscriptions tab to view all subscriptions for listings
within the data exchange.
API
To list subscriptions for listings in a particular data exchange, use the
projects.locations.dataExchanges.listSubscriptions method .
GET https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE_ID :listSubscriptions
Replace the following:
PROJECT_ID : the project ID of the data exchange
for which to list subscriptions.
LOCATION : the location of the data exchange for
which to list subscriptions.
DATAEXCHANGE_ID : the ID of the data exchange
for which to list subscriptions.
Revoke a subscription
When a BigQuery sharing publisher revokes a subscription, the subscriber
can no longer query the linked dataset. Because this action is initiated by the
publisher on a subscriber-owned resource, the linked dataset remains in the
subscriber's project. The subscriber can remove the dataset by deleting it.
If a publisher revokes a subscription from a multi-region listing
( Preview ),
subscribers can no longer query any primary or secondary linked dataset replicas.
Caution: Revoking
Cloud Marketplace-integrated commercial subscriptions
might affect your customers and violate the
Cloud Marketplace Terms of Service .
To revoke a subscription, select one of the following options:
Console
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
The page lists all the data exchanges you can access.
Select the data exchange name where you want to revoke the listing.
Select the Subscriptions tab to view all subscriptions for the data
exchange.
Select the subscriptions to revoke.
Click Revoke subscriptions .
API
To revoke a subscription, use the
projects.locations.subscriptions.revoke method .
POST https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /location/ LOCATION /subscriptions/ SUBSCRIPTION_ID :revoke
Replace the following:
PROJECT_ID : the project ID of the subscription to
revoke.
LOCATION : the location of the subscription.
SUBSCRIPTION_ID : the ID of the subscription to
revoke.
Limitations
Subscriptions have the following limitations:
You can only use the API to manage subscriptions created after July 25, 2023.
Linked datasets created before this date are unsupported because they lack the
required subscription resource.
What's next
Read about
BigQuery sharing architecture .
Learn how to
view and subscribe to listings and data exchanges .
Learn about
BigQuery sharing user roles .
Learn how to
create datasets .
Learn about
BigQuery sharing audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
