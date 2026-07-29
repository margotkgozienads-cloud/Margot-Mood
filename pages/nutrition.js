import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "margotMood_nutrition_v7_style";

const nutritionGoals = {
  calories: 1700,
  protein: 105,
};

const foods = [
  {
    name: "Mon petit-déjeuner habituel",
    cat: "Favoris",
    kcal: 102,
    protein: 12.5,
    note: "Skyr Danone coulis fraise · Eau de coco · Jus cranberry light",
  },
  {
    name: "Skyr Danone coulis fraise",
    cat: "Favoris",
    kcal: 102,
    protein: 12.5,
    note: "1 pot",
  },
  {
    name: "Banane",
    cat: "Favoris",
    kcal: 105,
    protein: 1,
    note: "1 unité",
  },
  {
    name: "Billes Koro chocolatées",
    cat: "Favoris",
    kcal: 36,
    protein: 5.8,
    note: "10 g",
  },
  {
    name: "Viande des Grisons",
    cat: "Favoris",
    kcal: 60,
    protein: 14,
    note: "40 g",
  },

  {
    name: "Skyr Danone coulis fraise",
    cat: "Frigo",
    kcal: 102,
    protein: 12.5,
    note: "1 pot",
  },
  {
    name: "Crème dessert chocolat protéinée Danone",
    cat: "Frigo",
    kcal: 90,
    protein: 6,
    note: "1 pot",
  },
  {
    name: "Cracker protéiné Karg’s",
    cat: "Frigo",
    kcal: 86,
    protein: 6.2,
    note: "1 cracker",
  },
  {
    name: "Tortilla protéinée Gerlinéa",
    cat: "Frigo",
    kcal: 140,
    protein: 13,
    note: "1 tortilla",
  },
  {
    name: "Jambon de dinde",
    cat: "Frigo",
    kcal: 60,
    protein: 12,
    note: "2 tranches",
  },
  {
    name: "Viande des Grisons",
    cat: "Frigo",
    kcal: 60,
    protein: 14,
    note: "40 g",
  },
  {
    name: "Carré Frais 0 %",
    cat: "Frigo",
    kcal: 25,
    protein: 3,
    note: "1 portion",
  },
  {
    name: "Petit suisse",
    cat: "Frigo",
    kcal: 50,
    protein: 4,
    note: "1 pot",
  },
  {
    name: "Billes Koro chocolatées",
    cat: "Frigo",
    kcal: 36,
    protein: 5.8,
    note: "10 g",
  },
  {
    name: "Banane",
    cat: "Frigo",
    kcal: 105,
    protein: 1,
    note: "1 unité",
  },
  {
    name: "Melon",
    cat: "Frigo",
    kcal: 70,
    protein: 1,
    note: "200 g",
  },
  {
    name: "Pastèque",
    cat: "Frigo",
    kcal: 60,
    protein: 1,
    note: "200 g",
  },
  {
    name: "Houmous",
    cat: "Frigo",
    kcal: 140,
    protein: 4,
    note: "50 g",
  },

  {
    name: "Bowl Thaï au poulet",
    cat: "PrepMyMeal",
    kcal: 330,
    protein: 50,
    note: "Top perte de poids · 1 portion 500 g",
  },
  {
    name: "Poulet, riz & brocoli",
    cat: "PrepMyMeal",
    kcal: 455,
    protein: 41.5,
    note: "Équilibré · 1 portion 500 g",
  },
  {
    name: "Paëlla au poulet",
    cat: "PrepMyMeal",
    kcal: 490,
    protein: 40,
    note: "Perte de poids · 1 portion 500 g",
  },
  {
    name: "Bolognaise vegan",
    cat: "PrepMyMeal",
    kcal: 552,
    protein: 41,
    note: "Vegan · 1 portion 500 g",
  },
  {
    name: "Saumon & pâtes protéinées crème",
    cat: "PrepMyMeal",
    kcal: 565,
    protein: 47,
    note: "Protéiné · 1 portion 500 g",
  },
  {
    name: "Wok nouilles sauce cacahuètes",
    cat: "PrepMyMeal",
    kcal: 570,
    protein: 43.5,
    note: "Riche · 1 portion 500 g",
  },
  {
    name: "Butter Chicken",
    cat: "PrepMyMeal",
    kcal: 625,
    protein: 45,
    note: "Plaisir · 1 portion 500 g",
  },
  {
    name: "Pâtes protéinées bolognaise bœuf",
    cat: "PrepMyMeal",
    kcal: 630,
    protein: 43,
    note: "Dense · 1 portion 500 g",
  },

  {
    name: "Pinte bière blonde",
    cat: "Alcool",
    kcal: 220,
    protein: 0,
    note: "1 pinte",
  },
  {
    name: "Spritz",
    cat: "Alcool",
    kcal: 150,
    protein: 0,
    note: "1 verre",
  },
  {
    name: "Verre de rosé",
    cat: "Alcool",
    kcal: 90,
    protein: 0,
    note: "1 verre",
  },
];

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default function Nutrition() {
  const [activeTab, setActiveTab] = useState("Favoris");
  const [log, setLog] = useState([]);
  const [customName, setCustomName] = useState("");
  const [customCalories, setCustomCalories] = useState("");
  const [customProtein, setCustomProtein] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setLog(JSON.parse(saved));
      }
    } catch (error) {
      console.log("Erreur chargement nutrition", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  }, [log]);

  const today = todayKey();

  const todayLog = useMemo(() => {
    return log.filter((item) => item.date === today);
  }, [log, today]);

  const totalCalories = todayLog.reduce((sum, item) => sum + Number(item.kcal || 0), 0);
  const totalProtein = todayLog.reduce((sum, item) => sum + Number(item.protein || 0), 0);

  const caloriesPercent = Math.min(
    100,
    Math.round((totalCalories / nutritionGoals.calories) * 100)
  );

  const proteinPercent = Math.min(
    100,
    Math.round((totalProtein / nutritionGoals.protein) * 100)
  );

  function addFood(food) {
    const entry = {
      id: `${Date.now()}-${Math.random()}`,
      date: today,
      name: food.name,
      kcal: Number(food.kcal) || 0,
      protein: Number(food.protein) || 0,
      note: food.note || "",
      cat: food.cat || "Libre",
    };

    setLog((prev) => [...prev, entry]);
  }

  function addCustomFood() {
    const entry = {
      id: `${Date.now()}-${Math.random()}`,
      date: today,
      name: customName || "Aliment personnalisé",
      kcal: Number(customCalories) || 0,
      protein: Number(customProtein) || 0,
      note: "Ajout manuel",
      cat: "Libre",
    };

    setLog((prev) => [...prev, entry]);

    setCustomName("");
    setCustomCalories("");
    setCustomProtein("");
  }

  function removeFood(id) {
    setLog((prev) => prev.filter((item) => item.id !== id));
  }

  function resetToday() {
    setLog((prev) => prev.filter((item) => item.date !== today));
  }

  const tabs = ["Favoris", "Frigo", "PrepMyMeal", "Alcool", "Ajouter"];

  const visibleFoods = foods.filter((food) => food.cat === activeTab);

  return (
    <div className="nutritionPage">
      <header className="nutritionHero">
        <div>
          <h1>Nutrition</h1>
          <p>Calories, protéines et petits ajouts rapides façon V7.</p>
        </div>
        <div className="heroEmoji">🍽️</div>
      </header>

      <section className="summaryGrid">
        <div className="summaryCard">
          <div className="summaryTop">
            <span>🔥 Calories</span>
            <strong>
              {Math.round(totalCalories)} / {nutritionGoals.calories}
            </strong>
          </div>
          <div className="bar">
            <i style={{ width: `${caloriesPercent}%` }} />
          </div>
          <small>{caloriesPercent}% de ton objectif</small>
        </div>

        <div className="summaryCard">
          <div className="summaryTop">
            <span>💪 Protéines</span>
            <strong>
              {totalProtein.toFixed(1)} / {nutritionGoals.protein} g
            </strong>
          </div>
          <div className="bar">
            <i style={{ width: `${proteinPercent}%` }} />
          </div>
          <small>{proteinPercent}% de ton objectif</small>
        </div>
      </section>

      <section className="panel">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Favoris" && "⭐ "}
              {tab === "Frigo" && "🧊 "}
              {tab === "PrepMyMeal" && "🍱 "}
              {tab === "Alcool" && "🍷 "}
              {tab === "Ajouter" && "➕ "}
              {tab}
            </button>
          ))}
        </div>

        {activeTab !== "Ajouter" ? (
          <div className="foodList">
            {visibleFoods.map((food, index) => (
              <div className="foodCard" key={`${food.name}-${index}`}>
                <div>
                  <strong>{food.name}</strong>
                  <p>{food.note}</p>
                  <small>
                    {food.kcal} kcal · {food.protein} g protéines
                  </small>
                </div>

                <button className="plusButton" onClick={() => addFood(food)}>
                  +
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="addBox">
            <h2>Ajouter un aliment</h2>

            <label>
              Nom
              <input
                value={customName}
                onChange={(event) => setCustomName(event.target.value)}
                placeholder="Ex : Yaourt, pâtes, chocolat..."
              />
            </label>

            <label>
              Calories
              <input
                value={customCalories}
                onChange={(event) => setCustomCalories(event.target.value)}
                type="number"
                placeholder="Ex : 150"
              />
            </label>

            <label>
              Protéines
              <input
                value={customProtein}
                onChange={(event) => setCustomProtein(event.target.value)}
                type="number"
                placeholder="Ex : 12"
              />
            </label>

            <button className="mainButton" onClick={addCustomFood}>
              Ajouter au journal du jour
            </button>
          </div>
        )}
      </section>

      <section className="panel">
        <div className="journalHeader">
          <div>
            <h2>Journal du jour</h2>
            <p>{todayLog.length} aliment(s) ajouté(s)</p>
          </div>

          {todayLog.length > 0 && (
            <button className="ghostButton" onClick={resetToday}>
              Vider
            </button>
          )}
        </div>

        <div className="journalList">
          {todayLog.length === 0 ? (
            <div className="emptyState">
              Rien ajouté aujourd’hui.
              <br />
              Utilise les boutons + pour remplir ton journal.
            </div>
          ) : (
            todayLog
              .slice()
              .reverse()
              .map((item) => (
                <div className="journalItem" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.note}</p>
                    <small>
                      {item.kcal} kcal · {item.protein} g protéines
                    </small>
                  </div>

                  <button className="deleteButton" onClick={() => removeFood(item.id)}>
                    ×
                  </button>
                </div>
              ))
          )}
        </div>
      </section>

      <style jsx>{`
        .nutritionPage {
          min-height: 100vh;
          padding: 18px 14px 110px;
          background: #f8f3ec;
          color: #453a33;
          font-family: -apple-system, BlinkMacSystemFont, "Avenir Next", "Segoe UI",
            sans-serif;
        }

        .nutritionHero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 22px 18px;
          margin-bottom: 14px;
          border-radius: 32px;
          background: linear-gradient(145deg, #fffaf3, #f0e4d8);
          border: 1px solid #eaded1;
          box-shadow: 0 14px 36px rgba(88, 72, 58, 0.1);
        }

        .nutritionHero h1 {
          margin: 0;
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: 2rem;
        }

        .nutritionHero p {
          margin: 6px 0 0;
          color: #8d8178;
          font-size: 0.92rem;
          line-height: 1.35;
        }

        .heroEmoji {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: #fffdf8;
          font-size: 1.8rem;
          border: 1px solid #eaded1;
        }

        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 12px;
        }

        .summaryCard,
        .panel {
          background: #fffaf3;
          border: 1px solid #eaded1;
          border-radius: 26px;
          padding: 14px;
          box-shadow: 0 14px 36px rgba(88, 72, 58, 0.1);
        }

        .summaryTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .summaryTop span {
          color: #8d8178;
          font-size: 0.88rem;
        }

        .summaryTop strong {
          font-size: 1rem;
          text-align: right;
        }

        .summaryCard small {
          display: block;
          margin-top: 8px;
          color: #8d8178;
        }

        .bar {
          height: 10px;
          overflow: hidden;
          border-radius: 999px;
          background: #efe5da;
        }

        .bar i {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #9aa98f, #64715e);
        }

        .panel {
          margin-bottom: 12px;
        }

        .tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 10px;
          margin-bottom: 10px;
          -webkit-overflow-scrolling: touch;
        }

        .tabs::-webkit-scrollbar {
          display: none;
        }

        .tabs button {
          flex: 0 0 auto;
          border: 1px solid #eaded1;
          background: #fffdf8;
          color: #8d8178;
          border-radius: 999px;
          padding: 9px 13px;
          font-size: 0.84rem;
          font-weight: 600;
        }

        .tabs button.active {
          color: white;
          border-color: transparent;
          background: linear-gradient(135deg, #64715e, #9aa98f);
        }

        .foodList,
        .journalList {
          display: grid;
          gap: 9px;
        }

        .foodCard,
        .journalItem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 13px;
          border-radius: 22px;
          background: #fffdf8;
          border: 1px solid #eaded1;
        }

        .foodCard strong,
        .journalItem strong {
          display: block;
          font-size: 0.95rem;
          line-height: 1.25;
        }

        .foodCard p,
        .journalItem p {
          margin: 4px 0;
          color: #8d8178;
          font-size: 0.82rem;
          line-height: 1.3;
        }

        .foodCard small,
        .journalItem small {
          color: #64715e;
          font-weight: 650;
          font-size: 0.8rem;
        }

        .plusButton {
          flex: 0 0 auto;
          width: 38px;
          height: 38px;
          border: 0;
          border-radius: 999px;
          color: white;
          background: #64715e;
          font-size: 1.4rem;
          line-height: 1;
          font-weight: 600;
        }

        .deleteButton {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border: 0;
          border-radius: 999px;
          color: #453a33;
          background: #efe5da;
          font-size: 1.2rem;
        }

        .addBox {
          display: grid;
          gap: 10px;
        }

        .addBox h2,
        .journalHeader h2 {
          margin: 0;
          font-size: 1.15rem;
        }

        .addBox label {
          display: grid;
          gap: 6px;
          color: #8d8178;
          font-size: 0.86rem;
          font-weight: 600;
        }

        input {
          width: 100%;
          border: 1px solid #eaded1;
          background: #fffdf8;
          border-radius: 18px;
          padding: 12px;
          color: #453a33;
          font: inherit;
        }

        .mainButton,
        .ghostButton {
          border: 0;
          border-radius: 999px;
          padding: 11px 14px;
          font-weight: 700;
          font: inherit;
        }

        .mainButton {
          color: white;
          background: #64715e;
        }

        .ghostButton {
          color: #453a33;
          background: #efe5da;
        }

        .journalHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 12px;
        }

        .journalHeader p {
          margin: 4px 0 0;
          color: #8d8178;
          font-size: 0.86rem;
        }

        .emptyState {
          padding: 18px;
          border-radius: 22px;
          background: #fffdf8;
          color: #8d8178;
          text-align: center;
          line-height: 1.45;
          border: 1px dashed #eaded1;
        }

        @media (max-width: 560px) {
          .summaryGrid {
            grid-template-columns: 1fr 1fr;
          }

          .nutritionHero {
            padding: 18px 14px;
          }

          .nutritionHero h1 {
            font-size: 1.8rem;
          }

          .summaryTop {
            display: block;
          }

          .summaryTop strong {
            display: block;
            text-align: left;
            margin-top: 4px;
          }
        }
      `}</style>
    </div>
  );
}
