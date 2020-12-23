using System;
using System.Linq;
using DotVVM.PWA.Options.Manifest;

namespace DotVVM.PWA.Extensions
{
    internal static class EnumExtensions
    {
        public static string ToManifestValue(this Enum value)
        {
            var type = value.GetType();
            var fieldInfo = type.GetField(value.ToString());

            var attributes = fieldInfo.GetCustomAttributes(typeof(ManifestValueAttribute), false) as ManifestValueAttribute[];
            return attributes?.Any() == true ? attributes[0].ManifestValue : value.ToString();
        }
    }
}