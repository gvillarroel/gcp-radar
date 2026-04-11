---
title: "Class AwsS3Data (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data
  title: "Class AwsS3Data (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AwsS3Data (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.1
1.6.0
1.5.2
1.4.1
1.3.1
1.2.1
1.1.1
1.0.2
0.1.0
AwsS3Data ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An AwsS3Data resource can be a data source, but not a data
sink. In an AwsS3Data resource, an object's name is the S3
object's key name.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
bucket_name
str
Required. S3 Bucket name (see `Creating a
bucket
aws_access_key
google.cloud.storage_transfer_v1.types.AwsAccessKey
Input only. AWS access key used to sign the API requests to
the AWS S3 bucket. Permissions on the bucket must be granted
to the access ID of the AWS access key.
For information on our data retention policy for user
credentials, see `User
credentials `__.
path
str
Root path to transfer objects.
Must be an empty string or full path name that
ends with a '/'. This field is treated as an
object prefix. As such, it should generally not
begin with a '/'.
role_arn
str
The Amazon Resource Name (ARN) of the role to support
temporary credentials via AssumeRoleWithWebIdentity . For
more information about ARNs, see `IAM
ARNs
cloudfront_domain
str
Optional. The CloudFront distribution domain name pointing
to this bucket, to use when fetching.
See `Transfer from S3 via
CloudFront
credentials_secret
str
Optional. The Resource name of a secret in Secret Manager.
AWS credentials must be stored in Secret Manager in JSON
format:
{ "access_key_id": "ACCESS_KEY_ID", "secret_access_key":
"SECRET_ACCESS_KEY" }
GoogleServiceAccount][google.storagetransfer.v1.GoogleServiceAccount]
must be granted roles/secretmanager.secretAccessor for
the resource.
See [Configure access to a source: Amazon S3]
(https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager)
for more information.
If credentials_secret is specified, do not specify
role_arn][google.storagetransfer.v1.AwsS3Data.role_arn] or
aws_access_key][google.storagetransfer.v1.AwsS3Data.aws_access_key] .
Format: projects/{project_number}/secrets/{secret_name}
managed_private_network
bool
Egress bytes over a Google-managed private
network. This network is shared between other
users of Storage Transfer Service.
This field is a member of oneof _ private_network .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
