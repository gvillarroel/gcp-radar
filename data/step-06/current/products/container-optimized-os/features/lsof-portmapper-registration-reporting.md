---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.093Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "lsof portmapper registration reporting"
feature_slug: "lsof-portmapper-registration-reporting"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
keywords:
  - "lsof"
  - "portmapper"
  - "registration"
  - "reporting"
  - "can"
  - "report"
  - "registrations"
  - "included"
---

# lsof portmapper registration reporting

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Lsof can report portmapper registrations and be included correctly in SOS reports; Container-Optimized OS enables lsof to report portmapper registrations.

## Extended Definition

Lsof can report portmapper registrations and be included correctly in SOS reports; Container-Optimized OS enables lsof to report portmapper registrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)

## Supporting Pages

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collecting the sosreport data To generate a sosreport: Connect to the instance using the gcloud compute ssh command. gcloud compute ssh [INSTANCE NAME] --zone [ZONE] --project [PROJECT ID] Check the OS version: sudo cat /etc/os-release egrep -w 'NAME VERSION' The output is similar to the following: NAME="Container-Optimized OS" VERSION=105 Run the sos command that corresponds to your OS version: COS 85 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo toolbox sudo apt install sosreport -y COS 105 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo toolbox sudo apt install sosreport -y Ubuntu-18 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo apt install sosreport Ubuntu-20 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo apt install sosreport You can change the directory where the report is stored by passing a different directory to the --tmp-dir option.
- Download the report To download the report to your local machine, use the gcloud compute scp command: gcloud compute scp $(whoami)@ [INSTANCE NAME] : [PATH/TO/FILE] [LOCAL/PATH/TO/DIRECTORY] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TARBALL= [PATH/TO/TARBALL] sudo chown $(whoami) $TARBALL chmod +r $TARBALL Then, if you want to view the content of the report on the node, you can extract it by running below command: tar xvf $TARBALL The individual report files are now available in a directory in the same location as the .tar.xz .
- Your sosreport has been generated and saved in: /var/sosreport-cos-20181106231224.tar.xz The checksum is: 5a8b97c6020346a688254c8b04ef86ec Viewing the collected data The report is owned by root and is not readable by other users.

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Scanning COS images with Oval vulnerability feed \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- In this case, we use OpenSCAP : oscap oval eval --report report.html cos-109.oval.xml Note that the cos-package-info.json file and the COS Oval feed need to be in the same directory.
- As such, you can fix all open vulnerabilities reported by the scanner on your system by updating to the latest COS image for that particular milestone.
- How to fix vulnerabilities reported by the scanner The feed lists all the vulnerabilities fixed in the latest COS image.

