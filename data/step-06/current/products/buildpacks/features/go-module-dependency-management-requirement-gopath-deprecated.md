---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.325Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Go module dependency management requirement (GOPATH deprecated)"
feature_slug: "go-module-dependency-management-requirement-gopath-deprecated"
latest_feature_date: "2024-02-26"
deprecation_date: "2024-02-26"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/authentication"
  - "https://docs.cloud.google.com/docs/buildpacks/go"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
keywords:
  - "requirement"
  - "deprecated"
  - "starting"
  - "module"
  - "gopath"
  - "management"
  - "dependency"
  - "go"
---

# Go module dependency management requirement (GOPATH deprecated)

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

Starting with Go 1.22, Buildpacks-based source builds no longer use GOPATH for dependency installation and instead require go.mod; deprecated on 2024-02-26.

## Extended Definition

Starting with Go 1.22, Buildpacks-based source builds no longer use GOPATH for dependency installation and instead require go.mod; deprecated on 2024-02-26.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)
- [https://docs.cloud.google.com/docs/buildpacks/go](https://docs.cloud.google.com/docs/buildpacks/go)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)

## Supporting Pages

### Authentication for Google Cloud APIs and services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization methods for Google Cloud services Authorization for Google Cloud is primarily handled by Identity and Access Management (IAM) .
- See a list of the products Google provides in the identity and access management space.
- See the Google identity and access management products page.
- Choose the right authentication method for your use case When you access Google Cloud services by using the Google Cloud CLI, Cloud Client Libraries, tools that support Application Default Credentials (ADC) like Terraform, or REST requests, use the following diagram to help you choose an authentication method: This diagram guides you through the following questions: Are you running code in a single-user development environment, such as your own workstation, Cloud Shell, or a virtual desktop interface?

### Building a Go application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/go](https://docs.cloud.google.com/docs/buildpacks/go)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that your app uses module-aware mode, you should include a go.mod file in your application root.
- Managing Dependencies We recommend that you use Go modules to manage dependencies in your Go app.
- If your application requires a specific version, you can use the GOOGLE GO VERSION environment variable to provide a semver constraint that will be used to select an available Go version. pack build sample - go -- builder = gcr . io / buildpacks / builder \ -- env GOOGLE GO VERSION = "17.x.x" Compilation Flags The Go buildpack compiles your application source into an executable using the go build command .
- Environment Variables The Go buildpack supports the following environment variables to customize your container GO See Go documentation on Environment Variables Example: GOFLAGS=-flag=value passes -flag=value to go commands.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- Example: web: gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 main:app Important: When you override the Gunicorn defaults, you must include gunicorn as a package dependency in your project's requirements.txt file.
- Python 3.14 and later Starting from Python version 3.14 and later, the Python buildpack uses the uv package manager as the default installer for the dependencies you specify in your requirements.txt file.
- The following is an example pyproject.toml file: [project] name = "demo-app" version = "0.1.0" description = "" requires-python = ">=3.10" dependencies = [ "flask>=3.1.1" , "gunicorn>=23.0.0" , ] [build-system] requires = [ "setuptools>=61.0" ] build-backend = "setuptools.build meta" Package manager If you manage your dependencies using a requirements.txt file , the default package manager varies based on the Python version you configure.

