# Vertex AI Workbench

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 121
Unique features: 236

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-01-29 | Vertex AI Workbench startup script dependency removal |  | The Vertex AI Workbench M139 release removed the startup script dependency on the gs://dl-platform-public-configs location for instances. |
| 2026-01-16 | Gemini CLI support in Vertex AI Workbench |  | Vertex AI Workbench added a preview of the Gemini CLI in instances, allowing terminal-based notebook and cloud-task workflows directly from Workbench. |
| 2026-01-14 | Vertex AI Workbench post-startup daemon persistence |  | Daemon processes launched by post-startup scripts in Vertex AI Workbench instances now continue running after the script finishes. |
| 2025-12-12 | JupyterLab 4+ for Vertex AI Workbench instances |  | New Vertex AI Workbench instances can now be created with JupyterLab 4+. |
| 2025-12-12 | Managed user credential access for instance creation |  | Vertex AI Workbench now supports creating instances with managed user credential access. |
| 2025-12-12 | Post-startup scripts for private GA instances with user credentials |  | Using post-startup scripts for new Vertex AI Workbench instances with user credential access is now available in private GA. |
| 2025-12-10 | Vertex AI Workbench custom Jupyter username sudo behavior |  | The M137 release fixed a bug where Workbench instances prompted for a password when using a custom Jupyter username and invoking sudo. |
| 2025-12-09 | Confidential Computing for Vertex AI Workbench instances |  | Vertex AI Workbench now supports data-in-use encryption through Confidential Computing by enabling Confidential VM services when creating an instance; Adds support for data-in-use encryption by enabling the Confidential VM service when creating a Vertex AI Workbench instance. |
| 2025-11-21 | Vertex AI Workbench instance image output rendering |  | Fixes the image output rendering bug so notebook instance image outputs display correctly in Vertex AI Workbench. |
| 2025-11-17 | Vertex AI Workbench Notebooks API OS shutdown reporting |  | Restores reporting of user-triggered OS shutdown events to the Notebooks API for Vertex AI Workbench instances. |
| 2025-10-09 | Dataproc JupyterLab plugin |  | Updates the Dataproc JupyterLab plugin used with Vertex AI Workbench to version 0.1.92; The Dataproc JupyterLab plugin was updated in Vertex AI Workbench to resolve an incompatibility when using instances with end-user credentials enabled. |
| 2025-10-09 | Google Cloud CLI preset properties for Vertex AI Workbench |  | Prepopulates project and region properties when using Google Cloud CLI commands with Vertex AI Workbench instances. |
| 2025-10-09 | Vertex AI Workbench custom notebook metrics reporting |  | Patches a regression in custom notebook metrics reporting for Vertex AI Workbench instances, including metrics such as jupyterlab_kernels and docker_status. |
| 2025-10-01 | Workforce Identity Federation for Vertex AI Workbench instances |  | Makes Workforce Identity Federation generally available for creating and managing Vertex AI Workbench instances using external identity provider credentials. |
| 2025-09-17 | Vertex AI Workbench managed end-user credentials |  | Workbench instances using managed end-user credentials support had an incompatibility fix to improve compatibility with the Dataproc JupyterLab workflow; The managed end-user credentials preview feature was patched to fix an incompatibility when listing Dataproc remote kernels. |
| 2025-08-29 | scheduler Jupyter plugin |  | The scheduler Jupyter plugin is now preinstalled in JupyterLab 4 and includes support for Cloud Composer and Vertex AI notebook schedulers. |
| 2025-08-29 | Vertex AI Workbench instance provisioning with proxy access disabled |  | Vertex AI Workbench instances were patched so that provisioning no longer stalls when proxy access is disabled. |
| 2025-08-05 | Compute Engine reservations for Vertex AI Workbench instances |  | Vertex AI Workbench instances can now consume Compute Engine zonal reservations to increase the likelihood that required resources are available for job execution. |
| 2025-06-26 | BigQuery JupyterLab plugin |  | The BigQuery JupyterLab plugin was added to Vertex AI Workbench instances. |
| 2025-06-26 | GOOGLE_CLOUD_REGION environment variable defaulting |  | Vertex AI Workbench now sets the GOOGLE_CLOUD_REGION environment variable by default. |
| 2025-06-10 | Reservations with Vertex AI Workbench instances |  | Vertex AI Workbench instances now support consuming Compute Engine zonal reservations in Preview. |
| 2025-03-26 | Back up and restore data on Vertex AI Workbench instances |  | Vertex AI Workbench instances now support backing up and restoring instance data as a generally available capability. |
| 2025-03-12 | Vertex AI Workbench instances |  | The M128 release provides miscellaneous package updates for Vertex AI Workbench instances; Vertex AI Workbench instances are now generally available, combining managed and user-managed notebook capabilities into a data science environment. |
| 2025-03-12 | Vertex AI Workbench managed notebooks M128 package updates |  | Includes miscellaneous package updates in the M128 release of Vertex AI Workbench managed notebooks. |
| 2025-03-12 | Vertex AI Workbench user-managed notebooks | 2025-01-30 | The M128 release provides miscellaneous package updates for Vertex AI Workbench user-managed notebooks; A security patch in the M125 release fixed adm and docker permission handling for user-managed notebooks when root access is not enabled; deprecated on 2025-01-30. |
| 2025-01-16 | Vertex AI Workbench instances authorized SSH key home directory ownership |  | Fixes an issue where home directory ownership could be incorrect when using authorized SSH keys with Vertex AI Workbench instances. |
| 2025-01-16 | Vertex AI Workbench managed notebooks authorized SSH key home directory ownership |  | Fixes an issue where home directory ownership could be incorrect when using authorized SSH keys with Vertex AI Workbench managed notebooks. |
| 2025-01-16 | Vertex AI Workbench user-managed notebooks SSH key home directory ownership |  | The user-managed notebooks feature corrected home directory ownership behavior when using authorized SSH keys. |
| 2024-11-20 | JupyterLab version in Vertex AI Workbench managed notebooks |  | Managed notebooks were updated to include JupyterLab version 3.6.8; Vertex AI Workbench upgraded managed notebooks to JupyterLab 3.6.6 in the M114 release. |
| 2024-11-20 | Vertex AI Workbench instances JupyterLab 3.6.8 upgrade |  | Vertex AI Workbench instances have been upgraded to include JupyterLab version 3.6.8. |
| 2024-11-20 | Vertex AI Workbench JupyterLab 4+ preview for new instances |  | JupyterLab 4+ is available in preview on new Vertex AI Workbench instances at creation time. |
| 2024-11-20 | Vertex AI Workbench user-managed notebooks JupyterLab 3.6.8 upgrade |  | Vertex AI Workbench user-managed notebooks now include an upgrade to JupyterLab version 3.6.8. |
| 2024-09-26 | ADM and Docker permission hardening |  | A vulnerability affecting ADM and Docker permissions on Vertex AI Workbench instances without root access has been patched. |
| 2024-09-26 | Bigframes 1.9.0 availability |  | Bigframes 1.9.0 is available on Vertex AI Workbench instances across all environments except TensorFlow. |
| 2024-09-26 | Conda version stability |  | Vertex AI Workbench instances now avoid the M124-introduced regression that downgraded Conda to an older version. |
| 2024-09-26 | Vertex AI Workbench managed notebooks | 2025-01-30 | A security patch in the M125 release fixed adm and docker permission handling for managed notebooks when root access is not enabled; Support for Vertex AI Workbench managed notebooks is deprecated, with support ending on 2025-01-30 and managed notebook instance creation removed; deprecated on 2025-01-30. |
| 2024-09-10 | Workbench instance backup and restore |  | Vertex AI Workbench instances now support backing up and restoring instance data, available in Preview. |
| 2024-08-20 | Kernel visibility with Cloud Resource Manager API disabled on Dataproc-enabled instances |  | Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled; Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled. |
| 2024-08-20 | PyTorch 2.3.0 runtime with CUDA 12.1 and Python 3.10 for user-managed notebooks |  | User-managed notebook instances now support a PyTorch 2.3.0 environment with CUDA 12.1 and Python 3.10. |
| 2024-08-08 | Dataproc Spark serverless runtime template configuration UI |  | The Serverless Spark runtime template creation screen for Spark notebooks now provides an easier UI to configure resource allocation, autoscaling, and GPU settings. |
| 2024-08-08 | Vertex AI Workbench managed notebooks kernel availability |  | Fixed kernel visibility in managed notebooks when the Cloud Resource Manager API is disabled and Dataproc is enabled. |
| 2024-07-24 | Vertex AI Workbench managed notebooks Jupyter user permissions |  | Resolved permission conflicts between the Jupyter user and the google-sudoers account in managed notebooks. |
| 2024-07-24 | Vertex AI Workbench managed notebooks Nvidia driver update |  | Updated Nvidia drivers in managed notebooks to version 550.90.07 to address vulnerabilities. |
| 2024-07-16 | Vertex AI Workbench instances Jupyter-to-google-sudoers permission handling |  | Fixes a permissions conflict between the Jupyter user and google-sudoers for Vertex AI Workbench instances. |
| 2024-07-16 | Vertex AI Workbench user-managed notebooks custom container root-disabled instances |  | Fixes issues affecting custom-container instances when root is disabled in Vertex AI Workbench user-managed notebooks. |
| 2024-07-16 | Vertex AI Workbench user-managed notebooks Jupyter-to-google-sudoers permission handling |  | Fixes a permissions conflict between the Jupyter user and google-sudoers for Vertex AI Workbench user-managed notebooks. |
| 2024-06-21 | Nvidia driver update for Vertex AI Workbench instances |  | Vertex AI Workbench instances now include an update to Nvidia drivers at version 550.90.07 to address vulnerabilities. |
| 2024-06-21 | Nvidia driver update for Vertex AI Workbench user-managed notebooks |  | Vertex AI Workbench user-managed notebooks now include an update to Nvidia drivers at version 550.90.07 to address vulnerabilities. |
| 2024-06-07 | Vertex AI Workbench custom container instances |  | Vertex AI Workbench now supports creating instances from custom containers, with support limited to custom containers derived from the Google-provided base container. |
| 2024-06-03 | Vertex AI Workbench Workforce Identity Federation for instances |  | Vertex AI Workbench instances can now use Workforce Identity Federation, allowing instance creation and management using credentials from external identity providers. |
| 2024-05-17 | linux-headers-cloud-amd64 metapackage installation |  | Vertex AI Workbench user-managed notebooks install the linux-headers-cloud-amd64 metapackage to enable faster Nvidia driver recompilation after kernel upgrades. |
| 2024-05-17 | TensorFlow 2.6 CPU notebook images | 2024-05-17 | TensorFlow 2.6 CPU notebook images in Vertex AI Workbench are deprecated and will no longer receive updates; deprecated on 2024-05-17. |
| 2024-05-17 | TensorFlow 2.6 GPU notebook images | 2024-05-17 | TensorFlow 2.6 GPU notebook images in Vertex AI Workbench are deprecated and will no longer receive updates; deprecated on 2024-05-17. |
| 2024-05-17 | Vertex AI Workbench instance Linux headers package installation |  | The linux-headers-cloud-amd64 metapackage is now installed on Vertex AI Workbench instances to speed up NVIDIA driver recompilation after kernel upgrades. |
| 2024-05-17 | Vertex AI Workbench instance NVIDIA driver update |  | The NVIDIA GPU drivers for Vertex AI Workbench instances were updated to version 550.54.15 to address startup installation failures on Debian 11 images using linux-image-5.10.0-29-cloud-amd64. |
| 2024-05-17 | Vertex AI Workbench managed notebooks R kernel upgrade |  | The managed notebooks R CPU kernel version in Vertex AI Workbench was updated from R 4.3 to R 4.4. |
| 2024-05-17 | Vertex AI Workbench user-managed notebooks NVIDIA driver update |  | Vertex AI Workbench user-managed notebooks now update Nvidia drivers to version 550.54.15 to resolve startup installation failures on Debian 11 kernel upgrades. |
| 2024-04-29 | libcurl package updates in managed notebooks |  | Vertex AI Workbench managed notebooks include minor bug fixes to the libcurl package in the M120 release. |
| 2024-04-25 | Vertex AI Workbench instances libcurl package fix update |  | Vertex AI Workbench instances received minor bug fixes to the libcurl package. |
| 2024-04-25 | Vertex AI Workbench user-managed notebooks libcurl package fix update |  | Vertex AI Workbench user-managed notebooks received minor bug fixes to the libcurl package. |
| 2024-04-25 | Vertex AI Workbench user-managed notebooks TensorFlow runtime upgrade |  | Vertex AI Workbench user-managed notebooks were upgraded to TensorFlow version 2.15.1. |
| 2024-03-18 | Vertex AI Workbench instance NVIDIA driver version |  | Vertex AI Workbench instances were updated to NVIDIA R535 drivers. |
| 2024-03-18 | Vertex AI Workbench managed notebooks NVIDIA driver update to R535 |  | Updated NVIDIA drivers to R535 for managed notebooks, resolving a PyTorch 2.0 kernel compatibility issue. |
| 2024-03-18 | Vertex AI Workbench user-managed notebook image NVIDIA driver update to R535 |  | Updated NVIDIA drivers to R535 for older user-managed notebook images. |
| 2024-03-18 | Vertex AI Workbench user-managed notebooks PyTorch 2.1.0 runtime availability |  | Added user-managed notebook runtimes supporting PyTorch 2.1.0 with CUDA 12.1 and Python 3.10. |
| 2024-03-18 | Vertex AI Workbench user-managed notebooks PyTorch 2.2.0 runtime availability |  | Added user-managed notebook runtimes supporting PyTorch 2.2.0 with CUDA 12.1 and Python 3.10. |
| 2024-02-28 | Vertex AI Workbench Cloud Storage browser in left-side pane | 2024-02-28 | The Cloud Storage browser in the Vertex AI Workbench left-side pane was removed in favor of the existing Mount shared storage button; deprecated on 2024-02-28. |
| 2024-02-08 | Vertex AI Workbench custom container user-managed notebook GPU attachments |  | Vertex AI Workbench custom container user-managed notebooks improved GPU attachment and detachment behavior to prevent containers from failing to attach or repeatedly detaching GPUs. |
| 2024-02-08 | Vertex AI Workbench custom container user-managed notebooks |  | Vertex AI Workbench custom container user-managed notebooks were updated to use NVIDIA driver version 535.104.05. |
| 2024-02-08 | Vertex AI Workbench managed notebooks local kernels |  | Vertex AI Workbench managed notebooks resolved an issue where new local kernels were not usable. |
| 2024-01-19 | BigQuery connector in PySpark containers |  | The BigQuery connector for Vertex AI Workbench managed notebook PySpark containers is fixed in the M115 release. |
| 2024-01-19 | Vertex AI Workbench instance support for venv kernels |  | Support for venv kernels was added to Vertex AI Workbench instances. |
| 2024-01-19 | Vertex AI Workbench user-managed notebooks TensorFlow 2.14 with Python 3.10 on Debian 11 |  | Support for TensorFlow 2.14 with Python 3.10 on Debian 11 was added for Vertex AI Workbench user-managed notebooks. |
| 2024-01-19 | Vertex AI Workbench user-managed notebooks TensorFlow 2.15 with Python 3.10 on Debian 11 |  | Support for TensorFlow 2.15 with Python 3.10 on Debian 11 was added for Vertex AI Workbench user-managed notebooks. |
| 2023-12-14 | Dataproc extension for remote kernels in Vertex AI Workbench |  | Vertex AI Workbench added a Dataproc extension for use with remote kernels in the M114 release. |
| 2023-12-14 | Default-kernel notebook execution in Vertex AI Workbench |  | A reliability issue was fixed so notebooks using the default kernel can run and be scheduled correctly. |
| 2023-12-14 | JupyterLab version in Vertex AI Workbench instances |  | Vertex AI Workbench instances were updated to JupyterLab 3.6.6. |
| 2023-12-14 | Python 3.7 runtime support for Vertex AI Workbench user-managed notebooks | 2023-12-14 | Python 3.7 support was removed from Vertex AI Workbench user-managed notebooks; deprecated on 2023-12-14. |
| 2023-12-14 | Python 3.7 support in Vertex AI Workbench managed notebooks |  | Vertex AI Workbench managed notebooks no longer include Python 3.7 in the M114 release. |
| 2023-12-14 | R runtime version on Debian 11 Python 3.10 Vertex AI Workbench instances |  | R was upgraded to version 4.3 on Debian 11 Python 3.10-based Vertex AI Workbench instances. |
| 2023-11-16 | CORS handling in Vertex AI Workbench |  | Vertex AI Workbench now addresses a cross-origin resource sharing (CORS) error. |
| 2023-11-16 | Dataproc JupyterLab plugin for Vertex AI Workbench |  | Vertex AI Workbench instances gained the Dataproc JupyterLab plugin. |
| 2023-11-16 | Dataproc kernel execution in Vertex AI Workbench |  | Dataproc kernels were fixed to function correctly in Vertex AI Workbench instances. |
| 2023-11-16 | Default gcloud CLI configuration in Vertex AI Workbench instances |  | Vertex AI Workbench instances now preconfigure gcloud with defaults for the instance project, region, and Dataproc region. |
| 2023-11-16 | Python 3.10 support for Vertex AI Workbench user-managed notebooks |  | Vertex AI Workbench user-managed notebooks include improvements and fixes for Python 3.10 notebook environments. |
| 2023-09-25 | BigQuery integration |  | Workbench instances support integration with BigQuery for analytics and data workflows. |
| 2023-09-25 | Cloud External Key Manager (Cloud EKM) |  | Workbench instances support using Cloud External Key Manager for encryption key management. |
| 2023-09-25 | Cloud Storage integration |  | Workbench instances support integration with Cloud Storage for notebook data access and storage workflows. |
| 2023-09-25 | Customer-managed encryption keys (CMEK) |  | Workbench instances support encryption with customer-managed encryption keys. |
| 2023-09-25 | Dataproc integration |  | Workbench instances support integration with Dataproc. |
| 2023-09-25 | End-user authentication |  | Workbench instances support authentication for end users. |
| 2023-09-25 | Health status monitoring |  | Workbench instances provide health status monitoring capabilities. |
| 2023-09-25 | Scheduled notebook runs |  | Workbench instances support scheduled execution of notebook runs. |
| 2023-09-25 | Service account authentication |  | Workbench instances support service account authentication for notebook access. |
| 2023-09-25 | Vertex AI Workbench idle timeout |  | Workbench instances support an idle timeout configuration for inactive notebook sessions; Vertex AI Workbench instances support an idle timeout setting for notebook environments. |
| 2023-09-25 | VPC Service Controls |  | Workbench instances support VPC Service Controls for perimeter-based network isolation. |
| 2023-09-18 | Vertex AI Workbench Debian 10 images | 2023-09-18 | Debian 10 base images for Vertex AI managed and user-managed notebooks have reached end of patch and support life; deprecated on 2023-09-18. |
| 2023-09-18 | Vertex AI Workbench Python 3.7 images | 2023-09-18 | Python 3.7 images for Vertex AI managed and user-managed notebooks have reached end of patch and support life; deprecated on 2023-09-18. |
| 2023-09-14 | Miscellaneous software updates for Vertex AI Workbench instances |  | The M111 release includes miscellaneous software updates to Vertex AI Workbench instances. |
| 2023-09-14 | Miscellaneous software updates for Vertex AI Workbench managed notebooks |  | The M111 release includes miscellaneous software updates to Vertex AI Workbench managed notebooks. |
| 2023-09-14 | PyTorch XLA 2.0 support in Vertex AI Workbench user-managed notebooks |  | Vertex AI Workbench user-managed notebooks using PyTorch 2.0 now include PyTorch XLA 2.0; Vertex AI Workbench user-managed notebook instances running PyTorch 2.0 now include PyTorch XLA 2.0. |
| 2023-08-10 | Python 3.10 support on Debian 11 for Vertex AI Workbench managed notebooks |  | Vertex AI Workbench managed notebooks add support for Python 3.10 on Debian 11 environments. |
| 2023-08-10 | PyTorch 2.0 with Python 3.10 on Debian 11 for Vertex AI Workbench managed notebooks |  | Vertex AI Workbench managed notebooks add support for PyTorch 2.0 running with Python 3.10. |
| 2023-08-10 | TensorFlow 2.13 with Python 3.10 on Debian 11 for Vertex AI Workbench user-managed notebooks |  | Vertex AI Workbench user-managed notebooks add support for TensorFlow 2.13 using Python 3.10 on Debian 11. |
| 2023-08-10 | TensorFlow 2.8 with Python 3.10 on Debian 11 for Vertex AI Workbench user-managed notebooks |  | Vertex AI Workbench user-managed notebooks add support for TensorFlow 2.8 using Python 3.10 on Debian 11. |
| 2023-08-10 | TensorFlow 2.9 user-managed instances | 2023-08-10 | TensorFlow 2.9 user-managed Vertex AI Workbench instances are a notebook compute option based on a user-managed environment; TensorFlow 2.9 user-managed Vertex AI Workbench instances are a notebook compute option based on a user-managed environment; deprecated on 2023-08-10. |
| 2023-08-10 | Vertex AI Workbench managed notebooks Python 3.10 on Debian 11 |  | Managed notebooks added support for Python 3.10 on Debian 11. |
| 2023-08-10 | Vertex AI Workbench managed notebooks PyTorch 2.0 with Python 3.10 |  | Managed notebooks added support for PyTorch 2.0 with Python 3.10. |
| 2023-08-10 | Vertex AI Workbench managed notebooks shared memory capacity scaling |  | Managed notebooks increased shared memory size to match available memory capacity. |
| 2023-08-10 | Vertex AI Workbench managed notebooks shared memory sizing |  | Vertex AI Workbench managed notebooks now increase shared memory size to match available memory capacity. |
| 2023-08-10 | Vertex AI Workbench user-managed notebooks TensorFlow 2.13 with Python 3.10 on Debian 11 |  | User-managed notebooks added support for TensorFlow 2.13 with Python 3.10 on Debian 11. |
| 2023-08-10 | Vertex AI Workbench user-managed notebooks TensorFlow 2.8 with Python 3.10 on Debian 11 |  | User-managed notebooks added support for TensorFlow 2.8 with Python 3.10 on Debian 11. |
| 2023-07-19 | Vertex AI Workbench authentication methods |  | Vertex AI Workbench instances support both end-user and service account authentication. |
| 2023-07-19 | Vertex AI Workbench BigQuery integration |  | Vertex AI Workbench instances include integration with BigQuery. |
| 2023-07-19 | Vertex AI Workbench Cloud Storage integration |  | Vertex AI Workbench instances include integration with Cloud Storage. |
| 2023-07-19 | Vertex AI Workbench customer managed encryption keys |  | Vertex AI Workbench instances support customer managed encryption keys (CMEK). |
| 2023-07-19 | Vertex AI Workbench Dataproc integration |  | Vertex AI Workbench instances include integration with Dataproc. |
| 2023-07-19 | Vertex AI Workbench health status monitoring |  | Vertex AI Workbench instances provide health status monitoring. |
| 2023-07-19 | Vertex AI Workbench scheduled notebook execution |  | Vertex AI Workbench instances support running notebooks on a schedule. |
| 2023-07-19 | Vertex AI Workbench VPC Service Controls support |  | Vertex AI Workbench instances support VPC Service Controls. |
| 2023-06-26 | M109: PyTorch 2.0 with Python 3.10 and CUDA 11.8 support |  | The M109 release adds support for PyTorch 2.0 with Python 3.10 and CUDA 11.8 for Vertex AI Workbench user-managed notebooks. |
| 2023-06-26 | Vertex AI Workbench managed notebooks diagnostics |  | The managed notebooks feature includes a fix for excessive internal diagnostic tool processes that previously caused high CPU utilization. |
| 2023-06-26 | Vertex AI Workbench managed notebooks JupyterLab launcher kernel icons |  | The managed notebooks JupyterLab launcher no longer shows incorrect kernel image icons. |
| 2023-06-26 | Vertex AI Workbench user-managed notebook instances availability |  | The M109 release states that Vertex AI Workbench user-managed notebook instances are available. |
| 2023-04-13 | Vertex AI Workbench diagnostic tool restart scheduling |  | The Vertex AI Workbench user-managed notebooks fixed repeated creation of a diagnostic tool cron job on each notebook restart. |
| 2023-04-13 | Vertex AI Workbench JupyterLab UI version display |  | The Vertex AI Workbench user-managed notebooks service corrected the version shown in the JupyterLab user interface. |
| 2023-04-06 | Vertex AI Workbench Jupyter dependency environment placement |  | The Vertex AI Workbench user-managed notebooks rolled back a prior change that moved Jupyter dependencies into a separate Conda environment. |
| 2023-04-06 | Vertex AI Workbench notebook kernel ML framework configuration |  | The Vertex AI Workbench user-managed notebooks fixed notebook kernels so they include the specified machine learning frameworks. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image common-cpu-notebooks-debian-11-py310 |  | Introduced the Base CPU user-managed notebook image for Debian 11 with Python 3.10. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image common-cpu-notebooks-debian-11-py39 |  | Introduced the Base CPU user-managed notebook image for Debian 11 with Python 3.9. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image common-cu113-notebooks-debian11-py310 |  | Introduced the Base GPU (CUDA 11.3) user-managed notebook image for Debian 11 with Python 3.10. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image common-cu113-notebooks-debian11-py39 |  | Introduced the Base GPU (CUDA 11.3) user-managed notebook image for Debian 11 with Python 3.9. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image pytorch-1-13-cu113-notebooks-debian-11-py310 |  | Introduced the PyTorch 1.13 GPU (CUDA 11.3) user-managed notebook image for Debian 11 with Python 3.10. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image tf-2-11-cpu-debian-11-py310 |  | Introduced the TensorFlow 2.11 CPU user-managed notebook image for Debian 11 with Python 3.10. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image tf-2-11-cu113-notebooks-debian-11-py310 |  | Introduced the TensorFlow 2.11 GPU (CUDA 11.3) user-managed notebook image for Debian 11 with Python 3.10. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image tf-2-6-cpu-notebooks-debian-11-py39 |  | Introduced the TensorFlow 2.6 CPU user-managed notebook image for Debian 11 with Python 3.9. |
| 2023-03-31 | Vertex AI Workbench user-managed notebook image tf-2-6-cu113-notebooks-debian-11-py39 |  | Introduced the TensorFlow 2.6 GPU (CUDA 11.3) user-managed notebook image for Debian 11 with Python 3.9. |
| 2023-03-31 | Vertex AI Workbench user-managed notebooks Jupyter Conda environment separation |  | Moved Jupyter-related libraries into a separate Conda environment from machine-learning frameworks and base software libraries. |
| 2023-03-27 | Vertex AI Workbench managed notebook Health Agent logging level |  | Changed Health Agent logging for managed notebooks from DEBUG to INFO level. |
| 2023-03-27 | Vertex AI Workbench managed notebook runtime credential persistence |  | Fixed credential handling so end-user credentials remain preserved after managed notebook runtime shutdown. |
| 2023-03-27 | Vertex AI Workbench managed notebook runtime data disk capacity handling |  | Fixed a bug where a full data disk could block access to a managed notebook runtime. |
| 2023-03-27 | Vertex AI Workbench managed notebook runtime idle-shutdown activity detection |  | Fixed a bug where managed notebook runtimes with idle shutdown enabled failed to detect activity before shutting down. |
| 2023-03-16 | curl SSL certificate path detection in Vertex AI Workbench user-managed notebooks |  | A bug was fixed where curl could not detect the correct SSL certificate path by default in user-managed notebooks. |
| 2023-03-16 | Jupyter Gateway Client metadata configuration |  | Vertex AI Workbench user-managed notebooks now supports accessing the Jupyter Gateway Client configuration via the `notebook-enable-gateway-client` and `gateway-client-url` metadata tags. |
| 2023-03-16 | Jupyter user metadata handling in Vertex AI Workbench user-managed notebooks |  | The M104 user-managed notebooks update fixed a regression where `jupyter-user` metadata values were ignored. |
| 2023-03-16 | Preinstalled libraries in Vertex AI Workbench user-managed notebook image |  | The M104 user-managed notebook release added new preinstalled packages, including `google-cloud-artifact-registry`, `google-cloud-bigquery-storage`, `google-cloud-language`, `keyring`, and `keyrings.google-artifactregistry-auth`. |
| 2023-02-21 | Kernel display in Vertex AI Workbench managed notebooks |  | The M104 managed notebook update fixed a bug that prevented local and remote kernels from displaying when remote kernels were not accessible. |
| 2023-02-09 | Vertex AI Workbench managed notebooks executor network selection experience |  | Vertex AI Workbench enhanced the network selection user experience within managed notebooks executor. |
| 2023-02-09 | Vertex AI Workbench managed notebooks single-user instance security patch |  | Vertex AI Workbench fixed a security vulnerability affecting single-user managed notebook instances. |
| 2023-01-30 | Vertex AI Workbench user-managed notebook instance creation warning fix |  | Vertex AI Workbench fixed a bug that showed a jupyter lab build warning when creating new user-managed notebook instances. |
| 2023-01-30 | Vertex AI Workbench user-managed notebooks PyTorch runtime upgrade |  | Vertex AI Workbench upgraded the PyTorch runtime version to 1.13.1 for user-managed notebooks. |
| 2022-12-15 | Vertex AI Workbench PyTorch 1.13 support |  | Vertex AI Workbench now supports PyTorch 1.13 in user-managed notebooks. |
| 2022-12-15 | Vertex AI Workbench TensorFlow 2.11 support |  | Vertex AI Workbench now supports TensorFlow 2.11 in user-managed notebooks. |
| 2022-12-09 | Vertex AI Workbench Notebooks API allowed domains |  | Vertex AI Workbench updated Notebooks API access requirements by adding *.notebooks.cloud.google.com and removing *.datalab.cloud.google.com. |
| 2022-12-09 | Vertex AI Workbench TensorFlow 1.15 deprecation | 2022-12-09 | Vertex AI Workbench deprecated TensorFlow 1.15 for user-managed notebooks; deprecated on 2022-12-09. |
| 2022-12-09 | Vertex AI Workbench TensorFlow patch updates |  | Vertex AI Workbench updated TensorFlow patch versions to 2.8.4, 2.9.3, and 2.10.1 in user-managed notebooks. |
| 2022-11-08 | Vertex AI Workbench GPU instance startup |  | A fix enables Vertex AI Workbench instances with GPUs to start correctly. |
| 2022-10-18 | Vertex AI Workbench BigQuery SQL editor |  | The BigQuery SQL editor was fixed to run queries correctly in non-US locations. |
| 2022-10-18 | Vertex AI Workbench managed notebooks Go runtime |  | The managed notebooks Go runtime was upgraded from version 1.16.5 to 1.19.2. |
| 2022-10-18 | Vertex AI Workbench managed notebooks JupyterLab |  | JupyterLab in managed notebooks was upgraded from version 3.2 to 3.4. |
| 2022-10-18 | Vertex AI Workbench managed notebooks R runtime |  | The managed notebooks R runtime was upgraded from version 4.1 to 4.2. |
| 2022-09-20 | Vertex AI Workbench JupyterLab simple interface rendering |  | The JupyterLab simple interface display behavior was improved for managed notebooks. |
| 2022-09-20 | Vertex AI Workbench managed notebooks hardware-operation timeout handling |  | Managed notebooks improved timeout behavior when performing hardware operations. |
| 2022-09-20 | Vertex AI Workbench managed notebooks large notebook saving |  | Managed notebooks now support saving large notebook files more reliably. |
| 2022-09-20 | Vertex AI Workbench runtime access error messaging |  | Error messages were improved when a service account cannot access the runtime. |
| 2022-08-17 | ActivityLog refresh after Serverless Spark creation in Vertex AI Workbench |  | ActivityLog refresh behavior after creating a Serverless Spark job is improved. |
| 2022-08-17 | BigQuery materialized views display in Vertex AI Workbench |  | Displaying BigQuery materialized views in Vertex AI Workbench is corrected for proper rendering. |
| 2022-08-17 | Cloud Storage browser performance for large buckets and folders in Vertex AI Workbench |  | Viewing Cloud Storage buckets and folders with very large numbers of objects is corrected to work more reliably. |
| 2022-08-17 | GPU-enabled managed notebook startup in Vertex AI Workbench |  | Managed notebook instances start correctly after a GPU is added. |
| 2022-08-17 | JupyterLab access in Vertex AI Workbench managed notebooks |  | Users can access JupyterLab in managed notebooks without intermittent 502 errors. |
| 2022-08-17 | JupyterLab interface theme in Vertex AI Workbench |  | The JupyterLab interface has been refreshed with an improved Google-specific theme. |
| 2022-08-17 | Serverless Spark form input in Vertex AI Workbench |  | The Serverless Spark form input path in Vertex AI Workbench now works correctly. |
| 2022-08-17 | Single-User mode startup for Vertex AI Workbench instances |  | Opening a managed notebook instance in Single User mode starts more reliably without unnecessary delays. |
| 2022-08-17 | Vertex AI Workbench BigQuery materialized view display |  | Display handling for BigQuery materialized views was corrected in managed notebooks. |
| 2022-08-17 | Vertex AI Workbench Cloud Storage object list rendering |  | Display issues for Cloud Storage buckets and folders with large numbers of objects were fixed. |
| 2022-08-17 | Vertex AI Workbench JupyterLab interface theme |  | The JupyterLab interface was refreshed with an improved Google-specific theme. |
| 2022-08-17 | Vertex AI Workbench managed notebooks GPU startup reliability |  | Startup issues for managed notebooks when adding a GPU were fixed. |
| 2022-08-17 | Vertex AI Workbench managed notebooks JupyterLab availability |  | JupyterLab access reliability was improved by addressing recurring 502 errors. |
| 2022-08-17 | Vertex AI Workbench Serverless Spark activity logging |  | ActivityLog refresh behavior was improved after Serverless Spark instance creation. |
| 2022-08-17 | Vertex AI Workbench Serverless Spark form input |  | Bug fixes were applied to the Serverless Spark form input flow. |
| 2022-08-17 | Vertex AI Workbench single-user mode startup performance |  | Opening an instance in Single User mode was optimized to avoid slowed instance startup. |
| 2022-05-12 | Log streaming to consumer project via Logs Viewer |  | Vertex AI Workbench managed notebooks now support streaming logs to a consumer project through Cloud Logging Logs Viewer. |
| 2022-05-12 | net-tools package availability |  | Vertex AI Workbench managed notebooks now include the net-tools package. |
| 2022-05-12 | net-tools package availability in Vertex AI Workbench managed notebooks |  | Includes the net-tools package in Vertex AI Workbench managed notebook environments. |
| 2022-05-12 | Vertex AI Workbench managed notebooks Logs Viewer log streaming |  | Adds support for streaming managed notebook logs to the consumer project through Logs Viewer. |
| 2022-04-06 | Customer-managed encryption keys (CMEK) for Vertex AI Workbench |  | Workbench supports encrypting data using customer-managed encryption keys; Vertex AI Workbench supports securing instances with customer-managed encryption keys. |
| 2022-04-06 | Google-managed notebook instances |  | Vertex AI Workbench supports Google-managed notebook instances. |
| 2022-04-06 | Google-managed Workbench instances |  | Workbench supports Google-managed notebook instances. |
| 2022-04-06 | Idle shutdown for managed notebook instances |  | Managed notebook instances support automatic idle shutdown to reduce running costs. |
| 2022-04-06 | Idle timeout for managed notebooks |  | Managed notebook instances can automatically shut down after a configured idle timeout to control costs. |
| 2022-04-06 | In-notebook Spark connect to Dataproc |  | Vertex AI Workbench supports connecting to Dataproc clusters from within notebooks via Spark. |
| 2022-04-06 | In-notebook Spark connection to Dataproc clusters |  | Workbench notebooks support connecting to Dataproc clusters from within the notebook using Spark. |
| 2022-04-06 | Latest GPU support for Vertex AI Workbench |  | Workbench supports using the latest GPU types in notebook environments. |
| 2022-04-06 | Latest GPU support in managed notebooks |  | Managed notebook instances in Vertex AI Workbench support the latest GPUs. |
| 2022-04-06 | Managed notebook idle timeout |  | Vertex AI Workbench supports idle shutdown for managed notebook instances to help control costs. |
| 2022-04-06 | Managed notebooks executor |  | The managed notebooks executor can run notebook files on a schedule or as one-time executions with per-run parameters. |
| 2022-04-06 | Managed notebooks executor job support |  | Vertex AI Workbench supports job execution through the managed notebooks executor for custom training and Spark. |
| 2022-04-06 | Managed notebooks executor job support on Vertex AI custom training and Spark |  | Workbench supports notebook job execution through the managed notebooks executor on custom training and Spark. |
| 2022-04-06 | Native BigQuery and Cloud Storage plug-ins for Workbench |  | Workbench includes native plug-ins for BigQuery and Cloud Storage access. |
| 2022-04-06 | Notebook execution on Vertex AI custom training and Spark |  | Notebook code can be executed through Vertex AI custom training and Spark execution environments. |
| 2022-04-06 | One-click NGC container deployment |  | Vertex AI Workbench supports one-click deployment for NGC containers. |
| 2022-04-06 | One-click NGC container deployment from Workbench |  | Users can deploy NGC containers to Workbench with a one-click workflow. |
| 2022-04-06 | Vertex AI Workbench |  | Vertex AI Workbench became generally available as a unified notebook environment for data science on Google Cloud; Vertex AI Workbench was released as a generally available, single notebook surface for data science workflows. |
| 2022-04-06 | Vertex AI Workbench BigQuery and Cloud Storage access in JupyterLab |  | Workbench notebooks can access BigQuery data and Cloud Storage directly from the JupyterLab interface. |
| 2022-04-06 | Vertex AI Workbench BigQuery and Cloud Storage integration |  | Vertex AI Workbench enables access to BigQuery and Cloud Storage directly from JupyterLab. |
| 2022-04-06 | Vertex AI Workbench custom container support |  | Workbench instances can run with custom containers for notebook environments. |
| 2022-04-06 | Vertex AI Workbench custom containers |  | Users can run Vertex AI Workbench notebooks using custom containers. |
| 2022-04-06 | Vertex AI Workbench managed notebooks executor |  | Introduces the managed notebooks executor to run notebook files on a schedule or as one-time executions with configurable run-time parameters. |
| 2022-04-06 | Vertex AI Workbench notebook execution on custom training |  | Workbench notebooks can execute notebook code on Vertex AI custom training. |
| 2022-04-06 | Vertex AI Workbench Spark notebook execution |  | Workbench notebooks can execute notebook code on Spark. |
| 2022-04-06 | VPC Service Controls for Workbench instances |  | Vertex AI Workbench instances can be secured using VPC Service Controls. |
| 2022-04-06 | VPC Service Controls support in Vertex AI Workbench |  | Workbench instances can be secured using VPC Service Controls. |
| 2022-04-06 | Workbench end-user and service account authentication |  | Vertex AI Workbench supports both end-user and service account authentication. |
| 2021-06-18 | Notebooks API Compute Reservations support |  | The Notebooks API can use Compute Reservations when creating Vertex AI Workbench instances. |
| 2021-03-26 | Cross-project service account support for user-managed notebooks |  | Vertex AI Workbench added support for using a service account from another project with user-managed notebooks. |
| 2021-02-01 | Notebooks Terraform module support for Notebooks API v1 |  | The Notebooks Terraform Module now supports the Notebooks API v1. |
| 2021-01-23 | Notebooks API Shielded VM support |  | The Notebooks API now supports configuring notebook instances using Shielded VM settings. |
| 2020-09-21 | AI Platform Notebooks API availability |  | The AI Platform Notebooks API (now known as user-managed notebooks) reached general availability. |
| 2020-09-21 | Cloud Audit Logging for user-managed notebooks |  | Cloud Audit Logging became generally available for user-managed notebooks in Vertex AI Workbench, enabling audit trail logging for notebook actions. |
| 2020-09-21 | E2 machine type support for user-managed notebooks |  | User-managed notebooks added support for E2 machine types. |
| 2020-09-21 | Granular IAM permissions for user-managed notebooks |  | Granular IAM permissions for user-managed notebooks became generally available. |
| 2020-09-21 | Notebooks API isUpgradable endpoint |  | The Notebooks API now includes an isUpgradable endpoint. |
| 2020-09-21 | Notebooks instance manual and auto-upgrade |  | The API adds manual and automatic upgrade functionality for notebooks instances created through the API. |
| 2020-09-21 | User-managed notebook regional expansion (europe-west2/europe-west3/europe-west6) |  | User-managed notebooks expanded availability to the London, Frankfurt, and Zurich regions. |
| 2020-03-31 | AI Platform Notebooks API for user-managed notebooks |  | The AI Platform Notebooks API for user-managed notebooks was still in beta. |
| 2020-03-31 | IAM roles support for user-managed notebooks |  | IAM roles support for user-managed notebooks was in beta. |
| 2020-03-31 | VPC Service Controls integration for user-managed notebooks |  | Integration with VPC Service Controls for user-managed notebooks was available in beta. |
| 2020-02-04 | AI Platform Notebooks integration with VPC Service Controls |  | AI Platform Notebooks now supports VPC Service Controls, allowing notebook instances to be used within a service perimeter (beta). |
| 2020-02-03 | AI Platform Notebooks support for Access Transparency |  | AI Platform Notebooks now supports Access Transparency to provide logs of Google staff actions when accessing customer data. |
| 2019-09-12 | Customer-managed encryption keys (CMEK) for user-managed notebook VM boot disks |  | AI Platform Notebooks now support CMEK to encrypt data on VM boot disks for user-managed notebooks. |
| 2019-09-09 | AI Platform Notebooks instance access controls |  | Allows granting access to AI Platform Notebooks instances through configurable permissions. |
| 2019-09-09 | AI Platform Notebooks network settings customization |  | Enables configuring network settings when creating AI Platform Notebooks instances. |
| 2019-09-09 | AI Platform Notebooks notebook content encryption |  | Adds options to encrypt notebook content during AI Platform Notebooks instance creation. |
| 2019-09-09 | Custom container images for AI Platform Notebooks instances |  | AI Platform Notebooks can now be deployed using custom container images, including Deep Learning Containers derivatives. |
| 2019-06-03 | AI Platform Notebooks R runtime provisioning |  | Supports creating AI Platform Notebooks instances with R and core R packages installed. |
| 2019-03-01 | AI Platform Notebooks |  | AI Platform Notebooks is a managed service for creating and managing VM instances pre-packaged with JupyterLab and deep learning software. |

Source file slug: `vertex-ai-workbench.md`

