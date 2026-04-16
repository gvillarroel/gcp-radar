---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:23:11.940Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation Cloud Console interface"
feature_slug: "automl-translation-cloud-console-interface"
latest_feature_date: "2019-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models"
  - "https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest"
keywords:
  - "introduced"
  - "interface"
  - "platform"
  - "console"
---

# AutoML Translation Cloud Console interface

Product: AutoML Translation
Coverage: MEDIUM

## Step 02 Summary

AutoML Translation introduced a Google Cloud Platform Console UI for all customers with dataset management controls such as sort and filter.

## Extended Definition

AutoML Translation introduced a Google Cloud Platform Console UI for all customers with dataset management controls such as sort and filter.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest)

## Supporting Pages

### "Google.Cloud.AIPlatform.V1 \_|\_ .NET client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to list the datasets for a given project in the us-central1 region. string region = "us-central1"; DatasetServiceClient client = new DatasetServiceClientBuilder { Endpoint = $"{region}-aiplatform.googleapis.com" }.Build(); LocationName location = new LocationName(projectId, region); PagedEnumerable<ListDatasetsResponse, Dataset> datasets = client.ListDatasets(location); foreach (Dataset dataset in datasets) { Console.WriteLine(dataset.Name); } Constructing schema values Various aspects of the API use schemas which are represented using Google.Protobuf.WellKnownTypes.Value , which is a generic representation of a JSON value in Protocol Buffers.
- 3.69.0 (latest) 3.68.0 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 Google.Cloud.AIPlatform.V1 is a.NET client library for the Vertex AI API .
- Home Documentation Developer tools .NET Client libraries Send feedback Google.Cloud.AIPlatform.V1 Stay organized with collections Save and categorize content based on your preferences.
- Installation Install the Google.Cloud.AIPlatform.V1 package from NuGet.

### "Google.Cloud.AIPlatform.V1Beta1 \_|\_ .NET client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools .NET Client libraries Send feedback Google.Cloud.AIPlatform.V1Beta1 Stay organized with collections Save and categorize content based on your preferences.
- Please ensure you enable pre-release packages (for example, in the Visual Studio NuGet user interface, check the "Include prerelease" box).
- Some of the following samples might only work with the latest pre-release version ( 1.0.0-beta75 ) of Google.Cloud.AIPlatform.V1Beta1 .
- 1.0.0-beta75 (latest) 1.0.0-beta74 Google.Cloud.AIPlatform.V1Beta1 is a.NET client library for the Vertex AI API .

### Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PROJECT ID = os.environ["GOOGLE CLOUD PROJECT"] vertexai . init ( project = PROJECT ID , location = "us-central1" ) sft tuning job = sft . train ( source model = "translation-llm-002" , train dataset = "gs://cloud-samples-data/ai-platform/generative ai/gemini-2 0/text/sft train data.jsonl" , The following parameters are optional validation dataset = "gs://cloud-samples-data/ai-platform/generative ai/gemini-2 0/text/sft validation data.jsonl" , tuned model display name = "tuned translation llm 002" , ) Polling for job completion while not sft tuning job . has ended : time . sleep ( 60 ) sft tuning job . refresh () print ( sft tuning job . tuned model name ) print ( sft tuning job . tuned model endpoint name ) print ( sft tuning job . experiment ) Example response: projects/123456789012/locations/us-central1/models/1234567890@1 projects/123456789012/locations/us-central1/endpoints/123456789012345 <google.cloud.aiplatform.metadata.experiment resources.Experiment object at 0x7b5b4ae07af0> View a list of tuning jobs You can view a list of tuning jobs in your current project by using the Google Cloud console, the Vertex AI SDK for Python, or by sending a GET request by using the tuningJobs method.
- HTTP method and URL: POST https:// TUNING JOB REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ TUNING JOB REGION /tuningJobs Request JSON body: { "baseModel": " BASE MODEL ", "supervisedTuningSpec" : { "trainingDatasetUri": " TRAINING DATASET URI ", "validationDatasetUri": " VALIDATION DATASET URI ", }, "tunedModelDisplayName": " TUNED MODEL DISPLAYNAME " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// TUNING JOB REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ TUNING JOB REGION /tuningJobs" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// TUNING JOB REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ TUNING JOB REGION /tuningJobs" Select-Object -Expand Content You should receive a JSON response similar to the following.

