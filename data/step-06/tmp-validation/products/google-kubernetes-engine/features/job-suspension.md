---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.332Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Job suspension"
feature_slug: "job-suspension"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax"
keywords:
  - "suspension"
  - "suspended"
  - "placed"
  - "jobs"
  - "into"
  - "created"
---

# Job suspension

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Jobs can be created or placed into a suspended state for higher-level batch scheduling control.

## Extended Definition

Jobs can be created or placed into a suspended state for higher-level batch scheduling control.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- For example, to compare the number of replicas in a READY state to the expected number of replicas in a single JobSet, plot both metrics on a single chart by using the following PromQL queries: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} and kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} To alert on a failed or unavailable JobSet rollout, you can use the following PromQL expression: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} The condition label on the kube jobset status condition metric can also help you detect when JobSets run into various failure modes, for example: The Failed condition indicates that the JobSet failed its execution: kube jobset status condition{jobset name=" JOBSET NAME , condition="Failed"} == 1 The Suspended condition indicates that the JobSet is suspended: kube jobset status condition{jobset name=" JOBSET NAME , condition="Suspended"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- Sampled every 30 seconds. jobset name : jobset name. replicated job name : replicated job name. kube jobset suspended replicas kube jobset suspended replicas/gauge GAUGE , DOUBLE , 1 prometheus target 1.32.1-gke.1357001 The number of replicas in a 'SUSPENDED' state per replicated Jobs in a JobSet.
- Starting with version 1.32.1-gke.1357001, the JobSet metrics package is enabled by default on newly created GKE Standard and Autopilot clusters. kube jobset restarts metric is available in 1.32 clusters starting from 1.32.4-gke.1767000 and in 1.33 clusters starting from 1.33.0-gke.1868000.
- The following PromQL expression looks for differences between the current number of replicas and the needed, minimum, and maximum numbers of replicas, as well as changes in the current number of replicas: (kube horizontalpodautoscaler status desired replicas{job="kube-state-metrics", namespace= " NAMESPACE "} != kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "}) and (kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "} kube horizontalpodautoscaler spec min replicas{job="kube-state-metrics", namespace= " NAMESPACE "}) and (kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "} NAMESPACE "}) and changes(kube horizontalpodautoscaler status current replicas{job="kube-state-metrics", namespace= " NAMESPACE "}[15m]) == 0 The condition and status labels on the kube horizontalpodautoscaler status condition metric can also help you detect when HPAs run into various failure modes.

