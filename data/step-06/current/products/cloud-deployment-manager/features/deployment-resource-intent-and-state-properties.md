---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.021Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Deployment resource intent and state properties"
feature_slug: "deployment-resource-intent-and-state-properties"
latest_feature_date: "2015-07-22"
deprecation_date: "2015-07-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment"
  - "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources"
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments"
keywords:
  - "deployment"
  - "resource"
  - "intent"
  - "state"
  - "properties"
  - "manager"
  - "removed"
  - "resources"
---

# Deployment resource intent and state properties

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager removed the intent and state properties from Deployment resources; deprecated on 2015-07-22.

## Extended Definition

Deployment Manager removed the intent and state properties from Deployment resources; deprecated on 2015-07-22.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
- [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources)
- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)

## Supporting Pages

### "Quickstart: Manage Google Cloud resources as a deployment \_|\_ Cloud Deployment\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Check on your new deployment To check the status of the deployment, run the following command: gcloud deployment-manager deployments describe quickstart-deployment You see a description of the deployment, including its start and end time, the resources created, and any warnings or errors: fingerprint: xmVVeTtPq-5rr8F-vWFlrg == id: '54660732508021769' insertTime: '2016-03-09T04:45:26.032-08:00' manifest: https://www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/my-first-deployment/manifests/manifest-1457527526037 name: quickstart-deployment operation: endTime: '2016-03-09T04:46:19.480-08:00' id: '8993923014899639305' kind: deploymentmanager#operation name: operation-1457527525951-52d9d126f4618-f1ca6e72-3404bd3b operationType: insert progress: 100 startTime: '2016-03-09T04:45:27.275-08:00' status: DONE ... resources: NAME TYPE STATE ERRORS quickstart-deployment-vm compute.v1.instance COMPLETED - Review your resources After you have created the deployment, you can review your resources in Google Cloud console.
- For a list of supported resources, see https://cloud.google.com/deployment-manager/docs/configuration/supported-resource-types. resources : - type : compute.v1.instance name : quickstart-deployment-vm properties : The properties of the resource depend on the type of resource.
- Deploy the resources To deploy your resources, use the Google Cloud CLI to create a new deployment, using your configuration file: gcloud deployment-manager deployments create quickstart-deployment --config vm.yaml If the deployment is successful, you receive a message similar to the following example: Create operation operation-1432319707382-516afeb5d00f1-b864f0e7-b7103978 completed successfully.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps. gcloud deployment-manager deployments delete quickstart-deployment Type y at the prompt: The following deployments will be deleted: - quickstart-deployment Do you want to continue (y/N)?

### "Deploying Your Resources \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- To delete this deployment, run: gcloud deployment-manager deployments delete deployment-with-2-vms Next, you will use references to access the properties of other resources in your deployment.
- To get a list of resources you created, run: gcloud deployment-manager resources list --deployment deployment-with-2-vms To get more detailed information about the deployment, such as the start and end time, and the operation ID if you need to debug a deployment, run: gcloud deployment-manager deployments describe deployment-with-2-vms In this example, you created some static configurations that were hard-coded.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Deploying Your Resources Stay organized with collections Save and categorize content based on your preferences.
- NAME TYPE STATE ERRORS INTENT the-first-vm compute.v1.instance COMPLETED [] the-second-vm compute.v1.instance COMPLETED [] You have created a deployment!

### "Updating a Deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following API request previews a simple update: PUT https : //www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment?preview=true { "target" : { "config" : { "content" : "resources:\n- name: vm-created-by-cloud-config\n type: compute.v1.instance\n properties:\n zone: us-central1-a\n machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/n1-standard-1\n disks:\n - deviceName: boot\n type: PERSISTENT\n boot: true\n autoDelete: true\n initializeParams:\n diskName: disk-created-by-cloud-config\n sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20180716\n networkInterfaces:\n - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default" } }, "name" : "example-deployment" } After previewing a deployment, you can fully deploy the configuration by making the same PUT() request, omitting both the configuration and the preview query parameter.
- PUT https : //www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment?createPolicy=ACQUIRE&deletePolicy=ABANDON { "target" : { "config" : { "content" : "resources:\n- name: vm-created-by-cloud-config\n type: compute.v1.instance\n properties:\n zone: us-central1-a\n machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/n1-standard-1\n disks:\n - deviceName: boot\n type: PERSISTENT\n boot: true\n autoDelete: true\n initializeParams:\n diskName: disk-created-by-cloud-config\n sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20180716\n networkInterfaces:\n - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default" } }, "name" : "example-deployment" , "fingerprint" : "nU2v7bzeA7gBBI8bdbtmFg==" } Stop an update You can stop an update that is in progress using the stop() . method.
- Deployment Manager does not instantiate any actual resources when you preview a configuration, giving you the opportunity to see the deployment before committing to it. gcloud With the Google Cloud CLI, make an update request with the --preview parameter: gcloud deployment-manager deployments update example-deployment \ --config configuration-file.yaml \ --preview API In the API, create a PUT() request with an existing deployment and provide the preview=true query parameter.
- Policies for adding resources When adding resources, you can choose to create a new resource and add it to a deployment or you can acquire an existing resource: CREATE OR ACQUIRE - [Default] Deployment Manager acquires resources that exist in the project, or creates resources if they do not exist.

