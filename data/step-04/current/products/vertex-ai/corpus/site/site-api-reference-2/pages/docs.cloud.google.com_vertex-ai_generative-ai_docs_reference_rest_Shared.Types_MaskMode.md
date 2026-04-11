---
title: "MaskMode \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/MaskMode
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/MaskMode
  title: "MaskMode \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
API reference
Send feedback
MaskMode
Stay organized with collections
Save and categorize content based on your preferences.
The mode for generating a mask for the product image if ProductImage.mask_image is not provided. A mask is an image that specifies the region of the garment to be worn.
Enums
MASK_MODE_DEFAULT
If unspecified, the service uses a default mode for mask generation.
MASK_MODE_USER_PROVIDED
Use the mask provided in ProductImage.mask_image . No mask generation is performed.
MASK_MODE_DETECTION_BOX
Generate a mask from detected bounding boxes in ProductImage.image .
MASK_MODE_CLOTHING_AREA
Generate a mask by segmenting the clothing area in ProductImage.image .
MASK_MODE_PARSED_PERSON
Generate a mask by segmenting the person and clothing in ProductImage.image .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-20 UTC."],[],[]]
