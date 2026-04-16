---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.488Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine Java compat runtime appengine-web.xml configuration updates"
feature_slug: "app-engine-java-compat-runtime-appengine-web-xml-configuration-updates"
latest_feature_date: "2017-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
keywords:
  - "app"
  - "engine"
  - "java"
  - "compat"
  - "runtime"
  - "appengine"
  - "web"
  - "xml"
---

# App Engine Java compat runtime appengine-web.xml configuration updates

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine standard API-compatible Java SDK 1.9.56 added appengine-web.xml options for subnetwork_name, session_affinity, and updated liveness/readiness health checks.

## Extended Definition

App Engine standard API-compatible Java SDK 1.9.56 added appengine-web.xml options for subnetwork_name, session_affinity, and updated liveness/readiness health checks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)

## Supporting Pages

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference-required-3`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The web.xml file is only used when deploying a Java app to a runtime that includes the Eclipse Jetty 9/ servlet 3 server.
- Here is a web.xml example that maps all URL paths ( / ) to the servlet class = mysite.server.ComingSoonServlet : <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app 3 1.xsd" version="3.1"> <servlet> <servlet-name>comingsoon</servlet-name> <servlet-class>mysite.server.ComingSoonServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>comingsoon</servlet-name> <url-pattern>/ </url-pattern> </servlet-mapping> </web-app> Servlets and URL paths web.xml defines mappings between URL paths and the servlets that handle requests with those paths.
- Specifically, you cannot customize the 404 response page when no servlet mapping is defined for a URL, the 403 quota error page, or the 500 server error page that appears after an App Engine internal error. web.xml features not supported The following web.xml features are not supported by App Engine: App Engine supports the <load-on-startup> element for servlet declarations.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring the web.xml deployment descriptor Stay organized with collections Save and categorize content based on your preferences.

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organizing your files Your source tree should look like this: MyDir/ [pom.xml] [build.gradle] [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml docker/ [Dockerfile] java/ com.example.mycode/ MyCode.java webapp/ [index.html] [jsp.jsp] WEB-INF/ [web.xml] Local testing When testing in your local environment, you may use emulated Google Cloud services, rather than remote Google Cloud services.
- If you use any these files, you must deploy them separately with the gcloud app deploy command. web.xml is optional and only needed if you are not using Servlet 3.x annotations.
- JAVA OPTS JVM runtime arguments Enhanced Cloud Logging (Beta) When running on the App Engine flexible environment, you can configure Java Util Logging to send logs to Cloud Logging by setting the JETTY ARGS environment variable.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Java runtime Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Create a Java app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)
- Source ID: `site-docs-reference-required-4`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing or replacing it should not affect the execution of the samples in anyway. --> <parent> <groupId>com.google.cloud.samples</groupId> <artifactId>shared-configuration</artifactId> <version>1.2.0</version> </parent> <properties> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <exec.mainClass>com.example.appengine.Application</exec.mainClass> <maven.compiler.target>11</maven.compiler.target> <maven.compiler.source>11</maven.compiler.source> <micronaut.version>3.10.3</micronaut.version> </properties> <dependencies> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-runtime</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-client</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>javax.annotation</groupId> <artifactId>javax.annotation-api</artifactId> <version>1.3.2</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-server-netty</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.13.2</version> <scope>test</scope> </dependency> </dependencies> <build> <plugins> <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.0</version> <configuration> <projectId>GCLOUD CONFIG</projectId> <version>micronaut-helloworld</version> </configuration> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-shade-plugin</artifactId> <version>3.5.1</version> <executions> <execution> <phase>package</phase> <goals> <goal>shade</goal> </goals> <configuration> <transformers> <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"> <mainClass>${exec.mainClass}</mainClass> </transformer> <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/> </transformers> </configuration> </execution> </executions> </plugin> <plugin> <groupId>org.codehaus.mojo</groupId> <artifactId>exec-maven-plugin</artifactId> <version>3.1.1</version> <configuration> <executable>java</executable> <arguments> <argument>-noverify</argument> <argument>-XX:TieredStopAtLevel=1</argument> <argument>-Dcom.sun.management.jmxremote</argument> <argument>-classpath</argument> <classpath/> <argument>${exec.mainClass}</argument> </arguments> </configuration> </plugin> <plugin> <artifactId>maven-surefire-plugin</artifactId> <version>3.2.5</version> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-compiler-plugin</artifactId> <version>3.12.1</version> <configuration> <encoding>UTF-8</encoding> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> <executions> <execution> <id>test-compile</id> <goals> <goal>testCompile</goal> </goals> <configuration> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> </execution> </executions> </plugin> </plugins> </build> </project> For more information about pom.xml files, see the Maven documentation .
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import static org.junit.Assert.assertEquals ; import io.micronaut.context.ApplicationContext ; import io.micronaut.http.HttpRequest ; import io.micronaut.http.client.HttpClient ; import io.micronaut.runtime.server.EmbeddedServer ; import org.junit.AfterClass ; import org.junit.BeforeClass ; import org.junit.Test ; public class HelloControllerTest { private static EmbeddedServer server ; private static HttpClient client ; @BeforeClass public static void setupServer () { server = ApplicationContext . run ( EmbeddedServer . class ); client = server . getApplicationContext (). createBean ( HttpClient . class , server . getURL ()); } @AfterClass public static void stopServer () { if ( client != null ) { client . stop (); } if ( server != null ) { server . stop (); } } @Test public void testHelloWorldResponse () { String response = client . toBlocking (). retrieve ( HttpRequest .
- Deploy and run Hello World on App Engine To deploy your app to the App Engine flexible environment: Deploy the Hello World app by running the following command from the java-17/micronaut-helloworld directory: mvn clean package appengine:deploy Launch your browser to view the app at https:// PROJECT ID .
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: App Engine Admin ( roles/appengine.appAdmin ) on the project Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project Storage Object Admin ( roles/storage.objectAdmin ) on the project Logs Viewer ( roles/logging.viewer ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service account Ask your administrator to grant the following roles for the App Engine default service account: Artifact Registry Reader ( roles/artifactregistry.reader ) on the project Cloud Build Service Account ( roles/cloudbuild.builds.builder ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

