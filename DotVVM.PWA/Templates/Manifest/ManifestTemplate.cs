﻿// ------------------------------------------------------------------------------
// <auto-generated>
//     Tento kód vygeneroval nástroj.
//     Verze modulu runtime: 16.0.0.0
//  
//     Změny tohoto souboru mohou způsobit nesprávné chování a budou ztraceny,
//     pokud je kód znovu vygenerován.
// </auto-generated>
// ------------------------------------------------------------------------------
namespace DotVVM.PWA.Templates.Manifest
{
    using System.Linq;
    using System.Text;
    using System.Collections.Generic;
    using DotVVM.PWA.Options.Manifest;
    using DotVVM.PWA.Extensions;
    using System;
    
    /// <summary>
    /// Class to produce the template output
    /// </summary>
    
    #line 1 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "16.0.0.0")]
    public partial class ManifestTemplate : ManifestTemplateBase
    {
#line hidden
        /// <summary>
        /// Create the template output
        /// </summary>
        public virtual string TransformText()
        {
            this.Write("\r\n{\r\n");
            
            #line 11 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.Name)) {
            
            #line default
            #line hidden
            this.Write("  \"name\": \"");
            
            #line 12 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Name));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 13 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 14 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.ShortName)) {
            
            #line default
            #line hidden
            this.Write("  \"short_name\": \"");
            
            #line 15 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.ShortName));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 16 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 17 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.Scope)) {
            
            #line default
            #line hidden
            this.Write("  \"scope\": \"");
            
            #line 18 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Scope));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 19 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 20 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.StartUrl)) {
            
            #line default
            #line hidden
            this.Write("  \"start_url\": \"");
            
            #line 21 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.StartUrl));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 22 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            this.Write("  \"display\": \"");
            
            #line 23 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Display.ToManifestValue()));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 24 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.BackgroundColor)) {
            
            #line default
            #line hidden
            this.Write("  \"background_color\": \"");
            
            #line 25 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.BackgroundColor));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 26 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 27 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.ThemeColor)) {
            
            #line default
            #line hidden
            this.Write("  \"theme_color\": \"");
            
            #line 28 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.ThemeColor));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 29 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 30 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(Options.Categories?.Any() == true) {
            
            #line default
            #line hidden
            this.Write("  \"categories\": [");
            
            #line 31 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(string.Join(", ", Options.Categories.Select(c => $"\"{c}\""))));
            
            #line default
            #line hidden
            this.Write("],\r\n");
            
            #line 32 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 33 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.Description)) {
            
            #line default
            #line hidden
            this.Write("  \"description\": \"");
            
            #line 34 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Description));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 35 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            this.Write("  \"dir\": \"");
            
            #line 36 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Dir.ToManifestValue()));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 37 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.IarcRatingId)) {
            
            #line default
            #line hidden
            this.Write("  \"iarc_rating_id\": \"");
            
            #line 38 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.IarcRatingId));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 39 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            
            #line 40 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(!string.IsNullOrWhiteSpace(Options.Lang)) {
            
            #line default
            #line hidden
            this.Write("  \"lang\": \"");
            
            #line 41 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Lang));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 42 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            this.Write("  \"orientation \": \"");
            
            #line 43 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Orientation.ToManifestValue()));
            
            #line default
            #line hidden
            this.Write("\",\r\n  \"prefer_related_applications \": ");
            
            #line 44 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.PreferRelatedApplications.ToString().ToLower()));
            
            #line default
            #line hidden
            this.Write(",\r\n  \"icons\": [\r\n");
            
            #line 46 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
for(var i = 0; i < Options.Icons.Length; i++) {
            
            #line default
            #line hidden
            this.Write("    {\r\n");
            
            #line 48 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(Options.Icons[i].Purposes?.Any() == true) {
            
            #line default
            #line hidden
            this.Write("      \"purpose\": \"");
            
            #line 49 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(string.Join(" ", Options.Icons[i].Purposes.Select(p => p.ToManifestValue()))));
            
            #line default
            #line hidden
            this.Write("\",\r\n");
            
            #line 50 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} 
            
            #line default
            #line hidden
            this.Write("      \"src\": \"");
            
            #line 51 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Icons[i].Src));
            
            #line default
            #line hidden
            this.Write("\",\r\n      \"type\": \"");
            
            #line 52 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Icons[i].Type));
            
            #line default
            #line hidden
            this.Write("\",\r\n      \"sizes\": \"");
            
            #line 53 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Options.Icons[i].Sizes));
            
            #line default
            #line hidden
            this.Write("\"\r\n");
            
            #line 54 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
if(i == Options.Icons.Length - 1) {
            
            #line default
            #line hidden
            this.Write("    }\r\n");
            
            #line 56 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
} else {
            
            #line default
            #line hidden
            this.Write("    },\r\n");
            
            #line 58 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
}
            
            #line default
            #line hidden
            
            #line 59 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
}
            
            #line default
            #line hidden
            this.Write("  ]\r\n}\r\n\r\n");
            return this.GenerationEnvironment.ToString();
        }
        
        #line 63 "C:\Users\pkost\Documents\Work\Chat\Chat\DotVVM.PWA\Templates\Manifest\ManifestTemplate.tt"
 public ManifestOptions Options { get; set; } 
        
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
    public class ManifestTemplateBase
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
