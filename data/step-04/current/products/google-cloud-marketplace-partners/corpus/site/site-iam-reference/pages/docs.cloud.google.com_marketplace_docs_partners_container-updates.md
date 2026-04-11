---
title: "Updating, deprecating, and deleting container image products \_|\_ Google\
  \ Cloud Marketplace Partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/container-updates
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/container-updates
  title: "Updating, deprecating, and deleting container image products \_|\_ Google\
    \ Cloud Marketplace Partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
Develop
Send feedback
Updating, deprecating, and deleting container image products
Stay organized with collections
Save and categorize content based on your preferences.
Updating images in Container Registry
Following the same process that you performed when you pushed your image to your
Container Registry staging repository, add your new image to
Container Registry with the proper tag.
Build the image that you want to push to your Container Registry staging
repository.
Tag your image using Docker with the tag of the existing version you'd like
to update (or with a new tag if you want the image under a new version):
docker tag {image_name} {staging_repo_path}:{tag}
For example,
docker tag test-image gcr.io/testpartner/testsolution:latest
Push your image using gcloud :
gcloud docker push {staging_repo_path}:{tag}
Repeat for any additional tags you'd like to add or update to your
staging repository. Note that a single image can have multiple tags.
Remember that pushing an image to your staging repository doesn't
automatically make it visible to users (even if you use a tag that is
already associated with a version); this only happens after you update the
version in Producer Portal and your product is published.
You can manage tags directly (add, edit, or delete) on images already in
your Container Registry staging repository using the
Container Registry UI .
Updating your products in Producer Portal
Open Producer Portal in the Google Cloud console:
https://console.cloud.google.com/producer-portal?project= YOUR_PUBLIC_PROJECT_ID
Replace YOUR_PUBLIC_PROJECT_ID with the ID for the public
project that you created for Cloud Marketplace—for example,
my-organization-public .
Note: If you don't see the link, or can't access the URL, verify that you've
selected the correct project and have the Editor ( roles/editor ) role for
the project. If you still can't access the URL, use the
Partner Support Desk to request
assistance, and include the word "Marketplace" in your description. For more
information about Partner Support Desk, visit
Request assistance with Cloud Marketplace .
In the list of products, click the product ID.
On the Overview page of your product, go to the Container images
section, and click Edit .
By Proposed Releases , click Edit . It might take a few seconds to read the
repository and load your tags.
Click the release that you want to update.
In Display tag , select the version that uses the corresponding
digest to the image you updated in your staging Container Registry repository.
After you've updated all the information for the release, click Done .
When you're done updating supported releases to your product, click Save and Validate .
Click Submit to submit the container images for review.
After all reviews have been approved, you can publish and launch the
product by opening the Overview page of your product and clicking Publish .
Removing versions
When you remove a release from your product, it is immediately removed from
the product details page when the product is published. However, removing
a release does not remove the images published to the public
Container Registry.
Open Producer Portal in the Google Cloud console:
https://console.cloud.google.com/producer-portal?project= YOUR_PUBLIC_PROJECT_ID
Replace YOUR_PUBLIC_PROJECT_ID with the ID for the public
project that you created for Cloud Marketplace—for example,
my-organization-public .
Note: If you don't see the link, or can't access the URL, verify that you've
selected the correct project and have the Editor ( roles/editor ) role for
the project. If you still can't access the URL, use the
Partner Support Desk to request
assistance, and include the word "Marketplace" in your description. For more
information about Partner Support Desk, visit
Request assistance with Cloud Marketplace .
In the list of products, click the product ID.
On the Overview page of your product, go to the Container images
section, and click Edit .
By Proposed Releases , click Edit . It might take a few seconds to read the
repository and load your tags.
Highlight the release that you want to remove.
Click delete to remove the version.
Click Done .
When you're done removing releases to your product, click Save and Validate .
Click Submit to submit the container images for review.
After all reviews have been approved, you can publish and launch the
product by opening the Overview page of your product, and clicking Publish .
Previous
arrow_back
Setting up the technical components
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
