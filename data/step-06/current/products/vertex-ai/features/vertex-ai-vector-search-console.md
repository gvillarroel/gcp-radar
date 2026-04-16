---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.105Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Vector Search Console"
feature_slug: "vertex-ai-vector-search-console"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/cmek"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search"
keywords:
  - "vertex"
  - "ai"
  - "vector"
  - "search"
  - "console"
  - "launched"
  - "experience"
  - "creating"
---

# Vertex AI Vector Search Console

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Vector Search Console launched a Google Cloud console experience for creating and deploying indexes, including public and VPC endpoint creation.

## Extended Definition

Vertex AI Vector Search Console launched a Google Cloud console experience for creating and deploying indexes, including public and VPC endpoint creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check status of the index creation on the Vector Search Google Cloud console See Indexes The parameters for creating index: contents delta uri : the URI of Cloud Storage directory where you stored the embedding JSON files dimensions : dimension size of each embedding.
- If you lose connection, instead of creating or deploying your new index again, you can check the Vector Search Google Cloud console and use the existing ones to continue.
- To see an example of getting started with Vertex AI Vector Search, run the "Get started with Vertex AI Vector Search" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In the Vertex AI Vector Search quickstart, learn how to create an index out of a sample dataset from a fictitious ecommerce clothing site.
- The pricing of the Google Cloud services used in this tutorial are available in the following pages: Vertex AI Vector Search Cloud Storage Vertex AI Workbench You can also use the pricing calculator to generate a cost estimate based on your projected usage.

### Search using embeddings \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search nearest neighbor matches using a public endpoint If you've configured your online store instance to serve feature values using Optimized online serving from a public endpoint, you must do the following to retrieve approximate nearest neighbor matches: Retrieve the public endpoint domain name for the online store Retrieve nearest neighbor matches of an embedding or entity Retrieve the public endpoint domain name for the online store When you create an online store instance for Optimized online serving, Vertex AI Feature Store generates a public endpoint domain name for the online store.
- For online store instances created for Optimized online serving, you can perform a vector similarity search to retrieve a list of semantically similar or related entities, also called approximate nearest neighbors.
- Home Documentation AI and ML Vertex AI Send feedback Search using embeddings Stay organized with collections Save and categorize content based on your preferences.
- To efficiently store and serve embeddings, use the purpose-built Vector Search .

### "Customer-managed encryption keys (CMEK) \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Deploy and manage public endpoints Deploy and manage index endpoints in a VPC network Vector Search Private Service Connect Colab Enterprise runtime The boot disk and data disks of the runtime's VM Use customer-managed encryption keys (CMEK) in Colab Enterprise Colab Enterprise notebook The notebook file and its comments Use customer-managed encryption keys (CMEK) in Colab Enterprise Vertex AI Agent Engine The copy of your agent source files, including code, scripts, and any dependency files The container images built from your agent source files The running instances deployed from your agent container images Vertex AI Agent Engine overview CMEK support for Generative AI tuning pipelines CMEK support is provided in the tuning pipeline of the following models: BERT T5 image-generation (GPU) Limitations CMEK support isn't provided in the following: AutoML image model batch prediction ( BatchPredictionJob ) TPU tuning Configure CMEK for your resources The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Vertex AI encrypter and decrypter permissions for your key, and create resources that use CMEK.
- Train a classification or regression model Train a forecast model Train an AutoML Edge model using the Cloud console Train an AutoML Edge model using the Vertex AI API Creating training pipelines BatchPredictionJob (excludes AutoML image batchPrediction) Any temporary files (for example, model files, logs, VM disks) used in the job to proceed the batch prediction job.
- Train a classification or regression model Train a forecast model Train an AutoML Edge model using the Cloud console Train an AutoML Edge model using the Vertex AI API Creating training pipelines Importing models to Vertex AI Endpoint All model files used for the model deployment under the endpoint.
- Console When you create a new CMEK-supported resource in the Vertex AI section of the Google Cloud console , you can select your key in the general or advanced option section: REST & CMD Line When you create a supported resource , add an encryptionSpec object to your request and set the encryptionSpec.kmsKeyName field to point to your key resource.

