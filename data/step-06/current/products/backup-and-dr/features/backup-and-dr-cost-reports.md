---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.915Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and DR cost reports"
feature_slug: "backup-and-dr-cost-reports"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/compute/docs/compute-optimized-machines"
keywords:
  - "provide"
  - "became"
  - "cost"
  - "generally"
  - "available"
  - "reports"
---

# Backup and DR cost reports

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Cost reports became generally available in Backup and DR Service to provide resource-specific billing visibility; Cost reports are available in Backup and DR Service for viewing resource-specific service spending.

## Extended Definition

Cost reports became generally available in Backup and DR Service to provide resource-specific billing visibility; Cost reports are available in Backup and DR Service for viewing resource-specific service spending.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)

## Supporting Pages

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The following GPU sharing options are available for G4 instances: Fractional GPU (vGPU) support ( Preview ): this feature allows a single physical GPU to be shared by multiple virtual machine (VM) instances. vGPUs provide multi-tenant security isolation because each vGPU is a separate VM instance.
- The G4 machine series also provide a low-cost solution for performing single host inference and model tuning compared with A series machine types.
- G4 machine types also provide a low-cost solution for performing single host inference and model tuning compared with A series machine types.
- Attached NVIDIA L4 GPUs Machine type vCPU count 1 Default instance memory (GB) Custom instance memory range (GB) Max Local SSD supported (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB GDDR6) g2-standard-4 4 16 16 to 32 375 10 1 24 g2-standard-8 8 32 32 to 54 375 16 1 24 g2-standard-12 12 48 48 to 54 375 16 1 24 g2-standard-16 16 64 54 to 64 375 32 1 24 g2-standard-24 24 96 96 to 108 750 32 2 48 g2-standard-32 32 128 96 to 128 375 32 1 24 g2-standard-48 48 192 192 to 216 1,500 50 4 96 g2-standard-96 96 384 384 to 432 3,000 100 8 192 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.
- The job couldn't run during its backup plan period due to some constraint, for example the scheduler is disabled, destination pool is full, source image is missing or unsuitable, connectivity issue, or there are no available job slots.
- When a reserved slot is not available because all the slots of that category are running jobs, the backup/recovery appliance checks whether an unreserved slot is available.
- If a database is managed with a log protection-enabled backup template and if backups are available, you have further log options for the type of job to submit.

### Compute-optimized machine family for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Machine Workloads H4D machine series HPC workloads and multi-node workloads Manufacturing Weather forecasting Electronic design automation (EDA) Healthcare and life sciences Scientific computing H3 machine series HPC workloads Computational fluid dynamics Crash safety Genomics Financial modeling General scientific and engineering computing C2D machine series Memory-bound workloads Gaming (AAA game servers) High performance computing (HPC) High performance databases Electronic Design Automation (EDA) Media transcoding C2 machine series Compute-bound workloads High-performance web serving Gaming (AAA game servers) Ad serving High performance computing (HPC) Media transcoding AI/ML The following machine series are available in this machine family: H4D instances are powered by Titanium and fifth generation AMD EPYC Turin processors which have a base frequency of 2.7 GHz and a maximum frequency of 4.1 GHz.
- C2D machine types C2D instances are available as predefined configurations in sizes ranging from 2 vCPUs to 112 vCPUs and up to 896 GB of memory. standard: 4 GB memory per vCPU highcpu: 2 GB memory per vCPU highmem: 8 GB memory per vCPU C2D standard Machine types vCPUs 1 Memory (GB) Local SSD 2 Default egress bandwidth (Gbps) 3 Tier 1 egress bandwidth (Gbps) 4 c2d-standard-2 2 8 1, 2, 4, or 8 Up to 10 N/A c2d-standard-4 4 16 1, 2, 4, or 8 Up to 10 N/A c2d-standard-8 8 32 1, 2, 4, or 8 Up to 16 N/A c2d-standard-16 16 64 1, 2, 4, or 8 Up to 32 N/A c2d-standard-32 32 128 2, 4, or 8 Up to 32 Up to 50 c2d-standard-56 56 224 4 or 8 Up to 32 Up to 50 c2d-standard-112 112 448 8 Up to 32 Up to 100 1 A vCPU represents a single logical CPU thread.
- If you are looking to optimize workloads for single thread performance , particularly with respect to floating point, choose a machine type in this series to take advantage of AVX-512 capabilities only available on Intel.
- C2 machine series The C2 machine series provides full transparency into the architecture of the underlying server platforms, letting you fine-tune the performance.

