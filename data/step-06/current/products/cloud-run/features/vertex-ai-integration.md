---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.507Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Vertex AI integration"
feature_slug: "vertex-ai-integration"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/ai"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/configuring"
keywords:
  - "generative"
  - "vertex"
  - "integration"
  - "connect"
  - "access"
  - "lets"
---

# Vertex AI integration

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Vertex AI integration lets Cloud Run services connect to Vertex AI to access generative AI models.

## Extended Definition

Vertex AI integration lets Cloud Run services connect to Vertex AI to access generative AI models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)

## Supporting Pages

### AI/ML orchestration on Cloud Run documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generative AI Vertex AI Flask Deployment Use case Use cases Deploying Gemma directly from AI Studio to Cloud Run Use the Gemma Python code from AI Studio and deploy it directly to a Cloud Run instance, leveraging Secret Manager for secure API key handling.
- Monitoring MLOps Cost Efficiency Inference Use case Use cases Deploying a Google Cloud generative AI app in a website with Cloud Run Deploy a simple Flask application that calls the Vertex AI Generative AI API onto a scalable Cloud Run service.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info Run AI solutions Concept Explore AI use cases Concept Host AI agents How-to Host A2A agents How-to Deploy A2A agents How-to Host MCP servers Tutorial Build and deploy a remote MCP server Concept Code execution Concept Browser and OS automation info Inference with GPUs Tutorial Run LLM inference on Cloud Run GPUs with Gemma 3 and Ollama How-to Run Gemma 3 models on Cloud Run Tutorial Run LLM inference on Cloud Run GPUs with Hugging Face Best practice Best practices: Cloud Run services with GPUs Tutorial Fine tune LLMs using GPUs with Cloud Run jobs Tutorial GPU-accelerated video transcoding with FFmpeg on Cloud Run jobs Best practice Best practices: Cloud Run jobs with GPUs Best practice Best practices: Cloud Run worker pools with GPUs info Troubleshoot Concept Cloud Run troubleshooting strategies How-to Troubleshoot all Cloud Run issues How-to Troubleshoot with Gemini Cloud Assist How-to Troubleshoot with Gemini Cloud Assist investigations Related resources Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- AI applications traffic splitting for A/B testing RAG patterns vector stores connectivity to vector stores Use case Use cases AI deployment made easy: Deploy your app to Cloud Run from AI Studio or MCP-compatible AI agents One-click deployment from Google AI Studio to Cloud Run and the Cloud Run MCP (Model Context Protocol) server to enable AI agents in IDEs or agent SDKs and deploy apps.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run volume mounts lets you access shared data stored in a local file system, such as a storage bucket or file server content, from your container.
- The following table explains the features for this section: Section Feature Description A Service account The Cloud Run service identity is the service account that is used as the authenticated account for accessing Google Cloud APIs from your Cloud Run instance container.
- The following table explains the features for this section: Section Feature Description A Authentication All Cloud Run services are deployed privately by default, which means that they can't be accessed without providing authentication credentials in the request.
- D Service mesh Cloud Service Mesh lets you enable mesh advanced traffic management capabilities, such as weighted traffic splitting and global load balancing, as well as observability and security policies for traffic from one Cloud Run service to another.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploying the service Follow the steps to complete infrastructure provisioning and deployment: Create a Cloud SQL instance with postgreSQL database using the console or CLI: gcloud sql instances create CLOUD SQL INSTANCE NAME \ --database-version = POSTGRES 16 \ --region = CLOUD SQL REGION \ --cpu = 2 \ --memory = 7680MB \ --root-password = DB PASSWORD Add your Cloud SQL credential values to postgres-secrets.json : Node.js { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Python { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Java { "spring.cloud.gcp.sql.instance-connection-name" : "PROJECT ID:REGION:INSTANCE" , "spring.cloud.gcp.sql.database-name" : "postgres" , "spring.datasource.username" : "postgres" , "spring.datasource.password" : "PASSWORD SECRET" } Create a versioned secret using the console or CLI: gcloud secrets create idp-sql-secrets \ --replication-policy = "automatic" \ --data-file = postgres-secrets.json Create a service account for the server using the console or CLI: gcloud iam service-accounts create idp-sql-identity Grant roles for Secret Manager and Cloud SQL access using the console or CLI: Allow the service account associated with the server to access the created secret: gcloud secrets add-iam-policy-binding idp-sql-secrets \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Allow the service account associated with the server to access Cloud SQL: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/cloudsql.client Create an Artifact Registry: gcloud artifacts repositories create REPOSITORY \ --repository-format docker \ --location REGION REPOSITORY is the name of the repository.
- URL . create ( drivername = "postgresql+pg8000" , username = db user , # e.g. "my-database-user" password = db pass , # e.g. "my-database-password" database = db name , # e.g. "my-database-name" query = { "unix sock" : f " { db socket dir } / { cloud sql connection name } /.s.PGSQL.5432" e.g. "/cloudsql", "<PROJECT-NAME>:<INSTANCE-REGION>:<INSTANCE-NAME>" }, ), db config , ) pool . dialect . description encoding = None logger . info ( "Database engine initialized from unix connection" ) return pool Java Use the Spring Cloud Google Cloud PostgreSQL starter integration to interact with your PostgreSQL databases in Cloud SQL using Spring JDBC libraries.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

