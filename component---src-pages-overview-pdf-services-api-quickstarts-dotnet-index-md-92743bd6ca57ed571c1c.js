"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7597],{52560:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return u}});var i,o=n(87462),a=n(63366),r=(n(15007),n(64983)),s=n(91515),p=["components"],c={},d=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:c},m=s.Z;function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.mdx)(m,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"getting-started-with-adobe-pdf-services-api-net"},"Getting Started with Adobe PDF Services API (.NET)"),(0,r.mdx)("p",null,"To get started using Adobe PDF Services API, let's walk through a simple scenario - taking an input PDF document and exporting it to Microsoft Word. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"To complete this guide, you will need:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download"},".NET Core: version 2.1 or above")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".Net SDK")),(0,r.mdx)("li",{parentName:"ul"},"A build tool: Either Visual Studio or .NET Core CLI."),(0,r.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,r.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,r.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,r.mdx)("p",null,"1) To begin, open your browser to ",(0,r.mdx)("a",{parentName:"p",href:"https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"},"https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,r.mdx)("p",null,'3) Change the "Choose language" setting to ".Net". '),(0,r.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,r.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"952px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/5530d/shot2.webp 320w","/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/0c8fb/shot2.webp 640w","/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/493ca/shot2.webp 952w"],sizes:"(max-width: 952px) 100vw, 952px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/dd4a7/shot2.png 320w","/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/0f09e/shot2.png 640w","/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/be2fd/shot2.png 952w"],sizes:"(max-width: 952px) 100vw, 952px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/170d38f41149ec10573ec503c7452504/be2fd/shot2.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"6) After your credentials are created, they are automatically  downloaded:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"913px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.87500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/5530d/shot3.webp 320w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/0c8fb/shot3.webp 640w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/4d027/shot3.webp 913w"],sizes:"(max-width: 913px) 100vw, 913px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/dd4a7/shot3.png 320w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/0f09e/shot3.png 640w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/200fa/shot3.png 913w"],sizes:"(max-width: 913px) 100vw, 913px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/200fa/shot3.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,r.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-.NetSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"902px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/0c8fb/shot5.webp 640w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/2096f/shot5.webp 902w"],sizes:"(max-width: 902px) 100vw, 902px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/0f09e/shot5.png 640w","/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/8d021/shot5.png 902w"],sizes:"(max-width: 902px) 100vw, 902px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b428d92f621f886613d638e421dd2391/8d021/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"2) We need two things from this download. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file. You can find this in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"adobe-DC.PDFServicesSDK.NET.Samples")," folder, inside any of the sample subdirectories, so for example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"CombinePDF")," folder."),(0,r.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Note that that private key is ",(0,r.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,r.mdx)("p",null,"3) Take these two files and place them in a new directory."),(0,r.mdx)("p",null,"4) In your new directory, create a new file, ",(0,r.mdx)("inlineCode",{parentName:"p"},"ExportPDFToWord.csproj"),". This file will declare our requirements as well as help define the application we're creating."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n\n    <PropertyGroup>\n        <OutputType>Exe</OutputType>\n        <TargetFramework>netcoreapp3.1</TargetFramework>\n    </PropertyGroup>\n\n    <ItemGroup>\n        <PackageReference Include="log4net" Version="2.0.12" />\n        <PackageReference Include="Adobe.PDFServicesSDK" Version="2.2.1" />\n    </ItemGroup>\n\n    <ItemGroup>\n        <None Update="pdfservices-api-credentials.json">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="private.key">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="extractPDFInput.pdf">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n        <None Update="log4net.config">\n            <CopyToOutputDirectory>Always</CopyToOutputDirectory>\n        </None>\n    </ItemGroup>\n\n</Project>\n')),(0,r.mdx)("p",null,"Our application will take a PDF, ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bodea Brochure.pdf")," (downloadable from ","[here]","(",(0,r.mdx)("a",{parentName:"p",href:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea"},"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea")," Brochure.pdf)) and convert it to a Microsoft Word document, ",(0,r.mdx)("inlineCode",{parentName:"p"},"Bodea Brochure.docx"),"."),(0,r.mdx)("p",null,"5) In your editor, open the directory where you previously copied the credentials and created the ",(0,r.mdx)("inlineCode",{parentName:"p"},"csproj")," file. Create a new file, ",(0,r.mdx)("inlineCode",{parentName:"p"},"Program.cs"),". "),(0,r.mdx)("p",null,"Now you're ready to begin coding."),(0,r.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,r.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},"using System.IO;\nusing System;\nusing System.Collections.Generic;\nusing log4net.Repository;\nusing log4net.Config;\nusing log4net;\nusing System.Reflection;\nusing Adobe.PDFServicesSDK;\nusing Adobe.PDFServicesSDK.auth;\nusing Adobe.PDFServicesSDK.pdfops;\nusing Adobe.PDFServicesSDK.options.exportpdf;\nusing Adobe.PDFServicesSDK.io;\nusing Adobe.PDFServicesSDK.exception;\n")),(0,r.mdx)("p",null,"2) Now let's define our main class and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Main")," method:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},"namespace ExportPDFToWord\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n        }\n    }\n}\n")),(0,r.mdx)("p",null,"3) Inside our class, we'll begin by defining our input PDF and output filenames. If the output file already exists, it will be deleted:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},'String input = "./Bodea Brochure.pdf";\n\nString output = "./Bodea Brochure.docx";\nif(File.Exists(Directory.GetCurrentDirectory() + output))\n{\n    File.Delete(Directory.GetCurrentDirectory() + output);\n}\n\nConsole.Write("Exporting "+ input + " to " + output + "\\n");\n')),(0,r.mdx)("p",null,"4) Next, we setup the SDK to use our credentials."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},'// Initial setup, create credentials instance.\nCredentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n    .Build();\n\n// Create an ExecutionContext using credentials and create a new operation instance.\nExecutionContext executionContext = ExecutionContext.Create(credentials);\n')),(0,r.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,r.mdx)("p",null,"5) Now, let's create the operation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},"ExportPDFOperation exportPdfOperation = ExportPDFOperation.CreateNew(ExportPDFTargetFormat.DOCX);\n\n// Provide an input FileRef for the operation.\nFileRef sourceFileRef = FileRef.CreateFromLocalFile(input);\nexportPdfOperation.SetInput(sourceFileRef);\n")),(0,r.mdx)("p",null,"This set of code defines what we're doing (an Export operation), points to our local file and specifies the input is a PDF, and then defines options for the Export call. In this example, the only option is the export format, DOCX."),(0,r.mdx)("p",null,"6) The next code block executes the operation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},"// Execute the operation.\nFileRef result = exportPdfOperation.Execute(executionContext);\n\n// Save the result to the specified location.\nresult.SaveAs(Directory.GetCurrentDirectory() + output);\n")),(0,r.mdx)("p",null,"This code runs the Extraction process and then stores the result Word document to the file system. "),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"548px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f1d7242440ea91e11f9cb617f3556d9/5530d/shot9.webp 320w","/pdfservices-api-documentation/static/4f1d7242440ea91e11f9cb617f3556d9/61816/shot9.webp 548w"],sizes:"(max-width: 548px) 100vw, 548px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f1d7242440ea91e11f9cb617f3556d9/dd4a7/shot9.png 320w","/pdfservices-api-documentation/static/4f1d7242440ea91e11f9cb617f3556d9/9079b/shot9.png 548w"],sizes:"(max-width: 548px) 100vw, 548px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/4f1d7242440ea91e11f9cb617f3556d9/9079b/shot9.png",alt:"Example running in the command line",title:"Example running in the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"Here's the complete application (",(0,r.mdx)("inlineCode",{parentName:"p"},"Program.cs"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-csharp"},'using System.IO;\nusing System;\nusing System.Collections.Generic;\nusing log4net.Repository;\nusing log4net.Config;\nusing log4net;\nusing System.Reflection;\nusing Adobe.PDFServicesSDK;\nusing Adobe.PDFServicesSDK.auth;\nusing Adobe.PDFServicesSDK.pdfops;\nusing Adobe.PDFServicesSDK.options.exportpdf;\nusing Adobe.PDFServicesSDK.io;\nusing Adobe.PDFServicesSDK.exception;\n\nnamespace ExportPDFToWord\n{\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            // Configure the logging.\n            ConfigureLogging();\n            try\n            {\n\n                String input = "./Bodea Brochure.pdf";\n\n                String output = "./Bodea Brochure.docx";\n                if(File.Exists(Directory.GetCurrentDirectory() + output))\n                {\n                    File.Delete(Directory.GetCurrentDirectory() + output);\n                }\n\n                Console.Write("Exporting "+ input + " to " + output + "\\n");\n\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                    .Build();\n\n                // Create an ExecutionContext using credentials and create a new operation instance.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n                ExportPDFOperation exportPdfOperation = ExportPDFOperation.CreateNew(ExportPDFTargetFormat.DOCX);\n\n                // Provide an input FileRef for the operation.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(input);\n                exportPdfOperation.SetInput(sourceFileRef);\n                \n\n                // Execute the operation.\n                FileRef result = exportPdfOperation.Execute(executionContext);\n\n                // Save the result to the specified location.\n                result.SaveAs(Directory.GetCurrentDirectory() + output);\n\n                Console.Write("All Done");\n                \n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (ServiceApiException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (SDKException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (IOException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            catch (Exception ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n        }\n\n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,r.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,r.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-quickstarts-dotnet-index-md-92743bd6ca57ed571c1c.js.map