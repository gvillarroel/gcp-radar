---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.991Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Object Browser"
feature_slug: "object-browser"
latest_feature_date: "2020-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/persistent-disk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies"
keywords:
  - "object"
  - "browser"
  - "gke"
  - "resources"
  - "can"
  - "inspected"
  - "console"
---

# Object Browser

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE resources can be inspected in Google Cloud Console using Object Browser.

## Extended Definition

GKE resources can be inspected in Google Cloud Console using Object Browser.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/persistent-disk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/persistent-disk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies)

## Supporting Pages

### "Fine-tune a LLM using TPUs on GKE with JAX \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)
- Source ID: `site-docs-reference-required-4`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : batch/v1 kind : Job metadata : name : jax-gemma3-train-singlehost spec : template : metadata : annotations : gke-gcsfuse/volumes : "true" spec : serviceAccountName : jaxserviceaccout containers : - name : training-container image : ${IMAGE URI} imagePullPolicy : "Always" command : [ "python" , "Gemma3LLMTrain.py" , "--maxlen" , "256" , "--batch size" , "64" , "--datacount" , "851200" ] resources : limits : google.com/tpu : 1 volumeMounts : - name : gcs-fuse-csi-ephemeral mountPath : /data - name : gcs-fuse-csi-ephemeral2 mountPath : /xprof nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 1x1 restartPolicy : Never volumes : - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:-1" - name : gcs-fuse-csi-ephemeral2 csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${XPROF GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:-1" backoffLimit : 1 Apply the manifest: envsubst < training singlehost.yaml kubectl apply -f - Grant the service account permissions to write XProf logs To enable the service account to write and read, add the "roles/storage.objectUser" role: export GSA NAME = " GSA NAME " # Same as used in initial setup Automatically get the current project ID export PROJECT ID = $( gcloud config get-value project ) Cloud Storage Bucket details export XPROF GCS BUCKET NAME = " XPROF GCS BUCKET NAME " Derived Variables export GSA EMAIL = " ${ GSA NAME } @ ${ PROJECT ID } .iam.gserviceaccount.com" gcloud storage buckets add-iam-policy-binding "gs:// ${ XPROF GCS BUCKET NAME } " \ --member = "serviceAccount: ${ GSA EMAIL } " \ --role = "roles/storage.objectUser" \ --project = " ${ PROJECT ID } " Replace the following: GSA NAME : the name of the Google Service Account to which to grant the role.
- Please set it using 'gcloud config set project YOUR PROJECT ID'" exit 1 fi echo "--- Configuration ---" echo "KSA NAME: ${ KSA NAME } " echo "NAMESPACE: ${ NAMESPACE } " echo "GSA NAME: ${ GSA NAME } " echo "PROJECT ID: ${ PROJECT ID } " echo "GSA EMAIL: ${ GSA EMAIL } " echo "GCS BUCKET NAME: ${ GCS BUCKET NAME } " echo "WI MEMBER: ${ WI MEMBER } " echo "--------------------" read -p "Press enter to continue..." --- Command Execution --- echo "[1/5] Creating Google Cloud IAM Service Account (GSA): ${ GSA NAME } " gcloud iam service-accounts create " ${ GSA NAME } " \ --project = " ${ PROJECT ID } " \ --description = " ${ GSA DESCRIPTION } " \ --display-name = " ${ GSA NAME } " echo "[2/5] Granting GSA ' ${ GSA EMAIL } ' read access (roles/storage.objectViewer) to bucket 'gs:// ${ GCS BUCKET NAME } '" gcloud storage buckets add-iam-policy-binding "gs:// ${ GCS BUCKET NAME } " \ --member = "serviceAccount: ${ GSA EMAIL } " \ --role = "roles/storage.objectViewer" \ --project = " ${ PROJECT ID } " echo "[3/5] Creating Kubernetes Service Account (KSA): ${ KSA NAME } in namespace ${ NAMESPACE } " kubectl create serviceaccount " ${ KSA NAME } " --namespace " ${ NAMESPACE } " echo "[4/5] Allowing KSA to impersonate GSA (Workload Identity Binding): ${ GSA EMAIL } " gcloud iam service-accounts add-iam-policy-binding " ${ GSA EMAIL } " \ --role roles/iam.workloadIdentityUser \ --member " ${ WI MEMBER } " \ --project = " ${ PROJECT ID } " echo "[5/5] Annotating KSA ' ${ KSA NAME } ' to link with GSA ' ${ GSA EMAIL } '" kubectl annotate serviceaccount " ${ KSA NAME } " \ --namespace " ${ NAMESPACE } " \ iam.gke.io/gcp-service-account = " ${ GSA EMAIL } " echo "--- Setup Complete ---" echo "Pods in namespace ' ${ NAMESPACE } ' using serviceAccount ' ${ KSA NAME } ' can now authenticate as ' ${ GSA EMAIL } ' and have read access to 'gs:// ${ GCS BUCKET NAME } '." After you run this script, the following resources are configured in your Google Cloud project and GKE cluster: A new IAM service account named gcs-fuse-sa is created in your project.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : jax-gemma3-train-multihost spec : replicatedJobs : - name : trainers replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 1 template : metadata : annotations : gke-gcsfuse/volumes : "true" spec : serviceAccountName : jaxserviceaccout nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 cloud.google.com/gke-nodepool : jax-tpu-multihost1 containers : - name : training-container image : ${IMAGE URI} imagePullPolicy : "Always" ports : - containerPort : 8471 command : [ "python" , "Gemma3LLMTrain.py" , "--maxlen" , "256" , "--batch size" , "64" , "--datacount" , "5120" ] resources : limits : google.com/tpu : 4 volumeMounts : - name : gcs-fuse-csi-ephemeral mountPath : /data volumes : - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:-1" Deploy the fine-tuning Job: envsubst < training multihost jobset.yaml kubectl apply -f - Multislice In Cloud Shell, run the following command: gcloud container node-pools create jax-tpu-multihost1 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } gcloud container node-pools create jax-tpu-multihost2 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } GKE creates two TPU Trillium node pools.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : jax-gemma3-train-multislice spec : replicatedJobs : - name : trainers replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 1 template : metadata : annotations : gke-gcsfuse/volumes : "true" spec : serviceAccountName : jaxserviceaccout nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : training-container image : ${IMAGE URI} imagePullPolicy : "Always" ports : - containerPort : 8471 command : [ "python" , "Gemma3LLMTrain.py" , "--maxlen" , "256" , "--batch size" , "64" , "--datacount" , "5120" ] resources : limits : google.com/tpu : 4 volumeMounts : - name : gcs-fuse-csi-ephemeral mountPath : /data volumes : - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:100" Deploy the fine-tuning Job: envsubst < training multislice jobset.yaml kubectl apply -f - Performance analysis and optimization To analyze and optimize the performance of your machine learning fine-tuning, you can use XProf .

