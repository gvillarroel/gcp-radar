---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.033Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2021-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/manage-processor-versions"
  - "https://docs.cloud.google.com/document-ai/docs/big-query-integration"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "vpc"
  - "controls"
  - "document"
  - "ai"
  - "now"
  - "supports"
  - "integration"
  - "reached"
---

# VPC Service Controls

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI now supports VPC Service Controls; Document AI's VPC Service Controls integration reached general availability.

## Extended Definition

Document AI now supports VPC Service Controls; Document AI's VPC Service Controls integration reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- [https://docs.cloud.google.com/document-ai/docs/big-query-integration](https://docs.cloud.google.com/document-ai/docs/big-query-integration)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### Managing processor versions \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// DESTINATION LOCATION -documentai.googleapis.com/v1beta3/projects/ DESTINATION PROJECT ID /locations/ DESTINATION LOCATION /processors/ DESTINATION PROCESSOR ID /processorVersions:importProcessorVersion" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ DESTINATION PROJECT ID /locations/ DESTINATION LOCATION /operations/ OPERATION ID " } If you're importing across a Virtual Private Cloud service controls (VPC-SC) perimeter, review configuring ingress and egress policies and set up a VPC Service Controls perimeter , then set the following rules.
- SOURCE PROJECT : The source project number. - ingressFrom: identities: - ANY SERVICE ACCOUNT sources: - resource: DESTINATION PROJECT ingressTo: operations: - serviceName: aiplatform.googleapis.com methodSelectors: - method: all actions - serviceName: documentai.googleapis.com methodSelectors: - method: all actions resources: - projects/ SOURCE PROJECT Provide the following values for egress : - egressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.objects.create - method: google.storage.buckets.testIamPermissions resources: - projects/ DESTINATION PROJECT egressFrom: identities: - ANY SERVICE ACCOUNT Set up a VPC destination perimeter with the following values. - egressTo: operations: - serviceName: aiplatform.googleapis.com methodSelectors: - method: all actions - serviceName: documentai.googleapis.com methodSelectors: - method: all actions - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.buckets.testIamPermissions - method: google.storage.objects.get - method: google.storage.objects.create resources: - projects/ SOURCE PROJECT egressFrom: identities: - ANY SERVICE ACCOUNT sourceRestriction: DISABLED What's next?
- For more information, see Set up authentication for a local development environment . using Google.Cloud.DocumentAI.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDocumentProcessorServiceClientSnippets { /// <summary>Snippet for DeleteProcessorVersion</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void DeleteProcessorVersionRequestObject () { // Create client DocumentProcessorServiceClient documentProcessorServiceClient = DocumentProcessorServiceClient .
- Custom Extractor Release date Deprecation date pretrained-foundation-model-v1.5-2025-05-05 May 5, 2025 Not applicable pretrained-foundation-model-v1.5-pro-2025-06-20 June 20, 2025 Not applicable Form Parser Release date Deprecation date pretrained-form-parser-v1.0-2020-09-23 September 23, 2020 Not applicable pretrained-form-parser-v2.0-2022-11-10 November 10, 2022 Not applicable Layout Parser Release date Deprecation date pretrained-layout-parser-v1.0-2024-06-03 June 3, 2024 Not applicable Bank Statement Parser Release date Deprecation date pretrained-bankstatement-v1.0-2021-08-08 August 8, 2021 Not applicable pretrained-bankstatement-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-bankstatement-v2.0-2021-12-10 December 10, 2021 Not applicable pretrained-bankstatement-v3.0-2022-05-16 May 16, 2022 Not applicable pretrained-bankstatement-v5.0-2023-12-06 December 6, 2023 Not applicable W2 Parser Release date Deprecation date pretrained-w2-v1.0-2020-10-01 October 1, 2020 March 31, 2024 pretrained-w2-v1.1-2022-01-27 January 27, 2022 March 31, 2024 pretrained-w2-v1.2-2022-01-28 January 28, 2022 Not applicable pretrained-w2-v2.1-2022-06-08 June 8, 2022 Not applicable US Passport Parser Release date Deprecation date pretrained-us-passport-v1.0-2021-06-14 June 14, 2021 June 30, 2026 Utility Parser Release date Deprecation date pretrained-utility-v1.1-2021-04-09 April 9, 2021 June 30, 2026 Identity Document Proofing Parser Release date Deprecation date pretrained-id-proofing-v1.0-2022-10-03 October 3, 2022 Not applicable Pay Slip Parser Release date Deprecation date pretrained-paystub-v1.0-2021-03-19 March 19, 2021 Not applicable pretrained-paystub-v1.1-2021-08-13 August 13, 2021 Not applicable pretrained-paystub-v1.2-2021-12-10 December 10, 2021 Not applicable pretrained-paystub-v2.0-2022-07-22 July 22, 2022 Not applicable pretrained-paystub-v3.0-2023-12-06 December 6, 2023 Not applicable US Driver License Parser Release date Deprecation date pretrained-us-driver-license-v1.0-2021-06-14 June 14, 2021 Not applicable Expense Parser Release date Deprecation date pretrained-expense-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-expense-v1.4-2022-11-18 November 18, 2022 Not applicable pretrained-expense-v1.4.2-2024-09-12 September 12, 2024 Not applicable Invoice Parser Release date Deprecation date pretrained-invoice-v1.1-2021-04-09 April 9, 2024 Not applicable pretrained-invoice-v1.2-2022-02-18 February 18, 2022 Not applicable pretrained-invoice-v1.3-2022-07-15 July 15, 2022 Not applicable pretrained-invoice-v2.0-2023-12-06 December 6, 2023 Not applicable Summarizer Release date Deprecation date pretrained-foundation-model-v1.0-2023-08-22 August 22, 2023 June 30, 2026 Enterprise Document OCR (Optical Character Recognition) Release date Deprecation date pretrained-ocr-v1.2-2022-11-10 November 10, 2022 Not applicable pretrained-ocr-v2.0-2023-06-02 June 2, 2023 Not applicable pretrained-ocr-v2.1-2024-08-07 August 7, 2024 Not applicable Processor version lifecycle As soon as a new Google version is available, you should create and evaluate new user versions with the new base version.

### BigQuery integration \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/big-query-integration](https://docs.cloud.google.com/document-ai/docs/big-query-integration)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Now, with this integration, customers can create remote models in BigQuery for their custom extractors in Document AI, and use them to perform document analytics and generative AI at scale, unlocking a new era of data-driven insights and innovation.
- PROCESS DOCUMENT ( MODEL my dataset . layout parser , TABLE my dataset . document , PROCESS OPTIONS = > ( JSON '{"layout config": {"chunking config": {"chunk size": 250}}}' ) ) WHERE content type = 'application/pdf' ; Table of results Text analytics, summarization and other document analysis use cases Once you have extracted text from your documents, you can then perform document analytics in a few ways: Use BigQuery ML to perform text-analytics: BigQuery ML supports training and deploying embedding models in a variety of ways.
- This integration also helps unlock new generative LLM applications like executing text-file processing for privacy filtering, content safety checks, and token chunking using SQL and custom Document AI models.
- To help harness this data, we're excited to announce an integration between BigQuery and Document AI , letting you extract insights from document data and build new large language model (LLM) applications.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- There are three ways to train a generative AI model: Training method Zero-shot Few-shot Fine-tuning Accuracy Medium Medium-high High Effort Low Low Medium Recommended number of training documents 0 5 to 10 10 to 50+ Note: You can expect reasonably good results with 10 to 50+ training examples, and performance can be further optimized by increasing the number of examples to hundreds or thousands, depending on the complexity and variation of the documents and extraction tasks.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Other: No known limitations Virtual Private Cloud GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations VPC Service Controls GA Console (federated): Autocomplete suggestions aren't supported when adding user identities in the following fields: Access policies Ingress and egress rules in service perimeters Google Cloud API: v1alpha APIs aren't available to federated identities.
- Other: No known limitations Document AI GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Endpoint Verification Unsupported Alternatives: No alternatives available Enterprise Knowledge Graph Unsupported Alternatives: No alternatives available Error Reporting GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Eventarc GA Console (federated): Although you can use an existing workflow as an Eventarc trigger destination, Workforce Identity Federation users can't create new workflows.
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- App Hub GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Application Integration GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Artifact Registry GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Container Registry doesn't support identity federation.

