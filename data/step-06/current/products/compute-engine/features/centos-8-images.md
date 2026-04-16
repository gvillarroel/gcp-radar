---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.207Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "CentOS 8 images"
feature_slug: "centos-8-images"
latest_feature_date: "2022-02-01"
deprecation_date: "2022-02-01"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/instances/instance-lifecycle"
  - "https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle"
  - "https://docs.cloud.google.com/compute/docs/gcloud-compute/tips"
keywords:
  - "centos"
  - "images"
  - "compute"
  - "engine"
  - "deprecated"
  - "following"
  - "end"
  - "life"
---

# CentOS 8 images

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine CentOS 8 images are deprecated following the end of life of CentOS 8; deprecated on 2022-02-01.

## Extended Definition

Compute Engine CentOS 8 images are deprecated following the end of life of CentOS 8; deprecated on 2022-02-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/instances/instance-lifecycle](https://developers.google.com/compute/docs/instances/instance-lifecycle)
- [https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle](https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle)
- [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips)

## Supporting Pages

### Compute Engine instance lifecycle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle](https://docs.cloud.google.com/compute/docs/instances/instance-lifecycle)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the different states that Compute Engine can set an instance to: The states shown in the preceding diagram are as follows: PENDING : after you create a standalone Flex-start VM with a wait time ( requestValidForDuration ) that is 90 seconds or longer, the VM state changes to PENDING .
- After the guest OS shuts down and based on the operation that is running, Compute Engine does one of the following: Compute Engine completes the stops operation and changes the instance state to TERMINATED .
- Home Documentation Compute Compute Engine Guides Send feedback Compute Engine instance lifecycle Stay organized with collections Save and categorize content based on your preferences.
- STAGING : Compute Engine is preparing the instance for first boot due to one of the following reasons: Compute Engine is still creating and configuring the instance.

### Compute Engine instance lifecycle \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/instances/instance-lifecycle](https://developers.google.com/compute/docs/instances/instance-lifecycle)
- Source ID: `site-docs-root-3`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the different states that Compute Engine can set an instance to: The states shown in the preceding diagram are as follows: PENDING : after you create a standalone Flex-start VM with a wait time ( requestValidForDuration ) that is 90 seconds or longer, the VM state changes to PENDING .
- After the guest OS shuts down and based on the operation that is running, Compute Engine does one of the following: Compute Engine completes the stops operation and changes the instance state to TERMINATED .
- Home Documentation Compute Compute Engine Guides Send feedback Compute Engine instance lifecycle Stay organized with collections Save and categorize content based on your preferences.
- STAGING : Compute Engine is preparing the instance for first boot due to one of the following reasons: Compute Engine is still creating and configuring the instance.

### gcloud compute usage tips \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following two commands illustrate a scenario when you can list images to get an image name and its associated project so that you can provide these as inputs to a describe command: gcloud compute images list NAME PROJECT FAMILY DEPRECATED STATUS ... centos-7-v20170620 centos-cloud centos-7 READY ... debian-9-stretch-v20170619 debian-cloud debian-9 READY ... gcloud compute images describe debian-9-stretch-v20170619 --project debian-cloud The default output from describe commands is YAML format, but you can use the --format flag to choose between JSON, YAML, and text output formats.
- To run code or samples from a local development environment, you can authenticate to Compute Engine by selecting one of the following options: Install the Google Cloud CLI.
- The following command gets instance settings in JSON format ( --format json ). gcloud compute instances describe example-instance \ --zone us-central1-a --format json { ... "name": "example-instance", "networkInterfaces": [ { "accessConfigs": [ { "kind": "compute#accessConfig", "name": "external-nat", "natIP": "107.167.187.66", "type": "ONE TO ONE NAT" } ], "name": "nic0", "network": "https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default", "networkIP": "10.240.111.51" } ], ... "status": "RUNNING" ... } Checking which user you are authorized as Use the following command to find out which account you are authorizes as, use: gcloud auth list Revoking a refresh token To revoke the credentials for an account on the machine where you are using the Google Cloud CLI, use: gcloud auth revoke This will force you to use re-authenticate using gcloud init .
- Fetching information about resources You can fetch information about Compute Engine resources in two ways: using the list command to return a list of resources and using the describe command to return details about one specific resource.

