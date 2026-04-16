---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.839Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker support in us-west4 region"
feature_slug: "worker-support-in-us-west4-region"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/build-container-image"
keywords:
  - "worker"
  - "us"
  - "west4"
  - "region"
  - "dataflow"
  - "can"
  - "run"
  - "vms"
---

# Worker support in us-west4 region

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can run worker VMs in zones within the us-west4 region.

## Extended Definition

Dataflow can run worker VMs in zones within the us-west4 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance)
- [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)

## Supporting Pages

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Although user data is strictly handled by Dataflow workers in their assigned geographic region, pipeline log messages are stored in Cloud Logging , which has a single global presence in Google Cloud.
- Note: Starting with Beam SDK version 2.44.0, Dataflow does not support running jobs with workers in a region that is different from the job region.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.

### Regulatory support in Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance)
- Source ID: `site-docs-reference-required-4`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Version Status dataflow.googleapis.com v1beta3 SUPPORTED Compliance supported regions Dataflow is available for Data Boundary for ITAR in the following Google Cloud regions: us-central1 us-east1 us-east4 us-west1 us-west2 us-west3 us-west4 us-central1 us-central2 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 Fields not intended for Sensitive data The following table provides an illustrative list of field categories and specific fields that aren't suitable for sensitive information.
- Category Fields Job configuration - environment and worker settings job.environment.workerPools.diskType job.environment.workerPools.machineType job.environment.workerPools.network job.environment.workerPools.subnetwork job.environment.workerPools.zone job.environment.workerZone Job configuration - general job.createdFromSnapshotId job.id job.replaceJobId job.replacedByJobId jobName replaceJobId Job configuration - logging and monitoring job.environment.workerPools.taskrunnerSettings.logDir job.environment.workerPools.taskrunnerSettings.logUploadLocation workItemStatuses.metricUpdates.name.context.key workItemStatuses.reportedProgress.position.key workerMessages.perWorkerMetrics.perStepNamespaceMetrics.metricsNamespace workerMessages.workerHealthReport.msg Job configuration - metadata and labels job.environment.workerPools.metadata.key job.jobMetadata.userDisplayProperties.key job.labels.key launchParameter.containerSpec.metadata.parameters.customMetadata.key launchParameter.environment.additionalUserLabels.key workerMessages.labels.key Job configuration - pipeline and transform details job.pipelineDescription.displayData.namespace job.pipelineDescription.executionPipelineStage.name job.pipelineDescription.originalPipelineTransform.displayData.label job.pipelineDescription.originalPipelineTransform.displayData.strValue job.pipelineDescription.originalPipelineTransform.id job.pipelineDescription.originalPipelineTransform.name Job configuration - sdk and version information job.environment.sdkPipelineOptions.fields.key job.environment.version.fields.key job.environment.workerPools.sdkHarnessContainerImages.containerImage job.jobMetadata.sdkVersion.version launchParameter.containerSpec.image launchParameter.containerSpec.sdkInfo.version Job configuration - service accounts and credentials job.environment.serviceAccountEmail job.environment.serviceKmsKeyName job.environment.workerPools.taskrunnerSettings.oauthScopes launchParameter.containerSpec.defaultEnvironment.kmsKeyName launchParameter.environment.kmsKeyName launchParameter.environment.serviceAccountEmail Job configuration - storage and data locations gcsPath job.environment.tempStoragePrefix job.environment.workerPools.taskrunnerSettings.tempStoragePrefix job.stepsLocation job.tempFiles launchParameter.environment.stagingLocation Job configuration - taskrunner and worker settings job.environment.workerPools.taskrunnerSettings.harnessCommand job.environment.workerPools.taskrunnerSettings.languageHint job.environment.workerPools.taskrunnerSettings.parallelWorkerSettings.baseUrl job.environment.workerPools.taskrunnerSettings.parallelWorkerSettings.servicePath job.environment.workerPools.taskrunnerSettings.vmId job.environment.workerPools.taskrunnerSettings.workflowFileName Project and resource identification componentId jobId location name projectId snapshotId What's next Learn more about compliance in Google Cloud .
- Home Documentation Data analytics Cloud Dataflow Resources Send feedback Regulatory support in Dataflow Stay organized with collections Save and categorize content based on your preferences.
- Show All Data Boundary for ITAR Data Boundary for ITAR Supported services The following table lists the Dataflow APIs and versions that meet the requirements of Data Boundary for ITAR.

### Build custom container images for Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)
- Source ID: `site-docs-reference-required-3`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example runs the wordcount example pipeline : python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --experiments = use runner v2 \ --sdk container image = IMAGE URI --sdk location = container Replace the following: INPUT FILE : an input file for the pipeline OUTPUT FILE : a path to write output to PROJECT ID : the Google Cloud project ID REGION : the region to deploy your Dataflow job in TEMP LOCATION : the Cloud Storage path for Dataflow to stage temporary job files IMAGE URI : the custom container image URI Pre-build a container image when submitting the job Pre-building a container image lets you to pre-install the pipeline dependencies before job startup.
- The following example uses Cloud Build to pre-build the image: python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --disk size gb = DISK SIZE GB \ --experiments = use runner v2 \ --requirements file = ./requirements.txt \ --prebuild sdk container engine = cloud build \ --docker registry push url = IMAGE PATH \ --sdk location = container The pre-build feature requires the Apache Beam SDK for Python version 2.25.0 or later.
- Docker docker build . --tag REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG docker push REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG Replace the following: REGION : the region to deploy your Dataflow job in.
- Cloud Build To build the file and push it to your Artifact Registry repository, run the gcloud builds submit command : gcloud builds submit --tag REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/ IMAGE : TAG .

