---
title: "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial
  title: "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\
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
Stay organized with collections
Save and categorize content based on your preferences.
Remote functions and Translation API tutorial
This tutorial describes how to create a
BigQuery remote function ,
invoke the Cloud Translation API , and
perform content translation from any language to Spanish using SQL and Python.
Use cases for this function include the following:
Translate user comments on a website into a local language
Translate support requests from many languages into one common language for
support case workers
Objectives
Assign necessary roles to your account.
Create a Cloud Run functions function.
Create a BigQuery dataset.
Create a BigQuery connection and service account.
Grant permissions to the BigQuery service account.
Create a BigQuery remote function.
Call the BigQuery remote function.
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery
Cloud Run functions
Cloud Translation
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
We recommend that you create a Google Cloud project for this tutorial.
Also, make sure that you have the required roles to complete this tutorial.
Set up a Google Cloud project
To set up a Google Cloud project for this tutorial, complete these steps:
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
Enable the BigQuery, BigQuery Connection,
Cloud Translation, Cloud Run functions, Cloud Build, Cloud Logging,
Cloud Pub/Sub, Artifact Registry, and Cloud Run Admin APIs.
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
Enable the BigQuery, BigQuery Connection,
Cloud Translation, Cloud Run functions, Cloud Build, Cloud Logging,
Cloud Pub/Sub, Artifact Registry, and Cloud Run Admin APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles for your account
To get the permissions that
you need to perform the tasks in this tutorial,
ask your administrator to grant you the
following IAM roles on your project:
BigQuery Data Owner ( roles/bigquery.dataOwner )
BigQuery Connection Admin ( roles/bigquery.connectionAdmin )
Cloud Functions Developer ( roles/cloudfunctions.developer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to perform the tasks in this tutorial. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to perform the tasks in this tutorial:
bigquery.datasets.create
bigquery.connections.create
bigquery.connections.get
cloudfunctions.functions.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Required roles for the Compute Engine default service account
When you enabled the API for Cloud Run functions, a
Compute Engine default service account
was created. To complete this tutorial, you must give this
default service account the Cloud Translation API User role.
Get the ID assigned to the project .
Copy your Compute Engine default service account. Your default
service account looks like this:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your project ID.
In the Google Cloud console, go to the IAM page.
Go
to IAM
Select your project.
Click person_add
Grant access , and then in the New principals field, paste the
Compute Engine default service account that you copied earlier.
In the Assign roles list, search for and select
Cloud Translation API User .
Click Save .
Create a Cloud Run functions function
Using Cloud Run functions, create a function that translates input text into
Spanish.
Create a Cloud Run functions function
with the following specifications:
For Environment , select 2nd gen .
For Function name , enter translation-handler .
For Region , select us-central1 .
For Maximum number of instances , enter 10 .
This setting is in the Runtime, build, connections and security
settings section.
In this tutorial, we use a lower value than the default to control the
request rate sent to Translation.
For Runtime , select Python 3.10 .
For Entry point , enter handle_translation .
In the file list, select main.py , and then paste the following code.
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from __future__ import annotations
import flask
import functions_framework
from google.api_core.retry import Retry
from google.cloud import translate
# Construct a Translation Client object
translate_client = translate . TranslationServiceClient ()
# Register an HTTP function with the Functions Framework
@functions_framework . http
def handle_translation ( request : flask . Request ) - > flask . Response :
"""BigQuery remote function to translate input text.
Args:
request: HTTP request from BigQuery
https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#input_format
Returns:
HTTP response to BigQuery
https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#output_format
"""
try :
# Parse request data as JSON
request_json = request . get_json ()
# Get the project of the query
caller = request_json [ "caller" ]
project = extract_project_from_caller ( caller )
if project is None :
return flask . make_response (
flask . jsonify (
{
"errorMessage" : (
'project can \' t be extracted from "caller":' f " { caller } ."
)
}
),
400 ,
)
# Get the target language code, default is Spanish ("es")
context = request_json . get ( "userDefinedContext" , {})
target = context . get ( "target_language" , "es" )
calls = request_json [ "calls" ]
translated = translate_text ([ call [ 0 ] for call in calls ], project , target )
return flask . jsonify ({ "replies" : translated })
except Exception as err :
return flask . make_response (
flask . jsonify ({ "errorMessage" : f "Unexpected error { type ( err ) } : { err } " }),
400 ,
)
def extract_project_from_caller ( job : str ) - > str :
"""Extract project id from full resource name of a BigQuery job.
Args:
job: full resource name of a BigQuery job, like
"//bigquery.googleapi.com/projects/<project>/jobs/<job_id>"
Returns:
project id which is contained in the full resource name of the job.
"""
path = job . split ( "/" )
return path [ 4 ] if len ( path ) > 4 else None
def translate_text (
calls : list [ str ], project : str , target_language_code : str
) - > list [ str ]:
"""Translates the input text to specified language using Translation API.
Args:
calls: a list of input text to translate.
project: the project where the translate service will be used.
target_language_code: The ISO-639 language code to use for translation
of the input text. See
https://cloud.google.com/translate/docs/advanced/discovering-supported-languages-v3#supported-target
for the supported language list.
Returns:
a list of translated text.
"""
location = "<your location>"
parent = f "projects/ { project } /locations/ { location } "
# Call the Translation API, passing a list of values and the target language
response = translate_client . translate_text (
request = {
"parent" : parent ,
"contents" : calls ,
"target_language_code" : target_language_code ,
"mime_type" : "text/plain" ,
},
retry = Retry (),
)
# Convert the translated value to a list and return it
return [ translation . translated_text for translation in response . translations ]
Update <your location> with us-central1 .
In the file list, select requirements.txt , and then paste the following
text:
Flask==2.2.2
functions-framework==3.9.2
google-cloud-translate==3.18.0
Werkzeug==2.3.8
Click Deploy and wait for the function to deploy.
Click the Trigger tab.
Copy the Trigger URL value and save it for later. You must use this URL
when you create a BigQuery remote function.
Create a BigQuery dataset
Create a BigQuery dataset
that will contain the remote function. When you create the dataset, include
these specifications:
For Dataset ID , enter remote_function_test .
For Location type , select Multi-region .
For Multi-region , select US (multiple regions in United States) .
Create a BigQuery connection and service account
Create a BigQuery connection so that you can implement a
remote function with any supported languages in Cloud Run functions and
Cloud Run. When you create a connection, a service account is created
for that connection.
Create a Google Cloud resource connection
with the following specifications:
For Connection type , select BigLake and remote functions (Cloud Resource)
For Connection ID , enter remote-function-connection .
For Location type , select Multi-region .
For Multi-region , select US (multiple regions in United States) .
Open the Connections list
and select us.remote-function-connection .
Copy the service account ID and save it for later. You must grant
permissions to this ID in the next step.
Grant permissions to the BigQuery service account
The service account that you created in the previous step needs permission to use
Cloud Run so that the BigQuery remote function can use
the Cloud Run functions function. To grant permissions to the service account,
complete the following steps:
Go to the Cloud Run page.
Go to Cloud Run
Select your project.
Select the checkbox next to translation-handler .
In the Permissions panel, click Add principal .
In the New principals field, enter the service account ID that you
copied earlier.
In the Assign roles list, search for and select
Cloud Run Invoker .
Click Save .
Note: It can take up to a minute before new permissions take effect.
Create a BigQuery remote function
To use the Cloud Run functions function that translates text into Spanish
with a BigQuery remote function, complete the following steps.
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following query:
CREATE OR REPLACE FUNCTION `remote_function_test.translate_text` ( x STRING )
RETURNS
STRING
REMOTE WITH CONNECTION `us.remote-function-connection`
OPTIONS (
endpoint = ' TRIGGER_URL ' ,
max_batching_rows = 10 );
Replace TRIGGER_URL with the trigger URL that you
saved earlier when you created a Cloud Run functions function.
Click Run . A message similar to the following is displayed:
This statement created a new function named
your_project.remote_function_test.translate_text.
Note: To limit how many rows are included in an HTTP request, the
max_batching_rows option is set to 10 . When you do not specify the
max_batching_rows option, BigQuery decides how many rows are
included in an HTTP request.
Call the BigQuery remote function
After you create your remote function, test it to make sure that it is linked
to the Cloud Run functions function and produces the expected results in Spanish.
In the BigQuery query editor, enter the following query, and
then click Run .
SELECT
remote_function_test . translate_text ( 'This new feature is fantastic!' )
AS translated_text ;
The results are similar to the following:
+-------------------------------------------+
| translated_text |
+-------------------------------------------+
| ¡Esta nueva característica es fantástica! |
+-------------------------------------------+
Optional: To test the remote function on a public dataset, enter the
following query, and then click Run . To limit the results returned,
use the LIMIT clause.
SELECT
text ,
remote_function_test . translate_text ( text ) AS translated_text
FROM
( SELECT text FROM `bigquery-public-data.hacker_news.full` LIMIT 3 );
The results are similar to the following:
+---------------------------------------------------------------------------+
| text | translated_text |
+---------------------------------------------------------------------------+
| These benchmarks look good. | Estos puntos de referencia se ven bien. |
| Who is using Java? | ¿Quién está usando Java? |
| You need more database storage. | Necesitas más almacenamiento. |
+---------------------------------------------------------------------------+
Delete the resources
If you don't plan to use these functions in this project, you can avoid
additional costs by deleting your project. This permanently deletes all
resources associated with the project.
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
What's next
Learn how to use remote functions in BigQuery.
Learn about Translation .
Learn about Cloud Run functions .
Learn about Cloud Run .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
