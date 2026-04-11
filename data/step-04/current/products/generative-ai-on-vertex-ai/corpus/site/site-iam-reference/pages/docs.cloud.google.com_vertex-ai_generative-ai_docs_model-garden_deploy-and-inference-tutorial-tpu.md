---
title: "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\
  \ \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu
  title: "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\
    \ \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Generative AI on Vertex AI
Send feedback
Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints
Stay organized with collections
Save and categorize content based on your preferences.
In this tutorial, you use Model Garden to deploy the
Gemma 2 2B open model to a TPU-backed Vertex AI
endpoint. You must deploy a model to an endpoint before that model can
be used to serve online predictions. Deploying a model associates physical
resources with the model so it can serve online predictions with low latency.
After you deploy the Gemma 2 2B model, you inference the trained
model by using the PredictionServiceClient to get online
predictions . Online predictions are synchronous requests made to a
model that is deployed to an endpoint.
Objectives
This tutorial shows you how to perform the following tasks:
Deploy the Gemma 2 2B open model to a TPU backed endpoint by
using Model Garden
Use the PredictionServiceClient to get online predictions
Costs
In this document, you use the following billable components of Google Cloud:
A ct5lp-hightpu-1t machine type with one TPU_V5 accelerator
Vertex AI prediction and explanation
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
This tutorial requires you to:
Set up a Google Cloud project and enable the Vertex AI API
On your local machine:
Install, initialize, and authenticate with the Google Cloud CLI
Install the SDK for your language
Set up a Google Cloud project
Set up your Google Cloud project and enable the Vertex AI API.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up the Google Cloud CLI
On your local machine, set up the Google Cloud CLI.
Install and initialize the Google Cloud CLI.
If you previously installed the gcloud CLI, ensure your
gcloud components are updated by running this command.
gcloud components update
To authenticate with the gcloud CLI, generate a local
Application Default Credentials (ADC) file by running this command. The web
flow launched by the command is used to provide your user credentials.
gcloud auth application-default login
For more information, see gcloud CLI authentication configuration and ADC configuration .
Note: To avoid providing your project ID and region to the Google Cloud CLI, you
can use the gcloud config set command to set a default project
and region.
Set up the SDK for your programming language
To set up the environment used in this tutorial, you install the Vertex AI
SDK for your language and the Protocol Buffers library. The code samples use
functions from the Protocol Buffers library to convert the input dictionary to
the JSON format that is expected by the API.
On your local machine, click one of the following tabs to install the SDK for
your programming language.
Python
On your local machine, click one of the following tabs to install the SDK
for your programming language.
Install and update the Vertex AI SDK for Python by running this command.
pip3 install --upgrade "google-cloud-aiplatform>=1.64"
Install the Protocol Buffers library for Python by running this command.
pip3 install --upgrade "protobuf>=5.28"
Node.js
Install or update the aiplatform SDK for Node.js by running the following
command.
npm install @google-cloud/aiplatform
Java
To add google-cloud-aiplatform as a dependency, add the appropriate code for
your environment.
Maven with BOM
Add the following HTML to your pom.xml :
<dependencyManagement>
<dependencies>
<dependency>
<artifactId>libraries-bom</artifactId>
<groupId>com.google.cloud</groupId>
<scope>import</scope>
<type>pom</type>
<version>26.34.0</version>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-aiplatform</artifactId>
</dependency>
<dependency>
<groupId>com.google.protobuf</groupId>
<artifactId>protobuf-java-util</artifactId>
</dependency>
<dependency>
<groupId>com.google.code.gson</groupId>
<artifactId>gson</artifactId>
</dependency>
</dependencies>
Maven without BOM
Add the following to your
pom.xml :
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-aiplatform</artifactId>
<version>1.1.0</version>
</dependency>
<dependency>
<groupId>com.google.protobuf</groupId>
<artifactId>protobuf-java-util</artifactId>
<version>5.28</version>
</dependency>
<dependency>
<groupId>com.google.code.gson</groupId>
<artifactId>gson</artifactId>
<version>2.11.0</version>
</dependency>
Gradle without BOM
Add the following to your build.gradle :
implementation 'com.google.cloud:google-cloud-aiplatform:1.1.0'
Go
Install these Go packages by running the following commands.
The aiplatform Go client library
Go support for Protocol Buffers
Google API Extensions for Go (gax-go)
go get cloud.google.com/go/aiplatform
go get google.golang.org/protobuf
go get github.com/googleapis/gax-go/v2
Deploy Gemma using Model Garden
You deploy the Gemma 2 2B model to a ct5lp-hightpu-1t Compute Engine
machine type that is optimized for small to medium scale training. This machine
has one TPU v5e accelerator. For more information on training models
using TPUs, see Cloud TPU v5e training .
In this tutorial, you deploy the instruction-tuned Gemma 2 2B open
model by using the model card in Model Garden. The specific model
version is gemma2-2b-it — -it stands for instruction-tuned .
The Gemma 2 2B model has a lower parameter size which means lower
resource requirements and more deployment flexibility.
In the Google Cloud console, go to the Model Garden page.
Go to Model Garden
Click the Gemma 2 model card.
Go to Gemma 2
Click Deploy to open the Deploy model pane.
In the Deploy model pane, specify these details.
For Deployment environment click Vertex AI .
In the Deploy model section:
For Resource ID , choose gemma-2b-it .
For Model name and Endpoint name , accept the default
values. For example:
Model name: gemma2-2b-it-1234567891234
Endpoint name: gemma2-2b-it-mg-one-click-deploy
Make a note of the endpoint name. You'll need it to find the
endpoint ID used in the code samples.
In the Deployment settings section:
Accept the default option for Basic settings.
For Region , accept the default value or choose a region from the
list. Make a note of the region. You'll need it for the code
samples.
For Machine spec , choose the TPU backed instance:
ct5lp-hightpu-1t (1 TPU_V5_LITEPOD; ct5lp-hightpu-1t) .
Click Deploy . When the deployment is finished, receive an email that
contains details about your new endpoint. You can also view the endpoint
details by clicking Online prediction > Endpoints and selecting your
region.
Go to Endpoints
Inference Gemma 2 2B with the PredictionServiceClient
After you deploy Gemma 2 2B, you use the PredictionServiceClient to
get online predictions for the prompt: "Why is the sky blue?"
Code parameters
The PredictionServiceClient code samples require you to update the following.
PROJECT_ID : To find your project ID follow these steps.
Go to the Welcome page in the Google Cloud console.
Go to Welcome
From the project picker at the top of the page, select your project.
The project name, project number, and project ID appear after the
Welcome heading.
ENDPOINT_REGION : This is the region where you deployed the endpoint .
ENDPOINT_ID : To find your endpoint ID, view it in the console or run the
gcloud ai endpoints list command. You'll need the endpoint name and region
from the Deploy model pane.
Console
You can view the endpoint details by clicking Online prediction >
Endpoints and selecting your region. Note the number that appears in the
ID column.
Go to Endpoints
gcloud
You can view the endpoint details by running the gcloud ai endpoints
list command.
gcloud ai endpoints list \
--region = ENDPOINT_REGION \
--filter = display_name = ENDPOINT_NAME
The output looks like this.
Using endpoint [https://us-central1-aiplatform.googleapis.com/]
ENDPOINT_ID: 1234567891234567891
DISPLAY_NAME: gemma2-2b-it-mg-one-click-deploy
Sample code
In the sample code for your language, update the PROJECT_ID ,
ENDPOINT_REGION , and ENDPOINT_ID . Then run your code.
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
"""
Sample to run inference on a Gemma2 model deployed to a Vertex AI endpoint with TPU accellerators.
"""
from google.cloud import aiplatform
from google.protobuf import json_format
from google.protobuf.struct_pb2 import Value
# TODO(developer): Update & uncomment lines below
# PROJECT_ID = "your-project-id"
# ENDPOINT_REGION = "your-vertex-endpoint-region"
# ENDPOINT_ID = "your-vertex-endpoint-id"
# Default configuration
config = { "max_tokens" : 1024 , "temperature" : 0.9 , "top_p" : 1.0 , "top_k" : 1 }
# Prompt used in the prediction
prompt = "Why is the sky blue?"
# Encapsulate the prompt in a correct format for TPUs
# Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}]
input = { "prompt" : prompt }
input . update ( config )
# Convert input message to a list of GAPIC instances for model input
instances = [ json_format . ParseDict ( input , Value ())]
# Create a client
api_endpoint = f " { ENDPOINT_REGION } -aiplatform.googleapis.com"
client = aiplatform . gapic . PredictionServiceClient (
client_options = { "api_endpoint" : api_endpoint }
)
# Call the Gemma2 endpoint
gemma2_end_point = (
f "projects/ { PROJECT_ID } /locations/ { ENDPOINT_REGION } /endpoints/ { ENDPOINT_ID } "
)
response = client . predict (
endpoint = gemma2_end_point ,
instances = instances ,
)
text_responses = response . predictions
print ( text_responses [ 0 ])
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Node.js API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud Prediction Service Client library
const {
// TODO(developer): Uncomment PredictionServiceClient before running the sample.
// PredictionServiceClient,
helpers ,
} = require ( ' @google-cloud/aiplatform ' );
/**
* TODO(developer): Update these variables before running the sample.
*/
const projectId = 'your-project-id' ;
const endpointRegion = 'your-vertex-endpoint-region' ;
const endpointId = 'your-vertex-endpoint-id' ;
// Prompt used in the prediction
const prompt = 'Why is the sky blue?' ;
// Encapsulate the prompt in a correct format for TPUs
// Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}]
const input = {
prompt ,
// Parameters for default configuration
maxOutputTokens : 1024 ,
temperature : 0.9 ,
topP : 1.0 ,
topK : 1 ,
};
// Convert input message to a list of GAPIC instances for model input
const instances = [ helpers . toValue ( input )];
// TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample.
// const apiEndpoint = `${endpointRegion}-aiplatform.googleapis.com`;
// Create a client
// predictionServiceClient = new PredictionServiceClient({apiEndpoint});
// Call the Gemma2 endpoint
const gemma2Endpoint = `projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ` ;
const [ response ] = await predictionServiceClient . predict ({
endpoint : gemma2Endpoint ,
instances ,
});
const predictions = response . predictions ;
const text = predictions [ 0 ]. stringValue ;
console . log ( 'Predictions:' , text );
Java
Before trying this sample, follow the Java setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Java API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.aiplatform.v1. EndpointName ;
import com.google.cloud.aiplatform.v1. PredictResponse ;
import com.google.cloud.aiplatform.v1. PredictionServiceClient ;
import com.google.cloud.aiplatform.v1. PredictionServiceSettings ;
import com.google.gson.Gson ;
import com.google.protobuf. InvalidProtocolBufferException ;
import com.google.protobuf. Value ;
import com.google.protobuf.util. JsonFormat ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.HashMap ;
import java.util.List ;
import java.util.Map ;
public class Gemma2PredictTpu {
private final PredictionServiceClient predictionServiceClient ;
// Constructor to inject the PredictionServiceClient
public Gemma2PredictTpu ( PredictionServiceClient predictionServiceClient ) {
this . predictionServiceClient = predictionServiceClient ;
}
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "YOUR_PROJECT_ID" ;
String endpointRegion = "us-west1" ;
String endpointId = "YOUR_ENDPOINT_ID" ;
PredictionServiceSettings predictionServiceSettings =
PredictionServiceSettings . newBuilder ()
. setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion ))
. build ();
PredictionServiceClient predictionServiceClient =
PredictionServiceClient . create ( predictionServiceSettings );
Gemma2PredictTpu creator = new Gemma2PredictTpu ( predictionServiceClient );
creator . gemma2PredictTpu ( projectId , endpointRegion , endpointId );
}
// Demonstrates how to run inference on a Gemma2 model
// deployed to a Vertex AI endpoint with TPU accelerators.
public String gemma2PredictTpu ( String projectId , String region ,
String endpointId ) throws IOException {
Map<String , Object > paramsMap = new HashMap <> ();
paramsMap . put ( "temperature" , 0.9 );
paramsMap . put ( "maxOutputTokens" , 1024 );
paramsMap . put ( "topP" , 1.0 );
paramsMap . put ( "topK" , 1 );
Value parameters = mapToValue ( paramsMap );
// Prompt used in the prediction
String instance = "{ \"prompt\": \"Why is the sky blue?\"}" ;
Value . Builder instanceValue = Value . newBuilder ();
JsonFormat . parser (). merge ( instance , instanceValue );
// Encapsulate the prompt in a correct format for TPUs
// Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}]
List<Value> instances = new ArrayList <> ();
instances . add ( instanceValue . build ());
EndpointName endpointName = EndpointName . of ( projectId , region , endpointId );
PredictResponse predictResponse = this . predictionServiceClient
. predict ( endpointName , instances , parameters );
String textResponse = predictResponse . getPredictions ( 0 ). getStringValue ();
System . out . println ( textResponse );
return textResponse ;
}
private static Value mapToValue ( Map<String , Object > map ) throws InvalidProtocolBufferException {
Gson gson = new Gson ();
String json = gson . toJson ( map );
Value . Builder builder = Value . newBuilder ();
JsonFormat . parser (). merge ( json , builder );
return builder . build ();
}
}
Go
Before trying this sample, follow the Go setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Go API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/aiplatform/apiv1/aiplatformpb"
"google.golang.org/protobuf/types/known/structpb"
)
// predictTPU demonstrates how to run interference on a Gemma2 model deployed to a Vertex AI endpoint with TPU accelerators.
func predictTPU ( w io . Writer , client PredictionsClient , projectID , location , endpointID string ) error {
ctx := context . Background ()
// Note: client can be initialized in the following way:
// apiEndpoint := fmt.Sprintf("%s-aiplatform.googleapis.com:443", location)
// client, err := aiplatform.NewPredictionClient(ctx, option.WithEndpoint(apiEndpoint))
// if err != nil {
// return fmt.Errorf("unable to create prediction client: %v", err)
// }
// defer client.Close()
gemma2Endpoint := fmt . Sprintf ( "projects/%s/locations/%s/endpoints/%s" , projectID , location , endpointID )
prompt := "Why is the sky blue?"
parameters := map [ string ] interface {}{
"temperature" : 0.9 ,
"maxOutputTokens" : 1024 ,
"topP" : 1.0 ,
"topK" : 1 ,
}
// Encapsulate the prompt in a correct format for TPUs.
// Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}]
promptValue , err := structpb . NewValue ( map [ string ] interface {}{
"prompt" : prompt ,
"parameters" : parameters ,
})
if err != nil {
fmt . Fprintf ( w , "unable to convert prompt to Value: %v" , err )
return err
}
req := & aiplatformpb . PredictRequest {
Endpoint : gemma2Endpoint ,
Instances : [] * structpb . Value { promptValue },
}
resp , err := client . Predict ( ctx , req )
if err != nil {
return err
}
prediction := resp . GetPredictions ()
value := prediction [ 0 ]. GetStringValue ()
fmt . Fprintf ( w , "%v" , value )
return nil
}
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete individual resources
If you're keeping your project, delete the resources used in this tutorial:
Undeploy the model and delete the endpoint
Delete the model from Model Registry
Undeploy the model and delete the endpoint
Use one of the following methods to undeploy a model and delete the endpoint.
Note: You can only delete the endpoint after all models have been undeployed
from it.
Console
In the Google Cloud console, click Online prediction and then
click Endpoints .
Go to the Endpoints page
In the Region drop-down list, choose the region where you deployed
your endpoint.
Click the endpoint name to open the details page. For example:
gemma2-2b-it-mg-one-click-deploy .
On the row for the Gemma 2 (Version 1) model, click
more_vert Actions , and then
click Undeploy model from endpoint .
In the Undeploy model from endpoint dialog, click Undeploy .
Click the Back button to return to the Endpoints page.
Go to the Endpoints page
At the end of the gemma2-2b-it-mg-one-click-deploy row, click
more_vert Actions , and then
select Delete endpoint .
In the confirmation prompt, click Confirm .
gcloud
To undeploy the model and delete the endpoint using the Google Cloud CLI,
follow these steps.
In these commands, replace:
PROJECT_ID with your project name
LOCATION_ID with the region where you deployed the model and
endpoint
ENDPOINT_ID with the endpoint ID
DEPLOYED_MODEL_NAME with the model's display name
DEPLOYED_MODEL_ID with the model ID
Get the endpoint ID by running the gcloud ai endpoints list
command. This command lists the endpoint IDs for all endpoints in your
project. Make a note of the ID of the endpoint used in this tutorial.
gcloud ai endpoints list \
--project = PROJECT_ID \
--region = LOCATION_ID
The output looks like this. In the output, the ID is called
ENDPOINT_ID .
Using endpoint [https://us-central1-aiplatform.googleapis.com/]
ENDPOINT_ID: 1234567891234567891
DISPLAY_NAME: gemma2-2b-it-mg-one-click-deploy
Get the model ID by running the gcloud ai models describe
command. Make a note of the ID of the model you deployed in this
tutorial.
gcloud ai models describe DEPLOYED_MODEL_NAME \
--project = PROJECT_ID \
--region = LOCATION_ID
The abbreviated output looks like this. In the output, the ID is called
deployedModelId .
Using endpoint [https://us-central1-aiplatform.googleapis.com/]
artifactUri: [URI removed]
baseModelSource:
modelGardenSource:
publicModelName: publishers/google/models/gemma2
...
deployedModels:
- deployedModelId: '1234567891234567891'
endpoint: projects/12345678912/locations/us-central1/endpoints/12345678912345
displayName: gemma2-2b-it-12345678912345
etag: [ETag removed]
modelSourceInfo:
sourceType: MODEL_GARDEN
name: projects/123456789123/locations/us-central1/models/gemma2-2b-it-12345678912345
...
Undeploy the model from the endpoint. You'll need the endpoint ID and
model ID from the previous commands.
gcloud ai endpoints undeploy-model ENDPOINT_ID \
--project = PROJECT_ID \
--region = LOCATION_ID \
--deployed-model-id = DEPLOYED_MODEL_ID
This command produces no output.
Run the gcloud ai endpoints delete command to delete
the endpoint.
gcloud ai endpoints delete ENDPOINT_ID \
--project = PROJECT_ID \
--region = LOCATION_ID
When promted, type y to confirm. This command produces no output.
Delete the model
Console
Go to the Model Registry page from the Vertex AI section
in the Google Cloud console.
Go to the Model Registry page
In the Region drop-down list, choose the region where you deployed
your model.
At the end of the gemma2-2b-it-1234567891234 row, click
more_vert Actions .
Select Delete model .
When you delete the model, all associated model versions and evaluations
are deleted from your Google Cloud project.
In the confirmation prompt, click Delete .
gcloud
To delete the model using the Google Cloud CLI, provide the model's display
name and region to the gcloud ai models delete command.
gcloud ai models delete DEPLOYED_MODEL_NAME \
--project = PROJECT_ID \
--region = LOCATION_ID
Replace DEPLOYED_MODEL_NAME with the model's display name.
Replace PROJECT_ID with your project name. Replace
LOCATION_ID with the region where you deployed the model.
What's next
Learn more about Gemma open models .
Read the Gemma Terms of Use .
Learn more about open models .
Learn how to deploy a tuned model .
Learn how to deploy Gemma 2 to Google Kubernetes Engine using HuggingFace Textgen Inference (TGI) .
Learn more about the PredictionServiceClient in your preferred language:
Python , Node.js , Java , or
Go .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
