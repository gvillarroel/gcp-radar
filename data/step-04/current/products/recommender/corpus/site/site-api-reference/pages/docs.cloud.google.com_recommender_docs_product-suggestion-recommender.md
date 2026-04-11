---
title: "Product suggestion recommender \_|\_ Recommender \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/product-suggestion-recommender
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/product-suggestion-recommender
  title: "Product suggestion recommender \_|\_ Recommender \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Product suggestion recommender
The product suggestion recommender helps you to optimize your Cloud usage by providing
you with product suggestions. This can help you improve performance and security, and
manage your resources better. Based on best practices, it analyzes your current
product usage within each project and determines any additional products that might
optimize your usage.
If the recommender identifies an opportunity to leverage a product within a
project, a recommendation is generated for that project in
Active Assist.
All users who have the appropriate permissions can view the recommendations when
logged in to the hub.
Every product suggestion includes information about the recommendation, details
on the product, and links to help you get started with the product.
Here are one example for a product suggestion recommendation:
A cloud logging suggestion for your Google Kubernetes Engine resources.
Recommender ID
The product suggestion recommender ID is:
google.logging.productSuggestion.ContainerRecommender
Note: These recommendations are currently available
only through
Active Assist .
Permissions
Required IAM permissions
To access the list of product suggestion recommendations and insights, the
following permissions are required:
recommender.loggingProductSuggestionContainerRecommendations.list
recommender.loggingProductSuggestionContainerRecommendations.get
To update the list of product suggestion recommendations and insights, the
following permission is required:
recommender.loggingProductSuggestionContainerRecommendations.update
Note: Granting your users these permissions might give them a partial
view of the resource for which the recommendation is generated. For more information, see the
Recommender Overview .
Granting permissions
To grant the required IAM permissions, assign one of the following roles:
To access the list of recommendations, assign the Recommender Viewer ( roles/recommender.productSuggestionViewer ) role.
To update the list of recommendations, assign the Recommender Admin ( roles/recommender.productSuggestionAdmin ) role.
For more information, see how you can grant IAM permissions .
Examples
Viewing product suggestion recommendations
Recommendations are available through
Active Assist .
The following steps show how to list product suggestion recommendations:
In the Google Cloud console, go to Active Assist,
Go to Active Assist
In the Cloud Logging card, click View all to
view the list of product suggestion recommendations.
If you can't find the card, then you
either don't have the
permission to view the recommendations ,
or there aren't any recommendations for the current project.
On the following screen, click each recommendation to view its details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
