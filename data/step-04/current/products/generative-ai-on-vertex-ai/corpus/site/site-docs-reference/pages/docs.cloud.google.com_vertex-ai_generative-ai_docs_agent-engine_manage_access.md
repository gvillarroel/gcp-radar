---
title: "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/manage/access
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/manage/access
  title: "Managing access for deployed agents \_|\_ Vertex AI Agent Builder \_|\_\
    \ Google Cloud Documentation"
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
Managing access for deployed agents
Stay organized with collections
Save and categorize content based on your preferences.
There are different types of authentication methods available for different modes of access:
Authentication method
Use case
About this authentication method
Agent identity (preview)
Access data sources directly from within an agent.
An agent deployed with agent identity can access resources according to the IAM permissions you grant the agent.
Service accounts
Access data sources directly from within an agent.
Deployed agents have access to all resources that their service
account has permission to access.
API keys
Send requests to endpoints using API keys from within an agent.
Check that the API that you want to use supports API keys before using
this authentication method.
OAuth client ID
Handle user accounts, registration, login, or authorization for the
agent's end-users.
Requires your agent to request and receive consent from the user.
Agent identity
If you used agent identity to set up the identity and permissions for your
agent , see Use
agent identity with
Vertex AI Agent Engine for
information about how to manage access control to resources.
Service accounts
If you used service accounts to set up the identity and permissions for your
agent , agents that
you deploy on Vertex AI Agent Engine run using either the AI Platform
Reasoning Engine Service Agent or your custom service account.
AI Platform Reasoning Engine Service Agent
The AI Platform Reasoning Engine Service Agent service account uses the
format of
service- PROJECT_NUMBER @gcp-sa-aiplatform-re.iam.gserviceaccount.com .
The service account has a Vertex AI
Reasoning Engine Service Agent role ( roles/aiplatform.reasoningEngineServiceAgent )
that grants the default permissions required for deployed agents. You can view
the full list of default permissions in the
IAM documentation .
List the roles of a deployed agent
Console
Go to the IAM page.
Go to IAM
Select the project corresponding to your Google Cloud project.
Find the Principal which matches the
service account
used as your agent identity.
The roles of the deployed agent can be found under the Role column.
Note: For AI Platform Reasoning Engine Service Agent service account, you
need to select the "Include Google-provided role grants" to display the
service account in the principals table.
gcloud
First install and initialize
the gcloud CLI. Then run the following command:
gcloud projects get-iam-policy PROJECT_ID_OR_NUMBER \
--flatten = "bindings[].members" \
--filter = "bindings.members:serviceAccount: PRINCIPAL " \
--format = "value(bindings.role)"
where
PROJECT_ID_OR_NUMBER is the ID or number for your project, and
PRINCIPAL is based on the
service account
that was used when the agent is deployed on Vertex AI Agent Engine.
For details, visit the IAM documentation and
CLI reference .
Python
First, install the client library by running
pip install google-api-python-client
Then authenticate yourself ,
and run the following to list the roles of a deployed agent:
from google.cloud import resourcemanager_v3
from google.iam.v1 import iam_policy_pb2
project_id = " PROJECT_ID "
principal = " PRINCIPAL "
crm_service = resourcemanager_v3 . ProjectsClient ()
policy = crm_service . get_iam_policy ( iam_policy_pb2 . GetIamPolicyRequest (
resource = f "projects/ { project_id } "
))
for binding in policy . bindings :
for member in binding . members :
if principal in member :
print ( binding . role )
Where the PRINCIPAL is based on the
service account
that was used when the agent is deployed on Vertex AI Agent Engine.
Grant roles for a deployed agent
Console (recommended)
Go to the IAM page.
Go to IAM
Select the project corresponding to your Google Cloud project.
Find the Principal which matches the
service account
used as your agent identity.
Add the required roles to the Principal by clicking the edit button, adding the roles, before clicking the save button.
Note: For AI Platform Reasoning Engine Service Agent service account, you
need to select the "Include Google-provided role grants" to display the
service account in the principals table.
gcloud
First install and initialize
the gcloud CLI. Then run the following command:
gcloud projects add-iam-policy-binding PROJECT_ID --member = PRINCIPAL --role = ROLE_NAME
where
PRINCIPAL is based on the
service account
that was used when the agent is deployed on Vertex AI Agent Engine.
ROLE_NAME is the name of the role that you want to grant.
For a list of predefined roles, see Understanding roles .
For details, visit the IAM documentation and
CLI reference .
Python
We don't recommend writing your own Python code to grant or revoke roles for
deployed agents. Instead, we recommend either using Google Cloud console or gcloud
for one-off operations, or Terraform for managing IAM
access control programmatically. If you want or need to do so in Python, consult the
documentation for the IAM client library .
Revoke roles from a deployed agent
Console (recommended)
Go to the IAM page.
Go to IAM
Select the project corresponding to your Google Cloud project.
Find the Principal which matches the
service account
used as your agent identity.
Revoke the roles from the Principal by clicking the edit button, removing the corresponding roles, before clicking the save button.
Note: For AI Platform Reasoning Engine Service Agent service account, you
need to select the "Include Google-provided role grants" to display the
service account in the principals table.
gcloud
First install and initialize
the gcloud CLI. Then run the following command:
gcloud projects remove-iam-policy-binding PROJECT_ID --member = PRINCIPAL --role = ROLE_NAME
where
PRINCIPAL is based on the
service account
that was used when the agent is deployed on Vertex AI Agent Engine.
ROLE_NAME is the name of the role that you want to revoke.
For a list of predefined roles, see Understanding roles .
For details, visit the IAM documentation and
CLI reference .
Python
We don't recommend writing your own Python code to grant or revoke roles for
deployed agents. Instead, we recommend either using Google Cloud console or gcloud
for one-off operations, or Terraform for managing IAM
access control programmatically. If you want or need to do so in Python, consult the
documentation for the IAM client library .
API keys
API keys use secrets, which contain one or more secret versions, along with metadata such as
labels and replication information. The actual payload of a secret is stored
in a secret version . Secrets are
managed (via Secret Manager) at the
project level ,
and can be shared across deployed agents. To list the secrets corresponding to an
agent in Secret Manager, you can add labels and use them for filtering.
Create a secret
Console
Go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click Create Secret .
In the Name field, enter a name for the secret (for example, my-secret ).
Optional: To also add a secret version when creating the initial secret, in the
Secret value field, enter a value for the secret (for example, abcd1234 ).
Go to Labels , and then click Add label .
Enter a key and its corresponding value to create a label.
Click Create secret .
gcloud
First install and initialize
the gcloud CLI. Then run the following commands:
gcloud secrets create SECRET_ID --replication-policy = "automatic"
gcloud secrets versions add SECRET_ID --data-file = " FILE_PATH "
where
SECRET_ID is the ID of the secret or fully qualified
identifier for the secret.
FILE_PATH is the full path (including file name) to the
file containing the version details.
For details, visit the Secret Manager documentation for creating a
secret
and secret version ,
or the CLI reference for creating a secret
and secret version respectively.
Python
First, install the client library by running
pip install google-cloud-secret-manager
Then authenticate yourself ,
and run the following
from google.cloud import secretmanager
import google_crc32c
client = secretmanager . SecretManagerServiceClient ()
secret = client . create_secret ( request = {
"parent" : "projects/ PROJECT_ID " ,
"secret_id" : " SECRET_ID " ,
"secret" : { # google.cloud.secretmanager_v1.types.Secret
# Required. The replication policy cannot be changed after the Secret has been created.
"replication" : { "automatic" : {}},
# Optional. Labels to associate with the secret.
"labels" : { "type" : "api_key" , "provider" : "anthropic" },
# Optional. The secret's time-to-live in seconds with format (e.g.,
# "900s" for 15 minutes). If specified, the secret versions will be
# automatically deleted upon reaching the end of the TTL period.
"ttl" : " TTL " ,
},
})
anthropic_api_key = " API_KEY " # The secret to be stored.
payload_bytes = anthropic_api_key . encode ( "UTF-8" )
# Optional. Calculate payload checksum.
crc32c = google_crc32c . Checksum ()
crc32c . update ( payload_bytes )
version = client . add_secret_version ( request = {
"parent" : secret . name ,
"payload" : {
"data" : payload_bytes ,
"data_crc32c" : int ( crc32c . hexdigest (), 16 ), # Optional.
},
})
print ( f "Added secret version: { version . name } " )
Get a secret
Console
Go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click the name of a secret to describe.
The Secret detail page lists information about the secret.
gcloud
First install and initialize
the gcloud CLI. Then run the following command:
gcloud secrets versions describe VERSION_ID --secret = SECRET_ID
where
VERSION_ID is the ID of the secret version, and
SECRET_ID is the ID of the secret or fully qualified identifier for the secret.
For details, visit the Secret Manager documentation ,
or the CLI reference .
Python
First, install the client library by running
pip install google-cloud-secret-manager
Then authenticate yourself ,
and run the following
from google.cloud import secretmanager
client = secretmanager . SecretManagerServiceClient ()
name = client . secret_path ( " PROJECT_ID " , " SECRET_ID " )
response = client . get_secret ( request = { "name" : name })
List secrets
Console
Go to the Secret Manager page.
Go to Secret Manager
In the Secrets table, click in the Filter field.
Choose a filter property and its corresponding value, for example Location:asia-east1 .
The table is automatically filtered based on the values entered.
(Optional) To filter secret versions: select a secret to access its
versions, and then use the Filter option in the Versions table.
gcloud
First install and initialize
the gcloud CLI.
To list all the secrets of a project, run the following command:
gcloud secrets list --filter = " FILTER "
where FILTER is a string (e.g. name:asecret OR name:bsecret )
or regular expressions (e.g. name ~ "secret_ab.*" ).
To list all the versions of a secret, run the following command:
gcloud secrets versions list SECRET_ID
where SECRET_ID is the ID of the secret or fully qualified
identifier for the secret.
For details, visit the Secret Manager documentation for
filtering secrets and
listing secret versions ,
or the CLI reference for listing secrets
and secret versions respectively.
Python
First, install the client library by running
pip install google-cloud-secret-manager
Then authenticate yourself ,
and run the following
from google.cloud import secretmanager
client = secretmanager . SecretManagerServiceClient ()
for secret in client . list_secrets ( request = {
"parent" : "projects/ PROJECT_ID " ,
"filter" : " FILTER " , # e.g. "labels.provider=anthropic"
}):
print ( f "Found secret: { secret . name } " )
Update a secret
Console
Go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click the checkbox next to the name of the secret.
If the Info Panel is closed, click Show Info Panel to display it.
In the Info Panel , select the Labels tab.
Click Add label and enter a key and value for the label.
Click Save .
gcloud
First install and initialize
the gcloud CLI. Then run the following command:
gcloud secrets update SECRET_ID --update-labels = KEY = VALUE
where
SECRET_ID is the ID of the secret or fully qualified identifier for the secret,
KEY is the label key, and
VALUE is the corresponding value of the label.
For details, visit the Secret Manager documentation or the
CLI reference .
Python
First, install the client library by running
pip install google-cloud-secret-manager
Then authenticate yourself ,
and run the following
from google.cloud import secretmanager
client = secretmanager . SecretManagerServiceClient ()
name = client . secret_path ( " PROJECT_ID " , " SECRET_ID " )
response = client . update_secret ( request = {
"secret" : {
"name" : name ,
"labels" : { "type" : "api_key" , "provider" : "anthropic" }, # updated labels
},
"update_mask" : { "paths" : [ "labels" ]},
})
print ( f "Updated secret: { response . name } " )
Delete a secret
Console
Go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, in the Actions column for the secret, click View more .
In the menu, select Delete .
In the Delete secret dialog, enter the name of the secret.
Click the Delete secret button.
gcloud
First install and initialize
the gcloud CLI.
To delete a secret version, run the following command:
gcloud secrets versions destroy VERSION_ID --secret = SECRET_ID
where
VERSION_ID is the resource name of the secret version, and
SECRET_ID is the ID of the secret or fully qualified identifier for the secret.
To delete a secret and all of its versions, run the following command:
gcloud secrets delete SECRET_ID
where SECRET_ID is the ID of the secret or fully qualified identifier for the secret
For details, visit the Secret Manager documentation for
deleting a secret and
destroying a secret version , or the
CLI reference for deleting a secret and
destroying a secret version .
Python
First, install the client library by running
pip install google-cloud-secret-manager
Then authenticate yourself ,
and run the following
from google.cloud import secretmanager
client = secretmanager . SecretManagerServiceClient ()
name = client . secret_path ( " PROJECT_ID " , " SECRET_ID " )
client . delete_secret ( request = { "name" : name })
OAuth clients and credentials
A client ID is used to identify a single agent to Google's OAuth servers. If
your agent runs on multiple platforms, each platform needs its own client ID. At a
high level, to integrate an OAuth-based agent, you do the following:
Create an OAuth client and credential.
Store the client ID and secret in Secret Manager. (See Create a secret ).
Access the secret in your agent during development .
Note: See
Setting up OAuth 2.0
for more information. Learn more
about OAuth client types.
Create an OAuth client credential
In the Google Cloud console, go to the Google Auth Platform > Clients page.
Go to Google Auth Platform > Clients
(If needed) If the screen shows "Google Auth Platform not configured yet", click Get Started and fill out the Project Configurations . (They can be updated later on.) For details on production readiness, visit OAuth 2.0 Policy compliance .
Click Create Client .
Set Application type to Web application .
Set the name of the OAuth client to OAUTH_CLIENT_DISPLAY_NAME .
Under Authorized redirect URIs , add the URI for REDIRECT_URI .
Under Client Secrets, click the button for "download JSON". A
client_secret.json file is downloaded with the following contents:
{ 'web' : {
'client_id' : " CLIENT_ID " ,
'client_secret' : " CLIENT_SECRET " ,
'project_id' : " PROJECT_ID " ,
'redirect_uris' : [ REDIRECT_URIs ],
'auth_uri' : 'https://accounts.google.com/o/oauth2/auth' ,
'token_uri' : 'https://www.googleapis.com/oauth2/v3/token' ,
'auth_provider_x509_cert_url' : 'https://www.googleapis.com/oauth2/v1/certs' ,
'javascript_origins' : " JAVASCRIPT_ORIGINS " , # Optional.
}}
Store the client ID and secret in Secret Manager , for example,
from google.cloud import secretmanager
import google_crc32c
import json
client = secretmanager . SecretManagerServiceClient ()
secret = client . create_secret ( request = {
"parent" : "projects/ PROJECT_ID " ,
"secret_id" : " OAUTH_SECRET_ID " , # e.g. "oauth-client-demo"
"secret" : {
"labels" : { "type" : "oauth_client" },
"replication" : { "automatic" : {}},
},
})
payload_bytes = json . dumps ( cred ) . encode ( "UTF-8" )
crc32c = google_crc32c . Checksum ()
crc32c . update ( payload_bytes )
client . add_secret_version ( request = {
"parent" : secret . name ,
"payload" : {
"data" : payload_bytes ,
"data_crc32c" : int ( crc32c . hexdigest (), 16 ),
},
})
Note: You can verify that the OAuth client credential has been stored in Secret Manager through the Google Cloud console .
List OAuth clients
In the Google Cloud console, go to the Google Auth Platform > Clients page, which lists OAuth client credentials.
Go to Google Auth Platform > Clients
Delete an OAuth client
In the Google Cloud console, go to the Google Auth Platform > Clients page.
Go to Google Auth Platform > Clients
Select the OAuth client credential(s) to be deleted, and click delete.
Customer-managed encryption keys (CMEK)
By default, Google Cloud automatically encrypts data when it is at rest
using encryption keys managed by Google. If you have specific compliance or
regulatory requirements related to the keys that protect your data, you can use
customer-managed encryption keys (CMEK) for your deployed
agents.
Refer to the CMEK for Vertex AI
documentation for general requirements and guidance on using CMEK with
Vertex AI, including:
Project setup (billing and enabled APIs)
Creation of key rings and keys
Required permission grants
To enable CMEK for your agent, you need to specify the encryption_spec
with your Cloud KMS key when creating an Agent Engine instance. Refer
to Configure customer-managed encryption
keys for code samples.
Limitations
The following limitations apply when using CMEK with
Vertex AI Agent Engine:
Multi-region keys are not allowed: Only single-region keys are
supported. The region of the key ring and the key has to be the same as your
Agent Engine instance.
Encryption key cannot be updated for CMEK instances: Once an agent is
deployed with a CMEK key, the encryption key cannot be changed for that
deployment. To use a new key, you must deploy a new Agent Engine instance.
Certain metadata and operational data not encrypted with your key: CMEK
encrypts the agent's core data at rest. However, certain metadata and
runtime operational data are not encrypted with your key. Instead, they
are encrypted using Google's default encryption. This includes:
Agent metadata:
Display names
Descriptions
Runtime operational data:
Service account emails
Agent object class method names
Environment variables
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
