---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.315Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Python buildpack ADK default entrypoint detection"
feature_slug: "python-buildpack-adk-default-entrypoint-detection"
latest_feature_date: "2026-01-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
  - "https://docs.cloud.google.com/docs/buildpacks/build-function"
keywords:
  - "adk"
  - "entrypoint"
  - "detection"
  - "default"
  - "supports"
  - "buildpack"
  - "python"
  - "the"
---

# Python buildpack ADK default entrypoint detection

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

The Python buildpack supports default entrypoint detection for applications using the Agent Development Kit (ADK) framework in general availability; The Python buildpack preview supports default entrypoint detection for the Agent Development Kit (ADK) framework.

## Extended Definition

The Python buildpack supports default entrypoint detection for applications using the Agent Development Kit (ADK) framework in general availability; The Python buildpack preview supports default entrypoint detection for the Agent Development Kit (ADK) framework.

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
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- When you deploy a Cloud Run service from source using the Python runtime, the buildpack determines the Python version and the default entrypoint in the following ways: If you don't specify a Python version in your source files, the Python buildpack sets the default to the latest supported Python version .
- Example: pack build sample-python \ --builder gcr.io/buildpacks/builder --env "GOOGLE ENTRYPOINT='gunicorn --bind :$PORT main:app'" Environment Variables The Python buildpack supports the following environment variables to customize your container PIP <key> See pip documentation .
- Apps built with the Python buildpack start the gunicorn process with default settings, similar to running: gunicorn --bind :8080 main:app Customize the application entrypoint You can customize the applications start command by using a Procfile or an environment variable.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't specify a web server or framework in the requirements.txt file, or use Python version 3.12 and earlier, the Python buildpack sets the default entrypoint to gunicorn -b :8080 main:app .
- The Python buildpack sets the default entrypoint for Cloud Run source deployments .
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For Python version 3.13 and later, the Python buildpack sets the entrypoint based on the web service configuration in your requirements.txt file.

### Build a function with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-function](https://docs.cloud.google.com/docs/buildpacks/build-function)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use pack to build the sample function: Go pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-go Java pack build --builder gcr.io/buildpacks/builder:v1 sample-functions-java-mvn Node.js pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-node Python pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-functions-framework-ruby Run the image using docker : Go docker run -p8080:8080 sample-functions-framework-go Java docker run -it -ePORT=8080 -p8080:8080 sample-functions-java-mvn Node.js docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-node Python docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-functions-framework-ruby Visit the running function by browsing to localhost:8080 .
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-functions-framework-go Java cd buildpack-samples/sample-functions-framework-java-mvn Node.js cd buildpack-samples/sample-functions-framework-node Python cd buildpack-samples/sample-functions-framework-python Ruby cd buildpack-samples/sample-functions-framework-ruby Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-node Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-functions-framework-ruby Replace: LOCATION with the region name of your container repository.
- Create a YAML file name cloudbuild.yaml that includes the URI of your container image repository. options : logging : CLOUD LOGGING ONLY pool : {} projectId : PROJECT ID steps : - name : gcr.io/k8s-skaffold/pack entrypoint : pack args : - build - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME - --builder - gcr.io/buildpacks/builder:latest - --network - cloudbuild - --publish - name : gcr.io/cloud-builders/docker entrypoint : pack args : - pull - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME images : - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME Replace: LOCATION with the region name of your container repository, for example, us-west2 .
- Build a function locally You use the pack build command and specify the default builder --builder=gcr.io/buildpacks/builder to build your container images locally. pack build --builder = gcr.io/buildpacks/builder IMAGE NAME Replace IMAGE NAME with the name of your container image.

