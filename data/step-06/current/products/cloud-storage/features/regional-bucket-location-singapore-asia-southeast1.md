---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.971Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Regional bucket location: Singapore (asia-southeast1)"
feature_slug: "regional-bucket-location-singapore-asia-southeast1"
latest_feature_date: "2017-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
keywords:
  - "regional"
  - "bucket"
  - "location"
  - "singapore"
  - "asia"
  - "southeast1"
  - "storage"
  - "added"
---

# Regional bucket location: Singapore (asia-southeast1)

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage added the Singapore region as a location for storing data.

## Extended Definition

Cloud Storage added the Singapore region as a location for storing data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following regions are available when creating a configurable dual-region bucket: Location code Region Name Region Description ASIA ASIA-EAST1 Taiwan ASIA-SOUTHEAST1 Singapore AU AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne CA NORTHAMERICA-NORTHEAST1 Montréal NORTHAMERICA-NORTHEAST2 Toronto DE EUROPE-WEST3 Frankfurt EUROPE-WEST10 Berlin EU EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 1 Finland EUROPE-SOUTHWEST1 Madrid EUROPE-WEST1 Belgium EUROPE-WEST3 5 Frankfurt EUROPE-WEST4 1 Netherlands EUROPE-WEST8 4 Milan EUROPE-WEST9 Paris EUROPE-WEST10 5 Berlin EUROPE-WEST12 4 Turin IN ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi IT EUROPE-WEST8 Milan EUROPE-WEST12 Turin US US-CENTRAL1 2 Iowa US-EAST1 2 South Carolina US-EAST4 Northern Virginia US-EAST5 3 Columbus US-SOUTH1 Dallas US-WEST1 Oregon US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas 1 The EUROPE-NORTH1 and EUROPE-WEST4 dual-region pairing is only available as a predefined dual-region .
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following zones are available for zonal buckets : Region Zone Name Zone Description ASIA-SOUTHEAST1 ASIA-SOUTHEAST1-A Jurong West, Singapore, APAC ASIA-SOUTHEAST1-B Jurong West, Singapore, APAC ASIA-SOUTHEAST1-C Jurong West, Singapore, APAC EUROPE-WEST1 EUROPE-WEST1-B St.
- The following regions are available: Geographic Area Region Name Region Description North America NORTHAMERICA-NORTHEAST1 1 Montréal Low CO 2 NORTHAMERICA-NORTHEAST2 Toronto Low CO 2 NORTHAMERICA-SOUTH1 1 Querétaro US-CENTRAL1 Iowa Low CO 2 US-EAST1 South Carolina US-EAST4 Northern Virginia US-EAST5 Columbus US-SOUTH1 Dallas Low CO 2 US-WEST1 Oregon Low CO 2 US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas South America SOUTHAMERICA-EAST1 São Paulo Low CO 2 SOUTHAMERICA-WEST1 Santiago Low CO 2 Europe EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 Finland Low CO 2 EUROPE-NORTH2 Stockholm Low CO 2 EUROPE-SOUTHWEST1 Madrid Low CO 2 EUROPE-WEST1 Belgium Low CO 2 EUROPE-WEST2 London Low CO 2 EUROPE-WEST3 Frankfurt EUROPE-WEST4 Netherlands Low CO 2 EUROPE-WEST6 Zürich Low CO 2 EUROPE-WEST8 Milan EUROPE-WEST9 Paris Low CO 2 EUROPE-WEST10 Berlin EUROPE-WEST12 Turin Asia ASIA-EAST1 Taiwan ASIA-EAST2 Hong Kong ASIA-NORTHEAST1 Tokyo ASIA-NORTHEAST2 1 Osaka ASIA-NORTHEAST3 Seoul ASIA-SOUTHEAST1 Singapore India ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi Indonesia ASIA-SOUTHEAST2 Jakarta Thailand ASIA-SOUTHEAST3 Bangkok Middle East ME-CENTRAL1 Doha ME-CENTRAL2 Dammam, Saudi Arabia ME-WEST1 Tel Aviv Australia AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne Africa AFRICA-SOUTH1 Johannesburg 1 Montréal, Osaka, and Querétaro each have three zones housed in one or two physical data centers.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Create a new bucket with a custom default storage class and location. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') / function create bucket class location(string $bucketName): void { $storage = new StorageClient(); $storageClass = 'COLDLINE'; $location = 'ASIA'; $bucket = $storage->createBucket($bucketName, [ 'storageClass' => $storageClass, 'location' => $location, ]); $objects = $bucket->objects([ 'encryption' => [ 'defaultKmsKeyName' => null, ] ]); printf('Created bucket %s in %s with storage class %s', $bucketName, $storageClass, $location); } Python For more information, see the Cloud Storage Python API reference documentation .
- COLDLINE ; // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/bucket-locations#location-mr String location = "ASIA" ; Bucket bucket = storage . create ( BucketInfo . newBuilder ( bucketName ) . setStorageClass ( storageClass ) . setLocation ( location ) . build ()); System . out . println ( "Created bucket " + bucket . getName () + " in " + bucket . getLocation () + " with storage class " + bucket . getStorageClass ()); } } Node.js For more information, see the Cloud Storage Node.js API reference documentation .
- For more information, see Set up authentication for client libraries . def create bucket class location bucket name : The ID to give your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . create bucket bucket name , location : "ASIA" , storage class : "COLDLINE" puts "Created bucket #{ bucket . name } in #{ bucket . location } with #{ bucket . storage class } class" end Terraform You can use a Terraform resource to create a storage bucket .

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- E.g.: >> policies = bucket.cors >> policies.append({'origin': '/foo', ...}) >> policies[1]['maxAgeSeconds'] = 3600 >> del policies[0] >> bucket.cors = policies >> bucket.update() Returns Type Description list of dictionaries A sequence of mappings describing each CORS policy. data locations Retrieve the list of regional locations for custom dual-region buckets.
- Returns Type Description str or NoneType If set, one of NEARLINE STORAGE CLASS , COLDLINE STORAGE CLASS , ARCHIVE STORAGE CLASS , STANDARD STORAGE CLASS , MULTI REGIONAL LEGACY STORAGE CLASS , REGIONAL LEGACY STORAGE CLASS , or DURABLE REDUCED AVAILABILITY LEGACY STORAGE CLASS , else None . time created Retrieve the timestamp at which the bucket was created.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, or if the bucket's resource has not been loaded from the server. location type Retrieve the location type for the bucket.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Copy the image from its saved location to the folder where your bucket is mounted, using the cp command: cp kitten.png "$HOME/mount-folder/kitten.png" Verify that the image was copied to your local file system and uploaded to the bucket successfully by following the steps: To check that kitten.png was copied to your local file system, run ls on the folder where your bucket is mounted: ls "$HOME/mount-folder" If the copy operation was successful, kitten.png is returned in the output.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.
- Mount the bucket To mount the bucket to your local file system, complete the following steps: Generate Application Default Credentials using the gcloud auth application-default login command: gcloud auth application-default login Cloud Storage FUSE automatically loads the credentials.

