export declare const fileType: {
    type: "document";
    name: "resume";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
};
