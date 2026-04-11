---
title: "Formatting a bulk import CSV \_|\_ Vision API Product Search \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/csv-format
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/csv-format
  title: "Formatting a bulk import CSV \_|\_ Vision API Product Search \_|\_ Google\
    \ Cloud Documentation"
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
Guides
Send feedback
Formatting a bulk import CSV
Stay organized with collections
Save and categorize content based on your preferences.
You can use the import
method to create a product set and products with reference images all at the
same time using a CSV file. This page describes how to format the CSV file.
Creating your reference images
Reference images are images containing various views of your products. The
following recommendations apply:
Make sure the size of the file doesn't exceed the maximum size (20MB).
Consider viewpoints that logically highlight the product and
contain relevant visual information.
Create reference images that supplement any missing viewpoints. For
example, if you only have images of the right shoe in a pair, provide mirrored
versions of those files as the left shoe.
Upload the highest resolution image available.
Show the product against a white background.
Convert PNGs with transparent backgrounds to a solid background.
Images must be stored in a Cloud Storage
bucket. If you're authenticating your image create call with an API key, the bucket must be
public. If you're authenticating with a service account, that service account
must have read access on the bucket.
CSV formatting guidelines
To use the import method, both the CSV file and the images it points to
must be in a Cloud Storage bucket. CSV files are limited to a maximum of
20,000 lines; each line is limited to a maximum of 2,048 characters. To import
more images, split them into multiple CSV files.
The CSV file must contain one image per line and contain the following columns:
image-uri : The Cloud Storage URI of the reference image.
image-id : Optional . A unique value if you supply it. Otherwise, the
system will assign a unique value.
product-set-id : A unique identifier for the product set to import the
images into.
product-id : A user-defined ID for the product identified by the reference
image. A product-id can be associated with multiple reference images.
Note: A single product may also belong to several product sets. If a
product-id already exists on bulk import then product-category ,
product-display , and labels are ignored for that line entry.
product-category : Allowed values are homegoods-v2 , apparel-v2 ,
toys-v2 , packagedgoods-v1 ,
and general-v1
*;
the category for the product identified by the
reference image. Inferred by the system if not specified in the create
request.
Allowed values are also listed in the
productCategory
reference documentation.
* Legacy productCategory codes:
Legacy categories ( homegoods , apparel ,
and toys ) are still supported, but the updated -v2 categories should be
used for new products.
product-display-name : Optional . If you don't provide a name for
the product displayName
will be set to " ". You can update this value later.
labels : Optional . A string (with quotation marks) of key-value
pairs that describe the products in the reference image. For example:
"category=shoes"
"color=black,style=formal"
Vision API Product Search also allows you to provide multiple values for
a single key. For example:
"category=shoes,category=heels"
"color=black,style=formal,style=mens"
bounding-poly : Optional . Specifies the area of interest in the
reference image. If a bounding box is not specified:
Bounding boxes for the image are inferred by the Vision API; multiple
regions in a single image may be indexed if multiple products are
detected by the API.
The line must end with a comma.
See the example below for a product without a bounding poly specified.
If you include a bounding box, the boundingPoly column should contain
an even number of comma-separated numbers, with the format
p1_x,p1_y,p2_x,p2_y,...,pn_x,pn_y . An example
line looks like this: 0.1,0.1,0.9,0.1,0.9,0.9,0.1,0.9 .
To define a bounding box with the actual pixel values of your image use
non-negative integers. Thus, you could express bounding boxes in 1000 pixel
by 1000 pixel images in the following way:
gs://example-reference-images/10001-001/10001-001_A.jpg,img001,sample-set-summer,sample-product-123,tan summer bag,apparel-v2,"style=womens,color=tan",100,150,450,150,450,550,100,550
gs://example-reference-images/10001-001/10001-001_A.jpg,img001,sample-set-summer,sample-product-456,blue summer bag,apparel-v2,"style=womens,color=blue",670,790,980,790,980,920,670,920
gs://example-reference-images/10002-002/10002-002_B.jpg,img002,sample-set-summer,sample-product-123,apparel-v2,,,
Note: You can use Vision API's Object Localizer
feature to get bounding box coordinates for generalized objects in images.
Vision API Product Search also allows you to use normalized values for
bounding boxes. Define a bounding box using normalized values with float
values in [0, 1].
Using normalized values, the above reference image rows could also be
expressed as:
gs://example-reference-images/10001-001/10001-001_A.jpg,img001,sample-set-summer,sample-product-123,tan summer bag,apparel-v2,"style=womens,color=tan",0.10,0.15,0.45,0.15,0.45,0.55,0.10,0.55
gs://example-reference-images/10001-001/10001-001_A.jpg,img001,sample-set-summer,sample-product-456,blue summer bag,apparel-v2,"style=womens,color=blue",0.67,0.79,0.98,0.79,0.98,0.92,0.67,0.92
gs://example-reference-images/10002-002/10002-002_B.jpg,img002,sample-set-summer,sample-product-123,apparel-v2,,,
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
