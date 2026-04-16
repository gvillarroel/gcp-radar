---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.054Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Agent Engine CMEK support"
feature_slug: "vertex-ai-agent-engine-cmek-support"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/general/cmek"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create"
  - "https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-partners"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "cmek"
  - "now"
  - "supports"
  - "customer"
---

# Vertex AI Agent Engine CMEK support

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Engine now supports customer-managed encryption keys (CMEK) to encrypt data at rest.

## Extended Definition

Vertex AI Agent Engine now supports customer-managed encryption keys (CMEK) to encrypt data at rest.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
- [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-partners](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-partners)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy and manage public endpoints Deploy and manage index endpoints in a VPC network Vector Search Private Service Connect Colab Enterprise runtime The boot disk and data disks of the runtime's VM Use customer-managed encryption keys (CMEK) in Colab Enterprise Colab Enterprise notebook The notebook file and its comments Use customer-managed encryption keys (CMEK) in Colab Enterprise Vertex AI Agent Engine The copy of your agent source files, including code, scripts, and any dependency files The container images built from your agent source files The running instances deployed from your agent container images Vertex AI Agent Engine overview CMEK support for Generative AI tuning pipelines CMEK support is provided in the tuning pipeline of the following models: BERT T5 image-generation (GPU) Limitations CMEK support isn't provided in the following: AutoML image model batch prediction ( BatchPredictionJob ) TPU tuning Configure CMEK for your resources The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Vertex AI encrypter and decrypter permissions for your key, and create resources that use CMEK.
- Home Documentation AI and ML Vertex AI Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Vertex AI.
- Vertex AI training only supports CMEK when your resource and key use the same region.

### AI Agent Ecosystem partners \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-partners](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-partners)
- Source ID: `site-docs-reference-3`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner references Accenture AI Services and Solutions Partner Advantage page Direct link Bain Solution AI agent enhancing customer conversations and generating call summaries Description Bain supports SEB's wealth management division with an AI agent that enhances end-customer conversations with suggested responses and generates call summaries that help increase efficiency by 15%.
- Partner references SDLC agent solution Partner Advantage page Direct link Wipro Solution Developing and adjusting contracts with agent technology Description Wipro supports a national healthcare provider in using agent technology to develop and adjust contracts, streamlining a complex and time-consuming task while improving accuracy.
- Home Documentation AI and ML Vertex AI Resources Send feedback AI Agent Ecosystem partners Stay organized with collections Save and categorize content based on your preferences.
- Partner references AI solutions Partner Advantage page Direct link Deloitte Solution "Care Finder" agent for finding in-network providers Description Deloitte offers a "Care Finder" agent as part of its Agent Fleet, helping care seekers find in-network providers often in less than a minute — significantly faster than the average call time of 5-8 minutes.

### Create a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
- Source ID: `site-docs-reference-required-5`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Encryption : Select Google-managed encryption key or Customer-managed encryption key (CMEK) .
- To use CMEK, see Customer-managed encryption keys .
- To use CMEK, see Customer-managed encryption keys .
- When the instance is ready to use, Vertex AI Workbench activates an Open JupyterLab link. gcloud Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your Vertex AI Workbench instance; must start with a letter followed by up to 62 lowercase letters, numbers, or hyphens (-), and cannot end with a hyphen PROJECT ID : your project ID LOCATION : the zone where you want your instance to be located VM IMAGE PROJECT : the ID of the Google Cloud project that VM image belongs to; the default Google Cloud project ID for supported images is cloud-notebooks-managed VM IMAGE NAME : the image name; to find the image name of a specific version, see Find the specific version MACHINE TYPE : the machine type of your instance's VM METADATA : custom metadata to apply to this instance; for example, to specify a post-startup-script, you can use the post-startup-script metadata tag, in the format: --metadata=post-startup-script=gs:// BUCKET NAME /hello.sh To enable the JupyterLab 4 preview, use --metadata=enable-jupyterlab4-preview=true .

