---
title: "Create a healthcare search app \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc
  title: "Create a healthcare search app \_|\_ Vertex AI Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Create a healthcare search app
Stay organized with collections
Save and categorize content based on your preferences.
Caution:
Restrictions for healthcare: As a customer, you will not, and will
not allow End Users to, use the Generative AI Services for clinical
purposes (for clarity, non-clinical research, scheduling, or other
administrative tasks is not restricted), as a substitute for
professional medical advice, or in any manner that is overseen by or
requires clearance or approval from any applicable regulatory
authority. For more information, see
Service Specific Terms .
For clarity, with respect to the use of Vertex AI Search to retrieve and
summarize existing medical information, the restriction on the use for clinical
purposes means the restriction on the use for direct diagnosis or treatment purposes without review by
a licensed professional in compliance with applicable laws and regulations.
The generated output may not always be completely reliable. Due to the
nature of LLMs and Generative AI, outputs may have incorrect or biased
(for example, stereotypes or other harmful content) information and
should be reviewed. All summaries or answers should be considered draft
and not final.
This product's intended usage is not to provide information pertaining
to the prevention, diagnosis or treatment of illness or disease.
Questions regarding diagnosis or treatment recommendations are not
intended to be addressed by the product. This product's intended use is
to retrieve and summarize existing medical information provided by
users.
Due to limited test data, this product may or may not be applicable to age
group 0-18 and to age group 85 and above. Therefore, when reviewing the generated output,
customers must consider the representativeness of subpopulations within their
source data.
To search clinical data in Vertex AI Search, you can follow one of
these workflows:
Create a healthcare data store, import FHIR R4 data into the data store,
connect it to a healthcare search app, and query the clinical data. For more
information, see Create a healthcare data store .
Create a healthcare search app, create a healthcare data store and import FHIR R4 data into
the data store during the app creation process, and query the clinical data.
This page describes the second method.
About data import frequency
You can import FHIR R4 data into a data store in the following ways:
Batch import : a one-time import. Data is
imported into a data store in batches. For further incremental imports, see
Refresh healthcare data .
Streaming import : a near real-time streaming
data import. Any incremental changes in the source FHIR store are synchronized
in the Vertex AI Search data store. Streaming requires a data
connector , which is a type of a data store. To create a data connector, you
must set up a collection. A data connector contains an entity , which is also
a data store instance.
You can also pause and resume streaming and perform
manual synchronization whenever necessary. For more information, see
Manage a healthcare search data store .
The data streaming rate for a given Google Cloud project is
dependent on the following quotas. If you exceed the quota you might
experience streaming delays.
The number of pending FHIR or BigQuery streaming writes per minute.
For more information, see Quotas and limits .
The number of FHIR read operations per minute per region. For more information,
see Cloud Healthcare API FHIR quotas .
You can select the data import frequency at the time of data store creation and
you can't change this configuration later.
Before you begin
Before you create the healthcare search app, understand the following:
The relationship between apps and data stores for healthcare search.
For more information, see
About apps and data stores .
The preparation of your FHIR data for ingestion .
Vertex AI Search for healthcare provides search services only in the
US multi-region ( us ). Therefore, your healthcare search app and data stores
must reside in the us multi-region.
If you're importing healthcare data from a Cloud Healthcare API FHIR store in
one Google Cloud project to a Vertex AI Search data store in a
different Google Cloud project and you're using VPC Service Controls, the two
projects must be in the same perimeter .
Create an app
You can create a healthcare search app either in the Google Cloud console or using the
API.
To create a healthcare search app, follow these steps:
Permissions required for this task
Grant the following Identity and Access Management (IAM) roles to the
service- PROJECT_NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com
service account in the project that contains the Vertex AI Search data store:
Purpose
Roles
To perform a one-time batch import of FHIR data from FHIR stores in Cloud Healthcare API.
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery data Editor ( roles/bigquery.dataEditor )
Healthcare FHIR Store Administrator ( roles/healthcare.fhirStoreAdmin )
To perform a streaming import of FHIR data from FHIR stores in Cloud Healthcare API in the same Google Cloud project.
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery data Editor ( roles/bigquery.dataEditor )
Healthcare FHIR Store Administrator ( roles/healthcare.fhirStoreAdmin )
Healthcare FHIR Resource Reader ( roles/healthcare.fhirResourceReader )
To perform a streaming import of FHIR data from FHIR stores in Cloud Healthcare API in a different Google Cloud project.
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery data Editor ( roles/bigquery.dataEditor )
Healthcare FHIR Store Administrator ( roles/healthcare.fhirStoreAdmin )
Healthcare FHIR Resource Reader ( roles/healthcare.fhirResourceReader )
To import FHIR data that references files in Cloud Storage. These are granted by default
if the referenced files are in the same Google Cloud project as the Vertex AI Search app.
Storage Object Admin ( roles/storage.objectAdmin )
To customize the schema when creating a data store to configure the indexability,
searchability, and retrievability of FHIR resources and elements.
Storage Object Admin ( roles/storage.objectAdmin )
Grant the following Identity and Access Management roles to the
service- PROJECT_NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com
service account in the project that contains the Cloud Healthcare API FHIR R4 data store:
Purpose
Roles
To perform a streaming import of FHIR data from FHIR stores in Cloud Healthcare API in a different Google Cloud project.
Healthcare FHIR Store Administrator ( roles/healthcare.fhirStoreAdmin )
Healthcare FHIR Resource Reader ( roles/healthcare.fhirResourceReader )
Grant the following Identity and Access Management roles to the
service- SOURCE_PROJECT_NUMBER @gcp-sa-healthcare.iam.gserviceaccount.com
service account in the project that contains the Cloud Healthcare API FHIR R4 data store:
Purpose
Roles
To perform a streaming import of FHIR data from FHIR stores in Cloud Healthcare API in the same Google Cloud project.
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery data Editor ( roles/bigquery.dataEditor )
To customize the schema when creating a data store to configure the indexability,
searchability, and retrievability of FHIR resources and elements.
Storage Object Admin ( roles/storage.objectAdmin )
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
On the Apps page, click add_box New app .
On the Create App page, under Healthcare search , click Create .
In the Search app configuration pane, select Healthcare .
To turn on generative responses that use advanced LLM features for this app,
click the Generative responses toggle to on position.
When you activate generative responses, it can take up to five minutes for the
supported features to become available.
In the Your app name field, enter a name for your app.
In the External name of your company or organization field, enter the
common name for your company or organization. You don't need to include
suffixes such as Inc or LLC. This field is useful for the LLM to identify
the company that the app represents.
In the Access Transparency section, select Disable search metrics
for this app to turn off logging metrics for the current app. This can't
be changed after the app is created.
Click Continue .
To connect to a data store, on the Data Stores page, do one of the following:
Select an existing healthcare data store for batch import or an
existing data connector for streaming import. To create a data store or a
data connector before creating an app, see
Create a healthcare data store .
Create a data store (for one-time batch import) or a data connector, which is an instance of a data store (for streaming import):
Click add_box Create data store .
In the Select a data source pane, select Healthcare API (FHIR) as your data source.
To import data from your FHIR store, do one of the following:
Select the FHIR store from the list of available FHIR stores:
Expand the FHIR store field.
In this list, select a dataset that resides in a
permitted location and
then select a FHIR store that uses FHIR version R4.
Enter the FHIR store manually:
Expand the FHIR store field.
Click Enter FHIR store manually .
In the FHIR store name dialog, enter the full name of the FHIR store in the following format:
project/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID
Click Save .
In the Synchronization section, select one of the following options.
This selection cannot be changed after the data store is created.
One time : to perform a one-time batch data import. For further
incremental imports, see Refresh healthcare data .
Streaming : to perform a near real-time streaming data import. To
stream data, you must create a data connector, which is a type of a
data store. To set up a streaming data store
using the REST API, contact your customer engineer.
In the What is the schema for this data? section, select one of
these options:
Google predefined schema : to retain the Google-defined schema configurations, such as
indexability, searchability, and retrievability, for the supported
FHIR resources and elements. After you select this option, you cannot
update the schema after you create the data store. If you want to be
able to change the schema after the data store creation, select the
Custom schema option.
Click Continue .
In the Your data store name field, enter a name for your data store.
Click Create .
The data store you created is listed on the Data Stores page.
Custom schema : to define your own schema configurations, such as
indexability, searchability, and retrievability, for the supported
FHIR resources and elements. To set up a configurable
schema, contact your customer engineer.
Click Continue .
Review the schema, expand each field, and edit the field
settings.
Click Add new fields to add new fields on the
supported FHIR resources. You cannot remove the fields provided
in the Google-defined schema.
Click Continue .
In the Your data connector name field, enter a name for your data connector.
Click Create .
The data connector you created is listed on the Data Stores page.
The source FHIR store is added as an entity within the data
connector.
Click Continue .
Select the created data store or data connector.
Optional: To see a list of unavailable data stores, click Learn why .
A table is displayed with a list of data stores and the reason why they are
unavailable. Here are some of the reasons why a data store might be
unavailable:
Your data store type allows connection to only one app and the data
store is already connected.
Your data store and your app are of different types. For example, you
you can't connect a website search data store to a healthcare search
app.
Click Create .
If the app and its data store are created successfully,
the data store details page displays the details of the imported FHIR data.
REST
Create a healthcare data store and import healthcare data into it .
Create a healthcare search app and connect it to a data store. A healthcare search app can only
connect to one data store, whereas a given data store can be connected to
several apps.
Key Term: In Vertex AI Search, the term app can be used
interchangeably with the term engine in the context of APIs.
curl -X POST\
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json"\
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/collections/default_collection/engines?engineId= APP_ID " \
-d '{
"displayName": " APP_DISPLAY_NAME ",
"dataStoreIds":" DATA_STORE_ID ",
"industryVertical": "HEALTHCARE_FHIR",
"solutionType": "SOLUTION_TYPE_SEARCH",
"searchEngineConfig": {
"searchTier": "SEARCH_TIER_STANDARD",
"searchAddOns": [" SEARCH_ADD_ON "]
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
APP_ID : the ID of the Vertex AI Search app that you want to create.
APP_DISPLAY_NAME : the display name of the Vertex AI Search app that you want to create.
DATA_STORE_ID : the ID of an existing Vertex AI Search data store
that you want to add to the Vertex AI Search app.
SEARCH_ADD_ON : an optional field to specify
whether you want the advanced LLM features, such as searching with generative
AI answers , for this app. To activate advanced LLM features, enter the
value SEARCH_ADD_ON_LLM .
If you don't want Advanced LLM features, then either specify
SEARCH_ADD_ON_UNSPECIFIED or remove the
searchAddOns field.
For more information, see Advanced
LLM features .
Response
You should receive a JSON response similar to the following. If the value
for the done field is true , it indicates that the
operation to create the app was completed. If it is false , the app
creation operation was unsuccessful.
{
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/operations/ APP_CREATION_OPERATION_ID ",
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.discoveryengine.v1.Engine",
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/engines/ APP_ID ",
"displayName": " APP_DISPLAY_NAME ",
"dataStoreIds": [
" DATA_STORE_ID "
],
"solutionType": "SOLUTION_TYPE_SEARCH",
"searchEngineConfig": {
"searchTier": "SEARCH_TIER_STANDARD",
"searchAddOns": [
" SEARCH_ADD_ON_LLM "
]
},
"industryVertical": "HEALTHCARE_FHIR"
}
}
Verify app creation
This task shows you how to verify whether a healthcare search app was created
successfully and whether FHIR data was imported into the data store successfully.
In the Google Cloud console: Select the app and verify its details.
Through the REST API, use the
engines.get
method to get the healthcare data store details.
To verify data store creation and data import, complete the following steps.
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
On the Apps page, verify whether the app that you created is in the apps
list.
Verify that the data store that you connected to the app is listed in the
Connected data stores table.
Select the data store and
verify the data store details .
REST
Verify the app creation.
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json"\
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/collections/default_collection/engines/ APP_ID "
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
APP_ID : the ID of the Vertex AI Search app.
Response
You should receive a JSON response similar to the following. The response
contains details of the created app.
{
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/engines/ APP_ID ",
"displayName": " APP_DISPLAY_NAME ",
"createTime": " APP_CREATION_TIMESTAMP ",
"dataStoreIds": [
" DATA_STORE_ID "
],
"solutionType": "SOLUTION_TYPE_SEARCH",
"searchEngineConfig": {
"searchTier": "SEARCH_TIER_STANDARD",
"searchAddOns": [
"SEARCH_ADD_ON_LLM"
]
},
"industryVertical": "HEALTHCARE_FHIR",
"dataStores": [
"projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ APP_ID "
]
}
Verify data store creation and FHIR data import .
What's next
Search for healthcare data in your healthcare search app.
Refresh healthcare data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
