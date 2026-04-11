---
title: "Google.Cloud.AIPlatform.V1 \_|\_ .NET client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Translate.V3/latest/Google.Cloud.Translate.V3.TranslateDocumentRequest
source_metadata:
  url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/latest
  title: "Google.Cloud.AIPlatform.V1 \_|\_ .NET client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
.NET
Client libraries
Send feedback
Google.Cloud.AIPlatform.V1
Stay organized with collections
Save and categorize content based on your preferences.
3.69.0 (latest)
3.68.0
3.67.0
3.66.0
3.65.0
3.64.0
3.63.0
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.48.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.36.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.24.0
3.23.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.0
2.28.0
2.27.0
2.26.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
Google.Cloud.AIPlatform.V1 is a.NET client library for the Vertex AI API .
Note:
This documentation is for version 3.69.0 of the library.
Some samples may not work with other versions.
Installation
Install the Google.Cloud.AIPlatform.V1 package from NuGet. Add it to
your project in the normal way (for example by right-clicking on the
project in Visual Studio and choosing "Manage NuGet Packages...").
Authentication
When running on Google Cloud, no action needs to be taken to authenticate.
Otherwise, the simplest way of authenticating your API calls is to
set up Application Default Credentials.
The credentials will automatically be used to authenticate. See
Set up Application Default Credentials for more details.
Getting started
All operations are performed through the following client classes:
DataFoundryServiceClient
DatasetServiceClient
DeploymentResourcePoolServiceClient
EndpointServiceClient
EvaluationServiceClient
FeatureOnlineStoreAdminServiceClient
FeatureOnlineStoreServiceClient
FeatureRegistryServiceClient
FeaturestoreOnlineServingServiceClient
FeaturestoreServiceClient
GenAiCacheServiceClient
GenAiTuningServiceClient
IndexEndpointServiceClient
IndexServiceClient
JobServiceClient
LlmUtilityServiceClient
MatchServiceClient
MetadataServiceClient
MigrationServiceClient
ModelGardenServiceClient
ModelServiceClient
NotebookServiceClient
PersistentResourceServiceClient
PipelineServiceClient
PredictionServiceClient
ReasoningEngineExecutionServiceClient
ReasoningEngineServiceClient
ScheduleServiceClient
SessionServiceClient
SpecialistPoolServiceClient
TensorboardServiceClient
VertexRagDataServiceClient
VertexRagServiceClient
VizierServiceClient
Clients in this API must be constructed with a regional endpoint.
This can be done easily using the builder for a specific client
( DatasetServiceClientBuilder for DatasetServiceClient for
example). The following example shows how to list the datasets for a
given project in the us-central1 region.
string region = "us-central1";
DatasetServiceClient client = new DatasetServiceClientBuilder
{
Endpoint = $"{region}-aiplatform.googleapis.com"
}.Build();
LocationName location = new LocationName(projectId, region);
PagedEnumerable<ListDatasetsResponse, Dataset> datasets = client.ListDatasets(location);
foreach (Dataset dataset in datasets)
{
Console.WriteLine(dataset.Name);
}
Constructing schema values
Various aspects of the API use schemas which are represented using
Google.Protobuf.WellKnownTypes.Value , which is a generic
representation of a JSON value in Protocol Buffers.
Protocol Buffer messages are available for these schemas, and they
can be converted to and from Value objects using the
ValueConverter class, as shown below.
AutoMlImageClassificationInputs inputs = new AutoMlImageClassificationInputs
{
ModelType = AutoMlImageClassificationInputs.Types.ModelType.Cloud,
BaseModelId = "model-id",
// Other properties
};
TrainingPipeline pipeline = new TrainingPipeline
{
TrainingTaskInputs = ValueConverter.ToValue(inputs)
};
// Use pipeline in API calls such as PipelineServiceClient.CreateTrainingPipeline.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-24 UTC."],[],[]]
