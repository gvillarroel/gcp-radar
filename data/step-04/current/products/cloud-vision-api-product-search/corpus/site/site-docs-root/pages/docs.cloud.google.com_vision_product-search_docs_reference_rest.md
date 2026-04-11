---
title: "Vision API Product Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
  title: "Vision API Product Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
Cloud Vision API
Stay organized with collections
Save and categorize content based on your preferences.
Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
REST Resource: v1.files
REST Resource: v1.images
REST Resource: v1.locations.operations
REST Resource: v1.operations
REST Resource: v1.projects.files
REST Resource: v1.projects.images
REST Resource: v1.projects.locations.files
REST Resource: v1.projects.locations.images
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.productSets
REST Resource: v1.projects.locations.productSets.products
REST Resource: v1.projects.locations.products
REST Resource: v1.projects.locations.products.referenceImages
REST Resource: v1.projects.operations
Service: vision.googleapis.com
We recommend that you call this service using Google-provided client libraries . If your application needs to call this service using your own libraries, you should use the following information when making the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://vision.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service may have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://vision.googleapis.com
REST Resource: v1.files
Methods
annotate
POST /v1/files:annotate
Service that performs image detection and annotation for a batch of files.
asyncBatchAnnotate
POST /v1/files:asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page.
REST Resource: v1.images
Methods
annotate
POST /v1/images:annotate
Run image detection and annotation for a batch of images.
asyncBatchAnnotate
POST /v1/images:asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of images.
REST Resource: v1.locations.operations
Methods
get
GET /v1/{name=locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.operations
Methods
get
GET /v1/{name=operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.files
Methods
annotate
POST /v1/{parent=projects/*}/files:annotate
Service that performs image detection and annotation for a batch of files.
asyncBatchAnnotate
POST /v1/{parent=projects/*}/files:asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page.
REST Resource: v1.projects.images
Methods
annotate
POST /v1/{parent=projects/*}/images:annotate
Run image detection and annotation for a batch of images.
asyncBatchAnnotate
POST /v1/{parent=projects/*}/images:asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of images.
REST Resource: v1.projects.locations.files
Methods
annotate
POST /v1/{parent=projects/*/locations/*}/files:annotate
Service that performs image detection and annotation for a batch of files.
asyncBatchAnnotate
POST /v1/{parent=projects/*/locations/*}/files:asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page.
REST Resource: v1.projects.locations.images
Methods
annotate
POST /v1/{parent=projects/*/locations/*}/images:annotate
Run image detection and annotation for a batch of images.
asyncBatchAnnotate
POST /v1/{parent=projects/*/locations/*}/images:asyncBatchAnnotate
Run asynchronous image detection and annotation for a list of images.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.productSets
Methods
addProduct
POST /v1/{name=projects/*/locations/*/productSets/*}:addProduct
Adds a Product to the specified ProductSet.
create
POST /v1/{parent=projects/*/locations/*}/productSets
Creates and returns a new ProductSet resource.
delete
DELETE /v1/{name=projects/*/locations/*/productSets/*}
Permanently deletes a ProductSet.
get
GET /v1/{name=projects/*/locations/*/productSets/*}
Gets information associated with a ProductSet.
import
POST /v1/{parent=projects/*/locations/*}/productSets:import
Asynchronous API that imports a list of reference images to specified product sets based on a list of image information.
list
GET /v1/{parent=projects/*/locations/*}/productSets
Lists ProductSets in an unspecified order.
patch
PATCH /v1/{productSet.name=projects/*/locations/*/productSets/*}
Makes changes to a ProductSet resource.
removeProduct
POST /v1/{name=projects/*/locations/*/productSets/*}:removeProduct
Removes a Product from the specified ProductSet.
REST Resource: v1.projects.locations.productSets.products
Methods
list
GET /v1/{name=projects/*/locations/*/productSets/*}/products
Lists the Products in a ProductSet, in an unspecified order.
REST Resource: v1.projects.locations.products
Methods
create
POST /v1/{parent=projects/*/locations/*}/products
Creates and returns a new product resource.
delete
DELETE /v1/{name=projects/*/locations/*/products/*}
Permanently deletes a product and its reference images.
get
GET /v1/{name=projects/*/locations/*/products/*}
Gets information associated with a Product.
list
GET /v1/{parent=projects/*/locations/*}/products
Lists products in an unspecified order.
patch
PATCH /v1/{product.name=projects/*/locations/*/products/*}
Makes changes to a Product resource.
purge
POST /v1/{parent=projects/*/locations/*}/products:purge
Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet.
REST Resource: v1.projects.locations.products.referenceImages
Methods
create
POST /v1/{parent=projects/*/locations/*/products/*}/referenceImages
Creates and returns a new ReferenceImage resource.
delete
DELETE /v1/{name=projects/*/locations/*/products/*/referenceImages/*}
Permanently deletes a reference image.
get
GET /v1/{name=projects/*/locations/*/products/*/referenceImages/*}
Gets information associated with a ReferenceImage.
list
GET /v1/{parent=projects/*/locations/*/products/*}/referenceImages
Lists reference images.
REST Resource: v1.projects.operations
Methods
get
GET /v1/{name=projects/*/operations/*}
Gets the latest state of a long-running operation.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
