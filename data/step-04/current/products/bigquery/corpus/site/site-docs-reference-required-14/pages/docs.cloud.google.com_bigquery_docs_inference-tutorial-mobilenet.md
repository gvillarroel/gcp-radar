---
title: "Tutorial: Run inference on an object table by using a feature vector model\
  \ \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/dts-introduction
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet
  title: "Tutorial: Run inference on an object table by using a feature vector model\
    \ \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Tutorial: Run inference on an object table by using a feature vector model
This tutorial shows you how to create an object table based on the images
from the
flowers dataset ,
and then run inference on that object table using the
MobileNet V3 model .
The MobileNet V3 model
The MobileNet V3 model analyzes image files and returns a feature vector array.
The feature vector array is a list of numerical elements which describe the
characteristics of the images analyzed. Each feature vector describes a
multi-dimensional feature space, and provides the coordinates of the image in
this space. You can use the feature
vector information for an image to further classify the image, for example
by using cosine similarity to group similar images.
The MobileNet V3 model input takes a tensor of
DType
tf.float32 in the shape [-1, 224, 224, 3] . The output is an array of
tensors of tf.float32 in the shape [-1, 1024] .
Required permissions
To create the dataset, you need the bigquery.datasets.create permission.
To create the connection resource, you need the following permissions:
bigquery.connections.create
bigquery.connections.get
To grant permissions to the connection's service account, you need the
following permission:
resourcemanager.projects.setIamPolicy
To create the object table, you need the following permissions:
bigquery.tables.create
bigquery.tables.update
bigquery.connections.delegate
To create the bucket, you need the storage.buckets.create permission.
To upload the dataset and model to Cloud Storage, you need the
storage.objects.create and storage.objects.get permissions.
To load the model into BigQuery ML, you need the following
permissions:
bigquery.jobs.create
bigquery.models.create
bigquery.models.getData
bigquery.models.updateData
To run inference, you need the following permissions:
bigquery.tables.getData on the object table
bigquery.models.getData on the model
bigquery.jobs.create
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery : You incur storage costs for the object table
you create in BigQuery.
BigQuery ML : You incur costs for the model you
create and the inference you perform in BigQuery ML.
Cloud Storage : You incur costs for the objects you
store in Cloud Storage.
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
For more information on BigQuery storage pricing, see
Storage pricing in the BigQuery
documentation.
For more information on BigQuery ML pricing, see
BigQuery ML pricing in
the BigQuery documentation.
For more information on Cloud Storage pricing, see the
Cloud Storage pricing page.
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
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery and BigQuery Connection API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the BigQuery and BigQuery Connection API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a reservation
To use an
imported model
with an object table, you must
create a reservation
that uses the BigQuery
Enterprise or Enterprise Plus edition ,
and then
create a reservation assignment
that uses the QUERY job type.
Create a dataset
Create a dataset named mobilenet_inference_test :
SQL
Go to the BigQuery page.
Go to BigQuery
In the Editor pane, run the following SQL statement:
CREATE SCHEMA ` PROJECT_ID .mobilenet_inference_test` ;
Replace PROJECT_ID with your project ID.
bq
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
Run the
bq mk command
to create the dataset:
bq mk --dataset --location = us PROJECT_ID :resnet_inference_test
Replace PROJECT_ID with your project ID.
Create a connection
Create a connection named lake-connection :
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
In the Connection type list, select
Vertex AI remote models, remote functions, BigLake and Spanner (Cloud Resource) .
In the Connection ID field, type lake-connection .
Click Create connection .
In the Explorer pane, expand your project, click
Connections , and select the us.lake-connection
connection.
In the Connection info pane, copy the value from the
Service account ID field. You need this information to
grant permission to the connection's service account
on the Cloud Storage bucket that you create in the next step.
bq
In Cloud Shell, run the
bq mk command
to create the connection:
bq mk -- connection -- location = us -- connection_type = CLOUD_RESOURCE \
lake - connection
Run the bq show command
to retrieve information about the connection:
bq show --connection us.lake-connection
From the properties column, copy the value of the serviceAccountId
property and save it somewhere. You need this information to
grant permissions to the connection's
service account.
Create a Cloud Storage bucket
Create a Cloud Storage bucket .
Create two folders
in the bucket, one named mobilenet for the model files and one named
flowers for the dataset.
Grant permissions to the connection's service account
Console
Go to the IAM & Admin page.
Go to IAM & Admin
Click Grant Access .
The Add principals dialog opens.
In the New principals field, enter the service account ID that you
copied earlier.
In the Select a role field, select Cloud Storage , and then
select Storage Object Viewer .
Click Save .
gcloud
In Cloud Shell, run the
gcloud storage buckets add-iam-policy-binding command :
gcloud storage buckets add-iam-policy-binding gs:// BUCKET_NAME \
--member = serviceAccount: MEMBER \
--role = roles/storage.objectViewer
Replace MEMBER with the service account ID that you
copied earlier. Replace BUCKET_NAME with the name
of the bucket you previously created.
For more information, see Add a principal to a bucket-level
policy .
Note: There can be a delay of up to a minute before new permissions take effect.
Upload the dataset to Cloud Storage
Get the dataset files and make them available in Cloud Storage:
Download
the flowers dataset to your local machine.
Unzip the flower_photos.tgz file.
Upload the flower_photos folder
to the flowers folder in the bucket you previously created.
Once the upload has completed, delete the LICENSE.txt file in the
flower_photos folder.
Create an object table
Create an object table named sample_images based on the flowers dataset you
uploaded:
SQL
Go to the BigQuery page.
Go to BigQuery
In the Editor pane, run the following SQL statement:
CREATE EXTERNAL TABLE mobilenet_inference_test . sample_images
WITH CONNECTION `us.lake-connection`
OPTIONS (
object_metadata = 'SIMPLE' ,
uris = [ 'gs:// BUCKET_NAME /flowers/*' ] );
Replace BUCKET_NAME with the name of the bucket you
previously created.
bq
In Cloud Shell, run the
bq mk command
to create the connection:
bq mk --table \
--external_table_definition = 'gs:// BUCKET_NAME /flowers/*@us.lake-connection' \
--object_metadata = SIMPLE \
mobilenet_inference_test.sample_images
Replace BUCKET_NAME with the name of the bucket you
previously created.
Upload the model to Cloud Storage
Get the model files and make them available in Cloud Storage:
Download
the MobileNet V3 model to your local machine. This gives you a
saved_model.pb file and a variables folder for the model.
Upload the saved_model.pb file and
the variables folder to the mobilenet folder in the bucket you
previously created.
Load the model into BigQuery ML
Go to the BigQuery page.
Go to BigQuery
In the Editor pane, run the following SQL statement:
CREATE MODEL `mobilenet_inference_test.mobilenet`
OPTIONS (
model_type = 'TENSORFLOW' ,
model_path = 'gs:// BUCKET_NAME /mobilenet/*' );
Replace BUCKET_NAME with the name of the bucket
you previously created.
Inspect the model
Inspect the uploaded model to see what its input and output fields are:
Go to the BigQuery page.
Go to BigQuery
In the left pane, click explore Explorer :
In the Explorer pane, expand your project, click Datasets , and then
click the mobilenet_inference_test dataset.
Go to the Models tab.
Click the mobilenet model.
In the model pane that opens, click the Schema tab.
Look at the Labels section. This identifies the fields that are output
by the model. In this case, the field name value is
feature_vector .
Look at the Features section. This identifies the fields that must
be input into the model. You reference them in the SELECT statement
for the ML.DECODE_IMAGE function. In this case, the field name value is
inputs .
Run inference
Run inference on the sample_images object table using the mobilenet model:
Go to the BigQuery page.
Go to BigQuery
In the Editor pane, run the following SQL statement:
SELECT *
FROM ML . PREDICT (
MODEL `mobilenet_inference_test.mobilenet` ,
( SELECT uri , ML . RESIZE_IMAGE ( ML . DECODE_IMAGE ( data ), 224 , 224 , FALSE ) AS inputs
FROM mobilenet_inference_test . sample_images )
);
The results should look similar to the following:
--------------------------------------------------------------------------------------------------------------
| feature_vector | uri | inputs |
— -------------------------------------------------------------------------------------------------------------
| 0 . 850297749042511 | gs://mybucket/flowers/dandelion/3844111216_742ea491a0 . jpg | 0 . 29019609093666077 |
— -------------------------------------------------------------------------------------------------------------
| - 0 . 27427938580513 | | 0 . 31372550129890442 |
— ------------------------- ------------------------
| - 0 . 23189745843410492 | | 0 . 039215687662363052 |
— ------------------------- ------------------------
| - 0 . 058292809873819351 | | 0 . 29985997080802917 |
— -------------------------------------------------------------------------------------------------------------
Clean up
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
