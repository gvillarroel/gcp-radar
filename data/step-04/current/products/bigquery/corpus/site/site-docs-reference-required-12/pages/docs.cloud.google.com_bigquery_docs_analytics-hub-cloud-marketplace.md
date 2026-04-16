---
title: "Commercialize listings on Google Cloud Marketplace \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace
knowledge_key: corpus
source_id: site-docs-reference-required-12
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace
  title: "Commercialize listings on Google Cloud Marketplace \_|\_ BigQuery \_|\_\
    \ Google Cloud Documentation"
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
Commercialize listings on Google Cloud Marketplace
As a BigQuery sharing publisher, you can use the integration of
BigQuery sharing (formerly Analytics Hub) with
Google Cloud Marketplace to create revenue by listing your own data
products on Cloud Marketplace. By using the publisher-subscriber model,
you can share data offerings with your customers at scale, without having to
manage every transaction and subscription. You can configure aspects of the data
product, such as the kind of data you provide (for example, BigQuery
datasets), the price of the subscription (paid, free, or trial), and the duration.
As a BigQuery sharing subscriber, you can use this integration to
discover and consume a wide range of Google and third-party data products and
commercial datasets.
Before you continue, familiarize yourself with
BigQuery sharing data exchanges .
Before you begin
Grant Identity and Access Management (IAM) roles
that give users the necessary permissions to perform each task in this
document.
Enable the Analytics Hub API .
Required roles
To get the permissions that
you need to use Cloud Marketplace-integrated listings,
ask your administrator to grant you the
following IAM roles:
Create and manage BigQuery sharing listings:
Analytics Hub Admin ( roles/analyticshub.admin )
BigQuery Data Owner ( roles/bigquery.dataOwner )
Service Management Administrator ( roles/servicemanagement.admin )
Create and manage data product listings on Cloud Marketplace:
Commerce Producer Admin ( roles/commerceproducer.admin )
Subscribe to paid BigQuery sharing listings on Cloud Marketplace:
Billing Account Administrator ( roles/billing.admin )
Analytics Hub Viewer ( roles/analyticshub.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable the Analytics Hub API
To enable the Analytics Hub API, select one of the following
options:
Console
Go to the Analytics Hub API page and enable the Analytics Hub API for
your Google Cloud project.
Enable the API
gcloud
Run the gcloud services enable command :
gcloud services enable analyticshub.googleapis.com
You can access the
Sharing (Analytics Hub) page in the
Google Cloud console after you enable the Analytics Hub API.
Limitations
Cloud Marketplace-integrated listings have the following limitations:
All
BigQuery sharing limitations
apply.
BigQuery sharing publishers and subscribers must be located in a
supported
Cloud Marketplace Agency Jurisdiction .
Cloud Marketplace-integrated listings are indexed in
Data Catalog (deprecated) and
Knowledge Catalog , but you
can't specifically filter for its resource type.
Billing usage metrics for Cloud Marketplace-integrated listings
aren't captured in provider usage metrics or in
INFORMATION_SCHEMA views .
Data clean rooms and Pub/Sub topics aren't supported for
Cloud Marketplace integration.
Architecture and terminology
The following diagram shows the interaction between Cloud Marketplace
and BigQuery sharing for commercial listings:
Data product on Cloud Marketplace
A Cloud Marketplace data product listing is created by selecting a
BigQuery sharing listing, choosing a pricing model, and submitting
the product to Cloud Marketplace for review.
Cloud Marketplace-integrated listing on BigQuery sharing
A BigQuery sharing listing becomes a
Cloud Marketplace-integrated listing when the
Cloud Marketplace data product listing is approved and published,
creating an integration link between sharing and
Cloud Marketplace and making the listing eligible for purchase.
This type of BigQuery sharing listing supports shared datasets.
Linked resource
When subscribing to a Cloud Marketplace-integrated listing, a linked
resource is created in the BigQuery sharing subscriber project. Access to
the linked resource is managed by active Cloud Marketplace orders.
Linked datasets are supported in Cloud Marketplace-integrated listings.
Create a Cloud Marketplace-integrated listing
To create a BigQuery sharing listing and publish it on
Cloud Marketplace, do the following:
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
Create a new
sharing data exchange .
Alternatively, choose an existing data exchange to retain existing
subscriptions.
Create
listings in the data exchange .
Alternatively, choose existing listings to retain existing subscriptions.
Note: Both requesting access and Cloud Marketplace-integrated
flows are supported on a single BigQuery sharing listing.
This means that you can create a Cloud Marketplace-integrated
listing from an existing (offline) commercial listing, without any
disruptions to existing subscriptions.
In the row of your data exchange, click
more_vert
More actions > List on Marketplace .
You are redirected to the Cloud Marketplace
Producer Portal.
Follow the instructions on the Cloud Marketplace
Producer Portal to onboard your BigQuery sharing
listing as a
data product .
Navigate back to the Sharing (Analytics Hub) page. In the row of
your data exchange, the phrase Not Published appears in the
Marketplace column, indicating that your data product was created and
submitted for approval. Clicking the phrase Not Published redirects you
to the Cloud Marketplace Producer Portal where you
can check the status.
After approval, the word Published appears in the Marketplace column.
Clicking the word Published redirects you to the listing in
Cloud Marketplace.
For additional requirements, see
Offer software on Google Cloud Marketplace .
Update a Cloud Marketplace-integrated listing
Updating a Cloud Marketplace-integrated listing follows the same
process as
updating a standard listing in a data exchange .
You might also need to update
the data product listing in the Cloud Marketplace
Producer Portal, which might require another review and approval.
Manage subscriptions for a Cloud Marketplace-integrated listing
Commercial subscriptions to Cloud Marketplace-integrated listings are
managed by Cloud Marketplace orders. You can still manually add and
update BigQuery sharing subscribers by following
the same process that you would with a standard listing ,
but the associated Cloud Marketplace transactions don't take place.
You can also manually revoke subscriptions by following
the same process that you would use for a standard listing
and entering your Marketplace Service ID to accept the warning notification.
However, be aware that revoking commercial subscriptions might affect your
customers and violate the
Cloud Marketplace Terms of Service .
Additionally, revoking subscriptions doesn't remove the listing from
BigQuery sharing or Cloud Marketplace.
Offboard a Cloud Marketplace-integrated listing
To offboard a commercial Cloud Marketplace-integrated listing, you must
manage the lifecycle of the associated product in the
Google Cloud Marketplace Producer Portal .
Offboarding removes the commercial traits from a listing and converts it to a
standard, non-commercial listing. This process helps to ensure that existing
contractual obligations to subscribers are met before commercialization ends.
To offboard a Cloud Marketplace-integrated listing, do the following:
In the Producer Portal,
request deprecation of your listing .
Note: Standard product deprecation requires a notice period of at least
180 days for existing customers.
Wait for the deprecation date to pass. After the deprecation date passes, the
Cloud Marketplace listing is permanently deleted.
Delete the product from the Producer Portal.
Once a BigQuery sharing listing has been fully offboarded, it functions
as a standard, non-commercial listing. You can choose to keep the listing for internal or free sharing, or
delete the listing .
Delete a Cloud Marketplace-integrated listing
Warning: We strongly recommend
offboarding a Cloud Marketplace-integrated listing
instead of deleting the Cloud Marketplace-integrated listing.
Once you delete a Cloud Marketplace-integrated listing, you can't undo
it. Deleting Cloud Marketplace-integrated listings might affect your
customers and violate the
Cloud Marketplace Terms of Service .
To delete a Cloud Marketplace-integrated listing from
BigQuery sharing and Cloud Marketplace, do the following:
Revoke all commercial subscriptions for your
Cloud Marketplace-integrated listing by following
the same process that you would use for a data exchange .
You can't delete Cloud Marketplace-integrated listings with active
commercial subscriptions.
Follow the standard process to
delete a data exchange .
When you are prompted with a warning notification, enter your Marketplace
Service ID to accept, and then click Confirm .
Subscribe to a Cloud Marketplace-integrated listing
To subscribe to a BigQuery sharing listing on
Cloud Marketplace, do the following:
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
Click search
Search listings .
Search for the listing that you want to subscribe to.
Click the listing.
If your organization has already purchased the listing, which means the
Subscribe button and purchase date are visible, do the following:
Click Subscribe .
Specify the project and linked dataset name.
Click Save .
If you don't have permission to subscribe to listings, click
Request access and submit the request form.
If your organization hasn't purchased the listing (the
Purchase via Marketplace button is visible), do the following:
Click Purchase via Marketplace .
Click Subscribe .
In the Order summary page, specify your
subscription plan, purchase details, and accept the terms if you agree
with them.
Click Subscribe , and then click Go to product page .
Wait for a few minutes. After your order is activated, click
Manage on BigQuery sharing (Analytics Hub) . You are redirected
back to the Sharing (Analytics Hub) page.
Click Subscribe on the BigQuery sharing listing page.
Specify the project and linked dataset name.
Click Save .
For some listings, to get a quote, you might have to contact the sales
team by submitting a form.
Any project with the same billing account can also subscribe to the listing.
Pricing
Standard
BigQuery sharing pricing
applies. Additionally, the
Cloud Marketplace revenue sharing requirement
applies for Cloud Marketplace-integrated listings. For more
information about how BigQuery sharing subscribers are charged by
publishers for use of data products, see
Managing billing for Cloud Marketplace products .
What's next
Learn more about Cloud Marketplace .
If you're a VPC Service Controls user, see
VPC Service Controls .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
