---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.112Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Confidential Computing option for cluster creation"
feature_slug: "confidential-computing-option-for-cluster-creation"
latest_feature_date: "2023-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "confidential"
  - "computing"
  - "option"
  - "includes"
  - "console"
  - "creation"
  - "cluster"
  - "when"
---

# Confidential Computing option for cluster creation

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console includes a Confidential Computing option when creating a Dataproc cluster on Compute Engine.

## Extended Definition

The Google Cloud console includes a Confidential Computing option when creating a Dataproc cluster on Compute Engine.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- Confidential Instance Config for clusters using Confidential VMs . resourceManagerTags map (key: string, value: string) Optional.
- An optional list of Compute Engine zones where the Dataproc cluster will not be located when Auto Zone is enabled.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.
- Note: You must also list or select the optional components when you createthe cluster using the Google Cloud console, Google Cloud CLI, or Managed Service for Apache Spark API.
- Example: Google Cloud CLI cluster creation command: gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags For a listing of available optional flags, see Optional Arguments on GitHub.
- Regardless of the base image used for your custom image, when you create your cluster , you must list or select optional components.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- KRB5 CONFIG : Optional: The krb5.config file specifies the KDC and the Kerberos realm information, which includes locations of KDCs and defaults for the realm and Kerberos applications.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.
- What's next Attach a Managed Service for Apache Spark cluster Update and delete a service Import metadata into a service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create Dataproc Metastore using advanced settings Creating a Dataproc Metastore using the advanced settings shows you how to modify configurations such as network configurations, scaling settings, endpoint settings, security settings, and optional features.

