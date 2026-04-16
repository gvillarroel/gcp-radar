---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.928Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Gradle build step support"
feature_slug: "gradle-build-step-support"
latest_feature_date: "2017-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-java"
  - "https://docs.cloud.google.com/docs/buildpacks/build-application"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview"
keywords:
  - "gradle"
  - "step"
  - "added"
---

# Gradle build step support

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Gradle was added as a supported Cloud Build build step.

## Extended Definition

Gradle was added as a supported Cloud Build build step.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)

## Supporting Pages

### Build, test, and containerize Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following build step containerizes your application, pushes your container image to Artifact Registry, and generates build provenance information: maven steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=target/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] gradle steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=build/libs/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] Where: location : the regional or multi-regional location for your repository. project-id : the ID of your Google Cloud project. repository : the name of your repository Artifact Registry. image : the name of your container image. build-artifact : the name of your JAR file created from your build step.
- The following build step specifies the entrypoint for the maven image tagged as 3.3-jdk-8 and prints the build tool version: steps: - name: maven:3.3-jdk-8 entrypoint: mvn args: [ '--version' ] gradle To execute your tasks in the gradle image, add a step to your build config with the following fields: name : Set the value of this field to gradle or gradle:<tag> , where the tag represents the version.
- In your build config file, add test to the args field to invoke test within maven and gradle : maven steps: - name: maven:3.3-jdk-8 entrypoint: mvn args: [ 'test' ] gradle steps: - name: gradle:5.6.2-jdk8 entrypoint: gradle args: [ 'test' ] Package application : To package your application into a JAR file for your maven image, specify the package command in the args field.
- Using the maven or gradle image You can configure Cloud Build to build Java applications using the maven image or the gradle image from Docker Hub. maven To execute your tasks in the maven image, add a step to your build config with the following fields: name : Set the value of this field to maven or maven:<tag> , where the tag represents the version.

### "Build an application with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-java-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-node PHP gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-php Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-ruby .NET gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-dotnet Verify that the sample application was successfully published to REPO NAME : gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME Replace: LOCATION with the region name of your container repository.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use pack to build the sample application image: Go pack build --builder=gcr.io/buildpacks/builder sample-go Java pack build --builder=gcr.io/buildpacks/builder sample-java-gradle Node.js pack build --builder=gcr.io/buildpacks/builder sample-node PHP pack build --builder=gcr.io/buildpacks/builder sample-php Python pack build --builder=gcr.io/buildpacks/builder sample-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-ruby .NET pack build --builder=gcr.io/buildpacks/builder sample-dotnet Run the image using docker : Go docker run -p8080:8080 sample-go Java docker run -it -ePORT=8080 -p8080:8080 sample-java-gradle Node.js docker run -it -ePORT=8080 -p8080:8080 sample-node PHP docker run -it --rm -p 8080:8080 sample-php Python docker run -it -ePORT=8080 -p8080:8080 sample-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-ruby .NET docker run -it -ePORT=8080 -p8080:8080 sample-dotnet Visit the running application by browsing to localhost:8080 .
- Create a YAML file name cloudbuild.yaml that includes the URI of your container image repository. options : logging : CLOUD LOGGING ONLY pool : {} projectId : PROJECT ID steps : - name : gcr.io/k8s-skaffold/pack entrypoint : pack args : - build - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME - --builder - gcr.io/buildpacks/builder:latest - --network - cloudbuild - --publish - name : gcr.io/cloud-builders/docker entrypoint : pack args : - pull - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME images : - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME Replace: LOCATION with the region name of your container repository, for example, us-west2 .
- After you finish these steps, you can delete the project, removing all resources associated with the project.

### "google-cloud-build overview (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)
- Source ID: `site-java-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The example below demonstrates how you would import the BOM and include the google-cloud-build artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-build</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Cloud Build Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Build for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Add a platform dependency on com.google.cloud:libraries-bom and remove the version from the dependency declarations in the artifact's build.gradle file.
- For more details of the platform and enforcedPlatform keywords Gradle 5.x or higher, see Gradle: Importing Maven BOMs .

