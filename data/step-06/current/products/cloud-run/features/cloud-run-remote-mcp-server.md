---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.882Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Run remote MCP server"
feature_slug: "cloud-run-remote-mcp-server"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server"
  - "https://docs.cloud.google.com/run/docs/reference/mcp"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-smolagents-service"
keywords:
  - "run"
  - "remote"
  - "mcp"
  - "server"
  - "provides"
  - "that"
  - "agents"
  - "and"
---

# Cloud Run remote MCP server

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run provides a remote MCP server that agents and AI applications can use to deploy with Cloud Run.

## Extended Definition

Cloud Run provides a remote MCP server that agents and AI applications can use to deploy with Cloud Run.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- [https://docs.cloud.google.com/run/docs/reference/mcp](https://docs.cloud.google.com/run/docs/reference/mcp)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-smolagents-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-smolagents-service)

## Supporting Pages

### Build and deploy a remote MCP server on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a folder named mcp-on-cloudrun to store the source code for deployment: mkdir mcp-on-cloudrun cd mcp-on-cloudrun Create a Python project with the uv tool to generate a pyproject.toml file: uv init --name "mcp-on-cloudrun" --description "Example of deploying an MCP server on Cloud Run" --bare --python 3.10 The uv init command creates the following pyproject.toml file: [project] name = "mcp-server" version = "0.1.0" description = "Example of deploying an MCP server on Cloud Run" readme = "README.md" requires-python = ">=3.10" dependencies = [] Create the following additional new files: server.py for the MCP server source code test server.py to test the remote server A Dockerfile for deploying to Cloud Run touch server.py test server.py Dockerfile Your project directory should contain the following structure: ├── mcp-on-cloudrun │ ├── pyproject.toml │ ├── server.py │ ├── test server.py │ └── Dockerfile Create an MCP server for math operations To provide valuable context for improving the use of LLMs with MCP, set up a math MCP server with FastMCP .
- Use "/sse" endpoint if using sse transport. async with Client ( "http://localhost:8080/mcp" ) as client : List available tools tools = await client . list tools () for tool in tools : print ( f ">>> 🛠️ Tool found: { tool . name } " ) Call add tool print ( ">>> 🪛 Calling add tool for 1 + 2" ) result = await client . call tool ( "add" , { "a" : 1 , "b" : 2 }) print ( f "<<< ✅ Result: { result [ 0 ] . text } " ) Call subtract tool print ( ">>> 🪛 Calling subtract tool for 10 - 3" ) result = await client . call tool ( "subtract" , { "a" : 10 , "b" : 3 }) print ( f "<<< ✅ Result: { result [ 0 ] . text } " ) if name == " main " : asyncio . run ( test server ()) In a new terminal, run the test server: uv run test server.py You should see the following output: 🛠️ Tool found: add 🛠️ Tool found: subtract 🪛 Calling add tool for 1 + 2 ✅ Result: 3 🪛 Calling subtract tool for 10 - 3 ✅ Result: 7 Success: You successfully deployed a remote MCP server to Cloud Run and tested it using the FastMCP client.
- Create an Artifact Registry repository to store the container image: gcloud artifacts repositories create remote-mcp-servers \ --repository-format=docker \ --location=us-central1 \ --description="Repository for remote MCP servers" \ --project= PROJECT ID Build the container image and push it to Artifact Registry with Cloud Build: gcloud builds submit --region=us-central1 --tag us-central1-docker.pkg.dev/ PROJECT ID /remote-mcp-servers/mcp-server:latest Deploy the MCP server container image to Cloud Run: gcloud run deploy mcp-server \ --image us-central1-docker.pkg.dev/ PROJECT ID /remote-mcp-servers/mcp-server:latest \ --region=us-central1 \ --no-allow-unauthenticated Source You can deploy remote MCP servers to Cloud Run from their sources.
- Run the Cloud Run proxy to create an authenticated tunnel to the remote MCP server on your local machine: gcloud run services proxy mcp-server --region=us-central1 If the Cloud Run proxy is not yet installed, this command prompts you to download the proxy.

### MCP Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/mcp](https://docs.cloud.google.com/run/docs/reference/mcp)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The run.googleapis.com MCP server has the following tools: MCP Tools get service Get info about a Cloud Run service, such as its URI and whether the deploy succeeded. list services List Cloud Run services in a given Google Cloud project and region. deploy service from image Deploy a container image from Artifact Registry or Docker Hub as a Cloud Run service. deploy service from archive Deploy a Cloud Run service directly from a self-contained source code archive (.tar.gz), skipping the container image build step for faster deployment.
- The run.googleapis.com MCP server has the following MCP endpoint: https://run.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
- Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application.

### "Quickstart: Build and deploy a Python (smolagents) web app to Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-smolagents-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-smolagents-service)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Setup FastAPI app = FastAPI () class AgentRequest ( BaseModel ): task : str @app . get ( "/" ) def health check (): return { "status" : "running" , "service" : "smolagents-fastapi" } @app . post ( "/run" ) def run agent ( request : AgentRequest ): try : Run the agent with the user's task response = agent . run ( request . task ) return { "response" : str ( response )} except Exception as e : raise HTTPException ( status code = 500 , detail = str ( e )) Create a file named requirements.txt and paste the following code into it: fastapi uvicorn smolagents [ toolkit ] litellm Deploy to Cloud Run from source Deploy from source automatically builds a container image from source code and deploys it.
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To deploy from source using the following command: gcloud run deploy smolagents-demo \ --source . \ --region us-central1 \ --no-allow-unauthenticated \ --set-env-vars GEMINI API KEY = API KEY Replace API KEY with your Google AI Studio API key .
- Quickstart: Build and deploy a Python (smolagents) web app to Cloud Run This document shows you how to build and deploy a smolagents application to Cloud Run.

