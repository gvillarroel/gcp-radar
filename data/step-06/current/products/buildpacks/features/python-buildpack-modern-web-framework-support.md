---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.046Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Python buildpack modern web framework support"
feature_slug: "python-buildpack-modern-web-framework-support"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/build-function"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
keywords:
  - "python"
  - "buildpack"
  - "modern"
  - "web"
  - "framework"
  - "supports"
  - "run"
  - "source"
---

# Python buildpack modern web framework support

Product: Buildpacks
Coverage: MEDIUM

## Step 02 Summary

The Python buildpack supports Cloud Run source deployments for modern web frameworks such as FastAPI, Gradio, and Streamlit.

## Extended Definition

The Python buildpack supports Cloud Run source deployments for modern web frameworks such as FastAPI, Gradio, and Streamlit.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Python buildpack supports modern web frameworks such as FastAPI , Gradio , Streamlit , and Agent Development Kit (ADK) .
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- Python version 3.13 and later For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deploys based on the web server or framework configuration in your requirements.txt file.
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.

### Build a function with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-node Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-ruby Replace: LOCATION with the region name of your container repository.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use pack to build the sample function: Go pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-go Java pack build --builder gcr.io/buildpacks/builder:v1 sample-functions-java-mvn Node.js pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-node Python pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-ruby Run the image using docker : Go docker run -p8080:8080 sample-functions-framework-go Java docker run -it -ePORT=8080 -p8080:8080 sample-functions-java-mvn Node.js docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-node Python docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-ruby Visit the running function by browsing to localhost:8080 .
- Configure your project to build functions To build functions with buildpacks: Include the Functions Framework library.
- This guide shows you how to use buildpacks with your function source code to create a container image.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't specify a web server or framework in the requirements.txt file, or use Python version 3.12 and earlier, the Python buildpack sets the default entrypoint to gunicorn -b :8080 main:app .
- The Python buildpack sets the default entrypoint for Cloud Run source deployments .
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- GOOGLE FUNCTION SOURCE Specifies the name of the directory or file containing the function source, depending on the language. (Only applicable to some languages, please see the language-specific documentation .) Example: function.py for Python.

