---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.046Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Python buildpack default entrypoint detection from requirements.txt"
feature_slug: "python-buildpack-default-entrypoint-detection-from-requirements-txt"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
keywords:
  - "python"
  - "buildpack"
  - "default"
  - "entrypoint"
  - "detection"
  - "requirements"
  - "txt"
  - "can"
---

# Python buildpack default entrypoint detection from requirements.txt

Product: Buildpacks
Coverage: MEDIUM

## Step 02 Summary

The Python buildpack can set the default entrypoint for Cloud Run source deployments based on web server or framework configuration in requirements.txt.

## Extended Definition

The Python buildpack can set the default entrypoint for Cloud Run source deployments based on web server or framework configuration in requirements.txt.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 360
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- Python version 3.13 and later For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deploys based on the web server or framework configuration in your requirements.txt file.
- Package manager precedence The Python buildpacks determines the default package manager based on the configuration in the following order of precedence: The highest precedence is given to the requirements.txt file.
- Entrypoint with a pyproject.toml file When you deploy an application with a pyproject.toml file instead of using a requirements.txt file, the Python buildpack uses a different method to determine the entrypoint.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't specify a web server or framework in the requirements.txt file, or use Python version 3.12 and earlier, the Python buildpack sets the default entrypoint to gunicorn -b :8080 main:app .
- For Python version 3.13 and later, the Python buildpack sets the entrypoint based on the web service configuration in your requirements.txt file.
- The Python buildpack sets the default entrypoint for Cloud Run source deployments .
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can specify one or more commands, or instead specify an empty string to prevent any command from running, like "gcp-build":"" . "scripts" : { ... "gcp-build" : "npm run lint && npm run build" ... } Application entrypoint The Node.js buildpack executes the command you specify in the scripts.start field of your package.json file.
- If you don't use a lockfile or set the environment variable, the buildpack defaults to using NPM.
- If no version is specified, the buildpack defaults to the latest stable release.
- Package manager precedence The Node.js buildpack determines the package manager based on the configuration in the following order of precedence: The buildpack first checks for lockfiles in the following order: Yarn - yarn.lock pnpm - pnpm-lock.yaml Bun - bun.lock or bun.lockb NPM - package-lock.json If you don't use lockfiles, the Node.js buildpack uses the value you assign the GOOGLE PACKAGE MANAGER environment variable.

