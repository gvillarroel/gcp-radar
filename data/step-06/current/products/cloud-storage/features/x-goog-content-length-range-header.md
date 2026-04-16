---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.978Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "X-Goog-Content-Length-Range header"
feature_slug: "x-goog-content-length-range-header"
latest_feature_date: "2016-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/storage/docs/authentication/signatures"
  - "https://docs.cloud.google.com/storage/docs/aws-simple-migration"
  - "https://docs.cloud.google.com/storage/docs/xml-api/overview"
keywords:
  - "goog"
  - "content"
  - "length"
  - "range"
  - "header"
  - "storage"
  - "supports"
  - "the"
---

# X-Goog-Content-Length-Range header

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage supports the X-Goog-Content-Length-Range custom header for XML and JSON requests to validate uploaded content size.

## Extended Definition

Cloud Storage supports the X-Goog-Content-Length-Range custom header for XML and JSON requests to validate uploaded content size.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures)
- [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)
- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)

## Supporting Pages

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Max Length Range Spec Function Produce a new RangeSpec relative to the provided offset and prev , where the RangeSpec will have a maxLength set to the lesser of prev.maxLength and this.maxLength . com. google. cloud. storage.
- See Also: Google Cloud Storage error codes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Read As Future Byte String Read a range of byte s as an ApiFuture < DisposableByteString The resulting DisposableByteString MUST be close() ed to avoid leaking memory com. google. cloud. storage.
- There are multiple projections which can be used to access the content of a BlobInfo in Google Cloud Storage. com. google. cloud. storage.

### Signatures \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify this condition using the following syntax: ["content-length-range", min range , max range ] Example The following is an example of a policy document: {"expiration": "2020-06-16T11:11:11Z", "conditions": [ ["starts-with", "$key", ""], {"bucket": "travel-maps"}, {"success action redirect": "http://www.example.com/success notification.html"}, ["eq", "$Content-Type", "image/jpeg"], ["content-length-range", 0, 1000000], {"x-goog-algorithm": "GOOG4-RSA-SHA256"}, {"x-goog-credential": "example account@example project.iam.gserviceaccount.com/20191102/us-central1/storage/goog4 request"}, {"x-goog-date": "20191102T043530Z"} ] } This policy document defines the following conditions: The form expires on June 16, 2020 at 11:11:11 UTC.
- Content Length Range Specifies a range of acceptable values that can be used in the Content-Length field.
- Structure A string-to-sign must be UTF-8 encoded and has the following structure, including the use of newlines between each element: SIGNING ALGORITHM ACTIVE DATETIME CREDENTIAL SCOPE HASHED CANONICAL REQUEST Signing algorithm The value you use for SIGNING ALGORITHM depends on the type of key you use and the extensions you use for your headers or query parameters: Use case Value for SIGNING ALGORITHM x-goog- extensions and an RSA key GOOG4-RSA-SHA256 x-goog- extensions and an HMAC key GOOG4-HMAC-SHA256 x-amz- extensions and an HMAC key AWS4-HMAC-SHA256 Active datetime The date and time the signature can be used, in the ISO 8601 basic format YYYYMMDD'T'HHMMSS'Z' .
- An example hash value looks like: 436b7ce722d03b17d3f790255dd57904f7ed61c02ac5127a0ca8063877e4e42c Example The following is an example of a properly formed string-to-sign, with newlines shown as actual new lines and not \n : GOOG4-RSA-SHA256 20191201T190859Z 20191201/us-central1/storage/goog4 request 54f3076005db23fbecdb409d25c0ccb9fb8b5e24c59f12634654c0be13459af0 Policy document A policy document defines what users with access to the corresponding HTML form can upload to Cloud Storage.

