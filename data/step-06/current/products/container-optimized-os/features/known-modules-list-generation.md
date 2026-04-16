---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.078Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Known Modules List Generation"
feature_slug: "known-modules-list-generation"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed"
keywords:
  - "known"
  - "modules"
  - "list"
  - "generation"
  - "automatically"
  - "generates"
  - "during"
  - "image"
---

# Known Modules List Generation

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Automatically generates the known modules list during the image build process.

## Extended Definition

Automatically generates the known modules list during the image build process.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.
- For N1 general-purpose machine types, you can attach the following GPUs: NVIDIA T4 NVIDIA V100 NVIDIA P100 NVIDIA P4 GPUs provide compute power to drive deep-learning tasks such as image recognition and natural language processing, as well as other compute-intensive tasks such as video transcoding and image processing.
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- Review the available images , then use the following command to create a cos node image instance: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --machine-type machine-type-name Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance, obtained from the list of available images .
- Viewing available images Container-Optimized OS images are available on Google Cloud console's list of images with the prefix cos .
- For example, the following command creates a new VM instance named nginx-vm , which will launch and run the gcr.io/cloud-marketplace/google/nginx1:1.15 container image: gcloud compute instances create-with-container nginx-vm \ --container-image gcr.io/cloud-marketplace/google/nginx1:1.15 Similarly, you can create a new VM instance named hello-app which will launch and run a sample container in Artifact Registry: gcloud compute instances create-with-container hello-app \ --container-image us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 When using a container image from Docker Hub, you must always specify a full Docker image name.

### "Scanning COS images with Oval vulnerability feed \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How to fix vulnerabilities reported by the scanner The feed lists all the vulnerabilities fixed in the latest COS image.
- The feed depends on the cos-package-info.json file, which lists installed packages on an image.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Scanning COS images with Oval vulnerability feed Stay organized with collections Save and categorize content based on your preferences.
- As such, you can fix all open vulnerabilities reported by the scanner on your system by updating to the latest COS image for that particular milestone.

