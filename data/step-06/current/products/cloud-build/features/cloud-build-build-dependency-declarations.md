---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.818Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build dependency declarations"
feature_slug: "cloud-build-build-dependency-declarations"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview"
keywords:
  - "declarations"
  - "dependency"
  - "declaring"
  - "dependencies"
  - "directly"
  - "supports"
---

# Cloud Build build dependency declarations

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports declaring build dependencies directly in the build configuration file.

## Extended Definition

Cloud Build now supports declaring build dependencies directly in the build configuration file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.
- The following is an example pyproject.toml file: [project] name = "demo-app" version = "0.1.0" description = "" requires-python = ">=3.10" dependencies = [ "flask>=3.1.1" , "gunicorn>=23.0.0" , ] [build-system] requires = [ "setuptools>=61.0" ] build-backend = "setuptools.build meta" Package manager If you manage your dependencies using a requirements.txt file , the default package manager varies based on the Python version you configure.
- Configure pip It is possible to configure the behavior of pip using environment variables : pack build sample-python --builder=gcr.io/buildpacks/builder \ --env PIP DEFAULT TIMEOUT='60' Private dependencies from Artifact Registry An Artifact Registry Python repository can host private dependencies for your Python function.
- Example: pack build sample-python \ --builder gcr.io/buildpacks/builder --env "GOOGLE ENTRYPOINT='gunicorn --bind :$PORT main:app'" Environment Variables The Python buildpack supports the following environment variables to customize your container PIP <key> See pip documentation .

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM --> <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.28.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-storage</artifactId> </dependency> </dependencies> You can configure the Cloud Client Libraries for Java to handle authentication automatically .
- Specify it in your pom.xml file's <dependencies> entry: <dependencies> <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>3.1.0</version> <type>jar</type> <scope>provided</scope> </dependency> </dependencies> Note that frameworks such as SparkJava or Spring Boot won't require the servlet library.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Specifying dependencies Stay organized with collections Save and categorize content based on your preferences.
- Declare and manage dependencies To manage dependencies using Maven, you need to specify the dependencies in the <dependencies> section inside the pom.xml file of your project.

### "google-cloud-build overview (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)
- Source ID: `site-java-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The example below demonstrates how you would import the BOM and include the google-cloud-build artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-build</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Add a platform dependency on com.google.cloud:libraries-bom and remove the version from the dependency declarations in the artifact's build.gradle file.
- Cloud Build Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Build for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- The example below demonstrates how you would import the BOM and include the google-cloud-build artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-build" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.

