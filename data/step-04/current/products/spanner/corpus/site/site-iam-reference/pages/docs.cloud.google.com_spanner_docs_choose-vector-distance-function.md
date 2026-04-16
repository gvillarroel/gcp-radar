---
title: "Choose among vector distance functions to measure vector embeddings similarity\
  \ \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/access-with-fgac
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function
  title: "Choose among vector distance functions to measure vector embeddings similarity\
    \ \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Choose among vector distance functions to measure vector embeddings similarity
Stay organized with collections
Save and categorize content based on your preferences.
Note: This feature is available with the Spanner Enterprise edition and
Enterprise Plus edition. For more information, see the Spanner editions overview .
This page describes how to choose among the vector distance functions provided
in Spanner to measure similarity between vector embeddings.
After you've generated embeddings from
your Spanner data, you can perform a similarity search using vector
distance functions. The following table describes the vector distance functions
in Spanner.
Function Description Formula Relationship to
increasing similarity
Dot product
Calculates the cosine of angle \(\theta\) multiplied by the product of corresponding vector magnitudes.
\(a_1b_1+a_2b_2+...+a_nb_n\) \(=|a||b|cos(\theta)\)
Increases
Cosine distance
The cosine distance function subtracts the cosine similarity from one ( cosine_distance() = 1 - cosine similarity ). The cosine similarity measures the cosine of angle \(\theta\) between two vectors.
1 - \(\frac{a^T b}{|a| \cdot |b|}\)
Decreases
Euclidean distance
Measures the straight line distance between two vectors.
\(\sqrt{(a_1-b_1)^2+(a_2-b_2)^2+...+(a_N-b_N)^2}\)
Decreases
Choose a similarity measure
Depending on whether or not all your vector embeddings are normalized, you can
determine which similarity measure to use to find similarity. A normalized
vector embedding has a magnitude (length) of exactly 1.0.
In addition, if you know which distance function your model was trained with,
use that distance function to measure similarity between your vector
embeddings.
Normalized data
If you have a dataset where all vector embeddings are normalized, then all three
functions provide the same semantic search results. In essence, although each
function returns a different value, those values sort the same way. When
embeddings are normalized, DOT_PRODUCT() is usually the most computationally
efficient, but the difference is negligible in most cases. However, if your
application is highly performance sensitive, DOT_PRODUCT() might help with
performance tuning.
Non-normalized data
If you have a dataset where vector embeddings aren't normalized,
then it's not mathematically correct to use DOT_PRODUCT() as a distance
function because dot product as a function doesn't measure distance. Depending
on how the embeddings were generated and what type of search is preferred,
either the COSINE_DISTANCE() or EUCLIDEAN_DISTANCE() function produces
search results that are subjectively better than the other function.
Experimentation with either COSINE_DISTANCE() or EUCLIDEAN_DISTANCE() might
be necessary to determine which is best for your use case.
Unsure if data is normalized or non-normalized
If you're unsure whether or not your data is normalized and you want to use
DOT_PRODUCT() , we recommend that you use COSINE_DISTANCE() instead.
COSINE_DISTANCE() is like DOT_PRODUCT() with normalization built-in.
Similarity measured using COSINE_DISTANCE() ranges from 0 to 2 . A result
that is close to 0 indicates the vectors are very similar.
What's next
Learn more about how to perform a vector search by finding the k-nearest neighbor .
Learn how to export embeddings to Vertex AI Vector Search .
Learn more about the GoogleSQL COSINE_DISTANCE() , EUCLIDEAN_DISTANCE() , and DOT_PRODUCT() functions.
Learn more about the PostgreSQL spanner.cosine_distance() , spanner.euclidean_distance(), and spanner.dot_product() functions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
