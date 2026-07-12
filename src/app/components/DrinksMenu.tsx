import React from "react";
import type { Lang } from "../App";

interface DrinkItem {
  name: { en: string; sq: string };
  description?: { en: string; sq: string };
  size?: string;
  price: string;
}

interface DrinkCategory {
  title: { en: string; sq: string };
  items: DrinkItem[];
}

interface SpiritItem {
  name: string;
  type: { en: string; sq: string };
  price: string;
}

const drinkCategories: DrinkCategory[] = [
  {
    title: { en: "Cocktails", sq: "Kokteje" },
    items: [
      { name: { en: "Lake Spritz", sq: "Lake Spritz" }, description: { en: "Aperol, white vermouth, peach, rose soda", sq: "Aperol, vermouth i bardhë, pjeshkë, soda trëndafili" }, price: "650" },
      { name: { en: "Summer Smash", sq: "Summer Smash" }, description: { en: "Gin, mango, elderflower, cardamom, mint", sq: "Gin, mango, lule arre, kardamom, nenexhik" }, price: "700" },
      { name: { en: "Bahama Mama", sq: "Bahama Mama" }, description: { en: "Rum, coconut, pineapple, red fruit syrup", sq: "Rum, kokos, ananas, shurup frutash të kuqe" }, price: "600" },
      { name: { en: "Marshmallow", sq: "Marshmallow" }, description: { en: "Vodka, bubblegum, almond, orange liqueur", sq: "Vodkë, bubblegum, bajame, likeri portokalli" }, price: "650" },
      { name: { en: "Amigos", sq: "Amigos" }, description: { en: "Tequila blanco, passion fruit, vanilla, bitter liqueur, citrus", sq: "Tequila blanco, frut pasioni, vanilje, likeri bitter, citrus" }, price: "700" },
      { name: { en: "Beach Comber", sq: "Beach Comber" }, description: { en: "Aged rum, tropical fruits, Caribbean spices", sq: "Rum i plakur, fruta tropikale, erëza karibike" }, price: "700" },
      { name: { en: "All Classic Cocktails", sq: "Të Gjitha Koktejat Klasike" }, description: { en: "Any classic cocktail", sq: "Çdo koktej klasik" }, price: "600" },
    ],
  },
  {
    title: { en: "Mocktails — Alcohol Free", sq: "Mokteje — Pa Alkool" },
    items: [
      { name: { en: "Passion Tai", sq: "Passion Tai" }, description: { en: "Pineapple, passion fruit, almond", sq: "Ananas, frut pasioni, bajame" }, price: "500" },
      { name: { en: "Coconut Matcha Cooler", sq: "Coconut Matcha Cooler" }, description: { en: "Matcha, coconut milk, vanilla syrup, pineapple", sq: "Matcha, qumësht kosi, shurup vanilje, ananas" }, price: "500" },
      { name: { en: "Red Velvet", sq: "Red Velvet" }, description: { en: "Strawberry, mint, lime, bubbles", sq: "Luleshtrydhe, nenexhik, lime, gaz" }, price: "450" },
      { name: { en: "Home Made Lemonade", sq: "Limonadë Shtëpie" }, description: { en: "Fresh lemon, agave syrup, soda water", sq: "Limon i freskët, shurup agave, ujë sodë" }, price: "350" },
      { name: { en: "Palomita", sq: "Palomita" }, description: { en: "Fresh grapefruit soda, lime juice, agave syrup", sq: "Soda grejpfrut i freskët, lëng lime, shurup agave" }, price: "500" },
    ],
  },
  {
    title: { en: "Wines", sq: "Verëra" },
    items: [
      { name: { en: "White Wine", sq: "Verë e Bardhë" }, description: { en: "Glass", sq: "Gotë" }, price: "350" },
      { name: { en: "Red Wine", sq: "Verë e Kuqe" }, description: { en: "Glass", sq: "Gotë" }, price: "350" },
      { name: { en: "Prosecco", sq: "Prosecco" }, description: { en: "Glass", sq: "Gotë" }, price: "400" },
    ],
  },
  {
    title: { en: "Coffees", sq: "Kafe" },
    items: [
      { name: { en: "Espresso", sq: "Espresso" }, price: "140" },
      { name: { en: "Double Espresso", sq: "Espresso Dyfishe" }, price: "180" },
      { name: { en: "Americano", sq: "Americano" }, price: "250" },
      { name: { en: "Cappuccino", sq: "Cappuccino" }, price: "250" },
      { name: { en: "Freddo Espresso", sq: "Freddo Espresso" }, price: "270" },
      { name: { en: "Freddo Cappuccino", sq: "Freddo Cappuccino" }, price: "300" },
      { name: { en: "Frappé Iced Coffee", sq: "Frappé" }, price: "300" },
      { name: { en: "Cold Chocolate", sq: "Çokollatë e Ftohtë" }, price: "290" },
      { name: { en: "Matcha Latte", sq: "Matcha Latte" }, description: { en: "Cold or hot; ginger or strawberry option", sq: "I ftohtë ose i nxehtë; mundësi xhingeri ose luleshtrydhe" }, price: "250" },
    ],
  },
  {
    title: { en: "Refreshments", sq: "Pijet Freskuese" },
    items: [
      { name: { en: "Pepsi", sq: "Pepsi" }, price: "190" },
      { name: { en: "Glina Gaz", sq: "Glina Gaz" }, price: "190" },
      { name: { en: "Ivi", sq: "Ivi" }, price: "190" },
      { name: { en: "Glina Lemon", sq: "Glina Limon" }, price: "190" },
      { name: { en: "Lipton", sq: "Lipton" }, price: "190" },
      { name: { en: "Bravo", sq: "Bravo" }, price: "200" },
      { name: { en: "7UP", sq: "7UP" }, price: "190" },
      { name: { en: "Red Bull", sq: "Red Bull" }, price: "350" },
      { name: { en: "Water", sq: "Ujë" }, price: "90" },
    ],
  },
  {
    title: { en: "Beers", sq: "Birra" },
    items: [
      { name: { en: "Corona", sq: "Corona" }, size: "0.33L", price: "400" },
      { name: { en: "Budweiser", sq: "Budweiser" }, size: "0.33L", price: "350" },
      { name: { en: "Estrella Galicia", sq: "Estrella Galicia" }, size: "0.33L", price: "350" },
      { name: { en: "Bitburger", sq: "Bitburger" }, size: "0.33L", price: "400" },
      { name: { en: "Tuborg", sq: "Tuborg" }, size: "0.33L", price: "350" },
      { name: { en: "Stella Artois", sq: "Stella Artois" }, size: "0.33L", price: "300" },
      { name: { en: "Heineken", sq: "Heineken" }, size: "0.33L", price: "350" },
      { name: { en: "Heineken Non-Alcoholic", sq: "Heineken Pa Alkool" }, price: "350" },
      { name: { en: "Benediktiner Hell", sq: "Benediktiner Hell" }, size: "0.5L", price: "500" },
      { name: { en: "Benediktiner Wheat", sq: "Benediktiner Grurë" }, size: "0.5L", price: "550" },
      { name: { en: "Elbar Draft", sq: "Elbar Fuçi" }, size: "0.25L / 0.5L", price: "200 / 350" },
      { name: { en: "Carlsberg Draft", sq: "Carlsberg Fuçi" }, size: "0.25L / 0.5L", price: "250 / 400" },
    ],
  },
];

