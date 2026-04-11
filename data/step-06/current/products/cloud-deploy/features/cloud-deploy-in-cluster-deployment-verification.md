---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.774Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy in-cluster deployment verification"
feature_slug: "cloud-deploy-in-cluster-deployment-verification"
latest_feature_date: "2023-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-verification"
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-canary"
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
keywords:
  - "deploy"
  - "in"
  - "cluster"
  - "deployment"
  - "verification"
  - "now"
  - "supports"
  - "the"
---

# Cloud Deploy in-cluster deployment verification

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy now supports deployment verification in the same cluster where the application is running for GKE and Anthos.

## Extended Definition

Cloud Deploy now supports deployment verification in the same cluster where the application is running for GKE and Anthos.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)

## Supporting Pages

### "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-verification](https://docs.cloud.google.com/deploy/docs/deploy-app-verification)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE mkdir deploy-verification-gke-quickstart cd deploy-verification-gke-quickstart Cloud Run mkdir deploy-verification-run-quickstart cd deploy-verification-run-quickstart Create your delivery pipeline and target definition: GKE In the deploy-verification-gke-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - gke - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : verification staging cluster gke : cluster : projects / PROJECT ID / locations / us - central1 / clusters / deploy - verification - cluster Cloud Run In the deploy-verification-run-quickstart directory, create a new file: clouddeploy.yaml , with the following contents: apiVersion : deploy . cloud . google . com / v1 kind : DeliveryPipeline metadata : name : deploy - verification - demo - app - run - 1 description : main application pipeline serialPipeline : stages : - targetId : verify - staging profiles : [] strategy : standard : verify : tasks : - type : container image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , ' echo "Your test or tests would go here." ' ] --- apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : verify - staging description : staging Run service run : location : projects / PROJECT ID / locations / us - central1 Note: In this file, the target is included with the delivery pipeline, but you can define targets in a separate file or multiple separate files.
- Delete the GKE cluster or Cloud Run service: GKE gcloud container clusters delete deploy - verification - cluster -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete my - verification - run - service -- region = us - central1 -- project = PROJECT ID Delete the delivery pipeline, target, release, and rollout: gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT ID Delete the Cloud Storage buckets that Cloud Deploy created.
- GKE Create a file named k8s-pod.yaml , with the following contents: apiVersion: v1 kind: Pod metadata: name: my-verification-pod spec: containers: - name: nginx image: my-app-image This file is a basic Kubernetes manifest , which is applied to the cluster to deploy the application.
- Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT ID You now have a delivery pipeline, with one target, ready to deploy your application and verify that deployment.

### "Quickstart: Canary-deploy an application to a target \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-canary](https://docs.cloud.google.com/deploy/docs/deploy-app-canary)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- In this quickstart, we create one file for our pipeline and our single target: GKE Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: serviceNetworking: service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster GKE + Gateway API Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: kubernetes: gatewayServiceMesh: httpRoute: "my-httproute" service: "my-service" deployment: "my-deployment" canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod GKE cluster gke: cluster: projects/ PROJECT ID /locations/us-central1/clusters/canary-quickstart-cluster Cloud Run Create a file named clouddeploy.yaml , in the deploy-canary-quickstart-run directory, with the following contents: apiVersion: deploy.cloud.google.com/v1 kind: DeliveryPipeline metadata: name: my-canary-demo-app-1 description: main application pipeline serialPipeline: stages: - targetId: prod profiles: [] strategy: canary: runtimeConfig: cloudRun: automaticTrafficControl: true canaryDeployment: percentages: [50] verify: false --- apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: prod description: prod Run Service run: location: projects/ PROJECT ID /locations/us-central1 Register your pipeline and targets with the Cloud Deploy service: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT ID You now have a pipeline, with one target configured for a canary deployment strategy.
- GKE + Gateway API Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke-gatewayapi directory, with the following contents: kind : Gateway apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - gateway annotations : networking . istio . io / service - type : "ClusterIP" spec : gatewayClassName : istio listeners : - name : default hostname : " .example.com" port : 80 protocol : HTTP allowedRoutes : namespaces : from : All --- kind : HTTPRoute apiVersion : gateway . networking . k8s . io / v1beta1 metadata : name : my - httproute spec : parentRefs : - kind : Gateway name : my - gateway hostnames : - "test.example.com" rules : - backendRefs : - name : my - service port : 80 --- apiVersion : v1 kind : Service metadata : name : my - service spec : selector : app : my - app ports : - name : tcp - port protocol : TCP port : 80 targetPort : 8080 --- apiVersion : apps / v1 kind : Deployment metadata : name : my - deployment labels : app : my - app spec : replicas : 1 selector : matchLabels : app : my - app template : metadata : labels : app : my - app spec : containers : - name : nginx image : my - app - image This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- GKE Create a file named kubernetes.yaml , in the deploy-canary-quickstart-gke directory, with the following contents: apiVersion: apps/v1 kind: Deployment metadata: name: my-deployment labels: app: my-app namespace: default spec: replicas: 1 selector: matchLabels: app: my-app template: metadata: labels: app: my-app spec: containers: - name: nginx image: my-app-image --- apiVersion: v1 kind: Service metadata: name: my-service namespace: default spec: selector: app: my-app ports: - protocol: TCP port: 80 This file is a Kubernetes manifest , which is applied to the cluster to deploy the application.
- Canary-deploy an application to a target This quickstart shows you how to use Cloud Deploy to deliver a sample application image in a canary deployment to either Google Kubernetes Engine or to Cloud Run. (You can also run a canary deployment to GKE attached clusters , but only GKE and Cloud Run are shown in this quickstart.) A canary deployment splits traffic between an already-deployed version of the application and the new version.

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- May 05, 2023 Feature You can now perform deployment verification in the same cluster where your application is running (GKE and Anthos only).
- January 31, 2023 Announcement As of November 30, 2022, Google Cloud Deploy has achieved the following compliance certifications: ISO/IEC 27001 ISO/IEC 27017 ISO/IEC 27018 ISO/IEC 27701 Announcement As of December 15, 2022, Google Cloud Deploy has achieved the following compliance certifications: SOC-1 SOC-2 SOC-3 January 20, 2023 Change Google Cloud Deploy now supports Skaffold version 2.0.
- March 01, 2022 Change Google Cloud Deploy is now available in the following region: asia-northeast3 (Seoul) February 28, 2022 Feature Deploying your application to Anthos user clusters is now supported in preview .
- June 07, 2022 Announcement The Google Cloud Terraform provider now supports creating Google Cloud Deploy delivery pipelines and targets .

