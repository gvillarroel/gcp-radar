---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.079Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Agent Assist integration backend authentication customization"
feature_slug: "agent-assist-integration-backend-authentication-customization"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-basics"
  - "https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app"
keywords:
  - "authentication"
  - "customization"
  - "repository"
  - "backend"
  - "integration"
---

# Agent Assist integration backend authentication customization

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

The Agent Assist integration backend repository now supports authentication customization and agent authentication via Twilio, Genesys Cloud, and Salesforce providers.

## Extended Definition

The Agent Assist integration backend repository now supports authentication customization and agent authentication via Twilio, Genesys Cloud, and Salesforce providers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/backend-basics](https://docs.cloud.google.com/agent-assist/docs/backend-basics)
- [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)

## Supporting Pages

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customize the user authentication method The code repository supports both backend users and users of the frontend module for Genesys Cloud and Twilio.
- For UI Connector, run the following command under ./ui-connector folder. $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID /aa-integration-backend/ui-connector For Cloud Pub/Sub Interceptor, run the following command under ./cloud-pubsub-interceptor folder. $ gcloud builds submit --tag gcr.io/ $GCP PROJECT ID /aa-integration-backend/cloud-pubsub-interceptor Create a Cloud Storage bucket to store terraform state and update the backend bucket value at /terraform/backend.tf using the following command.
- To create the service accounts, replace the value of $CONNECTOR SERVICE ACCOUNT ID and $INTERCEPTOR SERVICE ACCOUNT ID if and run the following commands: $ export CONNECTOR SERVICE ACCOUNT ID = 'aa-ui-connector' && gcloud iam service-accounts create $CONNECTOR SERVICE ACCOUNT ID \ --description = 'Agent Assist integration - UI connector service account' \ --display-name = 'Agent Assist integration - UI connector' $ export INTERCEPTOR SERVICE ACCOUNT ID = 'aa-pubsub-interceptor' && gcloud iam service-accounts create $INTERCEPTOR SERVICE ACCOUNT ID \ --description = 'Agent Assist integration - Pubsub interceptor service account' \ --display-name = 'Agent Assist integration - Pubsub interceptor' Use the following sample command to assign the following roles to the UI connector and Cloud Pub/Sub connector service accounts: $ gcloud projects add-iam-policy-binding $GCP PROJECT ID \ --member = 'serviceAccount:$CONNECTOR SERVICE ACCOUNT ID@$GCP PROJECT ID.iam.gserviceaccount.com' \ --role = 'roles/pubsub.editor' Grant the following IAM roles to the UI connector service account: roles/redis.editor roles/vpcaccess.user roles/compute.viewer roles/secretmanager.secretAccessor roles/dialogflow.agentAssistClient Grant the following roles to the Cloud Pub/Sub connector service account: roles/redis.editor roles/vpcaccess.user roles/compute.viewer Set environment variables Set the values of the following environment variables to be the service accounts you just created or the default Compute Engine service account in your project.
- Their permissions are all included in the Editor and Owner basic roles . roles/secretmanager.admin (Secret Manager Admin): Manage secrets stored in Secret Manager for JWT generation and verification. roles/run.admin (Cloud Run Admin): Deploy and manage Cloud Run services. roles/iam.serviceAccountUser (Service Account User): Grant Cloud Run runtime service accounts iam.serviceAccounts.actAs permissions. roles/cloudbuild.builds.editor (Cloud Build Editor): Build Docker images for the integration services using Cloud Build.

### Agent Assist backend modules basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-basics](https://docs.cloud.google.com/agent-assist/docs/backend-basics)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Contact your Google representative for permissions if you are not able to access the repository. . ├── cloud-pubsub-interceptor │ ├── Dockerfile: Docker-image creation for Cloud Pub/Sub Interceptor deployment on Cloud Run │ ├── main.py: A starter for flask app │ ├── requirements.txt: Python packages for running Cloud Pub/Sub Interceptor service │ └── unit test.py: Unit test code for Cloud Pub/Sub Interceptor ├── cloudbuild.yaml: An example configuration file for Cloud Build ├── deploy.sh: An automated deployment script ├── images ├── readme.md └── ui-connector ├── Dockerfile: Builds Docker image for UI Connector deployment on Cloud Run ├── auth.py: JWT validation and registration handling ├── auth options.py: Support for authentication through different identity providers ├── config.py: Configuration for variables about authentication, logging, and CORS origins ├── dialogflow.py: With Dialogflow utilities for runtime-conversation handling ├── main.py: A starter for flask app ├── requirements.txt: Python packages for running UI Connector ├── templates │ └── index.html: A simple interactive demo └── unit test.py: Unit test code for UI Connector Pricing and quotas Agent Assist integrations include the following services, which have their own applicable pricing and quota limits.
- Agent Assist prices and quotas Pub/Sub prices and quotas Memorystore prices and quotas Cloud Run prices and quotas What's next See the backend modules installation guide for more information about getting started with this integration method.
- Backend modules structure Backend module components Backend modules require the following Google products to integrate Agent Assist into your system: Cloud Pub/Sub Cloud Pub/Sub interceptor Memorystore for Redis UI connector Cloud Pub/Sub Cloud Pub/Sub topics are configured in conversation profiles .
- Home Documentation AI and ML Agent Assist Guides Send feedback Agent Assist backend modules basics Stay organized with collections Save and categorize content based on your preferences.

### "Deploy the Genesys Cloud application server \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Objectives Genesys Cloud integration involves the following processes: Deploy the backend server for the UI module to call the Dialogflow API, register an authentication token, and setup cloud Pub/Sub and Memorystore for Redis.
- Deploy Genesys Cloud application server using CLI Clone the git repository onto your local machine or development environment with the following code: git clone https://github.com/GoogleCloudPlatform/agent-assist-integrations In your local terminal, use the following code to change the active directory to the repository root directory where the Docker file resides before running the Google Cloud CLI builds. cd genesyscloud/frontend When prompted for a service name, press Enter to accept the default.
- Example URL: https://my-project.wm.run.app?conversationProfile = projects/my-project/conversationProfiles/abc123&features = CONVERSATION SUMMARIZATION,AGENT COACHING,PROACTIVE GENERATIVE KNOWLEDGE ASSIST We recommend enabling pop-out authentication for embedded iframes to ensure a seamless login experience.
- What's next Configure for chat integration Test chat integration Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

