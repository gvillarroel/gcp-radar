---
title: "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial
  title: "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Make predictions with remote models on Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
In this tutorial, you register a Vertex AI endpoint as a remote model
in BigQuery. Then, you use the ML.PREDICT function to make
predictions using the remote model.
You can use remote models when a model is too large to import into
BigQuery. They are also useful when you want to have a single
point of inference for online, batch, and micro-batch use cases.
Note: For a version of this tutorial that uses Python in a BigQuery
notebook, see the BQML Remote Model Tutorial in GitHub.
Objectives
Import a pretrained TensorFlow model into the Vertex AI
Model Registry.
Deploy the model to a Vertex AI endpoint.
Create a Cloud resource connection.
Use the CREATE MODEL statement to create a remote model in
BigQuery.
Use the ML.PREDICT function to make predictions with the remote model.
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery
BigQuery ML
Vertex AI
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
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
Enable the BigQuery, Vertex AI, Cloud Storage, and BigQuery Connection APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Ensure that you have the
necessary permissions
to perform the tasks in this document.
Required roles
If you create a new project, you are the project owner, and you are granted all
of the required IAM permissions that you need to complete this
tutorial.
If you are using an existing project do the following.
Make sure that you have the following role or roles on the project:
BigQuery Studio Admin ( roles/bigquery.studioAdmin )
Vertex AI User ( roles/aiplatform.user )
BigQuery Connection Admin ( roles/bigquery.connectionAdmin )
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
For more information about IAM permissions in BigQuery,
see BigQuery permissions .
Import the model to the Vertex AI Model Registry
In this tutorial you use a pretrained TensorFlow model that is
available in Cloud Storage at
gs://cloud-samples-data/bigquery/ml/remote_model_tutorial/ . The
Cloud Storage bucket is in the US multi-region location.
The model is a TensorFlow model that's named saved_model.pb . It is a
customized sentiment analysis model that was created by fine-tuning a BERT model
with plain text IMDB movie reviews. The model uses text input from the movie
reviews and returns sentiment scores between zero and one. When you import the
model into the Model Registry, you use a prebuilt TensorFlow
container.
Note: For a tutorial on creating the sample model, see Classify text with
BERT in the TensorFlow documentation.
Follow these steps to import the model.
In the Google Cloud console, go to the Vertex AI Model
Registry page.
Go to Model Registry
Click Import .
For Step one: Name and region , do the following:
Select Import as new model .
For Name , enter bert_sentiment .
For Description , enter BQML tutorial model .
For Region , select us-central1 . You must choose a US-based region
because the Cloud Storage bucket is in the US multi-region
location.
Click Continue .
For Step two: Model settings , do the following:
Select Import model artifacts into a new prebuilt container .
In the Prebuilt container settings section, do the following:
For Model framework , choose TensorFlow .
For Model framework version , choose 2.15 .
For Accelerator type , choose GPU .
For Model artifact location , enter
gs://cloud-samples-data/bigquery/ml/remote_model_tutorial/ .
Leave the default values for all remaining options and click
Import .
After the import is complete, your model appears on the Model Registry page.
Deploy the model to a Vertex AI endpoint
Follow these steps to deploy the model to an endpoint.
In the Google Cloud console go to the Vertex AI Model
Registry page.
Go to Model Registry
In the Name column, click bert_sentiment .
Click the Deploy & Test tab.
Click Deploy to endpoint .
For step one, Define your endpoint , do the following:
Click Create new endpoint .
For Endpoint name , enter bert sentiment endpoint .
Leave the remaining default values and click Continue .
For step two, Model settings , do the following:
In the Compute settings section, for Minimum number of compute
nodes , enter 1 . This is the number of nodes that need to be
available to the model at all times.
Note: In production, you should set the maximum number of compute nodes.
This option turns on the autoscaling capability in Vertex AI,
and it allows the endpoint to process more requests when your
BigQuery table has a large number of rows.
In the Advanced scaling options section, for Machine type ,
choose Standard (n1-standard-2) . Because you chose GPU as the
accelerator type when you imported the model, after you choose the
machine type, the accelerator type and accelerator count are set
automatically.
Leave the remaining default values and click Deploy .
When the model is deployed to the endpoint, the status changes to
Active .
Copy the numeric endpoint ID in the ID column and the value in the
Region column. You'll need them later.
Create a dataset
Create a BigQuery dataset to store your ML model.
Console
In the Google Cloud console, go to the BigQuery page.
Go to the BigQuery page
In the Explorer pane, click your project name.
Click more_vert View actions > Create dataset
On the Create dataset page, do the following:
For Dataset ID , enter bqml_tutorial .
For Location type , select Multi-region , and then select
US .
Leave the remaining default settings as they are, and click
Create dataset .
bq
To create a new dataset, use the
bq mk --dataset command .
Create a dataset named bqml_tutorial with the data location set to US .
bq mk --dataset \
--location=US \
--description "BigQuery ML tutorial dataset." \
bqml_tutorial
Confirm that the dataset was created:
bq ls
API
Call the datasets.insert
method with a defined dataset resource .
{
"datasetReference" : {
"datasetId" : "bqml_tutorial"
}
}
Create a BigQuery Cloud resource connection
You must have a Cloud resource connection to connect to a Vertex AI
endpoint.
Console
Go to the BigQuery page.
Go to BigQuery
In the left pane, click explore Explorer :
If you don't see the left pane, click last_page Expand left pane to open the pane.
In the Explorer pane, click add Add data .
The Add data dialog opens.
In the Filter By pane, in the Data Source Type section, select Databases .
Alternatively, in the Search for data sources field, you can enter
Vertex AI .
In the Featured data sources section, click Vertex AI .
Click the Vertex AI Models: BigQuery Federation solution card.
In the Connection type list, select Vertex AI remote models,
remote functions and BigLake (Cloud Resource) .
In the Connection ID field, enter bqml_tutorial .
Verify that Multi-region—US is selected.
Click Create connection .
At the bottom of the window, click Go to connection . Alternatively, in
the Explorer pane, click Connections , and then click
us.bqml_tutorial .
In the Connection info pane, copy the Service account ID. You need
this ID when you configure permissions for the connection. When you create
a connection resource, BigQuery creates a unique system
service account and associates it with the connection.
bq
Create a connection:
bq mk --connection --location = US --project_id = PROJECT_ID \
--connection_type = CLOUD_RESOURCE bqml_tutorial
Replace PROJECT_ID with your
Google Cloud project ID. The --project_id parameter overrides the
default project.
When you create a connection resource, BigQuery creates a
unique system service account and associates it with the connection.
Troubleshooting : If you get the following connection error,
update the Google Cloud SDK :
Flags parsing error: flag --connection_type=CLOUD_RESOURCE: value should be one of...
Retrieve and copy the service account ID for use in a later
step:
bq show --connection PROJECT_ID .us.bqml_tutorial
The output is similar to the following:
name properties
1234. REGION . CONNECTION_ID {"serviceAccountId": "connection-1234-9u56h9@gcp-sa-bigquery-condel.iam.gserviceaccount.com"}
Set up connection access
Grant the Vertex AI User role to the Cloud resource connection's service
account. You must grant this role in the same project where you created the
remote model endpoint.
Note: If the connection is in a different project, this error is returned:
bqcx-1234567890-xxxx@gcp-sa-bigquery-condel.iam.gserviceaccount.com does not have the permission to access
resource .
To grant the role, follow these steps:
Go to the IAM & Admin page.
Go to IAM & Admin
Click person_add Grant Access .
In the New principals field, enter the Cloud resource connection's
service account ID that you copied previously.
In the Select a role field, choose Vertex AI , and then select
Vertex AI User .
Click Save .
Create a BigQuery ML remote model
You create a BigQuery ML remote model by using the CREATE MODEL
statement with the REMOTE WITH CONNECTION clause. For more information on
the CREATE MODEL statement, see The CREATE MODEL statement for remote models
over custom models .
You create your model in the US multi-region location. In a
BigQuery multi-region ( US , EU ) dataset, you can only create a
remote model that connects to an endpoint deployed in a region within the same
multi-region location ( US , EU ).
When you create the remote model, you need the endpoint ID that was generated
when you deployed the model to Vertex AI. Also, the input and
output field names and types need to be exactly same as the Vertex AI
model's input and output. In this example, the input is a text STRING , and the
output is an ARRAY of type FLOAT64 .
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
For Create new , click SQL query .
In the query editor, enter this CREATE MODEL statement, and then click
Run :
CREATE OR REPLACE MODEL ` PROJECT_ID .bqml_tutorial.bert_sentiment`
INPUT ( text STRING )
OUTPUT ( scores ARRAY<FLOAT64 > )
REMOTE WITH CONNECTION ` PROJECT_ID .us.bqml_tutorial`
OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/endpoints/ ENDPOINT_ID ' )
Replace the following:
PROJECT_ID : your project name.
ENDPOINT_ID : the endpoint ID that you copied previously.
When the operation is complete, you see a message similar to
Successfully created model named bert_sentiment .
Your new model appears in the Resources panel. Models are
indicated by the model icon: .
If you select the new model in the Resources panel, information
about the model appears below the Query editor .
bq
Create the remote model by entering the following CREATE MODEL
statement:
bq query -- use_legacy_sql = false \
" CREATE OR REPLACE MODEL ` PROJECT_ID . bqml_tutorial . bert_sentiment `
INPUT ( text STRING )
OUTPUT ( scores ARRAY<FLOAT64 > )
REMOTE WITH CONNECTION ` PROJECT_ID . us . bqml_tutorial `
OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/endpoints/ ENDPOINT_ID ' ) "
Replace the following:
PROJECT_ID : your project name.
ENDPOINT_ID : the endpoint ID that you copied previously.
After you create the model, verify that the model appears in the
dataset:
bq ls -m bqml_tutorial
The output is similar to the following:
Id Model Type Labels Creation Time
---------------- ------------ -------- -----------------
bert_sentiment 28 Jan 17 :39:43
Get predictions using ML.PREDICT
You use the ML.PREDICT function to get sentiment predictions from the remote
model. The input is a text column ( review ) that contains reviews of movies
from the bigquery-public-data.imdb.reviews table.
In this example, 10,000 records are selected and sent for prediction. The remote
model defaults to a batch size of 128 instances for requests.
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Create new section, click SQL query .
In the query editor, enter this query that uses the ML.PREDICT
function, and then click Run .
SELECT *
FROM ML . PREDICT (
MODEL ` PROJECT_ID .bqml_tutorial.bert_sentiment` ,
(
SELECT review as text
FROM `bigquery-public-data.imdb.reviews`
LIMIT 10000
)
)
The query results should look similar to the following:
bq
Enter this command to run the query that uses ML.PREDICT .
bq query --use_legacy_sql=false \
'SELECT *
FROM ML.PREDICT (
MODEL ` PROJECT_ID .bqml_tutorial.bert_sentiment` ,
(
SELECT review as text
FROM `bigquery-public-data.imdb.reviews`
LIMIT 10000
)
)'
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
Alternatively, to remove the individual resources used in this tutorial:
Delete the model .
Optional: Delete the dataset .
Undeploy the model and delete the endpoint .
Delete the model from the Model Registry .
Delete the Cloud resource connection .
What's next
For an overview of BigQuery ML, see Introduction to
AI and ML in BigQuery ML .
For more information about using the CREATE MODEL statement for
remote models, see The CREATE MODEL statement for
remote models over custom models .
For more information on using a BigQuery notebook, see
Introduction to notebooks .
For more information about BigQuery regions and
multi-regions, see the Supported locations page.
To learn more about importing models in Vertex AI Model Registry,
see Import models to Vertex AI .
To learn more about model versioning in Vertex AI Model Registry,
see Model versioning with Model Registry .
For information on using Vertex AI VPC Service Controls, see
VPC Service Controls with Vertex AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
