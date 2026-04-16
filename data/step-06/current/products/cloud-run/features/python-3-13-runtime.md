---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.447Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Python 3.13 runtime"
feature_slug: "python-3-13-runtime"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
keywords:
  - "python"
  - "workloads"
  - "deployed"
  - "runtime"
  - "supports"
---

# Python 3.13 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Python 3.13 runtime for deployed workloads; Cloud Run supports the Python 3.13 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Python 3.13 runtime for deployed workloads; Cloud Run supports the Python 3.13 runtime for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Supporting Pages

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Quickstart: build and create a Python job in Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Success: You created and executed a job using the Python runtime in Cloud Run.
- Build and create a Python job in Cloud Run Learn how to create a simple Cloud Run job, then deploy from source, which automatically packages your code into a container image, uploads the container image to Artifact Registry, and then deploys to Cloud Run.
- Execute a job in Cloud Run To execute the job you just created: gcloud run jobs execute job-quickstart --region REGION Replace REGION with the region you used when you created and deployed the job, for example europe-west1 .
- Writing the sample job To write a job in Python: Create a new directory named jobs and change directory into it: mkdir jobs cd jobs Create a main.py file for the actual job code.

### "Quickstart: Build and deploy a Python (LangChain) web app to Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service)
- Source ID: `site-docs-reference-2`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write the sample application To write an application in Python: Create a new directory named langchain-gemini-fastapi-app and change directory into it: mkdir langchain-gemini-fastapi-app cd langchain-gemini-fastapi-app Create a file named main.py and paste the following code into it: import os import uvicorn from fastapi import FastAPI , HTTPException from pydantic import BaseModel from langchain google genai import ChatGoogleGenerativeAI from langchain core.prompts import ChatPromptTemplate from langchain core.output parsers import StrOutputParser Initialize FastAPI app = FastAPI ( title = "LangChain Gemini Cloud Run App" ) 1.
- Define Endpoint @app . post ( "/chat" ) async def chat ( request : QueryRequest ): try : response = await chain . ainvoke ({ "topic" : request . topic }) return { "response" : response } except Exception as e : raise HTTPException ( status code = 500 , detail = str ( e )) @app . get ( "/" ) def health check (): return { "status" : "ok" , "service" : "Gemini-FastAPI" } Create a file named requirements.txt and paste the following code into it: fastapi uvicorn langchain langchain-google-genai python-dotenv Deploy to Cloud Run from source Deploy from source automatically builds a container image from source code and deploys it.
- If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- Quickstart: Build and deploy a Python (LangChain) web app to Cloud Run Learn how to build and deploy a LangChain application using Cloud Run and Gemini to respond to queries about city capitals.

