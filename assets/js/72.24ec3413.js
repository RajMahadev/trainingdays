(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{919:function(e,t,s){"use strict";s.r(t);var a=s(34),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"baseline-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baseline-deployment"}},[e._v("#")]),e._v(" Baseline Deployment")]),e._v(" "),s("p",[e._v("⏲️ "),s("em",[e._v("Est. time to complete: 15 min.")]),e._v(" ⏲️")]),e._v(" "),s("p",[e._v("If you could not finish the challenges and/or breakout parts of "),s("em",[e._v("Day 2")]),e._v(", here is a script that will put you back on track and give you the opportunity to start right off with the content of "),s("em",[e._v("Day 3")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#pre-requisites"}},[e._v("Pre-Requisites")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#run-the-script"}},[e._v("Run the script")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#results"}},[e._v("Results")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#optional"}},[e._v("Optional")])])]),e._v(" "),s("h2",{attrs:{id:"pre-requisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-Requisites")]),e._v(" "),s("p",[e._v("The script itself is a "),s("code",[e._v("bash")]),e._v(" script. If you want to use "),s("code",[e._v("bash")]),e._v(" on your own/local machine, make sure you have the "),s("code",[e._v("zip")]),e._v(" package installed:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zip")]),e._v("\n")])])]),s("p",[e._v("You can run the bash script either in the Azure Cloud Shell ("),s("a",{attrs:{href:"https://shell.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://shell.azure.com"),s("OutboundLink")],1),e._v(" - "),s("em",[e._v("recommended")]),e._v(") or on your own machine. Either way, it will use your Azure CLI credentials. So make sure you are logged in and have selected the correct subscription. You can check the current subscription by running:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az account show\n")])])]),s("p",[e._v("If it isn't the correct one, follow these steps:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az account list -o table\n")])])]),s("p",[e._v("It prints the available subscriptions for your account. Copy the subscription id of the one you want to work with and run:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az account "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" -s "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("SUBSCRIPTION_ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("If the desired subscription does not show up, re-login to Azure via "),s("code",[e._v("az login")]),e._v(" and select the appropriate one.")]),e._v(" "),s("p",[e._v("If you are all set, you must run the script to deploy the baseline.")]),e._v(" "),s("h2",{attrs:{id:"run-the-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-script"}},[e._v("#")]),e._v(" Run the script")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" day3/scripts/baseline\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Execute...")]),e._v("\n./deploy_baseline.sh\n")])])]),s("h2",{attrs:{id:"results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[e._v("#")]),e._v(" Results")]),e._v(" "),s("p",[e._v("To check, if everything works as expected after the script has finished, go to the Azure Portal and open the resource group (named "),s("code",[e._v('"azdcXXXX-rg"')]),e._v("). Check that all resources have been deployed.")]),e._v(" "),s("p",[e._v("Futhermore, the script outputs the URL for the website (like "),s("code",[e._v('"https://azdcXXXXfe.z6.web.core.windows.net/"')]),e._v("). Copy the URL and open it in a browser. You should now see the SCM Contacts application as it would be running after Day 2 of the Azure Developer College.")]),e._v(" "),s("h2",{attrs:{id:"optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional"}},[e._v("#")]),e._v(" Optional")]),e._v(" "),s("p",[e._v("You can overwrite each name of the resources created by using these environment variables. If you skip one of them, the script will use a generated name for you.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_REGION_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("YourAzureRegion"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#default: westeurope")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_RG_COMMON_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheResourceGroup"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_AI_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheAppInsightsComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## both storage account names must be 15 characters or less and all LOWERCASE")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_STORAGEACCOUNT_FE_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheStorageAccountForFrontend"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_STORAGEACCOUNT_RES_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheStorageAccountForFunctionsAndImages"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_API_WEBAPP_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheContactsApiWebApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_RES_WEBAPP_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheResourcesApiWebApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_RES_FUNCAPP_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NameOfTheFunctionsApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/day3/"}},[e._v("🔼 Day 3")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day3/challenges/01-challenge-cosmosdb.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);