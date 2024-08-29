import Link from "@docusaurus/Link";

export default function ({ name, fromName = "Widget" }) {
    const fromUrl = `./${fromName.toLowerCase()}`;
    return (
        <div style={{ marginBottom: "15px" }}>
            The <span style={{ fontWeight: "bold" }}>{name}</span> widget inherits from{" "}
            <Link href={fromUrl}>{fromName}</Link> class → Has all <strong>{fromName}</strong>{" "}
            properties.
        </div>
    );
}
