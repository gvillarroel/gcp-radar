---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.894Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Exporting streaming persistent volumes to permanent storage"
feature_slug: "exporting-streaming-persistent-volumes-to-permanent-storage"
latest_feature_date: "2019-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mounting-external-volumes"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/migrate-data"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system"
keywords:
  - "exporting"
  - "streaming"
  - "persistent"
  - "volumes"
  - "permanent"
  - "storage"
  - "feature"
  - "lets"
---

# Exporting streaming persistent volumes to permanent storage

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

This feature lets you monitor the export of short-term storage to a persistent volume using kubectl.

## Extended Definition

This feature lets you monitor the export of short-term storage to a persistent volume using kubectl.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mounting-external-volumes](https://docs.cloud.google.com/migrate/containers/docs/mounting-external-volumes)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/migrate-data](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/migrate-data)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)

## Supporting Pages

### Mount external volumes \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mounting-external-volumes](https://docs.cloud.google.com/migrate/containers/docs/mounting-external-volumes)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The example below mounts the volume emptydir to /tmp . apiVersion : apps/v1 kind : StatefulSet metadata : creationTimestamp : null labels : app : app-my-vm-instance-1 migrate-for-anthos-type : workload name : app-my-vm-instance-1 spec : replicas : 1 selector : matchLabels : app : app-my-vm-instance-1 migrate-for-anthos-type : workload serviceName : app-my-vm-instance-1 template : metadata : creationTimestamp : null labels : app : app-my-vm-instance-1 migrate-for-anthos-type : workload spec : containers : - image : gcr.io/my-project/my-vm-instance-1:v1.0.0 name : app-my-vm-instance-1 readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true volumeMounts : - name : emptydir mountPath : /tmp - mountPath : /sys/fs/cgroup name : cgroups - mountPath : /code/config/logs/ name : logs-config - mountPath : /<folder> name : pvc-my-vm-instance-1 subPath : < folder > volumes : - name : emptydir emptyDir : {} - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups - configMap : name : app-my-vm-instance-1 name : logs-config - name : pvc-my-vm-instance-1 persistentVolumeClaim : claimName : pvc-my-vm-instance-1 updateStrategy : {} status : replicas : 0 What's next Learn how to deploy a Linux workload to a target cluster .
- To add external volumes to a Migrate to Containers workload: Add the volume to the StatefulSet in spec.containers.volumeMounts .
- Mount external volumes This topic explains how to mount additional volumes to a workload migrated with Migrate to Containers.
- You might want to do this when your workload depends on an external volume that is not copied to a Persistent Volume.

### Migrate data \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/migrate-data](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/migrate-data)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Create new data volumes on your migrated VMs If you've not allocated storage ahead of time, and you want your storage to be created during the migration process, you can pass an empty existingPvc field and specify the storage you would like to be created in the newPvc field: volumes : - deploymentPvcName : my-pvc newPvc : spec : accessModes : - ReadWriteOnce resources : requests : storage : 10G folders : - /bin - /opt Note: If you don't want to worry about the specifics of your backing storage, use an empty string for the storage class, as shown in the preceding yaml.
- Migrate multiple PVCs with multiple file paths You can specify the set of directories under the folders list field of each entry in the volume list for each PVC listed in your data configuration file dataConfig.yaml : volumes : - deploymentPvcName : my-pvc1 existingPvc : name : my-pvc1 folders : - /bin - /opt - deploymentPvcName : my-pvc2 newPvc : spec : accessModes : - ReadWriteOnce resources : requests : storage : 10G folders : - /bin - /opt The paths you list under folders in the data configuration file are copied to the same paths in the target PVCs.
- Following is an example of a data configuration file: volumes : - deploymentPvcName : my-pvc1 existingPvc : name : my-pvc1 folders : - /bin - /opt - deploymentPvcName : my-pvc2 newPvc : spec : accessModes : - ReadWriteOnce resources : requests : storage : 10G folders : - /bin - /opt Where: deploymentPvcName : The PVC name to be used by Migrate to Containers in your deployed workload to access this volume.
- You can edit your data configuration file for several data migration use cases, including: Using an existing PVC Creating new volumes on your migrated VM Migrating multiple PVCs with multiple file paths Use an existing PVC If you've already allocated the storage for your migrated data, and have a PVC to store your data, you can migrate your data using an existing PVC.

### "Copy the source machine's file system \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To export an image from Compute Engine, perform the following steps: Export the image to Cloud Storage using the gcloud compute images export command : gcloud compute images export \ --export-format vhdx \ --destination-uri DESTINATION URI \ --image IMAGE NAME Replace the following: DESTINATION URI : the Cloud Storage URI destination for the exported image file.
- Download the image on your local machine: gcloud storage cp DESTINATION URI LOCAL PATH Replace the following: DESTINATION URI : the Cloud Storage URI destination of the exported image file LOCAL PATH : the path to the local folder where you want to download the image For more information, see Export a custom image to Cloud Storage .
- Note: When you create the JSON file for exporting an image, omit the ContainerFormat field, and set DiskImageFormat to "VHD" .
- However, Migrate to Containers CLI does not support exporting disk images from your source platform to your local machine.

