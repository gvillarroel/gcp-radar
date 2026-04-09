---
title: "About data products \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/data-products-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/data-products-overview
  title: "About data products \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud\
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
About data products
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
This document describes the architecture and key concepts of
data products in Dataplex Universal Catalog.
A data product is a logical, curated collection of data assets, formally
packaged to ensure it's discoverable, trusted, and accessible. The key
capabilities of a data product include the following:
Organize catalog assets into a logical unit that solves a specific business
problem and enables faster time to insights.
Distribute with context that includes a description, documentation, and aspects.
Establish trust with contracts that enable data producers to provide
assurance to data consumers.
Provide self-service workflow for data consumers to evaluate data products
and get access to data.
Key concepts
This section describes the key concepts and terminologies related to data
products.
Data product
A curated, logical grouping of data assets, formally packaged to be discoverable,
trusted, and accessible for solving specific business problems.
Asset
A pointer to a physical data resource, such as a BigQuery dataset,
table, or view. A data product contains of one or more assets.
Access group
Google groups are configured by data product owners and used by data product
consumers to request access. Asset permissions are assigned to these access
groups.
Access groups simplify permission management for your data product. They
act as user-friendly aliases (like Reader or Analyst ) for underlying
IAM groups. This lets data product owners assign
permissions at a high level and helps consumers request the correct level
of access.
Data product owner or data producer
The individual or team responsible for the creation and management of data
products. This includes managing quality, access, and documentation.
Data product consumer
The individual, team, or AI agent that consumes data products to generate
insights.
Contract
An agreement between the data product owner and its consumers. This
agreement sets clear expectations by defining specific terms for how the data
will be provided and used, such as its refresh schedule and quality standards.
Example use case
Consider a data scientist analyzing an ecommerce business. Their goal is to
find the average order value (AOV) by traffic source and see if there's a
correlation between user age and order size. To do this, they need to combine
data from multiple tables, such as order_details , user_traffic , and
user_demographic .
In a conventional setup, this process creates friction. To generate insights, the
data scientist must first discover the correct tables within the organization's
vast data landscape, then contact each data owner, justify their access request,
and wait for approval.
With data products, data owners can streamline this experience by packaging
the relevant assets into a single product named "Ecommerce Business Data". This
package includes the following:
Assets
BigQuery tables order_details and user_traffic
(containing historical order data and traffic sources)
BigQuery view user_demographics (providing user details
with PII excluded)
Access groups
Predefined Reader and Writer groups to streamline access requests
Contract
A contract defining the data refresh frequency (for example, weekly at
8:00 AM PST)
Context
Documentation with sample queries and other details
Additional metadata to depict data sensitivity
Data scientists can now discover this data product as a single logical unit.
This lets them confidently generate insights to answer questions like,
'What is the average order value for each traffic source?'—ultimately
revealing which sources generate the highest value customers.
Data product user flow
The data product lifecycle in Dataplex Universal Catalog involves two key user
journeys: one for the data product owner (or producer) who creates and manages
the data, and one for the data product consumer who discovers and uses it.
Data product owner journey
This journey focuses on packaging, securing, and governing the data products to
ensure it's trusted and accessible.
Create: Define the data product and include assets. This involves the following
actions:
Configure the unique name, project, region, and description.
Add assets such as BigQuery tables, datasets, or views.
Configure access groups (for example, Analyst or Reader ) and map them to
underlying Google groups to simplify permission management.
Assign the necessary IAM roles to these access groups for the
specific assets.
Add a contract (a system aspect) to formally communicate the agreed-upon
data refresh cadence, frequency, and threshold.
For more information, see
Create data products .
Manage: Update the data product and ensure discoverability. This involves
the following actions:
Update basic details, assets, permissions, and supplementary aspects
(metadata), and rich text documentation.
Grant access to consumers to discover and request access to data products.
For more information, see
Manage data products .
Data product consumer journey
This journey focuses on quickly finding trusted data and gaining the necessary
permissions to use it.
Discover: Find relevant, trusted data for a specific business problem. This
involves the following actions:
Use the Dataplex Universal Catalog Search with
keywords or natural language to find the packaged data product.
Review the data product's overview, assets, contract, and other aspects to
determine its fitness for use.
For more information, see
Search for data products .
Request access: Ask the data product owner for permission to access the data.
For more information, see
Request access to data products .
Use: Access the underlying assets to generate insights. This involves the
following action:
Upon approval, you can access the product and its assets. For example, if
the asset is a BigQuery table, you can navigate to the
BigQuery studio and query the data directly.
For more information, see
Consume data products .
Assets supported
A data product can be composed of one or more data assets. In prview, the
following data assets are supported:
BigQuery datasets
BigQuery tables
BigQuery views
Limitations
Data products and their underlying assets must reside in the same
Google Cloud location.
A data product can contain a maximum of 10 assets.
You can create a maximum of 50 data products per project per region.
Request approval workflow integration isn't available in preview. However,
data product consumers can request access by triggering email notifications to
data product owners.
What's next
Learn how to create a data product .
Learn more about managing data products .
Learn how to search for data products .
Learn how to request access for data products .
Learn how to use VPC Service Controls with data products .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