### "Deploy WordPress on GKE with Persistent Disk and Cloud SQL \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/persistent-disk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/persistent-disk)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- To visit your blog, in your browser, go to the following URL: http:// external-ip-address Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- In the Google Cloud console, go to the Manage resources page.
- Set the PROJECT ID environment variable to your Google Cloud project ID ( project-id ). export PROJECT ID= project-id Download the app manifest files from the GitHub repository : git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples Change to the directory with the wordpress-persistent-disks file: cd kubernetes-engine-samples/quickstarts/wordpress-persistent-disks Set the WORKING DIR environment variable: WORKING DIR=$(pwd) For this tutorial, you create Kubernetes objects using manifest files in YAML format.
- In your browser, go to the following URL, replacing external-ip-address with the EXTERNAL IP address of the service that exposes your WordPress instance: http:// external-ip-address On the WordPress installation page, select a language, and then click Continue .

### "Restrict actions on GKE resources using custom organization policies \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/custom-org-policies)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Restrict anonymous access to cluster endpoints in new and existing clusters name : organizations/ ORGANIZATION ID /customConstraints/custom.gkeAnonymousAccessLimited resourceTypes : - container.googleapis.com/Cluster methodTypes : - CREATE - UPDATE condition : "resource.anonymousAuthenticationConfig.mode == LIMITED" actionType : ALLOW displayName : "Restrict anonymous access to cluster endpoints." description : "All new and updated clusters must restrict anonymous access to cluster endpoints." Conditional organization policies You can conditionally enforce organization policies based on the tags that are attached to resources.
- For example, the following organization policy enforces the custom.enableAutoUpgrade constraint only if the resource (such as a project or a cluster) has the environment tag set to dev : name : organizations/ ORGANIZATION ID /policies/custom.enableAutoUpgrade spec : rules : - condition : expression : "resource.matchTag(' ORGANIZATION ID /environment', 'dev')" enforce : true GKE supported resources The following table lists the GKE resources that you can reference in custom constraints.
- Autopilot Standard This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: container.googleapis.com/Cluster container.googleapis.com/NodePool To learn more about Organization Policy, see Custom organization policies .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Restrict actions on GKE resources using custom organization policies Stay organized with collections Save and categorize content based on your preferences.

