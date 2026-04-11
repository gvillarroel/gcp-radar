---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.327Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Java runtime support for Maven wrappers"
feature_slug: "java-runtime-support-for-maven-wrappers"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/java"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
  - "https://docs.cloud.google.com/docs/authentication"
keywords:
  - "wrappers"
  - "maven"
  - "java"
  - "adds"
  - "runtime"
  - "using"
  - "for"
  - "the"
---

# Java runtime support for Maven wrappers

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

The Java runtime adds support for using Maven Wrapper files to manage the runtime's Maven dependency in projects.

## Extended Definition

The Java runtime adds support for using Maven Wrapper files to manage the runtime's Maven dependency in projects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/java](https://docs.cloud.google.com/docs/buildpacks/java)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)

## Supporting Pages

### Building a Java application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/java](https://docs.cloud.google.com/docs/buildpacks/java)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Mirror repositories in Maven To configure a mirror, follow the Using Mirrors for Repositories instructions in the Maven project documentation.
- If your application requires a specific version, you can use the GOOGLE RUNTIME VERSION environment variable to specify a JDK version: pack build sample - java -- builder = gcr . io / buildpacks / builder \ -- env GOOGLE RUNTIME VERSION = 21 You can also use a project.toml project descriptor to encode the environment variable alongside your project files.
- If you do not use the Maven Wrapper, buildpacks defaults to using a recent version of Maven when running pack build .
- Configure Maven Maven configurations can be applied using the MAVEN OPTS environment variable.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GOOGLE MAVEN BUILD ARGS For Java runtimes using the Maven plugin: Overrides the default Maven command with the build command that you specify.
- GOOGLE GRADLE BUILD ARGS For Java runtimes using the Gradle plugin: Overrides the default Gradle command with the build command that you specify.
- GOOGLE BUILD ARGS For Java (Maven and Gradle) and .NET runtimes: Appends arguments to the build command.
- All other deployments Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: gunicorn -b :8080 main:app GOOGLE RUNTIME Forces the runtime to opt-in.

### Authentication for Google Cloud APIs and services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/authentication](https://docs.cloud.google.com/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose the right authentication method for your use case When you access Google Cloud services by using the Google Cloud CLI, Cloud Client Libraries, tools that support Application Default Credentials (ADC) like Terraform, or REST requests, use the following diagram to help you choose an authentication method: This diagram guides you through the following questions: Are you running code in a single-user development environment, such as your own workstation, Cloud Shell, or a virtual desktop interface?
- Workforce Identity Federation lets you use an external identity provider to authenticate and authorize a workforce—a group of users, such as employees, partners, and contractors—using IAM, so that the users can access Google Cloud services.
- The following list provides some methods for using a service account to authenticate to Google APIs and services, in order from most secure to least secure.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

