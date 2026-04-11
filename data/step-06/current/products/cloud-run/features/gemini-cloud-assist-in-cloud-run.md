---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.902Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Gemini Cloud Assist in Cloud Run"
feature_slug: "gemini-cloud-assist-in-cloud-run"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
keywords:
  - "gemini"
  - "assist"
  - "in"
  - "run"
  - "provides"
  - "product"
  - "chat"
  - "assistance"
---

# Gemini Cloud Assist in Cloud Run

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Gemini Cloud Assist provides in-product chat assistance to design, optimize, and troubleshoot Cloud Run applications.

## Extended Definition

Gemini Cloud Assist provides in-product chat assistance to design, optimize, and troubleshoot Cloud Run applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)

## Supporting Pages

### "Quickstart: Build and deploy a Python (LangChain) web app to Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write the sample application To write an application in Python: Create a new directory named langchain-gemini-fastapi-app and change directory into it: mkdir langchain-gemini-fastapi-app cd langchain-gemini-fastapi-app Create a file named main.py and paste the following code into it: import os import uvicorn from fastapi import FastAPI , HTTPException from pydantic import BaseModel from langchain google genai import ChatGoogleGenerativeAI from langchain core.prompts import ChatPromptTemplate from langchain core.output parsers import StrOutputParser Initialize FastAPI app = FastAPI ( title = "LangChain Gemini Cloud Run App" ) 1.
- Define Endpoint @app . post ( "/chat" ) async def chat ( request : QueryRequest ): try : response = await chain . ainvoke ({ "topic" : request . topic }) return { "response" : response } except Exception as e : raise HTTPException ( status code = 500 , detail = str ( e )) @app . get ( "/" ) def health check (): return { "status" : "ok" , "service" : "Gemini-FastAPI" } Create a file named requirements.txt and paste the following code into it: fastapi uvicorn langchain langchain-google-genai python-dotenv Deploy to Cloud Run from source Deploy from source automatically builds a container image from source code and deploys it.
- Test your Cloud Run service Test your service by sending a query to the agent using the following curl command: curl -X POST YOUR-SERVICE-URL /chat \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth print-identity-token)" \ -d '{"topic": "What is the capital of France?"}' Replace YOUR-SERVICE-URL with your service's URL.
- To deploy from source using the following command: gcloud run deploy gemini-fastapi-service \ --source . \ --region us-central1 \ --no-allow-unauthenticated \ --set-env-vars GEMINI API KEY = API KEY Replace API KEY with your Google AI Studio API key .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- You can use the chat panel to design , optimize , and troubleshoot your Cloud Run apps with Gemini assistance.
- April 09, 2025 Feature Gemini Cloud Assist in Cloud Run is supported in Preview .
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can set up a custom domain rather than the default address that Cloud Run provides for a deployed service.
- To create a Cloud Run service, add the following to your existing main.tf file: resource "google cloud run v2 service" "default" { name = "custom-domain" # Replace with your service name location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image } } } Replace: custom-domain with your Cloud Run service name. us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image.
- Map your Cloud Run service to the custom domain: data "google project" "project" {} resource "google cloud run domain mapping" "default" { name = "verified-domain.com" location = google cloud run v2 service.default.location metadata { namespace = data.google project.project.project id } spec { route name = google cloud run v2 service.default.name } } Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .
- Retrieve the DNS record information for your domain mappings using the following: Console Go to the Cloud Run domain mappings page: Domain mappings page Click the three-dot vertical ellipse icon to the right of your service, then click DNS RECORDS to display all the DNS records: gcloud gcloud beta run domain-mappings describe --domain [ DOMAIN ] Replace [DOMAIN] with your custom domain, for example, example.com or subdomain.example.com .

