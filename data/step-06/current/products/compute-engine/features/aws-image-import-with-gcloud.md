---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.186Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "AWS image import with gcloud"
feature_slug: "aws-image-import-with-gcloud"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4"
  - "https://developers.google.com/compute/docs/gcloud-compute/tips"
  - "https://docs.cloud.google.com/compute/docs/gcloud-compute/tips"
keywords:
  - "aws"
  - "image"
  - "import"
  - "gcloud"
  - "cli"
  - "can"
  - "vm"
  - "images"
---

# AWS image import with gcloud

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

The gcloud CLI can import VM images from AWS into Google Cloud; AWS image import with gcloud lets you import VM images from AWS into Google Cloud using the command-line tool.

## Extended Definition

The gcloud CLI can import VM images from AWS into Google Cloud; AWS image import with gcloud lets you import VM images from AWS into Google Cloud using the command-line tool.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4)
- [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips)
- [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips)

## Supporting Pages

### "Running TensorFlow inference workloads with TensorRT5 and NVIDIA T4 GPU\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4](https://docs.cloud.google.com/compute/docs/tutorials/ml-inference-t4)
- Source ID: `site-docs-reference-required-6`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create firewall rules, run the following commands: gcloud compute firewall-rules create www-firewall-80 \ --target-tags http-server --allow tcp:80 gcloud compute firewall-rules create www-firewall-8888 \ --target-tags http-server --allow tcp:8888 Running an inference You can use the following python script to convert images to a format that can uploaded to the server. from PIL import Image import numpy as np import json import codecs img = Image.open("image.jpg").resize((240, 240)) img array=np.array(img) result = { "instances":[img array.tolist()] } file path="/tmp/out.json" print(json.dump(result, codecs.open(file path, 'w', encoding='utf-8'), separators=(',', ':'), sort keys=True, indent=4)) Run the inference. curl -X POST $IP/v1/models/default:predict -d @/tmp/out.json Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- For the latest image versions, see Choosing an operating system in the Deep Learning VM Images documentation. export IMAGE FAMILY= "tf-ent-2-10-cu113" export ZONE= "us-central1-b" export INSTANCE NAME="model-prep" gcloud compute instances create $INSTANCE NAME \ --zone=$ZONE \ --image-family=$IMAGE FAMILY \ --machine-type=n1-standard-8 \ --image-project=deeplearning-platform-release \ --maintenance-policy=TERMINATE \ --accelerator="type=nvidia-tesla-t4,count=1" \ --metadata="install-nvidia-driver=True" Note: You can create this instance in any available zone that supports T4 GPUs.
- Replace YOUR PROJECT NAME with your project ID. export INSTANCE TEMPLATE NAME="tf-inference-template" export IMAGE FAMILY= "tf-ent-2-10-cu113" export PROJECT NAME= YOUR PROJECT NAME gcloud beta compute --project=$PROJECT NAME instance-templates create $INSTANCE TEMPLATE NAME \ --machine-type=n1-standard-16 \ --maintenance-policy=TERMINATE \ --accelerator=type=nvidia-tesla-t4,count=4 \ --min-cpu-platform=Intel\ Skylake \ --tags=http-server,https-server \ --image-family=$IMAGE FAMILY \ --image-project=deeplearning-platform-release \ --boot-disk-size=100GB \ --boot-disk-type=pd-ssd \ --boot-disk-device-name=$INSTANCE TEMPLATE NAME \ --metadata startup-script-url=gs://cloud-samples-data/dlvm/t4/start agent and inf server 4.sh This instance template includes a startup script that is specified by the metadata parameter.
- This multi-zone cluster is configured as follows: Built on Deep Learning VM Images .

