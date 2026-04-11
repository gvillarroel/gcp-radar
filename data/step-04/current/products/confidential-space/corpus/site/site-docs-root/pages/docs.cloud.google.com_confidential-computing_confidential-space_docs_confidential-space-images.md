---
title: "Confidential Space images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images
  title: "Confidential Space images \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Confidential Space
Guides
Send feedback
Confidential Space images
Stay organized with collections
Save and categorize content based on your preferences.
A Confidential Space image is a minimal, single-purpose OS that's run on a
Confidential VM instance. It's
designed to run a single
workload only once, without
persistent storage. That workload is layered on top of the Confidential Space image
using Docker .
Confidential Space images are built on the existing security enhancements of
Container-Optimized OS
and add the following benefits:
Encrypted disk partitions with integrity protection
Authenticated, encrypted network connections
Various boot measurements
Disabled remote access and cloud-specific tooling
Types of images
Confidential Space images are available in two variants:
Production: The production image is used for running real production workloads
with real production data. It is locked down to prevent the workload operator
from accessing the processed data. For more information, see
Confidential Space security overview .
Debug: The debug image is used for
testing your workload on non-production
data. SSH is enabled on the debug image, and the operator has root access to
the VM that runs the workload. The VM running the debug image doesn't stop
after the workload is complete.
You can set which image type to use when you
deploy the workload .
Confidential Space image lifecycle
When you create a Confidential VM using a Confidential Space image, the latest version
of the image is used. If you always delete your Confidential VM when your workload
is done and create a new one each time you run the workload, then you can be
sure the image is up to date.
However, long-running workloads or running a workload on a VM created in the
past opens you up to the risk of using an outdated Confidential Space image, which
might introduce security vulnerabilities.
To mitigate this, a data collaborator can
use support attributes
to check if a production Confidential Space image version running on a VM is
recent, and deny it access to their data if it doesn't pass.
There are three support attributes:
LATEST : This is the latest version of the image, and is supported and
monitored for vulnerabilities. The LATEST image is also STABLE and
USABLE .
STABLE : This version of the image is supported and monitored for
vulnerabilities. A STABLE image is also USABLE .
USABLE : An image with only this attribute is out of support. Use it at your
own risk.
Note: Debug images don't have support attributes. When testing workloads, data
collaborators need to remove checks for support attributes from their workload
identity pools.
Image versions
You can view the latest Confidential Space images with the following gcloud
command:
gcloud compute images list \
--project = confidential-space-images \
--no-standard-images
The following flags can change the returned images in the results:
Add the --show-deprecated flag to show older images.
Add --filter="family~'confidential-space$'" flag to show production images.
Add --filter="family~'confidential-space-debug$'" flag to show debug images.
The following tables detail the available Confidential Space image versions and
their support attributes.
Production images
The following table contains Confidential Space image production versions.
Image name
Container-Optimized OS version
Released
LATEST image
confidential-space-260100
cos-tdx-113-18244-521-56
2026-02-21
STABLE images
confidential-space-251200
cos-tdx-113-18244-521-41
2025-12-16
confidential-space-251001
cos-tdx-113-18244-448-63
2025-10-13
confidential-space-251000
cos-tdx-113-18244-448-63
2025-10-03
confidential-space-250800
cos-tdx-113-18244-382-54
2025-09-02
confidential-space-250301
cos-tdx-113-18244-291-63
2025-03-31
confidential-space-250300
cos-tdx-113-18244-291-46
2025-03-31
confidential-space-250100
cos-113-18244-236-88
2025-01-14
confidential-space-241000
cos-113-18244-151-96
2024-10-18
confidential-space-240900
cos-113-18244-151-80
2024-10-01
confidential-space-240800
cos-113-18244-151-14
2024-09-03
confidential-space-240700
cos-113-18244-85-54
2024-07-31
confidential-space-240500
cos-dev-117-18374-0-0
2024-05-30
confidential-space-240402
cos-dev-117-18342-0-0
2024-04-22
confidential-space-240200
cos-dev-113-18146-0-0
2024-02-28
confidential-space-231201
cos-dev-113-18059-0-0
2023-12-14
confidential-space-231200
cos-dev-113-18054-0-0
2023-12-05
confidential-space-231001
cos-dev-113-17965-0-0
2023-11-03
confidential-space-230901
cos-dev-113-17877-0-0
2023-10-02
confidential-space-230600
cos-dev-109-17637-0-0
2023-06-09
confidential-space-2302-0
cos-dev-105-17234-0-0
2023-03-02
confidential-space-2212-0
cos-dev-105-17234-0-0
2022-12-01
Debug images
The following table contains Confidential Space image debug versions.
Image name
Container-Optimized OS version
Released
confidential-space-debug-260100
cos-tdx-113-18244-521-56
2026-02-21
confidential-space-debug-251200
cos-tdx-113-18244-521-41
2025-12-16
confidential-space-debug-251001
cos-tdx-113-18244-448-63
2025-10-13
confidential-space-debug-251000
cos-tdx-113-18244-448-63
2025-10-03
confidential-space-debug-250800
cos-tdx-113-18244-382-54
2025-09-02
confidential-space-debug-250301
cos-tdx-113-18244-291-63
2025-03-31
confidential-space-debug-250300
cos-tdx-113-18244-291-46
2025-03-31
confidential-space-debug-250100
cos-113-18244-236-88
2025-01-14
confidential-space-debug-241000
cos-113-18244-151-96
2024-10-01
confidential-space-debug-240900
cos-113-18244-151-80
2024-10-01
confidential-space-debug-240800
cos-113-18244-151-14
2024-09-03
confidential-space-debug-240700
cos-113-18244-85-54
2024-07-31
confidential-space-debug-240500
cos-dev-117-18374-0-0
2024-05-30
confidential-space-debug-240402
cos-dev-117-18342-0-0
2024-04-22
confidential-space-debug-240200
cos-dev-113-18146-0-0
2024-02-28
confidential-space-debug-231201
cos-dev-113-18059-0-0
2023-12-14
confidential-space-debug-231200
cos-dev-113-18054-0-0
2023-12-05
confidential-space-debug-231001
cos-dev-113-17965-0-0
2023-11-03
confidential-space-debug-230901
cos-dev-113-17877-0-0
2023-10-02
confidential-space-debug-230600
cos-dev-109-17637-0-0
2023-06-09
confidential-space-debug-2302-0
cos-dev-105-17234-0-0
2023-03-02
confidential-space-debug-2212-0
cos-dev-105-17234-0-0
2022-12-01
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
