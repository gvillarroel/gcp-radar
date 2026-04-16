---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.208Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "OpenAPI specification file upload"
feature_slug: "openapi-specification-file-upload"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure"
keywords:
  - "openapi"
  - "specification"
  - "file"
  - "upload"
  - "custom"
  - "connectors"
  - "now"
  - "uploading"
---

# OpenAPI specification file upload

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Custom connectors now support uploading an OpenAPI specification file.

## Extended Definition

Custom connectors now support uploading an OpenAPI specification file.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)

## Supporting Pages

### "Azure Data Lake Storage \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testdirectory1/test1.pdf" , "HasBytes" : true } If the action is successful, the DownloadFile task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "True" , "ContentBytes" : "UEsDBBQABgAIAAAAIQCj77sdZQEAAFIFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooA" }] Example - Upload a file This example uploads content as a blob.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob4" , "HasBytes" : true , "Content" : "abcdef\nabcdef" } If the action is successful, the UploadFile task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "true" }] Example - Create a file This example creates a file in the specified directory.
- Chunk Size : The size of chunks (in Mb) to use when uploading large files.
- Shared Access Signature connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-conn-public Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory directory File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Shared Access Signature SHARED ACCESS SIGNATURE Secret Version 1 Account access key connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name azure-data-lake-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory north-america File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Account Access key ACCOUNT ACCESS KEY Secret Version 1 JWT authentication connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-jwt-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account your-adls-account-name Directory north-america File System data-lake-container Include Sub Directories Yes Minimum number of nodes 2 Maximum number of nodes 50 Authentication type JWT Authentication Client ID CLIENT ID Private Key PRIVATE KEY SECRET Private Key Password PRIVATE KEY PASSWORD SECRET Secret Version (for Private Key) 1 Secret Version (for Private Key Password) 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Examples This examples in this section describe the following operations: List all objects List all objects in a bucket List objects using the LIKE filter for name List all buckets Download an object Download a binary object Upload a binary object to a bucket Upload an object to a bucket Upload an object to a folder Copy an object Move an object Delete an object Create a signed URL for an object The following table lists the sample scenarios and the corresponding configuration in the Connectors task: Task Configuration List all objects In the Configure connector task dialog, click Entities .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter the following in the Default Value field: { "BucketSource" : "bucket 01" , "ObjectSource" : "folderA/logfile.txt" , "BucketDestination" : "bucket 02" , "ObjectDestination" : "folderB/logfile.txt" } This example copies the folderA/logfile.txt file from bucket 01 to folderB/logfile.txt in bucket 02 .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter the following in the Default Value field: { "BucketSource" : "bucket 01" , "ObjectSource" : "folderA/logfile.txt" , "BucketDestination" : "bucket 02" , "ObjectDestination" : "folderB/logfile.txt" } This example moves the folderA/logfile.txt file from bucket 01 to folderB/logfile.txt in bucket 02 .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter the following in the Default Value field: { "Content" : "Hello test!" , "Bucket" : "bucket-test-01" , "FolderPath" : "folderA" , "ObjectName" : "test-file-01.txt" } This example creates the test-file-01.txt file with the content Hello test! in the bucket-test-01 's folderA folder.

### Amazon S3 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Bucket" : "aws-s3-bucket-source" , "HasBytes" : true } If the action is successful, the DownloadObjects task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "True" , "RemoteFile" : "prefix1%2Faws-s3-bucket-source%2Finventory-test-1%2F2023-09-10T01-00Z%2Fmanifest.json" , "ContentBytes" : "ewogICJzb3VyY2VCdWNrZXQiIDogImF3cy1zMy1idWNrZXQtYmNvbmUiLAogICJnOK" }, { "Success" : "True" , "RemoteFile" : "upload1.txt" , "ContentBytes" : "VGhpcyBpcyBhIHRlc3RpbmcgZmlsZQ==" }] Example - Upload an object This example uploads an object to the specified bucket.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Bucket" : "aws-s3-bucket-source" , "FileName" : "upload 1.txt" , "Content" : "This is a testing file" , "AccessPolicy" : "PUBLIC" } If the action is successful, the UploadObject task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "success" , "bucket" : "aws-s3-bucket-source" , "rss:title" : "Object 'upload 1.txt' was created in the bucket: aws-s3-bucket-source" , "object" : "upload 1.txt" }] Example - Delete an object This example deletes an object from the specified bucket.
- ContentBytes String No The byte content to upload as a file.
- FileName String No Name of the file to be uploaded.

