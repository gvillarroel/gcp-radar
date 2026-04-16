---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.077Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Build your own Gen AI Assist"
feature_slug: "build-your-own-gen-ai-assist"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/byoa-extension"
keywords:
  - "build"
  - "your"
  - "preview"
  - "available"
---

# Build your own Gen AI Assist

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Build your own Gen AI Assist is in preview, available in all Customer Engagement Suite regions and supporting Gemini foundation model access and trigger events based on agent and customer messages.

## Extended Definition

Build your own Gen AI Assist is in preview, available in all Customer Engagement Suite regions and supporting Gemini foundation model access and trigger events based on agent and customer messages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist](https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist)
- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/byoa-extension](https://docs.cloud.google.com/agent-assist/docs/byoa-extension)

## Supporting Pages

### Build your own GenAI assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist](https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a JSON example of a conversation profile. { "displayName" : "build-your-own-assist-test" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "generators" : "projects/PROJECT ID/locations/global/generators/GENERATOR ID" } } } Verify with the simulator You can verify the conversation profile in the Agent Assist simulator .
- Build your own GenAI assist includes the following quota limits: Name Description Limit Generator manager operations per minute (per region) Limit on the number of generator manager operations that can be performed each minute, such as creating, listing or deleting generators.
- Generator outputs After you provide the inputs to the text generator, the Build your own GenAI assist generator provides suggestions such as article links, appropriate responses, or backend information about promotional offers.
- Home Documentation AI and ML Agent Assist Guides Send feedback Build your own GenAI assist Stay organized with collections Save and categorize content based on your preferences.

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the following IAM roles to your account: Project IAM Admin (roles/resourcemanager.projectIamAdmin) Service Usage Admin (roles/serviceusage.serviceUsageAdmin) Service Account Admin (roles/iam.serviceAccountAdmin) Service Account User (roles/iam.serviceAccountUser) Pub/Sub Admin (roles/pubsub.admin) Secret Manager Admin (roles/secretmanager.admin) Cloud Build Editor (roles/cloudbuild.builds.editor) Artifact Registry Administrator (roles/artifactregistry.admin) Storage Admin (roles/storage.admin) Cloud Run Admin (roles/run.admin) Cloud Memorystore Redis Admin (roles/redis.admin) Serverless VPC Access Admin (roles/vpcaccess.admin) Build images for UI Connector and for Cloud Pub/Sub Interceptor and note the image name.
- New suggestion events Replace your-new-suggestion-topic-id with the Cloud Pub/Sub topic you configured for new suggestions: $ export TOPIC ID = 'your-new-suggestion-topic-id' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /human-agent-assistant-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com New message events Replace your-new-message-event-topic-id with the Cloud Pub/Sub topic you configured for new message events: $ export TOPIC ID = 'your-new-message-event-topic-id' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /new-message-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com Conversation lifecycle events Replace your-conversation-lifecycle-event-topic with the Cloud Pub/Sub topic you configured for new conversation lifecycle events: $ export TOPIC ID = 'your-conversation-lifecycle-event-topic' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /conversation-lifecycle-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com New recognition-result notification events $ export TOPIC ID = 'your-new-recognition-result-notification-event-topic' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /new-recognition-result-notification-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Build the Docker image Under the /ui-connector folder, run the following command: $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME Deploy UI connector to Cloud Run Under the /ui-connector folder , run the following command: If using Direct Egress to connect for Redis connection. $ gcloud run deploy $CONNECTOR IMAGE NAME \ --image gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME \ --platform managed \ --service-account = $CONNECTOR SERVICE ACCOUNT NAME \ --allow-unauthenticated \ --timeout 3600 \ --region $SERVICE REGION \ --network $VPC NETWORK \ --subnet $VPC SUBNET \ --clear-vpc-connector \ --min-instances = 1 \ --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT ,GCP PROJECT ID = $GCP PROJECT ID ,AUTH OPTION = $AUTH OPTION \ --update-secrets = /secret/jwt secret key = ${ JWT SECRET NAME } :latest If using a created Serverless VPC Access connector for Redis connection. $ gcloud run deploy $CONNECTOR IMAGE NAME \ --image gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME \ --platform managed \ --service-account = $CONNECTOR SERVICE ACCOUNT NAME \ --allow-unauthenticated \ --timeout 3600 \ --region $SERVICE REGION \ --vpc-connector $VPC CONNECTOR NAME \ --clear-network \ --min-instances = 1 \ --no-cpu-throttling \ --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT ,GCP PROJECT ID = $GCP PROJECT ID ,AUTH OPTION = $AUTH OPTION \ --update-secrets = /secret/jwt secret key = ${ JWT SECRET NAME } :latest Make a note of the service URL for the deployed UI Connector, which will be used by clients (agent desktops).
- To create the service accounts, replace the value of $CONNECTOR SERVICE ACCOUNT ID and $INTERCEPTOR SERVICE ACCOUNT ID if and run the following commands: $ export CONNECTOR SERVICE ACCOUNT ID = 'aa-ui-connector' && gcloud iam service-accounts create $CONNECTOR SERVICE ACCOUNT ID \ --description = 'Agent Assist integration - UI connector service account' \ --display-name = 'Agent Assist integration - UI connector' $ export INTERCEPTOR SERVICE ACCOUNT ID = 'aa-pubsub-interceptor' && gcloud iam service-accounts create $INTERCEPTOR SERVICE ACCOUNT ID \ --description = 'Agent Assist integration - Pubsub interceptor service account' \ --display-name = 'Agent Assist integration - Pubsub interceptor' Use the following sample command to assign the following roles to the UI connector and Cloud Pub/Sub connector service accounts: $ gcloud projects add-iam-policy-binding $GCP PROJECT ID \ --member = 'serviceAccount:$CONNECTOR SERVICE ACCOUNT ID@$GCP PROJECT ID.iam.gserviceaccount.com' \ --role = 'roles/pubsub.editor' Grant the following IAM roles to the UI connector service account: roles/redis.editor roles/vpcaccess.user roles/compute.viewer roles/secretmanager.secretAccessor roles/dialogflow.agentAssistClient Grant the following roles to the Cloud Pub/Sub connector service account: roles/redis.editor roles/vpcaccess.user roles/compute.viewer Set environment variables Set the values of the following environment variables to be the service accounts you just created or the default Compute Engine service account in your project.

### "User guide: Build your own GenAI assist extension \_|\_ Agent Assist \_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/byoa-extension](https://docs.cloud.google.com/agent-assist/docs/byoa-extension)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Agent Assist Guides Send feedback User guide: Build your own GenAI assist extension Stay organized with collections Save and categorize content based on your preferences.
- This guide provides instructions for using Vertex AIExtensions to create a Build your own GenAI assist (BYOA) generator.
- Agent Assist console Click Build-your-own-assist > Create .
- Prerequisites To use a Vertex AI Extensions tool, you must have access to the following: Agent Assist console Vertex AI for Vertex extension APIs Cloud Storage for the API spec Create a Vertex AI extension You must set up your own Vertex AI extension which calls the API you want to use.

