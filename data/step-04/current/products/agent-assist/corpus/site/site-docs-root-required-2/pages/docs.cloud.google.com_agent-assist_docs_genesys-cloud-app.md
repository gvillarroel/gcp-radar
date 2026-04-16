---
title: "Deploy the Genesys Cloud application server \_|\_ Agent Assist \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/features
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app
  title: "Deploy the Genesys Cloud application server \_|\_ Agent Assist \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Deploy the Genesys Cloud application server
Stay organized with collections
Save and categorize content based on your preferences.
You can set up an application server for rendering Agent Assist suggestions on the web in Genesys Cloud .
Objectives
Genesys Cloud integration involves the following processes:
Deploy the backend server for the UI module to call the Dialogflow API, register an authentication token, and setup cloud Pub/Sub and Memorystore for Redis.
Deploy the Genesys Cloud application server for rendering the Agent Assist UI module in Cloud Run .
Create OAuth client .
Complete the environment variables .
Set up the interaction widget in Genesys Cloud.
Configure the Agent Assist integration with the interaction widget in Genesys Cloud.
Configure Messenger in Genesys Cloud.
Use the Genesys Cloud web chat and messaging tools to test the integration.
Before you begin
You must complete the following actions before starting the Genesys Cloud integration:
Install the Google Cloud CLI , if you haven't already configured it.
Follow the Google Cloud instructions to create a service account and assign the Dialogflow API client role .
Reach out to agent-assist-ui-modules-support@google.com for access to the Genesys Cloud repository .
Deploy an Agent Assist UI modules backend . When you deploy the backend server, specify the environment variable AUTH_OPTION to be GenesysCloud , following the deployment instructions .
Deploy Genesys Cloud application server using CLI
Clone the git repository onto your local machine or development environment with the following code:
git clone https://github.com/GoogleCloudPlatform/agent-assist-integrations
In your local terminal, use the following code to change the active directory to the repository root directory where the Docker file resides before running the Google Cloud CLI builds.
cd genesyscloud/frontend
When prompted for a service name, press Enter to accept the default.
Deploy the integration using the following command. Replace PROJECT-ID with your agent's Google Cloud project ID, UI_MODULE_SERVICE_ACCOUNT with your service account client email, and set the REGION for Cloud Run .
gcloud run deploy $ AA_MODULE_APPLICATION_SERVER
--source ./
--service-account=$ ui_module_service_account
--memory 1Gi --platform managed
--region us-central1
--allow-unauthenticated
Click Enter to accept the default service name.
For details, see Cloud Run documentation . In the Google Cloud console, you can view a list of your active integration deployments under Cloud Run .
Create an OAuth client
Follow the instructions in the Genesys Cloud documentation to create a new OAuth client.
Ensure the grant type is Code Authorization / PKCE .
Add your application URL to the Authorized redirect URIs section.
Update the OAuth 2.0 client token duration to 3600 seconds . This matches the default 1-hour JWT token duration for Dialogflow API access. If you require a customized duration, update both the OAuth and JWT token durations accordingly.
{Application_SERVER_URL}?conversationProfile={CONVERSATION_PROFILE_NAME}&features={FEATURES}
Replace {APPLICATION_SERVER_URL} with the URL of your UI application server.
Replace CONVERSATION_PROFILE_NAME with the name of the conversation profile , such as projects/your-project/locations/your-location/conversationProfiles/abc123 .
Replace {FEATURES} with a comma-separated list of Agent Assist features you would like the application to include. Important: Only include features configured in your conversation profile. Genesys cloud supports the following features
To add scopes to the OAuth client, navigate to the Scopes section.
Select the following scopes: alerting , authorization , conversations , notifications , messaging , and organization .
Example URL:
https://my-project.wm.run.app?conversationProfile = projects/my-project/conversationProfiles/abc123&features = CONVERSATION_SUMMARIZATION,AGENT_COACHING,PROACTIVE_GENERATIVE_KNOWLEDGE_ASSIST
We recommend enabling pop-out authentication for embedded iframes to ensure a seamless login experience.
Complete the environment variables
The Genesys Cloud application uses the following environment variables. To set the environment variables, follow the Cloud Run instructions .
OAUTH_CLIENT_ID : Genesys Cloud OAuth Client ID.
GENESYS_CLOUD_REGION : Genesys Cloud region . For example, usw2.pure.cloud for US West(Oregon). The default value is mypurecloud.com .
GENESYS_CLOUD_ENVIRONMENT : Genesys cloud environment. The default value is prod .
PROXY_SERVER : The URL of the Agent Assist backend connector.
APPLICATION_SERVER_URL : URL of the UI application server.
PROJECT_ID : Your Google Cloud project ID.
CONVERSATION_PROFILE : The conversation profile to use. This should match the profile in the redirect URL of the OAuth client.
FEATURES : Comma-separated constant for Agent Assist features . This should match the features in the redirect URL of the OAuth client.
CHANNEL : Choose integration type, the value could be "voice" or "chat".
Sample .env file:
OAUTH_CLIENT_ID ={ your-oauth-client-id }
GENESYS_CLOUD_REGION ={ your-pure-cloud-region }
GENESYS_CLOUD_ENVIRONMENT ={ your-pure-cloud-environment }
PROXY_SERVER ={ your-proxy-server-endpoint }
PROJECT_ID ={ your-gcp-project-id }
CONVERSATION_PROFILE ={ your-conversation-profile }
FEATURES = ARTICLE_SUGGESTION,CONVERSATION_SUMMARIZATION
CHANNEL ={ use-voice-or-chat }
When you create an OAuth client, Genesys Cloud also provides a client ID.
Run the deployment command with updated environment variables.
gcloud run deploy $ AA_MODULE_APPLICATION_SERVER
--source ./
--service-account=$ ui_module_service_account
--memory 1Gi --platform managed
--region us-central1
--allow-unauthenticated
--set-env-vars ^~^OAUTH_CLIENT_ID=$ OAUTH_CLIENT_ID ~GENESYS_CLOUD_REGION=$ GENESYS_CLOUD_REGION ~GENESYS_CLOUD_ENVIRONMENT=$ GENESYS_CLOUD_ENVIRONMENT ~CONVERSATION_PROFILE=$ CONVERSATION_PROFILE ~FEATURES=$ FEATURES ~PROJECT_ID=$ PROJECT_ID ~APPLICATION_SERVER_URL=''~PROXY_SERVER=$ PROXY_SERVER ~APPLICATION_SERVER_URL=$ APPLICATION_SERVER_URL
The Genesys Cloud application server must be deployed to a Google Cloud hosting service. Use App Engine or Cloud Run.
Shut down the application server
Delete the Cloud Run service.
In your local terminal, run the following command:
gcloud run services list
Select the previously chosen target platform to list active deployments.
Run the following command:
gcloud run services delete agent-assist-modules-application-server
Price disclaimer
If you use Genesys Cloud integration, there is a cost associated with the underlying Cloud Run service.
What's next
Configure for chat integration
Test chat integration
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
