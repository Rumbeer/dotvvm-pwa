using System;
using System.Linq;

namespace DotVVM.PWA.Options.Manifest
{
    [AttributeUsage(AttributeTargets.Field)]
    internal class ManifestValueAttribute : Attribute
    {

        public ManifestValueAttribute(string manifestValue)
        {
            ManifestValue = manifestValue;
        }

        public string ManifestValue { get; private set; }
    }
}