import React from "react";
import type { Lang } from "../App";

interface BreakfastItem {
  name: { en: string; sq: string };
  ingredients?: { en: string; sq: string };
  price: string;
}

interface BreakfastCategory {
  title: { en: string; sq: string };
  items: BreakfastItem[];
}

const breakfastCategories: BreakfastCategory[] = [
  {
    title: { en: "Breads & Toast", sq: "Bukë & Tost" },
    items: [
      {
        name: { en: "Bread", sq: "Bukë" },
        ingredients: { en: "Strawberry jam, peach jam, honey, chocolate praline, butter", sq: "Reçel luleshtrydhe, reçel pjeshke, mjaltë, pralinë çokollatë, gjalpë" },
        price: "100",
      },
      {
        name: { en: "Toast", sq: "Tost" },
        ingredients: { en: "Cheese, chicken prosciutto", sq: "Djathë, proshutë pule" },
        price: "100",
      },
    ],
  },
  {
    title: { en: "Yogurt & Cereals", sq: "Kos & Drithëra" },
    items: [
      {
        name: { en: "Yogurt, Honey & Walnuts", sq: "Kos, Mjaltë & Arra" },
        ingredients: { en: "Yogurt, honey, walnuts", sq: "Kos, mjaltë, arra" },
        price: "100",
      },
      {
        name: { en: "Yogurt & Fresh Fruit", sq: "Kos & Fruta të Freskëta" },
        ingredients: { en: "Yogurt, fresh fruit", sq: "Kos, fruta të freskëta" },
        price: "100",
      },
      {
        name: { en: "Yogurt & Muesli Fruit", sq: "Kos & Musli Frutash" },
        ingredients: { en: "Yogurt, fruit muesli", sq: "Kos, musli frutash" },
        price: "100",
      },
      {
        name: { en: "Chocoballs & Milk", sq: "Chocoballs & Qumësht" },
        ingredients: { en: "Chocoballs, milk", sq: "Chocoballs, qumësht" },
        price: "100",
      },
      {
        name: { en: "Muesli & Milk", sq: "Musli & Qumësht" },
        ingredients: { en: "Muesli, milk", sq: "Musli, qumësht" },
        price: "100",
      },
    ],
  },
  {
    title: { en: "Eggs", sq: "Vezë" },
    items: [
      {
        name: { en: "Fried Eggs", sq: "Vezë të Skuqura" },
        ingredients: { en: "Tomato, feta cheese, beef sausage", sq: "Domate, djathë feta, sallam viçi" },
        price: "100",
      },
      {
        name: { en: "Scrambled Eggs", sq: "Vezë të Rrahura" },
        ingredients: { en: "Tomato, feta cheese, chicken prosciutto", sq: "Domate, djathë feta, proshutë pule" },
        price: "100",
      },
      {
        name: { en: "Omelette", sq: "Omëletë" },
        ingredients: { en: "Beef sausage, chicken prosciutto, tomato, feta cheese", sq: "Sallam viçi, proshutë pule, domate, djathë feta" },
        price: "100",
      },
      {
        name: { en: "Veggie Omelette", sq: "Omëletë me Perime" },
        ingredients: { en: "Green peppers, tomato, feta cheese, cucumber, olives", sq: "Speca jeshilë, domate, djathë feta, trangull, ullinj" },
        price: "100",
      },
    ],
  },
  {
    title: { en: "Coffee & Hot Drinks", sq: "Kafe & Pije të Nxehta" },
    items: [
      { name: { en: "Espresso", sq: "Espresso" }, price: "100" },
      { name: { en: "Espresso Double", sq: "Espresso Dyfishe" }, price: "100" },
      { name: { en: "Americano", sq: "Americano" }, price: "100" },
      { name: { en: "Cappuccino", sq: "Cappuccino" }, price: "100" },
      { name: { en: "Hot Chocolate", sq: "Çokollatë e Nxehtë" }, price: "100" },
    ],
  },
  {
    title: { en: "Fruit Juices", sq: "Lëngje Frutash" },
    items: [
      { name: { en: "Orange Juice", sq: "Lëng Portokalli" }, price: "100" },
      { name: { en: "Apple Juice", sq: "Lëng Molle" }, price: "100" },
      { name: { en: "Strawberry Juice", sq: "Lëng Luleshtrydhe" }, price: "100" },
      { name: { en: "Peach Juice", sq: "Lëng Pjeshke" }, price: "100" },
    ],
  },
  {
    title: { en: "Teas", sq: "Çajra" },
    items: [
      { name: { en: "Camomile Tea", sq: "Çaj Kamomili" }, price: "100" },
      { name: { en: "Mint Tea", sq: "Çaj Nenexhiku" }, price: "100" },
      { name: { en: "Ginger Tea", sq: "Çaj Xhingeri" }, price: "100" },
      { name: { en: "Green Tea", sq: "Çaj Jeshil" }, price: "100" },
      { name: { en: "Black Tea", sq: "Çaj i Zi" }, price: "100" },
      { name: { en: "Forest Fruits Tea", sq: "Çaj Frutash Pylli" }, price: "100" },
    ],
  },
];

function BreakfastCategorySection({ category, lang }: { category: BreakfastCategory; lang: Lang }) {
  return (
    <div className="mb-10">
      <h3
        className="mb-5 pb-2 border-b"
        style={{
          fontFamily: "'Playfair Display', serif",
          borderColor: "var(--secondary)",
          color: "var(--accent)",
          fontSize: "1.2rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {category.title[lang]}
      </h3>
      <div className="flex flex-col gap-3">
        {category.items.map((item) => (
          <div key={item.name.en} className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  color: "var(--foreground)",
                  fontSize: "1rem",
                }}
              >
                {item.name[lang]}
              </span>
              {item.ingredients && (
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--muted-foreground)",
                    marginTop: "2px",
                    fontStyle: "italic",
                  }}
                >
                  {item.ingredients[lang]}
                </p>
              )}
            </div>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                color: "var(--primary)",
                fontSize: "0.95rem",
                whiteSpace: "nowrap",
                minWidth: "50px",
                textAlign: "right",
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BreakfastMenu({ lang }: { lang: Lang }) {
  return (
    <div>
      <p
        className="mb-8 text-center"
        style={{
          fontFamily: "'Lato', sans-serif",
          color: "var(--muted-foreground)",
          fontSize: "0.9rem",
          fontStyle: "italic",
        }}
      >
        {lang === "en"
          ? "Served in the morning — please ask your waiter for availability"
          : "Shërbyer në mëngjes — pyesni kamerierien për disponueshmërinë"}
      </p>
      {breakfastCategories.map((cat) => (
        <BreakfastCategorySection key={cat.title.en} category={cat} lang={lang} />
      ))}
    </div>
  );
}
