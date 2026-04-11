---
title: "Create a healthcare search data store \_|\_ Vertex AI Search \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc
  title: "Create a healthcare search data store \_|\_ Vertex AI Search \_|\_ Google\
    \ Cloud Documentation"
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
Create a healthcare search data store
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
connect it to a healthcare search app, and query the clinical data.
Create a healthcare search app, create a healthcare data store and import FHIR R4 data into
the data store during the app creation process, and query the clinical data.
For more information, see Create a healthcare search app .
This page describes the first method.
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
Before you create the healthcare data store and import data into it,
understand the following:
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
Create a data store and import your data
You can create a data store and import your FHIR R4 data either in the
Google Cloud console or using the API with the following approaches:
You can create a static data store with a one-time batch import. For more
information, see
Create a static data store and perform a one-time batch import .
You can create a streaming data store with changes from your
Cloud Healthcare API FHIR store continuously streamed to your
Vertex AI Search data store. For more information, see
Create a streaming data store and set up a streaming import .
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
Create a static data store and perform a one-time batch import
This section describes how to create a Vertex AI Search data store in
which you can only perform batch imports. You can
import batch data when you first create the data store and
perform incremental batch imports whenever necessary.
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
In the navigation menu, click Data Stores .
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
REST
Create a data store.
curl -X POST\
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json"\
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores?dataStoreId= DATA_STORE_ID " \
-d '{
"displayName": " DATA_STORE_DISPLAY_NAME ",
"industryVertical": "HEALTHCARE_FHIR",
"solutionTypes": ["SOLUTION_TYPE_SEARCH"],
"searchTier": "STANDARD",
"searchAddOns": ["LLM"],
"healthcareFhirConfig":
{
"enableConfigurableSchema": CONFIGURABLE_SCHEMA_TRUE|FALSE
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
DATA_STORE_ID : the ID of the Vertex AI Search data store that you want to create. This ID can contain only lowercase
letters, digits, underscores, and hyphens.
DATA_STORE_DISPLAY_NAME : the display name of the Vertex AI
Search data store that you want to create.
CONFIGURABLE_SCHEMA_TRUE|FALSE : a boolean when
set to true lets you configure the data store schema using
the schema.update method.
Response
You should receive a JSON response similar to the following. If the value
for the done key is true , it indicates that the
operation to create the data store was completed. Otherwise, the data store
creation operation was unsuccessful.
{
"name": " OPERATION_ID ",
"done": true
}
If the source FHIR store and the target Vertex AI Search data store
are in the same Google Cloud project, call the following method to perform a
one-time batch import. If they're not in the same project, go to the next
step.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/dataStores/ DATA_STORE_ID /branches/0/documents:import" \
-d '{
"reconciliation_mode": "FULL",
"fhir_store_source": {"fhir_store": "projects/ PROJECT_ID /locations/ CLOUD_HEALTHCARE_DATASET_LOCATION /datasets/ CLOUD_HEALTHCARE_DATASET_ID /fhirStores/ FHIR_STORE_ID "}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
DATA_STORE_ID : the ID of the Vertex AI Search data store.
CLOUD_HEALTHCARE_DATASET_ID : the ID of the Cloud Healthcare API dataset that contains the source FHIR store.
CLOUD_HEALTHCARE_DATASET_LOCATION : the location of the Cloud Healthcare API dataset that contains the source FHIR store.
FHIR_STORE_ID : the ID of the Cloud Healthcare API FHIR R4 store.
Response
You should receive a JSON response similar to the following. The response
contains an identifier for a long-running operation. Long-running operations
are returned when method calls might take a substantial amount of time to
complete. Note the value of IMPORT_OPERATION_ID . You need this
value to verify the status of the import
or cancel an ongoing batch import .
{
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/operations/ IMPORT_OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata"
}
}
If the source FHIR store and the target Vertex AI Search data store
are in different Google Cloud projects, call the following method to perform
a one-time batch import. If they're in the same project, go back to the
previous step.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/dataStores/ DATA_STORE_ID /branches/0/documents:import" \
-d '{
"reconciliation_mode": "FULL",
"fhir_store_source": {"fhir_store": "projects/ SOURCE_PROJECT_ID /locations/ CLOUD_HEALTHCARE_DATASET_LOCATION /datasets/ CLOUD_HEALTHCARE_DATASET_ID /fhirStores/ FHIR_STORE_ID "}
}'
Replace the following:
PROJECT_ID : the ID of the Google Cloud
project that contains the Vertex AI Search data store.
DATA_STORE_ID : the ID of the Vertex AI Search data store.
SOURCE_PROJECT_ID : the ID of the Google Cloud
project that contains the Cloud Healthcare API dataset and FHIR store.
CLOUD_HEALTHCARE_DATASET_ID :
the ID of the Cloud Healthcare API dataset that contains the source FHIR store.
CLOUD_HEALTHCARE_DATASET_LOCATION :
the location of the Cloud Healthcare API dataset that contains the source FHIR store.
FHIR_STORE_ID : the ID of the Cloud Healthcare API FHIR R4 store.
Response
You should receive a JSON response similar to the following. The response
contains an identifier for a long-running operation. Long-running
operations are returned when method calls might take a substantial amount
of time to complete. Note the value of IMPORT_OPERATION_ID . You need
this value to
verify the status of the import .
{
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/operations/ IMPORT_OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata"
}
}
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
Create a data store
from google.api_core.client_options import ClientOptions
from google.cloud import discoveryengine
# TODO(developer): Uncomment these variables before running the sample.
# project_id = "YOUR_PROJECT_ID"
# location = "YOUR_LOCATION" # Values: "global"
# data_store_id = "YOUR_DATA_STORE_ID"
def create_data_store_sample (
project_id : str ,
location : str ,
data_store_id : str ,
) - > str :
# For more information, refer to:
# https://cloud.google.com/generative-ai-app-builder/docs/locations#specify_a_multi-region_for_your_data_store
client_options = (
ClientOptions ( api_endpoint = f " { location } -discoveryengine.googleapis.com" )
if location != "global"
else None
)
# Create a client
client = discoveryengine . DataStoreServiceClient ( client_options = client_options )
# The full resource name of the collection
# e.g. projects/{project}/locations/{location}/collections/default_collection
parent = client . collection_path (
project = project_id ,
location = location ,
collection = "default_collection" ,
)
data_store = discoveryengine . DataStore (
display_name = "My Data Store" ,
# Options: GENERIC, MEDIA, HEALTHCARE_FHIR
industry_vertical = discoveryengine . IndustryVertical . GENERIC ,
# Options: SOLUTION_TYPE_RECOMMENDATION, SOLUTION_TYPE_SEARCH, SOLUTION_TYPE_CHAT, SOLUTION_TYPE_GENERATIVE_CHAT
solution_types = [ discoveryengine . SolutionType . SOLUTION_TYPE_SEARCH ],
# TODO(developer): Update content_config based on data store type.
# Options: NO_CONTENT, CONTENT_REQUIRED, PUBLIC_WEBSITE
content_config = discoveryengine . DataStore . ContentConfig . CONTENT_REQUIRED ,
)
request = discoveryengine . CreateDataStoreRequest (
parent = parent ,
data_store_id = data_store_id ,
data_store = data_store ,
# Optional: For Advanced Site Search Only
# create_advanced_site_search=True,
)
# Make the request
operation = client . create_data_store ( request = request )
print ( f "Waiting for operation to complete: { operation . operation . name } " )
response = operation . result ()
# After the operation is complete,
# get information from operation metadata
metadata = discoveryengine . CreateDataStoreMetadata ( operation . metadata )
# Handle the response
print ( response )
print ( metadata )
return operation . operation . name
Import documents
from google.api_core.client_options import ClientOptions
from google.cloud import discoveryengine
# TODO(developer): Uncomment these variables before running the sample.
# project_id = "YOUR_PROJECT_ID"
# location = "YOUR_LOCATION" # Values: "us"
# data_store_id = "YOUR_DATA_STORE_ID"
# healthcare_project_id = "YOUR_HEALTHCARE_PROJECT_ID"
# healthcare_location = "YOUR_HEALTHCARE_LOCATION"
# healthcare_dataset_id = "YOUR_HEALTHCARE_DATASET_ID"
# healthcare_fihr_store_id = "YOUR_HEALTHCARE_FHIR_STORE_ID"
# For more information, refer to:
# https://cloud.google.com/generative-ai-app-builder/docs/locations#specify_a_multi-region_for_your_data_store
client_options = (
ClientOptions ( api_endpoint = f " { location } -discoveryengine.googleapis.com" )
if location != "global"
else None
)
# Create a client
client = discoveryengine . DocumentServiceClient ( client_options = client_options )
# The full resource name of the search engine branch.
# e.g. projects/{project}/locations/{location}/dataStores/{data_store_id}/branches/{branch}
parent = client . branch_path (
project = project_id ,
location = location ,
data_store = data_store_id ,
branch = "default_branch" ,
)
request = discoveryengine . ImportDocumentsRequest (
parent = parent ,
fhir_store_source = discoveryengine . FhirStoreSource (
fhir_store = client . fhir_store_path (
healthcare_project_id ,
healthcare_location ,
healthcare_dataset_id ,
healthcare_fihr_store_id ,
),
),
# Options: `FULL`, `INCREMENTAL`
reconciliation_mode = discoveryengine . ImportDocumentsRequest . ReconciliationMode . INCREMENTAL ,
)
# Make the request
operation = client . import_documents ( request = request )
print ( f "Waiting for operation to complete: { operation . operation . name } " )
response = operation . result ()
# After the operation is complete,
# get information from operation metadata
metadata = discoveryengine . ImportDocumentsMetadata ( operation . metadata )
# Handle the response
print ( response )
print ( metadata )
What's next
Verify the data store creation and FHIR data import .
Cancel an ongoing batch import .
Update your data store schema .
Create a streaming data store and set up a streaming import
This section describes how to create a streaming Vertex AI Search data
store that continuously streams changes from your Cloud Healthcare API FHIR
store.
Note: If you have set up Pub/Sub notifications for your FHIR resources
in Cloud Healthcare API, the Cloud Healthcare API doesn't send notifications when
a FHIR resource is imported from Cloud Storage. For more information, see FHIR
Pub/Sub notifications .
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
In the navigation menu, click Data Stores .
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
REST
Create a data connector to set up streaming.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1alpha/projects/ PROJECT_ID /locations/us:setUpDataConnector" \
-d ' {
"collectionId": " COLLECTION_ID ",
"collectionDisplayName": " COLLECTION_NAME ",
"dataConnector": {
"dataSource": "gcp_fhir",
"params": {
"instance_uri": "projects/ SOURCE_PROJECT_ID /locations/ CLOUD_HEALTHCARE_DATASET_LOCATION /datasets/ CLOUD_HEALTHCARE_DATASET_ID "
},
"entities": [
{
"entityName": " FHIR_STORE_NAME "
"healthcareFhirConfig": {
"enableConfigurableSchema": CONFIGURABLE_SCHEMA_TRUE|FALSE ,
"enableStaticIndexingForBatchIngestion": STATIC_INDEXING_TRUE|FALSE
}
}
],
"syncMode": "STREAMING"
}
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
COLLECTION_ID : the ID of the collection to
which you want to stream the FHIR R4 data.
COLLECTION_NAME : name of the collection to
which you want to stream the FHIR R4 data.
SOURCE_PROJECT_ID : the ID of the Google Cloud
project that contains the Cloud Healthcare API dataset and FHIR store.
CLOUD_HEALTHCARE_DATASET_ID :
the ID of the Cloud Healthcare API dataset that contains the source FHIR store.
CLOUD_HEALTHCARE_DATASET_LOCATION :
the location of the Cloud Healthcare API dataset that contains the source FHIR store.
FHIR_STORE_ID : the ID of the Cloud Healthcare API FHIR R4 store.
CONFIGURABLE_SCHEMA_TRUE|FALSE : a boolean when
set to true lets you configure the data store schema using
the schema.update method.
STATIC_INDEXING_TRUE|FALSE : a boolean when
set to true let you import historical data with higher
indexing quota. This is useful when you expect your search app to
encounter higher data volume. However, individual records take longer to be
indexed. Google strongly recommends that you set this field to
true .
Response
You should receive a JSON response similar to the following. If the value
for the done key is true , it indicates that the
operation to create the data store was completed. Otherwise, the data store
creation operation was unsuccessful.
{
"name": " OPERATION_ID ",
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.discoveryengine.v1main.DataConnector"
}
}
If the collection is successfully created, a data connector is added to
the list of data stores on
the Data Stores page in the Google Cloud console.
The created data connector contains an entity, which has the same name as
the FHIR R4 store from which you're streaming the data.
What's next
Verify the data store creation and FHIR data import .
Update your data store schema .
Pause or resume streaming .
Verify data store creation and FHIR data import
This task shows you how to verify whether a data store was created
successfully and whether FHIR data was imported into the data store successfully.
In the Google Cloud console: Select the data store and verify its details.
Through the REST API:
Use the
dataStores.get
method to get the healthcare data store details.
Use the
operations.get
method to get the details of the import operation.
To verify data store creation and data import, complete the following steps.
Console
In the Google Cloud console, go to the AI Applications page.
AI Applications
In the navigation menu, click Data Stores .
The Data Stores page displays a list of data stores in your Google Cloud
project with their details.
Verify whether the data store or the data connector that you created is in
the data stores list. In the data stores list, a data connector that streams
data contains a data store that has the same name as the Cloud Healthcare API
FHIR store.
Select the data store or the data connector and verify its details.
For a data store:
The summary table lists the following details:
The data store ID, type, and region.
The number of documents indicating the number of FHIR resources imported.
The timestamp when the last document was imported.
Optionally, click View details to see the document import details, such
as the details about a successful, partial, or failed import.
The Documents tab lists the resource IDs of the imported FHIR resources
and their resource types in a paginated table. You can filter this table to
verify whether a particular resource was imported.
The Activity tab lists the document import details, such as the details
about a successful, partial, or failed import.
For a data connector:
The summary table lists the following details:
The collection ID, type, and region.
The name of the connected app.
The state of the connector, which is either active or paused.
The Entities table shows the entity within the data connector.
The entity's name is the source FHIR store name. The entity's ID is
the data connector's ID appended with the source FHIR store name.
Click the entity name to see its details. Because an
entity is a data store instance within a data connector, the
entity details are the same as a data store details.
In the Schema tab, view the properties for the supported FHIR resources
and elements. Click Edit to configure the schema.
REST
Verify the data store creation.
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json"\
-H "X-Goog-User-Project: PROJECT_ID " \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ DATA_STORE_ID "
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
DATA_STORE_ID : the ID of the Vertex AI Search data store.
Response
You should receive a JSON response similar to the following. The response
contains details of the created data store.
{
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ DATA_STORE_ID ",
"displayName": " DATA_STORE_DISPLAY_NAME ",
"industryVertical": "HEALTHCARE_FHIR",
"createTime": " DATA_STORE_CREATION_TIMESTAMP ",
"solutionTypes": [
"SOLUTION_TYPE_SEARCH"
],
"defaultSchemaId": "default_schema",
"documentProcessingConfig": {
"defaultParsingConfig": {
"ocrParsingConfig": {}
}
}
}
Verify whether the FHIR data import operation is complete.
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/operations/ IMPORT_OPERATION_ID "
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
DATA_STORE_ID : the ID of the Vertex AI Search data store.
IMPORT_OPERATION_ID : the operation ID of the long-running operation that's returned when you call the import method
Response
You should receive a JSON response similar to the following.
The import operation is a long-running operation. While the operation is
running, the response contains the following fields:
successCount : indicates the number of FHIR resources that were imported successfully so far.
failureCount : indicates the number of FHIR resources that failed to be imported so far. This field is displayed only if there are FHIR resources that failed to be imported.
When the operation is complete, the response contains the following fields:
successCount : indicates the number of FHIR resources that were imported successfully.
failureCount : indicates the number of FHIR resources that failed to be imported. This field is displayed only if there are any FHIR resources that failed to be imported.
totalCount : indicates the number of FHIR resources that are present in the source FHIR store. This field is displayed only if there are any FHIR resources that failed to be imported.
done : has the value true to indicate that the import operation is complete.
errorSamples : provides information about the resources that failed to be imported. This field is displayed only if there are any FHIR resources that failed to be imported.
errorConfig : provides a path to a Cloud Storage location that contains the error summary log file.
{
"name": "projects/ PROJECT_ID /locations/us/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/operations/ IMPORT_OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata",
"createTime": " START_TIMESTAMP ",
"updateTime": " END_TIMESTAMP ",
"successCount": " SUCCESS_COUNT ",
"failureCount": " FAILURE_COUNT ",
"totalCount": " TOTAL_COUNT ",
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsResponse",
"errorSamples": [ ERROR_SAMPLE ],
"errorConfig": {
"gcsPrefix": " LOG_FILE_LOCATION "
}
}
}
What's next
Create a healthcare search app and connect your data store to it.
Search for healthcare data in your healthcare search app.
Refresh healthcare data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
