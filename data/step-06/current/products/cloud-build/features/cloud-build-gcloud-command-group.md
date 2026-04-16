---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.916Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build gcloud command group"
feature_slug: "cloud-build-gcloud-command-group"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
keywords:
  - "commands"
  - "command"
  - "group"
  - "were"
  - "updated"
  - "gcloud"
---

# Cloud Build gcloud command group

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build gcloud CLI commands were updated to use the `gcloud builds` command group.

## Extended Definition

Cloud Build gcloud CLI commands were updated to use the `gcloud builds` command group.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Upload all Maven files in a folder to an Artifact Registry repository The following build config sets the mavenArtifacts field to upload all files in the folder /workspace/target/com/mycompany/app/my-app-1/1.0.0/ to the Artifact Registry repository https://us-central1-maven.pkg.dev/my-project-id/my-java-repo : YAML artifacts : mavenArtifacts : - repository : 'https://us-central1-maven.pkg.dev/my-project-id/my-java-repo' deployFolder : '/workspace/target' artifactId : 'my-app-1' groupId : 'com.mycompany.app' version : '1.0.0' JSON { "artifacts" : { "mavenArtifacts" : [ { "repository" : "https://us-central1-maven.pkg.dev/my-project-id/my-java-repo" , "deployFolder" : "/workspace/target" , "artifactId" : "my-app-1" , "groupId" : "com.mycompany.app" , "version" : "1.0.0" } ] } } To deploy your Maven files to /workspace/target/com/mycompany/app/my-app-1/1.0.0/ , add the -DaltDeploymentRepository=local::default::file:./workspace/target option to your Maven deploy command.
- The following config sets two tags named mytag1 and mytag2 : YAML steps : - name : 'gcr.io/cloud-builders/docker' ... - name : 'ubuntu' ... tags : [ 'mytag1' , 'mytag2' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" }, { "name" : "ubuntu" } ], "tags" : [ "mytag1" , "mytag2" ] } Note: The tags field is different from the --tag flag on the gcloud builds submit command, which causes Cloud Build to build using a Dockerfile instead of a build config file.
- Build steps are analogous to commands in a script and provide you with the flexibility of executing arbitrary instructions in your build.
- Example: Upload a packaged Maven file to an Artifact Registry repository The following build config sets the mavenArtifacts field to upload the packaged file my-app-1.0-SNAPSHOT.jar to the Artifact Registry repository https://us-central1-maven.pkg.dev/my-project-id/my-java-repo : YAML artifacts : mavenArtifacts : - repository : 'https://us-central1-maven.pkg.dev/my-project-id/my-java-repo' path : '/workspace/my-app/target/my-app-1.0-SNAPSHOT.jar' artifactId : 'my-app-1' groupId : 'com.mycompany.app' version : '1.0.0' JSON { "artifacts" : { "mavenArtifacts" : [ { "repository" : "https://us-central1-maven.pkg.dev/my-project-id/my-java-repo" , "path" : "/workspace/my-app/target/my-app-1.0-SNAPSHOT.jar" , "artifactId" : "my-app-1" , "groupId" : "com.mycompany.app" , "version" : "1.0.0" } ] } } pythonPackages The pythonPackages field lets you upload Python packages to Artifact Registry.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Upload all Maven files in a folder to an Artifact Registry repository The following build config sets the mavenArtifacts field to upload all files in the folder /workspace/target/com/mycompany/app/my-app-1/1.0.0/ to the Artifact Registry repository https://us-central1-maven.pkg.dev/my-project-id/my-java-repo : YAML artifacts : mavenArtifacts : - repository : 'https://us-central1-maven.pkg.dev/my-project-id/my-java-repo' deployFolder : '/workspace/target' artifactId : 'my-app-1' groupId : 'com.mycompany.app' version : '1.0.0' JSON { "artifacts" : { "mavenArtifacts" : [ { "repository" : "https://us-central1-maven.pkg.dev/my-project-id/my-java-repo" , "deployFolder" : "/workspace/target" , "artifactId" : "my-app-1" , "groupId" : "com.mycompany.app" , "version" : "1.0.0" } ] } } To deploy your Maven files to /workspace/target/com/mycompany/app/my-app-1/1.0.0/ , add the -DaltDeploymentRepository=local::default::file:./workspace/target option to your Maven deploy command.
- The following config sets two tags named mytag1 and mytag2 : YAML steps : - name : 'gcr.io/cloud-builders/docker' ... - name : 'ubuntu' ... tags : [ 'mytag1' , 'mytag2' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" }, { "name" : "ubuntu" } ], "tags" : [ "mytag1" , "mytag2" ] } Note: The tags field is different from the --tag flag on the gcloud builds submit command, which causes Cloud Build to build using a Dockerfile instead of a build config file.
- Build steps are analogous to commands in a script and provide you with the flexibility of executing arbitrary instructions in your build.
- Example: Upload a packaged Maven file to an Artifact Registry repository The following build config sets the mavenArtifacts field to upload the packaged file my-app-1.0-SNAPSHOT.jar to the Artifact Registry repository https://us-central1-maven.pkg.dev/my-project-id/my-java-repo : YAML artifacts : mavenArtifacts : - repository : 'https://us-central1-maven.pkg.dev/my-project-id/my-java-repo' path : '/workspace/my-app/target/my-app-1.0-SNAPSHOT.jar' artifactId : 'my-app-1' groupId : 'com.mycompany.app' version : '1.0.0' JSON { "artifacts" : { "mavenArtifacts" : [ { "repository" : "https://us-central1-maven.pkg.dev/my-project-id/my-java-repo" , "path" : "/workspace/my-app/target/my-app-1.0-SNAPSHOT.jar" , "artifactId" : "my-app-1" , "groupId" : "com.mycompany.app" , "version" : "1.0.0" } ] } } pythonPackages The pythonPackages field lets you upload Python packages to Artifact Registry.

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- The time is $( date ) ." Create a file named Dockerfile with the following contents: FROM alpine COPY quickstart.sh / CMD [ "/quickstart.sh" ] In the terminal window, run the following command to make quickstart.sh executable: chmod +x quickstart.sh Create a Docker repository in Artifact Registry Use the gcloud artifacts repositories create command to create a Docker repository named quickstart-docker-repo in the location us-west2 with the description "Docker repository": gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west2 --description = "Docker repository" Verify that your repository was created: gcloud artifacts repositories list The list of displayed repositories should include quickstart-docker-repo .
- Get your Google Cloud project ID by running the following command: gcloud config get-value project Run the following command from the directory containing quickstart.sh and Dockerfile : gcloud builds submit -- region = us - west2 -- tag us - west2 - docker . pkg . dev / PROJECT ID / quickstart - docker - repo / quickstart - image: tag1 Note: If your project ID contains a colon, replace the colon with a forward slash.
- To initialize the gcloud CLI, run the following command: gcloud init If you've already installed Google Cloud CLI previously, make sure you have the latest available version by running gcloud components update .

