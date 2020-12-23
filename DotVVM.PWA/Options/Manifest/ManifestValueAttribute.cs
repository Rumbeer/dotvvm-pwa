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

        public static string ToManifestValue(Enum value)
        {
            var type = value.GetType();
            var fieldInfo = type.GetField(value.ToString());

            var attributes = fieldInfo.GetCustomAttributes(typeof(ManifestValueAttribute), false) as ManifestValueAttribute[];
            return attributes?.Any() == true ? attributes[0].ManifestValue : value.ToString();
        }
    }
}