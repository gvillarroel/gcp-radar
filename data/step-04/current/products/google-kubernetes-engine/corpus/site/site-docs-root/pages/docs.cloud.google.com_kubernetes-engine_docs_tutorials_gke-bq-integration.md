---
title: "Analyze data on GKE using BigQuery, Cloud Run, and Gemma \_|\_ Kubernetes\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration
  title: "Analyze data on GKE using BigQuery, Cloud Run, and Gemma \_|\_ Kubernetes\
    \ Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Analyze data on GKE using BigQuery, Cloud Run, and Gemma
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial demonstrates how to derive insights from big datasets by using
BigQuery , Cloud Run ,
and the Gemma LLM . In this tutorial,
you deploy a sample application to Google Kubernetes Engine (GKE). The sample app leverages
BigQuery for data storage and processing, Cloud Run
for request handling, and the Gemma LLM for analyzing data and generating
predictions based on incoming prompts.
This tutorial is intended for cloud platform administrators and architects , Data and AI specialists ,
ML engineers ,
and MLOps (DevOps) professionals. Before reading this page, ensure that you're familiar
with Kubernetes and a notebook environment like Jupyter .
As a prerequisite to this tutorial, you must complete the tutorial Serve Gemma open models using GPUs on GKE with Hugging Face TGI .
The TGI framework facilitates the model serving process.
Why GKE and BigQuery
BigQuery is a Platform as a Service (PaaS), fully managed, serverless
data warehouse that enables scalable analysis over petabytes of data. BigQuery
lets you focus on analyzing data to find meaningful insights while using familiar
SQL and built-in machine learning.
Using GPUs on GKE with TGI, you can deploy a Gemma language model to analyze and
summarize user interactions in natural language. Subsequently, by integrating
BigQuery with GKE, you can use BigQuery
to efficiently handle massive datasets (like Google Analytics) and the model's natural
language understanding capabilities to generate meaningful insights.
For example, as a data scientist or analyst, or a business decision-maker in an
ecommerce company, you might want to understand user behavior on your website or
app. This insight can help you optimize and personalize user journeys and make
informed business decisions to boost sales.
In this scenario, you could take raw Google Analytics data from
BigQuery, feed it to the Gemma model, and receive
page visit summaries and insights in natural language. The Gemma
model, which runs on scalable infrastructure with GPU acceleration from GKE,
rapidly processes user journey data, identifying patterns and trends. You could
gain insights to pinpoint popular product combinations, reveal common drop-off
points in the checkout process, and highlight successful marketing campaigns driving
traffic to specific landing pages.
Benefits
This solution offers a streamlined workflow with the following advantages:
BigQuery integration : use BigQuery to store
and process large datasets (like the Google Analytics data in this tutorial).
This lets you query and aggregate the data needed for the model's analysis.
GPU acceleration : run the Gemma model on a GKE cluster
with GPU support to speed up the inference process, generating predictions much
faster than with the CPU-based processors.
Reduced cost and time : save time and resources by using the open source,
pre-trained Gemma language model, eliminating the need to build a
custom model from scratch.
Objectives
In this tutorial, you learn how to:
Deploy the model and expose it : create
a service YAML file to define an internal load balancer to access the Gemma
model.
Create a BigQuery remote function : run Python code to define a remote
function that takes Google Analytics data, constructs prompts for
the model, sends requests to the model's endpoint using the load balancer, and returns
the model's response.
Configure the Virtual Private Cloud (VPC) network : set up a VPC network
and a VPC connector to enable secure communication between BigQuery
and the GKE cluster. This is crucial for the remote function to access the model endpoint.
Analyze data : analyze the data using BigQuery DataFrames,
or directly in SQL by using the bq command-line tool. Run provided code snippets
in a Colab Enterprise Notebook to:
Query Google Analytics data from BigQuery
by using SQL.
Apply the remote function to the data to generate insights from the Gemma
model.
Display the results.
Architecture
The following architecture diagram shows the components involved and how they interact:
Use a Colab Enterprise notebook to execute your Python code.
With Python, you can use the bigframes library to simplify your SQL interactions.
BigQuery serves as your big data processing engine, empowering
the use of SQL to interact with the data.
The remote function invokes a Cloud Run function. The data is
automatically routed to the remote function where it's prepared and sent over to
GKE for inference.
The results are sent back to BigQuery and displayed in a table.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine instances used by GKE
GPU resources used by GKE
BigQuery
Cloud Load Balancing
Cloud Run functions
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Make sure to complete the following prerequisites:
Select or create a project
You can use an existing project, or create a new one for this tutorial.
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
Enable the APIs
Enable the Artifact Registry, Compute Engine, GKE,
IAM Service Account Credentials, Cloud Functions,
Cloud Build, Cloud Run Admin, Cloud Logging, Serverless VPC Access,
BigQuery, Dataform, Vertex AI
APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Set up Cloud Shell
In this tutorial, you use Cloud Shell to
run gcloud and kubectl commands. Cloud Shell is a shell environment for managing
resources hosted on Google Cloud. It comes preinstalled with the
Google Cloud CLI and kubectl
command-line tool.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
A Cloud Shell session opens inside a frame lower on the console.
Before you run commands in this tutorial, make sure that your default project is
set to the project ID where you want to deploy the sample app. If it's not already
set, run the following command in the Cloud Shell:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your project ID .
Grant IAM roles
Ensure that your user account and the Compute Engine default service account
in your project have the required Identity and Access Management (IAM) roles for this tutorial.
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/aiplatform.colabEnterpriseAdmin, roles/run.invoker, roles/container.admin, roles/iam.serviceAccountAdmin, roles/logging.logWriter
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Grant roles to your Compute Engine default service account. Run the
following command once for each of the following IAM roles: roles/logging.logWriter, roles/artifactregistry.writer, roles/storage.objectViewer
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" --role = ROLE
Replace PROJECT_ID with your project ID.
Replace PROJECT_NUMBER with your project number to construct
the Compute Engine default service account domain for your project. For
example, 123456789012-compute@developer.gserviceaccount.com .
Replace ROLE with each individual role.
Serve a Gemma model
Go to the tutorial Serve Gemma open models using GPUs on GKE with Hugging Face TGI
and follow the instructions starting from Before you begin through Interact with the model using curl to ensure that your Gemma model is
deployed successfully and you can interact with it.
For the purpose of this tutorial, deploy the Gemma 2B-it model.
Set up VPC network
Create or use the VPC network
in the us-central1 region so that your remote function can connect to the GKE cluster.
In this tutorial, use the Default VPC.
To ensure that your BigQuery dataset, remote function, and the underlying
Cloud Run functions are deployed in compatible locations, the VPC
network must be in the same region as your BigQuery remote function.
In this tutorial, when you set BigQuery DataFrames options
while creating a remote function , you specify US as
a location for your dataset, which defaults to the us-central1 region for your
Cloud Run functions. Therefore, create or use the VPC in the us-central1 region.
Create a load balancer
Follow these instructions to create an internal load balancer in your GKE cluster:
Create the following tgi-2b-lb-service.yaml manifest:
apiVersion : v1
kind : Service
metadata :
name : llm-lb-service
annotations :
networking.gke.io/load-balancer-type : "Internal"
spec :
selector :
app : gemma-server
type : LoadBalancer
ports :
- protocol : TCP
port : 8000
targetPort : 8000
Open a new Cloud Shell terminal and run the following command to
apply the manifest:
kubectl apply -f tgi-2b-lb-service.yaml
Get the load balancer IP address. You might need to wait for 1-2 minutes before
this IP address can be fetched:
kubectl get service llm-lb-service --output yaml | grep ip:
You'll use this IP address to communicate with your gemma-server application
that's running behind the load balancer.
Create a connector
You use a Serverless VPC Access connector to send and receive requests
through your VPC network without using the public internet. For more information, see
Serverless VPC Access .
In this tutorial you create a connector with a new , dedicated subnet to avoid
any IP address conflicts with existing resources in the VPC. For instructions,
see the Create a connector
section and follow the gcloud instructions for the Create a connector and a new subnet
section.
Alternatively, if you want to use an existing subnet, follow the instructions for
the Create a connector using an existing subnet section.
Note: Each connector requires its own dedicated, PRIVATE -purpose /28 subnet
with a primary IPv4 address range. This subnet can't be used by other resources,
such as VMs, Private Service Connect, or load balancers. Google Cloud
enforces this requirement to ensure efficient IP address management and prevent
potential conflicts.
For more information, see Connector subnet requirements .
Create a notebook
In this tutorial, you use a Colab Enterprise notebook to run all
your code for defining the BigQuery remote function and performing
the analysis.
To create a Colab Enterprise notebook by using Google Cloud console:
In Google Cloud console, go to the Colab Enterprise Notebooks page:
Go to Notebooks
In the Region menu, select us-central1 . This is the same region where you
create all your services in this tutorial.
Next to Files , click Create a notebook .
Your new notebook appears on the My notebooks tab.
To run code in your new notebook, insert a new code cell in your notebook for every
command or a code snippet you want to run.
Create a BigQuery remote function
One of the ways you can define a BigQuery remote function is by using
the bigframes library. In this section, use bigframes to create a remote function
called process_incoming . This remote function takes Google Analytics
data as an input, constructs a prompt, and sends it to your Gemma model
for analysis.
In the Colab Enterprise notebook you created:
Click + Code to insert a new code cell.
Copy the following code in the new code cell:
# Install the necessary packages on the notebook runtime
% pip install -- upgrade bigframes -- quiet
import bigframes.pandas as bpd
import os
import ast
import requests
# Replace the following variables
# Use the format ip:port
# For example, "10.128.05:8000"
lb_url = " LOADBALANCER_IP_ADDRESS :8000"
# Set BigQuery DataFrames options
bpd . options . bigquery . project = " PROJECT_ID "
bpd . options . bigquery . location = "US"
# Update the VPC connector name with the one you created
vpc_connector_name = " VPC_CONNECTOR_NAME "
# Create a remote function using bigframes
# https://cloud.google.com/bigquery/docs/remote-functions#bigquery-dataframes
@bpd . remote_function (
dataset = "ga_demo" ,
name = "ga_explain_example" ,
bigquery_connection = "bigframes-rf-conn" ,
reuse = True ,
packages = [ "requests" ],
cloud_function_vpc_connector = VPC_CONNECTOR_NAME ,
cloud_function_service_account = "default" ,
)
def process_incoming ( data : str ) - > str :
ga_data = ast . literal_eval ( data )
USER_PROMPT = """
'The following are the results from Google Analytics.
They are reverse ranked.
reverse_event_number 1 is the last page visited.
reverse_event_number 2 is the second last page visited.
You are given the following data.
{}
Can you summarize what was the most popular page people landed on and what page they came from?
""" . format ( ga_data )
url = 'http:// {} /generate' . format ( lb_url )
myobj = {
"inputs" : USER_PROMPT ,
"temperature" : 0.90 ,
"top_p" : 0.95 ,
"max_tokens" : 2048
}
x = requests . post ( url , json = myobj )
result = x . text
return ( result )
function_name = process_incoming . bigframes_remote_function
print ( f "The function name is: { function_name } " )
Replace the following:
LOADBALANCER_IP_ADDRESS : the IP address and port of the
internal load balancer you created earlier --for example, 10.128.05:8000 .
PROJECT_ID : your project ID.
VPC_CONNECTOR_NAME : the name of the
Serverless VPC Access connector you created earlier.
In this tutorial, the location of your BigQuery dataset is set to US ,
which defaults to us-central1 region.
Click Run cell .
The output displays the name of the function similar to the following:
The function name is: PROJECT_ID .ga_demo.ga_explain_example
Analyze user behavior
In this section, you analyze user behavior on your website using the process_incoming
remote function in either of the following two ways:
using BigQuery DataFrames
using the bq command-line tool to run a query directly in SQL.
Use BigQuery DataFrames
To run the remote function using BigQuery DataFrames in the
Colab Enterprise notebook you created:
Click + Code to insert a new code cell.
Copy the following code in the new code cell, and click Run cell .
# Generate a list of all matchups and their histories as a JSON
grouping_sql = """
with
data_table as (
SELECT
distinct
user_pseudo_id,
events.value.string_value,
event_timestamp,
rank() over (partition by user_pseudo_id order by event_timestamp desc) as reverse_event_number
FROM
`bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_20210131` as events20210131,
unnest (events20210131.event_params) as events
where events.key = 'page_location'
qualify reverse_event_number < 3
)
select
*,TO_JSON_STRING (data_table) as ga_history
from data_table
limit 10;
"""
ga_df = bpd . read_gbq ( grouping_sql )
post_processed = ga_df . assign ( results = ga_df [ 'ga_history' ] . apply ( process_incoming ), axis = 1 )
post_processed . head ( 10 )
The following output shows the sample results of the query:
user_pseudo_id
string_value
event_timestamp
reverse_event_number
ga_history
results
axis
0
2342103247.0307162928
https://shop.googlemerchandisestore.com/Google...
1612096237169825
2
{"user_pseudo_id":"2342103247.0307162928","str...
{"generated_text":"\n 'The following are...
1
48976087.6959390698
https://www.googlemerchandisestore.com/
1612056537823270
2
{"user_pseudo_id":"48976087.6959390698","strin...
{"generated_text":"\n \n ```python\n imp...
Use bq command-line tool
Alternatively, you can use the bq command-line tool to perform analysis directly
using SQL.
To run the remote function using bq command-line tool in the Colab Enterprise
notebook you created:
Click + Code to insert a new code cell.
Copy the following code in the new code cell, and replace PROJECT_ID
with your project ID.
# Update with your PROJECT_ID
function_name = ' PROJECT_ID .ga_demo.ga_explain_example'
new_sql = """'with \
data_table as ( \
SELECT \
distinct \
user_pseudo_id, \
events.value.string_value, \
event_timestamp, \
rank() over (partition by user_pseudo_id order by event_timestamp desc) as reverse_event_number \
FROM \
`bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_20210131` as events20210131, \
unnest (events20210131.event_params) as events \
where events.key = "page_location" \
qualify reverse_event_number < 3 \
) \
select \
*, ` {} `(TO_JSON_STRING (data_table)) as result \
from data_table \
limit 10;' \
""" . format ( function_name )
# Run query using bq cli directly in a notebook cell
! bq query -- use_legacy_sql = false \
{ new_sql }
Click Run cell .
The following output shows the sample results of the query:
user_pseudo_id
string_value
event_timestamp
reverse_event_number
result
86037838.0267811614
https://shop.googlemerchandisestore.com/Google+Redesign/Apparel/Google+Dino+Game+Tee
1612128627715585
1
{"generated_text":"Answer:\n The most popular page was https://shop.googlemerchandisestore.com/Google+Redesign/Apparel/Google+Dino+Game+Tee\n The next most popular page was the page they came from.\n\n Explanation: \n\nThe provided data shows that the current user visited Google's merchandise store specifically for the product "Google Dino Game Tee." \n \n Important Considerations: \n\n* Data Interpretation: You can't definitively say the"}
4024190.3037653934
https://shop.googlemerchandisestore.com/Google+Redesign/Apparel/Google+Black+Cloud+Zip+Hoodie
1612085948486438
1
{"generated_text":"\n ```python\n import pandas as pd\n\n data = {'user_pseudo_id': ['4024190.3037653934', '4024190.3037653934', '4024190.3037653934'],\n 'string_value': ['https://shop.googlemerchandisestore.com"}
Success: You have successfully applied the remote function to the data to generate insights
from the Gemma model.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, delete the individual resources.
Delete your Colab Enterprise notebook .
Delete your Colab Enterprise runtime .
Delete your BigQuery function .
Make sure your Service Account has the bigquery.routines.delete permission.
For more information, see BigQuery permissions .
Delete your BigQuery external connection .
Delete your Cloud Run functions .
Delete your GKE cluster .
Delete your VPC connector .
What's next
Try a hands-on codelab
for a structured and unstructured data analysis use case.
See Best practices for running batch workloads on GKE .
Learn more about AI/ML use cases in BigQuery .
Learn more about AI/ML use cases in GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
