---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.895Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Python buildpack modern web framework support"
feature_slug: "python-buildpack-modern-web-framework-support"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service"
keywords:
  - "python"
  - "buildpack"
  - "modern"
  - "web"
  - "framework"
  - "the"
  - "supports"
  - "run"
---

# Python buildpack modern web framework support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Python buildpack supports Cloud Run source deployments for modern web frameworks including FastAPI, Gradio, and Streamlit.

## Extended Definition

The Python buildpack supports Cloud Run source deployments for modern web frameworks including FastAPI, Gradio, and Streamlit.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- August 14, 2025 Feature The Python buildpack supports Cloud Run source deployments for modern web frameworks such as FastAPI , Gradio , and Streamlit .
- For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file.
- January 22, 2026 Feature The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework in General Availability .
- Feature The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework (Preview).

### "Quickstart: Deploy a Python (Flask) web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- Write the sample application To write an application in Python: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named main.py and paste the following code into it: import os from flask import Flask app = Flask ( name ) @app . route ( "/" ) def hello world (): """Example Hello World route.""" name = os . environ . get ( "NAME" , "World" ) return f "Hello { name } !" if name == " main " : app . run ( debug = True , host = "0.0.0.0" , port = int ( os . environ . get ( "PORT" , 8080 ))) This code responds to requests with our "Hello World" greeting.
- Quickstart: Build and deploy a Python (Flask) web app to Cloud Run Learn how to use a single command to build and deploy a "Hello World" web application from a code sample to Google Cloud using Cloud Run.
- Success: You deployed a Python web app to Cloud Run.

### "Quickstart: Deploy a Python (FastAPI) web app to Google Cloud with Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- Write the sample application To write an application in Python: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named main.py and paste the following code into it: from fastapi import FastAPI app = FastAPI () @app . get ( "/" ) def hello ( name : str = "World" ): """Return a friendly HTTP greeting.""" return { "message" : f "Hello { name } !" } This code creates a web service that responds to HTTP GET requests.
- Quickstart: Build and deploy a Python (FastAPI) web app to Cloud Run Learn how to use a single command to build and deploy a "Hello World" web application from a code sample to Google Cloud using Cloud Run.
- HTTP handling is done by a FastAPI web framework in the container.

