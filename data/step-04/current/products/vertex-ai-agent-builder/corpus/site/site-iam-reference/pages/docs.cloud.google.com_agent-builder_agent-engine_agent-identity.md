---
title: "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
  title: "Use agent identity with Vertex AI Agent Engine \_|\_ Vertex AI Agent Builder\
    \ \_|\_ Google Cloud Documentation"
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
Use agent identity with Vertex AI Agent Engine
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to use Identity Access Management
(IAM) agent identity to provide security and access
management features when using agents on Vertex AI Agent Engine Runtime.
Overview
Agent identity provides a per-agent identity that enables a least-privilege
approach and is tied to the lifecycle of the agent, making agent identity a more
secure principal than service accounts. Existing access management controls
through IAM support agent identity to enable strong governance.
Agent identity credentials are secured by default through a Google-managed
Context-Aware Access (CAA) policy. This policy enforces mTLS
binding
to ensure that the agent's credentials in the form of certificate-bound
tokens can only be used from
their intended, trusted runtime environment (for example, a Cloud Run
container). This security baseline makes stolen credentials
un-replayable, protecting against Credential Theft and Account Takeover (ATO).
This page covers the following topics:
Creating an agent with agent identity : Create an agent such that the agent automatically receives a unique identity when you deploy to Vertex AI Agent Engine Runtime.
Authorize access to Google Cloud APIs using agent identity : Use the
provisioned agent identity to grant or deny the agent access to Google Cloud's
first party tools, APIs, and resources. This also includes access to other
agents hosted on Vertex AI Agent Engine using Agent2Agent (A2A) Protocol .
Access third party services using delegated authority using
OAuth : Configure user delegated authentication to
first and third party tools using OAuth so the agent can perform tasks on
your behalf.
Access third party services using API keys : Connect to
third party services using API keys that are securely stored and available
during runtime.
Log agent activity : View agent identity in
logs across Google Cloud services. For user-delegated flows, logs
show both the user identity and the agent identity.
List agents and agent identity : View the
list of your agents and their identities in Vertex AI Agent Engine.
Opt out of Context-Aware Access (not recommended): Opt out
of the default Context-Aware Access (CAA) policy.
Limitations
Consider the following limitations when you plan your project:
Agent identities cannot be granted Legacy Bucket roles
( storage.legacyBucketReader , storage.legacyBucketWriter , or
storage.legacyBucketOwner ) on Cloud Storage buckets.
We recommend using agent identity in test environments only.
Create an agent with agent identity
You can provision agents you deploy to Vertex AI Agent Engine with a
unique identity upon creating your Agent Engine instance. The identity is tied to the
Vertex AI Agent Engine's agent resource ID and is independent of the
agent framework you used to develop the agent.
You have the following options when creating an agent identity:
Create an Agent Engine instance without deploying agent code : If you want
to set up IAM policies before deploying the agent, you can
create an agent identity without deploying your agent code. To do so, create
an Agent Engine instance with just the identity_type field:
import vertexai
from vertexai import agent_engines
from vertexai import types
client = vertexai . Client (
project = PROJECT_ID ,
location = LOCATION ,
http_options = dict ( api_version = "v1beta1" )
)
remote_app = client . agent_engines . create (
config = { "identity_type" : types . IdentityType . AGENT_IDENTITY }
)
Once you create the Agent Engine instance with the agent identity, you can
add agent code using
agent_engine.update(...) .
Create an Agent Engine instance while deploying agent code : If you want to
provision the agent identity while deploying your agent code, use
the Vertex AI SDK for Python and the identity_type=AGENT_IDENTITY flag.
Define the agent in your preferred framework:
from google.adk.agents import Agent
agent = Agent (
model = "gemini-2.5-flash" ,
name = "minimal_agent" ,
instruction = "You are a helpful assistant." ,
)
Then, deploy it:
import vertexai
from vertexai import types
from vertexai.agent_engines import AdkApp
# Initialize the Vertex AI client with v1beta1 API for agent identity support
client = vertexai . Client (
project = PROJECT_ID ,
location = LOCATION ,
http_options = dict ( api_version = "v1beta1" )
)
# Use the proper wrapper class for your Agent Framework
app = AdkApp ( agent = agent )
# Deploy the agent with Agent Identity
remote_app = client . agent_engines . create (
agent = app ,
config = {
"display_name" : "running-agent-with-identity" ,
"identity_type" : types . IdentityType . AGENT_IDENTITY ,
"requirements" : [ "google-cloud-aiplatform[adk,agent_engines]" ],
"staging_bucket" : f "gs://" BUCKET _NAME ",
},
)
print ( f "Effective Identity: { remote_app . api_resource . spec . effective_identity } " )
where BUCKET_NAME is the name of your Cloud Storage bucket.
The Agent Engine instance is created with a read-only, system attested agent
identity (a principal identifier ):
# Agent identity Format
principal:// TRUST_DOMAIN / NAMESPACE / AGENT_NAME
# Example agent identity
principal://agents.global.org- ORGANIZATION_ID .system.id.goog/resources/aiplatform/projects/ PROJECT_NUMBER /locations/ LOCATION /reasoningEngines/ AGENT_ENGINE_ID
The following parts are auto-provisioned to you as part of agent identity:
TRUST_DOMAIN : A trust domain is provisioned for you when you enable the Vertex AI API:
If you have an organization, the trust domain is created at the organization level with the format agents.global.org- ORGANIZATION_ID .system.id.goog .
If your project doesn't have an organization, a trust domain is created at the project level with the format agents.global.project- PROJECT_NUMBER .system.id.goog .
NAMESPACE : The agent's immutable resource path.
AGENT_NAME : The immutable agent-reasoning-engine-id .
Agent identity is based on
SPIFFE . We also
auto-provision and manage an x509 certificate on the agent with the same
identity for secure authentication.
You can view the identity through the Vertex AI Agent Engine Google Cloud console and API.
Note: If the identity flag isn't configured, the Agent Engine instance continues to use service accounts. This ensures backward compatibility if you already implemented Infrastructure-as-Code-based deployments on your agents.
Access Google Cloud APIs and services using agent identity
Once you create an agent with agent identity, you can grant or deny the agent access to Google Cloud APIs and services using the following IAM policies:
Allow policies : Grant an agent access to a Google Cloud resource.
Deny policies : Deny an agent access to a Google Cloud resource.
Grant access to an agent
Grant IAM permissions to the agent identity. We recommend the
following roles:
roles/aiplatform.expressUser : Grant access to running inference, sessions,
and memory.
roles/serviceusage.serviceUsageConsumer : Grant the agent permission to use
the project's quota and the Vertex AI SDK.
roles/browser : Grant access to basic Google Cloud functionalities.
Additional permissions might be needed if you use logging, metrics, and
Cloud API registry, and for any other resource you want to expose to your
agent. See later for more examples.
Create an IAM allow policy to
grant an agent an IAM role:
# Example: Grant the agent access to vision API.
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID \
--member="principal://agents.global.org- ORGANIZATION_ID .system.id.goog/resources/aiplatform/projects/ PROJECT_NUMBER /locations/ LOCATION /reasoningEngines/ AGENT_ENGINE_ID " \
--role=" ROLE_NAME " \
Replace the following:
ORGANIZATION_ID : The ID for your organization.
PROJECT_NUMBER : Your project number.
LOCATION : Your region. See the supported regions for Vertex AI Agent Engine.
AGENT_ENGINE_ID : The resource ID of your Agent Engine instance.
ROLE_NAME is the name of the role that you want to grant. For
example, roles/vision.user . For a list of predefined roles, see
Understanding roles .
Once IAM is configured, the Google Cloud SDK's Application Default
Credentials automatically uses
the agent identity to perform authentication to
Google Cloud resources.
Grant access to multiple agents
You can grant an IAM role to all Agent Engine agents in a
particular project or across an entire organization.
To grant a role to all Agent Engine agents in a project, use one of the
following commands.
If your project belongs to an organization:
# Grant all agents in a project the following role
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=" ROLE_NAME "
If your project does not belong to an organization:
# Grant all agents in an orgless project the following role
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID \
--member="principalSet://agents.global.project- PROJECT_NUMBER .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=" ROLE_NAME "
It can be easier to grant common permissions such as quota, logging, or access
to models to all agents in the project to simplify deployments. Then grant
specific narrow permissions to individual agents for more sensitive permissions
such as access to data. Granting such permissions is possible at any time after
the first usage of the agent identity feature within an organization or project,
so it can be performed before the deployment of the agent.
For example, the following commands grant basic roles to all agents in a
project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=roles/serviceusage.serviceUsageConsumer
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=roles/browser
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=roles/aiplatform.expressUser
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=roles/cloudapiregistry.viewer
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=roles/logging.logWriter
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platformContainer/aiplatform/projects/ PROJECT_NUMBER " \
--role=roles/monitoring.metricWriter
To grant a role to all Agent Engine agents across an organization:
# Grant all agents in an organization the following role
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID \
--member="principalSet://agents.global.org- ORGANIZATION_ID .system.id.goog/attribute.platform/aiplatform" \
--role=" ROLE_NAME "
Deny access to an agent
To deny an agent access to resources, you can use the IAM deny
policy or set up a principal access boundary
policy .
Deny the agent access to certain resources using the IAM deny policy.
// Deny policy (deny all agents across the org from ability to create or delete buckets)
{
"displayName": "Deny access to bucket for all agent identities in the org",
"rules": [
{
"denyRule": {
"deniedPrincipals": [
"principalSet://<org.id>.global.agent.id.goog/*"
],
"deniedPermissions": [
"iam.googleapis.com/roles.create",
"storage.googleapis.com/buckets.delete"
]
}
}
]
}
Set up Principal Access Boundary to limit the resources that the agent may
access, despite other permissions that the agent might have:
// PAB Policy (Only allow agents to operate within resource boundary)
{
"name":"organizations/ ORGANIZATION_ID /locations/global/principalAccessBoundaryPolicies/example-policy",
"details": {
"rules": [
{
"description": "Restrict agent identity inside a folder",
"resources": [
"//cloudresourcemanager.googleapis.com/folder/0123456789012"
],
"effect": "ALLOW"
}
],
}
}
// Bind PAB policy to all identities in the organization (incl agent id)
gcloud iam principal-access-boundary-policies bindings create example-pab-binding \
--organization=organizations/ ORGANIZATION_ID \
--policy=example-policy \ --target-principal-set=cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION_ID
Access third party services using delegated authority using OAuth
Agent identity can enable the agent to access third party services on your
behalf by integrating with Secret Manager.
To set up the integration with Secret Manager, you first need to store
the auxiliary credentials (Client ID or Client Secret) for accessing the third
party services into Secret Manager (in the consumer project where the
agent is lifecycle managed) using the following steps:
Create a new container in Secret Manager.
Obtain Client ID or Client Secret from the third party app provider.
Add Client ID or Client Secret to Secret Manager.
Restrict access to these credentials based on Agent ID (a principal identifier ):
# Create the secret container
gcloud secrets create my-app-oauth-secret
# Add the actual client secret to Secret Manager
gcloud secrets versions add my-app-oauth-secret --data-file=oauth-secret
# Grant agent identity access to the secret
gcloud secrets add-iam-policy-binding my-app-oauth-secret \
--role='roles/secretmanager.secretAccessor' \
--member="principal://agents.global.org- ORGANIZATION_ID .system.id.goog/resources/aiplatform/projects/ PROJECT_NUMBER /locations/ LOCATION /reasoningEngines/ AGENT_ENGINE_ID " \
Once the secret is stored, the agent can access these credentials during runtime
using its principal identifier and standard
Google Cloud authentication library automatically as part of Application Default
Credential.
# Example: Use agent identity to retrieve third party credentials from Secret Manager
# Use case: Using an agent, the user is trying to post a message on Slack,
# The developer first retrieves secret from Secret Manager using agent identity,
# and then uses it to login to Slack and post a message.
from google.cloud import secretmanager
from google.auth import default
def access_secret ( project_id : str , secret_id : str , version_id : str = "latest" ) - > str :
# Application default credential automatically gets token from MDS using agent identity
agent_identity_credentials , _ = default ()
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ( credentials = agent_identity_credentials )
# Build the resource name of the secret version.
name = f "projects/ { project_id } /secrets/ { secret_id } /versions/ { version_id } "
# Access the secret version.
response = client . access_secret_version ( request = { "name" : name })
# Decode the payload to get the secret string.
secret_value = response . payload . data . decode ( "UTF-8" )
return secret_value
With the client ID and client secret, you can now build your tool and configure
OAuth-based authentication.
The following example uses an agent developed by Agent Development Kit (ADK).
The OAuth-based authentication is wrapped into AuthCredential and
OAuth2Auth as part of the tool construction:
import os
import asyncio
from google.adk.auth.auth_schemes import OpenIdConnectWithConfig
from google.adk.auth.auth_credential import AuthCredential , AuthCredentialTypes , OAuth2Auth
from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset
from google.adk.agents.llm_agent import LlmAgent
auth_scheme = OpenIdConnectWithConfig (
authorization_endpoint = "https://your-endpoint.slack.com/oauth2/v1/authorize" ,
token_endpoint = "https://your-token-endpoint.slack.com/oauth2/v1/token" ,
scopes = [ 'openid' , 'profile' , "email" ]
)
auth_credential = AuthCredential (
auth_type = AuthCredentialTypes . OPEN_ID_CONNECT ,
oauth2 = OAuth2Auth (
client_id = access_secret ( project_id = 'foo' , secret_id = 'slack_oauth_client_id' ),
client_secret = access_secret ( project_id = 'foo' , secret_id = 'slack_oauth_client_secret' ),
)
)
# --- Slack Toolset Configuration Based On OpenAPI Specification ---
with open ( os . path . join ( os . path . dirname ( __file__ ), 'spec.yaml' ), 'r' ) as f :
spec_content = f . read ()
slack_toolset = OpenAPIToolset (
spec_str = spec_content ,
spec_str_type = 'yaml' ,
# ** Crucially, associate the authentication scheme and credentials with these tools. **
# This tells the ADK that the tools require the defined OIDC/OAuth2 flow.
auth_scheme = auth_scheme ,
auth_credential = auth_credential ,
)
# Configure and create the main LLM Agent.
root_agent = LlmAgent (
model = 'gemini-2.5-flash' ,
name = 'enterprise_assistant' ,
instruction = 'Help user integrate with Slack and post messages to Slack.' ,
tools = [ slack_toolset ],
)
During runtime, the following happens (if you use ADK locally through the ADK
web, the steps are automated inside the ADK web and ADK backend):
You access the agent, and the agent decides it needs to invoke the tool (for example, Slack).
The tools programmed inside ADK (with auth_scheme and auth_credential ) returns an authConfig object to the frontend (which includes redirect URI and client ID).
The frontend parses the authConfig object, and you are redirected to the
third party authorization page. After you sign in, you are redirected to the
agent's frontend, and the authorization code is sent to the ADK backend.
The backend uses the authorization code to obtain an access token for the
third party service and continues executing the tool.
If you deploy an ADK agent to Vertex AI Agent Engine Runtime, you need
to build a custom frontend and migrate ADK-web authentication or redirect code
into your frontend to perform the same OAuth integration.
Access third party services using API keys
Agent identity can enable the agent to access third party services and act on
your behalf using API keys. You first need to store the API Keys for access to
the third party services into Secret Manager, and then retrieve these
credentials from the Secret Manager.
from google.adk.tools.openapi_tool.auth.auth_helpers import token_to_scheme_credential
from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset
# Access secret is defined in the code blocks above
WEATHER_DOT_COM_API_KEY = access_secret ( project_id = 'foo' , secret_id = 'weather_dot_com_api_key' )
auth_scheme , auth_credential = token_to_scheme_credential (
"apikey" , "query" , "apikey" , WEATHER_DOT_COM_API_KEY
)
sample_api_toolset = OpenAPIToolset (
spec_str = "..." ,
spec_str_type = "yaml" ,
auth_scheme = auth_scheme ,
auth_credential = auth_credential ,
)
Log agent activity
If you enable Cloud Logging, you can view
logs of which agent and
users have accessed a Google Cloud resource.
When the agent acts on a user's behalf, the logs show both the agent's and user's identities.
When the agent is acting on its own authority, the logs only show the agent's identity.
List agents and their identities
You can see the list of your agent identities in
Vertex AI Agent Engine using the Google Cloud console and command line.
Console
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
Deployed agents that are part of the selected project appear in the list. You can use the Filter field to filter the list by your specified column.
For each agent, agent identity is listed under the Identity column.
REST API
You can retrieve the agent identity when getting an Agent Engine instance using the REST API.
The response includes the agent identity in the following format:
{
...
spec: {
"effectiveIdentity": "agents.global.org- ORGANIZATION_ID .system.id.goog/resources/aiplatform/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ AGENT_ENGINE_ID "
}
...
}
For Agent Engine instances not using agent identity, the effectiveIdentity
field contains the service agent or service account name associated with the
Agent Engine instance.
Opt out of Context-Aware Access (CAA)
For corner cases, such as specific token sharing requirements among agents, you
can opt out of the default CAA policy. This action is strongly discouraged, as it
leaves an agent vulnerable to credential theft.
Opt out of the default Context-Aware Access (CAA) policy by setting the
following environment
variable when you
create your Agent Engine instance :
config = {
"env_vars" : {
"GOOGLE_API_PREVENT_AGENT_TOKEN_SHARING_FOR_GCP_SERVICES" : False ,
}
}
What's next
Use the agent .
Manage deployed agents .
Troubleshoot deploying an agent .
Get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