### "Build a RAG chatbot with GKE and Cloud Storage \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/build-rag-chatbot)
- Source ID: `site-docs-reference-required-4`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Qdrant export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit qdrant/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit qdrant/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async Elasticsearch export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit elasticsearch/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit elasticsearch/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async PGVector export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit postgres-pgvector/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit postgres-pgvector/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async Weaviate export DOCKER REPO = " ${ REGION } -docker.pkg.dev/ ${ PROJECT ID } / ${ KUBERNETES CLUSTER PREFIX } -images" gcloud builds submit weaviate/docker/chatbot --region = ${ REGION } \ --tag ${ DOCKER REPO } /chatbot:1.0 --async gcloud builds submit weaviate/docker/embed-docs --region = ${ REGION } \ --tag ${ DOCKER REPO } /embed-docs:1.0 --async Verify the images: gcloud artifacts docker images list $DOCKER REPO \ --project = $PROJECT ID \ --format = "value(IMAGE)" The output is similar to the following: $REGION-docker.pkg.dev/$PROJECT ID/${KUBERNETES CLUSTER PREFIX}-images/chatbot $REGION-docker.pkg.dev/$PROJECT ID/${KUBERNETES CLUSTER PREFIX}-images/embed-docs Deploy a Kubernetes Service Account with permissions to run Kubernetes Jobs: Qdrant sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" qdrant/manifests/05-rag/service-account.yaml kubectl -n qdrant apply -f - Elasticsearch sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" elasticsearch/manifests/05-rag/service-account.yaml kubectl -n elastic apply -f - PGVector sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" postgres-pgvector/manifests/03-rag/service-account.yaml kubectl -n pg-ns apply -f - Weaviate sed "s/<PROJECT ID>/ $PROJECT ID /;s/<CLUSTER PREFIX>/ $KUBERNETES CLUSTER PREFIX /" weaviate/manifests/04-rag/service-account.yaml kubectl -n weaviate apply -f - When using Terraform to create the GKE cluster and have create service account set as true, a separate service account will be created and used by the cluster and nodes.
- There are three scripts inside the Docker images: endpoint.py : receives Eventarc events on each document upload and starts the Kubernetes Jobs to process them. embedding-job.py : downloads documents from the bucket, creates embeddings, and insert embeddings into the vector database. chat.py : runs queries over the content of stored documents.
- Grant artifactregistry.serviceAgent role to this Compute Engine service account to allow the nodes to pull image from the Artifact Registry created for embed-docs and chatbot . export CLUSTER SERVICE ACCOUNT = $( gcloud container clusters describe ${ KUBERNETES CLUSTER PREFIX } -cluster \ --location = ${ CONTROL PLANE LOCATION } \ --format = "value(nodeConfig.serviceAccount)" ) gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount: ${ CLUSTER SERVICE ACCOUNT } " \ --role = "roles/artifactregistry.serviceAgent" Without granting access to the service account, your nodes might experience permission issue when trying to pull image from the Artifact Registry when deploying the embed-docs and chatbot Services.
- V1JobSpec ( backoff limit = 3 , ttl seconds after finished = 60 , template = template . template ) return body def kube test credentials (): try : api response = api instance . get api resources () logging . info ( api response ) except ApiException as e : print ( "Exception when calling API: %s \n " % e ) def kube create job ( bckt , f name , id ): container image = os . getenv ( "JOB IMAGE" ) namespace = os . getenv ( "JOB NAMESPACE" ) name = "docs-embedder" + id body = kube create job object ( name , container image , bckt , f name , namespace ) v1 = client .

