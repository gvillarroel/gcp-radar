---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.969Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Custom host VM startup scripts"
feature_slug: "custom-host-vm-startup-scripts"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/customize-container-images"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/architecture"
  - "https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations"
keywords:
  - "custom"
  - "host"
  - "vm"
  - "startup"
  - "scripts"
  - "workstations"
  - "supports"
  - "running"
---

# Custom host VM startup scripts

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports running a custom startup script on the workstation host VM by specifying a Cloud Storage script URI.

## Extended Definition

Cloud Workstations supports running a custom startup script on the workstation host VM by specifying a Cloud Storage script URI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- [https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations](https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations)

## Supporting Pages

### Customize container images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can then interact with either IDE: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest as code-oss-image FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/jetbrains-intellij:latest Copy Code OSS for Cloud Workstations and startup scripts into our custom image COPY --from = code-oss-image /opt/code-oss /opt/code-oss COPY --from = code-oss-image /etc/workstation-startup.d/110 start-code-oss.sh /etc/workstation-startup.d/110 start-code-oss.sh Use the existing entrypoint script which will execute all scripts in /etc/workstation-startup.d/ ENTRYPOINT [ "/google/scripts/entrypoint.sh" ] Container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development To create a container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development at build time, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN wget https://open-vsx.org/api/vscjava/vscode-java-debug/0.40.1/file/vscjava.vscode-java-debug-0.40.1.vsix && \ unzip vscjava.vscode-java-debug-0.40.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-debug RUN wget https://open-vsx.org/api/vscjava/vscode-java-dependency/0.19.1/file/vscjava.vscode-java-dependency-0.19.1.vsix && \ unzip vscjava.vscode-java-dependency-0.19.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-dependency RUN wget https://open-vsx.org/api/redhat/java/1.6.0/file/redhat.java-1.6.0.vsix && \ unzip redhat.java-1.6.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/redhat-java RUN wget https://open-vsx.org/api/vscjava/vscode-maven/0.35.2/file/vscjava.vscode-maven-0.35.2.vsix && \ unzip vscjava.vscode-maven-0.35.2.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-maven RUN wget https://open-vsx.org/api/vscjava/vscode-java-test/0.35.0/file/vscjava.vscode-java-test-0.35.0.vsix && \ unzip vscjava.vscode-java-test-0.35.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-test RUN chmod a+rwx -R /opt/code-oss/extensions/ If you pre-install extensions, they are considered built-in extensions.
- For example, to install the latest version of the Clion, run the following command: /installer-scripts/jetbrains-installer.sh clion Customize JetBrains IDE configuration files If a persistent home directory is specified in the workstations configuration, Cloud Workstations base images with JetBrains IDEs automatically persist the $IDE.vmoptions and $IDE.properties configuration files.
- Cloud Workstations base images for JetBrains products include the following scripts to help you: jetbrains-installer.sh : install JetBrains IDEs plugin-installer.sh : install plugins, such as Cloud Code for IntelliJ Use these scripts as needed to customize the base image, to call them with a startup script, or to run them after starting the workstation.
- You can, however, look at the scripts in the /etc/workstation-startup.d/ directory within a container running the Cloud Workstations base image.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- This page describes the workstation configuration parameters that allow you to customize the Cloud Workstations environment, including the VM type , home disk size, base container image, and more.
- Warning: A value of "0s" indicates that Cloud Workstations VMs created with this configuration have no maximum running time.

### Cloud Workstations architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tip: You can use the Compute Engine default service account which is in format: $WORKSTATION CLUSTER HOST PROJECT NUMBER -compute@developer.gserviceaccount.com Warning: You cannot use the default workstations VM service account formatted like: service- $WORKSTATION CLUSTER HOST PROJECT NUMBER @gcp-sa-workstationsvm.iam.gserviceaccount.com If your cluster is inside a VPC Service Controls perimeter, you must add an egress rule allowing your service account to access the Container File System API on the project hosting your container image.
- Reduce workstation startup time with Image streaming Cloud Workstations supports Image streaming, which provides faster workstation startup time by reducing the workstation container image pull time.
- Enable the Container File System API Alternatively, you can run the following gcloud CLI command to enable the Container File System API in workstations host project: gcloud services enable containerfilesystem.googleapis.com Your container images must be stored in Artifact Registry.
- Image streaming in Cloud Workstations typically reduces container image pull time from minutes to seconds, and workstation containers usually start running without waiting for the entire image to download.

### "Access HTTP servers running on a workstation \_|\_ Cloud Workstations \_\

- URL: [https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations](https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Running workstations have a host property that you can use to connect using HTTP from a remote browser.
- To allow unauthenticated CORS preflight requests, run the following Google Cloud CLI command: gcloud beta workstations configs update CONFIG \ --cluster= CLUSTER ID \ --region= REGION \ --project= PROJECT \ --allow-unauthenticated-cors-preflight-requests Disable localhost replacement in HTTP responses To allow applications under development to run properly on the workstation, Cloud Workstations replaces references to localhost, 127.0.0.1, and to 0.0.0.0 with the workstation's hostname in HTTP responses from the workstation.
- To disable this behavior, run the following Google Cloud CLI command: gcloud beta workstations configs update CONFIG \ --cluster= CLUSTER ID \ --region= REGION \ --project= PROJECT \ --disable-localhost-replacement Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can find the host property by getting details for a running workstation through the API, Google Cloud CLI, the Google Cloud console, or by printing the $WEB HOST environment variable, which is automatically set inside your workstation.

