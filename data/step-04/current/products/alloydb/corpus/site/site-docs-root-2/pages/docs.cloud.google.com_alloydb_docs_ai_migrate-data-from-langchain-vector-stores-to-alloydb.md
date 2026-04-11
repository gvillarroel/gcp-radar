---
title: "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb
  title: "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Migrate data from a vector database to AlloyDB
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial describes how to migrate data from a third-party vector database
to AlloyDB for PostgreSQL using a LangChain VectorStore.
This tutorial assumes that the data in third-party vector databases was created
using a LangChain VectorStore integration. If you put information into one of
the following databases without using LangChain, you might need to edit the
below provided scripts to match your data's schema.
The following vector databases are supported:
Pinecone
Weaviate
Chroma
Qdrant
Milvus
Note: This tutorial uses default values from the supported LangChain vector
stores. To migrate custom databases, you might need to update the data fields
specified in this document.
This tutorial assumes that you're familiar with Google Cloud,
AlloyDB, and asynchronous Python programming.
Objectives
This tutorial shows you how to do the following:
Extract data from an existing vector database.
Connect to AlloyDB.
Initialize the AlloyDB table.
Initialize a vector store object.
Run the migration script to insert the data.
Costs
In this document, you use the following billable components of Google Cloud:
AlloyDB for PostgreSQL
You might be eligible for a free trial cluster. For more information, see
AlloyDB free trial clusters overview .
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Make sure that you have one of the following LangChain third-party
database vector stores:
Pinecone
Weaviate
Chroma
Qdrant
Milvus
Enable billing and required APIs
In the Google Cloud console, on the project selector page, select or create a
Google Cloud project.
Note: If you don't plan to keep the resources that you create in this
tutorial, create a project instead of selecting an existing project. After
you finish these steps, you can delete the project, removing all resources
associated with the project.
Go to project selector
Make sure that billing is enabled for your Google Cloud project .
Enable the Cloud APIs necessary to create and connect to AlloyDB for PostgreSQL.
Enable
the APIs
In the Confirm project step, click Next to confirm the name of the project you are going to make changes to.
In the Enable APIs step, click Enable to enable the following:
AlloyDB API
Compute Engine API
Service Networking API
Required roles
To get the permissions that you need to complete the tasks in this tutorial,
have the following Identity and Access Management (IAM) roles which allow for table
creation and data insertion:
Owner ( roles/owner ) or Editor ( roles/editor )
If the user is not an owner or editor, the following IAM roles
and PostgreSQL privileges are required:
AlloyDB Instance Client ( roles/alloydb.client )
Cloud AlloyDB Admin ( roles/alloydb.admin )
Compute Network User ( roles/compute.networkUser )
If you want to authenticate to your database using IAM
authentication instead of using the built-in authentication in this tutorial, use
the notebook that shows how to
use AlloyDB for PostgreSQL to store vector embeddings with the AlloyDBVectorStore class .
Create an AlloyDB cluster and user
Create an AlloyDB cluster and an instance .
Enable Public IP to run this tutorial from anywhere. If you're
using Private IP, you must run this tutorial from within your VPC.
Create or select an AlloyDB database user .
When you create the instance, a postgres user is created with
a password. This user has superuser permissions.
This tutorial uses built-in authentication to reduce any
authentication friction. IAM authentication is possible
using the
AlloyDBEngine .
Retrieve the code sample
Copy the code sample from GitHub by cloning the repository:
git clone https://github.com/googleapis/langchain-google-alloydb-pg-python.git
Navigate to the migrations directory:
cd langchain-google-alloydb-pg-python/samples/migrations
Extract data from an existing vector database
Note: You might need to modify the code examples in this section based on your
use case.
Create a client.
Pinecone
from pinecone import Pinecone # type: ignore
pinecone_client = Pinecone ( api_key = pinecone_api_key )
pinecone_index = pinecone_client . Index ( pinecone_index_name )
Weaviate
import weaviate
# For a locally running weaviate instance, use `weaviate.connect_to_local()`
weaviate_client = weaviate . connect_to_weaviate_cloud (
cluster_url = weaviate_cluster_url ,
auth_credentials = weaviate . auth . AuthApiKey ( weaviate_api_key ),
)
Chroma
from langchain_chroma import Chroma
chromadb_client = Chroma (
collection_name = chromadb_collection_name ,
embedding_function = embeddings_service ,
persist_directory = chromadb_path ,
)
Qdrant
from qdrant_client import QdrantClient
qdrant_client = QdrantClient ( path = qdrant_path )
Milvus
milvus_client = MilvusClient ( uri = milvus_uri )
Get all the data from the database.
Pinecone
Retrieve vector IDs from the Pinecone index:
results = pinecone_index . list_paginated (
prefix = "" , namespace = pinecone_namespace , limit = pinecone_batch_size
)
ids = [ v . id for v in results . vectors ]
if ids : # Prevents yielding an empty list.
yield ids
# Check BOTH pagination and pagination.next
while results . pagination is not None and results . pagination . get ( "next" ) is not None :
pagination_token = results . pagination . get ( "next" )
results = pinecone_index . list_paginated (
prefix = "" ,
pagination_token = pagination_token ,
namespace = pinecone_namespace ,
limit = pinecone_batch_size ,
)
# Extract and yield the next batch of IDs
ids = [ v . id for v in results . vectors ]
if ids : # Prevents yielding an empty list.
yield ids
And then fetch records by ID from the Pinecone index:
import uuid
# Iterate through the IDs and download their contents
for ids_batch in id_iterator :
all_data = pinecone_index . fetch ( ids = ids_batch , namespace = pinecone_namespace )
ids = []
embeddings = []
contents = []
metadatas = []
# Process each vector in the current batch
for doc in all_data . vectors . values ():
# You might need to update this data translation logic according to one or more of your field names
if pinecone_id_column_name in doc . metadata :
# pinecone_id_column_name stores the unqiue identifier for the content
ids . append ( doc [ pinecone_id_column_name ])
else :
# Generate a uuid if pinecone_id_column_name is missing in source
ids . append ( str ( uuid . uuid4 ()))
# values is the vector embedding of the content
embeddings . append ( doc . values )
# Check if pinecone_content_column_name exists in metadata before accessing
if pinecone_content_column_name in doc . metadata :
# pinecone_content_column_name stores the content which was encoded
contents . append ( str ( doc . metadata [ pinecone_content_column_name ]))
# Remove pinecone_content_column_name after processing
del doc . metadata [ pinecone_content_column_name ]
else :
# Handle the missing pinecone_content_column_name field appropriately
contents . append ( "" )
# metadata is the additional context
metadatas . append ( doc . metadata )
# Yield the current batch of results
yield ids , contents , embeddings , metadatas
Weaviate
# Iterate through the IDs and download their contents
weaviate_collection = weaviate_client . collections . get ( weaviate_collection_name )
ids : list [ str ] = []
content : list [ Any ] = []
embeddings : list [ list [ float ]] = []
metadatas : list [ Any ] = []
for item in weaviate_collection . iterator ( include_vector = True ):
# You might need to update this data translation logic according to one or more of your field names
# uuid is the unqiue identifier for the content
ids . append ( str ( item . uuid ))
# weaviate_text_key is the content which was encoded
content . append ( item . properties [ weaviate_text_key ])
# vector is the vector embedding of the content
embeddings . append ( item . vector [ "default" ]) # type: ignore
del item . properties [ weaviate_text_key ] # type: ignore
# properties is the additional context
metadatas . append ( item . properties )
if len ( ids ) > = weaviate_batch_size :
# Yield the current batch of results
yield ids , content , embeddings , metadatas
# Reset lists to start a new batch
ids = []
content = []
embeddings = []
metadatas = []
Note: Update WEAVIATE_COLLECTION_NAME with the collection name and update
WEAVIATE_TEXT_KEY with the field name in the Weaviate schema containing
text content. If you have multiple collections, run the migration for each
collection.
Chroma
# Iterate through the IDs and download their contents
offset = 0
while True :
# You might need to update this data translation logic according to one or more of your field names
# documents is the content which was encoded
# embeddings is the vector embedding of the content
# metadatas is the additional context
docs = chromadb_client . get (
include = [ "metadatas" , "documents" , "embeddings" ],
limit = chromadb_batch_size ,
offset = offset ,
)
if len ( docs [ "documents" ]) == 0 :
break
# ids is the unqiue identifier for the content
yield docs [ "ids" ], docs [ "documents" ], docs [ "embeddings" ] . tolist (), docs [
"metadatas"
]
offset += chromadb_batch_size
Qdrant
# Iterate through the IDs and download their contents
offset = None
while True :
docs , offset = qdrant_client . scroll (
collection_name = qdrant_collection_name ,
with_vectors = True ,
limit = qdrant_batch_size ,
offset = offset ,
with_payload = True ,
)
ids : List [ str ] = []
contents : List [ Any ] = []
embeddings : List [ List [ float ]] = []
metadatas : List [ Any ] = []
for doc in docs :
if doc . payload and doc . vector :
# You might need to update this data translation logic according to one or more of your field names
# id is the unqiue identifier for the content
ids . append ( str ( doc . id ))
# page_content is the content which was encoded
contents . append ( doc . payload [ "page_content" ])
# vector is the vector embedding of the content
embeddings . append ( doc . vector ) # type: ignore
# metatdata is the additional context
metadatas . append ( doc . payload [ "metadata" ])
yield ids , contents , embeddings , metadatas
if not offset :
break
Note: Update QDRANT_COLLECTION_NAME with the collection
name. If you have multiple collections, run the migration for each
collection.
Milvus
# Iterate through the IDs and download their contents
iterator = milvus_client . query_iterator (
collection_name = milvus_collection_name ,
filter = 'pk >= "0"' ,
output_fields = [ "pk" , "text" , "vector" , "idv" ],
batch_size = milvus_batch_size ,
)
while True :
ids = []
content = []
embeddings = []
metadatas = []
page = iterator . next ()
if len ( page ) == 0 :
iterator . close ()
break
for i in range ( len ( page )):
# You might need to update this data translation logic according to one or more of your field names
doc = page [ i ]
# pk is the unqiue identifier for the content
ids . append ( doc [ "pk" ])
# text is the content which was encoded
content . append ( doc [ "text" ])
# vector is the vector embedding of the content
embeddings . append ( doc [ "vector" ])
del doc [ "pk" ]
del doc [ "text" ]
del doc [ "vector" ]
# doc is the additional context
metadatas . append ( doc )
yield ids , content , embeddings , metadatas
Note: Update MILVUS_COLLECTION_NAME with the collection name. If you
have multiple collections, run the migration for each collection.
Initialize the AlloyDB table
Note: You might need to modify the code examples in this section based on your
use case.
Define the embedding service.
The VectorStore interface requires an embedding service. This workflow doesn't
generate new embeddings, so the FakeEmbeddings class is used to avoid any
costs.
Pinecone
# The VectorStore interface requires an embedding service. This workflow does not
# generate new embeddings, therefore FakeEmbeddings class is used to avoid any costs.
from langchain_core.embeddings import FakeEmbeddings
embeddings_service = FakeEmbeddings ( size = vector_size )
Weaviate
# The VectorStore interface requires an embedding service. This workflow does not
# generate new embeddings, therefore FakeEmbeddings class is used to avoid any costs.
from langchain_core.embeddings import FakeEmbeddings
embeddings_service = FakeEmbeddings ( size = vector_size )
Chroma
# The VectorStore interface requires an embedding service. This workflow does not
# generate new embeddings, therefore FakeEmbeddings class is used to avoid any costs.
from langchain_core.embeddings import FakeEmbeddings
embeddings_service = FakeEmbeddings ( size = vector_size )
Qdrant
# The VectorStore interface requires an embedding service. This workflow does not
# generate new embeddings, therefore FakeEmbeddings class is used to avoid any costs.
from langchain_core.embeddings import FakeEmbeddings
embeddings_service = FakeEmbeddings ( size = vector_size )
Milvus
# The VectorStore interface requires an embedding service. This workflow does not
# generate new embeddings, therefore FakeEmbeddings class is used to avoid any costs.
from langchain_core.embeddings import FakeEmbeddings
embeddings_service = FakeEmbeddings ( size = vector_size )
Prepare the AlloyDB table.
Connect to AlloyDB using a public IP connection.
For more information, see
Specifying IP Address Type .
Pinecone
from langchain_google_alloydb_pg import AlloyDBEngine
alloydb_engine = await AlloyDBEngine . afrom_instance (
project_id = project_id ,
region = region ,
cluster = cluster ,
instance = instance ,
database = db_name ,
user = db_user ,
password = db_pwd ,
ip_type = IPTypes . PUBLIC , # Optionally use IPTypes.PRIVATE
)
Weaviate
from langchain_google_alloydb_pg import AlloyDBEngine
alloydb_engine = await AlloyDBEngine . afrom_instance (
project_id = project_id ,
region = region ,
cluster = cluster ,
instance = instance ,
database = db_name ,
user = db_user ,
password = db_pwd ,
ip_type = IPTypes . PUBLIC ,
)
Chroma
from langchain_google_alloydb_pg import AlloyDBEngine
alloydb_engine = await AlloyDBEngine . afrom_instance (
project_id = project_id ,
region = region ,
cluster = cluster ,
instance = instance ,
database = db_name ,
user = db_user ,
password = db_pwd ,
ip_type = IPTypes . PUBLIC ,
)
Qdrant
from langchain_google_alloydb_pg import AlloyDBEngine
alloydb_engine = await AlloyDBEngine . afrom_instance (
project_id = project_id ,
region = region ,
cluster = cluster ,
instance = instance ,
database = db_name ,
user = db_user ,
password = db_pwd ,
ip_type = IPTypes . PUBLIC ,
)
Milvus
from langchain_google_alloydb_pg import AlloyDBEngine
alloydb_engine = await AlloyDBEngine . afrom_instance (
project_id = project_id ,
region = region ,
cluster = cluster ,
instance = instance ,
database = db_name ,
user = db_user ,
password = db_pwd ,
ip_type = IPTypes . PUBLIC ,
)
Create a table to copy data into, if it doesn't already exist.
Pinecone
from langchain_google_alloydb_pg import Column
await alloydb_engine . ainit_vectorstore_table (
table_name = alloydb_table ,
vector_size = vector_size ,
# Customize the ID column types if not using the UUID data type
# id_column=Column("langchain_id", "TEXT"), # Default is Column("langchain_id", "UUID")
# overwrite_existing=True, # Drop the old table and Create a new vector store table
)
Weaviate
await alloydb_engine . ainit_vectorstore_table (
table_name = alloydb_table ,
vector_size = vector_size ,
# Customize the ID column types with `id_column` if not using the UUID data type
)
Chroma
await alloydb_engine . ainit_vectorstore_table (
table_name = alloydb_table ,
vector_size = vector_size ,
# Customize the ID column types with `id_column` if not using the UUID data type
)
Qdrant
await alloydb_engine . ainit_vectorstore_table (
table_name = alloydb_table ,
vector_size = vector_size ,
# Customize the ID column types with `id_column` if not using the UUID data type
)
Milvus
await alloydb_engine . ainit_vectorstore_table (
table_name = alloydb_table ,
vector_size = vector_size ,
# Customize the ID column types with `id_column` if not using the UUID data type
)
Initialize a vector store object
This code adds additional vector embedding metadata to the langchain_metadata
column in a JSON format.
To make filtering more efficient, organize this metadata into separate columns.
For more information, see Create a custom Vector Store .
To initialize a vector store object, run the following command:
Pinecone
from langchain_google_alloydb_pg import AlloyDBVectorStore
vs = await AlloyDBVectorStore . create (
engine = alloydb_engine ,
embedding_service = embeddings_service ,
table_name = alloydb_table ,
)
Weaviate
from langchain_google_alloydb_pg import AlloyDBVectorStore
vs = await AlloyDBVectorStore . create (
engine = alloydb_engine ,
embedding_service = embeddings_service ,
table_name = alloydb_table ,
)
Chroma
from langchain_google_alloydb_pg import AlloyDBVectorStore
vs = await AlloyDBVectorStore . create (
engine = alloydb_engine ,
embedding_service = embeddings_service ,
table_name = alloydb_table ,
)
Qdrant
from langchain_google_alloydb_pg import AlloyDBVectorStore
vs = await AlloyDBVectorStore . create (
engine = alloydb_engine ,
embedding_service = embeddings_service ,
table_name = alloydb_table ,
)
Milvus
from langchain_google_alloydb_pg import AlloyDBVectorStore
vs = await AlloyDBVectorStore . create (
engine = alloydb_engine ,
embedding_service = embeddings_service ,
table_name = alloydb_table ,
)
Insert data into the AlloyDB table:
Pinecone
pending : set [ Any ] = set ()
for ids , contents , embeddings , metadatas in data_iterator :
pending . add (
asyncio . ensure_future (
vs . aadd_embeddings (
texts = contents ,
embeddings = embeddings ,
metadatas = metadatas ,
ids = ids ,
)
)
)
if len ( pending ) > = max_concurrency :
_ , pending = await asyncio . wait (
pending , return_when = asyncio . FIRST_COMPLETED
)
if pending :
await asyncio . wait ( pending )
Weaviate
pending : set [ Any ] = set ()
for ids , contents , embeddings , metadatas in data_iterator :
pending . add (
asyncio . ensure_future (
vs . aadd_embeddings (
texts = contents ,
embeddings = embeddings ,
metadatas = metadatas ,
ids = ids ,
)
)
)
if len ( pending ) > = max_concurrency :
_ , pending = await asyncio . wait (
pending , return_when = asyncio . FIRST_COMPLETED
)
if pending :
await asyncio . wait ( pending )
Chroma
pending : set [ Any ] = set ()
for ids , contents , embeddings , metadatas in data_iterator :
pending . add (
asyncio . ensure_future (
vs . aadd_embeddings (
texts = contents ,
embeddings = embeddings ,
metadatas = metadatas ,
ids = ids ,
)
)
)
if len ( pending ) > = max_concurrency :
_ , pending = await asyncio . wait (
pending , return_when = asyncio . FIRST_COMPLETED
)
if pending :
await asyncio . wait ( pending )
Qdrant
pending : set [ Any ] = set ()
for ids , contents , embeddings , metadatas in data_iterator :
pending . add (
asyncio . ensure_future (
vs . aadd_embeddings (
texts = contents ,
embeddings = embeddings ,
metadatas = metadatas ,
ids = ids ,
)
)
)
if len ( pending ) > = max_concurrency :
_ , pending = await asyncio . wait (
pending , return_when = asyncio . FIRST_COMPLETED
)
if pending :
await asyncio . wait ( pending )
Milvus
pending : set [ Any ] = set ()
for ids , contents , embeddings , metadatas in data_iterator :
pending . add (
asyncio . ensure_future (
vs . aadd_embeddings (
texts = contents ,
embeddings = embeddings ,
metadatas = metadatas ,
ids = ids ,
)
)
)
if len ( pending ) > = max_concurrency :
_ , pending = await asyncio . wait (
pending , return_when = asyncio . FIRST_COMPLETED
)
if pending :
await asyncio . wait ( pending )
Run the migration script
Set up the Python environment .
Install the sample dependencies:
pip install -r requirements.txt
Run the sample migration.
Pinecone
python migrate_pinecone_vectorstore_to_alloydb.py
Make the following replacements before you run the sample:
PINECONE_API_KEY : the Pinecone API key.
PINECONE_NAMESPACE : the Pinecone namespace.
PINECONE_INDEX_NAME : the name of the Pinecone index.
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster is deployed.
CLUSTER : the name of the cluster.
INSTANCE : the name of the instance.
DB_NAME : the name of the database.
DB_USER : the name of the database user.
DB_PWD : the database secret password.
Weaviate
python migrate_weaviate_vectorstore_to_alloydb.py
Make the following replacements before you run the sample:
WEAVIATE_API_KEY : the Weaviate API key.
WEAVIATE_CLUSTER_URL : the Weaviate cluster URL.
WEAVIATE_COLLECTION_NAME : the Weaviate collection name.
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster is deployed.
CLUSTER : the name of the cluster.
INSTANCE : the name of the instance.
DB_NAME : the name of the database.
DB_USER : the name of the database user.
DB_PWD : the database secret password.
Chroma
python migrate_chromadb_vectorstore_to_alloydb.py
Make the following replacements before you run the sample:
CHROMADB_PATH : the Chroma database path.
CHROMADB_COLLECTION_NAME : the name of the Chroma database collection.
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster is deployed.
CLUSTER : the name of the cluster.
INSTANCE : the name of the instance.
DB_NAME : the name of the database.
DB_USER : the name of the database user.
DB_PWD : the database secret password.
Qdrant
python migrate_qdrant_vectorstore_to_alloydb.py
Make the following replacements before you run the sample:
QDRANT_PATH : the Qdrant database path.
QDRANT_COLLECTION_NAME : the name of the Qdrant collection name.
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster is deployed.
CLUSTER : the name of the cluster.
INSTANCE : the name of the instance.
DB_NAME : the name of the database.
DB_USER : the name of the database user.
DB_PWD : the database secret password.
Milvus
python migrate_milvus_vectorstore_to_alloydb.py
Make the following replacements before you run the sample:
MILVUS_URI : the Milvus URI.
MILVUS_COLLECTION_NAME : the name of the Milvus collection.
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster is deployed.
CLUSTER : the name of the cluster.
INSTANCE : the name of the instance.
DB_NAME : the name of the database.
DB_USER : the name of the database user.
DB_PWD : the database secret password.
A successful migration prints logs similar to the following without any errors:
Migration completed, inserted all the batches of data to AlloyDB
Open AlloyDB Studio to view your migrated data. For more information, see
Manage your data using AlloyDB Studio .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
In the Google Cloud console, go to the Clusters page.
Go to Clusters
In the Resource name column, click the name of the cluster that you
created.
Click delete Delete cluster .
In Delete cluster , enter the name of your cluster to confirm that you
want to delete your cluster.
Click Delete .
If you created a private connection when you created a cluster ,
delete the private connection:
Go to the Google Cloud console Networking page
and click Delete VPC network .
What's next
Get started with vector embeddings using AlloyDB AI .
Learn how to build generative AI applications using AlloyDB AI .
Create a ScaNN index .
Tune your ScaNN indexes .
Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
