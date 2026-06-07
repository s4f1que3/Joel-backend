export declare const schemaTypes: (({
    type: "document";
    name: "article";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "resume";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "uploaded_article";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "contact";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "bio";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
}))[];
