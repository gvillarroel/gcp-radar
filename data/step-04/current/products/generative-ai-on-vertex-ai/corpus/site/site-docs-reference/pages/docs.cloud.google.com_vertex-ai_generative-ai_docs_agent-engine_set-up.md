---
title: "Set up the environment \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/set-up
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/set-up
  title: "Set up the environment \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Set up the environment
Stay organized with collections
Save and categorize content based on your preferences.
Before you work with Vertex AI Agent Engine, you need to make sure your
environment is set up. You need to have a Google Cloud project with billing enabled,
have the required permissions, set up a Cloud Storage bucket, and install the
Vertex AI SDK for Python. Use the following topics to ensure ready to start working
with Vertex AI Agent Engine.
For a reference Terraform example to streamline Vertex AI Agent Engine environment setup and deployment, consider exploring the agent-starter-pack .
Set up with Google Cloud
You can set up with Google Cloud for Vertex AI Agent Engine by
creating a Google Cloud project.
Google Cloud project
Every project can be identified in two ways: the project number or the project
ID. The PROJECT_NUMBER is automatically created when you
create the project, whereas the PROJECT_ID is created by you,
or whoever created the project. To set up a project:
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
Enable the Vertex AI, Cloud Storage, Cloud Logging, Cloud Monitoring, Telemetry, Cloud Trace, and Resource Manager APIs.
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
Enable the Vertex AI, Cloud Storage, Cloud Logging, Cloud Monitoring, Telemetry, Cloud Trace, and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Note: To enable APIs, you need the serviceusage.services.enable permission. If you don't have this permission, ask your administrator to grant you
the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role.
Get the required roles
To get the permissions that
you need to use Vertex AI Agent Engine,
ask your administrator to grant you the
Vertex AI User ( roles/aiplatform.user )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Set up the identity and permissions for your agent
You have the following options when setting up identity and permissions:
Agent identity (Recommended)
(Preview): Use Identity Access Management (IAM) agent identity to provide
security and access management features when using agents on
Vertex AI Agent Engine Runtime. Agent identity is tied
to each individual agent.
Service accounts : Service accounts are
shared across agents you deploy to Vertex AI Agent Engine.
You have two options for the service account:
Default Service Agent: By default, agents use the AI Platform Reasoning
Engine Service Agent . This Google-managed service account has the
Vertex AI Reasoning Engine Service Agent role
( roles/aiplatform.reasoningEngineServiceAgent ), which includes the default
permissions required for deployed agents.
Custom Service Account: You can
specify your own service account for the agents to use. This gives you more
granular control over the permissions granted to the agents.
Agent identity
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To set up IAM policies before deploying the agent, you can
create an agent identity without deploying your agent code. To do so, create
an Agent Engine instance with just the identity_type field:
remote_app = client . agent_engines . create (
config = {
"identity_type" : types . IdentityType . AGENT_IDENTITY ,
},
)
Once you create the Agent Engine instance with the agent identity, you can do
the following:
Provision the agent identity with the following recommended roles:
roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use
the project's quota and the Vertex AI SDK.
Grant the agent identity additional roles as needed for your use case.
Add agent code using
agent_engine.update(...) .
Default Service Agent
The AI Platform Reasoning Engine Service Agent is used by default. You can view
the full list of default permissions in the
IAM documentation .
If your agent requires permissions beyond the default set, you can grant this
Service Agent additional roles:
Go to the IAM page and check the "Include Google-provided role grants"
checkbox.
Go to IAM
Find the principal which matches
service- PROJECT_NUMBER @gcp-sa-aiplatform-re.iam.gserviceaccount.com .
Add the required roles to the principal by clicking the edit button and then
the save button.
Manually generate the default service agent
While the Reasoning Engine Service Agent is automatically provisioned during
Vertex AI Agent Engine deployment, there might be scenarios where you need to manually
generate it beforehand. This is particularly important when you need to grant
specific roles to the service agent to ensure the deployment process has the
necessary permissions and avoid potential deployment failures.
Here are the steps to manually generate a Reasoning Engine Service Agent:
Generate the Reasoning Engine Service Agent using the Google Cloud CLI.
gcloud beta services identity create --service = aiplatform.googleapis.com --project = PROJECT-ID-OR-PROJECT-NUMBER Note: The response to the Google Cloud CLI command might display only the Vertex
AI Service Agent. However, the Reasoning Engine Service Agent is also created.
Go to the IAM page and click Grant Access .
Go to IAM
In Add principals section, in the New principals field, enter
service- PROJECT_NUMBER @gcp-sa-aiplatform-re.iam.gserviceaccount.com .
In the Assign roles section, find and select the roles you need.
Click the Save button.
Custom service account
To use your own service account, you need to grant it the necessary permissions
to run the agent. Your custom service account likely needs the
Vertex AI User role ( roles/aiplatform.user ).
If you don't have a service account, create one. See
Create service accounts .
Grant the service account the
Vertex AI User
( roles/aiplatform.user ) role.
Grant any other roles required by your agent code to the service account.
To deploy your agent with this service account, grant yourself the Service
Account User role ( roles/iam.serviceAccountUser ) on this custom service
account.
When deploying your agent, specify the email address of your custom service
account. See Configure a custom service account
for details.
Cross-project custom service account
If your custom service account is from a different project, you need additional
configurations in both the project where the service account resides and the
project where you deploy the agent.
Disable cross-project service account usage organization policy: In the
project where the service account is located, ensure that the
iam.disableCrossProjectServiceAccountUsage organization policy is NOT
enforced. See
Disable cross-project service account usage enforcement
for more details.
Grant permissions to the Vertex AI Service Agent: In the project where
the service account is located, grant the Service Account Token Creator
( roles/iam.serviceAccountTokenCreator ) role to the Vertex AI Service Agent
( service- RESOURCE_PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com )
of the project where you plan to deploy the agent.
Grant permissions to the custom service account: In the project where
you plan to deploy the agent, grant the necessary roles to the custom
service account. This typically includes the Vertex AI User role
( roles/aiplatform.user ) and any other roles required by your agent code.
(Optional) Create a Cloud Storage bucket
The need for a Cloud Storage bucket depends on whether the Vertex AI SDK for Python needs a place to stage your agent code before deployment:
Deploy from source files : The agent exists as files. The Vertex AI SDK for Python can bundle and upload these files directly to the deployment service, so no Cloud Storage staging bucket is needed.
Deploy from agent object : The agent exists in memory. The Vertex AI SDK for Python packages this object and uploads it to a Cloud Storage bucket, which acts as a staging area for the deployment service.
Deploy from source files
If you deploy an agent from source files , a Cloud Storage bucket is not required.
Deploy from object
When you deploy from an agent object , Vertex AI Agent Engine stages the artifacts of your deployed agents in a Cloud Storage bucket as part of the deployment process. Make sure the principal that is authenticated to use Vertex AI (either yourself or a service account) has Storage Admin access to this bucket. This is needed because Vertex AI SDK for Python writes your code to this bucket.
If you already have a bucket set up, you can skip this step. Otherwise, you can
follow the standard instructions for creating a bucket.
Note: We strongly recommend that you create a Cloud Storage bucket in the same project where you deploy your agents to Vertex AI Agent Engine.
If you use a bucket in a different project, you must manually grant the Vertex AI Service Agent ( service- PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com ) read permissions to your Cloud Storage bucket.
Ask your administrator to grant you the Storage Admin ( roles/storage.admin ) IAM role on your project.
Google Cloud console
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. To go to the next
step, click Continue .
In the Get started section, do the following:
Enter a globally unique name that meets the
bucket naming requirements .
To add a
bucket label ,
expand the Labels section ( expand_more ),
click add_box
Add label , and specify a key and a value for your label.
In the Choose where to store your data section, do the following:
Select a Location type .
Choose a location where your bucket's data is permanently stored from the Location type drop-down menu.
If you select the dual-region location type, you can
also choose to enable turbo replication by using the
relevant checkbox.
To set up cross-bucket replication , select
Add cross-bucket replication via Storage Transfer Service and
follow these steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix that you want to include or exclude objects from, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the following:
Select a default storage class for the bucket or
Autoclass for automatic storage class management of your
bucket's data.
To enable hierarchical namespace , in the
Optimize storage for data-intensive workloads section, select
Enable hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in existing
buckets.
In the Choose how to control access to objects section, select
whether or not your bucket enforces public access prevention ,
and select an access control method for your bucket's objects.
Note: You cannot change the Prevent public access setting if this setting is enforced at an organization policy .
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To enable soft delete , click the
Soft delete policy (For data recovery) checkbox,
and specify the number of days you want to retain objects
after deletion.
To set Object Versioning , click the
Object versioning (For version control) checkbox,
and specify the maximum number of versions per object and the number of days after which
the noncurrent versions expire.
To enable the retention policy on objects and buckets, click the Retention (For compliance) checkbox, and then do the following:
To enable Object Retention Lock , click the
Enable object retention checkbox.
To enable Bucket Lock , click the Set bucket retention policy checkbox, and choose a unit of time and a length of time for your retention period.
To choose how your object data will be encrypted, expand the
Data encryption section ( expand_more ), and select a
Data encryption method .
Click Create .
Command line
Create a Cloud Storage bucket and configure it as follows:
Replace STORAGE_CLASS with your preferred
storage class .
Replace LOCATION with your preferred location
( ASIA , EU , or US )
Replace BUCKET_NAME with
a bucket name that meets the
bucket name
requirements .
gcloud storage buckets create gs:// BUCKET_NAME --default-storage-class STORAGE_CLASS --location LOCATION
Install and initialize the Vertex AI SDK for Python
This section presumes that you have set up a Python development environment ,
or are using Colab (or any other suitable runtime that has set it up for you).
(Optional) Set up a virtual environment
We also recommend setting up a virtual environment
to isolate your dependencies.
Installation
To minimize the set of dependencies that you have to install, we have separated
out the dependencies into:
agent_engines : the set of packages required for deployment to Vertex AI Agent Engine.
adk : the set of compatible Agent Development Kit packages.
langchain : the set of compatible LangChain and LangGraph packages.
ag2 : the set of compatible AG2 packages.
llama_index : the set of compatible LlamaIndex packages.
When installing the Vertex AI SDK for Python, you can specify the dependencies
required (separated by commas). To install all of them:
pip install google-cloud-aiplatform [ agent_engines,adk,langchain,ag2,llama_index ]>= 1 .112.0
To use Agent2Agent (A2A) on Agent Engine, you must also install the a2a-sdk package:
pip install a2a-sdk> = 0 .3.4
Authentication
Colab
Run the following code:
from google.colab import auth
auth . authenticate_user ( project_id = " PROJECT_ID " )
Cloud Shell
No action required.
Local Shell
Run the following command:
gcloud auth application-default login
Import and initialize the SDK
Run the following code to import and initialize the SDK for Vertex AI Agent Engine:
Google Cloud project
import vertexai
from vertexai import agent_engines # For the prebuilt templates
client = vertexai . Client ( # For service interactions via client.agent_engines
project = " PROJECT_ID " ,
location = " LOCATION " ,
)
where
PROJECT_ID is the Google Cloud project ID under
which you develop and deploy agents, and
LOCATION is one of the supported regions .
(Optional) Bring your own container (BYOC)
Vertex AI Agent Engine builds a container for you as part of the
deployment process. If you intend to build your own container for
deployment , you
will need to follow the instructions in the following subsections. At a high
level, it amounts to the following steps:
Build and push a container image to artifact registry.
Set up the service accounts for Vertex AI Agent Engine that
correspond to the user project (in Set up the identity and permissions for your agent ) and the tenant project (that the runtime runs under).
Grant the roles/artifactregistry.reader role to both the user project
service account as well as the tenant project service account.
Build and push a container image
To build and push a container image, follow the instructions in
Build and push a Docker image with Cloud Build .
Set up the service accounts for Vertex AI Agent Engine
To set up the service accounts, deploy an agent that prints the tenant service account.
First, set up the source code for the agent:
Open a terminal window
Create a new directory named byoc_setup
mkdir byoc_setup
Create a file in the byoc_setup directory named metadata_agent.py with
the following contents:
class MetadataAgent :
def query ( self ):
import requests
url = "http://metadata.google.internal/computeMetadata/v1/project/numeric-project-id"
try :
response = requests . get ( url , headers = { "Metadata-Flavor" : "Google" })
response . raise_for_status ()
return f "service- { response . text } @serverless-robot-prod.iam.gserviceaccount.com"
except Exception :
return None
root_agent = MetadataAgent ()
Create another file in the byoc_setup directory named requirements.txt with
the following contents:
google-cloud-aiplatform[agent_engines]
If you have not done so, install and initialize the Vertex AI SDK for Python .
In the same python session where you initialize the Vertex AI SDK for Python, run
the following code to print a TENANT_SERVICE_ACCOUNT :
remote_agent = client . agent_engines . create ( # This deploys the agent
config = {
"source_packages" : [ "byoc_setup" ],
"entrypoint_module" : "byoc_setup.metadata_agent" ,
"entrypoint_object" : "root_agent" ,
"requirements_file" : "byoc_setup/requirements.txt" ,
"class_methods" : [{ 'api_mode' : '' , 'name' : 'query' }],
},
)
# This prints the tenant service account
# service-{tenant_project_number}@serverless-robot-prod. iam.gserviceaccount.com
print ( remote_agent . query ())
# This cleans up the resources
remote_agent . delete ( force = True )
Look up the USER_SERVICE_ACCOUNT in Set up the identity and permissions for your agent . If you are using the default service agent, this
should match service- PROJECT_NUMBER @gcp-sa-aiplatform-re.iam.gserviceaccount.com .
Grant Artifact Registry Reader roles
Grant the required roles by running the following commands:
gcloud projects add-iam-policy-binding <var>PROJECT_NUMBER</var> \
--member = "serviceAccount: USER_SERVICE_ACCOUNT " \
--role = "roles/artifactregistry.reader"
gcloud projects add-iam-policy-binding <var>PROJECT_NUMBER</var> \
--member = "serviceAccount: TENANT_SERVICE_ACCOUNT " \
--role = "roles/artifactregistry.reader"
What's next
Develop an agent .
Troubleshoot setting up an environment .
Get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
