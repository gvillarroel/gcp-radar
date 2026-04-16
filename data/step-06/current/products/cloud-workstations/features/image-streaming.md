---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.974Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Image Streaming"
feature_slug: "image-streaming"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/architecture"
  - "https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild"
  - "https://docs.cloud.google.com/workstations/docs/customize-container-images"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
keywords:
  - "image"
  - "streaming"
  - "workstations"
  - "supports"
  - "to"
  - "reduce"
  - "pull"
  - "time"
---

# Image Streaming

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports Image Streaming to reduce image pull time and speed up workstation startup; Cloud Workstations supports Image Streaming to reduce image pull time and speed up workstation startup.

## Extended Definition

Cloud Workstations supports Image Streaming to reduce image pull time and speed up workstation startup; Cloud Workstations supports Image Streaming to reduce image pull time and speed up workstation startup.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- [https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild](https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild)
- [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)

## Supporting Pages

### Cloud Workstations architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image streaming in Cloud Workstations typically reduces container image pull time from minutes to seconds, and workstation containers usually start running without waiting for the entire image to download.
- Reduce workstation startup time with Image streaming Cloud Workstations supports Image streaming, which provides faster workstation startup time by reducing the workstation container image pull time.
- Requirements You must meet the following requirements to use Image streaming in Cloud Workstations: You must enable the Container File System API in workstations host project.
- This enables faster workstation startup times by removing the wait time for creating VMs and pulling the container image onto the VM.

### "Automate container image rebuilds to synchronize base image updates \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild](https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant a required role to default service account to invoke Cloud Build trigger: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $PROJECT NUMBER -compute@developer.gserviceaccount.com" \ --role = "roles/cloudbuild.builds.editor" Grant a required role to Cloud Build service account to upload images to Artifact Registry: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = serviceAccount: $PROJECT NUMBER @cloudbuild.gserviceaccount.com \ --role = "roles/artifactregistry.admin" Create the Cloud Scheduler job with the following command: gcloud scheduler jobs create http run-build \ --schedule = '0 1 ' \ --uri = https://cloudbuild.googleapis.com/v1/projects/ $PROJECT ID /locations/global/triggers/ $TRIGGER ID :run \ --location = us-central1 \ --oauth-service-account-email = $PROJECT NUMBER -compute@developer.gserviceaccount.com \ --oauth-token-scope = https://www.googleapis.com/auth/cloud-platform The job is set to execute one time every day; however, to test the feature immediately, run the job manually from the Cloud Scheduler: Go to Cloud Scheduler On the Cloud Scheduler page, find the entry you just created called run-build .
- Home Documentation Application development Cloud Workstations Guides Send feedback Automate container image rebuilds to synchronize base image updates Stay organized with collections Save and categorize content based on your preferences.
- After a custom image is in use it's useful to automate a rebuild of the custom image in order to pull in fixes and updates available in the base images.
- Cloud Workstations lets you create and use custom images for your workstations.

### Customize container images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- Source ID: `site-docs-root-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can then interact with either IDE: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest as code-oss-image FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/jetbrains-intellij:latest Copy Code OSS for Cloud Workstations and startup scripts into our custom image COPY --from = code-oss-image /opt/code-oss /opt/code-oss COPY --from = code-oss-image /etc/workstation-startup.d/110 start-code-oss.sh /etc/workstation-startup.d/110 start-code-oss.sh Use the existing entrypoint script which will execute all scripts in /etc/workstation-startup.d/ ENTRYPOINT [ "/google/scripts/entrypoint.sh" ] Container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development To create a container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development at build time, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN wget https://open-vsx.org/api/vscjava/vscode-java-debug/0.40.1/file/vscjava.vscode-java-debug-0.40.1.vsix && \ unzip vscjava.vscode-java-debug-0.40.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-debug RUN wget https://open-vsx.org/api/vscjava/vscode-java-dependency/0.19.1/file/vscjava.vscode-java-dependency-0.19.1.vsix && \ unzip vscjava.vscode-java-dependency-0.19.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-dependency RUN wget https://open-vsx.org/api/redhat/java/1.6.0/file/redhat.java-1.6.0.vsix && \ unzip redhat.java-1.6.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/redhat-java RUN wget https://open-vsx.org/api/vscjava/vscode-maven/0.35.2/file/vscjava.vscode-maven-0.35.2.vsix && \ unzip vscjava.vscode-maven-0.35.2.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-maven RUN wget https://open-vsx.org/api/vscjava/vscode-java-test/0.35.0/file/vscjava.vscode-java-test-0.35.0.vsix && \ unzip vscjava.vscode-java-test-0.35.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-test RUN chmod a+rwx -R /opt/code-oss/extensions/ If you pre-install extensions, they are considered built-in extensions.
- Container image with emacs pre-installed To create a container image with emacs pre-installed, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN sudo apt update RUN sudo apt install -y emacs Container image with user customization Follow these steps to customize a container image: Create a script in /etc/workstation-startup.d/ that runs after 010 add-user.sh —for example, 011 customize-user.sh : #!/bin/bash Create new group groupadd $GROUP Add the user to a new group usermod -a -G $GROUP $USERNAME Replace $GROUP with the new group name and $USERNAME with the user's username.
- Assuming that you named your script, 011 customize-user.sh , add the following to your image in your Dockerfile and make it executable: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest COPY 011 customize-user.sh /etc/workstation-startup.d/ RUN chmod +x /etc/workstation-startup.d/011 customize-user.sh Container image that sets container environment variables in SSH sessions Environment variables set at the workstation configuration or workstation level are passed to direct subprocesses using the entrypoint command.
- Assuming that you named your script, 011 add-ssh-env-variables.sh , add the following to your image in your Dockerfile and make it executable: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest COPY 011 add-ssh-env-variables.sh /etc/workstation-startup.d/ RUN chmod +x /etc/workstation-startup.d/011 add-ssh-env-variables.sh Container image that enables X11 forwarding for SSH sessions X11 forwarding lets you start remote applications and forward the application display to a local machine.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- This page describes the workstation configuration parameters that allow you to customize the Cloud Workstations environment, including the VM type , home disk size, base container image, and more.
- If using a custom container image, the service account must have Artifact Registry Reader permission to pull the specified image.
- If using a custom container image, the service account must have Artifact Registry Reader permission to pull the specified image.

