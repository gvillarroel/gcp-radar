---
title: "Search for resource metadata in Data Catalog \_|\_ Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/search-feature-metadata
  title: "Search for resource metadata in Data Catalog \_|\_ Vertex AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Search for resource metadata in Data Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Caution: Data Catalog is deprecated
in favor of Knowledge Catalog .
Knowledge Catalog is also integrated with
Vertex AI Feature Store, offering similar capabilities.
Data Catalog catalogs metadata from
Vertex AI Feature Store resources. Using the metadata search capability of
Knowledge Catalog, you can discover these resources and view their
metadata. For more information about the Data Catalog metadata
search capability, see
Search and view data assets with Data Catalog .
Alternatively, to search for Vertex AI Feature Store resources from
Vertex AI, see
Search for Vertex AI Feature Store resources .
Before you begin
Authenticate yourself to
Data Catalog , unless you've done so already.
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
Vertex AI Feature Store resources in Data Catalog
Data Catalog lets you discover Google Cloud resources as data
assets. The following Vertex AI Feature Store resources are
categorized as data types in the Knowledge Catalog search filter:
FeatureOnlineStore
FeatureView
Note: If your project name contains : , Knowledge Catalog catalogs
FeatureOnlineStore resources, but doesn't catalog FeatureView and
Feature resources created in the project.
FeatureGroup
Note that Feature is not listed as a data type in the search filters. However,
you can view the list of features and feature metadata by viewing the metadata of the
parent feature groups.
IAM permissions required
Using the Knowledge Catalog search, you can view
Vertex AI Feature Store resources if you have the IAM
permissions to view those Vertex AI Feature Store resources in your
Google Cloud project. You don't need additional permissions for viewing
the resource metadata in Data Catalog.
Note: If you have the permission to view a feature group, you can view the
features, including feature metadata, within that feature group using
Data Catalog.
View metadata for an online store
To search for a
FeatureOnlineStore
resource, follow these steps:
Console
To launch a search query in the Google Cloud console,
go to the Knowledge Catalog Search page.
Go to Search
Use the following Filters to define your search parameters:
Projects : Click Add project to search for and select a specific project.
Data types : Select FeatureOnlineStore .
You can also define your query in the search field. To learn how to define
your search query in Data Catalog, see
Data Catalog search syntax .
To view the resource metadata, in the filtered list of data assets, click the name of the online store
instance.
View metadata for a feature view
To search for a
FeatureView
resource, follow these steps:
Console
To launch a search query in the Google Cloud console,
go to the Knowledge Catalog Search page.
Go to Search
Use the following Filters to define your search parameters:
Projects : Click Add project to search for and select a specific project.
Data types : Select FeatureView .
You can also define your query in the search field. To learn how to define
your search query in Data Catalog, see
Data Catalog search syntax .
To view the resource metadata, in the filtered list of data assets, click the name of the feature view.
View metadata for a feature group
To search for a
FeatureGroup
resource, follow these steps:
Console
To launch a search query in the Google Cloud console,
go to the Knowledge Catalog Search page.
Go to Search
Use the following Filters to define your search parameters:
Projects : Click Add project to search for and select a specific project.
Data types : Select FeatureGroup .
You can also define your query in the search field. To learn how to define
your search query in Data Catalog, see
Data Catalog search syntax .
To view the resource metadata, in the filtered list of data assets, click the name of the feature group.
View metadata for features within a feature group
To view the list of
Feature
resources and their metadata within a feature group, follow these steps:
Console
To launch a search query in the Google Cloud console,
go to the Knowledge Catalog Search page.
Go to Search
Use the following Filters to define your search parameters:
Projects : Click Add project to search for and select a specific project.
Data types : Select FeatureGroup .
You can also define your query in the search field. To learn how to define
your search query in Data Catalog, see
Data Catalog search syntax .
In the filtered list of data assets, click the name of the parent feature
group containing the features.
To view the list of features and feature metadata within
the feature group, click Schema .
What's next
Perform an advanced search for Vertex AI Feature Store resources .
Learn more about Data Catalog .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
