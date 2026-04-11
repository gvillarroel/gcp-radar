---
title: "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline
  title: "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Create an ecommerce streaming pipeline
Stay organized with collections
Save and categorize content based on your preferences.
In this tutorial, you create a Dataflow streaming pipeline that transforms
ecommerce data from Pub/Sub topics and subscriptions and outputs
the data to BigQuery and Bigtable. This tutorial requires
Gradle .
The tutorial provides an end-to-end ecommerce sample application that
streams data from a webstore to BigQuery and Bigtable.
The sample application illustrates common use cases and best practices for implementing streaming data
analytics and real-time artificial intelligence (AI). Use this tutorial to learn
how to respond dynamically to customer actions in order to analyze and react to
events in real-time. This tutorial describes how to store, analyze, and visualize event
data to get more insight into customer behavior.
The sample application is available on GitHub . To run this tutorial using Terraform, follow
the steps provided with the sample application on GitHub.
Objectives
Validate incoming data and apply corrections to it where possible.
Analyze clickstream data to keep a count of the number of views per product
in a given time period. Store this information in a low-latency store.
The application can then use the data to provide number of people who viewed this product
messages to customers on the website.
Use transaction data to inform inventory ordering:
Analyze transaction data to calculate the total number of sales for each
item, both by store and globally, for a given period.
Analyze inventory data to calculate the incoming inventory
for each item.
Pass this data to inventory systems on a continuous basis so it can be
used for inventory purchasing decisions.
Validate incoming data and apply corrections to it where possible.
Write any uncorrectable data to a dead-letter queue for additional analysis
and processing. Make a metric that represents the percentage of incoming data
that gets sent to the dead-letter queue available for monitoring and alerting.
Process all incoming data into a standard format and store it in a data
warehouse to use for future analysis and visualization.
Denormalize transaction data for in-store sales so that it can include
information like the latitude and longitude of the store location. Provide
the store information through a slowly changing table in BigQuery,
using the store ID as a key.
Data
The application processes the following types of data:
Clickstream data being sent by online systems to Pub/Sub.
Transaction data being sent by on-premises or software as a service (SaaS)
systems to Pub/Sub.
Stock data being sent by on-premises or SaaS
systems to Pub/Sub.
Note: All data is sent as JSON. This format is normal for clickstream data but
not necessarily for transaction or stock data.
Task patterns
The application contains the following task patterns common to pipelines built with the
Apache Beam SDK for Java:
Apache Beam schemas to work with structured data
JsonToRow to convert JSON data
The AutoValue code generator to generate plain old Java objects (POJOs)
Queuing unprocessable data for further analysis
Serial data validation transforms
DoFn.StartBundle to micro-batch calls to external services
Side-input patterns
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery
Bigtable
Cloud Scheduler
Compute Engine
Dataflow
Pub/Sub
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
Enable the Compute Engine, Dataflow, Pub/Sub, BigQuery, Bigtable, Bigtable Admin, and Cloud Scheduler APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com dataflow.googleapis.com pubsub.googleapis.com bigquery.googleapis.com bigtable.googleapis.com bigtableadmin.googleapis.com cloudscheduler.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/iam.serviceAccountUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = " user:USER_IDENT IFIER&quo t; - -role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
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
Enable the Compute Engine, Dataflow, Pub/Sub, BigQuery, Bigtable, Bigtable Admin, and Cloud Scheduler APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable compute.googleapis.com dataflow.googleapis.com pubsub.googleapis.com bigquery.googleapis.com bigtable.googleapis.com bigtableadmin.googleapis.com cloudscheduler.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/iam.serviceAccountUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = " user:USER_IDENT IFIER&quo t; - -role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Create a user-managed worker service account for your new pipeline and grant the necessary
roles to the service account.
To create the service account, run the
gcloud iam service-accounts create command:
gcloud iam service-accounts create retailpipeline \
--description = "Retail app data pipeline worker service account" \
--display-name = "Retail app data pipeline access"
Grant roles to the service account. Run the following command once
for each of the following IAM roles:
roles/dataflow.admin
roles/dataflow.worker
roles/pubsub.editor
roles/bigquery.dataEditor
roles/bigtable.admin
roles/bigquery.jobUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount:retailpipe line@PROJE Ciam.gserviceaccount.comT_ID.&quo t; --role = SERVICE_AC COUNT_ROLE
Replace SERVICE_ACCOUNT_ROLE with each individual role.
Grant your Google Account a role that lets you create access tokens for the service account:
gcloud iam service-accounts add-iam-policy-binding retailpipeline@ PROJECT_ID .iam.gserviceaccount.com --member = " user:EMAIL_AD DRESS" --role = roles/iam.serviceAccountTokenCreator
If needed, download and install Gradle .
Create the example sources and sinks
This section explains how to create the following:
A Cloud Storage bucket to use as a temporary storage location
Streaming data sources using Pub/Sub
Datasets to load the data into BigQuery
A Bigtable instance
Create a Cloud Storage bucket
Begin by creating a Cloud Storage bucket.
This bucket is used as a temporary storage location by the
Dataflow pipeline.
Use the
gcloud storage buckets create command :
gcloud storage buckets create gs:// BUCKET_NAME --location = LOCATION
Replace the following:
BUCKET_NAME : a name for your Cloud Storage
bucket that meets the
bucket naming requirements .
Cloud Storage bucket names must be globally unique.
LOCATION : the
location for the bucket.
Create Pub/Sub topics and subscriptions
Create four Pub/Sub topics and then create three subscriptions.
To create your topics, run the
gcloud pubsub topics create
command once for each topic. For information about how to name a subscription, see
Guidelines to name a topic or a subscription .
gcloud pubsub topics create TOPIC_NAME
Replace TOPIC_NAME with the following values, running the command four times,
once for each topic:
Clickstream-inbound
Transactions-inbound
Inventory-inbound
Inventory-outbound
To create a subscription to your topic, run the
gcloud pubsub subscriptions create
command once for each subscription:
Create a Clickstream-inbound-sub subscription:
gcloud pubsub subscriptions create --topic Clickstream-inbound Clickstream-inbound-sub
Create a Transactions-inbound-sub subscription:
gcloud pubsub subscriptions create --topic Transactions-inbound Transactions-inbound-sub
Create an Inventory-inbound-sub subscription:
gcloud pubsub subscriptions create --topic Inventory-inbound Inventory-inbound-sub
Create BigQuery datasets and table
Create a BigQuery dataset and a
partitioned table
with the appropriate schema for your Pub/Sub topic.
Use the bq mk
command to create the first dataset.
bq --location = US mk \
PROJECT_ID :Retail_Store
Create the second dataset.
bq --location = US mk \
PROJECT_ID :Retail_Store_Aggregations
Use the CREATE TABLE
SQL statement to create a table with a schema and test data.
The test data has one store with an ID value of 1 . The slow update side input
pattern uses this table.
bq query --use_legacy_sql = false \
'CREATE TABLE
Retail_Store.Store_Locations
(
id INT64,
city STRING,
state STRING,
zip INT64
);
INSERT INTO Retail_Store.Store_Locations
VALUES (1, "a_city", " ;a_state",00000);'
Create a Bigtable instance and table
Create a Bigtable instance and table. For more information about
creating Bigtable instances, see
Create an instance .
If needed, run the following command to install the cbt CLI :
gcloud components install cbt
Use the bigtable instances create command to create
an instance:
gcloud bigtable instances create aggregate-tables \
--display-name = aggregate-tables \
--cluster-config = id = aggregate-tables-c1,zone = CLUSTER_ZONE ,nodes = 1
Replace CLUSTER_ZONE with the zone where the cluster runs.
Use the cbt createtable command to create a table:
cbt -instance = aggregate-tables createtable PageView5MinAggregates
Use the following command to add a column family to the table:
cbt -instance = aggregate-tables createfamily PageView5MinAggregates pageViewAgg
Run the pipeline
Use Gradle to run a streaming pipeline.
To view the Java code that the pipeline is using,
see RetailDataProcessingPipeline.java .
Use the git clone command to clone the GitHub repository:
git clone https://github.com/GoogleCloudPlatform/dataflow-sample-applications.git
Switch to the application directory:
cd dataflow-sample-applications/retail/retail-java-applications
To test the pipeline, in your shell or terminal, run the following command using Gradle:
./gradlew :data-engineering-dept:pipelines:test --tests RetailDataProcessingPipelineSimpleSmokeTest --info --rerun-tasks
To run the pipeline, run the following command using Gradle:
./gradlew tasks executeOnDataflow -Dexec.args = " \
--pro ject=PROJE CT_ID \
--tempLocation= gs://BUCKET _NAME/temp/ \
--runner=DataflowRunner \
--re gion=R EGION \
--clickStreamPubSubSubscription=proj ects/PROJE CT_ID/subscriptions/Clickstream-inbound-sub \
--transactionsPubSubSubscription=proj ects/PROJE CT_ID/subscriptions/Transactions-inbound-sub \
--inventoryPubSubSubscriptions=proj ects/PROJE CT_ID/subscriptions/Inventory-inbound-sub \
--aggregateStockPubSubOutputTopic=proj ects/PROJE CT_ID/topics/Inventory-outbound \
--dataWarehouseOutputPro ject=PROJE CT_ID \
--serviceAccount=retailpipe line.PROJE Ciam.gserviceaccount.comT_ ID."
See the
pipeline source code
on GitHub.
Create and run Cloud Scheduler jobs
Create and run three Cloud Scheduler jobs, one that publishes clickstream data,
one for inventory data, and one for transaction data. This step generates sample
data for the pipeline.
To create a Cloud Scheduler job for this tutorial, use the
gcloud scheduler jobs create
command. This step creates a publisher for clickstream data that
publishes one message per minute.
gcloud scheduler jobs create pubsub clickstream \
--schedule = "* * * * *" \
- -locatio n = LOCATION \
--topic = "Clickstream-inbound" \
--message-body = '{"uid":464670,"sessionId":null,"returning":false,"lat":39.669082,"lng":-80.312306,"agent":"Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;","event":"add-to-cart","transaction":false,"timestamp":1660091197071,"ecommerce":{"items":[{"item_name":"Donut Friday Scented T-Shirt","item_id":"67890","price":33.75,"item_brand":"Google","item_category":"Apparel","item_category_2":"Mens","item_c ategory_3":"Shirts","item_category_4":"Tshirts","item_variant":"Black","item_list_name":"Search Results","item_list_id":"SR123","index":1,"quantity":2}]},"user_id":74378,"client_id":"52393559","page_previous":"P_3","page":"P_3","event_datetime":"2022-08-10 12:26:37"}'
To start the Cloud Scheduler job, use the
gcloud scheduler jobs run
command.
gcloud scheduler jobs run --location = LOCATION clickstream
Create and run another similar publisher for inventory data that
publishes one message every two minutes.
gcloud scheduler jobs create pubsub inventory \
--schedule = "*/2 * * * *" \
- -locatio n = LOCATION \
--topic = "Inventory-inbound" \
--message-body = '{"count":1,"sku":0,"aisleId":0,"product_name":null,"departmentId":0,"price":null," ;recipeId":null,"image":null,"timestamp":1660149636076,"store_id":1,"product_id":10050}'
Start the second Cloud Scheduler job.
gcloud scheduler jobs run --location = LOCATION inventory
Create and run a third publisher for transaction data that
publishes one message every two minutes.
gcloud scheduler jobs create pubsub transactions \
--schedule = "*/2 * * * *" \
- -locatio n = LOCATION \
--topic = "Transactions-inbound" \
--message-body = '{"order_number":"b8be9222-990d-11ea-9c05-42010af00081","user_id":998685,"store_id":1,"returning":false,"time_of_sale":0,"department_id":0,"product_id":4,"product_count":1,"price":25.0,"order_id":0,"order_dow":0,"order_hour_of_day":0,"order_woy":0,"days_since_prior_order":null,"product_name":null,"product_sku":0,"image":null,"timestamp":1660157951000,"ecommerce":{"items":[{"item_name":"Donut Friday Scented T-Shirt","item_id":"67890","price":33.75,"item_brand":"Google","i tem_category":"Apparel","item_category_2":"Mens","item_category_3":"Shirts","item_category_4":"Tshirts","item_variant":"Black","item_list_name":"Search Results","item_list_id":"SR123","index":1,"quantity":2}]},"client_id":"1686224283","page_previous":null,"page":null,"event_datetime":"2022-08-10 06:59:11"}'
Start the third Cloud Scheduler job.
gcloud scheduler jobs run --location = LOCATION transactions
View your results
View data written to your BigQuery tables. Check the results in
BigQuery by running the following queries.
While this pipeline is running, you can see new rows appended to the
BigQuery tables every minute.
You might need to wait for the tables to populate with data.
bq query --use_legacy_sql = false 'SELECT * FROM `' &qu ot;PROJECT_ID.Retail_Store.clean_invent ory_data" '`'
bq query --use_legacy_sql = false 'SELECT * FROM `' &qu ot;PROJECT_ID.Retail_Store.clean_transact ion_data" '`'
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
The easiest way to eliminate billing is to delete the Google Cloud project that you created
for the tutorial.
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
Delete the individual resources
If you want to reuse the project, then delete the resources that you created
for the tutorial.
Clean up Google Cloud project resources
To delete the Cloud Scheduler jobs, use the
gcloud scheduler jobs delete
command.
gcloud scheduler jobs delete transactions --location = LOCATION
gcloud scheduler jobs delete inventory --location = LOCATION
gcloud scheduler jobs delete clickstream --location = LOCATION
To delete the Pub/Sub subscriptions and topics, use the
gcloud pubsub subscriptions delete
and the
gcloud pubsub topics delete
commands.
gcloud pubsub subscriptions delete SUBSCRIPTION_NAME
gcloud pubsub topics delete TOPIC_NAME
To delete the BigQuery table, use the
bq rm
command.
bq rm -f -t PROJECT_ID :Retail_Store.Store_Locations
Delete the BigQuery datasets. The dataset alone does not incur any charges.
Caution: The following command also deletes all tables in the dataset.
The tables and data cannot be recovered.
bq rm -r -f -d PROJECT_ID :Retail_Store
bq rm -r -f -d PROJECT_ID :Retail_Store_Aggregations
To delete the Bigtable instance, use the
cbt deleteinstance command. The bucket alone does not incur any charges.
cbt deleteinstance aggregate-tables
To delete the Cloud Storage bucket and its objects, use the
gcloud storage rm command .
The bucket alone does not incur any charges.
gcloud storage rm gs:// BUCKET_NAME --recursive
Revoke credentials
Revoke the roles that you granted to the user-managed worker service account.
Run the following command once for each of the following IAM roles:
roles/dataflow.admin
roles/dataflow.worker
roles/pubsub.editor
roles/bigquery.dataEditor
roles/bigtable.admin
roles/bigquery.jobUser
gcloud projects remove-iam-policy-binding PROJECT_ID \
--member = serviceAccount:retailpipeline@ PROJECT_ID .iam.gserviceaccount.com \
--role = ROLE
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
View the sample application on GitHub .
Read the related blog post
Learn Beam patterns with Clickstream processing of Google Tag Manager data .
Read about using Pub/Sub to create and use topics
and to Use subscriptions .
Read about using BigQuery to create datasets .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
