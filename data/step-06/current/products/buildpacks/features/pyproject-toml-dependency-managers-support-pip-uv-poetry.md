---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.319Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "pyproject.toml dependency managers support (pip/uv/poetry)"
feature_slug: "pyproject-toml-dependency-managers-support-pip-uv-poetry"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
  - "https://docs.cloud.google.com/docs/buildpacks/build-run-image"
keywords:
  - "managers"
  - "poetry"
  - "pip"
  - "uv"
  - "pyproject"
  - "toml"
  - "dependency"
  - "run"
---

# pyproject.toml dependency managers support (pip/uv/poetry)

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

Cloud Run and Cloud Run Functions source deployments support pyproject.toml for Python dependencies using pip, uv, or poetry.

## Extended Definition

Cloud Run and Cloud Run Functions source deployments support pyproject.toml for Python dependencies using pip, uv, or poetry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- [https://docs.cloud.google.com/docs/buildpacks/build-run-image](https://docs.cloud.google.com/docs/buildpacks/build-run-image)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.
- A pyproject.toml file is present and you don't include other high-precedence lock files such as poetry.lock , uv.lock , or configurations such as [tool.poetry] , and you don't set the GOOGLE PYTHON PACKAGE MANAGER environment variable.
- If you don't set an environment variable, and use only a pyproject.toml file without uv or Poetry, the buildpack defaults to using uv for all supported Python versions .
- This feature lets you deploy applications you manage with Poetry, uv, or pip, directly to Cloud Run and Cloud Run functions.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- When GOOGLE MAVEN BUILD ARGS is not specified, the following command is run by default: mvn clean package --batch-mode -DskipTests -Dhttp.keepAlive = false Example: Specifying GOOGLE MAVEN BUILD ARGS="clean package: runs the mvn clean package command.
- For configuration details about a specific language, see: Go Java Node.js Python Ruby PHP Cloud Run and Cloud Run functions environment variables The following configurations support building services for both applications and functions.
- When GOOGLE GRADLE BUILD ARGS is not specified, the following command is run by default: gradle clean assemble -x test --build-cache Example: Specifying GOOGLE GRADLE BUILD ARGS="clean assemble" runs the gradle clean assemble command.

### "Configure your build and run images \_|\_ Buildpacks \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-run-image](https://docs.cloud.google.com/docs/buildpacks/build-run-image)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: FROM gcr.io/buildpacks/builder USER root RUN apt-get update && apt-get install -y --no-install-recommends \ subversion && \ apt-get clean && \ rm -rf /var/lib/apt/lists/ USER cnb Build your custom builder image from the builder.Dockerfile file: docker build -t BUILDER IMAGE NAME -f builder.Dockerfile .
- Run the pack build command with your custom run image to build the new container image of your application or function: pack build SERVICE IMAGE NAME --builder gcr.io/buildpacks/builder:v1 --run-image RUN IMAGE Replace: SERVICE IMAGE NAME with the name that you choose for your application or function image.
- Example: FROM gcr.io/buildpacks/gcp/run USER root RUN apt-get update && apt-get install -y --no-install-recommends \ imagemagick && \ apt-get clean && \ rm -rf /var/lib/apt/lists/ USER 33 :33 Build your custom run image from the run.Dockerfile file: docker build -t RUN IMAGE NAME -f run.Dockerfile .
- Run the pack build command with your custom builder image to build the new container image of your application or function: pack build SERVICE IMAGE NAME --builder BUILDER IMAGE NAME Replace: SERVICE IMAGE NAME with the name that you choose for your application or function image.

