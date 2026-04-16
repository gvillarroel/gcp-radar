---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.077Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Customer Managed Encryption Key (CMEK)"
feature_slug: "customer-managed-encryption-key-cmek"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/cmek"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
keywords:
  - "encryption"
  - "managed"
  - "cmek"
  - "keys"
  - "customer"
---

# Customer Managed Encryption Key (CMEK)

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Customer Managed Encryption Keys in Agent Assist are generally available and enable customers to control encryption key management details, audit logs, and key lifecycles.

## Extended Definition

Customer Managed Encryption Keys in Agent Assist are generally available and enable customers to control encryption key management details, audit logs, and key lifecycles.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek)
- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Agent Assist Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Agent Assist.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- It won't be returned in the create response, but will have the following format: service- PROJECT NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com Grant the CCAI CMEK Service account the Cloud KMS CryptoKey Encrypter/Decrypter role to ensure that the service has permissions to encrypt and decrypt with your key. gcloud kms keys add-iam-policy-binding KMS KEY ID \ --project = PROJECT ID \ --location = LOCATION ID \ --keyring = KMS KEY RING \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Configure a key for an Agent Assist location Use InitializeEncryptionSpec API to configure the key.

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Build the Docker image Under the /ui-connector folder, run the following command: $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME Deploy UI connector to Cloud Run Under the /ui-connector folder , run the following command: If using Direct Egress to connect for Redis connection. $ gcloud run deploy $CONNECTOR IMAGE NAME \ --image gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME \ --platform managed \ --service-account = $CONNECTOR SERVICE ACCOUNT NAME \ --allow-unauthenticated \ --timeout 3600 \ --region $SERVICE REGION \ --network $VPC NETWORK \ --subnet $VPC SUBNET \ --clear-vpc-connector \ --min-instances = 1 \ --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT ,GCP PROJECT ID = $GCP PROJECT ID ,AUTH OPTION = $AUTH OPTION \ --update-secrets = /secret/jwt secret key = ${ JWT SECRET NAME } :latest If using a created Serverless VPC Access connector for Redis connection. $ gcloud run deploy $CONNECTOR IMAGE NAME \ --image gcr.io/ $GCP PROJECT ID / $CONNECTOR IMAGE NAME \ --platform managed \ --service-account = $CONNECTOR SERVICE ACCOUNT NAME \ --allow-unauthenticated \ --timeout 3600 \ --region $SERVICE REGION \ --vpc-connector $VPC CONNECTOR NAME \ --clear-network \ --min-instances = 1 \ --no-cpu-throttling \ --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT ,GCP PROJECT ID = $GCP PROJECT ID ,AUTH OPTION = $AUTH OPTION \ --update-secrets = /secret/jwt secret key = ${ JWT SECRET NAME } :latest Make a note of the service URL for the deployed UI Connector, which will be used by clients (agent desktops).
- Build the Docker image Under the /cloud-pubsub-interceptor folder, run the following command: $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID / $INTERCEPTOR IMAGE NAME Deploy Pub/Sub interceptor to Cloud Run Under the /cloud-pubsub-interceptor folder, run the following command: If using Direct Egress to connect for Redis connection. $ gcloud run deploy $INTERCEPTOR SERVICE NAME \ --image gcr.io/ $GCP PROJECT ID / $INTERCEPTOR IMAGE NAME \ --platform managed \ --service-account = $INTERCEPTOR SERVICE ACCOUNT NAME \ --region $SERVICE REGION \ --network $VPC NETWORK \ --subnet $VPC SUBNET \ --clear-vpc-connector \ --ingress = internal \ --min-instances = 1 \ --no-cpu-throttling \ You can also add LOGGING FILE here to specify the logging file path on Cloud Run. --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT If using a created Serverless VPC Access connector for Redis connection. $ gcloud run deploy $INTERCEPTOR SERVICE NAME \ --image gcr.io/ $GCP PROJECT ID / $INTERCEPTOR IMAGE NAME \ --platform managed \ --service-account = $INTERCEPTOR SERVICE ACCOUNT NAME \ --region $SERVICE REGION \ --vpc-connector $VPC CONNECTOR NAME \ --clear-network \ --ingress = internal \ --min-instances = 1 \ You can also add LOGGING FILE here to specify the logging file path on Cloud Run. --set-env-vars REDISHOST = $REDIS HOST ,REDISPORT = $REDIS PORT Save the deployed URL Set the deployed URL as the INTERCEPTOR SERVICE URL environment variable.
- To do so, you can use python secrets to generate secure random numbers for it. generate secret key.py import secrets jwt secret key = secrets.token bytes ( 16 ) print ( jwt secret key ) # Output example: b'L\x9b\xd6i4\xc3\x1d\x95\xe3\xf78z\xdda\x97\xec' Store the key in Secret Manager In the following example command, replace my key with the secret key you plan to use. $ python generate secret key.py gcloud secrets create $JWT SECRET NAME --data-file = - \ --replication-policy = user-managed --locations = $SERVICE REGION Set up Memorystore for Redis To set up Redis, you need the following environment variables: VPC CONNECTOR NAME : The name of your Serverless VPC Access connector for connecting Cloud Run services to Memorystore for Redis .
- New recognition result-notification events : Events sent when intermediate transcript is recognized from an agent or customer (for example, customer says Hi, how can I help you? , an intermediate transcript is Hi how can while customer is speaking).

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- Within both the Agent Assist simulator and UI modules , both generative knowledge assist and proactive generative knowledge assist automatically display a document metadata value for certain keys. gka_source_label : Value is displayed in the suggestion card directly. gka_source_tooltip : When the value is struct type, holding your cursor over the source link expands and displays the value in a tooltip.
- Access data through Customer Experience Insights Alternatively, your proactive generative knowledge assist generated queries and answers are automatically populated to Customer Experience Insights.
- Generative knowledge assist synthesizes that information with the ongoing conversation and available customer metadata to give a more relevant and timely answer to your agent.

