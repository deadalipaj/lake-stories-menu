import React from "react";
import type { Lang } from "../App";

interface MenuItem {
  name: { en: string; sq: string };
  ingredients?: { en: string; sq: string };
  price: string;
}

interface MenuCategory {
  title: { en: string; sq: string };
  items: MenuItem[];
  notes?: { en: string; sq: string }[];
}

const foodCategories: MenuCategory[] = [
  {
    title: { en: "Appetizers / Antipasta", sq: "Antipasta" },
    items: [
      {
        name: { en: "Tzatziki with Pita", sq: "Tzatziki me Pita" },
        ingredients: { en: "Yogurt, garlic, cucumber, olive oil", sq: "Kos, hudhër, kastravec, vaj ulliri" },
        price: "4.50",
      },
      {
        name: { en: "Dolmades with Yogurt", sq: "Dollma me Kos" },
        ingredients: { en: "Traditional dolmades, vine leaves, yogurt, red pepper", sq: "Dollma tradicionale, gjethe rrushi, kos, piper i kuq" },
        price: "6.00",
      },
      {
        name: { en: "Bouyiourdi", sq: "Bouyiourdi" },
        ingredients: { en: "Feta cheese, tomato, green peppers", sq: "Djathë feta, domate, speca jeshilë" },
        price: "4.50",
      },
      {
        name: { en: "Meat Balls", sq: "Qofte" },
        ingredients: { en: "Homemade beef meatballs with tomato sauce", sq: "Qofte viçi shtëpie me salcë domate" },
        price: "6.50",
      },
      {
        name: { en: "French Fries", sq: "Patate të Skuqura" },
        price: "3.50",
      },
      {
        name: { en: "French Fries with Eggs", sq: "Patate të Skuqura me Vezë" },
        price: "6.50",
      },
      {
        name: { en: "Bruschetta", sq: "Brusketa" },
        ingredients: { en: "Fresh dough, tomato, garlic, parsley, olive oil, mozzarella", sq: "Brumë i freskët, domate, hudhër, majdanoz, vaj ulliri, mozzarella" },
        price: "6.00",
      },
    ],
  },
  {
    title: { en: "Salads", sq: "Sallata" },
    items: [
      {
        name: { en: "Greek Salad", sq: "Sallata Greke" },
        ingredients: { en: "Tomato, cucumber, green peppers, olives, capers, feta, olive oil", sq: "Domate, trangull, speca jeshilë, ullinj, kaperi, feta, vaj ulliri" },
        price: "5.50",
      },
      {
        name: { en: "Caesar Salad", sq: "Sallata Cezar" },
        ingredients: { en: "Chicken, toasted bread, corn, lettuce, caesar sauce, parmesan", sq: "Pulë, bukë e thekur, misër, marulë, salcë cezar, parmezan" },
        price: "6.50",
      },
      {
        name: { en: "Arugula Salad", sq: "Sallata me Rukola" },
        ingredients: { en: "Arugula, sun-dried tomato, parmesan, balsamic, virgin olive oil", sq: "Rukola, domate të thara, parmezan, balsamik, vaj ulliri i virgjër" },
        price: "5.50",
      },
      {
        name: { en: "Fruit Salad", sq: "Sallatë Frutash" },
        ingredients: { en: "Seasonal fruits", sq: "Fruta të stinës" },
        price: "5.00",
      },
    ],
  },
  {
    title: { en: "Main Dishes", sq: "Pjata Kryesore" },
    items: [
      { name: { en: "Chicken Fillet", sq: "Fileto Pule" }, price: "11.00" },
      { name: { en: "Beef Fillet", sq: "Fileto Viçi" }, price: "" },
      {
        name: { en: "Qebab", sq: "Qebap" },
        ingredients: { en: "4 pcs qebab, 2 pita, yogurt, sauce, onions, paprika", sq: "4 copë qebap, 2 pite, kos, salcë, qepë, paprika" },
        price: "10.00",
      },
    ],
  },
  {
    title: { en: "Pizza", sq: "Pizza" },
    items: [
      {
        name: { en: "Margherita", sq: "Margarita" },
        ingredients: { en: "Fresh dough, tomato sauce, mozzarella", sq: "Brumë i freskët, salcë domate, mozzarella" },
        price: "7.50",
      },
      {
        name: { en: "Pepperoni", sq: "Pepperoni" },
        ingredients: { en: "Fresh dough, tomato sauce, pepperoni, mozzarella", sq: "Brumë i freskët, salcë domate, pepperoni, mozzarella" },
        price: "9.50",
      },
      {
        name: { en: "Greek", sq: "Greke" },
        ingredients: { en: "Fresh dough, tomato sauce, green peppers, black olives, mozzarella, feta", sq: "Brumë i freskët, salcë domatee, speca jeshilë, ullinj të zinj, mozzarella, feta" },
        price: "10.00",
      },
      {
        name: { en: "White", sq: " E Bardhë" },
        ingredients: { en: "Fresh dough, fresh garlic, mozzarella, virgin olive oil", sq: "Brumë i freskët, hudhër e freskët, mozzarella, vaj ulliri i virgjër" },
        price: "7.50",
      },
      {
        name: { en: "Chicken Pizza", sq: "Pizza me Pulë" },
        ingredients: { en: "Fresh dough, tomato sauce, chicken, mushrooms, mozzarella, BBQ sauce", sq: "Brumë i freskët, salcë domate, pulë, kërpudha, mozzarella, salcë BBQ" },
        price: "11.00",
      },
      {
        name: { en: "Lake Stories Pizza", sq: "Pizza Lake Stories" },
        ingredients: { en: "Fresh dough, beef prosciutto, black olives, arugula, tomato sauce, mozzarella", sq: "Brumë i freskët, proshutë viçi, ullinj të zinj, rukola, salcë domate, mozzarella" },
        price: "10.00",
      },
    ],
  },
  {
    title: { en: "Snacks", sq: "Snacks" },
    items: [
      {
        name: { en: "Chicken Nuggets", sq: "Nuggets Pule" },
        ingredients: { en: "7 chicken nuggets + french fries", sq: "7 nuggets pule + patate të skuqura" },
        price: "7.50",
      },
      {
        name: { en: "Club Sandwich", sq: "Club Sanduiç" },
        ingredients: { en: "Cheese, chicken prosciutto, tomato, lettuce, mayonnaise, french fries", sq: "Djathë, proshutë pule, domate, marulë, majonezë, patate të skuqura" },
        price: "7.50",
      },
      {
        name: { en: "Toast", sq: "Tost" },
        ingredients: { en: "Cheese, chicken prosciutto, chips", sq: "Djathë, proshutë pule, patate çips" },
        price: "2.50",
      },
      {
        name: { en: "French Fries", sq: "Patate të Skuqura" },
        price: "3.50",
      },
    ],
  },
  {
    title: { en: "Sandwiches", sq: "Sanduiçe" },
    items: [
      {
        name: { en: "Club Sandwich", sq: "Club Sanduiç" },
        ingredients: { en: "Cheese, chicken prosciutto, tomato, lettuce, mayonnaise, french fries", sq: "Djathë, proshutë pule, domate, marulë, majonezë, patate të skuqura" },
        price: "7.50",
      },
      {
        name: { en: "Toast", sq: "Tost" },
        ingredients: { en: "Cheese, chicken prosciutto, chips", sq: "Djathë, proshutë pule, patate çips" },
        price: "2.50",
      },
    ],
  },
];

function CategorySection({ category, lang }: { category: MenuCategory; lang: Lang }) {
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
      {category.notes && (
        <div
          className="mt-4 p-3 rounded-lg"
          style={{ background: "var(--muted)", borderLeft: "3px solid var(--secondary)" }}
        >
          {category.notes.map((note) => (
            <p
              key={note.en}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.82rem",
                color: "var(--muted-foreground)",
              }}
            >
              {note[lang]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export function FoodMenu({ lang }: { lang: Lang }) {
  return (
    <div>
      {foodCategories.map((cat) => (
        <CategorySection key={cat.title.en} category={cat} lang={lang} />
      ))}
    </div>
  );
}