### gcloud compute usage tips \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gcloud-compute/tips](https://docs.cloud.google.com/compute/docs/gcloud-compute/tips)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following two commands illustrate a scenario when you can list images to get an image name and its associated project so that you can provide these as inputs to a describe command: gcloud compute images list NAME PROJECT FAMILY DEPRECATED STATUS ... centos-7-v20170620 centos-cloud centos-7 READY ... debian-9-stretch-v20170619 debian-cloud debian-9 READY ... gcloud compute images describe debian-9-stretch-v20170619 --project debian-cloud The default output from describe commands is YAML format, but you can use the --format flag to choose between JSON, YAML, and text output formats.
- For example, filter the list of instances to include only the instances with "test" in the instance name: gcloud compute instances list --filter="name . test. " NAME ZONE MACHINE TYPE INTERNAL IP EXTERNAL IP STATUS test-instance us-central1-a e2-standard-2 10.240.118.207 23.251.153.172 RUNNING To return a list of zone operations that have a status of DONE and don't have an httpStatus of 200 , apply a zone filter on an operations list command, then grep the results: gcloud compute operations list --filter="zone:(us-central1-a)" grep DONE grep -v 200 NAME HTTP STATUS TYPE TARGET STATUS operation-1397752585735-4f73fa25b4b58-f0920fd5-254d709f 400 delete us-central1-a/disks/example-instance DONE operation-1398357613036-4f7cc80cb41e0-765bcba6-34bbd040 409 insert us-central1-a/instances/i-1 DONE operation-1398615481237-4f8088aefbe08-cc300dfa-2ce113cf 409 insert us-central1-a/instances/i-2 DONE To get a list of list of disks in us-central1-a , sorted in descending order by name ( --sort-by NAME ), use a disks list command: gcloud compute disks list --sort-by NAME --filter="zone:(us-central1-a)" In some scenarios, you may want to have the full URI link to the resource, such as requests where you are passing the output from a list command to another command or application that takes a list of resource links.
- The following command gets instance settings in JSON format ( --format json ). gcloud compute instances describe example-instance \ --zone us-central1-a --format json { ... "name": "example-instance", "networkInterfaces": [ { "accessConfigs": [ { "kind": "compute#accessConfig", "name": "external-nat", "natIP": "107.167.187.66", "type": "ONE TO ONE NAT" } ], "name": "nic0", "network": "https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default", "networkIP": "10.240.111.51" } ], ... "status": "RUNNING" ... } Checking which user you are authorized as Use the following command to find out which account you are authorizes as, use: gcloud auth list Revoking a refresh token To revoke the credentials for an account on the machine where you are using the Google Cloud CLI, use: gcloud auth revoke This will force you to use re-authenticate using gcloud init .
- JSON formatted output can be useful if you are parsing the output, while text formatted output puts each property on a separate line. gcloud compute regions describe us - central1 -- format json { "creationTimestamp": "2013-09-06T10:36:54.847-07:00", "description": "us-central1", "id": "6837843067389011605", "kind": "compute#region", "name": "us-central1", ... "status": "UP", "zones": [ "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a", "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-b", "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-f" ] } Examples Examples of list commands When you list resources, you get an easy-to-read table of summary data.

### gcloud compute usage tips \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gcloud-compute/tips](https://developers.google.com/compute/docs/gcloud-compute/tips)
- Source ID: `site-docs-root-3`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following two commands illustrate a scenario when you can list images to get an image name and its associated project so that you can provide these as inputs to a describe command: gcloud compute images list NAME PROJECT FAMILY DEPRECATED STATUS ... centos-7-v20170620 centos-cloud centos-7 READY ... debian-9-stretch-v20170619 debian-cloud debian-9 READY ... gcloud compute images describe debian-9-stretch-v20170619 --project debian-cloud The default output from describe commands is YAML format, but you can use the --format flag to choose between JSON, YAML, and text output formats.
- For example, filter the list of instances to include only the instances with "test" in the instance name: gcloud compute instances list --filter="name . test. " NAME ZONE MACHINE TYPE INTERNAL IP EXTERNAL IP STATUS test-instance us-central1-a e2-standard-2 10.240.118.207 23.251.153.172 RUNNING To return a list of zone operations that have a status of DONE and don't have an httpStatus of 200 , apply a zone filter on an operations list command, then grep the results: gcloud compute operations list --filter="zone:(us-central1-a)" grep DONE grep -v 200 NAME HTTP STATUS TYPE TARGET STATUS operation-1397752585735-4f73fa25b4b58-f0920fd5-254d709f 400 delete us-central1-a/disks/example-instance DONE operation-1398357613036-4f7cc80cb41e0-765bcba6-34bbd040 409 insert us-central1-a/instances/i-1 DONE operation-1398615481237-4f8088aefbe08-cc300dfa-2ce113cf 409 insert us-central1-a/instances/i-2 DONE To get a list of list of disks in us-central1-a , sorted in descending order by name ( --sort-by NAME ), use a disks list command: gcloud compute disks list --sort-by NAME --filter="zone:(us-central1-a)" In some scenarios, you may want to have the full URI link to the resource, such as requests where you are passing the output from a list command to another command or application that takes a list of resource links.
- The following command gets instance settings in JSON format ( --format json ). gcloud compute instances describe example-instance \ --zone us-central1-a --format json { ... "name": "example-instance", "networkInterfaces": [ { "accessConfigs": [ { "kind": "compute#accessConfig", "name": "external-nat", "natIP": "107.167.187.66", "type": "ONE TO ONE NAT" } ], "name": "nic0", "network": "https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default", "networkIP": "10.240.111.51" } ], ... "status": "RUNNING" ... } Checking which user you are authorized as Use the following command to find out which account you are authorizes as, use: gcloud auth list Revoking a refresh token To revoke the credentials for an account on the machine where you are using the Google Cloud CLI, use: gcloud auth revoke This will force you to use re-authenticate using gcloud init .
- JSON formatted output can be useful if you are parsing the output, while text formatted output puts each property on a separate line. gcloud compute regions describe us - central1 -- format json { "creationTimestamp": "2013-09-06T10:36:54.847-07:00", "description": "us-central1", "id": "6837843067389011605", "kind": "compute#region", "name": "us-central1", ... "status": "UP", "zones": [ "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a", "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-b", "https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-f" ] } Examples Examples of list commands When you list resources, you get an easy-to-read table of summary data.

