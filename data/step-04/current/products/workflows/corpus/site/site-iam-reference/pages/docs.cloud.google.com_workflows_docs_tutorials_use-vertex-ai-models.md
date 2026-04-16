---
title: "Access Gemini models from a workflow using Vertex AI \_|\_ Workflows \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/use-vertex-ai-models
  title: "Access Gemini models from a workflow using Vertex AI \_|\_ Workflows \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Access Gemini models from a workflow using Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
Generative AI on Vertex AI (also known as genAI or gen AI ) gives you access to
Google's generative AI models for multiple modalities (text, code, images,
speech). You can test and tune these large language models (LLM), and then
deploy them for use in your AI-powered applications. For more information, see
the Overview of Generative AI on Vertex AI .
Vertex AI has a variety of generative AI foundation models that
are accessible through an API, including the models used in this guide. For more
information about how to choose a model, see
Google models .
Each model is exposed through a publisher endpoint that's specific to your
Google Cloud project so there's no need to deploy the foundation model unless you
need to tune it for a specific use case. You can send a prompt to the publisher
endpoint. A prompt is a natural language request sent to an LLM to elicit a
response.
This tutorial demonstrates workflows that generate responses from
Vertex AI models by sending text prompts to the publisher
endpoints using either a Workflows connector or an HTTP POST
request. For more information, see the
Vertex AI API connector overview
and Make an HTTP request .
Note that you can deploy and run each workflow independently of each other.
Objectives
In this tutorial, you will do the following:
Enable the Vertex AI and Workflows APIs, and
grant the Vertex AI User ( roles/aiplatform.user ) role to your service
account. This role allows access to most Vertex AI
capabilities. For more information about setting up Vertex AI,
see
Set up a project and a development environment .
Deploy and run a workflow that prompts a Vertex AI model to
describe an image that is publicly available through Cloud Storage. For
more information, see
Make data public .
Deploy and run a workflow that loops through a list of countries in parallel
and prompts a Vertex AI model to generate and return the
histories of the countries. Using parallel branches allows you to reduce the
total execution time by starting the calls to the LLM at the same time and
waiting for all of them to complete before combining the results. For more
information, see
Execute workflow steps in parallel .
Deploy a workflow that can summarize a large document. Because there is a
limit to the context window which sets how far back the model looks during
training (and for forecasts), the workflow divides the document into smaller
parts, and then prompts a Vertex AI model to summarize each
part in parallel. For more information, see
Overview of prompting strategies and
Forecast horizon, context window, and forecast window .
Costs
In this document, you use the following billable components of Google Cloud:
Vertex AI
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Before trying out the examples in this tutorial, ensure that you have completed
the following.
Console
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
Enable the Vertex AI and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Vertex AI > Vertex AI User role to the service account.
To grant the role, find the Select a role list, then select
Vertex AI > Vertex AI User .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
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
Enable the Vertex AI and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Vertex AI > Vertex AI User role to the service account.
To grant the role, find the Select a role list, then select
Vertex AI > Vertex AI User .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
gcloud
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable aiplatform.googleapis.com workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/aiplatform.user IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/aiplatform.user
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable aiplatform.googleapis.com workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/aiplatform.user IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/aiplatform.user
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Deploy a workflow that describes an image
Deploy a workflow that uses a connector method
( generateContent ) to make a request to a model publisher
endpoint. The method provides support for content generation with multimodal
inputs.
The workflow provides a text prompt and the URI of an image that is publicly
available in a Cloud Storage bucket. You can
view the image
and, in the Google Cloud console, you can
view the object details .
The workflow returns a description of the image from the model's generated
response.
For more information about the HTTP request body parameters used when prompting
the LLM, and the response body elements, see
Generate content with the Gemini API in Vertex AI .
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
Click add
Create .
Enter a name for the new workflow: describe-image .
In the Region list, select us-central1 (Iowa) .
For the Service account , select the service account you previously
created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
params : [ args ]
steps :
- init :
assign :
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- location : "us-central1"
- model : "gemini-2.5-flash"
- text_combined : ""
- ask_llm :
call : googleapis.aiplatform.v1.projects.locations.endpoints.generateContent
args :
model : ${"projects/" + project + "/locations/" + location + "/publishers/google/models/" + model}
region : ${location}
body :
contents :
role : user
parts :
- fileData :
mimeType : image/jpeg
fileUri : ${args.image_url}
- text : Describe this picture in detail
generation_config :
temperature : 0.4
max_output_tokens : 2048
top_p : 1
top_k : 32
result : llm_response
- return_result :
return :
image_url : ${args.image_url}
image_description : ${llm_response.candidates[0].content.parts[0].text}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch describe-image.yaml
In a text editor, copy the following workflow to your source code file:
main :
params : [ args ]
steps :
- init :
assign :
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- location : "us-central1"
- model : "gemini-2.5-flash"
- text_combined : ""
- ask_llm :
call : googleapis.aiplatform.v1.projects.locations.endpoints.generateContent
args :
model : ${"projects/" + project + "/locations/" + location + "/publishers/google/models/" + model}
region : ${location}
body :
contents :
role : user
parts :
- fileData :
mimeType : image/jpeg
fileUri : ${args.image_url}
- text : Describe this picture in detail
generation_config :
temperature : 0.4
max_output_tokens : 2048
top_p : 1
top_k : 32
result : llm_response
- return_result :
return :
image_url : ${args.image_url}
image_description : ${llm_response.candidates[0].content.parts[0].text}
Deploy the workflow by entering the following command:
gcloud workflows deploy describe-image \
--source = describe-image.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Execute the workflow
Executing a workflow runs the current workflow definition associated with the
workflow.
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
On the Workflows page, select the
describe-image workflow to go to its details page.
On the Workflow details page, click
play_arrow Execute .
For the Input , enter the following:
{ "image_url" : "gs://generativeai-downloads/images/scones.jpg" }
Click Execute again.
View the results of the workflow in the Output pane.
The output should be similar to the following:
{
"image_description": "There are three pink peony flowers on the right side of the picture[]...]There is a white napkin on the table.",
"image_url": "gs://generativeai-downloads/images/scones.jpg"
}
gcloud
Open a terminal.
Execute the workflow:
gcloud workflows run describe-image \
--data = '{"image_url":"gs://generativeai-downloads/images/scones.jpg"}'
The execution results should be similar to the following:
Waiting for execution [258b530e-a093-46d7-a4ff-cbf5392273c0] to complete...done.
argument: '{"image_url":"gs://generativeai-downloads/images/scones.jpg"}'
createTime: '2024-02-09T13:59:32.166409938Z'
duration: 4.174708484s
endTime: '2024-02-09T13:59:36.341118422Z'
name: projects/1051295516635/locations/us-central1/workflows/describe-image/executions/258b530e-a093-46d7-a4ff-cbf5392273c0
result: "{\"image_description\":\"The picture shows a rustic table with a white surface,\
\ on which there are several scones with blueberries, as well as two cups of coffee\
[...]
\ on the table. The background of the table is a dark blue color.\",\"image_url\"\
:\"gs://generativeai-downloads/images/scones.jpg\"}"
startTime: '2024-02-09T13:59:32.166409938Z'
state: SUCCEEDED
Deploy a workflow that generates country histories
Deploy a workflow that loops through an input list of countries in
parallel
and uses a connector method
( generateContent ) to make a request to a model publisher
endpoint. The method provides support for content generation with multimodal
inputs.
The workflow returns the country histories generated by the model, combining
them in a map .
For more information about the HTTP request body parameters used when prompting
the LLM, and the response body elements, see
Generate content with the Gemini API in Vertex AI .
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
Click add
Create .
Enter a name for the new workflow: gemini-pro-country-histories .
In the Region list, select us-central1 (Iowa) .
For the Service account , select the service account you previously
created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
params : [ args ]
steps :
- init :
assign :
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- location : "us-central1"
- model : "gemini-2.5-flash"
- histories : {}
- loop_over_countries :
parallel :
shared : [ histories ]
for :
value : country
in : ${args.countries}
steps :
- ask_llm :
call : googleapis.aiplatform.v1.projects.locations.endpoints.generateContent
args :
model : ${"projects/" + project + "/locations/" + location + "/publishers/google/models/" + model}
region : ${location}
body :
contents :
role : "USER"
parts :
text : ${"Can you tell me about the history of " + country}
generation_config :
temperature : 0.5
max_output_tokens : 2048
top_p : 0.8
top_k : 40
result : llm_response
- add_to_histories :
assign :
- histories[country] : ${llm_response.candidates[0].content.parts[0].text}
- return_result :
return : ${histories}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch gemini-pro-country-histories.yaml
In a text editor, copy the following workflow to your source code file:
main :
params : [ args ]
steps :
- init :
assign :
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- location : "us-central1"
- model : "gemini-2.5-flash"
- histories : {}
- loop_over_countries :
parallel :
shared : [ histories ]
for :
value : country
in : ${args.countries}
steps :
- ask_llm :
call : googleapis.aiplatform.v1.projects.locations.endpoints.generateContent
args :
model : ${"projects/" + project + "/locations/" + location + "/publishers/google/models/" + model}
region : ${location}
body :
contents :
role : "USER"
parts :
text : ${"Can you tell me about the history of " + country}
generation_config :
temperature : 0.5
max_output_tokens : 2048
top_p : 0.8
top_k : 40
result : llm_response
- add_to_histories :
assign :
- histories[country] : ${llm_response.candidates[0].content.parts[0].text}
- return_result :
return : ${histories}
Deploy the workflow by entering the following command:
gcloud workflows deploy gemini-pro-country-histories \
--source = gemini-pro-country-histories.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Execute the workflow
Executing a workflow runs the current workflow definition associated with the
workflow.
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
On the Workflows page, select the
gemini-pro-country-histories workflow to go to its details page.
On the Workflow details page, click
play_arrow Execute .
For the Input , enter the following:
{ "countries" : [ "Argentina" , "Bhutan" , "Cyprus" , "Denmark" , "Ethiopia" ]}
Click Execute again.
View the results of the workflow in the Output pane.
The output should be similar to the following:
{
"Argentina": "The history of Argentina is a complex and fascinating one, marked by periods of prosperity and decline, political [...]
"Bhutan": "The history of Bhutan is a rich and fascinating one, dating back to the 7th century AD. Here is a brief overview: [...]
"Cyprus": "The history of Cyprus is a long and complex one, spanning over 10,000 years. The island has been ruled by a succession [...]
"Denmark": "1. **Prehistory and Early History (c. 12,000 BC - 800 AD)**\\n - The earliest evidence of human habitation in Denmark [...]
"Ethiopia": "The history of Ethiopia is a long and complex one, stretching back to the earliest human civilizations. The country is [...]
}
gcloud
Open a terminal.
Execute the workflow:
gcloud workflows run gemini-pro-country-histories \
--data = '{"countries":["Argentina", "Bhutan", "Cyprus", "Denmark", "Ethiopia"]}' \
--location = us-central1
The execution results should be similar to the following:
Waiting for execution [7ae1ccf1-29b7-4c2c-99ec-7a12ae289391] to complete...done.
argument: '{"countries":["Argentina","Bhutan","Cyprus","Denmark","Ethiopia"]}'
createTime: '2024-02-09T16:25:16.742349156Z'
duration: 12.075968673s
endTime: '2024-02-09T16:25:28.818317829Z'
name: projects/1051295516635/locations/us-central1/workflows/gemini-pro-country-histories/executions/7ae1ccf1-29b7-4c2c-99ec-7a12ae289391
result: "{\"Argentina\":\"The history of Argentina can be traced back to the arrival\
[...]
n* 2015: Argentina elects Mauricio Macri as president.\",\"Bhutan\":\"The history\
[...]
\ natural beauty, ancient monasteries, and friendly people.\",\"Cyprus\":\"The history\
[...]
,\"Denmark\":\"The history of Denmark can be traced back to the Stone Age, with\
[...]
\ a high standard of living.\",\"Ethiopia\":\"The history of Ethiopia is long and\
[...]
startTime: '2024-02-09T16:25:16.742349156Z'
state: SUCCEEDED
Deploy a workflow that summarizes a large document
Deploy a workflow that divides a large document into smaller parts, making
http.post
requests to a model publisher endpoint in
parallel so that the model can summarize each part simultaneously. The workflow finally combines all the partial summaries into a
complete one.
For more information about the HTTP request body parameters used when prompting
the LLM, and the response body elements, see
Generate content with the Gemini API in Vertex AI .
The workflow definition assumes that you have created a Cloud Storage
bucket to which you can upload a text file. For more information
about the Workflows connector ( googleapis.storage.v1.objects.get )
used to retrieve objects from the Cloud Storage bucket, see the
Connectors reference .
After deploying the workflow, you can execute it by creating an appropriate
Eventarc trigger and then by uploading a file to the bucket. For
more information, see
Route Cloud Storage events to Workflows .
Note that additional APIs must be enabled, and additional roles must be
granted, including granting to your service account the Storage Object User
( roles/storage.objectUser ) role that supports using Cloud Storage
objects. For more information, see the
Prepare to create a trigger section.
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
Click add
Create .
Enter a name for the new workflow: gemini-pro-summaries .
In the Region list, select us-central1 (Iowa) .
For the Service account , select the service account you previously
created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
params : [ input ]
steps :
- assign_file_vars :
assign :
- file_size : ${int(input.data.size)}
- chunk_size : 64000
- n_chunks : ${int(file_size / chunk_size)}
- summaries : []
- all_summaries_concatenated : ""
- loop_over_chunks :
parallel :
shared : [ summaries ]
for :
value : chunk_idx
range : ${[0, n_chunks]}
steps :
- assign_bounds :
assign :
- lower_bound : ${chunk_idx * chunk_size}
- upper_bound : ${(chunk_idx + 1) * chunk_size}
- summaries : ${list.concat(summaries, "")}
- dump_file_content :
call : http.get
args :
url : ${"https://storage.googleapis.com/storage/v1/b/" + input.data.bucket + "/o/" + input.data.name + "?alt=media"}
auth :
type : OAuth2
headers :
Range : ${"bytes=" + lower_bound + "-" + upper_bound}
result : file_content
- assign_chunk :
assign :
- chunk : ${file_content.body}
- generate_chunk_summary :
call : ask_gemini_for_summary
args :
textToSummarize : ${chunk}
result : summary
- assign_summary :
assign :
- summaries[chunk_idx] : ${summary}
- concat_summaries :
for :
value : summary
in : ${summaries}
steps :
- append_summaries :
assign :
- all_summaries_concatenated : ${all_summaries_concatenated + "\n" + summary}
- reduce_summary :
call : ask_gemini_for_summary
args :
textToSummarize : ${all_summaries_concatenated}
result : final_summary
- return_result :
return :
- summaries : ${summaries}
- final_summary : ${final_summary}
ask_gemini_for_summary :
params : [ textToSummarize ]
steps :
- init :
assign :
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- location : "us-central1"
- model : "gemini-2.5-pro"
- summary : ""
- call_gemini :
call : http.post
args :
url : ${"https://" + location + "-aiplatform.googleapis.com" + "/v1/projects/" + project + "/locations/" + location + "/publishers/google/models/" + model + ":generateContent"}
auth :
type : OAuth2
body :
contents :
role : user
parts :
- text : '${"Make a summary of the following text:\n\n" + textToSummarize}'
generation_config :
temperature : 0.2
maxOutputTokens : 2000
topK : 10
topP : 0.9
result : gemini_response
# Sometimes, there's no text, for example, due to safety settings
- check_text_exists :
switch :
- condition : ${not("parts" in gemini_response.body.candidates[0].content)}
next : return_summary
- extract_text :
assign :
- summary : ${gemini_response.body.candidates[0].content.parts[0].text}
- return_summary :
return : ${summary}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch gemini-pro-summaries.yaml
In a text editor, copy the following workflow to your source code file:
main :
params : [ input ]
steps :
- assign_file_vars :
assign :
- file_size : ${int(input.data.size)}
- chunk_size : 64000
- n_chunks : ${int(file_size / chunk_size)}
- summaries : []
- all_summaries_concatenated : ""
- loop_over_chunks :
parallel :
shared : [ summaries ]
for :
value : chunk_idx
range : ${[0, n_chunks]}
steps :
- assign_bounds :
assign :
- lower_bound : ${chunk_idx * chunk_size}
- upper_bound : ${(chunk_idx + 1) * chunk_size}
- summaries : ${list.concat(summaries, "")}
- dump_file_content :
call : http.get
args :
url : ${"https://storage.googleapis.com/storage/v1/b/" + input.data.bucket + "/o/" + input.data.name + "?alt=media"}
auth :
type : OAuth2
headers :
Range : ${"bytes=" + lower_bound + "-" + upper_bound}
result : file_content
- assign_chunk :
assign :
- chunk : ${file_content.body}
- generate_chunk_summary :
call : ask_gemini_for_summary
args :
textToSummarize : ${chunk}
result : summary
- assign_summary :
assign :
- summaries[chunk_idx] : ${summary}
- concat_summaries :
for :
value : summary
in : ${summaries}
steps :
- append_summaries :
assign :
- all_summaries_concatenated : ${all_summaries_concatenated + "\n" + summary}
- reduce_summary :
call : ask_gemini_for_summary
args :
textToSummarize : ${all_summaries_concatenated}
result : final_summary
- return_result :
return :
- summaries : ${summaries}
- final_summary : ${final_summary}
ask_gemini_for_summary :
params : [ textToSummarize ]
steps :
- init :
assign :
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- location : "us-central1"
- model : "gemini-2.5-pro"
- summary : ""
- call_gemini :
call : http.post
args :
url : ${"https://" + location + "-aiplatform.googleapis.com" + "/v1/projects/" + project + "/locations/" + location + "/publishers/google/models/" + model + ":generateContent"}
auth :
type : OAuth2
body :
contents :
role : user
parts :
- text : '${"Make a summary of the following text:\n\n" + textToSummarize}'
generation_config :
temperature : 0.2
maxOutputTokens : 2000
topK : 10
topP : 0.9
result : gemini_response
# Sometimes, there's no text, for example, due to safety settings
- check_text_exists :
switch :
- condition : ${not("parts" in gemini_response.body.candidates[0].content)}
next : return_summary
- extract_text :
assign :
- summary : ${gemini_response.body.candidates[0].content.parts[0].text}
- return_summary :
return : ${summary}
Deploy the workflow by entering the following command:
gcloud workflows deploy gemini-pro-summaries \
--source = gemini-pro-summaries.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
Console
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
gcloud
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Delete the workflows
that you created in this tutorial.
What's next
Learn more about Workflows connectors .
Learn more about generating content with the Gemini API in Vertex AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
