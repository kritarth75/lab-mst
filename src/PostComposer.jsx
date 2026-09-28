import { useState } from "react";

const LIMITS = { Twitter: 280, LinkedIn: 3000 };

export default function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [text, setText] = useState("");

  const limit = LIMITS[platform];
  const count = text.length;
  const overLimit = count > limit;

  return (
    <div style={{ maxWidth: 480, margin: "24px auto", fontFamily: "system-ui, sans-serif" }}>
      <label htmlFor="platform">Platform </label>
      <select id="platform" value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option>Twitter</option>
        <option>LinkedIn</option>
      </select>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Write your ${platform} post...`}
        rows={6}
        aria-invalid={overLimit}
        style={{
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          marginTop: 12,
          padding: 10,
          fontSize: 16,
          border: `2px solid ${overLimit ? "#c62828" : "#ccc"}`,
          borderRadius: 6,
        }}
      />

      <div style={{ marginTop: 6, color: overLimit ? "#c62828" : "#555" }}>
        {count} / {limit}
      </div>

      {overLimit && (
        <p role="alert" style={{ color: "#c62828", margin: "6px 0 0" }}>
          Character limit exceeded. Remove {count - limit} character
          {count - limit === 1 ? "" : "s"} to post on {platform}.
        </p>
      )}
    </div>
  );
}