### "Fine-tune a LLM using TPUs on GKE with JAX \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/train-llm-tpus-gke-jax)
- Source ID: `site-docs-reference-required-4`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Please set it using 'gcloud config set project YOUR PROJECT ID'" exit 1 fi echo "--- Configuration ---" echo "KSA NAME: ${ KSA NAME } " echo "NAMESPACE: ${ NAMESPACE } " echo "GSA NAME: ${ GSA NAME } " echo "PROJECT ID: ${ PROJECT ID } " echo "GSA EMAIL: ${ GSA EMAIL } " echo "GCS BUCKET NAME: ${ GCS BUCKET NAME } " echo "WI MEMBER: ${ WI MEMBER } " echo "--------------------" read -p "Press enter to continue..." --- Command Execution --- echo "[1/5] Creating Google Cloud IAM Service Account (GSA): ${ GSA NAME } " gcloud iam service-accounts create " ${ GSA NAME } " \ --project = " ${ PROJECT ID } " \ --description = " ${ GSA DESCRIPTION } " \ --display-name = " ${ GSA NAME } " echo "[2/5] Granting GSA ' ${ GSA EMAIL } ' read access (roles/storage.objectViewer) to bucket 'gs:// ${ GCS BUCKET NAME } '" gcloud storage buckets add-iam-policy-binding "gs:// ${ GCS BUCKET NAME } " \ --member = "serviceAccount: ${ GSA EMAIL } " \ --role = "roles/storage.objectViewer" \ --project = " ${ PROJECT ID } " echo "[3/5] Creating Kubernetes Service Account (KSA): ${ KSA NAME } in namespace ${ NAMESPACE } " kubectl create serviceaccount " ${ KSA NAME } " --namespace " ${ NAMESPACE } " echo "[4/5] Allowing KSA to impersonate GSA (Workload Identity Binding): ${ GSA EMAIL } " gcloud iam service-accounts add-iam-policy-binding " ${ GSA EMAIL } " \ --role roles/iam.workloadIdentityUser \ --member " ${ WI MEMBER } " \ --project = " ${ PROJECT ID } " echo "[5/5] Annotating KSA ' ${ KSA NAME } ' to link with GSA ' ${ GSA EMAIL } '" kubectl annotate serviceaccount " ${ KSA NAME } " \ --namespace " ${ NAMESPACE } " \ iam.gke.io/gcp-service-account = " ${ GSA EMAIL } " echo "--- Setup Complete ---" echo "Pods in namespace ' ${ NAMESPACE } ' using serviceAccount ' ${ KSA NAME } ' can now authenticate as ' ${ GSA EMAIL } ' and have read access to 'gs:// ${ GCS BUCKET NAME } '." After you run this script, the following resources are configured in your Google Cloud project and GKE cluster: A new IAM service account named gcs-fuse-sa is created in your project.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : jax-gemma3-train-multihost spec : replicatedJobs : - name : trainers replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 1 template : metadata : annotations : gke-gcsfuse/volumes : "true" spec : serviceAccountName : jaxserviceaccout nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 cloud.google.com/gke-nodepool : jax-tpu-multihost1 containers : - name : training-container image : ${IMAGE URI} imagePullPolicy : "Always" ports : - containerPort : 8471 command : [ "python" , "Gemma3LLMTrain.py" , "--maxlen" , "256" , "--batch size" , "64" , "--datacount" , "5120" ] resources : limits : google.com/tpu : 4 volumeMounts : - name : gcs-fuse-csi-ephemeral mountPath : /data volumes : - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:-1" Deploy the fine-tuning Job: envsubst < training multihost jobset.yaml kubectl apply -f - Multislice In Cloud Shell, run the following command: gcloud container node-pools create jax-tpu-multihost1 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } gcloud container node-pools create jax-tpu-multihost2 \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct6e-standard-4t \ --num-nodes = 2 \ --tpu-topology = 2x4 \ --location = ${ REGION } \ --node-locations = ${ ZONE } GKE creates two TPU Trillium node pools.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : jax-gemma3-train-multislice spec : replicatedJobs : - name : trainers replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 1 template : metadata : annotations : gke-gcsfuse/volumes : "true" spec : serviceAccountName : jaxserviceaccout nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : training-container image : ${IMAGE URI} imagePullPolicy : "Always" ports : - containerPort : 8471 command : [ "python" , "Gemma3LLMTrain.py" , "--maxlen" , "256" , "--batch size" , "64" , "--datacount" , "5120" ] resources : limits : google.com/tpu : 4 volumeMounts : - name : gcs-fuse-csi-ephemeral mountPath : /data volumes : - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : ${GCS BUCKET NAME} mountOptions : "implicit-dirs,file-cache:enable-parallel-downloads:true,file-cache:parallel-downloads-per-file:100,file-cache:max-parallel-downloads:-1,file-cache:download-chunk-size-mb:10,file-cache:max-size-mb:100" Deploy the fine-tuning Job: envsubst < training multislice jobset.yaml kubectl apply -f - Performance analysis and optimization To analyze and optimize the performance of your machine learning fine-tuning, you can use XProf .
- Delete the individual resources To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources by running the following commands: Delete the resources you created in this tutorial: gcloud container clusters delete ${ CLUSTER NAME } --location = ${ REGION } gcloud storage rm --recursive gs:// ${ GCS BUCKET NAME } gcloud artifacts docker images delete ${ IMAGE URI } --delete-tags If you don't need the data generated by XProf, remove the Cloud Storage bucket used by XProf: gcloud storage rm --recursive gs:// ${ XPROF GCS BUCKET NAME } What's next Learn more about TPUs in GKE .

