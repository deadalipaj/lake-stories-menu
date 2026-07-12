import React, { useState } from "react";
import { FoodMenu } from "./components/FoodMenu";
import { BreakfastMenu } from "./components/BreakfastMenu";
import { DrinksMenu } from "./components/DrinksMenu";

export type Lang = "en" | "sq";

type MenuTab = "breakfast" | "food" | "drinks";

const HERO_IMAGE =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701391618.jpg?k=cfbecfc31b323d426e20609cdae15fdc80d9dfdbdc2e011536b4464c9e34b0f9&o=";

const tabs: { id: MenuTab; label: { en: string; sq: string }; icon: string }[] = [
  { id: "breakfast", label: { en: "Breakfast", sq: "Mëngjes" }, icon: "☀️" },
  { id: "food", label: { en: "Food", sq: "Ushqim" }, icon: "🍽️" },
  { id: "drinks", label: { en: "Drinks", sq: "Pije" }, icon: "🍹" },
];

const sectionTitle: Record<MenuTab, { en: string; sq: string }> = {
  breakfast: { en: "Breakfast Menu", sq: "Menuja e Mëngjesit" },
  food: { en: "Food Menu", sq: "Menuja e Ushqimit" },
  drinks: { en: "Drinks Menu", sq: "Menuja e Pijeve" },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<MenuTab>("food");
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "340px",
          overflow: "hidden",
          background: "#4A3728",
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="Lake Stories restaurant terrace by the water"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(44,26,14,0.3) 0%, rgba(44,26,14,0.75) 100%)",
          }}
        />

        {/* Language toggle — top right */}
        <button
          onClick={() => setLang((l) => (l === "en" ? "sq" : "en"))}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 10,
            background: "rgba(253,246,233,0.15)",
            border: "1px solid rgba(253,246,233,0.35)",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            backdropFilter: "blur(6px)",
            transition: "background 0.2s",
          }}
        >
          {lang === "en" ? (
            <>
              {/* Albanian flag */}
              <AlbanianFlag />
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(253,246,233,0.9)",
                  fontWeight: 700,
                }}
              >
                SQ
              </span>
            </>
          ) : (
            <>
              {/* UK flag */}
              <UKFlag />
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(253,246,233,0.9)",
                  fontWeight: 700,
                }}
              >
                EN
              </span>
            </>
          )}
        </button>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(253,246,233,0.75)",
              fontSize: "0.78rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {lang === "en" ? "Restaurant & Bar Café" : "Restorant & Bar Kafé"}
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FDF6E9",
              fontSize: "clamp(2.4rem, 8vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              marginBottom: "14px",
              textShadow: "0 2px 16px rgba(44,26,14,0.4)",
            }}
          >
            Lake Stories
          </h1>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--secondary)",
              margin: "0 auto",
            }}
          />
        </div>
      </div>

      {/* Sticky tab navigation */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--card)",
          borderBottom: "1px solid var(--border)",
          boxShadow: "0 2px 12px rgba(44,26,14,0.08)",
        }}
      >
        <div style={{ display: "flex", maxWidth: "680px", margin: "0 auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: "14px 8px",
                border: "none",
                background: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                position: "relative",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ fontSize: "1.15rem" }}>{tab.icon}</span>
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: activeTab === tab.id ? 700 : 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: activeTab === tab.id ? "var(--accent)" : "var(--muted-foreground)",
                  transition: "color 0.2s ease",
                }}
              >
                {tab.label[lang]}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "20%",
                  right: "20%",
                  height: "2.5px",
                  borderRadius: "2px 2px 0 0",
                  background: activeTab === tab.id ? "var(--accent)" : "transparent",
                  transition: "background 0.25s ease",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "36px 20px 80px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.85rem",
              fontWeight: 600,
              color: "var(--foreground)",
              marginBottom: "10px",
            }}
          >
            {sectionTitle[activeTab][lang]}
          </h2>
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "var(--secondary)",
              margin: "0 auto",
            }}
          />
        </div>

        {activeTab === "breakfast" && <BreakfastMenu lang={lang} />}
        {activeTab === "food" && <FoodMenu lang={lang} />}
        {activeTab === "drinks" && <DrinksMenu lang={lang} />}
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "var(--foreground)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--secondary)",
            fontSize: "1.4rem",
            fontStyle: "italic",
            marginBottom: "6px",
          }}
        >
          Lake Stories
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "rgba(253,246,233,0.45)",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {lang === "en" ? "Restaurant & Bar Café" : "Restorant & Bar Kafé"}
        </p>
      </footer>
    </div>
  );
}

function AlbanianFlag() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" style={{ borderRadius: "2px", flexShrink: 0 }}>
      <rect width="22" height="15" fill="#E41E20" />
      {/* Double-headed eagle silhouette */}
      <g fill="#1a1a1a" transform="translate(11,7.5) scale(0.038)">
        <path d="M0,-80 C-10,-70 -30,-65 -40,-50 C-50,-35 -45,-20 -35,-15 C-45,-10 -55,0 -50,15 C-45,30 -30,30 -20,20 C-15,30 -10,45 0,50 C10,45 15,30 20,20 C30,30 45,30 50,15 C55,0 45,-10 35,-15 C45,-20 50,-35 40,-50 C30,-65 10,-70 0,-80 Z
        M-15,-90 C-20,-95 -30,-100 -40,-95 C-50,-90 -50,-75 -40,-70 C-30,-65 -20,-70 -15,-90 Z
        M15,-90 C20,-95 30,-100 40,-95 C50,-90 50,-75 40,-70 C30,-65 20,-70 15,-90 Z" />
      </g>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg width="22" height="15" viewBox="0 0 60 40" style={{ borderRadius: "2px", flexShrink: 0 }}>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5" />
      <path d="M30,0 V40 M0,20 H60" stroke="white" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}
