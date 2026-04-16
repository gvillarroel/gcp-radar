---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:19:51.811Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization General Availability"
feature_slug: "binary-authorization-general-availability"
latest_feature_date: "2019-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/creating-cluster"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console"
  - "https://docs.cloud.google.com/binary-authorization/docs/getting-started-console"
keywords:
  - "availability"
  - "reached"
  - "anthos"
  - "usage"
  - "part"
  - "platform"
---

# Binary Authorization General Availability

Product: Binary Authorization
Coverage: MEDIUM

## Step 02 Summary

Binary Authorization reached General Availability as part of the Anthos platform, with usage included in an Anthos subscription.

## Extended Definition

Binary Authorization reached General Availability as part of the Anthos platform, with usage included in an Anthos subscription.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/creating-cluster](https://docs.cloud.google.com/binary-authorization/docs/creating-cluster)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)
- [https://docs.cloud.google.com/binary-authorization/docs/getting-started-console](https://docs.cloud.google.com/binary-authorization/docs/getting-started-console)

## Supporting Pages

### Create a cluster \_|\_ Binary Authorization \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/creating-cluster](https://docs.cloud.google.com/binary-authorization/docs/creating-cluster)
- Source ID: `site-iam-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME \ --location = LOCATION \ --binauthz-evaluation-mode = POLICY BINDINGS AND PROJECT SINGLETON POLICY ENFORCE \ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 1 /platforms/gke/policies/ POLICY ID 1 \ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 2 /platforms/gke/policies/ POLICY ID 2 \ --project = CLUSTER PROJECT ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME --location = LOCATION --binauthz-evaluation-mode = POLICY BINDINGS AND PROJECT SINGLETON POLICY ENFORCE --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 1 /platforms/gke/policies/ POLICY ID 1 --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 2 /platforms/gke/policies/ POLICY ID 2 ` --project = CLUSTER PROJECT ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME ^ --location = LOCATION ^ --binauthz-evaluation-mode = POLICY BINDINGS AND PROJECT SINGLETON POLICY ENFORCE ^ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 1 /platforms/gke/policies/ POLICY ID 1 ^ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 2 /platforms/gke/policies/ POLICY ID 2 ^ --project = CLUSTER PROJECT ID Important: The cluster creation process does not check the validity or existence of the provided platform policies.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME \ --location = LOCATION \ --binauthz-evaluation-mode = POLICY BINDINGS \ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 1 /platforms/gke/policies/ POLICY ID 1 \ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 2 /platforms/gke/policies/ POLICY ID 2 \ --project = CLUSTER PROJECT ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME --location = LOCATION --binauthz-evaluation-mode = POLICY BINDINGS --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 1 /platforms/gke/policies/ POLICY ID 1 --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 2 /platforms/gke/policies/ POLICY ID 2 --project = CLUSTER PROJECT ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME ^ --location = LOCATION ^ --binauthz-evaluation-mode = POLICY BINDINGS ^ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 1 /platforms/gke/policies/ POLICY ID 1 ^ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID 2 /platforms/gke/policies/ POLICY ID 2 ^ --project = CLUSTER PROJECT ID Important: The cluster creation process does not check the validity or existence of the provided platform policies.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME \ --location = LOCATION \ --binauthz-evaluation-mode = POLICY BINDINGS AND PROJECT SINGLETON POLICY ENFORCE \ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID /platforms/gke/policies/ POLICY ID \ --project = CLUSTER PROJECT ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME --location = LOCATION --binauthz-evaluation-mode = POLICY BINDINGS AND PROJECT SINGLETON POLICY ENFORCE --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID /platforms/gke/policies/ POLICY ID --project = CLUSTER PROJECT ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME ^ --location = LOCATION ^ --binauthz-evaluation-mode = POLICY BINDINGS AND PROJECT SINGLETON POLICY ENFORCE ^ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID /platforms/gke/policies/ POLICY ID ^ --project = CLUSTER PROJECT ID Important: The cluster creation process does not check the validity or existence of the provided platform policies.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME \ --location = LOCATION \ --binauthz-evaluation-mode = POLICY BINDINGS \ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID /platforms/gke/policies/ POLICY ID \ --project = CLUSTER PROJECT ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME --location = LOCATION --binauthz-evaluation-mode = POLICY BINDINGS --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID /platforms/gke/policies/ POLICY ID --project = CLUSTER PROJECT ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud beta container clusters create CLUSTER NAME ^ --location = LOCATION ^ --binauthz-evaluation-mode = POLICY BINDINGS ^ --binauthz-policy-bindings = name = projects/ POLICY PROJECT ID /platforms/gke/policies/ POLICY ID ^ --project = CLUSTER PROJECT ID Important: The cluster creation process does not check the validity or existence of the provided platform policies.

### "Configure a policy using the Google Cloud console \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This page describes how to configure a policy for the container-based platforms that Binary Authorization supports, including Google Kubernetes Engine (GKE), Distributed Cloud, Cloud Run, and Cloud Service Mesh.
- Enable Binary Authorization for your platform: Google Kubernetes Engine (GKE) users : Create a cluster with Binary Authorization enabled .
- Policy settings, such as rule type, rule parameters, and parameter format can vary depending on the platforms you use.
- A rule is the part of a policy that defines constraints that images must satisfy before they can be deployed.

### "Get started using the Google Cloud console (GKE) \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/getting-started-console](https://docs.cloud.google.com/binary-authorization/docs/getting-started-console)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Objectives In this tutorial, you learn how to: Create a (GKE) cluster with Binary Authorization enabled Create an attestor that the Binary Authorization enforcer uses to verify the signature on an attestation Configure a policy that requires an attestation Create a cryptographic key pair to sign attestations and later verify them Sign a container image digest, creating a signature Create an attestation using the signature Test the policy by deploying a container image to GKE Costs In this document, you use the following billable components of Google Cloud: Artifact Registry Binary Authorization GKE Optional: Cloud Key Management Service To generate a cost estimate based on your projected usage, use the pricing calculator .
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- In a real-world scenario, you can have any number of attestors, each one representing a party that participates in the authorization process for the image.

