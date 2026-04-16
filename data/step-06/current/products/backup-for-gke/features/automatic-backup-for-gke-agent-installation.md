---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.554Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Automatic Backup for GKE agent installation"
feature_slug: "automatic-backup-for-gke-agent-installation"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra"
keywords:
  - "automatically"
  - "installation"
  - "installs"
  - "agent"
  - "automatic"
---

# Automatic Backup for GKE agent installation

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now automatically installs the agent in a cluster when a user creates the first BackupPlan or RestorePlan resource.

## Extended Definition

Backup for GKE now automatically installs the agent in a cluster when a user creates the first BackupPlan or RestorePlan resource.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This will automatically install the Backup for GKE agent in the specified cluster.
- Automatic pause : Backup for GKE can automatically pause a backup plan in the following scenarios: When initiating a backup (scheduled or manual), if any of the following errors occur: StatusInvalidCluster : The StatusInvalidCluster error indicates an unrecoverable condition where the cluster name is invalid or metadata information of the cluster is unavailable.
- To automatically create backups, in the Backup schedule section, select the Enable backup schedule checkbox, and then choose one of the following methods: Note: All backup schedules are interpreted in UTC timezone.
- AgentNotInstalled : The AgentNotInstalled error indicates an unrecoverable condition where the cluster doesn't have the necessary agent custom resource definitions installed, implying improper agent installation.

### Back up your workloads \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View a volume backup Volume backup resources are automatically created by the agent when PersistentVolumeClaims are encountered within the scope of a backup.
- These resources are created and managed by the agent automatically as part of the backup operation.
- If the backup plan for this backup defines a minimum lifetime for backups, configured with the --backup-delete-lock-days flag, then backups created for this plan cannot be deleted (either automatically or manually) until that lifetime expires.
- Enter a backup name and optional description. (Optional) Set the number of days to retain the backup before the backup is automatically deleted. (Optional) Set the number of days during which backups cannot be deleted.

### AI/ML orchestration on GKE documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AI ML Storage Use case Use cases Automatic driver installation simplifies using NVIDIA GPUs in GKE Automatically install Nvidia GPU drivers in GKE.
- Tutorial AI/ML Inference Agentic AI Training Training and tutorials Deploy an agentic AI application on GKE with the Agent Development Kit (ADK) and Vertex AI Learn how to deploy and manage a containerized agentic AI application on GKE, using the Agent Development Kit (ADK) and Vertex AI for scalable inference with Gemini 2.0 Flash.
- Tutorial Agent Sandbox Agentic AI Training Training and tutorials Deploy an agentic AI application on GKE with the Agent Development Kit (ADK) and a self-hosted LLM Learn how to deploy and manage a containerized agentic AI application on GKE, using the Agent Development Kit (ADK) and vLLM for scalable inference with Llama 3.1.
- AI/ML Inference AI/ML Training Storage Training Training and tutorials Isolate AI code execution with Agent Sandbox Learn how to install and run the Agent Sandbox controller on GKE, and deploy a sandboxed environment on the cluster for testing untrusted shell commands.

