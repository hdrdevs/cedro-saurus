export default function ({ url, height }) {
    const baseUrl = "https://cedro-examples.hdrdevs.com.ar/examples/";

    return (
        <div style={{ marginBottom: "15px" }}>
            <iframe
                src={baseUrl + url}
                style={{ width: "100%", height: "" + height + "px" }}
            ></iframe>
        </div>
    );
}
