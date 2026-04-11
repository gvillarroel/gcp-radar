---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.314Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "OS-only runtime (osonly24) availability"
feature_slug: "os-only-runtime-osonly24-availability"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/osonly"
  - "https://docs.cloud.google.com/docs/authentication"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
keywords:
  - "generally"
  - "osonly24"
  - "only"
  - "os"
  - "runtime"
  - "availability"
  - "is"
  - "the"
---

# OS-only runtime (osonly24) availability

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

The osonly24 OS-only runtime is generally available for deploying binaries such as Dart and Go.

## Extended Definition

The osonly24 OS-only runtime is generally available for deploying binaries such as Dart and Go.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/osonly](https://docs.cloud.google.com/docs/buildpacks/osonly)
- [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)

## Supporting Pages

### Configure the OS only runtime \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/osonly](https://docs.cloud.google.com/docs/buildpacks/osonly)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The OS only runtime is a language-independent, general-purpose runtime for Cloud Run source deployments.
- Supported stack The OS only runtime is available on the google-24 stack.
- For example, to compile a Go application targeting linux/amd64 , run the following command: GOOS = "linux" GOARCH = amd64 go build main.go Deploy to Cloud Run Deploy your binary to Cloud Run by running the following the gcloud run deploy command, and specify the base image (for example, osonly24 ): gcloud beta run deploy SERVICE \ --source . \ --no-build \ --base-image = osonly24 \ --project PROJECT ID \ --allow-unauthenticated \ --command COMMAND Replace the following: SERVICE : the name of your Cloud Run service.
- Home Documentation Application hosting Buildpacks Guides Send feedback Configure the OS only runtime Stay organized with collections Save and categorize content based on your preferences.

### Authentication for Google Cloud APIs and services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose the right authentication method for your use case When you access Google Cloud services by using the Google Cloud CLI, Cloud Client Libraries, tools that support Application Default Credentials (ADC) like Terraform, or REST requests, use the following diagram to help you choose an authentication method: This diagram guides you through the following questions: Are you running code in a single-user development environment, such as your own workstation, Cloud Shell, or a virtual desktop interface?
- The following list provides some methods for using a service account to authenticate to Google APIs and services, in order from most secure to least secure.
- For example, you want to configure authentication and authorization consistently for your application across all environments.
- For more information, see Choose the right authentication method for your use case on this page.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Entrypoint for Cloud Run source deploys This feature is only available if you deploy your source code to Cloud Run with the Python runtime.
- Configure pip It is possible to configure the behavior of pip using environment variables : pack build sample-python --builder=gcr.io/buildpacks/builder \ --env PIP DEFAULT TIMEOUT='60' Private dependencies from Artifact Registry An Artifact Registry Python repository can host private dependencies for your Python function.
- 3.14 Use GOOGLE PYTHON VERSION It is also possible to specify the Python version using the GOOGLE PYTHON VERSION environment variable.
- The Python buildpack uses the pyproject.toml file only when there isn't a requirements.txt file present in your root directory.

