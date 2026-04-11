---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.607Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Group chat creation in import mode"
feature_slug: "group-chat-creation-in-import-mode"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-user"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-app"
keywords:
  - "creation"
  - "group"
  - "mode"
  - "import"
  - "the"
  - "chat"
  - "api"
  - "in"
---

# Group chat creation in import mode

Product: Chat API
Coverage: LOW

## Step 02 Summary

The Chat API now allows creating Google Chat group spaces in import mode via the spaces.create method.

## Extended Definition

The Chat API now allows creating Google Chat group spaces in import mode via the spaces.create method.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)

## Supporting Pages

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.app (to remove the calling app from the space) https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships App authentication is not supported for the following use cases: Removing a Google Group from a space.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships (only in spaces the app created) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships For more information, see the Authorization guide .
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.delete (only in spaces the app created) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.delete https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.delete Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.app.delete https://www.googleapis.com/auth/chat.admin.delete https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.delete For more information, see the Authorization guide .

### Authenticate and authorize as a Google Chat user \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Replace the contents in App.java with the following code: package com.google.chat.app.authsample ; import com.google.api.client.auth.oauth2.Credential ; import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp ; import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ; import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow ; import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets ; import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.HttpTransport ; import com.google.api.client.json.JsonFactory ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.client.util.store.FileDataStoreFactory ; import com.google.api.services.chat.v1.HangoutsChat ; import com.google.api.services.chat.v1.model.Space ; import java.io.InputStreamReader ; import java.util.Collection ; import java.util.Collections ; / Authenticates with Chat API via user credentials, then creates a Chat space. / public class App { // Application OAuth credentials. private static final String KEYS RESOURCE URI = "/credentials.json" ; // Define your app's authorization scopes. private static final Collection<String> SCOPES = Collections . singleton ( "https://www.googleapis.com/auth/chat.spaces.create" ); // Directory to store user credentials. private static final java . io .
- Java To add the Google client libraries and other required dependencies to your Maven project, edit the file pom.xml in your project's directory and add the following dependencies: <dependencies> <!-- ... existing dependencies ... --> <dependency> <groupId>com.google.apis</groupId> <artifactId>google-api-services-chat</artifactId> <version>v1-rev20230905-2.0.0</version> </dependency> <dependency> <groupId>com.google.auth</groupId> <artifactId>google-auth-library-oauth2-http</artifactId> <version>1.19.0</version> </dependency> <dependency> <groupId>com.google.oauth-client</groupId> <artifactId>google-oauth-client-jetty</artifactId> <version>1.34.1</version> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> <version>2.10.1</version> </dependency> </dependencies> Python If you haven't already installed the Google client libraries for Python, run the following command in your command-line interface: pip3 install --upgrade google-api-python-client google-auth-oauthlib Node.js To add the Google client libraries and other required dependencies to your Node.js project, switch into your project's directory and run the following command in your command-line interface: npm install "@googleapis/chat" open server-destroy Apps Script This sample uses the Advanced Chat service to call Google Chat API.
- To configure Maven to include the client secrets file in the project package, edit the file pom.xml in your project's directory and add the following configuration to the <build> section: <build> <!-- ... existing configurations ... --> <resources> <resource> <directory>resources</directory> </resource> </resources> </build> To configure Maven to include the dependencies in the project package and to execute your application's main class, edit the file pom.xml in your project's directory and add the following configuration to the <plugins> section: <plugins> <!-- ... existing configurations ... --> <plugin> <artifactId>maven-assembly-plugin</artifactId> <configuration> <archive> <manifest> <mainClass>com.google.chat.app.authsample.App</mainClass> </manifest> </archive> <descriptorRefs> <descriptorRef>jar-with-dependencies</descriptorRef> </descriptorRefs> </configuration> </plugin> </plugins> Python Save the following code in a file named chat space create named.py in the same directory that holds credentials.json : from google auth oauthlib.flow import InstalledAppFlow from googleapiclient.discovery import build Define your app's authorization scopes.
- To initialize a new project, run the following command in your command-line interface: mvn archetype : generate - DgroupId = com . google . chat . app . authsample - DartifactId = auth - sample - app - DarchetypeArtifactId = maven - archetype - quickstart - DarchetypeVersion = 1.4 - DinteractiveMode = false Python A Business or Enterprise Google Workspace account with access to Google Chat .

### Authenticate as a Google Chat app \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Replace the contents in App.java with the following code: package com.google.chat.app.authsample ; import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.chat.v1.HangoutsChat ; import com.google.api.services.chat.v1.model.Message ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; / Authenticates with Chat API using service account credentials, then creates a Chat message. / public class App { // Specify required scopes. private static final String CHAT SCOPE = "https://www.googleapis.com/auth/chat.bot" ; // Specify service account details. private static final String PRIVATE KEY RESOURCE URI = "/credentials.json" ; public static void main ( String [] args ) { try { // Run app.
- Java To add the Google client libraries and other required dependencies to your Maven project, edit the file pom.xml in your project's directory and add the following dependencies: <dependencies> <!-- ... existing dependencies ... --> <dependency> <groupId>com.google.apis</groupId> <artifactId>google-api-services-chat</artifactId> <version>v1-rev20230905-2.0.0</version> </dependency> <dependency> <groupId>com.google.auth</groupId> <artifactId>google-auth-library-oauth2-http</artifactId> <version>1.19.0</version> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> <version>2.10.1</version> </dependency> </dependencies> Python If you haven't already installed the Google client libraries for Python, run the following command in your command-line interface: pip3 install --upgrade google-api-python-client google-auth Node.js To add the Google client libraries to your Node.js project, switch into your project's directory and run the following command in your command-line interface: npm install "@googleapis/chat" Apps Script This sample uses the OAuth2 for Apps Script library to generate a JWT token for service account authentication.
- To initialize a new project, run the following command in your command-line interface: mvn archetype : generate - DgroupId = com . google . chat . app . authsample - DartifactId = auth - sample - app - DarchetypeArtifactId = maven - archetype - quickstart - DarchetypeVersion = 1.4 - DinteractiveMode = false A Google Chat app that receives and responds to interaction events .
- Include the following code in chat app auth.py : from apiclient.discovery import build from google.oauth2 import service account Specify required scopes.

