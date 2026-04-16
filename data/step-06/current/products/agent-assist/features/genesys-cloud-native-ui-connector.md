---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.080Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Genesys Cloud native UI connector"
feature_slug: "genesys-cloud-native-ui-connector"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
keywords:
  - "provides"
  - "genesys"
  - "native"
  - "connector"
---

# Genesys Cloud native UI connector

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist now provides a native UI Connector for Genesys Cloud to enable chat conversation integration.

## Extended Definition

Agent Assist now provides a native UI Connector for Genesys Cloud to enable chat conversation integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)

## Supporting Pages

### "Deploy the Genesys Cloud application server \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample .env file: OAUTH CLIENT ID ={ your-oauth-client-id } GENESYS CLOUD REGION ={ your-pure-cloud-region } GENESYS CLOUD ENVIRONMENT ={ your-pure-cloud-environment } PROXY SERVER ={ your-proxy-server-endpoint } PROJECT ID ={ your-gcp-project-id } CONVERSATION PROFILE ={ your-conversation-profile } FEATURES = ARTICLE SUGGESTION,CONVERSATION SUMMARIZATION CHANNEL ={ use-voice-or-chat } When you create an OAuth client, Genesys Cloud also provides a client ID.
- Run the deployment command with updated environment variables. gcloud run deploy $ AA MODULE APPLICATION SERVER --source ./ --service-account=$ ui module service account --memory 1Gi --platform managed --region us-central1 --allow-unauthenticated --set-env-vars ^ ^OAUTH CLIENT ID=$ OAUTH CLIENT ID GENESYS CLOUD REGION=$ GENESYS CLOUD REGION GENESYS CLOUD ENVIRONMENT=$ GENESYS CLOUD ENVIRONMENT CONVERSATION PROFILE=$ CONVERSATION PROFILE FEATURES=$ FEATURES PROJECT ID=$ PROJECT ID APPLICATION SERVER URL='' PROXY SERVER=$ PROXY SERVER APPLICATION SERVER URL=$ APPLICATION SERVER URL The Genesys Cloud application server must be deployed to a Google Cloud hosting service.
- Deploy Genesys Cloud application server using CLI Clone the git repository onto your local machine or development environment with the following code: git clone https://github.com/GoogleCloudPlatform/agent-assist-integrations In your local terminal, use the following code to change the active directory to the repository root directory where the Docker file resides before running the Google Cloud CLI builds. cd genesyscloud/frontend When prompted for a service name, press Enter to accept the default.
- Objectives Genesys Cloud integration involves the following processes: Deploy the backend server for the UI module to call the Dialogflow API, register an authentication token, and setup cloud Pub/Sub and Memorystore for Redis.

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- Access data through Customer Experience Insights Alternatively, your proactive generative knowledge assist generated queries and answers are automatically populated to Customer Experience Insights.
- Proactively suggest Q & A for your agents Proactive generative knowledge assist follows an ongoing conversation and proactively provides search query suggestions and answers.
- In the preceding example, the flow-based data store agent provides the following suggestions: Suggested query : Refund processing time .

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Build the Docker image Under the /ui-connector folder, run the following command: $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME Deploy UI connector to Cloud Run Under the /ui-connector folder , run the following command: If using Direct Egress to connect for Redis connection. $ gcloud run deploy $CONNECTOR IMAGE NAME \ --image gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME \ --platform managed \ --service-account = $CONNECTOR SERVICE ACCOUNT NAME \ --allow-unauthenticated \ --timeout 3600 \ --region $SERVICE REGION \ --network $VPC NETWORK \ --subnet $VPC SUBNET \ --clear-vpc-connector \ --min-instances = 1 \ --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT ,GCP PROJECT ID = $GCP PROJECT ID ,AUTH OPTION = $AUTH OPTION \ --update-secrets = /secret/jwt secret key = ${ JWT SECRET NAME } :latest If using a created Serverless VPC Access connector for Redis connection. $ gcloud run deploy $CONNECTOR IMAGE NAME \ --image gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME \ --platform managed \ --service-account = $CONNECTOR SERVICE ACCOUNT NAME \ --allow-unauthenticated \ --timeout 3600 \ --region $SERVICE REGION \ --vpc-connector $VPC CONNECTOR NAME \ --clear-network \ --min-instances = 1 \ --no-cpu-throttling \ --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT ,GCP PROJECT ID = $GCP PROJECT ID ,AUTH OPTION = $AUTH OPTION \ --update-secrets = /secret/jwt secret key = ${ JWT SECRET NAME } :latest Make a note of the service URL for the deployed UI Connector, which will be used by clients (agent desktops).
- To create the service accounts, replace the value of $CONNECTOR SERVICE ACCOUNT ID and $INTERCEPTOR SERVICE ACCOUNT ID if and run the following commands: $ export CONNECTOR SERVICE ACCOUNT ID = 'aa-ui-connector' && gcloud iam service-accounts create $CONNECTOR SERVICE ACCOUNT ID \ --description = 'Agent Assist integration - UI connector service account' \ --display-name = 'Agent Assist integration - UI connector' $ export INTERCEPTOR SERVICE ACCOUNT ID = 'aa-pubsub-interceptor' && gcloud iam service-accounts create $INTERCEPTOR SERVICE ACCOUNT ID \ --description = 'Agent Assist integration - Pubsub interceptor service account' \ --display-name = 'Agent Assist integration - Pubsub interceptor' Use the following sample command to assign the following roles to the UI connector and Cloud Pub/Sub connector service accounts: $ gcloud projects add-iam-policy-binding $GCP PROJECT ID \ --member = 'serviceAccount:$CONNECTOR SERVICE ACCOUNT ID@$GCP PROJECT ID.iam.gserviceaccount.com' \ --role = 'roles/pubsub.editor' Grant the following IAM roles to the UI connector service account: roles/redis.editor roles/vpcaccess.user roles/compute.viewer roles/secretmanager.secretAccessor roles/dialogflow.agentAssistClient Grant the following roles to the Cloud Pub/Sub connector service account: roles/redis.editor roles/vpcaccess.user roles/compute.viewer Set environment variables Set the values of the following environment variables to be the service accounts you just created or the default Compute Engine service account in your project.
- Build the Docker image Under the /cloud-pubsub-interceptor folder, run the following command: $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID / $INTERCEPTOR IMAGE NAME Deploy Pub/Sub interceptor to Cloud Run Under the /cloud-pubsub-interceptor folder, run the following command: If using Direct Egress to connect for Redis connection. $ gcloud run deploy $INTERCEPTOR SERVICE NAME \ --image gcr.io/ $GCP PROJECT ID / $INTERCEPTOR IMAGE NAME \ --platform managed \ --service-account = $INTERCEPTOR SERVICE ACCOUNT NAME \ --region $SERVICE REGION \ --network $VPC NETWORK \ --subnet $VPC SUBNET \ --clear-vpc-connector \ --ingress = internal \ --min-instances = 1 \ --no-cpu-throttling \ You can also add LOGGING FILE here to specify the logging file path on Cloud Run. --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT If using a created Serverless VPC Access connector for Redis connection. $ gcloud run deploy $INTERCEPTOR SERVICE NAME \ --image gcr.io/ $GCP PROJECT ID / $INTERCEPTOR IMAGE NAME \ --platform managed \ --service-account = $INTERCEPTOR SERVICE ACCOUNT NAME \ --region $SERVICE REGION \ --vpc-connector $VPC CONNECTOR NAME \ --clear-network \ --ingress = internal \ --min-instances = 1 \ You can also add LOGGING FILE here to specify the logging file path on Cloud Run. --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT Save the deployed URL Set the deployed URL as the INTERCEPTOR SERVICE URL environment variable.
- To do so, you can use python secrets to generate secure random numbers for it. generate secret key.py import secrets jwt secret key = secrets.token bytes ( 16 ) print ( jwt secret key ) # Output example: b'L\x9b\xd6i4\xc3\x1d\x95\xe3\xf78z\xdda\x97\xec' Store the key in Secret Manager In the following example command, replace my key with the secret key you plan to use. $ python generate secret key.py gcloud secrets create $JWT SECRET NAME --data-file = - \ --replication-policy = user-managed --locations = $SERVICE REGION Set up Memorystore for Redis To set up Redis, you need the following environment variables: VPC CONNECTOR NAME : The name of your Serverless VPC Access connector for connecting Cloud Run services to Memorystore for Redis .

