---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.400Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "pyproject.toml dependency management for source deployments"
feature_slug: "pyproject-toml-dependency-management-for-source-deployments"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server"
keywords:
  - "dependency"
  - "pyproject"
  - "manage"
  - "toml"
  - "management"
  - "deployments"
  - "source"
---

# pyproject.toml dependency management for source deployments

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run source deployments support using pyproject.toml to manage Python dependencies; Cloud Run source deployments support using pyproject.toml to manage Python dependencies.

## Extended Definition

Cloud Run source deployments support using pyproject.toml to manage Python dependencies; Cloud Run source deployments support using pyproject.toml to manage Python dependencies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)

## Supporting Pages

### Build and deploy a remote MCP server on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to add FastMCP as a dependency in the pyproject.toml file: uv add fastmcp==2.13.1 --no-sync Add the following math MCP server source code in the server.py file: import asyncio import logging import os from fastmcp import FastMCP logger = logging . getLogger ( name ) logging . basicConfig ( format = "[ %(levelname)s ]: %(message)s " , level = logging .
- Create a folder named mcp-on-cloudrun to store the source code for deployment: mkdir mcp-on-cloudrun cd mcp-on-cloudrun Create a Python project with the uv tool to generate a pyproject.toml file: uv init --name "mcp-on-cloudrun" --description "Example of deploying an MCP server on Cloud Run" --bare --python 3.10 The uv init command creates the following pyproject.toml file: [project] name = "mcp-server" version = "0.1.0" description = "Example of deploying an MCP server on Cloud Run" readme = "README.md" requires-python = ">=3.10" dependencies = [] Create the following additional new files: server.py for the MCP server source code test server.py to test the remote server A Dockerfile for deploying to Cloud Run touch server.py test server.py Dockerfile Your project directory should contain the following structure: ├── mcp-on-cloudrun │ ├── pyproject.toml │ ├── server.py │ ├── test server.py │ └── Dockerfile Create an MCP server for math operations To provide valuable context for improving the use of LLMs with MCP, set up a math MCP server with FastMCP .
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.

### "Quickstart: build and create a Java job in Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing or replacing it should not affect the execution of the samples in anyway . -- > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < properties > < project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding > < project . reporting . outputEncoding>UTF - 8 < / project . reporting . outputEncoding > < maven . compiler . target>17 < / maven . compiler . target > < maven . compiler . source>17 < / maven . compiler . source > < / properties > < dependencyManagement > < dependencies > < dependency > < artifactId>libraries - bom < / artifactId > < groupId>com . google . cloud < / groupId > < scope>import < / scope > < type>pom < / type > < version>26 .32.0 < / version > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>junit < / groupId > < artifactId>junit < / artifactId > < version>4 .13.2 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - logging < / artifactId > < scope>test < / scope > < / dependency > < / dependencies > < build > < plugins > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - jar - plugin < / artifactId > < version>3 .3.0 < / version > < configuration > < archive > < manifest > < addClasspath>true < / addClasspath > < mainClass>com . example .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the appropriate tab to learn more about connecting to one of the source code management providers.
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- Enable the API If you select the Developer Connect option, enable the Developer Connect API: Enable the API Required roles To get the permissions that you need to deploy Cloud Run services from Git using Cloud Build or Developer Connect, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Developer ( roles/run.developer ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) The service account running the build must have the following roles: Cloud Build Service Account ( roles/cloudbuild.builds.builder ) Cloud Run Admin ( roles/run.admin ) Service Account User ( roles/iam.serviceAccountUser ) If you select the Developer Connect option: Developer Connect Read Token Accessor ( roles/developerconnect.readTokenAccessor ) If you are connecting to GitLab or Bitbucket repositories: Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor ) For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- To learn how to manage token expiration settings and notifications, see the GitLab documentation on personal access tokens .

