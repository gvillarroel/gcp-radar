---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.109Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Imagen subject model tuning (standard)"
feature_slug: "imagen-subject-model-tuning-standard"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "imagen"
  - "subject"
  - "model"
  - "tuning"
  - "standard"
  - "vertex"
  - "ai"
  - "added"
---

# Imagen subject model tuning (standard)

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen on Vertex AI added generally available support for subject model tuning in standard mode.

## Extended Definition

Imagen on Vertex AI added generally available support for subject model tuning in standard mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View Imagen for Generation model card View Imagen for Editing and Customization model card Imagen usage guidelines Read the following general product attributes and legal considerations before you use Imagen on Vertex AI.
- When Imagen on Vertex AI is integrated into a customer's unique use case and context, additional responsible AI considerations and model limitations may need to be considered.
- These code to category mappings are as follows: Error code Safety category Description Content filtered: prompt input or image output 58061214 17301594 Child Detects child content where it isn't allowed due to the API request settings or allowlisting. input (prompt): 58061214 output (image): 17301594 29310472 15236754 Celebrity Detects a photorealistic representation of a celebrity in the request. input (prompt): 29310472 output (image): 15236754 62263041 Dangerous content Detects content that's potentially dangerous in nature. input (prompt) 57734940 22137204 Hate Detects hate-related topics or content. input (prompt): 57734940 output (image): 22137204 74803281 29578790 42876398 Other Detects other miscellaneous safety issues with the request. input (prompt): 42876398 output (image): 29578790, 74803281 39322892 People/Face Detects a person or face when it isn't allowed due to the request safety settings. output (image) 92201652 Personal information Detects Personally Identifiable Information (PII) in the text, such as the mentioning a credit card number, home addresses, or other such information. input (prompt) 89371032 49114662 72817394 Prohibited content Detects the request of prohibited content in the request. input (prompt): 89371032 output (image): 49114662, 72817394 90789179 63429089 43188360 Sexual Detects content that's sexual in nature. input (prompt): 90789179 output (image): 63429089, 43188360 35561574 35561575 Third-party content Guardrails related to third-party content. input (prompt) output (image) 78610348 Toxic Detects toxic topics or content in the text. input (prompt) 61493863 56562880 Violence Detects violence-related content from the image or text. input (prompt): 61493863 output (image): 56562880 32635315 Vulgar Detects vulgar topics or content from the text. input (prompt) 64151117 Celebrity or child Detects photorealistic respresentation of a celebrity or of a child that violates Google's safety policies. input (prompt) output (image) Limitations The following limits apply to different tasks: Image generation and editing limitations Bias amplification : While Imagen on Vertex AI can generate high-quality images, there may be potential biases in the generated content.
- Safety filters Text prompts provided as inputs and images (generated or uploaded) through Imagen on Vertex AI are assessed against a list of safety filters, which include 'harmful categories' (for example, violence , sexual , derogatory , and toxic ).

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Hyperparameter Tuning Run hyperparameter tuning for a TensorFlow model .
- Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using RLHF tuning Vertex AI LLM Reinforcement Learning from Human Feedback .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using supervised tuning Vertex AI Tuning a PEFT model .

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.
- Initialize the Vertex AI SDK with the project, staging bucket, location and experiment. from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , staging bucket = BUCKET URI , location = REGION , experiment = EXPERIMENT NAME ) aiplatform . autolog () Define the pipeline tasks In your notebook, define your pipeline custom model training evaluation pipeline : from kfp import dsl from kfp.dsl import importer from kfp.dsl import OneOf from google cloud pipeline components.v1.custom job import CustomTrainingJobOp from google cloud pipeline components.types import artifact types from google cloud pipeline components.v1.model import ModelUploadOp from google cloud pipeline components.v1.batch predict job import ModelBatchPredictOp from google cloud pipeline components.v1.model evaluation import ModelEvaluationRegressionOp from google cloud pipeline components.v1.vertex notification email import VertexNotificationEmailOp from google cloud pipeline components.v1.endpoint import ModelDeployOp from google cloud pipeline components.v1.endpoint import EndpointCreateOp from google.cloud import aiplatform define the train-deploy pipeline @dsl . pipeline ( name = "custom-model-training-evaluation-pipeline" ) def custom model training evaluation pipeline ( project : str , location : str , training job display name : str , worker pool specs : list , base output dir : str , prediction container uri : str , model display name : str , batch prediction job display name : str , target field name : str , test data gcs uri : list , ground truth gcs source : list , batch predictions gcs prefix : str , batch predictions input format : str = "csv" , batch predictions output format : str = "jsonl" , ground truth format : str = "csv" , parent model resource name : str = None , parent model artifact uri : str = None , existing model : bool = False ): Notification task notify task = VertexNotificationEmailOp ( recipients = EMAIL RECIPIENTS ) with dsl .
- QUOTE NONE , escapechar = ' ' ) Separate the target column y train = X train . pop ( 'fare' ) Get the column indexes col index dict = { col : idx for idx , col in enumerate ( X train . columns )} Create a column transformer pipeline ct pipe = ColumnTransformer ( transformers = [ ( 'hourly cat' , OneHotEncoder ( categories = [ range ( 0 , 24 )], sparse = False ), [ col index dict [ 'trip start hour' ]]), ( 'dow' , OneHotEncoder ( categories = [[ 'Mon' , 'Tue' , 'Sun' , 'Wed' , 'Sat' , 'Fri' , 'Thu' ]], sparse = False ), [ col index dict [ 'trip start day of week' ]]), ( 'std scaler' , StandardScaler (), [ col index dict [ 'trip start year' ], col index dict [ 'abs distance' ], col index dict [ 'pickup longitude' ], col index dict [ 'pickup latitude' ], col index dict [ 'dropoff longitude' ], col index dict [ 'dropoff latitude' ], col index dict [ 'trip miles' ], col index dict [ 'trip seconds' ]]) ]) Add the random-forest estimator to the pipeline rfr pipe = Pipeline ([ ( 'ct' , ct pipe ), ( 'forest reg' , RandomForestRegressor ( n estimators = 20 , max features = 1.0 , n jobs = - 1 , random state = 3 , max depth = None , max leaf nodes = None , )) ]) train the model rfr score = cross val score ( rfr pipe , X train , y train , scoring = 'neg mean squared error' , cv = 5 ) rfr rmse = np . sqrt ( - rfr score ) print ( "Crossvalidation RMSE:" , rfr rmse . mean ()) final model = rfr pipe . fit ( X train , y train ) Save the model pipeline with open ( os . path . join ( args . training dir , "model.joblib" ), 'wb' ) as model file : pickle . dump ( final model , model file ) The code accomplishes the following tasks: Feature selection.

