---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.645Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Virtual Try-On"
feature_slug: "virtual-try-on"
latest_feature_date: "2026-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
keywords:
  - "virtual"
  - "try"
  - "on"
  - "is"
  - "generally"
  - "available"
  - "and"
  - "uses"
---

# Virtual Try-On

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Virtual Try-On is generally available and uses the virtual-try-on-001 endpoint.

## Extended Definition

Virtual Try-On is generally available and uses the virtual-try-on-001 endpoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)

## Supporting Pages

### "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Consumption options Vertex AI provides five consumption options tailored to different traffic patterns and business needs: Consumption option Description Ideal For Pricing Provisioned Throughput Provides guaranteed throughput for a commitment period Critical, steady-state, always-on workloads where SLA is needed Commitment-based (available in 1 week, 1 month, 3 month, and 1 year plans) PayGo Standard Flexible, pay-per-use option with no upfront commitment Default option for everyday use cases with flexibility for variable traffic demand Per-token (standard rate) Priority Delivers higher reliability through priority processing while maintaining PayGo flexibility Important workloads that require higher reliability and limits than standard PayGo Per-token (premium rate) Flex Cost-effective option for latency-tolerant workloads Tasks that can tolerate slower response time and higher throttling, offering lower prices Per-token (discounted rate) Batch inference Cost-optimized for high-volume, asynchronous processing Large-scale jobs where results are needed within a longer timeframe Per-token (discounted rate) For information on pricing, see the pricing page .
- Cost To optimize for cost: Use right-sizing for Provisioned Throughput : You generally don't need to provision PT at peak, which reduces overall PT utilization and drives up total costs.
- This guide details the available consumption options, helps you map them to your specific workload requirements, and provides strategies for optimizing latency, availability, and cost.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- With IaC, configuration files are created that contain the infrastructure specifications, which makes it easier to create and edit infrastructure at scale. login node A login node is the main entry point for a user to access the cluster, submit jobs, and manage files.
- The artifacts of the run are inferred from artifacts produced by that PipelineJob. private services access Private services access is a private connection between your Virtual Private Cloud (VPC) network and networks owned by Google or third-party service providers.
- For more information, see Introduction to the Vertex AI Model Registry . video segment A video segment is identified by beginning and ending time offset of a video.
- From the Vertex AI Model Registry, you have an overview of your models so you can better organize, track, and train new versions.

### "ListOperationsResponse \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If true , the operation is completed, and either error or response is available. result Union type The operation result, which can be either an error or a valid response .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
- JSON representation { "name" : string , "metadata" : { "@type" : string , field1 : ... , ... } , "done" : boolean , // result "error" : { object ( Status ) } , "response" : { "@type" : string , field1 : ... , ... } // Union type } Status The status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs.
- JSON representation { "code" : integer , "message" : string , "details" : [ { "@type" : string , field1 : ... , ... } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Select the tab for how you plan to use the samples on this page: Python To use the Python samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.

