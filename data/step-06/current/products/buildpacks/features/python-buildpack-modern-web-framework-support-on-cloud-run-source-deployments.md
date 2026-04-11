---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.323Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Python buildpack modern web framework support on Cloud Run source deployments"
feature_slug: "python-buildpack-modern-web-framework-support-on-cloud-run-source-deployments"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
  - "https://docs.cloud.google.com/docs/buildpacks/build-function"
keywords:
  - "modern"
  - "web"
  - "framework"
  - "buildpack"
  - "on"
  - "python"
  - "source"
  - "run"
---

# Python buildpack modern web framework support on Cloud Run source deployments

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

The Python buildpack supports Cloud Run source deployments for modern Python web frameworks such as FastAPI, Gradio, and Streamlit.

## Extended Definition

The Python buildpack supports Cloud Run source deployments for modern Python web frameworks such as FastAPI, Gradio, and Streamlit.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- Python version 3.13 and later For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deploys based on the web server or framework configuration in your requirements.txt file.
- The Python buildpack supports modern web frameworks such as FastAPI , Gradio , Streamlit , and Agent Development Kit (ADK) .
- When you deploy a Cloud Run service from source using the Python runtime, the buildpack determines the Python version and the default entrypoint in the following ways: If you don't specify a Python version in your source files, the Python buildpack sets the default to the latest supported Python version .

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't specify a web server or framework in the requirements.txt file, or use Python version 3.12 and earlier, the Python buildpack sets the default entrypoint to gunicorn -b :8080 main:app .
- The Python buildpack sets the default entrypoint for Cloud Run source deployments .
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Supported values: true , True , or 1 Additional Cloud Run functions environment variables The following configurations are only available for source code built as functions that use Functions Framework and Cloud Run functions.

### Build a function with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use pack to build the sample function: Go pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-go Java pack build --builder gcr.io/buildpacks/builder:v1 sample-functions-java-mvn Node.js pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-node Python pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-ruby Run the image using docker : Go docker run -p8080:8080 sample-functions-framework-go Java docker run -it -ePORT=8080 -p8080:8080 sample-functions-java-mvn Node.js docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-node Python docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-ruby Visit the running function by browsing to localhost:8080 .
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-node Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-ruby Replace: LOCATION with the region name of your container repository.
- For example, to create a docker repository in us-west2 with the description "Docker repository", you run: gcloud artifacts repositories create buildpacks-docker-repo --repository-format = docker \ --location = us-west2 --description = "Docker repository" Verify that your repository was created: gcloud artifacts repositories list You should see name that you choose for your Docker repository in the list.
- Configure your project to build functions To build functions with buildpacks: Include the Functions Framework library.

