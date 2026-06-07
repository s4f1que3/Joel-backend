export declare const bioType: {
    type: "document";
    name: "bio";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
};
