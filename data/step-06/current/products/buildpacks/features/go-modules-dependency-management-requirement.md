---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.047Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Go modules dependency management requirement"
feature_slug: "go-modules-dependency-management-requirement"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/go"
keywords:
  - "go"
  - "modules"
  - "dependency"
  - "management"
  - "requirement"
  - "version"
  - "22"
  - "later"
---

# Go modules dependency management requirement

Product: Buildpacks
Coverage: MEDIUM

## Step 02 Summary

Go version 1.22 and later requires dependency management with a go.mod file instead of GOPATH.

## Extended Definition

Go version 1.22 and later requires dependency management with a go.mod file instead of GOPATH.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/go](https://docs.cloud.google.com/docs/buildpacks/go)

## Supporting Pages

### Building a Go application | Buildpacks | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/go](https://docs.cloud.google.com/docs/buildpacks/go)
- Source ID: `feature-recovery-http`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that your app uses module-aware mode, you should include a go.mod file in your application root.
- Building a Go application | Buildpacks | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Buildpacks Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Discover Product overview Stacks Builders Base images Get started Build an application Build a function Customize container images Set environment variables Configure Cloud Run and Cloud Function services Use a specific builder Configure build and run images Speed up builds with cache images About Procfiles Runtime-specific configurations Node.js Python Go Java Ruby PHP OS only AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Buildpacks Guides Send feedback Building a Go application Stay organized with collections Save and categorize content based on your preferences.
- If your application requires a specific version, you can use the GOOGLE_GO_VERSION environment variable to provide a semver constraint that will be used to select an available Go version. pack build sample - go -- builder = gcr . io / buildpacks / builder \ -- env GOOGLE_GO_VERSION = "17.x.x" Compilation Flags The Go buildpack compiles your application source into an executable using the go build command .
- Vendoring dependencies Vendoring copies the packages your app uses into the application directory instead of downloading modules from their sources during the build process.

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, when using NPM or Yarn version 1: @ SCOPE : registry = https : // REGION ID -npm.pkg.dev/ PROJECT ID / REPOSITORY NAME // REGION ID -npm.pkg.dev/ PROJECT ID / REPOSITORY NAME :always-auth=true If you're using Yarn version 2 or later, you only need to list the Artifact Registry repository in your .yarnrc.yml file without additional credentials.
- If you're using Yarn version 2 or later as your package manager, this file is named .yarnrc.yml .
- To configure the buildpack to use Node.js 24 when deploying your app, run the following command: pack build --builder=gcr.io/buildpacks/builder \ sample-functions-framework-node \ --env GOOGLE NODEJS VERSION=24.x.x You can also use a project.toml project descriptor to encode the environment variable alongside your project files.
- To configure the buildpack to use the latest version of Node.js when deploying your app, add the following values in your package.json : "engines" : { "node" : "24.x.x" } Use GOOGLE NODEJS VERSION You can also specify the Node.js version using the GOOGLE NODEJS VERSION environment variable.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Python version 3.13 and later For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deploys based on the web server or framework configuration in your requirements.txt file.
- Python 3.14 and later Starting from Python version 3.14 and later, the Python buildpack uses the uv package manager as the default installer for the dependencies you specify in your requirements.txt file.
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- The following is an example pyproject.toml file: [project] name = "demo-app" version = "0.1.0" description = "" requires-python = ">=3.10" dependencies = [ "flask>=3.1.1" , "gunicorn>=23.0.0" , ] [build-system] requires = [ "setuptools>=61.0" ] build-backend = "setuptools.build meta" Package manager If you manage your dependencies using a requirements.txt file , the default package manager varies based on the Python version you configure.