### Azure AD (Entra ID) \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Annotations" : "[{" displayName ": " A ttr ibu tes "}]" , "DirectoryPropertyName" : "CustomAttribute15" } If the action is successful, the AddProfileCardProperty task's connectorOutputPayload response parameter has a value similar to the following: [{ "Status" : "True" }] Example - RemoveProfileCardProperty In the Configure connector task dialog, click Actions .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "DirectoryPropertyName" : "CustomAttribute12" } If the action is successful, the RemoveProfileCardProperty task's connectorOutputPayload response parameter has a value similar to the following: [{ "Status" : "True" }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "UserId" : "9630c9d7-cf15-4406-8d21-598e41a058cc" } If the action is successful, the FetchAdditionalUserFields task's connectorOutputPayload response parameter has a value similar to the following: [{ "id" : "9630c9d7-cf15-4406-8d21-598e41a058cc" , "deleteddatetime" : null , "accountenabled" : "true" , "agegroup" : null , "businessphones" : "" , "city" : null , "companyname" : null , "consentprovidedforminor" : null , "country" : null , "createddatetime" : "2024-04-12T10:24:42Z" , "creationtype" : null , "department" : null , "displayname" : "Azure AD Test" , "employeehiredate" : null , "employeeid" : null , "employeeleavedatetime" : null , "employeetype" : null , "externaluserstate" : null , "externaluserstatechangedatetime" : null , "faxnumber" : null , "givenname" : null , "imaddresses" : "" , "isresourceaccount" : null , "jobtitle" : null , "lastpasswordchangedatetime" : "2024-05-14T05:07:15Z" , "legalagegroupclassification" : null , "mail" : null , "mailnickname" : "Azure AD Test" , "mobilephone" : null , "officelocation" : null , "onpremisesdistinguishedname" : null , "onpremisesdomainname" : null , "onpremisesimmutableid" : null , "onpremiseslastsyncdatetime" : null , "onpremisessamaccountname" : null , "onpremisessecurityidentifier" : null , "onpremisessyncenabled" : null , "onpremisesuserprincipalname" : null , "othermails" : "" , "passwordpolicies" : null , "postalcode" : null , "preferreddatalocation" : null , "preferredlanguage" : null , "proxyaddresses" : "" , "securityidentifier" : "S-1-12-1-2519779799-1141296917-2388205965-3428360257" , "showinaddresslist" : null , "signinsessionsvalidfromdatetime" : "2024-05-14T05:07:15Z" , "state" : null , "streetaddress" : null , "surname" : null , "usagelocation" : "IN" , "userprincipalname" : "Azure AD Test@z8474.onmicrosoft.com" , "usertype" : "Member" , "aboutme" : null , "birthday" : "0001-01-01T08:00:00Z" , "hiredate" : "0001-01-01T08:00:00Z" , "interests" : "" , "mysite" : null , "pastprojects" : "" , "preferredname" : "" , "responsibilities" : "" , "schools" : "" , "skills" : "" , "assignedlicenses" : "" , "assignedplans" : "[\r\n {\r\n \"assignedDateTime\": \"2024-05-16T10:17:45Z\",\r\n \"capabilityStatus\": \"Deleted\",\r\n \"service\": \"DynamicsNAV\",\r\n \"servicePlanId\": \"3f2afeed-6fb5-4bf9-998f-f2912133aead\"\r\n }\r\n]" , "authorizationinfo certificateuserids" : "" , "identities" : "[\r\n {\r\n \"signInType\": \"userPrincipalName\",\r\n \"issuer\": \"z8474.onmicrosoft.com\",\r\n \"issuerAssignedId\": \"Azure AD Test@z8474.onmicrosoft.com\"\r\n }\r\n]" , "licenseassignmentstates" : "" , "onpremisesextensionattributes extensionattribute1" : null , "onpremisesextensionattributes extensionattribute2" : null , "onpremisesextensionattributes extensionattribute3" : null , "onpremisesextensionattributes extensionattribute4" : null , "onpremisesextensionattributes extensionattribute5" : null , "onpremisesextensionattributes extensionattribute6" : null , "onpremisesextensionattributes extensionattribute7" : null , "onpremisesextensionattributes extensionattribute8" : null , "onpremisesextensionattributes extensionattribute9" : null , "onpremisesextensionattributes extensionattribute10" : null , "onpremisesextensionattributes extensionattribute11" : null , "onpremisesextensionattributes extensionattribute12" : null , "onpremisesextensionattributes extensionattribute13" : null , "onpremisesextensionattributes extensionattribute14" : null , "onpremisesextensionattributes extensionattribute15" : null , "onpremisesprovisioningerrors" : "" , "provisionedplans" : "" , "serviceprovisioningerrors" : "" , "customsecurityattributes" : "{\r\n \"ConnectorTesting\": {\r\n \"@odata.type\": \"#microsoft.graph.customSecurityAttributeValue\",\r\n \"FavouriteSport\": \"cricket\",\r\n \"FavouriteMovie\": \"3 idiots\"\r\n }\r\n}" , "signinactivity lastsignindatetime" : "2024-05-14T07:04:51Z" , "signinactivity lastsigninrequestid" : "ed35b322-d0d9-4fcb-8e71-f9ee7e065e00" , "signinactivity lastnoninteractivesignindatetime" : "2024-05-15T09:00:02Z" , "signinactivity lastnoninteractivesigninrequestid" : "0d4ce88b-710a-440f-a612-f590954d6800" , "signinactivity lastsuccessfulsignindatetime" : "2024-05-15T06:45:42Z" , "signinactivity lastsuccessfulsigninrequestid" : "64643e9d-3468-4e4d-b7c3-8bd316956600" } Note: By default, the entity retrieves the mandatory attributes coming from the Azure AD OData endpoint.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "UserId" : "8e22c728-c523-436b-8f46-3b21cc1b5f80" } If the action is successful, the RetrieveUserPhoto task's connectorOutputPayload response parameter has a value similar to the following: [{ "Status" : "Success" , "FileData" : "77+9UE5HDQoaCgAAAA1JSERSAAADUgAAAjYIBgAAAFo077+977+9AAAAAXNSR0IA77+977+9HO+/vQAAAARnQU1BAADvv73vv70L77+9YQUAAAAJcEhZcwAADu+/vQAADu+/vQHvv71v77+9ZAAA77+977+9SURBVHhe77+977+9ZXwcV9K+LWlmZCbvv71O77+977+977+9ZO+/vcmG77+9Ge+/vThmZmZm77+9OO+/vcmG77+977+9MTMzM++/vS0z77+977+977+9eu+/ve+/vXTvv71o77+9KAvvv73vv73vv71w77+9DjRO77+977+9Vl3vv70677+9KWsrR2zvv71zEe+/ve+/vUTvv73vv717KGrvv709EO+/ve+/vWjvv71RG01777+977+9Me+/ve+/vWjvv73vv719OmJLyqfZuu+/vRHvv71ZK++/vQ7Uj9iJ77+977+9du+/vUXEslrvv73vv73vv70uzbzvv70pFu+/vUrvv709Yl4P77+9eu+/vSDvv73vv71n77+977+977+9Gu+/ve+/vV3vv71sP2Vm77+977+9be+/vWbvv707RmxV77+9VFvvv70u77+9Fu+/ve+/vdqi77+9aTbvv71N77+977+9Re+/ve+/vWPvv70tYe+/vRXvv73vv70677+9bu+/vTRbS++/ve+/ve+/vWxkP1vvv71FbWt377+977+9LdW277+977+977+977+977+9ae+/ve+/vXvvv73vv73vv70Z77+9Xe+/vSLvv73vv70X77+977+9E++/vT1ob1/vv71+ae+/ve+/vWx3by1P77+9XT3vv71sL++/ve+/ve+/vWbvv73vv73vv71m77+9F+e0s2vvv712dErvv73vv73vv73vv73vv73vv71p77+977+9Le+/vW/vv73vv71oZ0vvv73vv70577+9R3tb77+92b7vv70R77+977+9KmIHKQ/vv73vv73agdapdu+/vU3vv73vv73vv73vv73vv71zXe+/ve+/ve+/ve+/ve+/vRTvv70777+977+977+96pqK77+9LO+/vXN077+9PO+/ve+/ve+/vVp2f++/vdOgNO+/ve+/veyBlO+/ve+/vQdQ77+9cO+/vTc477+9bBDvv71S77+977+977+977+9Zu+/ve+/vW8I77+977+977+9ZQ8paFnvv70LWnxwYe+/ve+/vVEWNBvvv71O77+977+9eQMKW++/vV8x77+977+9FO+/vd6k77+977+9LmHvv70eRS3erQBiG++/vXXvv71DzLI577+9LO+/vT3vv73vv71077+9Ze+/ve+/ve+/vTcebe+/vWbvv73vv71E77+9UEPvv71r77+9NMus77+9Zu+/ve+/vUVsXe+/ve+/ve+/ve+/ve+/vWZr77+9c29qRG0177+9VdWi77+977+9eu+/ve+/ve+/vUlfTe+/ve+/vW/vv73NujVTbX3vv73vv73vv73vv70V77+9He+/ve+/vXUj77+977+9AdeeMe+/ve+/ve+/ve+/ve+/ve+/vQHvv73vv70Y77+9aFcj77+9Y2Pvv700Zjtpb2vvv73vv73vv73vv73ZmHvXnHvvv70Y77+904Lvv73vv70y77+977+9EO+/ve+/vRjvv73vv71077+9dDvbs++/ve+/vXsX4bqU77+9Wu+/vVsH77+977+977+977+9P1vvv73vv70y77+9fO+/ve+/vV8pZd6rJe+/vXvvv70cy6Yef++/ve+/vWXvv71U1LJf77+9Wg3vv73vv71j1otF77+9NO+/ve+/vQTvv73vv70A77+9SO+/vWZHD++/vQ3vv71ta++/ve+/ve+/veO+rmDvv73vv73vv71c77+9cD1+77+9Hu+/ve+/vSpG77+977+9Y++/ve+/vWfvv73vv73vv70zMXvvv73vv73vv73 ...[too long to view on UI.

