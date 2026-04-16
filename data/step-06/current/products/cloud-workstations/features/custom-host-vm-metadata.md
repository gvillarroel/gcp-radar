---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.968Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Custom host VM metadata"
feature_slug: "custom-host-vm-metadata"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/customize-container-images"
  - "https://docs.cloud.google.com/workstations/docs/custom-constraints"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
keywords:
  - "custom"
  - "host"
  - "vm"
  - "metadata"
  - "workstations"
  - "lets"
  - "you"
  - "set"
---

# Custom host VM metadata

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations lets you set custom metadata key-value pairs on a workstation host VM.

## Extended Definition

Cloud Workstations lets you set custom metadata key-value pairs on a workstation host VM.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)

## Supporting Pages

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes the workstation configuration parameters that allow you to customize the Cloud Workstations environment, including the VM type , home disk size, base container image, and more.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- Note that the service regularly updates the OS version of the host VM, and it is the responsibility of the user to ensure the script stays compatible with the OS version. instanceMetadata map (key: string, value: string) Optional.

### Customize container images \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/customize-container-images](https://docs.cloud.google.com/workstations/docs/customize-container-images)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assuming that you named your script, 011 customize-user.sh , add the following to your image in your Dockerfile and make it executable: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest COPY 011 customize-user.sh /etc/workstation-startup.d/ RUN chmod +x /etc/workstation-startup.d/011 customize-user.sh Container image that sets container environment variables in SSH sessions Environment variables set at the workstation configuration or workstation level are passed to direct subprocesses using the entrypoint command.
- For custom container images, we recommend setting up a pipeline to automatically rebuild these images when the Cloud Workstations base image is updated, in addition to running a container scanning tool such as Artifact Analysis to inspect any additional dependencies you added.
- Extend Cloud Workstations base images When extending a Cloud Workstations base image to create a custom image for your workstation environment, you can take three approaches: Update your Dockerfile to include any additional static assets that you want to add.
- You can then interact with either IDE: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest as code-oss-image FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/jetbrains-intellij:latest Copy Code OSS for Cloud Workstations and startup scripts into our custom image COPY --from = code-oss-image /opt/code-oss /opt/code-oss COPY --from = code-oss-image /etc/workstation-startup.d/110 start-code-oss.sh /etc/workstation-startup.d/110 start-code-oss.sh Use the existing entrypoint script which will execute all scripts in /etc/workstation-startup.d/ ENTRYPOINT [ "/google/scripts/entrypoint.sh" ] Container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development To create a container image that pre-installs IDE extensions in Code OSS for Cloud Workstations for Java development at build time, run the following commands: FROM us-central1-docker.pkg.dev/cloud-workstations-images/predefined/code-oss:latest RUN wget https://open-vsx.org/api/vscjava/vscode-java-debug/0.40.1/file/vscjava.vscode-java-debug-0.40.1.vsix && \ unzip vscjava.vscode-java-debug-0.40.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-debug RUN wget https://open-vsx.org/api/vscjava/vscode-java-dependency/0.19.1/file/vscjava.vscode-java-dependency-0.19.1.vsix && \ unzip vscjava.vscode-java-dependency-0.19.1.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-dependency RUN wget https://open-vsx.org/api/redhat/java/1.6.0/file/redhat.java-1.6.0.vsix && \ unzip redhat.java-1.6.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/redhat-java RUN wget https://open-vsx.org/api/vscjava/vscode-maven/0.35.2/file/vscjava.vscode-maven-0.35.2.vsix && \ unzip vscjava.vscode-maven-0.35.2.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-maven RUN wget https://open-vsx.org/api/vscjava/vscode-java-test/0.35.0/file/vscjava.vscode-java-test-0.35.0.vsix && \ unzip vscjava.vscode-java-test-0.35.0.vsix "extension/ " && \ mv extension /opt/code-oss/extensions/java-test RUN chmod a+rwx -R /opt/code-oss/extensions/ If you pre-install extensions, they are considered built-in extensions.

