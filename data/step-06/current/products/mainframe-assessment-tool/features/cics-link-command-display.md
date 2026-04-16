---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.485Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "CICS LINK command display"
feature_slug: "cics-link-command-display"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm"
keywords:
  - "cics"
  - "link"
  - "command"
  - "display"
  - "shows"
  - "commands"
  - "part"
  - "calls"
---

# CICS LINK command display

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Shows LINK commands as part of CICS calls.

## Extended Definition

Shows LINK commands as part of CICS calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)

## Supporting Pages

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- CICS Calls Shows the CICS calls made from each program and their parameters.
- Transactions Displays the extracted relationships between programs, transactions, and screens for IMS and CICS.
- Connected jobs based on a shared data source: shows the connection between two jobs if one job writes data to a shared data source and the other job reads from that same data source.
- Program name: identifies the program module that has been found within the uploaded source code but does not appear to be called or executed by any other part of the application.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Google Cloud console To create a Mainframe Assessment Tool VM instance, run the following command: gcloud compute instances create mainframe - assessment - tool - 1 - instance \ -- machine - type = MACHINE TYPE \ -- service - account = SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- scopes = cloud - platform -- image - project = migrate - modernize - public \ -- image - family = mainframe - assessment - tool -- zone = ZONE \ -- boot - disk - size = DISK SIZE Replace the following: MACHINE TYPE : the machine type of the VM.
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.
- To bind your Google Cloud service account (GSA) to the Kubernetes service account (KSA), run the following command: gcloud iam service - accounts add - iam - policy - binding \ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- role = "roles/iam.workloadIdentityUser" \ -- member = "serviceAccount: PROJECT ID .svc.id.goog[ VERSION /mat-service-account]" Replace the following: PROJECT ID : your Google Cloud project ID.
- To create a GKE cluster, run the following command: gcloud container clusters create CLUSTER NAME \ -- project = PROJECT ID \ -- zone = ZONE \ -- machine - type = MACHINE TYPE \ -- enable - ip - alias \ -- release - channel = "stable" \ -- workload - pool = PROJECT ID . svc.id.goog \ -- disk - size = DISK SIZE Replace the following: CLUSTER NAME : the name of the new GKE cluster PROJECT ID : your Google Cloud project ID.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Google Cloud console To create a Mainframe Assessment Tool VM instance, run the following command: gcloud compute instances create mainframe - assessment - tool - 1 - instance \ -- machine - type = MACHINE TYPE \ -- service - account = SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- scopes = cloud - platform -- image - project = migrate - modernize - public \ -- image - family = mainframe - assessment - tool -- zone = ZONE \ -- boot - disk - size = DISK SIZE Replace the following: MACHINE TYPE : the machine type of the VM.
- To create encrypted port forwarding, follow these steps: To configure access to the cluster, run the following command: gcloud container clusters get-credentials CLUSTER NAME \ --zone ZONE --project PROJECT ID To configure port forwarding, run the following command: kubectl port-forward service/assessor-frontend LOCAL PORT :4000 -n VERSION Replace the following: LOCAL PORT : a port number on your local machine used for the tunneled connection to Mainframe Assessment Tool.
- To bind your Google Cloud service account (GSA) to the Kubernetes service account (KSA), run the following command: gcloud iam service - accounts add - iam - policy - binding \ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- role = "roles/iam.workloadIdentityUser" \ -- member = "serviceAccount: PROJECT ID .svc.id.goog[ VERSION /mat-service-account]" Replace the following: PROJECT ID : your Google Cloud project ID.
- To create a GKE cluster, run the following command: gcloud container clusters create CLUSTER NAME \ -- project = PROJECT ID \ -- zone = ZONE \ -- machine - type = MACHINE TYPE \ -- enable - ip - alias \ -- release - channel = "stable" \ -- workload - pool = PROJECT ID . svc.id.goog \ -- disk - size = DISK SIZE Replace the following: CLUSTER NAME : the name of the new GKE cluster PROJECT ID : your Google Cloud project ID.

