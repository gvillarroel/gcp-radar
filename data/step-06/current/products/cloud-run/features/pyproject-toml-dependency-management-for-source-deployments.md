---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.887Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "pyproject.toml dependency management for source deployments"
feature_slug: "pyproject-toml-dependency-management-for-source-deployments"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
keywords:
  - "pyproject"
  - "toml"
  - "dependency"
  - "management"
  - "for"
  - "source"
  - "deployments"
  - "run"
---

# pyproject.toml dependency management for source deployments

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run source deployments support using pyproject.toml to manage Python dependencies; Cloud Run source deployments support using pyproject.toml to manage Python dependencies.

## Extended Definition

Cloud Run source deployments support using pyproject.toml to manage Python dependencies; Cloud Run source deployments support using pyproject.toml to manage Python dependencies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- November 19, 2025 Feature You can deploy source artifacts directly to Cloud Run , bypassing the Cloud Build step. (Preview) November 17, 2025 Feature Cloud Run and Cloud Run functions source deployments support pyproject.toml file for managing dependencies.
- January 13, 2026 Feature Cloud Run and Cloud Run functions source deployments support the pyproject.toml file for managing dependencies.
- Feature Cloud Run and Cloud Run functions source deployments support pyproject.toml file for managing dependencies.
- If you use a pyproject.toml file, source deployments use one of the following to find and install dependencies: pip uv poetry For more information, see Deploy Python applications with a pyproject.toml file (Preview).

### Build and deploy a remote MCP server on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command to add FastMCP as a dependency in the pyproject.toml file: uv add fastmcp==2.13.1 --no-sync Add the following math MCP server source code in the server.py file: import asyncio import logging import os from fastmcp import FastMCP logger = logging . getLogger ( name ) logging . basicConfig ( format = "[ %(levelname)s ]: %(message)s " , level = logging .
- Create a folder named mcp-on-cloudrun to store the source code for deployment: mkdir mcp-on-cloudrun cd mcp-on-cloudrun Create a Python project with the uv tool to generate a pyproject.toml file: uv init --name "mcp-on-cloudrun" --description "Example of deploying an MCP server on Cloud Run" --bare --python 3.10 The uv init command creates the following pyproject.toml file: [project] name = "mcp-server" version = "0.1.0" description = "Example of deploying an MCP server on Cloud Run" readme = "README.md" requires-python = ">=3.10" dependencies = [] Create the following additional new files: server.py for the MCP server source code test server.py to test the remote server A Dockerfile for deploying to Cloud Run touch server.py test server.py Dockerfile Your project directory should contain the following structure: ├── mcp-on-cloudrun │ ├── pyproject.toml │ ├── server.py │ ├── test server.py │ └── Dockerfile Create an MCP server for math operations To provide valuable context for improving the use of LLMs with MCP, set up a math MCP server with FastMCP .
- Returns: The difference of the two numbers. """ logger . info ( f ">>> 🛠️ Tool: 'subtract' called with numbers ' { a } ' and ' { b } '" ) return a - b if name == " main " : logger . info ( f "🚀 MCP server started on port { os . getenv ( 'PORT' , 8080 ) } " ) Could also use 'sse' transport, host="0.0.0.0" required for Cloud Run. asyncio . run ( mcp . run async ( transport = "streamable-http" , host = "0.0.0.0" , port = os . getenv ( "PORT" , 8080 ), ) ) Include the following code in the Dockerfile to use the uv tool for running the server.py file: Use the official Python image FROM python : 3.13 - slim Install uv COPY -- from = ghcr . io / astral - sh / uv : latest / uv / uvx / bin / Install the project into /app COPY . / app WORKDIR / app Allow statements and log messages to immediately appear in the logs ENV PYTHONUNBUFFERED = 1 Install dependencies RUN uv sync EXPOSE $ PORT Run the FastMCP server CMD [ "uv" , "run" , "server.py" ] Deploy to Cloud Run You can deploy the MCP server as a container image or as source code : Container image To deploy an MCP server packaged as a container image, follow these instructions.
- Create an Artifact Registry repository to store the container image: gcloud artifacts repositories create remote-mcp-servers \ --repository-format=docker \ --location=us-central1 \ --description="Repository for remote MCP servers" \ --project= PROJECT ID Build the container image and push it to Artifact Registry with Cloud Build: gcloud builds submit --region=us-central1 --tag us-central1-docker.pkg.dev/ PROJECT ID /remote-mcp-servers/mcp-server:latest Deploy the MCP server container image to Cloud Run: gcloud run deploy mcp-server \ --image us-central1-docker.pkg.dev/ PROJECT ID /remote-mcp-servers/mcp-server:latest \ --region=us-central1 \ --no-allow-unauthenticated Source You can deploy remote MCP servers to Cloud Run from their sources.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Deploying the service Follow the steps to complete infrastructure provisioning and deployment: Create a Cloud SQL instance with postgreSQL database using the console or CLI: gcloud sql instances create CLOUD SQL INSTANCE NAME \ --database-version = POSTGRES 16 \ --region = CLOUD SQL REGION \ --cpu = 2 \ --memory = 7680MB \ --root-password = DB PASSWORD Add your Cloud SQL credential values to postgres-secrets.json : Node.js { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Python { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Java { "spring.cloud.gcp.sql.instance-connection-name" : "PROJECT ID:REGION:INSTANCE" , "spring.cloud.gcp.sql.database-name" : "postgres" , "spring.datasource.username" : "postgres" , "spring.datasource.password" : "PASSWORD SECRET" } Create a versioned secret using the console or CLI: gcloud secrets create idp-sql-secrets \ --replication-policy = "automatic" \ --data-file = postgres-secrets.json Create a service account for the server using the console or CLI: gcloud iam service-accounts create idp-sql-identity Grant roles for Secret Manager and Cloud SQL access using the console or CLI: Allow the service account associated with the server to access the created secret: gcloud secrets add-iam-policy-binding idp-sql-secrets \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Allow the service account associated with the server to access Cloud SQL: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/cloudsql.client Create an Artifact Registry: gcloud artifacts repositories create REPOSITORY \ --repository-format docker \ --location REGION REPOSITORY is the name of the repository.
- Uncomment and add env vars for local development spring . datasource . username = $ { DB USER } spring . datasource . password = $ { DB PASSWORD } spring . cloud . gcp . sql . database - name = $ { DB NAME } spring . cloud . gcp . sql . instance - connection - name = $ { CLOUD SQL CONNECTION NAME } private final JdbcTemplate jdbcTemplate ; public VoteController ( JdbcTemplate jdbcTemplate ) { this . jdbcTemplate = jdbcTemplate ; } Handling sensitive configuration with Secret Manager Secret Manager provides centralized and secure storage of sensitive data such as Cloud SQL configuration.

