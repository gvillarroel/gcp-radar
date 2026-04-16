---
title: "Overview of Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform
  title: "Overview of Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Overview of Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI is a unified, open platform for building, deploying, and
scaling generative AI and machine learning (ML) models and AI applications. It
provides access to the Model Garden, featuring a curated catalog of
over 200 models—including Google's foundation models
(such as Gemini) and a comprehensive selection
of partner and open models—along with the underlying
TPU/GPU infrastructure. Vertex AI supports cutting-edge GenAI
workflows as well as AI inference workflows for MLOps. It offers end-to-end
MLOps tools and enterprise-grade controls for governance, security, and
compliance.
Key capabilities of Vertex AI
Vertex AI includes tools and services that support generative AI as
well as AI inference and machine learning workflows.
Generative AI capabilities
Vertex AI brings together a comprehensive toolset with Google's advanced
foundation models tools that you can use to build production-ready generative AI
agents and applications, as follows:
Prompting : Start with prompt design in Vertex AI Studio .
Vertex AI Studio includes tools for prompt design and model
management that you can use to prototype, build, and deploy
generative AI applications.
Models : Vertex AI Model Garden is a
centralized hub containing over 200 enterprise-ready models from Google,
leading third-party partners (such as Anthropic's Claude), and popular
open-source options (such as Llama).
This selection of models includes the following:
Google's foundational generative AI models :
Gemini : Multimodal capabilities for text, images, video,
and audio; and thinking capabilities for models, such as
Gemini 3 Flash and Gemini 3 Pro (with Nano Banana).
Imagen on Vertex AI : Generate and edit images.
Veo on Vertex AI : Generate videos from text and images.
Partner and open source models : Access a curated selection of leading
models such as Anthropic's Claude, Mistral AI models, and Llama with
superior price-performance. These models are available as fully managed
model as a service (MaaS) APIs.
Model customization : Tailor models to your business to create unique AI
assets. This ranges from Grounding with your enterprise data
or Google Search to reduce hallucinations, to using Vertex AI
Training for Supervised Fine-Tuning (SFT) or Parameter-Efficient Fine-Tuning
(PEFT) of models like Gemini. For more information about model
customization, see
Introduction to tuning .
Generative AI Evaluations : Objectively assess and compare model and agent
performance with the
Gen AI evaluation service .
Ensure safety and compliance by deploying runtime defense features like
Model Armor to
proactively inspect and protect against emergent threats,
such as prompt injection and data exfiltration.
Agent builders : Vertex AI Agent Builder is a full-stack
agentic transformation system that helps you create, manage, and deploy
AI agents. Use the open-source Agent Development Kit
(ADK) to build and orchestrate
agents, and then deploy them to the managed, serverless
Vertex AI Agent Engine
for use at scale in production. Each agent is assigned an Agent Identity
(Identity and Access Management Principal) for security and a clear
audit trail.
Access External Information : Enhance model responses by connecting
to reliable sources with Grounding , interacting with external APIs using
Function Calling , and retrieving information from knowledge bases with RAG.
Responsible AI and Safety : Use built-in safety
features to block harmful content and ensure responsible AI usage.
For more information about Generative AI on Vertex AI, see the
Generative AI on Vertex AI documentation .
AI inference capabilities
Vertex AI provides tools and services that map to each stage of the ML
workflow:
Data preparation : Collect, clean, and transform your data.
Use Vertex AI Workbench notebooks to perform exploratory data
analysis (EDA) .
Integrate with Cloud Storage and BigQuery for data
access.
Use Dataproc Serverless Spark for large-scale data processing.
Model training : Train your ML model.
Choose between AutoML for code-free training or Custom
training for full control.
Manage and compare training runs using Vertex AI Experiments .
Register trained models in the Vertex AI Model Registry .
Vertex AI Training
offers both serverless training and training clusters.
Use Vertex AI serverless training to run your custom training code on-demand
in a fully managed environment. See the [Vertex AI serverless training overview][serverless].
Use Vertex AI training clusters for large jobs that need assured capacity on
dedicated, reserved accelerator clusters. See Vertex AI training clusters
overview .
Use Ray on Vertex AI to scale Python and ML workloads with the
open-source Ray framework on a managed, interactive cluster.
See Ray on Vertex AI overview .
Use Vertex AI Vizier to adjust model hyperparameters in complex
ML models.
Model evaluation and iteration : Assess and improve model performance.
Use model evaluation metrics to compare models.
Integrate evaluations within Vertex AI Pipelines workflows.
Model serving : Deploy and get inferences from your model.
Deploy for online inferences with prebuilt or custom containers.
Perform batch inferences for large datasets.
Use Optimized TensorFlow runtime for efficient
TensorFlow serving.
Understand model inferences with Vertex Explainable AI .
Serve features from Vertex AI Feature Store .
Deploy models trained with BigQuery ML .
Model monitoring : Track deployed model performance over time.
Use Vertex AI Model Monitoring to detect training-serving skew
and inference drift.
MLOps Tools
Automate, manage, and monitor your ML projects:
Vertex AI Pipelines : Orchestrate and automate ML
workflows as reusable pipelines.
Vertex AI Model Registry : Manage the lifecycle of your
ML models, including versioning and deployment.
Vertex AI serverless training : Run your
custom training code on-demand in a fully managed environment
Vertex AI Model Monitoring : Monitor deployed models for
data skew and drift to maintain performance.
Vertex AI Experiments : Track and analyze different model
architectures and hyperparameters.
Vertex AI Feature Store : Manage and
serve feature data for training models or making real-time predictions.
Vertex ML Metadata : Track and manage metadata for ML
artifacts.
Vertex AI training clusters :
Train large-scale jobs that require assured capacity on a dedicated,
reserved cluster of accelerators.
Ray on Vertex AI : Scale Python and ML
workloads using the open-source Ray framework on a managed, interactive
cluster.
What's next
Dive into Generative AI on Vertex AI .
Learn about Vertex AI's MLOps features .
Explore
interfaces that you can use to interact with Vertex AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
