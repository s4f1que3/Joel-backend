export declare const uploadedArticlesType: {
    type: "document";
    name: "uploaded_article";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
};
