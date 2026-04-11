---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.322Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Python 3.13+ requirements-based default entrypoint detection"
feature_slug: "python-3-13-requirements-based-default-entrypoint-detection"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
  - "https://docs.cloud.google.com/docs/authentication"
keywords:
  - "requirements"
  - "13"
  - "entrypoint"
  - "detection"
  - "default"
  - "based"
  - "python"
  - "for"
---

# Python 3.13+ requirements-based default entrypoint detection

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

For Python 3.13 and later, the Python buildpack sets the Cloud Run source-deployment default entrypoint based on framework/server settings in requirements.txt.

## Extended Definition

For Python 3.13 and later, the Python buildpack sets the Cloud Run source-deployment default entrypoint based on framework/server settings in requirements.txt.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python version 3.13 and later For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deploys based on the web server or framework configuration in your requirements.txt file.
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- The following is an example pyproject.toml file: [project] name = "demo-app" version = "0.1.0" description = "" requires-python = ">=3.10" dependencies = [ "flask>=3.1.1" , "gunicorn>=23.0.0" , ] [build-system] requires = [ "setuptools>=61.0" ] build-backend = "setuptools.build meta" Package manager If you manage your dependencies using a requirements.txt file , the default package manager varies based on the Python version you configure.
- Package manager precedence The Python buildpacks determines the default package manager based on the configuration in the following order of precedence: The highest precedence is given to the requirements.txt file.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Python version 3.13 and later, the Python buildpack sets the entrypoint based on the web service configuration in your requirements.txt file.
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If you don't specify a web server or framework in the requirements.txt file, or use Python version 3.12 and earlier, the Python buildpack sets the default entrypoint to gunicorn -b :8080 main:app .
- The Python buildpack sets the default entrypoint for Cloud Run source deployments .

### Authentication for Google Cloud APIs and services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose the right authentication method for your use case When you access Google Cloud services by using the Google Cloud CLI, Cloud Client Libraries, tools that support Application Default Credentials (ADC) like Terraform, or REST requests, use the following diagram to help you choose an authentication method: This diagram guides you through the following questions: Are you running code in a single-user development environment, such as your own workstation, Cloud Shell, or a virtual desktop interface?
- Home Documentation Application development Google Cloud SDK Authentication Guides Send feedback Authentication for Google Cloud APIs and services Stay organized with collections Save and categorize content based on your preferences.
- Application Default Credentials Application Default Credentials (ADC) is a strategy used by the authentication libraries to automatically find credentials based on the application environment.
- Understand how Application Default Credentials works , and how you can set it up for a variety of development environments .

