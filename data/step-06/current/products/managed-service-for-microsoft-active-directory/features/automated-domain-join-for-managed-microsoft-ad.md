---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.989Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Automated domain join for Managed Microsoft AD"
feature_slug: "automated-domain-join-for-managed-microsoft-ad"
latest_feature_date: "2023-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux"
keywords:
  - "automated"
  - "domain"
  - "join"
  - "managed"
  - "microsoft"
  - "ad"
  - "windows"
  - "compute"
---

# Automated domain join for Managed Microsoft AD

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Windows Compute Engine VMs can join a Managed Microsoft AD domain automatically, with support for the managed-ad-force and managed-ad-ou-name flags, and GKE Windows Server nodes are also supported; Windows VMs can join a Managed Microsoft AD domain automatically in Preview.

## Extended Definition

Windows Compute Engine VMs can join a Managed Microsoft AD domain automatically, with support for the managed-ad-force and managed-ad-ou-name flags, and GKE Windows Server nodes are also supported; Windows VMs can join a Managed Microsoft AD domain automatically in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux)

## Supporting Pages

### "Join GKE Windows Server nodes automatically to a Managed Microsoft AD domain\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke)
- Source ID: `site-docs-reference-required-1`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page explains how to join Windows Server nodes in your Google Kubernetes Engine (GKE) cluster to a Managed Microsoft AD domain using the automated domain join feature.
- The domain join request fails when the computer account of a Windows Server node already exists in Managed Microsoft AD.
- How Managed Microsoft AD joins Windows Server nodes automatically to a domain When you create a node pool in your GKE cluster , you can use the ready-made scripts that are available from Managed Microsoft AD to automatically join your Managed Microsoft AD domain.
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Join GKE Windows Server nodes automatically to a Managed Microsoft AD domain Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Join a Windows VM manually to a domain \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows)
- Source ID: `site-docs-reference-required-1`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Join a Windows VM manually to a domain This document explains how to join a Windows VM to a Managed Microsoft AD domain.
- You can join the Windows VM to the Managed Microsoft AD domain either using the Windows GUI or PowerShell .
- To join the VM to the domain, you need the following information: The domain name of your Managed Microsoft AD domain.
- If your Managed Microsoft AD domain has Shared VPC as an authorized network, you can alternatively create the VM in any of the Shared VPC service projects.

### "Quickstart: Join a Linux VM to a domain \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux)
- Source ID: `site-docs-reference-required-1`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Join a Linux VM to a domain This page shows you how to join a Linux VM, running supported Linux distributions , to a domain in Managed Service for Microsoft Active Directory using the System Security Services Daemon (SSSD).
- Join a Linux VM to a domain To join a Linux VM to a domain, you need the following information: The domain name of your Managed Microsoft AD domain.
- You can join the Linux VM to the Managed Microsoft AD domain using the realm join command.
- Remove a Linux VM from a domain To remove a Linux VM from a domain, you need the domain name of your Managed Microsoft AD domain and the username of your user account.