const spirits: SpiritItem[] = [
  { name: "Hendrick's Gin", type: { en: "gin", sq: "xhin" }, price: "600" },
  { name: "Tanqueray Gin", type: { en: "gin", sq: "xhin" }, price: "550" },
  { name: "Gin Mare", type: { en: "gin", sq: "xhin" }, price: "750" },
  { name: "Gordon's Non-Alcoholic", type: { en: "gin · alcohol free", sq: "xhin · pa alkool" }, price: "550" },
  { name: "Ketel One", type: { en: "vodka", sq: "vodkë" }, price: "700" },
  { name: "Grey Goose", type: { en: "vodka", sq: "vodkë" }, price: "800" },
  { name: "Belvedere", type: { en: "vodka", sq: "vodkë" }, price: "800" },
  { name: "Smirnoff", type: { en: "vodka", sq: "vodkë" }, price: "500" },
  { name: "Bacardi", type: { en: "rum", sq: "rum" }, price: "500" },
  { name: "Havana 7", type: { en: "rum", sq: "rum" }, price: "650" },
  { name: "Sailor Jerry Spiced Rum", type: { en: "rum", sq: "rum" }, price: "600" },
  { name: "Johnnie Walker Red Label", type: { en: "whiskey", sq: "uiski" }, price: "500" },
  { name: "Johnnie Walker Black Label", type: { en: "whiskey", sq: "uiski" }, price: "650" },
  { name: "Tullamore", type: { en: "whiskey", sq: "uiski" }, price: "600" },
  { name: "Bulleit Bourbon", type: { en: "bourbon", sq: "bourbon" }, price: "700" },
  { name: "Jose Cuervo", type: { en: "tequila", sq: "tekila" }, price: "600" },
  { name: "Mezcal Verde", type: { en: "mezcal", sq: "mezcal" }, price: "900" },
  { name: "Campari", type: { en: "aperitif", sq: "aperitif" }, price: "500" },
  { name: "Amaro Montenegro", type: { en: "amaro", sq: "amaro" }, price: "500" },
  { name: "Jägermeister", type: { en: "liqueur", sq: "liker" }, price: "500" },
  { name: "Baileys", type: { en: "liqueur", sq: "liker" }, price: "500" },
  { name: "Limoncello", type: { en: "liqueur", sq: "liker" }, price: "500" },
];

function DrinkCategorySection({ category, lang }: { category: DrinkCategory; lang: Lang }) {
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
              {item.size && (
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--muted-foreground)",
                    marginLeft: "8px",
                  }}
                >
                  {item.size}
                </span>
              )}
              {item.description && (
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--muted-foreground)",
                    marginTop: "2px",
                    fontStyle: "italic",
                  }}
                >
                  {item.description[lang]}
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
                minWidth: "60px",
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

function SpiritsSection({ lang }: { lang: Lang }) {
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
        {lang === "en" ? "Spirits" : "Alkoole"}
      </h3>
      <div className="flex flex-col gap-3">
        {spirits.map((item) => (
          <div key={item.name} className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  color: "var(--foreground)",
                  fontSize: "1rem",
                }}
              >
                {item.name}
              </span>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.72rem",
                  color: "var(--muted-foreground)",
                  marginTop: "1px",
                  letterSpacing: "0.08em",
                  textTransform: "lowercase",
                }}
              >
                {item.type[lang]}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                color: "var(--primary)",
                fontSize: "0.95rem",
                whiteSpace: "nowrap",
                minWidth: "60px",
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

export function DrinksMenu({ lang }: { lang: Lang }) {
  return (
    <div>
      {drinkCategories.map((cat) => (
        <DrinkCategorySection key={cat.title.en} category={cat} lang={lang} />
      ))}
      <SpiritsSection lang={lang} />
    </div>
  );
}
