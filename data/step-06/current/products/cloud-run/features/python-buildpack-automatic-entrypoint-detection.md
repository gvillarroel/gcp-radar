---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.895Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Python buildpack automatic entrypoint detection"
feature_slug: "python-buildpack-automatic-entrypoint-detection"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service"
keywords:
  - "python"
  - "buildpack"
  - "automatic"
  - "entrypoint"
  - "detection"
  - "for"
  - "13"
  - "and"
---

# Python buildpack automatic entrypoint detection

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

For Python 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments from web server or framework settings in requirements.txt.

## Extended Definition

For Python 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments from web server or framework settings in requirements.txt.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file.
- January 22, 2026 Feature The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework in General Availability .
- Feature The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework (Preview).
- Starting from Python version 3.14 and later, the Python buildpack uses the uv package manager as the default installer for the dependencies you specify in your requirements.txt file.

### "Quickstart: Deploy a Python (FastAPI) web app to Google Cloud with Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Write the sample application To write an application in Python: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named main.py and paste the following code into it: from fastapi import FastAPI app = FastAPI () @app . get ( "/" ) def hello ( name : str = "World" ): """Return a friendly HTTP greeting.""" return { "message" : f "Hello { name } !" } This code creates a web service that responds to HTTP GET requests.
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Quickstart: Deploy a Python (Flask) web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- Write the sample application To write an application in Python: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named main.py and paste the following code into it: import os from flask import Flask app = Flask ( name ) @app . route ( "/" ) def hello world (): """Example Hello World route.""" name = os . environ . get ( "NAME" , "World" ) return f "Hello { name } !" if name == " main " : app . run ( debug = True , host = "0.0.0.0" , port = int ( os . environ . get ( "PORT" , 8080 ))) This code responds to requests with our "Hello World" greeting.
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

