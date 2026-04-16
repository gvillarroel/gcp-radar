---
title: "Choose a vector index in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy
  title: "Choose a vector index in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Choose a vector index in AlloyDB AI
Stay organized with collections
Save and categorize content based on your preferences.
This page describes AlloyDB AI vector search strategies and explains
when to use each strategy. By default, AlloyDB uses k-nearest neighbors
search (KNN) to find vectors that are similar to a query. Vector indexes
implement a search strategy called Approximate Nearest Neighbor (ANN). When you
create a vector index, AlloyDB AI uses ANN, which provides better
performance than KNN. Keep in mind that, when you select a vector index, you
need to balance query latency and recall.
Recall measures how effectively a search retrieves all relevant items for
a given query. For example, imagine you have 100 embeddings, each one
representing an entity in your database. You query your embeddings with a
target vector and limit it to 10 results. A KNN vector search finds the 10
exact closest vectors using a brute force calculation method, which
results in 100% recall. AlloyDB AI uses this method by default
if no vector search index is created or chosen.
When you create a vector index in AlloyDB for PostgreSQL, it typically uses ANN,
which might partition
vectors according to similarity to facilitate faster retrieval. As a result,
using ANN, the 10 vectors returned in the earlier example might not be exactly
the 10 vectors that are closest in
distance. If only 8 out of the 10 retrieved vectors are the closest in space
to your query vector, then your recall is 80%.
Query latency defines how fast the search results are generated. For
example, latency is calculated based on the time spent on a search to
return the vectors after you submit a query.
Choose your search strategy
When you perform vector search in AlloyDB, choose one the following
search strategies:
Search Strategy
Description
Use Cases
K-nearest neighbors (KNN)
An algorithm that finds the k-nearest neighbors data points to a given
query data point. When you perform a vector search without creating an
index, a KNN search is performed by default.
To further improve the performance of KNN search, add your embedding column, and other columns related to your query, to the column store in the
columnar engine . You
can
add the columns manually
or
add the columns using auto-columnarization .
Your application is very sensitive to accuracy and you need the exact closest matches.
You have fewer than 100,000 vectors.
Approximate Nearest Neighbors (ANN)
An algorithm that finds approximately the closest data points. ANN divides existing customer data points into small groups based on similarities.
Your application requires low latency.
You have more than 100,000 vectors.
Google recommends that you create a vector index to optimize performance on your
vector search queries. For more information about how the ANN index is used for
similarity searches, see Create indexes using ScaNN .
To accelerate your filtered KNN search, use the columnar engine .
What's next
Create indexes and query vectors using ScaNN
Tune vector query performance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