### Simple migration from Amazon S3 to Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is the request to a bucket in Amazon S3: PUT europe/france/paris.jpg HTTP/1.1 Host: my-travel-maps.s3.amazonaws.com Date: Mon, 11 Mar 2019 23:46:19 GMT Content-Length: 888814 Content-Type: image/jpg x-amz-acl: public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer: joe,jane Authorization: AWS4-HMAC-SHA256 Credential= AWS-ACCESS-KEY /20190311/us-east-1/s3/aws4 request, SignedHeaders=content-length;content-type;host;x-amz-acl;x-amz-date;x-amz-meta-reviewer, Signature= SIGNATURE Here is the request for a bucket in Cloud Storage: PUT europe/france/paris.jpg HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Mon, 11 Mar 2019 23:46:19 GMT Content-Length: 888814 Content-Type: image/jpg x-amz-acl: public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer: joe,jane Authorization: AWS4-HMAC-SHA256 Credential= GOOG-ACCESS-ID /20190311/us-east-1/s3/aws4 request, SignedHeaders=content-length;content-type;host;x-amz-acl;x-amz-date;x-amz-meta-reviewer, Signature= SIGNATURE Here is the corresponding canonical request that was created for this request: PUT /europe/france/paris.jpg content-length:888814 content-type:image/jpg host:my-travel-maps.storage.googleapis.com x-amz-acl:public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer:joe,jane content-length,content-type,host,x-amz-acl,x-amz-date,x-amz-meta-reviewer 82e3da8b3f35989512e8d428add7eca73ab0e5f36586e66fbad8e1051343cbd2 Here is the corresponding string-to-sign that was created for this request: AWS4-HMAC-SHA256 20190311T192918Z 20190311/us-east-1/s3/aws4 request 73918a5ff373d7a03e406fbf9ea35675396b06fca2af76c27a5c451fa783ef65 This request did not provide a Content-MD5 header, so an empty string is shown in the second line of the message.
- PUT europe/france/paris.jpg?acl HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Thu, 21 Feb 2019 23:50:10 GMT Content-Type: application/xml Content-Length: 337 X-Amz-Date: 20190221T235010Z Authorization: AWS4-HMAC-SHA256 Credential=GOOGMC5PDPA5JLZYQMHQHRAX/20190221/region/s3/aws4 request, SignedHeaders=host;x-amz-date, Signature=29088b1d6dfeb2549f6ff67bc3744abb7e45475f0ad60400485805415bbfc534 <?xml version='1.0' encoding='utf-8'?> <AccessControlPolicy> <AccessControlList> <Grant> <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> </Grantee> <Permission>FULL CONTROL</Permission> </Grant> </AccessControlList> </AccessControlPolicy> Finally, in a simple migration scenario, you can also use the GOOG1 signature identifier in the Authorization header.
- Cloud Storage processes x-amz- headers that have an x-goog- equivalent, such as those listed in the headers table , and it processes the x-amz-decoded-content-length header .
- GET europe/france/paris.jpg?acl HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Thu, 21 Feb 2019 23:50:10 GMT Content-Type: application/xml X-Amz-Date: 20190221T235010Z Authorization: AWS4-HMAC-SHA256 Credential=GOOGMC5PDPA5JLZYQMHQHRAX/20190221/region/s3/aws4 request, SignedHeaders=host;x-amz-date, Signature=29088b1d6dfeb2549f6ff67bc3744abb7e45475f0ad60400485805415bbfc534 The response to the request includes the ACL using Amazon S3 ACL syntax. <?xml version='1.0' encoding='UTF-8'?> <AccessControlPolicy> <Owner> <ID>00b4903a972faa8bcce9382686e9129676f1cd6e5def1f5663affc2ba4652490 </ID> <DisplayName>OwnerName</DisplayName> </Owner> <AccessControlList> <Grant> <Grantee xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:type='CanonicalUser'> <ID>00b4903a972faa8bcce9382686e9129676f1cd6e5def1f5663affc2ba4652490</ID> <DisplayName>UserName</DisplayName> </Grantee> <Permission>FULL CONTROL</Permission> </Grant> </AccessControlList> </AccessControlPolicy> The following example shows a PUT request to Cloud Storage to set the ACLs for an object.

### XML API overview \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GET /?list-type=2&prefix=/europe/france/ HTTP/1.1 Host: travel-maps.storage.googleapis.com Date: Wed, 17 Feb 2010 15:31:56 -0800 Content-Length: 0 Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg Responses The Cloud Storage XML API returns standard HTTP response headers and several extension (custom) response headers.
- HTTP/1.1 200 OK Content-Length: 4061 Content-Type: application/xml Date: Wed, 17 Feb 2010 23:31:57 GMT Cache-Control: private, max-age=0 <?xml version='1.0' encoding='utf-8'?> <ListBucketResult xmlns='http://doc.storage.googleapis.com/2010-03-01'> <Name>travel-maps</Name> <Prefix>/europe/france/</Prefix> <StartAfter></StartAfter> <IsTruncated>false</IsTruncated> <Contents> <Key>europe/france/cannes.jpg</Key> <LastModified>2010-02-17T22:11:12.487Z</LastModified> <ETag>"53fc311c15eda0a031809982ccf92aac"</ETag> <Size>5061631</Size> <StorageClass>STANDARD</StorageClass> </Contents> <Contents> <Key>europe/france/paris.jpg</Key> <LastModified>2010-02-17T22:09:57.457Z</LastModified> <ETag>"53fc311c15eda0a031809982ccf92aac"</ETag> <Size>5061631</Size> <StorageClass>STANDARD</StorageClass> </Contents> </ListBucketResult> Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Headers and query string parameters The Cloud Storage XML API supports HTTP request headers.
- Content-Length The size of the response body (excluding headers) in bytes.

