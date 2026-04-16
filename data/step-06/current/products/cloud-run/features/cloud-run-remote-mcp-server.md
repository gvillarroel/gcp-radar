---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.388Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Run remote MCP server"
feature_slug: "cloud-run-remote-mcp-server"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server"
  - "https://docs.cloud.google.com/run/docs/ai"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "remote"
  - "agents"
  - "server"
  - "applications"
  - "provides"
---

# Cloud Run remote MCP server

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run provides a remote MCP server that agents and AI applications can use to deploy with Cloud Run.

## Extended Definition

Cloud Run provides a remote MCP server that agents and AI applications can use to deploy with Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Build and deploy a remote MCP server on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server](https://docs.cloud.google.com/run/docs/tutorials/deploy-remote-mcp-server)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a folder named mcp-on-cloudrun to store the source code for deployment: mkdir mcp-on-cloudrun cd mcp-on-cloudrun Create a Python project with the uv tool to generate a pyproject.toml file: uv init --name "mcp-on-cloudrun" --description "Example of deploying an MCP server on Cloud Run" --bare --python 3.10 The uv init command creates the following pyproject.toml file: [project] name = "mcp-server" version = "0.1.0" description = "Example of deploying an MCP server on Cloud Run" readme = "README.md" requires-python = ">=3.10" dependencies = [] Create the following additional new files: server.py for the MCP server source code test server.py to test the remote server A Dockerfile for deploying to Cloud Run touch server.py test server.py Dockerfile Your project directory should contain the following structure: ├── mcp-on-cloudrun │ ├── pyproject.toml │ ├── server.py │ ├── test server.py │ └── Dockerfile Create an MCP server for math operations To provide valuable context for improving the use of LLMs with MCP, set up a math MCP server with FastMCP .
- Use "/sse" endpoint if using sse transport. async with Client ( "http://localhost:8080/mcp" ) as client : List available tools tools = await client . list tools () for tool in tools : print ( f ">>> 🛠️ Tool found: { tool . name } " ) Call add tool print ( ">>> 🪛 Calling add tool for 1 + 2" ) result = await client . call tool ( "add" , { "a" : 1 , "b" : 2 }) print ( f "<<< ✅ Result: { result [ 0 ] . text } " ) Call subtract tool print ( ">>> 🪛 Calling subtract tool for 10 - 3" ) result = await client . call tool ( "subtract" , { "a" : 10 , "b" : 3 }) print ( f "<<< ✅ Result: { result [ 0 ] . text } " ) if name == " main " : asyncio . run ( test server ()) In a new terminal, run the test server: uv run test server.py You should see the following output: 🛠️ Tool found: add 🛠️ Tool found: subtract 🪛 Calling add tool for 1 + 2 ✅ Result: 3 🪛 Calling subtract tool for 10 - 3 ✅ Result: 7 Success: You successfully deployed a remote MCP server to Cloud Run and tested it using the FastMCP client.
- Create an Artifact Registry repository to store the container image: gcloud artifacts repositories create remote-mcp-servers \ --repository-format=docker \ --location=us-central1 \ --description="Repository for remote MCP servers" \ --project= PROJECT ID Build the container image and push it to Artifact Registry with Cloud Build: gcloud builds submit --region=us-central1 --tag us-central1-docker.pkg.dev/ PROJECT ID /remote-mcp-servers/mcp-server:latest Deploy the MCP server container image to Cloud Run: gcloud run deploy mcp-server \ --image us-central1-docker.pkg.dev/ PROJECT ID /remote-mcp-servers/mcp-server:latest \ --region=us-central1 \ --no-allow-unauthenticated Source You can deploy remote MCP servers to Cloud Run from their sources.
- Run the Cloud Run proxy to create an authenticated tunnel to the remote MCP server on your local machine: gcloud run services proxy mcp-server --region=us-central1 If the Cloud Run proxy is not yet installed, this command prompts you to download the proxy.

### AI/ML orchestration on Cloud Run documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info Run AI solutions Concept Explore AI use cases Concept Host AI agents How-to Host A2A agents How-to Deploy A2A agents How-to Host MCP servers Tutorial Build and deploy a remote MCP server Concept Code execution Concept Browser and OS automation info Inference with GPUs Tutorial Run LLM inference on Cloud Run GPUs with Gemma 3 and Ollama How-to Run Gemma 3 models on Cloud Run Tutorial Run LLM inference on Cloud Run GPUs with Hugging Face Best practice Best practices: Cloud Run services with GPUs Tutorial Fine tune LLMs using GPUs with Cloud Run jobs Tutorial GPU-accelerated video transcoding with FFmpeg on Cloud Run jobs Best practice Best practices: Cloud Run jobs with GPUs Best practice Best practices: Cloud Run worker pools with GPUs info Troubleshoot Concept Cloud Run troubleshooting strategies How-to Troubleshoot all Cloud Run issues How-to Troubleshoot with Gemini Cloud Assist How-to Troubleshoot with Gemini Cloud Assist investigations Related resources Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- AI applications traffic splitting for A/B testing RAG patterns vector stores connectivity to vector stores Use case Use cases AI deployment made easy: Deploy your app to Cloud Run from AI Studio or MCP-compatible AI agents One-click deployment from Google AI Studio to Cloud Run and the Cloud Run MCP (Model Context Protocol) server to enable AI agents in IDEs or agent SDKs and deploy apps.
- Home Documentation Application hosting Cloud Run AI/ML orchestration on Cloud Run documentation Read product documentation Cloud Run is a fully managed platform that lets you run your containerized applications, including AI/ML workloads, directly on Google's scalable infrastructure.
- Use case Use cases Run your AI inference applications on Cloud Run with NVIDIA GPUs Use NVIDIA L4 GPUs on Cloud Run for real-time AI inference, including fast cold-start and scale-to-zero benefits for Large Language Models (LLMs).

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Services Client Service Description: Cloud Run Service Control Plane API This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- Builds Client Service Description: Cloud Run Build Control Plane API This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- This class provides the ability to make remote calls to the backing service through method calls that map to API methods.

