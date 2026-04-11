---
title: "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint
  title: "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
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
Reference
Send feedback
Model endpoint management reference
Stay organized with collections
Save and categorize content based on your preferences.
This page lists functions and their parameters, which are provided by the
google_ml_integration extension to register and manage model endpoints, and manage secrets with
model endpoint management.
Before you begin
Before you register and manage model endpoints, verify the following:
The google_ml_integration extension is installed .
The google_ml_integration.enable_model_support flag is set to on .
For more information, see Register and call remote AI models in AlloyDB overview .
Schemas
The following lists the schemas and functions available in a schema.
public schema
The embedding() function in the public schema can be used with any Vertex AI embedding model without registering the endpoint. For more information, see Run similarity search .
google_ml schema
The google_ml schema provides the following functions:
The google_ml.create_model() SQL function, which is used to register the model endpoint that is used in the prediction or embedding function.
The google_ml.create_sm_secret() SQL function, which uses secrets in the Secret Manager, where the API keys are stored.
The google_ml.embedding() SQL function, which is a prediction function that generates text embeddings. The return type of the embedding function is REAL[].
The google_ml.text_embedding ( Preview ) SQL function in the AI functions, which generates single text embedding for a given query when using the multimodal endpoint.
The google_ml.image_embedding ( Preview ) SQL function in the AI functions, which generates a single embedding for the input image using a multimodal embedding model. The return type of the embedding function is REAL[].
The google_ml.rank() ( Preview ) SQL function in the AI functions, which improves the order of search results by ranking or ordering a collection of records in relation to a given query (a search string).
The google_ml.predict_row() SQL function that generates predictions when you call generic models that support JSON input and output format.
Other helper functions that handle generating custom URL, generating HTTP headers, or passing transform functions.
Functions to manage the registered model endpoints and secrets.
Filters and join with ai.if ( Preview ) SQL function in the AI functions, provides support to evaluate the conditions specified using natural language.
The ai.rank ( Preview ) SQL function in the AI functions, to order a list of items in a query based on a criteria stated using natural language.
The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language.
ai schema
AlloyDB reserves, and creates, the ai schema. The ai schema provides the following functions to generate embeddings using the models registered under the ai schema:
The ai.text_embedding ( Preview ) SQL function in the AI functions, which generates single text embedding for a given query when using multimodal endpoint.
The ai.image_embedding ( Preview ) SQL function, which generates a single embedding for the input image. The return type of the embedding function is REAL[].
The ai.video_embedding ( Preview ) SQL function in the AI functions, which generates an array with one entry for each interval_seconds segment of the video defined when creating the multimodal endpoint.
Filters and join with ai.if ( Preview ) SQL function in the AI functions, provides support to evaluate the conditions specified using natural language.
The ai.rank ( Preview ) SQL function in the AI functions, to order a list of items in a query based on a criteria stated using natural language.
The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language.
Model provider
The following table shows
the model provider value you can set based on the model provider you use:
Model provider
Set in function as…
Vertex AI
google
Hugging Face models
hugging_face
Anthropic models
anthropic
OpenAI
open_ai
Other models
custom
The default model provider is custom .
Based on the provider type, the supported authentication method differs. The Vertex AI models use the AlloyDB service account to authenticate, while other providers can use the Secret Manager or pass authentication details through headers. For more information, see Set up authentication .
Model type
The following sections describe the model type values that you can set.
Note: Setting model type is optional when registering generic model endpoints as generic is the default model type.
Pre-registered Vertex AI models
Within model endpoint management, a variety of Vertex AI models are supported as pre-registered model IDs. You can use these IDs directly in prediction or embedding functions without manual registration. To view the full list of supported models in your environment, run the following query:
SELECT * FROM google_ml.model_info_view;
For more information about supported pre-registered models, see Pre-registered Vertex AI models . For example, to call the pre-registered gemini-embedding-001 model directly:
SELECT
google_ml.embedding(
model_id => 'gemini-embedding-001',
content => 'AlloyDB is a managed, cloud-hosted SQL database service');
Models with built-in support
Model endpoints with built-in support benefit from automated integration. For Vertex AI, many of these models are pre-registered and can be used without manual setup. For other providers, such as OpenAI and Anthropic, you must register the model endpoint using its qualified name to enable the automated features.
Built-in support simplifies registration and usage by automatically configuring default transform functions and inferring correct request URLs.
The
model endpoint management provides built-in support for some models by Vertex AI, Anthropic, and OpenAI. For text embedding models with built-in support, AlloyDB
automatically sets up default transform functions.
To enable automated integration for providers other than Vertex AI, you must register the model endpoint using its qualified name. For more information about models with built-in support, see Models with built-in support .
Other text embedding models
To register a text embedding model endpoint without built-in support, we recommend that you
create transform functions to handle the input and output formats that
the model supports. Optionally, depending on the model requirements, you might
also need to create custom header function to specify the header.
The model type for these models is text-embedding .
Generic models
The model endpoint management also supports
registering of all other model types apart from text embedding models. To
invoke predictions for generic models, use the
google_ml.predict_row() function. You can set model endpoint metadata,
such as a request endpoint and HTTP headers that are specific to your model.
You cannot
pass transform functions when you are registering a generic model endpoint. Ensure that
when you invoke predictions the input to the function is in the JSON format, and
that you parse the JSON output to derive the final output.
The model type for these models is generic .
Multimodal embedding models ( Preview )
Multimodal embeddings allow using vector representation for images, text and videos interchangeably. Multimodal embedding models generate the embeddings for different modalities in the same semantic space. This means semantically similar information, regardless of its original form, is located close together in the vector space.
You don't need to register the Vertex AI multimodal model as you can use the qualified name of the Vertex AI multimodal model as the model ID in your queries.
The model type for these models is multimodal_embedding .
Ranking models ( Preview )
Ranking models take a list of documents and rank those documents based on how relevant the documents are to a given query (a search string). The ai.rank() function can be used to return scores for how well a document answers a given query or to identify ranking of the items in a query based on a criteria specified in natural language.
The model type for these models is reranking .
Authentication
For Vertex AI models, the AlloyDB service account is used for authentication. For other models,
API key or bearer token that is stored as a secret in the
Secret Manager can be used with the google_ml.create_sm_secret() SQL
function. If you are passing authentication through headers, then you can skip setting the authentication method.
The following table shows the auth types that you can set:
Authentication method
Set in function as…
Model provider
AlloyDB service agent
alloydb_service_agent_iam
Vertex AI provider
Secret Manager
secret_manager
third-party providers, such as Anthropic, Hugging Face, or OpenAI
Models
Use this reference to understand parameters for functions that let you manage
model endpoints.
google_ml.create_model() function
The following shows how to call the google_ml.create_model() SQL function used
to register model endpoint metadata:
CALL
google_ml . create_model (
model_id = > ' MODEL_ID ' ,
model_request_url = > ' REQUEST_URL ' ,
model_provider = > ' PROVIDER_ID ' ,
model_type = > ' MODEL_TYPE ' ,
model_qualified_name = > ' MODEL_QUALIFIED_NAME ' ,
model_auth_type = > ' AUTH_TYPE ' ,
model_auth_id = > ' AUTH_ID ' ,
generate_headers_fn = > ' GENERATE_HEADER_FUNCTION ' ,
model_in_transform_fn = > ' INPUT_TRANSFORM_FUNCTION ' ,
model_out_transform_fn = > ' OUTPUT_TRANSFORM_FUNCTION ' );
Parameter
Required
Description
MODEL_ID
required for all model endpoints
A unique ID for the model endpoint that you define.
REQUEST_URL
optional for other text embedding model endpoints with built-in support
The model-specific endpoint when adding other text embedding and generic model endpoints. For AlloyDB for PostgreSQL, provide an https URL. The request URL that the function generates for built-in model endpoints refers to your cluster's project and region or location. If you want to refer to another project, then ensure that you specify the model_request_url explicitly. For a list of request URLs for Vertex AI model endpoints, see Vertex AI model endpoints request URL . For custom hosted model endpoints, ensure that the model endpoint is accessible from the network where AlloyDB is located.
PROVIDER_ID
required for text embedding model endpoints with built-in support
The provider of the model endpoint. The default value is custom . Set to one of the following: google for Vertex AI model endpoints
open_ai for OpenAI model endpoints
hugging_face for Hugging Face model endpoints
anthropic for Anthropic model endpoints
custom for other providers
MODEL_TYPE
optional for generic model endpoints
The model type. Set to one of the following: text_embedding for text embedding model endpoints
multimodal_embedding for multimodal embedding model endpoints ( Preview )
reranking for ranking model endpoints ( Preview )
generic for all other model endpoints
MODEL_QUALIFIED_NAME
required for text embedding models with built-in support; optional for other model endpoints
The fully qualified name for text embedding models with built-in support. For Vertex AI qualified names that you must use for pre-registered models, see Pre-registered Vertex AI models . For qualified names that you must use for OpenAI models with built-in support, see Models with built-in support
AUTH_TYPE
optional unless the model endpoint has specific authentication requirement
The authentication type used by the model endpoint. You can set it to either alloydb_service_agent_iam for Vertex AI models or secret_manager for other providers, if they use Secret Manager for authentication. You don't need to set this value if you are using authentication headers.
AUTH_ID
don't set for Vertex AI model endpoints; required for all other model endpoints that store secrets in Secret Manager
The secret ID that you set and is subsequently used when registering a model endpoint.
GENERATE_HEADER_FUNCTION
optional
The name of the function that generates custom headers. For Anthropic models, model endpoint management provides a google_ml.anthropic_claude_header_gen_fn function that you can use for default versions. The signature of this function depends on the prediction function that you use. See Header generation function .
INPUT_TRANSFORM_FUNCTION
optional for text embedding model endpoints with built-in support; don't set for generic model endpoints
The function to transform input of the corresponding prediction function to the model-specific input. See Transform functions .
OUTPUT_TRANSFORM_FUNCTION
optional for text embedding model endpoints with built-in support; don't set for generic model endpoints
The function to transform model specific output to the prediction function output. See Transform functions .
google_ml.alter_model()
The following shows how to call the google_ml.alter_model() SQL function used
to update model endpoint metadata:
CALL
google_ml . alter_model (
model_id = > ' MODEL_ID ' ,
model_request_url = > ' REQUEST_URL ' ,
model_provider = > ' PROVIDER_ID ' ,
model_type = > ' MODEL_TYPE ' ,
model_qualified_name = > ' MODEL_QUALIFIED_NAME ' ,
model_auth_type = > ' AUTH_TYPE ' ,
model_auth_id = > ' AUTH_ID ' ,
generate_headers_fn = > ' GENERATE_HEADER_FUNCTION ' ,
model_in_transform_fn = > ' INPUT_TRANSFORM_FUNCTION ' ,
model_out_transform_fn = > ' OUTPUT_TRANSFORM_FUNCTION ' );
For information about the values that you must set for each parameter, see Create a model .
google_ml.drop_model() function
The following shows how to call the google_ml.drop_model() SQL function used
to drop a model endpoint:
CALL google_ml . drop_model ( ' MODEL_ID ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you defined.
google_ml.list_model() function
The following shows how to call the google_ml.list_model() SQL function used
to list model endpoint information:
SELECT google_ml . list_model ( ' MODEL_ID ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you defined.
google_ml.model_info_view view
The following shows how to call the google_ml.model_info_view view that is
used to list model endpoint information for all model endpoints:
SELECT * FROM google_ml . model_info_view ;
Secrets
Use this reference to understand parameters for functions that let you manage
secrets.
google_ml.create_sm_secret() function
The following shows how to call the google_ml.create_sm_secret() SQL function
used to add the secret created in Secret Manager:
CALL
google_ml . create_sm_secret (
secret_id = > ' SECRET_ID ' ,
secret_path = > 'projects/ project-id /secrets/ SECRET_MANAGER_SECRET_ID /versions/ VERSION_NUMBER ' );
Parameter
Description
SECRET_ID
The secret ID that you set and is subsequently used when registering a model endpoint.
PROJECT_ID
The ID of your Google Cloud project that contains the secret. This project can be different from the project that contains your AlloyDB for PostgreSQL cluster.
SECRET_MANAGER_SECRET_ID
The secret ID set in Secret Manager when you created the secret.
VERSION_NUMBER
The version number of the secret ID.
google_ml.alter_sm_secret() function
The following shows how to call the google_ml.alter_sm_secret() SQL function
used to update secret information:
CALL
google_ml . alter_sm_secret (
secret_id = > ' SECRET_ID ' ,
secret_path = > 'projects/ project-id /secrets/ SECRET_MANAGER_SECRET_ID /versions/ VERSION_NUMBER ' );
For information about the values that you must set for each parameter, see Create a secret .
google_ml.drop_sm_secret() function
The following shows how to call the google_ml.drop_sm_secret() SQL function
used to drop a secret:
CALL google_ml . drop_sm_secret ( ' SECRET_ID ' );
Parameter
Description
SECRET_ID
The secret ID that you set and was subsequently used when registering a model endpoint.
Prediction functions
Use this reference to understand parameters for functions that let you generate
embeddings or invoke predictions.
google_ml.embedding() function
For text embedding models without built-in support, the input and output
parameters are unique to a model and need to be transformed for the function to
call the model. You must create a transform input function to transform input of
the prediction function to the model specific input, and a transform output
function to transform model specific output to the prediction function
output.The function is also available in the ai schema
The following shows how to generate embeddings:
SELECT
google_ml . embedding (
model_id = > ' MODEL_ID ' ,
content = > ' CONTENT ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you define.
CONTENT
The text to translate into a vector embedding.
For examples of SQL queries that generate text embeddings, see
generate text embedding .
google_ml.predict_row() function
The following shows how to invoke predictions that is used to call a registered
generic model endpoint, as long as the model supports a JSON-based API, to
invoke predictions. The function is also available in the ai schema:
SELECT
google_ml . predict_row (
model_id = > ' MODEL_ID ' ,
request_body = > ' REQUEST_BODY ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you define.
REQUEST_BODY
The parameters to the prediction function, in JSON format.
For examples of SQL queries that invoke predictions, see Examples .
Multimodal prediction functions
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For information about access to this release, see the access
request page .
Note: This feature is an experimental pre-GA offering.
Use this reference to understand parameters for functions that let you generate multimodal embeddings.
AlloyDB reserves, and creates, the ai schema.
ai.text_embedding() / google_ml.text_embedding() function
The following shows how to generate text embeddings:
SELECT
ai . text_embedding (
model_id = > ' MODEL_ID ' ,
content = > ' CONTENT ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you define.
CONTENT
The text to translate into a vector embedding.
For examples of SQL queries that generate multimodal text embeddings, see
Examples .
ai.image_embedding() / google_ml.image_embedding() function
The following shows how to generate multimodal image embeddings:
Note: For API limits related to Vertex AI multimodal models, see
API
limits .
SELECT
ai . image_embedding (
model_id = > ' MODEL_ID ' ,
image = > ' IMAGE_PATH_OR_TEXT ' ,
mimetype = > ' MIMETYPE ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you define.
IMAGE_PATH_OR_TEXT
The Cloud Storage path to the image to translate into a vector embedding or base64 string of the image.
MIMETYPE
The mimetype of the image.
For examples of SQL queries that generate multimodal image embeddings, see
Examples .
ai.video_embedding() / google_ml.video_embedding() function
The following shows how to generate multimodal video embeddings:
Note: For API limits related to Vertex AI multimodal models, see
API
limits .
SELECT
ai . video_embedding (
model_id = > ' MODEL_ID ' ,
video = > ' VIDEO_URI ' ,
start_offset_seconds = > ' START_OFFSET_SEC ' ,
end_offset_seconds = > ' END_OFFSET_SEC ' ,
interval_seconds = > ' INTERVAL_SEC ' );
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you define.
VIDEO_URI
The Cloud Storage URI of the target video to get embeddings for. For example, gs://my-bucket/embeddings/supermarket-video.mp4 .
START_OFFSET_SEC
Offset timing to start processing video from.
END_OFFSET_SEC
Offset timing to stop processing video from.
INTERVAL_SEC
Interval seconds for which the embedding is generated.
For examples of SQL queries that generate multimodal video embeddings, see
Examples .
Ranking functions
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For information about access to this release, see the access
request page .
Note: This feature is an experimental pre-GA offering.
Use this reference to understand parameters for functions that let you rank search results.
AlloyDB reserves, and creates, the ai schema.
ai.rank()/google_ml.rank() function
You can use the ai.rank() function in two ways: to rank documents against a search query or to score items based on a semantic prompt.
Note: For API limits related to Vertex AI ranking models, see
Rank (or rerank) a set of records according to a query .
Ranking search results
This mode ranks and scores a set of documents against a given search query using a specified ranking model.
SELECT
ai . rank (
model_id = > ' MODEL_ID ' ,
search_string = > ' SEARCH_STRING ' ,
documents = > ARRAY [ ' DOCUMENT_1 ' , ' DOCUMENT_2 ' , ' DOCUMENT_3 ' ]);
top_n = > TOP_N
Parameter
Description
MODEL_ID
A unique ID for the model endpoint that you define.
SEARCH_STRING
Search string against which the records are ranked and scored.
DOCUMENTS
A unique string that identifies the record.
TOP_N
The number of top results to return. Default value is NULL
For examples of SQL queries that generate ranked search results, see Ranking .
Semantic scoring
This mode scores items based on a criteria specified using natural language in a prompt.
SELECT
ai . rank (
model_id = > ' MODEL_ID ' ,
prompt = > ' PROMPT ' );
Parameter
Description
MODEL_ID (Optional)
A unique ID for the model endpoint that you define. If not set, default Gemini model is used.
PROMPT
The natural language phrase that specifies the criteria based on which the function orders the documents. For example, Score the following review according to these rules: score of 8 to 10 if the review says the food is excellent, 4 to 7 if the review says the food is and 1 to 3 if the review says the food is not good. Here is the review:
Operator functions
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For information about access to this release, see the access
request page .
Note: This feature is an experimental pre-GA offering.
Use this reference to understand parameters for functions provided by the
AI functions that let you interact with data in your
database using natural language in SQL operators.
AlloyDB reserves, and creates, the ai schema.
ai.if()/google_ml.if() function
The following shows how to perform filters and joins to evaluate a condition:
SELECT
ai . if (
model_id = > ' MODEL_ID ' ,
prompt = > ' PROMPT ' );
Parameter
Description
MODEL_ID (Optional)
A unique ID for the model endpoint that you define. If not set, default Gemini model is used.
PROMPT
The natural language phrase that specifies the condition based on which the function retrieves information. For example, the following review talks about parking at the restaurant. review:
For examples of SQL queries that perform filters and joins to evaluate a condition, see
Use natural language in SQL operators
ai.forecast()/google_ml.forecast() function
The following examples demonstrate how to perform time-series predictions directly in your AlloyDB database:
From a source table
SELECT * FROM ai . forecast (
model_id = > ' MODEL_ID ' ,
source_table = > ' SOURCE_TABLE ' ,
data_col = > ' DATA_COL ' ,
timestamp_col = > ' TIMESTAMP_COL ' ,
horizon = > ' HORIZON ' ,
conf_level = > ' CONF_LEVEL '
);
From a source query
SELECT * FROM ai . forecast (
model_id = > ' MODEL_ID ' ,
source_query = > ' SOURCE_QUERY ' ,
data_col = > ' DATA_COL ' ,
timestamp_col = > ' TIMESTAMP_COL ' ,
horizon = > ' HORIZON ' ,
conf_level = > ' CONF_LEVEL '
);
Parameter
Description
MODEL_ID
A unique identifier for the registered model you want to use for forecasting—for example, vertex_timesfm .
SOURCE_TABLE
The name of the table that contains the time-series data you want to forecast. Use either SOURCE_TABLE or SOURCE_QUERY —for example, time_series_data .
SOURCE_QUERY
A GoogleSQL query statement that generates the time series data you want to forecast. Useful for filtering or transforming input data. Use either SOURCE_TABLE or SOURCE_QUERY —for example, (SELECT * FROM forecast_3 ORDER BY timestamp LIMIT 1) AS time_series_data .
DATA_COL
The name of the column in the source table or query that contains the data points to forecast. The name of the column in your source table or query that contains the numeric values to forecast. This column must contain more than one value—for example, data_points .
TIMESTAMP_COL
The name of the column in your source table or query that contains the time points for each data point. This column provides the temporal context for the forecast—for example, timestamp .
HORIZON
The number of future time steps to forecast. The valid input range is [1, 128]—for example, 2 .
CONF_LEVEL
The confidence level for the forecast. The valid input range is (0, 1). A higher value results in wider prediction intervals—for example, 0.80 . Note: A conf_level of 0.80 means you can expect the actual future value to fall within the predicted interval 80% of the time.
ai.rank() / google_ml.rank() function
The following shows how to get an score for items in the query based on a
semantic criteria specified in natural language:
SELECT
ai . rank (
model_id = > ' MODEL_ID ' ,
prompt = > ' PROMPT ' );
Parameter
Description
MODEL_ID (Optiona)
A unique ID for the model endpoint that you define. If not set, default Gemini model is used.
PROMPT
The natural language phrase that specifies the criteria based on which the function orders the documents. For example, Score the following review according to these rules: score of 8 to 10 if the review says the food is excellent, 4 to 7 if the review says the food is and 1 to 3 if the review says the food is not good. Here is the review:
ai.generate() / google_ml.generate() function
The following shows how to generate embeddings using the default embedding model:
SELECT
ai . generate (
model_id = > ' MODEL_ID ' ,
prompt = > ' PROMPT ' );
Parameter
Description
MODEL_ID (Optional)
A unique ID for the model endpoint that you define. If not set, default Gemini model is used.
PROMPT
The natural language phrase that specifies the criteria based on which the function generates text embeddings. For example, Summarize the review in 20 words or less. Review:
For examples of SQL queries that generate embeddings using default embedding model, see
Perform intelligent SQL queries using AI functions .
Transform functions
Use this reference to understand parameters for input and output transform
functions.
Note: You cannot use transform functions when registering a generic model endpoint.
Input transform function
The following shows the signature for the prediction function for text embedding
model endpoints:
CREATE OR REPLACE FUNCTION INPUT_TRANSFORM_FUNCTION ( model_id VARCHAR ( 100 ), input_text TEXT ) RETURNS JSON ;
Parameter
Description
INPUT_TRANSFORM_FUNCTION
The function to transform input of the corresponding prediction function to the model endpoint-specific input.
Output transform function
The following shows the signature for the prediction function for text embedding
model endpoints:
CREATE OR REPLACE FUNCTION OUTPUT_TRANSFORM_FUNCTION ( model_id VARCHAR ( 100 ), response_json JSON ) RETURNS real [];
Parameter
Description
OUTPUT_TRANSFORM_FUNCTION
The function to transform model endpoint-specific output to the prediction function output.
Transform functions example
To better understand how to create transform functions for your model endpoint,
consider a custom-hosted text embedding model endpoint that requires JSON input
and output.
The following example curl request creates embeddings based on the prompt and
the model endpoint:
curl -m 100 -X POST https://cymbal.com/models/text/embeddings/v1 \
-H "Content-Type: application/json"
-d '{"prompt": ["AlloyDB Embeddings"]}'
The following example response is returned:
[[ 0.3522231 -0.35932037 0.10156056 0.17734447 -0.11606089 -0.17266059
0.02509351 0.20305622 -0.09787305 -0.12154685 -0.17313677 -0.08075467
0.06821183 -0.06896557 0.1171584 -0.00931572 0.11875633 -0.00077482
0.25604948 0.0519384 0.2034983 -0.09952664 0.10347155 -0.11935943
-0.17872004 -0.08706985 -0.07056875 -0.05929353 0.4177883 -0.14381726
0.07934926 0.31368294 0.12543282 0.10758053 -0.30210832 -0.02951015
0.3908268 -0.03091059 0.05302926 -0.00114946 -0.16233777 0.1117468
-0.1315904 0.13947351 -0.29569918 -0.12330773 -0.04354299 -0.18068913
0.14445548 0.19481727 ]]
Based on this input and response, we can infer the following:
The model expects JSON input through the prompt field. This field accepts an
array of inputs. As the google_ml.embedding() function is a row level
function, it expects one text input at a time. Thus,you need to create an
input transform function that builds an array with a single element.
The response from the model is an array of embeddings, one for each prompt
input to the model. As the google_ml.embedding() function is a row level
function, it returns single input at a time. Thus, you need to create an
output transform function that can be used to extract the embedding from the
array.
The following example shows the input and output transform functions that is
used for this model endpoint when it is registered with model endpoint management:
input transform function
CREATE OR REPLACE FUNCTION cymbal_text_input_transform ( model_id VARCHAR ( 100 ), input_text TEXT )
RETURNS JSON
LANGUAGE plpgsql
AS $$
DECLARE
transformed_input JSON ;
model_qualified_name TEXT ;
BEGIN
SELECT json_build_object ( 'prompt' , json_build_array ( input_text )):: JSON INTO transformed_input ;
RETURN transformed_input ;
END ;
$$ ;
output transform function
CREATE OR REPLACE FUNCTION cymbal_text_output_transform ( model_id VARCHAR ( 100 ), response_json JSON )
RETURNS REAL []
LANGUAGE plpgsql
AS $$
DECLARE
transformed_output REAL [];
BEGIN
SELECT ARRAY ( SELECT json_array_elements_text ( response_json - > 0 )) INTO transformed_output ;
RETURN transformed_output ;
END ;
$$ ;
HTTP header generation function
The following shows signature for the header generation function that can be
used with the google_ml.embedding() prediction function when registering other
text embedding model endpoints.
CREATE OR REPLACE FUNCTION GENERATE_HEADERS ( model_id VARCHAR ( 100 ), input_text TEXT ) RETURNS JSON ;
For the google_ml.predict_row() prediction function, the signature is as
follows:
CREATE OR REPLACE FUNCTION GENERATE_HEADERS ( model_id TEXT , input JSON ) RETURNS JSON ;
Parameter
Description
GENERATE_HEADERS
The function to generate custom headers. You can also pass the authorization header generated by the header generation function while registering the model endpoint.
Header generation function example
To better understand how to create a function that generates output in JSON key
value pairs that are used as HTTP headers, consider a custom-hosted text
embedding model endpoint.
The following example curl request passes the version HTTP header which is
used by the model endpoint:
curl -m 100 -X POST https://cymbal.com/models/text/embeddings/v1 \
-H "Content-Type: application/json" \
-H "version: 2024-01-01" \
-d '{"prompt": ["AlloyDB Embeddings"]}'
The model expects text input through the version field and returns the version
value in JSON format. The following example shows the header generation function
that is used for this text embedding model endpoint when it is registered with model
endpoint management:
CREATE OR REPLACE FUNCTION header_gen_fn ( model_id VARCHAR ( 100 ), input_text TEXT )
RETURNS JSON
LANGUAGE plpgsql
AS $$
BEGIN
RETURN json_build_object ( 'version' , '2024-01-01' ):: JSON ;
END ;
$$ ;
Header generation function using API Key
The following examples show how to set up authentication using the API key.
embedding model
CREATE OR REPLACE FUNCTION header_gen_func (
model_id VARCHAR ( 100 ),
input_text TEXT
)
RETURNS JSON
LANGUAGE plpgsql
AS $$
# variable_conflict use_variable
BEGIN
RETURN json_build_object ( 'Authorization' , ' API_KEY ' ):: JSON ;
END ;
$$ ;
Replace the API_KEY with the API key of the model provider.
generic model
CREATE OR REPLACE FUNCTION header_gen_func (
model_id VARCHAR ( 100 ),
response_json JSON
)
RETURNS JSON
LANGUAGE plpgsql
AS $$
# variable_conflict use_variable
DECLARE
transformed_output REAL [];
BEGIN
-- code to add Auth token to API request
RETURN json_build_object ( 'x-api-key' , ' API_KEY ' , 'anthropic-version' , '2023-06-01' ):: JSON ;
END ;
$$ ;
Replace the API_KEY with the API key of the model provider.
Request URL generation
Use the request URL generation function to infer the request URLs for the model
endpoints with built-in support. The following shows the signature for this
function:
SELECT google_ml . generate_model_request_url ( PROVIDER_ID , MODEL_TYPE , MODEL_QUALIFIED_NAME )
Parameter
Description
PROVIDER_ID
The provider of the model url you are looking to generate. Set to one of the following: google for Vertex AI model endpoints
open_ai for OpenAI model endpoints
hugging_face for Hugging Face model endpoints
anthropic for Anthropic model endpoints
custom for other providers
MODEL_TYPE
The model type. Set to one of the following: text_embedding for text embedding model endpoints
multimodal_embedding for multimodal embedding model endpoints ( Preview )
reranking for ranking model endpoints ( Preview )
generic for all other model endpoints
MODEL_QUALIFIED_NAME
Set the model qualified name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