### Create custom constraints for Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Require Workstation clusters to enable private gateway endpoint. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : "resource.privateClusterConfig.enablePrivateEndpoint == true" actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint Require Workstation configs to disable TCP connections. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationConfigDisableTcpConnections resourceTypes : - workstations.googleapis.com/WorkstationConfig methodTypes : - CREATE - UPDATE condition : "resource.disableTcpConnections == true" actionType : ALLOW displayName : Require workstation configs to disable TCP connections description : All workstation configs must disable TCP connections Require Workstation configs to disable SSH access to workstation VMs. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationConfigDisableSsh resourceTypes : - workstations.googleapis.com/WorkstationConfig methodTypes : - CREATE - UPDATE condition : "resource.host.gceInstance.disableSsh == true" actionType : ALLOW displayName : Require workstation configs to disable SSH access to workstation VMs description : All workstation configs must disable SSH access to workstation VMs Cloud Workstations supported resources The following table lists the Cloud Workstations resources that you can reference in custom constraints.
- Apply the policy: gcloud org-policies set-policy /policy-ws-private-gateway.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.workstationsPrivateGatewayClusters - SET COCsm5QGENiXi2E= After you apply the policy, wait for about two minutes for Google Cloud to start enforcing the policy.
- Resource Field workstations.googleapis.com/Workstation resource.annotations resource.displayName resource.env resource.name resource.sourceWorkstation workstations.googleapis.com/WorkstationCluster resource.annotations resource.displayName resource.domainConfig.domain resource.name resource.network resource.privateClusterConfig.allowedProjects resource.privateClusterConfig.enablePrivateEndpoint resource.subnetwork resource.tags workstations.googleapis.com/WorkstationConfig resource.allowedPorts.first resource.allowedPorts.last resource.annotations resource.container.args resource.container.command resource.container.env resource.container.image resource.container.runAsUser resource.container.workingDir resource.disableTcpConnections resource.displayName resource.enableAuditAgent resource.encryptionKey.kmsKey resource.encryptionKey.kmsKeyServiceAccount resource.ephemeralDirectories.gcePd.diskType resource.ephemeralDirectories.gcePd.readOnly resource.ephemeralDirectories.gcePd.sourceImage resource.ephemeralDirectories.gcePd.sourceSnapshot resource.ephemeralDirectories.mountPath resource.grantWorkstationAdminRoleOnCreate resource.host.gceInstance.accelerators.count resource.host.gceInstance.accelerators.type resource.host.gceInstance.boostConfigs.accelerators.count resource.host.gceInstance.boostConfigs.accelerators.type resource.host.gceInstance.boostConfigs.bootDiskSizeGb resource.host.gceInstance.boostConfigs.enableNestedVirtualization resource.host.gceInstance.boostConfigs.machineType resource.host.gceInstance.boostConfigs.poolSize resource.host.gceInstance.bootDiskSizeGb resource.host.gceInstance.confidentialInstanceConfig.enableConfidentialCompute resource.host.gceInstance.disablePublicIpAddresses resource.host.gceInstance.disableSsh resource.host.gceInstance.enableNestedVirtualization resource.host.gceInstance.machineType resource.host.gceInstance.poolSize resource.host.gceInstance.serviceAccount resource.host.gceInstance.serviceAccountScopes resource.host.gceInstance.shieldedInstanceConfig.enableIntegrityMonitoring resource.host.gceInstance.shieldedInstanceConfig.enableSecureBoot resource.host.gceInstance.shieldedInstanceConfig.enableVtpm resource.host.gceInstance.tags resource.host.gceInstance.vmTags resource.idleTimeout resource.maxUsableWorkstations resource.name resource.persistentDirectories.gcePd.diskType resource.persistentDirectories.gcePd.fsType resource.persistentDirectories.gcePd.reclaimPolicy resource.persistentDirectories.gcePd.sizeGb resource.persistentDirectories.gcePd.sourceSnapshot resource.persistentDirectories.mountPath resource.readinessChecks.path resource.readinessChecks.port resource.replicaZones resource.runningTimeout What's next Learn more about Organization Policy Service .
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-ws-private-gateway.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : resource.privateClusterConfig.enablePrivateEndpoint == true actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint This defines a constraint where for every new workstation cluster, if the public gateway is enabled, the operation is denied.

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This corresponds to the workstation cluster id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the workstation config id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the workstation id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the workstation field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

