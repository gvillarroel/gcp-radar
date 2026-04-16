---
title: "Automating the classification of data uploaded to Cloud Storage \_|\_ Sensitive\
  \ Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/automating-classification-of-data-uploaded-to-cloud-storage
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/automating-classification-of-data-uploaded-to-cloud-storage
  title: "Automating the classification of data uploaded to Cloud Storage \_|\_ Sensitive\
    \ Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Sensitive Data Protection
Send feedback
Automating the classification of data uploaded to Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to implement an automated data quarantine and
classification system using Cloud Storage and other Google Cloud
products. The tutorial assumes that you are familiar with
Google Cloud and basic shell programming.
In every organization, data protection officers like you face an ever-increasing
amount of data, data that must be protected and treated appropriately.
Quarantining and classifying that data can be complicated and time consuming,
especially given hundreds or thousands of files a day.
What if you could take each file, upload it to a quarantine location, and have
it automatically classified and moved to the appropriate location based on the
classification result? This tutorial shows you how to implement such a system by
using
Cloud Run functions ,
Cloud Storage ,
and
Sensitive Data Protection .
Objectives
Create Cloud Storage buckets to be used as part of the quarantine and
classification pipeline.
Create a Pub/Sub topic and subscription to notify you when file
processing is completed.
Create a simple Cloud Function that invokes the DLP API when
files are uploaded.
Upload some sample files to the quarantine bucket to invoke the Cloud
Function. The function uses the DLP API to inspect and classify
the files and move them to the appropriate bucket.
Costs
This tutorial uses billable Google Cloud components, including:
Cloud Storage
Cloud Run functions
Sensitive Data Protection
You can use the
Pricing Calculator
to generate a cost estimate based on your projected usage.
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
Enable the Cloud Run functions, Cloud Storage,Cloud Build Cloud Build, and Cloud Data Loss Prevention APIs.
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
Enable the Cloud Run functions, Cloud Storage,Cloud Build Cloud Build, and Cloud Data Loss Prevention APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Granting permissions to service accounts
Your first step is to grant permissions to two service accounts: the
Cloud Run functions service account and the
Cloud Data Loss Prevention Service Agent.
Grant permissions to the App Engine default service account
In the Google Cloud console, open the IAM & Admin page and select the
project you created:
Go to IAM
Locate the App Engine service account. This account has the
format [PROJECT_ID]@appspot.gserviceaccount.com . Replace [PROJECT_ID]
with your project ID.
Select the edit icon edit next to the
service account.
Add the following roles:
DLP Administrator
DLP API Service Agent
Click Save .
Grant permissions to the Cloud Data Loss Prevention Service Agent
The Cloud Data Loss Prevention Service Agent is created the first time it is
needed.
In Cloud Shell, create the Cloud Data Loss Prevention Service Agent by making a call to InspectContent :
curl --request POST
"https://dlp.googleapis.com/v2/projects/ PROJECT_ID /locations/us-central1/content:inspect"
--header "X-Goog-User-Project: PROJECT_ID "
--header "Authorization: Bearer $( gcloud auth print-access-token ) "
--header 'Accept: application/json'
--header 'Content-Type: application/json'
--data '{"item":{"value":"google@google.com"}}'
--compressed
Replace PROJECT_ID with your project ID .
In the Google Cloud console, open the IAM & Admin page and select
the project you created:
Go to IAM
Select the include Google-provided role grants checkbox
Locate the Cloud Data Loss Prevention Service Agent. This
account has the format
service-[PROJECT_NUMBER]@dlp-api.iam.gserviceaccount.com . Replace
[PROJECT_NUMBER] with your project number.
Select the edit icon edit next to the
service account.
Add the role Project > Viewer , and then click Save .
Building the quarantine and classification pipeline
In this section, you build the quarantine and classification pipeline shown in
the following diagram.
The numbers in this pipeline correspond to these steps:
You upload files to Cloud Storage.
You invoke a Cloud Function.
Sensitive Data Protection inspects and classifies the data.
The file is moved to the appropriate bucket.
Create Cloud Storage buckets
Following the guidance outlined in the
bucket naming guidelines ,
create three uniquely named buckets, which you use throughout this tutorial:
Bucket 1 : Replace [YOUR_QUARANTINE_BUCKET] with a unique name.
Bucket 2 : Replace [YOUR_SENSITIVE_DATA_BUCKET] with a unique name.
Bucket 3 : Replace [YOUR_NON_SENSITIVE_DATA_BUCKET] with a unique name.
console
In the Google Cloud console, open the Cloud Storage browser:
Go to Cloud Storage
Click Create bucket .
In the Bucket name text box, enter the name you selected for
[YOUR_QUARANTINE_BUCKET] , and then click Create .
Repeat for the [YOUR_SENSITIVE_DATA_BUCKET] and
[YOUR_NON_SENSITIVE_DATA_BUCKET] buckets.
gcloud
Open Cloud Shell:
Go to Cloud Shell
Create three buckets using the following commands:
gcloud storage buckets create gs://[YOUR_QUARANTINE_BUCKET]
gcloud storage buckets create gs://[YOUR_SENSITIVE_DATA_BUCKET]
gcloud storage buckets create gs://[YOUR_NON_SENSITIVE_DATA_BUCKET]
Create a Pub/Sub topic and subscription
console
Open the Pub/Sub Topics page:
Go to Pub/Sub topics
Click Create topic .
In the text box enter a topic name.
Select the Add a default subscription check box.
Click Create Topic .
gcloud
Open Cloud Shell:
Go to Cloud Shell
Create a topic, replacing [PUB/SUB_TOPIC] with a name of your choosing:
gcloud pubsub topics create [PUB/SUB_TOPIC]
Create a subscription, replacing [PUB/SUB_SUBSCRIPTION] with a name
of your choosing:
gcloud pubsub subscriptions create [PUB/SUB_SUBSCRIPTION] --topic [PUB/SUB_TOPIC]
Create the Cloud Run functions
This section steps through deploying the Python script containing the following
two Cloud Run functions:
A function that is invoked when an object is uploaded to
Cloud Storage.
A function that is invoked when a message is received in the
Pub/Sub queue.
The Python script that you use to complete this tutorial is contained in a GitHub repository
To create the first Cloud Function, you must enable the correct APIs.
To enable the APIs, do the following:
If you are working in the console, when you click Create function ,
you will see a guide on how to enable the APIs that you need to use
Cloud Functions.
If you are working in gcloud CLI, you must manually enable the
following APIs:
Artifact Registry API
Eventarc API
Cloud Run Admin API
Creating the first function
console
Open the Cloud Run functions Overview page:
Go to Cloud Run functions
Select the project for which you enabled Cloud Run functions.
Click Create function .
In the Function name box, replace the default name with create_DLP_job .
In the Trigger field, select Cloud Storage .
In Event type field select Finalize/Create .
In the Bucket field, click browse , select your quarantine bucket
by highlighting the bucket in the drop-down list, and then click
Select .
Click Save
Click Next
Under Runtime , select Python 3.7 .
Under Source code , check Inline editor .
Replace the text in the main.py box with the contents of the following file https://github.com/GoogleCloudPlatform/dlp-cloud-functions-tutorials/blob/master/gcs-dlp-classification-python/main.py .
Replace the following:
[PROJECT_ID_DLP_JOB & TOPIC] : the project ID that is hosting your Cloud Run function and Pub/Sub topic.
[YOUR_QUARANTINE_BUCKET] the name of the bucket you will be uploading the files to be processed to .
[YOUR_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be moving sensitive files to.
[YOUR_NON_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be uploading the files to be processed to.
[PUB/SUB_TOPIC] : the name of the Pub/Sub topic that you created earlier.
In the Entry point text box, replace the default text with the following:
create_DLP_job .
Replace the text in the requirements.txt text box with the contents of the following file: https://github.com/GoogleCloudPlatform/dlp-cloud-functions-tutorials/blob/master/gcs-dlp-classification-python/requirements.txt.
Click Deploy .
A green checkmark beside the function indicates a successful deployment.
gcloud
Open a Cloud Shell session and clone the GitHub repository
that contains the code and some sample data files:
OPEN IN Cloud Shell
Change directories to the folder the repository has been cloned to:
cd ~dlp-cloud-functions-tutorials/gcs-dlp-classification-python/
Make the following replacements in the
main.py file
[PROJECT_ID_DLP_JOB & TOPIC] : the project ID that is hosting your Cloud Run function and Pub/Sub topic.
[YOUR_QUARANTINE_BUCKET] : the name of the bucket you will be uploading the files to be processed to .
[YOUR_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be moving sensitive files to.
[YOUR_NON_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be uploading the files to be processed to.
[PUB/SUB_TOPIC : the name of the Pub/Sub topic that you created earlier.
Deploy the function, replacing [YOUR_QUARANTINE_BUCKET] with your
bucket name:
gcloud functions deploy create_DLP_job --runtime python37 \
--trigger-resource [YOUR_QUARANTINE_BUCKET] \
--trigger-event google.storage.object.finalize
Validate that the function has successfully deployed:
gcloud functions describe create_DLP_job
A successful deployment is indicated by a ready status similar to the
following:
status: READY
timeout: 60s
When the Cloud Function has successfully deployed, continue to the next section
to create the second Cloud Function.
Creating the second function
console
Open the Cloud Run functions Overview page:
GO TO THE Cloud Run functions OVERVIEW PAGE
Select the project for which you enabled Cloud Run functions.
Click Create function .
In the Function Name box, replace the default name with resolve_DLP .
In the Trigger field, select Pub/Sub .
In the Select a Cloud Pub/Sub Topic field, search for the Pub/Sub topic you created earlier.
Click Save
Click Next
Under Runtime , select Python 3.7 .
Under Source code , select Inline editor .
In the Entry point text box, replace the default text with
resolve_DLP .
Replace the text in the main.py box with the contents of the following file: https://github.com/GoogleCloudPlatform/dlp-cloud-functions-tutorials/blob/master/gcs-dlp-classification-python/main.py.
Make the following replacements
[PROJECT_ID_DLP_JOB & TOPIC] : the project ID that is hosting your Cloud Run function and Pub/Sub topic.
[YOUR_QUARANTINE_BUCKET] : the name of the bucket you will be uploading the files to be processed to .
[YOUR_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be moving sensitive files to.
[YOUR_NON_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be uploading the files to be processed to.
[PUB/SUB_TOPIC : the name of the Pub/Sub topic that you created earlier.
Click Deploy .
A green checkmark beside the function indicates a successful deployment.
gcloud
Open (or reopen) a Cloud Shell session and clone the GitHub
repository that contains the code and some sample data files:
OPEN IN Cloud Shell
Change directories to the folder with the Python code:
cd gcs-dlp-classification-python/
Make the following replacements in the main.py file:
[PROJECT_ID_DLP_JOB & TOPIC] : the project ID that is hosting your Cloud Run function and Pub/Sub topic.
[YOUR_QUARANTINE_BUCKET] : the name of the bucket you will be uploading the files to be processed to.
[YOUR_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be moving sensitive files to.
[YOUR_NON_SENSITIVE_DATA_BUCKET] : the name of the bucket you will be uploading the files to be processed to.
[PUB/SUB_TOPIC : the name of the Pub/Sub topic that you created earlier.
Deploy the function, replacing [PUB/SUB_TOPIC] with your
Pub/Sub topic:
gcloud functions deploy resolve_DLP --runtime python37 --trigger-topic [PUB/SUB_TOPIC]
Validate that the function has successfully deployed:
gcloud functions describe resolve_DLP
A successful deployment is indicated by a ready status similar to the
following:
status: READY
timeout: 60s
When the Cloud Function has successfully deployed, continue to the next section.
Upload sample files to the quarantine bucket
The GitHub repository associated with this article includes sample data files. The
folder contains some files that have sensitive data and other files that have
nonsensitive data. Sensitive data is classified as containing one or more of the
following INFO_TYPES values:
US_SOCIAL_SECURITY_NUMBER
EMAIL_ADDRESS
PERSON_NAME
LOCATION
PHONE_NUMBER
The data types that are used to classify the sample files are defined in the
INFO_TYPES constant in the main.py file, which is initially set to
'FIRST_NAME,PHONE_NUMBER,EMAIL_ADDRESS,US_SOCIAL_SECURITY_NUMBER' .
If you have not already cloned the repository, open Cloud Shell and
clone the GitHub repository that contains the code and some sample data
files:
OPEN IN Cloud Shell
Change folders to the sample data files:
cd ~/dlp-cloud-functions-tutorials/sample_data/
Copy the sample data files to the quarantine bucket by using the
cp command, replacing [YOUR_QUARANTINE_BUCKET] with the name of
your quarantine bucket:
gcloud storage cp * gs://[YOUR_QUARANTINE_BUCKET]/
Sensitive Data Protection inspects and classifies each file uploaded to
the quarantine bucket and moves it to the appropriate target bucket based
on its classification.
In the Cloud Storage console, open the Storage Browser page:
GO TO Cloud Storage BROWSER
Select one of the target buckets that you created earlier and review
the uploaded files. Also review the other buckets that you created.
Clean up
After you finish the tutorial, you can clean up the resources that you created so that they
stop using quota and incurring charges. The following sections describe how to delete or turn off
these resources.
Delete the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Try setting different
valid data type values
for INFO_TYPES .
Learn more about
inspecting storage and databases for sensitive data
using the Sensitive Data Protection.
Learn more about
Cloud Run functions .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
