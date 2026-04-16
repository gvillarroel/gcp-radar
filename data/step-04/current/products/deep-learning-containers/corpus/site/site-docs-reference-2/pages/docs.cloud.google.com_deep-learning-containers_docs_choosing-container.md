---
title: "Choose a container image \_|\_ Deep Learning Containers \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deep-learning-containers/docs/choosing-container
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-containers/docs/kubernetes-container
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-containers/docs/choosing-container
  title: "Choose a container image \_|\_ Deep Learning Containers \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Deep Learning Containers
Guides
Send feedback
Choose a container image
Stay organized with collections
Save and categorize content based on your preferences.
This page helps you choose which container image to use.
Choose a container image type
Deep Learning Containers supports each framework version based on a schedule to
minimize security vulnerabilities. Review the Deep Learning Containers framework
support policy to understand the
implications of the end-of-support and end-of-availability dates.
Each container image provides a Python 3 environment and includes the
selected data science framework (such as PyTorch or TensorFlow), Conda, the
NVIDIA stack for GPU images (CUDA, cuDNN, NCCL2), and many other
supporting packages and tools. To find the appropriate container image,
see the tables below.
Base versions
ML framework version
Current patch version
Supported accelerators
End of patch and support date
End of availability date
Image family name
Base-cu124
CUDA 12.4 (Python 3.10)
CUDA 12.4
April 1, 2025
April 1, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu124.py310
Base-cu123
CUDA 12.3 (Python 3.10)
CUDA 12.3
Jan 1, 2025
Jan 1, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu123.py310
Base-cu122
CUDA 12.2 (Python 3.10)
CUDA 12.2
Jan 8, 2025
Jan 8, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu122.py310
Base-cu121
CUDA 12.1 (Python 3.10)
CUDA 12.1
Feb 28, 2024
Feb 28, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu121.py310
Base-cu118
CUDA 11.8 (Python 3.10)
CUDA 11.8
Jul 1, 2024
Jul 1, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu118.py310
Base-cu113 (Python 3.10)
CUDA 11.3
CUDA 11.3
Jan 1, 2024
Jan 1, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu113.py310
Base-cu113 (Python 3.7)
CUDA 11.3
CUDA 11.3
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu113.py37
Base-cu110 (Python 3.10 / Debian 11)
CUDA 11.0
CUDA 11.0
Jan 1, 2024
Jan 1, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu110.py310
Base-cu110 (Python 3.7)
CUDA 11.0
CUDA 11.0
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/base-cu110.py37
TensorFlow versions
ML framework version
Current patch version
Supported accelerators
End of patch and support date
End of availability date
Image family name
2.17 (Python 3.10)
2.17.0
CPU only
Jul 11, 2025
Jul 11, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-17.py310
2.17 (Python 3.10)
2.17.0
CUDA 12.3
Jul 11, 2025
Jul 11, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cu123.2-17.py310
2.16 (Python 3.10)
2.16.2
CPU only
Jun 28, 2025
Jun 28, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-16.py310
2.16 (Python 3.10)
2.16.2
CUDA 12.3
Jun 28, 2025
Jun 28, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cu123.2-16.py310
2.15 (Python 3.10)
2.15.0
CPU only
Nov 14, 2024
Nov 14, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-15.py310
2.15 (Python 3.10)
2.15.0
CUDA 12.1
Nov 14, 2024
Nov 14, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cu121.2-15.py310
2.14 (Python 3.10)
2.14.0
CPU only
Sep 26, 2024
Sep 26, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-14.py310
2.14 (Python 3.10)
2.14.0
CUDA 11.8
Sep 26, 2024
Sep 26, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cu118.2-14.py310
2.13 (Python 3.10)
2.13.0
CPU only
Jul 5, 2024
Jul 5, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-13.py310
2.13 (Python 3.10)
2.13.0
CUDA 11.8
Jul 5, 2024
Jul 5, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cu118.2-13.py310
2.12 (Python 3.10)
2.12.0
CPU only
Jun 30, 2024
Jun 30, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-12.py310
2.12 (Python 3.10)
2.12.0
CUDA 11.8
Jun 30, 2024
Jun 30, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cu118.2-12.py310
2.11 (Python 3.10)
2.11.0
CPU only
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-11.py310
2.11 (Python 3.10)
2.11.0
CUDA 11.3
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-cu113.2-11.py310
2.11
2.11.0
CPU only
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-11.py37
2.11
2.11.0
CUDA 11.3
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-gpu.2-11.py37
2.10 (Python 3.10)
2.10.1
CPU only
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-10.py310
2.10 (Python 3.10)
2.10.1
CUDA 11.3
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-cu113.2-10.py310
2.10
2.10.1
CPU only
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-10.py37
2.10
2.10.1
CUDA 11.3
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-gpu.2-10.py37
2.9
2.9.3
CPU only
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-9.py37
2.9
2.9.3
CUDA 11.3
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-gpu.2-9.py37
2.8
2.8.4
CPU only
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-cpu.2-8.py37
2.8
2.8.4
CUDA 11.3
Nov 15, 2023
Nov 15, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf2-gpu.2-8.py37
2.6 (Python 3.9)
2.6.5
CPU only
Aug 10, 2023
Aug 10, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-cpu.2-6.py39
2.6 (Python 3.9)
2.6.5
CUDA 11.3
Aug 10, 2023
Aug 10, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-cu113.2-6.py39
2.6 (Python 3.7)
2.6.5
CPU only
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-cpu.2-6.py37
2.6 (Python 3.7)
2.6.5
CUDA 11.3
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-gpu.2-6.py37
2.3
2.3.4
CPU only
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-cpu.2-3.py37
2.3
2.3.4
CUDA 11.3
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/tf-gpu.2-3.py37
PyTorch versions
ML framework version
Current patch version
Supported accelerators
End of patch and support date
End of availability date
Image family name
2.4 (Python 3.10)
2.4.0
CUDA 12.4
Jul 24, 2025
Jul 24, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu124.2-4.py310
2.3 (Python 3.10)
2.3.0
CUDA 12.1
Apr 24, 2025
Apr 24, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu121.2-3.py310
2.2 (Python 3.10)
2.2.0
CUDA 12.1
Jan 30, 2025
Jan 30, 2026
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu121.2-2.py310
2.1 (Python 3.10)
2.1.0
CUDA 12.1
Oct 4, 2024
Oct 4, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu121.2-1.py310
2.0 (Python 3.10)
2.0.0
CUDA 11.8
Mar 15, 2024
Mar 15, 2025
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu118.2-0.py310
1.13 (Python 3.10)
1.13.1
CUDA 11.8
Dec 8, 2023
Dec 8, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu118.1-13.py310
1.13
1.13.1
CUDA 11.8
Dec 8, 2023
Dec 8, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-gpu.1-13.py37
1.12 (Python 3.10)
1.12.1
CUDA 11.3
Dec 8, 2023
Dec 8, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-cu113.1-12.py310
1.12
1.12.1
CUDA 11.3
Sep 1, 2023
Sep 1, 2024
us-docker.pkg.dev/deeplearning-platform-release/gcr.io/pytorch-gpu.1-12.py37
Model Garden container images
This section lists the available Model Garden
container images.
vLLM inference containers
Framework version
Current patch version
Supported accelerators
End of patch and support date
End of availability date
Image family name
PyTorch 2.4
2.4.0
CUDA 12.1
Aug 21, 2025
Aug 21, 2026
us-docker.pkg.dev/deeplearning-platform-release/vertex-model-garden/vllm-inference.cu121.0-5.ubuntu2204.py310
Experimental image families
Image families that aren't listed here are experimental. Experimental image
families are supported on a best-effort basis, and don't receive refreshes on
every new release of the framework.
Listing all available versions
If you need a specific framework or CUDA version, search
the complete list of available container images. To list all available
Deep Learning Containers images, use the following command in
the Google Cloud CLI with your preferred terminal or in
Cloud Shell .
gcloud container images list --repository="us-docker.pkg.dev/deeplearning-platform-release/gcr.io"
Using locally
Deep Learning Containers can be pulled and used locally. To do so, see
Getting started with a local deep learning
container .
View vulnerability occurrences
To view vulnerability occurrences for a Deep Learning Containers image,
see View occurrences using
gcloud .
What's next
Read the Deep Learning Containers overview to
learn more about what is pre-installed on container images.
Get started with Deep Learning Containers by walking through
the How-to guides ,
which provide instructions on how to build and push deep learning container
images.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
