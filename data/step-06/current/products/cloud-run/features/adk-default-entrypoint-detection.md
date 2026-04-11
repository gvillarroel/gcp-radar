---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.887Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "ADK default entrypoint detection"
feature_slug: "adk-default-entrypoint-detection"
latest_feature_date: "2026-01-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
keywords:
  - "adk"
  - "default"
  - "entrypoint"
  - "detection"
  - "the"
  - "run"
  - "python"
  - "buildpack"
---

# ADK default entrypoint detection

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Cloud Run Python buildpack can automatically detect the default entrypoint for Agent Development Kit applications; The Cloud Run Python buildpack can automatically detect the default entrypoint for Agent Development Kit applications.

## Extended Definition

The Cloud Run Python buildpack can automatically detect the default entrypoint for Agent Development Kit applications; The Cloud Run Python buildpack can automatically detect the default entrypoint for Agent Development Kit applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)

## Supporting Pages

### "Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development Kit (ADK) Learn how to use a single command to build and deploy an AI agent to Cloud Run using the Agent Development Kit (ADK) for Python.
- Write the sample application To write an application in Python: Create a new parent directory named parent folder and change directory into it: mkdir parent folder cd parent folder In the parent folder directory, create a new subdirectory named multi tool agent and change directory into it: mkdir multi tool agent cd multi tool agent Create an init .py file to import the agent: from . import agent Create an agent.py file to define the agent for answering questions about the time and weather in a specified city: import datetime from zoneinfo import ZoneInfo from google.adk.agents import Agent def get weather ( city : str ) - > dict : """Retrieves the current weather report for a specified city.
- Grant the Cloud Build service account access to your project Cloud Build automatically uses the Compute Engine default service account as the default Cloud Build service account to build your source code and Cloud Run resource, unless you override this behavior.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- January 22, 2026 Feature The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework in General Availability .
- Feature The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework (Preview).
- For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file.
- For details about how to configure the package.json file, including the option to set environment variables or prevent the default script from running, see the Node.js buildpack configuration in the Google Cloud's buildpacks documentation.

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-run Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-run Next Steps Read the Client Library Documentation for Cloud Run to see other available methods on the client.
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

