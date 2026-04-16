---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.047Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Java runtime Maven wrapper support"
feature_slug: "java-runtime-maven-wrapper-support"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/java"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/nodejs"
keywords:
  - "java"
  - "runtime"
  - "maven"
  - "wrapper"
  - "supports"
  - "wrappers"
  - "manage"
  - "project"
---

# Java runtime Maven wrapper support

Product: Buildpacks
Coverage: MEDIUM

## Step 02 Summary

The Java runtime supports using Maven wrappers to manage a project's Maven dependency.

## Extended Definition

The Java runtime supports using Maven wrappers to manage a project's Maven dependency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/java](https://docs.cloud.google.com/docs/buildpacks/java)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)

## Supporting Pages

### Building a Java application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/java](https://docs.cloud.google.com/docs/buildpacks/java)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- To manage your project's dependency on Maven itself, you can use the Maven Wrapper .
- If your application requires a specific version, you can use the GOOGLE RUNTIME VERSION environment variable to specify a JDK version: pack build sample - java -- builder = gcr . io / buildpacks / builder \ -- env GOOGLE RUNTIME VERSION = 21 You can also use a project.toml project descriptor to encode the environment variable alongside your project files.
- Manage dependencies Dependency configuration is supported for projects that use Maven or Gradle.
- Example settings.xml file: <settings> <mirrors> <mirror> <id>google-maven-central</id> <name>Cloud Storage Maven Central mirror</name> <url>https://maven-central.storage-download.googleapis.com/maven2/</url> <mirrorOf>central</mirrorOf> </mirror> </mirrors> </settings> Mirror repositories in Gradle To configure a mirror, follow the Declaring Repositories instructions in the Gradle project documentation.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You set the GOOGLE PYTHON PACKAGE MANAGER environment variable to pip . uv buildpack : Supports Python projects you manage with uv .
- Poetry buildpack : Supports Python projects you manage with Poetry .
- The following is an example pyproject.toml file: [project] name = "demo-app" version = "0.1.0" description = "" requires-python = ">=3.10" dependencies = [ "flask>=3.1.1" , "gunicorn>=23.0.0" , ] [build-system] requires = [ "setuptools>=61.0" ] build-backend = "setuptools.build meta" Package manager If you manage your dependencies using a requirements.txt file , the default package manager varies based on the Python version you configure.
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When deploying a function onto Cloud Run functions, the engines.node property should be compatible with the runtime used to deploy your function Install dependencies NPM is the default package manager for all versions of Node.js.
- Specify the yarn version in the engines.yarn field of your package.json file. buildpack supports Yarn2 PnP mode if your project includes a .yarn/cache folder.
- Bun package manager The Node.js buildpack supports the Bun package manager, google.nodejs.bun buildpack for installing dependencies.
- Pnpm package manager buildpack uses Pnpm when you include the pnpm-lock.yaml file in your project.

