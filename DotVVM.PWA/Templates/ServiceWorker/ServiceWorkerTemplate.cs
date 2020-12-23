﻿// ------------------------------------------------------------------------------
// <auto-generated>
//     Tento kód vygeneroval nástroj.
//     Verze modulu runtime: 16.0.0.0
//  
//     Změny tohoto souboru mohou způsobit nesprávné chování a budou ztraceny,
//     pokud je kód znovu vygenerován.
// </auto-generated>
// ------------------------------------------------------------------------------
namespace DotVVM.PWA.Templates.ServiceWorker
{
    using System.Linq;
    using System.Text;
    using System.Collections.Generic;
    using DotVVM.PWA.Options.ServiceWorker;
    using System;
    
    /// <summary>
    /// Class to produce the template output
    /// </summary>
    
    #line 1 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "16.0.0.0")]
    public partial class ServiceWorkerTemplate : ServiceWorkerTemplateBase
    {
#line hidden
        /// <summary>
        /// Create the template output
        /// </summary>
        public virtual string TransformText()
        {
            this.Write("\n");
            this.Write(@"
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

serviceWorkerConfiguration = (function() {
    const oneDayExpirationPlugin = new workbox.expiration.ExpirationPlugin({ maxAgeSeconds: 24 * 60 * 60 });
    const thirtyDaysExpirationPlugin = new workbox.expiration.ExpirationPlugin({ maxAgeSeconds: 24 * 60 * 60 * 30 });
    
    const strategyStaleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'test',
        plugins: [oneDayExpirationPlugin]
    });
    const networkOnlyStrategy = new workbox.strategies.NetworkFirst();

    function registerImages(){
        console.log(""registering images"");
");
            
            #line 22 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
 
    var imageCachingStrategy = Model.CacheStrategies.FirstOrDefault(cs => cs.ContentType == ContentType.Scripts);
    GenerateStrategy(imageCachingStrategy); 

            
            #line default
            #line hidden
            this.Write(" \r\n        workbox.routing.registerRoute(\r\n            ({ request }) => request.d" +
                    "estination === \'image\', cachingStrategy);\r\n    }\r\n\r\n    function registerStyles(" +
                    "){\r\n        console.log(\"registering styles\");\r\n");
            
            #line 32 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
 
    var styleCachingStrategy = Model.CacheStrategies.FirstOrDefault(cs => cs.ContentType == ContentType.Scripts);
    GenerateStrategy(styleCachingStrategy); 

            
            #line default
            #line hidden
            this.Write(" \r\n        workbox.routing.registerRoute(\r\n            ({ request }) => request.d" +
                    "estination === \'style\', cachingStrategy);\r\n    }\r\n\r\n    function registerScripts" +
                    "(){\r\n        console.log(\"registering scripts\");\r\n");
            
            #line 42 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
 
    var scriptCachingStrategy = Model.CacheStrategies.FirstOrDefault(cs => cs.ContentType == ContentType.Scripts);
    GenerateStrategy(scriptCachingStrategy); 

            
            #line default
            #line hidden
            this.Write(" \r\n        workbox.routing.registerRoute(\r\n            ({ request }) => request.d" +
                    "estination === \'script\', cachingStrategy);\r\n    }\r\n    \r\n    function registerRo" +
                    "utes(){\r\n        console.log(\"registering routes\");\r\n");
            
            #line 52 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

    foreach (var url in Model.RouteUrls)
    {

            
            #line default
            #line hidden
            this.Write("        workbox.routing.registerRoute(/");
            
            #line 56 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(url.RouteUrlRegex));
            
            #line default
            #line hidden
            this.Write("/i, networkOnlyStrategy);\r\n");
            
            #line 57 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

    } 
            
            #line default
            #line hidden
            this.Write("    }\r\n\r\n    return {\r\n        registerImages: registerImages,\r\n        registerS" +
                    "tyles: registerStyles,\r\n        registerScripts: registerScripts,\r\n        regis" +
                    "terRoutes: registerRoutes\r\n    }\r\n\r\n})();\r\n\r\n");
            return this.GenerationEnvironment.ToString();
        }
        
        #line 70 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

    public ServiceWorkerTemplateModel Model { get; set; }

        
        #line default
        #line hidden
        
        #line 74 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

    protected void GenerateStrategy(CachingStrategy cachingStrategy)
    {
        switch (cachingStrategy?.StrategyType)
        {
            case StrategyType.CacheFirst:

        
        #line default
        #line hidden
        
        #line 80 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        let cachingStrategy = new workbox.strategies.CacheFirst({\r\n");

        
        #line default
        #line hidden
        
        #line 82 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            GenerateCacheName(cachingStrategy);
            GeneratePlugins(cachingStrategy);

        
        #line default
        #line hidden
        
        #line 85 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        });\r\n");

        
        #line default
        #line hidden
        
        #line 87 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

                break;
            case StrategyType.StaleWhileRevalidate:

        
        #line default
        #line hidden
        
        #line 90 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        let cachingStrategy = new workbox.strategies.StaleWhileRevalidate({\r\n");

        
        #line default
        #line hidden
        
        #line 92 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            GenerateCacheName(cachingStrategy);
            GeneratePlugins(cachingStrategy);

        
        #line default
        #line hidden
        
        #line 95 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        });\r\n");

        
        #line default
        #line hidden
        
        #line 97 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

                break;
            case StrategyType.NetworkFirst:

        
        #line default
        #line hidden
        
        #line 100 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        let cachingStrategy = new workbox.strategies.NetworkFirst({\r\n");

        
        #line default
        #line hidden
        
        #line 102 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            GenerateCacheName(cachingStrategy);
            GeneratePlugins(cachingStrategy);

        
        #line default
        #line hidden
        
        #line 105 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        }\r\n");

        
        #line default
        #line hidden
        
        #line 107 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

                break;
            default:

        
        #line default
        #line hidden
        
        #line 110 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        let cachingStrategy = new workbox.strategies.NetworkFirst({\r\n");

        
        #line default
        #line hidden
        
        #line 112 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            GeneratePlugins(cachingStrategy);

        
        #line default
        #line hidden
        
        #line 114 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("        }\r\n");

        
        #line default
        #line hidden
        
        #line 116 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

                break;
        }
    }

        
        #line default
        #line hidden
        
        #line 123 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

    protected void GenerateCacheName(CachingStrategy cachingStrategy)
    {
        if (!string.IsNullOrWhiteSpace(cachingStrategy.CacheName))
        {

        
        #line default
        #line hidden
        
        #line 128 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("            cacheName: \'");

        
        #line default
        #line hidden
        
        #line 129 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write(this.ToStringHelper.ToStringWithCulture(cachingStrategy.CacheName));

        
        #line default
        #line hidden
        
        #line 129 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("\',\r\n");

        
        #line default
        #line hidden
        
        #line 130 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

        }
    }

        
        #line default
        #line hidden
        
        #line 135 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

    protected void GeneratePlugins(CachingStrategy cachingStrategy)
    {
        if (cachingStrategy.ExpirationPlugin != null && (cachingStrategy.ExpirationPlugin.MaxAgeSeconds > 0 || cachingStrategy.ExpirationPlugin.MaxEntries > 0))
        {

        
        #line default
        #line hidden
        
        #line 140 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("            plugins: [\r\n                new workbox.cacheableResponse.CacheableRe" +
        "sponsePlugin({ statuses: [200] }), \r\n                new workbox.expiration.Expi" +
        "rationPlugin({ \r\n");

        
        #line default
        #line hidden
        
        #line 144 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            if (cachingStrategy.ExpirationPlugin.MaxAgeSeconds > 0)
            {

        
        #line default
        #line hidden
        
        #line 147 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("                    maxAgeSeconds: ");

        
        #line default
        #line hidden
        
        #line 148 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write(this.ToStringHelper.ToStringWithCulture(cachingStrategy.ExpirationPlugin.MaxAgeSeconds));

        
        #line default
        #line hidden
        
        #line 148 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write(", \r\n");

        
        #line default
        #line hidden
        
        #line 149 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            }
            if (cachingStrategy.ExpirationPlugin.MaxEntries > 0)
            {

        
        #line default
        #line hidden
        
        #line 153 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("                    maxEntries: ");

        
        #line default
        #line hidden
        
        #line 154 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write(this.ToStringHelper.ToStringWithCulture(cachingStrategy.ExpirationPlugin.MaxEntries));

        
        #line default
        #line hidden
        
        #line 154 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write(" \r\n");

        
        #line default
        #line hidden
        
        #line 155 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

            }

        
        #line default
        #line hidden
        
        #line 157 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("                })\r\n            ]\r\n");

        
        #line default
        #line hidden
        
        #line 160 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

        }
        else
        {

        
        #line default
        #line hidden
        
        #line 164 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"
this.Write("            plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({ sta" +
        "tuses: [200] })]\r\n");

        
        #line default
        #line hidden
        
        #line 166 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\ServiceWorker\ServiceWorkerTemplate.tt"

        }
    }

        
        #line default
        #line hidden
    }
    
    #line default
    #line hidden
    #region Base class
    /// <summary>
    /// Base class for this transformation
    /// </summary>
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "16.0.0.0")]
    public class ServiceWorkerTemplateBase
    {
        #region Fields
        private global::System.Text.StringBuilder generationEnvironmentField;
        private global::System.CodeDom.Compiler.CompilerErrorCollection errorsField;
        private global::System.Collections.Generic.List<int> indentLengthsField;
        private string currentIndentField = "";
        private bool endsWithNewline;
        private global::System.Collections.Generic.IDictionary<string, object> sessionField;
        #endregion
        #region Properties
        /// <summary>
        /// The string builder that generation-time code is using to assemble generated output
        /// </summary>
        protected System.Text.StringBuilder GenerationEnvironment
        {
            get
            {
                if ((this.generationEnvironmentField == null))
                {
                    this.generationEnvironmentField = new global::System.Text.StringBuilder();
                }
                return this.generationEnvironmentField;
            }
            set
            {
                this.generationEnvironmentField = value;
            }
        }
        /// <summary>
        /// The error collection for the generation process
        /// </summary>
        public System.CodeDom.Compiler.CompilerErrorCollection Errors
        {
            get
            {
                if ((this.errorsField == null))
                {
                    this.errorsField = new global::System.CodeDom.Compiler.CompilerErrorCollection();
                }
                return this.errorsField;
            }
        }
        /// <summary>
        /// A list of the lengths of each indent that was added with PushIndent
        /// </summary>
        private System.Collections.Generic.List<int> indentLengths
        {
            get
            {
                if ((this.indentLengthsField == null))
                {
                    this.indentLengthsField = new global::System.Collections.Generic.List<int>();
                }
                return this.indentLengthsField;
            }
        }
        /// <summary>
        /// Gets the current indent we use when adding lines to the output
        /// </summary>
        public string CurrentIndent
        {
            get
            {
                return this.currentIndentField;
            }
        }
        /// <summary>
        /// Current transformation session
        /// </summary>
        public virtual global::System.Collections.Generic.IDictionary<string, object> Session
        {
            get
            {
                return this.sessionField;
            }
            set
            {
                this.sessionField = value;
            }
        }
        #endregion
        #region Transform-time helpers
        /// <summary>
        /// Write text directly into the generated output
        /// </summary>
        public void Write(string textToAppend)
        {
            if (string.IsNullOrEmpty(textToAppend))
            {
                return;
            }
            // If we're starting off, or if the previous text ended with a newline,
            // we have to append the current indent first.
            if (((this.GenerationEnvironment.Length == 0) 
                        || this.endsWithNewline))
            {
                this.GenerationEnvironment.Append(this.currentIndentField);
                this.endsWithNewline = false;
            }
            // Check if the current text ends with a newline
            if (textToAppend.EndsWith(global::System.Environment.NewLine, global::System.StringComparison.CurrentCulture))
            {
                this.endsWithNewline = true;
            }
            // This is an optimization. If the current indent is "", then we don't have to do any
            // of the more complex stuff further down.
            if ((this.currentIndentField.Length == 0))
            {
                this.GenerationEnvironment.Append(textToAppend);
                return;
            }
            // Everywhere there is a newline in the text, add an indent after it
            textToAppend = textToAppend.Replace(global::System.Environment.NewLine, (global::System.Environment.NewLine + this.currentIndentField));
            // If the text ends with a newline, then we should strip off the indent added at the very end
            // because the appropriate indent will be added when the next time Write() is called
            if (this.endsWithNewline)
            {
                this.GenerationEnvironment.Append(textToAppend, 0, (textToAppend.Length - this.currentIndentField.Length));
            }
            else
            {
                this.GenerationEnvironment.Append(textToAppend);
            }
        }
        /// <summary>
        /// Write text directly into the generated output
        /// </summary>
        public void WriteLine(string textToAppend)
        {
            this.Write(textToAppend);
            this.GenerationEnvironment.AppendLine();
            this.endsWithNewline = true;
        }
        /// <summary>
        /// Write formatted text directly into the generated output
        /// </summary>
        public void Write(string format, params object[] args)
        {
            this.Write(string.Format(global::System.Globalization.CultureInfo.CurrentCulture, format, args));
        }
        /// <summary>
        /// Write formatted text directly into the generated output
        /// </summary>
        public void WriteLine(string format, params object[] args)
        {
            this.WriteLine(string.Format(global::System.Globalization.CultureInfo.CurrentCulture, format, args));
        }
        /// <summary>
        /// Raise an error
        /// </summary>
        public void Error(string message)
        {
            System.CodeDom.Compiler.CompilerError error = new global::System.CodeDom.Compiler.CompilerError();
            error.ErrorText = message;
            this.Errors.Add(error);
        }
        /// <summary>
        /// Raise a warning
        /// </summary>
        public void Warning(string message)
        {
            System.CodeDom.Compiler.CompilerError error = new global::System.CodeDom.Compiler.CompilerError();
            error.ErrorText = message;
            error.IsWarning = true;
            this.Errors.Add(error);
        }
        /// <summary>
        /// Increase the indent
        /// </summary>
        public void PushIndent(string indent)
        {
            if ((indent == null))
            {
                throw new global::System.ArgumentNullException("indent");
            }
            this.currentIndentField = (this.currentIndentField + indent);
            this.indentLengths.Add(indent.Length);
        }
        /// <summary>
        /// Remove the last indent that was added with PushIndent
        /// </summary>
        public string PopIndent()
        {
            string returnValue = "";
            if ((this.indentLengths.Count > 0))
            {
                int indentLength = this.indentLengths[(this.indentLengths.Count - 1)];
                this.indentLengths.RemoveAt((this.indentLengths.Count - 1));
                if ((indentLength > 0))
                {
                    returnValue = this.currentIndentField.Substring((this.currentIndentField.Length - indentLength));
                    this.currentIndentField = this.currentIndentField.Remove((this.currentIndentField.Length - indentLength));
                }
            }
            return returnValue;
        }
        /// <summary>
        /// Remove any indentation
        /// </summary>
        public void ClearIndent()
        {
            this.indentLengths.Clear();
            this.currentIndentField = "";
        }
        #endregion
        #region ToString Helpers
        /// <summary>
        /// Utility class to produce culture-oriented representation of an object as a string.
        /// </summary>
        public class ToStringInstanceHelper
        {
            private System.IFormatProvider formatProviderField  = global::System.Globalization.CultureInfo.InvariantCulture;
            /// <summary>
            /// Gets or sets format provider to be used by ToStringWithCulture method.
            /// </summary>
            public System.IFormatProvider FormatProvider
            {
                get
                {
                    return this.formatProviderField ;
                }
                set
                {
                    if ((value != null))
                    {
                        this.formatProviderField  = value;
                    }
                }
            }
            /// <summary>
            /// This is called from the compile/run appdomain to convert objects within an expression block to a string
            /// </summary>
            public string ToStringWithCulture(object objectToConvert)
            {
                if ((objectToConvert == null))
                {
                    throw new global::System.ArgumentNullException("objectToConvert");
                }
                System.Type t = objectToConvert.GetType();
                System.Reflection.MethodInfo method = t.GetMethod("ToString", new System.Type[] {
                            typeof(System.IFormatProvider)});
                if ((method == null))
                {
                    return objectToConvert.ToString();
                }
                else
                {
                    return ((string)(method.Invoke(objectToConvert, new object[] {
                                this.formatProviderField })));
                }
            }
        }
        private ToStringInstanceHelper toStringHelperField = new ToStringInstanceHelper();
        /// <summary>
        /// Helper to produce culture-oriented representation of an object as a string
        /// </summary>
        public ToStringInstanceHelper ToStringHelper
        {
            get
            {
                return this.toStringHelperField;
            }
        }
        #endregion
    }
    #endregion
}
