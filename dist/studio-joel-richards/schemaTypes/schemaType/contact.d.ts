export declare const contactType: {
    type: "document";
    name: "contact";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
};
