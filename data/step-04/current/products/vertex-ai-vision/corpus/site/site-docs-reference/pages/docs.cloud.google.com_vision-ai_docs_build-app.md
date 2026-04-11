---
title: "Build an application \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/build-app
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/build-app
  title: "Build an application \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Build an application
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create an app and combine components - such as
input streams, models for analysis, and warehouses for storage - for use
on Vertex AI Vision's app platform.
To build an app you must consider your data sources, the analysis you want to
perform, and how you want to store the results. An end-to-end app can have
different forms depending on your use case. Consequently, how you build an app
will depend on your objective.
Before beginning, assess your use case and objective from a Responsible AI
perspective and consider what impact your models and applications could have
on your end users when things go wrong. Read more on first steps in
assessing your use case for fairness. Also ensure that your
use of Vertex AI Vision is in compliance with Google Cloud's
Terms of Service or an offline variant, and the incorporated
URL Terms like Google Cloud's Acceptable Use Policy .
As you create your application, keep in mind that AI vision technologies carry
the potential to reinforce or introduce unfair bias and to impact fundamental
human rights. Developing your application should involve ethical reflection
based on your company's values, and legal due diligence for your
particular use case including high risk use cases. As with all technologies,
you must consider all applicable laws and regulations governing your use
of AI/ML technologies in the region you are implementing the technology.
Customers are responsible for due diligence required to implement use cases
that are considered high risk in a particular region.
Use cases: Based on Google's AI Principles and
current product design, we strongly recommend using caution and carefully
evaluating the potential benefits and risks of using Vertex AI Vision for
the following:
Biometrics-based persistent individual tracking and surveillance.
Inferring individual characteristics including but not limited to
gender, age, and race.
Decision making without a human in the loop for predictions that could
impact human rights, in sensitive domains including but not limited to
employment, access to public services, healthcare, and safety-critical
contexts.
Create a new application
Before you can add components like a stream or models to an app you must
create the app itself. All apps must contain the following to be deployed:
A stream input node (data source).
At least one other component node, such as a model or warehouse.
Create a new custom application
Console
Create an app in the Google Cloud console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Click the add Create button.
Enter an app name and choose your region. Supported regions .
Click Create .
Create an application with a template
Console
Create an app in the Google Cloud console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Click the add Create button.
Enter an app name and choose your region. Supported regions .
Click Create .
In the application builder page, click the Application template node.
From the side settings panel, click the Select model button.
Select a model from the dropdown menu.
Add stream input
An application must contain a video stream node. You are unable to deploy the
application if you don't add a Streams node.
If your application is not deployed, your stream input update will be
automatically applied to the application. If your app is already deployed you
must undeploy it and update it for changes to be applied. See the
update an app section for more details.
Console
Add a stream to an app in the Google Cloud console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Click View app for your app.
From the side list of components, choose Video streams from the list
of Connectors . The stream node is added to the app graph and a side
Video streams menu opens.
Select Add video streams .
If you choose to
radio_button_checked Select from
existing streams , select the existing stream and select Add streams .
If you choose to
radio_button_checked Register new
streams , add a name for the new stream and select Add streams .
REST
To add a stream to an app, send a POST request by using the
projects.locations.applications.addStreamInput
method.
Before using any of the request data,
make the following replacements:
PROJECT : Your Google Cloud
project ID or
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
APPLICATION_ID : The ID of your target application.
STREAM_ID : The ID of the target stream.
HTTP method and URL:
POST https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :addStreamInput
Request JSON body:
{
"applicationStreamInputs": [
{
"streamWithAnnotation": {
"stream": "projects/ PROJECT /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID "
}
},
{
"streamWithAnnotation": {
"stream": "projects/ PROJECT /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID "
}
}
]
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :addStreamInput"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :addStreamInput" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Add stream input with node annotations
When you create an application input stream you can add annotations to the
stream using the Vertex AI Vision API. You can also add annotations to a node in the
Google Cloud console.
Console
The following sample adds available annotations
( STREAM_ANNOTATION_TYPE_ACTIVE_ZONE and
STREAM_ANNOTATION_TYPE_CROSSING_LINE ) to an occupancy count model .
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View app next to the name of your application from the list.
On the application builder page select the model with stream input
you want to add annotations to.
In the side model setting panel, expand the "Advanced setting"
section. After expanding the section, click the
Create active zones/lines button.
In the stream gallery view, select an input stream to draw active zones or
lines.
In the editor view, choose add multi-point lines or
add simple polygon to add annotations. Use the side panel to rename
the zone or line name, delete existing zones/lines, or switch line
direction.
Warning: For each stream draw either a crossing-line or an active zone.
If both lines and zones are annotated Vertex AI Vision API only registers line
counts and ignores zones.
REST & CMD LINE
The following code adds stream annotations.
Before using any of the request data,
make the following replacements:
PROJECT : Your Google Cloud
project ID or
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
APPLICATION_ID : The ID of your target application.
STREAM_ID : The ID of the target stream.
NODE_NAME : The name of the target node from the app graph. For example,
builtin-occupancy-count .
ANNOTATION_ID : The ID of your target annotation.
ANNOTATION_DISPLAYNAME : The user-specified display name of your target annotation.
ANNOTATION_TYPE : One of the available enum values. This type must match the
annotation_payload
object , either activeZone or crossingLine . Available values are:
STREAM_ANNOTATION_TYPE_UNSPECIFIED
STREAM_ANNOTATION_TYPE_ACTIVE_ZONE
STREAM_ANNOTATION_TYPE_CROSSING_LINE
normalizedVertices : Each vertex is specified by x, y coordinate values.
Coordinates are normalized float values [0,1] relative to the original image ; 0.0 is X_MIN or
Y_MIN, 1.0 is X_MAX or Y_MAX.
HTTP method and URL:
POST https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :addStreamInput
Request JSON body:
{
"applicationStreamInputs": [
{
"streamWithAnnotation": {
"stream": "projects/ PROJECT /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID ",
"nodeAnnotations": [
{
"node": " NODE_NAME ",
"annotations": [
{
"id": " ANNOTATION_ID ",
"displayName": " ANNOTATION_DISPLAYNAME ",
"sourceStream": "projects/ PROJECT /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID ",
"type": ANNOTATION_TYPE ,
"activeZone": {
"normalizedVertices": {
"x": 0.07434944 ,
"y": 0.18061674
},
"normalizedVertices": {
"x": 0.64684016 ,
"y": 0.16079295
},
"normalizedVertices": {
"x": 0.6047088 ,
"y": 0.92070484
},
"normalizedVertices": {
"x": 0.1251549 ,
"y": 0.76651984
}
}
}
]
}
]
}
}
]
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :addStreamInput"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :addStreamInput" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Remove stream input
REST
To remove a stream from an app, send a POST request by using the
projects.locations.applications.removeStreamInput
method.
Before using any of the request data,
make the following replacements:
PROJECT : Your Google Cloud
project ID or
project number .
LOCATION_ID : The region where you are using
Vertex AI Vision. For example: us-central1 , europe-west4 . See available regions .
APPLICATION_ID : The ID of your target application.
STREAM_ID : The ID of the target stream.
HTTP method and URL:
POST https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :removeStreamInput
Request JSON body:
{
"targetStreamInputs": [
{
"stream": "projects/ PROJECT /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID "
},
{
"stream": "projects/ PROJECT /locations/ LOCATION_ID /clusters/application-cluster-0/streams/ STREAM_ID "
}
]
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :removeStreamInput"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://visionai.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION_ID /applications/ APPLICATION_ID :removeStreamInput" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Add a pre-trained Vertex AI Vision model
After you create a app you can add a model and connect them to streams,
other models, or a media warehouse.
There are two types of models - pre-trained models or user-trained
models . Similarly, user-trained models can also be two types -
AutoML or custom-trained :
Pre-trained models perform a specific objective, are trained on
generalized data, and are ready to use.
User-trained AutoML or custom-trained models require you to identify and provide sample
data, and then train models that are more suited to your unique use case.
You train these models using Vertex AI, a product that offers two
training options: AutoML trained models and custom-trained models.
See Choose a training method for more information.
Use the following instructions to add a pre-trained Vertex AI Vision model
to your app graph.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View app next to the name of your application from the list.
On the application builder page select the model you want to add from
the AI models list. Each model has individual configuration
settings.
To connect this model to an input source node, select the source node
and select add Add output .
Select the newly created AI model node from the list of
Available nodes .
Add a user-trained Vertex AI model
After you create a app you can add a model and connect them to streams,
other models, or a media warehouse.
There are two types of models - pre-trained models or user-trained
models . Similarly, user-trained models can also be two types -
AutoML or custom-trained :
Pre-trained models perform a specific objective, are trained on
generalized data, and are ready to use.
User-trained AutoML or custom-trained models require you to identify and provide sample
data, and then train models that are more suited to your unique use case.
You train these models using Vertex AI, a product that offers two
training options: AutoML trained models and custom-trained models.
See Choose a training method for more information.
Vertex AI Vision supports
Vertex AI AutoML vision
models created in October 2022 or later. For models trained before October 2022,
compatibility is not guaranteed.
Add a Vertex AI AutoML object detection streaming model
Fair-aware: Review regulations in the region where you are deploying the technology,
and existing research or industry guidance in your application domain to learn about
policy guidelines and common fairness issues. Read more about
fairness in ML , including ways to mitigate
bias in training datasets, evaluate your custom models for disparities in performance, and
things to consider as you use your custom model.
Use the following instructions to add an Vertex AI
AutoML object detection streaming model you train to your app graph.
Before you are able to train a Vertex AI AutoML model you
must prepare your object detection data and
create a dataset .
Train a model to use in Vertex AI Vision
After you create a dataset with a representative collection of data in
Vertex AI, you can train a model to use in Vertex AI Vision.
Console
In the Google Cloud console, in the Vertex AI dashboard, go to
the Datasets page.
Go to the Datasets page
Click the name of the dataset you want to use to train your model to open
its details page.
If your data type uses annotation sets, select the annotation set you want
to use for this model.
Click Train new model .
In the Train new model page, complete the
following steps for your AutoML image object detection model:
AutoML is a good choice for a wide range of use cases.
Seq2seq+ is a good choice for experimentation. The algorithm is likely to converge faster than
AutoML because its architecture is simpler and it uses a smaller
search space. Our experiments find that Seq2Seq+ performs well with a small time budget and
on datasets smaller than 1 GB in size.
Click Continue .
-->In the Model training method section,
choose
radio_button_checked AutoML .
In the Choose where to use the model section, select
radio_button_checked Vertex AI Vision .
Click Continue .
Fill in values for the Model details , Training options , and
Compute and pricing sections. See
Train an AutoML model (Google Cloud console)
for more detailed information.
Click Start Training .
Model training can take many hours, depending on the size and complexity of your
data and your training budget, if you specified one. You can close this tab and
return to it later. You will receive an email when your model has completed
training.
Add the trained model to your app
After your model is done training, you can add it to your Vertex AI Vision app.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View app next to the name of your application from the list.
On the application builder page select Add Vertex AI Model from
the side components list. Selecting this option opens a side menu.
From the Add Vertex AI Model menu, leave the
radio_button_checked Import a
trained model from Vertex AI option selected, then choose the model
from the list of
existing Vertex AI AutoML models.
After choosing the model to import, select Add model .
After the Add model button is clicked there will be a pending
model on the side of the graph builder page. After a few seconds the
model is ready to use.
Note : To see updates to the model's status, refresh the page .
Add a Vertex AI custom model
Fair-aware: Review regulations in the region where you are deploying the technology,
and existing research or industry guidance in your application domain to learn about
policy guidelines and common fairness issues. Read more about
fairness in ML , including ways to mitigate
bias in training datasets, evaluate your custom models for disparities in performance, and
things to consider as you use your custom model.
You can also import Vertex AI custom-trained models into
Vertex AI Vision to use for data analysis. These custom-trained models must
have the following properties:
The model must be stateless, since the model input is the images that
come from different application instances (streams) and might be out of order.
If you need stateful streaming processing, you might need to keep states
inside your own container.
The input size to your model is limited to 1.5MB. Consequently,
Vertex AI Vision must compress the original RGB image into a lossy format, such
as JPG.
Limitation : The
maxPredictionFps
of your Vertex AI custom-trained model can't be more than 10. The
custom-trained model's processing FPS is determined by the model itself and
the resources assigned to the model. You must optimize your custom-trained
model and assign enough resources, as well as set
maxPredictionFps lower than the model's processing FPS. For
example, if your custom-trained model can only process 5 FPS, you must set
maxPredictionFps less than 5. You can set this value by
selecting your custom-trained model from the app view in the
Google Cloud console .
Use the following instructions to add an existing Vertex AI
custom-trained video model you trained to your app graph.
For information about creating a Vertex AI custom-trained model with
custom container, see
Use a custom container for prediction .
Specify an instances YAML file
When you add a Vertex AI custom-trained model you must specify an
instances YAML file ( instances.yaml ) stored in Cloud Storage. This
file specifies the expected input to your model container.
Vertex AI sends the prediction request in a format:
{
"instances" : [
< value>|<simple/ neste d lis t > |<objec t > ,
...
]
}
Here, instances.yaml defines the schema of the payload. For more information,
see
Get online predictions from custom-trained models .
Vertex AI Vision only supports custom-trained models with exactly one named
prediction input. This input type has to be an encoded JPEG string. The schema
of the
prediction input must be specified with the instances schema YAML file. This
schema YAML file must be in the format of an
OpenAPI schema object .
For example, the following schema will receive the request with the image
encoded into a field calling image_bytes :
properties :
image_bytes :
type : string
Your custom model receives prediction input in the following format:
{
"instances" : [
{
"image_bytes" : {
"b64" : " BASE64_ENCODED_IMAGE_BYTES "
}
}
]
}
Before importing the model to Vertex AI Vision, verify that your model works
correctly with this input.
Specify a predictions YAML file
When you add a Vertex AI custom-trained model you can specify a
predictions YAML file ( predictions.yaml ) stored in Cloud Storage. This
file specifies the output from your model container.
This file is optional but recommended to inform Vertex AI Vision the output
structure of your model. For example, the following
classification_1.0.0.yaml
file describes model output information for an image classification model:
title : Classification
type : object
description : >
The predicted AnnotationSpecs .
properties :
ids :
type : array
description : >
The resource IDs of the AnnotationSpecs that had been identified .
items :
type : integer
format : int64
enum : [ 0 ] # As values of this enum all AnnotationSpec IDs the Model
# was trained on will be populated.
displayNames :
type : array
description : >
The display names of the AnnotationSpecs that had been identified ,
order matches the IDs .
items :
type : string
enum : [ "" ] # As values of this enum all AnnotationSpec display_names
# the Model was trained on will be populated.
confidences :
type : array
description : >
The Model 's confidences in correctness of the predicted IDs, higher
value means higher confidence . Order matches the Ids .
items :
type : number
format : float
minimum : 0.0
maximum : 1.0
Add the custom-trained model
Use the following sample to add the Vertex AI custom-trained model
to your app.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View app next to the name of your application from the list.
On the application builder page select Add Vertex AI Model from
the side components list. Selecting this option opens a side menu.
From the Add Vertex AI Model menu, leave the
radio_button_checked Import a
trained model from Vertex AI option selected, then choose the model
from the list of
existing Vertex AI AutoML models.
Provide a name for the model.
Specify the instances YAML file in Cloud Storage that defines the
format of a single instance used in prediction and explanation requests.
Optional: Specify the predictions schema YAML file in Cloud Storage
that defines the format of a single prediction or explanation.
After providing model name, instances, and predictions information,
select Add model .
After the Add model button is clicked there will be a pending
model on the side of the graph builder page. After a few seconds the
model is ready to use.
Note : To see updates to the model's status, refresh the page .
Optional. Attach application metadata
In addition to image bytes, you have the option to set
attach_application_metadata to ask the Vertex AI Vision app platform
to include the metadata of the application to be sent along to the custom
container.
The metadata has the following schema:
'appPlatformMetadata': {
'application': STRING;
'instanceId': STRING;
'node': STRING;
'processor': STRING;
}
Optional. Add dynamic configuration Pub/Sub topic
To dynamically control the frame rate that the Vertex Custom Operator sends
video frames to vertex custom containers, you can create a Pub/Sub topic. Add
it to the Dynamic Configuration section of the node settings.
If the Pub/Sub topic is configured, the initial frame rate is 0. During
video processing, you can send Pub/Sub messages to the Pub/Sub topic in the
following format in real time to change the frame rate:
{
"stream_id": "input-stream-id",
"fps": 5,
}
The stream_id field should match the ID of the input stream of the
application.
Service account and permissions
The default service credential of the custom container has been configured to
the Google-owned service account of Vertex AI Vision app platform.
To access other Google Cloud
services from the container, grant proper permission to:
service-<var>PROJECT_NUMBER</var>@gcp-sa-visionai.iam.gserviceaccount.com
Optional. Model event notification with Cloud Run functions and Pub/Sub
In Vertex AI Vision, models receive media data from devices like
cameras, run AI predictions on the data, and produce annotations continuously.
Frequently you send that processed data to a data destination ("data sink")
such as a media warehouse or BigQuery for further analytic
jobs. However, you may have a case where some annotations must be handled
differently, or the annotation needs are time-sensitive. Integrations with
Cloud Run functions and Pub/Sub help you address these needs.
Supported models
The following models offer Cloud Run functions event generation and
Pub/Sub event notification integrations:
Occupancy analytics model
Vertex AI custom-trained models
Configure Cloud Run functions to process model output
To trigger event-based notifications, you must first set up Cloud Run functions
to process model output and generate events.
Your Cloud Run function connects to the model and listens to its output
as its post-processing action. The Cloud Run function you should return
an AppPlatformCloudFunctionResponse . The events
( appplatformeventbody ) are
sent to the Pub/Sub topic you configure in the next step.
To view a sample Cloud Run function, see
Enable model event notification with Cloud Functions and Pub/Sub .
Use the following instructions to
to send the model output stream to your Cloud Run function:
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select schema View app next to the
name of your application from the list.
Click on the supported model to open the model
details side panel.
In the post-processing list of the Event notification section,
select your existing Cloud Run function, or create a new one.
Enable model event notification with Pub/Sub
After you have set up Cloud Run functions to process model output and generate
events, you can set up event notification with Pub/Sub. To read messages
from a topic, you also need to
Choose and create a Pub/Sub subscription .
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select schema View app next to the
name of your application from the list.
Click on the supported model to open the model
details side panel.
In the Event notification section, select
Set up event notification .
In the Set up Pub/Sub for event notifications option window that
opens, choose your existing Pub/Sub topic, or create a new one.
In the Frequency field, set an integer value for the frequency value
in seconds a notification for the same type of event can be sent.
Click Set up .
Connect model output with a downstream node
After you create a model node you can connect its output to another node.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View app next to the name of your application from the list.
Click on a model node that outputs data in the application graph
builder (for example, the Occupancy Count model node).
In the side settings panel, click the Add output button.
Either Add a new output and choose a new output node to add, or
select an existing Available Node to send output to.
Connect output to a data destination
After you
create the
data ingestion stream and
add the
processing nodes to your app, you
must choose where to send the processed data. This data destination
is the end point of your app
graph that accepts stream data without producing any stream data. The
destination you choose depends on how you use the app output data.
In the Google Cloud console, data destinations are available in the
Connectors section of the app graph page.
You can connect app output data to the following data destinations:
Vision Warehouse : Store original or analyzed video data that you
can view and query.
For more information about sending app output data to a
Vision Warehouse, see
Connect and store data to a warehouse .
BigQuery : Store data in BigQuery to use its offline
analytics capabilities.
For more information about sending app output data to BigQuery, see
Connect and store data to BigQuery .
Live stream data : If you want more granular control to act on real-time
analytics, you can receive the live output from your app.
For more information about directly streaming app output data, see
Enable live stream output .
Update an app
Undeployed apps
Make any modifications to the app (such as adding or removing component nodes)
; Vertex AI Vision will automatically store the changes.
What's next
Learn how to deploy your app to ingest and analyze data in
Deploy an application .
Read instructions about how to begin data ingestion from an app's input
stream in Create and manage streams .
Learn how to list apps and view a deployed app's instances in
Managing applications .
Learn how to read app input data from an ingestion stream or analyzed
model output data in Read stream data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
