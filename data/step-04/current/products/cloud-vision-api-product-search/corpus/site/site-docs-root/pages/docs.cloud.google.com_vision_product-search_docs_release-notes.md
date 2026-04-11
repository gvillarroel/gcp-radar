---
title: "Vision API Product Search release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/release-notes
  title: "Vision API Product Search release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The Product Search feature is in maintenance mode. For better scalability and the same functionality as Product Search, use the Vision Warehouse .
Home
Documentation
Industry solutions
Vision API Product Search
Resources
Send feedback
Vision API Product Search release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Vision API Product Search. We recommend
that Vision API Product Search developers periodically check this list for any
new announcements.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 19, 2023
Change
Product Search legacy category migration
The legacy categories "apparel" , "homegoods" , and "toys" have been upgraded. See the December 5, 2022 release note for more information.
December 05, 2022
Change
Product Search legacy category migration
In 90 days, the legacy categories "apparel" , "homegoods" , and "toys" will be upgraded. You will still be able to use these categories. However, when running searches, they will perform similar to the "apparel-v2" , "homegoods-v2" , and "toys-v2" categories.
September 18, 2019
Feature
Packaged goods and general vertical :
The following product categories have been updated or added for General Availability:
packagedgoods-v1 (updated)
general-v1 (added)
Feature
Batch deletion
Batch deletion is now offered for the following product types:
All products in a specific product set
All products not in any product set
See the "Deleting resources" topic for more information.
Change
Model update : The Object Localizer model has been updated.
Change
Responses to images:annotate requests now include an objectAnnotation field with a label for the object defined by the bounding box indicated. See the "Searching for products" topic for more information.
Change
VPC Service Controls
Vision Product Search VPC Service Controls provide additional security for your pipeline's resources and services. To learn more about VPC Service Controls, see the VPC Service Controls overview .
To learn about the limitations of using Vision Product Search with VPC Service Controls, see the supported products and limitations .
June 07, 2019
Feature
Packaged goods vertical : Adds support for a packagedgoods-v1 product category in addition to other supported product categories .
Change
The following product categories have been updated:
homegoods-v2
apparel-v2
toys-v2
The corresponding legacy categories ( homegoods , apparel , and toys ) are still supported, but the updated categories should be used for new products.
December 10, 2018
Feature
Cloud Vision API Product Search General Availability (GA) Release
Feature
Toys vertical : Adds support for a toys product category in addition to other supported product categories .
Feature
Multi-detection : Detects multiple products in an image, and then provides similar products to each product found.
July 24, 2018
Feature
Beta Release of Vision Product Search
The Beta version of Vision Product Search is now available.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
