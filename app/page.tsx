import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "20px 1fr 20px",
        alignItems: "center",
        justifyItems: "center",
        minHeight: "100vh",
        padding: "80px",
        gap: "64px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          gridRowStart: 2,
        }}
      >
        <Image
          style={{ filter: "invert(0)" }}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol
          style={{
            paddingLeft: 0,
            margin: 0,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            listStylePosition: "inside",
          }}
        >
          <li style={{ marginBottom: "8px" }}>
            Get started by editing <code style={{ background: "#f0f0f0", padding: "2px 4px", borderRadius: "4px", fontWeight: 600 }}>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div style={{ display: "flex", gap: "16px" }}>
          <a
            style={{
              appearance: "none",
              borderRadius: "128px",
              height: "48px",
              padding: "0 20px",
              border: "1px solid transparent",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 500,
              background: "#171717",
              color: "#ffffff",
              gap: "8px",
            }}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            style={{
              borderColor: "rgba(0, 0, 0, 0.08)",
              minWidth: "180px",
            }}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer
        style={{
          gridRowStart: 3,
          display: "flex",
          gap: "24px",
        }}
      >
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
