namespace DotVVM.PWA.Options.Manifest
{
    public class Icon
    {
        /// <summary>
        /// The path to the image file. If Src is a relative URL, the base URL will be the URL of the manifest.
        /// </summary>
        public string Src { get; set; }

        /// <summary>
        /// A hint as to the media type of the image. The purpose of this member is to allow a user agent to quickly ignore images with media types it does not support.
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// A string containing space-separated image dimensions.
        /// </summary>
        public string Sizes { get; set; }

        /// <summary>
        /// Defines the purpose of the image, for example if the image is intended to serve some special purpose in the context of the host OS (i.e., for better integration).
        /// </summary>
        public IconPurpose[] Purposes { get; set; }
    }
}