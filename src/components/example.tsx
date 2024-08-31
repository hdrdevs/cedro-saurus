import { useColorMode } from "@docusaurus/theme-common";

export default function ({ url, height }) {
    const { colorMode } = useColorMode();
    const theme = colorMode === "dark" ? "?theme=cedro-dark" : "?theme=light";
    const baseUrl = "https://cedro-examples.hdrdevs.com.ar/examples/";

    return (
        <div style={{ marginBottom: "15px" }}>
            <iframe
                src={baseUrl + url + theme}
                style={{ width: "100%", height: "" + height + "px" }}
            ></iframe>
        </div>
    );
}
