# Deep Learning VM Images

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 111
Unique features: 207

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-04-16 | Dataproc JupyterLab plugin |  | The Dataproc JupyterLab plugin in Deep Learning VM Images was updated to version 0.1.85. |
| 2025-03-12 | Conda-free images |  | New non-TensorFlow Deep Learning VM images now exclude Conda to reduce image size and improve performance and vulnerability management. |
| 2025-03-12 | Conda-preinstalled images | 2025-09-30 | Deep Learning VM images that include Conda remain available as separate -conda image and image family variants; deprecated on 2025-09-30. |
| 2024-11-20 | CUDA 12.4 VM images |  | Deep Learning VM Images now include images based on CUDA 12.4. |
| 2024-11-20 | PyTorch 2.4.0 images |  | Deep Learning VM Images now provide PyTorch 2.4.0 images with CUDA 12.4 and Python 3.10. |
| 2024-11-20 | R VM images |  | R VM images were upgraded from R 4.4.1 to R 4.4.2; Debian 11 Python 3.10 R images were upgraded to R 4.3. |
| 2024-09-26 | TensorFlow 2.17 images |  | Deep Learning VM Images now provide TensorFlow 2.17 VM images. |
| 2024-08-20 | PyTorch 2.3.0 images |  | Deep Learning VM Images now provide PyTorch 2.3.0 images with CUDA 12.1 and Python 3.10. |
| 2024-07-16 | TensorFlow 2.16 images |  | Deep Learning VM Images now provide TensorFlow 2.16 images. |
| 2024-06-21 | NVIDIA driver version |  | Deep Learning VM Images updated NVIDIA drivers to version 550.90.07; Older Deep Learning VM images were updated to NVIDIA driver branch R535. |
| 2024-05-17 | common-gpu image releases |  | Common-gpu Deep Learning VM releases were re-enabled after earlier erroneous deactivation. |
| 2024-05-17 | CUDA 12.2 images |  | Deep Learning VM Images now include images based on CUDA 12.2. |
| 2024-05-17 | linux-headers-cloud-amd64 preinstallation |  | The linux-headers-cloud-amd64 metapackage is now installed to speed NVIDIA driver recompilation after kernel upgrades. |
| 2024-05-17 | TensorFlow 2.15 images |  | TensorFlow 2.15 images were updated to use CUDA 12.2 instead of CUDA 12.1; Deep Learning VM Images now provide TensorFlow 2.15 images with CUDA 12.1 and Python 3.10. |
| 2024-04-25 | TensorFlow 2.15.1 images |  | TensorFlow 2.15 images were upgraded to TensorFlow 2.15.1. |
| 2024-04-25 | Ubuntu 22.04 image support |  | Deep Learning VM Images now support Ubuntu 22.04 for CPU images and GPU images using CUDA 12.1 or later. |
| 2024-03-18 | Experimental R images |  | Experimental R images were updated to R 4.3.3. |
| 2024-03-18 | Legacy GPU image families |  | Legacy GPU image families were restored for TensorFlow 2.12 through 2.14 and for PyTorch 2.0. |
| 2024-03-18 | PyTorch 2.1.0 images |  | Deep Learning VM Images now provide PyTorch 2.1.0 images with CUDA 12.1 and Python 3.10. |
| 2024-03-18 | PyTorch 2.2.0 images |  | Deep Learning VM Images now provide PyTorch 2.2.0 images with CUDA 12.1 and Python 3.10. |
| 2024-02-28 | TensorFlow image CUDA naming |  | TensorFlow 2.12, 2.13, and 2.14 image and image family names now include the CUDA 11.8 version. |
| 2024-02-08 | TensorFlow 2.15 image family CUDA naming |  | TensorFlow 2.15 image family names now include the CUDA version for this and future releases. |
| 2024-02-08 | tf-2-15-gpu image family | 2024-02-08 | The tf-2-15-gpu image family is deprecated in favor of tf-2-15-cu121; deprecated on 2024-02-08. |
| 2024-01-19 | TensorFlow 2.14 images |  | Deep Learning VM Images now provide TensorFlow 2.14 images with CUDA 11.8 and Python 3.10. |
| 2023-12-14 | Debian 10 Python 3.7 images | 2023-12-14 | Debian 10 Python 3.7 images are no longer available; deprecated on 2023-12-14. |
| 2023-10-10 | CUDA 12.1 VM images |  | Deep Learning VM Images now provide CUDA 12.1 VM images for Debian 11 and Ubuntu 20.04 with Python 3.10. |
| 2023-09-14 | PyTorch XLA support |  | PyTorch 2.0 images now include PyTorch XLA 2.0. |
| 2023-08-10 | TensorFlow 2.13 images |  | Deep Learning VM Images now support TensorFlow 2.13 with Python 3.10 on Debian 11. |
| 2023-08-10 | TensorFlow 2.8 images |  | Deep Learning VM Images now support TensorFlow 2.8 with Python 3.10 on Debian 11. |
| 2023-08-10 | TensorFlow 2.9 images | 2023-08-10 | TensorFlow 2.9 images are deprecated; deprecated on 2023-08-10. |
| 2023-06-26 | Open NVIDIA kernel modules |  | GPU-based Deep Learning VM Images now install NVIDIA open kernel modules on A2 and G2 machines instead of proprietary modules. |
| 2023-06-26 | PyTorch 2.0 images |  | Deep Learning VM Images now provide PyTorch 2.0 images on Debian 11 with Python 3.10 and CUDA 11.8. |
| 2023-05-09 | TensorFlow 2.12 images |  | Deep Learning VM Images now provide TensorFlow 2.12 CPU and GPU images with CUDA 11.8 and Python 3.10. |
| 2023-05-04 | common-container image name |  | The image name common-container-experimental was changed to common-container. |
| 2023-03-31 | Base CPU images |  | Deep Learning VM Images now provide Base CPU images on Debian 11 with Python 3.10. |
| 2023-03-31 | Base GPU images |  | Deep Learning VM Images now provide Base GPU images on Debian 11 with CUDA 11.3 and Python 3.10. |
| 2023-03-31 | Jupyter dependency environment separation |  | Jupyter-related libraries were moved into a separate Conda environment from machine learning frameworks and base libraries. |
| 2023-03-31 | PyTorch 1.13 images |  | Deep Learning VM Images now provide PyTorch 1.13 images on Debian 11 with CUDA 11.3 and Python 3.10; Deep Learning VM Images now provide PyTorch 1.13. |
| 2023-03-31 | TensorFlow 2.11 CPU images |  | Deep Learning VM Images now provide TensorFlow 2.11 CPU images on Debian 11 with Python 3.10. |
| 2023-03-31 | TensorFlow 2.11 GPU images |  | Deep Learning VM Images now provide TensorFlow 2.11 GPU images on Debian 11 with CUDA 11.3 and Python 3.10. |
| 2023-03-31 | TensorFlow 2.6 CPU images | 2024-05-17 | TensorFlow 2.6 CPU images are deprecated and will receive no further updates; Deep Learning VM Images now provide TensorFlow 2.6 CPU images on Debian 11 with Python 3.9; deprecated on 2024-05-17. |
| 2023-03-31 | TensorFlow 2.6 GPU images | 2024-05-17 | TensorFlow 2.6 GPU images are deprecated and will receive no further updates; Deep Learning VM Images now provide TensorFlow 2.6 GPU images on Debian 11 with CUDA 11.3 and Python 3.9; deprecated on 2024-05-17. |
| 2023-03-16 | Preinstalled Python packages |  | Deep Learning VM Images added several preinstalled Python packages including Artifact Registry, BigQuery Storage, and Cloud Language client libraries. |
| 2023-01-30 | PyTorch 1.13.1 images |  | PyTorch was upgraded to version 1.13.1 in Deep Learning VM Images. |
| 2022-12-15 | JupyterLab Language Server Protocol |  | Deep Learning VM Images added support for JupyterLab Language Server Protocol. |
| 2022-12-15 | TensorFlow 2.11 images |  | Deep Learning VM Images now provide TensorFlow 2.11. |
| 2022-12-09 | TensorFlow 1.15 images | 2022-12-09 | TensorFlow 1.15 Deep Learning VM images are deprecated; deprecated on 2022-12-09. |
| 2022-12-09 | TensorFlow patch version updates |  | Deep Learning VM Images upgraded TensorFlow patch versions to 2.8.4, 2.9.3, and 2.10.1. |
| 2022-11-08 | Docker proxy agent service |  | The Docker proxy agent was migrated to run as a systemctl service. |
| 2022-11-02 | TPU software versions |  | TPU versions were updated for TensorFlow 2.8, 2.9, and 2.10 Deep Learning VMs. |
| 2022-10-18 | compute.instances.get permission requirement |  | Deep Learning VM Images removed the requirement for the attached service account to have the compute.instances.get permission. |
| 2022-10-18 | disable-check-xsrf metadata flag |  | Deep Learning VM Images added the disable-check-xsrf metadata flag to disable Jupyter XSRF checks. |
| 2022-10-18 | JupyterLab version |  | JupyterLab was upgraded from version 3.2 to 3.4. |
| 2022-10-18 | notebook-enable-debug metadata flag |  | Deep Learning VM Images added the notebook-enable-debug metadata flag for low-level JupyterLab debugging. |
| 2022-09-20 | Diagnostic tool DNS resolution check |  | The Deep Learning VM diagnostic tool now supports DNS resolution checks. |
| 2022-09-20 | Docker version |  | Docker in Deep Learning VM Images was updated to version 20.10. |
| 2022-09-20 | PyTorch 1.12.1 images |  | Deep Learning VM Images added the PyTorch 1.12.1 patch update. |
| 2022-09-20 | TensorFlow 2.10.0 images |  | Deep Learning VM Images now provide TensorFlow 2.10.0. |
| 2022-09-20 | TensorFlow patch updates |  | Deep Learning VM Images added TensorFlow patch updates for versions 2.9.2 and 2.8.3. |
| 2022-08-12 | K80 GPU support | 2022-08-12 | K80 GPUs are no longer supported with the latest NVIDIA driver in Deep Learning VM Images; deprecated on 2022-08-12. |
| 2022-08-12 | TensorFlow upstream patch updates |  | TensorFlow was updated to versions 2.9.1, 2.8.1, and 2.6.5 to incorporate upstream changes. |
| 2022-07-06 | PyTorch 1.12 images |  | Deep Learning VM Images added support for PyTorch 1.12. |
| 2022-07-06 | R image system libraries |  | The R Deep Learning VM image now includes additional system libraries. |
| 2022-05-16 | PyTorch XLA default support |  | PyTorch environments starting with version 1.11 now support XLA by default. |
| 2022-05-16 | TensorFlow Enterprise 2.9 |  | Deep Learning VM Images now provide TensorFlow Enterprise 2.9. |
| 2022-05-16 | TensorFlow Enterprise patch releases |  | Deep Learning VM Images added TensorFlow Enterprise patch releases 2.6.4 and 2.8.1. |
| 2022-03-21 | Compute Engine Virtual Ethernet |  | Deep Learning VM Images upgraded Compute Engine Virtual Ethernet to version 1.3.0. |
| 2022-03-21 | PyTorch 1.11 with PyTorch XLA 1.11 |  | Deep Learning VM Images now provide PyTorch 1.11 together with PyTorch XLA 1.11. |
| 2022-02-28 | Jupyter UI restriction options |  | Deep Learning VM instances now support Jupyter options for disabling terminals and permanently deleting files instead of sending them to trash. |
| 2022-02-28 | Vertex AI sample notebooks |  | Vertex AI sample notebooks are now included in the /usr/share/tutorials folder. |
| 2022-02-02 | TensorFlow Enterprise 2.6.3 |  | TensorFlow Enterprise 2.6.2 was upgraded to version 2.6.3. |
| 2022-02-02 | TensorFlow Enterprise 2.8 |  | Deep Learning VM Images now provide TensorFlow Enterprise 2.8 with Long Term Version Support. |
| 2021-12-20 | Installed Python package manifests |  | Each image now publishes its installed Python package list in files stored on Cloud Storage. |
| 2021-12-06 | Artifact Registry Python keyring authentication |  | Deep Learning VM environments now include Artifact Registry's Python keyring authentication library. |
| 2021-11-18 | CUDA 10.x environments | 2021-11-18 | CUDA 10.x environments are deprecated; deprecated on 2021-11-18. |
| 2021-11-18 | JupyterLab version lock |  | Deep Learning VM Images locked JupyterLab to version 3.2. |
| 2021-11-18 | PyTorch XLA 1.10 |  | Deep Learning VM Images released PyTorch XLA 1.10. |
| 2021-11-18 | TensorFlow Enterprise 2.6.2 |  | The TensorFlow Enterprise image was upgraded to patch version 2.6.2. |
| 2021-11-18 | Ubuntu 20.04 LTS images |  | All Ubuntu 18.04 LTS Deep Learning VM images were upgraded to Ubuntu 20.04 LTS. |
| 2021-11-08 | CUDA 11.3 Debian 10 image |  | Deep Learning VM Images now provide a CUDA 11.3 image for Debian 10. |
| 2021-11-05 | TensorFlow Enterprise 2.7 |  | Deep Learning VM Images now provide TensorFlow Enterprise 2.7 with CUDA 11.3 support. |
| 2021-10-28 | PyTorch 1.10 images |  | Deep Learning VM Images now provide PyTorch 1.10. |
| 2021-10-26 | Vertex SDK for Python |  | The Vertex SDK for Python is now available across all Deep Learning VM image types; Deep Learning VM Images include the Vertex SDK for Python. |
| 2021-09-24 | JupyterLab 3 |  | Deep Learning VM Images include JupyterLab 3.x. |
| 2021-09-24 | Jupytext |  | Deep Learning VM Images include the Jupytext tool for notebook and text synchronization. |
| 2021-09-09 | Pinned Node.js version |  | Deep Learning VM Images pin Node.js to version 12.14.1 or later. |
| 2021-09-09 | PyTorch 1.9 images |  | Deep Learning VM Images provide refreshed PyTorch 1.9 images; Deep Learning VM Images provide PyTorch 1.9 environments. |
| 2021-09-09 | Theia IDE images |  | Deep Learning VM Images provide refreshed Theia IDE experimental images. |
| 2021-08-18 | TensorFlow Enterprise 2.3.4 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.3.4 environments. |
| 2021-08-11 | Long Term Version Support |  | TensorFlow Enterprise 2.6.0 images include Long Term Version Support. |
| 2021-08-11 | TensorFlow Enterprise 2.6.0 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.6.0 environments. |
| 2021-07-15 | Custom container error messages |  | Deep Learning VM Images provide clearer error messages for custom container users. |
| 2021-07-07 | Cloud Storage backup synchronization controls |  | Deep Learning VM Images support controlling Cloud Storage backup synchronization timing and reducing synchronization output. |
| 2021-07-07 | Debian 10 GPU driver stack |  | Debian 10 GPU images include NVIDIA driver 460.73.01 and CUDA 11.0.3. |
| 2021-07-07 | fastai 2.4 |  | The PyTorch 1.9 GPU image includes fastai 2.4. |
| 2021-07-07 | JupyterLab table of contents extension |  | Deep Learning VM Images preinstall the JupyterLab table of contents extension. |
| 2021-06-22 | Disabled automatic Ubuntu updates |  | Ubuntu-based Deep Learning VM Images disable automatic operating system updates. |
| 2021-06-22 | TensorFlow Enterprise 2.1.4 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.1.4 environments. |
| 2021-06-22 | TensorFlow Enterprise 2.3.3 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.3.3 environments. |
| 2021-06-17 | PyTorch/XLA 1.9 images |  | Deep Learning VM Images provide PyTorch/XLA 1.9 environments. |
| 2021-06-02 | Debian 10 images |  | Deep Learning VM Images include refreshed Debian 10-based images; Deep Learning VM Images provide Debian 10-based images. |
| 2021-06-02 | Post Startup script support |  | Deep Learning VM Images support a Post Startup script and expose its status through guest attributes. |
| 2021-06-02 | TensorFlow 2.5 image libraries |  | TensorFlow 2.5 images include upgraded TensorFlow Probability, TensorFlow I/O, and TensorFlow Estimator. |
| 2021-05-14 | TensorFlow Enterprise 2.5 images | 2021-08-18 | TensorFlow Enterprise 2.5 Deep Learning VM Images provide enterprise TensorFlow 2.5 environments; Deep Learning VM Images provide TensorFlow Enterprise 2.5 environments; deprecated on 2021-08-18. |
| 2021-05-13 | Cloud Monitoring v2 Collection Agent |  | Deep Learning VM Images use Collection Agent integration based on Cloud Monitoring version 2. |
| 2021-05-05 | R 4.0 images |  | Deep Learning VM Images provide R images based on R 4.0. |
| 2021-05-05 | xai-tabular-widget |  | TensorFlow Deep Learning VM Images include the xai-tabular-widget package. |
| 2021-04-19 | Beam Notebooks GPU support |  | Beam Notebooks on Deep Learning VM Images support GPUs. |
| 2021-04-19 | Horovod |  | TensorFlow GPU Deep Learning VM Images include Horovod. |
| 2021-03-31 | PyTorch 1.8 support |  | Deep Learning VM Images support PyTorch 1.8 in deep learning environments. |
| 2021-03-31 | TensorFlow Enterprise MKL build fix |  | Deep Learning VM Images fix the scope allocator optimization issue in TensorFlow Enterprise 2.3 and 2.1 MKL builds. |
| 2021-03-05 | tensorflow-cloud 0.1.13 |  | Deep Learning VM Images include tensorflow-cloud 0.1.13. |
| 2021-02-19 | Fairness Indicators 0.27.0 |  | Deep Learning VM Images include Fairness Indicators 0.27.0. |
| 2021-02-19 | Fast.ai book tutorials |  | PyTorch Deep Learning VM Images include Fast.ai book tutorials. |
| 2021-02-19 | gVNIC |  | Deep Learning VM Images enable gVNIC on all images. |
| 2021-02-19 | Swift for TensorFlow images | 2021-02-19 | Swift for TensorFlow images provide Deep Learning VM Image environments for the Swift for TensorFlow project; deprecated on 2021-02-19. |
| 2021-02-19 | TensorFlow 2.4.1 images |  | Deep Learning VM Images provide TensorFlow 2.4.1 environments. |
| 2021-02-19 | TFX 0.27.0 |  | Deep Learning VM Images include TFX 0.27.0. |
| 2021-02-08 | NVIDIA driver 450.80.02 |  | Deep Learning VM Images include NVIDIA driver 450.80.02. |
| 2021-02-08 | TFX 0.26.1 |  | Deep Learning VM Images include TFX 0.26.1. |
| 2021-01-25 | Python 2 support | 2021-01-25 | Deep Learning VM Images previously provided Python 2 support; deprecated on 2021-01-25. |
| 2021-01-25 | TensorFlow 2.1.3 images |  | Deep Learning VM Images provide TensorFlow 2.1.3 environments. |
| 2021-01-25 | TensorFlow 2.3.2 images |  | Deep Learning VM Images provide TensorFlow 2.3.2 environments. |
| 2020-12-16 | TensorFlow 2.4 images |  | Deep Learning VM Images provide TensorFlow 2.4 environments. |
| 2020-10-27 | A100 GPU support |  | PyTorch 1.6 CUDA 11 images support A100 GPU accelerators. |
| 2020-10-27 | PyTorch 1.6 CUDA 11 images |  | Deep Learning VM Images provide PyTorch 1.6 CUDA 11 environments. |
| 2020-10-27 | PyTorch/XLA package |  | Deep Learning VM Images include the PyTorch/XLA package. |
| 2020-10-27 | Swift for TensorFlow framework |  | Deep Learning VM Images include the Swift for TensorFlow framework. |
| 2020-10-27 | Ubuntu 18.04 images |  | Deep Learning VM Images provide Ubuntu 18.04-based images. |
| 2020-09-24 | BigQuery magic commands |  | Deep Learning VM Images fix an issue affecting BigQuery magic commands in some environments. |
| 2020-09-24 | Diagnostics tool for AI Platform Notebooks |  | Deep Learning VM Images include a diagnostics tool for AI Platform Notebooks. |
| 2020-09-24 | TensorFlow 2.3 add-ons fixes |  | Deep Learning VM Images include bug fixes for TensorFlow 2.3 add-ons. |
| 2020-08-10 | Custom container memory limit |  | Deep Learning VM Images limit memory utilization for custom containers. |
| 2020-08-10 | europe-west3 region support |  | Deep Learning VM Images support deployment in the europe-west3 region. |
| 2020-08-10 | Explainable AI SDK and explainers |  | Deep Learning VM Images include updated Explainable AI SDK support and explainers. |
| 2020-08-10 | Instance auto upgrade |  | Deep Learning VM Images support automatic instance upgrades. |
| 2020-08-10 | JRE in R images |  | R Deep Learning VM Images include a Java Runtime Environment. |
| 2020-08-10 | llvm-openmp support |  | Deep Learning VM Images include a fix for llvm-openmp support. |
| 2020-08-10 | NCCL 2.7.6 in CU110 images |  | CUDA 11.0 Deep Learning VM Images include NCCL 2.7.6. |
| 2020-08-10 | scikit-learn package and container |  | Deep Learning VM Images add scikit-learn package support and a corresponding container. |
| 2020-08-10 | TPU consistency with Deep Learning Containers |  | Deep Learning VM Images provide TPU behavior more consistent with Deep Learning Containers. |
| 2020-08-06 | CUDA 11 support for TensorFlow Enterprise 2.3 images |  | TensorFlow Enterprise 2.3 Deep Learning VM Images include variants that support CUDA 11.0. |
| 2020-08-06 | TensorFlow Enterprise 2.3 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.3 environments. |
| 2020-07-13 | Removable sudo access |  | Deep Learning VM Images support removing sudo access from Deep Learning Containers. |
| 2020-07-13 | Shielded VM support |  | Deep Learning VM Images support creating Shielded VM instances. |
| 2020-06-11 | TensorFlow Enterprise 1.15.3 images |  | Deep Learning VM Images provide TensorFlow Enterprise 1.15.3 environments. |
| 2020-06-11 | TensorFlow Enterprise 2.1.1 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.1.1 environments. |
| 2020-06-11 | tensorflow-enterprise-addons |  | Deep Learning VM Images include the tensorflow-enterprise-addons package in all deep learning environments. |
| 2020-05-18 | TensorFlow 2.2 images |  | Deep Learning VM Images provide TensorFlow 2.2 environments. |
| 2020-01-21 | MXNet 1.5.1 |  | Deep Learning VM Images include MXNet 1.5.1. |
| 2020-01-21 | PyTorch 1.4.0 |  | Deep Learning VM Images include PyTorch 1.4.0. |
| 2020-01-21 | TensorFlow Enterprise 2.1 images |  | Deep Learning VM Images provide TensorFlow Enterprise 2.1 environments. |
| 2020-01-21 | XGBoost 0.90 |  | Deep Learning VM Images include XGBoost 0.90. |
| 2019-11-01 | TensorFlow Enterprise Deep Learning VM Images |  | Deep Learning VM Images provide TensorFlow Enterprise image families optimized for Google Cloud with long-term version support. |
| 2019-10-11 | TensorFlow 2.0 images |  | TensorFlow 2.0 Deep Learning VM Images are generally available and no longer experimental. |
| 2019-08-26 | JupyterLab 1.0 |  | Deep Learning VM Images include JupyterLab 1.0 on all images. |
| 2019-08-26 | PyTorch 1.2 |  | Deep Learning VM Images include PyTorch 1.2. |
| 2019-07-12 | Python 3.7 support for TensorFlow |  | TensorFlow Deep Learning VM Images support Python 3.7. |
| 2019-07-12 | R 3.6 |  | Deep Learning VM Images include R 3.6. |
| 2019-07-01 | What-If Tool |  | Deep Learning VM Images include the What-If Tool widget. |
| 2019-06-20 | TensorFlow 1.14.0 |  | Deep Learning VM Images include TensorFlow 1.14.0. |
| 2019-06-20 | TensorFlow 2.0 Beta 1 |  | Deep Learning VM Images include TensorFlow 2.0 Beta 1. |
| 2019-06-17 | Caffe 1.0 BVLC |  | Deep Learning VM Images provide Caffe 1.0 BVLC as a machine learning framework option. |
| 2019-06-17 | CNTK 2.7 |  | Deep Learning VM Images provide CNTK 2.7 as a machine learning framework option. |
| 2019-06-17 | TensorFlow 2.0 Beta 0 |  | Deep Learning VM Images include TensorFlow 2.0 Beta 0. |
| 2019-05-29 | Faster driver installation |  | Deep Learning VM Images reduce driver installation time for common TensorFlow and PyTorch images. |
| 2019-05-29 | Private IP access with Google Private Access |  | Deep Learning VM Images can be used without a public IP address when Google Private Access is enabled. |
| 2019-05-29 | RAPIDS 0.7 |  | Deep Learning VM Images include RAPIDS 0.7. |
| 2019-05-03 | Chainer 5.4.0 |  | Deep Learning VM Images include Chainer 5.4.0. |
| 2019-05-03 | CUDA 10.1 images |  | Deep Learning VM Images provide CUDA 10.1-based images. |
| 2019-05-03 | fastai 1.0.52 |  | Deep Learning VM Images include fastai 1.0.52. |
| 2019-05-03 | MXNet 1.4.0 |  | Deep Learning VM Images include MXNet 1.4.0 based on CUDA 10.0 images. |
| 2019-05-03 | PyTorch 1.1.0 |  | Deep Learning VM Images include PyTorch 1.1.0. |
| 2019-04-26 | Authorization modes |  | Deep Learning VM Images support single user mode and service account mode authorization. |
| 2019-04-26 | JupyterLab Cell Tags extension |  | Deep Learning VM Images preinstall the jupyterlab-celltags extension. |
| 2019-04-26 | Notebook cell metadata editor plugin |  | Deep Learning VM Images preinstall a plugin for editing notebook cell metadata. |
| 2019-04-26 | rpy2 |  | R Deep Learning VM Images preinstall rpy2. |
| 2019-03-15 | cookiecutter |  | Deep Learning VM Images preinstall cookiecutter. |
| 2019-03-15 | Fairing |  | Deep Learning VM Images preinstall Fairing. |
| 2019-03-15 | seaborn |  | Deep Learning VM Images preinstall seaborn. |
| 2019-03-15 | TensorFlow 1.13 |  | Deep Learning VM Images include TensorFlow 1.13. |
| 2019-02-21 | Dynamic CPU/GPU binaries |  | TensorFlow and PyTorch GPU images switch between CPU-only and GPU-enabled binaries at startup based on attached GPUs. |
| 2019-01-29 | TensorFlow 2.0 experimental images |  | Deep Learning VM Images provide an experimental TensorFlow 2.0 image flavor. |
| 2019-01-29 | Web proxy access |  | Deep Learning VM Images support access through a special web proxy instead of SSH. |
| 2019-01-14 | MXNet 1.3 experimental images |  | Deep Learning VM Images provide an experimental MXNet 1.3 image flavor. |
| 2018-12-19 | AI Platform Deep Learning VM Image 1.0 |  | AI Platform Deep Learning VM Image 1.0 is generally available. |
| 2018-12-19 | Bazel |  | TensorFlow Deep Learning VM Images preinstall Bazel. |
| 2018-12-19 | Jupyter SQL integration |  | Deep Learning VM Images preinstall Jupyter SQL integration and preload the SQL plugin. |
| 2018-12-19 | Python Dataproc client |  | Deep Learning VM Images preinstall the Python Dataproc client on all images. |
| 2018-12-10 | Fast.AI 1.0.36 |  | Deep Learning VM Images include Fast.AI 1.0.36. |
| 2018-12-05 | Git-Jupyter integration |  | Deep Learning VM Images support integration between Git workflows and Jupyter environments. |
| 2018-10-10 | Conda support |  | Deep Learning VM Images include support for conda package and environment management. |
| 2018-10-10 | fastai support |  | Deep Learning VM Images include support for the fastai deep learning library. |
| 2018-10-10 | Intel Optimized Python packages |  | All distributions include Intel-optimized Python packages such as NumPy, SciPy, scikit-learn, TensorFlow, and PyTorch when applicable. |
| 2018-09-27 | CUDA 10.0 common image |  | Deep Learning VM Images include a common image based on CUDA 10.0 with updated NVIDIA components. |
| 2018-09-27 | XGBoost images |  | Deep Learning VM Images provide experimental XGBoost image families for CPU and CUDA 9.2 environments. |
| 2018-09-18 | PyTorch 1.0 RC experimental images |  | Deep Learning VM Images provide experimental image families for PyTorch 1.0 RC on CPU and CUDA 9.2. |
| 2018-08-30 | Chainer experimental images |  | Deep Learning VM Images provide experimental images for the Chainer 4.3 framework. |
| 2018-08-30 | kubectl preinstallation |  | All Deep Learning VM Images come with kubectl pre-installed. |
| 2018-08-14 | Automatic CPU binary fallback |  | GPU TensorFlow and PyTorch images automatically switch to CPU-optimized binaries on first boot when no GPU is attached. |
| 2018-08-14 | Docker and NVIDIA Docker preinstallation |  | Deep Learning VM Images come with Docker or NVIDIA Docker pre-installed depending on the image type. |
| 2018-08-14 | Pre-baked tutorials |  | TensorFlow and PyTorch images include pre-baked tutorials for getting started. |
| 2018-07-31 | Colab integration |  | The default JupyterLab instance can be connected and used as a Colab backend. |
| 2018-07-31 | CUDA 9.2 support |  | Deep Learning VM Images were upgraded to support CUDA 9.2. |
| 2018-07-31 | TensorFlow Serving |  | Deep Learning VM Images include the TensorFlow Serving model server binary and API package preinstalled. |
| 2018-07-17 | CUDA 9.0 common image |  | Deep Learning VM Images include a new common image based on CUDA 9.0. |
| 2018-07-11 | TensorFlow 1.9.0 |  | Deep Learning VM Images were updated to include TensorFlow version 1.9.0. |

Source file slug: `deep-learning-vm-images.md`

