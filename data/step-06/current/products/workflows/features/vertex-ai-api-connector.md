---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.505Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Vertex AI API connector"
feature_slug: "vertex-ai-api-connector"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models"
  - "https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview"
  - "https://docs.cloud.google.com/workflows/docs/access-kubernetes-api"
keywords:
  - "vertex"
  - "models"
  - "access"
  - "lets"
  - "connector"
---

# Vertex AI API connector

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

This connector lets Workflows access Vertex AI models.

## Extended Definition

This connector lets Workflows access Vertex AI models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models](https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models)
- [https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview](https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview)
- [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api)

## Supporting Pages

### "Access Gemini models from a workflow using Vertex AI \_|\_ Workflows \_\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models](https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Workflows Guides Send feedback Access Gemini models from a workflow using Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- This tutorial demonstrates workflows that generate responses from Vertex AI models by sending text prompts to the publisher endpoints using either a Workflows connector or an HTTP POST request.
- Generative AI on Vertex AI (also known as genAI or gen AI ) gives you access to Google's generative AI models for multiple modalities (text, code, images, speech).
- Vertex AI has a variety of generative AI foundation models that are accessible through an API, including the models used in this guide.

### Vertex AI API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview](https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns an empty policy if the resource exists and does not have a policy set. list Lists Models in a Location. listVersions Lists versions of the specified model. mergeVersionAliases Merges a set of aliases for a Model version. patch Updates a Model. setIamPolicy Sets the access control policy on the specified resource.
- Returns an empty policy if the resource exists and does not have a policy set. list Lists Models in a Location. listVersions Lists versions of the specified model. mergeVersionAliases Merges a set of aliases for a Model version. patch Updates a Model. setIamPolicy Sets the access control policy on the specified resource.
- X-Vertex-AI-Deployed-Model-Id : ID of the Endpoint's DeployedModel that served this prediction. serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy Sets the access control policy on the specified resource.
- Module: googleapis.aiplatform.v1beta1.projects.locations.publishers.models Functions countTokens Perform a token counting. generateContent Generate content with multimodal inputs. getIamPolicy Gets the access control policy for a resource.

### "Access Kubernetes API objects using a connector \_|\_ Workflows \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api)
- Source ID: `site-api-reference-required-3`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable APIs Before you can access Kubernetes API objects using the Kubernetes API connector, you must enable the following APIs: Kubernetes Engine API : to build and manage container-based applications using GKE Workflows APIs : to manage workflow definitions and executions; enabling the Workflows API automatically enables the Workflow Executions API Console Enable the APIs: Enable the APIs gcloud In the Google Cloud console, activate Cloud Shell.
- Home Documentation Application development Workflows Guides Send feedback Access Kubernetes API objects using a connector Stay organized with collections Save and categorize content based on your preferences.
- For example, you can use the connector to create Kubernetes Deployments, run Jobs, manage Pods, or access deployed apps through a proxy.
- The results should be similar to the following: { ... }, "status" : { "completionTime" : "2023-10-31T17:04:32Z" , "conditions" : [ { "lastProbeTime" : "2023-10-31T17:04:33Z" , "lastTransitionTime" : "2023-10-31T17:04:33Z" , "status" : "True" , "type" : "Complete" } ], "ready" : 0 , "startTime" : "2023-10-31T17:04:28Z" , "succeeded" : 1 , "uncountedTerminatedPods" : {} } } What's next Understand connectors Invoke a Google Cloud service using a connector Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

