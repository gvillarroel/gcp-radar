---
title: "Package com.google.cloud.vertexai.api (1.48.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api
  title: "Package com.google.cloud.vertexai.api (1.48.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.vertexai.api (1.48.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.48.0 (latest)
1.47.0
1.45.0
1.43.0
1.42.0
1.40.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.30.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.20.1
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. vertexai. api. Endpoint Service Client
Service Description: A service for managing Vertex AI's Endpoints.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. cloud. vertexai. api. Llm Utility Service Client
Service Description: Service for LLM related utility functions.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. cloud. vertexai. api. Prediction Service Client
Service Description: A service for online predictions and explanations.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. vertexai. api. Endpoint Service Settings
Settings class to configure an instance of EndpointServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. vertexai. api. Llm Utility Service Settings
Settings class to configure an instance of LlmUtilityServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. vertexai. api. Prediction Service Settings
Settings class to configure an instance of PredictionServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. vertexai. api. Accelerator Type Proto
com. google. cloud. vertexai. api. Api Auth
The generic reusable api auth config.
com. google. cloud. vertexai. api. Api Auth. Api Key Config
The API secret.
com. google. cloud. vertexai. api. Api Auth. Api Key Config. Builder
The API secret.
com. google. cloud. vertexai. api. Api Auth. Builder
The generic reusable api auth config.
com. google. cloud. vertexai. api. Api Auth Proto
com. google. cloud. vertexai. api. Attribution
Attribution that explains a particular prediction output.
com. google. cloud. vertexai. api. Attribution. Builder
Attribution that explains a particular prediction output.
com. google. cloud. vertexai. api. Automatic Resources
A description of resources that to large degree are decided by Vertex AI,
and require only a modest additional configuration.
Each Model supporting these resources documents its specific guidelines.
com. google. cloud. vertexai. api. Automatic Resources. Builder
A description of resources that to large degree are decided by Vertex AI,
and require only a modest additional configuration.
Each Model supporting these resources documents its specific guidelines.
com. google. cloud. vertexai. api. Autoscaling Metric Spec
The metric specification that defines the target resource utilization
(CPU utilization, accelerator's duty cycle, and so on) for calculating the
desired replica count.
com. google. cloud. vertexai. api. Autoscaling Metric Spec. Builder
The metric specification that defines the target resource utilization
(CPU utilization, accelerator's duty cycle, and so on) for calculating the
desired replica count.
com. google. cloud. vertexai. api. Avro Source
The storage details for Avro input content.
com. google. cloud. vertexai. api. Avro Source. Builder
The storage details for Avro input content.
com. google. cloud. vertexai. api. Batch Dedicated Resources
A description of resources that are used for performing batch operations, are
dedicated to a Model, and need manual configuration.
com. google. cloud. vertexai. api. Batch Dedicated Resources. Builder
A description of resources that are used for performing batch operations, are
dedicated to a Model, and need manual configuration.
com. google. cloud. vertexai. api. Big Query Destination
The BigQuery location for the output content.
com. google. cloud. vertexai. api. Big Query Destination. Builder
The BigQuery location for the output content.
com. google. cloud. vertexai. api. Big Query Source
The BigQuery location for the input content.
com. google. cloud. vertexai. api. Big Query Source. Builder
The BigQuery location for the input content.
com. google. cloud. vertexai. api. Blob
Content blob.
It's preferred to send as text
com. google. cloud. vertexai. api. Blob. Builder
Content blob.
It's preferred to send as text
com. google. cloud. vertexai. api. Blur Baseline Config
Config for blur baseline.
When enabled, a linear path from the maximally blurred image to the input
com. google. cloud. vertexai. api. Blur Baseline Config. Builder
Config for blur baseline.
When enabled, a linear path from the maximally blurred image to the input
com. google. cloud. vertexai. api. Bool Array
A list of boolean values.
com. google. cloud. vertexai. api. Bool Array. Builder
A list of boolean values.
com. google. cloud. vertexai. api. Cached Content
A resource used in LLM queries for users to explicitly specify what to cache
and how to cache.
com. google. cloud. vertexai. api. Cached Content. Builder
A resource used in LLM queries for users to explicitly specify what to cache
and how to cache.
com. google. cloud. vertexai. api. Cached Content. Usage Metadata
Metadata on the usage of the cached content.
com. google. cloud. vertexai. api. Cached Content. Usage Metadata. Builder
Metadata on the usage of the cached content.
com. google. cloud. vertexai. api. Cached Content Name
com. google. cloud. vertexai. api. Cached Content Name. Builder
Builder for projects/{project}/locations/{location}/cachedContents/{cached_content}.
com. google. cloud. vertexai. api. Cached Content Proto
com. google. cloud. vertexai. api. Candidate
A response candidate generated from the model.
com. google. cloud. vertexai. api. Candidate. Builder
A response candidate generated from the model.
com. google. cloud. vertexai. api. Citation
Source attributions for content.
com. google. cloud. vertexai. api. Citation. Builder
Source attributions for content.
com. google. cloud. vertexai. api. Citation Metadata
A collection of source attributions for a piece of content.
com. google. cloud. vertexai. api. Citation Metadata. Builder
A collection of source attributions for a piece of content.
com. google. cloud. vertexai. api. Client Connection Config
Configurations (e.g. inference timeout) that are applied on your endpoints.
com. google. cloud. vertexai. api. Client Connection Config. Builder
Configurations (e.g. inference timeout) that are applied on your endpoints.
com. google. cloud. vertexai. api. Code Execution Result
Result of executing the [ExecutableCode].
Always follows a part containing the [ExecutableCode].
com. google. cloud. vertexai. api. Code Execution Result. Builder
Result of executing the [ExecutableCode].
Always follows a part containing the [ExecutableCode].
com. google. cloud. vertexai. api. Compute Tokens Request
Request message for ComputeTokens RPC call.
com. google. cloud. vertexai. api. Compute Tokens Request. Builder
Request message for ComputeTokens RPC call.
com. google. cloud. vertexai. api. Compute Tokens Response
Response message for ComputeTokens RPC call.
com. google. cloud. vertexai. api. Compute Tokens Response. Builder
Response message for ComputeTokens RPC call.
com. google. cloud. vertexai. api. Container Registry Destination
The Container Registry location for the container image.
com. google. cloud. vertexai. api. Container Registry Destination. Builder
The Container Registry location for the container image.
com. google. cloud. vertexai. api. Content
The base structured datatype containing multi-part content of a message.
A Content includes a role field designating the producer of the Content
com. google. cloud. vertexai. api. Content. Builder
The base structured datatype containing multi-part content of a message.
A Content includes a role field designating the producer of the Content
com. google. cloud. vertexai. api. Content Proto
com. google. cloud. vertexai. api. Corpus Status
RagCorpus status.
com. google. cloud. vertexai. api. Corpus Status. Builder
RagCorpus status.
com. google. cloud. vertexai. api. Count Tokens Request
Request message for [PredictionService.CountTokens][].
com. google. cloud. vertexai. api. Count Tokens Request. Builder
Request message for [PredictionService.CountTokens][].
com. google. cloud. vertexai. api. Count Tokens Response
Response message for [PredictionService.CountTokens][].
com. google. cloud. vertexai. api. Count Tokens Response. Builder
Response message for [PredictionService.CountTokens][].
com. google. cloud. vertexai. api. Create Endpoint Operation Metadata
Runtime operation information for
EndpointService.CreateEndpoint .
com. google. cloud. vertexai. api. Create Endpoint Operation Metadata. Builder
Runtime operation information for
EndpointService.CreateEndpoint .
com. google. cloud. vertexai. api. Create Endpoint Request
Request message for
EndpointService.CreateEndpoint .
com. google. cloud. vertexai. api. Create Endpoint Request. Builder
Request message for
EndpointService.CreateEndpoint .
com. google. cloud. vertexai. api. Csv Destination
The storage details for CSV output content.
com. google. cloud. vertexai. api. Csv Destination. Builder
The storage details for CSV output content.
com. google. cloud. vertexai. api. Csv Source
The storage details for CSV input content.
com. google. cloud. vertexai. api. Csv Source. Builder
The storage details for CSV input content.
com. google. cloud. vertexai. api. Dedicated Resources
A description of resources that are dedicated to a DeployedModel or
DeployedIndex, and that need a higher degree of manual configuration.
com. google. cloud. vertexai. api. Dedicated Resources. Builder
A description of resources that are dedicated to a DeployedModel or
DeployedIndex, and that need a higher degree of manual configuration.
com. google. cloud. vertexai. api. Delete Endpoint Request
Request message for
EndpointService.DeleteEndpoint .
com. google. cloud. vertexai. api. Delete Endpoint Request. Builder
Request message for
EndpointService.DeleteEndpoint .
com. google. cloud. vertexai. api. Delete Operation Metadata
Details of operations that perform deletes of any entities.
com. google. cloud. vertexai. api. Delete Operation Metadata. Builder
Details of operations that perform deletes of any entities.
com. google. cloud. vertexai. api. Deploy Model Operation Metadata
Runtime operation information for
EndpointService.DeployModel .
com. google. cloud. vertexai. api. Deploy Model Operation Metadata. Builder
Runtime operation information for
EndpointService.DeployModel .
com. google. cloud. vertexai. api. Deploy Model Request
Request message for
EndpointService.DeployModel .
com. google. cloud. vertexai. api. Deploy Model Request. Builder
Request message for
EndpointService.DeployModel .
com. google. cloud. vertexai. api. Deploy Model Response
Response message for
EndpointService.DeployModel .
com. google. cloud. vertexai. api. Deploy Model Response. Builder
Response message for
EndpointService.DeployModel .
com. google. cloud. vertexai. api. Deployed Model
A deployment of a Model. Endpoints contain one or more DeployedModels.
com. google. cloud. vertexai. api. Deployed Model. Builder
A deployment of a Model. Endpoints contain one or more DeployedModels.
com. google. cloud. vertexai. api. Deployed Model. Status
Runtime status of the deployed model.
com. google. cloud. vertexai. api. Deployed Model. Status. Builder
Runtime status of the deployed model.
com. google. cloud. vertexai. api. Deployment Stage Proto
com. google. cloud. vertexai. api. Direct Predict Request
Request message for
PredictionService.DirectPredict .
com. google. cloud. vertexai. api. Direct Predict Request. Builder
Request message for
PredictionService.DirectPredict .
com. google. cloud. vertexai. api. Direct Predict Response
Response message for
PredictionService.DirectPredict .
com. google. cloud. vertexai. api. Direct Predict Response. Builder
Response message for
PredictionService.DirectPredict .
com. google. cloud. vertexai. api. Direct Raw Predict Request
Request message for
PredictionService.DirectRawPredict .
com. google. cloud. vertexai. api. Direct Raw Predict Request. Builder
Request message for
PredictionService.DirectRawPredict .
com. google. cloud. vertexai. api. Direct Raw Predict Response
Response message for
PredictionService.DirectRawPredict .
com. google. cloud. vertexai. api. Direct Raw Predict Response. Builder
Response message for
PredictionService.DirectRawPredict .
com. google. cloud. vertexai. api. Direct Upload Source
The input content is encapsulated and uploaded in the request.
com. google. cloud. vertexai. api. Direct Upload Source. Builder
The input content is encapsulated and uploaded in the request.
com. google. cloud. vertexai. api. Disk Spec
Represents the spec of disk options.
com. google. cloud. vertexai. api. Disk Spec. Builder
Represents the spec of disk options.
com. google. cloud. vertexai. api. Dns Peering Config
DNS peering configuration. These configurations are used to create
DNS peering zones in the Vertex tenant project VPC, enabling resolution
of records within the specified domain hosted in the target network's
com. google. cloud. vertexai. api. Dns Peering Config. Builder
DNS peering configuration. These configurations are used to create
DNS peering zones in the Vertex tenant project VPC, enabling resolution
of records within the specified domain hosted in the target network's
com. google. cloud. vertexai. api. Double Array
A list of double values.
com. google. cloud. vertexai. api. Double Array. Builder
A list of double values.
com. google. cloud. vertexai. api. Dynamic Retrieval Config
Describes the options to customize dynamic retrieval.
com. google. cloud. vertexai. api. Dynamic Retrieval Config. Builder
Describes the options to customize dynamic retrieval.
com. google. cloud. vertexai. api. Embed Content Request
Request message for
PredictionService.EmbedContent .
com. google. cloud. vertexai. api. Embed Content Request. Builder
Request message for
PredictionService.EmbedContent .
com. google. cloud. vertexai. api. Embed Content Response
Response message for
PredictionService.EmbedContent .
com. google. cloud. vertexai. api. Embed Content Response. Builder
Response message for
PredictionService.EmbedContent .
com. google. cloud. vertexai. api. Embed Content Response. Embedding
A list of floats representing an embedding.
com. google. cloud. vertexai. api. Embed Content Response. Embedding. Builder
A list of floats representing an embedding.
com. google. cloud. vertexai. api. Encryption Spec
Represents a customer-managed encryption key spec that can be applied to
a top-level resource.
com. google. cloud. vertexai. api. Encryption Spec. Builder
Represents a customer-managed encryption key spec that can be applied to
a top-level resource.
com. google. cloud. vertexai. api. Encryption Spec Proto
com. google. cloud. vertexai. api. Endpoint
Models are deployed into it, and afterwards Endpoint is called to obtain
predictions and explanations.
com. google. cloud. vertexai. api. Endpoint. Builder
Models are deployed into it, and afterwards Endpoint is called to obtain
predictions and explanations.
com. google. cloud. vertexai. api. Endpoint Name
com. google. cloud. vertexai. api. Endpoint Name. Builder
Builder for projects/{project}/locations/{location}/endpoints/{endpoint}.
com. google. cloud. vertexai. api. Endpoint Name. Project Location Publisher Model Builder
Builder for projects/{project}/locations/{location}/publishers/{publisher}/models/{model}.
com. google. cloud. vertexai. api. Endpoint Proto
com. google. cloud. vertexai. api. Endpoint Service Client. List Endpoints Fixed Size Collection
com. google. cloud. vertexai. api. Endpoint Service Client. List Endpoints Page
com. google. cloud. vertexai. api. Endpoint Service Client. List Endpoints Paged Response
com. google. cloud. vertexai. api. Endpoint Service Client. List Locations Fixed Size Collection
com. google. cloud. vertexai. api. Endpoint Service Client. List Locations Page
com. google. cloud. vertexai. api. Endpoint Service Client. List Locations Paged Response
com. google. cloud. vertexai. api. Endpoint Service Grpc
A service for managing Vertex AI's Endpoints.
com. google. cloud. vertexai. api. Endpoint Service Grpc. Endpoint Service Impl Base
Base class for the server implementation of the service EndpointService.
A service for managing Vertex AI's Endpoints.
com. google. cloud. vertexai. api. Endpoint Service Proto
com. google. cloud. vertexai. api. Endpoint Service Settings. Builder
Builder for EndpointServiceSettings.
com. google. cloud. vertexai. api. Enterprise Web Search
Tool to search public web data, powered by Vertex AI Search and Sec4
compliance.
com. google. cloud. vertexai. api. Enterprise Web Search. Builder
Tool to search public web data, powered by Vertex AI Search and Sec4
compliance.
com. google. cloud. vertexai. api. Examples
Example-based explainability that returns the nearest neighbors from the
provided dataset.
com. google. cloud. vertexai. api. Examples. Builder
Example-based explainability that returns the nearest neighbors from the
provided dataset.
com. google. cloud. vertexai. api. Examples. Example Gcs Source
The Cloud Storage input instances.
com. google. cloud. vertexai. api. Examples. Example Gcs Source. Builder
The Cloud Storage input instances.
com. google. cloud. vertexai. api. Examples Override
Overrides for example-based explanations.
com. google. cloud. vertexai. api. Examples Override. Builder
Overrides for example-based explanations.
com. google. cloud. vertexai. api. Examples Restrictions Namespace
Restrictions namespace for example-based explanations overrides.
com. google. cloud. vertexai. api. Examples Restrictions Namespace. Builder
Restrictions namespace for example-based explanations overrides.
com. google. cloud. vertexai. api. Executable Code
Code generated by the model that is meant to be executed, and the result
returned to the model.
com. google. cloud. vertexai. api. Executable Code. Builder
Code generated by the model that is meant to be executed, and the result
returned to the model.
com. google. cloud. vertexai. api. Explain Request
Request message for
PredictionService.Explain .
com. google. cloud. vertexai. api. Explain Request. Builder
Request message for
PredictionService.Explain .
com. google. cloud. vertexai. api. Explain Response
Response message for
PredictionService.Explain .
com. google. cloud. vertexai. api. Explain Response. Builder
Response message for
PredictionService.Explain .
com. google. cloud. vertexai. api. Explanation
Explanation of a prediction (provided in
PredictResponse.predictions )
produced by the Model on a given
com. google. cloud. vertexai. api. Explanation. Builder
Explanation of a prediction (provided in
PredictResponse.predictions )
produced by the Model on a given
com. google. cloud. vertexai. api. Explanation Metadata
Metadata describing the Model's input and output for explanation.
com. google. cloud. vertexai. api. Explanation Metadata. Builder
Metadata describing the Model's input and output for explanation.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata
Metadata of the input of a feature.
Fields other than
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Builder
Metadata of the input of a feature.
Fields other than
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Feature Value Domain
Domain details of the input feature value. Provides numeric information
about the feature, such as its range (min, max). If the feature has been
pre-processed, for example with z-scoring, then it provides information
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Feature Value Domain. Builder
Domain details of the input feature value. Provides numeric information
about the feature, such as its range (min, max). If the feature has been
pre-processed, for example with z-scoring, then it provides information
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization
Visualization configurations for image explanation.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization. Builder
Visualization configurations for image explanation.
com. google. cloud. vertexai. api. Explanation Metadata. Output Metadata
Metadata of the prediction output to be explained.
com. google. cloud. vertexai. api. Explanation Metadata. Output Metadata. Builder
Metadata of the prediction output to be explained.
com. google. cloud. vertexai. api. Explanation Metadata Override
The ExplanationMetadata
entries that can be overridden at online
explanation time.
com. google. cloud. vertexai. api. Explanation Metadata Override. Builder
The ExplanationMetadata
entries that can be overridden at online
explanation time.
com. google. cloud. vertexai. api. Explanation Metadata Override. Input Metadata Override
The input
metadata
entries to be overridden.
com. google. cloud. vertexai. api. Explanation Metadata Override. Input Metadata Override. Builder
The input
metadata
entries to be overridden.
com. google. cloud. vertexai. api. Explanation Metadata Proto
com. google. cloud. vertexai. api. Explanation Parameters
Parameters to configure explaining for Model's predictions.
com. google. cloud. vertexai. api. Explanation Parameters. Builder
Parameters to configure explaining for Model's predictions.
com. google. cloud. vertexai. api. Explanation Proto
com. google. cloud. vertexai. api. Explanation Spec
Specification of Model explanation.
com. google. cloud. vertexai. api. Explanation Spec. Builder
Specification of Model explanation.
com. google. cloud. vertexai. api. Explanation Spec Override
The ExplanationSpec entries
that can be overridden at online
explanation time.
com. google. cloud. vertexai. api. Explanation Spec Override. Builder
The ExplanationSpec entries
that can be overridden at online
explanation time.
com. google. cloud. vertexai. api. Faster Deployment Config
Configuration for faster model deployment.
com. google. cloud. vertexai. api. Faster Deployment Config. Builder
Configuration for faster model deployment.
com. google. cloud. vertexai. api. Feature Noise Sigma
Noise sigma by features. Noise sigma represents the standard deviation of the
gaussian kernel that will be used to add noise to interpolated inputs prior
to computing gradients.
com. google. cloud. vertexai. api. Feature Noise Sigma. Builder
Noise sigma by features. Noise sigma represents the standard deviation of the
gaussian kernel that will be used to add noise to interpolated inputs prior
to computing gradients.
com. google. cloud. vertexai. api. Feature Noise Sigma. Noise Sigma For Feature
Noise sigma for a single feature.
com. google. cloud. vertexai. api. Feature Noise Sigma. Noise Sigma For Feature. Builder
Noise sigma for a single feature.
com. google. cloud. vertexai. api. File Data
URI based data.
com. google. cloud. vertexai. api. File Data. Builder
URI based data.
com. google. cloud. vertexai. api. File Status
RagFile status.
com. google. cloud. vertexai. api. File Status. Builder
RagFile status.
com. google. cloud. vertexai. api. Function Call
A predicted [FunctionCall] returned from the model that contains a string
representing the [FunctionDeclaration.name] and a structured JSON object
containing the parameters and their values.
com. google. cloud. vertexai. api. Function Call. Builder
A predicted [FunctionCall] returned from the model that contains a string
representing the [FunctionDeclaration.name] and a structured JSON object
containing the parameters and their values.
com. google. cloud. vertexai. api. Function Calling Config
Function calling config.
com. google. cloud. vertexai. api. Function Calling Config. Builder
Function calling config.
com. google. cloud. vertexai. api. Function Declaration
Structured representation of a function declaration as defined by the
OpenAPI 3.0 specification . Included
in this declaration are the function name, description, parameters and
com. google. cloud. vertexai. api. Function Declaration. Builder
Structured representation of a function declaration as defined by the
OpenAPI 3.0 specification . Included
in this declaration are the function name, description, parameters and
com. google. cloud. vertexai. api. Function Response
The result output from a [FunctionCall] that contains a string representing
the [FunctionDeclaration.name] and a structured JSON object containing any
output from the function is used as context to the model. This should contain
com. google. cloud. vertexai. api. Function Response. Builder
The result output from a [FunctionCall] that contains a string representing
the [FunctionDeclaration.name] and a structured JSON object containing any
output from the function is used as context to the model. This should contain
com. google. cloud. vertexai. api. Function Response Blob
Raw media bytes for function response.
Text should not be sent as raw bytes, use the 'text' field.
com. google. cloud. vertexai. api. Function Response Blob. Builder
Raw media bytes for function response.
Text should not be sent as raw bytes, use the 'text' field.
com. google. cloud. vertexai. api. Function Response File Data
URI based data for function response.
com. google. cloud. vertexai. api. Function Response File Data. Builder
URI based data for function response.
com. google. cloud. vertexai. api. Function Response Part
A datatype containing media that is part of a FunctionResponse message.
A FunctionResponsePart consists of data which has an associated datatype. A
com. google. cloud. vertexai. api. Function Response Part. Builder
A datatype containing media that is part of a FunctionResponse message.
A FunctionResponsePart consists of data which has an associated datatype. A
com. google. cloud. vertexai. api. Gcs Destination
The Google Cloud Storage location where the output is to be written to.
com. google. cloud. vertexai. api. Gcs Destination. Builder
The Google Cloud Storage location where the output is to be written to.
com. google. cloud. vertexai. api. Gcs Source
The Google Cloud Storage location for the input content.
com. google. cloud. vertexai. api. Gcs Source. Builder
The Google Cloud Storage location for the input content.
com. google. cloud. vertexai. api. Gen Ai Advanced Features Config
Configuration for GenAiAdvancedFeatures.
com. google. cloud. vertexai. api. Gen Ai Advanced Features Config. Builder
Configuration for GenAiAdvancedFeatures.
com. google. cloud. vertexai. api. Gen Ai Advanced Features Config. Rag Config
Configuration for Retrieval Augmented Generation feature.
com. google. cloud. vertexai. api. Gen Ai Advanced Features Config. Rag Config. Builder
Configuration for Retrieval Augmented Generation feature.
com. google. cloud. vertexai. api. Generate Content Request
Request message for [PredictionService.GenerateContent].
com. google. cloud. vertexai. api. Generate Content Request. Builder
Request message for [PredictionService.GenerateContent].
com. google. cloud. vertexai. api. Generate Content Response
Response message for [PredictionService.GenerateContent].
com. google. cloud. vertexai. api. Generate Content Response. Builder
Response message for [PredictionService.GenerateContent].
com. google. cloud. vertexai. api. Generate Content Response. Prompt Feedback
Content filter results for a prompt sent in the request.
com. google. cloud. vertexai. api. Generate Content Response. Prompt Feedback. Builder
Content filter results for a prompt sent in the request.
com. google. cloud. vertexai. api. Generate Content Response. Usage Metadata
Usage metadata about response(s).
com. google. cloud. vertexai. api. Generate Content Response. Usage Metadata. Builder
Usage metadata about response(s).
com. google. cloud. vertexai. api. Generation Config
Generation config.
com. google. cloud. vertexai. api. Generation Config. Builder
Generation config.
com. google. cloud. vertexai. api. Generation Config. Routing Config
The configuration for routing the request to a specific model.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Auto Routing Mode
When automated routing is specified, the routing will be determined by
the pretrained routing model and customer provided model routing
preference.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Auto Routing Mode. Builder
When automated routing is specified, the routing will be determined by
the pretrained routing model and customer provided model routing
preference.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Builder
The configuration for routing the request to a specific model.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Manual Routing Mode
When manual routing is set, the specified model will be used directly.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Manual Routing Mode. Builder
When manual routing is set, the specified model will be used directly.
com. google. cloud. vertexai. api. Generation Config. Thinking Config
Config for thinking features.
com. google. cloud. vertexai. api. Generation Config. Thinking Config. Builder
Config for thinking features.
com. google. cloud. vertexai. api. Generic Operation Metadata
Generic Metadata shared by all operations.
com. google. cloud. vertexai. api. Generic Operation Metadata. Builder
Generic Metadata shared by all operations.
com. google. cloud. vertexai. api. Get Endpoint Request
Request message for
EndpointService.GetEndpoint
com. google. cloud. vertexai. api. Get Endpoint Request. Builder
Request message for
EndpointService.GetEndpoint
com. google. cloud. vertexai. api. Google Drive Source
The Google Drive location for the input content.
com. google. cloud. vertexai. api. Google Drive Source. Builder
The Google Drive location for the input content.
com. google. cloud. vertexai. api. Google Drive Source. Resource Id
The type and ID of the Google Drive resource.
com. google. cloud. vertexai. api. Google Drive Source. Resource Id. Builder
The type and ID of the Google Drive resource.
com. google. cloud. vertexai. api. Google Maps
Tool to retrieve public maps data for grounding, powered by Google.
com. google. cloud. vertexai. api. Google Maps. Builder
Tool to retrieve public maps data for grounding, powered by Google.
com. google. cloud. vertexai. api. Google Search Retrieval
Tool to retrieve public web data for grounding, powered by Google.
com. google. cloud. vertexai. api. Google Search Retrieval. Builder
Tool to retrieve public web data for grounding, powered by Google.
com. google. cloud. vertexai. api. Grounding Chunk
Grounding chunk.
com. google. cloud. vertexai. api. Grounding Chunk. Builder
Grounding chunk.
com. google. cloud. vertexai. api. Grounding Chunk. Maps
Chunk from Google Maps.
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Builder
Chunk from Google Maps.
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Place Answer Sources
Protobuf type google.cloud.vertexai.v1.GroundingChunk.Maps.PlaceAnswerSources
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Place Answer Sources. Builder
Protobuf type google.cloud.vertexai.v1.GroundingChunk.Maps.PlaceAnswerSources
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Place Answer Sources. Review Snippet
Encapsulates a review snippet.
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Place Answer Sources. Review Snippet. Builder
Encapsulates a review snippet.
com. google. cloud. vertexai. api. Grounding Chunk. Retrieved Context
Chunk from context retrieved by the retrieval tools.
com. google. cloud. vertexai. api. Grounding Chunk. Retrieved Context. Builder
Chunk from context retrieved by the retrieval tools.
com. google. cloud. vertexai. api. Grounding Chunk. Web
Chunk from the web.
com. google. cloud. vertexai. api. Grounding Chunk. Web. Builder
Chunk from the web.
com. google. cloud. vertexai. api. Grounding Metadata
Metadata returned to client when grounding is enabled.
com. google. cloud. vertexai. api. Grounding Metadata. Builder
Metadata returned to client when grounding is enabled.
com. google. cloud. vertexai. api. Grounding Metadata. Source Flagging Uri
Source content flagging uri for a place or review. This is currently
populated only for Google Maps grounding.
com. google. cloud. vertexai. api. Grounding Metadata. Source Flagging Uri. Builder
Source content flagging uri for a place or review. This is currently
populated only for Google Maps grounding.
com. google. cloud. vertexai. api. Grounding Support
Grounding support.
com. google. cloud. vertexai. api. Grounding Support. Builder
Grounding support.
com. google. cloud. vertexai. api. Image Config
Config for image generation features.
com. google. cloud. vertexai. api. Image Config. Builder
Config for image generation features.
com. google. cloud. vertexai. api. Import Rag Files Config
Config for importing RagFiles.
com. google. cloud. vertexai. api. Import Rag Files Config. Builder
Config for importing RagFiles.
com. google. cloud. vertexai. api. Int64 Array
A list of int64 values.
com. google. cloud. vertexai. api. Int64 Array. Builder
A list of int64 values.
com. google. cloud. vertexai. api. Integrated Gradients Attribution
An attribution method that computes the Aumann-Shapley value taking advantage
of the model's fully differentiable structure. Refer to this paper for
more details: https://arxiv.org/abs/1703.01365
com. google. cloud. vertexai. api. Integrated Gradients Attribution. Builder
An attribution method that computes the Aumann-Shapley value taking advantage
of the model's fully differentiable structure. Refer to this paper for
more details: https://arxiv.org/abs/1703.01365
com. google. cloud. vertexai. api. Io Proto
com. google. cloud. vertexai. api. Jira Source
The Jira source for the ImportRagFilesRequest.
com. google. cloud. vertexai. api. Jira Source. Builder
The Jira source for the ImportRagFilesRequest.
com. google. cloud. vertexai. api. Jira Source. Jira Queries
JiraQueries contains the Jira queries and corresponding authentication.
com. google. cloud. vertexai. api. Jira Source. Jira Queries. Builder
JiraQueries contains the Jira queries and corresponding authentication.
com. google. cloud. vertexai. api. List Endpoints Request
Request message for
EndpointService.ListEndpoints .
com. google. cloud. vertexai. api. List Endpoints Request. Builder
Request message for
EndpointService.ListEndpoints .
com. google. cloud. vertexai. api. List Endpoints Response
Response message for
EndpointService.ListEndpoints .
com. google. cloud. vertexai. api. List Endpoints Response. Builder
Response message for
EndpointService.ListEndpoints .
com. google. cloud. vertexai. api. Llm Utility Service Client. List Locations Fixed Size Collection
com. google. cloud. vertexai. api. Llm Utility Service Client. List Locations Page
com. google. cloud. vertexai. api. Llm Utility Service Client. List Locations Paged Response
com. google. cloud. vertexai. api. Llm Utility Service Grpc
Service for LLM related utility functions.
com. google. cloud. vertexai. api. Llm Utility Service Grpc. Llm Utility Service Impl Base
Base class for the server implementation of the service LlmUtilityService.
Service for LLM related utility functions.
com. google. cloud. vertexai. api. Llm Utility Service Proto
com. google. cloud. vertexai. api. Llm Utility Service Settings. Builder
Builder for LlmUtilityServiceSettings.
com. google. cloud. vertexai. api. Location Name
com. google. cloud. vertexai. api. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. vertexai. api. Logprobs Result
Logprobs Result
com. google. cloud. vertexai. api. Logprobs Result. Builder
Logprobs Result
com. google. cloud. vertexai. api. Logprobs Result. Candidate
Candidate for the logprobs token and score.
com. google. cloud. vertexai. api. Logprobs Result. Candidate. Builder
Candidate for the logprobs token and score.
com. google. cloud. vertexai. api. Logprobs Result. Top Candidates
Candidates with top log probabilities at each decoding step.
com. google. cloud. vertexai. api. Logprobs Result. Top Candidates. Builder
Candidates with top log probabilities at each decoding step.
com. google. cloud. vertexai. api. Lustre Mount
Represents a mount configuration for Lustre file system.
com. google. cloud. vertexai. api. Lustre Mount. Builder
Represents a mount configuration for Lustre file system.
com. google. cloud. vertexai. api. Machine Resources Proto
com. google. cloud. vertexai. api. Machine Spec
Specification of a single machine.
com. google. cloud. vertexai. api. Machine Spec. Builder
Specification of a single machine.
com. google. cloud. vertexai. api. Modality Token Count
Represents token counting info for a single modality.
com. google. cloud. vertexai. api. Modality Token Count. Builder
Represents token counting info for a single modality.
com. google. cloud. vertexai. api. Model Armor Config
Configuration for Model Armor integrations of prompt and responses.
com. google. cloud. vertexai. api. Model Armor Config. Builder
Configuration for Model Armor integrations of prompt and responses.
com. google. cloud. vertexai. api. Model Explanation
Aggregated explanation metrics for a Model over a set of instances.
com. google. cloud. vertexai. api. Model Explanation. Builder
Aggregated explanation metrics for a Model over a set of instances.
com. google. cloud. vertexai. api. Multi Speaker Voice Config
Configuration for a multi-speaker text-to-speech request.
com. google. cloud. vertexai. api. Multi Speaker Voice Config. Builder
Configuration for a multi-speaker text-to-speech request.
com. google. cloud. vertexai. api. Mutate Deployed Model Operation Metadata
Runtime operation information for
EndpointService.MutateDeployedModel .
com. google. cloud. vertexai. api. Mutate Deployed Model Operation Metadata. Builder
Runtime operation information for
EndpointService.MutateDeployedModel .
com. google. cloud. vertexai. api. Mutate Deployed Model Request
Request message for
EndpointService.MutateDeployedModel .
com. google. cloud. vertexai. api. Mutate Deployed Model Request. Builder
Request message for
EndpointService.MutateDeployedModel .
com. google. cloud. vertexai. api. Mutate Deployed Model Response
Response message for
EndpointService.MutateDeployedModel .
com. google. cloud. vertexai. api. Mutate Deployed Model Response. Builder
Response message for
EndpointService.MutateDeployedModel .
com. google. cloud. vertexai. api. Neighbor
Neighbors for example-based explanations.
com. google. cloud. vertexai. api. Neighbor. Builder
Neighbors for example-based explanations.
com. google. cloud. vertexai. api. Nfs Mount
Represents a mount configuration for Network File System (NFS) to mount.
com. google. cloud. vertexai. api. Nfs Mount. Builder
Represents a mount configuration for Network File System (NFS) to mount.
com. google. cloud. vertexai. api. Open Api Proto
com. google. cloud. vertexai. api. Operation Proto
com. google. cloud. vertexai. api.PSC Automation Config
PSC config that is used to automatically create PSC endpoints in the user
projects.
com. google. cloud. vertexai. api.PSC Automation Config. Builder
PSC config that is used to automatically create PSC endpoints in the user
projects.
com. google. cloud. vertexai. api. Part
A datatype containing media that is part of a multi-part Content message.
A Part consists of data which has an associated datatype. A Part can only
com. google. cloud. vertexai. api. Part. Builder
A datatype containing media that is part of a multi-part Content message.
A Part consists of data which has an associated datatype. A Part can only
com. google. cloud. vertexai. api. Partial Arg
Partial argument value of the function call.
com. google. cloud. vertexai. api. Partial Arg. Builder
Partial argument value of the function call.
com. google. cloud. vertexai. api. Persistent Disk Spec
Represents the spec of persistent
disk options.
com. google. cloud. vertexai. api. Persistent Disk Spec. Builder
Represents the spec of persistent
disk options.
com. google. cloud. vertexai. api. Prebuilt Voice Config
Configuration for a prebuilt voice.
com. google. cloud. vertexai. api. Prebuilt Voice Config. Builder
Configuration for a prebuilt voice.
com. google. cloud. vertexai. api. Predict Request
Request message for
PredictionService.Predict .
com. google. cloud. vertexai. api. Predict Request. Builder
Request message for
PredictionService.Predict .
com. google. cloud. vertexai. api. Predict Request Response Logging Config
Configuration for logging request-response to a BigQuery table.
com. google. cloud. vertexai. api. Predict Request Response Logging Config. Builder
Configuration for logging request-response to a BigQuery table.
com. google. cloud. vertexai. api. Predict Response
Response message for
PredictionService.Predict .
com. google. cloud. vertexai. api. Predict Response. Builder
Response message for
PredictionService.Predict .
com. google. cloud. vertexai. api. Prediction Service Client. List Locations Fixed Size Collection
com. google. cloud. vertexai. api. Prediction Service Client. List Locations Page
com. google. cloud. vertexai. api. Prediction Service Client. List Locations Paged Response
com. google. cloud. vertexai. api. Prediction Service Grpc
A service for online predictions and explanations.
com. google. cloud. vertexai. api. Prediction Service Grpc. Prediction Service Impl Base
Base class for the server implementation of the service PredictionService.
A service for online predictions and explanations.
com. google. cloud. vertexai. api. Prediction Service Proto
com. google. cloud. vertexai. api. Prediction Service Settings. Builder
Builder for PredictionServiceSettings.
com. google. cloud. vertexai. api. Presets
Preset configuration for example-based explanations
com. google. cloud. vertexai. api. Presets. Builder
Preset configuration for example-based explanations
com. google. cloud. vertexai. api. Private Endpoints
PrivateEndpoints proto is used to provide paths for users to send
requests privately.
To send request via private service access, use predict_http_uri,
com. google. cloud. vertexai. api. Private Endpoints. Builder
PrivateEndpoints proto is used to provide paths for users to send
requests privately.
To send request via private service access, use predict_http_uri,
com. google. cloud. vertexai. api. Private Service Connect Config
Represents configuration for private service connect.
com. google. cloud. vertexai. api. Private Service Connect Config. Builder
Represents configuration for private service connect.
com. google. cloud. vertexai. api. Psc Automated Endpoints
PscAutomatedEndpoints defines the output of the forwarding rule
automatically created by each PscAutomationConfig.
com. google. cloud. vertexai. api. Psc Automated Endpoints. Builder
PscAutomatedEndpoints defines the output of the forwarding rule
automatically created by each PscAutomationConfig.
com. google. cloud. vertexai. api. Psc Interface Config
Configuration for PSC-I.
com. google. cloud. vertexai. api. Psc Interface Config. Builder
Configuration for PSC-I.
com. google. cloud. vertexai. api. Rag Chunk
A RagChunk includes the content of a chunk of a RagFile, and associated
metadata.
com. google. cloud. vertexai. api. Rag Chunk. Builder
A RagChunk includes the content of a chunk of a RagFile, and associated
metadata.
com. google. cloud. vertexai. api. Rag Chunk. Page Span
Represents where the chunk starts and ends in the document.
com. google. cloud. vertexai. api. Rag Chunk. Page Span. Builder
Represents where the chunk starts and ends in the document.
com. google. cloud. vertexai. api. Rag Corpus
A RagCorpus is a RagFile container and a project can have multiple
RagCorpora.
com. google. cloud. vertexai. api. Rag Corpus. Builder
A RagCorpus is a RagFile container and a project can have multiple
RagCorpora.
com. google. cloud. vertexai. api. Rag Embedding Model Config
Config for the embedding model to use for RAG.
com. google. cloud. vertexai. api. Rag Embedding Model Config. Builder
Config for the embedding model to use for RAG.
com. google. cloud. vertexai. api. Rag Embedding Model Config. Vertex Prediction Endpoint
Config representing a model hosted on Vertex Prediction Endpoint.
com. google. cloud. vertexai. api. Rag Embedding Model Config. Vertex Prediction Endpoint. Builder
Config representing a model hosted on Vertex Prediction Endpoint.
com. google. cloud. vertexai. api. Rag Engine Config
Config for RagEngine.
com. google. cloud. vertexai. api. Rag Engine Config. Builder
Config for RagEngine.
com. google. cloud. vertexai. api. Rag File
A RagFile contains user data for chunking, embedding and indexing.
com. google. cloud. vertexai. api. Rag File. Builder
A RagFile contains user data for chunking, embedding and indexing.
com. google. cloud. vertexai. api. Rag File Chunking Config
Specifies the size and overlap of chunks for RagFiles.
com. google. cloud. vertexai. api. Rag File Chunking Config. Builder
Specifies the size and overlap of chunks for RagFiles.
com. google. cloud. vertexai. api. Rag File Chunking Config. Fixed Length Chunking
Specifies the fixed length chunking config.
com. google. cloud. vertexai. api. Rag File Chunking Config. Fixed Length Chunking. Builder
Specifies the fixed length chunking config.
com. google. cloud. vertexai. api. Rag File Parsing Config
Specifies the parsing config for RagFiles.
com. google. cloud. vertexai. api. Rag File Parsing Config. Builder
Specifies the parsing config for RagFiles.
com. google. cloud. vertexai. api. Rag File Parsing Config. Layout Parser
Document AI Layout Parser config.
com. google. cloud. vertexai. api. Rag File Parsing Config. Layout Parser. Builder
Document AI Layout Parser config.
com. google. cloud. vertexai. api. Rag File Parsing Config. Llm Parser
Specifies the advanced parsing for RagFiles.
com. google. cloud. vertexai. api. Rag File Parsing Config. Llm Parser. Builder
Specifies the advanced parsing for RagFiles.
com. google. cloud. vertexai. api. Rag File Transformation Config
Specifies the transformation config for RagFiles.
com. google. cloud. vertexai. api. Rag File Transformation Config. Builder
Specifies the transformation config for RagFiles.
com. google. cloud. vertexai. api. Rag Managed Db Config
Configuration message for RagManagedDb used by RagEngine.
com. google. cloud. vertexai. api. Rag Managed Db Config. Basic
Basic tier is a cost-effective and low compute tier suitable for
the following cases:
* Experimenting with RagManagedDb.
com. google. cloud. vertexai. api. Rag Managed Db Config. Basic. Builder
Basic tier is a cost-effective and low compute tier suitable for
the following cases:
* Experimenting with RagManagedDb.
com. google. cloud. vertexai. api. Rag Managed Db Config. Builder
Configuration message for RagManagedDb used by RagEngine.
com. google. cloud. vertexai. api. Rag Managed Db Config. Scaled
Scaled tier offers production grade performance along with
autoscaling functionality. It is suitable for customers with large
amounts of data or performance sensitive workloads.
com. google. cloud. vertexai. api. Rag Managed Db Config. Scaled. Builder
Scaled tier offers production grade performance along with
autoscaling functionality. It is suitable for customers with large
amounts of data or performance sensitive workloads.
com. google. cloud. vertexai. api. Rag Managed Db Config. Unprovisioned
Disables the RAG Engine service and deletes all your data held
within this service. This will halt the billing of the service.
com. google. cloud. vertexai. api. Rag Managed Db Config. Unprovisioned. Builder
Disables the RAG Engine service and deletes all your data held
within this service. This will halt the billing of the service.
com. google. cloud. vertexai. api. Rag Retrieval Config
Specifies the context retrieval config.
com. google. cloud. vertexai. api. Rag Retrieval Config. Builder
Specifies the context retrieval config.
com. google. cloud. vertexai. api. Rag Retrieval Config. Filter
Config for filters.
com. google. cloud. vertexai. api. Rag Retrieval Config. Filter. Builder
Config for filters.
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking
Config for ranking and reranking.
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Builder
Config for ranking and reranking.
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Llm Ranker
Config for LlmRanker.
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Llm Ranker. Builder
Config for LlmRanker.
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Rank Service
Config for Rank Service.
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Rank Service. Builder
Config for Rank Service.
com. google. cloud. vertexai. api. Rag Vector Db Config
Config for the Vector DB to use for RAG.
com. google. cloud. vertexai. api. Rag Vector Db Config. Builder
Config for the Vector DB to use for RAG.
com. google. cloud. vertexai. api. Rag Vector Db Config. Pinecone
The config for the Pinecone.
com. google. cloud. vertexai. api. Rag Vector Db Config. Pinecone. Builder
The config for the Pinecone.
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db
The config for the default RAG-managed Vector DB.
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db.
Config for ANN search.
RagManagedDb uses a tree-based structure to partition data and
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db.ANN. Builder
Config for ANN search.
RagManagedDb uses a tree-based structure to partition data and
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db. Builder
The config for the default RAG-managed Vector DB.
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db.
Config for KNN search.
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db.KNN. Builder
Config for KNN search.
com. google. cloud. vertexai. api. Rag Vector Db Config. Vertex Vector Search
The config for the Vertex Vector Search.
com. google. cloud. vertexai. api. Rag Vector Db Config. Vertex Vector Search. Builder
The config for the Vertex Vector Search.
com. google. cloud. vertexai. api. Raw Predict Request
Request message for
PredictionService.RawPredict .
com. google. cloud. vertexai. api. Raw Predict Request. Builder
Request message for
PredictionService.RawPredict .
com. google. cloud. vertexai. api. Replicated Voice Config
The configuration for the replicated voice to use.
com. google. cloud. vertexai. api. Replicated Voice Config. Builder
The configuration for the replicated voice to use.
com. google. cloud. vertexai. api. Reservation Affinity
A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a
DeployedModel) to draw its Compute Engine resources from a Shared
Reservation, or exclusively from on-demand capacity.
com. google. cloud. vertexai. api. Reservation Affinity. Builder
A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a
DeployedModel) to draw its Compute Engine resources from a Shared
Reservation, or exclusively from on-demand capacity.
com. google. cloud. vertexai. api. Reservation Affinity Proto
com. google. cloud. vertexai. api. Resources Consumed
Statistics information about resource consumption.
com. google. cloud. vertexai. api. Resources Consumed. Builder
Statistics information about resource consumption.
com. google. cloud. vertexai. api. Retrieval
Defines a retrieval tool that model can call to access external knowledge.
com. google. cloud. vertexai. api. Retrieval. Builder
Defines a retrieval tool that model can call to access external knowledge.
com. google. cloud. vertexai. api. Retrieval Config
Retrieval config.
com. google. cloud. vertexai. api. Retrieval Config. Builder
Retrieval config.
com. google. cloud. vertexai. api. Retrieval Metadata
Metadata related to retrieval in the grounding flow.
com. google. cloud. vertexai. api. Retrieval Metadata. Builder
Metadata related to retrieval in the grounding flow.
com. google. cloud. vertexai. api. Safety Rating
Safety rating corresponding to the generated content.
com. google. cloud. vertexai. api. Safety Rating. Builder
Safety rating corresponding to the generated content.
com. google. cloud. vertexai. api. Safety Setting
Safety settings.
com. google. cloud. vertexai. api. Safety Setting. Builder
Safety settings.
com. google. cloud. vertexai. api. Sampled Shapley Attribution
An attribution method that approximates Shapley values for features that
contribute to the label being predicted. A sampling strategy is used to
approximate the value rather than considering all subsets of features.
com. google. cloud. vertexai. api. Sampled Shapley Attribution. Builder
An attribution method that approximates Shapley values for features that
contribute to the label being predicted. A sampling strategy is used to
approximate the value rather than considering all subsets of features.
com. google. cloud. vertexai. api. Schema
Schema is used to define the format of input/output data. Represents a select
subset of an OpenAPI 3.0 schema
object . More fields may
com. google. cloud. vertexai. api. Schema. Builder
Schema is used to define the format of input/output data. Represents a select
subset of an OpenAPI 3.0 schema
object . More fields may
com. google. cloud. vertexai. api. Search Entry Point
Google search entry point.
com. google. cloud. vertexai. api. Search Entry Point. Builder
Google search entry point.
com. google. cloud. vertexai. api. Segment
Segment of the content.
com. google. cloud. vertexai. api. Segment. Builder
Segment of the content.
com. google. cloud. vertexai. api. Service Networking Proto
com. google. cloud. vertexai. api. Share Point Sources
The SharePointSources to pass to ImportRagFiles.
com. google. cloud. vertexai. api. Share Point Sources. Builder
The SharePointSources to pass to ImportRagFiles.
com. google. cloud. vertexai. api. Share Point Sources. Share Point Source
An individual SharePointSource.
com. google. cloud. vertexai. api. Share Point Sources. Share Point Source. Builder
An individual SharePointSource.
com. google. cloud. vertexai. api. Shielded Vm Config
A set of Shielded Instance options.
See Images using supported Shielded VM
features .
com. google. cloud. vertexai. api. Shielded Vm Config. Builder
A set of Shielded Instance options.
See Images using supported Shielded VM
features .
com. google. cloud. vertexai. api. Slack Source
The Slack source for the ImportRagFilesRequest.
com. google. cloud. vertexai. api. Slack Source. Builder
The Slack source for the ImportRagFilesRequest.
com. google. cloud. vertexai. api. Slack Source. Slack Channels
SlackChannels contains the Slack channels and corresponding access token.
com. google. cloud. vertexai. api. Slack Source. Slack Channels. Builder
SlackChannels contains the Slack channels and corresponding access token.
com. google. cloud. vertexai. api. Slack Source. Slack Channels. Slack Channel
SlackChannel contains the Slack channel ID and the time range to import.
com. google. cloud. vertexai. api. Slack Source. Slack Channels. Slack Channel. Builder
SlackChannel contains the Slack channel ID and the time range to import.
com. google. cloud. vertexai. api. Smooth Grad Config
Config for SmoothGrad approximation of gradients.
When enabled, the gradients are approximated by averaging the gradients from
com. google. cloud. vertexai. api. Smooth Grad Config. Builder
Config for SmoothGrad approximation of gradients.
When enabled, the gradients are approximated by averaging the gradients from
com. google. cloud. vertexai. api. Speaker Voice Config
Configuration for a single speaker in a multi-speaker setup.
com. google. cloud. vertexai. api. Speaker Voice Config. Builder
Configuration for a single speaker in a multi-speaker setup.
com. google. cloud. vertexai. api. Speculative Decoding Spec
Configuration for Speculative Decoding.
com. google. cloud. vertexai. api. Speculative Decoding Spec. Builder
Configuration for Speculative Decoding.
com. google. cloud. vertexai. api. Speculative Decoding Spec. Draft Model Speculation
Draft model speculation works by using the smaller model to generate
candidate tokens for speculative decoding.
com. google. cloud. vertexai. api. Speculative Decoding Spec. Draft Model Speculation. Builder
Draft model speculation works by using the smaller model to generate
candidate tokens for speculative decoding.
com. google. cloud. vertexai. api. Speculative Decoding Spec. Ngram Speculation
N-Gram speculation works by trying to find matching tokens in the
previous prompt sequence and use those as speculation for generating
new tokens.
com. google. cloud. vertexai. api. Speculative Decoding Spec. Ngram Speculation. Builder
N-Gram speculation works by trying to find matching tokens in the
previous prompt sequence and use those as speculation for generating
new tokens.
com. google. cloud. vertexai. api. Speech Config
Configuration for speech generation.
com. google. cloud. vertexai. api. Speech Config. Builder
Configuration for speech generation.
com. google. cloud. vertexai. api. Stream Direct Predict Request
Request message for
PredictionService.StreamDirectPredict .
com. google. cloud. vertexai. api. Stream Direct Predict Request. Builder
Request message for
PredictionService.StreamDirectPredict .
com. google. cloud. vertexai. api. Stream Direct Predict Response
Response message for
PredictionService.StreamDirectPredict .
com. google. cloud. vertexai. api. Stream Direct Predict Response. Builder
Response message for
PredictionService.StreamDirectPredict .
com. google. cloud. vertexai. api. Stream Direct Raw Predict Request
Request message for
PredictionService.StreamDirectRawPredict .
com. google. cloud. vertexai. api. Stream Direct Raw Predict Request. Builder
Request message for
PredictionService.StreamDirectRawPredict .
com. google. cloud. vertexai. api. Stream Direct Raw Predict Response
Response message for
PredictionService.StreamDirectRawPredict .
com. google. cloud. vertexai. api. Stream Direct Raw Predict Response. Builder
Response message for
PredictionService.StreamDirectRawPredict .
com. google. cloud. vertexai. api. Stream Raw Predict Request
Request message for
PredictionService.StreamRawPredict .
com. google. cloud. vertexai. api. Stream Raw Predict Request. Builder
Request message for
PredictionService.StreamRawPredict .
com. google. cloud. vertexai. api. Streaming Predict Request
Request message for
PredictionService.StreamingPredict .
com. google. cloud. vertexai. api. Streaming Predict Request. Builder
Request message for
PredictionService.StreamingPredict .
com. google. cloud. vertexai. api. Streaming Predict Response
Response message for
PredictionService.StreamingPredict .
com. google. cloud. vertexai. api. Streaming Predict Response. Builder
Response message for
PredictionService.StreamingPredict .
com. google. cloud. vertexai. api. Streaming Raw Predict Request
Request message for
PredictionService.StreamingRawPredict .
com. google. cloud. vertexai. api. Streaming Raw Predict Request. Builder
Request message for
PredictionService.StreamingRawPredict .
com. google. cloud. vertexai. api. Streaming Raw Predict Response
Response message for
PredictionService.StreamingRawPredict .
com. google. cloud. vertexai. api. Streaming Raw Predict Response. Builder
Response message for
PredictionService.StreamingRawPredict .
com. google. cloud. vertexai. api. String Array
A list of string values.
com. google. cloud. vertexai. api. String Array. Builder
A list of string values.
com. google. cloud. vertexai. api.TF Record Destination
The storage details for TFRecord output content.
com. google. cloud. vertexai. api.TF Record Destination. Builder
The storage details for TFRecord output content.
com. google. cloud. vertexai. api. Tensor
A tensor value type.
com. google. cloud. vertexai. api. Tensor. Builder
A tensor value type.
com. google. cloud. vertexai. api. Tokens Info
Tokens info with a list of tokens and the corresponding list of token ids.
com. google. cloud. vertexai. api. Tokens Info. Builder
Tokens info with a list of tokens and the corresponding list of token ids.
com. google. cloud. vertexai. api. Tool
Tool details that the model may use to generate response.
A Tool is a piece of code that enables the system to interact with
com. google. cloud. vertexai. api. Tool. Builder
Tool details that the model may use to generate response.
A Tool is a piece of code that enables the system to interact with
com. google. cloud. vertexai. api. Tool. Code Execution
Tool that executes code generated by the model, and automatically returns
the result to the model.
com. google. cloud. vertexai. api. Tool. Code Execution. Builder
Tool that executes code generated by the model, and automatically returns
the result to the model.
com. google. cloud. vertexai. api. Tool. Computer Use
Tool to support computer use.
com. google. cloud. vertexai. api. Tool. Computer Use. Builder
Tool to support computer use.
com. google. cloud. vertexai. api. Tool. Google Search
GoogleSearch tool type.
Tool to support Google Search in Model. Powered by Google.
com. google. cloud. vertexai. api. Tool. Google Search. Builder
GoogleSearch tool type.
Tool to support Google Search in Model. Powered by Google.
com. google. cloud. vertexai. api. Tool Config
Tool config. This config is shared for all tools provided in the request.
com. google. cloud. vertexai. api. Tool Config. Builder
Tool config. This config is shared for all tools provided in the request.
com. google. cloud. vertexai. api. Tool Proto
com. google. cloud. vertexai. api. Types Proto
com. google. cloud. vertexai. api. Undeploy Model Operation Metadata
Runtime operation information for
EndpointService.UndeployModel .
com. google. cloud. vertexai. api. Undeploy Model Operation Metadata. Builder
Runtime operation information for
EndpointService.UndeployModel .
com. google. cloud. vertexai. api. Undeploy Model Request
Request message for
EndpointService.UndeployModel .
com. google. cloud. vertexai. api. Undeploy Model Request. Builder
Request message for
EndpointService.UndeployModel .
com. google. cloud. vertexai. api. Undeploy Model Response
Response message for
EndpointService.UndeployModel .
com. google. cloud. vertexai. api. Undeploy Model Response. Builder
Response message for
EndpointService.UndeployModel .
com. google. cloud. vertexai. api. Update Endpoint Long Running Request
Request message for
EndpointService.UpdateEndpointLongRunning .
com. google. cloud. vertexai. api. Update Endpoint Long Running Request. Builder
Request message for
EndpointService.UpdateEndpointLongRunning .
com. google. cloud. vertexai. api. Update Endpoint Operation Metadata
Runtime operation information for
EndpointService.UpdateEndpointLongRunning .
com. google. cloud. vertexai. api. Update Endpoint Operation Metadata. Builder
Runtime operation information for
EndpointService.UpdateEndpointLongRunning .
com. google. cloud. vertexai. api. Update Endpoint Request
Request message for
EndpointService.UpdateEndpoint .
com. google. cloud. vertexai. api. Update Endpoint Request. Builder
Request message for
EndpointService.UpdateEndpoint .
com. google. cloud. vertexai. api. Upload Rag File Config
Config for uploading RagFile.
com. google. cloud. vertexai. api. Upload Rag File Config. Builder
Config for uploading RagFile.
com. google. cloud. vertexai. api. Url Context
Tool to support URL context.
com. google. cloud. vertexai. api. Url Context. Builder
Tool to support URL context.
com. google. cloud. vertexai. api. Url Context Metadata
Metadata related to url context retrieval tool.
com. google. cloud. vertexai. api. Url Context Metadata. Builder
Metadata related to url context retrieval tool.
com. google. cloud. vertexai. api. Url Metadata
Context of the a single url retrieval.
com. google. cloud. vertexai. api. Url Metadata. Builder
Context of the a single url retrieval.
com. google. cloud. vertexai. api. Usage Metadata
Usage metadata about the content generation request and response.
This message provides a detailed breakdown of token usage and other
relevant metrics.
com. google. cloud. vertexai. api. Usage Metadata. Builder
Usage metadata about the content generation request and response.
This message provides a detailed breakdown of token usage and other
relevant metrics.
com. google. cloud. vertexai. api. Usage Metadata Proto
com. google. cloud. vertexai. api. VertexAI Search
Retrieve from Vertex AI Search datastore or engine for grounding.
datastore and engine are mutually exclusive.
See https://cloud.google.com/products/agent-builder
com. google. cloud. vertexai. api. VertexAI Search. Builder
Retrieve from Vertex AI Search datastore or engine for grounding.
datastore and engine are mutually exclusive.
See https://cloud.google.com/products/agent-builder
com. google. cloud. vertexai. api. VertexAI Search. Data Store Spec
Define data stores within engine to filter on in a search call and
configurations for those data stores. For more information, see
https://cloud.google.com/generative-ai-app-builder/docs/reference/rpc/google.cloud.discoveryengine.v1#datastorespec
com. google. cloud. vertexai. api. VertexAI Search. Data Store Spec. Builder
Define data stores within engine to filter on in a search call and
configurations for those data stores. For more information, see
https://cloud.google.com/generative-ai-app-builder/docs/reference/rpc/google.cloud.discoveryengine.v1#datastorespec
com. google. cloud. vertexai. api. Vertex Ai Search Config
Config for the Vertex AI Search.
com. google. cloud. vertexai. api. Vertex Ai Search Config. Builder
Config for the Vertex AI Search.
com. google. cloud. vertexai. api. Vertex Rag Data Proto
com. google. cloud. vertexai. api. Vertex Rag Store
Retrieve from Vertex RAG Store for grounding.
com. google. cloud. vertexai. api. Vertex Rag Store. Builder
Retrieve from Vertex RAG Store for grounding.
com. google. cloud. vertexai. api. Vertex Rag Store. Rag Resource
The definition of the Rag resource.
com. google. cloud. vertexai. api. Vertex Rag Store. Rag Resource. Builder
The definition of the Rag resource.
com. google. cloud. vertexai. api. Video Metadata
Metadata describes the input video content.
com. google. cloud. vertexai. api. Video Metadata. Builder
Metadata describes the input video content.
com. google. cloud. vertexai. api. Voice Config
Configuration for a voice.
com. google. cloud. vertexai. api. Voice Config. Builder
Configuration for a voice.
com. google. cloud. vertexai. api. Xrai Attribution
An explanation method that redistributes Integrated Gradients
attributions to segmented regions, taking advantage of the model's fully
differentiable structure. Refer to this paper for more details:
com. google. cloud. vertexai. api. Xrai Attribution. Builder
An explanation method that redistributes Integrated Gradients
attributions to segmented regions, taking advantage of the model's fully
differentiable structure. Refer to this paper for more details:
Interfaces
Interface
Description
com. google. cloud. vertexai. api. Api Auth. Api Key Config Or Builder
com. google. cloud. vertexai. api. Api Auth Or Builder
com. google. cloud. vertexai. api. Attribution Or Builder
com. google. cloud. vertexai. api. Automatic Resources Or Builder
com. google. cloud. vertexai. api. Autoscaling Metric Spec Or Builder
com. google. cloud. vertexai. api. Avro Source Or Builder
com. google. cloud. vertexai. api. Batch Dedicated Resources Or Builder
com. google. cloud. vertexai. api. Big Query Destination Or Builder
com. google. cloud. vertexai. api. Big Query Source Or Builder
com. google. cloud. vertexai. api. Blob Or Builder
com. google. cloud. vertexai. api. Blur Baseline Config Or Builder
com. google. cloud. vertexai. api. Bool Array Or Builder
com. google. cloud. vertexai. api. Cached Content. Usage Metadata Or Builder
com. google. cloud. vertexai. api. Cached Content Or Builder
com. google. cloud. vertexai. api. Candidate Or Builder
com. google. cloud. vertexai. api. Citation Metadata Or Builder
com. google. cloud. vertexai. api. Citation Or Builder
com. google. cloud. vertexai. api. Client Connection Config Or Builder
com. google. cloud. vertexai. api. Code Execution Result Or Builder
com. google. cloud. vertexai. api. Compute Tokens Request Or Builder
com. google. cloud. vertexai. api. Compute Tokens Response Or Builder
com. google. cloud. vertexai. api. Container Registry Destination Or Builder
com. google. cloud. vertexai. api. Content Or Builder
com. google. cloud. vertexai. api. Corpus Status Or Builder
com. google. cloud. vertexai. api. Count Tokens Request Or Builder
com. google. cloud. vertexai. api. Count Tokens Response Or Builder
com. google. cloud. vertexai. api. Create Endpoint Operation Metadata Or Builder
com. google. cloud. vertexai. api. Create Endpoint Request Or Builder
com. google. cloud. vertexai. api. Csv Destination Or Builder
com. google. cloud. vertexai. api. Csv Source Or Builder
com. google. cloud. vertexai. api. Dedicated Resources Or Builder
com. google. cloud. vertexai. api. Delete Endpoint Request Or Builder
com. google. cloud. vertexai. api. Delete Operation Metadata Or Builder
com. google. cloud. vertexai. api. Deploy Model Operation Metadata Or Builder
com. google. cloud. vertexai. api. Deploy Model Request Or Builder
com. google. cloud. vertexai. api. Deploy Model Response Or Builder
com. google. cloud. vertexai. api. Deployed Model. Status Or Builder
com. google. cloud. vertexai. api. Deployed Model Or Builder
com. google. cloud. vertexai. api. Direct Predict Request Or Builder
com. google. cloud. vertexai. api. Direct Predict Response Or Builder
com. google. cloud. vertexai. api. Direct Raw Predict Request Or Builder
com. google. cloud. vertexai. api. Direct Raw Predict Response Or Builder
com. google. cloud. vertexai. api. Direct Upload Source Or Builder
com. google. cloud. vertexai. api. Disk Spec Or Builder
com. google. cloud. vertexai. api. Dns Peering Config Or Builder
com. google. cloud. vertexai. api. Double Array Or Builder
com. google. cloud. vertexai. api. Dynamic Retrieval Config Or Builder
com. google. cloud. vertexai. api. Embed Content Request Or Builder
com. google. cloud. vertexai. api. Embed Content Response. Embedding Or Builder
com. google. cloud. vertexai. api. Embed Content Response Or Builder
com. google. cloud. vertexai. api. Encryption Spec Or Builder
com. google. cloud. vertexai. api. Endpoint Or Builder
com. google. cloud. vertexai. api. Endpoint Service Grpc. Async Service
A service for managing Vertex AI's Endpoints.
com. google. cloud. vertexai. api. Enterprise Web Search Or Builder
com. google. cloud. vertexai. api. Examples. Example Gcs Source Or Builder
com. google. cloud. vertexai. api. Examples Or Builder
com. google. cloud. vertexai. api. Examples Override Or Builder
com. google. cloud. vertexai. api. Examples Restrictions Namespace Or Builder
com. google. cloud. vertexai. api. Executable Code Or Builder
com. google. cloud. vertexai. api. Explain Request Or Builder
com. google. cloud. vertexai. api. Explain Response Or Builder
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Feature Value Domain Or Builder
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization Or Builder
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata Or Builder
com. google. cloud. vertexai. api. Explanation Metadata. Output Metadata Or Builder
com. google. cloud. vertexai. api. Explanation Metadata Or Builder
com. google. cloud. vertexai. api. Explanation Metadata Override. Input Metadata Override Or Builder
com. google. cloud. vertexai. api. Explanation Metadata Override Or Builder
com. google. cloud. vertexai. api. Explanation Or Builder
com. google. cloud. vertexai. api. Explanation Parameters Or Builder
com. google. cloud. vertexai. api. Explanation Spec Or Builder
com. google. cloud. vertexai. api. Explanation Spec Override Or Builder
com. google. cloud. vertexai. api. Faster Deployment Config Or Builder
com. google. cloud. vertexai. api. Feature Noise Sigma. Noise Sigma For Feature Or Builder
com. google. cloud. vertexai. api. Feature Noise Sigma Or Builder
com. google. cloud. vertexai. api. File Data Or Builder
com. google. cloud. vertexai. api. File Status Or Builder
com. google. cloud. vertexai. api. Function Call Or Builder
com. google. cloud. vertexai. api. Function Calling Config Or Builder
com. google. cloud. vertexai. api. Function Declaration Or Builder
com. google. cloud. vertexai. api. Function Response Blob Or Builder
com. google. cloud. vertexai. api. Function Response File Data Or Builder
com. google. cloud. vertexai. api. Function Response Or Builder
com. google. cloud. vertexai. api. Function Response Part Or Builder
com. google. cloud. vertexai. api. Gcs Destination Or Builder
com. google. cloud. vertexai. api. Gcs Source Or Builder
com. google. cloud. vertexai. api. Gen Ai Advanced Features Config. Rag Config Or Builder
com. google. cloud. vertexai. api. Gen Ai Advanced Features Config Or Builder
com. google. cloud. vertexai. api. Generate Content Request Or Builder
com. google. cloud. vertexai. api. Generate Content Response. Prompt Feedback Or Builder
com. google. cloud. vertexai. api. Generate Content Response. Usage Metadata Or Builder
com. google. cloud. vertexai. api. Generate Content Response Or Builder
com. google. cloud. vertexai. api. Generation Config. Routing Config. Auto Routing Mode Or Builder
com. google. cloud. vertexai. api. Generation Config. Routing Config. Manual Routing Mode Or Builder
com. google. cloud. vertexai. api. Generation Config. Routing Config Or Builder
com. google. cloud. vertexai. api. Generation Config. Thinking Config Or Builder
com. google. cloud. vertexai. api. Generation Config Or Builder
com. google. cloud. vertexai. api. Generic Operation Metadata Or Builder
com. google. cloud. vertexai. api. Get Endpoint Request Or Builder
com. google. cloud. vertexai. api. Google Drive Source. Resource Id Or Builder
com. google. cloud. vertexai. api. Google Drive Source Or Builder
com. google. cloud. vertexai. api. Google Maps Or Builder
com. google. cloud. vertexai. api. Google Search Retrieval Or Builder
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Place Answer Sources. Review Snippet Or Builder
com. google. cloud. vertexai. api. Grounding Chunk. Maps. Place Answer Sources Or Builder
com. google. cloud. vertexai. api. Grounding Chunk. Maps Or Builder
com. google. cloud. vertexai. api. Grounding Chunk. Retrieved Context Or Builder
com. google. cloud. vertexai. api. Grounding Chunk. Web Or Builder
com. google. cloud. vertexai. api. Grounding Chunk Or Builder
com. google. cloud. vertexai. api. Grounding Metadata. Source Flagging Uri Or Builder
com. google. cloud. vertexai. api. Grounding Metadata Or Builder
com. google. cloud. vertexai. api. Grounding Support Or Builder
com. google. cloud. vertexai. api. Image Config Or Builder
com. google. cloud. vertexai. api. Import Rag Files Config Or Builder
com. google. cloud. vertexai. api. Int64 Array Or Builder
com. google. cloud. vertexai. api. Integrated Gradients Attribution Or Builder
com. google. cloud. vertexai. api. Jira Source. Jira Queries Or Builder
com. google. cloud. vertexai. api. Jira Source Or Builder
com. google. cloud. vertexai. api. List Endpoints Request Or Builder
com. google. cloud. vertexai. api. List Endpoints Response Or Builder
com. google. cloud. vertexai. api. Llm Utility Service Grpc. Async Service
Service for LLM related utility functions.
com. google. cloud. vertexai. api. Logprobs Result. Candidate Or Builder
com. google. cloud. vertexai. api. Logprobs Result. Top Candidates Or Builder
com. google. cloud. vertexai. api. Logprobs Result Or Builder
com. google. cloud. vertexai. api. Lustre Mount Or Builder
com. google. cloud. vertexai. api. Machine Spec Or Builder
com. google. cloud. vertexai. api. Modality Token Count Or Builder
com. google. cloud. vertexai. api. Model Armor Config Or Builder
com. google. cloud. vertexai. api. Model Explanation Or Builder
com. google. cloud. vertexai. api. Multi Speaker Voice Config Or Builder
com. google. cloud. vertexai. api. Mutate Deployed Model Operation Metadata Or Builder
com. google. cloud. vertexai. api. Mutate Deployed Model Request Or Builder
com. google. cloud. vertexai. api. Mutate Deployed Model Response Or Builder
com. google. cloud. vertexai. api. Neighbor Or Builder
com. google. cloud. vertexai. api. Nfs Mount Or Builder
com. google. cloud. vertexai. api.PSC Automation Config Or Builder
com. google. cloud. vertexai. api. Part Or Builder
com. google. cloud. vertexai. api. Partial Arg Or Builder
com. google. cloud. vertexai. api. Persistent Disk Spec Or Builder
com. google. cloud. vertexai. api. Prebuilt Voice Config Or Builder
com. google. cloud. vertexai. api. Predict Request Or Builder
com. google. cloud. vertexai. api. Predict Request Response Logging Config Or Builder
com. google. cloud. vertexai. api. Predict Response Or Builder
com. google. cloud. vertexai. api. Prediction Service Grpc. Async Service
A service for online predictions and explanations.
com. google. cloud. vertexai. api. Presets Or Builder
com. google. cloud. vertexai. api. Private Endpoints Or Builder
com. google. cloud. vertexai. api. Private Service Connect Config Or Builder
com. google. cloud. vertexai. api. Psc Automated Endpoints Or Builder
com. google. cloud. vertexai. api. Psc Interface Config Or Builder
com. google. cloud. vertexai. api. Rag Chunk. Page Span Or Builder
com. google. cloud. vertexai. api. Rag Chunk Or Builder
com. google. cloud. vertexai. api. Rag Corpus Or Builder
com. google. cloud. vertexai. api. Rag Embedding Model Config. Vertex Prediction Endpoint Or Builder
com. google. cloud. vertexai. api. Rag Embedding Model Config Or Builder
com. google. cloud. vertexai. api. Rag Engine Config Or Builder
com. google. cloud. vertexai. api. Rag File Chunking Config. Fixed Length Chunking Or Builder
com. google. cloud. vertexai. api. Rag File Chunking Config Or Builder
com. google. cloud. vertexai. api. Rag File Or Builder
com. google. cloud. vertexai. api. Rag File Parsing Config. Layout Parser Or Builder
com. google. cloud. vertexai. api. Rag File Parsing Config. Llm Parser Or Builder
com. google. cloud. vertexai. api. Rag File Parsing Config Or Builder
com. google. cloud. vertexai. api. Rag File Transformation Config Or Builder
com. google. cloud. vertexai. api. Rag Managed Db Config. Basic Or Builder
com. google. cloud. vertexai. api. Rag Managed Db Config. Scaled Or Builder
com. google. cloud. vertexai. api. Rag Managed Db Config. Unprovisioned Or Builder
com. google. cloud. vertexai. api. Rag Managed Db Config Or Builder
com. google. cloud. vertexai. api. Rag Retrieval Config. Filter Or Builder
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Llm Ranker Or Builder
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Rank Service Or Builder
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking Or Builder
com. google. cloud. vertexai. api. Rag Retrieval Config Or Builder
com. google. cloud. vertexai. api. Rag Vector Db Config. Pinecone Or Builder
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db.ANN Or Builder
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db.KNN Or Builder
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db Or Builder
com. google. cloud. vertexai. api. Rag Vector Db Config. Vertex Vector Search Or Builder
com. google. cloud. vertexai. api. Rag Vector Db Config Or Builder
com. google. cloud. vertexai. api. Raw Predict Request Or Builder
com. google. cloud. vertexai. api. Replicated Voice Config Or Builder
com. google. cloud. vertexai. api. Reservation Affinity Or Builder
com. google. cloud. vertexai. api. Resources Consumed Or Builder
com. google. cloud. vertexai. api. Retrieval Config Or Builder
com. google. cloud. vertexai. api. Retrieval Metadata Or Builder
com. google. cloud. vertexai. api. Retrieval Or Builder
com. google. cloud. vertexai. api. Safety Rating Or Builder
com. google. cloud. vertexai. api. Safety Setting Or Builder
com. google. cloud. vertexai. api. Sampled Shapley Attribution Or Builder
com. google. cloud. vertexai. api. Schema Or Builder
com. google. cloud. vertexai. api. Search Entry Point Or Builder
com. google. cloud. vertexai. api. Segment Or Builder
com. google. cloud. vertexai. api. Share Point Sources. Share Point Source Or Builder
com. google. cloud. vertexai. api. Share Point Sources Or Builder
com. google. cloud. vertexai. api. Shielded Vm Config Or Builder
com. google. cloud. vertexai. api. Slack Source. Slack Channels. Slack Channel Or Builder
com. google. cloud. vertexai. api. Slack Source. Slack Channels Or Builder
com. google. cloud. vertexai. api. Slack Source Or Builder
com. google. cloud. vertexai. api. Smooth Grad Config Or Builder
com. google. cloud. vertexai. api. Speaker Voice Config Or Builder
com. google. cloud. vertexai. api. Speculative Decoding Spec. Draft Model Speculation Or Builder
com. google. cloud. vertexai. api. Speculative Decoding Spec. Ngram Speculation Or Builder
com. google. cloud. vertexai. api. Speculative Decoding Spec Or Builder
com. google. cloud. vertexai. api. Speech Config Or Builder
com. google. cloud. vertexai. api. Stream Direct Predict Request Or Builder
com. google. cloud. vertexai. api. Stream Direct Predict Response Or Builder
com. google. cloud. vertexai. api. Stream Direct Raw Predict Request Or Builder
com. google. cloud. vertexai. api. Stream Direct Raw Predict Response Or Builder
com. google. cloud. vertexai. api. Stream Raw Predict Request Or Builder
com. google. cloud. vertexai. api. Streaming Predict Request Or Builder
com. google. cloud. vertexai. api. Streaming Predict Response Or Builder
com. google. cloud. vertexai. api. Streaming Raw Predict Request Or Builder
com. google. cloud. vertexai. api. Streaming Raw Predict Response Or Builder
com. google. cloud. vertexai. api. String Array Or Builder
com. google. cloud. vertexai. api.TF Record Destination Or Builder
com. google. cloud. vertexai. api. Tensor Or Builder
com. google. cloud. vertexai. api. Tokens Info Or Builder
com. google. cloud. vertexai. api. Tool. Code Execution Or Builder
com. google. cloud. vertexai. api. Tool. Computer Use Or Builder
com. google. cloud. vertexai. api. Tool. Google Search Or Builder
com. google. cloud. vertexai. api. Tool Config Or Builder
com. google. cloud. vertexai. api. Tool Or Builder
com. google. cloud. vertexai. api. Undeploy Model Operation Metadata Or Builder
com. google. cloud. vertexai. api. Undeploy Model Request Or Builder
com. google. cloud. vertexai. api. Undeploy Model Response Or Builder
com. google. cloud. vertexai. api. Update Endpoint Long Running Request Or Builder
com. google. cloud. vertexai. api. Update Endpoint Operation Metadata Or Builder
com. google. cloud. vertexai. api. Update Endpoint Request Or Builder
com. google. cloud. vertexai. api. Upload Rag File Config Or Builder
com. google. cloud. vertexai. api. Url Context Metadata Or Builder
com. google. cloud. vertexai. api. Url Context Or Builder
com. google. cloud. vertexai. api. Url Metadata Or Builder
com. google. cloud. vertexai. api. Usage Metadata Or Builder
com. google. cloud. vertexai. api. VertexAI Search. Data Store Spec Or Builder
com. google. cloud. vertexai. api. VertexAI Search Or Builder
com. google. cloud. vertexai. api. Vertex Ai Search Config Or Builder
com. google. cloud. vertexai. api. Vertex Rag Store. Rag Resource Or Builder
com. google. cloud. vertexai. api. Vertex Rag Store Or Builder
com. google. cloud. vertexai. api. Video Metadata Or Builder
com. google. cloud. vertexai. api. Voice Config Or Builder
com. google. cloud. vertexai. api. Xrai Attribution Or Builder
Enums
Enum
Description
com. google. cloud. vertexai. api. Accelerator Type
Represents a hardware accelerator type.
com. google. cloud. vertexai. api. Api Auth. Auth Config Case
com. google. cloud. vertexai. api. Cached Content. Expiration Case
com. google. cloud. vertexai. api. Candidate. Finish Reason
The reason why the model stopped generating tokens.
If empty, the model has not stopped generating the tokens.
com. google. cloud. vertexai. api. Code Execution Result. Outcome
Enumeration of possible outcomes of the code execution.
com. google. cloud. vertexai. api. Corpus Status. State
RagCorpus life state.
com. google. cloud. vertexai. api. Deployed Model. Prediction Resources Case
com. google. cloud. vertexai. api. Deployment Stage
Stage field indicating the current progress of a deployment.
com. google. cloud. vertexai. api. Dynamic Retrieval Config. Mode
The mode of the predictor to be used in dynamic retrieval.
com. google. cloud. vertexai. api. Embed Content Request. Embedding Task Type
Represents a downstream task the embeddings will be used for.
com. google. cloud. vertexai. api. Examples. Config Case
com. google. cloud. vertexai. api. Examples. Example Gcs Source. Data Format
The format of the input example instances.
com. google. cloud. vertexai. api. Examples. Source Case
com. google. cloud. vertexai. api. Examples Override. Data Format
Data format enum.
com. google. cloud. vertexai. api. Executable Code. Language
Supported programming languages for the generated code.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Encoding
Defines how a feature is encoded. Defaults to IDENTITY.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization. Color Map
The color scheme used for highlighting areas.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization. Overlay Type
How the original image is displayed in the visualization.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization. Polarity
Whether to only highlight pixels with positive contributions, negative
or both. Defaults to POSITIVE.
com. google. cloud. vertexai. api. Explanation Metadata. Input Metadata. Visualization. Type
Type of the image visualization. Only applicable to
Integrated Gradients
attribution .
com. google. cloud. vertexai. api. Explanation Metadata. Output Metadata. Display Name Mapping Case
com. google. cloud. vertexai. api. Explanation Parameters. Method Case
com. google. cloud. vertexai. api. File Status. State
RagFile state.
com. google. cloud. vertexai. api. Function Calling Config. Mode
Function calling mode.
com. google. cloud. vertexai. api. Function Response Part. Data Case
com. google. cloud. vertexai. api. Generate Content Response. Prompt Feedback. Blocked Reason
Blocked reason enumeration.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Auto Routing Mode. Model Routing Preference
The model routing preference.
com. google. cloud. vertexai. api. Generation Config. Routing Config. Routing Config Case
com. google. cloud. vertexai. api. Google Drive Source. Resource Id. Resource Type
The type of the Google Drive resource.
com. google. cloud. vertexai. api. Grounding Chunk. Chunk Type Case
com. google. cloud. vertexai. api. Grounding Chunk. Retrieved Context. Context Details Case
com. google. cloud. vertexai. api. Harm Category
Harm categories that will block the content.
com. google. cloud. vertexai. api. Import Rag Files Config. Import Result Sink Case
com. google. cloud. vertexai. api. Import Rag Files Config. Import Source Case
com. google. cloud. vertexai. api. Import Rag Files Config. Partial Failure Sink Case
com. google. cloud. vertexai. api. Modality
Content Part modality
com. google. cloud. vertexai. api.PSC Automation State
The state of the PSC service automation.
com. google. cloud. vertexai. api. Part. Data Case
com. google. cloud. vertexai. api. Part. Metadata Case
com. google. cloud. vertexai. api. Partial Arg. Delta Case
com. google. cloud. vertexai. api. Presets. Modality
Preset option controlling parameters for different modalities
com. google. cloud. vertexai. api. Presets. Query
Preset option controlling parameters for query speed-precision trade-off
com. google. cloud. vertexai. api. Rag Corpus. Backend Config Case
com. google. cloud. vertexai. api. Rag Embedding Model Config. Model Config Case
com. google. cloud. vertexai. api. Rag File. Rag File Source Case
com. google. cloud. vertexai. api. Rag File Chunking Config. Chunking Config Case
com. google. cloud. vertexai. api. Rag File Parsing Config. Parser Case
com. google. cloud. vertexai. api. Rag Managed Db Config. Tier Case
com. google. cloud. vertexai. api. Rag Retrieval Config. Filter. Vector Db Threshold Case
com. google. cloud. vertexai. api. Rag Retrieval Config. Ranking. Ranking Config Case
com. google. cloud. vertexai. api. Rag Vector Db Config. Rag Managed Db. Retrieval Strategy Case
com. google. cloud. vertexai. api. Rag Vector Db Config. Vector Db Case
com. google. cloud. vertexai. api. Reservation Affinity. Type
Identifies a type of reservation affinity.
com. google. cloud. vertexai. api. Retrieval. Source Case
com. google. cloud. vertexai. api. Safety Rating. Harm Probability
Harm probability levels in the content.
com. google. cloud. vertexai. api. Safety Rating. Harm Severity
Harm severity levels.
com. google. cloud. vertexai. api. Safety Setting. Harm Block Method
Probability vs severity.
com. google. cloud. vertexai. api. Safety Setting. Harm Block Threshold
Probability based thresholds levels for blocking.
com. google. cloud. vertexai. api. Share Point Sources. Share Point Source. Drive Source Case
com. google. cloud. vertexai. api. Share Point Sources. Share Point Source. Folder Source Case
com. google. cloud. vertexai. api. Smooth Grad Config. Gradient Noise Sigma Case
com. google. cloud. vertexai. api. Speculative Decoding Spec. Speculation Case
com. google. cloud. vertexai. api. Tensor. Data Type
Data type of the tensor.
com. google. cloud. vertexai. api. Tool. Computer Use. Environment
Represents the environment being operated, such as a web browser.
com. google. cloud. vertexai. api. Tool. Phish Block Threshold
These are available confidence level user can set to block malicious urls
with chosen confidence and above. For understanding different confidence of
webrisk, please refer to
com. google. cloud. vertexai. api. Type
Type contains the list of OpenAPI data types as defined by
https://swagger.io/docs/specification/data-models/data-types/
com. google. cloud. vertexai. api. Url Metadata. Url Retrieval Status
Status of the url retrieval.
com. google. cloud. vertexai. api. Usage Metadata. Traffic Type
The type of traffic that this request was processed with, indicating which
quota gets consumed.
com. google. cloud. vertexai. api. Voice Config. Voice Config Case
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
