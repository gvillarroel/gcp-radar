---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.141Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc version selection"
feature_slug: "dataproc-version-selection"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
keywords:
  - "dataproc"
  - "version"
  - "selection"
  - "supports"
  - "selecting"
  - "the"
  - "image"
  - "when"
---

# Dataproc version selection

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports selecting the service image version when creating a cluster through the API, SDK, or console.

## Extended Definition

Dataproc supports selecting the service image version when creating a cluster through the API, SDK, or console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Custom image version labels (advanced usage) When using Managed Service for Apache Spark's standard custom image tool, the tool sets a goog-dataproc-version label on the created custom image.
- Then, run the generate custom image.py script to have Managed Service for Apache Spark generate and save your custom image. python3 generate custom image.py \ --image-name= CUSTOM IMAGE NAME \ [--family= CUSTOM IMAGE FAMILY NAME ] \ --dataproc-version= IMAGE VERSION \ --customization-script= LOCAL PATH \ --zone= ZONE \ --gcs-bucket= gs:// BUCKET NAME \ [--no-smoke-test] Required flags --image-name : the output name for your custom image.
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- In Cloud Shell, enable the Cloud Composer API: gcloud services enable composer.googleapis.com Create a Cloud Composer environment: export COMPOSER ENV = comp - env gcloud beta composer environments create $ { COMPOSER ENV } \ -- location $ { DPMS PRIMARY REGION } \ -- image - version composer - 1.17 .
- If you use a different Hive Metastore version, be sure to use a compatible Managed Service for Apache Spark image that matches the Hive version.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- Change New sub-minor versions of Cloud Dataproc images: 1.2.86-debian9, 1.3.46-debian9, 1.4.17-debian9, 1.5.0-RC2-debian9, 1.3.46-ubuntu18, 1.4.17-ubuntu18, 1.5.0-RC2-ubuntu18 Change Added a warning when clusters are created with component gateway and kerberos as they are not currently supported together Change 1.3 image update - Upgraded Hive to version 2.3.6 Change 1.4 image update - Fixed a bug in the Jupyter component that prevented creating text files using the Jupyter and JupyterLab UIs Change 1.5 preview image update: Updated Anaconda to version 2019.10 Updated Miniconda to version 4.7.12.1 Upgrade Hue to version 4.5.0 Upgraded Scala to version 2.12.10 Upgrade Hadoop to version 2.10.0 Unset java.net.preferIPv4Stack=true property in Hadoop November 26, 2019 Issue 1.3 and 1.4 images: Cloud Dataproc images in the 1.3 and 1.4 minor version tracks are affected by an issue that causes the YARN Timeline Server to excessively log without proper rotation.
- Announcement New Dataproc on Compute Engine subminor image versions : 2.0.68-debian10, 2.0.68-rocky8, 2.0.68-ubuntu18 2.1.16-debian11, 2.1.16-rocky8, 2.1.16-ubuntu20 June 26, 2023 Announcement Added Dataproc Serverless Templates for batch creation: Cloud Storage to BigQuery Cloud Storage to Cloud Spanner Hive to Cloud Storage JDBC to BigQuery JDBC to Cloud Storage June 22, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.20 2.0.28 2.1.7 June 16, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.67-debian10, 2.0.67-rocky8, 2.0.67-ubuntu18 2.1.15-debian11, 2.1.15-rocky8, 2.1.15-ubuntu20 Fixed Fixed a bug that caused cluster creation to fail when ATSv2 is enabled for tables that have a garbage collection policy setup other than maxversions .
- January 05, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.44 2.0.52 2.1.31 2.2.0-RC4 January 04, 2024 Announcement The following previously released sub-minor versions of Dataproc images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18 2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm 2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22 January 02, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18 2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm 2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22 Rollback Notice : See the January 4, 2024 release note rollback notice.

